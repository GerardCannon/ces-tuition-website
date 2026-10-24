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
