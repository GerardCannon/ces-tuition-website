import type { ServiceInfo } from '../lib/structuredData.ts'

export const biologyCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Biology', path: '/biology-tutor/' },
]

export const biologyFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp and we\'ll arrange a free 30-minute trial lesson. After that, we\'ll set you up on our app, where you can schedule lessons and monitor your child\'s progress.',
  },
  {
    question: 'We don\'t live in the UAE. Can my child still have lessons?',
    answer: 'Yes. All our lessons are online, so families join us from the UK, Europe and all over Asia.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA biology courses.',
  },
  {
    question: 'Can you help with an IB internal assessment?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own.',
  },
]

export const biologyService: ServiceInfo = {
  name: 'Biology tuition',
  serviceType: 'Online biology tuition',
  description:
    'Live one-to-one online biology lessons for GCSE, IGCSE, A-level and IB students, with UK-trained subject specialists.',
}
