import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/content';

export default function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">Portfólio</span>
        <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">Projetos que refletem estratégia e execução.</h1>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-lg shadow-black/10">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                style={{ objectFit: 'cover', borderRadius: '0px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-950 via-tech-950/20 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-tech-950/70 px-3 py-1 text-xs font-medium text-eco-300">{project.category}</span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl font-semibold text-white">{project.name}</h2>
              <p className="mt-3 text-slate-300 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200">{technology}</span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-500/10 px-4 py-2 font-medium text-eco-300 transition hover:bg-eco-500 hover:text-white"
              >
                Ver projeto
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
