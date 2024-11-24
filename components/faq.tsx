"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  const faqs = [
    {
      question: "How long does my service take to activate?",
      answer: "Our services are activated instantly after payment confirmation excluding some services. You can start using your service right away!"
    },
    {
      question: "Can I upgrade my current plan?",
      answer: "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining time in your billing cycle."
    },
    {
      question: "How can you make the plans so cheap?",
      answer: "We optimize our infrastructure and operations to keep costs low while maintaining high quality service."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7 through our ticket system. We typically respond within 24hrs hour."
    },
    {
      question: "Which payment methods do you accept?",
      answer: "We accept major PayPal, cryptocurrency payments, UPI"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-400">Got any other questions? Here&apos;s some of our popular ones.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
