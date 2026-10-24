import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell, type FaqItem, type PageCrumb } from '@/pages/PageShell.tsx'

export const mathsCrumbs: PageCrumb[] = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
  { name: 'IGCSE and GCSE maths', path: '/igcse-gcse-maths-tutor/' },
]

export const mathsFaqs: FaqItem[] = [
  {
    question: 'Which exam boards do you cover for maths?',
    answer: 'Edexcel, Cambridge and OxfordAQA. OxfordAQA offers International GCSE and International AS and A-level maths.',
  },
  {
    question: 'Do you teach A-level maths as well?',
    answer: 'Yes. A-level maths is offered alongside IGCSE and GCSE maths.',
  },
]

const boards = [
  {
    title: 'Edexcel',
    body: 'GCSE, International GCSE and A-level maths.',
  },
  {
    title: 'Cambridge',
    body: 'IGCSE and International AS and A Level maths.',
  },
  {
    title: 'OxfordAQA',
    body: 'International GCSE and International AS and A-level maths.',
  },
]

const whatsappDetails = 'I would like to ask about maths lessons for my child.'

export function MathsTutor() {
  return (
    <PageShell
      crumbs={mathsCrumbs}
      title="IGCSE, GCSE and A-level maths tutor in the UAE"
      lede={
        <p>
          Maths is often the subject a parent worries about first. Lessons follow the course your child’s school is teaching, whether they need to catch up or want to feel ready for the paper.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send the year group and the board. We’ll reply on WhatsApp.
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection title="What your child gets">
        <p>
          Your child works one-to-one, live, with a UK-trained subject specialist, on our own online whiteboard. A lesson is 1 or 2 hours. You book the time in the CES parent app, and the same app is where you see how your child’s getting on.
        </p>
        <p>
          We stay with the topics the school’s on. If algebra’s gone wrong, or exam questions are where the marks are slipping, that’s where the lesson starts. A gap from an earlier year is worth closing before the class moves on.
        </p>
        <p>
          You don’t need to be confident with the maths yourself. Tell us what school’s said, or what your child finds hardest, and the lesson can start there. Your child can stop and ask when a step doesn’t make sense. A wrong answer is often one step in a longer method, and we stay with that step until it’s clear.
        </p>
      </PageSection>

      <PageSection title="What to tell us" muted>
        <p>
          The year group and the exam board are the useful details. If you already know which paper the school’s entered, include that too. If you don’t, we can still begin, and you can confirm it with the school afterwards.
        </p>
        <p>
          A move to a new school in the UAE often means the class is already midway through a topic. Say if that’s the case. The first lesson can pick up the work in front of your child, rather than restarting the year.
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
          The school’s board decides the course. These are the three we teach for maths.
        </p>
      </PageSection>

      <PageSection title="Foundation, Higher, Core and Extended">
        <p>
          GCSE maths is entered as Foundation or Higher. Cambridge IGCSE maths uses Core or Extended instead. Ask the school which paper your child’s on, and the lessons will follow that.
        </p>
        <p>
          You might hear these names at a parents’ evening and wonder which one matters. It’s simply the paper your child will sit. That label’s all we need, and if the school’s changing it, just let us know.
        </p>
      </PageSection>

      <PageSection title="Other subjects" muted>
        <p>
          If you need a subject other than maths, the{' '}
          <a href="/curricula/british/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            British curriculum page
          </a>
          {' '}sets out what we offer. The IB’s there too.
        </p>
      </PageSection>

      <FaqSection items={mathsFaqs} />
    </PageShell>
  )
}
