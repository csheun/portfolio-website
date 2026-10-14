/**
 * All personal content lives here. Edit this file to update the site.
 * Everything below is PLACEHOLDER content — replace it with your own.
 * Images go in /public/projects (any format; 16:10 works best for covers).
 */

export type SocialLink = { label: string; href: string; handle: string };

export type Image = { src: string; alt: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  /** One sentence, shown in lists and metadata */
  summary: string;
  /** Long-form paragraphs for the detail page */
  description: string[];
  highlights: string[];
  role: string;
  year: number;
  tags: string[];
  links: { github?: string; live?: string };
  cover: Image;
  gallery: Image[];
  featured: boolean;
};

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type Milestone = { year: string; title: string; detail: string };

export type SkillGroup = { name: string; items: string[] };

export const site = {
  name: "Your Name",
  role: "Software engineer",
  /** Hero statement, split into lines for the reveal animation */
  headline: ["Building careful,", "fast interfaces", "for the web."],
  intro:
    "A short introduction in two or three sentences. Say what you build, who you build it for, and what you care about in the work.",
  location: "Your City",
  availability: "Open to new opportunities",
  email: "hello@example.com",
  url: "https://example.com",
  resumeUrl: "", // e.g. "/resume.pdf" — leave empty to hide
  socials: [
    { label: "GitHub", href: "https://github.com/your-handle", handle: "@your-handle" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", handle: "in/your-handle" },
    { label: "X", href: "https://x.com/your-handle", handle: "@your-handle" },
  ] satisfies SocialLink[],
};

export const bio: string[] = [
  "Open with who you are and what you do today. One or two sentences that someone could repeat to a colleague.",
  "Then describe how you work: the kinds of problems you like, the teams you have worked with, and the standards you hold yourself to.",
  "Close with something personal or what you are looking for next.",
];

export const experience: Experience[] = [
  {
    company: "Company name",
    role: "Role title",
    start: "2023",
    end: "Present",
    location: "City or Remote",
    summary: "One sentence on the team, the product, and your scope.",
    highlights: [
      "A concrete outcome you were responsible for.",
      "A system, feature, or process you built or improved.",
    ],
  },
  {
    company: "Company name",
    role: "Role title",
    start: "2020",
    end: "2023",
    location: "City or Remote",
    summary: "One sentence on the team, the product, and your scope.",
    highlights: [
      "A concrete outcome you were responsible for.",
      "A system, feature, or process you built or improved.",
    ],
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Accessibility"] },
  { name: "Backend", items: ["Node.js", "PostgreSQL", "REST & GraphQL"] },
  { name: "Tools", items: ["Git", "Figma", "Vercel", "Playwright"] },
];

/** Career timeline, oldest first */
export const timeline: Milestone[] = [
  { year: "2016", title: "Education", detail: "Degree, school, or how you started." },
  { year: "2020", title: "First role", detail: "Where you began working professionally." },
  { year: "2023", title: "Current role", detail: "What changed and what you took on." },
  { year: "Next", title: "What you want next", detail: "The kind of work you are looking for." },
];

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "One sentence describing what this project does and who it is for.",
    description: [
      "Describe the problem. What was hard or interesting about it, and why did it matter?",
      "Describe your approach: the decisions you made, the trade-offs, and the role you played.",
      "Describe the result. Use real numbers if you have them.",
    ],
    highlights: ["Key feature or decision", "Key feature or decision", "Key feature or decision"],
    role: "Design & engineering",
    year: 2025,
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    links: { github: "https://github.com/your-handle/project-one", live: "https://example.com" },
    cover: { src: "/projects/project-one.svg", alt: "Project One interface screenshot" },
    gallery: [
      { src: "/projects/project-one-detail.svg", alt: "Project One detail view", caption: "Caption describing this screen." },
    ],
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "One sentence describing what this project does and who it is for.",
    description: [
      "Describe the problem. What was hard or interesting about it, and why did it matter?",
      "Describe your approach: the decisions you made, the trade-offs, and the role you played.",
    ],
    highlights: ["Key feature or decision", "Key feature or decision"],
    role: "Frontend engineering",
    year: 2024,
    tags: ["React", "Motion", "Design systems"],
    links: { github: "https://github.com/your-handle/project-two" },
    cover: { src: "/projects/project-two.svg", alt: "Project Two interface screenshot" },
    gallery: [
      { src: "/projects/project-two-detail.svg", alt: "Project Two detail view", caption: "Caption describing this screen." },
    ],
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary: "One sentence describing what this project does and who it is for.",
    description: [
      "Describe the problem. What was hard or interesting about it, and why did it matter?",
      "Describe your approach: the decisions you made, the trade-offs, and the role you played.",
    ],
    highlights: ["Key feature or decision", "Key feature or decision"],
    role: "Full-stack engineering",
    year: 2023,
    tags: ["Node.js", "GraphQL", "Testing"],
    links: { live: "https://example.com" },
    cover: { src: "/projects/project-three.svg", alt: "Project Three interface screenshot" },
    gallery: [],
    featured: true,
  },
  {
    slug: "project-four",
    title: "Project Four",
    summary: "One sentence describing what this project does and who it is for.",
    description: ["Describe the problem, your approach, and the result."],
    highlights: ["Key feature or decision"],
    role: "Side project",
    year: 2022,
    tags: ["Python", "Data", "CLI"],
    links: { github: "https://github.com/your-handle/project-four" },
    cover: { src: "/projects/project-four.svg", alt: "Project Four interface screenshot" },
    gallery: [],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
