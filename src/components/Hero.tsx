import { Button } from '@/components/ui/button'
import { Star, WhatsappLogo } from '@phosphor-icons/react'
import { whatsappUrl } from '@/lib/whatsapp'

const REVIEWS_URL = 'https://www.myprivatetutor.ae/teacher/11899167/gerard'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.12) 35px,
            rgba(255, 255, 255, 0.12) 70px
          )`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-14 md:pt-32 md:pb-20 text-center">
        <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
            Online tuition for UAE families, taught by UK-trained subject specialists
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto">
            GCSE, IGCSE and A-level, IB and American curricula, live online across all emirates.
          </p>

          <p className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base text-white">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-flex text-white" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={16} weight="fill" aria-hidden="true" />
                ))}
              </span>
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 hover:opacity-90"
              >
                38 five-star reviews on MyPrivateTutor
              </a>
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="font-semibold">From AED 250 per hour</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto"
            >
              <a href={whatsappUrl()} className="flex items-center gap-2">
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/15 text-white border-white/70 font-medium tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto"
            >
              <a href="#enquire">Send an enquiry</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
