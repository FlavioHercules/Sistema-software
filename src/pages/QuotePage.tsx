import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircleMore } from 'lucide-react';
import { ecoTechWhatsAppNumber } from '@/data/content';

const projectTypes = [
  'Site institucional',
  'Landing page',
  'Loja virtual',
  'Sistema web',
  'Portfólio',
  'Outro',
];

const sitePages = [
  'Início',
  'Sobre',
  'Serviços',
  'Produtos',
  'Projetos',
  'Blog',
  'Contato',
  'Área do cliente',
  'Outro',
];

const desiredFeatures = [
  'Botão WhatsApp',
  'Formulário de contato',
  'Agendamento',
  'Catálogo de produtos',
  'E-commerce',
  'Área de login',
  'Painel administrativo',
  'Integração com redes sociais',
  'Animações',
  'Banco de dados',
  'Outra funcionalidade',
];

const budgetOptions = [
  'Ainda não sei',
  'Até R$ 1.000',
  'R$ 1.000 – R$ 2.500',
  'R$ 2.500 – R$ 5.000',
  'Acima de R$ 5.000',
];

const terms = ['O quanto antes', '1 mês', '2 meses', '3 meses ou mais', 'Ainda não sei'];

const brandingOptions = ['Sim', 'Não', 'Parcialmente'];
const hostingOptions = ['Sim', 'Não', 'Não sei'];

const whatsappNumber = '5511999999999';

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    projectType: 'Site institucional',
    objective: '',
    pages: [] as string[],
    branding: 'Sim',
    hosting: 'Não',
    description: '',
    features: [] as string[],
    references: '',
    budget: 'Ainda não sei',
    term: 'Ainda não sei',
  });

  const steps = [
    { title: 'Vamos conhecer seu negócio', fields: ['name', 'company', 'whatsapp', 'email'] },
    { title: 'Que tipo de site você precisa?', fields: ['projectType'] },
    { title: 'Como você imagina o projeto?', fields: ['objective', 'pages', 'branding', 'hosting', 'description'] },
    { title: 'Quais funcionalidades você precisa?', fields: ['features'] },
    { title: 'Vamos finalizar', fields: ['references', 'budget', 'term'] },
  ];

  const currentStep = steps[step];

  const progress = ((step + 1) / steps.length) * 100;

  const summary = useMemo(() => {
    return [
      { label: 'Empresa', value: form.company || 'Não informado' },
      { label: 'Tipo de projeto', value: form.projectType },
      { label: 'Objetivo', value: form.objective || 'Não informado' },
      { label: 'Páginas', value: form.pages.length ? form.pages.join(', ') : 'Nenhuma selecionada' },
      { label: 'Funcionalidades', value: form.features.length ? form.features.join(', ') : 'Nenhuma selecionada' },
      { label: 'Descrição', value: form.description || 'Não informado' },
      { label: 'Faixa de investimento', value: form.budget },
      { label: 'Prazo', value: form.term },
    ];
  }, [form]);

  const setField = (field: keyof typeof form, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'pages' | 'features', value: string) => {
    setForm((prev) => {
      const currentValues = prev[field] as string[];
      return {
        ...prev,
        [field]: currentValues.includes(value)
          ? currentValues.filter((item) => item !== value)
          : [...currentValues, value],
      };
    });
  };

  const canContinue = () => {
    if (step === 0) {
      return form.name.trim() && form.email.trim() && form.whatsapp.trim();
    }
    if (step === 1) return Boolean(form.projectType);
    if (step === 2) return form.objective.trim() && form.description.trim();
    if (step === 3) return true;
    return true;
  };

  const nextStep = () => {
    if (step < steps.length - 1 && canContinue()) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const sendToWhatsApp = () => {
    const message = [
      'Olá! Gostaria de solicitar um orçamento para um projeto.',
      '',
      `Empresa: ${form.company || 'Não informado'}`,
      `Nome: ${form.name || 'Não informado'}`,
      `Tipo de projeto: ${form.projectType}`,
      '',
      'Objetivo:',
      form.objective || 'Não informado',
      '',
      'Páginas:',
      form.pages.length ? form.pages.join(', ') : 'Nenhuma selecionada',
      '',
      'Funcionalidades:',
      form.features.length ? form.features.join(', ') : 'Nenhuma selecionada',
      '',
      'Descrição:',
      form.description || 'Não informado',
      '',
      `Faixa de investimento: ${form.budget}`,
      `Prazo: ${form.term}`,
      `Referências: ${form.references || 'Nenhuma informada'}`,
      '',
      'Quero conversar sobre esse projeto.',
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${ecoTechWhatsAppNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="max-w-6xl mx-auto px-5 py-20 sm:px-8">
      <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-eco-300">Solicitar orçamento</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">Conte-nos sobre o site que você imagina</h1>
          </div>
        </div>
        <p className="mt-3 text-slate-300">Responda algumas perguntas e conte como você gostaria que fosse o seu projeto.</p>

        <div className="mt-6">
          <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>Etapa {step + 1}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/5">
            <div className="h-full rounded-full bg-gradient-to-r from-eco-500 to-eco-300" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#061426] p-6 sm:p-8">
        {step < steps.length - 1 ? (
          <>
            <h2 className="font-display text-2xl font-semibold text-white">{currentStep.title}</h2>

            {step === 0 && (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Nome</label>
                  <input value={form.name} onChange={(e) => setField('name', e.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Nome da empresa</label>
                  <input value={form.company} onChange={(e) => setField('company', e.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="Sua empresa" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">WhatsApp</label>
                  <input value={form.whatsapp} onChange={(e) => setField('whatsapp', e.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="(99) 99999-9999" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">E-mail</label>
                  <input type="email" value={form.email} onChange={(e) => setField('email', e.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="seu@email.com" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setField('projectType', type)}
                    className={`rounded-2xl border px-4 py-3 text-left font-medium transition ${
                      form.projectType === type
                        ? 'border-eco-300 bg-eco-500/10 text-eco-300'
                        : 'border-white/10 bg-white/5 text-slate-200 hover:border-eco-300/40'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Qual é o objetivo do site?</label>
                  <textarea value={form.objective} onChange={(e) => setField('objective', e.target.value)} rows={4} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="Ex.: aumentar leads para a clínica" />
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-slate-200">Quais páginas você gostaria que o site tivesse?</p>
                  <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                    {sitePages.map((page) => (
                      <label key={page} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                        <input type="checkbox" checked={form.pages.includes(page)} onChange={() => toggleArrayValue('pages', page)} className="h-4 w-4 accent-eco-500" />
                        {page}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">Você já possui identidade visual?</p>
                    <div className="flex flex-wrap gap-3">
                      {brandingOptions.map((option) => (
                        <button key={option} type="button" onClick={() => setField('branding', option)} className={`rounded-full border px-4 py-2 text-sm ${form.branding === option ? 'border-eco-300 bg-eco-500/10 text-eco-300' : 'border-white/10 bg-white/5 text-slate-200'}`}>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">Você já possui domínio e hospedagem?</p>
                    <div className="flex flex-wrap gap-3">
                      {hostingOptions.map((option) => (
                        <button key={option} type="button" onClick={() => setField('hosting', option)} className={`rounded-full border px-4 py-2 text-sm ${form.hosting === option ? 'border-eco-300 bg-eco-500/10 text-eco-300' : 'border-white/10 bg-white/5 text-slate-200'}`}>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Descreva como você imagina o site.</label>
                  <textarea value={form.description} onChange={(e) => setField('description', e.target.value)} rows={5} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="Ex.: Quero um site moderno para minha barbearia, com agendamento, apresentação dos serviços, fotos dos cortes e botão para WhatsApp." />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-slate-200">Funcionalidades desejadas</p>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {desiredFeatures.map((feature) => (
                    <label key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-slate-200">
                      <input type="checkbox" checked={form.features.includes(feature)} onChange={() => toggleArrayValue('features', feature)} className="h-4 w-4 accent-eco-500" />
                      {feature}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Referências</label>
                  <textarea value={form.references} onChange={(e) => setField('references', e.target.value)} rows={3} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-eco-300" placeholder="Cole links de sites que você gosta" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">Orçamento/faixa de investimento</p>
                    <div className="space-y-2">
                      {budgetOptions.map((option) => (
                        <button key={option} type="button" onClick={() => setField('budget', option)} className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm ${form.budget === option ? 'border-eco-300 bg-eco-500/10 text-eco-300' : 'border-white/10 bg-white/5 text-slate-200'}`}>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-200">Prazo desejado</p>
                    <div className="space-y-2">
                      {terms.map((term) => (
                        <button key={term} type="button" onClick={() => setField('term', term)} className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm ${form.term === term ? 'border-eco-300 bg-eco-500/10 text-eco-300' : 'border-white/10 bg-white/5 text-slate-200'}`}>
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between gap-3">
              <button type="button" onClick={previousStep} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 disabled:opacity-40">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>

              <button type="button" onClick={nextStep} disabled={!canContinue()} className="inline-flex items-center gap-2 rounded-full bg-eco-500 px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
                Continuar
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="font-display text-2xl font-semibold text-white">Confira seu projeto</h2>
            <div className="mt-8 space-y-4">
              {summary.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-slate-200">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={previousStep} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </button>

              <button type="button" onClick={sendToWhatsApp} className="inline-flex items-center justify-center gap-2 rounded-full bg-eco-500 px-6 py-3 font-semibold text-white">
                <MessageCircleMore className="h-5 w-5" />
                Enviar orçamento pelo WhatsApp
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
