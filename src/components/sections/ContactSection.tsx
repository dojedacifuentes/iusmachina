'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Zap, X } from 'lucide-react';
import { useDiagnostic } from '@/store/diagnosticContext';

const CONTACT_EMAIL = 'dojedacifuentes@gmail.com';
const WA_NUMBER = '56934301930';

const solutionTypes = [
  'App personalizada',
  'Plataforma jurídica',
  'Automatización documental',
  'Dashboard o panel interno',
  'Taller IA',
  'Diagnóstico digital',
  'Otro',
];

export function ContactSection() {
  const { result: diagResult, clearResult } = useDiagnostic();

  const [form, setForm] = useState({
    name: '',
    org: '',
    type: diagResult?.serviceLabel ? '' : '',
    problem: '',
    hours: '',
    email: '',
    wa: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  function buildDiagnosticBlock() {
    if (!diagResult) return '';
    return `\n\n--- Resultado Evaluación IA ---\nCompatibilidad: ${diagResult.compatibility}%\nNivel: ${diagResult.level}\nPerfil: ${diagResult.profile}\nServicio recomendado: ${diagResult.serviceLabel}\nPrioridad: ${diagResult.priority}\nHoras semanales estimadas: ${diagResult.weeklyHours}`;
  }

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Solicitud — ${form.type || 'Diagnóstico'} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nOrganización / Rubro: ${form.org}\nTipo de solución: ${form.type}\nProblema principal: ${form.problem}\nHoras semanales estimadas: ${form.hours}\nCorreo: ${form.email}\nWhatsApp: ${form.wa}${buildDiagnosticBlock()}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const buildWhatsApp = () => {
    const diagLine = diagResult
      ? `\n\n📊 Evaluación IA:\n- Compatibilidad: ${diagResult.compatibility}%\n- Nivel: ${diagResult.level}\n- Servicio: ${diagResult.serviceLabel}`
      : '';
    const text = encodeURIComponent(
      `Hola, quiero solicitar un diagnóstico.\n\nNombre: ${form.name || '(no indicado)'}\nOrganización: ${form.org || '(no indicado)'}\nTipo de solución: ${form.type || '(no indicado)'}\nProblema: ${form.problem || '(no indicado)'}${diagLine}`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildMailto();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Conversemos sobre tu proceso.
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Cuéntanos qué proceso quieres ordenar, automatizar o convertir en plataforma.
            Te responderemos con una propuesta inicial clara, viable y segura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Diagnostic banner */}
          {diagResult && !sent && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-cyan-500/25 bg-cyan-500/8 p-4 flex items-start gap-3"
            >
              <Zap className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-cyan-400 mb-0.5">
                  Tu diagnóstico se adjuntará a la solicitud
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  {diagResult.compatibility}% compatibilidad · {diagResult.level} · {diagResult.serviceLabel}
                </p>
              </div>
              <button
                onClick={clearResult}
                className="text-zinc-600 hover:text-zinc-400 transition-colors shrink-0"
                aria-label="Quitar diagnóstico"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            {sent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto">
                  <Send className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-sm font-semibold text-white">¡Solicitud enviada!</p>
                <p className="text-xs text-zinc-500">Te contactaremos a la brevedad con una propuesta inicial.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors underline mt-2"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">Nombre *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">Organización o rubro</label>
                    <input
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      placeholder="Estudio jurídico, empresa…"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">Tipo de solución</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.10_0.018_250)] text-sm text-zinc-300 focus:outline-none focus:border-cyan-500/40 transition-all appearance-none"
                    >
                      <option value="">Seleccionar…</option>
                      {solutionTypes.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">Horas semanales estimadas</label>
                    <input
                      name="hours"
                      value={form.hours}
                      onChange={handleChange}
                      placeholder="Ej: 8 horas"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-zinc-500 font-medium">Principal problema o proceso *</label>
                  <textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="¿Qué proceso quieres ordenar, automatizar o digitalizar?"
                    className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">Correo *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.cl"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500 font-medium">WhatsApp (opcional)</label>
                    <input
                      name="wa"
                      value={form.wa}
                      onChange={handleChange}
                      placeholder="+56 9 ..."
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/4 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 flex-1 px-5 py-3 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
                  >
                    <Zap className="w-4 h-4" />
                    Enviar solicitud
                  </motion.button>
                  <a
                    href={buildWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-emerald-300 border border-emerald-500/30 bg-emerald-500/8 hover:bg-emerald-500/15 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar por WhatsApp
                  </a>
                </div>

                <p className="text-[11px] text-zinc-700 text-center pt-1">
                  El primer paso es una conversación, no una compra.
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
