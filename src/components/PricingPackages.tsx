"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
  ChevronRight,
  Gift,
  HelpCircle,
  Car,
  CarFront,
  Truck,
  Shield,
  Layers,
  Droplets,
} from "lucide-react";
import {
  getPackageBookingUrl,
  getAddOnBookingUrl,
  WHATSAPP_LINKS,
} from "@/constants/whatsapp";
import {
  PRICING_DATA,
  VehicleType,
  PackageItem,
  AddOnItem,
} from "@/data/pricingData";

const VEHICLE_OPTIONS: {
  id: VehicleType;
  label: string;
  icon: typeof Car;
  subLabel: string;
}[] = [
  {
    id: "car",
    label: "Car",
    icon: Car,
    subLabel: "Sedan / Hatchback",
  },
  {
    id: "suv",
    label: "SUV",
    icon: CarFront,
    subLabel: "Crossover / Compact 4x4",
  },
  {
    id: "van",
    label: "Van",
    icon: Truck,
    subLabel: "Passenger Van / MPV",
  },
];

export default function PricingPackages() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("car");

  const currentConfig = PRICING_DATA[selectedVehicle];
  const packages: PackageItem[] = currentConfig.packages;
  const addOns: AddOnItem[] = currentConfig.addOns;
  const coatings = currentConfig.coatings;

  return (
    <div className="relative w-full border-t border-white/5">
      <section
        id="pricing"
        className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Service Packages & Rates
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Authentic vehicle care packages in Sri Lankan Rupees (LKR). Transparent
            pricing, expert craftsmanship, and unmatched attention to detail.
          </p>
        </div>

        {/* ── VEHICLE SELECTOR ─────────────────────────────────────────────── */}
        <div className="mb-14">
          <div className="flex flex-col items-center">
            {/* Pill-style Vehicle Toggle Buttons */}
            <div
              role="tablist"
              aria-label="Select vehicle category"
              className="p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md inline-flex items-center gap-1.5 max-w-full overflow-x-auto shadow-2xl"
            >
              {VEHICLE_OPTIONS.map((opt) => {
                const IconComponent = opt.icon;
                const isSelected = selectedVehicle === opt.id;

                return (
                  <button
                    key={opt.id}
                    id={`vehicle-tab-${opt.id}`}
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedVehicle(opt.id)}
                    className={`relative flex items-center justify-center gap-2.5 px-5 sm:px-7 py-3 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 focus:outline-none cursor-pointer ${
                      isSelected
                        ? "text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeVehicleIndicator"
                        className="absolute inset-0 rounded-xl bg-primary orange-glow shadow-[0_0_25px_rgba(255,122,0,0.4)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <IconComponent className="h-4 w-4 shrink-0" />
                      <span>{opt.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Subtitle / Context Note */}
            <motion.p
              key={selectedVehicle + "-subtitle"}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3.5 text-xs text-gray-400 text-center font-medium"
            >
              Viewing tailored rates for:{" "}
              <span className="text-primary font-bold">{currentConfig.label}</span>{" "}
              <span className="text-gray-500 hidden sm:inline">
                ({currentConfig.subtitle})
              </span>
            </motion.p>
          </div>
        </div>

        {/* ── 3 CORE PACKAGES GRID ────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVehicle + "-packages"}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch"
          >
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`glass-card p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  pkg.isPopular
                    ? "border-primary/50 bg-gradient-to-b from-primary/[0.08] via-white/[0.02] to-transparent shadow-[0_0_40px_rgba(255,122,0,0.15)] ring-1 ring-primary/40"
                    : "border-white/10 hover:border-primary/40"
                }`}
              >
                {/* Highlight Badge */}
                {(pkg.badge || pkg.isPopular) && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white orange-glow">
                      <Sparkles className="h-3.5 w-3.5" />
                      {pkg.badge || "Most Comprehensive"}
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
                      <span className="text-sm font-semibold text-primary mr-1">
                        Rs.
                      </span>
                      <span className="text-4xl font-extrabold text-white tracking-tight">
                        {pkg.price.toLocaleString("en-US")}
                      </span>
                    </div>
                    {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 line-through">
                        <span>
                          Rs. {pkg.originalPrice.toLocaleString("en-US")}
                        </span>
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
                        <li
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                        >
                          <div className="mt-0.5 rounded-full p-0.5 bg-primary/20 text-primary shrink-0">
                            <Check className="h-3.5 w-3.5 stroke-[3]" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perks, Warranty & Ceramic Bonuses */}
                  <div className="space-y-2.5 mb-6">
                    {pkg.freeBonus && (
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-2.5 text-xs text-primary font-medium">
                        <Gift className="h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="font-bold text-white">Bonus: </strong>
                          {pkg.freeBonus}
                        </span>
                      </div>
                    )}

                    {pkg.warranty && (
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                        <Shield className="h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="font-bold text-white">
                            Warranty:{" "}
                          </strong>
                          {pkg.warranty}
                        </span>
                      </div>
                    )}

                    {pkg.ceramicBonus && (
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/25 flex items-center gap-2.5 text-xs text-primary font-medium">
                        <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                        <span>
                          <strong className="font-bold text-white">
                            Ceramic Bonus:{" "}
                          </strong>
                          {pkg.ceramicBonus}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Maintenance Footnote if applicable */}
                  {pkg.maintenanceNote && (
                    <p className="text-[11px] text-gray-400 italic mb-4">
                      {pkg.maintenanceNote}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href={getPackageBookingUrl(
                      pkg.name,
                      `Rs. ${pkg.price.toLocaleString("en-US")}`,
                      currentConfig.label
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                      pkg.isPopular
                        ? "bg-primary text-white orange-glow hover:bg-primary/95 shadow-lg"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-primary/50"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                    Book {pkg.name} ({currentConfig.label})
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── ADD-ONS SECTION ─────────────────────────────────────────────── */}
        <div className="mt-20">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Specialized Add-On Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto font-light">
              Elevate your package with specialized ceramic shampoo, machine paint correction, and hydrophobic glass treatments.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedVehicle + "-addons"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {addOns.map((addon, idx) => (
                <motion.div
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="glass-card p-6 flex flex-col justify-between border-white/10 hover:border-primary/40 group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {addon.tag}
                      </span>
                      <span className="text-xs font-bold text-white bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                        {currentConfig.label}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary transition-colors leading-snug">
                      {addon.name}
                    </h4>

                    {(addon.perk || addon.warranty) && (
                      <div className="mt-2.5 flex flex-col gap-1.5">
                        {addon.perk && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-[11px] text-primary font-medium w-fit">
                            <Gift className="h-3 w-3 shrink-0 text-primary" />
                            <span>{addon.perk}</span>
                          </div>
                        )}
                        {addon.warranty && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-gray-300 font-medium w-fit">
                            <Shield className="h-3 w-3 shrink-0 text-primary" />
                            <span>{addon.warranty}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <p className="mt-2.5 text-xs text-gray-400 font-light leading-relaxed">
                      {addon.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 block">
                        Service Rate
                      </span>
                      <span className="text-lg font-extrabold text-white">
                        Rs. {addon.price.toLocaleString("en-US")}
                      </span>
                    </div>

                    <a
                      href={getAddOnBookingUrl(
                        addon.name,
                        `Rs. ${addon.price.toLocaleString("en-US")}`,
                        currentConfig.label
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Inquire
                      <ChevronRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── ADVANCED COATING SECTION ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 glass-card p-6 sm:p-8 border-primary/30 bg-gradient-to-br from-primary/[0.06] via-white/[0.02] to-transparent relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-primary/20 text-primary border border-primary/30">
                  {coatings.tag}
                </span>
                <span className="text-xs text-gray-400">
                  Tailored for {currentConfig.label}
                </span>
              </div>

              <h4 className="text-2xl font-extrabold text-white uppercase tracking-tight">
                {coatings.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {coatings.description}
              </p>

              {/* Coating Tier Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {coatings.options.map((option, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
                  >
                    <Layers className="h-3.5 w-3.5 text-primary" />
                    {option}
                  </span>
                ))}
              </div>

              {/* Warranty and Maintenance Note */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-gray-300">
                {coatings.perks.map((perk, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-primary">
                    <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                    <span>{perk}</span>
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 italic">
                {coatings.maintenanceNote}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0">
              <div className="text-left lg:text-right">
                <span className="text-xs text-gray-400 block uppercase tracking-wider">
                  Consultation & Quotation
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white">
                  {coatings.pricingLabel}
                </span>
              </div>

              <a
                href={getAddOnBookingUrl(
                  "Advanced Coatings (Ceramic/Graphene/Nano)",
                  "Custom Quote",
                  currentConfig.label
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/95 text-white orange-glow font-bold px-6 py-3.5 text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02]"
              >
                <Droplets className="h-4 w-4" />
                Request Coating Quote
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

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
                Our detailing specialists in Kosgama are ready to assist you with
                customized evaluations and appointments.
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
