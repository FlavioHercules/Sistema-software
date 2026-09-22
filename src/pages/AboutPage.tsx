import { Target, Recycle, GitBranch, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Target, title: 'Inovação', desc: 'Tecnologia aplicada para resolver problemas reais e gerar crescimento.' },
  { icon: Recycle, title: 'Sustentabilidade', desc: 'Soluções mais eficientes e com impacto positivo no ambiente e no negócio.' },
  { icon: GitBranch, title: 'Metodologia ágil', desc: 'Entregas iterativas, previsibilidade e alinhamento constante com o cliente.' },
  { icon: ShieldCheck, title: 'Arquitetura sólida', desc: 'Sistemas preparados para crescer, evoluir e operar com segurança.' },
];

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">Sobre a EcoTech</span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Uma empresa de tecnologia com propósito.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            A EcoTech nasceu para ajudar marcas e negócios a se conectarem melhor com o público por meio de soluções digitais estratégicas, modernas e funcionais.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Combinamos design, desenvolvimento e estratégia para criar experiências que geram confiança, reforçam a presença digital e tornam a operação dos clientes mais eficiente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
