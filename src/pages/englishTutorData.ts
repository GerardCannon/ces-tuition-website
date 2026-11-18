import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const englishCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'English', path: '/english-tutor/' },
]

export const englishFaqs = [
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
    answer: 'Yes. Our English lessons are all live and online, so families anywhere in the UAE can take part without travelling. Your child works one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover?',
    answer: 'We teach students following Edexcel, Cambridge and OxfordAQA English courses: Edexcel International GCSE and International A Level, Cambridge IGCSE and International AS and A Level, and OxfordAQA International GCSE and International AS and A Level.',
  },
  {
    question: 'My child enjoys reading but struggles to write about it. Can you help?',
    answer: 'Yes. Enjoying reading is a good start. We help your child turn what they notice into clear written points, backed up with evidence.',
  },
  {
    question: 'What\'s the difference between IGCSE English Language and English Literature?',
    answer: 'English Language is about reading unseen passages closely and writing clearly for different purposes and audiences. English Literature is about studying set novels, plays and poems, and writing essays about them. Many schools enter students for both, and we can help with either or both.',
  },
  {
    question: 'How are IGCSE English exams structured?',
    answer: 'It depends on the board, which your child\'s school chooses. Edexcel International GCSE English Language A has a 2-hour 15-minute exam (60%), then a 1-hour 30-minute exam or coursework (40%), and English Language B is one 3-hour exam. Cambridge IGCSE First Language English has a 2-hour Reading paper (50%), then a 2-hour Directed Writing and Composition paper or a coursework portfolio. OxfordAQA International GCSE English Language has a 2-hour paper (60%), then a 2-hour paper or a non-exam project (40%). English Literature has its own papers with each board. None of these exams is tiered, so every student sits the same papers.',
  },
  {
    question: 'How are A-level English exams structured?',
    answer: 'It depends on the board. Edexcel International A Level English Language and English Literature each have four exams, each worth 25%. Cambridge International A Level English Language and Literature in English each have four papers, each worth 25%, two at AS Level and two at A Level. OxfordAQA International A Level English Language and English Literature have two AS papers worth 20% each and two A2 parts worth 30% each, and the last one can be an exam or a non-exam assessment.',
  },
  {
    question: 'Can my child do coursework instead of an exam?',
    answer: 'With some courses, yes, and the school makes that choice. All three boards offer a coursework option in IGCSE English Language and English Literature, and OxfordAQA offers one in the final part of its International A Levels. The work must be your child\'s own, and the school sets the rules on how much help is allowed. We help your child build the reading, planning and writing skills that coursework needs.',
  },
  subjectRematchFaq('English'),
]

export const englishService: ServiceInfo = {
  name: 'English tuition',
  serviceType: 'Online English tuition',
  description:
    'Live one-to-one online English lessons for IGCSE, A-level, IB MYP and IB Diploma (DP) students, with UK-trained subject specialists.',
}
