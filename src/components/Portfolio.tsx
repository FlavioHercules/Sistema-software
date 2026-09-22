import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { projects, type Project } from '@/data/content';
import ProjectDetailModal from './ProjectDetailModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const project = projects[activeProject];

  return (
    <>
      <section id="projetos" className="relative py-24 sm:py-32 bg-tech-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">
                Projetos & Portfólio
              </span>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white break-words">
                Cases de{' '}
                <span className="text-gradient-eco">sucesso</span>
              </h2>
            </div>
            <p className="max-w-md text-slate-400 break-words">
              Uma amostra de projetos que entregamos com impacto real e mensurável
              para nossos clientes.
            </p>
          </div>

          <div className="mt-16">
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="reveal group relative grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] shadow-sm card-hover hover:border-eco-300/40 cursor-pointer transition-all md:grid-cols-2"
            >
              <div className="relative min-h-72 overflow-hidden md:min-h-[360px]">
                <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-950/85 via-tech-950/10 to-transparent" />
                <span className="absolute top-5 left-5 rounded-full border border-white/20 bg-tech-950/70 px-3 py-1 text-xs font-semibold text-eco-300 backdrop-blur">{project.category}</span>
                <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-9">
                <div>
                  <p className="text-lg leading-relaxed text-slate-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-300">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-semibold text-eco-700">Ver projeto <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label="Projeto anterior" onClick={(event) => { event.stopPropagation(); setActiveProject((activeProject - 1 + projects.length) % projects.length); }} className="rounded-full border border-tech-200 p-2 text-tech-700 transition hover:border-eco-500 hover:text-eco-600"><ArrowLeft className="h-4 w-4" /></button>
                    <button type="button" aria-label="Próximo projeto" onClick={(event) => { event.stopPropagation(); setActiveProject((activeProject + 1) % projects.length); }} className="rounded-full border border-tech-200 p-2 text-tech-700 transition hover:border-eco-500 hover:text-eco-600"><ArrowRight className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </article>
            <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Projetos em destaque">
              {projects.map((item, index) => (
                <button key={item.title} type="button" role="tab" aria-label={`Mostrar ${item.title}`} aria-selected={index === activeProject} onClick={() => setActiveProject(index)} className={`h-2.5 rounded-full transition-all ${index === activeProject ? 'w-8 bg-eco-500' : 'w-2.5 bg-tech-200 hover:bg-eco-300'}`} />
              ))}
            </div>
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