import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectImage } from "@/components/projects/project-image";
import { TagList } from "@/components/projects/tag-list";
import { buttonVariants } from "@/components/ui/button";
import { getProject, projects } from "@/content/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-dvh" aria-busy="true" />}>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({ params }: Pick<PageProps<"/projects/[slug]">, "params">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { term: "Role", value: project.role },
    { term: "Year", value: String(project.year) },
  ];

  return (
    <article>
      <header className="shell pt-12 md:pt-20">
        <Link href="/projects" className="link-draw text-sm text-muted-foreground hover:text-foreground">
          All work
        </Link>
        <h1 className="display mt-8 text-[clamp(3.25rem,10vw,8.5rem)]">{project.title}</h1>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p className="max-w-[40ch] text-xl md:col-span-6 md:text-2xl md:leading-snug">{project.summary}</p>
          <div className="md:col-span-5 md:col-start-8">
            <dl className="grid grid-cols-2 gap-6">
              {facts.map((f) => (
                <div key={f.term}>
                  <dt className="text-sm text-muted-foreground">{f.term}</dt>
                  <dd className="mt-1">{f.value}</dd>
                </div>
              ))}
              <div className="col-span-2">
                <dt className="sr-only">Technologies</dt>
                <dd>
                  <TagList tags={project.tags} />
                </dd>
              </div>
            </dl>
            {(project.links.live || project.links.github) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "lg" })}
                  >
                    Visit live site <ArrowUpRight data-icon="inline-end" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "lg", variant: "outline" })}
                  >
                    View source
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="shell mt-16 md:mt-24">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary">
          <ProjectImage
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="shell mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
        <h2 className="font-serif text-3xl md:col-span-4">Overview</h2>
        <div className="max-w-[62ch] space-y-6 font-serif text-xl leading-[1.65] md:col-span-7 md:col-start-6">
          {project.description.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>

        {project.highlights.length > 0 && (
          <>
            <h2 className="font-serif text-3xl md:col-span-4">Highlights</h2>
            <ul className="space-y-3 md:col-span-7 md:col-start-6">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-4 border-b pb-3">
                  <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {project.gallery.length > 0 && (
        <div className="shell mt-20 space-y-16 md:mt-28">
          {project.gallery.map((img) => (
            <figure key={img.src}>
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary">
                <ProjectImage src={img.src} alt={img.alt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
              </div>
              {img.caption && <figcaption className="mt-4 text-sm text-muted-foreground">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {next && next.slug !== project.slug && (
        <nav aria-label="Next project" className="shell mt-32 border-t pt-10">
          <Link href={`/projects/${next.slug}`} className="group block">
            <span className="text-sm text-muted-foreground">Next project</span>
            <span className="display mt-3 block text-[clamp(2.75rem,8vw,7rem)] transition-colors group-hover:text-brand">
              {next.title}
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
