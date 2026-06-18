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
    title: "CORAX — AI Face-Recognition Attendance Platform",
    tags: ["FastAPI", "PostgreSQL/pgvector", "Celery", "InsightFace", "MediaPipe", "React", "React Native", "Docker"],
    description:
      "Multi-tenant face-recognition attendance platform — async FastAPI backend (81 REST endpoints), React + TypeScript dashboard, and React Native app in a 7-service Docker stack. Real-time pipeline pairing MediaPipe 468-landmark detection with InsightFace 512-dim embeddings and pgvector search; Celery video processing and AES-256-GCM/JWT security. [In Progress]",
    href: "#",
  },
  {
    id: "SYS_02",
    title: "ASKENCE Platform",
    tags: ["React 19", "FastAPI", "LangChain", "Gemini", "PostgreSQL", "Docker"],
    description:
      "AI-powered conversational analytics dashboard — managers ask in plain English and get instant charts and summaries. Dual-model LangChain architecture with Gemini, auto-selecting Plotly chart types, smart aggregation, and React 19 chat UI.",
    href: "#",
  },
  {
    id: "SYS_03",
    title: "ISVT Ground Station",
    tags: ["React", "TypeScript", "Express", "Cesium", "PostgreSQL", "Docker"],
    description:
      "Full-stack real-time LEO satellite tracking app with 3D Cesium globe rendering, SGP4 orbital propagation, Redis pub/sub telemetry, and containerized deployment. [In Progress]",
    href: "#",
  },
  {
    id: "SYS_04",
    title: "Neurom.com",
    tags: ["Next.js 15", "Sanity CMS", "GSAP", "Tailwind CSS v4"],
    description:
      "Company landing page with headless CMS content management, Next.js 15, Sanity CMS for dynamic content, GSAP & Framer Motion animations, and Tailwind CSS v4 styling.",
    href: "#",
  },
  {
    id: "SYS_05",
    title: "AI Call Automation",
    tags: ["React", "Python", "OpenAI", "Twilio", "AWS Bedrock"],
    description:
      "AI-powered call automation tool with OpenAI model comparison, Twilio STT/TTS integration for conversational flows, and scalable deployment via AWS Bedrock and EC2.",
    href: "#",
  },
  {
    id: "SYS_06",
    title: "SEARCHLIFT360",
    tags: ["Next.js 14", "FastAPI", "Docker", "AWS Amplify"],
    description:
      "Asynchronous AI SEO auditing engine with FastAPI Background Tasks for parallel deep-site audits, hybrid DOM + generative AI analysis, and automated PDF report generation.",
    href: "#",
  },
];
