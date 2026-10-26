import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, QrCode } from "lucide-react";
import PricingPackages from "@/components/PricingPackages";

export const metadata: Metadata = {
  title: "Service Packages & Pricing | CarVibes.lk Kosgama",
  description:
    "Official detailing packages and prices for CarVibes.lk in Sri Lankan Rupees (LKR). Choose between Basic Vibe, Refresh Vibe, Premium Vibe, and specialized ceramic and glass treatments.",
};

export default function PricingPage() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen hero-bg-overlay pb-20 pt-8">
      {/* Top Breadcrumb & QR Code Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-primary transition-colors uppercase tracking-wider"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <a
          href="/carvibes-pricing-qr.png"
          download="CarVibes-Pricing-QR.png"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 hover:bg-primary hover:text-white px-3.5 py-1.5 rounded-lg transition-all uppercase tracking-wider"
          title="Download high-resolution print QR code for CarVibes Pricing"
        >
          <QrCode className="h-3.5 w-3.5" />
          <span>Pricing QR Code</span>
        </a>
      </div>

      {/* Main Pricing Packages Component */}
      <PricingPackages />
    </div>
  );
}
