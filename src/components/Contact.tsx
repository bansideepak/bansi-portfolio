import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-4 md:px-6 relative z-20 bg-black/90"
      aria-label="Contact"
    >
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal stagger={1}>
          <p className="text-matrix-dark text-sm mb-4">&gt; EOF</p>
        </ScrollReveal>
        <ScrollReveal stagger={2}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-widest neon-hover">
            Initiate Connection
          </h2>
        </ScrollReveal>
        <ScrollReveal stagger={3}>
          <a
            href="mailto:bansideepak2000@gmail.com"
            className="inline-block text-xl md:text-4xl neon-link border-b border-matrix pb-2"
          >
            bansideepak2000@gmail.com
          </a>
        </ScrollReveal>

        <ScrollReveal stagger={4} className="mt-6">
          <a
            href="tel:+917330056795"
            className="inline-block text-lg neon-link text-matrix-light border-b border-matrix-light/50 pb-1"
          >
            +91-7330056795
          </a>
        </ScrollReveal>

        <footer className="mt-20 text-xs text-matrix-dark opacity-50 flex flex-col md:flex-row justify-between items-center reveal stagger-5">
          <p>
            &copy; {new Date().getFullYear()} Bansi Deepak Bollapally. All
            systems operational.
          </p>
          <p className="mt-2 md:mt-0">Design based on neural net sector 7G.</p>
        </footer>
      </div>
    </section>
  );
}
