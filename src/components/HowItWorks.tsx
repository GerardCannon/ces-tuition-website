import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { useWhatsappLink } from '@/lib/whatsapp'
import { Accent } from '@/lib/headingAccent'

const steps = [
  {
    n: '1',
    title: 'Book a free 30\u2011minute trial lesson',
    body: 'Message us on WhatsApp. We reply within the hour and arrange your free 30\u2011minute trial.',
  },
  {
    n: '2',
    title: 'We match your child with a subject specialist',
    body: "We match by your child's curriculum and level. Lessons are with a UK\u2011trained specialist in their subject.",
  },
  {
    n: '3',
    title: "We confirm the price for your child's level on WhatsApp",
    body: "Once we know the subject and level, we'll confirm the price on WhatsApp.",
  },
]

export function HowItWorks() {
  const whatsappHref = useWhatsappLink()
  const page = useAnalyticsPage()
  return (
    <div id="pricing" className="scroll-mt-24">
      <section id="how-it-works" className="bg-background py-16 md:py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              <Accent text="How it works" word="works" tone="purple" />
            </h2>
            <p className="text-lg leading-relaxed md:text-xl">
              <a
                href={whatsappHref()}
                {...whatsappClick(page, 'howitworks')}
                className="font-semibold text-foreground underline underline-offset-4 hover:text-primary"
              >
                Message us on WhatsApp
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <Card
                key={step.n}
                className="flex h-full flex-col border-border bg-card p-6 md:p-8"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <h3 className="mb-3 text-balance text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{step.body}</p>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-balance text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            <strong className="font-semibold">Not the right fit?</strong>
            {" If the first paid lesson isn't right for your child, we'll switch to a new tutor straight away and you won't be charged for that lesson. This applies once per subject."}
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 w-full bg-accent px-6 text-base font-semibold text-accent-foreground hover:bg-accent/90 sm:w-auto sm:text-lg max-[359px]:h-auto max-[359px]:min-h-12 max-[359px]:whitespace-normal max-[359px]:py-3 max-[359px]:text-center"
            >
              <a href="#enquire">Start with a free trial</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
