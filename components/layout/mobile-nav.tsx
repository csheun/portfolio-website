"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/content/portfolio";
import { isActive, navItems } from "./nav-items";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon-lg" className="md:hidden" />}
      >
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 bg-background px-6 pt-20 pb-10">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {[{ href: "/", label: "Home" }, ...navItems].map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : isActive(pathname, href);
              return (
                <li key={href} className="border-b">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="block py-4 font-serif text-4xl tracking-tight aria-[current=page]:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href={`mailto:${site.email}`} className="mt-auto text-muted-foreground">
          {site.email}
        </a>
      </SheetContent>
    </Sheet>
  );
}
