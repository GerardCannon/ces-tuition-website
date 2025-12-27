import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star } from '@phosphor-icons/react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Parent of Mathematics Student',
    content: 'CES Tuition transformed my daughter\'s approach to mathematics. Her confidence soared, and her grades improved from a C to an A within one semester. The personalized attention made all the difference.',
    initials: 'SC',
  },
  {
    name: 'Michael Roberts',
    role: 'University Student',
    content: 'The exam preparation program was instrumental in my success. The tutors knew exactly how to break down complex concepts and prepare me for the challenges ahead. I scored in the top 10% of my cohort.',
    initials: 'MR',
  },
  {
    name: 'Priya Patel',
    role: 'Parent of High School Student',
    content: 'What sets CES Tuition apart is their genuine care for each student. They don\'t just teach subjects—they mentor, encourage, and inspire. My son now actively enjoys learning.',
    initials: 'PP',
  },
  {
    name: 'James Wilson',
    role: 'Secondary School Student',
    content: 'I was struggling with chemistry and physics. My tutor made the subjects interesting and relatable. Now I\'m considering a career in science!',
    initials: 'JW',
  },
  {
    name: 'Linda Martinez',
    role: 'Parent of Primary Student',
    content: 'The progress tracking and regular updates give me complete peace of mind. I always know exactly how my child is doing and where they need extra support.',
    initials: 'LM',
  },
  {
    name: 'David Tan',
    role: 'College Prep Student',
    content: 'The college counseling component helped me navigate applications and entrance exams with confidence. I got into my first-choice university. Thank you, CES Tuition!',
    initials: 'DT',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Hear from students and parents who have experienced the CES Tuition difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 flex flex-col gap-6 bg-card border-border">
              <div className="flex gap-1 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed flex-1">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-accent/10 text-accent font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
