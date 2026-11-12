# hadamikmichal.pl

Personal portfolio of **Michał Hadamik — Software Engineer**.
A single-page, fully static site: no backend, no database, no CMS, no environment variables.

Production: <https://hadamikmichal.pl> · Vercel: <https://hadamik-portfolio.vercel.app>

## Technology stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Server Components, Cache Components) |
| UI | React 19, TypeScript (strict) |
| Styling | Tailwind CSS 4 — design tokens in `src/app/globals.css` (`@theme`) |
| Motion | Motion for React (`motion`, imported from `motion/react`) — respects `prefers-reduced-motion` |
| Icons | Lucide React (+ two inline brand SVGs) |
| Fonts | Geist Sans and Geist Mono via `next/font` (self-hosted, no layout shift) |
| Quality | ESLint (`eslint-config-next`), `tsc --noEmit` |
| Hosting | Vercel (Hobby), deployed from GitHub |

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev          # http://localhost:3000
```

## Commands

```bash
npm run dev          # development server
npx tsc --noEmit     # type check
npx eslint .         # lint
npm run build        # production build (every route is prerendered as static)
npm run start        # serve the production build locally
```

## Project structure

```
src/
  app/
    layout.tsx            fonts, metadata, JSON-LD (Person + WebSite), skip link
    page.tsx              section composition
    globals.css           design tokens and base styles
    not-found.tsx         custom 404
    sitemap.ts, robots.ts
    opengraph-image.tsx   generated social sharing image
    icon.svg              favicon
  components/
    layout/               Navbar, MobileMenu, Footer
    sections/             Hero, SelectedWork, About, Capabilities, TechStack, Experience, Contact
    projects/             FeaturedProject, ProjectCard, ProjectCover, ProjectParts
    ui/                   Button, Container, SectionHeading, Monogram, Reveal, MotionProvider,
                          AvailabilityStatus, CopyEmailButton, BrandIcons
  data/                   ← all editable content lives here
    profile.ts            name, hero copy, about, contact, availability, social links, CV path
    projects.ts           the seven projects
    experience.ts         timeline
    technologies.ts       tech stack categories
    capabilities.ts       engineering capability groups
    types.ts              data models
  lib/
    metadata.ts           SEO metadata and structured data
    cv.ts                 detects public/cv.pdf at build time
    utils.ts              cn(), date formatting
public/
  images/projects/        project screenshots
```

Components never hard-code content. To change text, edit the files in `src/data/`.

## Updating content

### Project descriptions

Edit `src/data/projects.ts`. Each project has:
`id`, `number`, `title`, `slug`, `url`, `domain`, `category`, `description`, `contribution`,
`technologies`, `highlights`, `image`, `imageAlt`, `featured`, `detailsVerified`.

- `featured: true` → large editorial layout (currently Odin.ie and Wspinanie.pl).
- `contribution: null` or `detailsVerified: false` → the contribution block is hidden.
- `technologies: []` → no technology tags are shown.

### Project images

1. Save a screenshot to `public/images/projects/`, e.g. `wspinanie.jpg`. Use 1440×900 (16:10) or larger, JPG or WebP.
2. In `src/data/projects.ts`, set `image: "/images/projects/wspinanie.jpg"` and write a descriptive `imageAlt`.

`next/image` handles resizing, modern formats and lazy loading. With `image: null`, the card shows a designed typographic cover instead, so the layout never depends on an image existing.

The current screenshots were captured from each site's public homepage at 1440×900. Cookie banners and pop-ups were dismissed. Page content was not edited.

### Experience

Edit `src/data/experience.ts`. Dates use `YYYY-MM` (or `"present"` for `end`) and are formatted automatically, e.g. "November 2025 — March 2026". Entries are shown in array order (newest first).

### Availability status

In `src/data/profile.ts`:

```ts
export const availability = { enabled: true, label: "Open to opportunities" };
```

It is **disabled by default**. When enabled, it appears in the navigation, the mobile menu and the contact section.

### GitHub and LinkedIn

In `src/data/profile.ts`:

```ts
export const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/",
};
```

Empty strings hide the links everywhere. Filled URLs appear in Contact and the footer, and are added to the Person JSON-LD (`sameAs`).

### CV (PDF)

1. Save the PDF as **`public/cv.pdf`**. The public URL is always `/cv.pdf`, so the original file name is never exposed.
2. Rebuild or redeploy.

The **Download CV** button only renders when `public/cv.pdf` exists at build time (`src/lib/cv.ts`), so there is never a broken link. Visitors download it as `Michal-Hadamik-CV.pdf`. To replace the CV, overwrite the file and redeploy.

## Deploying to Vercel

The repository is ready for Vercel's GitHub integration. No configuration file or environment variables are needed.

1. Go to <https://vercel.com/new> and import the `hadamikmichal/portfolio` GitHub repository.
2. Keep the detected defaults: Framework **Next.js**, build command `next build`, no root directory change.
3. Click **Deploy**. The site is served at `https://<project-name>.vercel.app`.
4. Every push to `main` deploys to production. Other branches and pull requests get preview URLs, which Vercel marks `noindex` automatically.

Canonical URLs, Open Graph URLs, the sitemap and robots.txt always point to `https://hadamikmichal.pl` (`src/data/profile.ts → profile.url`). The site also works correctly on the `*.vercel.app` URL, and search engines are told the custom domain is canonical.

## Connecting hadamikmichal.pl (Cyber_Folks DNS)

DNS stays with Cyber_Folks. You add records manually; nothing here changes DNS automatically.

**1. Add the domains in Vercel**

1. Vercel → your project → **Settings → Domains**.
2. Add `hadamikmichal.pl`.
3. Add `www.hadamikmichal.pl` and set it to **redirect to `hadamikmichal.pl`** (308).
4. Vercel then lists the exact DNS records each domain needs: typically an **A** record for the apex `@`, and a **CNAME** for `www`. **Use the values Vercel shows for your project.** Do not copy values from tutorials, as they can differ per project and change over time. If Vercel asks for a **TXT** verification record, add that too.

**2. Add the records in the Cyber_Folks panel**

1. Log in to the Cyber_Folks customer panel and open DNS zone management for `hadamikmichal.pl`.
2. For the apex (`@` / `hadamikmichal.pl`): add the **A** record from Vercel. Remove or replace any *existing* A or AAAA records for `@` that point to the old hosting.
3. For `www`: add the **CNAME** from Vercel. Remove any conflicting A/AAAA/CNAME record for `www`.
4. **Do not touch email records.** Keep every **MX** record and every **TXT** record for SPF (`v=spf1 …`), DKIM (`…._domainkey`) and DMARC (`_dmarc`) exactly as they are. Only the web records for `@` and `www` change.
5. Save the zone.

**3. Verify**

- In Vercel → Domains, wait for both domains to show **Valid Configuration**. DNS changes can take from a few minutes up to 24–48 hours. Vercel issues the HTTPS certificate automatically.
- Check `https://hadamikmichal.pl` loads, and that `https://www.hadamikmichal.pl` redirects to it.
- Send a test email to and from your domain address to confirm mail still works.
- Optional: submit `https://hadamikmichal.pl/sitemap.xml` in Google Search Console.

## Content to confirm

These items need input from you. Nothing has been invented to fill the gaps.

- [ ] **CV** — add `public/cv.pdf`. The Download CV button is hidden until the file exists.
- [ ] **GitHub URL** — set `socialLinks.github`. The repository `github.com/hadamikmichal/portfolio` suggests the username `hadamikmichal`; confirm the profile URL.
- [ ] **LinkedIn URL** — set `socialLinks.linkedin`.
- [ ] **Availability status** — currently disabled. Enable it in `profile.ts` if you want it shown.
- [ ] **Studio Aranżacji** — confirm your scope of work and technologies. It currently has a neutral description, no contribution and no tags.
- [ ] **Vinci Home** — confirm your scope of work and technologies (same as above).
- [ ] **Wspinanie.pl screenshot** — the public homepage shows a privacy notice and rotating ads, so the project uses a designed cover. Add a clean screenshot if you have one.
- [ ] **Odin.ie screenshot** — the only public page is the eLicensing sign-in screen. Replace it if you have an approved screenshot of the application.
- [ ] **Screenshot permission** — the project screenshots show clients' public homepages. Confirm you're comfortable showing them, or set `image: null` for a designed cover.
- [ ] **Sitemap date** — update `LAST_MODIFIED` in `src/app/sitemap.ts` after significant content changes.
