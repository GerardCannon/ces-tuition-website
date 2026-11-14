import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { chemistryCrumbs, chemistryFaqs } from '@/pages/chemistryTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function ChemistryTutor() {
  return (
    <PageShell
      crumbs={chemistryCrumbs}
      title="Online IGCSE, A‑level and IB chemistry tutor for families in Dubai and the UAE"
      lede={
        <p>
          Chemistry builds on itself, so a gap in one topic can make the next one harder. If your child is finding chemistry difficult, or simply wants to feel more confident, we can help.
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
          We teach one-to-one online chemistry tuition, live, for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
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
          To get started, simply message us on WhatsApp and we'll arrange a free 30‑minute trial lesson, so we can put your mind at ease.
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

      <PageSection id="ib-chemistry" title="IB chemistry (MYP and Diploma)" muted>
        <p>
          We teach IB chemistry in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.
        </p>
        <p>
          In the DP, chemistry is taken at Higher Level or Standard Level, and students complete an internal assessment. Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IB chemistry is assessed</h3>
          <p>
            In the Diploma Programme, 80% of the chemistry mark comes from external exams and 20% from an internal assessment. The internal assessment is one scientific investigation. The school teacher marks it and the IB checks it, and the investigation is your child's own work. Paper 1 is worth 36% and Paper 2 is worth 44%. At Standard Level, Paper 1 is 55 marks and lasts 1 hour 30 minutes, and Paper 2 is 50 marks and lasts 1 hour 30 minutes. At Higher Level, Paper 1 is 75 marks and lasts 2 hours, and Paper 2 is 90 marks and lasts 2 hours 30 minutes. Check your child's school for the exact guide it follows.
          </p>
          <p>
            The times, marks and weightings are in the <a href="https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/subject-guides/chemistry-guide.pdf" target="_blank" rel="noopener" className={linkClass}>IB chemistry guide</a> (first assessment 2025).
          </p>
        </div>
      </PageSection>

      <PageSection id="igcse-chemistry" title="IGCSE chemistry (Edexcel)">
        <p>
          We teach Edexcel IGCSE chemistry.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How Edexcel IGCSE chemistry is assessed</h3>
          <p>
            Edexcel International GCSE chemistry has a linear route and a modular route, and the content is the same on both. Students on the linear route sit two written papers: Paper 1 lasts 2 hours and is worth 61.1% of the International GCSE, and Paper 2 lasts 1 hour 15 minutes and is worth 38.9%. The modular route is only available to schools outside the UK. It has two units of 1 hour 40 minutes, each worth 50%, and each unit can be taken in any exam series. There is no coursework and no practical exam. The school chooses the route. Check your child's school for the exact specification it follows.
          </p>
          <p>
            Both routes are set out in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/General/pearson-edexcel-international-gcse-science-guide.pdf" target="_blank" rel="noopener" className={linkClass}>Pearson International GCSE science guide</a>.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-chemistry" title="A-level chemistry" muted>
        <p>
          At A-level we teach Edexcel International A Level, Cambridge International AS and A Level, and OxfordAQA International AS and A Level chemistry.
        </p>
        <p>
          A-level chemistry goes into more depth than IGCSE, and the calculations get longer. You can read more about the move to A-level on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level chemistry is assessed</h3>
          <p>
            Edexcel International A Level chemistry is six written papers. Units 1 and 2 last 1 hour 30 minutes and are worth 20% each. Units 4 and 5 last 1 hour 45 minutes and are worth 20% each. Units 3 and 6 are written practical-skills papers of 1 hour 20 minutes, worth 10% each.
          </p>
          <p>
            Cambridge International AS and A Level chemistry has five papers. These shares are of the A Level. Paper 1 lasts 1 hour 15 minutes and is worth 15.5%. Paper 2 lasts 1 hour 15 minutes and is worth 23%. Paper 3 is a 2-hour practical test worth 11.5%. Paper 4 lasts 2 hours and is worth 38.5%. Paper 5 lasts 1 hour 15 minutes and is worth 11.5%.
          </p>
          <p>
            OxfordAQA International AS and A Level chemistry has five written papers. The two International AS papers last 1 hour 30 minutes and are worth 20% each. Two further papers last 1 hour 30 minutes and are worth 21% each. The written practical and synoptic paper lasts 1 hour 25 minutes and is worth 18%.
          </p>
          <p>
            Your child's school decides the board. Check your child's school for the exact specification it follows.
          </p>
          <p>
            Edexcel's units are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Chemistry/2018/Specification-and-Sample-Assessment/International-A-Level-Chemistry-Spec.pdf" target="_blank" rel="noopener" className={linkClass}>International A Level Chemistry specification</a>. Cambridge's papers are in the <a href="https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf" target="_blank" rel="noopener" className={linkClass}>Cambridge International AS and A Level Chemistry syllabus</a> for 2025 to 2027. OxfordAQA's papers are on the <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-chemistry-9620/" target="_blank" rel="noopener" className={linkClass}>International AS and A-level Chemistry (9620)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection title="Levels we teach">
        <p>
          We teach chemistry at <a href="/curricula/british/" className={linkClass}>IGCSE</a> and A-level, and in the IB MYP and Diploma Programme (DP).
        </p>
        <p>
          At IGCSE we teach Edexcel chemistry, and at A-level we teach Edexcel International A Level, Cambridge International AS and A Level, and OxfordAQA International AS and A Level chemistry. We also teach IB chemistry at MYP and Diploma.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE chemistry' },
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
