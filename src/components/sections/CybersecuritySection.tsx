'use client';
import { motion } from 'framer-motion';
import { Eye, Bot, FileKey, KeyRound, CheckCircle2, AlertTriangle } from 'lucide-react';

const practices = [
  {
    icon: Eye,
    title: 'Privacidad por diseño',
    desc: 'Integramos principios de privacidad desde la arquitectura, no como capa añadida después.',
    color: 'text-cyan-400',
    bg: 'border-cyan-500/15 bg-cyan-500/4',
  },
  {
    icon: Bot,
    title: 'Uso responsable de IA',
    desc: 'Protocolos para no exponer datos sensibles, clientes ni documentos confidenciales a modelos externos.',
    color: 'text-indigo-400',
    bg: 'border-indigo-500/15 bg-indigo-500/4',
  },
  {
    icon: FileKey,
    title: 'Protección de documentos',
    desc: 'Controles de acceso, versioning, auditoría y gestión de permisos para información jurídica y clínica.',
    color: 'text-violet-400',
    bg: 'border-violet-500/15 bg-violet-500/4',
  },
  {
    icon: KeyRound,
    title: 'Control de accesos',
    desc: 'Autenticación, roles diferenciados, doble factor y revisión periódica de quién accede a qué.',
    color: 'text-amber-400',
    bg: 'border-amber-500/15 bg-amber-500/4',
  },
  {
    icon: CheckCircle2,
    title: 'Buenas prácticas operativas',
    desc: 'Procedimientos para gestionar contraseñas, dispositivos, backups y comunicación digital segura.',
    color: 'text-emerald-400',
    bg: 'border-emerald-500/15 bg-emerald-500/4',
  },
  {
    icon: AlertTriangle,
    title: 'Prevención de exposición de datos',
    desc: 'Revisión de flujos que podrían filtrar información sensible: formularios, IA, APIs y exportaciones.',
    color: 'text-rose-400',
    bg: 'border-rose-500/15 bg-rose-500/4',
  },
];

export function CybersecuritySection() {
  return (
    <section id="ciberseguridad" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Ciberseguridad aplicada
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            IA útil, pero con criterio de seguridad
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            La adopción de IA y herramientas digitales exige cuidar datos sensibles, accesos,
            documentos, contraseñas, permisos y flujos de información. Integramos buenas prácticas
            de seguridad desde el diseño, especialmente en contextos jurídicos y profesionales.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practices.map(({ icon: Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border ${bg} p-5 space-y-3 card-surface-hover`}
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <div>
                <h3 className={`text-sm font-semibold ${color}`}>{title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mt-1.5">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
