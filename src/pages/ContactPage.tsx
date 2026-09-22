import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="text-slate-300">+55 11 99999-9999</a>
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

        <div className="rounded-3xl border border-white/10 bg-[#061426] p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-eco-500/10 text-eco-300">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-white">Solicitar conversa</h2>
          </div>

          <div className="mt-6 space-y-4">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-eco-300" placeholder="Seu nome" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-eco-300" placeholder="Seu e-mail" />
            <textarea rows={5} className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none focus:border-eco-300" placeholder="Descreva seu projeto" />
            <button className="w-full rounded-full bg-eco-500 px-6 py-3 font-semibold text-white transition hover:bg-eco-400">Enviar mensagem</button>
          </div>
        </div>
      </div>
    </section>
  );
}
