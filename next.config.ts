import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/join-us",
        destination: "https://wa.me/94717188814?text=Hi%20CarVibes!%20I%20am%20interested%20in%20joining%20your%20team.",
        permanent: false,
      },
      {
        source: "/api/apply",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

