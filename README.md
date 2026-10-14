# Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui (Base UI), and Motion. Every page is statically prerendered.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start
```

Requires Node 20.9+.

## Update your content

Everything personal lives in **`content/portfolio.ts`**: name, headline, intro, email, socials, bio, experience, skills, timeline, and projects. All values ship as placeholders.

- **Projects:** add an entry to `projects`. `featured: true` shows it on the home page. The `slug` becomes the URL (`/projects/<slug>`).
- **Images:** put screenshots in `public/projects/` and reference them as `/projects/file.png`. Covers display at 16:10. Replace the placeholder `.svg` files.
- **Résumé:** drop a PDF in `public/` and set `site.resumeUrl` (e.g. `"/resume.pdf"`).
- **Site URL:** set `site.url` to your domain; it drives canonical URLs, the sitemap, and Open Graph images.
- **Colors/fonts:** tokens are at the top of `app/globals.css`; fonts are set in `app/layout.tsx`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project** and import the repo. The defaults work; no environment variables are needed.
3. Add your domain under **Settings → Domains**, then update `site.url`.

Or use the CLI: `npx vercel` (preview) and `npx vercel --prod`.

## Structure

```
app/                 routes, metadata, OG images, sitemap, robots
components/layout/   header, nav, mobile menu, theme toggle, footer
components/projects/ project list, card, image, tags
components/ui/       shadcn/ui primitives
content/             portfolio.ts — all editable content
lib/                 utilities, OG image renderer
```
