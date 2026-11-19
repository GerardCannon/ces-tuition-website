import { Services } from '@/components/Services'
import { UaeFamilies } from '@/components/UaeFamilies'
import { Features } from '@/components/Features'
import { FreeLessons } from '@/components/FreeLessons'
import { HowItWorks } from '@/components/HowItWorks'
import { FreeMathsCheckup } from '@/components/FreeMathsCheckup'
import { Testimonials } from '@/components/Testimonials'
import { HomeFaq } from '@/components/HomeFaq'
import { EnquiryForm } from '@/components/EnquiryForm'

export function HomeBelowFold() {
  return (
    <>
      <Services />
      <UaeFamilies />
      <Features />
      <FreeLessons />
      <HowItWorks />
      <FreeMathsCheckup />
      <Testimonials />
      <HomeFaq />
      <EnquiryForm />
    </>
  )
}
