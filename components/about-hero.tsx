import { Info } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Info className="w-8 h-8 text-blue-600" />
          <h1 className="text-4xl md:text-5xl font-bold">About us</h1>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We are a hosting company that provides variety of services.
        </p>
      </div>
    </section>
  )
}

