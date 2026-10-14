import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ContactCta } from "@/components/contact-cta";
import { PageHeader } from "@/components/page-header";
import { bio, experience, site, skills, timeline } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `Background, experience, and skills of ${site.name}.`,
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="shell grid gap-8 border-t pt-10 pb-20 md:grid-cols-12 md:pb-28">
      <h2 id={id} className="font-serif text-3xl md:sticky md:top-10 md:col-span-4 md:self-start">
        {title}
      </h2>
      <div className="md:col-span-7 md:col-start-6">{children}</div>
    </section>
  );
}

export default function AboutPage() {
  const [lede, ...rest] = bio;

  return (
    <>
      <PageHeader title="About">
        <p>
          {site.role} based in {site.location}.
        </p>
      </PageHeader>

      <Section id="bio" title="Biography">
        <div className="max-w-[60ch] space-y-6 font-serif text-xl leading-[1.65]">
          <p className="text-2xl leading-snug md:text-[1.75rem]">{lede}</p>
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-14">
          {experience.map((job, i) => (
            <li key={i}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-serif text-2xl">
                  {job.role}, {job.company}
                </h3>
                <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {job.start} – {job.end}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
              <p className="mt-4 max-w-[60ch]">{job.summary}</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.name}>
              <dt className="text-sm text-muted-foreground">{group.name}</dt>
              <dd className="mt-2 text-lg leading-relaxed">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="timeline" title="Timeline">
        <ol className="relative border-l pl-8">
          {timeline.map((m, i) => (
            <li key={i} className="relative pb-10 last:pb-0">
              <span
                aria-hidden
                className="absolute top-2 -left-[calc(2rem+4.5px)] size-2 rounded-full bg-brand ring-4 ring-background"
              />
              <p className="font-serif text-lg text-brand tabular-nums">{m.year}</p>
              <h3 className="mt-1 text-lg font-medium">{m.title}</h3>
              <p className="mt-1 text-muted-foreground">{m.detail}</p>
            </li>
          ))}
        </ol>
      </Section>

      {site.resumeUrl && (
        <div className="shell">
          <a href={site.resumeUrl} className="link-draw text-lg hover:text-brand">
            Download résumé (PDF)
          </a>
        </div>
      )}

      <ContactCta />
    </>
  );
}
