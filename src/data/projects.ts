import type { Project } from "./types";

/**
 * Selected work — edit here, no component changes required.
 *
 * Images: add a screenshot to /public/images/projects/ and set `image`.
 * With `image: null` the card renders a designed typographic cover.
 *
 * Projects with `detailsVerified: false` keep neutral copy and hide the
 * contribution block until the scope of work is confirmed.
 */
export const projects: Project[] = [
  {
    id: "odin",
    number: 1,
    title: "Odin.ie — eLicensing",
    slug: "odin-elicensing",
    url: "https://elicensing.comreg.ie",
    domain: "elicensing.comreg.ie",
    category: "Enterprise Web Application",
    description:
      "A secure online platform that enables users to submit applications, register, pay for licences, report network incidents and access market information.",
    contribution:
      "Frontend development using Angular, based on the functionality of an existing legacy system. One of the key challenges was reproducing complex business workflows, including dynamic multi-step forms and conditional wizard logic.",
    technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "REST API"],
    highlights: [
      "Angular development",
      "Complex business logic",
      "Dynamic forms",
      "Legacy functionality reproduction",
      "API communication",
    ],
    image: "/images/projects/odin-elicensing.jpg",
    imageAlt: "Public sign-in page of the ComReg eLicensing platform",
    featured: true,
    detailsVerified: true,
  },
  {
    id: "wspinanie",
    number: 2,
    title: "Wspinanie.pl",
    slug: "wspinanie",
    url: "https://wspinanie.pl",
    domain: "wspinanie.pl",
    category: "Content Platform / WordPress",
    description:
      "A climbing portal developed to support responsive layouts, PWA functionality, high-traffic requirements and integrations with products and an online bookstore.",
    contribution:
      "Development of a new WordPress-based portal, including custom frontend implementation, ACF-based content management and pixel-perfect implementation based on the design.",
    technologies: ["WordPress", "PHP", "JavaScript", "jQuery", "SCSS", "MySQL", "ACF"],
    highlights: [
      "Custom WordPress implementation",
      "Advanced Custom Fields",
      "Responsive development",
      "PWA requirements",
      "Product & bookstore integrations",
    ],
    image: "/images/projects/wspinanie.jpg",
    imageAlt: "Wspinanie.pl climbing portal homepage",
    featured: true,
    detailsVerified: true,
  },
  {
    id: "chessgrow",
    number: 3,
    title: "ChessGrow",
    slug: "chessgrow",
    url: "https://chessgrow.com",
    domain: "chessgrow.com",
    category: "EdTech Platform / Fullstack",
    description:
      "A comprehensive chess learning platform that uses gamification to connect trainers and students, with statistics, dedicated training functionality and tools for schools and coaches.",
    contribution:
      "Fullstack development of a complex application built as a modular monolith with several microservices. Work on shared modules, application state, API communication, performance and business logic across Angular and NestJS.",
    technologies: ["Angular", "TypeScript", "RxJS", "NestJS", "Node.js", "Cypress", "SCSS"],
    highlights: [
      "Modular monolith & microservices",
      "DDD / CQRS",
      "Gamified learning",
      "Trainer & student tools",
      "Monorepo",
    ],
    image: "/images/projects/chessgrow.jpg",
    imageAlt: "ChessGrow chess learning platform homepage",
    featured: true,
    detailsVerified: true,
  },
  {
    id: "socialtalent",
    number: 4,
    title: "SocialTalent",
    slug: "socialtalent",
    url: "https://socialtalent.com",
    domain: "socialtalent.com",
    category: "Web Development / Analytics",
    description: "Website development and work involving website analytics and search engine visibility.",
    contribution: "Work related to website development, SEO and analytics configuration.",
    technologies: ["WordPress", "GA4", "GTM", "GSC", "SEO"],
    highlights: ["GA4", "GTM", "GSC", "SEO"],
    image: "/images/projects/socialtalent.jpg",
    imageAlt: "SocialTalent website homepage",
    featured: false,
    detailsVerified: true,
  },
  {
    id: "gt-trailers",
    number: 5,
    title: "GT Trailers",
    slug: "gt-trailers",
    url: "https://gt-trailers.com",
    domain: "gt-trailers.com",
    category: "Web Development / Analytics",
    description: "Website development combined with SEO and website analytics implementation.",
    contribution: "Work involving website development, SEO and analytics configuration.",
    technologies: ["WordPress", "GA4", "GTM", "GSC", "SEO"],
    highlights: ["SEO", "Google Analytics 4", "Google Tag Manager", "Google Search Console"],
    image: "/images/projects/gt-trailers.jpg",
    imageAlt: "GT Trailers website homepage",
    featured: false,
    detailsVerified: true,
  },
  {
    id: "bublz-boba",
    number: 6,
    title: "Bublz Boba",
    slug: "bublz-boba",
    url: "https://bublzboba.co.uk",
    domain: "bublzboba.co.uk",
    category: "E-commerce",
    description: "An e-commerce project built around WooCommerce, including products with multiple variations.",
    contribution: "Implementation and development of WooCommerce functionality, including variable products.",
    technologies: ["WooCommerce", "WordPress"],
    highlights: ["WooCommerce", "Variable products", "E-commerce functionality"],
    image: "/images/projects/bublz-boba.jpg",
    imageAlt: "Bublz Boba online shop homepage",
    featured: false,
    detailsVerified: true,
  },
  {
    id: "studio-aranzacji",
    number: 7,
    title: "Studio Aranżacji",
    slug: "studio-aranzacji",
    url: "https://studioaranzacji.pl",
    domain: "studioaranzacji.pl",
    category: "Website Project",
    description: "A selected website project for the Studio Aranżacji brand.",
    contribution: null, // TODO: confirm scope of work
    technologies: [], // TODO: confirm stack
    highlights: [],
    image: "/images/projects/studio-aranzacji.jpg",
    imageAlt: "Studio Aranżacji website homepage",
    featured: false,
    detailsVerified: false,
  },
  {
    id: "vinci-home",
    number: 8,
    title: "Vinci Home",
    slug: "vinci-home",
    url: "https://vincihome.com.pl",
    domain: "vincihome.com.pl",
    category: "Website Project",
    description: "A selected website project for the Vinci Home brand.",
    contribution: null, // TODO: confirm scope of work
    technologies: [], // TODO: confirm stack
    highlights: [],
    image: "/images/projects/vinci-home.jpg",
    imageAlt: "Vinci Home website homepage",
    featured: false,
    detailsVerified: false,
  },
];
