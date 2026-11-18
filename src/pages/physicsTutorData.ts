import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const physicsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Physics', path: '/physics-tutor/' },
]

export const physicsFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp. We reply within the hour and arrange your free 30-minute trial lesson with a UK-trained specialist. After that, we\'ll set you up on our app, where you can schedule lessons and monitor your child\'s progress.',
  },
  {
    question: 'We don\'t live in the UAE. Can my child still have lessons?',
    answer: 'Yes. All our lessons are online, so families join us from the UK, the rest of Europe and across Asia.',
  },
  {
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. Lessons take place live and online, so wherever your family is in the UAE, your child can join without travelling. Every physics lesson is one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA physics courses. Edexcel offers International GCSE and International A Level, Cambridge offers IGCSE and International AS and A Level, and OxfordAQA offers International GCSE and International AS and A Level. We also teach IB physics in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.',
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
    answer: 'Yes. We teach IB physics in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level.',
  },
  {
    question: 'Do you teach MYP physics?',
    answer: 'Yes. We teach physics in the IB MYP and in the Diploma Programme (DP).',
  },
  {
    question: 'How is IB physics assessed?',
    answer: 'In the IB Diploma, 80% of the final physics mark comes from external exams and 20% from an internal assessment. The internal assessment is one scientific investigation, a written report of up to 3,000 words. Paper 1 is worth 36% and has multiple-choice questions (Paper 1A) and data-based questions (Paper 1B). Paper 2 is worth 44% and has short-answer and extended-response questions. At Standard Level, both papers last 1 hour 30 minutes. At Higher Level, Paper 1 lasts 2 hours and Paper 2 lasts 2 hours 30 minutes.',
  },
  {
    question: 'What is the difference between Standard Level and Higher Level physics papers?',
    answer: 'Both levels have two papers. At Standard Level, both papers are 1 hour 30 minutes. At Higher Level, Paper 1 is 2 hours and Paper 2 is 2 hours 30 minutes. The weightings are the same at both levels: Paper 1 is 36% and Paper 2 is 44%. We teach both levels.',
  },
  {
    question: 'How are IGCSE physics exams structured?',
    answer: 'It depends on the board, and your child\'s school chooses the board and the route. Edexcel International GCSE physics can be linear or modular, with the same content on both. On the linear route Paper 1 lasts 2 hours and is worth 61.1%, and Paper 2 lasts 1 hour 15 minutes and is worth 38.9%. The modular route, only available to schools outside the UK, has two units of 1 hour 40 minutes, each worth 50%. Edexcel has no coursework and no practical exam. Cambridge IGCSE physics has Core and Extended content. Core students take Paper 1 (30%) and Paper 3 (50%), and Extended students take Paper 2 (30%) and Paper 4 (50%). All Cambridge students also take a practical paper worth 20%, either a practical test or an alternative to practical. OxfordAQA International GCSE physics is linear, with two papers of 1 hour 30 minutes, each worth 50%.',
  },
  {
    question: 'How are A-level physics exams structured?',
    answer: 'It depends on the board, and your child\'s school decides the board. Edexcel International A Level physics has six written papers. Units 1, 2, 4 and 5 are worth 20% each, and the two practical-skills papers, Units 3 and 6, are worth 10% each. Cambridge International AS and A Level physics has five papers, weighted as shares of the full A Level: Paper 1 is 15.5%, Paper 2 is 23%, Paper 3 (practical) is 11.5%, Paper 4 is 38.5% and Paper 5 is 11.5%. OxfordAQA International AS and A Level physics has five papers of 2 hours, each worth 20% of the A Level.',
  },
  subjectRematchFaq('physics'),
]

export const physicsService: ServiceInfo = {
  name: 'Physics tuition',
  serviceType: 'Online physics tuition',
  description:
    'Live one-to-one online physics lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
