'use client';
import { motion } from 'framer-motion';
import { Users, GraduationCap, FileText, Zap, Shield, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'LexPanel Abogados',
    icon: Users,
    title: 'LexPanel Abogados',
    desc: 'Panel para gestión de clientes, causas, documentos, tareas, plazos y reportes jurídicos.',
    color: 'border-cyan-500/25 bg-cyan-500/5',
    accent: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    id: 'LexPanel Grado',
    icon: GraduationCap,
    title: 'LexPanel Grado',
    desc: 'Plataforma de estudio para examen de grado: preguntas orales, respuestas modelo, flashcards, mapas de artículos y simuladores.',
    color: 'border-indigo-500/25 bg-indigo-500/5',
    accent: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    id: 'LexDocs',
    icon: FileText,
    title: 'LexDocs',
    desc: 'Automatización de documentos jurídicos mediante formularios inteligentes, minutas, modelos, informes y exportación PDF.',
    color: 'border-violet-500/25 bg-violet-500/5',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
  },
  {
    id: 'LexPrompt',
    icon: Zap,
    title: 'LexPrompt',
    desc: 'Generador de prompts jurídicos según materia, finalidad, plataforma de IA, documentos adjuntos y nivel de profundidad.',
    color: 'border-amber-500/25 bg-amber-500/5',
    accent: 'text-amber-400',
    iconBg: 'bg-amber-500/15 border-amber-500/30',
  },
  {
    id: 'LexSecurity',
    icon: Shield,
    title: 'LexSecurity',
    desc: 'Buenas prácticas de ciberseguridad y uso responsable de IA para estudios jurídicos y profesionales del Derecho.',
    color: 'border-emerald-500/25 bg-emerald-500/5',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
  },
];

export function IusMachinaSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="iusmachina" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[oklch(0.08_0.02_200/0.9)] to-[oklch(0.08_0.015_250/0.7)] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 grid-bg-fine opacity-25" />
          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Zap className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest mono font-medium">
                  Línea jurídica principal
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, oklch(0.71 0.17 200) 0%, oklch(0.55 0.22 264) 100%)',
                  }}
                >
                  IusMachina
                </h2>
              </div>
            </div>
            <p className="text-sm text-zinc-400 font-medium mb-2">
              Tecnología jurídica e inteligencia artificial aplicada al Derecho.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6">
              IusMachina es la línea jurídica de Ojeda &amp; Andrade Labs. Desarrolla herramientas
              para abogados, estudiantes de Derecho, estudios jurídicos e instituciones académicas,
              integrando IA, automatización documental, gestión de información, simuladores,
              dashboards y formación aplicada.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('demos')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
              >
                Ver demos
              </button>
              <button
                onClick={() => scrollTo('contacto')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
              >
                Solicitar acceso <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(({ id, icon: Icon, title, desc, color, accent, iconBg }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={`rounded-2xl border p-5 space-y-3.5 card-surface-hover ${color}`}
            >
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${iconBg}`}>
                <Icon className={`w-4 h-4 ${accent}`} />
              </div>
              <div>
                <div className={`text-sm font-bold ${accent} mono`}>{title}</div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
