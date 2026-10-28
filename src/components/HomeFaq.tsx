import { homeFaqs } from '@/components/homeFaqData'
import { FaqSection } from '@/pages/PageShell'

export function HomeFaq() {
  return <FaqSection items={homeFaqs} />
}
