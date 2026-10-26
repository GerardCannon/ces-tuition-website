import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { ibCrumbs, ibFaqs } from '@/pages/ibCurriculumData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function IbCurriculum() {
  return (
    <PageShell
      crumbs={ibCrumbs}
      title="Online IB tuition for families in Dubai and across the UAE"
      lede={
        <p>
          Many families in the UAE follow the International Baccalaureate (IB). If your child is finding a subject difficult, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's subject and year group on WhatsApp, and we'll get back to you.
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
          Lessons typically follow what your child is learning at school. Some parents come to us after a disappointing grade; others want their child to feel better prepared for an upcoming test, or simply to get ready for the end-of-year exams.
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
          If you've recently moved to the UAE or changed school, your child may find the new class is ahead in some areas. If so, let us know and we'll help them catch up.
        </p>
        <p>
          When you message us, it helps to tell us the subject, your child's year group and whether they're in the MYP or the DP. If you're not sure, your child's school will be able to tell you, or we can work it out together.
        </p>
      </PageSection>

      <PageSection title="MYP and DP">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Middle Years Programme (MYP)</h3>
          <p>
            The MYP covers the middle years of secondary school and leads on to the DP. It's a good time to strengthen the basics.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Diploma Programme (DP)</h3>
          <p>
            The DP covers the final two years of school, with some subjects taken at Higher Level and others at Standard Level. Students also complete internal assessments, which are pieces of coursework done during the course, and we can help with these too.
          </p>
        </div>
      </PageSection>

      <PageSection title="Subjects" muted>
        <p>
          We teach a range of IB subjects, such as maths, <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/biology-tutor/" className={linkClass}>biology</a>, economics, business management, <a href="/english-tutor/" className={linkClass}>English</a> and computer science. If your child's subject isn't listed, just ask us. We also teach the British curriculum, which you can read about on our <a href="/curricula/british/" className={linkClass}>British curriculum page</a>.
        </p>
      </PageSection>

      <FaqSection items={ibFaqs} />
    </PageShell>
  )
}
