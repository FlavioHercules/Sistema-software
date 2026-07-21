import { Leaf, Linkedin, Github, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Footer() {
  return (
    <footer className="relative bg-tech-950 text-tech-300 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-eco-500/50 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-[600px] rounded-full bg-eco-500/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#inicio" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 shadow-lg shadow-eco-500/30">
                <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold">
                <span className="text-eco-400">Eco</span>
                <span className="text-white">Tech</span>
              </span>
            </a>
            <p className="mt-5 text-tech-400 leading-relaxed max-w-sm">
              Empresa de desenvolvimento e fabricação de software. Transformamos
              ideias em softwares de alto impacto, com tecnologia sustentável e
              engenharia de ponta.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-tech-800 text-tech-400 transition-all duration-300 hover:bg-eco-500 hover:text-white hover:-translate-y-0.5"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white">Navegação</h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-tech-400 transition-colors hover:text-eco-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white">Soluções</h4>
            <ul className="mt-5 space-y-3">
              {[
                'Software Sob Medida',
                'Arquitetura de Sistemas',
                'Consultoria Tech',
                'Integrações & Nuvem',
              ].map((s) => (
                <li key={s}>
                  <a href="#solucoes" className="text-tech-400 transition-colors hover:text-eco-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white">Contato</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-eco-400" />
                <span className="text-tech-400">Av. Paulista, 1000 — São Paulo, SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-eco-400" />
                <a href="mailto:contato@ecotech.com" className="text-tech-400 transition-colors hover:text-eco-400">
                  contato@ecotech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-eco-400" />
                <a href="tel:+5511999999999" className="text-tech-400 transition-colors hover:text-eco-400">
                  +55 11 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-tech-800 pt-8">
          <p className="text-sm text-tech-500">
            © {new Date().getFullYear()} EcoTech. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-tech-500">
            <a href="#" className="transition-colors hover:text-eco-400">Política de Privacidade</a>
            <a href="#" className="transition-colors hover:text-eco-400">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
