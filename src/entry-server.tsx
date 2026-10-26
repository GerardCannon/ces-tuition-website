import { renderToString } from 'react-dom/server'
import { App } from './App.tsx'
import { pages } from './pageLoaders.ts'
import { canonicalUrl, routeOutput, routes } from './routes.ts'
import { renderHead, renderJsonLd } from './renderHead.ts'

export function prerenderManifest() {
  const rendered = []
  for (const route of routes) {
    const Page = pages[route.id]
    if (!Page) throw new Error(`No page for ${route.id}`)
    rendered.push({
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
      html: renderToString(<App route={route} Page={Page} />),
    })
  }
  return rendered
}
