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
    title: "ASKENCE Platform",
    tags: ["LangChain", "FastAPI", "Gemini"],
    description:
      "Enterprise Text-to-SQL & Analytics Platform. Advanced LLM-based text-to-SQL RAG using LangChain with schema injection for accurate queries. Built a SQL Validation & Rewriting Engine.",
    href: "#",
  },
  {
    id: "SYS_02",
    title: "Dynamic Viz Engine",
    tags: ["React", "TypeScript", "Vite"],
    description:
      "Classifies output types (categorical/time-series/numerical) and renders appropriate visualizations. Containerized full-stack application with Docker. Integrated FastAPI backend.",
    href: "#",
  },
  {
    id: "SYS_03",
    title: "AI Call Automation",
    tags: ["React", "Python", "OpenAI"],
    description:
      "Tool for comparing OpenAI models with structured prompts. Implemented Twilio integration with STT and TTS for automated conversational flows. Deployed via AWS Bedrock.",
    href: "#",
  },
  {
    id: "SYS_04",
    title: "SEARCHLIFT360",
    tags: ["Next.js 14", "Docker", "AWS Amplify"],
    description:
      "Asynchronous AI SEO Auditing Engine. Architected a scalable asynchronous crawling engine using FastAPI Background Tasks, enabling parallel deep-site audits.",
    href: "#",
  },
];
