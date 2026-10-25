import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PricingPackages from "@/components/PricingPackages";

export const metadata: Metadata = {
  title: "Service Packages & Pricing | CarVibes.lk Kosgama",
  description:
    "Official detailing packages and prices for CarVibes.lk in Sri Lankan Rupees (LKR). Choose between Basic Vibe, Refresh Vibe, Premium Vibe, and specialized ceramic and glass treatments.",
};

export default function PricingPage() {
  return (
    <div className="relative w-full overflow-hidden min-h-screen hero-bg-overlay pb-20 pt-8">
      {/* Top Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-primary transition-colors uppercase tracking-wider"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>

      {/* Main Pricing Packages Component */}
      <PricingPackages />
    </div>
  );
}
