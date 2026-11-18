import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { economicsCrumbs, economicsFaqs } from '@/pages/economicsTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function EconomicsTutor() {
  return (
    <PageShell
      crumbs={economicsCrumbs}
      title="Online IGCSE, A‑level and IB economics tutor for families in Dubai and the UAE"
      lede={
        <p>
          Economics asks students to explain, draw and argue, not just remember. If your child is new to the subject or finds it hard to turn what they know into clear written answers, we can help.
        </p>
      }
      ctaTitle="Book your free 30‑minute trial"
      ctaBody={
        <p>
          On WhatsApp, send us your child's year group and the economics course they take. We reply within the hour.
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
          Our whiteboard feels like an in-person lesson, because we share a fully interactive digital copybook with each student.
        </p>
        <p>
          Lessons last one or two hours, whichever suits you, and are scheduled through our app.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we'll arrange a free 30‑minute trial lesson, so we can put your mind at ease.
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
          We teach economics at IGCSE and A-level, and in the IB MYP and Diploma Programme (DP).
        </p>
        <p>
          At IGCSE, students meet the key ideas for the first time and learn to explain them clearly in written answers. You can read more on our <a href="/curricula/british/" className={linkClass}>British curriculum page</a>.
        </p>
        <p>
          Many students start economics fresh at A-level, and the course moves from the basic ideas to longer essays quite quickly. You can read more about the move to A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <p>
          In the DP, economics is one of the subjects students can choose, and in the MYP it can be part of individuals and societies. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP, the Diploma Programme and the other IB subjects we teach.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE economics' },
            { id: 'alevel', label: 'A-level economics' },
            { id: 'ib', label: 'IB economics' },
          ]}
        />
        <p>
          If your child is studying economics at another level, message us and we'll let you know how we can help.
        </p>
        <p>
          We also teach <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths</a>, <a href="/english-tutor/" className={linkClass}>English</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/physics-tutor/" className={linkClass}>physics</a> and <a href="/biology-tutor/" className={linkClass}>biology</a>.
        </p>
      </PageSection>

      <PageSection id="igcse-economics" title="IGCSE economics" muted>
        <p>
          We teach IGCSE economics live and online for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IGCSE economics is assessed</h3>
          <p>
            Edexcel International GCSE economics is a linear qualification with two written examination papers. Paper 1 covers microeconomics and business economics, and Paper 2 covers macroeconomics and the global economy. The questions mix multiple-choice, short-answer, data-response and open-ended questions.
          </p>
          <p>
            OxfordAQA International GCSE economics is a linear specification with two written examination papers. Paper 1 covers how markets work, and Paper 2 covers how economies work. The papers include multiple-choice, calculation, short-answer and extended-response questions.
          </p>
          <p>
            Your child's school decides the board. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel's papers are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Economics/2017/Specification%20and%20SAMS/international-gcse-spec-9781446942789.pdf" target="_blank" rel="noopener" className={linkClass}>International GCSE Economics specification</a>. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-gcse-economics-9214/" target="_blank" rel="noopener" className={linkClass}>International GCSE Economics (9214)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-economics" title="A-level economics">
        <p>
          A-level economics moves from the basic ideas to longer essays quite quickly. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level economics is assessed</h3>
          <p>
            A-level economics is assessed by written exam papers. Your child's school decides the board and the specification, so check with the school for the exact one it follows.
          </p>
        </div>
      </PageSection>

      <PageSection id="ib-economics" title="IB economics (MYP and Diploma)" muted>
        <p>
          We teach IB economics live and online for students in Dubai, Abu Dhabi, Sharjah and across the UAE. Economics is part of individuals and societies in the IB Diploma Programme, and it can be part of individuals and societies in the IB Middle Years Programme (MYP). Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IB economics is assessed</h3>
          <p>
            In the IB Diploma Programme, economics is assessed with external examinations and an internal assessment. The internal assessment is a portfolio of three commentaries based on published extracts from the news media, using the key concepts as a lens. Check with the school for the exact guide it follows.
          </p>
          <p>
            The IB describes the course on its <a href="https://www.ibo.org/programmes/diploma-programme/curriculum/individuals-and-societies/economics/" target="_blank" rel="noopener" className={linkClass}>Diploma Programme economics</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection title="Where to begin">
        <p>
          When you message us, it helps to tell us your child's year group, which course they take (IGCSE, A-level, IB MYP or IB Diploma), and which exam board their school uses if you know it. If you're not sure, your child's school will be able to tell you, or we can work it out together.
        </p>
        <p>
          If your child has just started economics, or has recently moved to the UAE or changed school, let us know. We'll start with the basics their class is building on.
        </p>
      </PageSection>

      <FaqSection
        items={withVisibleTrialHyphen(
          economicsFaqs.map((item) =>
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
          ),
        )}
      />
    </PageShell>
  )
}
