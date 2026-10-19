"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Shield,
  Sparkles,
  Layers,
  ShieldCheck,
  Eye,
  Car,
  Briefcase,
  ChevronRight,
  FileText,
  Calendar
} from "lucide-react";
import FacilityGallery from "@/components/FacilityGallery";
import { WHATSAPP_LINKS, getServiceQuotationUrl, GOOGLE_MAPS_KOSGAMA_URL } from "@/constants/whatsapp";

const branches = [
  {
    name: "Kosgama",
    phone: "+94 7171 888 14",
    address: "Kosgama",
    mapLink: GOOGLE_MAPS_KOSGAMA_URL
  },
  {
    name: "Avissawella",
    address: "Coming soon",
    mapLink: "#"
  },
  {
    name: "Ratnapura",
    address: "Coming soon",
    mapLink: "#"
  }
];

const services = [
  {
    name: "Exterior Detailing",
    description: "Full exterior wash, clay bar and wax",
    icon: Shield
  },
  {
    name: "Interior Detailing",
    description: "Deep clean, steam sanitize seats, carpets & all surfaces.",
    icon: Sparkles
  },
  {
    name: "Cut & Polish",
    description: "Eliminate swirl marks, scratches & oxidation. Restore paint depth.",
    icon: Layers
  },
  {
    name: "Ceramic Coating",
    description: "Professional nano-ceramic coating for 2+ years of premium protection.",
    icon: ShieldCheck
  },
  {
    name: "Headlight Restoration",
    description: "Restore headlight clarity & improve night visibility safely.",
    icon: Eye
  },
  {
    name: "Mobile Detailing",
    description: "We come to your home or office — full professional detailing on-site.",
    icon: Car
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen hero-bg-overlay pb-20">
      
      {/* ── HERO & COMING SOON SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Background image container with premium styling and overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landingpage.jpg"
            alt="CarVibes Premium Automotive Backdrop"
            fill
            className="object-cover opacity-35 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 mt-8 sm:mt-12">
          <div className="-mt-6 sm:-mt-10 space-y-3 sm:space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white uppercase">
                CarVibes<span className="text-primary font-bold">.lk</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
            >
              Sri Lanka&apos;s ultimate luxury automotive detailing experience is being unleashed. Feel the premium services at Kosgama. Opening soon in Avissawella and Ratnapura.
            </motion.p>
          </div>

          <div className="pt-32 sm:pt-44 md:pt-52">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-3 sm:pt-5"
            >
              {/* Three Primary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
                <a
                  href={WHATSAPP_LINKS.QUOTATIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-8 py-4 text-base transition-all duration-300 hover:scale-[1.03] backdrop-blur-md group uppercase tracking-wider"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  Quotations
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={WHATSAPP_LINKS.RESERVATIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-8 py-4 text-base transition-all duration-300 hover:scale-[1.03] backdrop-blur-md group uppercase tracking-wider"
                >
                  <Calendar className="h-5 w-5 text-primary" />
                  Reservations
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={WHATSAPP_LINKS.LOCATIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-8 py-4 text-base transition-all duration-300 hover:scale-[1.03] backdrop-blur-md group uppercase tracking-wider"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  Locations
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Join Us button as previous but a little bit down */}
              <div className="pt-8 sm:pt-10 flex justify-center">
                <a
                  href="https://wa.me/94717188814?text=Hi%20CarVibes!%20I%20am%20interested%20in%20joining%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-primary hover:bg-primary/95 text-white orange-glow font-bold px-10 py-5 text-lg transition-all duration-300 hover:scale-[1.05] group"
                >
                  <Briefcase className="h-5 w-5" />
                  JOIN US
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRANCHES SECTION ───────────────────────────────────────────── */}
      <div className="relative w-full">
        {/* Background image with premium overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Our Growing Network.webp"
            alt="Our Growing Network Backdrop"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <section id="branches" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Locations</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Our Growing Network
            </h3>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {branches.map((branch, idx) => (
              <motion.div
                key={branch.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {branch.mapLink && branch.mapLink !== "#" ? (
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      aria-label={`View ${branch.name} location on Google Maps`}
                    >
                      <MapPin className="h-6 w-6" />
                    </a>
                  ) : (
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                  )}
                  <h4 className="text-xl font-bold text-white uppercase">{branch.name}</h4>
                  {branch.mapLink && branch.mapLink !== "#" ? (
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors leading-relaxed font-light group/link"
                    >
                      <span>{branch.address}</span>
                      <span className="text-xs text-primary underline underline-offset-4 group-hover/link:text-white transition-colors">
                        (View on Google Maps)
                      </span>
                    </a>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed font-light">{branch.address}</p>
                  )}
                </div>
                {branch.phone && (
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                    <span>Inquiries:</span>
                    <span className="font-semibold text-white">{branch.phone}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_LINKS.LOCATIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-primary/50 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] backdrop-blur-md group"
            >
              <MapPin className="h-4 w-4 text-primary" />
              Inquire About Locations & Addresses via WhatsApp
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>
      </div>

      {/* ── FACILITY PHOTO TOUR SECTION ────────────────────────────────── */}
      <FacilityGallery />

      {/* ── SERVICES SECTION ───────────────────────────────────────────── */}
      <div className="relative w-full border-t border-white/5">
        {/* Background image with premium overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/What We Do.webp"
            alt="What We Do Backdrop"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <section id="services" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Services Offered</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              What We Do
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Professional car care services designed to protect, restore, and maintain your vehicle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-8 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors uppercase">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <a
                      href={getServiceQuotationUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-primary/95 hover:scale-[1.02] uppercase tracking-wider orange-glow"
                    >
                      Request for a Quotation
                      <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINKS.QUOTATIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-7 py-3.5 text-sm transition-all duration-300 hover:scale-[1.02] backdrop-blur-md group"
            >
              <FileText className="h-4 w-4 text-primary" />
              General Quotations
            </a>
            <a
              href={WHATSAPP_LINKS.RESERVATIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-7 py-3.5 text-sm transition-all duration-300 hover:scale-[1.02] backdrop-blur-md group"
            >
              <Calendar className="h-4 w-4 text-primary" />
              Make a Reservation
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
