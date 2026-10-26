import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { englishCrumbs, englishFaqs } from '@/pages/englishTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function EnglishTutor() {
  return (
    <PageShell
      crumbs={englishCrumbs}
      title="English tutor for families in the UAE"
      lede={
        <p>
          Strong reading and writing help in every subject, not only in English lessons. If your child is finding English difficult, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's year group and exam board on WhatsApp, and we'll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one English lessons with our UK-trained subject specialists on our interactive online whiteboard.
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
          Lessons follow what your child is studying at school. If they're stuck on a piece of homework, we'll always start by working through it together. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="How we help with English" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Reading closely</h3>
          <p>
            Many English questions ask students to look carefully at a piece of writing and explain how it works. We read passages together and talk through what the writer is doing and why.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Planning longer answers</h3>
          <p>
            A good idea can get lost in a long answer. We help your child plan before they write, so each paragraph makes a clear point.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Using evidence</h3>
          <p>
            Answers usually need to be backed up with short quotations or examples. We practise choosing evidence and explaining it, rather than simply repeating it.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Writing to a time limit</h3>
          <p>
            Writing in an exam feels different from writing at home. We practise planning, writing and checking within a set time, so your child gets used to the pace.
          </p>
        </div>
      </PageSection>

      <PageSection title="Levels we teach">
        <p>
          We teach English at GCSE, IGCSE and A-level, and in the IB.
        </p>
        <p>
          A-level English goes into more depth than GCSE or IGCSE. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme.
        </p>
        <p>
          We also teach <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/physics-tutor/" className={linkClass}>physics</a> and <a href="/biology-tutor/" className={linkClass}>biology</a>.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          When you message us, it helps to tell us your child's year group, the exam board and what they find hardest, such as reading, essays or timed writing. If you're not sure of the board, your child's school will be able to tell you, or we can work it out together.
        </p>
      </PageSection>

      <FaqSection items={englishFaqs} />
    </PageShell>
  )
}
