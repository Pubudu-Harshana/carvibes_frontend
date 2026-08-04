import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | CarVibes.lk",
  description: "Join the team at Sri Lanka's premier professional auto detailing and car care center. Explore job positions and apply online.",
  keywords: ["CarVibes", "Car Detailing Sri Lanka", "Carvibes careers", "Job vacancies Sri Lanka", "Automotive jobs"],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
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
      </body>
    </html>
  );
}

