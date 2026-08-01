"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Briefcase, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 90; // Adjust for sticky header height + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/5 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and Brand Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-black p-1 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="CarVibes.lk Logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
              carvibes<span className="text-primary">.lk</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#branches"
              onClick={(e) => handleScroll(e, "branches")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Branches
            </Link>
            <Link
              href="/#services"
              onClick={(e) => handleScroll(e, "services")}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/join-us"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary/95 hover:scale-[1.03] orange-glow"
            >
              <Briefcase className="h-4 w-4" />
              Join Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-lg"
          >
            <div className="space-y-4 px-4 py-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                Home
              </Link>
              <Link
                href="/#branches"
                onClick={(e) => {
                  setIsOpen(false);
                  handleScroll(e, "branches");
                }}
                className="block text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                Branches
              </Link>
              <Link
                href="/#services"
                onClick={(e) => {
                  setIsOpen(false);
                  handleScroll(e, "services");
                }}
                className="block text-base font-medium text-gray-300 hover:text-white py-2 border-b border-white/5"
              >
                Services
              </Link>
              <Link
                href="/join-us"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-base font-semibold text-white transition-all hover:bg-primary/95"
              >
                <Briefcase className="h-5 w-5" />
                Join Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
