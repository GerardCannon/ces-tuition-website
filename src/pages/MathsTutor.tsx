import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { LevelEnquiry } from '@/components/LevelEnquiry'
import { freeResourcesLinkClick, useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { whatsappUrl } from '@/lib/whatsapp'
import { FaqSection, PageSection, PageShell, withVisibleTrialHyphen } from '@/pages/PageShell.tsx'
import { mathsCrumbs, mathsFaqs } from '@/pages/mathsTutorData.ts'
import { FREE_RESOURCES_WHATSAPP_MESSAGE } from '@/pages/freeResourcesData.ts'

const checkupButtonClass =
  'h-12 w-full min-w-0 max-w-full px-6 text-base font-semibold tracking-wide sm:w-auto sm:text-lg max-sm:h-auto max-sm:min-h-12 max-sm:whitespace-normal max-sm:py-3 max-sm:text-center max-[359px]:h-auto max-[359px]:min-h-12 max-[359px]:whitespace-normal max-[359px]:py-3 max-[359px]:text-center'

const boards = [
  {
    title: 'Edexcel',
    body: 'International GCSE and International A Level maths.',
  },
  {
    title: 'Cambridge',
    body: 'IGCSE and International AS and A Level maths.',
  },
  {
    title: 'OxfordAQA',
    body: 'International GCSE and International AS and A Level maths.',
  },
]

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

export function MathsTutor() {
  const page = useAnalyticsPage()
  return (
    <PageShell
      crumbs={mathsCrumbs}
      title="Online IGCSE and International A Level maths tutor for families in Dubai and the UAE"
      titleAccent="maths tutor"
      lede={
        <p>
          Maths is often the subject parents worry about most. Our lessons follow the course your child is studying at school, whether they need to catch up or want to aim for a higher grade.
        </p>
      }
      ctaTitle="Book your free 30‑minute trial"
      ctaBody={
        <p>
          Send us your child’s year group and exam board on WhatsApp. We reply within the hour.
        </p>
      }
    >
      <PageSection title="Our lessons">
        <p>
          Your child has one-to-one maths lessons with our UK‑trained subject specialists on our interactive online whiteboard.
        </p>
        <p>
          Our whiteboard feels like an in-person lesson, because we share a fully interactive digital copybook with each student.
        </p>
        <p>
          Lessons last one or two hours, whichever suits you, and are scheduled through our app.
        </p>
        <p>
          To get started, simply message us on WhatsApp and we’ll arrange a free 30‑minute trial lesson, so we can put your mind at ease.
        </p>
        <p>
          We focus on the topics your child is covering at school. If they’re struggling with algebra, or losing marks on exam questions, that’s where we start. If there are gaps from earlier years, we’ll help fill them before the class moves on.
        </p>
        <p>
          You don’t need to be confident with maths yourself. Just tell us what the school has said, or which topics your child finds hardest. Your child can ask questions at any point, and we’ll go through each step of a method until it makes sense.
        </p>
      </PageSection>

      <PageSection id="free-check-up" title="Free maths worksheets">
        <p>
          Free printable maths practice for Years 7 to 13, sorted by school year, with full answers.
        </p>
        <div className="flex w-full max-w-full flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            asChild
            size="lg"
            className={['bg-accent text-accent-foreground hover:bg-accent/90', checkupButtonClass].join(' ')}
          >
            <a
              href="/free-resources/"
              {...freeResourcesLinkClick('maths')}
              className="flex min-w-0 items-center justify-center gap-2"
            >
              <span className="min-w-0">See free maths resources</span>
            </a>
          </Button>
          <p className="w-full sm:basis-full">
            Have a look. Feel free to message us on WhatsApp and we can talk through how your child got on. We reply within the hour.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={['text-foreground', checkupButtonClass].join(' ')}
          >
            <a
              href={whatsappUrl(FREE_RESOURCES_WHATSAPP_MESSAGE)}
              {...whatsappClick(page, 'checkup')}
              className="flex min-w-0 items-center justify-center gap-2"
            >
              <WhatsappLogo size={22} weight="fill" aria-hidden="true" className="shrink-0" />
              <span className="min-w-0">Message us on WhatsApp</span>
            </a>
          </Button>
        </div>
      </PageSection>

      <PageSection title="How we help with maths" muted>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Setting out working</h3>
          <p>
            Many maths marks are for the method, not just the final answer. We help your child set out each step clearly, so an examiner can follow it.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Without a calculator</h3>
          <p>
            Cambridge IGCSE maths now has a non-calculator paper at each tier. We practise written and mental methods, so your child is confident without one.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Algebra</h3>
          <p>
            Algebra runs through most of the course. We go back to any step that isn’t secure, then build up to harder equations and graphs.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Exam questions</h3>
          <p>
            We practise exam-style questions on the topics your child is covering at school, and look closely at where marks were lost.
          </p>
        </div>
      </PageSection>

      <PageSection title="What to tell us" muted>
        <p>
          It helps to know your child’s year group and exam board. If you know which paper they’ll sit, let us know that too. If not, that’s fine: we can start lessons and work it out together.
        </p>
        <p>
          If your child has recently changed school, their new class may be partway through a topic. If so, let us know and we’ll pick up from where the class is, rather than starting from the beginning.
        </p>
        <LevelEnquiry
          levels={[
            { id: 'igcse-gcse', label: 'IGCSE maths' },
            { id: 'alevel', label: 'A-level maths' },
          ]}
        />
      </PageSection>

      <PageSection id="igcse-maths" title="IGCSE maths">
        <p>
          We teach IGCSE maths live and online for students in Dubai, Abu Dhabi, Sharjah and across the UAE.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How IGCSE maths is assessed</h3>
          <p>
            Edexcel International GCSE maths (Specification A) has two tiers, Foundation and Higher. Students sit two papers at the same tier, each lasting 2 hours and worth 50%, and a calculator is allowed in both. Foundation targets grades 1 to 5 and Higher targets grades 4 to 9.
          </p>
          <p>
            Cambridge IGCSE maths has Core and Extended papers. Core students take Paper 1 (no calculator) and Paper 3 (calculator), each lasting 1 hour 30 minutes and worth 50%. Extended students take Paper 2 (no calculator) and Paper 4 (calculator), each lasting 2 hours and worth 50%. This structure applies to exams from 2025.
          </p>
          <p>
            OxfordAQA International GCSE maths has two tiers, Core (grades 1 to 5) and Extension (grades 4 to 9). Core students take Papers 1C and 2C, each lasting 1 hour 30 minutes. Extension students take Papers 1E and 2E, each lasting 2 hours. Each paper is worth 50%, and a scientific calculator is allowed in all of them.
          </p>
          <p>
            All three are assessed by written exams only. Your child’s school decides the board and the tier. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel’s papers are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf" target="_blank" rel="noopener" className={linkClass}>International GCSE Mathematics A specification</a>. Cambridge’s papers are in the <a href="https://www.cambridgeinternational.org/Images/662466-2025-2027-syllabus.pdf" target="_blank" rel="noopener" className={linkClass}>Cambridge IGCSE Mathematics (0580) syllabus</a>. OxfordAQA’s papers are on the <a href="https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/" target="_blank" rel="noopener" className={linkClass}>International GCSE Mathematics (9260)</a> page.
          </p>
        </div>
      </PageSection>

      <PageSection id="a-level-maths" title="International A Level maths" muted>
        <p>
          A-level maths builds on IGCSE algebra and moves on to pure maths such as calculus, alongside statistics or mechanics. For more on the step up to A-level, see our <a href="/a-level-tutor/" className={linkClass}>A-level page</a>.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground mb-2">How A-level maths is assessed</h3>
          <p>
            Edexcel International A Level maths has six papers, each lasting 1 hour 30 minutes and worth one sixth of the International A Level. Four are pure maths (P1 to P4) and two are applied papers in mechanics, statistics or decision maths. The International AS is the first three: P1, P2 and one applied paper.
          </p>
          <p>
            Cambridge International AS and A Level maths has four papers for the A Level. Paper 1 and Paper 3 (pure maths) each last 1 hour 50 minutes and are worth 30%. Students then take either Paper 4 (mechanics) and Paper 5 (probability and statistics), or Paper 5 and Paper 6 (further probability and statistics); each lasts 1 hour 15 minutes and is worth 20%.
          </p>
          <p>
            OxfordAQA International AS and A Level maths has four papers. The two AS papers, P1 (pure maths) and PSM1 (pure maths, statistics and mechanics), each last 1 hour 30 minutes and are worth 20% of the A Level. P2 (pure maths) lasts 2 hours 30 minutes and is worth 37.5%, and the last paper, statistics (S2) or mechanics (M2), lasts 1 hour 30 minutes and is worth 22.5%.
          </p>
          <p>
            Your child’s school decides the board and the options. Check with the school for the exact specification it follows.
          </p>
          <p>
            Edexcel’s units are in the <a href="https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf" target="_blank" rel="noopener" className={linkClass}>International A Level Mathematics specification</a>. Cambridge’s papers are in the <a href="https://www.cambridgeinternational.org/Images/697427-2026-2027-syllabus.pdf" target="_blank" rel="noopener" className={linkClass}>Cambridge International AS & A Level Mathematics (9709) syllabus</a>. OxfordAQA’s papers are on the <a href="https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/" target="_blank" rel="noopener" className={linkClass}>International AS and A Level Mathematics (9660)</a> page.
          </p>
        </div>
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

      <PageSection title="Foundation, Higher, Core, Extended and Extension">
        <p>
          IGCSE maths papers are set at two levels, called tiers. Edexcel calls them Foundation and Higher, Cambridge calls them Core and Extended, and OxfordAQA calls them Core and Extension. You may hear these terms at parents’ evening; they simply describe which papers your child will sit. If you know which one it is, tell us and we’ll prepare your child for those papers.
        </p>
      </PageSection>

      <PageSection title="Other subjects" muted>
        <p>
          We also teach <a href="/english-tutor/" className={linkClass}>English</a>, <a href="/chemistry-tutor/" className={linkClass}>chemistry</a>, <a href="/physics-tutor/" className={linkClass}>physics</a>, <a href="/biology-tutor/" className={linkClass}>biology</a> and <a href="/economics-tutor/" className={linkClass}>economics</a>. See our <a href="/curricula/british/" className={linkClass}>IGCSE page</a> for the full list, or ask us on WhatsApp. For MYP and Diploma Programme (DP) students, see our <a href="/ib-maths-tutor/" className={linkClass}>IB maths</a> page.
        </p>
      </PageSection>

      <FaqSection items={withVisibleTrialHyphen(mathsFaqs)} />
    </PageShell>
  )
}
