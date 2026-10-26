import { Fragment, type ReactNode } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { ReviewMention } from '@/components/ReviewMention'
import { WhatsAppBar } from '@/components/WhatsAppBar'
import { useWhatsappLink } from '@/lib/whatsapp'

export type PageCrumb = { name: string; path: string }
export type FaqItem = { question: string; answer: string }

export function PageShell({
  crumbs,
  title,
  lede,
  children,
  ctaTitle,
  ctaBody,
}: {
  crumbs: readonly PageCrumb[]
  title: string
  lede: ReactNode
  children: ReactNode
  ctaTitle: string
  ctaBody: ReactNode
}) {
  const whatsappHref = useWhatsappLink()
  return (
    <div className="min-h-screen">
      <Navigation sectionBase="/" />
      <main>
        <div className="bg-card border-b border-border pt-20 md:pt-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                {crumbs.map((crumb, index) => {
                  const current = index === crumbs.length - 1
                  return (
                    <Fragment key={crumb.path}>
                      {index > 0 ? <BreadcrumbSeparator /> : null}
                      <BreadcrumbItem>
                        {current ? (
                          <BreadcrumbPage>{crumb.name}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={crumb.path}>{crumb.name}</BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <header className="relative overflow-hidden bg-primary text-primary-foreground">
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
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20 text-center">
            <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-balance">
                {title}
              </h1>
              <div className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto space-y-4">
                {lede}
              </div>
              <p className="text-base sm:text-lg text-white leading-relaxed">
                Book a free 30-minute trial lesson on WhatsApp.
              </p>
              <ReviewMention>38 five-star reviews</ReviewMention>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto"
                >
                  <a href={whatsappHref()} className="flex items-center gap-2">
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
                  <a href="/#enquire">Send an enquiry</a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {children}

        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance">
              {ctaTitle}
            </h2>
            <div className="text-base sm:text-lg text-white leading-relaxed space-y-4">
              {ctaBody}
            </div>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-12"
            >
              <a href={whatsappHref()} className="flex items-center gap-2">
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                Chat with us on WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer sectionBase="/" />
      <WhatsAppBar />
    </div>
  )
}

export function PageSection({
  title,
  children,
  muted = false,
  extra,
}: {
  title: string
  children: ReactNode
  muted?: boolean
  extra?: ReactNode
}) {
  return (
    <section className={`py-16 md:py-24 ${muted ? 'bg-muted/30' : 'bg-background'}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          {title}
        </h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          {children}
        </div>
      </div>
      {extra ? <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">{extra}</div> : null}
    </section>
  )
}

export function FaqSection({ items }: { items: readonly FaqItem[] }) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 text-balance">
          Questions parents ask
        </h2>
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.question}>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.question}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
