import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ArrowSquareOut, Star } from '@phosphor-icons/react'

const REVIEWS_URL = 'https://www.myprivatetutor.ae/teacher/11899167/gerard'

const testimonials = [
  {
    name: 'Parent',
    initials: 'P',
    content: 'My son was struggling with maths for a long time, his grades improved massively after just a few sessions and he gained a lot of confidence in the subject. Gerard uses lots of good resources and gives clear explanations. He was also good at keeping me up to date with my son\'s progress and areas he needed to practice more.',
  },
  {
    name: 'Amna, parent',
    initials: 'A',
    content: 'My son struggles with dyslexia and ADHD. Gerard has provided me with great tutor who gets my son to focus in online lessons in a way that he could not do before. I am thankful for how things are now progressing.',
  },
  {
    name: 'Peter, parent',
    initials: 'P',
    content: 'Mikela\'s business and chemistry tutors are really great. I am very happy with their subject knowledge and they are always ready to go that extra bit in order to give her the understanding she needs. Having previously had only an okay experience with online lessons I was hesitant to commit to more but the caliber of these online lessons make it a no brainer. Absolutely superb tuition. Easy 5 stars',
  },
  {
    name: 'Mark, parent',
    initials: 'M',
    content: 'Patient, super knowledgeable and very facilitating. I currently use them for physics, chemistry and mathematics and I am soon to add biology. From day 1 they provided my son with a clear path to making progress and I have been super happy with my son\'s progress ever since. You really do get what you pay for in this city and so I wholeheartedly recommend',
  },
  {
    name: 'Margaritte, parent',
    initials: 'M',
    content: 'Last year, Gerard introduced me to some excellent tutors, and thanks to his team\'s hard work, my daughter passed all but one of her subjects - an incredible outcome considering the continuous challenges she faces with her learning ability. I feel confident and relieved knowing she\'s in the right hands this year.',
  },
  {
    name: 'Sebastian, parent',
    initials: 'S',
    content: 'My daughter has made excellent progress in science and I have no doubt it\'s because of her tutors. Thanks so much guys :)',
  },
]

function Stars({ size = 20, label }: { size?: number; label: string }) {
  return (
    <div className="flex gap-1 text-secondary" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} weight="fill" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <Stars size={28} label="Rated 5 out of 5 stars" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            38 five-star reviews on MyPrivateTutor
          </h2>
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold text-primary underline-offset-4 hover:underline"
          >
            Read all 38 reviews
            <ArrowSquareOut size={20} weight="bold" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 md:p-8 flex flex-col gap-5 md:gap-6 bg-card border-border">
              <Stars label="5 out of 5 stars" />

              <blockquote className="text-foreground leading-relaxed">
                <p>&ldquo;{testimonial.content}&rdquo;</p>
              </blockquote>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="font-bold text-foreground">
                  {testimonial.name}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
