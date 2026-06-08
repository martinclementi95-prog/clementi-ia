import { siteConfig } from "@/lib/config/site";
import { slugifyCity } from "@/lib/utils";

export type CityUseCase = { title: string; detail: string };

export type CityProfile = {
  name: string;
  slug: string;
  postalCode: string;
  population: string;
  lat: number;
  lng: number;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroLead: string;
  identity: string;
  economicReality: string;
  whyAiHere: string;
  useCases: CityUseCase[];
  recommendedFormationSlug: string;
  recommendedFormationRationale: string;
  localProof: string;
  closingAngle: string;
};

const profiles: Record<string, Omit<CityProfile, "name" | "slug">> = {
  Gex: {
    postalCode: "01170",
    population: "≈ 13 000 habitants",
    lat: 46.3337,
    lng: 6.0584,
    metaTitle: "Formation IA à Gex — chef-lieu du Pays de Gex",
    metaDescription:
      "Formation IA sur mesure à Gex (01170) : audit, formations dirigeants, accompagnement. Pensé pour le tissu commerçant, artisanal et administratif du chef-lieu.",
    h1: "Une formation IA pensée pour le chef-lieu.",
    heroLead:
      "Sous-préfecture du Pays de Gex, ville-marché et carrefour administratif : Gex concentre une diversité d'acteurs comme aucune autre commune du bassin.",
    identity:
      "Gex n'est pas qu'une commune — c'est le carrefour administratif, judiciaire et commerçant du Pays de Gex. Tribunal, sous-préfecture, marché historique du jeudi, lycée international, zones d'activités de l'Aiglette et du Pré-Munier : tout converge ici. Cette densité institutionnelle et commerciale crée un terreau idéal pour expérimenter rapidement des usages de l'IA et les diffuser ensuite dans tout le bassin.",
    economicReality:
      "Trois grandes familles d'acteurs cohabitent : les commerces et professions de bouche du centre-ville, les cabinets juridiques et libéraux gravitant autour du tribunal, et les PME industrielles et services installées dans les zones d'activités périphériques. À cela s'ajoutent la sphère associative et institutionnelle (mairie, communauté de communes) particulièrement dynamique.",
    whyAiHere:
      "La diversité des métiers gexois en fait un laboratoire grandeur nature : chaque secteur a son cas d'usage IA évident. Et la proximité physique entre les acteurs facilite la diffusion des bonnes pratiques d'un commerce à l'autre. C'est l'endroit du Pays de Gex où une démo d'IA réussie ce mois-ci devient un standard local trois mois plus tard.",
    useCases: [
      {
        title: "Devis & planning automatisés pour artisans",
        detail:
          "Un agent IA qui transforme une description vocale en devis Excel en 30 secondes, et qui synchronise les rendez-vous chantier avec Google Calendar.",
      },
      {
        title: "Aide à la rédaction pour cabinets juridiques",
        detail:
          "Rédaction de conclusions, synthèse de jurisprudence, premières moutures de courriers — avec contrôle humain final. Gain typique : 40 % de temps de rédaction.",
      },
      {
        title: "Accueil intelligent en cabinet médical ou paramédical",
        detail:
          "Prise de rendez-vous par voix, triage automatique des demandes urgentes, rappels intelligents — sans alourdir la charge mentale de la secrétaire.",
      },
      {
        title: "Veille concurrentielle pour commerces du centre",
        detail:
          "Surveillance automatique des prix, des nouveautés et de la communication des concurrents directs, restituée en synthèse hebdomadaire.",
      },
      {
        title: "Synthèses de conseils municipaux et réunions associatives",
        detail:
          "Transcription audio des séances longues, extraction des décisions et des actions à mener, rédaction de comptes-rendus prêts à publier.",
      },
    ],
    recommendedFormationSlug: "audit-ia-plan-action",
    recommendedFormationRationale:
      "Pour un acteur gexois — commerce, cabinet, PME — la journée d'audit est le format idéal : on cartographie en une journée les leviers IA prioritaires, on chiffre le ROI, et on repart avec un plan 30/60/90 jours. La diversité du tissu local mérite un diagnostic précis plutôt qu'une formation générique.",
    localProof:
      "Marché du jeudi matin, château de Gex, ZAC de l'Aiglette, lycée international, tribunal judiciaire. Sur un rayon de 2 km, on trouve déjà un échantillon représentatif de tout le tissu économique français : Gex est le terrain d'expérimentation idéal du Pays de Gex.",
    closingAngle:
      "Si vous êtes installé à Gex et hésitez sur l'IA, un café au centre-ville suffit pour qu'on regarde concrètement ce qui changerait pour votre activité.",
  },

  "Saint-Genis-Pouilly": {
    postalCode: "01630",
    population: "≈ 12 500 habitants",
    lat: 46.2434,
    lng: 6.0252,
    metaTitle: "Formation IA à Saint-Genis-Pouilly — la commune du CERN",
    metaDescription:
      "Formation IA à Saint-Genis-Pouilly (01630), aux portes du CERN : équipes R&D, ingénieurs, professions scientifiques. Approche rigoureuse, multilingue, technique.",
    h1: "L'IA, mais à la hauteur de la culture scientifique locale.",
    heroLead:
      "À deux pas du plus grand laboratoire de physique des particules au monde, Saint-Genis-Pouilly mérite une approche IA qui ne survole pas — qui plonge dans la précision.",
    identity:
      "Saint-Genis-Pouilly est probablement la commune la plus tournée vers la science et la technologie du département de l'Ain. La proximité immédiate du CERN imprègne tout : la population, les écoles, les commerces, jusqu'au tissu d'entreprises tertiaires qui s'est développé autour du pôle technologique ESPRIT. C'est aussi la commune avec la plus forte densité d'actifs anglophones de la région.",
    economicReality:
      "Un mélange unique : laboratoires de recherche, sociétés d'ingénierie, ESN tournées vers le scientifique, mais aussi services tertiaires premium (avocats d'affaires internationaux, sociétés de conseil, fiduciaires) et commerces adaptés à une population multiculturelle. Le ratio ingénieurs/habitants est l'un des plus élevés de France.",
    whyAiHere:
      "L'IA générative n'est pas un gadget marketing pour Saint-Genis-Pouilly : c'est un outil scientifique sérieux. Les chercheurs et ingénieurs locaux en attendent autre chose qu'un atelier ChatGPT grand public. Ils veulent comprendre les LLM, les RAG, la fine-tuning, les limites de chaque modèle — et déployer des assistants spécialisés sur leurs propres jeux de données techniques.",
    useCases: [
      {
        title: "Synthèse de littérature scientifique",
        detail:
          "Lecture automatique de prépublications arXiv, extraction des résultats clés et de la méthodologie, génération de rapports de veille personnalisés par thématique de recherche.",
      },
      {
        title: "Traduction technique FR/EN avec terminologie contrôlée",
        detail:
          "Pipeline de traduction qui respecte les glossaires métier — physique, ingénierie, finance internationale — sans dérive terminologique entre deux documents.",
      },
      {
        title: "Génération de protocoles et documentation technique",
        detail:
          "Rédaction assistée de protocoles expérimentaux, de README techniques, de specifications fonctionnelles — à partir de notes brutes ou de réunions transcrites.",
      },
      {
        title: "Assistants IA pour équipes IT et DevOps",
        detail:
          "Agents conversationnels branchés sur la documentation interne, capables de répondre aux questions techniques 24/7 et de générer du code conforme aux conventions de l'équipe.",
      },
      {
        title: "Analyse automatique de données expérimentales",
        detail:
          "Pipelines IA pour traiter des datasets, identifier des anomalies, générer les visualisations et rédiger les premières observations — l'analyste arbitre, l'IA exécute.",
      },
    ],
    recommendedFormationSlug: "accompagnement-ia-mensuel",
    recommendedFormationRationale:
      "Un projet IA technique à Saint-Genis-Pouilly ne se règle pas en deux jours. Le format mensuel — coaching dirigeant + déploiement progressif + accès WhatsApp — colle au rythme des projets R&D : on intègre l'IA dans la durée, on itère, on mesure, sans rupture avec le quotidien des équipes.",
    localProof:
      "CERN, ESPRIT pôle technologique, technopôle de Saint-Genis-Pouilly, lycée international, gymnase intercommunal. C'est la commune où les conférences techniques se tiennent en anglais et où les enfants entendent parler de boson de Higgs au petit-déjeuner.",
    closingAngle:
      "Si vous travaillez au CERN ou dans une société tech installée à Saint-Genis-Pouilly et que vous voulez aller plus loin que ChatGPT — c'est précisément le terrain que je préfère.",
  },

  "Divonne-les-Bains": {
    postalCode: "01220",
    population: "≈ 10 500 habitants",
    lat: 46.3574,
    lng: 6.1387,
    metaTitle: "Formation IA à Divonne-les-Bains — économie de service premium",
    metaDescription:
      "Formation IA à Divonne-les-Bains (01220) : thermalisme, hôtellerie, casino, immobilier de prestige. Hyper-personnalisation client et conciergerie augmentée par l'IA.",
    h1: "Quand le service premium rencontre l'IA générative.",
    heroLead:
      "Thermes historiques, casino, hôtellerie haut de gamme, lac et immobilier de prestige : Divonne incarne l'économie de service où la personnalisation extrême fait la différence — exactement le terrain où l'IA générative excelle.",
    identity:
      "Divonne-les-Bains est l'exception du Pays de Gex : ici, l'économie est principalement tournée vers le service premium et le tourisme international. Les thermes, le casino, le lac et le golf attirent une clientèle exigeante, fortunée, multilingue. La commune cultive un art de l'accueil et du sur-mesure qui se retrouve dans tous les commerces et hôtels.",
    economicReality:
      "Hôtellerie 4 et 5 étoiles, restaurants gastronomiques, agences immobilières de prestige, professions de wellness (spa, kinés, coachs), services à la personne haut de gamme, et bien sûr les Thermes et le Domaine de Divonne. La clientèle est internationale, polyglotte, habituée aux standards genevois et londoniens.",
    whyAiHere:
      "Le service premium repose sur deux choses inconciliables avant l'IA : la personnalisation extrême et l'efficacité opérationnelle. L'IA générative est précisément ce qui les réconcilie. Un agent conversationnel multilingue qui connaît les habitudes d'un client depuis trois ans, propose la chambre exacte qu'il préfère, et anticipe ses demandes — c'est faisable aujourd'hui, à Divonne comme à Saint-Moritz.",
    useCases: [
      {
        title: "Conciergerie virtuelle multilingue 24/7",
        detail:
          "Un assistant IA qui répond aux clients en 8 langues, connaît les disponibilités du spa, du golf et du restaurant, et confirme les réservations sans intervention humaine.",
      },
      {
        title: "Recommandations hyper-personnalisées en hôtellerie",
        detail:
          "À partir de l'historique de séjour, l'IA propose des soins thermaux, restaurants ou activités adaptés. Pas un menu standard — une suggestion calibrée pour chaque client.",
      },
      {
        title: "Descriptions immobilières premium en plusieurs langues",
        detail:
          "Génération automatique d'annonces dans le ton des biens haut de gamme (chalets, villas lac), traduites en anglais, allemand, italien sans dilution stylistique.",
      },
      {
        title: "Analyse des avis et veille e-réputation",
        detail:
          "Surveillance des avis Tripadvisor, Google et Booking, classification automatique par thème (accueil, repas, spa), alerte sur les avis sensibles avant qu'ils prennent de l'ampleur.",
      },
      {
        title: "Programmes wellness sur mesure",
        detail:
          "Combinaison automatique de soins thermaux, conseils nutritionnels et activités selon le profil et les objectifs du curiste — proposée comme un parcours cohérent plutôt qu'une liste de prestations.",
      },
    ],
    recommendedFormationSlug: "ia-pour-dirigeants-pme",
    recommendedFormationRationale:
      "Pour un directeur d'hôtel, de spa ou d'agence immobilière de prestige à Divonne, deux jours intensifs permettent de comprendre les leviers, expérimenter en conditions réelles, et décider de la suite. La clientèle premium ne tolère pas l'amateurisme : autant prendre le temps de la bonne décision avant de déployer.",
    localProof:
      "Thermes de Divonne, Casino Partouche, Domaine de Divonne (hôtel 5* et golf), lac de Divonne, place du Théâtre, ses villas du XIXe et son architecture thermale Belle Époque. C'est la commune du Pays de Gex où l'on accueille des clients depuis 1849 — l'expérience client n'est pas un sujet récent ici.",
    closingAngle:
      "Si vous dirigez un hôtel, un spa, une agence ou un cabinet à Divonne, l'IA n'est plus une option dans cinq ans — c'est un avantage concurrentiel dans douze mois. Discutons concrètement de ce qui peut être déployé.",
  },

  "Prévessin-Moëns": {
    postalCode: "01280",
    population: "≈ 8 500 habitants",
    lat: 46.2474,
    lng: 6.0577,
    metaTitle: "Formation IA à Prévessin-Moëns — frontaliers et indépendants",
    metaDescription:
      "Formation IA à Prévessin-Moëns (01280) : pour les frontaliers, indépendants et micro-entrepreneurs qui veulent gagner du temps sans complexifier leur quotidien.",
    h1: "L'IA pour celles et ceux qui font seul·e ou à deux.",
    heroLead:
      "À la frontière directe de Genève, Prévessin-Moëns est la commune des frontaliers et des indépendants qui veulent récupérer une heure par jour — sans monter une équipe IT.",
    identity:
      "Prévessin-Moëns a longtemps été une commune-dortoir frontalière. Elle est devenue, ces dix dernières années, l'un des viviers de micro-entrepreneurs et d'indépendants du Pays de Gex. La proximité immédiate de Genève alimente une économie locale d'autoentrepreneurs, de conseils, de freelances tech et de petits prestataires de services.",
    economicReality:
      "Commune résidentielle dynamique avec une forte densité d'actifs frontaliers (employés à Genève) et une explosion récente du nombre de TPE et micro-entreprises. Beaucoup d'indépendants travaillent depuis leur domicile, en télétravail mixte Suisse/France, et cherchent des outils de productivité accessibles.",
    whyAiHere:
      "Pour une personne seule ou une petite équipe, l'IA générative est probablement le levier de productivité le plus rentable jamais inventé. Pas besoin d'embaucher : un assistant IA bien configuré gère la facturation, la prospection email, la rédaction des propositions et la veille concurrentielle. Le coût d'opportunité de ne pas s'y mettre est colossal.",
    useCases: [
      {
        title: "Gagner 5 h par semaine avec l'IA au quotidien",
        detail:
          "Maîtrise réelle des prompts professionnels, des modèles disponibles et des intégrations. L'objectif n'est pas de jouer avec l'outil — c'est de récupérer du temps mesurable dès la première semaine.",
      },
      {
        title: "Automatisation de la facturation et comptabilité",
        detail:
          "Extraction automatique des données des factures fournisseurs, génération des relances clients, préparation des écritures pour l'expert-comptable — sans coder une ligne.",
      },
      {
        title: "Contenu marketing pour TPE et micro-entreprises",
        detail:
          "Pipelines de génération de contenus LinkedIn, articles de blog, newsletters, descriptions de produits — adaptés à votre voix et votre cible, pas générique.",
      },
      {
        title: "Gestion administrative quotidienne augmentée",
        detail:
          "Tri intelligent des emails, brouillons de réponses, rappels automatiques, synthèses de documents administratifs — l'équivalent d'un assistant à temps partiel pour moins de 30 €/mois.",
      },
      {
        title: "Préparation d'entretiens et candidatures (frontaliers)",
        detail:
          "Pour les actifs frontaliers en transition : préparation de CV ciblés, lettres de motivation en anglais ou allemand, simulation d'entretien en visio — l'IA comme coach personnel.",
      },
    ],
    recommendedFormationSlug: "ia-quotidien",
    recommendedFormationRationale:
      "Pour un indépendant ou un micro-entrepreneur de Prévessin-Moëns, une demi-journée suffit pour transformer votre rapport à l'IA. Trois heures trente, en petit groupe (max 8 personnes), pour repartir avec des automatisations directement applicables à votre activité. C'est l'investissement IA au meilleur ratio temps/résultat.",
    localProof:
      "Zone d'activités du Mucelle, école internationale de Genève (campus de Prévessin), proximité immédiate de Meyrin et Vésenaz, hameau de Brétigny et Moëns. C'est la commune qui parle suisse le matin et français le soir — un quotidien que je connais bien.",
    closingAngle:
      "Si vous êtes indépendant ou frontalier à Prévessin-Moëns et que vous voulez récupérer une heure par jour dès la semaine prochaine, on en parle.",
  },

  Ornex: {
    postalCode: "01210",
    population: "≈ 4 500 habitants",
    lat: 46.2617,
    lng: 6.0758,
    metaTitle: "Formation IA à Ornex — tertiaire de proximité et cabinets",
    metaDescription:
      "Formation IA à Ornex (01210) : cabinets de conseil, professions libérales, services aux frontaliers. Productivité maximale sur des activités à haute valeur ajoutée.",
    h1: "Plus de temps facturable, moins de temps administratif.",
    heroLead:
      "Ornex marie proximité immédiate de Genève et tissu tertiaire haut de gamme : un cocktail rare où chaque heure d'IA déployée se convertit directement en temps facturable récupéré.",
    identity:
      "Ornex est une commune résidentielle premium qui a vu, ces dix dernières années, s'installer un nombre croissant de cabinets de conseil, d'études d'avocats, de fiduciaires et de professions libérales. La proximité de Ferney-Voltaire et de la frontière en fait une adresse prisée pour les indépendants à forte valeur ajoutée.",
    economicReality:
      "Tertiaire de proximité : cabinets d'avocats et d'experts-comptables, conseil en patrimoine, conseil en management, professions médicales spécialisées, agences immobilières. Une économie où le temps est littéralement de l'argent — chaque heure non facturée est une perte sèche.",
    whyAiHere:
      "Pour un cabinet ou une profession libérale, l'IA générative s'attaque directement au plus gros poste de temps non facturable : la documentation, la rédaction, le reporting, la qualification de prospects. Économiser deux heures par jour sur ces tâches, c'est l'équivalent d'un dixième de chiffre d'affaires en plus — sans embaucher.",
    useCases: [
      {
        title: "Qualification automatique de leads entrants",
        detail:
          "Un agent IA qui pré-qualifie les demandes par email ou formulaire, identifie les vrais prospects et alimente directement le CRM avec un score de priorité.",
      },
      {
        title: "Comptes-rendus de réunion générés en temps réel",
        detail:
          "Transcription des rendez-vous client (avec accord), extraction des décisions, génération d'un CR structuré envoyé au client dans l'heure suivant la réunion.",
      },
      {
        title: "Gestion documentaire augmentée",
        detail:
          "Indexation automatique des dossiers, recherche en langage naturel dans les archives, génération de notes de synthèse à partir de centaines de pages.",
      },
      {
        title: "Réponses automatisées aux demandes récurrentes",
        detail:
          "Les 20 % de questions clients qui représentent 80 % du temps de réponse : traitées automatiquement avec validation humaine en un clic.",
      },
      {
        title: "Suivi automatique des dossiers et relances",
        detail:
          "Détection des dossiers inactifs depuis X jours, génération automatique d'emails de relance personnalisés selon le contexte de chaque dossier.",
      },
    ],
    recommendedFormationSlug: "ia-pour-dirigeants-pme",
    recommendedFormationRationale:
      "Pour un dirigeant ou un associé de cabinet à Ornex, le format deux jours intensifs est idéal : on couvre les enjeux stratégiques, on expérimente sur de vrais cas du cabinet, et on repart avec un plan d'action validé. Pas une formation en chambre — un atelier orienté résultats.",
    localProof:
      "Centre-ville d'Ornex, hameau de Maconnex, zones résidentielles du Vésegnin et de Villard-Tacon. Proximité immédiate de Ferney-Voltaire et de la zone tertiaire qui s'y est développée. La commune où l'on bascule du résidentiel au professionnel sans changer d'adresse.",
    closingAngle:
      "Si vous dirigez un cabinet, une étude ou une profession libérale à Ornex, on regarde ensemble en une heure ce que vous pourriez automatiser dès le mois prochain.",
  },

  Thoiry: {
    postalCode: "01710",
    population: "≈ 6 000 habitants",
    lat: 46.2713,
    lng: 5.9728,
    metaTitle: "Formation IA à Thoiry — industrie, artisanat et tourisme",
    metaDescription:
      "Formation IA à Thoiry (01710) : PME industrielles, artisans, hôtellerie-restauration et tourisme nature. ROI mesurable rapidement sur des cas opérationnels.",
    h1: "L'IA opérationnelle, là où elle se mesure vite.",
    heroLead:
      "Adossée au Jura et à ses zones d'activités, Thoiry réunit trois mondes — PME industrielles, artisanat, tourisme nature — qui ont en commun de mesurer le ROI en jours, pas en trimestres.",
    identity:
      "Thoiry, c'est la porte d'entrée du Pays de Gex côté Jura. Zones d'activités dynamiques, PME industrielles bien établies, mais aussi tourisme nature (montagne, vignobles, voie verte) qui attire visiteurs et résidents secondaires. Une commune où l'on travaille avec ses mains autant qu'avec sa tête.",
    economicReality:
      "Trois pôles distincts : les PME industrielles et logistiques installées dans les ZA (mécanique, plasturgie, services techniques), les artisans du bâtiment et de bouche, et l'hôtellerie-restauration adossée au tourisme nature et à la station de ski toute proche.",
    whyAiHere:
      "Dans l'industrie et l'artisanat, l'IA générative ne se contente pas d'écrire des emails : elle attaque directement les processus de production et de devis. Une PME qui gagne 15 % sur le temps de planification ou un artisan qui sort un devis en 5 minutes au lieu de 45 — c'est une transformation immédiate et chiffrable.",
    useCases: [
      {
        title: "Optimisation de la planification de production",
        detail:
          "Agents IA capables de proposer des ordonnancements optimaux à partir des commandes en cours, des stocks et des disponibilités machines/personnels — à arbitrer par le chef d'atelier.",
      },
      {
        title: "Devis instantanés dans l'artisanat",
        detail:
          "Photo du chantier ou description vocale en entrée, devis structuré en sortie. Le chiffrage reste humain — la mise en forme et la rédaction sont automatiques.",
      },
      {
        title: "SEO local et contenu pour hôtels-restaurants",
        detail:
          "Génération de fiches Google Business optimisées, descriptifs Booking et Airbnb, articles de blog sur la région — tout est produit à la voix de l'établissement, pas en générique.",
      },
      {
        title: "Maintenance prédictive en milieu industriel",
        detail:
          "Analyse des logs machines, détection des anomalies, alerte avant la panne. Un cas d'usage où l'IA classique et l'IA générative se complètent intelligemment.",
      },
      {
        title: "Gestion intelligente des stocks et approvisionnement",
        detail:
          "Prévision automatique des besoins en matière première, génération des bons de commande, négociation par email assistée — tout en gardant la décision finale humaine.",
      },
    ],
    recommendedFormationSlug: "audit-ia-plan-action",
    recommendedFormationRationale:
      "Pour une PME industrielle ou un artisan de Thoiry, la journée d'audit sur site est le bon point d'entrée. On observe les processus réels, on identifie les goulots, on chiffre les gains possibles. À l'issue : un plan concret de 5 cas d'usage hiérarchisés par ROI — pas une formation théorique.",
    localProof:
      "Zone d'activités de la Bagnolle, vignobles de Thoiry, voie verte, proximité immédiate de la station de Crozet-Lélex-Mijoux. C'est la commune qui mêle l'odeur de l'usine et celle des sapins — un caractère unique dans le Pays de Gex.",
    closingAngle:
      "Si vous dirigez une PME, un atelier ou un hôtel à Thoiry et que vous voulez du concret, pas de la conférence, je passe sur site quand vous voulez.",
  },

  Sergy: {
    postalCode: "01630",
    population: "≈ 1 700 habitants",
    lat: 46.2521,
    lng: 6.0416,
    metaTitle: "Formation IA à Sergy — indépendants et télétravailleurs",
    metaDescription:
      "Formation IA à Sergy (01630) : pour les indépendants, télétravailleurs et artisans d'une commune discrète mais active du Pays de Gex.",
    h1: "Quand on travaille seul, l'IA équivaut à un mi-temps.",
    heroLead:
      "Sergy abrite une concentration surprenante d'indépendants en télétravail et d'artisans pour qui l'IA peut représenter un saut de productivité personnelle décisif — sans embaucher.",
    identity:
      "Sergy est l'une des petites communes les plus discrètes du Pays de Gex — et c'est précisément ce qui la rend intéressante. Loin du tumulte de Saint-Genis-Pouilly ou de Gex, elle accueille beaucoup d'indépendants qui ont fait le choix d'un cadre calme, de la proximité avec les loisirs nature, et d'un télétravail bien organisé.",
    economicReality:
      "Économie résidentielle de qualité avec une forte densité d'indépendants : freelances tech, consultants, professions de santé, artisans du bâtiment, micro-entrepreneurs en télétravail. Pas de grosse zone industrielle, pas de centre commercial — du tissu humain de proximité.",
    whyAiHere:
      "Pour un indépendant qui travaille seul, chaque heure récupérée est une heure facturable ou une heure de qualité de vie. Pas de hiérarchie à convaincre, pas de comité de pilotage : la décision se prend en un café. C'est exactement le profil pour qui une demi-journée de formation IA bien menée change la donne en une semaine.",
    useCases: [
      {
        title: "Automatisations légères sans coder",
        detail:
          "Make, n8n, Zapier branchés sur des LLM — pour automatiser sa facturation, ses relances clients, sa veille concurrentielle, sans dépendance technique d'un développeur.",
      },
      {
        title: "Production de contenu sur LinkedIn et réseaux sociaux",
        detail:
          "Pipeline de génération hebdomadaire de posts adaptés à votre voix et votre cible. L'IA prépare, vous validez et publiez — au lieu de pages blanches le dimanche soir.",
      },
      {
        title: "Relation client par email automatisée",
        detail:
          "Brouillons de réponses prêts à envoyer dès qu'un email entre, classement automatique des demandes par priorité, suivi automatique des prospects sans CRM lourd.",
      },
      {
        title: "Mise en forme automatique de documents",
        detail:
          "Notes de chantier brutes → rapport client structuré. Photos d'avancement → compte-rendu rédigé. Devis manuscrit → version PDF professionnelle.",
      },
      {
        title: "Préparation de rendez-vous et synthèses",
        detail:
          "Avant chaque RDV : briefing automatique sur le contexte client. Après : synthèse des échanges et plan d'action généré en quelques secondes.",
      },
    ],
    recommendedFormationSlug: "ia-quotidien",
    recommendedFormationRationale:
      "La demi-journée « L'IA pour son quotidien » est calibrée pour ce profil exact : un indépendant qui veut sortir d'une formation avec des automatisations directement utilisables, pas des concepts théoriques. Maximum 8 participants en présentiel pour garantir l'attention individuelle.",
    localProof:
      "Village paisible, proximité directe de Saint-Genis-Pouilly et de Cessy, accès rapide à la voie verte et aux loisirs nature. Sergy est la commune qu'on choisit pour mieux travailler seul — précisément la cible idéale d'une formation IA pour indépendants.",
    closingAngle:
      "Si vous êtes indépendant à Sergy et que vous travaillez sept jours sur sept sans vraiment décrocher, l'IA n'est pas un gadget — c'est une stratégie de respiration. On en parle.",
  },

  Cessy: {
    postalCode: "01170",
    population: "≈ 4 900 habitants",
    lat: 46.2551,
    lng: 6.0691,
    metaTitle: "Formation IA à Cessy — TPE émergentes et nouveaux arrivants",
    metaDescription:
      "Formation IA à Cessy (01170) : pour les TPE en démarrage, indépendants et commerces d'une commune en pleine croissance économique du Pays de Gex.",
    h1: "L'IA, l'allié des structures qui démarrent.",
    heroLead:
      "Cessy concentre tout ce qui caractérise le Pays de Gex moderne : croissance rapide, nouveaux arrivants, TPE en démarrage qui doivent faire beaucoup avec peu — terrain idéal pour l'IA bien outillée.",
    identity:
      "Cessy est l'une des communes en plus forte expansion du Pays de Gex. Population qui grimpe, nouveaux quartiers, nouvelles infrastructures, et avec eux une vague de TPE et de commerces qui s'installent. La commune n'a pas le poids historique de Gex ni la notoriété de Divonne — elle a la dynamique du présent.",
    economicReality:
      "Résidentiel en expansion, zones d'activités du Tougin et ZAC en développement, commerces de proximité, professions libérales émergentes, TPE de services et de prestation, écoles et infrastructures sportives en croissance.",
    whyAiHere:
      "Pour une TPE qui démarre, l'IA générative est l'égalisateur ultime : elle permet de tenir une qualité de service et une cadence commerciale qui demandait, il y a deux ans encore, une équipe de cinq personnes. La structure légère devient un avantage, pas un handicap.",
    useCases: [
      {
        title: "Prospection commerciale locale automatisée",
        detail:
          "Identification automatique des prospects pertinents dans un rayon donné, génération de messages d'approche personnalisés, suivi automatique des réponses.",
      },
      {
        title: "Marketing local pour commerces",
        detail:
          "Production des publications Google Business, Instagram, newsletters quotidiennes adaptées aux saisons et événements locaux. Tout est généré, vous validez et publiez.",
      },
      {
        title: "Prise de rendez-vous intelligente",
        detail:
          "Assistant conversationnel qui répond aux demandes de RDV par SMS, WhatsApp ou messenger, propose les créneaux libres, confirme et envoie les rappels — sans secrétaire.",
      },
      {
        title: "Veille concurrentielle pour TPE",
        detail:
          "Surveillance automatique des prix, des promotions et de la communication des concurrents directs, restitution hebdomadaire en deux paragraphes lisibles.",
      },
      {
        title: "Agents IA commerciaux pour TPE",
        detail:
          "Chatbot site web qui qualifie les visiteurs, répond aux questions récurrentes, prend des rendez-vous — l'équivalent d'un commercial junior, 24h/24, pour quelques dizaines d'euros par mois.",
      },
    ],
    recommendedFormationSlug: "audit-ia-plan-action",
    recommendedFormationRationale:
      "Pour une TPE en démarrage à Cessy, la journée d'audit permet de poser des fondations IA solides dès le début — au lieu d'accumuler des outils dans le désordre. Vous repartez avec une feuille de route 90 jours adaptée à votre taille et votre stade.",
    localProof:
      "Zone du Tougin, ZAC en cours de développement, école et infrastructures sportives en expansion. Cessy est la commune qui se construit en temps réel — et où il est encore temps d'intégrer l'IA dès les fondations, pas en rattrapage.",
    closingAngle:
      "Si vous venez de lancer votre activité à Cessy ou si vous arrivez dans la commune, autant intégrer l'IA dès maintenant plutôt que de courir après dans deux ans.",
  },

  Versonnex: {
    postalCode: "01210",
    population: "≈ 2 100 habitants",
    lat: 46.2924,
    lng: 6.1194,
    metaTitle: "Formation IA à Versonnex — actifs frontaliers et indépendants",
    metaDescription:
      "Formation IA à Versonnex (01210) : pour les actifs frontaliers et indépendants d'une petite commune résidentielle du Pays de Gex.",
    h1: "L'IA personnelle, sans surcharge cognitive.",
    heroLead:
      "Blottie entre Ornex et Divonne, Versonnex est une commune de frontaliers et d'indépendants pour qui l'IA peut alléger la charge mentale plutôt que la rajouter — à condition d'être bien introduit·e.",
    identity:
      "Versonnex est une petite commune résidentielle, calme, à mi-chemin entre les pôles tertiaires d'Ornex et l'économie de service de Divonne-les-Bains. On y trouve essentiellement des frontaliers, des professions libérales, et quelques artisans bien implantés.",
    economicReality:
      "Tissu surtout résidentiel avec une forte composante frontalière. Quelques artisans, professions libérales, indépendants en télétravail, professions de santé installées au cabinet. Pas de grosse activité économique propre — la commune vit en lien étroit avec ses voisines.",
    whyAiHere:
      "Pour un frontalier qui travaille à Genève et veut récupérer du temps personnel, ou pour un indépendant qui veut sortir du surmenage permanent, l'IA est moins une question d'efficacité que de qualité de vie. Bien introduite, elle prend la charge mentale plutôt que de l'augmenter.",
    useCases: [
      {
        title: "Productivité personnelle avec l'IA au quotidien",
        detail:
          "Gestion intelligente des emails, brouillons de réponses, synthèses de documents administratifs (français/anglais), planification automatique de la semaine.",
      },
      {
        title: "Automatisation sans coder de tâches récurrentes",
        detail:
          "Renouvellement de factures, classement automatique de documents fiscaux, rappels intelligents — tout ce qui mange votre dimanche soir.",
      },
      {
        title: "Génération de contenu personnel et marketing",
        detail:
          "Que ce soit pour un blog perso, une activité d'indépendant ou un compte LinkedIn — production assistée de contenus qui sonnent vraiment comme vous.",
      },
      {
        title: "Gestion intelligente du calendrier",
        detail:
          "Assistant qui lit vos emails, propose des créneaux, confirme les rendez-vous, et bloque automatiquement du temps personnel — sans que vous y pensiez.",
      },
      {
        title: "Apprentissage et synthèse de documents",
        detail:
          "Idéal pour les frontaliers qui se forment en anglais ou en allemand : synthèse de cours, fiches de révision, simulation de conversation orale.",
      },
    ],
    recommendedFormationSlug: "ia-quotidien",
    recommendedFormationRationale:
      "La demi-journée « L'IA pour son quotidien » est exactement pensée pour ce profil : un actif qui veut un retour sur investissement personnel rapide, sans complexité technique. Trois heures trente, et vous repartez avec des automatisations qui vous accompagnent dès le lundi.",
    localProof:
      "Hameau de Boursin, secteur résidentiel principal, proximité immédiate de la frontière franco-suisse et des communes d'Ornex et Divonne. Versonnex est une commune où l'on vient chercher du calme — l'IA est cohérente avec ce projet de vie quand elle est bien introduite.",
    closingAngle:
      "Si vous habitez Versonnex et que vous voulez tester l'IA dans votre quotidien sans y passer un week-end entier, la demi-journée en petit groupe est le format à privilégier.",
  },
};

export function getCityProfiles(): CityProfile[] {
  return siteConfig.cities.map((name) => {
    const profile = profiles[name];
    if (!profile) {
      // Fallback for any city in siteConfig not yet detailed — should not happen
      return {
        name,
        slug: slugifyCity(name),
        postalCode: "01000",
        population: "Pays de Gex",
        lat: 46.3337,
        lng: 6.0584,
        metaTitle: `Formation IA à ${name} — Pays de Gex`,
        metaDescription: `Formation IA à ${name} : audit, formations, accompagnement IA pour les acteurs économiques de la commune.`,
        h1: `Formation IA à ${name}.`,
        heroLead: `${name}, commune du Pays de Gex, accueille un tissu économique où l'IA peut accélérer concrètement la productivité.`,
        identity: `${name} est une commune du Pays de Gex.`,
        economicReality: "Tissu économique mixte du Pays de Gex.",
        whyAiHere:
          "L'IA générative est un levier de productivité accessible à toutes les structures.",
        useCases: [],
        recommendedFormationSlug: "audit-ia-plan-action",
        recommendedFormationRationale:
          "L'audit IA est le point d'entrée recommandé pour une cartographie sur mesure.",
        localProof: `${name}, dans le Pays de Gex.`,
        closingAngle: "Discutons de votre projet IA.",
      };
    }
    return { name, slug: slugifyCity(name), ...profile };
  });
}

export function getCityProfile(slug: string): CityProfile | undefined {
  return getCityProfiles().find((c) => c.slug === slug);
}
