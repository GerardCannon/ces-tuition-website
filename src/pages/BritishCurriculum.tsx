import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell, type FaqItem, type PageCrumb } from '@/pages/PageShell.tsx'
import { offeredSubjects } from '@/pages/subjects.ts'

export const britishCrumbs: PageCrumb[] = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
]

export const britishFaqs: FaqItem[] = [
  {
    question: 'Which exam boards do you cover?',
    answer: 'Edexcel, Cambridge and OxfordAQA. OxfordAQA offers International GCSE and International AS and A-level.',
  },
  {
    question: 'What’s the difference between GCSE and IGCSE?',
    answer: 'GCSE is the exam used in British schools. IGCSE is the international version that many schools in the UAE use. Your child’s school decides which one they sit.',
  },
  {
    question: 'Do you offer A-level as well?',
    answer: 'Yes. A-level’s offered in the same subjects as IGCSE and GCSE.',
  },
  {
    question: 'We’re not in Dubai. Can my child still join?',
    answer: 'Yes. Families join from every emirate.',
  },
]

const boards = [
  {
    title: 'Edexcel',
    body: 'GCSE, International GCSE and A-level.',
  },
  {
    title: 'Cambridge',
    body: 'IGCSE and International AS and A Level.',
  },
  {
    title: 'OxfordAQA',
    body: 'International GCSE and International AS and A-level.',
  },
]

const whatsappDetails = 'I would like to ask about British curriculum lessons for my child.'

export function BritishCurriculum() {
  return (
    <PageShell
      crumbs={britishCrumbs}
      title="British curriculum lessons for families in the UAE"
      lede={
        <p>
          Many families in the UAE follow the British curriculum. If one subject is slipping, or your child wants to feel more confident in it, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send the subject and the year group. We’ll reply on WhatsApp.
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection title="What your child gets">
        <p>
          Your child works one-to-one, live, with a UK-trained subject specialist, on our own online whiteboard. A lesson is 1 or 2 hours. You book the time in the CES parent app, and the same app is where you see how your child’s getting on.
        </p>
        <p>
          Some families come to us after a grade has dipped. Others want their child to feel calmer about the work before a school test. The lesson follows what your child’s doing at school, rather than a separate course.
        </p>
        <p>
          Lessons work alongside school, not instead of it. If your child has homework they can’t get started on, that piece of work can be where the lesson begins.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          You don’t need a plan for every subject. Start with the one that’s on your mind. A child who’s comfortable in English and stuck in physics only needs physics.
        </p>
        <p>
          If you’ve just moved to the UAE, or your child’s changed school, the new class may already be a few topics ahead. Mention that when you write to us, and the first lesson can start from the gap.
        </p>
        <p>
          It helps if you know the subject, the year group and the exam board. If the board isn’t on a recent report, the school can tell you. That’s enough for a useful reply.
        </p>
      </PageSection>

      <PageSection title="Subjects">
        <p>
          At IGCSE, GCSE and A-level the subjects are {offeredSubjects}. The IB’s offered as well. You can see it alongside the other pathways on our{' '}
          <a href="/#services" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            home page
          </a>
          .
        </p>
      </PageSection>

      <PageSection
        title="Exam boards"
        extra={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boards.map((board) => (
              <Card key={board.title} className="p-6 md:p-8 border-border bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">{board.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{board.body}</p>
              </Card>
            ))}
          </div>
        }
      >
        <p>
          Tell us which board the school uses. These are the three we teach.
        </p>
      </PageSection>

      <PageSection title="If the subject is maths" muted>
        <p>
          Maths has a few extra choices, depending on the board and the paper the school’s entered. There’s a separate page for{' '}
          <a href="/igcse-gcse-maths-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            IGCSE, GCSE and A-level maths
          </a>
          .
        </p>
      </PageSection>

      <FaqSection items={britishFaqs} />
    </PageShell>
  )
}
