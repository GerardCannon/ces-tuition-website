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
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA physics courses. Edexcel covers International GCSE and International A Level, Cambridge covers IGCSE and International AS and A Level, and OxfordAQA covers International GCSE and International AS and A-level. We also teach IB physics in the MYP and the Diploma Programme, at both Higher Level and Standard Level.',
  },
  {
    question: 'My child understands physics in class but struggles in tests. Can you help?',
    answer: 'Yes. We work through exam-style questions together and look at where marks are being lost, so your child gets used to what each question is asking for.',
  },
  {
    question: 'Do you teach IGCSE physics online?',
    answer: 'Yes. Lessons take place live and online, so wherever your family is in the UAE, your child can join without travelling. We teach IGCSE physics, and every lesson is one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Do you teach A-level physics?',
    answer: 'Yes. We teach A-level physics. It uses more maths than IGCSE, and topics such as mechanics are taken further.',
  },
  {
    question: 'Do you teach IB physics at Higher Level and Standard Level?',
    answer: 'Yes. We teach both Higher Level and Standard Level, in the MYP and in the Diploma Programme.',
  },
  {
    question: 'Do you teach MYP physics?',
    answer: 'Yes. We teach physics in the IB MYP and in the Diploma Programme (DP).',
  },
]

export const physicsService: ServiceInfo = {
  name: 'Physics tuition',
  serviceType: 'Online physics tuition',
  description:
    'Live one-to-one online physics lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
