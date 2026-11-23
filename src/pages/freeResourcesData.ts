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
  {
    slug: 'year-11-trigonometry',
    title: 'Year 11 Trigonometry',
    year: 11,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'IGCSE Maths.',
    inside:
      'Inside: key formulae, a worked example and 17 questions on right-angled trigonometry (SOH CAH TOA), the sine rule, the cosine rule and the area of a triangle, ending with an exam-style bearings question. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.4 MB',
    file: '/downloads/year-11-trigonometry-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-11-trigonometry.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-12-equations-and-inequalities',
    title: 'Year 12 Equations and Inequalities',
    year: 12,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'International A Level Maths.',
    inside:
      'Inside: worked examples and 20 questions on simultaneous equations, linear and quadratic inequalities, set notation, regions and the discriminant. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-12-equations-and-inequalities-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-12-equations-and-inequalities.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-13-functions',
    title: 'Year 13 Functions',
    year: 13,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'International A Level Maths.',
    inside:
      'Inside: worked examples and 24 questions on domain and range, one-one and many-one functions, composite and inverse functions, and modulus graphs and equations, ending with an exam-style question. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.2 MB',
    file: '/downloads/year-13-functions-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-13-functions.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-7-percentages-of-amounts',
    title: 'Year 7 Percentages of Amounts',
    year: 7,
    subject: 'Maths',
    note: 'Key Stage 3, ages 11 to 12.',
    inside:
      'Inside: key ideas and 24 questions on finding 50%, 25% and 10%, building other percentages from 10% and 5%, money and measures, and word problems. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-7-percentages-of-amounts-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-7-percentages-of-amounts.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-8-solving-linear-equations',
    title: 'Year 8 Solving Linear Equations',
    year: 8,
    subject: 'Maths',
    note: 'Key Stage 3, ages 12 to 13.',
    inside:
      'Inside: key ideas and 28 questions on one-step and two-step equations, unknowns on both sides, brackets, and forming equations from perimeter and think-of-a-number problems. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-8-solving-linear-equations-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-8-solving-linear-equations.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-9-forming-and-solving-equations-and-inequalities',
    title: 'Year 9 Forming and Solving Equations and Inequalities',
    year: 9,
    subject: 'Maths',
    note: 'Key Stage 3, ages 13 to 14.',
    inside:
      'Inside: 26 questions on equations with brackets, unknowns on both sides and fractions, forming equations from shapes and word problems, solving inequalities, number lines and listing integer solutions. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-9-forming-and-solving-equations-and-inequalities-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-9-forming-and-solving-equations-and-inequalities.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-10-straight-line-graphs',
    title: 'Year 10 Straight-line Graphs',
    year: 10,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'IGCSE Maths.',
    inside:
      'Inside: gradient from two points, rearranging ax + by = c, the equation of a line through two points, parallel and perpendicular lines, and the midpoint and length of a line segment, plus an exam-style question. Full answers on page 2.',
    pages: 2,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-10-straight-line-graphs-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-10-straight-line-graphs.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-11-circle-theorems',
    title: 'Year 11 Circle Theorems',
    year: 11,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'IGCSE Maths.',
    inside:
      'Inside: the seven circle theorems, a worked example and 13 questions on angles at the centre, semicircles, the same segment, cyclic quadrilaterals, tangents and the alternate segment theorem, plus an exam-style question. Full answers with reasons on page 3.',
    pages: 3,
    sizeLabel: '0.4 MB',
    file: '/downloads/year-11-circle-theorems-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-11-circle-theorems.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-12-sketching-curves-and-transformations',
    title: 'Year 12 Sketching Curves and Transformations',
    year: 12,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'International A Level Maths.',
    inside:
      'Inside: worked examples and 23 questions on sketching cubics, quartics and reciprocal graphs, points of intersection, and the transformations f(x) + a, f(x + a), af(x) and f(ax). Full answers on page 3.',
    pages: 3,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-12-sketching-curves-and-transformations-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-12-sketching-curves-and-transformations.webp',
    added: '2026-11-23',
  },
  {
    slug: 'year-13-exponentials-and-logarithms',
    title: 'Year 13 Exponentials and Logarithms',
    year: 13,
    subject: 'Maths',
    examBoards: ['Cambridge', 'Edexcel', 'OxfordAQA'],
    note: 'International A Level Maths.',
    inside:
      'Inside: worked examples and 21 questions on e^x and ln x, exponential and log equations, quadratics in e^x, laws of logarithms, growth and decay models and reducing to linear form, ending with an exam-style question. Full answers on page 3.',
    pages: 3,
    sizeLabel: '0.3 MB',
    file: '/downloads/year-13-exponentials-and-logarithms-ces-tuition.pdf',
    thumb: '/downloads/thumbs/year-13-exponentials-and-logarithms.webp',
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
