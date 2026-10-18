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
  "Outside of work I build AI and machine learning projects, like a personal AI assistant that plans and runs tasks with live tools, and a forecasting pipeline for soybean futures prices.",
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
    summary:
      "A full-stack AI assistant that plans before it acts: an LLM drafts a plan, the backend validates it, steps run in parallel with live progress, and nothing is sent until you approve it.",
    description: [
      "You ask in plain language, for example “Check tomorrow's weather in Singapore, search for recent AI news, summarize both, and send the summary to Telegram.” An LLM turns that into a plan, the backend checks it, independent steps run at the same time while the browser shows live progress, and the message is only sent after you approve its exact text.",
      "The backend is FastAPI. A LangGraph planner asks the LLM (Groq, OpenAI or Anthropic through LangChain) for a structured plan and gives it one chance to repair a plan that fails validation. Every plan is checked against a typed tool registry before anything runs: registered tools only, valid arguments, no dependency cycles, size limits, and approval for anything that acts on the outside world. A single asyncio executor then runs the plan as a dependency graph, calling Open-Meteo for weather, Tavily for web search, the LLM for the summary and the Telegram Bot API for delivery.",
      "Every state change is an event. The backend applies events with a reducer and streams them over Server-Sent Events; the Next.js frontend applies the same events with a TypeScript twin of that reducer, so a page refresh or dropped connection resumes exactly where it left off. A fixture recorded from the Python executor is replayed in the frontend's tests to keep both sides in agreement.",
      "The LLM never executes anything: it returns a plan and Python decides what runs. The Telegram recipient is fixed in server configuration, the text you approve is frozen and sent at most once, and a send that Telegram doesn't confirm is reported as “delivery unknown” instead of being retried. Web content reaches the model fenced as untrusted data, and citations are limited to URLs the search actually returned.",
      "I built it in four milestones: a FastAPI and tool-calling foundation, a mock-driven frontend, the frontend-to-backend integration with SSE, and finally real LLM planning and real integrations. It can also run fully mocked, with no API keys, for demos and tests.",
    ],
    highlights: [
      "LangGraph planner with structured output, backend validation and one bounded repair attempt",
      "Plans validated against a typed tool registry (schemas, risk levels, timeouts) before execution",
      "Parallel DAG execution with asyncio and live progress over resumable Server-Sent Events",
      "Human-in-the-loop approvals with at-most-once Telegram delivery of the exact approved text",
      "The same event reducer in Python and TypeScript, kept in sync by a shared contract fixture",
      "Provider-agnostic LLM layer (Groq, OpenAI, Anthropic) with timeouts and token usage tracking",
      "230 automated tests across pytest, Vitest and Playwright (desktop and mobile), with network access blocked in unit tests",
    ],
    role: "Full-stack and AI engineering",
    year: 2026,
    inProgress: true,
    tags: ["Python", "FastAPI", "LangGraph", "LangChain", "TypeScript", "Next.js", "React", "Tailwind CSS", "Playwright"],
    links: { github: "https://github.com/csheun/personal-ai-assistant" },
    cover: {
      src: "/projects/personal-ai-assistant/cover.png",
      alt: "The assistant after a completed run: a summary of tomorrow's Singapore weather and recent AI news with cited sources, next to the run's timeline",
    },
    gallery: [
      {
        src: "/projects/personal-ai-assistant/plan.png",
        alt: "A plan proposed by the LLM, shown before anything runs",
        caption: "The plan the LLM proposed, shown before anything runs: weather and news in parallel, then a summary, then Telegram behind approval.",
      },
      {
        src: "/projects/personal-ai-assistant/running.png",
        alt: "The live timeline while the weather and search steps run at the same time",
        caption: "Live progress over Server-Sent Events. Independent steps run side by side on a shared timeline.",
      },
      {
        src: "/projects/personal-ai-assistant/approval.png",
        alt: "The approval card showing the exact Telegram message before it is sent",
        caption: "Nothing is sent until you approve. The card shows the exact text that will go out.",
      },
      {
        src: "/projects/personal-ai-assistant/architecture.png",
        alt: "Architecture diagram from the Next.js frontend through FastAPI, the planner, validator and executor to external services",
        caption: "Architecture: the LLM proposes a plan, the validator decides, and a single executor runs it and streams every change back to the browser.",
      },
      {
        src: "/projects/personal-ai-assistant/request-flow.png",
        alt: "Sequence diagram of one request from chat message to Telegram delivery",
        caption: "One request end to end, from the chat message to the approved Telegram delivery.",
      },
      {
        src: "/projects/personal-ai-assistant/completed-dark.png",
        alt: "A completed run in dark mode with the summary and its cited sources",
        caption: "A completed run in dark mode, with the summary's cited sources.",
      },
    ],
    featured: true,
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
