import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/lib/config/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const proxima = localFont({
  src: [
    { path: "../fonts/ProximaNova-Light.otf", weight: "300", style: "normal" },
    { path: "../fonts/ProximaNova-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/ProximaNova-Semibold.otf", weight: "600", style: "normal" },
    { path: "../fonts/ProximaNova-Bold.otf", weight: "700", style: "normal" },
    { path: "../fonts/ProximaNova-Extrabold.otf", weight: "800", style: "normal" },
    { path: "../fonts/ProximaNova-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-proxima",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  keywords: [
    "formation IA Pays de Gex",
    "consultant IA Pays de Gex",
    "formation intelligence artificielle PME",
    "ChatGPT formation entreprise",
    "audit IA entreprise",
    "agents IA sur mesure",
    "automatisation IA",
    "accompagnement IA PME",
    "formation IA dirigeants",
    "Martin Clementi",
    "Clementi IA",
  ],
  authors: [{ name: siteConfig.founder.name, url: `${siteConfig.url}/a-propos` }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.brand,
  formatDetection: { email: false, telephone: false, address: false },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Formation professionnelle",
  other: {
    "geo.region": "FR-01",
    "geo.placename": "Pays de Gex",
    "geo.position": "46.334;6.0581",
    ICBM: "46.334, 6.0581",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={proxima.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
