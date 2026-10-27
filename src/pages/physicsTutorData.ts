import type { ServiceInfo } from '../lib/structuredData.ts'

export const physicsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Physics', path: '/physics-tutor/' },
]

export const physicsFaqs = [
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
    answer: 'Yes. Lessons take place live and online, so wherever your family is in the UAE, your child can join without travelling. Every physics lesson is one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA physics courses.',
  },
  {
    question: 'My child understands physics in class but struggles in tests. Can you help?',
    answer: 'Yes. We work through exam-style questions together and look at where marks are being lost, so your child gets used to what each question is asking for.',
  },
]

export const physicsService: ServiceInfo = {
  name: 'Physics tuition',
  serviceType: 'Online physics tuition',
  description:
    'Live one-to-one online physics lessons for GCSE, IGCSE, A-level and IB students, with UK-trained subject specialists.',
}
