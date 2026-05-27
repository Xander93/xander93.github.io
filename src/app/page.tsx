import { Hero } from "@/components/home/Hero"
import { Transformation } from "@/components/home/Transformation"
import { HowItWorks } from "@/components/home/HowItWorks"
import { Materials } from "@/components/home/Materials"
import { Testimonials } from "@/components/home/Testimonials"
import { InstagramFeed } from "@/components/home/InstagramFeed"
import { Faq } from "@/components/home/Faq"
import { FinalCta } from "@/components/home/FinalCta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Transformation />
      <HowItWorks />
      <Materials />
      <Testimonials />
      <InstagramFeed />
      <Faq />
      <FinalCta />
    </>
  )
}
