import type { TechCategory } from "./types";

/**
 * `core: true` marks technologies that appear in two or more commercial roles
 * in data/experience.ts. It is a factual signal of where most work happened,
 * not a proficiency score.
 */
export const technologies: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", core: true },
      { name: "JavaScript", core: true },
      { name: "PHP", core: true },
      { name: "HTML5" },
      { name: "SCSS / CSS", core: true },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "Angular", core: true },
      { name: "RxJS", core: true },
      { name: "Angular Material" },
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    items: [{ name: "Node.js" }, { name: "NestJS" }, { name: "REST API", core: true }],
  },
  {
    title: "CMS & E-commerce",
    items: [{ name: "WordPress", core: true }, { name: "WooCommerce" }, { name: "Advanced Custom Fields" }],
  },
  {
    title: "Architecture",
    items: [{ name: "DDD" }, { name: "CQRS" }, { name: "Modular Monolith" }, { name: "Microservices" }],
  },
  {
    title: "Database & Infrastructure",
    items: [
      { name: "MySQL", core: true },
      { name: "PostgreSQL" },
      { name: "AWS Lambda" },
      { name: "Amazon S3" },
      { name: "Cloudflare" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Git" },
      { name: "GitLab" },
      { name: "Docker" },
      { name: "Cypress" },
      { name: "Jira" },
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "Cursor" },
    ],
  },
];
