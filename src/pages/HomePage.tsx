import { ArrowRight, CheckCircle2, Compass, Lightbulb, MessageSquareQuote, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '@/assets/video.mp4';

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-tech-950 pt-28 pb-16 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            className="h-full w-full object-cover opacity-95 saturate-150 contrast-110"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,27,0.72)_0%,rgba(2,12,27,0.30)_45%,rgba(2,12,27,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.28),transparent_52%)] mix-blend-screen" />
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">
                <Sparkles className="h-4 w-4" /> EcoTech Digital
              </span>
              <h1 className="mt-7 max-w-xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Transformamos ideias em experiências digitais.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Criamos sites, sistemas e soluções digitais que unem estratégia, design e tecnologia para ajudar negócios a crescer com clareza e presença real no mercado.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/orcamento" className="inline-flex items-center gap-2 rounded-full bg-eco-500 px-6 py-3 font-semibold text-white shadow-lg shadow-eco-500/30 transition hover:-translate-y-0.5 hover:bg-eco-400">
                  Quero criar meu site
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-eco-300/40 hover:bg-white/10">
                  Conhecer projetos
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-tech-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-eco-300/20 bg-eco-500/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-eco-300">Projetos</p>
                  <p className="mt-6 font-display text-4xl font-bold text-white">+40</p>
                  <p className="mt-2 text-sm text-slate-300">Sites e sistemas entregues</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Prazo</p>
                  <p className="mt-6 font-display text-4xl font-bold text-white">4–8</p>
                  <p className="mt-2 text-sm text-slate-300">Semanas em média</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Como podemos ajudar</p>
                  <ul className="mt-4 space-y-3 text-slate-200">
                    {['Sites institucionais', 'Landing pages', 'Lojas virtuais', 'Sistemas web'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-eco-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tech-950 py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">Sobre a EcoTech</span>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">Tecnologia com visão, estratégia e propósito.</h2>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            A EcoTech combina desenvolvimento, design e visão de negócio para transformar desafios reais em experiências digitais claras, eficientes e preparadas para crescer.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Compass, title: 'Nossa visão', text: 'Tornar a tecnologia mais acessível, estratégica e capaz de gerar impacto positivo para cada negócio.' },
              { icon: Target, title: 'Nossa estratégia', text: 'Entender o contexto, definir prioridades e construir soluções que aproximam marcas e pessoas.' },
              { icon: Lightbulb, title: 'Nosso jeito de criar', text: 'Unir pensamento criativo, engenharia sólida e colaboração em todas as etapas do projeto.' },
            ].map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-eco-300/40 hover:bg-white/[0.08]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061426] py-24">
        <div className="max-w-5xl mx-auto rounded-3xl border border-eco-300/20 bg-gradient-to-r from-eco-500/10 to-cyan-500/10 p-8 text-center shadow-xl shadow-eco-500/10 sm:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-eco-300">Seu projeto começa aqui</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Vamos criar uma presença digital que converte.</h2>
          <Link to="/orcamento" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-tech-950 transition hover:-translate-y-0.5">
            Solicitar orçamento
            <MessageSquareQuote className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
