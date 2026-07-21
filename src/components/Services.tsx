import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { services } from '@/data/content';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="solucoes" className="relative py-24 sm:py-32 bg-tech-50/50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-eco-100/40 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="reveal max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-700">
            Soluções
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-tech-900">
            Tecnologia que{' '}
            <span className="text-gradient-eco">impulsiona negócios</span>
          </h2>
          <p className="mt-5 text-lg text-tech-500">
            Do conceito ao deploy, entregamos soluções completas para cada etapa
            da sua jornada digital.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <article
              key={service.title}
              onClick={() => setSelectedService(service)}
              className="reveal group relative overflow-hidden rounded-3xl border border-tech-100 bg-white p-8 card-hover hover:border-eco-200 cursor-pointer transition-all"
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

              <h3 className="relative mt-6 font-display text-xl font-bold text-tech-900">
                {service.title}
              </h3>
              <p className="relative mt-3 text-tech-500 leading-relaxed">
                {service.description}
              </p>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="inline-flex items-center gap-1.5 rounded-full bg-tech-50 px-3 py-1.5 text-xs font-medium text-tech-600"
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
