import Link from "next/link";
import { site } from "@/content/portfolio";
import { MobileNav } from "./mobile-nav";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="shell flex h-20 items-center justify-between gap-6">
      <Link
        href="/"
        className="font-serif text-xl tracking-tight transition-colors hover:text-brand"
      >
        {site.name}
      </Link>
      <div className="flex items-center gap-2 md:gap-6">
        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>
        <ThemeToggle />
        <MobileNav />
      </div>
    </header>
  );
}
