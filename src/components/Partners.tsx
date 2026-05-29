"use client";

import { Leaf, Award, ShieldCheck, TreePine, Droplet } from "lucide-react";

export default function Partners() {
  const partners = [
    { name: "GREEN CAFE", icon: Leaf },
    { name: "ECOCORP", icon: ShieldCheck },
    { name: "FLOWER & PETALS", icon: Award },
    { name: "HERB & CO", icon: TreePine },
    { name: "LEAFY", icon: Droplet },
  ];

  return (
    <section className="py-12 bg-nursery-cream border-y border-nursery-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 md:gap-16">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex items-center space-x-2 text-nursery-dark/45 hover:text-nursery-green hover:scale-105 transition-all duration-300 select-none group"
              >
                <IconComponent className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-serif text-sm sm:text-base font-bold tracking-widest uppercase">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
