import { createContext, useContext, useEffect, type ReactNode } from 'react'

export type WhatsAppPage = 'home' | 'british' | 'ib' | 'maths' | '404'
export type WhatsAppPlace = 'header' | 'menu' | 'hero' | 'pricing' | 'form' | 'footer' | 'sticky'

const pageByRouteId: Record<string, WhatsAppPage> = {
  home: 'home',
  'british-curriculum': 'british',
  ib: 'ib',
  'igcse-gcse-maths-tutor': 'maths',
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

export function whatsappClick(page: WhatsAppPage, place: WhatsAppPlace) {
  return {
    'data-goatcounter-click': `whatsapp-${page}-${place}`,
    'data-goatcounter-title': `WhatsApp click: ${page} ${place}`,
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
