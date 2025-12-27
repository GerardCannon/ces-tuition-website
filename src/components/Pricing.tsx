import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from '@phosphor-icons/react'

const pricingTiers = [
  {
    name: 'Silver',
    price: 'Custom',
    description: 'Foundational support for beginners',
    features: [
      'Provide foundational support',
      'Excellent for beginners who need basic skill-building',
      'Focus on core concepts',
      'Tailored lessons to support classroom performance',
      'Exam preparation using past papers',
      'Adaptive to individual learning styles',
      'Build confidence through structured, syllabus-aligned sessions',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Gold',
    price: 'Custom',
    description: 'Advanced guidance for higher grades',
    features: [
      'Everything in Silver',
      'Offer advanced guidance for intermediate students aiming for higher grades',
      'Emphasize on exam techniques',
      'Real-life applications',
      'Progressive difficulty in questioning',
      'Substantial tutoring experience',
      'Foster strong student relationships',
      'Target-specific improvements',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Platinum',
    price: 'Custom',
    description: 'Elite coaching for top achievers',
    features: [
      'Everything in Gold',
      'Deliver elite, comprehensive coaching for top achievers',
      'Cater to complex needs',
      'Demonstrate excellence in student experience, policy, and pass rates',
      'Specialized learning strategies',
      'Excellence at achieving the highest performance targets',
    ],
    cta: 'Get Started',
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Tutor Tiers
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Choose the tier that best fits your academic goals. From foundational support to elite coaching, we have experienced tutors ready to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 flex flex-col relative ${
                tier.popular
                  ? 'border-2 border-accent shadow-xl scale-105 bg-card'
                  : 'border-border bg-card'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Contact us for personalized pricing
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check
                      size={20}
                      weight="bold"
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={
                  tier.popular
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground w-full font-medium tracking-wide'
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground w-full font-medium tracking-wide'
                }
              >
                <a href="https://app.cestuition.com/register">{tier.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
