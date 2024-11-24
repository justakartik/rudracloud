import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          You build it,{" "}
          <span className="bg-blue-600 text-white px-4 py-1 rounded">We host it.</span>
        </h1>
        <p className="text-gray-400 mb-8">RudraCloud | Where hosting dreams takes flight ✈</p>
        <div className="flex gap-4 justify-center">
          <Link href="https://billing.rudracloud.com/">
            <Button className="bg-blue-600 hover:bg-blue-700">Get started</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline">Learn more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
