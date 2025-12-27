import { CheckCircle, Star, TrendUp, Users } from '@phosphor-icons/react'

const features = [
  {
    icon: CheckCircle,
    title: 'Qualified Instructors',
    description: 'Our tutors are experienced educators with proven track records and subject matter expertise.',
  },
  {
    icon: Star,
    title: 'Proven Results',
    description: 'Consistent improvement in grades, test scores, and student confidence across all programs.',
  },
  {
    icon: TrendUp,
    title: 'Adaptive Learning',
    description: 'Curriculum that evolves with each student, addressing strengths and targeting areas for growth.',
  },
  {
    icon: Users,
    title: 'Parent Partnership',
    description: 'Regular communication and progress updates to keep families informed and engaged.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose CES Tuition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We combine educational excellence with personalized attention to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <feature.icon size={32} weight="duotone" className="text-secondary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
