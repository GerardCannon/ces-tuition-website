// Free downloads on /free-resources/. Add a pack by adding one entry here and
// putting its PDF (and a thumbnail) in public/downloads/.
export type FreeResource = {
  // Lowercase words and hyphens. Used for the GoatCounter event free-download-<slug>.
  slug: string
  title: string
  level: string
  inside: string
  pages: number
  sizeLabel: string
  file: string
  thumb: string
  thumbWidth: number
  thumbHeight: number
  relatedHref: string
  relatedLabel: string
}

export const freeResources: readonly FreeResource[] = [
  {
    slug: 'year-7-maths-sampler',
    title: 'Year 7 Maths Sampler',
    level: 'Key Stage 3 · Year 7 · Ages 11 to 12. A useful check before IGCSE.',
    inside:
      'Inside: 3 worked examples, a Bronze, Silver and Gold practice page, word problems and answers. Fractions, place value, rounding and negative numbers.',
    pages: 5,
    sizeLabel: '0.7 MB',
    file: '/downloads/year-7-maths-sampler-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-7-maths-sampler.webp',
    thumbWidth: 480,
    thumbHeight: 680,
    relatedHref: '/igcse-gcse-maths-tutor/',
    relatedLabel: 'Maths lessons',
  },
]

export const freeResourcesCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Free resources', path: '/free-resources/' },
]

export const FREE_RESOURCES_WHATSAPP_MESSAGE =
  "Hi Gerard, we've downloaded a free maths resource from your website and I'd like to talk about how my child got on."
