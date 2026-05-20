'use client';
import { motion } from 'framer-motion';
import { Users, GraduationCap, User, Building2, BookOpen, ArrowRight } from 'lucide-react';

const demos = [
  {
    icon: Users,
    title: 'Demo LexPanel Jurídico',
    desc: 'Panel para clientes, causas, documentos, tareas, plazos y reportes jurídicos.',
    status: 'Próximamente',
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
  },
  {
    icon: GraduationCap,
    title: 'Demo LexPanel Grado',
    desc: 'Simulador de examen oral, preguntas de grado, respuestas modelo, artículos clave y flashcards.',
    status: 'Próximamente',
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
  },
  {
    icon: User,
    title: 'Demo Panel Profesional',
    desc: 'Ficha de cliente, agenda, seguimiento, notas internas y reportes exportables.',
    status: 'Próximamente',
    color: 'border-violet-500/20 bg-violet-500/5',
    accent: 'text-violet-400',
  },
  {
    icon: Building2,
    title: 'Demo Landing Comercial',
    desc: 'Página de captación con simulador, formulario, panel de leads y generación de propuestas.',
    status: 'Próximamente',
    color: 'border-amber-500/20 bg-amber-500/5',
    accent: 'text-amber-400',
  },
  {
    icon: BookOpen,
    title: 'Demo Plataforma de Talleres',
    desc: 'Módulos, contenidos, fechas, integrantes, recursos, asistencia y evaluación.',
    status: 'Próximamente',
    color: 'border-emerald-500/20 bg-emerald-500/5',
    accent: 'text-emerald-400',
  },
];

export function DemoLabSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="demos" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Demo Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Laboratorio de demos
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Prototipos funcionales para visualizar soluciones antes de implementarlas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {demos.map(({ icon: Icon, title, desc, status, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className={`rounded-2xl border p-5 space-y-4 card-surface-hover group ${color}`}
            >
              <div className="flex items-start justify-between gap-2">
                <Icon className={`w-5 h-5 ${accent} shrink-0 mt-0.5`} />
                <span className="text-[10px] mono text-zinc-600 border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 rounded-md">
                  {status}
                </span>
              </div>
              <div>
                <h3 className={`text-sm font-semibold ${accent}`}>{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
              <div>
                <button
                  onClick={() => scrollTo('contacto')}
                  className={`flex items-center gap-1.5 text-xs font-medium ${accent} opacity-60 group-hover:opacity-100 transition-opacity`}
                >
                  Solicitar acceso <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
