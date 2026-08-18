export interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  href: string;
}

export const projects: Project[] = [
  {
    id: "SYS_01",
    title: "Group-Booking & Travel Management Platform",
    tags: ["TypeScript", "NestJS", "PostgreSQL/Prisma", "Next.js", "Jest", "Vitest", "Playwright", "Docker"],
    description:
      "Legacy .NET modernization — reverse-engineered an undocumented travel-management system (~32K lines C#, ~9K lines T-SQL) into a documented business-rules catalog, then rebuilt it API-first: a NestJS modular monolith over PostgreSQL/Prisma with a Next.js staff admin, 110 REST endpoints and a 37-model schema. 601 automated tests across every layer — Jest for the API, Vitest for domain logic and web, Playwright for end-to-end in a real browser — with the pricing core built test-first: each booking pins the exact versioned price sheet it was quoted from, and all money lives in integer minor units so rounding can never drift a total. Database row locks serialize concurrent bookings before the capacity re-check, proven by a concurrency test that races real transactions against PostgreSQL. [In Progress]",
    href: "#",
  },
  {
    id: "SYS_02",
    title: "CORAX — AI Face-Recognition Attendance Platform",
    tags: ["FastAPI", "PostgreSQL/pgvector", "Celery", "InsightFace", "MediaPipe", "React", "React Native", "Docker"],
    description:
      "Multi-tenant attendance platform end-to-end — async FastAPI backend (66 endpoints), a React + TypeScript dashboard, and a React Native app sharing one typed package, shipped as a six-service Docker stack. Re-encrypted live biometric data with zero downtime: every encrypted record carries its own key version, so the system reads old and new formats side by side while records migrate. Closed 50 findings across two security audits — including two IDOR classes and a login timing leak — and cryptographically bound each encrypted face image to its owner (AES-256-GCM). A five-layer, 207-case test plan across API, integration, security, web and mobile surfaced 13 defects, each traced to its case ID.",
    href: "#",
  },
  {
    id: "SYS_03",
    title: "ASKENCE — Enterprise Text-to-SQL & Analytics Platform",
    tags: ["React 19", "TypeScript", "FastAPI", "LangChain", "Gemini", "PostgreSQL", "Docker"],
    description:
      "Enterprise Text-to-SQL platform on LangChain, choosing schema grounding over RAG retrieval after evaluating both: the full schema fits in the model's context, so retrieval would only add latency and a new way to fail. Collapsed 23 legacy region tables — ten of them silently double-counting totals — into one denormalised fact table, because every JOIN a model must generate is one more chance to get the query wrong. Blocked a class of silently-wrong answers with three independent guards: a prompt rule, a non-additive column detector, and a shared display classifier.",
    href: "#",
  },
  {
    id: "SYS_04",
    title: "ISVT Ground Station",
    tags: ["React", "TypeScript", "Express", "Cesium", "PostgreSQL", "Docker"],
    description:
      "Full-stack real-time LEO satellite tracking app with 3D Cesium globe rendering, SGP4 orbital propagation, Redis pub/sub telemetry, and containerized deployment. [In Progress]",
    href: "#",
  },
  {
    id: "SYS_05",
    title: "Neurom.com",
    tags: ["Next.js 15", "Sanity CMS", "GSAP", "Tailwind CSS v4"],
    description:
      "Company landing page with headless CMS content management, Next.js 15, Sanity CMS for dynamic content, GSAP & Framer Motion animations, and Tailwind CSS v4 styling.",
    href: "#",
  },
  {
    id: "SYS_06",
    title: "AI Call Automation",
    tags: ["React", "Python", "OpenAI", "Twilio", "AWS Bedrock"],
    description:
      "AI-powered call automation tool with OpenAI model comparison, Twilio STT/TTS integration for conversational flows, and scalable deployment via AWS Bedrock and EC2.",
    href: "#",
  },
  {
    id: "SYS_07",
    title: "SEARCHLIFT360",
    tags: ["Next.js 14", "FastAPI", "Docker", "AWS Amplify"],
    description:
      "Asynchronous AI SEO auditing engine with FastAPI Background Tasks for parallel deep-site audits, hybrid DOM + generative AI analysis, and automated PDF report generation.",
    href: "#",
  },
];
