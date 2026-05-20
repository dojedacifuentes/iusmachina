'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { href: '#evaluacion', label: 'Evaluación IA' },
  { href: '#soluciones', label: 'Soluciones' },
  { href: '#simulador', label: 'Simulador' },
  { href: '#portafolio', label: 'Proyectos' },
  { href: '#metodo', label: 'Método' },
  { href: '#contacto', label: 'Contacto' },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollTo(href.replace('#', ''));
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-[oklch(0.07_0.015_250/0.94)] border-b border-white/[0.07]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5 shrink-0 group"
          >
            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div>
              <span className="text-sm font-bold text-white tracking-tight">Ojeda &amp; Andrade</span>
              <span className="text-sm font-bold text-cyan-400 tracking-tight"> Labs</span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNav(href)}
                className="px-3 py-1.5 text-[13px] text-zinc-400 hover:text-zinc-200 rounded-lg hover:bg-white/[0.04] transition-all"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNav('#evaluacion')}
              className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-cyan-500/35 bg-cyan-500/10 text-cyan-300 text-xs font-bold hover:bg-cyan-500/18 transition-all"
            >
              <Zap className="w-3.5 h-3.5" />
              Evaluar mi compatibilidad IA
            </motion.button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-200 rounded-lg hover:bg-white/[0.06] transition-colors"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-x-0 top-14 z-50 lg:hidden border-b border-white/[0.07] bg-[oklch(0.07_0.015_250/0.98)] backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
                {navItems.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNav(href)}
                    className="w-full text-left px-3 py-2.5 text-sm text-zinc-400 hover:text-zinc-200 rounded-lg hover:bg-white/[0.04] transition-all"
                  >
                    {label}
                  </button>
                ))}
                <div className="pt-2 pb-1">
                  <button
                    onClick={() => handleNav('#evaluacion')}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-500/35 bg-cyan-500/10 text-cyan-300 text-sm font-bold hover:bg-cyan-500/18 transition-all"
                  >
                    <Zap className="w-4 h-4" />
                    Evaluar mi compatibilidad IA
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
