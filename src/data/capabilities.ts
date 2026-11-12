import type { Capability } from "./types";

export const capabilities: Capability[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Building responsive interfaces and complex web application functionality with Angular, TypeScript, JavaScript and RxJS.",
    icon: "frontend",
    related: ["Angular", "TypeScript", "JavaScript", "RxJS"],
  },
  {
    id: "fullstack",
    title: "Fullstack Development",
    description: "Working with REST APIs, Node.js, NestJS, PHP and database-backed web applications.",
    icon: "fullstack",
    related: ["REST API", "Node.js", "NestJS", "PHP"],
  },
  {
    id: "wordpress",
    title: "WordPress & E-commerce",
    description: "Developing custom WordPress solutions, themes, ACF integrations and WooCommerce functionality.",
    icon: "wordpress",
    related: ["WordPress", "ACF", "WooCommerce"],
  },
  {
    id: "architecture",
    title: "Software Architecture",
    description: "Working with modular monoliths, DDD, CQRS, microservices and complex business workflows.",
    icon: "architecture",
    related: ["Modular Monolith", "DDD", "CQRS", "Microservices"],
  },
];
