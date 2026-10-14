import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ProjectImage } from "./project-image";
import { InProgressLabel } from "./status-label";
import { TagList } from "./tag-list";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <article className="group relative">
      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-secondary">
        <ProjectImage
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-quint group-hover:scale-[1.025]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl tracking-tight transition-colors group-hover:text-brand">
          <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h2>
        {project.year && <p className="text-sm text-muted-foreground tabular-nums">{project.year}</p>}
      </div>
      {project.inProgress && (
        <div className="mt-3">
          <InProgressLabel />
        </div>
      )}
      <p className="mt-2 max-w-[52ch] text-muted-foreground">{project.summary}</p>
      {project.tags.length > 0 && <TagList tags={project.tags} className="mt-4" />}
    </article>
  );
}
