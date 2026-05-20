'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Scale, Cpu, Lock, ExternalLink, Mail } from 'lucide-react';
import { team } from '@/data/team';

const pillars = [
  {
    icon: Scale,
    title: 'Criterio jurídico',
    desc: 'Entendemos el lenguaje, los procesos y las exigencias del trabajo legal.',
    color: 'text-cyan-400',
    bg: 'border-cyan-500/20 bg-cyan-500/5',
  },
  {
    icon: Cpu,
    title: 'Capacidad técnica aplicada',
    desc: 'Diseñamos plataformas, dashboards, formularios y flujos funcionales con herramientas modernas.',
    color: 'text-indigo-400',
    bg: 'border-indigo-500/20 bg-indigo-500/5',
  },
  {
    icon: Lock,
    title: 'Seguridad y responsabilidad',
    desc: 'Integramos buenas prácticas de privacidad, ciberseguridad y uso responsable de IA desde el diseño.',
    color: 'text-violet-400',
    bg: 'border-violet-500/20 bg-violet-500/5',
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-28">
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
            Sobre nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            El equipo detrás de Ojeda &amp; Andrade Labs
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Ojeda &amp; Andrade Labs nace de la convergencia entre experiencia jurídica,
            investigación académica, dirección de proyectos tecnológicos, inteligencia
            artificial aplicada y ejercicio profesional del Derecho.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-2xl border p-6 space-y-5 card-surface-hover ${member.color}`}
            >
              {/* Avatar + name */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-black text-lg mono shrink-0 ${member.color} ${member.accent}`}
                >
                  {member.initials}
                </div>
                <div>
                  <div className={`font-bold text-base ${member.accent}`}>{member.name}</div>
                  <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{member.role}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">{member.description}</p>

              {/* Credentials */}
              <ul className="space-y-1.5">
                {member.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-xs text-zinc-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-zinc-600 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>

              {/* Quote */}
              <blockquote className={`text-xs italic leading-relaxed ${member.accent} opacity-80 border-l-2 pl-3 border-current`}>
                {member.quote}
              </blockquote>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {member.badges.map((b) => (
                  <span
                    key={b}
                    className={`px-2 py-0.5 rounded-md border text-[10px] font-medium mono ${member.color} ${member.accent}`}
                  >
                    {b}
                  </span>
                ))}
              </div>

              {/* Contact links */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/[0.05]">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-[11px] font-medium ${member.accent} opacity-70 hover:opacity-100 transition-opacity`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-1.5 text-[11px] text-zinc-600 hover:text-zinc-400 mono transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {member.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 space-y-8"
        >
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-white">Por qué este enfoque importa</h3>
            <p className="text-sm text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              La mayoría de las soluciones digitales para abogados y profesionales fracasan porque
              no entienden el flujo real del trabajo: documentos dispersos, plazos, información
              sensible, clientes, tareas repetitivas y criterios técnicos difíciles de traducir
              en software. Ojeda &amp; Andrade Labs combina conocimiento jurídico, experiencia
              académica, ejercicio profesional, IA aplicada y criterio de seguridad para diseñar
              herramientas que no solo se ven bien, sino que sirven.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, desc, color, bg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-xl border p-4 space-y-2.5 ${bg}`}
              >
                <Icon className={`w-5 h-5 ${color}`} />
                <div className={`text-sm font-semibold ${color}`}>{title}</div>
                <p className="text-xs text-zinc-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
