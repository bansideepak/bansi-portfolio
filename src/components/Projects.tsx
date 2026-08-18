import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-6 bg-[#050505] relative z-20" aria-label="Projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12 border-b border-matrix/20 pb-4 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-matrix tracking-tighter neon-hover">
            // DIRECTORIES
          </h2>
          <span className="text-matrix-dark text-xs hidden md:inline">
            total {projects.length} items · hover to expand
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          {projects.map((project, index) => (
            <article
              key={project.id}
              tabIndex={0}
              aria-label={project.title}
              className={`group relative border border-matrix/20 overflow-hidden outline-none transition-colors duration-300 hover:border-matrix/60 focus-visible:border-matrix/60 md:h-[21rem] reveal stagger-${(index % 4) + 1}`}
            >
              <span className="absolute top-0 right-0 z-10 text-matrix text-[10px] px-2 py-1 border-b border-l border-matrix/20 group-hover:text-matrix-light">
                {project.id}
              </span>

              {/* Resting face: enough to judge the project, never a wall of text. */}
              <div className="p-6 md:p-8 flex flex-col gap-4 h-full">
                <header className="pr-14">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug group-hover:text-matrix-light transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-matrix-dark text-xs mt-1">{project.subtitle}</p>
                  )}
                </header>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-matrix/80 px-1.5 py-0.5 border border-matrix/20"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.status && (
                    <span className="text-[10px] text-black bg-matrix/80 px-1.5 py-0.5">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{project.summary}</p>

                <span className="hidden md:block mt-auto text-matrix-dark text-[10px] opacity-60 group-hover:opacity-0 transition-opacity duration-200">
                  $ cat details.log
                </span>
              </div>

              {/* Detail: an overlay on desktop, so expanding never reflows the grid.
                  Below md there is no hover, so the same markup sits inline instead. */}
              <div
                className="px-6 pb-6 md:p-6 md:absolute md:inset-0 md:bg-[#050505] md:overflow-y-auto md:flex md:flex-col md:opacity-0 md:pointer-events-none md:transition-opacity md:duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100"
              >
                {/* my-auto, not justify-center: centering an overflowing flex child
                    makes its top scroll-unreachable, which clipped the title here. */}
                <div className="md:my-auto">
                  {/* The overlay covers the title, so restate it — otherwise the
                      bullets arrive with nothing to attach them to. */}
                  <p className="hidden md:block text-matrix text-xs font-bold mb-1 pr-14 truncate">
                    {project.title}
                  </p>
                  <p className="hidden md:block text-matrix-dark text-[10px] mb-3">
                    $ cat details.log
                  </p>
                  <ul className="space-y-2 border-t border-matrix/20 pt-4 md:border-t-0 md:pt-0">
                    {project.highlights.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-gray-300 text-[11px] md:text-xs leading-relaxed">
                        <span className="text-matrix mt-0.5 shrink-0">▸</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
