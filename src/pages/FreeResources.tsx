import { DownloadSimple } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { freeDownloadClick } from '@/lib/goatcounter'
import { PageSection, PageShell } from '@/pages/PageShell.tsx'
import { SectionTitle } from '@/lib/headingAccent'
import {
  SHOW_COMING_SOON,
  THUMB_HEIGHT,
  THUMB_WIDTH,
  examBoardsLabel,
  freeResourcesCrumbs,
  resourcesForYear,
  stages,
  subjectPages,
  yearAnchor,
  yearLabel,
  type FreeResource,
} from '@/pages/freeResourcesData.ts'

const linkClass = 'font-semibold text-foreground underline underline-offset-4 hover:text-primary'

const subjectLinks = [
  { label: 'IGCSE maths', href: '/igcse-gcse-maths-tutor/' },
  { label: 'IB maths', href: '/ib-maths-tutor/' },
  { label: 'British curriculum', href: '/curricula/british/' },
  { label: 'IB', href: '/curricula/ib/' },
  { label: 'American curriculum', href: '/curricula/american/' },
]

function ResourceCard({ resource }: { resource: FreeResource }) {
  const related = {
    href: resource.relatedHref ?? subjectPages[resource.subject].href,
    label: resource.relatedLabel ?? subjectPages[resource.subject].label,
  }
  const boards = examBoardsLabel(resource.examBoards)
  return (
    <Card className="h-full overflow-hidden p-0 gap-0">
      <img
        src={resource.thumb}
        width={THUMB_WIDTH}
        height={THUMB_HEIGHT}
        alt={`First page of the ${resource.title}`}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto border-b border-border bg-white"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h4 className="text-2xl font-bold text-foreground">{resource.title}</h4>
        <p className="text-base text-foreground leading-relaxed">
          {resource.subject} · {yearLabel(resource.year)}
          {resource.note ? (
            <>
              <br />
              {resource.note}
            </>
          ) : null}
        </p>
        {boards ? <p className="text-base text-foreground leading-relaxed">Exam boards: {boards}</p> : null}
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
          <a href={related.href} className={`${linkClass} inline-flex min-h-8 items-center self-center`}>
            {related.label}
          </a>
        </div>
      </div>
    </Card>
  )
}

export function FreeResources() {
  const filledStages = stages
    .map((stage) => ({ ...stage, filled: stage.years.filter((year) => resourcesForYear(year).length > 0) }))
  const menuStages = filledStages.filter((stage) => SHOW_COMING_SOON || stage.filled.length > 0)

  return (
    <PageShell
      crumbs={freeResourcesCrumbs}
      title="Free resources by year"
      titleAccent="Free"
      badge="Free · no sign-up"
      lede={
        <p>
          Printable practice for your child, sorted by school year. Every resource is free to download, with no sign-up. Feel free to message us on WhatsApp and we can talk through how your child got on.
        </p>
      }
      ctaTitle="When you've had a look"
      ctaBody={
        <p>
          Feel free to message us on WhatsApp and we can talk through how your child got on. We reply within the hour.
        </p>
      }
    >
      <section id="downloads" className="scroll-mt-28 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav aria-labelledby="jump-heading" className="mx-auto mb-14 max-w-4xl rounded-xl border border-border bg-card p-6">
            <h2 id="jump-heading" className="text-xl font-bold text-foreground mb-4">
              Jump to a year
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {menuStages.map((stage) => (
                <div key={stage.id}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">{stage.title}</p>
                  <ul className="flex flex-col gap-1">
                    {stage.years
                      .filter((year) => SHOW_COMING_SOON || stage.filled.includes(year))
                      .map((year) =>
                        stage.filled.includes(year) ? (
                          <li key={year}>
                            <a href={`#${yearAnchor(year)}`} className={`${linkClass} inline-flex min-h-8 items-center`}>
                              {yearLabel(year)}
                            </a>
                          </li>
                        ) : (
                          <li key={year} className="inline-flex min-h-8 items-center text-base text-muted-foreground">
                            {yearLabel(year)}
                            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-medium">Coming soon</span>
                          </li>
                        ),
                      )}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {filledStages
            .filter((stage) => stage.filled.length > 0)
            .map((stage) => (
              <div key={stage.id} id={stage.id} className="scroll-mt-28 mb-14 last:mb-0">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance text-center">
                  <SectionTitle text={stage.title} />
                </h2>
                {stage.filled.map((year) => (
                  <section key={year} id={yearAnchor(year)} aria-labelledby={`${yearAnchor(year)}-heading`} className="scroll-mt-28 mb-12 last:mb-0">
                    <h3 id={`${yearAnchor(year)}-heading`} className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                      {yearLabel(year)}
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-8">
                      {resourcesForYear(year).map((resource) => (
                        <li key={resource.slug} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] max-w-md">
                          <ResourceCard resource={resource} />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            ))}
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
