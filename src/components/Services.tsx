"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "landscape-design",
      title: "Landscape Design",
      description: "Professional landscaping service for residential and commercial properties.",
      image: "/landscape_design.png",
      linkText: "Book Now",
      actionHref: "#book-visit",
    },
    {
      id: "garden-setup",
      title: "Garden Setup",
      description: "We set up beautiful gardens in your home, balcony, or terrace.",
      image: "/garden_setup.png",
      linkText: "Request Quote",
      actionHref: "#book-visit",
    },
    {
      id: "plant-maintenance",
      title: "Plant Maintenance",
      description: "Our experts keep your plants healthy, trimmed, and thriving.",
      image: "/plant_maintenance.png",
      linkText: "Schedule",
      actionHref: "#book-visit",
    },
  ];

  return (
    <section id="landscape" className="py-24 bg-nursery-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-nursery-light font-bold text-xs uppercase tracking-widest block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nursery-dark mb-4">
              Landscape Solutions
            </h2>
            <p className="text-nursery-dark/70 text-base sm:text-lg font-light leading-relaxed">
              We provide end-to-end green transformation services. From modern, architectural designs to periodic plant care, our experts bring standard excellence to your spaces.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#book-visit"
              className="inline-flex items-center space-x-2 text-nursery-green font-semibold hover:text-nursery-light hover:translate-x-1.5 transition-all duration-300"
            >
              <span>See all services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-nursery-dark/5 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-nursery-sand">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nursery-dark/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-nursery-dark mb-3 group-hover:text-nursery-green transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-nursery-dark/70 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div>
                  <a
                    href={service.actionHref}
                    className="inline-flex items-center space-x-1 text-nursery-green font-bold hover:text-nursery-light border-b-2 border-nursery-bright/0 hover:border-nursery-green/80 pb-0.5 transition-all duration-300"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
