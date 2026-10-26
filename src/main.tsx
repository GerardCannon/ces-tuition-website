import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { pages } from './pageLoaders.ts'
import { resolveRoute } from './routes.ts'

import "./main.css"

const route = resolveRoute(
  document.documentElement.getAttribute('data-route'),
  window.location.pathname,
)
const Page = pages[route.id]
if (!Page) throw new Error(`No page for ${route.id}`)
const container = document.getElementById('root')!
const tree = <App route={route} Page={Page} />

// The production build fills #root before this script runs. Dev serves the
// empty shell in index.html, so there is nothing to hydrate.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
