import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { americanCrumbs, americanFaqs } from '@/pages/americanCurriculumData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function AmericanCurriculum() {
  return (
    <PageShell
      crumbs={americanCrumbs}
      title="American curriculum and SAT tuition for families in the UAE"
      lede={
        <p>
          Many families in the UAE choose a school that follows an American curriculum. If your child is finding a subject difficult, is getting ready for the SAT, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's grade and the subject they need help with, or tell us you're asking about the SAT, and we'll get back to you on WhatsApp.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one lessons with our UK-trained subject specialists on our interactive online whiteboard.
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
          You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="SAT preparation" muted>
        <p>
          We help high school students prepare for the SAT. The test covers maths and reading and writing, and we work on both.
        </p>
        <p>
          In the first lessons, we talk through which kinds of questions your child finds hardest, then focus on those topics and practise SAT-style questions together. Your child can ask questions at any point, and we'll go through each step until it makes sense.
        </p>
        <p>
          If you know when your child plans to sit the SAT, tell us, so we can plan lessons around that date.
        </p>
      </PageSection>

      <PageSection title="School subjects">
        <p>
          We also help with school subjects, such as maths or English. Lessons typically follow what your child is learning at school. Some parents come to us after a disappointing grade; others want their child to feel better prepared for an upcoming test.
        </p>
        <p>
          If your child is stuck on a piece of homework, we'll always start by working through it together.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          You don't need to plan everything at once. Start with whatever concerns you most, whether that's a school subject or the SAT.
        </p>
        <p>
          Schools that follow an American curriculum don't all offer the same courses, so it helps to know what your child is studying. When you message us, tell us your child's grade and the subject or course, or that you're asking about the SAT.
        </p>
        <p>
          If your child has recently changed school, they may find the new class is ahead in some areas. If so, let us know and we'll help them catch up.
        </p>
      </PageSection>

      <PageSection title="Other curricula">
        <p>
          We also teach the British curriculum and the IB, which you can read about on our <a href="/curricula/british/" className={linkClass}>British curriculum page</a> and our <a href="/curricula/ib/" className={linkClass}>IB page</a>.
        </p>
      </PageSection>

      <FaqSection items={americanFaqs} />
    </PageShell>
  )
}
