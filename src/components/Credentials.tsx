import { ScrollReveal } from "./ScrollReveal";
import { TerminalCard } from "./TerminalCard";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="py-24 px-4 md:px-6 relative z-20 bg-black"
      aria-label="Credentials"
    >
      <TerminalCard path="~/credentials">
        <p className="text-matrix-dark mb-4">$ cat education.log</p>
        <div className="text-gray-300 mb-8 border-l-2 border-matrix/20 pl-4 reveal stagger-1">
          <p className="text-matrix font-bold">
            B.Tech, Computer Science &amp; Engineering
          </p>
          <p className="text-xs mt-1">
            Talla Padmavathi College of Engineering
          </p>
          <p className="text-xs text-matrix-dark opacity-70 mt-1">
            2021 - 2025
          </p>
        </div>

        <p className="text-matrix-dark mb-4">$ cat certifications.log</p>
        <ul className="text-gray-300 space-y-2 list-disc list-inside pl-4 mb-4 reveal stagger-2">
          <li>
            <a
              href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=B68FCC0253F18758C640802558E542169247F8910E4D24EA865CAAA5F4EC4CA0"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link hover:text-matrix-light"
            >
              Oracle Cloud Infrastructure 2023 Certified Associate
            </a>
          </li>
          <li>
            <a
              href="https://badges.parchment.com/public/assertions/WBYKt7SFT_-y9xysk8eU3g"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-link hover:text-matrix-light"
            >
              Postman API Fundamentals Student Expert
            </a>
          </li>
        </ul>
        <ScrollReveal>
          <p className="mt-8 text-matrix typing-cursor">guest@system: ~$</p>
        </ScrollReveal>
      </TerminalCard>
    </section>
  );
}
