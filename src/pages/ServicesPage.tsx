import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/data/content';

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20 sm:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">Serviços</span>
        <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">Tecnologia pensada para resultados reais.</h1>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-700 text-white">
                <service.icon className="h-7 w-7" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-eco-300" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">{service.description}</p>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-slate-200">
                  <Check className="h-4 w-4 text-eco-400" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
