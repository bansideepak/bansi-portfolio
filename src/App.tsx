import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Projects />
      <Credentials />
      <Contact />
    </main>
  );
}
