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
    slug: "cinelabs",
    title: "Cinélabs",
    subtitle: "Site vitrine",
    cover: "/img/cinelabs/hero.png",
    summary:
      "Site vitrine regroupant tous les films ainsi que leur bande‑annonce, notes, acteurs, date, genre et résumé. Projet fictif.",
    date: "2024",
    role: "Dév Front",
    techs: ["Next.js", "TypeScript", "API"],
    siteUrl: "#",
    repoUrl: "#",
    screenshots: ["/img/cinelabs/hero.png", "/img/cinelabs/film.png", "/img/cinelabs/contact.png"],
    features: ["Recherche", "Bande d'annonce", "Formulaire de contact"],
  },
];
