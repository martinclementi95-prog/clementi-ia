import { formatPrice } from "@/lib/utils";

export type Audience = "b2b" | "b2c";

export type Formation = {
  slug: string;
  title: string;
  tagline: string;
  audience: Audience;
  featured?: boolean;
  /** Affiche « à partir de » devant le prix. */
  priceFrom?: boolean;
  /** Offre gratuite : affiche « Gratuit » au lieu d'un montant. */
  free?: boolean;
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
    slug: "cadrage-ia",
    title: "Le Cadrage IA",
    tagline:
      "30 minutes pour identifier, ensemble, le premier outil IA qui ferait gagner du temps à votre entreprise. Gratuit, sans engagement.",
    audience: "b2b",
    free: true,
    duration: "30–45 min",
    format: "Visio ou téléphone",
    groupSize: "Vous (dirigeant ou responsable)",
    price: 0,
    priceUnit: "sans engagement",
    level: "Tous niveaux",
    description:
      "Avant de se lancer, on fait le point. En 30 à 45 minutes, on regarde ensemble votre activité, les tâches qui vous prennent du temps, et on repère LE premier chantier IA à fort impact. Vous repartez avec une idée claire de ce qu'on pourrait construire, le gain estimé et le format adapté — sans aucun engagement de votre part.",
    outcomes: [
      "Identifier le cas d'usage IA le plus rentable pour vous",
      "Estimer le temps que vous pourriez gagner",
      "Savoir par quel format commencer (formation, chantier, accompagnement)",
      "Repartir avec une recommandation claire, sans engagement",
    ],
    programme: [
      {
        title: "L'échange (30–45 min)",
        points: [
          "Vos tâches chronophages et vos irritants du quotidien",
          "Repérage du premier chantier à fort levier",
          "Estimation du gain et du format adapté",
        ],
      },
    ],
    forWhom: [
      "Dirigeants qui se demandent par où commencer avec l'IA",
      "Responsables qui veulent qualifier un besoin avant d'investir",
      "Toute PME du Pays de Gex curieuse mais prudente",
    ],
    prerequisites: "Aucun. Venez simplement avec vos questions.",
  },
  {
    slug: "formation-equipe",
    title: "La Formation équipe",
    tagline:
      "On forme vos équipes sur des usages concrets de l'IA. Elles repartent capables de faire — pas juste au courant.",
    audience: "b2b",
    featured: true,
    priceFrom: true,
    duration: "½ journée à 2 jours",
    format: "Présentiel — vos locaux",
    groupSize: "Jusqu'à 8 collaborateurs",
    price: 900,
    priceUnit: "la demi-journée — sur devis",
    level: "Tous niveaux",
    description:
      "Une formation qui ne s'arrête pas aux slides. On part de vos métiers, de vos vrais cas, et vos collaborateurs mettent les mains dans les outils. À chaque étape, j'explique le pourquoi — le bon outil, la bonne pratique, la sécurité des données — pour qu'ils sachent refaire seuls. Ils repartent capables d'utiliser l'IA dans leur quotidien, avec un ou deux mini-outils déjà en main.",
    outcomes: [
      "Des équipes autonomes sur les bons outils IA",
      "Les bonnes pratiques : qualité, sécurité, RGPD",
      "Un ou deux mini-outils repartis en main",
      "Des usages calqués sur vos métiers, pas des exemples génériques",
    ],
    programme: [
      {
        title: "On part de vos métiers",
        points: [
          "Cartographie des tâches où l'IA fait gagner du temps",
          "Les bons outils pour chaque usage",
          "Sécurité, confidentialité, RGPD",
        ],
      },
      {
        title: "On met les mains dedans",
        points: [
          "Atelier pratique sur vos cas réels",
          "Construction d'un premier mini-outil",
          "Réflexes pour continuer en autonomie",
        ],
      },
    ],
    forWhom: [
      "PME qui veulent embarquer leurs équipes",
      "Dirigeants qui préfèrent former avant de déployer",
      "Services (commercial, marketing, admin, RH) à fort gain de productivité",
    ],
    prerequisites:
      "Aucun prérequis technique. Chaque participant vient avec son ordinateur.",
  },
  {
    slug: "chantier-ia",
    title: "Le Chantier IA",
    tagline:
      "On construit ensemble un outil concret — automatisation, assistant, back-office — qui tourne pour de vrai. Vous repartez avec l'outil et le savoir-faire.",
    audience: "b2b",
    featured: true,
    priceFrom: true,
    duration: "À partir d'1 journée",
    format: "Présentiel + finition à distance",
    groupSize: "1 à 4 personnes concernées",
    price: 1500,
    priceUnit: "la journée — projet plus large sur devis",
    level: "Tous niveaux",
    description:
      "Le cœur de ma méthode. On choisit un problème concret de votre entreprise et on construit l'outil qui le résout — ensemble. Vos mains sur le clavier, je vous coache et j'explique chaque choix. La mise en ligne et l'hébergement, je m'en charge en finition : c'est inclus. Vous ne repartez pas avec des slides, mais avec un outil qui tourne — et la capacité de le faire vivre vous-même. Un outil simple tient en une journée ; un back-office avec base de données se construit sur quelques jours.",
    outcomes: [
      "Un outil déployé qui fonctionne pour de vrai",
      "La capacité de le modifier et le faire évoluer vous-même",
      "Les bonnes pratiques apprises en construisant, pas en théorie",
      "La mise en ligne et l'hébergement gérés pour vous",
    ],
    programme: [
      {
        title: "On cadre le chantier",
        points: [
          "Choix du problème à plus fort levier",
          "Conception de l'outil ensemble",
          "Choix des outils et de l'architecture",
        ],
      },
      {
        title: "On construit, vous aux commandes",
        points: [
          "Vous construisez, je vous coache pas à pas",
          "J'explique le pourquoi de chaque choix",
          "Tests sur vos cas réels",
        ],
      },
      {
        title: "Mise en production (incluse)",
        points: [
          "Déploiement, hébergement, mise en ligne",
          "Outil livré à votre nom, dans vos comptes",
          "Prise en main pour le faire évoluer seul",
        ],
      },
    ],
    forWhom: [
      "PME qui veulent un résultat tangible, pas de la théorie",
      "Dirigeants avec un problème concret à automatiser",
      "Équipes prêtes à construire leur premier outil IA",
    ],
    prerequisites:
      "Idéalement un premier cas d'usage en tête — sinon on le trouve ensemble au Cadrage.",
  },
  {
    slug: "accompagnement-ia-mensuel",
    title: "L'Accompagnement IA",
    tagline:
      "Un partenaire IA à vos côtés chaque mois : un nouvel outil construit, vos équipes qui montent en autonomie, et un accès direct pour vos questions du quotidien.",
    audience: "b2b",
    featured: true,
    duration: "4 h / mois — engagement 6 mois",
    format: "Mix présentiel + visio + asynchrone",
    groupSize: "Sur-mesure (1 à 5 personnes)",
    price: 800,
    priceUnit: "par mois",
    level: "Tous niveaux",
    description:
      "Plutôt qu'une intervention ponctuelle, un partenaire dans la durée. Chaque mois, on construit ensemble un nouvel outil, on le met en service et on le mesure — et vos équipes montent en autonomie au passage. Entre deux, vous avez un accès direct par WhatsApp pour vos questions du quotidien. Vos outils restent chez vous, à votre nom : vous restez parce que ça marche, pas parce que vous êtes coincé.",
    outcomes: [
      "Un nouvel outil construit et mesuré chaque mois",
      "Vos équipes de plus en plus autonomes",
      "Accès direct par WhatsApp (réponse < 24 h ouvrées)",
      "Vos outils à votre nom, sans dépendance",
    ],
    programme: [
      {
        title: "Chaque mois",
        points: [
          "Un chantier livré et mis en service",
          "La transmission à votre équipe",
          "Accès WhatsApp pour vos questions du quotidien",
        ],
      },
      {
        title: "Chaque trimestre",
        points: [
          "Revue stratégique avec la direction",
          "ROI chiffré des outils en place",
          "Ajustement de la feuille de route",
        ],
      },
    ],
    forWhom: [
      "PME qui veulent avancer dans la durée",
      "Dirigeants sans profil tech interne",
      "Entreprises qui ont déjà un premier chantier réussi",
    ],
    prerequisites:
      "Avoir une vision claire de ses objectifs, ou avoir commencé par un Cadrage ou un Chantier.",
  },
  {
    slug: "ia-quotidien",
    title: "L'IA pour son quotidien",
    tagline:
      "Une demi-journée pour repartir avec votre premier outil IA — celui qui vous fait gagner du temps au quotidien.",
    audience: "b2c",
    duration: "½ journée (3 h 30)",
    format: "Présentiel — Pays de Gex",
    groupSize: "Max 8 personnes",
    price: 150,
    priceUnit: "par personne",
    level: "Débutant",
    description:
      "Vous avez entendu parler de l'IA, vous l'avez peut-être essayée, mais vous ne savez pas vraiment quoi en faire ? En une demi-journée bienveillante et concrète, on apprend les bases — puis vous repartez avec un vrai petit outil qui tourne : tri de vos mails, alerte sur un prix, assistant pour vos démarches et courriers. Pas juste de la théorie : un résultat utile dès le lendemain.",
    outcomes: [
      "Repartir avec un premier outil IA qui fonctionne",
      "Rédiger lettres, courriels et démarches en quelques minutes",
      "Automatiser une tâche perso (mails, alertes, organisation)",
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
        title: "2 — Les usages du quotidien (90 min)",
        points: [
          "Démarches, courriers, voyages, recettes, santé",
          "Choisir l'outil utile pour VOTRE besoin",
          "Les pièges à éviter",
        ],
      },
      {
        title: "3 — On construit votre outil (45 min)",
        points: [
          "Mise en place d'un petit outil sur votre cas (mails, alerte, assistant)",
          "Vous repartez avec, prêt à l'emploi",
        ],
      },
    ],
    forWhom: [
      "Particuliers curieux, sans prérequis technique",
      "Seniors et jeunes retraités",
      "Indépendants et professions libérales",
    ],
    prerequisites:
      "Aucun. Un ordinateur portable ou une tablette est apprécié.",
  },
  {
    slug: "coaching-ia-particulier",
    title: "Le Coaching individuel",
    tagline:
      "Trois séances en tête-à-tête pour mettre l'IA au service de vos besoins à vous — à votre rythme.",
    audience: "b2c",
    duration: "3 × 1 h",
    format: "Visio ou présentiel",
    groupSize: "Vous, en individuel",
    price: 210,
    priceUnit: "le pack de 3 séances",
    level: "Tous niveaux",
    description:
      "Vous préférez un accompagnement rien que pour vous ? En trois séances d'une heure, on part de VOS besoins réels — votre métier, vos projets, votre quotidien — et on met en place vos propres outils. À votre rythme, sans jargon. Vous repartez avec des outils configurés sur vos cas, pas des concepts généraux.",
    outcomes: [
      "Vos propres outils IA, configurés sur vos cas réels",
      "Un accompagnement à votre rythme, sans jargon",
      "Les bons réflexes pour continuer seul",
      "Un début et une fin clairs, pas un compteur qui tourne",
    ],
    programme: [
      {
        title: "Séance 1 — Vos besoins",
        points: [
          "On part de votre quotidien et de vos projets",
          "Choix des premiers usages utiles",
        ],
      },
      {
        title: "Séance 2 — On met en place",
        points: [
          "Construction de vos premiers outils ensemble",
          "Pratique guidée sur vos cas",
        ],
      },
      {
        title: "Séance 3 — Autonomie",
        points: [
          "On affine vos outils",
          "Les réflexes pour continuer seul",
        ],
      },
    ],
    forWhom: [
      "Particuliers et indépendants qui veulent un suivi personnel",
      "Ceux qui préfèrent le tête-à-tête à l'atelier de groupe",
      "Profils qui veulent avancer à leur rythme",
    ],
    prerequisites: "Aucun. Un ordinateur est recommandé.",
  },
];

/** Alias des anciens slugs vers les nouveaux (évite les liens morts). */
const SLUG_ALIASES: Record<string, string> = {
  "audit-ia-plan-action": "chantier-ia",
  "ia-pour-dirigeants-pme": "formation-equipe",
};

export function getFormation(slug: string): Formation | undefined {
  const resolved = SLUG_ALIASES[slug] ?? slug;
  return formations.find((f) => f.slug === resolved);
}

export function getFormationsByAudience(audience: Audience): Formation[] {
  return formations.filter((f) => f.audience === audience);
}

export function getFeaturedFormations(): Formation[] {
  return formations.filter((f) => f.featured);
}

/** Libellé du montant principal : « Gratuit », « à partir de 1 500 € » ou « 1 500 € ». */
export function formationPriceLabel(f: Formation): string {
  if (f.free) return "Gratuit";
  const base = formatPrice(f.price);
  return f.priceFrom ? `à partir de ${base}` : base;
}
