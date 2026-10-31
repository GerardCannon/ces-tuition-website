import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { chemistryCrumbs, chemistryFaqs } from '@/pages/chemistryTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function ChemistryTutor() {
  return (
    <PageShell
      crumbs={chemistryCrumbs}
      title="Chemistry tutor for families in Dubai and the UAE"
      lede={
        <p>
          Chemistry builds on itself, so a gap in one topic can make the next one harder. If your child is finding chemistry difficult, or simply wants to feel more confident, we can help.
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
          Your child has one-to-one chemistry lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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

      <PageSection title="Where chemistry gets difficult" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Calculations</h3>
          <p>
            Many students follow the ideas but lose marks on the numbers, such as moles, concentrations and percentage yield. We go through each step slowly, then practise until the method feels routine.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Equations and written answers</h3>
          <p>
            Writing and balancing equations, and using the right terms in written answers, can feel like learning a new language. We help your child practise both, so they can explain what is happening as well as work it out.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Organic chemistry</h3>
          <p>
            At A-level, organic chemistry brings new reactions, names and mechanisms. It helps to see how they connect rather than learn each one on its own, and that's how we approach it.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Practical work</h3>
          <p>
            Exam papers often ask about experiments done in class. We go over the methods, the results and what could go wrong, so these questions feel familiar.
          </p>
        </div>
      </PageSection>

      <PageSection title="Levels we teach">
        <p>
          We teach chemistry at GCSE, <a href="/curricula/british/" className={linkClass}>IGCSE</a> and A-level, and in the IB.
        </p>
        <p>
          A-level chemistry goes into more depth than GCSE or IGCSE, and the calculations get longer. You can read more about the move to A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          In the IB Diploma Programme, chemistry is taken at Higher Level or Standard Level, and students complete an internal assessment. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the Diploma Programme.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE or GCSE chemistry' },
            { id: 'alevel', label: 'A-level chemistry' },
            { id: 'ib', label: 'IB chemistry' },
          ]}
        />
        <p>
          We also teach the other sciences, <a href="/physics-tutor/" className={linkClass}>physics</a> and <a href="/biology-tutor/" className={linkClass}>biology</a>, as well as <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
      </PageSection>

      <FaqSection
        items={chemistryFaqs.map((item) =>
          item.question === 'Does my child need to be good at maths for chemistry?'
            ? {
                question: item.question,
                answer: (
                  <>
                    Some topics involve calculations, and we'll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths page</a>.
                  </>
                ),
              }
            : item,
        )}
      />
    </PageShell>
  )
}
