import { site } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="shell mt-32 flex flex-col gap-6 border-t py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
      <p>
        {site.name}, {site.location}
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {site.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-foreground">
              {s.label}
            </a>
          </li>
        ))}
        <li>
          <a href={`mailto:${site.email}`} className="link-draw hover:text-foreground">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
