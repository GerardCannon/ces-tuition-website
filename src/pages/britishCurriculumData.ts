import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const britishCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'IGCSE and British curriculum', path: '/curricula/british/' },
]

export const britishFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp. We reply within the hour and arrange your free 30-minute trial lesson with a UK-trained specialist. After that, we\'ll set you up on our app, where you can schedule lessons and monitor your child\'s progress.',
  },
  {
    question: 'We don’t live in the UAE. Can my child still have lessons?',
    answer: 'Yes. All our lessons are online, so families join us from the UK, Europe and all over Asia.',
  },
  {
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. All our lessons are live and online, so families in Dubai, Abu Dhabi, Sharjah and the rest of the UAE can join without travelling. Your child works one-to-one with a UK‑trained subject specialist who teaches the British curriculum.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach Edexcel, Cambridge and OxfordAQA courses. OxfordAQA offers International GCSE and International AS and A-level.',
  },
  {
    question: 'What’s the difference between IGCSE and the UK GCSE?',
    answer: 'The IGCSE is the international version of the UK GCSE and is used by many schools in the UAE. We teach the IGCSE, not the UK GCSE. Your child’s school decides which one they take.',
  },
  {
    question: 'Do you also teach A-level?',
    answer: 'Yes. We teach A-level in a wide range of subjects, as well as IGCSE.',
  },
  {
    question: 'How are IGCSE and A-level exams structured?',
    answer: 'IGCSEs are usually two-year courses assessed mainly by written exams, and some subjects also include coursework, practical work or a speaking test. In some subjects, such as maths, students sit either a foundation or a higher paper (called core and extended at Cambridge), and this sets the range of grades available. A-levels in UK schools are examined at the end of the two years, while international A-levels from Edexcel and OxfordAQA are modular, so units can be taken across more than one exam series. We help your child understand how their own course is assessed and practise the kinds of questions each paper asks.',
  },
  subjectRematchFaq('British curriculum'),
]

export const britishService: ServiceInfo = {
  name: 'IGCSE and British curriculum tuition',
  serviceType: 'Online IGCSE tuition',
  description:
    'Live one-to-one online IGCSE lessons for students following the British curriculum, with UK-trained subject specialists.',
}
