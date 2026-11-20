import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const americanCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'American curriculum', path: '/curricula/american/' },
]

export const americanFaqs = [
  {
    question: 'How do we book a lesson?',
    answer: "Message us on WhatsApp. We reply within the hour and arrange your free 30-minute trial lesson with a UK-trained specialist. After that, we'll set you up on our app, where you can schedule lessons and monitor your child's progress.",
  },
  {
    question: "We don't live in the UAE. Can my child still have lessons?",
    answer: 'Yes. All our lessons are online, so families join us from the UK, the rest of Europe and across Asia.',
  },
  {
    question: 'Do you teach families in Dubai, Abu Dhabi and Sharjah?',
    answer: 'Yes. Every lesson is live and online, so families across the UAE, including Dubai, Abu Dhabi and Sharjah, can join without travelling. Lessons are one-to-one with our UK‑trained subject specialists.',
  },
  {
    question: 'Do you help with the SAT?',
    answer: 'Yes. We help high school students prepare for the SAT, covering both the maths and the reading and writing.',
  },
  {
    question: 'How is the SAT structured?',
    answer: "The SAT is taken digitally, in the College Board's Bluebook app, and has two sections: reading and writing, then maths. Each section is split into two modules, and the second module is harder or easier depending on how your child did in the first. The test takes 2 hours and 14 minutes, plus a 10-minute break between the sections. We help your child get used to the format and practise both sections, so the real test feels familiar.",
  },
  {
    question: 'Which school subjects can you help with?',
    answer: "We help with a range of school subjects, such as maths and English. Message us on WhatsApp with your child's subject and grade, and we'll let you know how we can help.",
  },
  {
    question: 'How is the SAT scored?',
    answer: 'Each of the two sections, Reading and Writing and Math, is scored from 200 to 800. The two section scores are added together, so the total score is from 400 to 1600.',
  },
  {
    question: 'Can my child use a calculator in the SAT?',
    answer: 'Yes, for the whole Math section. The Bluebook app has a Desmos calculator built in, and students can bring an approved handheld calculator instead. In lessons, your child can practise with whichever one they plan to use.',
  },
  {
    question: 'What should I tell you when I message about the SAT?',
    answer: "Tell us your child's grade, when they plan to sit the SAT if you know, and which section they find harder. If they have a score from a practice test, that helps too. We reply within the hour.",
  },
  subjectRematchFaq('American curriculum'),
]

export const americanService: ServiceInfo = {
  name: 'American curriculum and SAT tuition',
  serviceType: 'Online American curriculum tuition',
  description:
    'Live one-to-one online lessons for American curriculum students, including SAT preparation, with UK-trained subject specialists.',
}
