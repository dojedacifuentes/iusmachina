'use client';
import { motion } from 'framer-motion';
import { Search, GitBranch, Monitor, Code, Lock, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Entendemos el problema, el flujo de trabajo, los usuarios y los documentos involucrados.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/8',
  },
  {
    num: '02',
    icon: GitBranch,
    title: 'Diseño del flujo',
    desc: 'Convertimos el proceso en una arquitectura clara: entradas, pantallas, acciones, documentos y salidas.',
    color: 'text-indigo-400',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/8',
  },
  {
    num: '03',
    icon: Monitor,
    title: 'Prototipo',
    desc: 'Creamos una primera versión visual y funcional para validar estructura, experiencia y utilidad.',
    color: 'text-violet-400',
    border: 'border-violet-500/25',
    bg: 'bg-violet-500/8',
  },
  {
    num: '04',
    icon: Code,
    title: 'Desarrollo',
    desc: 'Construimos la plataforma con componentes limpios, diseño responsive y lógica funcional.',
    color: 'text-amber-400',
    border: 'border-amber-500/25',
    bg: 'bg-amber-500/8',
  },
  {
    num: '05',
    icon: Lock,
    title: 'Seguridad y revisión',
    desc: 'Revisamos exposición de datos, buenas prácticas, privacidad, flujos sensibles y riesgos operativos.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/8',
  },
  {
    num: '06',
    icon: CheckCircle2,
    title: 'Entrega y capacitación',
    desc: 'Entregamos la plataforma, explicamos su uso y dejamos una base clara para futuras mejoras.',
    color: 'text-rose-400',
    border: 'border-rose-500/25',
    bg: 'bg-rose-500/8',
  },
];

export function MethodSection() {
  return (
    <section id="metodo" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Método
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Método de trabajo
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            De un proceso desordenado a una plataforma funcional.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map(({ num, icon: Icon, title, desc, color, border, bg }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.45 }}
              className={`rounded-2xl border ${border} ${bg} p-5 space-y-3 card-surface-hover`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-black mono ${color} opacity-30`}>{num}</span>
                <div className={`w-8 h-8 rounded-lg border ${border} bg-white/[0.03] flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
              </div>
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
