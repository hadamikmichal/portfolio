import type { ExperienceEntry } from "./types";

/**
 * Professional experience, most recent first.
 * Dates use "YYYY-MM". Overlapping periods are intentional — keep dates as-is.
 */
export const experience: ExperienceEntry[] = [
  {
    id: "emphie-innov8",
    role: "Software Engineer",
    company: "Emphie.com",
    client: "Innov8",
    start: "2025-11",
    end: "2026-03",
    project: "An application for creating flavour compositions using artificial intelligence.",
    responsibilities:
      "Development of frontend functionality using Angular, based on client requirements. Integration with an AI-related backend API implemented in C# and presentation of the returned data.",
    technologies: ["TypeScript", "Angular", "SCSS", "RxJS", "REST API", "C#"],
  },
  {
    id: "emphie-wspinanie",
    role: "WordPress Developer",
    company: "Emphie.com",
    client: "Wspinanie.pl",
    start: "2025-07",
    end: "2025-09",
    project: "Development of a new version of the Wspinanie.pl climbing portal.",
    responsibilities:
      "Development of the WordPress portal with responsive requirements, PWA functionality, high-traffic considerations, product and bookstore integrations, and pixel-perfect frontend implementation using ACF.",
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL", "SCSS", "ACF"],
  },
  {
    id: "emphie-odin",
    role: "Software Engineer",
    company: "Emphie.com",
    client: "Odin.ie",
    start: "2024-03",
    end: "2025-10",
    project:
      "Online licensing and business platform supporting applications, registrations, licence payments, network incident reporting and market information.",
    responsibilities:
      "Frontend development with Angular. Reproduction of existing business functionality and implementation of complex multi-step workflows, dynamic forms and conditional wizard logic.",
    technologies: ["TypeScript", "JavaScript", "Angular", "SCSS", "RxJS", "REST API"],
  },
  {
    id: "emphie-chess",
    role: "Fullstack Developer",
    company: "Emphie.com",
    start: "2022-05",
    end: "2024-03",
    project:
      "A comprehensive chess learning platform using gamification to support interaction between trainers and students, including statistics and dedicated learning functionality.",
    responsibilities:
      "Development of a complex application based on a modular monolith architecture with several microservices. Working with shared modules, application state, API communication, performance and business logic.",
    architecture: ["DDD", "CQRS", "Modular Monolith", "Microservices"],
    technologies: ["TypeScript", "Angular", "SCSS", "RxJS", "Cypress", "NestJS", "Node.js", "Monorepo"],
  },
  {
    id: "codelabs",
    role: "WordPress Developer",
    company: "Codelabs.rocks",
    start: "2018-11",
    end: "2022-04",
    project: "Custom WordPress websites and web solutions.",
    responsibilities:
      "Development of custom WordPress themes, plugins and frontend functionality. Implementation of websites based on supplied graphic designs, with an emphasis on pixel-perfect results.",
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "MySQL", "WooCommerce", "SCSS", "Docker", "HTML"],
  },
];
