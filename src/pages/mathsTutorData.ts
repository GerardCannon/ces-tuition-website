import { subjectRematchFaq } from '../lib/rematchCopy.ts'
import type { ServiceInfo } from '../lib/structuredData.ts'

export const mathsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'IGCSE and British curriculum', path: '/curricula/british/' },
  { name: 'IGCSE maths', path: '/igcse-gcse-maths-tutor/' },
]

export const mathsFaqs = [
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
    answer: 'Yes. Our maths lessons are live and online, so families anywhere in the UAE can join without travelling. Your child works one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover for maths?',
    answer: 'We teach Edexcel, Cambridge and OxfordAQA maths courses. OxfordAQA offers International GCSE and International AS and A Level maths.',
  },
  {
    question: 'Do you teach A-level maths?',
    answer: 'Yes. We teach A-level maths as well as IGCSE maths, for Edexcel International A Level, Cambridge International AS and A Level and OxfordAQA International AS and A Level.',
  },
  {
    question: 'How are IGCSE maths exams structured?',
    answer: 'It depends on the board, and your child\'s school chooses the board and the tier. Edexcel International GCSE maths has two 2-hour papers at Foundation or Higher tier, each worth 50%, with a calculator allowed in both. Cambridge IGCSE maths has a non-calculator paper and a calculator paper at each tier: 1 hour 30 minutes each at Core and 2 hours each at Extended. OxfordAQA International GCSE maths has two papers at Core (1 hour 30 minutes each) or Extension (2 hours each), with a calculator allowed in both.',
  },
  {
    question: 'How are A-level maths exams structured?',
    answer: 'It depends on the board. Edexcel International A Level maths is six papers of 1 hour 30 minutes: four pure and two applied. Cambridge International A Level maths is four papers: two pure papers worth 30% each and two applied papers worth 20% each. OxfordAQA International A Level maths is four papers: two AS papers worth 20% each, a pure paper worth 37.5% and a statistics or mechanics paper worth 22.5%.',
  },
  {
    question: 'Is there a non-calculator paper in IGCSE maths?',
    answer: 'Only with Cambridge. Cambridge IGCSE maths has a non-calculator paper at each tier: Paper 1 for Core and Paper 2 for Extended. Edexcel International GCSE and OxfordAQA International GCSE maths allow a calculator in every paper. If your child\'s school follows Cambridge, tell us and we\'ll include non-calculator practice in lessons.',
  },
  subjectRematchFaq('maths'),
]

export const mathsService: ServiceInfo = {
  name: 'IGCSE and A-level maths tuition',
  serviceType: 'Online maths tuition',
  description:
    'Live one-to-one online maths lessons for IGCSE and A-level students, with UK-trained subject specialists.',
}
