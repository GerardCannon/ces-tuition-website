import type { ServiceInfo } from '../lib/structuredData.ts'

export const britishCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
]

export const britishFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: 'Message us on WhatsApp and we’ll arrange a free 30-minute trial lesson. After that, we’ll set you up on our app, where you can monitor your child’s progress.',
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
    question: 'What’s the difference between GCSE and IGCSE?',
    answer: 'GCSEs are taken by students in UK schools. The IGCSE is the international version, used by many schools in the UAE. Your child’s school decides which one they take.',
  },
  {
    question: 'Do you also teach A-level?',
    answer: 'Yes. We teach A-level in a wide range of subjects, as well as GCSE and IGCSE.',
  },
  {
    question: 'How are GCSE, IGCSE and A-level exams structured?',
    answer: 'GCSEs and IGCSEs are usually two-year courses assessed mainly by written exams, and some subjects also include coursework, practical work or a speaking test. In some subjects, such as maths, students sit either a foundation or a higher paper (called core and extended at Cambridge), and this sets the range of grades available. A-levels in UK schools are examined at the end of the two years, while international A-levels from Edexcel and OxfordAQA are modular, so units can be taken across more than one exam series. We help your child understand how their own course is assessed and practise the kinds of questions each paper asks.',
  },
]

export const britishService: ServiceInfo = {
  name: 'British curriculum tuition',
  serviceType: 'Online British curriculum tuition',
  description:
    'Live one-to-one online lessons for GCSE, IGCSE and A-level students following the British curriculum, with UK-trained subject specialists.',
}
