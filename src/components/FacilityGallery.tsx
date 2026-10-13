"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles
} from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "studio-bay",
    src: "/landingpage.jpg",
    title: "Precision Detailing Studio",
    category: " Studio",
    description:
      "Advanced detailing bay featuring geometric ceiling LED lighting, side inspection bars, and the illuminated CarVibes neon emblem for precision paint correction and ceramic application.",
    alt: "CarVibes luxury vehicle in the precision detailing studio bay with geometric overhead LED lighting"
  },
  {
    id: "facility-exterior",
    src: "/loc2.jpg",
    title: "Facility Entrance & Welcome",
    category: "Main Entrance",
    description:
      "The official CarVibes Kosgama branch with our quick wash bays, service menu billboard, customer reception, and customer arrival courtyard.",
    alt: "CarVibes  facility exterior featuring official branded billboard, service menu, and reception"
  },
  {
    id: "workshop-bays",
    src: "/loc1.jpg",
    title: "Covered Wash & Service Bays",
    category: "Workshop Facility",
    description:
      "Spacious, multi-bay covered workshop infrastructure engineered for high-volume vehicle washing, undercarriage treatments, and mechanical inspections.",
    alt: "Multi-vehicle covered workshop and wash bays at CarVibes detailing facility"
  },
  {
    id: "customer-lounge",
    src: "/loc3.jpg",
    title: "Air-Conditioned Customer Lounge",
    category: "Customer Comfort",
    description:
      "Relax in a climate-controlled waiting area with comfortable seating and a direct viewing window overlooking your vehicle during detailing treatments.",
    alt: "Air-conditioned customer waiting lounge with comfortable seating and viewing window at CarVibes"
  },
  {
    id: "genuine-products",
    src: "/loc4.jpg",
    title: "Premium Products & Lubricants",
    category: "Genuine Care",
    description:
      "Stocked with world-class automotive lubricants (Toyota Motor Oil, Havoline, Delo), genuine filters, and specialized Würth detailing chemicals.",
    alt: "Cabinet displaying genuine motor oils, filters, and professional Würth car detailing chemicals"
  }
];

export default function FacilityGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  return (
    <section
      id="facility"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Background image with premium overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="CarVibes Studio Detailing Backdrop"
          fill
          className="object-cover opacity-25 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-black/80 to-[#0A0A0A]" />
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            <MapPin className="h-3.5 w-3.5" />
            <span>Kosgama Center • Live Photo Tour</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Inside CarVibes <span className="text-primary font-bold">Studio</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Take a real look inside our flagship detailing facility in Kosgama. Equipped with precision LED inspection lights, dedicated service bays, and a climate-controlled customer lounge.
          </p>
        </div>

        {/* Editorial Asymmetrical Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Featured Precision Studio Bay (Spans 2 columns on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => handleOpen(0)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card lg:col-span-2 lg:row-span-1 border border-white/10 hover:border-primary/40 transition-all duration-300"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${galleryItems[0].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(0);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300" />

              {/* Top Tag & Zoom icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-semibold text-primary">
                  <Sparkles className="h-3 w-3" />
                  Featured Studio
                </span>
                <span className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {galleryItems[0].category}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {galleryItems[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl line-clamp-2 sm:line-clamp-none">
                  {galleryItems[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Facility Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => handleOpen(1)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${galleryItems[1].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(1);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto w-full h-full min-h-[300px] lg:min-h-full flex-1 overflow-hidden">
              <Image
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="absolute top-4 right-4">
                <span className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {galleryItems[1].category}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {galleryItems[1].title}
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {galleryItems[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Covered Workshop Bays */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => handleOpen(2)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${galleryItems[2].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(2);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
              <Image
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="absolute top-4 right-4">
                <span className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {galleryItems[2].category}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {galleryItems[2].title}
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {galleryItems[2].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Customer Lounge */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => handleOpen(3)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${galleryItems[3].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(3);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
              <Image
                src={galleryItems[3].src}
                alt={galleryItems[3].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="absolute top-4 right-4">
                <span className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {galleryItems[3].category}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {galleryItems[3].title}
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {galleryItems[3].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Products & Lubricants */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => handleOpen(4)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl glass-card border border-white/10 hover:border-primary/40 transition-all duration-300"
            tabIndex={0}
            role="button"
            aria-label={`Open photo: ${galleryItems[4].title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(4);
              }
            }}
          >
            <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden">
              <Image
                src={galleryItems[4].src}
                alt={galleryItems[4].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent transition-opacity duration-300" />

              <div className="absolute top-4 right-4">
                <span className="h-9 w-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-primary group-hover:scale-110 transition-all">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1.5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {galleryItems[4].category}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {galleryItems[4].title}
                </h3>
                <p className="text-xs text-gray-300 font-light line-clamp-2">
                  {galleryItems[4].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Summary Footer Note */}
        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 text-xs text-gray-400 font-medium">
            <Camera className="h-4 w-4 text-primary" />
            <span>Authentic photographs captured on-site at CarVibes Kosgama</span>
          </p>
        </div>
      </div>

      {/* ── ACCESSIBLE LIGHTBOX MODAL ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox Preview"
            onClick={handleClose}
          >
            {/* Modal Content Box (Clicking inside does not close) */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white border-b border-white/10 mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {galleryItems[selectedIndex].category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {selectedIndex + 1} / {galleryItems.length}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Close Lightbox (Press Escape)"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Image Container */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden bg-black/50 border border-white/10 flex items-center justify-center">
                <Image
                  src={galleryItems[selectedIndex].src}
                  alt={galleryItems[selectedIndex].alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain"
                  priority
                />

                {/* Prev Navigation Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                {/* Next Navigation Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/70 hover:bg-black/90 text-white border border-white/15 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="w-full pt-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {galleryItems[selectedIndex].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light mt-0.5">
                    {galleryItems[selectedIndex].description}
                  </p>
                </div>
                <div className="shrink-0 text-xs text-gray-500 font-mono hidden sm:block">
                  Use ← → keys to navigate • Esc to close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
