import { createContext, useContext, useEffect, type ReactNode } from 'react'

export type WhatsAppPage = 'home' | 'british' | 'ib' | 'ibmaths' | 'american' | 'maths' | 'alevel' | 'chemistry' | 'physics' | 'biology' | 'english' | 'economics' | '404'
export type WhatsAppPlace = 'header' | 'menu' | 'hero' | 'pricing' | 'form' | 'cta' | 'footer' | 'sticky' | 'level'

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
  'not-found': '404',
}

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars: { path: string; title: string; event: boolean }) => void
      bind_events?: () => void
    }
  }
}

const AnalyticsPageContext = createContext<WhatsAppPage | null>(null)

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
  return <AnalyticsPageContext.Provider value={page}>{children}</AnalyticsPageContext.Provider>
}

export function useAnalyticsPage() {
  const page = useContext(AnalyticsPageContext)
  if (!page) throw new Error('GoatCounter page is missing')
  return page
}

export function whatsappClick(page: WhatsAppPage, place: WhatsAppPlace, detail?: string) {
  const suffix = detail ? `-${detail}` : ''
  const titleDetail = detail ? ` ${detail}` : ''
  return {
    'data-goatcounter-click': `whatsapp-${page}-${place}${suffix}`,
    'data-goatcounter-title': `WhatsApp click: ${page} ${place}${titleDetail}`,
  }
}

// count.js only binds elements already in the document. Call this again after
// hydration and after the mobile menu mounts its link.
export function bindGoatCounterClicks() {
  try {
    window.goatcounter?.bind_events?.()
  } catch {
    // A blocked script must not break the page.
  }
}
