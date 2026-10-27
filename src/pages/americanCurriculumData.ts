import type { ServiceInfo } from '../lib/structuredData.ts'

export const americanCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'American curriculum', path: '/curricula/american/' },
]

export const americanFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: "Message us on WhatsApp and we'll arrange a free 30-minute trial lesson. After that, we'll set you up on our app, where you can schedule lessons and monitor your child's progress.",
  },
  {
    question: "We don't live in the UAE. Can my child still have lessons?",
    answer: 'Yes. All our lessons are online, so families join us from the UK, Europe and all over Asia.',
  },
  {
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. Every lesson is live and online, so families across the UAE, including Dubai, Abu Dhabi and Sharjah, can join without travelling. Lessons are one-to-one with our UK-trained subject specialists.',
  },
  {
    question: 'Do you help with the SAT?',
    answer: 'Yes. We help high school students prepare for the SAT, covering both the maths and the reading and writing.',
  },
  {
    question: 'How is the SAT structured?',
    answer: "The SAT is taken digitally, in the College Board's Bluebook app, and has two sections: reading and writing, then maths. Each section is split into two modules, and the second module is harder or easier depending on how your child did in the first. The test takes 2 hours and 14 minutes in total, with a 10-minute break between the sections. We help your child get used to the format and practise both sections, so the real test feels familiar.",
  },
  {
    question: 'Which school subjects can you help with?',
    answer: "We help with a range of school subjects, such as maths and English. Message us on WhatsApp with your child's subject and grade, and we'll let you know how we can help.",
  },
]

export const americanService: ServiceInfo = {
  name: 'American curriculum and SAT tuition',
  serviceType: 'Online American curriculum tuition',
  description:
    'Live one-to-one online lessons for American curriculum students, including SAT preparation, with UK-trained subject specialists.',
}
