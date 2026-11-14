import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const biologyCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Biology', path: '/biology-tutor/' },
]

export const biologyFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp. We reply within the hour and arrange your free 30-minute trial lesson with a UK-trained specialist. After that, we\'ll set you up on our app, where you can schedule lessons and monitor your child\'s progress.',
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
    answer: 'For biology we cover Edexcel and OxfordAQA at IGCSE, and Edexcel International A Level and OxfordAQA International A Level at A-level. We also teach IB biology in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level. Send us the board on WhatsApp if you are unsure which one your school uses.',
  },
  {
    question: 'Can you help with an IB Diploma internal assessment?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own. The internal assessment is marked by your child\'s school teacher and checked by the IB; our help is with understanding what is expected and planning time.',
  },
  {
    question: 'Do you teach IGCSE biology online in the UAE?',
    answer: 'Yes. We teach IGCSE biology live and online, so families in every emirate, including Dubai, Abu Dhabi and Sharjah, can join without travelling. Your child has one-to-one lessons with our UK‑trained subject specialists.',
  },
  {
    question: 'Do you teach IB biology in Dubai?',
    answer: 'Yes. We teach IB biology live and online, so families in Dubai can join without travelling. Your child has one-to-one lessons with our UK‑trained subject specialists.',
  },
  {
    question: 'Do you teach IB biology at Higher Level and Standard Level?',
    answer: 'Yes. We teach IB biology in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.',
  },
  {
    question: 'Do you teach MYP biology?',
    answer: 'Yes. We teach biology in the IB MYP and in the Diploma Programme (DP).',
  },
  {
    question: 'How is IB biology assessed?',
    answer: 'In the IB Diploma, 80% of the final mark comes from external exams and 20% from an internal assessment. Paper 1 is worth 36% and Paper 2 is worth 44%. At Standard Level both papers last 1 hour 30 minutes. At Higher Level, Paper 1 lasts 2 hours and Paper 2 lasts 2 hours 30 minutes.',
  },
  {
    question: 'What is the difference between Standard Level and Higher Level biology papers?',
    answer: 'Both levels have two papers. At Standard Level both papers are 1 hour 30 minutes. At Higher Level Paper 1 is 2 hours and Paper 2 is 2 hours 30 minutes. We teach both levels.',
  },
  {
    question: 'How are Edexcel IGCSE biology exams structured?',
    answer: 'There are two routes, and the content is the same. The linear route has Paper 1 (2 hours, 61.1% of the International GCSE) and Paper 2 (1 hour 15 minutes, 38.9%). The modular route, only available to schools outside the UK, has two units of 1 hour 40 minutes, each worth 50%, which can be taken in any exam series. There is no coursework and no practical exam. The school chooses the route.',
  },
  {
    question: 'How is OxfordAQA International GCSE biology structured?',
    answer: 'It is a linear International GCSE with two papers of 1 hour 30 minutes, each worth 50%. Either paper can test any part of the course.',
  },
  subjectRematchFaq('biology'),
]

export const biologyService: ServiceInfo = {
  name: 'Biology tuition',
  serviceType: 'Online biology tuition',
  description:
    'Live one-to-one online biology lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
