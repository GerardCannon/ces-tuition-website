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
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. We teach biology live and online, so families in every emirate, including Dubai, Abu Dhabi and Sharjah, can join without travelling. Your child has one-to-one lessons with our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'For biology we cover Edexcel at IGCSE and A-level, OxfordAQA at IGCSE, and AQA at A-level. Send us the board on WhatsApp if you are unsure which one your school uses.',
  },
  {
    question: 'Can you help with an IB Diploma internal assessment?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own.',
  },
]

export const biologyService: ServiceInfo = {
  name: 'Biology tuition',
  serviceType: 'Online biology tuition',
  description:
    'Live one-to-one online biology lessons for GCSE, IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
