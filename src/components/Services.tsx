import { Card } from '@/components/ui/card'
import { BookOpen, ChalkboardTeacher, Exam, GlobeHemisphereWest, GraduationCap, Student } from '@phosphor-icons/react'

const services = [
  {
    icon: BookOpen,
    title: 'GCSE and IGCSE',
    description: 'Live online lessons for GCSE and IGCSE courses, with a subject specialist.',
  },
  {
    icon: GraduationCap,
    title: 'A-level',
    description: 'Subject support for A-level courses, including exam practice.',
  },
  {
    icon: Student,
    title: 'IB',
    description: 'Lessons for students taking the International Baccalaureate.',
  },
  {
    icon: GlobeHemisphereWest,
    title: 'American curriculum',
    description: 'Online tuition for students following an American curriculum.',
  },
  {
    icon: ChalkboardTeacher,
    title: 'One-to-one lessons',
    description: 'Individual live online lessons, paced for your child.',
  },
  {
    icon: Exam,
    title: 'Exam preparation',
    description: 'Past-paper practice for the assessments on your child’s course.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 md:p-8 border-border bg-card"
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <service.icon size={28} weight="duotone" className="text-accent" aria-hidden="true" />
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
