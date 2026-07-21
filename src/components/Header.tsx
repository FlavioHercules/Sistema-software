import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-tech-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 shadow-lg shadow-eco-500/30 transition-transform duration-300 group-hover:scale-110">
            <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">
            <span className="text-eco-600">Eco</span>
            <span className="text-tech-900">Tech</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-tech-600 hover:text-eco-600 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-eco-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eco-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-eco-500/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Fale com um Especialista</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-eco-700 to-eco-600 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">→</span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-tech-700 hover:bg-tech-100 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass mx-4 mt-3 rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-tech-700 hover:bg-eco-50 hover:text-eco-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-eco-500/30"
          >
            Fale com um Especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
