import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell, type FaqItem, type PageCrumb } from '@/pages/PageShell.tsx'
import { offeredSubjects } from '@/pages/subjects.ts'

export const mathsCrumbs: PageCrumb[] = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
  { name: 'IGCSE and GCSE maths', path: '/igcse-gcse-maths-tutor/' },
]

export const mathsFaqs: FaqItem[] = [
  {
    question: 'Do you tutor GCSE maths for students in Dubai?',
    answer: 'Yes. GCSE and IGCSE Maths lessons are live online and one-to-one, including for students in Dubai, with Edexcel, Cambridge and OxfordAQA. A-level Maths is taught in the same way.',
  },
  {
    question: 'Can an online maths tutor teach a student in Abu Dhabi?',
    answer: 'Yes. Lessons are live online for families in every emirate, including Abu Dhabi. The student joins a subject specialist on CES’s own online whiteboard.',
  },
  {
    question: 'What is the difference between Foundation and Higher?',
    answer: 'Foundation is the tier whose highest grade is 5. Higher is aimed at grades 9 to 4, and a result just below grade 4 can be awarded grade 3. Edexcel uses these tiers for GCSE and International GCSE Maths. The student sits every paper at one tier. Cambridge IGCSE Mathematics does not use these names. It uses Core and Extended.',
  },
  {
    question: 'What is the difference between Core and Extended?',
    answer: 'Core and Extended are the Cambridge tiers for IGCSE Mathematics. Extended includes the Core content and goes further. Where the course is graded A* to G, Core candidates are eligible for grades C to G and Extended candidates are eligible for grades A* to E. Where it is graded 9 to 1, Core candidates are eligible for grades 5 to 1 and Extended candidates are eligible for grades 9 to 3.',
  },
  {
    question: 'How long is a maths lesson, and how do we arrange a time?',
    answer: 'A lesson is 1 or 2 hours. Lesson times are scheduled through the CES parent app. A free 30-minute trial lesson is booked on WhatsApp.',
  },
  {
    question: 'Who teaches the maths?',
    answer: 'A UK-trained subject specialist teaches the lesson one-to-one.',
  },
]

const boards = [
  {
    title: 'Edexcel',
    body: 'Edexcel GCSE and International GCSE Maths use Foundation and Higher. A-level Maths is taught one-to-one as well.',
  },
  {
    title: 'Cambridge',
    body: 'Cambridge IGCSE Mathematics uses Core and Extended rather than Foundation and Higher. Extended includes the Core content and goes further. A-level Maths follows the Cambridge International course.',
  },
  {
    title: 'OxfordAQA',
    body: 'OxfordAQA is taught for IGCSE, GCSE and A-level Maths, in one-to-one lessons with a UK-trained subject specialist.',
  },
]

const whatsappDetails = 'I would like to ask about an IGCSE or GCSE maths tutor.'

export function MathsTutor() {
  return (
    <PageShell
      crumbs={mathsCrumbs}
      title="GCSE maths tutor for Dubai and Abu Dhabi"
      lede={
        <>
          <p>
            CES Tuition is an online maths tutor for families in Abu Dhabi, Dubai and the other emirates. Lessons are one-to-one and live online, with a UK-trained subject specialist, for IGCSE, GCSE and A-level Maths with Edexcel, Cambridge and OxfordAQA.
          </p>
          <p>
            <a href="/curricula/british/" className="font-semibold underline underline-offset-4 hover:text-white/80">
              British curriculum tutor
            </a>
            {' '}covers GCSE, IGCSE and A-level more broadly. IB is also offered.{' '}
            <a href="/#services" className="font-semibold underline underline-offset-4 hover:text-white/80">
              See the curricula
            </a>
            .
          </p>
        </>
      }
      ctaTitle="Ask about a maths tutor"
      ctaBody={
        <p>
          Book a free 30-minute trial lesson on WhatsApp, and send the year group and whether the board is Edexcel, Cambridge or OxfordAQA. This page does not store the message.
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection
        title="IGCSE, GCSE and A-level Maths"
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
          Maths is taught at IGCSE, GCSE and A-level. The boards are Edexcel, Cambridge and OxfordAQA.
        </p>
        <p>
          At IGCSE and GCSE, the subjects offered are {offeredSubjects}. This page is about Maths, including A-level Maths.
        </p>
      </PageSection>

      <PageSection title="Foundation and Higher, Core and Extended" muted>
        <p>
          Edexcel GCSE and International GCSE Maths use Foundation and Higher. Foundation’s highest grade is 5. Higher is aimed at grades 9 to 4, and a result just below grade 4 on Higher can be awarded grade 3.
        </p>
        <p>
          A student is entered for one tier and sits every paper at that tier. The tiers overlap around grades 4 and 5, so a student expected to land in that range can be entered either way. The school’s entry decides the tier. Changing tier changes the papers.
        </p>
        <p>
          Cambridge IGCSE Mathematics does not use Foundation and Higher. It uses Core and Extended. Where the course is graded A* to G, Core leads to grades C to G and Extended leads to grades A* to E. Where it is graded 9 to 1, Core leads to grades 5 to 1 and Extended leads to grades 9 to 3. Extended includes every Core topic and adds more. A student is entered for one route.
        </p>
      </PageSection>

      <PageSection title="How online maths lessons work">
        <p>
          Lessons are live and one-to-one, for families in every emirate, including Dubai and Abu Dhabi. They are paced for the student. Exam preparation includes past-paper practice for the assessments on the student’s course.
        </p>
        <p>
          A lesson is 1 or 2 hours. Lesson times are scheduled through the CES parent app. Lessons run live on CES’s own online whiteboard.
        </p>
        <p>
          We keep parents informed about how lessons are going. Parents can track progress in the CES parent app. The registered office is Sharjah Media City (Shams), in Sharjah.
        </p>
        <p>
          A UK-trained subject specialist teaches the lesson. A free 30-minute trial lesson is booked on WhatsApp.
        </p>
        <p>
          Send the year group on WhatsApp, and say whether the board is Edexcel, Cambridge or OxfordAQA. This website does not store the enquiry. For the wider British curriculum, see the{' '}
          <a href="/curricula/british/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            British curriculum tutor
          </a>
          {' '}page.
        </p>
      </PageSection>

      <FaqSection items={mathsFaqs} />
    </PageShell>
  )
}
