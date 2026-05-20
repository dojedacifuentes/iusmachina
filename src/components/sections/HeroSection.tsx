'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ExternalLink } from 'lucide-react';

const FOR_WHOM = [
  'Abogados y estudios jurídicos',
  'Instituciones académicas',
  'Pymes y profesionales',
  'Docentes e investigadores',
];

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="hero" className="min-h-[92vh] flex items-center py-20 pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Brand label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] text-zinc-500 mono uppercase tracking-widest font-medium">
              Ojeda &amp; Andrade Labs · IusMachina
            </span>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Plataformas LegalTech,{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, oklch(0.71 0.17 200) 0%, oklch(0.55 0.22 264) 100%)',
                }}
              >
                automatización documental
              </span>{' '}
              y flujos de IA para procesos profesionales complejos.
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            Diseñamos sistemas digitales a medida para ordenar información, automatizar tareas repetitivas,
            generar documentos, gestionar clientes, estudiar materias jurídicas y aplicar IA con criterio
            profesional, seguridad y diseño funcional.
          </motion.p>

          {/* For whom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {FOR_WHOM.map(label => (
              <span
                key={label}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-zinc-500 mono"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('evaluacion')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
            >
              <Zap className="w-4 h-4" />
              Evaluar mi compatibilidad IA
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('portafolio')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
            >
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('prompt-lab')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-indigo-300 border border-indigo-500/25 bg-indigo-500/6 hover:bg-indigo-500/12 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Probar Prompt Lab
            </motion.button>
          </motion.div>

          {/* Divider / scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="pt-4"
          >
            <button
              onClick={() => scrollTo('evaluacion')}
              className="flex flex-col items-center gap-1.5 mx-auto text-zinc-700 hover:text-zinc-500 transition-colors"
            >
              <span className="text-[10px] mono uppercase tracking-widest">Iniciar evaluación</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4 rotate-90" />
              </motion.div>
            </button>
          </motion.div>

        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto"
        >
          {[
            { n: '7+', label: 'Proyectos construidos' },
            { n: '100%', label: 'Sin backend genérico' },
            { n: '5', label: 'Líneas IusMachina' },
            { n: 'IA+Derecho', label: 'Criterio doble' },
          ].map(({ n, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-center"
            >
              <div className="text-lg font-black text-white mono">{n}</div>
              <div className="text-[11px] text-zinc-600 mt-0.5 leading-snug">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
