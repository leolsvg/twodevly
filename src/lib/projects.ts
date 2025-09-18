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
  repoUrl?: string;
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
    // repoUrl: "https://github.com/...", // optionnel
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

  // Exemples de placeholders (supprime/complète)
  {
    slug: "projet-2",
    title: "Cinelabs",
    subtitle: "site vitrine",
    cover: "/img/cineLabs/hero.png",
    summary:
      "site vitrine regroupant tout les films ainsi que leurs bande d'annonce, notes, acteurs, date, genre, résumés. Dans le cadre d'un projet fictif.",
    date: "2024",
    role: "Dév Front",
    techs: ["Javascript", "API"],
    siteUrl: "#",
    repoUrl: "#",
    screenshots: ["/img/cinelabs/film.png", "/img/cinelabs/contact.png"],
    features: ["Recherche", "Bande d'annonce", "Formulaire de contact"],
  },
];
