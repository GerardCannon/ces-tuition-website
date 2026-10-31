import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { biologyCrumbs, biologyFaqs } from '@/pages/biologyTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function BiologyTutor() {
  return (
    <PageShell
      crumbs={biologyCrumbs}
      title="Biology tutor for families in Dubai and the UAE"
      lede={
        <p>
          Biology covers a lot of ground, and good answers depend on understanding the ideas and using the right words. If your child is finding biology difficult, or simply wants to feel more confident, we can help.
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
          Your child has one-to-one biology lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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
          Lessons follow the topics your child is covering at school, and we can go back over earlier ones if needed. You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="Where students often need help" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">A lot to learn</h3>
          <p>
            From cell biology to genetics, ecology and the human body, the course is wide. We help your child break it into manageable sections and see how they link, which makes it easier to remember.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Key terms</h3>
          <p>
            Biology has its own vocabulary, and answers often need particular words. We help your child learn these terms and use them accurately.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Long-answer questions</h3>
          <p>
            Longer questions may ask your child to explain a process in order or weigh up evidence. We practise planning and writing these answers together.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Data and practical work</h3>
          <p>
            Exams often include graphs, tables and questions about experiments. We go through how to read data, describe a pattern and comment on a method.
          </p>
        </div>
      </PageSection>

      <PageSection title="Revising biology">
        <p>
          Many students find biology easier to revise little and often. Before mocks and final exams, we can help your child plan revision, revisit difficult topics and practise past-paper questions.
        </p>
      </PageSection>

      <PageSection title="Levels we teach" muted>
        <p>
          We teach biology at GCSE, <a href="/curricula/british/" className={linkClass}>IGCSE</a> and A-level, and in the IB. You can read more about A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          In the IB Diploma Programme, biology is taken at Higher Level or Standard Level. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the Diploma Programme.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE or GCSE biology' },
            { id: 'alevel', label: 'A-level biology' },
            { id: 'ib', label: 'IB biology' },
          ]}
        />
        <p>
          We also teach <a href="/chemistry-tutor/" className={linkClass}>chemistry</a> and <a href="/physics-tutor/" className={linkClass}>physics</a>, as well as <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
      </PageSection>

      <FaqSection items={biologyFaqs} />
    </PageShell>
  )
}
