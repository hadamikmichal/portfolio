export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Project {
  id: string;
  /** Display order, rendered as 01, 02… */
  number: number;
  title: string;
  slug: string;
  url: string;
  /** Domain shown on the card */
  domain: string;
  category: string;
  description: string;
  /** My contribution. `null` while the scope of work is unconfirmed. */
  contribution: string | null;
  /** Empty when the stack has not been confirmed. */
  technologies: string[];
  highlights: string[];
  /** Path under /public, e.g. "/images/projects/odin.jpg". `null` renders a designed typographic cover. */
  image: string | null;
  imageAlt: string;
  /** Featured projects get the large editorial layout. */
  featured: boolean;
  /** False while description/contribution still need the owner's confirmation. */
  detailsVerified: boolean;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  /** Client or product, when the role was tied to one */
  client?: string;
  /** "YYYY-MM" */
  start: string;
  /** "YYYY-MM" or "present" */
  end: string;
  project: string;
  responsibilities: string;
  architecture?: string[];
  technologies: string[];
}

export interface TechItem {
  name: string;
  /** Used across multiple commercial roles (see data/experience.ts). */
  core?: boolean;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: "frontend" | "fullstack" | "wordpress" | "architecture";
  related: string[];
}
