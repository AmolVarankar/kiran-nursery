"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Sun, Droplets, PawPrint } from "lucide-react";

interface PlantDetails {
  id: string;
  name: string;
  scientificName: string;
  tag: string;
  description: string;
  image: string;
  care: {
    light: string;
    water: string;
    petFriendly: boolean;
    size: string;
  };
}

export default function FeaturedSelection() {
  const basePath = process.env.NODE_ENV === "production" ? "/kiran-nursery" : "";
  const [selectedPlant, setSelectedPlant] = useState<PlantDetails | null>(null);

  const plants: PlantDetails[] = [
    {
      id: "areca-palm",
      name: "Areca Palm",
      scientificName: "Dypsis lutescens",
      tag: "BEST SELLER",
      description: "A gorgeous tropical houseplant with feathery, arching fronds. The Areca Palm is highly effective at purifying indoor air, introducing a luxurious, warm island aesthetic to any corner.",
      image: "/areca_palm.png",
      care: {
        light: "Bright, indirect sunlight",
        water: "Keep soil lightly moist, water when top 2 inches dry out",
        petFriendly: true,
        size: "3.5 - 5 feet tall",
      },
    },
    {
      id: "fiddle-leaf-fig",
      name: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      tag: "TRENDING",
      description: "A stunning, architectural design statement plant known for its broad, violin-shaped glossy green leaves. A highly popular choice among interior decorators for adding height and dramatic presence.",
      image: "/fiddle_leaf_fig.png",
      care: {
        light: "Bright, consistent filtered light",
        water: "Water thoroughly only when top 2-3 inches of soil dry completely",
        petFriendly: false,
        size: "4 - 6 feet tall",
      },
    },
    {
      id: "snake-plant",
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      tag: "LOW MAINTENANCE",
      description: "Virtually indestructible, the Snake Plant features upright sword-like leaves with striking yellow margins. Highly recommended for beginners, busy offices, and bedrooms, as it converts CO2 to oxygen overnight.",
      image: "/snake_plant.png",
      care: {
        light: "Thrives in low to bright indirect light",
        water: "Very low. Water once every 2-3 weeks; let soil dry out fully",
        petFriendly: false,
        size: "1.5 - 3 feet tall",
      },
    },
  ];

  return (
    <section id="featured" className="py-24 bg-nursery-cream/50 relative overflow-hidden">
      {/* Decorative leaf blur background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-nursery-bright/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-nursery-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-nursery-light font-bold text-xs uppercase tracking-widest block mb-3">
            CURATED CATALOGUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nursery-dark mb-4">
            Featured Selection
          </h2>
          <p className="text-nursery-dark/70 text-sm sm:text-base font-light leading-relaxed">
            Find the perfect healthy, vibrant green plants to breathe fresh life into your living room, patio, or workspace.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {plants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => setSelectedPlant(plant)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-nursery-dark/5 flex flex-col items-center p-6 text-center hover:-translate-y-2 relative"
            >
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-10 bg-nursery-green text-nursery-cream text-[10px] sm:text-xs font-bold tracking-widest px-3.5 py-1.5 rounded-full shadow-sm">
                {plant.tag}
              </div>

              {/* Plant Image Container */}
              <div className="relative w-full h-72 sm:h-80 overflow-hidden mb-6 flex items-center justify-center bg-gradient-to-b from-nursery-sand/30 to-nursery-sand/10 rounded-xl">
                <Image
                  src={`${basePath}${plant.image}`}
                  alt={plant.name}
                  width={280}
                  height={280}
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Plant Metadata */}
              <h3 className="font-serif text-2xl font-bold text-nursery-dark mb-1 group-hover:text-nursery-green transition-colors">
                {plant.name}
              </h3>
              <p className="text-nursery-dark/50 text-xs italic mb-4">{plant.scientificName}</p>
              
              <span className="inline-flex items-center space-x-1.5 text-xs text-nursery-green font-semibold border border-nursery-green/20 rounded-full px-4 py-1.5 bg-nursery-green/5 group-hover:bg-nursery-green group-hover:text-nursery-cream transition-colors duration-300">
                <span>View Care Sheet</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Plant Explorer Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nursery-dark/65 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-nursery-cream rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-nursery-dark/10 max-h-[90vh] overflow-y-auto animate-float-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPlant(null)}
              className="absolute top-5 right-5 z-10 bg-white/80 hover:bg-white text-nursery-dark p-2 rounded-full border border-nursery-dark/10 transition-colors hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative bg-gradient-to-b from-nursery-sand to-nursery-sand/30 p-8 flex items-center justify-center min-h-[300px]">
                <Image
                  src={`${basePath}${selectedPlant.image}`}
                  alt={selectedPlant.name}
                  width={320}
                  height={320}
                  className="object-contain"
                />
              </div>

              {/* Details Side */}
              <div className="p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-nursery-green text-nursery-cream text-[10px] font-bold tracking-widest px-3 py-1 rounded-full mb-4">
                    {selectedPlant.tag}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-nursery-dark mb-1">
                    {selectedPlant.name}
                  </h3>
                  <p className="text-nursery-dark/50 text-xs italic mb-5">{selectedPlant.scientificName}</p>
                  
                  <p className="text-nursery-dark/70 text-sm leading-relaxed mb-6 font-light">
                    {selectedPlant.description}
                  </p>

                  {/* Care Specifications */}
                  <div className="space-y-4 border-t border-nursery-dark/10 pt-5 mb-8">
                    <div className="flex items-center space-x-3 text-sm">
                      <Sun className="w-5 h-5 text-nursery-gold shrink-0" />
                      <div>
                        <span className="font-semibold text-nursery-dark">Sunlight:</span>{" "}
                        <span className="text-nursery-dark/70">{selectedPlant.care.light}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm">
                      <Droplets className="w-5 h-5 text-nursery-light shrink-0" />
                      <div>
                        <span className="font-semibold text-nursery-dark">Watering:</span>{" "}
                        <span className="text-nursery-dark/70">{selectedPlant.care.water}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 text-sm">
                      <PawPrint className="w-5 h-5 text-nursery-green shrink-0" />
                      <div>
                        <span className="font-semibold text-nursery-dark">Pet Safe:</span>{" "}
                        <span className="text-nursery-dark/70">
                          {selectedPlant.care.petFriendly ? "Yes, non-toxic" : "No, keep away from pets"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <a
                  href="#book-visit"
                  onClick={() => setSelectedPlant(null)}
                  className="w-full text-center py-3.5 bg-nursery-green text-nursery-cream hover:bg-nursery-accent font-bold rounded-xl shadow-md transition-all block text-sm"
                >
                  Consult Expert About This Plant
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
