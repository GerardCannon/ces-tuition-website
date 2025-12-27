import { Button } from '@/components/ui/button'
import { ArrowRight } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/80">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255, 255, 255, 0.1) 35px,
            rgba(255, 255, 255, 0.1) 70px
          )`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Excellence in Education,
            <br />
            <span className="text-secondary">Tailored for Success</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Expert tutoring that transforms potential into achievement. Personalized learning experiences designed to help students excel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium tracking-wide text-lg px-8 transition-transform hover:scale-105"
            >
              <a href="https://app.cestuition.com" className="flex items-center gap-2">
                Start Learning Today
                <ArrowRight weight="bold" />
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-medium tracking-wide text-lg px-8"
            >
              <a href="#services">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
