import type { ReactNode } from "react";

export function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <header className="shell grid gap-8 pt-16 pb-16 md:grid-cols-12 md:pt-28 md:pb-24">
      <h1 className="display text-[clamp(3.5rem,11vw,9.5rem)] md:col-span-7">{title}</h1>
      {children && (
        <div className="max-w-[52ch] text-lg text-muted-foreground md:col-span-5 md:self-end md:pb-3">
          {children}
        </div>
      )}
    </header>
  );
}
