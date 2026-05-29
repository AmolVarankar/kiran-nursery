"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "zen-courtyard",
      title: "Zen Courtyard",
      category: "Residential Courtyard",
      image: "/zen_courtyard.png",
      description: "A tranquil private garden combining moss paths, carefully balanced stones, and Japanese Maples to form a relaxing meditation space.",
    },
    {
      id: "eco-office",
      title: "Eco Office",
      category: "Corporate Greenery",
      image: "/eco_office.png",
      description: "Designed for health and visual wellness, this modern office lobby features massive vertical plant walls and high-density hanging ivy.",
    },
    {
      id: "rooftop-retreat",
      title: "Rooftop Retreat",
      category: "Urban Rooftop Garden",
      image: "/rooftop_retreat.png",
      description: "A luxury wooden deck lined with wind-resistant shrubs and microclimatic plants, creating a stunning sanctuary against the city skyline.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-nursery-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-nursery-light font-bold text-xs uppercase tracking-widest block mb-3">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nursery-dark mb-4">
              Projects & Partners
            </h2>
            <p className="text-nursery-dark/70 text-base sm:text-lg font-light leading-relaxed">
              A collection of architectural landscaping and curated interior plant setups that we have proudly designed and delivered.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#book-visit"
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-nursery-green hover:bg-nursery-accent text-nursery-cream rounded-full text-sm font-semibold shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-nursery-dark/5 transition-all duration-500 h-full flex flex-col hover:-translate-y-1.5"
            >
              {/* Image side */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-nursery-sand">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Backdrop dark shadow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-nursery-dark via-nursery-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8" />
              </div>

              {/* Card Meta Content */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-nursery-light font-semibold text-xs tracking-wider uppercase block mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-nursery-dark mb-3 group-hover:text-nursery-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-nursery-dark/70 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
