# Progress

## Done (2026-10-14)
- Next.js 16.4 scaffold (cacheComponents + partialPrefetching on), Tailwind v4, shadcn/ui (base-nova / Base UI), Motion, Lucide.
- Design system in `app/globals.css`: lichen paper / spruce ink / ultramarine accent; Newsreader (display) + Hanken Grotesk (body).
- Pages: Home (hero reveal, hover-preview project index, email CTA), Work grid, project detail, About (bio, experience, skills, timeline), Contact (copy email, socials), 404.
- SEO: metadata per page, generated OG images (site + per project), sitemap, robots.
- Light/dark theme via inline pre-paint script + localStorage (no next-themes).
- Validated: tsc, eslint, production build, desktop/mobile browser checks.

## Remaining
- Replace placeholder content and images in `content/portfolio.ts` and `public/projects/`.
- Set `site.url` to the real domain; optionally add `resumeUrl`.
- Deploy to Vercel (awaiting approval).

## Decisions
- All content is typed, static data in `content/portfolio.ts`; no backend/CMS.
- Project detail reads `params` inside `<Suspense>` (required for instant navigation under partialPrefetching).
- Motion used only where it carries meaning: hero load sequence (CSS), nav indicator, project hover preview.
- SVG images bypass next/image optimization (`ProjectImage`); raster images are optimized.
