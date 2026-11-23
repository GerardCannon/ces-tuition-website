import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { freeDownloadClick } from '@/lib/goatcounter'
import { PageSection, PageShell } from '@/pages/PageShell.tsx'
import { freeResources, freeResourcesCrumbs } from '@/pages/freeResourcesData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

const subjectLinks = [
  { label: 'IGCSE maths', href: '/igcse-gcse-maths-tutor/' },
  { label: 'IB maths', href: '/ib-maths-tutor/' },
  { label: 'British curriculum', href: '/curricula/british/' },
  { label: 'IB', href: '/curricula/ib/' },
  { label: 'American curriculum', href: '/curricula/american/' },
]

export function FreeResources() {
  return (
    <PageShell
      crumbs={freeResourcesCrumbs}
      title="Free maths resources"
      lede={
        <p>
          Printable practice for your child, with worked examples and a full answer key. Download it free, with no sign-up. Then message us on WhatsApp and we can talk through how your child got on.
        </p>
      }
      ctaTitle="When you've had a look"
      ctaBody={
        <p>
          Message us on WhatsApp and we can talk through how your child got on. We reply within the hour.
        </p>
      }
    >
      <section id="downloads" className="scroll-mt-24 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-10 text-balance text-center">
            Download
          </h2>
          <ul className="flex flex-wrap justify-center gap-8">
            {freeResources.map((resource) => (
              <li key={resource.slug} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] max-w-md">
                <Card className="h-full overflow-hidden p-0 gap-0">
                  <img
                    src={resource.thumb}
                    width={resource.thumbWidth}
                    height={resource.thumbHeight}
                    alt={`First page of the ${resource.title}`}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-auto border-b border-border bg-white"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="text-2xl font-bold text-foreground">{resource.title}</h3>
                    <p className="text-base text-foreground leading-relaxed">{resource.level}</p>
                    <p className="text-base text-muted-foreground leading-relaxed">{resource.inside}</p>
                    <p className="text-sm text-muted-foreground">
                      PDF · {resource.pages} pages · {resource.sizeLabel}
                    </p>
                    <div className="mt-auto flex flex-col gap-4 pt-2">
                      <Button
                        asChild
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold tracking-wide text-base sm:text-lg px-6 h-auto min-h-12 w-full whitespace-normal"
                      >
                        <a
                          href={resource.file}
                          download
                          type="application/pdf"
                          {...freeDownloadClick(resource.slug, resource.title)}
                          className="flex items-center justify-center gap-2"
                        >
                          <DownloadSimple size={22} weight="bold" aria-hidden="true" className="shrink-0" />
                          <span className="min-w-0">Download free PDF</span>
                        </a>
                      </Button>
                      <a href={resource.relatedHref} className={`${linkClass} inline-flex min-h-8 items-center self-center`}>
                        {resource.relatedLabel}
                      </a>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageSection title="Our subject pages" muted>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {subjectLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`${linkClass} inline-flex min-h-8 items-center`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </PageSection>
    </PageShell>
  )
}
