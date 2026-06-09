import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/formations/audit-ia-plan-action",
        destination: "/formations/chantier-ia",
        permanent: true,
      },
      {
        source: "/formations/ia-pour-dirigeants-pme",
        destination: "/formations/formation-equipe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
