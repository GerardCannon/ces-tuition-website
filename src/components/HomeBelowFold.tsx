import { Services } from '@/components/Services'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { EnquiryForm } from '@/components/EnquiryForm'

export function HomeBelowFold() {
  return (
    <>
      <Services />
      <Features />
      <Pricing />
      <Testimonials />
      <EnquiryForm />
    </>
  )
}
