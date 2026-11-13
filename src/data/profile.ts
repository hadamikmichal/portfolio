import type { NavItem } from "./types";

export const profile = {
  name: "Michał Hadamik",
  initials: "MH",
  title: "Software Engineer",
  location: "Poland",
  email: "hadamikmichal@gmail.com",
  english: "B2/C1",
  url: "https://hadamikmichal.pl",
  domain: "hadamikmichal.pl",
  /** First commercial role (see data/experience.ts) */
  careerStart: 2018,

  heroLabel: "Portfolio · Poland",
  intro:
    "I work across frontend engineering, fullstack development and custom web solutions. I combine technical problem-solving with a practical approach to building reliable digital products.",
  coreStack: ["Angular", "TypeScript", "RxJS", "Node.js", "NestJS", "PHP", "WordPress"],
} as const;

/**
 * Availability shown in the navigation and contact section.
 * Hidden unless `enabled` is set to true.
 */
export const availability = {
  enabled: false,
  label: "Open to opportunities",
};

/**
 * Optional profile links. Leave a URL empty ("") to hide it everywhere,
 * including structured data.
 */
export const socialLinks = {
  github: "",
  linkedin: "",
};

export const navigation: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About me",
  lead: "I'm a Software Engineer with commercial experience building and developing web applications, business platforms and custom websites.",
  paragraphs: [
    "My background combines frontend engineering, fullstack development and WordPress engineering.",
    "I've worked on complex Angular applications, dynamic multi-step business workflows, API integrations, modular systems and custom e-commerce solutions.",
    "I enjoy understanding how a system works, identifying technical challenges and delivering practical solutions — from the initial requirements through implementation and further development.",
    "I also use AI-assisted development tools such as Claude Code, Codex and Cursor to support my engineering workflow.",
  ],
};

export const contact = {
  heading: "Have a project in mind?",
  copy: "I'm always interested in interesting engineering challenges, collaboration and opportunities to build useful digital products.",
  cta: "Get in touch",
};

/** Public path of the CV. The download button appears only when this file exists in /public. */
export const cvPath = "/cv.pdf";
