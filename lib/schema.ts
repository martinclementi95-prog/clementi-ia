import { siteConfig } from "@/lib/config/site";
import type { Formation } from "@/lib/config/formations";
import { slugifyCity } from "@/lib/utils";

const BASE_URL = siteConfig.url.replace(/\/$/, "");

const PAYS_DE_GEX_GEO = {
  latitude: 46.334,
  longitude: 6.0581,
  postalCode: "01170",
  region: "Auvergne-Rhône-Alpes",
  country: "FR",
  locality: "Pays de Gex",
};

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const PERSON_ID = `${BASE_URL}/a-propos#martin`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: siteConfig.brand,
    alternateName: "Clementi IA — Partenaire IA du Pays de Gex",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    image: `${BASE_URL}/opengraph-image.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: PAYS_DE_GEX_GEO.locality,
      addressRegion: PAYS_DE_GEX_GEO.region,
      postalCode: PAYS_DE_GEX_GEO.postalCode,
      addressCountry: PAYS_DE_GEX_GEO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: PAYS_DE_GEX_GEO.latitude,
      longitude: PAYS_DE_GEX_GEO.longitude,
    },
    areaServed: siteConfig.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    founder: { "@id": PERSON_ID },
    employee: { "@id": PERSON_ID },
    sameAs: [siteConfig.social.linkedin],
    knowsAbout: [
      "Intelligence Artificielle",
      "Formation IA",
      "ChatGPT entreprise",
      "Audit IA",
      "Agents IA",
      "Automatisation IA",
      "Conduite du changement IA",
      "IA générative",
      "RAG",
      "LLM",
    ],
    serviceType: [
      "Formation IA",
      "Audit IA",
      "Conseil IA",
      "Accompagnement IA",
      "Déploiement d'agents IA",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catalogue formations & accompagnements IA",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Formations",
          url: `${BASE_URL}/formations`,
        },
        {
          "@type": "OfferCatalog",
          name: "Conseil & accompagnement",
          url: `${BASE_URL}/conseil`,
        },
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE_URL,
    name: siteConfig.brand,
    description: siteConfig.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "fr-FR",
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.founder.name,
    jobTitle: siteConfig.founder.role,
    description: siteConfig.founder.bio,
    url: `${BASE_URL}/a-propos`,
    image: `${BASE_URL}/martin.jpg`,
    sameAs: [siteConfig.social.linkedin],
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Intelligence Artificielle",
      "IA générative",
      "ChatGPT",
      "Agents IA",
      "Automatisation",
      "Formation professionnelle",
      "Conduite du changement",
      "Stratégie IA pour PME",
    ],
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: PAYS_DE_GEX_GEO.locality,
        addressRegion: PAYS_DE_GEX_GEO.region,
        addressCountry: PAYS_DE_GEX_GEO.country,
      },
    },
  };
}

export function courseSchema(formation: Formation) {
  const url = `${BASE_URL}/formations/${formation.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: formation.title,
    description: formation.description,
    url,
    provider: { "@id": ORG_ID },
    inLanguage: "fr-FR",
    educationalLevel: formation.level,
    teaches: formation.outcomes,
    audience: {
      "@type": "EducationalAudience",
      audienceType:
        formation.audience === "b2b"
          ? "Dirigeants, équipes et professionnels d'entreprise"
          : "Particuliers, indépendants, étudiants et seniors",
    },
    offers: {
      "@type": "Offer",
      price: formation.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url,
      category: formation.audience === "b2b" ? "B2B" : "B2C",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: formation.format.toLowerCase().includes("présentiel")
        ? "Onsite"
        : "Blended",
      location: {
        "@type": "Place",
        name: "Pays de Gex",
        address: {
          "@type": "PostalAddress",
          addressLocality: PAYS_DE_GEX_GEO.locality,
          addressRegion: PAYS_DE_GEX_GEO.region,
          addressCountry: PAYS_DE_GEX_GEO.country,
        },
      },
      courseWorkload: formation.duration,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    url: `${BASE_URL}/blog/${post.slug}`,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "fr-FR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export function cityServiceSchema(
  city: string,
  coords?: { lat: number; lng: number },
) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.brand} — Formation IA à ${city}`,
    description: `Formation, audit et accompagnement IA à ${city} (Pays de Gex). Programmes pour PME, indépendants et particuliers.`,
    url: `${BASE_URL}/formations-ia/${slugifyCity(city)}`,
    parentOrganization: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Pays de Gex",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: PAYS_DE_GEX_GEO.region,
      addressCountry: PAYS_DE_GEX_GEO.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: coords?.lat ?? PAYS_DE_GEX_GEO.latitude,
      longitude: coords?.lng ?? PAYS_DE_GEX_GEO.longitude,
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "€€",
  };
}
