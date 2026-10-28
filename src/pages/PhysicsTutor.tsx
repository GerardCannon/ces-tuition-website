import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { physicsCrumbs, physicsFaqs } from '@/pages/physicsTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function PhysicsTutor() {
  return (
    <PageShell
      crumbs={physicsCrumbs}
      title="Physics tutor for families in Dubai and the UAE"
      lede={
        <p>
          Physics asks students to understand an idea, use maths and explain their answer in words, often in the same question. If your child is finding physics difficult, or simply wants to feel more confident, we can help.
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
          Your child has one-to-one physics lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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
          We start from what your child is covering at school. If they're losing marks on a particular kind of question, that's where we begin. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="How we help with physics" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Using equations</h3>
          <p>
            Much of physics comes down to choosing the right equation, rearranging it and keeping track of units. We break this into clear steps and practise until it feels natural.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Ideas that are hard to picture</h3>
          <p>
            Topics such as electricity, waves and forces can be difficult to imagine. On our whiteboard we draw diagrams step by step, so your child can see how it fits together.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Explaining in words</h3>
          <p>
            Some questions ask your child to describe or explain rather than calculate. We help them write short, clear answers that use the right terms.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Graphs and experiments</h3>
          <p>
            Reading and drawing graphs, and describing experiments, come up throughout the course. We practise these alongside the topics they belong to.
          </p>
        </div>
      </PageSection>

      <PageSection title="Physics and maths">
        <p>
          If maths is holding your child back, we'll work on it within the lesson. If they'd like separate maths lessons as well, see our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths page</a>.
        </p>
      </PageSection>

      <PageSection title="Levels we teach" muted>
        <p>
          We teach physics at GCSE, IGCSE and A-level, and in the IB.
        </p>
        <p>
          A-level physics uses more maths than GCSE or IGCSE, and topics such as mechanics are taken further. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          In the IB Diploma Programme, physics is taken at Higher Level or Standard Level, and students complete an internal assessment. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the Diploma Programme.
        </p>
        <p>
          We also teach <a href="/chemistry-tutor/" className={linkClass}>chemistry</a> and <a href="/biology-tutor/" className={linkClass}>biology</a>.
        </p>
      </PageSection>

      <FaqSection items={physicsFaqs} />
    </PageShell>
  )
}
