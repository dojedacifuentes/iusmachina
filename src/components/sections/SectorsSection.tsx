'use client';
import { motion } from 'framer-motion';
import { Scale, User, Building2, GraduationCap } from 'lucide-react';

const sectors = [
  {
    icon: Scale,
    title: 'Abogados y estudiantes de Derecho',
    desc: 'Herramientas para gestión de causas, estudio del Derecho, preparación de examen de grado, automatización documental, análisis de información y talleres de IA jurídica.',
    items: ['LexPanel', 'Simuladores de grado', 'Modelos documentales', 'Gestión de causas', 'Talleres de IA jurídica'],
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
    tag: 'Legaltech',
  },
  {
    icon: User,
    title: 'Profesionales independientes',
    desc: 'Paneles personalizados para psicólogos, kinesiólogos, médicos, personal trainers, consultores y otros profesionales que necesitan ordenar clientes, sesiones, agenda y reportes.',
    items: ['Ficha de cliente', 'Agenda', 'Seguimiento', 'Reportes', 'Formularios'],
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
    tag: 'Apps personalizadas',
  },
  {
    icon: Building2,
    title: 'Pymes comerciales',
    desc: 'Sistemas de captación, simuladores, paneles de leads, propuestas exportables y landing pages inteligentes para servicios comerciales.',
    items: ['Landing inteligente', 'Simulador', 'Panel de leads', 'Generador de propuestas', 'Botón WhatsApp'],
    color: 'border-violet-500/20 bg-violet-500/5',
    accent: 'text-violet-400',
    tag: 'Pymes',
  },
  {
    icon: GraduationCap,
    title: 'Universidades, talleres y programas académicos',
    desc: 'Plataformas para cursos, talleres, módulos, materiales, inscripciones, evaluaciones, recursos y comunidades formativas.',
    items: ['Módulos', 'Materiales', 'Inscripciones', 'Evaluaciones', 'Biblioteca de recursos'],
    color: 'border-emerald-500/20 bg-emerald-500/5',
    accent: 'text-emerald-400',
    tag: 'Educación',
  },
];

export function SectorsSection() {
  return (
    <section id="sectores" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Sectores
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Sectores donde aplicamos soluciones
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {sectors.map(({ icon: Icon, title, desc, items, color, accent, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border p-6 space-y-4 card-surface-hover ${color}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${accent} shrink-0`} />
                  <h3 className={`text-sm font-semibold ${accent} leading-tight`}>{title}</h3>
                </div>
                <span className={`shrink-0 text-[10px] mono font-medium px-2 py-0.5 rounded-md border ${color} ${accent}`}>
                  {tag}
                </span>
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>

              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded-md border border-white/[0.07] bg-white/[0.03] text-[11px] text-zinc-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
