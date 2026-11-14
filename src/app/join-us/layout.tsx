import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Job Opportunities | CarVibes.lk",
  description:
    "Join the team at Sri Lanka's premier professional auto detailing and car care center. Explore job positions and apply online.",
  keywords: [
    "CarVibes",
    "Car Detailing Sri Lanka",
    "Carvibes careers",
    "Job vacancies Sri Lanka",
    "Automotive jobs",
  ],
  openGraph: {
    title: "Careers & Job Opportunities | CarVibes.lk",
    description:
      "Join the team at Sri Lanka's premier professional auto detailing and car care center. Explore job positions and apply online.",
    url: "https://carvibes.lk/join-us",
    siteName: "CarVibes.lk",
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "CarVibes.lk Careers",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Job Opportunities | CarVibes.lk",
    description:
      "Join the team at Sri Lanka's premier professional auto detailing and car care center. Explore job positions and apply online.",
    images: ["/og-image.png"],
  },
};

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

