"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Both icons render; CSS shows the right one so server and client markup match.
  return (
    <Button variant="ghost" size="icon-lg" onClick={toggle} aria-label="Toggle dark mode">
      <Moon className="size-[1.125rem] dark:hidden" />
      <Sun className="hidden size-[1.125rem] dark:block" />
    </Button>
  );
}
