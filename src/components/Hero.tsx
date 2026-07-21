import { ArrowRight, Sparkles, Code2, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-eco-50/60 via-white to-white" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-eco-300/30 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-tech-200/40 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-eco-200 bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-700 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              Software sob medida com tecnologia sustentável
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-tech-900 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Desenvolvimento de software{' '}
              <span className="text-gradient-eco">sob medida</span> e soluções tecnológicas{' '}
              <span className="relative inline-block">
                <span className="text-gradient-eco">sustentáveis</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" fill="none">
                  <path d="M2 8 Q 150 -2 298 8" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg sm:text-xl text-tech-500 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Empresa de desenvolvimento de projetos — Transformando ideias em softwares de alto impacto.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-eco-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-eco-500/40"
              >
                Conhecer Soluções
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-tech-200 bg-white px-7 py-3.5 text-base font-semibold text-tech-700 transition-all duration-300 hover:border-eco-500 hover:text-eco-600 hover:-translate-y-0.5"
              >
                Solicitar Orçamento
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '+120', label: 'Projetos entregues' },
                { value: '+80', label: 'Clientes ativos' },
                { value: '7 anos', label: 'De experiência' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-tech-900">{stat.value}</div>
                  <div className="mt-1 text-sm text-tech-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative mx-auto max-w-md">
              {/* Main card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-tech-900 to-tech-800 p-8 shadow-2xl shadow-tech-900/30 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-eco-500/20 blur-2xl" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-eco-400" />
                    <span className="text-white font-display font-semibold">EcoTech IDE</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-eco-400/80" />
                  </div>
                </div>
                <div className="space-y-2.5 font-mono text-sm">
                  <div className="text-tech-400">
                    <span className="text-eco-400">const</span> solution ={' '}
                    <span className="text-eco-300">build</span>(&#123;
                  </div>
                  <div className="pl-6 text-tech-300">
                    stack: <span className="text-amber-300">'React + Node'</span>,
                  </div>
                  <div className="pl-6 text-tech-300">
                    cloud: <span className="text-amber-300">'AWS'</span>,
                  </div>
                  <div className="pl-6 text-tech-300">
                    impact: <span className="text-amber-300">'alto'</span>,
                  </div>
                  <div className="pl-6 text-tech-300">
                    sustainable: <span className="text-eco-400">true</span>,
                  </div>
                  <div className="text-tech-400">&#125;)</div>
                  <div className="pt-2 flex items-center gap-2 text-eco-300">
                    <span className="h-4 w-2 bg-eco-400 animate-pulse" />
                    deploy pronto.
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-6 -left-6 rounded-2xl glass p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-eco-100">
                    <Code2 className="h-5 w-5 text-eco-600" />
                  </span>
                  <div>
                    <div className="text-xs text-tech-500">Build</div>
                    <div className="text-sm font-semibold text-tech-900">100% OK</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 rounded-2xl glass p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-tech-100">
                    <Leaf className="h-5 w-5 text-eco-600" />
                  </span>
                  <div>
                    <div className="text-xs text-tech-500">Carbon</div>
                    <div className="text-sm font-semibold text-tech-900">-42% CO₂</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
