'use client';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function FloatingContact() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <>
      {/* Desktop floating button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => scrollTo('evaluacion')}
        className="hidden md:flex fixed bottom-6 right-6 z-[100] items-center gap-2.5 px-4 py-3 rounded-2xl border border-cyan-500/40 bg-[oklch(0.10_0.018_250/0.97)] backdrop-blur-xl shadow-2xl text-cyan-300 text-xs font-bold hover:bg-cyan-500/12 hover:border-cyan-500/60 transition-all"
        aria-label="Evaluar compatibilidad IA"
      >
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
        </div>
        Evaluar mi compatibilidad IA
        <motion.div
          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.button>

      {/* Mobile sticky bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="md:hidden fixed bottom-0 inset-x-0 z-[100] px-4 pb-4 pt-2 bg-gradient-to-t from-[oklch(0.07_0.015_250)] to-transparent"
      >
        <button
          onClick={() => scrollTo('evaluacion')}
          className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-cyan-500/40 bg-[oklch(0.09_0.018_250/0.97)] backdrop-blur-xl text-cyan-300 text-sm font-bold shadow-xl"
        >
          <Zap className="w-4 h-4" />
          Evaluar mi compatibilidad IA
        </button>
      </motion.div>
    </>
  );
}
