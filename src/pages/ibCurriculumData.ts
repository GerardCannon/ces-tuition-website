import type { ServiceInfo } from '../lib/structuredData.ts'

export const ibCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'IB', path: '/curricula/ib/' },
]

export const ibFaqs = [
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
    answer: 'Yes. Lessons are live and online, so families anywhere in the UAE can join without travelling. Your child has one-to-one lessons with UK‑trained subject specialists who teach the IB.',
  },
  {
    question: 'Do you teach both the MYP and the DP?',
    answer: 'Yes. We teach students from the middle years of the MYP through to the final two years of the DP.',
  },
  {
    question: 'How is the IB Diploma Programme assessed?',
    answer: 'In most DP subjects, the main assessment is a set of written exams at the end of the two-year programme. Most subjects also include internal assessment, such as an investigation, lab work or an oral, which is marked in school and then moderated by the IB. Each subject is graded from 1 to 7, and the extended essay and theory of knowledge together can add up to three extra points, so the highest possible total is 45. We help your child prepare for their exam papers and plan their internal assessments well ahead of the deadlines.',
  },
  {
    question: 'Can you help with internal assessments?',
    answer: 'Yes. We can help your child understand what\'s expected and plan their time. The work they hand in is always their own.',
  },
]

export const ibService: ServiceInfo = {
  name: 'IB tuition',
  serviceType: 'Online IB tuition',
  description:
    'Live one-to-one online lessons for IB MYP and Diploma Programme students, with UK-trained subject specialists.',
}
