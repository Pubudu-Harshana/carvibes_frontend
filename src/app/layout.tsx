import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://carvibes.lk"),
  title: {
    default: "CarVibes.lk | Professional Auto Detailing & Car Care",
    template: "%s | CarVibes.lk",
  },
  description:
    "Sri Lanka's premier professional auto detailing and car care center in Kosgama & Avissawella. Nano-ceramic coating, paint correction, interior & exterior detailing.",
  keywords: [
    "CarVibes",
    "Car Detailing Sri Lanka",
    "Auto Detailing Kosgama",
    "Ceramic Coating Sri Lanka",
    "Car Care Avissawella",
    "Car Wash Sri Lanka",
  ],
  openGraph: {
    title: "CarVibes.lk | Professional Auto Detailing & Car Care",
    description:
      "Sri Lanka's premier professional auto detailing and car care center in Kosgama & Avissawella. Nano-ceramic coating, paint correction, interior & exterior detailing.",
    url: "https://carvibes.lk",
    siteName: "CarVibes.lk",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "CarVibes.lk - The best for your travel partner",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarVibes.lk | Professional Auto Detailing & Car Care",
    description:
      "Sri Lanka's premier professional auto detailing and car care center in Kosgama & Avissawella.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

