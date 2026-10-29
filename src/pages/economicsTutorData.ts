import type { ServiceInfo } from '../lib/structuredData.ts'

export const economicsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Economics', path: '/economics-tutor/' },
]

export const economicsFaqs = [
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
    answer: 'Yes. Our economics lessons take place live online, so families in Dubai, Abu Dhabi, Sharjah and the other emirates can join without travelling. Your child is taught one-to-one by one of our UK‑trained subject specialists.',
  },
  {
    question: 'My child hasn\'t studied economics before. Is that a problem?',
    answer: 'No. Many students start economics for the first time at GCSE, A-level or in the IB. We begin with the key ideas and build from there, alongside what their class is covering.',
  },
  {
    question: 'Does my child need to be good at maths for economics?',
    answer: 'Some topics use percentages, graphs and simple calculations, and we\'ll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our maths page.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'Tell us which exam board your child\'s school uses, and our lessons will follow that course.',
  },
]

export const economicsService: ServiceInfo = {
  name: 'Economics tuition',
  serviceType: 'Online economics tuition',
  description:
    'Live one-to-one online GCSE, IGCSE, A-level and IB economics lessons, with UK-trained subject specialists.',
}
