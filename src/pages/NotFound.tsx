import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { WhatsAppBar } from '@/components/WhatsAppBar'
import { WhatsappLogo } from '@phosphor-icons/react'
import { useAnalyticsPage, whatsappClick } from '@/lib/goatcounter'
import { useWhatsappLink } from '@/lib/whatsapp'

export function NotFound() {
  const whatsappHref = useWhatsappLink()
  const page = useAnalyticsPage()
  return (
    <div className="min-h-screen">
      <Navigation sectionBase="/" />
      <main className="relative overflow-hidden bg-primary text-primary-foreground">
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-24 text-center">
          <div className="max-w-2xl mx-auto space-y-5 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
              Page not found
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
              That page isn't on this site.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto"
              >
                <a href={whatsappHref()} {...whatsappClick(page, 'hero')} className="flex items-center gap-2">
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
                <a href="/">Back to the home page</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer sectionBase="/" />
      <WhatsAppBar />
    </div>
  )
}
