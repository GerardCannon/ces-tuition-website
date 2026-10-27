import type { ServiceInfo } from '../lib/structuredData.ts'

export const chemistryCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Chemistry', path: '/chemistry-tutor/' },
]

export const chemistryFaqs = [
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
    answer: 'Yes. Our chemistry lessons are live and online, so families in Dubai, Abu Dhabi, Sharjah and across the UAE can join without travelling. Your child learns one-to-one with one of our UK-trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA chemistry courses.',
  },
  {
    question: 'Does my child need to be good at maths for chemistry?',
    answer: 'Some topics involve calculations, and we\'ll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our maths page.',
  },
]

export const chemistryService: ServiceInfo = {
  name: 'Chemistry tuition',
  serviceType: 'Online chemistry tuition',
  description:
    'Live one-to-one online chemistry lessons for GCSE, IGCSE, A-level and IB students, with UK-trained subject specialists.',
}
