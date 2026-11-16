import { homeFaqs } from '@/components/homeFaqData'
import { FaqSection, withVisibleTrialHyphen } from '@/pages/PageShell'

export function HomeFaq() {
  return <FaqSection items={withVisibleTrialHyphen(homeFaqs)} />
}
