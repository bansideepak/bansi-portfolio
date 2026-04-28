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
            total 4 items
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`border border-matrix/20 group transition-all duration-300 relative overflow-hidden reveal stagger-${index + 1} neon-hover`}
            >
              <div className="absolute top-0 right-0 text-matrix text-[10px] px-2 py-1 border-b border-l border-matrix/20 group-hover:text-matrix-light">
                {project.id}
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-matrix-light">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-matrix px-1 border border-matrix/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-6 min-h-[5rem]">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  className="neon-link border border-matrix/20 px-4 py-2 text-sm uppercase inline-block transition-all duration-300"
                >
                  [Execute]
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
