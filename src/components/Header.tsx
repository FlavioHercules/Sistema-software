'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { navLinks } from '@/data/content';

function useScrollThreshold(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollThreshold(20);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-tech-950/85 shadow-lg shadow-black/20 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <RouterNavLink to="/" className="flex items-center gap-2.5 group">
          <motion.span
            layoutId="leaf-logo"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-eco-300/40 bg-gradient-to-br from-eco-400 to-cyan-500 shadow-lg shadow-eco-500/30 transition-transform duration-300 group-hover:scale-110"
          >
            <Leaf className="h-5 w-5 text-white" strokeWidth={2.5} />
          </motion.span>

          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="text-eco-400">Eco</span>
            <span className="text-white">Tech</span>
          </span>
        </RouterNavLink>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-eco-300' : 'text-slate-300 hover:text-eco-300'
                }`
              }
            >
              {link.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-eco-500 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <RouterNavLink
            to="/orcamento"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-eco-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-eco-500/40 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Fale com um Especialista</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-eco-700 to-eco-600 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative z-10">→</span>
          </RouterNavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-200 hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-4 mt-3 rounded-2xl border border-white/10 bg-tech-900/95 p-4 flex flex-col gap-1 shadow-xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive ? 'bg-eco-500/10 text-eco-300' : 'text-slate-200 hover:bg-white/10 hover:text-eco-300'
                }`
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
          <RouterNavLink
            to="/orcamento"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-eco-500/30"
          >
            Fale com um Especialista
          </RouterNavLink>
        </nav>
      </div>
    </header>
  );
}