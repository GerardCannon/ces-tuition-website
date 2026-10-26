import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './ErrorFallback.tsx'
import type { SiteRoute } from './routes.ts'

export function App({ route }: { route: SiteRoute }) {
  const Page = route.Page
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Page />
    </ErrorBoundary>
  )
}
