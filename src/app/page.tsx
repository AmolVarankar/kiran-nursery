import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedSelection from "@/components/FeaturedSelection";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-nursery-cream">
      {/* Dynamic Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Fullscreen Hero Cover */}
        <Hero />

        {/* Services & Core Focus */}
        <Services />

        {/* Catalog & Explorer Details */}
        <FeaturedSelection />

        {/* Visual Projects Grid */}
        <Projects />

        {/* Dark Testimonials Banner */}
        <Testimonials />

        {/* Partner Logos Strip */}
        <Partners />

        {/* Scheduler & Interactive Form */}
        <BookingSection />
      </main>

      {/* Fullsite Footer */}
      <Footer />
    </div>
  );
}

