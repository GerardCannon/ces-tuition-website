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
import { EnquiryForm } from '@/components/EnquiryForm'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { QuickChatLink } from '@/components/QuickChatLink'
import { ReviewMention } from '@/components/ReviewMention'
import { Testimonials } from '@/components/Testimonials'
import { WhatsAppBar } from '@/components/WhatsAppBar'
import { useAnalyticsPage, useAnalyticsRouteId, whatsappClick, type WhatsAppPage } from '@/lib/goatcounter'
import { useWhatsappLink } from '@/lib/whatsapp'

// Only values the enquiry form already offers. British curriculum has no single
// option, and the maths page covers IGCSE and A-level, so those stay blank.
const enquiryPrefill: Partial<Record<WhatsAppPage, { curriculum?: string; subject?: string }>> = {
  ib: { curriculum: 'IB' },
  ibmaths: { curriculum: 'IB', subject: 'maths' },
  american: { curriculum: 'American' },
  alevel: { curriculum: 'A-level' },
  maths: { subject: 'maths' },
  chemistry: { subject: 'chemistry' },
  physics: { subject: 'physics' },
  biology: { subject: 'biology' },
  english: { subject: 'English' },
  economics: { subject: 'economics' },
}

export type PageCrumb = { name: string; path: string }
export type FaqItem = { question: string; answer: ReactNode }

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
  const page = useAnalyticsPage()
  const routeId = useAnalyticsRouteId()
  const prefill = enquiryPrefill[page]
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
              {lede ? (
                <div className="text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-2xl mx-auto space-y-4">
                  {lede}
                </div>
              ) : null}
              <ReviewMention>38 five-star reviews on MyPrivateTutor</ReviewMention>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto max-[359px]:h-auto max-[359px]:min-h-12 max-[359px]:whitespace-normal max-[359px]:text-center max-[359px]:py-3"
                >
                  <a href={whatsappHref()} {...whatsappClick(page, 'hero')} className="flex items-center gap-2">
                    <WhatsappLogo size={22} weight="fill" aria-hidden="true" className="shrink-0" />
                    <span className="min-w-0">Book your free trial on WhatsApp</span>
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/15 text-white border-white/70 font-medium tracking-wide text-base sm:text-lg px-6 h-12 w-full sm:w-auto"
                >
                  <a href="#enquire">Send your child's details</a>
                </Button>
              </div>
              <p className="text-sm sm:text-base text-white leading-relaxed text-balance max-w-2xl mx-auto">
                We reply within the hour. Your free 30‑minute trial is with a UK‑trained specialist.
              </p>
              <QuickChatLink placement={routeId} tone="on-primary" />
            </div>
          </div>
        </header>

        {children}

        <Testimonials surface="plain" />

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
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-auto min-h-12 w-full max-w-full whitespace-normal sm:w-auto"
            >
              <a href={whatsappHref()} {...whatsappClick(page, 'cta')} className="flex items-center gap-2">
                <WhatsappLogo size={22} weight="fill" aria-hidden="true" />
                Book your free trial on WhatsApp
              </a>
            </Button>
          </div>
          <div id="enquire" className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 scroll-mt-24">
            <div className="max-w-xl mx-auto text-left">
              <EnquiryForm
                embedded
                defaultCurriculum={prefill?.curriculum}
                defaultSubject={prefill?.subject}
              />
            </div>
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
  id,
}: {
  title: string
  children: ReactNode
  muted?: boolean
  extra?: ReactNode
  id?: string
}) {
  return (
    <section className={`py-16 md:py-24 ${muted ? 'bg-muted/30' : 'bg-background'}`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 id={id} className={`text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance${id ? ' scroll-mt-24' : ''}`}>
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
