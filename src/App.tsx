import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-black focus:text-matrix focus:px-4 focus:py-2 focus:border focus:border-matrix focus:text-sm focus:font-mono">
        Skip to content
      </a>
      <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Credentials />
      <Contact />
    </main>
    </>
  );
}
