import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { whatsappUrl } from '@/lib/whatsapp'

const FREE_LESSONS_MESSAGE = "Hi, I'd like to know how to earn free lessons with CES."

const FREE_LESSONS_BODY =
  'Recommend CES to a friend. Each time the student you refer reaches another 10 lessons with us, you get a free lesson, for as long as they keep learning with us. Your friend starts with a free 30\u2011minute trial too.'

export function FreeLessons() {
  return (
    <section id="free-lessons" className="scroll-mt-24 bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          How CES families earn free lessons
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
          {FREE_LESSONS_BODY}
        </p>
        <Button
          asChild
          size="lg"
          className="h-12 w-full bg-accent px-6 text-base font-semibold tracking-wide text-accent-foreground hover:bg-accent/90 sm:w-auto sm:text-lg max-[359px]:h-auto max-[359px]:min-h-12 max-[359px]:whitespace-normal max-[359px]:py-3 max-[359px]:text-center"
        >
          <a
            href={whatsappUrl(FREE_LESSONS_MESSAGE)}
            data-goatcounter-click="whatsapp-home-free-lessons"
            data-goatcounter-title="WhatsApp click: home free-lessons"
            className="flex items-center gap-2"
          >
            <WhatsappLogo size={22} weight="fill" aria-hidden="true" className="shrink-0" />
            <span className="max-[359px]:min-w-0">Ask us how on WhatsApp</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
