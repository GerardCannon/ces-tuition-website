import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell, type FaqItem, type PageCrumb } from '@/pages/PageShell.tsx'

export const mathsCrumbs: PageCrumb[] = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
  { name: 'IGCSE and GCSE maths', path: '/igcse-gcse-maths-tutor/' },
]

export const mathsFaqs: FaqItem[] = [
  {
    question: 'Do you tutor GCSE maths for students in Dubai?',
    answer: 'GCSE and IGCSE mathematics lessons are live online and one-to-one, including for students in Dubai. The specifications CES Tuition currently teaches are not confirmed on this page: [Confirm: mathematics specifications offered].',
  },
  {
    question: 'Can an online maths tutor teach a student in Abu Dhabi?',
    answer: 'Lessons are live online for families in every emirate, including Abu Dhabi. The student joins from home. The video tool is not named on this page: [Confirm: the video tool used for live lessons].',
  },
  {
    question: 'What is the difference between Foundation and Higher?',
    answer: 'Foundation is the tier whose highest grade is 5. Higher is aimed at grades 9 to 4. England GCSE Mathematics and Pearson Edexcel International GCSE Mathematics A (4MA1) use these tiers. The student sits every paper at one tier. Cambridge IGCSE Mathematics does not use these names. It uses Core and Extended.',
  },
  {
    question: 'What is the difference between Core and Extended?',
    answer: 'Core and Extended are the Cambridge IGCSE tiers. On specification 0580, Core candidates are eligible for grades C to G and Extended candidates are eligible for grades A* to E. On specification 0980, Core candidates are eligible for grades 5 to 1 and Extended candidates are eligible for grades 9 to 3. Extended includes the Core content and goes further.',
  },
  {
    question: 'Which specification codes should I look for?',
    answer: 'Common codes are Cambridge 0580 and 0980, Pearson Edexcel International GCSE 4MA1 and 4MB1, Pearson Edexcel GCSE 1MA1, AQA 8300 and OCR J560. The code is usually on the school specification, a past paper or the textbook. Send it on WhatsApp if you have it. [Confirm: mathematics specifications offered]',
  },
  {
    question: 'How long is a maths lesson, and how do we arrange a time?',
    answer: 'Lesson length and how times are arranged for families in the UAE are not published on this page: [Confirm: lesson length] [Confirm: how lesson times are arranged]. Message us on WhatsApp with the year group and the specification code if you know it.',
  },
  {
    question: 'Who teaches the maths?',
    answer: 'A UK-trained subject specialist teaches the lesson one-to-one. Names and qualifications are not listed on this page: [Tutor name, subject, qualifications].',
  },
]

const specifications = [
  {
    title: 'Cambridge IGCSE Mathematics, 0580 and 0980',
    body: 'Cambridge IGCSE Mathematics (0580) is the syllabus for exams in 2025, 2026 and 2027. It is graded A* to G. Candidates are entered for Core or Extended. Core candidates are eligible for grades C to G. Extended candidates are eligible for grades A* to E. Extended content includes the Core content plus further material. Each route has two papers: one where a calculator is not allowed, and one where a scientific calculator is required. Cambridge IGCSE (9 to 1) Mathematics (0980) uses the same Core and Extended idea for exams in those years. Core candidates are eligible for grades 5 to 1. Extended candidates are eligible for grades 9 to 3. Cambridge also publishes International Mathematics (0607) and Additional Mathematics (0606). Those are separate syllabuses from 0580 and 0980.',
  },
  {
    title: 'Pearson Edexcel, 4MA1, 4MB1 and 1MA1',
    body: 'Pearson Edexcel International GCSE Mathematics A is specification 4MA1, graded 9 to 1, with Foundation and Higher. Foundation targets grades 5 to 1. Higher targets grades 9 to 4, and a grade 3 can be awarded. A calculator may be used in both papers. Pearson Edexcel International GCSE Mathematics B is specification 4MB1. It is linear and offered at Higher tier only, targeted at grades 9 to 4, with a grade 3 allowed. It has no Foundation tier. Pearson Edexcel GCSE (9 to 1) Mathematics, the England GCSE, is specification 1MA1. Foundation is grades 1 to 5. Higher is grades 4 to 9, with a grade 3 allowed. Students sit three papers at the same tier. Paper 1 does not allow a calculator. Papers 2 and 3 do.',
  },
  {
    title: 'AQA GCSE Mathematics, 8300',
    body: 'AQA GCSE Mathematics is specification 8300. It is an England GCSE, graded 9 to 1. Foundation is grades 1 to 5 and Higher is grades 4 to 9. A result just below grade 4 on Higher can be awarded grade 3. Students take three question papers, all at the same tier, in the same exam series. AQA does not use the Cambridge names Core and Extended for this qualification.',
  },
  {
    title: 'OCR GCSE Mathematics, J560',
    body: 'OCR GCSE (9 to 1) Mathematics is specification J560. Foundation entry is J560F, papers 1, 2 and 3, for grades 5 to 1. Higher entry is J560H, papers 4, 5 and 6, for grades 9 to 4. A result just below grade 4 on Higher can be awarded grade 3. This is an England GCSE. It is not a Cambridge IGCSE.',
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
            CES Tuition is an online maths tutor for families in Abu Dhabi, Dubai and the other emirates. Lessons are one-to-one and live online, with a UK-trained subject specialist, for IGCSE and GCSE mathematics.
          </p>
          <p>
            <a href="/curricula/british/" className="font-semibold underline underline-offset-4 hover:text-white/80">
              British curriculum tutor
            </a>
            {' '}covers GCSE, IGCSE and A-level more broadly, and how the exam boards differ.
          </p>
        </>
      }
      ctaTitle="Ask about a maths tutor"
      ctaBody={
        <p>
          Message us on WhatsApp with the year group and the specification code if you have it. This page does not store the message. [Confirm: mathematics specifications offered]
        </p>
      }
      whatsappDetails={whatsappDetails}
    >
      <PageSection
        title="Mathematics specifications by exam board"
        extra={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specifications.map((spec) => (
              <Card key={spec.title} className="p-6 md:p-8 border-border bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">{spec.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{spec.body}</p>
              </Card>
            ))}
          </div>
        }
      >
        <p>
          The code printed on a school specification, a textbook or an exam paper identifies the course. The codes below are published specification codes. They are not a statement of which ones CES Tuition is teaching. [Confirm: mathematics specifications offered]
        </p>
      </PageSection>

      <PageSection title="Foundation and Higher, Core and Extended" muted>
        <p>
          England GCSE Mathematics, and Pearson Edexcel International GCSE Mathematics A (4MA1), use Foundation and Higher. Foundation’s highest grade is 5. Higher is aimed at grades 9 to 4. On the England specifications a result just below grade 4 on Higher can be awarded grade 3, and Pearson states the same allowance for 4MA1 and for Mathematics B (4MB1).
        </p>
        <p>
          A student is entered for one tier and sits every paper at that tier. The tiers overlap around grades 4 and 5, so a student expected to land in that range can be entered either way. The school’s entry decides the tier. Changing tier changes the papers.
        </p>
        <p>
          Cambridge IGCSE Mathematics does not use Foundation and Higher. It uses Core and Extended. On 0580, Core leads to grades C to G and Extended leads to grades A* to E. On 0980, Core leads to grades 5 to 1 and Extended leads to grades 9 to 3. Extended includes every Core topic and adds more. A student is entered for one route.
        </p>
        <p>
          Pearson Edexcel International GCSE Mathematics B (4MB1) has neither a Foundation tier nor a Core route. The specification is Higher tier only.
        </p>
      </PageSection>

      <PageSection title="How online maths lessons work">
        <p>
          Lessons are live and one-to-one, for families in every emirate, including Dubai and Abu Dhabi. They are paced for the student. Exam preparation includes past-paper practice for the assessments on the student’s course.
        </p>
        <p>
          We keep parents informed about how lessons are going. You can follow progress and manage lessons in the CES portal. The registered office is Sharjah Media City (Shams), in Sharjah. The lesson itself is live online.
        </p>
        <p>
          A UK-trained subject specialist teaches the lesson. This page does not name the tutor. [Tutor name, subject, qualifications]
        </p>
        <p>
          These details are not published here:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>[Confirm: mathematics specifications offered]</li>
          <li>[Confirm: lesson length]</li>
          <li>[Confirm: how lesson times are arranged]</li>
          <li>[Confirm: the video tool used for live lessons]</li>
        </ul>
        <p>
          Send the year group, and the specification code if you know it, on WhatsApp. This website does not store the enquiry. For the wider British curriculum, see the{' '}
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
