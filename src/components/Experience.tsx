import { ScrollReveal } from "./ScrollReveal";
import { TerminalCard } from "./TerminalCard";

const responsibilities = [
  "Build web applications end-to-end, from React/Next.js frontends through Node.js/Express and FastAPI services to PostgreSQL data layers, turning business requirements into shipped features alongside senior developers and architects",
  "Own quality test-first: unit, functional, end-to-end and regression suites (Jest, Vitest, Playwright, Supertest) wired into GitHub CI/CD so defects surface before release, with TDD on high-risk business logic",
  "Ship AI features into real products: LLM-backed workflows, retrieval agents, and schema-aware RAG pipelines built with LangChain and the OpenAI/Gemini SDKs, with guardrails (restricted tool-calling, structured output) that keep hallucinations out of user-facing answers",
  "Built a multi-model inference gateway in FastAPI that routes each request between Gemini and OpenAI models based on task complexity, latency budget, and cost",
  "Use AI coding tools daily (Claude Code, GitHub Copilot) for scaffolding, refactoring, test generation and code review, build custom MCP servers that give those tools project context, and recommend new AI tooling where the gain is measurable",
  "Work the full Agile cycle, from sprint planning and story writing through regression testing, UAT and demos, and share a support rotation covering incident triage, root-cause analysis, and hotfix delivery",
  "Keep long-running services production-healthy: dependency and framework upgrades, containerized Docker/Kubernetes deploys, and health and observability checks",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-6 relative z-20 bg-[#050505]"
      aria-label="Experience"
    >
      <TerminalCard path="~/experience">
        <p className="text-matrix-dark mb-4">$ cat work_history.log</p>
        <div className="text-gray-300 mb-6 border-l-2 border-matrix/20 pl-4 reveal stagger-1">
          <p className="text-matrix font-bold">
            Full Stack AI Engineer — Neurom Innovations
          </p>
          <p className="text-xs text-matrix-dark opacity-70 mt-1">
            Dec 2024 – Present | Hyderabad, India
          </p>
        </div>

        <p className="text-matrix-dark mb-4">$ cat responsibilities.log</p>
        <ul className="text-gray-300 space-y-3 list-none pl-4 mb-4 reveal stagger-2">
          {responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-matrix mt-1">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <ScrollReveal>
          <p className="mt-8 text-matrix typing-cursor">guest@system: ~$</p>
        </ScrollReveal>
      </TerminalCard>
    </section>
  );
}
