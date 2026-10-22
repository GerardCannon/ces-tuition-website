import { Card } from '@/components/ui/card'
import { ChalkboardTeacher, Exam, GlobeHemisphereWest } from '@phosphor-icons/react'

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

const services = [
  {
    title: 'UK curriculum: GCSE, IGCSE and A-level',
    description: 'Live online lessons for GCSE, IGCSE and A-level courses with a subject specialist, including exam practice.',
    graphic: <UkFlag />,
  },
  {
    title: 'IB',
    description: 'Lessons for students taking the International Baccalaureate.',
    graphic: <GlobeHemisphereWest size={28} weight="duotone" className={iconClass} aria-hidden="true" />,
  },
  {
    title: 'American curriculum',
    description: 'Online tuition for students following an American curriculum.',
    graphic: <UsFlag />,
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
            UK, IB and American curricula, taught live online for families across the UAE.
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
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
