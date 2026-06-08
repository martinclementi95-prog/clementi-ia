export type Audience = "b2b" | "b2c";

export type Formation = {
  slug: string;
  title: string;
  tagline: string;
  audience: Audience;
  featured?: boolean;
  duration: string;
  format: string;
  groupSize: string;
  price: number;
  priceUnit: string;
  level: "Débutant" | "Intermédiaire" | "Tous niveaux";
  description: string;
  outcomes: string[];
  programme: { title: string; points: string[] }[];
  forWhom: string[];
  prerequisites: string;
};

export const formations: Formation[] = [
  {
    slug: "audit-ia-plan-action",
    title: "Audit IA + Plan d'action",
    tagline: "Une journée sur site pour identifier les 5 cas d'usage IA qui auront le plus d'impact dans votre entreprise.",
    audience: "b2b",
    featured: true,
    duration: "1 journée sur site",
    format: "Présentiel — vos locaux",
    groupSize: "Direction + 2 à 5 collaborateurs clés",
    price: 1500,
    priceUnit: "la journée",
    level: "Tous niveaux",
    description:
      "Une immersion d'une journée dans vos processus pour cartographier les leviers d'automatisation et de productivité offerts par l'IA générative. Vous repartez avec un livrable PDF clair : 5 cas d'usage priorisés, gains estimés, plan de déploiement à 90 jours.",
    outcomes: [
      "Cartographie de 5 cas d'usage IA priorisés selon ROI",
      "Plan de déploiement 30 / 60 / 90 jours",
      "Recommandations d'outils adaptés à votre stack",
      "Estimation du gain de productivité par poste",
    ],
    programme: [
      {
        title: "Matin — Diagnostic",
        points: [
          "Entretiens avec les directions clés",
          "Analyse des processus à fort levier",
          "Cartographie des données disponibles",
        ],
      },
      {
        title: "Après-midi — Atelier de priorisation",
        points: [
          "Sélection des cas d'usage à plus fort ROI",
          "Évaluation faisabilité technique & humaine",
          "Définition des KPI de succès",
        ],
      },
      {
        title: "Sous 5 jours — Livrable",
        points: [
          "Rapport PDF complet (30+ pages)",
          "Visioconférence de restitution (1h)",
          "Recommandations d'outils et de prestataires",
        ],
      },
    ],
    forWhom: [
      "Dirigeants de PME du Pays de Gex (10 à 200 salariés)",
      "Directions générales, opérationnelles ou financières",
      "Cabinets professionnels (compta, juridique, conseil)",
    ],
    prerequisites: "Aucun. La journée est dimensionnée pour des décideurs non techniques.",
  },
  {
    slug: "ia-pour-dirigeants-pme",
    title: "L'IA pour dirigeants de PME",
    tagline: "Deux jours intensifs pour comprendre, expérimenter et décider — sans jargon, avec des cas concrets de PME locales.",
    audience: "b2b",
    featured: true,
    duration: "2 jours (14 h)",
    format: "Présentiel — petit groupe",
    groupSize: "Max 6 dirigeants",
    price: 1200,
    priceUnit: "par participant",
    level: "Tous niveaux",
    description:
      "Une formation conçue pour les dirigeants qui veulent passer du discours à l'action. Vous repartez avec une compréhension stratégique de l'IA générative, des cas d'usage testés en direct sur votre activité, et une feuille de route personnalisée pour les 6 prochains mois.",
    outcomes: [
      "Comprendre le paysage IA 2026 sans jargon",
      "Maîtriser ChatGPT, Claude, Gemini en usage avancé",
      "Identifier les cas d'usage propres à votre activité",
      "Bâtir une feuille de route IA à 6 mois",
    ],
    programme: [
      {
        title: "Jour 1 — Comprendre & expérimenter",
        points: [
          "Panorama de l'IA générative et des acteurs",
          "Atelier prompt engineering opérationnel",
          "Cas d'usage par fonction : commercial, marketing, RH, finance",
          "Sécurité, RGPD, souveraineté des données",
        ],
      },
      {
        title: "Jour 2 — Déployer dans son entreprise",
        points: [
          "Architecture d'une stack IA pour PME",
          "Automatisations no-code (Make, n8n, Zapier + IA)",
          "Conduite du changement & adhésion des équipes",
          "Atelier feuille de route personnalisée",
        ],
      },
    ],
    forWhom: [
      "Dirigeants, gérants, directeurs de PME",
      "Cadres dirigeants en charge de la transformation",
      "Indépendants à fort enjeu de productivité",
    ],
    prerequisites: "Aucun prérequis technique. Apporter son ordinateur portable.",
  },
  {
    slug: "accompagnement-ia-mensuel",
    title: "Accompagnement IA — mensuel",
    tagline: "Un partenaire IA à vos côtés chaque mois : coaching dirigeant, déploiement progressif, et accès direct par WhatsApp.",
    audience: "b2b",
    featured: true,
    duration: "4 h / mois — engagement 6 mois",
    format: "Mix présentiel + visio + asynchrone",
    groupSize: "Sur-mesure (1 à 5 personnes)",
    price: 800,
    priceUnit: "par mois",
    level: "Tous niveaux",
    description:
      "Plutôt qu'une formation ponctuelle, un accompagnement continu pour transformer durablement votre entreprise. Chaque mois : un point stratégique, le déploiement d'un cas d'usage concret, et un accès direct à votre partenaire IA pour vos questions du quotidien.",
    outcomes: [
      "Un cas d'usage IA déployé chaque mois",
      "Accès direct par WhatsApp (réponse < 24 h ouvrées)",
      "Veille personnalisée sur votre secteur",
      "Revue trimestrielle avec la direction",
    ],
    programme: [
      {
        title: "Tous les mois",
        points: [
          "1 demi-journée de coaching dirigeant",
          "1 cas d'usage déployé et mesuré",
          "Accès WhatsApp pour vos questions du quotidien",
        ],
      },
      {
        title: "Tous les trimestres",
        points: [
          "Revue stratégique avec la direction",
          "Ajustement de la feuille de route",
          "Présentation des nouveautés sectorielles",
        ],
      },
    ],
    forWhom: [
      "PME ayant déjà commencé leur transformation IA",
      "Dirigeants souhaitant un partenaire de confiance dans la durée",
      "Entreprises sans CTO ni profil tech interne",
    ],
    prerequisites: "Avoir suivi un audit IA ou disposer d'une vision claire de ses objectifs.",
  },
  {
    slug: "ia-quotidien",
    title: "L'IA pour son quotidien",
    tagline: "Une demi-journée pour gagner une heure par jour grâce à l'IA — pour particuliers, indépendants et seniors.",
    audience: "b2c",
    duration: "1/2 journée (3 h 30)",
    format: "Présentiel — Pays de Gex",
    groupSize: "Max 8 personnes",
    price: 150,
    priceUnit: "par personne",
    level: "Débutant",
    description:
      "Vous avez entendu parler de l'IA — ChatGPT, Claude, Gemini — vous l'avez peut-être essayée, mais vous ne savez pas vraiment quoi en faire ? Cette demi-journée bienveillante et concrète vous donne tous les bons réflexes pour intégrer l'IA dans votre vie quotidienne — démarches, courriers, voyages, santé, finances personnelles.",
    outcomes: [
      "Utiliser l'IA avec confiance, sans frustration",
      "Rédiger lettres, courriels, démarches en quelques minutes",
      "Préparer voyages, repas, projets personnels avec l'IA",
      "Distinguer les usages fiables des pièges courants",
    ],
    programme: [
      {
        title: "1 — Premiers pas (45 min)",
        points: [
          "Comprendre ce qu'est (et n'est pas) l'IA générative",
          "Votre premier dialogue avec une IA, en confiance",
        ],
      },
      {
        title: "2 — Les cas d'usage du quotidien (90 min)",
        points: [
          "Démarches administratives et courriers",
          "Voyages, recettes, santé, finances",
          "Aider ses enfants ou petits-enfants à apprendre",
        ],
      },
      {
        title: "3 — Pratique guidée (45 min)",
        points: [
          "Atelier sur vos propres cas",
          "Réponses à toutes vos questions",
        ],
      },
    ],
    forWhom: [
      "Particuliers curieux, sans prérequis technique",
      "Seniors et jeunes retraités",
      "Indépendants et professions libérales",
    ],
    prerequisites: "Aucun. Un ordinateur portable ou une tablette est apprécié.",
  },
];

export function getFormation(slug: string): Formation | undefined {
  return formations.find((f) => f.slug === slug);
}

export function getFormationsByAudience(audience: Audience): Formation[] {
  return formations.filter((f) => f.audience === audience);
}

export function getFeaturedFormations(): Formation[] {
  return formations.filter((f) => f.featured);
}
