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
    answer: 'GCSE, IGCSE and A-level. CES Tuition teaches these live online, one-to-one, for families across the UAE. The exam boards we currently teach are not confirmed on this page: [Confirm: boards offered].',
  },
  {
    question: 'Do you have an IGCSE tutor for Dubai?',
    answer: 'Lessons are live online, so a student in Dubai has a one-to-one lesson in the same way as a student in any other emirate. Send the subject, year group and exam board on WhatsApp. [Confirm: boards offered]',
  },
  {
    question: 'What is the difference between GCSE and IGCSE?',
    answer: 'GCSE is the qualification used in England, Wales and Northern Ireland. In England it is graded 9 to 1. IGCSE is the international version. Cambridge IGCSE and Pearson Edexcel International GCSE are the ones international schools use most often. Some specifications are graded 9 to 1, and some Cambridge IGCSEs are graded A* to G.',
  },
  {
    question: 'Which exam boards can you teach?',
    answer: 'The boards families usually ask about are Cambridge, Pearson Edexcel, AQA and OCR. An OCR GCSE is not the same qualification as a Cambridge IGCSE. The boards CES Tuition currently teaches are not confirmed on this page: [Confirm: boards offered].',
  },
  {
    question: 'Are lessons taught by UK-trained subject specialists?',
    answer: 'Yes. Lessons are taught by UK-trained subject specialists. Names are not published on this page: [Tutor name, subject, qualifications].',
  },
  {
    question: 'How do online lessons work for a family in the UAE?',
    answer: 'Lessons are live and one-to-one, across all emirates. Parents can track progress in the CES parent app, and we keep parents informed about how lessons are going. A free 30-minute trial lesson is booked on WhatsApp. Lesson length, the video tool and how times are arranged are not published on this page: [Confirm: lesson length] [Confirm: how lesson times are arranged] [Confirm: the video tool used for live lessons].',
  },
  {
    question: 'Do you teach A-level as well as IGCSE?',
    answer: `CES Tuition teaches A-level as well as GCSE and IGCSE. The subjects offered at GCSE, IGCSE and A-level are ${offeredSubjects}.`,
  },
]

const boards = [
  {
    title: 'Cambridge',
    body: 'Cambridge Assessment International Education publishes Cambridge IGCSE and Cambridge International AS & A Level. International schools, including many in the UAE, enter students for these qualifications. Cambridge IGCSE Mathematics uses Core and Extended, not Foundation and Higher.',
  },
  {
    title: 'Pearson Edexcel',
    body: 'Pearson awards England GCSEs and International GCSEs, and England A-levels and International A-levels, under the Edexcel name. On its mathematics courses, GCSE and International GCSE Mathematics A use Foundation and Higher.',
  },
  {
    title: 'AQA',
    body: 'AQA is an England exam board. Schools that follow the England curriculum use its GCSE and A-level specifications. AQA GCSE Mathematics uses Foundation and Higher.',
  },
  {
    title: 'OCR',
    body: 'OCR (Oxford, Cambridge and RSA) is an England exam board. An OCR GCSE is not a Cambridge IGCSE. The two qualifications come from related organisations and use different specifications. OCR GCSE Mathematics uses Foundation and Higher.',
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
          CES Tuition is a British curriculum tutor for families across the UAE, including an IGCSE tutor for students in Dubai. Lessons are one-to-one and live online, with a UK-trained subject specialist, for GCSE, IGCSE and A-level.
        </p>
      }
      ctaTitle="Ask about a British curriculum tutor"
      ctaBody={
        <p>
          Book a free 30-minute trial lesson on WhatsApp, and send the subject, the year group and the exam board if you know it. This page does not store the message. [Confirm: boards offered]
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection title="GCSE, IGCSE and A-level">
        <p>
          GCSE means General Certificate of Secondary Education. In England it is the qualification most students take at the end of Year 11, and it is graded 9 to 1. Wales and Northern Ireland have their own GCSE arrangements, so the papers a student sits depend on the school and the exam board.
        </p>
        <p>
          IGCSE means International GCSE. Cambridge uses the name Cambridge IGCSE. Pearson uses Pearson Edexcel International GCSE. International schools use these qualifications, and many schools in the UAE do. The grade scale depends on the specification. Some use 9 to 1. Some Cambridge IGCSEs use A* to G.
        </p>
        <p>
          A-level is usually taught over two years after GCSE or IGCSE. In England the A-level is linear: the exams that decide the grade are at the end of the course. An AS in that system is a separate qualification, and its result does not contribute to the A-level grade. Cambridge International AS & A Level can be taken in stages, and an AS can contribute to the A Level. Pearson’s International A Level is organised in units as well.
        </p>
        <p>
          CES Tuition teaches GCSE, IGCSE and A-level live online. The subjects offered at GCSE, IGCSE and A-level are {offeredSubjects}. The exam boards are not confirmed on this page. [Confirm: boards offered]
        </p>
      </PageSection>

      <PageSection
        title="Exam boards"
        muted
        extra={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boards.map((board) => (
                <Card key={board.title} className="p-6 md:p-8 border-border bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-3">{board.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{board.body}</p>
                </Card>
              ))}
            </div>
            <p className="max-w-3xl mt-8 text-lg text-muted-foreground leading-relaxed">
              Ask us which of these boards we can cover for your child. [Confirm: boards offered]
            </p>
          </>
        }
      >
        <p>
          Four boards come up most often when a family asks for a British curriculum tutor. The notes below describe the qualifications. They are not a list of what CES Tuition is teaching this term.
        </p>
      </PageSection>

      <PageSection title="UK-trained subject specialists">
        <p>
          Lessons are taught by UK-trained subject specialists.
        </p>
        <p>
          This page does not name individual subject specialists. [Tutor name, subject, qualifications]
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
          Lessons are live and one-to-one, for families in every emirate. A student in Dubai, Abu Dhabi, Sharjah or elsewhere in the UAE joins online with a subject specialist.
        </p>
        <p>
          The registered office is Sharjah Media City (Shams), in Sharjah. Teaching is live online rather than in a classroom at that address.
        </p>
        <p>
          Exam preparation on this site includes past-paper practice, and lessons are paced for the student. Three practical details are not published here:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>[Confirm: lesson length]</li>
          <li>[Confirm: how lesson times are arranged]</li>
          <li>[Confirm: the video tool used for live lessons]</li>
        </ul>
        <p>
          To ask about a place, send the curriculum, subject and year group on WhatsApp. This website does not store the enquiry.
        </p>
      </PageSection>

      <PageSection title="IGCSE and GCSE mathematics">
        <p>
          Mathematics has its own specification codes and tiers. Foundation and Higher are not the same thing as Cambridge Core and Extended.
        </p>
        <p>
          <a href="/igcse-gcse-maths-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
            IGCSE and GCSE maths tutor
          </a>
          {' '}covers the Cambridge, Pearson Edexcel, AQA and OCR mathematics specifications, including which codes use which tier.
        </p>
      </PageSection>

      <FaqSection items={britishFaqs} />
    </PageShell>
  )
}
