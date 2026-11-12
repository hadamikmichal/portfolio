import type { Project } from "./types";

/**
 * Selected work.
 * Entries flagged `needsReview` use neutral copy only — no responsibilities
 * have been assumed. Review and extend them before removing the flag.
 */
export const projects: Project[] = [
  {
    slug: "odin-elicensing",
    title: "Odin.ie / eLicensing",
    category: "Licensing platform",
    url: "https://elicensing.comreg.ie",
    domain: "elicensing.comreg.ie",
    technologies: ["Angular", "TypeScript", "RxJS", "SCSS", "REST API"],
    description:
      "Online licensing platform supporting applications, registrations, licence payments, network incident reporting and market information.",
    contribution:
      "Frontend development using Angular. Reproducing complex business workflows from an existing legacy system, including dynamic multi-step forms and conditional wizard logic.",
    period: "2024 — 2025",
    featured: true,
  },
  {
    slug: "wspinanie",
    title: "Wspinanie.pl",
    category: "Climbing portal",
    url: "https://wspinanie.pl",
    domain: "wspinanie.pl",
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "SCSS", "MySQL", "ACF"],
    description:
      "Development of a new climbing portal with responsive design, PWA support, high-traffic requirements and integrations with products and an online bookstore.",
    contribution:
      "Custom WordPress implementation, ACF-based content management and pixel-perfect frontend development.",
    period: "2025",
    featured: true,
  },
  {
    slug: "socialtalent",
    title: "SocialTalent",
    category: "Website",
    url: "https://socialtalent.com",
    domain: "socialtalent.com",
    technologies: ["WordPress", "SEO", "GA4", "GTM", "GSC"],
    description: "Website development and analytics/SEO-related work.",
    needsReview: true,
  },
  {
    slug: "gt-trailers",
    title: "GT Trailers",
    category: "Website",
    url: "https://gt-trailers.com",
    domain: "gt-trailers.com",
    technologies: ["WordPress", "SEO", "GA4", "GTM", "GSC"],
    description: "Website development, SEO and analytics implementation.",
    needsReview: true,
  },
  {
    slug: "bublz-boba",
    title: "Bublz Boba",
    category: "E-commerce",
    url: "https://bublzboba.co.uk",
    domain: "bublzboba.co.uk",
    technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
    description: "E-commerce implementation with variable WooCommerce products.",
    needsReview: true,
  },
  {
    slug: "studio-aranzacji",
    title: "Studio Aranżacji",
    category: "Website",
    url: "https://studioaranzacji.pl",
    domain: "studioaranzacji.pl",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
    description: "WordPress website development.",
    needsReview: true,
  },
  {
    slug: "vinci-home",
    title: "Vinci Home",
    category: "Website",
    url: "https://vincihome.com.pl",
    domain: "vincihome.com.pl",
    technologies: ["WordPress", "PHP", "JavaScript", "SCSS"],
    description: "WordPress website development.",
    needsReview: true,
  },
];
