import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { EnquiryForm } from '@/components/EnquiryForm'
import { Footer } from '@/components/Footer'
import { WhatsAppBar } from '@/components/WhatsAppBar'

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <EnquiryForm />
      <Footer />
      <WhatsAppBar />
    </div>
  )
}
