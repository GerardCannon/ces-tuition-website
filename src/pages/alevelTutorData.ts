import type { ServiceInfo } from '../lib/structuredData.ts'

export const alevelCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
  { name: 'A-level', path: '/a-level-tutor/' },
]

export const alevelFaqs = [
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
    answer: 'Yes. All our A-level lessons are live and online, so families in any emirate can join without travelling. Each lesson is one-to-one with a UK‑trained subject specialist in the subject your child is studying.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA A-level courses.',
  },
  {
    question: 'Can you help with coursework?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own.',
  },
]

export const alevelService: ServiceInfo = {
  name: 'A-level tuition',
  serviceType: 'Online A-level tuition',
  description:
    'Live one-to-one online A-level lessons for Year 12 and 13 students, with UK-trained subject specialists.',
}
