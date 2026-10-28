import { ChatCircle, DeviceMobile, Gift, GraduationCap, Star, Users } from '@phosphor-icons/react'

const features = [
  {
    icon: GraduationCap,
    title: 'UK‑trained specialists',
    description: 'Subject specialists who teach the British, IB and American curricula.',
  },
  {
    icon: Star,
    title: '38 five-star reviews',
    description: 'Parents and students have left 38 five-star reviews on MyPrivateTutor.',
  },
  {
    icon: Users,
    title: 'Parent updates',
    description: 'We keep parents informed about how lessons are going.',
  },
  {
    icon: DeviceMobile,
    title: 'Tuition portal',
    description: "Follow your child's progress and manage lessons in the CES portal.",
  },
  {
    icon: Gift,
    title: 'Referral programme',
    description: 'Ask us about our referral programme.',
  },
  {
    icon: ChatCircle,
    title: 'Live online',
    description: 'Lessons are live online, for families in every emirate.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Why families choose CES Tuition
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            One-to-one online lessons, with progress you can follow in the tuition portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <feature.icon size={28} weight="duotone" className="text-accent" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
