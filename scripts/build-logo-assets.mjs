// Rebuild the public logo files from brand/final/.
// Swap an SVG in that folder, then run:
//   node scripts/build-logo-assets.mjs
//
// Header: logo-horizontal-color.svg. Footer: logo-horizontal-white.svg.
// Both are already transparent and include a 10-unit safety margin. The
// published SVGs are cropped to the artwork so that margin does not shrink
// the lockup inside the header and footer sizes.
//
// Favicon, apple-touch and manifest icons are the designer's finished files,
// copied rather than redrawn. og-image.jpg is composited from the colour lockup.
// logo-512.png is the finished icon-512.png (square, white tile).
//
// Footer stays white. On the plum footer #852E6D the white lockup is 8.05:1.
// The reversed file is for navy backgrounds (orange tick 2.61:1 and green tip
// 2.84:1 on this plum).

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import wawoff2 from 'wawoff2'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'brand', 'final')
const publicDir = path.join(root, 'public')

const HEADER_SOURCE = 'logo-horizontal-color.svg'
const FOOTER_SOURCE = 'logo-horizontal-white.svg'

const PLUM = '#852E6D'
const TEAL = '#3DC6B1'
const WHITE = '#FFFFFF'

const fontDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ces-logo-fonts-'))
const fontCache = fs.mkdtempSync(path.join(os.tmpdir(), 'ces-logo-fontcache-'))
const fontConfig = path.join(fontDir, 'fonts.conf')

async function prepareFonts() {
  const quicksand = fs.readFileSync(path.join(publicDir, 'fonts', 'quicksand-latin.woff2'))
  const ttf = await wawoff2.decompress(quicksand)
  fs.writeFileSync(path.join(fontDir, 'Quicksand.ttf'), Buffer.from(ttf))
  fs.writeFileSync(
    fontConfig,
    `<?xml version="1.0"?>
<fontconfig>
  <dir>${fontDir}</dir>
  <cachedir>${fontCache}</cachedir>
  <include ignore_missing="yes">/etc/fonts/fonts.conf</include>
</fontconfig>
`,
  )
  process.env.FONTCONFIG_FILE = fontConfig
  spawnSync('fc-cache', ['-f', fontDir], { env: process.env, stdio: 'ignore' })
}

function readSource(name) {
  const file = path.join(sourceDir, name)
  if (!fs.existsSync(file)) throw new Error(`Missing source file: ${file}`)
  return fs.readFileSync(file)
}

function parseViewBox(svg) {
  const match = svg.match(/viewBox="\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*"/)
  if (!match) throw new Error('SVG is missing a viewBox')
  return { x: Number(match[1]), y: Number(match[2]), w: Number(match[3]), h: Number(match[4]) }
}

function setSvgBox(svg, viewBox, width, height) {
  return svg.replace(/<svg\b[^>]*>/, (tag) => {
    let next = /viewBox=/.test(tag)
      ? tag.replace(/viewBox="[^"]+"/, `viewBox="${viewBox}"`)
      : tag.replace('<svg', `<svg viewBox="${viewBox}"`)
    if (/\bwidth=/.test(next)) next = next.replace(/\bwidth="[^"]+"/, `width="${width}"`)
    else next = next.replace('<svg', `<svg width="${width}"`)
    if (/\bheight=/.test(next)) next = next.replace(/\bheight="[^"]+"/, `height="${height}"`)
    else next = next.replace('<svg', `<svg height="${height}"`)
    return next
  })
}

await prepareFonts()
const { default: sharp } = await import('sharp')

async function artworkLockup(fileName) {
  const svg = readSource(fileName).toString('utf8')
  const box = parseViewBox(svg)
  const raster = await sharp(Buffer.from(svg), { density: 216 }).ensureAlpha().png().toBuffer()
  const meta = await sharp(raster).metadata()
  const { data, info } = await sharp(raster).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  let minX = info.width
  let minY = info.height
  let maxX = -1
  let maxY = -1
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] > 8) {
        if (x < minX) minX = x
        if (y < minY) minY = y
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
      }
    }
  }
  if (maxX < 0) throw new Error(`${fileName} has no visible artwork`)
  const scaleX = meta.width / box.w
  const scaleY = meta.height / box.h
  const pad = 1.5
  const x = box.x + minX / scaleX - pad
  const y = box.y + minY / scaleY - pad
  const w = (maxX - minX + 1) / scaleX + pad * 2
  const h = (maxY - minY + 1) / scaleY + pad * 2
  const width = Math.max(1, Math.round(w))
  const height = Math.max(1, Math.round(h))
  return {
    svg: setSvgBox(svg, `${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`, width, height),
    width,
    height,
  }
}

async function renderSvg(svg, width, height) {
  return sharp(Buffer.from(svg), { density: 384 })
    .resize(width, height, { fit: 'fill', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()
}

function write(file, data) {
  fs.writeFileSync(path.join(publicDir, file), data)
  console.log(`public/${file}`)
}

function copyTo(sourceName, publicName) {
  write(publicName, readSource(sourceName))
}

const header = await artworkLockup(HEADER_SOURCE)
const footer = await artworkLockup(FOOTER_SOURCE)
write('logo-header.svg', header.svg)
write('logo-footer.svg', footer.svg)

copyTo('favicon.ico', 'favicon.ico')
copyTo('favicon.svg', 'favicon.svg')
copyTo('favicon-16.png', 'favicon-16x16.png')
copyTo('favicon-32.png', 'favicon-32x32.png')
copyTo('apple-touch-icon-180.png', 'apple-touch-icon.png')
copyTo('icon-192.png', 'android-chrome-192x192.png')
copyTo('icon-512.png', 'android-chrome-512x512.png')
copyTo('icon-512.png', 'logo-512.png')

const ogWidth = 1200
const ogHeight = 630
const ogLogoHeight = 132
const ogLogoWidth = Math.round(ogLogoHeight * (header.width / header.height))
const ogLogoLeft = 88
const ogLogoTop = 70
const platePadX = 22
const platePadY = 18
const ogLogo = await renderSvg(header.svg, ogLogoWidth, ogLogoHeight)
const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${ogWidth}" height="${ogHeight}" viewBox="0 0 ${ogWidth} ${ogHeight}">
  <rect width="${ogWidth}" height="${ogHeight}" fill="${PLUM}"/>
  <rect width="18" height="${ogHeight}" fill="${TEAL}"/>
  <rect x="${ogLogoLeft - platePadX}" y="${ogLogoTop - platePadY}" width="${ogLogoWidth + platePadX * 2}" height="${ogLogoHeight + platePadY * 2}" rx="18" fill="${WHITE}"/>
  <text x="88" y="318" fill="${WHITE}" font-family="Quicksand" font-weight="600" font-size="42">Online tuition for UAE families</text>
  <text x="88" y="378" fill="${WHITE}" font-family="Quicksand" font-weight="600" font-size="42">UK-trained subject specialists</text>
  <text x="88" y="548" fill="${WHITE}" font-family="Quicksand" font-weight="500" font-size="26">IGCSE · A-level · IB · American</text>
</svg>`
const ogBase = await sharp(Buffer.from(ogSvg)).resize(ogWidth, ogHeight).png().toBuffer()
write(
  'og-image.jpg',
  await sharp(ogBase)
    .composite([{ input: ogLogo, left: ogLogoLeft, top: ogLogoTop }])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
    .toBuffer(),
)

const assets = `// Generated by scripts/build-logo-assets.mjs. Re-run that script after swapping a source SVG.
export const logoHeader = {
  src: '/logo-header.svg',
  width: ${header.width},
  height: ${header.height},
} as const

export const logoFooter = {
  src: '/logo-footer.svg',
  width: ${footer.width},
  height: ${footer.height},
} as const
`
fs.writeFileSync(path.join(root, 'src', 'components', 'logoAssets.ts'), assets)
console.log(`src/components/logoAssets.ts header ${header.width}x${header.height} footer ${footer.width}x${footer.height}`)

const ico = fs.readFileSync(path.join(publicDir, 'favicon.ico'))
const count = ico.readUInt16LE(4)
const sizes = []
for (let i = 0; i < count; i += 1) {
  const w = ico[6 + i * 16] || 256
  const h = ico[6 + i * 16 + 1] || 256
  sizes.push(`${w}x${h}`)
}
if (!sizes.includes('16x16') || !sizes.includes('32x32')) {
  throw new Error(`favicon.ico sizes were ${sizes.join(', ')}`)
}
const ogMeta = await sharp(path.join(publicDir, 'og-image.jpg')).metadata()
if (ogMeta.width !== 1200 || ogMeta.height !== 630) {
  throw new Error(`og-image.jpg is ${ogMeta.width}x${ogMeta.height}`)
}
const logo512 = await sharp(path.join(publicDir, 'logo-512.png')).metadata()
if (logo512.width !== 512 || logo512.height !== 512) {
  throw new Error(`logo-512.png is ${logo512.width}x${logo512.height}`)
}
console.log(`favicon.ico ${sizes.join(', ')}`)
console.log('og-image.jpg 1200x630')
console.log('logo-512.png 512x512')
