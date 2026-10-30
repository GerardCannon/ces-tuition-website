import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { britishCrumbs, britishFaqs } from '@/pages/britishCurriculumData.ts'

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

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function BritishCurriculum() {
  return (
    <PageShell
      crumbs={britishCrumbs}
      title="Online IGCSE, GCSE and British curriculum tuition for families in Dubai and the UAE"
      lede={
        <p>
          Many schools in the UAE teach the IGCSE. If your child is finding a subject difficult, or wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child’s subject and year group on WhatsApp, and we’ll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Every lesson is live, one-to-one and online, so families in Dubai, Abu Dhabi, Sharjah and across the UAE join without travelling.
        </p>
        <p>
          Your child has one-to-one lessons with our UK‑trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard replicates an in-person lesson, as we share a fully interactive digital school copybook with each student.
        </p>
        <p>
          Lessons typically last one or two hours, as you prefer.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we’ll arrange a free trial lesson, so we can put your mind at ease.
        </p>
        <p>
          Lessons typically follow what your child is learning at school. Some parents come to us after a disappointing grade; others want their child to feel better prepared for an upcoming test, or simply to get ready for the end-of-year exams.
        </p>
        <p>
          If your child is stuck on a piece of homework, we’ll always start by working through it together.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          You don’t need to plan every subject at once. Start with the one that concerns you most.
        </p>
        <p>
          If you’ve recently moved to the UAE or changed school, your child may find the new class is ahead in some areas. If so, let us know and we’ll help them catch up.
        </p>
        <p>
          When you message us, it helps to tell us the subject, your child’s year group and the exam board. If you’re not sure of the board, your child’s school will be able to tell you, or we can work it out together.
        </p>
      </PageSection>

      <PageSection title="IGCSE and GCSE subjects">
        <p>
          We teach IGCSE and GCSE <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/biology-tutor/" className={linkClass}>biology</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
        <p>
          If your child’s subject isn’t listed, just ask us. We also teach <a href="/a-level-tutor/" className={linkClass}>A-level</a>, and you can read about the IB on our <a href="/curricula/ib/" className={linkClass}>IB page</a>.
        </p>
      </PageSection>

      <PageSection title="Years 10 and 11" muted>
        <p>
          IGCSE and GCSE courses usually run through Years 10 and 11. Gaps from earlier years often show up then, because the work builds on what students have already covered.
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
          We teach courses from Edexcel, Cambridge and OxfordAQA.
        </p>
      </PageSection>

      <PageSection title="Maths" muted>
        <p>
          Maths has a few extra options, such as different levels of exam paper, depending on the exam board. You can read more on our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>IGCSE, GCSE and A-level maths page</a>.
        </p>
      </PageSection>

      <FaqSection items={britishFaqs} />
    </PageShell>
  )
}
