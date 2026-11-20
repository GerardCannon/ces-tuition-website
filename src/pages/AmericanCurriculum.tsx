import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { americanCrumbs, americanFaqs } from '@/pages/americanCurriculumData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function AmericanCurriculum() {
  return (
    <PageShell
      crumbs={americanCrumbs}
      title="American curriculum and SAT tuition for families in Dubai and the UAE"
      lede={
        <p>
          Many families in the UAE choose a school that follows an American curriculum. If your child is finding a subject difficult, is getting ready for the SAT, or simply wants to feel more confident, we can help.
        </p>
      }
      ctaTitle="Book your free 30‑minute trial"
      ctaBody={
        <p>
          Send us your child's grade and the subject they need help with, or tell us you're asking about the SAT, on WhatsApp. We reply within the hour.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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
          You can follow your child's progress in our app.
        </p>
      </PageSection>

      <PageSection title="How we help with the SAT" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Reading short passages</h3>
          <p>
            Each Reading and Writing question comes with its own short passage. We practise reading carefully, working out what the question is really asking, and ruling out the wrong answers.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Grammar and punctuation</h3>
          <p>
            Some questions test grammar and punctuation. We go over the rules your child finds hardest and practise spotting what needs to change.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Using the calculator well</h3>
          <p>
            A calculator is allowed for the whole Math section. We practise when it helps, and when it is quicker to work something out by hand.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Working to the clock</h3>
          <p>
            Each part of the test is timed. We practise answering at a steady pace, so your child isn't rushing the last questions.
          </p>
        </div>
      </PageSection>

      <PageSection id="sat" title="SAT preparation">
        <p>
          We help high school students prepare for the SAT. The test has two sections, Reading and Writing, and Math, and we work on both.
        </p>
        <p>
          In the first lessons, we talk through which kinds of questions your child finds hardest, then focus on those topics and practise SAT-style questions together. Your child can ask questions at any point, and we'll go through each step until it makes sense.
        </p>
        <p>
          If you know when your child plans to sit the SAT, tell us, so we can plan lessons around that date.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How the SAT is assessed</h3>
          {/* Re-check the SAT facts against the College Board every year. */}
          <p>
            The SAT is taken digitally, in the College Board's Bluebook app. It has two sections, and each section is split into two timed modules. The second module is harder or easier depending on how your child did in the first.
          </p>
          <p>
            <strong className="text-foreground">Reading and Writing.</strong> 64 minutes, in two 32-minute modules, with 54 questions. Each question has a short passage, or a pair of short passages, and one multiple-choice question. The questions cover understanding what a text says, how it is put together, grammar and punctuation, and improving a piece of writing.
          </p>
          <p>
            <strong className="text-foreground">Math.</strong> 70 minutes, in two 35-minute modules, with 44 questions. Most questions are multiple choice; for some, your child types in the answer. The topics are algebra, advanced math, problem-solving and data analysis, and geometry and trigonometry. A calculator can be used for the whole section: the Desmos calculator built into Bluebook, or an approved handheld calculator.
          </p>
          <p>
            There is a 10-minute break between the two sections, and the test takes 2 hours and 14 minutes in total. Each section is scored from 200 to 800, so the total score is from 400 to 1600.
          </p>
          <p>
            The College Board sets out the structure on its <a href="https://satsuite.collegeboard.org/sat/whats-on-the-test/structure" target="_blank" rel="noopener" className={linkClass}>How the SAT Is Structured</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="school-subjects" title="School subjects" muted>
        <p>
          We also help with school subjects, such as maths or English. Lessons typically follow what your child is learning at school. Some parents come to us after a disappointing grade; others want their child to feel better prepared for an upcoming test.
        </p>
        <p>
          If your child is stuck on a piece of homework, we'll always start by working through it together.
        </p>
      </PageSection>

      <PageSection title="Where to begin">
        <p>
          You don't need to plan everything at once. Start with whatever concerns you most, whether that's a school subject or the SAT.
        </p>
        <p>
          Schools that follow an American curriculum don't all offer the same courses, so it helps to know what your child is studying. When you message us, tell us your child's grade and the subject or course, or that you're asking about the SAT.
        </p>
        <p>
          If your child has recently changed school, they may find the new class is ahead in some areas. If so, let us know and we'll help them catch up.
        </p>
        <LevelEnquiry
          heading="Book a free trial for your child's level"
          line="Choose a level and WhatsApp opens with a message ready to send. Add your child's grade too, if you can. We reply within the hour to arrange your free 30‑minute trial."
          levels={[
            { id: 'sat', label: 'SAT preparation' },
            { id: 'maths', label: 'American curriculum maths' },
            { id: 'english', label: 'American curriculum English' },
          ]}
        />
      </PageSection>

      <PageSection title="Other curricula" muted>
        <p>
          We also teach the British curriculum and the IB MYP and Diploma Programme (DP), which you can read about on our <a href="/curricula/british/" className={linkClass}>British curriculum page</a> and our <a href="/curricula/ib/" className={linkClass}>IB page</a>.
        </p>
      </PageSection>

      <FaqSection items={withVisibleTrialHyphen(americanFaqs)} />
    </PageShell>
  )
}
