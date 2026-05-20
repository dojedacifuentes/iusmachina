'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const CONTACT_EMAIL = 'dojedacifuentes@gmail.com';
const WA_NUMBER = '+56934301930';

const solutionTypes = [
  'App personalizada',
  'Plataforma jurídica',
  'Taller IA',
  'Automatización documental',
  'Dashboard comercial',
  'Diagnóstico digital',
];

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    org: '',
    type: '',
    desc: '',
    email: '',
    wa: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(`Solicitud — ${form.type || 'Diagnóstico digital'} — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nOrganización / Rubro: ${form.org}\nTipo de solución: ${form.type}\nDescripción del problema: ${form.desc}\nCorreo: ${form.email}\nWhatsApp: ${form.wa}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const buildWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola, me interesa una solución de tipo *${form.type || 'diagnóstico digital'}*.\nNombre: ${form.name}\nOrganización: ${form.org}\nDescripción: ${form.desc}`
    );
    return `https://wa.me/${WA_NUMBER.replace(/\D/g, '')}?text=${text}`;
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
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Contacto
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Conversemos sobre tu proceso
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Cuéntanos qué proceso quieres ordenar, automatizar o convertir en plataforma.
            Podemos ayudarte a transformarlo en una solución funcional, clara y segura.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
            {sent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto">
                  <Send className="w-5 h-5 text-cyan-400" />
                </div>
                <p className="text-sm font-semibold text-white">¡Mensaje enviado!</p>
                <p className="text-xs text-zinc-500">Te contactaremos a la brevedad.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500">Nombre *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500">Organización o rubro</label>
                    <input
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      placeholder="Estudio jurídico, universidad…"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-zinc-500">Tipo de solución</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.10_0.018_250)] text-sm text-zinc-300 focus:outline-none focus:border-cyan-500/40 transition-all appearance-none"
                  >
                    <option value="">Seleccionar…</option>
                    {solutionTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-zinc-500">Descripción breve del problema *</label>
                  <textarea
                    name="desc"
                    value={form.desc}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="¿Qué proceso quieres ordenar, automatizar o digitalizar?"
                    className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500">Correo *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@correo.cl"
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-zinc-500">WhatsApp (opcional)</label>
                    <input
                      name="wa"
                      value={form.wa}
                      onChange={handleChange}
                      placeholder="+56 9 ..."
                      className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/40 focus:bg-cyan-500/5 transition-all"
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
                    <Send className="w-4 h-4" />
                    Enviar solicitud
                  </motion.button>
                  <a
                    href={buildWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-emerald-300 border border-emerald-500/30 bg-emerald-500/8 hover:bg-emerald-500/15 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar por WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
