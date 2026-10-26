import type { ComponentType } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './ErrorFallback.tsx'
import { AnalyticsPageProvider } from './lib/goatcounter.tsx'
import { WhatsAppMessageProvider } from './lib/whatsapp.tsx'
import type { SiteRoute } from './routes.ts'

export function App({ route, Page }: { route: SiteRoute; Page: ComponentType }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <WhatsAppMessageProvider message={route.whatsappMessage}>
        <AnalyticsPageProvider routeId={route.id}>
          <Page />
        </AnalyticsPageProvider>
      </WhatsAppMessageProvider>
    </ErrorBoundary>
  )
}
