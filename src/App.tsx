import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App