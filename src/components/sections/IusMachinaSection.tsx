'use client';
import { motion } from 'framer-motion';
import { Users, GraduationCap, FileText, Zap, Shield, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 'LexPanel Abogados',
    icon: Users,
    title: 'LexPanel Abogados',
    use: 'Gestión de causas y clientes',
    desc: 'Panel para gestión de clientes, causas, documentos, tareas, plazos y reportes jurídicos.',
    status: 'Demo',
    color: 'border-cyan-500/25 bg-cyan-500/5',
    accent: 'text-cyan-400',
    statusColor: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/6',
  },
  {
    id: 'LexPanel Grado',
    icon: GraduationCap,
    title: 'LexPanel Grado',
    use: 'Preparación examen de grado',
    desc: 'Plataforma de estudio con preguntas orales, respuestas modelo, flashcards y simuladores.',
    status: 'Demo',
    color: 'border-indigo-500/25 bg-indigo-500/5',
    accent: 'text-indigo-400',
    statusColor: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/6',
  },
  {
    id: 'LexDocs',
    icon: FileText,
    title: 'LexDocs',
    use: 'Automatización de documentos',
    desc: 'Formularios inteligentes, plantillas, minutas, contratos e informes estructurados.',
    status: 'Prototipo',
    color: 'border-violet-500/25 bg-violet-500/5',
    accent: 'text-violet-400',
    statusColor: 'text-amber-400 border-amber-500/25 bg-amber-500/6',
  },
  {
    id: 'LexPrompt',
    icon: Zap,
    title: 'LexPrompt',
    use: 'Prompts jurídicos precisos',
    desc: 'Generador de prompts jurídicos según materia, plataforma, finalidad y criterios éticos.',
    status: 'Demo',
    color: 'border-amber-500/25 bg-amber-500/5',
    accent: 'text-amber-400',
    statusColor: 'text-emerald-400 border-emerald-500/25 bg-emerald-500/6',
  },
  {
    id: 'LexSecurity',
    icon: Shield,
    title: 'LexSecurity',
    use: 'Ciberseguridad aplicada',
    desc: 'Buenas prácticas y uso responsable de IA para estudios jurídicos y profesionales.',
    status: 'Prototipo',
    color: 'border-emerald-500/25 bg-emerald-500/5',
    accent: 'text-emerald-400',
    statusColor: 'text-amber-400 border-amber-500/25 bg-amber-500/6',
  },
];

export function IusMachinaSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="iusmachina" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Línea LegalTech
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            IusMachina:{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(135deg, oklch(0.71 0.17 200) 0%, oklch(0.55 0.22 264) 100%)',
              }}
            >
              LegalTech aplicada al Derecho real.
            </span>
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
            IusMachina es la línea LegalTech de Ojeda &amp; Andrade Labs: un espacio para diseñar herramientas
            jurídicas, automatización documental, flujos de IA, asistentes de estudio y plataformas
            profesionales para el mundo jurídico, académico y profesional.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('portafolio')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
            >
              Ver proyectos
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/8 transition-all"
            >
              Solicitar acceso <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {products.map(({ id, icon: Icon, title, use, desc, status, color, accent, statusColor }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border p-5 space-y-4 card-surface-hover ${color}`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className={`w-9 h-9 rounded-xl border ${color} bg-white/[0.03] flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${accent}`} />
                </div>
                <span className={`text-[10px] mono px-2 py-0.5 rounded-md border font-medium ${statusColor}`}>
                  {status}
                </span>
              </div>
              <div>
                <div className={`text-sm font-bold ${accent} mono`}>{title}</div>
                <div className="text-[11px] text-zinc-600 mono mt-0.5">{use}</div>
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
