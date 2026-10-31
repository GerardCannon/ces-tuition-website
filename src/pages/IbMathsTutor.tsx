import { LevelEnquiry } from '@/components/LevelEnquiry'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { ibMathsCrumbs, ibMathsFaqs } from '@/pages/ibMathsTutorData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function IbMathsTutor() {
  return (
    <PageShell
      crumbs={ibMathsCrumbs}
      title="Online IB maths tutor for families in Dubai and the UAE"
      lede={
        <p>
          IB maths can feel like a big step up. Our lessons follow the course your child is studying at school, whether they need to catch up or want to aim for a higher grade.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child's year group and maths course on WhatsApp, and we'll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          We teach IB maths to families in Dubai, Abu Dhabi, Sharjah and across the UAE. Every lesson is live and online, so there's no travel involved.
        </p>
        <p>
          Your child has one-to-one maths lessons with our UK‑trained subject specialists on our interactive online whiteboard.
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

      <PageSection title="How we help with IB maths" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Filling gaps</h3>
          <p>
            IB maths moves quickly, and a gap from an earlier year can make a new topic feel much harder. We find where your child is unsure and help them fill it before the class moves on.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Setting out working</h3>
          <p>
            Marks often depend on clear working as well as the final answer. We help your child set out each step so that it can be followed and checked.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Questions in context</h3>
          <p>
            Some questions put the maths in a real-life setting, which can make it hard to see where to start. We practise reading the question carefully and picking out the maths it needs.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Exam practice</h3>
          <p>
            We work through exam-style questions together and look at where marks are being lost, so your child gets used to what each question is asking for.
          </p>
        </div>
      </PageSection>

      <PageSection title="IB maths and our other pages">
        <p>
          Our <a href="/curricula/ib/" className={linkClass}>IB page</a> explains more about the MYP and the Diploma Programme, and the other IB subjects we teach. If your child also takes IGCSE, GCSE or A-level maths, our <a href="/igcse-gcse-maths-tutor/" className={linkClass}>maths page</a> covers the exam boards we teach.
        </p>
        <p>
          We also teach <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/biology-tutor/" className={linkClass}>biology</a>, <a href="/english-tutor/" className={linkClass}>English</a> and <a href="/economics-tutor/" className={linkClass}>economics</a> in the IB.
        </p>
      </PageSection>

      <PageSection title="Where to begin" muted>
        <p>
          When you message us, it helps to tell us your child's year group and which maths course they take at school. If you're not sure, your child's school will be able to tell you, or we can work it out together.
        </p>
        <p>
          If your child has recently moved to the UAE or changed school, the new class may be ahead in some topics. Let us know and we'll help them catch up.
        </p>
        <LevelEnquiry
          heading="Ask about IB maths"
          line="Tap below and WhatsApp opens with a message ready to send. Add your child's year group too, if you can."
          levels={[{ id: 'ib', label: 'IB maths' }]}
        />
      </PageSection>

      <FaqSection items={ibMathsFaqs} />
    </PageShell>
  )
}
