export interface Project {
  id: string;
  title: string;
  /** Qualifier shown under the title, e.g. the kind of work rather than the product name. */
  subtitle?: string;
  status?: string;
  tags: string[];
  /** One or two lines. Always visible — this is what the card is judged on at a glance. */
  summary: string;
  /** Revealed on hover (desktop) or inline (mobile). Keep each to a single line. */
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "SYS_01",
    title: "Group-Booking & Travel Platform",
    subtitle: "Legacy .NET Modernization",
    status: "In Progress",
    tags: ["TypeScript", "NestJS", "PostgreSQL/Prisma", "Next.js"],
    summary:
      "Rebuilt an undocumented .NET travel system as an API-first TypeScript platform — 110 REST endpoints over a 37-model schema.",
    highlights: [
      "Reverse-engineered ~32K lines of C# and ~9K lines of T-SQL into a documented business-rules catalog",
      "601 automated tests across every layer — Jest, Vitest, Playwright — with the pricing core built test-first",
      "Bookings pin the exact versioned price sheet they were quoted from; money in integer minor units, so rounding never drifts a total",
      "Row locks serialize concurrent bookings before the capacity re-check, proven by a test racing real PostgreSQL transactions",
    ],
  },
  {
    id: "SYS_02",
    title: "CORAX",
    subtitle: "AI Face-Recognition Attendance Platform",
    tags: ["FastAPI", "pgvector", "Celery", "React Native", "Docker"],
    summary:
      "Multi-tenant attendance platform — async FastAPI backend of 66 endpoints, React dashboard and React Native app in a six-service Docker stack.",
    highlights: [
      "Re-encrypted live biometric data with zero downtime — every record carries its own key version, so old and new formats read side by side",
      "Closed 50 findings across two security audits, including two IDOR classes and a login timing leak",
      "Cryptographically bound each encrypted face image to its owner with AES-256-GCM",
      "A five-layer, 207-case test plan surfaced 13 defects, each traced back to its case ID",
    ],
  },
  {
    id: "SYS_03",
    title: "ASKENCE",
    subtitle: "Enterprise Text-to-SQL & Analytics",
    tags: ["React 19", "FastAPI", "LangChain", "Gemini", "PostgreSQL"],
    summary:
      "Enterprise Text-to-SQL on LangChain — chose schema grounding over RAG retrieval after evaluating both.",
    highlights: [
      "The full schema fits in the model's context, so retrieval would only have added latency and a new way to fail",
      "Collapsed 23 legacy region tables — ten of them silently double-counting totals — into one denormalised fact table",
      "Every JOIN a model must generate is one more chance to get the query wrong",
      "Three independent guards block silently-wrong answers: a prompt rule, a non-additive column detector, and a shared display classifier",
    ],
  },
  {
    id: "SYS_04",
    title: "ISVT Ground Station",
    subtitle: "Real-Time Satellite Tracking",
    status: "In Progress",
    tags: ["React", "TypeScript", "Cesium", "PostgreSQL"],
    summary:
      "Live LEO satellite tracking on a 3D Cesium globe, driven by SGP4 orbital propagation.",
    highlights: [
      "Redis pub/sub carries telemetry to the browser in real time",
      "SGP4 propagation computes orbital position from TLE data",
      "Containerized full-stack deployment",
    ],
  },
  {
    id: "SYS_05",
    title: "Neurom.com",
    subtitle: "Company Landing Page",
    tags: ["Next.js 15", "Sanity CMS", "GSAP", "Tailwind CSS v4"],
    summary:
      "Marketing site on Next.js 15 with a Sanity headless CMS behind it, so content ships without a deploy.",
    highlights: [
      "Sanity CMS models every section, editable by non-developers",
      "GSAP and Framer Motion drive the scroll and transition work",
      "Tailwind CSS v4 design system",
    ],
  },
  {
    id: "SYS_06",
    title: "AI Call Automation",
    subtitle: "Conversational Voice Agent",
    tags: ["React", "Python", "OpenAI", "Twilio", "AWS Bedrock"],
    summary:
      "Automated calling tool that runs conversational flows over Twilio speech-to-text and text-to-speech.",
    highlights: [
      "Side-by-side OpenAI model comparison for response quality",
      "Twilio STT/TTS wired into a turn-taking conversation loop",
      "Scalable deployment via AWS Bedrock and EC2",
    ],
  },
  {
    id: "SYS_07",
    title: "SEARCHLIFT360",
    subtitle: "AI SEO Auditing Engine",
    tags: ["Next.js 14", "FastAPI", "Docker", "AWS Amplify"],
    summary:
      "Asynchronous auditing engine that crawls a whole site in parallel and reports what to fix.",
    highlights: [
      "FastAPI background tasks run deep-site audits in parallel",
      "Hybrid analysis pairing DOM inspection with generative AI review",
      "Automated PDF report generation",
    ],
  },
];
