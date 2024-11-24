import Image from "next/image";

export function Partners() {
  const partners = [
    { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" },
    { name: "Amd", logo: "https://www.logo.wine/a/logo/Ryzen/Ryzen-AMD-White-Dark-Background-Logo.wine.svg" },
    { name: "HETZNER", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Logo_Hetzner.svg" },
    { name: "DIGITALOCEAN", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg" },
    { name: "Pterodactyl", logo: "https://cdn.pterodactyl.io/logos/new/pterodactyl_logo_transparent.png" },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="w-24 h-12 relative">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
