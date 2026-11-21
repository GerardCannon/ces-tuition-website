import { homePickClick, type HomePickSubject } from '@/lib/goatcounter'

const subjects: { label: string; href: string; slug: HomePickSubject }[] = [
  { label: 'Maths', href: '/igcse-gcse-maths-tutor/', slug: 'maths' },
  { label: 'English', href: '/english-tutor/', slug: 'english' },
  { label: 'Chemistry', href: '/chemistry-tutor/', slug: 'chemistry' },
  { label: 'Physics', href: '/physics-tutor/', slug: 'physics' },
  { label: 'Biology', href: '/biology-tutor/', slug: 'biology' },
  { label: 'Economics', href: '/economics-tutor/', slug: 'economics' },
  { label: 'IB maths', href: '/ib-maths-tutor/', slug: 'ibmaths' },
  { label: 'A Level', href: '/a-level-tutor/', slug: 'alevel' },
  { label: 'SAT', href: '/curricula/american/#sat', slug: 'sat' },
]

// Home hero only. Sends visitors straight to their subject page.
export function HomeSubjectPicker() {
  return (
    <nav aria-label="Find your subject" className="pt-1">
      <p className="text-sm sm:text-base font-semibold text-white mb-2">Find your subject</p>
      <ul className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
        {subjects.map((s) => (
          <li key={s.slug}>
            <a
              href={s.href}
              {...homePickClick(s.slug, s.label)}
              className="inline-flex items-center min-h-9 px-3.5 rounded-full border border-white/60 text-sm sm:text-base text-white font-medium hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
