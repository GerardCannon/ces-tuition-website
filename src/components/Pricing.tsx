import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from '@phosphor-icons/react'
import { whatsappUrl } from '@/lib/whatsapp'

const pricingTiers = [
  {
    name: 'Silver',
    description: 'Foundational support',
    features: [
      'Core concepts, aligned to the syllabus',
      'Exam preparation with past papers',
      'Lessons paced for the student',
    ],
  },
  {
    name: 'Gold',
    description: 'More exam practice',
    features: [
      'Everything in Silver',
      'Exam technique',
      'Questions that build in difficulty',
      'Real-life applications of the subject',
    ],
  },
  {
    name: 'Platinum',
    description: 'Support for harder goals',
    features: [
      'Everything in Gold',
      'Help with more complex topics',
      'Strategies matched to the student’s course',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pricing
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            <a href={whatsappUrl()} className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
              Message us on WhatsApp for prices
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className="p-6 md:p-8 flex flex-col border-border bg-card h-full"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={20}
                      weight="bold"
                      className="text-accent flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-full font-semibold mt-auto"
              >
                <a href="#enquire">Enquire</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
