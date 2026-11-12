# hadamikmichal.pl

Personal portfolio of Michał Hadamik, Software Engineer.
Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

## Scripts

```bash
npm run dev     # local development (TODO markers visible)
npm run lint
npx tsc --noEmit
npm run build   # fully static output, deploys to Vercel as-is
```

## Editing content

All content is typed data in `data/`. No component changes are needed.

| What | Where |
| --- | --- |
| Name, headline, intro, SEO description | `data/site.ts` → `site` |
| Availability indicator | `data/site.ts` → `availability` (`available` / `limited` / `unavailable`) |
| GitHub / LinkedIn | `data/site.ts` → `socials` (set `href`; `null` hides the link in production) |
| CV download | put the file at `public/cv/michal-hadamik-cv.pdf`, then set `cv.available = true` |
| Projects | `data/projects.ts` (`featured` = large card, `needsReview` = neutral placeholder copy) |
| Experience | `data/experience.ts` |
| Tech stack | `data/tech-stack.ts` |
| Sitemap date | `app/sitemap.ts` → `LAST_MODIFIED` |

Items awaiting input show dashed **TODO** markers in `npm run dev` only. They never appear in production.

## Structure

```
app/            layout (metadata, fonts, JSON-LD), page, not-found, sitemap, robots, OG image, icon
components/
  layout/       Navbar (mobile menu, active section), Footer
  sections/     Hero, About, TechStack, ProjectGrid, ProjectCard, ExperienceTimeline, Contact
  ui/           Container, SectionHeader, Reveal, MotionProvider, AvailabilityBadge, CopyEmailButton, DevNote, BrandIcons
data/           typed content + types
```

Design tokens (colors, fonts, easing) live in `app/globals.css` under `@theme`.
