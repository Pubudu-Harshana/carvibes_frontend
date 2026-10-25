"use client";

import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  Gift,
  HelpCircle,
} from "lucide-react";
import {
  getPackageBookingUrl,
  getAddOnBookingUrl,
  WHATSAPP_LINKS,
} from "@/constants/whatsapp";

export interface PackageItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  duration?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  subFeatures?: { [key: string]: string[] };
  freeBonus?: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  price: number;
  description: string;
  tag?: string;
}

const packages: PackageItem[] = [
  {
    id: "basic-vibe",
    name: "Basic Vibe",
    category: "Essential Clean",
    originalPrice: 3900,
    price: 2900,
    duration: "1 – 2 hrs",
    description: "Fast-turnaround essential cleaning to keep your daily drive fresh, spotless, and dust-free.",
    features: [
      "Exterior Quick Wash",
      "Interior Vacuum Cleaning",
      "Interior Wipe Down",
    ],
  },
  {
    id: "refresh-vibe",
    name: "Refresh Vibe",
    category: "Deep Revitalization",
    originalPrice: 10000,
    price: 7900,
    duration: "3 – 5 hrs",
    description: "Comprehensive exterior and interior treatment designed to strip contaminants and condition high-wear surfaces.",
    features: [
      "2-Step Decontamination Wash",
      "Exterior Detail",
      "Interior Detail (Seats In)",
      "Engine Degrease",
      "Protective Body Wax",
      "Plastic Parts Conditioning",
    ],
    freeBonus: "1 Free Decontamination Wash after 1 month",
  },
  {
    id: "premium-vibe",
    name: "Premium Vibe",
    category: "Complete Transformation",
    originalPrice: 15000,
    price: 13900,
    isPopular: true,
    description: "Our signature, high-intensity showroom package featuring intensive steam sanitation and complete engine care.",
    features: [
      "2-Step Decontamination Wash",
      "Exterior Detail",
      "Interior Detail (Seats Out Deep Cleaning)",
      "Interior Steam Clean & Sanitization",
      "Engine Degrease with Steam Cleaning",
      "Engine Bay Wash & Dressing",
      "Plastic Parts Conditioning",
    ],
    freeBonus: "1 Free Decontamination Wash included",
  },
];

const addOns: AddOnItem[] = [
  {
    id: "cut-and-polish",
    name: "Cut & Polish",
    price: 11900,
    description: "Multi-stage machine paint correction to eliminate swirl marks, light scratches, and oxidation for a mirror-like gloss.",
    tag: "Paint Correction",
  },
  {
    id: "windscreen-ceramic",
    name: "Windscreen Spot Removal & Ceramic Spray Coating",
    price: 7500,
    description: "Specialized water spot extraction from the front windshield paired with hydrophobic ceramic spray coating for high rainy-drive clarity.",
    tag: "Glass Protection",
  },
  {
    id: "all-glass-ceramic",
    name: "All Glass Spot Removal & Ceramic Spray Coating",
    price: 10500,
    description: "Complete 360° water spot mineral removal and hydrophobic ceramic spray seal across all vehicle windows and glass.",
    tag: "Full Visibility",
  },
];

export default function PricingPackages() {
  return (
    <div className="relative w-full border-t border-white/5">
      <section id="pricing" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Service Packages & Rates
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Authentic vehicle care packages in Sri Lankan Rupees (LKR). Transparent pricing, expert craftsmanship, and unmatched attention to detail.
          </p>
        </div>

        {/* ── 3 CORE PACKAGES GRID ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular
                  ? "border-primary/50 bg-gradient-to-b from-primary/[0.08] via-white/[0.02] to-transparent shadow-[0_0_40px_rgba(255,122,0,0.15)] ring-1 ring-primary/40"
                  : "border-white/10 hover:border-primary/40"
              }`}
            >
              {/* Highlight Badge for Premium Vibe */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white orange-glow">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Comprehensive
                  </span>
                </div>
              )}

              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold tracking-wider text-primary uppercase">
                    {pkg.category}
                  </span>
                  {pkg.duration && (
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                      <Clock className="h-3 w-3 text-primary" />
                      {pkg.duration}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed min-h-[36px]">
                  {pkg.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-white/10 flex items-baseline gap-3">
                  <div className="flex items-baseline">
                    <span className="text-sm font-semibold text-primary mr-1">Rs.</span>
                    <span className="text-4xl font-extrabold text-white tracking-tight">
                      {pkg.price.toLocaleString("en-US")}
                    </span>
                  </div>
                  {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 line-through">
                      <span>Rs. {pkg.originalPrice.toLocaleString("en-US")}</span>
                    </div>
                  )}
                </div>

                {/* Inclusions List */}
                <div className="space-y-3 mb-6">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Package Inclusions:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                        <div className="mt-0.5 rounded-full p-0.5 bg-primary/20 text-primary shrink-0">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Free Bonus / Complimentary offer */}
                {pkg.freeBonus && (
                  <div className="mb-6 p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-2.5 text-xs text-primary font-medium">
                    <Gift className="h-4 w-4 shrink-0 text-primary" />
                    <span>
                      <strong className="font-bold text-white">Bonus: </strong>
                      {pkg.freeBonus}
                    </span>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <a
                  href={getPackageBookingUrl(pkg.name, `Rs. ${pkg.price.toLocaleString("en-US")}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] ${
                    pkg.isPopular
                      ? "bg-primary text-white orange-glow hover:bg-primary/95 shadow-lg"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-primary/50"
                  }`}
                >
                  <ShieldCheck className="h-4 w-4" />
                  Book {pkg.name}
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── ADD-ONS SECTION ─────────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Specialized Add-On Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
              Elevate your package with specialized paint correction and hydrophobic ceramic glass treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {addOns.map((addon, idx) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between border-white/10 hover:border-primary/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {addon.tag}
                    </span>
                    <span className="text-xs font-bold text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      Add-on
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                    {addon.name}
                  </h4>

                  <p className="mt-2 text-xs text-gray-400 font-light leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Service Rate</span>
                    <span className="text-lg font-extrabold text-white">
                      Rs. {addon.price.toLocaleString("en-US")}
                    </span>
                  </div>

                  <a
                    href={getAddOnBookingUrl(addon.name, `Rs. ${addon.price.toLocaleString("en-US")}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                  >
                    Inquire
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CONSULTATION & ASSISTANCE FOOTNOTE ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mx-auto sm:mx-0">
              <HelpCircle className="h-6 w-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white uppercase">
                Need a Custom Detailing Solution or Have Questions?
              </h5>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                Our detailing specialists in Kosgama are ready to assist you with customized evaluations and appointments.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href={WHATSAPP_LINKS.PRICE_INQUIRY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-primary/50 font-bold px-6 py-3 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
            >
              Chat With Our Team
              <ChevronRight className="h-4 w-4 text-primary" />
            </a>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
