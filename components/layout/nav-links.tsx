"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActive, navItems } from "./nav-items";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-7 text-[0.9375rem]">
      {navItems.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <li key={href} className="relative">
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className="py-2 text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
            >
              {label}
            </Link>
            {active && (
              <motion.span
                layoutId="nav-indicator"
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-px bg-brand"
                transition={{ type: "spring", stiffness: 420, damping: 36 }}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
