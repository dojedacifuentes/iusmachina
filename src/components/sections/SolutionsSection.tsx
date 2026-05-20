'use client';
import { motion } from 'framer-motion';
import { Bot, FileText, Zap, Shield, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'Apps y plataformas a medida',
    desc: 'Dashboards, paneles internos, sistemas de gestión, plataformas educativas, apps comerciales y herramientas de apoyo profesional construidas desde el proceso real, no desde plantillas genéricas.',
    benefits: ['Centralización de información', 'Mejor trazabilidad', 'Experiencia funcional para usuarios internos y externos'],
    color: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/5',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    icon: FileText,
    title: 'Automatización documental',
    desc: 'Minutas, contratos, informes, reportes, fichas, formularios y documentos estructurados generados desde plantillas inteligentes que eliminan la repetición y reducen los errores manuales.',
    benefits: ['Menos tareas repetitivas', 'Menor error manual', 'Mayor velocidad de respuesta'],
    color: 'text-indigo-400',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/5',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    icon: Zap,
    title: 'IA aplicada y Prompt Engineering',
    desc: 'Prompts jurídicos, flujos multi-IA, asistentes de estudio, análisis documental y herramientas inteligentes de apoyo. No se trata de usar una sola IA, sino de diseñar sistemas de trabajo.',
    benefits: ['Mejor uso de herramientas IA', 'Flujos más consistentes', 'Resultados más controlados y reutilizables'],
    color: 'text-amber-400',
    border: 'border-amber-500/25',
    bg: 'bg-amber-500/5',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad y uso responsable',
    desc: 'Privacidad, protección de datos, buenas prácticas, límites de IA y seguridad aplicada desde el diseño. Automatizar no significa renunciar al criterio profesional.',
    benefits: ['Menor exposición de información sensible', 'Mayor control de flujos', 'Uso responsable de IA'],
    color: 'text-emerald-400',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/5',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
  },
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Soluciones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Soluciones digitales aplicadas a procesos reales.
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            No vendemos páginas web. Diseñamos sistemas digitales para procesos profesionales complejos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {solutions.map(({ icon: Icon, title, desc, benefits, color, border, bg, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border ${border} ${bg} p-6 sm:p-7 space-y-5 card-surface-hover`}
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${iconBg}`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>

              <div>
                <h3 className={`text-base font-bold ${color}`}>{title}</h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{desc}</p>
              </div>

              <ul className="space-y-2">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-sm text-zinc-500">
                    <CheckCircle2 className={`w-4 h-4 ${color} opacity-60 mt-0.5 shrink-0`} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-zinc-600 leading-relaxed max-w-2xl mx-auto"
        >
          La IA no resuelve procesos mal diseñados. Primero ordenamos el flujo; después integramos tecnología.
        </motion.p>

      </div>
    </section>
  );
}
