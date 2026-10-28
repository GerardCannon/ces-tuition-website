import type { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import { ChalkboardTeacher, Exam } from '@phosphor-icons/react'

function IbGlobe() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="32"
      height="32"
      aria-hidden="true"
      className="block"
    >
      <defs>
        <clipPath id="ces-ib-globe">
          <circle cx="32" cy="32" r="28.2" />
        </clipPath>
      </defs>
      <circle cx="32" cy="32" r="29" fill="#166CB0" />
      <g clipPath="url(#ces-ib-globe)" fill="#2EA468">
        <path d="M30 29 L26 30 L23 33 L20 36 L18 40 L21 43 L24 45 L26 49 L29 53 L32 56 L35 53 L37 48 L36 43 L38 40 L42 36 L45 33.5 L42 31 L37 29.5 L33 28 L30 29 Z" />
        <path d="M26 19 L23 16 L22 13 L25 11 L28 9 L30 6 L32.5 5 L34.5 8 L33 11 L36 13 L37.5 16 L35 18 L33.5 19 L33 23 L30.5 24.5 L29.5 21 L28 18 L26 19 Z" />
        <path d="M16 12.2 L18.2 11 L20.2 12.2 L20.4 15.2 L18.2 16.8 L16.2 15.4 Z" />
        <path d="M13.6 13.6 L15.2 13 L16 15 L14.8 16.2 L13.6 15 Z" />
        <path d="M48 34 L51 36 L51.5 40 L48.5 41 L47 37 Z" />
        <path d="M40.5 48 L42.2 50 L41.6 54.5 L40 53 L39.6 49.5 Z" />
        <path d="M7.5 39 L11 37.5 L14 42 L13.5 50 L10.5 55 L7.2 50 L6.5 44 Z" />
      </g>
      <circle cx="32" cy="32" r="29" fill="none" stroke="#0C3A60" strokeWidth="1.75" />
    </svg>
  )
}

function UkFlag() {
  return (
    <svg
      viewBox="0 0 640 480"
      width="32"
      height="24"
      aria-hidden="true"
      className="block rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.18)]"
    >
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z" />
      <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z" />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </svg>
  )
}

function UsFlag() {
  return (
    <svg
      viewBox="0 0 640 480"
      width="32"
      height="24"
      aria-hidden="true"
      className="block rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.18)]"
    >
      <path fill="#bd3d44" d="M0 0h640v480H0" />
      <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" />
      <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
      <marker id="ces-us-star" markerHeight="30" markerWidth="30">
        <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
      </marker>
      <path
        fill="none"
        markerMid="url(#ces-us-star)"
        d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"
      />
    </svg>
  )
}

const iconClass = 'text-accent'

const services: {
  title: string
  description: string
  graphic: ReactNode
  href?: string
  links?: { href: string; label: string }[]
}[] = [
  {
    title: 'British curriculum: GCSE, IGCSE and A-level',
    description: 'Live online lessons for GCSE, IGCSE and A-level courses with a subject specialist, including exam practice.',
    graphic: <UkFlag />,
    links: [
      { href: '/curricula/british/', label: 'British curriculum tutor' },
      { href: '/igcse-gcse-maths-tutor/', label: 'IGCSE and GCSE maths tutor' },
      { href: '/a-level-tutor/', label: 'A-level tutor' },
    ],
  },
  {
    title: 'IB',
    href: '/curricula/ib/',
    description: 'Lessons for students taking the International Baccalaureate.',
    graphic: <IbGlobe />,
    links: [
      { href: '/curricula/ib/', label: 'IB tutor' },
      { href: '/ib-maths-tutor/', label: 'IB maths tutor' },
    ],
  },
  {
    title: 'American curriculum',
    href: '/curricula/american/',
    description: 'Online tuition for students following an American curriculum.',
    graphic: <UsFlag />,
    links: [
      { href: '/curricula/american/', label: 'American curriculum and SAT tutor' },
    ],
  },
  {
    title: 'One-to-one lessons',
    description: 'Individual live online lessons, paced for your child.',
    graphic: <ChalkboardTeacher size={28} weight="duotone" className={iconClass} aria-hidden="true" />,
  },
  {
    title: 'Exam preparation',
    description: 'Past-paper practice for the assessments on your child’s course.',
    graphic: <Exam size={28} weight="duotone" className={iconClass} aria-hidden="true" />,
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Curricula we teach
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            British, IB and American curricula, all taught live online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-6 md:p-8 border-border bg-card lg:col-span-2 ${
                index === 3 ? 'lg:col-start-2' : ''
              } ${
                index === 4
                  ? 'sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:justify-self-center lg:col-span-2 lg:max-w-none lg:justify-self-stretch'
                  : ''
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  {service.graphic}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.href ? (
                    <a href={service.href} className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
                      {service.title}
                    </a>
                  ) : (
                    service.title
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                {service.links ? (
                  <ul className="space-y-1.5 text-sm">
                    {service.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
                          {link.label}
                        </a>
                      </li>
                    ))}
                    {service.title === 'British curriculum: GCSE, IGCSE and A-level' ? (
                      <li>
                        <a href="/chemistry-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">Chemistry</a>
                        {', '}
                        <a href="/physics-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">physics</a>
                        {', '}
                        <a href="/biology-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">biology</a>
                        {' and '}
                        <a href="/english-tutor/" className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">English</a>
                        {' tutors'}
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
