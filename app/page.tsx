import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { ProjectIndex } from "@/components/projects/project-index";
import { buttonVariants } from "@/components/ui/button";
import { featuredProjects, site } from "@/content/portfolio";

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero" className="shell pt-16 pb-24 md:pt-28 md:pb-40">
        <h1 id="hero" className="display text-[clamp(2.6rem,10vw,9rem)]">
          <span className="sr-only">
            {site.name}, {site.role}.{" "}
          </span>
          {site.headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <span className="rise-line" style={{ "--i": i } as React.CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="fade-in mt-12 grid gap-10 md:mt-20 md:grid-cols-12">
          <p className="max-w-[44ch] text-lg md:col-span-6 md:col-start-7 md:text-xl">
            {site.intro}
          </p>
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <span aria-hidden className="size-2 rounded-full bg-brand" />
              {site.availability}, based in {site.location}
            </p>
            <div className="flex gap-3">
              <Link href="/projects" className={buttonVariants({ size: "lg" })}>
                See my work
              </Link>
              <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="selected-work" className="shell">
        <div className="mb-8 flex items-baseline justify-between gap-6">
          <h2 id="selected-work" className="font-serif text-3xl md:text-4xl">
            Selected work
          </h2>
          <Link href="/projects" className="link-draw text-muted-foreground hover:text-foreground">
            All projects
          </Link>
        </div>
        <ProjectIndex
          projects={featuredProjects.map(({ slug, title, summary, year, tags, cover, inProgress }) => ({ slug, title, summary, year, tags, cover, inProgress }))}
        />
      </section>

      <ContactCta />
    </>
  );
}
