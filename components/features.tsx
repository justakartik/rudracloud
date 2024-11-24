import {
  Server,
  MousePointerClick,
  Shield,
  Timer,
  HeadphonesIcon,
  Zap,
  ShieldAlert,
  Database,
  Scale,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Server,
      title: "Hardware",
      description:
        "We use the Intel, AMD epcy, and AMD Ryzen",
    },
    {
      icon: MousePointerClick,
      title: "Ease of use",
      description:
        "Our management software is so user-friendly, even your grandma could manage a server. Seriously, it's that easy!",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "We take security seriously. Our servers are locked down tighter than a drum to fend off any unexpected attacks.",
    },
    {
      icon: Timer,
      title: "Uptime",
      description:
        "We guarantee 99.9% uptime, as your website and projects will be up and running even if the world ends (well, almost).",
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description:
        "Sick of slow support? Open a ticket with us anytime, and get a response faster than you can say 'I need help!'",
    },
    {
      icon: Zap,
      title: "Activation",
      description:
        "Start using your services right after payment, with the exception of VPS-like services, which may take up to 48 hours for activation.",
    },
    {
      icon: ShieldAlert,
      title: "DDoS protection",
      description:
        "Our services come with Path.net DDoS protection. Think of it as a bouncer for your server keeping unwanted guests out.",
    },
    {
      icon: Database,
      title: "Backups",
      description:
        "We've got your back with automated backups. Rest easy knowing your data is safe and sound.",
    },
    {
      icon: Scale,
      title: "Scalable",
      description:
        "Need more power? Less power? Our products are as flexible as a gymnast. Upgrade or downgrade anytime!",
    },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-blue-600/10 flex items-center justify-center">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-400">
            The features that make us stand out,
            <br />
            because being ordinary is just too boring.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-4 rounded-lg glass-effect border border-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-600"
            >
              <feature.icon className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
