import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { biologyCrumbs, biologyFaqs } from '@/pages/biologyTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function BiologyTutor() {
  return (
    <PageShell
      crumbs={biologyCrumbs}
      title="Online IGCSE, A‑level and IB biology tutor for families in Dubai and the UAE"
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
          We offer live one-to-one online biology tuition for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <p>
          Your child has one-to-one biology lessons with our UK‑trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard feels like an in-person lesson, because we share a fully interactive digital copybook with each student.
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
            From cell biology to genetics, ecology and the human body, the course is wide. We help your child break the course into manageable sections and see how they link, which makes it all easier to remember.
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
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IB biology is assessed</h3>
          <p>
            In the IB Diploma Programme, 80% of the final mark comes from external exams and 20% from an internal assessment. The internal assessment is a scientific investigation. It is marked by your child's teacher and checked by the IB, and the work must be your child's own. The two exam papers are Paper 1 (36%: multiple-choice and data-based questions) and Paper 2 (44%). At Standard Level, both papers last 1 hour 30 minutes. At Higher Level, Paper 1 lasts 2 hours and Paper 2 lasts 2 hours 30 minutes. Check with the school for the exact guide it follows.
          </p>
          <p>
            The paper times and weightings are in the <a href="https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/subject-guides/biology-guide.pdf" target="_blank" rel="noopener" className={linkClass}>IB biology guide</a> (first assessment 2025).
          </p>
        </div>
      </PageSection>

      <PageSection id="igcse-biology" title="IGCSE biology for UAE students" muted>
        <p>
          At IGCSE we teach Edexcel, Cambridge and OxfordAQA biology, live and online, for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IGCSE biology is assessed</h3>
          <p>
            Edexcel International GCSE biology has two routes with the same content. On the linear route there are two written papers: Paper 1 (2 hours, 61.1% of the International GCSE) and Paper 2 (1 hour 15 minutes, 38.9%). On the modular route, which is only available to schools outside the UK, there are two units of 1 hour 40 minutes, each worth 50%, and they can be taken in any exam series. There is no coursework and no practical exam. Cambridge IGCSE biology has Core and Extended content. Core students take Paper 1 (multiple-choice, 45 minutes, 30%) and Paper 3 (theory, 1 hour 15 minutes, 50%). Extended students take Paper 2 (multiple-choice, 45 minutes, 30%) and Paper 4 (theory, 1 hour 15 minutes, 50%). Every student also takes one practical paper worth 20%: either Paper 5, a practical test of 1 hour 15 minutes, or Paper 6, an alternative to practical of 1 hour. OxfordAQA International GCSE biology is linear: two papers of 1 hour 30 minutes, each worth 50%, and either paper can test any part of the course. Your child's school decides the board and the route. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's routes are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/General/pearson-edexcel-international-gcse-science-guide.pdf" target="_blank" rel="noopener" className={linkClass}>Pearson International GCSE science guide</a>. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-biology-0610/" target="_blank" rel="noopener" className={linkClass}>Cambridge IGCSE Biology (0610)</a> page. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-gcse-biology-9201/" target="_blank" rel="noopener" className={linkClass}>International GCSE Biology (9201)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-biology" title="A-level biology">
        <p>
          At A-level we teach Edexcel International A Level, Cambridge International AS and A Level, and OxfordAQA International A Level biology. You can read more about A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level biology is assessed</h3>
          <p>
            Edexcel International A Level biology has six written papers. Units 1 and 2 each last 1 hour 30 minutes and are worth 20% of the International A Level. Unit 3, a practical-skills paper, lasts 1 hour 20 minutes and is worth 10%. Units 4 and 5 each last 1 hour 45 minutes and are worth 20%. Unit 6, the second practical-skills paper, lasts 1 hour 20 minutes and is worth 10%.
          </p>
          <p>
            Cambridge International AS and A Level biology has five papers. The percentages are shares of the full A Level. Paper 1 is multiple-choice, lasts 1 hour 15 minutes and is worth 15.5%. Paper 2 lasts 1 hour 15 minutes and is worth 23%. Paper 3 is a 2-hour practical paper worth 11.5%. Paper 4 lasts 2 hours and is worth 38.5%. Paper 5 is a planning, analysis and evaluation paper that lasts 1 hour 15 minutes and is worth 11.5%.
          </p>
          <p>
            OxfordAQA International A Level biology has five written papers. Each lasts 1 hour 30 minutes and is worth 20% of the International A Level.
          </p>
          <p>
            Your child's school decides the board. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's units are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Biology/2018/Specification-and-Sample-Assessment/International-A-Level-Biology-Spec.pdf" target="_blank" rel="noopener" className={linkClass}>International A Level Biology specification</a>. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-biology-9700/" target="_blank" rel="noopener" className={linkClass}>Cambridge International AS and A Level Biology (9700)</a> page. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/" target="_blank" rel="noopener" className={linkClass}>International AS and A-level Biology (9610)</a> page.
          </p>
        </div>
      </PageSection>

      <FaqSection items={withVisibleTrialHyphen(biologyFaqs)} />
    </PageShell>
  )
}
