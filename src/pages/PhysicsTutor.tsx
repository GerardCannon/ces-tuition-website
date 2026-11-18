import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { physicsCrumbs, physicsFaqs } from '@/pages/physicsTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function PhysicsTutor() {
  return (
    <PageShell
      crumbs={physicsCrumbs}
      title="Online IGCSE, A‑level and IB physics tutor for families in Dubai and the UAE"
      lede={
        <p>
          Physics asks students to understand an idea, use maths and explain their answer in words, often in the same question. If your child is finding physics difficult, or simply wants to feel more confident, we can help.
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
          We offer live one-to-one online physics tuition for students in Dubai, Abu Dhabi, Sharjah and across the UAE, for Edexcel, Cambridge and OxfordAQA courses.
        </p>
        <p>
          Your child has one-to-one physics lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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
            Topics such as electricity, waves and forces can be difficult to imagine. On our whiteboard we draw diagrams step by step, so your child can see how the ideas fit together.
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
          We teach physics at <a href="/curricula/british/" className={linkClass}>IGCSE</a> and A-level, and in the IB MYP and Diploma Programme (DP). Edexcel offers International GCSE and International A Level, Cambridge offers IGCSE and International AS and A Level, and OxfordAQA offers International GCSE and International AS and A Level.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE physics' },
            { id: 'alevel', label: 'A-level physics' },
            { id: 'ib', label: 'IB physics' },
          ]}
        />
        <p>
          We also teach <a href="/chemistry-tutor/" className={linkClass}>chemistry</a> and <a href="/biology-tutor/" className={linkClass}>biology</a>, as well as <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>.
        </p>
      </PageSection>

      <PageSection id="igcse-physics" title="IGCSE physics">
        <p>
          We teach IGCSE physics live and online for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IGCSE physics is assessed</h3>
          <p>
            Edexcel International GCSE physics has a linear route and a modular route, and the content is the same on both. Students on the linear route sit two written papers: Paper 1 lasts 2 hours and is worth 61.1% of the International GCSE, and Paper 2 lasts 1 hour 15 minutes and is worth 38.9%. The modular route is only available to schools outside the UK. It has two units of 1 hour 40 minutes, each worth 50%, and each unit can be taken in any exam series. There is no coursework and no practical exam.
          </p>
          <p>
            Cambridge IGCSE physics has Core and Extended content. Core students take Paper 1 (multiple-choice, 45 minutes, 30%) and Paper 3 (theory, 1 hour 15 minutes, 50%). Extended students take Paper 2 (multiple-choice, 45 minutes, 30%) and Paper 4 (theory, 1 hour 15 minutes, 50%). Every student also takes one practical paper worth 20%: either Paper 5, a practical test of 1 hour 15 minutes, or Paper 6, an alternative to practical of 1 hour.
          </p>
          <p>
            OxfordAQA International GCSE physics is linear: two papers of 1 hour 30 minutes, each worth 50%, and either paper can test any part of the course. There is no separate practical paper, because practical knowledge is assessed in these two papers.
          </p>
          <p>
            Your child's school decides the board and the route. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's routes are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/General/pearson-edexcel-international-gcse-science-guide.pdf" target="_blank" rel="noopener" className={linkClass}>Pearson International GCSE science guide</a>. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-igcse-physics-0625/" target="_blank" rel="noopener" className={linkClass}>Cambridge IGCSE Physics (0625)</a> page. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-gcse-physics-9203/" target="_blank" rel="noopener" className={linkClass}>International GCSE Physics (9203)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-physics" title="A-level physics" muted>
        <p>
          A-level physics uses more maths than IGCSE, and topics such as mechanics are taken further. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level physics is assessed</h3>
          <p>
            Edexcel International A Level physics has six written papers. Units 1 and 2 each last 1 hour 30 minutes and are worth 20% of the International A Level. Unit 3, a practical-skills paper, lasts 1 hour 20 minutes and is worth 10%. Units 4 and 5 each last 1 hour 45 minutes and are worth 20%. Unit 6, the second practical-skills paper, lasts 1 hour 20 minutes and is worth 10%.
          </p>
          <p>
            Cambridge International AS and A Level physics has five papers. The percentages are shares of the full A Level. Paper 1 is multiple-choice, lasts 1 hour 15 minutes and is worth 15.5%. Paper 2 lasts 1 hour 15 minutes and is worth 23%. Paper 3 is a 2-hour practical paper worth 11.5%. Paper 4 lasts 2 hours and is worth 38.5%. Paper 5 is a planning, analysis and evaluation paper that lasts 1 hour 15 minutes and is worth 11.5%.
          </p>
          <p>
            OxfordAQA International AS and A Level physics has five papers, each lasting 2 hours and worth 20% of the A Level. The two International AS papers come first. Three further papers follow, and the last of these, Physics in Practice, covers practical and analytical skills.
          </p>
          <p>
            Your child's school decides the board. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's units are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Physics/2018/Specification%20and%20Sample%20Assessment/9781446957783_IAL_Physics_Iss3.pdf" target="_blank" rel="noopener" className={linkClass}>International A Level Physics specification</a>. Cambridge's papers are on the <a href="https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-international-as-and-a-level-physics-9702/" target="_blank" rel="noopener" className={linkClass}>Cambridge International AS & A Level Physics (9702)</a> page. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/" target="_blank" rel="noopener" className={linkClass}>International AS and A-level Physics (9630)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="ib-physics" title="IB physics (MYP and Diploma)">
        <p>
          We teach IB physics in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.
        </p>
        <p>
          In the DP, physics is taken at Higher Level or Standard Level, and students complete an internal assessment. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IB physics is assessed</h3>
          <p>
            In the IB Diploma Programme, 80% of the final physics mark comes from external exams and 20% from an internal assessment. The internal assessment is one scientific investigation, a written report of up to 3,000 words on a research question your child forms themselves. It is marked by your child's teacher and checked by the IB, and the work must be your child's own. There are two exam papers. Paper 1 is worth 36% and has multiple-choice questions (Paper 1A) and data-based questions (Paper 1B). Paper 2 is worth 44% and has short-answer and extended-response questions. At Standard Level, both papers last 1 hour 30 minutes. At Higher Level, Paper 1 lasts 2 hours and Paper 2 lasts 2 hours 30 minutes. Check with the school for the exact guide it follows.
          </p>
          <p>
            The times and weightings are in the <a href="https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/subject-guides/physics-guide.pdf" target="_blank" rel="noopener" className={linkClass}>IB physics guide</a> (first assessment 2025) and the IB's <a href="https://ibo.org/globalassets/new-structure/recognition/pdfs/dp_sciences_physics_subject-brief_jan_2022_e.pdf" target="_blank" rel="noopener" className={linkClass}>Sciences: Physics subject brief</a>.
          </p>
        </div>
      </PageSection>

      <FaqSection items={withVisibleTrialHyphen(physicsFaqs)} />
    </PageShell>
  )
}
