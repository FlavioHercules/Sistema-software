import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { services, type Service } from '@/data/content';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="solucoes" className="relative py-24 sm:py-32 bg-[#061426] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-eco-300/30 bg-eco-400/10 px-4 py-1.5 text-sm font-medium text-eco-300">
            Soluções
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Tecnologia que{' '}
            <span className="text-gradient-eco">impulsiona negócios</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400">
            Do conceito ao deploy, entregamos soluções completas para cada etapa
            da sua jornada digital.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              onClick={() => setSelectedService(service)}
              className="reveal group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] p-8 card-hover hover:border-eco-300/40 hover:bg-white/[0.08] cursor-pointer transition-all"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-eco-200/0 blur-3xl transition-all duration-500 group-hover:bg-eco-200/40" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-700 text-white shadow-lg shadow-eco-500/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <ArrowUpRight className="h-6 w-6 text-tech-300 transition-all duration-300 group-hover:text-eco-500 group-hover:rotate-45" />
              </div>

              <h3 className="relative mt-6 font-display text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="relative mt-3 text-slate-400 leading-relaxed">
                {service.description}
              </p>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    <Check className="h-3.5 w-3.5 text-eco-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <ServiceDetailModal
      service={selectedService}
      onClose={() => setSelectedService(null)}
    />
    </>
  );
}
