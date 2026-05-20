'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { tools, workflows, TOOL_CATEGORIES, type ToolCategory } from '@/data/toolkit';

export function ToolkitSection() {
  const [activeCategory, setActiveCategory] = useState<ToolCategory>('Todos');

  const filtered =
    activeCategory === 'Todos' ? tools : tools.filter(t => t.category === activeCategory);

  return (
    <section id="toolkit" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            IusToolkit
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Arsenal estratégico de herramientas IA
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            No se trata de usar una sola IA, sino de diseñar flujos inteligentes entre varias.
            Herramientas, flujos y combinaciones para trabajo jurídico, académico y profesional.
          </p>
        </motion.div>

        {/* Tools */}
        <div className="space-y-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {TOOL_CATEGORIES.map(cat => (
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

          {/* Tool cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`rounded-2xl border ${tool.border} ${tool.bg} p-4 space-y-3 card-surface-hover group`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className={`text-sm font-bold ${tool.accent}`}>{tool.name}</div>
                    <div className="text-[10px] text-zinc-600 mono mt-0.5">{tool.category}</div>
                  </div>
                  {tool.url && (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-lg hover:bg-white/[0.06] ${tool.accent}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed">{tool.description}</p>

                <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-2">
                  <div className="text-[9px] text-zinc-700 uppercase tracking-widest mono mb-1">Mejor para</div>
                  <p className="text-[11px] text-zinc-500 leading-relaxed">{tool.bestFor}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {tool.badges.map(b => (
                    <span key={b} className={`px-1.5 py-0.5 rounded border text-[10px] mono font-medium ${tool.border} ${tool.accent} opacity-70`}>
                      {b}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflows */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
              Flujos recomendados
            </div>
            <h3 className="text-2xl font-bold text-white">
              Workflows multi-IA
            </h3>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Cada IA tiene fortalezas distintas. Estos flujos muestran cómo encadenarlas para obtener resultados más sólidos.
            </p>
          </motion.div>

          <div className="space-y-5">
            {workflows.map((wf, wi) => (
              <motion.div
                key={wf.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: wi * 0.08, duration: 0.5 }}
                className={`rounded-2xl border ${wf.border} ${wf.bg} p-5 sm:p-6 space-y-5`}
              >
                {/* Workflow header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-[10px] mono font-bold uppercase tracking-widest ${wf.accent}`}>
                      {wf.category}
                    </span>
                    <h4 className="text-base font-bold text-white mt-0.5">{wf.title}</h4>
                    <p className="text-xs text-zinc-500 mt-0.5">{wf.subtitle}</p>
                  </div>
                </div>

                {/* Steps */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 overflow-x-auto">
                  {wf.steps.map((step, si) => (
                    <div key={si} className="flex items-center gap-2 sm:gap-0 w-full sm:w-auto shrink-0">
                      <div className={`rounded-xl border ${step.color} px-3 py-2.5 min-w-[120px] space-y-1`}>
                        <div className={`text-xs font-bold ${step.iconColor} mono`}>{step.tool}</div>
                        <div className="text-[10px] text-zinc-600">{step.action}</div>
                        <div className="text-[10px] text-zinc-500 border-t border-white/[0.05] pt-1 mt-1">
                          → {step.output}
                        </div>
                      </div>
                      {si < wf.steps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-700 shrink-0 mx-1 sm:mx-2 hidden sm:block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className={`flex items-center gap-2 text-xs font-medium ${wf.accent}`}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                  Resultado: {wf.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
