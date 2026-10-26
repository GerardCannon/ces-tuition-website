type Faq = { question: string; answer: string }
type Crumb = { name: string; path: string }

// One script holds both types. The prerender writes a single JSON-LD block per page.
export function faqAndBreadcrumbJsonLd(
  faqs: readonly Faq[],
  crumbs: readonly Crumb[],
  absoluteUrl: (path: string) => string,
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.path),
        })),
      },
    ],
  }
}

export type ServiceInfo = {
  name: string
  serviceType: string
  description: string
}

type AbsoluteUrl = (path: string) => string

type GraphNode = { '@type'?: string | readonly string[] }

type GraphDocument = {
  '@context': string
  '@graph': GraphNode[]
}

export const AREA_SERVED = [
  { '@type': 'City', name: 'Dubai' },
  { '@type': 'City', name: 'Abu Dhabi' },
  { '@type': 'City', name: 'Sharjah' },
  { '@type': 'Country', name: 'United Arab Emirates' },
]

export const ONLINE_CHANNEL = {
  '@type': 'ServiceChannel',
  name: 'Live online lessons',
  description:
    'Lessons are live, one-to-one and online, so families also join from the UK, Europe and all over Asia.',
}

export const TRIAL_OFFER = {
  '@type': 'Offer',
  name: 'Free 30-minute trial lesson',
  description: 'A free 30-minute trial lesson, arranged on WhatsApp.',
}

export function orgId(absoluteUrl: AbsoluteUrl) {
  return `${absoluteUrl('/')}#organization`
}

export function orgRefNode(absoluteUrl: AbsoluteUrl) {
  return {
    '@type': ['EducationalOrganization', 'Organization'],
    '@id': orgId(absoluteUrl),
    name: 'CES Tuition',
    url: absoluteUrl('/'),
  }
}

export function serviceNode(info: ServiceInfo, path: string, absoluteUrl: AbsoluteUrl) {
  const url = absoluteUrl(path)
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: info.name,
    serviceType: info.serviceType,
    description: info.description,
    url,
    provider: { '@id': orgId(absoluteUrl) },
    areaServed: AREA_SERVED,
    availableChannel: ONLINE_CHANNEL,
    offers: TRIAL_OFFER,
  }
}

export function withService(base: GraphDocument, info: ServiceInfo, path: string, absoluteUrl: AbsoluteUrl) {
  const [first, second] = base['@graph']
  if (first?.['@type'] !== 'FAQPage' || second?.['@type'] !== 'BreadcrumbList') {
    throw new Error('FAQPage and BreadcrumbList must stay first in @graph')
  }
  return {
    ...base,
    '@graph': [...base['@graph'], orgRefNode(absoluteUrl), serviceNode(info, path, absoluteUrl)],
  }
}
