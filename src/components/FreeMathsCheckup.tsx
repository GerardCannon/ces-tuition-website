import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { freeResourcesLinkClick, useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { whatsappUrl } from '@/lib/whatsapp'

const SAMPLER_WHATSAPP_MESSAGE =
  "Hi Gerard, we've tried the Year 7 maths sampler and I'd like to talk about how my child got on."

const checkupButtonClass =
  'h-12 w-full min-w-0 max-w-full px-6 text-base font-semibold tracking-wide sm:w-auto sm:text-lg max-sm:h-auto max-sm:min-h-12 max-sm:whitespace-normal max-sm:py-3 max-sm:text-center max-[359px]:h-auto max-[359px]:min-h-12 max-[359px]:whitespace-normal max-[359px]:py-3 max-[359px]:text-center'

export function FreeMathsCheckup() {
  const page = useAnalyticsPage()
  return (
    <section id="free-maths-check-up" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            A free maths check-up
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            If you would like to see how your child is getting on before you get in touch, you can try our free Year 7 maths sampler. It is a short practice pack for children around 11 to 12, and a useful check before IGCSE.
          </p>
          <div className="mt-8 flex w-full max-w-full flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button
              asChild
              size="lg"
              className={['bg-accent text-accent-foreground hover:bg-accent/90', checkupButtonClass].join(' ')}
            >
              <a
                href="/free-resources/"
                {...freeResourcesLinkClick('home')}
                className="flex min-w-0 items-center justify-center gap-2"
              >
                <span className="min-w-0">Try the free Year 7 maths sampler</span>
              </a>
            </Button>
            <p className="w-full text-lg leading-relaxed text-muted-foreground sm:basis-full md:text-xl">
              When you have had a look, message us on WhatsApp and we can talk through how your child got on. We reply within the hour.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className={['text-foreground', checkupButtonClass].join(' ')}
            >
              <a
                href={whatsappUrl(SAMPLER_WHATSAPP_MESSAGE)}
                {...whatsappClick(page, 'checkup')}
                className="flex min-w-0 items-center justify-center gap-2"
              >
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" className="shrink-0" />
                <span className="min-w-0">Message us on WhatsApp</span>
              </a>
            </Button>
          </div>
          <p className="mt-8 text-lg leading-relaxed md:text-xl">
            <a
              href="/igcse-gcse-maths-tutor/#free-check-up"
              className="rounded-sm font-semibold text-foreground underline underline-offset-4 outline-none hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Read more about our maths lessons
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
