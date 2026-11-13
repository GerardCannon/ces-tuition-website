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
    answer: 'Yes. Our chemistry lessons are live and online, so families in Dubai, Abu Dhabi, Sharjah and across the UAE can join without travelling. Your child learns one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'For chemistry we cover Edexcel at IGCSE, and at A-level Edexcel International A Level, Cambridge International AS and A Level, and OxfordAQA International AS and A Level. We also teach IB chemistry in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level. Send us the board on WhatsApp if you are unsure which one your school uses.',
  },
  {
    question: 'Does my child need to be good at maths for chemistry?',
    answer: 'Some topics involve calculations, and we\'ll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our maths page.',
  },
  {
    question: 'Do you teach IB chemistry online?',
    answer: 'Yes. We teach IB chemistry online in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.',
  },
  {
    question: 'Do you teach Edexcel IGCSE chemistry?',
    answer: 'Yes. At IGCSE we teach Edexcel chemistry.',
  },
  {
    question: 'Do you teach A-level chemistry?',
    answer: 'Yes. We teach A-level chemistry for Edexcel International A Level, Cambridge International AS and A Level, and OxfordAQA International AS and A Level.',
  },
  {
    question: 'Do you teach chemistry at Higher Level and Standard Level?',
    answer: 'Yes. We teach IB chemistry in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.',
  },
  {
    question: 'Do you teach MYP chemistry?',
    answer: 'Yes. We teach chemistry in the IB MYP and in the Diploma Programme (DP).',
  },
]

export const chemistryService: ServiceInfo = {
  name: 'Chemistry tuition',
  serviceType: 'Online chemistry tuition',
  description:
    'Live one-to-one online chemistry lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
