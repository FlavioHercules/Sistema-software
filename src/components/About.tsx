import { Target, Recycle, GitBranch, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Target, title: 'Inovação', desc: 'Tecnologia de ponta aplicada a problemas reais.' },
  { icon: Recycle, title: 'Sustentabilidade', desc: 'Software eficiente com menor pegada de carbono.' },
  { icon: GitBranch, title: 'Metodologia Ágil', desc: 'Entregas contínuas e iterativas com Scrum/Kanban.' },
  { icon: ShieldCheck, title: 'Arquitetura Sólida', desc: 'Sistemas robustos, seguros e escaláveis.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32 overflow-hidden bg-tech-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">
              Sobre a EcoTech
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Engenharia de software com{' '}
              <span className="text-gradient-eco">propósito sustentável</span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              A EcoTech nasceu da união entre excelência técnica e responsabilidade
              ambiental. Somos uma empresa de desenvolvimento e fabricação de
              software focada em criar soluções de alto impacto que impulsionam a
              transformação digital de empresas — sem comprometer o futuro.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Nossas equipes combinam arquitetura de software sólida, metodologia
              ágil e práticas de engenharia modernas para entregar produtos
              digitais que escalam, performam e duram.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="group flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-eco-300/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-eco-500/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 text-white shadow-md shadow-eco-500/30 transition-transform duration-300 group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="reveal relative" style={{ transitionDelay: '0.15s' }}>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 p-6 text-white shadow-xl shadow-eco-500/20 aspect-square flex flex-col justify-between">
                  <Recycle className="h-8 w-8" />
                  <div>
                    <div className="font-display text-3xl font-bold">100%</div>
                    <div className="text-sm text-eco-50/90">Energia verde em servidores</div>
                  </div>
                </div>
                <div className="rounded-xl bg-tech-900 p-6 text-white shadow-xl aspect-video flex flex-col justify-between">
                  <GitBranch className="h-7 w-7 text-eco-400" />
                  <div>
                    <div className="font-display text-2xl font-bold">CI/CD</div>
                    <div className="text-sm text-tech-300">Deploys automatizados</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-xl bg-white/[0.06] border border-white/10 p-6 shadow-xl aspect-video flex flex-col justify-between">
                  <ShieldCheck className="h-7 w-7 text-eco-600" />
                  <div>
                    <div className="font-display text-2xl font-bold text-white">ISO 27001</div>
                    <div className="text-sm text-slate-400">Segurança de dados</div>
                  </div>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-tech-800 to-tech-900 p-6 text-white shadow-xl aspect-square flex flex-col justify-between">
                  <Target className="h-8 w-8 text-eco-400" />
                  <div>
                    <div className="font-display text-3xl font-bold">+7 anos</div>
                    <div className="text-sm text-tech-300">De excelência técnica</div>
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
