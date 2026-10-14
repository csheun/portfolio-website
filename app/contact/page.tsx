import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <div className="shell pt-16 md:pt-28">
      <h1 className="display max-w-[12ch] text-[clamp(3.5rem,11vw,9.5rem)]">Let’s talk.</h1>

      <div className="mt-14 grid gap-16 md:mt-24 md:grid-cols-12">
        <section aria-labelledby="email" className="md:col-span-7">
          <h2 id="email" className="font-sans text-lg text-muted-foreground">
            {site.availability}. Email is the best way to reach me.
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="display link-draw mt-4 inline-block pb-1 text-[clamp(2rem,6vw,4.5rem)] break-all transition-colors hover:text-brand sm:break-normal"
          >
            {site.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={buttonVariants({ size: "lg" })}>
              Write an email
            </a>
            <CopyEmail email={site.email} />
          </div>
        </section>

        <section aria-labelledby="elsewhere" className="md:col-span-4 md:col-start-9">
          <h2 id="elsewhere" className="font-sans text-lg text-muted-foreground">
            Elsewhere
          </h2>
          <ul className="mt-4 border-b">
            {site.socials.map((s) => (
              <li key={s.label} className="border-t">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <span className="font-serif text-2xl transition-colors group-hover:text-brand">{s.label}</span>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    {s.handle}
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
