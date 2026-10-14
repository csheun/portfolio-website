@AGENTS.md

# Project notes
- Next.js 16.4 with `cacheComponents` and `partialPrefetching`: read `params`/`searchParams` inside `<Suspense>`; check `node_modules/next/dist/docs/` before using unfamiliar APIs.
- All personal content lives in `content/portfolio.ts`. Never hardcode content in components.
- Theme uses `data-theme` on `<html>`; the `dark:` variant targets it. Colors are tokens in `app/globals.css` (`brand` = accent).
- shadcn/ui uses Base UI (`render` prop, not `asChild`).
- Server Components by default; client components: nav-links, mobile-nav, theme-toggle, project-index, copy-email.
- Validate with `npx tsc --noEmit`, `npm run lint`, `npm run build`. Keep PROGRESS.md current.
