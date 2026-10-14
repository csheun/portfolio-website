/**
 * All personal content lives here. Edit this file to update the site.
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
  role?: string;
  /** Marks unfinished work; shows an "In progress" label */
  inProgress?: boolean;
  /** Optional; omit if unknown */
  year?: number;
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
  name: "Chen Shun",
  role: "Software engineer",
  /** Hero statement, split into lines for the reveal animation */
  headline: ["Software engineer", "across cloud,", "systems and data."],
  intro:
    "Computer Science graduate from the National University of Singapore. I've worked on a DevSecOps platform at DSTA, financial software at Quantedge, autonomous vehicle systems at Venti Technologies, and backend services at GovTech.",
  location: "Singapore",
  availability: "Open to new opportunities",
  email: "chenshun2006@gmail.com",
  url: "https://example.com",
  resumeUrl: "", // e.g. "/resume.pdf" — leave empty to hide
  socials: [
    { label: "GitHub", href: "https://github.com/csheun", handle: "@csheun" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/chenshun", handle: "in/chenshun" },
    // { label: "X", href: "https://x.com/your-handle", handle: "@your-handle" },
  ] satisfies SocialLink[],
};

export const bio: string[] = [
  "I'm a software engineer based in Singapore. I studied Computer Science at the National University of Singapore, focusing on parallel computing, computer networks, and distributed systems.",
  "My work spans backend services, robotics, finance, and cloud infrastructure: NestJS APIs and Camunda workflows at GovTech, autonomous vehicle software and hardware-in-the-loop testing at Venti Technologies, scaling financial systems at Quantedge, and running a DevSecOps platform at DSTA.",
  "Outside of work I build machine learning projects, like a forecasting pipeline for soybean futures prices.",
];

export const experience: Experience[] = [
  {
    company: "Defence Science and Technology Agency (DSTA)",
    role: "Project Manager, Cloud & Infrastructure",
    start: "Nov 2025",
    end: "Mar 2026",
    location: "Singapore",
    summary:
      "Managed an internal DevSecOps platform that lets software engineering teams onboard projects and accelerate development within required security environments.",
    highlights: [
      "Evaluated and onboarded new developer and security technologies, including scanning tools, by assessing technical requirements and integration with the existing platform.",
      "Worked with software engineers to understand application requirements, assess platform suitability, and support project onboarding.",
      "Coordinated infrastructure upgrades and capacity expansion, including server procurement and network connectivity requirements.",
    ],
  },
  {
    company: "Quantedge",
    role: "Software Engineer Intern",
    start: "Jun 2025",
    end: "Jul 2025",
    location: "Singapore",
    summary: "Built features and improved scalability in production financial software systems.",
    highlights: [
      "Implemented new features in production-grade legacy codebases, minimizing regression risk through testing and safe development practices.",
      "Debugged and analyzed complex financial software systems to find issues and ship changes across unfamiliar codebases.",
      "Improved system scalability through horizontal and vertical scaling, and integrated KEDA for event-driven autoscaling.",
    ],
  },
  {
    company: "Venti Technologies",
    role: "Software Engineer Intern",
    start: "Aug 2024",
    end: "Oct 2024",
    location: "Singapore",
    summary: "Worked on C++ and ROS software for autonomous vehicle systems.",
    highlights: [
      "Maintained C++ and ROS software components supporting autonomous vehicle systems.",
      "Developed hardware-in-the-loop (HiL) tests to validate autonomous vehicle functionality and catch software regressions.",
      "Contributed to an automated regression testing tool to improve system reliability and test coverage.",
    ],
  },
  {
    company: "GovTech Singapore",
    role: "Software Engineer Intern",
    start: "May 2023",
    end: "Jun 2024",
    location: "Singapore",
    summary: "Built backend services for an RFID-based smart facility management platform for asset tracking and operational workflows.",
    highlights: [
      "Designed and implemented NestJS REST APIs and Camunda workflows to automate business processes and integrate system components.",
      "Integrated IoT data streams into centralized backend systems, enabling real-time data processing and operational analytics.",
      "Worked with engineers and stakeholders to develop, test, and maintain backend features across the platform.",
    ],
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["Python", "C++", "JavaScript", "SQL", "Go", "Rust", "VBA"] },
  { name: "Frameworks & technologies", items: ["NestJS", "React", "ROS", "Docker", "AWS", "MongoDB", "Camunda"] },
  { name: "Data & ML", items: ["Pandas", "Scikit-learn", "XGBoost", "Hadoop", "Spark"] },
  { name: "Systems", items: ["Linux", "Git", "Computer networks", "Distributed systems", "Operating systems", "CUDA"] },
  { name: "Spoken languages", items: ["English", "Mandarin"] },
];

/** Career timeline, oldest first */
export const timeline: Milestone[] = [
  { year: "2021", title: "National University of Singapore", detail: "Started a Bachelor of Computing in Computer Science." },
  { year: "2023", title: "GovTech Singapore", detail: "Software Engineer Intern, building backend services for a smart facility management platform." },
  { year: "2024", title: "Venti Technologies", detail: "Software Engineer Intern on autonomous vehicle software and testing." },
  { year: "2025", title: "Graduated from NUS", detail: "Computer Science, GPA 4.54 / 5.00. Interned at Quantedge on financial software systems." },
  { year: "2025", title: "DSTA", detail: "Project Manager, Cloud & Infrastructure, running an internal DevSecOps platform." },
];

export const projects: Project[] = [
  {
    slug: "personal-ai-assistant",
    title: "Personal AI Assistant",
    summary: "A personal AI assistant, currently in development.",
    description: ["This project is in progress. Details will be added as it takes shape."],
    highlights: [],
    tags: [],
    links: {},
    cover: { src: "/projects/ai-assistant.svg", alt: "Personal AI Assistant placeholder image" },
    gallery: [],
    featured: true,
    inProgress: true,
  },
  {
    slug: "soybean-futures-price-predictor",
    title: "Soybean Futures Price Predictor",
    summary: "A machine learning pipeline and interactive app that forecasts soybean futures prices from historical market data.",
    description: [
      "An end-to-end machine learning pipeline that forecasts soybean futures prices using historical time-series data from Yahoo Finance.",
      "I engineered lag and moving-average features, trained XGBoost and Random Forest models, and compared their performance using RMSE.",
      "An interactive Streamlit app lets you experiment with the models in real time and configure hyperparameters.",
    ],
    highlights: [
      "End-to-end pipeline from data ingestion to prediction",
      "Lag and moving-average feature engineering",
      "XGBoost and Random Forest models evaluated with RMSE",
      "Streamlit app for live experimentation and hyperparameter tuning",
    ],
    role: "Machine learning engineering",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit"],
    links: {}, // add { github: "...", live: "..." } to show buttons
    cover: { src: "/projects/soybean-futures.svg", alt: "Soybean Futures Price Predictor placeholder image" },
    gallery: [],
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
