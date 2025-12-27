import { Card } from '@/components/ui/card'
import { BookOpen, Users, ChalkboardTeacher, Certificate, TrendUp, Clock } from '@phosphor-icons/react'

const services = [
  {
    icon: BookOpen,
    title: 'Subject Mastery',
    description: 'Comprehensive tutoring across mathematics, sciences, languages, and humanities with expert instructors.',
  },
  {
    icon: Users,
    title: 'Small Group Classes',
    description: 'Interactive learning in small groups that foster collaboration while maintaining personalized attention.',
  },
  {
    icon: ChalkboardTeacher,
    title: 'One-on-One Tutoring',
    description: 'Personalized sessions tailored to individual learning styles, pace, and academic goals.',
  },
  {
    icon: Certificate,
    title: 'Exam Preparation',
    description: 'Targeted preparation for standardized tests, entrance exams, and crucial academic assessments.',
  },
  {
    icon: TrendUp,
    title: 'Progress Tracking',
    description: 'Regular assessments and detailed reports to monitor improvement and adjust learning strategies.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Convenient session times that work around busy student and family schedules.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comprehensive educational support designed to meet diverse learning needs and unlock every student's potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <service.icon size={28} weight="duotone" className="text-accent" />
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
