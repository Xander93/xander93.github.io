import { Hero } from "@/components/home/Hero"
import { HowItWorks } from "@/components/home/HowItWorks"
import { Materials } from "@/components/home/Materials"
import { Testimonials } from "@/components/home/Testimonials"
import { Faq } from "@/components/home/Faq"
import { FinalCta } from "@/components/home/FinalCta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Materials />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
