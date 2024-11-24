import { AboutHero } from "@/components/about-hero"
import { Mission } from "@/components/mission"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Mission />
    </div>
  )
}

