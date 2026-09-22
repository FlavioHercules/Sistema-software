import { ArrowRight, Activity, ArrowUpRight, Code2, Leaf, Play, ShieldCheck, Zap } from 'lucide-react';
import heroVideo from '@/assets/video.mp4';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen flex items-center overflow-hidden bg-tech-950 pt-28 pb-16 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-tech-950">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-65"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,27,0.94)_0%,rgba(2,12,27,0.72)_48%,rgba(2,12,27,0.42)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-950 via-transparent to-tech-950/45" />
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #d7ffe4 1px, transparent 1px), linear-gradient(to bottom, #d7ffe4 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Text */}
          <div className="lg:col-span-7 lg:pr-8">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-eco-300 animate-fade-up">
              <span className="h-px w-10 bg-eco-400" />
              EcoTech / engenharia digital
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white animate-fade-up sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.1s' }}>
              Sistemas que fazem negócios avançarem.
            </h1>

            <p className="mt-8 max-w-xl border-l border-eco-400/60 pl-5 text-lg leading-relaxed text-slate-200 animate-fade-up sm:text-xl" style={{ animationDelay: '0.2s' }}>
              Produtos digitais sob medida para operações que precisam de velocidade,
              clareza e escala. Da arquitetura ao deploy, construímos a infraestrutura
              que sustenta o próximo estágio da sua empresa.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 rounded-full bg-eco-400 px-7 py-3.5 text-base font-semibold text-tech-950 shadow-xl shadow-eco-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-eco-300 hover:shadow-2xl hover:shadow-eco-400/40"
              >
                Ver como trabalhamos
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-eco-300 hover:bg-white/20"
              >
                <Play className="h-4 w-4" />
                Falar com a equipe
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-white/15 py-5 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '+120', label: 'Projetos entregues' },
                { value: '+80', label: 'Clientes ativos' },
                { value: '7 anos', label: 'De experiência' },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-white/15 pl-1 last:border-0 sm:pl-3">
                  <div className="font-display text-2xl font-semibold text-white sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 max-w-24 text-xs uppercase tracking-wide text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational panel */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="overflow-hidden border border-white/15 bg-tech-950/75 shadow-2xl shadow-black/40 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center border border-eco-300/40 text-eco-300"><Activity className="h-4 w-4" /></span>
                  <div>
                    <div className="text-sm font-semibold text-white">Mission control</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">production / live</div>
                  </div>
                </div>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-eco-300"><span className="h-2 w-2 animate-pulse rounded-full bg-eco-400" /> online</span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 border-b border-white/10">
                <div className="p-5"><div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">uptime</div><div className="mt-2 font-display text-3xl text-white">99.98%</div><div className="mt-1 text-xs text-eco-300">+0.42% este mês</div></div>
                <div className="p-5"><div className="font-mono text-[10px] uppercase tracking-widest text-slate-500">latência</div><div className="mt-2 font-display text-3xl text-white">42ms</div><div className="mt-1 text-xs text-cyan-300">global edge</div></div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between text-xs"><span className="font-mono uppercase tracking-widest text-slate-500">delivery pipeline</span><span className="text-slate-400">último deploy há 8 min</span></div>
                {[{ label: 'Core platform', value: '100%', icon: Code2 }, { label: 'Cloud security', value: 'Active', icon: ShieldCheck }, { label: 'Energy efficiency', value: '-42%', icon: Zap }].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 border-t border-white/10 pt-3">
                    <Icon className="h-4 w-4 text-eco-300" />
                    <span className="flex-1 text-sm text-slate-300">{label}</span>
                    <span className="font-mono text-xs text-white">{value}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-400"><Leaf className="h-4 w-4 text-eco-300" /> Engenharia eficiente para crescer sem desperdiçar recursos.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
