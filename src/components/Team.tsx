import { Linkedin, Github } from 'lucide-react';
import { team } from '@/data/content';

export default function Team() {
  return (
    <section id="equipe" className="relative py-24 sm:py-32 overflow-hidden bg-[#061426]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">
            Nossa Equipe
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Mentes por trás da{' '}
            <span className="text-gradient-eco">EcoTech</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            Profissionais apaixonados por tecnologia e sustentabilidade, unidos
            por um propósito comum.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <article
              key={member.name}
              className="reveal group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] card-hover hover:border-eco-300/40"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tech-900/90 via-tech-900/20 to-transparent" />

                {/* Social links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${member.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-tech-700 hover:bg-eco-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub de ${member.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-tech-700 hover:bg-tech-900 hover:text-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-eco-300">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}