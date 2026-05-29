"use client";

import { Leaf, Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-nursery-green text-nursery-cream pt-20 pb-8 overflow-hidden">
      {/* Background visual decorations */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nursery-bright/20 via-nursery-bright/50 to-nursery-bright/20" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-nursery-dark/15 rounded-[100%] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="bg-nursery-bright/15 p-2 rounded-full text-nursery-bright group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-nursery-cream">
                Kiran Nursery
              </span>
            </a>
            <p className="text-nursery-cream/70 text-sm font-light leading-relaxed">
              Creating green spaces in your homes and offices since 2008. We specialize in custom landscape design, vertical walls, and periodic plant care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide text-nursery-bright mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm font-light text-nursery-cream/70">
              {["About Us", "Services", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#landscape"
                    className="hover:text-nursery-bright hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide text-nursery-bright mb-6">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-sm font-light text-nursery-cream/70">
              {["Landscape Design", "Garden Setup", "Plant Maintenance", "Nursery Shop"].map((service) => (
                <li key={service}>
                  <a
                    href="#landscape"
                    className="hover:text-nursery-bright hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-lg font-semibold tracking-wide text-nursery-bright mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light text-nursery-cream/70">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-nursery-bright shrink-0" />
                <a href="tel:+919876543210" className="hover:text-nursery-bright">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-nursery-bright shrink-0" />
                <a href="mailto:info@kirannursery.com" className="hover:text-nursery-bright">
                  info@kirannursery.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-nursery-bright shrink-0" />
                <span>Main Road, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Divider */}
        <div className="border-t border-nursery-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-nursery-cream/55">
          <p>© 2026 Kiran Nursery. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-nursery-bright">Privacy Policy</a>
            <a href="#" className="hover:text-nursery-bright">Terms of Service</a>
          </div>
          
          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollTop}
            className="p-2.5 rounded-full bg-nursery-dark/40 hover:bg-nursery-bright hover:text-nursery-dark transition-colors border border-nursery-cream/10 shadow-inner group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
