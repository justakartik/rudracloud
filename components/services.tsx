"use client";

import { Server, Gamepad2, Code, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      icon: Server,
      title: "VPS Hosting",
      description: "Affordable VPS hosting with root access.",
      price: "₹500/mo",
      features: ["Full root access", "Multiple OS options", "Under 48hrs deployment"],
    },
    {
      icon: Gamepad2,
      title: "Game Servers",
      description: "Low latency game hosting.",
      price: "₹69/mo",
      features: ["DDoS protection", "24/7 support", "One-click installation"],
    },
    {
      icon: Code,
      title: "App Hosting",
      description: "Host your applications effortlessly.",
      price: "₹49/mo",
      features: ["Multiple frameworks", "Auto-scaling", "CI/CD integration"],
    },
    {
      icon: HardDrive,
      title: "Storage VPS",
      description: "Reliable web hosting with the latest tech stack.",
      price: "₹500/mo",
      features: ["Starts from 1TB", "Full Root Access", "Under 48hrs development"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-600/10 flex items-center justify-center">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">We offer a range of services for your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-lg glass-effect border border-gray-700 transition-all duration-300 hover:border-blue-600 hover:shadow-lg"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="text-2xl font-bold mb-4">{service.price}</div>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-400">
                    • {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => (window.location.href = "https://billing.rudracloud.com/")}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
