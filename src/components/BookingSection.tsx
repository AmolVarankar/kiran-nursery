"use client";

import { useState } from "react";
import { Phone, Calendar, MessageSquare, ArrowRight, Clock, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  service: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
}

export default function BookingSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "Consulting",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showReceipt, setShowReceipt] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "call" | "chat">("form");

  const services = ["Consulting", "Design", "Maintenance", "Setup"];

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(form.phone.replace(/[\s-]/g, ""))) {
      tempErrors.phone = "Please enter a 10-digit phone number";
    }
    if (!form.date) tempErrors.date = "Please select a booking date";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setShowReceipt(true);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      service: "Consulting",
    });
    setErrors({});
    setShowReceipt(false);
  };

  return (
    <section id="book-visit" className="py-24 bg-nursery-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          
          {/* Left Column - Text and Interactive Form */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <span className="text-nursery-light font-bold text-xs uppercase tracking-widest block mb-3">
                SCHEDULE NOW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-nursery-dark mb-4">
                Book a free visit
              </h2>
              <p className="text-nursery-dark/70 text-sm sm:text-base font-light leading-relaxed mb-8">
                Let our botanical experts assess your garden space, analyze lighting, suggest perfect native options, and plan your organic dream garden completely free of charge.
              </p>

              {/* Action Buttons Tabs */}
              <div className="flex flex-wrap gap-3 mb-8">
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === "form"
                      ? "bg-nursery-green text-nursery-cream shadow-sm"
                      : "bg-white border border-nursery-green/10 text-nursery-green hover:bg-nursery-green/5"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Visit</span>
                </button>
                <a
                  href="tel:+919876543210"
                  onClick={() => setActiveTab("call")}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === "call"
                      ? "bg-nursery-green text-nursery-cream shadow-sm"
                      : "bg-white border border-nursery-green/10 text-nursery-green hover:bg-nursery-green/5"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => {
                    setActiveTab("chat");
                    window.open("https://wa.me/919876543210", "_blank");
                  }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === "chat"
                      ? "bg-nursery-green text-nursery-cream shadow-sm"
                      : "bg-white border border-nursery-green/10 text-nursery-green hover:bg-nursery-green/5"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat</span>
                </button>
              </div>

              {/* Dynamic Interactive Panel */}
              {activeTab === "form" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-nursery-dark/5 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-semibold text-nursery-dark/60 uppercase tracking-wider mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? "border-red-500 bg-red-50/10" : "border-nursery-dark/10"
                        } text-nursery-dark focus:outline-none focus:ring-2 focus:ring-nursery-light text-sm`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-nursery-dark/60 uppercase tracking-wider mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.email ? "border-red-500 bg-red-50/10" : "border-nursery-dark/10"
                          } text-nursery-dark focus:outline-none focus:ring-2 focus:ring-nursery-light text-sm`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-nursery-dark/60 uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.phone ? "border-red-500 bg-red-50/10" : "border-nursery-dark/10"
                          } text-nursery-dark focus:outline-none focus:ring-2 focus:ring-nursery-light text-sm`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-nursery-dark/60 uppercase tracking-wider mb-2">
                        Preferred Service
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setForm({ ...form, service })}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                              form.service === service
                                ? "bg-nursery-light text-white shadow-sm"
                                : "bg-nursery-sand/35 text-nursery-dark/70 hover:bg-nursery-sand/60"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date Input */}
                    <div>
                      <label className="block text-xs font-semibold text-nursery-dark/60 uppercase tracking-wider mb-2">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.date ? "border-red-500 bg-red-50/10" : "border-nursery-dark/10"
                        } text-nursery-dark/70 focus:outline-none focus:ring-2 focus:ring-nursery-light text-sm`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.date}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full text-center py-3.5 bg-nursery-green hover:bg-nursery-accent text-nursery-cream font-bold rounded-xl transition-all shadow-md hover:shadow-lg text-sm tracking-wide"
                    >
                      Book Visit Now
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "call" && (
                <div className="bg-white p-8 rounded-3xl border border-nursery-dark/5 shadow-sm text-center">
                  <Phone className="w-12 h-12 text-nursery-green mx-auto mb-4 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-nursery-dark mb-2">Call Our Hotline</h4>
                  <p className="text-nursery-dark/70 text-sm mb-6 font-light">
                    Our landscaping managers are active now. Call us directly to book a consultation instantly!
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center space-x-2 bg-nursery-green hover:bg-nursery-accent text-white px-6 py-3.5 rounded-xl font-bold shadow-md transition-colors"
                  >
                    <span>Dial +91 98765 43210</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Premium Information Card */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-nursery-dark/5 shadow-lg relative overflow-hidden">
              {/* Card Green Header Accent */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-nursery-green" />

              <div className="space-y-8">
                {/* Landscaping Schedule */}
                <div className="flex items-start space-x-4">
                  <div className="bg-nursery-green/5 p-3 rounded-full text-nursery-green shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-nursery-dark/55 text-xs font-semibold uppercase tracking-wider block mb-1">
                      LANDSCAPING SCHEDULE
                    </span>
                    <p className="text-nursery-dark font-serif text-lg font-bold">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-nursery-dark/60 text-xs mt-1 font-light">Sundays reserved for maintenance emergencies.</p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start space-x-4 border-t border-nursery-dark/5 pt-8">
                  <div className="bg-nursery-green/5 p-3 rounded-full text-nursery-green shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-nursery-dark/55 text-xs font-semibold uppercase tracking-wider block mb-1">
                      OFFICE LOCATION
                    </span>
                    <p className="text-nursery-dark font-serif text-lg font-bold">123 Green Valley Road, Plant City</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-nursery-green font-bold mt-2 hover:text-nursery-light"
                    >
                      <span>Get Directions</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Scope of Services Badges */}
                <div className="border-t border-nursery-dark/5 pt-8">
                  <span className="text-nursery-dark/55 text-xs font-semibold uppercase tracking-wider block mb-3.5">
                    SERVICES PROVIDED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <span
                        key={svc}
                        className="px-4 py-2 bg-nursery-cream text-nursery-green rounded-full text-xs font-bold shadow-sm"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Receipt Overlay Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-nursery-dark/65 backdrop-blur-sm">
          <div className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl p-8 text-center border border-nursery-dark/10 animate-float-in">
            <CheckCircle className="w-16 h-16 text-nursery-bright mx-auto mb-5" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-nursery-dark mb-2">
              Visit Confirmed!
            </h3>
            <p className="text-nursery-dark/70 text-sm font-light leading-relaxed mb-6">
              Thank you, <span className="font-semibold text-nursery-dark">{form.name}</span>. Your free design consultation visit has been scheduled successfully!
            </p>

            {/* Receipt Details Box */}
            <div className="bg-nursery-cream/50 rounded-2xl p-5 text-left text-sm space-y-3 mb-8 border border-nursery-dark/5">
              <div className="flex justify-between">
                <span className="text-nursery-dark/50">Service Type:</span>
                <span className="font-semibold text-nursery-green">{form.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nursery-dark/50">Date Selected:</span>
                <span className="font-semibold text-nursery-dark">{form.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nursery-dark/50">Contact Phone:</span>
                <span className="font-semibold text-nursery-dark">{form.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-nursery-dark/50">Email Receipt:</span>
                <span className="font-semibold text-nursery-dark max-w-[200px] truncate">{form.email}</span>
              </div>
            </div>

            {/* Action Close */}
            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-nursery-green hover:bg-nursery-accent text-nursery-cream font-bold rounded-xl shadow-md transition-all text-sm"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
