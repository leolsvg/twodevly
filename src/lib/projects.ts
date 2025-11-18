// lib/projects.ts
export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  cover: string;
  summary: string;
  date?: string; // "2025"
  role?: string; // "Dév Front/Back"
  techs: string[];
  siteUrl?: string;
  screenshots: string[]; // chemins vers /public/...
  features?: string[];
  results?: string[]; // métriques, retours, etc.
};

export const projects: Project[] = [
  {
    slug: "josephine",
    title: "Joséphine",
    subtitle: "Site sur-mesure",
    cover: "/img/josephine/hero.png",
    summary:
      "Conception et développement du site sur-mesure du restaurant Joséphine (Cherbourg) : identité, menus dynamiques, SEO, réservations.",
    date: "2025",
    role: "Développement full-stack",
    techs: ["Next.js", "React", "Tailwind", "SEO"],
    siteUrl: "https://josephine-cherbourg.fr",
    screenshots: [
      "/img/josephine/hero.png",
      "/img/josephine/menu.png",
      "/img/josephine/reservation.png",
    ],
    features: [
      "Pages éditoriales claires (accueil, menus, contact)",
      "Réservations en ligne",
      "Menu dynamique (CMS headless)",
      "SEO technique (métadonnées, performance, sitemaps)",
    ],
    results: [
      "Amélioration du taux de conversion réservation",
      "Visibilité locale accrue",
    ],
  },

  {
    slug: "portfolio-leo",
    title: "Portfolio Léo",
    subtitle: "Site personnel étudiant",
    cover: "/img/portfolio-leo/presentation.png",
    summary:
      "Conception et développement du portfolio personnel de Léo Renouf, étudiant en Bachelor of Engineering à Supinfo. Site professionnel pour recherche d'alternance.",
    date: "2025",
    role: "Développement full-stack",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    siteUrl: "https://portfolio-nu-two-wcnb905jum.vercel.app",
    screenshots: [
      "/img/portfolio-leo/presentation.png",
      "/img/portfolio-leo/apropos.png",
      "/img/portfolio-leo/etudes.png",
    ],
    features: [
      "Design professionnel et épuré adapté au secteur étudiant",
      "Section à propos détaillée avec parcours académique",
      "Galerie de projets avec liens vers réalisations",
      "Parcours professionnel et expériences",
      "CV téléchargeable et informations de contact",
    ],
    results: [
      "Portfolio professionnel pour recherche d'alternance",
      "Présentation claire du parcours et compétences",
      "Visibilité optimisée pour les recruteurs",
    ],
  },

  {
    slug: "portfolio-eliott",
    title: "Portfolio Eliott",
    subtitle: "Site personnel moderne",
    cover: "/img/portfolio-eliott/presentation.png",
    summary:
      "Conception et développement du portfolio personnel d'Eliott Pissis, étudiant développeur web. Site moderne avec animations fluides et design responsive.",
    date: "2025",
    role: "Développement full-stack",
    techs: ["React", "Tailwind CSS", "Vercel"],
    siteUrl: "https://portfolio-ten-snowy-11.vercel.app",
    screenshots: [
      "/img/portfolio-eliott/presentation.png",
      "/img/portfolio-eliott/compétences.png",
      "/img/portfolio-eliott/contact.png",
    ],
    features: [
      "Design moderne et épuré avec animations fluides",
      "Section compétences avec défilement automatique",
      "Formulaire de contact fonctionnel",
      "Responsive design pour tous les écrans",
      "Optimisation SEO pour la visibilité en ligne",
    ],
    results: [
      "Interface utilisateur moderne et professionnelle",
      "Expérience utilisateur optimisée",
      "Visibilité améliorée pour la recherche d'alternance",
    ],
  },

  // Exemples de placeholders (supprime/complète)
  {
    slug: "cinelabs",
    title: "Cinélabs",
    subtitle: "Site vitrine",
    cover: "/img/cinelabs/hero.png",
    summary:
      "Site vitrine regroupant tous les films ainsi que leur bande‑annonce, notes, acteurs, date, genre et résumé. Projet fictif.",
    date: "2024",
    role: "Dév Front",
    techs: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://cine-labs-eth5.vercel.app",
    screenshots: ["/img/cinelabs/hero.png", "/img/cinelabs/film.png", "/img/cinelabs/contact.png"],
    features: ["Recherche", "Bande d'annonce", "Formulaire de contact"],
  },
];
