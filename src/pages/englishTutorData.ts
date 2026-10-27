import type { ServiceInfo } from '../lib/structuredData.ts'

export const englishCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'English', path: '/english-tutor/' },
]

export const englishFaqs = [
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
    answer: 'Yes. Our English lessons are all live and online, so families anywhere in the UAE can take part without travelling. Your child works one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA courses.',
  },
  {
    question: 'My child enjoys reading but struggles to write about it. Can you help?',
    answer: 'Yes. Enjoying reading is a good start. We help your child turn what they notice into clear written points, backed up with evidence.',
  },
]

export const englishService: ServiceInfo = {
  name: 'English tuition',
  serviceType: 'Online English tuition',
  description:
    'Live one-to-one online English lessons for GCSE, IGCSE, A-level and IB students, with UK-trained subject specialists.',
}
