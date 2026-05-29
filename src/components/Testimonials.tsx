"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kiran Sharma",
      role: "Verified Buyer",
      content: "Fantastic service! Kiran Nursery transformed our balcony into a green oasis. Highly recommended for their expertise!",
      rating: 5,
    },
    {
      id: 2,
      name: "Anil Goel",
      role: "Homeowner",
      content: "The landscape design they created for our courtyard exceeds all expectations. Very professional team and easy to work with.",
      rating: 5,
    },
    {
      id: 3,
      name: "Meera Sen",
      role: "Office Manager",
      content: "Their office setup brought life back into our dull workspace. The plant maintenance team keeps everything looking brand new weekly.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-nursery-green relative overflow-hidden">
      {/* Decorative organic background items */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-nursery-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-nursery-dark/40 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-nursery-bright font-bold text-xs uppercase tracking-widest block mb-3 animate-pulse">
          REVIEWS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nursery-cream mb-16">
          Happy Customers
        </h2>

        {/* Testimonial Main Card Container */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((test, index) => (
            <div
              key={test.id}
              className={`w-full max-w-2xl bg-nursery-dark/45 border border-nursery-cream/10 p-8 sm:p-12 rounded-3xl backdrop-blur-md transition-all duration-700 ease-out absolute ${
                index === activeIdx
                  ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 scale-95 translate-x-12 pointer-events-none"
              }`}
            >
              <Quote className="w-10 h-10 text-nursery-bright/35 mx-auto mb-6" />

              {/* Star Ratings */}
              <div className="flex justify-center space-x-1.5 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-nursery-gold text-nursery-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-nursery-cream/90 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 italic">
                &ldquo;{test.content}&rdquo;
              </p>

              {/* User Profile */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-nursery-bright/15 border border-nursery-bright/30 flex items-center justify-center text-nursery-bright">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif font-bold text-nursery-cream text-base">{test.name}</h4>
                  <span className="text-xs text-nursery-bright/70 font-medium tracking-wide uppercase">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Navigation & Indicators */}
        <div className="flex items-center justify-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-nursery-cream/20 hover:border-nursery-bright/40 text-nursery-cream hover:bg-nursery-cream/5 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Bullet Indicators */}
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIdx ? "bg-nursery-bright w-6" : "bg-nursery-cream/30 hover:bg-nursery-cream/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-nursery-cream/20 hover:border-nursery-bright/40 text-nursery-cream hover:bg-nursery-cream/5 transition-all"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
