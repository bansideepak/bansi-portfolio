import { ScrollReveal } from "./ScrollReveal";
import { TerminalCard } from "./TerminalCard";
import { skills } from "../data/skills";

export function About() {
  return (
    <section id="about" className="pt-16 pb-24 px-4 md:px-6 md:py-24 relative z-20 bg-black" aria-label="About">
      <TerminalCard path="~/about">
        <p className="text-matrix-dark mb-4">$ cat profile.txt</p>
        <div className="text-gray-300 space-y-4">
          <ScrollReveal stagger={1}>
            <p>
              <span className="text-matrix">Name:</span> Bansi Deepak Bollapally
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={2}>
            <p>
              <span className="text-matrix">Role:</span> Full Stack AI Engineer
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={3}>
            <p>
              <span className="text-matrix">Summary:</span> Full Stack AI
              Engineer with 3.5 years of hands-on experience building
              production web applications end-to-end: React/Next.js frontends,
              Node.js/TypeScript and Python/FastAPI backends, and PostgreSQL
              data layers. Writes tests first (Jest, Vitest, Playwright) and
              treats untested code as unfinished. Modernized a legacy .NET
              system into a fully tested TypeScript platform, and ships AI
              features that survive production: RAG pipelines, multi-model
              routing, and guardrails built on LangChain and the OpenAI/Gemini
              SDKs.
            </p>
          </ScrollReveal>
          <p className="text-matrix-dark mt-6 mb-2 reveal stagger-4">
            $ ./list_skills.sh
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 text-xs reveal stagger-5">
            {skills.map((skill, i) => (
              <div
                key={skill}
                className={`border border-matrix/20 p-2 text-matrix hover:bg-matrix hover:text-black hover:drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] active:bg-matrix active:text-black active:drop-shadow-[0_0_12px_rgba(74,222,128,0.4)] transition-all duration-300 reveal stagger-${(i % 5) + 1}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 text-matrix typing-cursor">guest@system: ~$</p>
        <a
          href="/Bansi-Deepak-Bollapally.pdf"
          download
          className="mt-4 inline-block font-mono text-xs text-matrix border border-matrix/30 px-6 py-2 uppercase hover:bg-matrix/10 transition-colors duration-200"
        >
          $ download resume
        </a>
      </TerminalCard>
    </section>
  );
}
