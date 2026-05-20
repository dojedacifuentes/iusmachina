'use client';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileText, GraduationCap, Shield } from 'lucide-react';

const cards = [
  {
    icon: LayoutDashboard,
    title: 'Apps personalizadas',
    desc: 'Plataformas a medida para ordenar procesos internos, gestionar información y mejorar la experiencia de usuarios, clientes o equipos.',
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    icon: FileText,
    title: 'Automatización documental',
    desc: 'Sistemas que transforman formularios y datos en documentos, informes, minutas, contratos, propuestas o reportes exportables.',
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    icon: GraduationCap,
    title: 'Talleres de IA aplicada',
    desc: 'Capacitaciones prácticas sobre IA, prompting, Claude, ChatGPT, Gemini, GitHub, Vercel y flujos de trabajo digital.',
    color: 'border-violet-500/20 bg-violet-500/5',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad aplicada',
    desc: 'Buenas prácticas para proteger información, evitar errores operativos, reducir riesgos digitales y usar IA sin exponer datos sensibles.',
    color: 'border-emerald-500/20 bg-emerald-500/5',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
  },
];

export function WhatWeDoSection() {
  return (
    <section id="que-hacemos" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Qué hacemos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Convertimos procesos complejos en plataformas funcionales
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Diseñamos soluciones digitales para ordenar información, automatizar documentos,
            gestionar clientes, crear experiencias formativas y aplicar IA de forma segura
            en contextos profesionales.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ icon: Icon, title, desc, color, accent, iconBg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl border p-5 space-y-4 card-surface-hover ${color}`}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${iconBg}`}>
                <Icon className={`w-5 h-5 ${accent}`} />
              </div>
              <div>
                <h3 className={`font-semibold text-sm ${accent}`}>{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
