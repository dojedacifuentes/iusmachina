'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, FileCode2, Shield, Zap } from 'lucide-react';

const badges = ['Legaltech', 'IA aplicada', 'Automatización documental', 'Ciberseguridad', 'Vercel · GitHub · Claude'];

const capCards = [
  {
    icon: Bot,
    title: 'IA Aplicada',
    desc: 'Claude · ChatGPT · Gemini · Workflows',
    color: 'border-cyan-500/25 bg-cyan-500/6',
    accent: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    icon: FileCode2,
    title: 'Apps Personalizadas',
    desc: 'Next.js · TypeScript · Vercel · GitHub',
    color: 'border-indigo-500/25 bg-indigo-500/6',
    accent: 'text-indigo-400',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    desc: 'Privacidad · Accesos · Datos sensibles',
    color: 'border-violet-500/25 bg-violet-500/6',
    accent: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
  },
  {
    icon: Zap,
    title: 'Automatización',
    desc: 'Formularios · Documentos · Flujos · PDF',
    color: 'border-emerald-500/25 bg-emerald-500/6',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
  },
];

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="hero" className="min-h-screen flex items-center py-20 pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="space-y-7"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/[0.09] bg-white/[0.03] text-[11px] text-zinc-500 font-medium mono"
                >
                  {b}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="text-white">Ojeda &amp;</span>
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, oklch(0.71 0.17 200) 0%, oklch(0.55 0.22 264) 100%)',
                  }}
                >
                  Andrade Labs
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-3 text-base sm:text-lg text-zinc-300 font-medium"
              >
                Apps inteligentes, automatización documental y ciberseguridad aplicada.
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-zinc-500 leading-relaxed max-w-xl"
            >
              Creamos plataformas digitales personalizadas para abogados, profesionales, pymes
              e instituciones educativas, integrando inteligencia artificial, diseño funcional,
              automatización documental y buenas prácticas de seguridad.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('iusmachina')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
              >
                Conocer IusMachina
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('servicios')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-cyan-300 border border-cyan-500/30 bg-cyan-500/8 hover:bg-cyan-500/15 transition-all"
              >
                Ver soluciones <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo('contacto')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-zinc-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
              >
                Solicitar diagnóstico
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Capability cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.65 }}
            className="grid grid-cols-2 gap-3"
          >
            {capCards.map(({ icon: Icon, title, desc, color, accent, iconBg }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.1 }}
                className={`rounded-2xl border p-4 space-y-3 card-surface-hover ${color}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center ${iconBg}`}
                >
                  <Icon className={`w-4 h-4 ${accent}`} />
                </div>
                <div>
                  <div className={`text-sm font-semibold ${accent}`}>{title}</div>
                  <div className="text-[11px] text-zinc-600 mt-0.5 leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}

            {/* IusMachina badge panel */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="col-span-2 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/6 to-indigo-500/5 p-4 flex items-center justify-between gap-4"
            >
              <div>
                <div className="text-xs font-bold text-cyan-400 mono uppercase tracking-widest">
                  IusMachina
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  Tecnología jurídica e IA aplicada al Derecho
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] text-cyan-500 mono font-medium">Activo</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <button
            onClick={() => scrollTo('que-hacemos')}
            className="flex flex-col items-center gap-1.5 text-zinc-700 hover:text-zinc-500 transition-colors"
          >
            <span className="text-[10px] mono uppercase tracking-widest">Explorar</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
