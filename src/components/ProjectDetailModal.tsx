import { X } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  if (!project) return null;

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

        {/* Image */}
        <div className="relative h-96 w-full overflow-hidden bg-tech-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-900/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-8 p-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block rounded-full bg-eco-100 px-4 py-1.5 text-sm font-semibold text-eco-700">
                {project.category}
              </span>
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold text-tech-900">
              {project.title}
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-display text-lg font-bold text-tech-900">
                Visão Geral
              </h3>
              <p className="mt-3 text-lg text-tech-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold text-tech-900 mb-4">
              Stack Tecnológico
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-xl bg-gradient-to-br from-eco-50 to-eco-100 px-4 py-3 border border-eco-200"
                >
                  <span className="font-semibold text-eco-700">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-tech-50 p-6 border border-tech-100">
              <h4 className="font-display font-bold text-tech-900 mb-3">
                Desafios
              </h4>
              <ul className="space-y-2 text-sm text-tech-600">
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">•</span>
                  <span>Otimizar performance em larga escala</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">•</span>
                  <span>Integração de múltiplos sistemas</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-eco-500 font-bold">•</span>
                  <span>Garantir segurança e compliance</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-eco-50 p-6 border border-eco-200">
              <h4 className="font-display font-bold text-eco-900 mb-3">
                Resultados
              </h4>
              <ul className="space-y-2 text-sm text-eco-700">
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Redução de 40% em tempo de resposta</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>99.9% de uptime</span>
                </li>
                <li className="flex gap-2">
                  <svg className="h-5 w-5 text-eco-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>+300% crescimento de usuários</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-eco-500/10 to-eco-600/10 p-6 border border-eco-200">
            <h4 className="font-display font-bold text-tech-900 mb-3">
              Processo de Desenvolvimento
            </h4>
            <div className="flex items-center justify-between text-sm font-medium text-tech-600">
              <div className="text-center">
                <div className="font-bold text-eco-600">Descoberta</div>
              </div>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <div className="text-center">
                <div className="font-bold text-eco-600">Design</div>
              </div>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <div className="text-center">
                <div className="font-bold text-eco-600">Desenvolvimento</div>
              </div>
              <div className="flex-1 mx-2 h-1 bg-eco-300" />
              <div className="text-center">
                <div className="font-bold text-eco-600">Deploy</div>
              </div>
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
