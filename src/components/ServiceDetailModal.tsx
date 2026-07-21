import { X } from 'lucide-react';
import type { Service } from '@/data/content';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-full bg-tech-100 p-2 text-tech-600 transition-colors hover:bg-tech-200"
          aria-label="Fechar modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="space-y-8 p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-700 text-white shadow-lg shadow-eco-500/30">
              <Icon className="h-8 w-8" strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="font-display text-4xl font-bold text-tech-900">
                {service.title}
              </h2>
              <p className="mt-2 text-tech-500 text-lg">Solução completa e estratégica</p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-tech-900 mb-4">
              Descrição Detalhada
            </h3>
            <p className="text-lg text-tech-600 leading-relaxed bg-tech-50 p-4 rounded-xl border border-tech-100">
              {service.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-tech-900 mb-4">
              Benefícios Principais
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-lg bg-eco-50 p-4 border border-eco-200"
                >
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-eco-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-tech-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-tech-50 p-6 border border-tech-100">
              <h4 className="font-display font-bold text-tech-900 mb-4">
                Casos de Uso
              </h4>
              <ul className="space-y-2 text-sm text-tech-600">
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">→</span>
                  <span>Startups em fase de growth</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">→</span>
                  <span>Empresas em transformação digital</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">→</span>
                  <span>Corporações de grande escala</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-eco-50 p-6 border border-eco-200">
              <h4 className="font-display font-bold text-eco-900 mb-4">
                Nossa Expertise
              </h4>
              <ul className="space-y-2 text-sm text-eco-700">
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>+10 anos de experiência</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>+150 projetos entregues</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clientes globais satisfeitos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-eco-500/10 to-eco-600/10 p-6 border border-eco-200">
            <h4 className="font-display font-bold text-tech-900 mb-4">
              Nossa Metodologia
            </h4>
            <p className="text-tech-600 leading-relaxed mb-4">
              Utilizamos abordagens comprovadas e adaptadas ao contexto único do seu negócio, garantindo máximo ROI e impacto mensurável.
            </p>
            <div className="flex items-center justify-between text-xs font-bold text-tech-700">
              <span className="px-3 py-2 bg-white rounded-lg border border-eco-200">Análise Profunda</span>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <span className="px-3 py-2 bg-white rounded-lg border border-eco-200">Estratégia</span>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <span className="px-3 py-2 bg-white rounded-lg border border-eco-200">Execução</span>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <span className="px-3 py-2 bg-white rounded-lg border border-eco-200">Otimização</span>
            </div>
          </div>

          <div className="pt-4 border-t border-tech-100">
            <button
              onClick={onClose}
              className="w-full rounded-xl border-2 border-tech-200 bg-white px-6 py-3 font-medium text-tech-900 transition-all hover:bg-tech-50"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
