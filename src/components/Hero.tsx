"use client";

import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/kiran-nursery" : "";

  return (
    <section className="relative h-[95vh] min-h-[680px] w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Dark Vignette Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 scale-105 hover:scale-100"
        style={{
          backgroundImage: `url('${basePath}/hero_background.png')`,
        }}
      />

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-nursery-dark via-nursery-dark/65 to-nursery-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-nursery-dark/40 via-transparent to-nursery-dark/40" />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-nursery-cream z-10 flex flex-col items-center">
        {/* Animated Accent Pill */}
        <div className="inline-flex items-center space-x-2 bg-nursery-bright/15 border border-nursery-bright/35 px-4 py-1.5 rounded-full text-nursery-bright text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 animate-pulse">
          <span>✨ Premium Landscaping & Gardens</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl leading-[1.1] mb-6">
          Bring <span className="text-nursery-bright">Nature Home</span> <br />
          with Kiran Nursery
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-nursery-cream/80 max-w-2xl font-light leading-relaxed mb-10 text-balance">
          Premium plants, landscaping, and garden care. Fresh and healthy options for your home, office, and patio. Experience the joy of living in green, fresh and healthy surroundings.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="tel:+918850116946"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-nursery-bright hover:bg-nursery-bright/90 text-nursery-dark font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-nursery-bright/20"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href="#book-visit"
            className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 border border-nursery-cream/40 hover:border-nursery-cream hover:bg-nursery-cream/10 text-nursery-cream font-semibold rounded-full transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Visit</span>
          </a>
        </div>

        {/* Dynamic Trust Metrics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 md:gap-16 border-t border-nursery-cream/10 pt-8 w-full max-w-3xl">
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nursery-bright">200+</p>
            <p className="text-xs sm:text-sm text-nursery-cream/60 mt-1 uppercase tracking-wider">Plants Species</p>
          </div>
          <div className="text-center border-x border-nursery-cream/10">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nursery-bright">12k+</p>
            <p className="text-xs sm:text-sm text-nursery-cream/60 mt-1 uppercase tracking-wider">Happy Customers</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-nursery-bright">15+</p>
            <p className="text-xs sm:text-sm text-nursery-cream/60 mt-1 uppercase tracking-wider">Years Service</p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave/Scroll Indicator */}

    </section>
  );
}
