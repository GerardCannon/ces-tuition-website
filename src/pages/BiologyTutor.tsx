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
      ctaTitle="Book your free 30‑minute trial"
      ctaBody={
        <p>
          Send us your child's year group and exam board on WhatsApp. We reply within the hour.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          We teach one-to-one online biology tuition, live, for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
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
          To get started, simply message us on WhatsApp and we'll arrange a free 30‑minute trial lesson, so we can put your mind at ease.
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
          We teach biology at <a href="/curricula/british/" className={linkClass}>IGCSE</a> and A-level, and in the IB MYP and Diploma Programme (DP).
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE biology' },
            { id: 'alevel', label: 'A-level biology' },
            { id: 'ib', label: 'IB biology' },
          ]}
        />
        <p>
          We also teach <a href="/chemistry-tutor/" className={linkClass}>chemistry</a> and <a href="/physics-tutor/" className={linkClass}>physics</a>, as well as <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
      </PageSection>

      <PageSection id="ib-biology" title="IB biology (MYP and Diploma)">
        <p>
          We teach IB biology in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.
        </p>
        <p>
          In the DP, biology is taken at Higher Level or Standard Level. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme.
        </p>
      </PageSection>

      <PageSection id="igcse-biology" title="IGCSE biology for UAE students" muted>
        <p>
          At IGCSE we teach Edexcel and OxfordAQA biology, live and online, for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
      </PageSection>

      <PageSection id="a-level-biology" title="A-level biology">
        <p>
          At A-level we teach Edexcel International A Level and OxfordAQA International A Level biology. You can read more about A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
      </PageSection>

      <FaqSection items={biologyFaqs} />
    </PageShell>
  )
}
