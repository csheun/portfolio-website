import { getProject, projects, site } from "@/content/portfolio";
import { ogSize, renderOg } from "@/lib/og";

export const alt = `Project by ${site.name}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  return renderOg(project?.title ?? site.name, project?.summary ?? site.role);
}
