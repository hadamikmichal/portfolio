export type AvailabilityStatus = "available" | "limited" | "unavailable";

export interface Availability {
  status: AvailabilityStatus;
  /** Short label shown next to the status dot. */
  label: string;
}

export interface SocialLink {
  label: string;
  /** `null` until the profile URL has been verified. Unverified links are hidden in production. */
  href: string | null;
  icon: "github" | "linkedin";
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface Project {
  slug: string;
  title: string;
  /** Short category shown above the title, e.g. "Web application". */
  category: string;
  url: string;
  /** Domain shown on the card, derived for display. */
  domain: string;
  technologies: string[];
  description: string;
  /** Personal contribution — only filled when confirmed. */
  contribution?: string;
  /** Period, only when it can be derived from confirmed experience data. */
  period?: string;
  /** Featured projects render as large cards. */
  featured?: boolean;
  /** True while the copy is a neutral placeholder awaiting the owner's review. */
  needsReview?: boolean;
}

export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  role: string;
  /** Format: MM/YYYY */
  start: string;
  /** Format: MM/YYYY, or "Present" */
  end: string;
  summary: string;
  technologies: string[];
}

export interface TechCategory {
  title: string;
  items: string[];
}
