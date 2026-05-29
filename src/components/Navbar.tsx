"use client";

import { useState, useEffect } from "react";
import { Leaf, Menu, X, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Landscape", href: "#landscape" },
    { name: "Garden Setup", href: "#garden-setup" },
    { name: "Maintenance", href: "#maintenance" },
    { name: "Featured", href: "#featured" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "glassmorphism py-3 shadow-md"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="bg-nursery-green p-2 rounded-full text-nursery-bright group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-5 h-5" />
            </div>
            <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-nursery-dark" : "text-nursery-cream"
            }`}>
              Kiran Nursery
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium hover:-translate-y-0.5 transition-all text-sm tracking-wide duration-300 ${
                  scrolled
                    ? "text-nursery-dark/80 hover:text-nursery-green"
                    : "text-nursery-cream/90 hover:text-nursery-bright"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+918850116949"
              className="flex items-center space-x-1.5 px-5 py-2.5 bg-nursery-accent text-nursery-cream rounded-full text-sm font-semibold hover:bg-nursery-green shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href="#book-visit"
              className="flex items-center space-x-1.5 px-5 py-2.5 bg-nursery-green text-nursery-cream rounded-full text-sm font-semibold hover:bg-nursery-accent shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Visit</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? "text-nursery-dark hover:bg-nursery-dark/5"
                  : "text-nursery-cream hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] z-40 bg-nursery-cream/98 transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6 h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-nursery-dark text-xl font-medium border-b border-nursery-dark/5 pb-3 hover:text-nursery-green transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="tel:+918850116949"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 py-3.5 bg-nursery-accent text-nursery-cream rounded-full font-semibold hover:bg-nursery-green transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="#book-visit"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center space-x-2 py-3.5 bg-nursery-green text-nursery-cream rounded-full font-semibold hover:bg-nursery-accent transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Visit</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
