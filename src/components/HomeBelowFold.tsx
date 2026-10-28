import { Services } from '@/components/Services'
import { UaeFamilies } from '@/components/UaeFamilies'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { HomeFaq } from '@/components/HomeFaq'
import { EnquiryForm } from '@/components/EnquiryForm'

export function HomeBelowFold() {
  return (
    <>
      <Services />
      <UaeFamilies />
      <Features />
      <Pricing />
      <Testimonials />
      <HomeFaq />
      <EnquiryForm />
    </>
  )
}
