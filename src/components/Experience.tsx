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
            <span>Architected end-to-end RAG systems using schema-aware retrieval, enabling high-accuracy LLM responses for enterprise data sources</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Built a dynamic multi-model inference gateway in FastAPI, routing traffic between Google Gemini and OpenAI based on task complexity, latency budget, and cost-efficiency</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Built production computer-vision pipelines — real-time face detection, deep face-embedding models, and pgvector similarity search — powering a multi-tenant biometric attendance platform with AES-256-GCM-encrypted PII</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Engineered real-time geospatial and signal-processing systems — live WebGL satellite-orbit tracking and SDR pipelines (FFT, FM demodulation) — on event-driven Node.js/TypeScript microservices</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Reduced hallucinations by designing enterprise-grade guardrails, including policy-driven validation, tool-calling restrictions, and structured output enforcement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Led full-stack development of internal AI pilots — React/Next.js dashboards, asynchronous inference queues, and real-time task monitoring</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Delivered full-stack web applications across multiple client projects — building React/Next.js frontends, FastAPI/Express backends, and integrating AI systems end-to-end</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-matrix mt-1">▸</span>
            <span>Optimized LLM performance pipelines — benchmarking inference cost, throughput, and caching layers, and implementing structured prompting frameworks</span>
          </li>
        </ul>
        <ScrollReveal>
          <p className="mt-8 text-matrix typing-cursor">guest@system: ~$</p>
        </ScrollReveal>
      </TerminalCard>
    </section>
  );
}
