'use client';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Calendar, Clock, Bot, FileText, Brain } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TRAINING_MODULES, TRAINING_BADGES } from '@/data/training';

const MODULE_ICONS = [Bot, FileText, Brain];

export function TrainingPreviewSection() {
  const router = useRouter();

  const waUrl = `https://wa.me/56934301930?text=${encodeURIComponent(
    'Hola, quiero información sobre el Taller de IA Jurídica Aplicada.'
  )}`;

  return (
    <section id="capacitacion" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Capacitación
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Taller de IA Jurídica Aplicada
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Programa práctico de 3 módulos para abogados y estudiantes de Derecho que quieren incorporar IA de manera profesional y verificable.
          </p>

          {/* Date + duration chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
              <Calendar className="w-3 h-3" />
              Próximo: 8 SEP 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-700/40 bg-zinc-500/5 text-zinc-400 text-xs font-medium">
              <Clock className="w-3 h-3" />
              6 horas totales · 3 módulos
            </span>
          </div>
        </motion.div>

        {/* Module cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {TRAINING_MODULES.map((mod, i) => {
            const Icon = MODULE_ICONS[i];
            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className={`rounded-2xl border p-5 space-y-4 card-surface-hover group cursor-pointer ${mod.color}`}
                onClick={() => router.push('/capacitacion')}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-9 h-9 rounded-xl border ${mod.border} bg-white/[0.03] flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${mod.accent}`} />
                  </div>
                  <span className={`text-[10px] mono font-semibold ${mod.accent} opacity-60`}>
                    {mod.displayDate}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className={`text-[10px] mono uppercase tracking-wider ${mod.accent} opacity-70`}>
                    Módulo {mod.id} · {mod.duration}
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-snug">{mod.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{mod.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {mod.tools.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2"
        >
          {TRAINING_BADGES.map(badge => (
            <span
              key={badge}
              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-[11px]"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => router.push('/capacitacion')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 hover:bg-cyan-500/22 transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            Ver programa completo
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600/50 transition-all"
          >
            Solicitar información
          </a>
        </motion.div>

      </div>
    </section>
  );
}
