'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, ArrowRight, Star } from 'lucide-react';
import { projects, CATEGORIES, type ProjectCategory } from '@/data/projects';

const statusColors: Record<string, string> = {
  'Demo funcional': 'text-emerald-400 border-emerald-500/25 bg-emerald-500/8',
  'Prototipo': 'text-amber-400 border-amber-500/25 bg-amber-500/8',
  'Plataforma activa': 'text-cyan-400 border-cyan-500/25 bg-cyan-500/8',
  'En desarrollo': 'text-indigo-400 border-indigo-500/25 bg-indigo-500/8',
  'Repositorio': 'text-zinc-400 border-zinc-500/25 bg-zinc-500/8',
};

const categoryColors: Record<string, string> = {
  'Legaltech': 'text-cyan-400',
  'Estudio del Derecho': 'text-indigo-400',
  'Talleres': 'text-violet-400',
  'Apps personalizadas': 'text-amber-400',
  'Pymes': 'text-emerald-400',
  'RPG jurídico': 'text-rose-400',
  'IA y prompting': 'text-blue-400',
};

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const filtered =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="portafolio" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Portafolio aplicado
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Proyectos reales y prototipos funcionales
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Cada proyecto funciona como una demostración de capacidades: diseño de interfaces,
            organización de información, automatización documental, IA aplicada, educación jurídica,
            simuladores, dashboards y despliegue rápido en GitHub y Vercel.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-semibold text-white">Proyectos destacados</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-2xl border border-amber-500/15 bg-amber-500/4 p-4 space-y-3 card-surface-hover"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className={`text-xs font-medium ${categoryColors[p.category] ?? 'text-zinc-400'}`}>
                    {p.category}
                  </span>
                  <span className={`text-[10px] mono px-2 py-0.5 rounded-md border ${statusColors[p.status] ?? ''}`}>
                    {p.status}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{p.title}</div>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed line-clamp-2">{p.description}</p>
                </div>
                <p className="text-[11px] text-zinc-600 italic leading-relaxed">{p.caseNote}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Filter */}
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-semibold text-white">Explorar todos los proyectos</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                    : 'border border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.12]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 space-y-4 card-surface-hover"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs font-medium ${categoryColors[p.category] ?? 'text-zinc-400'}`}>
                      {p.category}
                    </span>
                    <span className={`text-[10px] mono px-2 py-0.5 rounded-md border ${statusColors[p.status] ?? ''}`}>
                      {p.status}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div>
                    <div className="text-sm font-semibold text-white">{p.title}</div>
                    <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{p.description}</p>
                  </div>

                  {/* Problem */}
                  <div className="rounded-lg bg-white/[0.02] border border-white/[0.05] p-2.5">
                    <div className="text-[10px] text-zinc-700 uppercase tracking-widest mono mb-1">Problema</div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{p.problem}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.02] text-[10px] text-zinc-600 mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Case note */}
                  <p className="text-[11px] text-zinc-600 italic leading-relaxed">{p.caseNote}</p>

                  {/* Links */}
                  {(p.demoUrl || p.repoUrl) && (
                    <div className="flex gap-3 pt-1">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" /> Ver demo
                        </a>
                      )}
                      {p.repoUrl && (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-300 transition-colors"
                        >
                          <Code2 className="w-3 h-3" /> Ver repositorio
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center space-y-4"
        >
          <h3 className="text-lg font-bold text-white">
            ¿Quieres una plataforma similar para tu estudio, curso, consulta profesional o negocio?
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => scrollTo('contacto')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
            >
              Solicitar diagnóstico
            </button>
            <button
              onClick={() => scrollTo('iusmachina')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
            >
              Ver IusMachina <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
