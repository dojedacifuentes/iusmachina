'use client';
import { motion } from 'framer-motion';
import { GitBranch, FileText, BarChart2, Shield, Clock, Layers } from 'lucide-react';

const problems = [
  {
    icon: GitBranch,
    title: 'Información dispersa entre herramientas',
    desc: 'Procesos repartidos entre WhatsApp, Excel, correos y documentos sueltos sin una fuente única de verdad.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/4',
  },
  {
    icon: FileText,
    title: 'Documentos redactados manualmente una y otra vez',
    desc: 'Contratos, minutas e informes que se construyen desde cero cada vez, con el mismo esfuerzo y los mismos errores.',
    color: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/4',
  },
  {
    icon: BarChart2,
    title: 'Sin trazabilidad de clientes, causas o proyectos',
    desc: 'Falta de visibilidad sobre el estado real del trabajo: quién hizo qué, cuándo y con qué resultado.',
    color: 'text-violet-400',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/4',
  },
  {
    icon: Shield,
    title: 'Uso improvisado de IA sin criterios de seguridad',
    desc: 'IA usada sin flujos, sin instrucciones claras y sin control sobre qué información se comparte con qué herramienta.',
    color: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/4',
  },
  {
    icon: Clock,
    title: 'El costo oculto del tiempo es invisible',
    desc: 'Nadie mide cuántas horas se pierden en tareas repetitivas hasta que el costo acumulado se vuelve evidente.',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/4',
  },
  {
    icon: Layers,
    title: 'Plataformas genéricas que no entienden la lógica del proceso',
    desc: 'Herramientas de propósito general que no se adaptan a la lógica jurídica, académica o profesional de cada organización.',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/4',
  },
];

export function ProblemSection() {
  return (
    <section id="problemas" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Diagnóstico
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Procesos complejos no deberían vivir en el caos.
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Transformamos flujos jurídicos, académicos y profesionales en sistemas digitales claros,
            trazables y automatizables.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map(({ icon: Icon, title, desc, color, border, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border ${border} ${bg} p-6 space-y-4`}
            >
              <div className={`w-10 h-10 rounded-xl border ${border} bg-white/[0.02] flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <div>
                <h3 className={`text-sm font-semibold leading-snug ${color}`}>{title}</h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
