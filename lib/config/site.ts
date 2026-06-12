/**
 * Configuration centrale du site.
 * Tu peux éditer toutes les valeurs ci-dessous sans toucher au code des pages.
 */

export const siteConfig = {
  brand: "Clementi IA",
  tagline: "Le partenaire IA du Pays de Gex",
  description:
    "Formation, audit et accompagnement IA pour les entreprises et les particuliers du Pays de Gex. Des outils qui tournent, un seul interlocuteur, près de chez vous.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clementi-ia.fr",

  founder: {
    name: "Martin Clementi",
    role: "Fondateur — Consultant & Formateur IA",
    bio: "Entrepreneur installé dans le Pays de Gex. Après un master en finance et plusieurs années passées dans des startups suisses, j'ai fondé mes propres sociétés en France et en Suisse. Depuis, je conçois et déploie des outils IA pour des entreprises de toutes tailles.",
    shortBio:
      "Entrepreneur multi-sociétés (France & Suisse), je mets mon expérience de terrain au service des entreprises et des particuliers du Pays de Gex.",
  },

  contact: {
    email: "contact@clementi-ia.fr",
    phone: "+33 6 00 00 00 00",
    city: "Pays de Gex",
    region: "Ain (01)",
    // Lien Calendly à remplacer par le tien
    calendly: "https://calendly.com/clementi-ia/decouverte",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/martin-clementi/",
  },

  legal: {
    company: "Clementi IA — Martin Clementi EI",
    siret: "À compléter",
    qualiopi: "Attestation de formation remise",
    address: "Pays de Gex (01)",
  },

  // Villes desservies — utilisé pour le SEO local et le maillage
  cities: [
    "Gex",
    "Saint-Genis-Pouilly",
    "Divonne-les-Bains",
    "Prévessin-Moëns",
    "Ornex",
    "Thoiry",
    "Sergy",
    "Cessy",
    "Versonnex",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
