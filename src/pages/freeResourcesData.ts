// Free downloads on /free-resources/, grouped by school year.
//
// To add a resource: put the PDF in public/downloads/ and a 480x680 WebP of
// its first page in public/downloads/thumbs/, then add ONE entry to
// freeResources below. The page, the jump menu, the year section and the
// GoatCounter event (free-download-<slug>) all come from that entry.
// The build fails if the PDF or thumbnail is missing or the size label is wrong.

export type SchoolYear = 7 | 8 | 9 | 10 | 11 | 12 | 13
export type ExamBoard = 'Cambridge' | 'Edexcel' | 'OxfordAQA'
export type Subject = 'Maths' | 'English' | 'Biology' | 'Chemistry' | 'Physics' | 'Economics'

export type FreeResource = {
  // Lowercase words and hyphens, unique. Used for the GoatCounter event free-download-<slug>.
  slug: string
  title: string
  year: SchoolYear
  subject: Subject
  // Leave out when no exam board applies (Years 7 to 9). List every board the pack fits.
  examBoards?: readonly ExamBoard[]
  // Optional short line under the year, e.g. ages or what it prepares for.
  note?: string
  inside: string
  pages: number
  // One decimal place in MB, e.g. '0.7 MB'. The build checks it against the file.
  sizeLabel: string
  file: string
  thumb: string
  // Date added, YYYY-MM-DD. Newest shows first within its year.
  added: string
  // Optional. Defaults to the subject page in subjectPages.
  relatedHref?: string
  relatedLabel?: string
}

export const freeResources: readonly FreeResource[] = [
  {
    slug: 'year-7-maths-sampler',
    title: 'Year 7 Maths Sampler',
    year: 7,
    subject: 'Maths',
    note: 'Key Stage 3, ages 11 to 12. A useful check before IGCSE.',
    inside:
      'Inside: 3 worked examples, a Bronze, Silver and Gold practice page, word problems and answers. Fractions, place value, rounding and negative numbers.',
    pages: 5,
    sizeLabel: '0.7 MB',
    file: '/downloads/year-7-maths-sampler-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-7-maths-sampler.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-8-expanding-and-factorising',
    title: 'Year 8 Expanding and Factorising',
    year: 8,
    subject: 'Maths',
    note: 'Key Stage 3, ages 12 to 13.',
    inside:
      'Inside: key ideas and 30 questions from Bronze to Gold on collecting like terms, expanding and factorising single brackets, with a double-bracket stretch. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-8-expanding-and-factorising-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-8-expanding-and-factorising.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-9-straight-line-graphs',
    title: 'Year 9 Straight-line Graphs',
    year: 9,
    subject: 'Maths',
    note: 'Key Stage 3, ages 13 to 14.',
    inside:
      'Inside: 24 questions on y = mx + c, covering tables of values and plotting, gradient and y-intercept, gradient from two points, matching equations to lines and parallel lines. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.2 MB',
    file: '/downloads/year-9-straight-line-graphs-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-9-straight-line-graphs.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-10-linear-equations-and-inequalities',
    title: 'Year 10 Linear Equations and Inequalities',
    year: 10,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'IGCSE Maths.',
    inside:
      'Inside: solving equations with brackets, unknowns on both sides and fractions, forming equations, solving inequalities, number lines and integer solutions, plus an exam-style question. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-10-linear-equations-and-inequalities-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-10-linear-equations-and-inequalities.webp',
    added: '2026-11-23',
  },
]

// Every thumbnail is 480x680 so cards line up and reserve their space.
export const THUMB_WIDTH = 480
export const THUMB_HEIGHT = 680

// Show years with no resources yet as greyed 'Coming soon' items in the jump menu.
// Their sections are never shown until they have a resource.
export const SHOW_COMING_SOON = true

export const subjectPages: Record<Subject, { href: string; label: string }> = {
  Maths: { href: '/igcse-gcse-maths-tutor/', label: 'Maths lessons' },
  English: { href: '/english-tutor/', label: 'English lessons' },
  Biology: { href: '/biology-tutor/', label: 'Biology lessons' },
  Chemistry: { href: '/chemistry-tutor/', label: 'Chemistry lessons' },
  Physics: { href: '/physics-tutor/', label: 'Physics lessons' },
  Economics: { href: '/economics-tutor/', label: 'Economics lessons' },
}

export type Stage = { id: string; title: string; years: readonly SchoolYear[] }

export const stages: readonly Stage[] = [
  { id: 'years-7-9', title: 'Years 7–9', years: [7, 8, 9] },
  { id: 'igcse', title: 'IGCSE (Years 10–11)', years: [10, 11] },
  { id: 'a-level', title: 'International A Level (Years 12–13)', years: [12, 13] },
]

// British-style school years only (no UAE grade mapping).
export const yearLabel = (year: SchoolYear) => `Year ${year}`
export const yearAnchor = (year: SchoolYear) => `year-${year}`

const boardOrder: readonly ExamBoard[] = ['Cambridge', 'Edexcel', 'OxfordAQA']
export function examBoardsLabel(boards: readonly ExamBoard[] | undefined) {
  if (!boards || boards.length === 0) return null
  const sorted = boardOrder.filter((board) => boards.includes(board))
  if (sorted.length === 1) return sorted[0]
  return `${sorted.slice(0, -1).join(', ')} and ${sorted[sorted.length - 1]}`
}

export function resourcesForYear(year: SchoolYear) {
  return freeResources
    .filter((resource) => resource.year === year)
    .sort((a, b) => b.added.localeCompare(a.added) || a.title.localeCompare(b.title))
}

export const freeResourcesCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Free resources', path: '/free-resources/' },
]

export const FREE_RESOURCES_WHATSAPP_MESSAGE =
  "Hi Gerard, we've downloaded a free resource from your website and I'd like to talk about how my child got on."
