import { renderToString } from 'react-dom/server'
import { App } from './App.tsx'
import { canonicalUrl, routeOutput, routes } from './routes.ts'
import { renderHead, renderJsonLd } from './renderHead.ts'

export function prerenderManifest() {
  return routes.map((route) => ({
    id: route.id,
    path: route.path ?? null,
    output: routeOutput(route),
    sitemap: route.sitemap,
    preserveTemplateHead: route.preserveTemplateHead === true,
    keepJsonLd: route.keepJsonLd === true,
    loc: route.path ? canonicalUrl(route.path) : null,
    head: route.head,
    headHtml: renderHead(route.head),
    jsonLdHtml: route.head.jsonLd ? renderJsonLd(route.head.jsonLd) : null,
    html: renderToString(<App route={route} />),
  }))
}
