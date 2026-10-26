import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { resolveRoute } from './routes.ts'

import "./main.css"
import "./styles/theme.css"
import "./index.css"

const route = resolveRoute(
  document.documentElement.getAttribute('data-route'),
  window.location.pathname,
)
const container = document.getElementById('root')!
const tree = <App route={route} />

// The production build fills #root before this script runs. Dev serves the
// empty shell in index.html, so there is nothing to hydrate.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
