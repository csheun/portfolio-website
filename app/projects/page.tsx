import type { Metadata } from "next";
import { ContactCta } from "@/components/contact-cta";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects in design and engineering.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      <PageHeader title="Work">
        <p>Products, tools, and experiments. Each project page covers the problem, my role, and what shipped.</p>
      </PageHeader>
      <div className="shell grid gap-x-10 gap-y-20 md:grid-cols-2">
        {sorted.map((project, i) => (
          <div key={project.slug} className={i % 2 === 1 ? "md:mt-32" : undefined}>
            <ProjectCard project={project} priority={i < 2} />
          </div>
        ))}
      </div>
      <ContactCta />
    </>
  );
}
