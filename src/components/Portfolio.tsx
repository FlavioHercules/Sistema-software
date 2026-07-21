import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import ProjectDetailModal from './ProjectDetailModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projetos" className="relative py-24 sm:py-32 bg-tech-50/50 overflow-hidden">
      <div className="absolute top-1/3 left-0 h-[350px] w-[350px] rounded-full bg-tech-200/40 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-700">
              Projetos & Portfólio
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-900">
              Cases de{' '}
              <span className="text-gradient-eco">sucesso</span>
            </h2>
          </div>
          <p className="max-w-md text-tech-500">
            Uma amostra de projetos que entregamos com impacto real e mensurável
            para nossos clientes.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="reveal group relative overflow-hidden rounded-3xl border border-tech-100 bg-white shadow-sm card-hover hover:border-eco-200 cursor-pointer transition-all"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-900/80 via-tech-900/10 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-eco-700">
                  {project.category}
                </span>
                <ArrowUpRight className="absolute top-4 right-4 h-8 w-8 text-white opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0" />
                <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-tech-500 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-tech-100 px-3 py-1 text-xs font-medium text-tech-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <ProjectDetailModal
      project={selectedProject}
      onClose={() => setSelectedProject(null)}
    />
    </>
  );
}
