import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { alevelCrumbs, alevelFaqs } from '@/pages/alevelTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function AlevelTutor() {
  return (
    <PageShell
      crumbs={alevelCrumbs}
      title="A-level tuition for families in Dubai and the UAE"
      lede={
        <p>
          Many families in the UAE choose A-levels for the final two years of school. If your child is finding a subject difficult, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's subject, year group and exam board on WhatsApp, and we'll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one lessons with our UK‑trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard replicates an in-person lesson, as we share a fully interactive digital school copybook with each student.
        </p>
        <p>
          Lessons last one or two hours, whichever suits you, and are scheduled through our app.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we'll arrange a free trial lesson, so we can put your mind at ease.
        </p>
        <p>
          Lessons typically follow what your child is learning at school. Some parents come to us after a disappointing grade; others want their child to feel better prepared for an upcoming test, or to get ready for their exams.
        </p>
        <p>
          If your child is stuck on a piece of homework, we'll always start by working through it together. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          You don't need to plan every subject at once. Start with the one that concerns you most.
        </p>
        <p>
          When you message us, it helps to tell us the subject, your child's year group and the exam board. If you're not sure of the board, your child's school will be able to tell you, or we can work it out together.
        </p>
      </PageSection>

      <PageSection title="A-level: Year 12 and Year 13">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">The step up from GCSE and IGCSE</h3>
          <p>
            A-level goes into more depth than GCSE or IGCSE, and students are expected to work more independently. If your child is finding the step up hard, lessons can help them settle in.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Exams in Year 12 and Year 13</h3>
          <p>
            A-level is usually a two-year course. Depending on the exam board and school, your child may sit some exams at the end of Year 12, often called AS, or all of them at the end of Year 13.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Mocks and final exams</h3>
          <p>
            Before mocks and final exams, we can help your child plan revision, revisit difficult topics and practise past-paper questions.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Looking ahead to university</h3>
          <p>
            If your child hopes to study one of their subjects at university, we can help them build a deeper understanding of it.
          </p>
        </div>
      </PageSection>

      <PageSection title="Subjects" muted>
        <p>
          We teach a range of A-level subjects, such as maths, <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/biology-tutor/" className={linkClass}>biology</a>, <a href="/economics-tutor/" className={linkClass}>economics</a>, business studies, English and computer science. If your child's subject isn't listed, just ask us. You can read more about maths on our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths page</a>. We also teach the IB, which you can read about on our <a href="/curricula/ib/" className={linkClass}>IB page</a>.
        </p>
      </PageSection>

      <FaqSection items={alevelFaqs} />
    </PageShell>
  )
}
