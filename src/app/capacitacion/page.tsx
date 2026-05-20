'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  Clock,
  ChevronDown,
  Bot,
  FileText,
  Brain,
  CheckCircle2,
  Target,
  Wrench,
  Users,
  ArrowRight,
  ExternalLink,
  Zap,
  MessageSquare,
  Download,
  BookOpen,
} from 'lucide-react';
import { TRAINING_MODULES, TRAINING_DIFFERENTIALS, TYPE_LABELS } from '@/data/training';
import { team } from '@/data/team';

const MODULE_ICONS = [Bot, FileText, Brain];

const TYPE_COLORS: Record<string, string> = {
  theory: 'bg-zinc-500/15 text-zinc-400 border-zinc-500/20',
  demo: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  analysis: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  practice: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/20',
  workshop: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  closing: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
};

const WA_NUMBER = '56934301930';
const WA_DOSSIER = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  'Hola, quiero solicitar el dossier del Taller DIAT de IA Jurídica Aplicada.'
)}`;
const WA_INFO = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  'Hola, quiero información sobre el Taller de IA Jurídica Aplicada (próxima fecha: 8 SEP 2026).'
)}`;

export default function CapacitacionPage() {
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<Record<number, string>>({});

  const toggleModule = (id: number) =>
    setOpenModule(prev => (prev === id ? null : id));

  const getTab = (id: number) => activeTab[id] ?? 'contenidos';
  const setTab = (id: number, tab: string) =>
    setActiveTab(prev => ({ ...prev, [id]: tab }));

  return (
    <div className="min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
              Capacitación aplicada · DIAT
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Taller de IA Jurídica
              <span className="text-cyan-400"> Aplicada</span>
            </h1>
            <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Programa de formación práctica diseñado para abogados, estudiantes de Derecho y equipos jurídicos que quieren incorporar inteligencia artificial de manera profesional, crítica y verificable.
            </p>
          </motion.div>

          {/* Metadata chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { icon: Calendar, label: 'Inicio: 8 SEP 2026', color: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300' },
              { icon: Clock, label: '6 horas totales · 3 módulos', color: 'border-zinc-700/40 bg-zinc-500/5 text-zinc-400' },
              { icon: GraduationCap, label: 'Certificación DIAT', color: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300' },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${color}`}>
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <a
              href={WA_INFO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/22 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
            <a
              href={WA_DOSSIER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all"
            >
              <Download className="w-4 h-4" />
              Solicitar dossier
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Módulos ─────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">Programa</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Contenido por módulo</h2>
          </div>

          <div className="space-y-3">
            {TRAINING_MODULES.map((mod, i) => {
              const Icon = MODULE_ICONS[i];
              const isOpen = openModule === mod.id;
              const tab = getTab(mod.id);

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${mod.color}`}
                >
                  {/* Module header (clickable) */}
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center gap-4 p-5 text-left group"
                  >
                    <div className={`w-10 h-10 rounded-xl border ${mod.border} bg-white/[0.03] flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${mod.accent}`} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <div className={`text-[10px] mono uppercase tracking-wider ${mod.accent} opacity-70`}>
                        Módulo {mod.id} · {mod.duration} · {mod.displayDate}
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">{mod.title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed hidden sm:block">{mod.subtitle}</p>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 space-y-5 border-t border-white/[0.05]">
                          {/* Tabs */}
                          <div className="flex flex-wrap gap-1 pt-4">
                            {[
                              { key: 'contenidos', label: 'Contenidos' },
                              { key: 'objetivos', label: 'Objetivos' },
                              { key: 'timeline', label: 'Cronograma' },
                              { key: 'actividad', label: 'Actividad' },
                            ].map(({ key, label }) => (
                              <button
                                key={key}
                                onClick={() => setTab(mod.id, key)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                  tab === key
                                    ? `${mod.accent} bg-white/[0.07] border border-white/[0.1]`
                                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.04]'
                                }`}
                              >
                                {label}
                              </button>
                            ))}
                          </div>

                          {/* Tab: Contenidos */}
                          {tab === 'contenidos' && (
                            <div className="space-y-2">
                              {mod.contents.map((c, ci) => (
                                <div key={ci} className="flex items-start gap-2.5">
                                  <BookOpen className={`w-3.5 h-3.5 ${mod.accent} shrink-0 mt-0.5`} />
                                  <span className="text-xs text-zinc-400 leading-relaxed">{c}</span>
                                </div>
                              ))}
                              <div className="flex flex-wrap gap-1 pt-2">
                                {mod.tools.map(t => (
                                  <span
                                    key={t}
                                    className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-[10px]"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Tab: Objetivos */}
                          {tab === 'objetivos' && (
                            <div className="space-y-2">
                              {mod.objectives.map((obj, oi) => (
                                <div key={oi} className="flex items-start gap-2.5">
                                  <CheckCircle2 className={`w-3.5 h-3.5 ${mod.accent} shrink-0 mt-0.5`} />
                                  <span className="text-xs text-zinc-400 leading-relaxed">{obj}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tab: Cronograma */}
                          {tab === 'timeline' && (
                            <div className="space-y-2">
                              {mod.timeline.map((item, ti) => (
                                <div
                                  key={ti}
                                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                                >
                                  <div className="shrink-0 space-y-0.5">
                                    <span className={`text-[10px] mono font-bold ${mod.accent}`}>{item.time}</span>
                                    <span
                                      className={`block text-[9px] px-1.5 py-0.5 rounded border ${
                                        TYPE_COLORS[item.type] ?? 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                                      }`}
                                    >
                                      {TYPE_LABELS[item.type] ?? item.type}
                                    </span>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-zinc-300">{item.topic}</p>
                                    <p className="text-[11px] text-zinc-500 leading-relaxed mt-0.5">{item.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Tab: Actividad */}
                          {tab === 'actividad' && (
                            <div className="space-y-4">
                              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-2">
                                <div className="flex items-center gap-2">
                                  <Wrench className={`w-3.5 h-3.5 ${mod.accent}`} />
                                  <span className={`text-[10px] mono uppercase tracking-wider ${mod.accent}`}>Actividad práctica</span>
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed">{mod.activity}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] space-y-2">
                                <div className="flex items-center gap-2">
                                  <Target className={`w-3.5 h-3.5 ${mod.accent}`} />
                                  <span className={`text-[10px] mono uppercase tracking-wider ${mod.accent}`}>Entregable</span>
                                </div>
                                <p className="text-xs text-zinc-400 leading-relaxed">{mod.deliverable}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Diferenciales ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">Diferenciales</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">¿Por qué este taller?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {TRAINING_DIFFERENTIALS.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-zinc-800/60 bg-white/[0.02] card-surface-hover"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-zinc-400 leading-relaxed">{diff}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilitadores ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">Equipo</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Facilitadores</h2>
            <p className="text-sm text-zinc-500">Diseñado e impartido por quienes viven la intersección entre Derecho e IA.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className={`rounded-2xl border p-6 space-y-4 card-surface-hover ${member.color}`}
              >
                {/* Avatar + name */}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl border ${member.color.replace('bg-', 'border-').replace('/5', '/30')} bg-white/[0.05] flex items-center justify-center shrink-0`}>
                    <span className={`text-sm font-black ${member.accent}`}>{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{member.name}</h3>
                    <p className={`text-xs ${member.accent} leading-snug mt-0.5`}>{member.role}</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-500 leading-relaxed">{member.description}</p>

                {/* Areas */}
                <div className="flex flex-wrap gap-1">
                  {member.areas.slice(0, 4).map(area => (
                    <span
                      key={area}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-zinc-400 text-[10px]"
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs ${member.accent} hover:opacity-80 transition-opacity`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dossier + Contact block ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center space-y-6"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 mx-auto">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">¿Tu institución o equipo quiere este taller?</h2>
              <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
                El programa puede adaptarse a instituciones, facultades de Derecho, estudios jurídicos y equipos específicos. Cuéntanos tu contexto y lo diseñamos a medida.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_INFO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/22 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Consultar por WhatsApp
              </a>
              <a
                href={WA_DOSSIER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all"
              >
                <Download className="w-4 h-4" />
                Solicitar dossier
              </a>
              <a
                href="mailto:dojedacifuentes@gmail.com?subject=Taller%20IA%20Jur%C3%ADdica%20Aplicada"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-zinc-700/50 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
                Enviar correo
              </a>
            </div>

            <p className="text-[11px] text-zinc-600">
              dojedacifuentes@gmail.com · diegoandradecortes@gmail.com · WA +56 9 3430 1930
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Eval IA block ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center space-y-4">
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            ¿Listo para más?
          </div>
          <h2 className="text-2xl font-bold text-white">Evalúa la compatibilidad IA de tu práctica jurídica</h2>
          <p className="text-sm text-zinc-500 max-w-lg mx-auto leading-relaxed">
            Nuestro evaluador gratuito identifica qué procesos de tu trabajo son candidatos reales para automatización con IA.
          </p>
          <div className="pt-2">
            <a
              href="/#evaluacion"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/22 transition-all"
            >
              <Zap className="w-4 h-4" />
              Evaluar mi compatibilidad IA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
