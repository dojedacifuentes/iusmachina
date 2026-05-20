'use client';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, GraduationCap, Scale, BarChart2, Search } from 'lucide-react';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Desarrollo de apps personalizadas',
    desc: 'Plataformas funcionales adaptadas al flujo real de cada cliente: gestión interna, paneles, dashboards, formularios, reportes y módulos personalizados.',
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
  },
  {
    icon: FileText,
    title: 'Automatización documental',
    desc: 'Flujos que convierten respuestas, formularios o bases de datos en documentos estructurados y exportables.',
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
  },
  {
    icon: GraduationCap,
    title: 'Talleres y capacitación',
    desc: 'Formamos equipos en IA aplicada, prompting, automatización, herramientas digitales y ciberseguridad práctica.',
    color: 'border-violet-500/20 bg-violet-500/5',
    accent: 'text-violet-400',
  },
  {
    icon: Scale,
    title: 'Plataformas jurídicas',
    desc: 'Herramientas para estudios jurídicos, abogados, estudiantes, ayudantes, docentes y programas académicos.',
    color: 'border-amber-500/20 bg-amber-500/5',
    accent: 'text-amber-400',
  },
  {
    icon: BarChart2,
    title: 'Dashboards comerciales',
    desc: 'Landings inteligentes, simuladores y paneles de leads para pymes, profesionales y servicios especializados.',
    color: 'border-emerald-500/20 bg-emerald-500/5',
    accent: 'text-emerald-400',
  },
  {
    icon: Search,
    title: 'Diagnóstico digital',
    desc: 'Análisis inicial de procesos, riesgos, oportunidades de automatización y posibles soluciones tecnológicas.',
    color: 'border-rose-500/20 bg-rose-500/5',
    accent: 'text-rose-400',
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Soluciones digitales aplicadas
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Soluciones digitales aplicadas a trabajo jurídico, profesional, comercial y académico.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon: Icon, title, desc, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border p-5 space-y-3 card-surface-hover ${color}`}
            >
              <Icon className={`w-5 h-5 ${accent}`} />
              <div>
                <h3 className={`text-sm font-semibold ${accent}`}>{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
