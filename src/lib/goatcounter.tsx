import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { bindGoatCounterClicks } from './bindGoatCounter.ts'

export { bindGoatCounterClicks } from './bindGoatCounter.ts'

export type WhatsAppPage = 'home' | 'british' | 'ib' | 'ibmaths' | 'american' | 'maths' | 'alevel' | 'chemistry' | 'physics' | 'biology' | 'english' | 'economics' | 'resources' | '404'
export type WhatsAppPlace = 'header' | 'menu' | 'hero' | 'howitworks' | 'form' | 'cta' | 'footer' | 'sticky' | 'level' | 'checkup' | 'card'

const pageByRouteId: Record<string, WhatsAppPage> = {
  home: 'home',
  'british-curriculum': 'british',
  ib: 'ib',
  'american-curriculum': 'american',
  'igcse-gcse-maths-tutor': 'maths',
  'a-level-tutor': 'alevel',
  'chemistry-tutor': 'chemistry',
  'physics-tutor': 'physics',
  'biology-tutor': 'biology',
  'english-tutor': 'english',
  'ib-maths-tutor': 'ibmaths',
  'economics-tutor': 'economics',
  'free-resources': 'resources',
  'not-found': '404',
}

type AnalyticsContextValue = {
  page: WhatsAppPage
  routeId: string
}

const AnalyticsPageContext = createContext<AnalyticsContextValue | null>(null)

export function pageForRoute(routeId: string): WhatsAppPage {
  const page = pageByRouteId[routeId]
  if (!page) {
    const known = Object.keys(pageByRouteId).join(', ')
    throw new Error(
      `No GoatCounter page for route "${routeId}". Add it to pageByRouteId in src/lib/goatcounter.tsx (mapped routes: ${known}).`,
    )
  }
  return page
}

export function AnalyticsPageProvider({ routeId, children }: { routeId: string; children: ReactNode }) {
  const page = pageForRoute(routeId)
  useEffect(() => {
    bindGoatCounterClicks()
  }, [])
  return <AnalyticsPageContext.Provider value={{ page, routeId }}>{children}</AnalyticsPageContext.Provider>
}

function useAnalyticsContext() {
  const value = useContext(AnalyticsPageContext)
  if (!value) throw new Error('GoatCounter page is missing')
  return value
}

export function useAnalyticsPage() {
  return useAnalyticsContext().page
}

export function useAnalyticsRouteId() {
  return useAnalyticsContext().routeId
}

export function whatsappClick(page: WhatsAppPage, place: WhatsAppPlace, detail?: string) {
  const suffix = detail ? `-${detail}` : ''
  const titleDetail = detail ? ` ${detail}` : ''
  return {
    'data-goatcounter-click': `whatsapp-${page}-${place}${suffix}`,
    'data-goatcounter-title': `WhatsApp click: ${page} ${place}${titleDetail}`,
  }
}

// Separate from whatsappClick so existing event ids stay as they are.
// placement is "home-hero", "home-form", or a route id.
export function quickChatClick(placement: string) {
  return {
    'data-goatcounter-click': `whatsapp-quick-chat-${placement}`,
    'data-goatcounter-title': `WhatsApp click: quick chat ${placement}`,
  }
}

export type HomePickSubject = 'maths' | 'english' | 'chemistry' | 'physics' | 'biology' | 'economics' | 'ibmaths' | 'alevel' | 'sat'

// Home hero subject picker. Shows which subject page home visitors choose.
export function homePickClick(subject: HomePickSubject, label: string) {
  return {
    'data-goatcounter-click': `home-pick-${subject}`,
    'data-goatcounter-title': `Home subject pick: ${label}`,
  }
}

export type FooterContact = 'email' | 'phone'

// Footer email and phone links; plain ids so they read the same on every page.
export function footerContactClick(contact: FooterContact) {
  return {
    'data-goatcounter-click': `footer-${contact}`,
    'data-goatcounter-title': `Footer click: ${contact}`,
  }
}

// Free resources page downloads, one id per pack: free-download-<slug>.
export function freeDownloadClick(slug: string, title: string) {
  return {
    'data-goatcounter-click': `free-download-${slug}`,
    'data-goatcounter-title': `Free download: ${title}`,
  }
}

// Year links on /free-resources/: the hero picker and the jump menu.
export function freeYearClick(year: number, place: 'hero' | 'jump') {
  return {
    'data-goatcounter-click': `free-year-${year}-${place}`,
    'data-goatcounter-title': `Free resources year link: Year ${year} ${place}`,
  }
}

export type FreeResourcesPlace = 'home' | 'maths' | 'british'

// Home, maths-page and British-curriculum links to /free-resources/.
export function freeResourcesLinkClick(place: FreeResourcesPlace) {
  return {
    'data-goatcounter-click': `free-resources-click-${place}`,
    'data-goatcounter-title': `Free resources click: ${place}`,
  }
}
