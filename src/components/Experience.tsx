import { ScrollReveal } from "./ScrollReveal";
import { TerminalCard } from "./TerminalCard";

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
            AI Engineer — Neurom Innovations
          </p>
          <p className="text-xs text-matrix-dark opacity-70 mt-1">
            Dec 2024 – Present | Hyderabad, India
          </p>
        </div>

        <p className="text-matrix-dark mb-4">$ cat responsibilities.log</p>
        <ul className="text-gray-300 space-y-3 list-none pl-4 mb-4 reveal stagger-2">
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Architected end-to-end RAG systems with schema-aware retrieval for high-accuracy LLM responses</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Built a multi-model inference gateway in FastAPI, routing between Gemini and OpenAI based on task complexity</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Led full-stack development of React/Next.js dashboards with async inference queues and real-time monitoring</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Delivered full-stack web applications across multiple projects — building React/Next.js frontends, FastAPI/Express backends, and integrating AI systems end-to-end</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Optimized LLM performance pipelines — benchmarked inference cost, throughput, caching, and structured prompting</span>
          </li>
        </ul>
        <ScrollReveal>
          <p className="mt-8 text-matrix typing-cursor">guest@system: ~$</p>
        </ScrollReveal>
      </TerminalCard>
    </section>
  );
}
