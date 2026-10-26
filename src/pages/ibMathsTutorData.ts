import type { ServiceInfo } from '../lib/structuredData.ts'

export const ibMathsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'IB maths', path: '/ib-maths-tutor/' },
]

export const ibMathsFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp and we\'ll arrange a free 30-minute trial lesson. After that, we\'ll set you up on our app, where you can schedule lessons and monitor your child\'s progress.',
  },
  {
    question: 'We don\'t live in the UAE. Can my child still have lessons?',
    answer: 'Yes. All our lessons are online, so families join us from the UK, Europe and all over Asia.',
  },
  {
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. All our lessons are live and online, so families anywhere in the UAE can join without travelling.',
  },
  {
    question: 'My child has moved to the IB from another curriculum. Can you help?',
    answer: 'Yes. Tell us what they covered before, and we\'ll help with any topics their new class has already done.',
  },
  {
    question: 'Can you help with the internal assessment?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own.',
  },
]

export const ibMathsService: ServiceInfo = {
  name: 'IB maths tuition',
  serviceType: 'Online IB maths tuition',
  description: 'Live one-to-one online IB maths lessons, with UK-trained subject specialists.',
}
