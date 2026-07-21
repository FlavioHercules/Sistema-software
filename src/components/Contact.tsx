import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, Loader2, AlertCircle, User, Mail, Building2, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    project_description: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.project_description) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_requests').insert({
      name: form.name,
      email: form.email,
      company: form.company || null,
      project_description: form.project_description,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Não foi possível enviar. Tente novamente em instantes.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', company: '', project_description: '' });
  };

  const update = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <section id="contato" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-eco-100/40 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Info */}
          <div className="lg:col-span-5 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-700">
              Contato & Orçamento
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-900">
              Vamos construir algo{' '}
              <span className="text-gradient-eco">extraordinário</span>
            </h2>
            <p className="mt-5 text-lg text-tech-500 leading-relaxed">
              Conte-nos sobre o seu projeto. Nossa equipe entra em contato em até
              24 horas com uma proposta sob medida.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Resposta em 24h', desc: 'Retorno rápido e direto com um especialista.' },
                { label: 'Orçamento sem custo', desc: 'Avaliação gratuita do seu projeto.' },
                { label: 'NDA disponível', desc: 'Confidencialidade garantida desde o primeiro contato.' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-eco-100">
                    <CheckCircle2 className="h-4 w-4 text-eco-600" />
                  </span>
                  <div>
                    <div className="font-semibold text-tech-900">{item.label}</div>
                    <div className="text-sm text-tech-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="relative rounded-3xl border border-tech-100 bg-white p-8 sm:p-10 shadow-xl shadow-tech-900/5">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-eco-100 animate-fade-in">
                    <CheckCircle2 className="h-10 w-10 text-eco-600" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-tech-900">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="mt-3 max-w-md text-tech-500">
                    Obrigado pelo interesse. Nossa equipe entrará em contato em
                    breve com a próxima etapa.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border-2 border-tech-200 px-6 py-2.5 text-sm font-semibold text-tech-700 hover:border-eco-500 hover:text-eco-600 transition-colors"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      icon={User}
                      label="Nome *"
                      value={form.name}
                      onChange={(v) => update('name', v)}
                      placeholder="Seu nome completo"
                      required
                    />
                    <Field
                      icon={Mail}
                      label="E-mail *"
                      type="email"
                      value={form.email}
                      onChange={(v) => update('email', v)}
                      placeholder="voce@empresa.com"
                      required
                    />
                  </div>

                  <Field
                    icon={Building2}
                    label="Empresa"
                    value={form.company}
                    onChange={(v) => update('company', v)}
                    placeholder="Nome da empresa (opcional)"
                  />

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-tech-700">
                      <MessageSquare className="h-4 w-4 text-eco-500" />
                      Descrição do Projeto *
                    </label>
                    <textarea
                      value={form.project_description}
                      onChange={(e) => update('project_description', e.target.value)}
                      required
                      rows={5}
                      placeholder="Descreva sua ideia, objetivos, prazos e tecnologias de interesse..."
                      className="w-full rounded-2xl border border-tech-200 bg-tech-50/50 px-4 py-3 text-tech-800 placeholder:text-tech-400 transition-all duration-300 focus:border-eco-500 focus:bg-white focus:ring-4 focus:ring-eco-500/10 focus:outline-none resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-eco-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-eco-500/40 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({ icon: Icon, label, value, onChange, placeholder, type = 'text', required }: FieldProps) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-tech-700">
        <Icon className="h-4 w-4 text-eco-500" />
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-tech-200 bg-tech-50/50 px-4 py-3 text-tech-800 placeholder:text-tech-400 transition-all duration-300 focus:border-eco-500 focus:bg-white focus:ring-4 focus:ring-eco-500/10 focus:outline-none"
      />
    </div>
  );
}
