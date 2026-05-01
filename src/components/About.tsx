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
              <span className="text-matrix">Role:</span> AI Engineer
            </p>
          </ScrollReveal>
          <ScrollReveal stagger={3}>
            <p>
              <span className="text-matrix">Summary:</span> Innovative AI
              Engineer specializing in Generative AI Architectures, LLM
              Reasoning Engines, and Conversational AI Systems. Experienced in
              designing and deploying production-grade AI platforms using
              FastAPI, microservices, and modern tech stacks.
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
      </TerminalCard>
    </section>
  );
}
