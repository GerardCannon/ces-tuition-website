// Build one 1200x630 share image per page into public/og/.
//   node scripts/build-og-images.mjs
//
// Same plum and teal template as og-image.jpg, which stays the fallback (home
// keeps it in index.html too, and the 404 page uses it). Each headline uses
// wording already on that page (its H1 or a label shown on it). No prices,
// ratings, guarantees or new claims.
//
// WhatsApp can crop a preview to a square from the centre (x 285 to 915), so
// the logo and all text are centred and kept inside x 325 to 875.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const outDir = path.join(publicDir, 'og')

const PLUM = '#852E6D'
const TEAL = '#3DC6B1'
const WHITE = '#FFFFFF'
const W = 1200
const H = 630
const CX = W / 2
const SAFE_LEFT = 325
const SAFE_RIGHT = 875
const MAX_BYTES = 300 * 1024

// id matches the route id in src/routes.ts. headline: wrapped to fit the
// square-safe width at the largest size that fits (\u00A0 keeps words
// together). sub: one smaller line.
export const ogPages = [
  { id: 'home', headline: 'Online tuition for UAE families, taught by UK-trained subject specialists' },
  { id: 'british-curriculum', headline: 'Online IGCSE and British curriculum tuition', sub: 'for families in Dubai and the UAE' },
  { id: 'ib', headline: 'Online IB MYP and Diploma tuition', sub: 'for families in Dubai and across the UAE' },
  { id: 'american-curriculum', headline: 'American\u00A0curriculum and\u00A0SAT\u00A0tuition', sub: 'for families in Dubai and the UAE' },
  { id: 'igcse-gcse-maths-tutor', headline: 'Online IGCSE and International\u00A0A\u00A0Level maths tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'a-level-tutor', headline: 'International\u00A0A\u00A0Level tuition', sub: 'for families in Dubai and the UAE' },
  { id: 'chemistry-tutor', headline: 'Online IGCSE, International\u00A0A\u00A0Level and IB chemistry tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'physics-tutor', headline: 'Online IGCSE, International\u00A0A\u00A0Level and IB physics tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'biology-tutor', headline: 'Online IGCSE, International\u00A0A\u00A0Level and IB biology tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'english-tutor', headline: 'Online IGCSE, International\u00A0A\u00A0Level and IB English tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'ib-maths-tutor', headline: 'Online IB maths tutor for MYP and Diploma students', sub: 'in Dubai and the UAE' },
  { id: 'economics-tutor', headline: 'Online IGCSE, International\u00A0A\u00A0Level and IB economics tutor', sub: 'for families in Dubai and the UAE' },
  { id: 'free-resources', headline: 'Free resources by\u00A0year', sub: 'Free · no sign-up' },
]

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const logoSvg = fs.readFileSync(path.join(publicDir, 'logo-header.svg'))
const logoMeta = await sharp(logoSvg).metadata()
const logoW = 360
const logoH = Math.round(logoW * (logoMeta.height / logoMeta.width))
const logo = await sharp(logoSvg, { density: 384 }).resize(logoW, logoH).png().toBuffer()
const plateX = 18
const plateY = 14
const logoTop = 56
const logoLeft = Math.round(CX - logoW / 2)

async function textWidth(svgText, size, weight) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="2400" height="200"><text x="0" y="150" font-family="Noto Sans" font-weight="${weight}" font-size="${size}">${esc(svgText)}</text></svg>`
  const { info } = await sharp(Buffer.from(svg)).trim().toBuffer({ resolveWithObject: true })
  return info.width
}

// Greedy word wrap at the largest size that fits in at most 4 lines.
async function fit(headline) {
  const words = headline.split(' ')
  for (const size of [56, 52, 48, 44, 40]) {
    const lines = []
    let current = ''
    for (const word of words) {
      const next = current ? `${current} ${word}` : word
      if (!current || (await textWidth(next, size, 700)) <= SAFE_RIGHT - SAFE_LEFT) current = next
      else {
        lines.push(current)
        current = word
      }
    }
    lines.push(current)
    const widest = Math.max(...(await Promise.all(lines.map((l) => textWidth(l, size, 700)))))
    if (lines.length <= 4 && widest <= SAFE_RIGHT - SAFE_LEFT) return { size, lines }
  }
  throw new Error(`"${headline}" does not fit in 4 lines`)
}

fs.mkdirSync(outDir, { recursive: true })
const report = []
for (const page of ogPages) {
  const { size, lines } = await fit(page.headline)
  const lineH = Math.round(size * 1.25)
  let subSize = 32
  if (page.sub) while (subSize > 26 && (await textWidth(page.sub, subSize, 500)) > SAFE_RIGHT - SAFE_LEFT) subSize -= 2
  const blockH = lines.length * lineH + (page.sub ? 24 + subSize : 0)
  const areaTop = logoTop + logoH + plateY + 30
  const areaBottom = H - 50
  let y = Math.round(areaTop + (areaBottom - areaTop - blockH) / 2 + size * 0.8)
  const texts = []
  for (const line of lines) {
    const w = await textWidth(line, size, 700)
    if (CX - w / 2 < SAFE_LEFT || CX + w / 2 > SAFE_RIGHT) throw new Error(`${page.id}: "${line}" is ${w}px, outside the square-safe area`)
    texts.push(`<text x="${CX}" y="${y}" text-anchor="middle" fill="${WHITE}" font-family="Noto Sans" font-weight="700" font-size="${size}">${esc(line)}</text>`)
    y += lineH
  }
  if (page.sub) {
    y += 24 - lineH + subSize + Math.round(size * 0.2)
    const w = await textWidth(page.sub, subSize, 500)
    if (CX - w / 2 < SAFE_LEFT || CX + w / 2 > SAFE_RIGHT) throw new Error(`${page.id}: sub line is ${w}px, outside the square-safe area`)
    texts.push(`<text x="${CX}" y="${y}" text-anchor="middle" fill="${WHITE}" font-family="Noto Sans" font-weight="500" font-size="${subSize}">${esc(page.sub)}</text>`)
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PLUM}"/>
  <rect width="18" height="${H}" fill="${TEAL}"/>
  <rect x="${logoLeft - plateX}" y="${logoTop - plateY}" width="${logoW + plateX * 2}" height="${logoH + plateY * 2}" rx="16" fill="${WHITE}"/>
  ${texts.join('\n  ')}
</svg>`
  const base = await sharp(Buffer.from(svg)).png().toBuffer()
  const jpg = await sharp(base)
    .composite([{ input: logo, left: logoLeft, top: logoTop }])
    .jpeg({ quality: 88, chromaSubsampling: '4:4:4', mozjpeg: true })
    .toBuffer()
  const meta = await sharp(jpg).metadata()
  if (meta.width !== W || meta.height !== H) throw new Error(`${page.id}.jpg is ${meta.width}x${meta.height}`)
  if (jpg.length > MAX_BYTES) throw new Error(`${page.id}.jpg is ${jpg.length} bytes, over 300 KB`)
  fs.writeFileSync(path.join(outDir, `${page.id}.jpg`), jpg)
  report.push(`og/${page.id}.jpg ${W}x${H} ${(jpg.length / 1024).toFixed(1)} KB`)
}
console.log(report.join('\n'))
