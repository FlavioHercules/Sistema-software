import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 sm:px-8">
      <div className="max-w-3xl">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">Contato</span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">Fale com a EcoTech.</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Estamos prontos para entender sua ideia, propor a melhor solução e ajudar seu negócio a crescer com tecnologia clara e eficiente.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <Mail className="mt-1 h-5 w-5 text-eco-300" />
              <div>
                <p className="font-medium text-white">E-mail</p>
                <a href="mailto:contato@ecotech.com" className="text-slate-300">contato@ecotech.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <Phone className="mt-1 h-5 w-5 text-eco-300" />
              <div>
                <p className="font-medium text-white">WhatsApp</p>
                <a href="https://wa.me/557488651620" target="_blank" rel="noreferrer" className="text-slate-300">+55 74 8865-1620</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <MapPin className="mt-1 h-5 w-5 text-eco-300" />
              <div>
                <p className="font-medium text-white">Localização</p>
                <p className="text-slate-300">São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-eco-300/20 bg-eco-500/10 p-6">
          <h2 className="font-display text-2xl font-semibold text-white">Quer falar sobre um projeto?</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Para solicitar uma proposta, responda algumas perguntas rápidas na nossa página de orçamento.</p>
          <Link to="/orcamento" className="mt-6 inline-flex rounded-full bg-eco-500 px-6 py-3 font-semibold text-white transition hover:bg-eco-400">Solicitar orçamento</Link>
        </div>
      </div>
    </section>
  );
}
