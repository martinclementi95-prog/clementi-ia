/**
 * Configuration centrale du site.
 * Tu peux éditer toutes les valeurs ci-dessous sans toucher au code des pages.
 */

export const siteConfig = {
  brand: "Clementi IA",
  tagline: "Le partenaire IA du Pays de Gex",
  description:
    "Formation, audit et accompagnement IA pour les entreprises et particuliers du Pays de Gex. Expertise concrète, ancrage local, résultats mesurables.",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://clementi-ia.fr",

  founder: {
    name: "Martin Clementi",
    role: "Fondateur — Consultant & Formateur IA",
    bio: "Entrepreneur français basé dans le Pays de Gex. Master en finance, expériences en startups suisses, fondateur de plusieurs sociétés en France et en Suisse. Je conçois et déploie depuis plusieurs années des projets d'envergure pilotés par l'IA pour des entreprises de toutes tailles.",
    shortBio:
      "Entrepreneur multi-sociétés (France & Suisse), je mets mon expérience terrain de l'IA au service des entreprises et habitants du Pays de Gex.",
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
    qualiopi: "Démarche Qualiopi engagée",
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
