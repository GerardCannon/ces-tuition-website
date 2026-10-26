import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const shellPath = path.join(distDir, 'index.html')
const sourceHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8')
const shell = fs.readFileSync(shellPath, 'utf8')
const entryPath = path.join(root, '.ssr-build', 'entry-server.js')

if (!fs.existsSync(entryPath)) {
  throw new Error(`Missing SSR bundle at ${entryPath}. The client build did not produce it.`)
}

const { prerenderManifest } = await import(pathToFileURL(entryPath).href)
const renderedRoutes = await prerenderManifest()

const ICON_MARKER = '    <link rel="icon"'

function headRegion(html, label) {
  const start = html.indexOf('    <title>')
  const end = html.indexOf(ICON_MARKER)
  if (start < 0 || end < 0 || end <= start) {
    throw new Error(`${label} is missing the <title> block in front of the icon link`)
  }
  return { start, end, block: html.slice(start, end) }
}

function jsonLdElement(html) {
  return html.match(/[ \t]*<script type="application\/ld\+json">[\s\S]*?<\/script>/)?.[0] ?? null
}

function jsonLdValue(html, label) {
  const element = jsonLdElement(html)
  if (!element) throw new Error(`${label} is missing JSON-LD`)
  const raw = element.replace(/<\/?script[^>]*>/g, '')
  return JSON.parse(raw)
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right)
}

const sourceHead = headRegion(sourceHtml, 'index.html').block
const shellHead = headRegion(shell, 'dist/index.html').block
if (sourceHead !== shellHead) {
  throw new Error(
    'Vite rewrote the home page head tags while building the shell. The published home page would no longer match index.html.',
  )
}

const sourceJsonLd = jsonLdElement(sourceHtml)
const shellJsonLd = jsonLdElement(shell)
if (!sourceJsonLd || sourceJsonLd !== shellJsonLd) {
  throw new Error('Vite rewrote the home page JSON-LD while building the shell.')
}

const home = renderedRoutes.find((route) => route.id === 'home')
if (!home) throw new Error('Missing the home route')
if (home.headHtml !== sourceHead) {
  throw new Error(
    'The home route in src/routes.ts does not match the <head> in index.html. Update both together.\n' +
      `--- index.html ---\n${sourceHead}\n--- src/routes.ts ---\n${home.headHtml}`,
  )
}
if (!sameJson(home.head.jsonLd, jsonLdValue(sourceHtml, 'index.html'))) {
  throw new Error('The home route JSON-LD in src/routes.ts does not match the script in index.html.')
}

function inlineStylesheets(html) {
  const linkRe = /<link\s+[^>]*rel="stylesheet"[^>]*>/g
  const tags = [...html.matchAll(linkRe)].map((match) => match[0])
  if (tags.length === 0) throw new Error('Built HTML has no stylesheet to inline')
  let css = ''
  const seen = new Set()
  for (const tag of tags) {
    const href = tag.match(/href="([^"]+\.css)"/)?.[1]
    if (!href || /^https?:/i.test(href)) throw new Error(`Refusing to inline stylesheet: ${tag}`)
    if (seen.has(href)) continue
    seen.add(href)
    const file = path.join(distDir, href.replace(/^\//, ''))
    const relative = path.relative(distDir, file)
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      throw new Error(`Stylesheet escapes dist: ${href}`)
    }
    css += fs.readFileSync(file, 'utf8')
  }
  if (css.includes('</style')) throw new Error('Built CSS contains a closing style tag')
  linkRe.lastIndex = 0
  html = html.replace(linkRe, '')
  const headEnd = html.indexOf('</head>')
  if (headEnd < 0) throw new Error('Shell is missing </head>')
  return `${html.slice(0, headEnd)}    <style>${css}</style>\n${html.slice(headEnd)}`
}

const pages = renderedRoutes.map((route) => {
  let html = shell
  const htmlTag = '<html lang="en-GB">'
  if (!html.includes(htmlTag)) throw new Error('Shell is missing <html lang="en-GB">')
  html = html.replace(htmlTag, `<html lang="en-GB" data-route="${route.id}">`)

  const root = '<div id="root"></div>'
  const rootAt = html.indexOf(root)
  if (rootAt < 0 || html.indexOf(root, rootAt + 1) !== -1) {
    throw new Error('Shell should contain one empty <div id="root"></div>')
  }
  html = html.slice(0, rootAt) + `<div id="root">${route.html}</div>` + html.slice(rootAt + root.length)

  if (route.preserveTemplateHead) {
    if (!route.keepJsonLd) throw new Error(`${route.id} preserves the template head but drops JSON-LD`)
  } else {
    if (route.keepJsonLd) throw new Error(`${route.id} cannot keep the home JSON-LD`)
    const region = headRegion(html, route.id)
    html = html.slice(0, region.start) + route.headHtml + html.slice(region.end)
    const currentJsonLd = jsonLdElement(html)
    if (!currentJsonLd) throw new Error(`${route.id} lost the template JSON-LD before it could be replaced`)
    if (route.jsonLdHtml) {
      html = html.replace(currentJsonLd, () => route.jsonLdHtml)
    } else {
      html = html.replace(`\n${currentJsonLd}`, '')
    }
  }

  if (route.html.includes('This spark has encountered a runtime error')) {
    throw new Error(`${route.id} rendered the error fallback instead of the page`)
  }
  if (!html.includes(`data-route="${route.id}"`)) throw new Error(`${route.id} is missing data-route`)
  if (!html.includes('<script type="module"')) throw new Error(`${route.id} is missing the client bundle`)
  if (route.html.trim().length === 0) throw new Error(`${route.id} rendered an empty page`)

  return { route, html: inlineStylesheets(html) }
})

for (const page of pages) {
  const outputPath = path.join(distDir, page.route.output)
  const relative = path.relative(distDir, outputPath)
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(`Refusing to write outside dist: ${page.route.output}`)
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, page.html)
}

const homePage = pages.find((page) => page.route.id === 'home')
const homeHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
if (!homeHtml.includes(sourceHead) || !homeHtml.includes(sourceJsonLd)) {
  throw new Error('Published dist/index.html lost the home page head from index.html')
}
if (headRegion(homeHtml, 'dist/index.html').block !== sourceHead) {
  throw new Error('Published home page head no longer matches index.html')
}

const notFound = pages.find((page) => page.route.id === 'not-found')
if (!notFound) throw new Error('Missing the 404 page')
const notFoundHtml = notFound.html
if (!notFoundHtml.includes('<meta name="robots" content="noindex" />')) {
  throw new Error('404 page lost its noindex tag')
}
if (notFoundHtml.includes(home.head.title) || notFoundHtml.includes('application/ld+json')) {
  throw new Error('404 page still contains the home page title or JSON-LD')
}
if (notFoundHtml.includes('rel="canonical"')) {
  throw new Error('404 page should not declare a canonical URL')
}

function decodeEntities(value) {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (entity, body) => {
    if (body[0] === '#') {
      const code = body[1] === 'x' || body[1] === 'X' ? Number.parseInt(body.slice(2), 16) : Number.parseInt(body.slice(1), 10)
      return Number.isFinite(code) ? String.fromCodePoint(code) : entity
    }
    const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }
    return named[body] ?? entity
  })
}

function bodyText(html) {
  const body = html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? ''
  const stripped = body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
  return decodeEntities(stripped).replace(/\u00a0/g, ' ')
}

function wordCount(html) {
  return bodyText(html).split(/\s+/).filter(Boolean).length
}

const homeWords = wordCount(homeHtml)
if (homeWords < 500) {
  throw new Error(`Home page raw HTML has only ${homeWords} body words. The prerender did not include the page.`)
}
for (const phrase of ['UK-trained subject specialists', 'Chat with us on WhatsApp', 'Sharjah Media City']) {
  if (!bodyText(homeHtml).includes(phrase)) {
    throw new Error(`Home page raw HTML is missing "${phrase}"`)
  }
}
for (const phrase of ['Page not found', 'Back to the home page', 'Chat with us on WhatsApp']) {
  if (!bodyText(notFoundHtml).includes(phrase)) {
    throw new Error(`404 page raw HTML is missing "${phrase}"`)
  }
}

const lastmod = new Date().toISOString().slice(0, 10)
const sitemapRoutes = renderedRoutes.filter((route) => route.sitemap)
if (sitemapRoutes.some((route) => route.id === 'not-found' || !route.loc)) {
  throw new Error('Sitemap includes a route that should be excluded')
}
const urls = sitemapRoutes
  .map((route) => `  <url>\n    <loc>${route.loc.replace(/&/g, '&amp;')}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)

const robots = fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf8')
if (!robots.includes('Sitemap: https://www.cestuition.com/sitemap.xml')) {
  throw new Error('dist/robots.txt no longer points at the sitemap')
}

if (!homePage) throw new Error('Missing the written home page')
for (const page of pages) {
  console.log(`${page.route.loc ?? page.route.id} -> dist/${page.route.output} (${wordCount(page.html)} body words)`)
}
console.log(`sitemap.xml ${lastmod} (${sitemapRoutes.length} url${sitemapRoutes.length === 1 ? '' : 's'})`)
