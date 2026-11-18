import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const chemistryCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Chemistry', path: '/chemistry-tutor/' },
]

export const chemistryFaqs = [
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
    answer: 'Yes. Our chemistry lessons are live and online, so families in Dubai, Abu Dhabi, Sharjah and across the UAE can join without travelling. Your child learns one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'For chemistry we cover Edexcel, Cambridge and OxfordAQA at IGCSE and at A-level. Edexcel offers International GCSE and International A Level, Cambridge offers IGCSE and International AS and A Level, and OxfordAQA offers International GCSE and International AS and A Level. We also teach IB chemistry in the MYP and in the Diploma Programme, where we cover both Higher Level and Standard Level. If you\'re not sure which board your child\'s school uses, message us on WhatsApp and we\'ll help you work it out.',
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
    question: 'Do you teach IGCSE chemistry?',
    answer: 'Yes. At IGCSE we teach Edexcel International GCSE, Cambridge IGCSE and OxfordAQA International GCSE chemistry.',
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
  {
    question: 'How is IB chemistry assessed?',
    answer: 'For IB Diploma chemistry, 80% of the mark comes from external exams and 20% from an internal assessment. That assessment is one scientific investigation. Paper 1 is worth 36% and Paper 2 is worth 44%. At Standard Level, Paper 1 is 55 marks and lasts 1 hour 30 minutes, and Paper 2 is 50 marks and lasts 1 hour 30 minutes. At Higher Level, Paper 1 is 75 marks and lasts 2 hours, and Paper 2 is 90 marks and lasts 2 hours 30 minutes.',
  },
  {
    question: 'What is the difference between Standard Level and Higher Level chemistry papers?',
    answer: 'Both levels have two papers. At Standard Level, both last 1 hour 30 minutes: Paper 1 is 55 marks and Paper 2 is 50 marks. At Higher Level, Paper 1 lasts 2 hours and is 75 marks, and Paper 2 lasts 2 hours 30 minutes and is 90 marks. We teach both levels.',
  },
  {
    question: 'How are Edexcel IGCSE chemistry exams structured?',
    answer: 'Edexcel International GCSE chemistry can be linear or modular, and both routes use the same content. On the linear route, Paper 1 lasts 2 hours and is worth 61.1% of the International GCSE, and Paper 2 lasts 1 hour 15 minutes and is worth 38.9%. The modular route is only available to schools outside the UK. Its two units each last 1 hour 40 minutes and are worth 50%, and a unit can be taken in any exam series. There is no coursework and no practical exam. The school chooses the route.',
  },
  {
    question: 'How is Cambridge IGCSE chemistry assessed?',
    answer: 'Cambridge IGCSE chemistry has Core and Extended content. Core students take Paper 1 (multiple-choice, 45 minutes, 30%) and Paper 3 (theory, 1 hour 15 minutes, 50%). Extended students take Paper 2 (multiple-choice, 45 minutes, 30%) and Paper 4 (theory, 1 hour 15 minutes, 50%). Every student also takes one practical paper worth 20%: either Paper 5, a practical test of 1 hour 15 minutes, or Paper 6, an alternative to practical of 1 hour.',
  },
  {
    question: 'How is OxfordAQA International GCSE chemistry assessed?',
    answer: 'It is a linear International GCSE with two papers of 1 hour 30 minutes, each worth 50%. Either paper can test any part of the course. Practical knowledge is assessed in these two papers.',
  },
  subjectRematchFaq('chemistry'),
]

export const chemistryService: ServiceInfo = {
  name: 'Chemistry tuition',
  serviceType: 'Online chemistry tuition',
  description:
    'Live one-to-one online chemistry lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
