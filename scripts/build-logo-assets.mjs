// Rebuild every public logo raster from brand/alt-instagram-palette/.
// Swap an SVG in that folder (same filename), then run:
//   node scripts/build-logo-assets.mjs
//
// Footer lockup is FOOTER_SOURCE. Measured against the rendered plum footer
// #852E6D (oklch(0.45 0.14 340)):
//   #00B065 green pencil tip     2.84:1  fail
//   #FF5B38 orange tick          2.61:1  fail
//   #5FD39B light-green descriptor 4.32:1  below 4.5:1 for the small line
//   #FFFFFF white                8.05:1  AAA
// The colour-on-dark file keeps a green tip and a light-green descriptor, and
// the orange tick fails as well, so the footer uses the all-white
// logo-mono-on-dark.svg. Point FOOTER_SOURCE at logo-color-on-dark.svg to put
// the colour-on-dark lockup back.

import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import wawoff2 from 'wawoff2'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceDir = path.join(root, 'brand', 'alt-instagram-palette')
const publicDir = path.join(root, 'public')

const HEADER_SOURCE = 'logo-color-on-white.svg'
const FOOTER_SOURCE = 'logo-mono-on-dark.svg'
const SQUARE_SOURCE = 'logo-stacked-color-on-white.svg'
const FAVICON_SOURCE = 'icon-color-on-white.svg'
const FAVICON_SVG_SOURCE = 'icon-transparent.svg'

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
  if (!fs.existsSync(file)) throw new Error(`Missing source SVG: ${file}`)
  return fs.readFileSync(file, 'utf8')
}

function parseViewBox(svg) {
  const match = svg.match(/viewBox="\s*([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s+([-\d.]+)\s*"/)
  if (!match) throw new Error('SVG is missing a viewBox')
  return { x: Number(match[1]), y: Number(match[2]), w: Number(match[3]), h: Number(match[4]) }
}

function stripFullBleedRect(svg) {
  const box = parseViewBox(svg)
  return svg.replace(/<rect\b[^>]*\/>/, (tag) => {
    if (/stroke=/.test(tag)) return tag
    const fill = tag.match(/fill="([^"]+)"/)?.[1]?.toUpperCase()
    const width = Number(tag.match(/\bwidth="([^"]+)"/)?.[1])
    const height = Number(tag.match(/\bheight="([^"]+)"/)?.[1])
    const plate = fill === '#FFFFFF' || fill === '#FFF' || fill === '#0B2545'
    const full = Math.abs(width - box.w) < 1.5 && Math.abs(height - box.h) < 1.5
    return plate && full ? '' : tag
  })
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
const { default: pngToIco } = await import('png-to-ico')

async function transparentLockup(fileName) {
  const stripped = stripFullBleedRect(readSource(fileName))
  const box = parseViewBox(stripped)
  const raster = await sharp(Buffer.from(stripped), { density: 216 }).ensureAlpha().png().toBuffer()
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
  const svg = setSvgBox(stripped, `${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`, width, height)
  return { svg, width, height }
}

async function renderSvg(svg, width, height, { background } = {}) {
  let pipeline = sharp(Buffer.from(svg), { density: 384 })
  pipeline = pipeline.resize(width, height, {
    fit: 'fill',
    background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
  })
  return pipeline.png().toBuffer()
}

function write(file, data) {
  fs.writeFileSync(path.join(publicDir, file), data)
  console.log(`public/${file}`)
}

const header = await transparentLockup(HEADER_SOURCE)
const footer = await transparentLockup(FOOTER_SOURCE)
const stacked = await transparentLockup(SQUARE_SOURCE)
write('logo-header.svg', header.svg)
write('logo-footer.svg', footer.svg)
write('favicon.svg', readSource(FAVICON_SVG_SOURCE))

async function squareIcon(size) {
  const svg = readSource(FAVICON_SOURCE).replace(/<svg\b[^>]*>/, (tag) =>
    tag.replace(/\bwidth="[^"]+"/, `width="${size}"`).replace(/\bheight="[^"]+"/, `height="${size}"`),
  )
  return sharp(Buffer.from(svg)).resize(size, size).png().toBuffer()
}

const png16 = await squareIcon(16)
const png32 = await squareIcon(32)
const png48 = await squareIcon(48)
write('favicon-16x16.png', png16)
write('favicon-32x32.png', png32)
write('favicon.ico', await pngToIco([png16, png32, png48]))

const touchSize = 180
const touchIcon = Math.round(touchSize * 0.68)
const touchArt = await renderSvg(readSource(FAVICON_SVG_SOURCE), touchIcon, touchIcon)
write(
  'apple-touch-icon.png',
  await sharp({
    create: { width: touchSize, height: touchSize, channels: 4, background: WHITE },
  })
    .composite([{ input: touchArt, gravity: 'centre' }])
    .png()
    .toBuffer(),
)

write('android-chrome-192x192.png', await squareIcon(192))
write('android-chrome-512x512.png', await squareIcon(512))

const squareSide = 512
const squarePad = 48
const fittedW = squareSide - squarePad * 2
const fittedH = Math.round(fittedW * (stacked.height / stacked.width))
const stackedPng = await renderSvg(stacked.svg, fittedW, Math.min(fittedH, squareSide - squarePad * 2))
write(
  'logo-512.png',
  await sharp({
    create: { width: squareSide, height: squareSide, channels: 4, background: WHITE },
  })
    .composite([{ input: stackedPng, gravity: 'centre' }])
    .png()
    .toBuffer(),
)

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
  <text x="88" y="548" fill="${WHITE}" font-family="Quicksand" font-weight="500" font-size="26">GCSE · IGCSE · A-level · IB · American</text>
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
if (sizes.join(',') !== '16x16,32x32,48x48') {
  throw new Error(`favicon.ico sizes were ${sizes.join(', ')}`)
}
const ogMeta = await sharp(path.join(publicDir, 'og-image.jpg')).metadata()
if (ogMeta.width !== 1200 || ogMeta.height !== 630) {
  throw new Error(`og-image.jpg is ${ogMeta.width}x${ogMeta.height}`)
}
console.log(`favicon.ico ${sizes.join(', ')}`)
console.log('og-image.jpg 1200x630')
