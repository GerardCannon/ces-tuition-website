import type { ReactNode } from 'react'

// Brand key-word accent for headings.
// Hero H1s (white on the purple band) use the brand gold: 5.34:1, AA for any text size.
// Section H2s (on light backgrounds) use the brand purple: about 7.5:1.
// Gold is never used as text on light backgrounds (about 1.4:1).
const toneClass = { gold: 'text-secondary', purple: 'text-primary' } as const

export function Accent({ text, word, tone }: { text: string; word?: string; tone: keyof typeof toneClass }): ReactNode {
  if (!word) return text
  const at = text.indexOf(word)
  if (at < 0) return text
  return (
    <>
      {text.slice(0, at)}
      <span className={toneClass[tone]}>{word}</span>
      {text.slice(at + word.length)}
    </>
  )
}

// One key word per section heading, shared across pages so the same heading
// always gets the same accent.
export const sectionAccents: Record<string, string> = {
  'Our lessons': 'lessons',
  'Where to begin': 'begin',
  'Subjects': 'Subjects',
  'Levels we teach': 'Levels',
  'Exam boards': 'Exam boards',
  'Other curricula': 'curricula',
  'Other subjects': 'subjects',
  'Our subject pages': 'subject pages',
  'Questions parents ask': 'Questions',
  'International A Level: Year 12 and Year 13': 'International A Level',
  'How we help with IB maths': 'IB maths',
  'IB maths and our other pages': 'other pages',
  'How we help with the SAT': 'SAT',
  'SAT preparation': 'SAT',
  'School subjects': 'School subjects',
  'Where students often need help': 'need help',
  'Revising biology': 'Revising',
  'MYP and DP': 'MYP and DP',
  'How the IB is assessed': 'assessed',
  'IGCSE subjects': 'IGCSE',
  'Years 10 and 11': 'Years 10 and 11',
  'Maths': 'Maths',
  'Where chemistry gets difficult': 'difficult',
  'Where economics gets difficult': 'difficult',
  'Free maths worksheets': 'Free',
  'How we help with maths': 'maths',
  'How we help with physics': 'physics',
  'How we help with English': 'English',
  'What to tell us': 'tell us',
  'Foundation, Higher, Core, Extended and Extension': 'Foundation, Higher',
  'Physics and maths': 'maths',
  'Years 7–9': 'Years 7–9',
  'IGCSE (Years 10–11)': 'IGCSE',
  'International A Level (Years 12–13)': 'International A Level',
}

// Level headings ("IGCSE chemistry", "IB physics (MYP and Diploma)",
// "International A Level biology") accent the level.
export function sectionAccentFor(title: string): string | undefined {
  if (sectionAccents[title]) return sectionAccents[title]
  for (const level of ['International A Level', 'IGCSE', 'IB']) {
    if (title.startsWith(`${level} `)) return level
  }
  return undefined
}

export function SectionTitle({ text, word }: { text: string; word?: string }) {
  return <Accent text={text} word={word ?? sectionAccentFor(text)} tone="purple" />
}
