import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell, type FaqItem, type PageCrumb } from '@/pages/PageShell.tsx'
import { offeredSubjects } from '@/pages/subjects.ts'

export const britishCrumbs: PageCrumb[] = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
]

export const britishFaqs: FaqItem[] = [
  {
    question: 'What does a British curriculum tutor cover?',
    answer: 'GCSE, IGCSE and A-level, with Edexcel, Cambridge and OxfordAQA. CES Tuition teaches these live online, one-to-one, for families across the UAE.',
  },
  {
    question: 'Do you have an IGCSE tutor for Dubai?',
    answer: 'Lessons are live online, so a student in Dubai has a one-to-one lesson in the same way as a student in any other emirate. The boards are Edexcel, Cambridge and OxfordAQA. Send the subject and year group on WhatsApp.',
  },
  {
    question: 'What is the difference between GCSE and IGCSE?',
    answer: 'GCSE is the qualification used in England, Wales and Northern Ireland. In England it is graded 9 to 1. IGCSE is the international version. Cambridge IGCSE and the Edexcel International GCSE are widely used by international schools. Some specifications are graded 9 to 1, and some Cambridge IGCSEs are graded A* to G.',
  },
  {
    question: 'Which exam boards can you teach?',
    answer: 'Edexcel, Cambridge and OxfordAQA.',
  },
  {
    question: 'Are lessons taught by UK-trained subject specialists?',
    answer: 'Yes. Lessons are taught by UK-trained subject specialists.',
  },
  {
    question: 'How do online lessons work for a family in the UAE?',
    answer: 'Lessons are live and one-to-one, across all emirates, on CES’s own online whiteboard. A lesson is 1 or 2 hours, and lesson times are scheduled through the CES parent app. Parents can track progress in the CES parent app, and we keep parents informed about how lessons are going. A free 30-minute trial lesson is booked on WhatsApp.',
  },
  {
    question: 'Do you teach A-level as well as IGCSE?',
    answer: `CES Tuition teaches A-level as well as GCSE and IGCSE, with Edexcel, Cambridge and OxfordAQA. The subjects offered at GCSE, IGCSE and A-level are ${offeredSubjects}.`,
  },
]

const boards = [
  {
    title: 'Edexcel',
    body: 'Edexcel awards GCSE, International GCSE and A-level. On its mathematics courses, GCSE and International GCSE use Foundation and Higher.',
  },
  {
    title: 'Cambridge',
    body: 'Cambridge publishes Cambridge IGCSE and Cambridge International AS & A Level. International schools, including many in the UAE, enter students for these qualifications. Cambridge IGCSE Mathematics uses Core and Extended, not Foundation and Higher.',
  },
  {
    title: 'OxfordAQA',
    body: 'OxfordAQA is the third board CES Tuition teaches, for the same GCSE, IGCSE and A-level subjects as Edexcel and Cambridge.',
  },
]

const whatsappDetails = 'I would like to ask about a British curriculum tutor for GCSE, IGCSE or A-level.'

export function BritishCurriculum() {
  return (
    <PageShell
      crumbs={britishCrumbs}
      title="British curriculum tutor for families in the UAE"
      lede={
        <p>
          CES Tuition is a British curriculum tutor for families across the UAE, including an IGCSE tutor for students in Dubai. Lessons are one-to-one and live online, with a UK-trained subject specialist, for GCSE, IGCSE and A-level with Edexcel, Cambridge and OxfordAQA.
        </p>
      }
      ctaTitle="Ask about a British curriculum tutor"
      ctaBody={
        <p>
          Book a free 30-minute trial lesson on WhatsApp, and send the subject, the year group and whether the board is Edexcel, Cambridge or OxfordAQA. This page does not store the message.
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection title="GCSE, IGCSE and A-level">
        <p>
          GCSE means General Certificate of Secondary Education. In England it is the qualification most students take at the end of Year 11, and it is graded 9 to 1. Wales and Northern Ireland have their own GCSE arrangements, so the papers a student sits depend on the school and the exam board.
        </p>
        <p>
          IGCSE means International GCSE. Cambridge uses the name Cambridge IGCSE. Edexcel uses the Edexcel International GCSE. International schools use these qualifications, and many schools in the UAE do. The grade scale depends on the course. Some use 9 to 1. Some Cambridge IGCSEs use A* to G.
        </p>
        <p>
          A-level is usually taught over two years after GCSE or IGCSE. In England the A-level is linear: the exams that decide the grade are at the end of the course. An AS in that system is a separate qualification, and its result does not contribute to the A-level grade. Cambridge International AS & A Level can be taken in stages, and an AS can contribute to the A Level. Edexcel’s International A Level is organised in units as well.
        </p>
        <p>
          CES Tuition teaches GCSE, IGCSE and A-level live online with Edexcel, Cambridge and OxfordAQA. The subjects offered are {offeredSubjects}.
        </p>
      </PageSection>

      <PageSection
        title="Exam boards"
        muted
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
          The exam boards are Edexcel, Cambridge and OxfordAQA.
        </p>
      </PageSection>

      <PageSection title="UK-trained subject specialists">
        <p>
          Lessons are taught by UK-trained subject specialists.
        </p>
        <p>
          We keep parents informed about how lessons are going. Parents can track progress in the CES parent app.
        </p>
        <p>
          IB is also offered.{' '}
          <a href="/#services" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            See the curricula
          </a>
          .
        </p>
      </PageSection>

      <PageSection title="How online one-to-one lessons work" muted>
        <p>
          Lessons are live and one-to-one, for families in every emirate. A student in Dubai, Abu Dhabi, Sharjah or elsewhere in the UAE joins a subject specialist on CES’s own online whiteboard.
        </p>
        <p>
          A lesson is 1 or 2 hours. Lesson times are scheduled through the CES parent app. Parents can track progress there as well.
        </p>
        <p>
          The registered office is Sharjah Media City (Shams), in Sharjah. Teaching is live online rather than in a classroom at that address.
        </p>
        <p>
          Exam preparation on this site includes past-paper practice, and lessons are paced for the student. A free 30-minute trial lesson is booked on WhatsApp.
        </p>
        <p>
          To ask about a place, send the curriculum, subject and year group on WhatsApp. This website does not store the enquiry.
        </p>
      </PageSection>

      <PageSection title="IGCSE and GCSE mathematics">
        <p>
          Mathematics is one of the subjects offered at IGCSE, GCSE and A-level. Foundation and Higher are not the same thing as Cambridge Core and Extended.
        </p>
        <p>
          <a href="/igcse-gcse-maths-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            IGCSE and GCSE maths tutor
          </a>
          {' '}covers IGCSE, GCSE and A-level Maths with Edexcel, Cambridge and OxfordAQA.
        </p>
      </PageSection>

      <FaqSection items={britishFaqs} />
    </PageShell>
  )
}
