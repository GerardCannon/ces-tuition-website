import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { economicsCrumbs, economicsFaqs } from '@/pages/economicsTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function EconomicsTutor() {
  return (
    <PageShell
      crumbs={economicsCrumbs}
      title="Economics tutor for families in Dubai and the UAE"
      lede={
        <p>
          Economics asks students to explain, draw and argue, not just remember. If your child is new to the subject or finds it hard to turn what they know into clear written answers, we can help.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's year group and which economics course they take on WhatsApp, and we'll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          We teach economics to families in Dubai, Abu Dhabi, Sharjah and across the UAE. Every lesson is live and online, so there's no travel involved.
        </p>
        <p>
          Your child has one-to-one economics lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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
          Lessons follow what your child is learning at school. If they're stuck on a piece of homework, we'll always start by working through it together. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="Where economics gets difficult" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Diagrams</h3>
          <p>
            Supply and demand, costs and the wider economy are all shown on diagrams, and small mistakes with labels or shifts can cost marks. We practise drawing them accurately and explaining what each change shows.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Using data</h3>
          <p>
            Many questions give a table, a chart or a short article and ask what it shows. We help your child pick out the figures that matter and use them in their answer, rather than just repeating them.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Longer written answers</h3>
          <p>
            Higher-mark questions ask students to weigh up both sides and reach a judgement. We work on building an argument step by step, so your child knows how to develop a point and when to bring in evaluation.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Linking theory to the real world</h3>
          <p>
            Economics makes more sense when it connects to real events. We use current examples to bring the theory to life and help your child use them in their own answers.
          </p>
        </div>
      </PageSection>

      <PageSection title="Levels we teach">
        <p>
          We teach economics at GCSE, IGCSE, A-level and in the IB.
        </p>
        <p>
          At GCSE and IGCSE, students meet the key ideas for the first time and learn to explain them clearly in written answers. You can read more on our <a href="/curricula/british/" className={linkClass}>British curriculum page</a>.
        </p>
        <p>
          Many students start economics fresh at A-level, and the course moves from the basic ideas to longer essays quite quickly. You can read more about the move to A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          In the IB Diploma Programme, economics is one of the subjects students can choose. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the Diploma Programme and the other IB subjects we teach.
        </p>
        <p>
          If your child is studying economics at another level, message us and we'll let you know how we can help.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          When you message us, it helps to tell us your child's year group, which course they take (GCSE, IGCSE, A-level or IB), and which exam board their school uses if you know it. If you're not sure, your child's school will be able to tell you, or we can work it out together.
        </p>
        <p>
          If your child has just started economics, or has recently moved to the UAE or changed school, let us know. We'll start with the basics their class is building on.
        </p>
      </PageSection>

      <FaqSection
        items={economicsFaqs.map((item) =>
          item.question === 'Does my child need to be good at maths for economics?'
            ? {
                question: item.question,
                answer: (
                  <>
                    Some topics use percentages, graphs and simple calculations, and we'll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths page</a>.
                  </>
                ),
              }
            : item,
        )}
      />
    </PageShell>
  )
}
