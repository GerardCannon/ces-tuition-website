import { homeFaqs } from './components/homeFaqData.ts'
import { pageForRoute } from './lib/goatcounter.tsx'
import { AREA_SERVED, faqAndBreadcrumbJsonLd, orgId, serviceNode, withService, type ServiceInfo } from './lib/structuredData.ts'
import { WHATSAPP_GREETING } from './lib/whatsapp.tsx'
import { americanCrumbs, americanFaqs, americanService } from './pages/americanCurriculumData.ts'
import { alevelCrumbs, alevelFaqs, alevelService } from './pages/alevelTutorData.ts'
import { biologyCrumbs, biologyFaqs, biologyService } from './pages/biologyTutorData.ts'
import { britishCrumbs, britishFaqs, britishService } from './pages/britishCurriculumData.ts'
import { chemistryCrumbs, chemistryFaqs, chemistryService } from './pages/chemistryTutorData.ts'
import { economicsCrumbs, economicsFaqs, economicsService } from './pages/economicsTutorData.ts'
import { englishCrumbs, englishFaqs, englishService } from './pages/englishTutorData.ts'
import { ibCrumbs, ibFaqs, ibService } from './pages/ibCurriculumData.ts'
import { ibMathsCrumbs, ibMathsFaqs, ibMathsService } from './pages/ibMathsTutorData.ts'
import { mathsCrumbs, mathsFaqs, mathsService } from './pages/mathsTutorData.ts'
import { physicsCrumbs, physicsFaqs, physicsService } from './pages/physicsTutorData.ts'

export const SITE_ORIGIN = 'https://www.cestuition.com'
const OG_IMAGE = `${SITE_ORIGIN}/og-image.jpg`

export type JsonLd = Record<string, unknown>

// Head tags written into the prerendered HTML. The home page is the exception:
// its tags stay in index.html so the published document matches that file, and
// the build checks this object against those tags.
export type RouteHead = {
  title: string
  description: string
  canonical?: string
  robots?: string
  ogType?: string
  ogUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogImageWidth?: string
  ogImageHeight?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  jsonLd?: JsonLd
}

export type SiteRoute = {
  id: string
  // Public path. Use a trailing slash so GitHub Pages serves path/index.html.
  // Omit for the 404 document, which is served for unknown URLs.
  path?: string
  // Dist path. Set only when it should not be derived from `path` (the 404 page).
  file?: string
  sitemap: boolean
  // Home only. Leave the <head> from index.html in the published file.
  preserveTemplateHead?: boolean
  // Home only. Leave the JSON-LD script from index.html in the published file.
  keepJsonLd?: boolean
  head: RouteHead
  // Prefilled wa.me text for every WhatsApp link on this page, including the sticky bar.
  whatsappMessage: string
}

export function canonicalUrl(path: string) {
  if (path === '/') return `${SITE_ORIGIN}/`
  const withSlash = path.endsWith('/') ? path : `${path}/`
  return `${SITE_ORIGIN}${withSlash}`
}

// Fills the social tags from the title and description. Pass `path` to set
// canonical and og:url. Leave `path` unset for a page that should not declare
// a canonical URL (the 404 page).
export function socialHead(input: {
  title: string
  description: string
  path?: string
  robots?: string
  jsonLd?: JsonLd
}): RouteHead {
  const canonical = input.path ? canonicalUrl(input.path) : undefined
  return {
    title: input.title,
    description: input.description,
    canonical,
    robots: input.robots,
    ogType: 'website',
    ogUrl: canonical,
    ogTitle: input.title,
    ogDescription: input.description,
    ogImage: OG_IMAGE,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    twitterCard: 'summary_large_image',
    twitterTitle: input.title,
    twitterDescription: input.description,
    twitterImage: OG_IMAGE,
    jsonLd: input.jsonLd,
  }
}

const homeService: ServiceInfo = {
  name: 'Online one-to-one tuition',
  serviceType: 'Online tuition',
  description:
    'Live one-to-one online lessons in GCSE, IGCSE, A-level, IB and American curriculum subjects, with UK-trained subject specialists.',
}

const homeJsonLd: JsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'Organization'],
      '@id': orgId(canonicalUrl),
      name: 'CES Tuition',
      url: canonicalUrl('/'),
      logo: 'https://www.cestuition.com/apple-touch-icon.png',
      image: 'https://www.cestuition.com/apple-touch-icon.png',
      email: 'Gerard@CannonEducationSolutions.com',
      telephone: '+971585041916',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sharjah Media City',
        addressLocality: 'Sharjah',
        addressCountry: 'AE',
      },
      areaServed: AREA_SERVED,
    },
    serviceNode(homeService, '/', canonicalUrl),
    {
      '@type': 'WebSite',
      name: 'CES Tuition',
      url: canonicalUrl('/'),
    },
    {
      '@type': 'FAQPage',
      mainEntity: homeFaqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
}

// Add a page by appending a route. See the README.
export const routes: SiteRoute[] = [
  {
    id: 'home',
    path: '/',
    sitemap: true,
    preserveTemplateHead: true,
    keepJsonLd: true,
    head: {
      title: 'Online tutors in Dubai, Abu Dhabi and the UAE | CES Tuition',
      description: 'Live one-to-one online tuition for families in Dubai, Abu Dhabi, Sharjah and the UAE: GCSE, IGCSE, A-level, IB and American curriculum. 38 five-star reviews.',
      canonical: 'https://www.cestuition.com/',
      ogType: 'website',
      ogUrl: 'https://www.cestuition.com/',
      ogTitle: 'CES Tuition: UK-trained online tutors for UAE families',
      ogDescription: 'GCSE, IGCSE, A-level, IB and American curriculum, taught live online across all emirates.',
      ogImage: OG_IMAGE,
      ogImageWidth: '1200',
      ogImageHeight: '630',
      twitterCard: 'summary_large_image',
      twitterTitle: 'CES Tuition: UK-trained online tutors for UAE families',
      twitterDescription: 'GCSE, IGCSE, A-level, IB and American curriculum, taught live online across all emirates.',
      twitterImage: OG_IMAGE,
      jsonLd: homeJsonLd,
    },
    whatsappMessage: WHATSAPP_GREETING,
  },
  {
    id: 'british-curriculum',
    path: '/curricula/british/',
    sitemap: true,
    head: socialHead({
      title: 'IGCSE and GCSE tutor in Dubai, British curriculum | CES Tuition',
      description: 'One-to-one online IGCSE and GCSE lessons for families in Dubai, Abu Dhabi and the UAE, with UK-trained subject specialists. Free 30-minute trial.',
      path: '/curricula/british/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(britishFaqs, britishCrumbs, canonicalUrl), britishService, '/curricula/british/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about British curriculum tuition for my child.",
  },
  {
    id: 'ib',
    path: '/curricula/ib/',
    sitemap: true,
    head: socialHead({
      title: 'Online IB tutor in Dubai and Abu Dhabi | CES Tuition',
      description: 'One-to-one online lessons for IB MYP and Diploma Programme students in Dubai, Abu Dhabi and across the UAE, with UK-trained subject specialists. Free trial.',
      path: '/curricula/ib/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(ibFaqs, ibCrumbs, canonicalUrl), ibService, '/curricula/ib/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about IB tuition for my child.",
  },
  {
    id: 'american-curriculum',
    path: '/curricula/american/',
    sitemap: true,
    head: socialHead({
      title: 'SAT prep and American curriculum tutor, Dubai | CES Tuition',
      description: 'One-to-one online lessons for American curriculum students in Dubai, Abu Dhabi and across the UAE, including SAT prep. Free 30-minute trial on WhatsApp.',
      path: '/curricula/american/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(americanFaqs, americanCrumbs, canonicalUrl), americanService, '/curricula/american/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about American curriculum or SAT tuition for my child.",
  },
  {
    id: 'igcse-gcse-maths-tutor',
    path: '/igcse-gcse-maths-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'IGCSE, GCSE and A-level maths tutor, Dubai | CES Tuition',
      description: 'One-to-one online maths lessons for IGCSE, GCSE and A-level students in Dubai, Abu Dhabi and across the UAE, with UK-trained subject specialists. Free trial.',
      path: '/igcse-gcse-maths-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(mathsFaqs, mathsCrumbs, canonicalUrl), mathsService, '/igcse-gcse-maths-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about IGCSE maths tuition for my child.",
  },
  {
    id: 'a-level-tutor',
    path: '/a-level-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online A-level tutor in Dubai and Abu Dhabi | CES Tuition',
      description: 'One-to-one online A-level lessons for Year 12 and 13 students in Dubai, Abu Dhabi and across the UAE, with UK-trained subject specialists. Free trial.',
      path: '/a-level-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(alevelFaqs, alevelCrumbs, canonicalUrl), alevelService, '/a-level-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about A-level tuition for my child.",
  },
  {
    id: 'chemistry-tutor',
    path: '/chemistry-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online A-level and IB chemistry tutor, Dubai | CES Tuition',
      description: 'One-to-one online chemistry lessons for GCSE, IGCSE, A-level and IB students in Dubai, Abu Dhabi and across the UAE, with UK-trained subject specialists.',
      path: '/chemistry-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(chemistryFaqs, chemistryCrumbs, canonicalUrl), chemistryService, '/chemistry-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about chemistry tuition for my child.",
  },
  {
    id: 'physics-tutor',
    path: '/physics-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online A-level and IB physics tutor, Dubai | CES Tuition',
      description: 'Online one-to-one physics lessons for GCSE, IGCSE, A-level and IB students in Dubai, Abu Dhabi and the wider UAE, with UK-trained subject specialists.',
      path: '/physics-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(physicsFaqs, physicsCrumbs, canonicalUrl), physicsService, '/physics-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about physics tuition for my child.",
  },
  {
    id: 'biology-tutor',
    path: '/biology-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online A-level and IB biology tutor, Dubai | CES Tuition',
      description: 'One-to-one biology lessons, live online, for GCSE, IGCSE, A-level and IB students in Dubai, Abu Dhabi and across the UAE. Free 30-minute trial lesson.',
      path: '/biology-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(biologyFaqs, biologyCrumbs, canonicalUrl), biologyService, '/biology-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about biology tuition for my child.",
  },
  {
    id: 'english-tutor',
    path: '/english-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online English tutor in Dubai and Abu Dhabi | CES Tuition',
      description: 'One-to-one online English lessons for GCSE, IGCSE, A-level and IB students in Dubai, Abu Dhabi and across the UAE, with UK-trained subject specialists.',
      path: '/english-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(englishFaqs, englishCrumbs, canonicalUrl), englishService, '/english-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about English tuition for my child.",
  },
  {
    id: 'ib-maths-tutor',
    path: '/ib-maths-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online IB maths tutor in Dubai and Abu Dhabi | CES Tuition',
      description: 'One-to-one online IB maths lessons for students in Dubai, Abu Dhabi, Sharjah and across the UAE, with UK-trained subject specialists. Free 30-minute trial.',
      path: '/ib-maths-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(ibMathsFaqs, ibMathsCrumbs, canonicalUrl), ibMathsService, '/ib-maths-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about IB maths tuition for my child.",
  },
  {
    id: 'economics-tutor',
    path: '/economics-tutor/',
    sitemap: true,
    head: socialHead({
      title: 'Online economics tutor in Dubai and Abu Dhabi | CES Tuition',
      description: 'Online one-to-one GCSE, IGCSE, A-level and IB economics lessons for UAE families, with UK-trained subject specialists. Free 30-minute trial.',
      path: '/economics-tutor/',
      jsonLd: withService(faqAndBreadcrumbJsonLd(economicsFaqs, economicsCrumbs, canonicalUrl), economicsService, '/economics-tutor/', canonicalUrl),
    }),
    whatsappMessage: "Hi Gerard, I'd like to ask about economics tuition for my child.",
  },
  {
    id: 'not-found',
    file: '404.html',
    sitemap: false,
    head: socialHead({
      title: 'Page not found | CES Tuition',
      description: "That page isn't on this site.",
      robots: 'noindex',
    }),
    whatsappMessage: WHATSAPP_GREETING,
  },
]

function outputFile(route: SiteRoute) {
  if (route.file) return route.file
  if (!route.path) throw new Error(`Route ${route.id} needs a path or a file`)
  if (route.path === '/') return 'index.html'
  return `${route.path.replace(/^\/|\/$/g, '')}/index.html`
}

const PATH_PATTERN = /^\/(?:[a-z0-9-]+\/)+$/

for (const route of routes) {
  if (!/^[a-z0-9-]+$/.test(route.id)) {
    throw new Error(`Route id "${route.id}" must be lowercase letters, numbers, and hyphens`)
  }
  if (route.path && route.path !== '/' && !PATH_PATTERN.test(route.path)) {
    throw new Error(`Route ${route.id} path must look like /curricula/british/`)
  }
  if (route.sitemap && !route.path) {
    throw new Error(`Route ${route.id} is in the sitemap but has no public path`)
  }
  if (route.head.robots?.includes('noindex') && route.sitemap) {
    throw new Error(`Route ${route.id} is noindex and cannot be in the sitemap`)
  }
  if (route.keepJsonLd && !route.head.jsonLd) {
    throw new Error(`Route ${route.id} keeps the template JSON-LD but has none to check`)
  }
  if (!route.whatsappMessage.trim()) {
    throw new Error(`Route ${route.id} needs a WhatsApp message`)
  }
  // Fail while the route list is loading, before prerender tries to render the page.
  pageForRoute(route.id)
  const file = outputFile(route)
  if (file.startsWith('/') || file.includes('..')) {
    throw new Error(`Route ${route.id} has an unsafe output path`)
  }
}

function notFoundRoute(): SiteRoute {
  const route = routes.find((item) => item.id === 'not-found')
  if (!route) throw new Error('Missing the not-found route')
  return route
}

export function routeOutput(route: SiteRoute) {
  return outputFile(route)
}

function normalizePath(pathname: string) {
  const bare = pathname.split('?')[0]?.split('#')[0] || '/'
  if (bare === '/' || bare === '') return '/'
  const withLeading = bare.startsWith('/') ? bare : `/${bare}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

export function resolveRoute(routeId: string | null, pathname: string) {
  if (routeId) {
    const byId = routes.find((route) => route.id === routeId)
    if (byId) return byId
  }
  const normalized = normalizePath(pathname)
  return routes.find((route) => route.path && normalizePath(route.path) === normalized) ?? notFoundRoute()
}
