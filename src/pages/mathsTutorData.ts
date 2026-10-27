import type { ServiceInfo } from '../lib/structuredData.ts'

export const mathsCrumbs = [
  { name: 'Home', path: '/' },
  { name: 'British curriculum', path: '/curricula/british/' },
  { name: 'IGCSE and GCSE maths', path: '/igcse-gcse-maths-tutor/' },
]

export const mathsFaqs = [
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
    answer: 'Yes. Our maths lessons are live and online, so families anywhere in the UAE can join without travelling. Your child works one-to-one with one of our UK‑trained subject specialists.',
  },
  {
    question: 'Which exam boards do you cover for maths?',
    answer: 'We teach Edexcel, Cambridge and OxfordAQA maths courses. OxfordAQA offers International GCSE and International AS and A-level maths.',
  },
  {
    question: 'Do you teach A-level maths?',
    answer: 'Yes. We teach A-level maths as well as IGCSE and GCSE maths.',
  },
]

export const mathsService: ServiceInfo = {
  name: 'IGCSE, GCSE and A-level maths tuition',
  serviceType: 'Online maths tuition',
  description:
    'Live one-to-one online maths lessons for IGCSE, GCSE and A-level students, with UK-trained subject specialists.',
}
