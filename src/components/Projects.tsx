import { projects } from "../data/projects";

/** Alternating split keeps the left-to-right reading order of the old grid. */
const columns = [
  projects.filter((_, i) => i % 2 === 0),
  projects.filter((_, i) => i % 2 === 1),
];

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

        {/* Two independent columns rather than a grid: grid rows are shared, so
            expanding one card would push every card in the next row down. Here a
            card only ever moves the cards beneath it in its own column.
            Below md the columns are display:contents, so all cards collapse into
            this one flex column and the inline order restores 1..n. */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 md:items-start">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="contents md:flex md:flex-col md:gap-8">
              {column.map((project) => {
                const index = projects.indexOf(project);
                return (
                  <article
                    key={project.id}
                    tabIndex={0}
                    aria-label={project.title}
                    style={{ order: index }}
                    className={`group relative outline-none reveal stagger-${(index % 4) + 1}`}
                  >
                    {/* The face never changes on hover — same title, caption,
                        pills and summary. min-h only evens out the last line of
                        summary text; the cards are within ~50px without it. */}
                    <div className="relative bg-[#050505] border border-matrix/20 group-hover:border-matrix/60 group-focus-visible:border-matrix/60 transition-colors duration-300 p-6 md:p-8 md:min-h-68 flex flex-col gap-4">
                      <span className="absolute top-0 right-0 text-matrix text-[10px] px-2 py-1 border-b border-l border-matrix/20 group-hover:text-matrix-light">
                        {project.id}
                      </span>

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

                    {/* Detail unfolds downward in flow, so cards below are pushed
                        rather than covered. The 0fr→1fr row must sit on a
                        statically-positioned element — inside an absolutely
                        positioned grid the block size is indefinite and 1fr
                        collapses to zero. Animating the row rather than a
                        max-height guess reaches the content's natural height and
                        is symmetric, so collapsing eases as smoothly as opening. */}
                    <div className="md:grid md:grid-rows-[0fr] md:transition-[grid-template-rows] md:duration-300 md:ease-out md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                      <div className="md:overflow-hidden">
                        <div className="px-6 pb-6 md:px-8 md:py-5 md:bg-[#050505] md:border md:border-t-0 md:border-matrix/60">
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
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
