import type { JsonLd, RouteHead } from './routes.ts'

function attr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

function text(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// The home page block in index.html is indented with four spaces and has no
// blank line before the icon link. Matching that formatting is what lets the
// build prove the published home <head> did not change.
export function renderHead(head: RouteHead) {
  const lines: string[] = []
  if (head.robots) lines.push(`<meta name="robots" content="${attr(head.robots)}" />`)
  lines.push(`<title>${text(head.title)}</title>`)
  lines.push(`<meta name="description" content="${attr(head.description)}" />`)
  if (head.canonical) lines.push(`<link rel="canonical" href="${attr(head.canonical)}" />`)
  if (head.ogType) lines.push(`<meta property="og:type" content="${attr(head.ogType)}" />`)
  if (head.ogUrl) lines.push(`<meta property="og:url" content="${attr(head.ogUrl)}" />`)
  if (head.ogTitle) lines.push(`<meta property="og:title" content="${attr(head.ogTitle)}" />`)
  if (head.ogDescription) lines.push(`<meta property="og:description" content="${attr(head.ogDescription)}" />`)
  if (head.ogImage) lines.push(`<meta property="og:image" content="${attr(head.ogImage)}" />`)
  if (head.ogImageWidth) lines.push(`<meta property="og:image:width" content="${attr(head.ogImageWidth)}" />`)
  if (head.ogImageHeight) lines.push(`<meta property="og:image:height" content="${attr(head.ogImageHeight)}" />`)
  if (head.twitterCard) lines.push(`<meta name="twitter:card" content="${attr(head.twitterCard)}" />`)
  if (head.twitterTitle) lines.push(`<meta name="twitter:title" content="${attr(head.twitterTitle)}" />`)
  if (head.twitterDescription) lines.push(`<meta name="twitter:description" content="${attr(head.twitterDescription)}" />`)
  if (head.twitterImage) lines.push(`<meta name="twitter:image" content="${attr(head.twitterImage)}" />`)
  return lines.map((line) => `    ${line}`).join('\n') + '\n'
}

export function renderJsonLd(data: JsonLd) {
  const json = JSON.stringify(data, null, 2)
    .split('\n')
    .map((line) => `    ${line}`)
    .join('\n')
  return `    <script type="application/ld+json">\n${json}\n    </script>`
}
