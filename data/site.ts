import type { Availability, NavItem, SocialLink } from "./types";

export const site = {
  name: "Michał Hadamik",
  role: "Software Engineer",
  url: "https://hadamikmichal.pl",
  email: "hadamikmichal@gmail.com",
  location: "Poland",
  english: "B2/C1",
  title: "Michał Hadamik — Software Engineer",
  description:
    "Software Engineer from Poland building scalable web applications with Angular, TypeScript, Node.js and WordPress — from requirements to deployment.",
  headline: "Building digital experiences that work.",
  intro:
    "I build scalable web applications, intuitive interfaces and digital products — combining engineering, problem-solving and thoughtful design.",
  keywords: [
    "Michał Hadamik",
    "Software Engineer",
    "Frontend Developer",
    "Angular Developer",
    "TypeScript",
    "RxJS",
    "Node.js",
    "NestJS",
    "WordPress Developer",
    "WooCommerce",
    "Poland",
  ],
} as const;

/**
 * Availability indicator shown in the hero and contact section.
 * Edit `status` ("available" | "limited" | "unavailable") and `label` here.
 */
export const availability: Availability = {
  status: "available",
  label: "Available for new projects",
};

/**
 * Social profiles. Set `href` once the URL is verified.
 * Entries with `href: null` are hidden in production and flagged in development.
 */
export const socials: SocialLink[] = [
  { label: "GitHub", href: null, icon: "github" },
  { label: "LinkedIn", href: null, icon: "linkedin" },
];

/**
 * CV download. Place the PDF at `public/cv/michal-hadamik-cv.pdf`
 * and set `available` to true.
 */
export const cv = {
  href: "/cv/michal-hadamik-cv.pdf",
  available: false,
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
