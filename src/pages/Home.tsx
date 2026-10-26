import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'
import { HomeBelowFold } from '@/components/HomeBelowFold'
import { WhatsAppBar } from '@/components/WhatsAppBar'

export function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HomeBelowFold />
      <Footer />
      <WhatsAppBar />
    </div>
  )
}
