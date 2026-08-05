"use client";

import Link from "next/link";
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
  ChevronRight
} from "lucide-react";

const branches = [
  {
    name: "Kosgama",
    phone: "+94 7171 888 14",
    address: "No. 45, High Level Road, Kosgama",
    mapLink: "#"
  },
  {
    name: "Avissawella",
    phone: "+94 7171 888 14",
    address: "Coming soon",
    mapLink: "#"
  },
  {
    name: "Ratnapura",
    phone: "+94 7171 888 14",
    address: "Coming soon",
    mapLink: "#"
  }
];

const services = [
  {
    name: "Exterior Detailing",
    price: "From Rs. 4,500",
    description: "Full exterior wash, clay bar, polish & UV protection sealant.",
    icon: Shield
  },
  {
    name: "Interior Detailing",
    price: "From Rs. 5,000",
    description: "Deep clean, steam sanitize seats, carpets & all surfaces.",
    icon: Sparkles
  },
  {
    name: "Cut & Polish",
    price: "From Rs. 6,000",
    description: "Eliminate swirl marks, scratches & oxidation. Restore paint depth.",
    icon: Layers
  },
  {
    name: "Ceramic Coating",
    price: "From Rs. 25,000",
    description: "Professional nano-ceramic coating for 2+ years of premium protection.",
    icon: ShieldCheck
  },
  {
    name: "Headlight Restoration",
    price: "From Rs. 3,000",
    description: "Restore headlight clarity & improve night visibility safely.",
    icon: Eye
  },
  {
    name: "Mobile Detailing",
    price: "From Rs. 5,500",
    description: "We come to your home or office — full professional detailing on-site.",
    icon: Car
  }
];

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen hero-bg-overlay pb-20">
      
      {/* ── HERO & COMING SOON SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col items-center justify-center pt-24 px-4 sm:px-6 lg:px-8">
        
        {/* Background image container with premium styling and overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="CarVibes Premium Automotive Backdrop"
            fill
            className="object-cover opacity-35 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 -mt-16 sm:-mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Launching Soon
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white uppercase">
              CarVibes<span className="text-primary font-bold">.lk</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold tracking-[0.3em] text-gray-400 uppercase orange-glow-text">
              Coming Soon
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Sri Lanka&apos;s ultimate luxury automotive detailing experience is being unleashed. Feel the premium services at Kosgama. Opening soon in Avissawella and Ratnapura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4"
          >
            <Link
              href="/join-us"
              className="inline-flex items-center gap-3 rounded-xl bg-primary hover:bg-primary/95 text-white orange-glow font-bold px-10 py-5 text-lg transition-all duration-300 hover:scale-[1.05] group"
            >
              <Briefcase className="h-5 w-5" />
              JOIN US
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
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
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase">{branch.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">{branch.address}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <span>Inquiries:</span>
                  <span className="font-semibold text-white">{branch.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

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
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
