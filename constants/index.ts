// ------------------------------------------------------------------
// Single source of truth for all site content.
// Update text/data here — components read from these exports.
// ------------------------------------------------------------------

export const profile = {
  name: "Saurabh Goyal",
  role: "Full-Stack Software Engineer",
  // Hero headline — the accent word is styled separately in the Hero.
  headlineLead: "I build AI products",
  headlineAccent: "that ship.",
  blurb:
    "Full-stack engineer with 2+ years building production AI applications — scalable REST APIs, LLM workflows, RAG pipelines, and customer-facing SaaS.",
  location: "Bengaluru, India",
  availability: "Open to new opportunities",
  email: "sgoyalsmvj@gmail.com",
  phone: "+91 76908 69135",
  resume: "/SaurabhGoyal-Resume.pdf",
};

// Headline metrics — the signature element. Reused as impact chips.
export const metrics = [
  { value: "50s→3s", label: "ad-search query time", note: "FastAPI + OpenSearch" },
  { value: "10–20k", label: "Meta ads ingested / day", note: "EC2 → SQS → Lambda" },
  { value: "100+", label: "customers on tools I shipped", note: "creative analysis at QuickAds" },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  stack: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Sonata Software",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Jun 2025 — Present",
    current: true,
    stack: ["Python", "FastAPI", "LangChain", "Gemini", "FAISS", "PostgreSQL"],
    highlights: [
      "Built an HRP fuzzy-matching engine against watchlists, tiering broker matches (Exact / Possible / No Match) by NMLS ID and name, paired with a LexisNexis PDF-scanning pipeline that flags bankruptcy, liens, and derogatory credit for analyst risk dashboards.",
      "Designed a lead-scoring pipeline: call transcription feeding LangChain + Gemini across 4 structured prompt chains (sentiment/intent, semantic/discourse, emotional metrics, conversation structure), plus a scoring layer that prioritizes leads.",
      "Implemented score versioning (version, calls analyzed, call-ID snapshots) to recalculate scores incrementally as new calls arrive, without losing past context.",
      "Shipped a RAG document Q&A POC — embeddings indexed in FAISS for similarity search, with Gemini generating grounded, context-aware answers over uploaded documents.",
    ],
  },
  {
    company: "QuickAds.ai",
    role: "Software Engineer · Founding Team",
    location: "Remote",
    period: "Jul 2024 — Jun 2025",
    stack: ["FastAPI", "OpenSearch", "AWS", "React", "TypeScript", "GPT"],
    highlights: [
      "Built the ad-search experience end to end — a FastAPI + OpenSearch backend that cut query time from 50s to 3s, with filtering, sorting, and pagination responding in under a second across millions of ads.",
      "Designed an ingestion pipeline (EC2 scrapers → SQS → Lambda) pulling 10,000–20,000 Meta ads daily, decoupling scraping from GPT analysis so ads hit the Discover page immediately, with status tracking and batch reprocessing.",
      "Shipped an automated creative-analysis tool used by 100+ customers, replacing manual review with LLM scoring of ad hook, structure, and thumbnail — plus the full upload and processing frontend.",
      "Built competitor tracking across 200+ brands, detecting newly launched ads via a scheduled job and replacing 8+ hours/week of manual monitoring with automated weekly email reports via Amazon SES.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  demo?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    title: "Midnight Mile",
    blurb:
      "A safety-first navigation app that scores walking routes by crime, lighting, and foot traffic — with periodic AI voice check-ins, distress-keyword triggers, and automated alerts to trusted contacts.",
    stack: ["Next.js", "TypeScript", "Google Maps API", "ElevenLabs", "Gemini", "Supabase"],
    demo: "", // TODO: add live demo URL when available
    code: "https://github.com/sgoyalsmvj",
  },
  {
    title: "AI Mail Assistant",
    blurb:
      "An AI Gmail client that turns natural-language commands into schema-validated actions — send, reply, forward, filter — via OpenAI Structured Outputs over an OAuth-secured Gmail integration.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Gmail API"],
    demo: "", // TODO: add live demo URL when available
    code: "https://github.com/sgoyalsmvj",
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "C++"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Selenium", "BeautifulSoup"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "OpenSearch", "Supabase", "FAISS"] },
  { label: "AI / ML", items: ["OpenAI API", "Gemini", "LangChain", "RAG Pipelines", "Embeddings", "Vector Search"] },
  { label: "Cloud & Infra", items: ["AWS (Lambda · SQS · EC2 · S3)", "Docker", "GitHub Actions (CI/CD)"] },
  { label: "Tools", items: ["Git", "Postman", "Cursor", "GitHub Copilot", "Claude Code", "VS Code"] },
];

export type Social = { name: "GitHub" | "LinkedIn" | "Twitter" | "Email"; handle: string; href: string };

export const socials: Social[] = [
  { name: "GitHub", handle: "sgoyalsmvj", href: "https://github.com/sgoyalsmvj" },
  { name: "LinkedIn", handle: "in/saurabhgoyal12", href: "https://www.linkedin.com/in/saurabhgoyal12/" },
  { name: "Twitter", handle: "@SgxZoro", href: "https://twitter.com/SgxZoro" },
  { name: "Email", handle: "sgoyalsmvj@gmail.com", href: "mailto:sgoyalsmvj@gmail.com" },
];

// Navbar anchor links.
export const navLinks = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
