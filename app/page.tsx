import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Faq } from "@/components/faq"
import { Partners } from "@/components/partners"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Partners />
      <Features />
      <Services />
      <Faq />
    </div>
  )
}

