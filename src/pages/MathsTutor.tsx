import { Card } from '@/components/ui/card'
import { FaqSection, PageSection, PageShell } from '@/pages/PageShell.tsx'
import { mathsCrumbs, mathsFaqs } from '@/pages/mathsTutorData.ts'

const boards = [
  {
    title: 'Edexcel',
    body: 'GCSE, International GCSE and A-level maths.',
  },
  {
    title: 'Cambridge',
    body: 'IGCSE and International AS and A Level maths.',
  },
  {
    title: 'OxfordAQA',
    body: 'International GCSE and International AS and A-level maths.',
  },
]

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function MathsTutor() {
  return (
    <PageShell
      crumbs={mathsCrumbs}
      title="IGCSE, GCSE and A-level maths tutor in the UAE"
      lede={
        <p>
          Maths is often the subject parents worry about most. Our lessons follow the course your child is studying at school, whether they need to catch up or want to aim for a higher grade.
        </p>
      }
      ctaTitle="Tell us about your child"
      ctaBody={
        <p>
          Send us your child’s year group and exam board on WhatsApp, and we’ll get back to you.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one maths lessons with our UK-trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard replicates an in-person lesson, as we share a fully interactive digital school copybook with each student.
        </p>
        <p>
          Lessons typically last one or two hours, as you prefer.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we’ll arrange a free trial lesson, so we can put your mind at ease.
        </p>
        <p>
          We focus on the topics your child is covering at school. If they’re struggling with algebra, or losing marks on exam questions, that’s where we start. If there are gaps from earlier years, we’ll help fill them before the class moves on.
        </p>
        <p>
          You don’t need to be confident with maths yourself. Just tell us what the school has said, or which topics your child finds hardest. Your child can ask questions at any point, and we’ll go through each step of a method until it makes sense.
        </p>
      </PageSection>

      <PageSection title="What to tell us" muted>
        <p>
          It helps to know your child’s year group and exam board. If you know which paper they’ll sit, let us know that too. If not, that’s fine: we can start lessons and work it out together.
        </p>
        <p>
          If your child has recently changed school, their new class may be partway through a topic. If so, let us know and we’ll pick up from where the class is, rather than starting from the beginning.
        </p>
      </PageSection>

      <PageSection
        title="Exam boards"
        extra={
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boards.map((board) => (
              <Card key={board.title} className="p-6 md:p-8 border-border bg-card">
                <h3 className="text-xl font-bold text-foreground mb-3">{board.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{board.body}</p>
              </Card>
            ))}
          </div>
        }
      >
        <p>
          We teach maths courses from Edexcel, Cambridge and OxfordAQA.
        </p>
      </PageSection>

      <PageSection title="Foundation, Higher, Core and Extended">
        <p>
          GCSE and International GCSE maths papers are set at two levels, called Foundation and Higher. Cambridge IGCSE maths uses Core and Extended instead. You may hear these terms at parents’ evening; they simply describe which paper your child will sit. If you know which one it is, tell us and we’ll prepare your child for that paper.
        </p>
        <p>
          If your child is going on to A-level, you can read about our A-level tuition on our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
      </PageSection>

      <PageSection title="Other subjects" muted>
        <p>
          We teach many other subjects as well as maths. See our <a href="/curricula/british/" className={linkClass}>British curriculum page</a> for more, or ask us on WhatsApp. We also teach the IB.
        </p>
      </PageSection>

      <FaqSection items={mathsFaqs} />
    </PageShell>
  )
}
