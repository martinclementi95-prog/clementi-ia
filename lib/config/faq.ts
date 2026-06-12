export type FaqItem = {
  question: string;
  answer: string;
  category: "formation" | "tarifs" | "local" | "qualiopi" | "approche";
};

export const faqItems: FaqItem[] = [
  {
    category: "formation",
    question: "À qui s'adressent les formations IA de Clementi IA ?",
    answer:
      "Les formations s'adressent aussi bien aux entreprises (dirigeants de PME, équipes, indépendants) qu'aux particuliers (étudiants, retraités, simples curieux). Chaque programme est conçu pour un niveau et un usage précis — du dirigeant qui veut comprendre les enjeux stratégiques de l'IA au particulier qui veut maîtriser l'IA au quotidien.",
  },
  {
    category: "formation",
    question: "Faut-il avoir des connaissances techniques préalables ?",
    answer:
      "Non. Toutes les formations partent du principe que vous n'avez aucune base technique. L'objectif est précisément de vous donner ces bases solides plus les bons outils et les bonnes pratiques, pour vous rendre autonome rapidement.",
  },
  {
    category: "formation",
    question: "Combien de personnes par groupe ?",
    answer:
      "Les formations en présentiel sont limitées à 8 personnes maximum pour le B2C, et adaptées à la taille des équipes pour le B2B (généralement 3 à 12 collaborateurs). L'objectif est de garantir un échange personnalisé avec chaque participant.",
  },
  {
    category: "formation",
    question: "Les formations sont-elles en présentiel ou en distanciel ?",
    answer:
      "Les deux formats sont proposés. Le présentiel se déroule dans le Pays de Gex (vos locaux ou un lieu partenaire). Le distanciel est en visio synchrone — pas de cours pré-enregistrés.",
  },
  {
    category: "tarifs",
    question: "Quels sont les tarifs des formations ?",
    answer:
      "Les tarifs vont de 150 € par personne pour une demi-journée auprès des particuliers à 1 500 € la journée pour un chantier IA en entreprise. Le détail de chaque tarif est indiqué sur la fiche de la formation correspondante.",
  },
  {
    category: "tarifs",
    question: "Les formations sont-elles éligibles au CPF ou aux OPCO ?",
    answer:
      "Pas encore. La prise en charge OPCO ou CPF dépend de la certification Qualiopi, que je n'ai pas encore obtenue. Pour l'instant, les formations se règlent directement. Si ce point est important pour vous, parlons-en : je vous dirai où j'en suis.",
  },
  {
    category: "tarifs",
    question: "Proposez-vous des devis sur-mesure pour les entreprises ?",
    answer:
      "Oui. Pour les accompagnements longue durée, les déploiements d'agents IA sur-mesure ou les formations équipe au-delà de 10 personnes, je travaille systématiquement sur devis personnalisé après un premier échange.",
  },
  {
    category: "local",
    question: "Pourquoi un partenaire IA basé dans le Pays de Gex ?",
    answer:
      "Parce que comprendre le tissu économique local (PME industrielles, commerces, professions libérales, indépendants frontaliers) fait toute la différence dans la pertinence des cas d'usage proposés. Contrairement à un organisme parisien ou genevois, je me déplace sur site, je connais les acteurs, et je facture en euros sans frais cachés.",
  },
  {
    category: "local",
    question: "Quelles villes desservez-vous concrètement ?",
    answer:
      "Tout le Pays de Gex : Gex, Saint-Genis-Pouilly, Divonne-les-Bains, Prévessin-Moëns, Ornex, Thoiry, Sergy, Cessy, Versonnex et les communes alentour. Je me déplace dans tout le département de l'Ain pour les missions qui le justifient.",
  },
  {
    category: "qualiopi",
    question: "Êtes-vous certifié Qualiopi ?",
    answer:
      "Pas encore. Une attestation de formation est remise à l'issue de chaque programme. La certification Qualiopi, qui ouvrira la prise en charge OPCO et CPF, fait partie de mes prochaines étapes : je préfère ne pas l'annoncer tant qu'elle n'est pas obtenue.",
  },
  {
    category: "approche",
    question:
      "En quoi votre approche diffère-t-elle d'un cabinet de conseil classique ?",
    answer:
      "Je suis votre interlocuteur unique de A à Z : celui qui forme vos équipes est aussi celui qui code, déploie et mesure les résultats avec vous. Le contraire d'un livrable PowerPoint qui finit dans un tiroir.",
  },
  {
    category: "approche",
    question: "En combien de temps voit-on des résultats ?",
    answer:
      "Les premiers outils tournent généralement dès la semaine qui suit une formation ou un chantier. Sur un accompagnement de 6 mois, on déploie en moyenne un nouvel outil par mois, avec des résultats chiffrés.",
  },
  {
    category: "approche",
    question:
      "L'IA générative pose-t-elle des risques pour mes données ou ma conformité RGPD ?",
    answer:
      "Oui, et c'est précisément pourquoi je propose une offre dédiée à la gouvernance et au RGPD. Politique d'usage IA, sécurisation des données, choix souverains (modèles européens, hébergement français) font partie intégrante de mes accompagnements.",
  },
];
