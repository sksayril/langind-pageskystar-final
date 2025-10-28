import Hero from '@/components/Hero'
import Services from '@/components/sections/Services'
import ClientCarousel from '@/components/sections/ClientCarousel'
import CaseStudies from '@/components/sections/CaseStudies'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ClientCarousel />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}

