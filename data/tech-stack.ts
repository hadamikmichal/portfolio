import type { TechCategory } from "./types";

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: ["Angular", "TypeScript", "JavaScript", "RxJS", "Angular Material", "Tailwind CSS", "Bootstrap", "SCSS", "HTML5"],
  },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "PHP", "REST API"],
  },
  {
    title: "CMS & E-commerce",
    items: ["WordPress", "WooCommerce", "ACF"],
  },
  {
    title: "Architecture",
    items: ["DDD", "CQRS", "Modular Monolith", "Microservices"],
  },
  {
    title: "Database & Infrastructure",
    items: ["MySQL", "PostgreSQL", "AWS Lambda", "S3", "Cloudflare", "CI/CD"],
  },
  {
    title: "Tools",
    items: ["Git", "GitLab", "Docker", "Cypress", "Jira", "Figma", "Claude Code", "Codex", "Cursor"],
  },
];
