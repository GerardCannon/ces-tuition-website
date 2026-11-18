import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const economicsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Economics', path: '/economics-tutor/' },
]

export const economicsFaqs = [
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
    answer: 'Yes. Our economics lessons take place live online, so families in Dubai, Abu Dhabi, Sharjah and the other emirates can join without travelling. Your child is taught one-to-one by one of our UK‑trained subject specialists.',
  },
  {
    question: 'My child hasn\'t studied economics before. Is that a problem?',
    answer: 'No. Many students start economics for the first time at IGCSE, A-level or in the IB MYP or Diploma Programme. We begin with the key ideas and build from there, alongside what their class is covering.',
  },
  {
    question: 'Does my child need to be good at maths for economics?',
    answer: 'Some topics use percentages, graphs and simple calculations, and we\'ll practise these until your child feels comfortable with them. If maths itself is the worry, have a look at our maths page.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'At IGCSE and at A-level we teach Edexcel, Cambridge and OxfordAQA. Edexcel offers International GCSE and International A Level, Cambridge offers IGCSE and International AS and A Level, and OxfordAQA offers International GCSE and International AS and A Level. We also teach economics in the IB MYP and the IB Diploma Programme. Tell us which exam board your child\'s school uses, and our lessons will follow that course.',
  },
  {
    question: 'How is IB economics assessed?',
    answer: 'In the IB Diploma Programme, economics is assessed with external examinations and an internal assessment. The internal assessment is a portfolio of three commentaries based on published extracts from the news media, using the key concepts as a lens.',
  },
  {
    question: 'How are IGCSE economics exams structured?',
    answer: 'It depends on the board, and your child\'s school chooses the board. Edexcel International GCSE economics has two written papers. Paper 1 covers microeconomics and business economics, and Paper 2 covers macroeconomics and the global economy. The questions mix multiple-choice, short-answer, data-response and open-ended questions. Cambridge IGCSE economics has two written papers. For exams in 2026, Paper 1 lasts 45 minutes and is worth 30%, and Paper 2 lasts 2 hours 15 minutes and is worth 70%. For exams from 2027, Paper 1 lasts 1 hour and is worth 30%, and Paper 2 lasts 2 hours and is worth 70%. OxfordAQA International GCSE economics has two written papers. Paper 1 covers how markets work, and Paper 2 covers how economies work. The papers include multiple-choice, calculation, short-answer and extended-response questions.',
  },
  {
    question: 'How are A-level economics exams structured?',
    answer: 'It depends on the board, and your child\'s school decides the board. Edexcel International A Level economics has four written papers, each worth 25% of the International A Level. Units 1 and 2 each last 1 hour 45 minutes, and Units 3 and 4 each last 2 hours. Cambridge International AS and A Level economics has four papers, weighted as shares of the full A Level: Paper 1 is 17%, Paper 2 is 33%, Paper 3 is 17% and Paper 4 is 33%. OxfordAQA International AS and A Level economics has two International AS papers of 1 hour 45 minutes, each worth 20% of the A Level, and two further papers of 2 hours, each worth 30%.',
  },
  subjectRematchFaq('economics'),
]

export const economicsService: ServiceInfo = {
  name: 'Economics tuition',
  serviceType: 'Online economics tuition',
  description:
    'Live one-to-one online IGCSE, A-level, IB MYP and IB Diploma (DP) economics lessons, with UK-trained subject specialists.',
}
