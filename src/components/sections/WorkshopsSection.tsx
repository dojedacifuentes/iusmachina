'use client';
import { motion } from 'framer-motion';
import { Bot, Zap, FileText, Shield, Code, GraduationCap, ArrowRight } from 'lucide-react';

const workshops = [
  {
    icon: Bot,
    title: 'IA para abogados',
    desc: 'Uso profesional de ChatGPT, Claude, Gemini, Perplexity y herramientas de análisis documental.',
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
  },
  {
    icon: Zap,
    title: 'Prompting jurídico',
    desc: 'Diseño de instrucciones precisas para estudiar, investigar, redactar, comparar normas, preparar casos y analizar documentos.',
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
  },
  {
    icon: FileText,
    title: 'Automatización documental',
    desc: 'Transformación de formularios, plantillas y flujos repetitivos en documentos estructurados y exportables.',
    color: 'border-violet-500/20 bg-violet-500/5',
    accent: 'text-violet-400',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad básica para profesionales',
    desc: 'Contraseñas, doble factor, phishing, protección de datos, riesgos de IA y buenas prácticas operativas.',
    color: 'border-amber-500/20 bg-amber-500/5',
    accent: 'text-amber-400',
  },
  {
    icon: Code,
    title: 'GitHub + Vercel para prototipos',
    desc: 'Cómo convertir ideas, documentos y procesos en plataformas desplegables sin experiencia técnica profunda.',
    color: 'border-emerald-500/20 bg-emerald-500/5',
    accent: 'text-emerald-400',
  },
  {
    icon: GraduationCap,
    title: 'IA para estudiantes de Derecho',
    desc: 'Métodos para estudiar, resumir, memorizar artículos, preparar interrogaciones y simular exámenes orales.',
    color: 'border-rose-500/20 bg-rose-500/5',
    accent: 'text-rose-400',
  },
];

export function WorkshopsSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="talleres" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Talleres
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Talleres y formación aplicada
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Diseñamos talleres prácticos para que equipos jurídicos, académicos y profesionales
            incorporen IA y herramientas digitales de manera útil, segura y orientada a resultados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {workshops.map(({ icon: Icon, title, desc, color, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border p-5 space-y-3 card-surface-hover group ${color}`}
            >
              <Icon className={`w-5 h-5 ${accent}`} />
              <div>
                <h3 className={`text-sm font-semibold ${accent}`}>{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => scrollTo('contacto')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-cyan-300 border border-cyan-500/30 bg-cyan-500/8 hover:bg-cyan-500/15 transition-all"
          >
            Consultar taller a medida <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
