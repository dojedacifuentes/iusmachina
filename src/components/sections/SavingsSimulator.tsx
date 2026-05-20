'use client';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { useDiagnostic } from '@/store/diagnosticContext';

const ORG_TYPES = [
  'Estudio jurídico', 'Abogado/a independiente', 'Empresa', 'Institución educativa',
  'Pyme', 'Profesional independiente', 'Otro',
];

const PROCESSES = [
  'Generación de documentos', 'Gestión de clientes', 'Seguimiento de causas o proyectos',
  'Preparación de informes', 'Estudio o formación', 'Captación comercial', 'Gestión interna', 'Otro',
];

const HOURLY_RATES = [
  { label: '$15.000/h', value: 15000 },
  { label: '$25.000/h', value: 25000 },
  { label: '$40.000/h', value: 40000 },
  { label: '$60.000/h', value: 60000 },
];

const AUTO_PCTS = [
  { label: '15%', value: 0.15 },
  { label: '25%', value: 0.25 },
  { label: '40%', value: 0.40 },
  { label: '60%', value: 0.60 },
];

const PROCESS_RECOMMENDATIONS: Record<string, string> = {
  'Generación de documentos': 'Podría evaluarse automatización documental con formularios inteligentes, plantillas estructuradas y generación asistida de minutas, contratos o reportes.',
  'Gestión de clientes': 'Podría evaluarse un panel interno para centralizar clientes, estados, tareas, comunicaciones y documentos asociados.',
  'Seguimiento de causas o proyectos': 'Podría evaluarse un dashboard con trazabilidad de causas, plazos, estados y responsables en un flujo visible.',
  'Preparación de informes': 'Podría evaluarse automatización de informes con plantillas inteligentes y generación asistida desde datos estructurados.',
  'Estudio o formación': 'Podría evaluarse una plataforma de estudio con contenidos estructurados, flashcards, preguntas, simuladores y asistencia con IA.',
  'Captación comercial': 'Podría evaluarse una landing inteligente con simulador, formulario avanzado, WhatsApp contextual y panel de seguimiento.',
  'Gestión interna': 'Podría evaluarse un panel interno para centralizar tareas, documentos, estados y comunicaciones del equipo.',
  'Otro': 'Podría evaluarse un diagnóstico breve para mapear el proceso, identificar tareas repetitivas y proponer una solución a medida.',
};

function fmt(n: number) {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(n);
}

export function SavingsSimulator() {
  const { result: diagResult } = useDiagnostic();

  const [orgType, setOrgType] = useState('');
  const [process, setProcess] = useState('');
  const [hours, setHours] = useState(8);
  const [hourlyRate, setHourlyRate] = useState(25000);
  const [customRate, setCustomRate] = useState('');
  const [autoPct, setAutoPct] = useState(0.25);
  const [calculated, setCalculated] = useState(false);

  const effectiveRate = customRate ? parseInt(customRate.replace(/\D/g, ''), 10) || hourlyRate : hourlyRate;

  const sim = useMemo(() => {
    const hSemana = hours * autoPct;
    const hMes = hSemana * 4;
    const valMes = hMes * effectiveRate;
    const valAnual = valMes * 12;
    return { hSemana, hMes, valMes, valAnual };
  }, [hours, autoPct, effectiveRate]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <section id="simulador" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Simulador
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Simula el valor de automatizar tu proceso
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Visualiza el costo oculto de procesos manuales y repetitivos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/[0.09] bg-white/[0.02] overflow-hidden"
        >
          {/* Diagnostic banner */}
          {diagResult && (
            <div className="px-6 py-3 bg-cyan-500/8 border-b border-cyan-500/20 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-xs text-cyan-400 font-medium">
                Evaluación IA completada — {diagResult.compatibility}% compatibilidad · {diagResult.serviceLabel}
              </span>
            </div>
          )}

          <div className="p-6 sm:p-8 space-y-7">

            {/* Inputs grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Org type */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Tipo de organización</label>
                <select
                  value={orgType}
                  onChange={e => setOrgType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.10_0.018_250)] text-sm text-zinc-300 focus:outline-none focus:border-cyan-500/40 transition-all appearance-none"
                >
                  <option value="">Seleccionar…</option>
                  {ORG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Process */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Proceso principal</label>
                <select
                  value={process}
                  onChange={e => setProcess(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-white/[0.08] bg-[oklch(0.10_0.018_250)] text-sm text-zinc-300 focus:outline-none focus:border-cyan-500/40 transition-all appearance-none"
                >
                  <option value="">Seleccionar…</option>
                  {PROCESSES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              {/* Weekly hours */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">
                  Horas semanales dedicadas actualmente:{' '}
                  <span className="text-cyan-400 mono font-bold">{hours}h</span>
                </label>
                <input
                  type="range"
                  min={1} max={40} step={1}
                  value={hours}
                  onChange={e => setHours(Number(e.target.value))}
                  className="w-full accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-zinc-700 mono">
                  <span>1h</span><span>20h</span><span>40h</span>
                </div>
              </div>

              {/* Automation % */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Porcentaje estimado de automatización</label>
                <div className="flex gap-2">
                  {AUTO_PCTS.map(({ label, value }) => (
                    <button
                      key={label}
                      onClick={() => setAutoPct(value)}
                      className={`flex-1 py-2 rounded-lg border text-xs font-bold mono transition-all ${
                        autoPct === value
                          ? 'border-cyan-500/50 bg-cyan-500/12 text-cyan-300'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hourly rate */}
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-medium text-zinc-400">Valor estimado de la hora profesional</label>
                <div className="flex flex-wrap gap-2 items-center">
                  {HOURLY_RATES.map(({ label, value }) => (
                    <button
                      key={label}
                      onClick={() => { setHourlyRate(value); setCustomRate(''); }}
                      className={`px-3.5 py-2 rounded-lg border text-xs font-bold mono transition-all ${
                        hourlyRate === value && !customRate
                          ? 'border-indigo-500/50 bg-indigo-500/12 text-indigo-300'
                          : 'border-white/[0.08] bg-white/[0.02] text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                  <input
                    type="text"
                    placeholder="Personalizado…"
                    value={customRate}
                    onChange={e => setCustomRate(e.target.value)}
                    className="flex-1 min-w-[120px] px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.02] text-xs text-zinc-300 placeholder:text-zinc-700 focus:outline-none focus:border-cyan-500/30 transition-all mono"
                  />
                </div>
              </div>
            </div>

            {/* Calculate button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCalculated(true)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
            >
              <Zap className="w-4 h-4" />
              Calcular potencial de ahorro
            </motion.button>

            {/* Results */}
            {calculated && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-5 border-t border-white/[0.06] pt-5"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: 'Horas ahorradas / semana', value: `${sim.hSemana.toFixed(1)}h`, color: 'text-cyan-400' },
                    { label: 'Horas ahorradas / mes', value: `${sim.hMes.toFixed(1)}h`, color: 'text-cyan-400' },
                    { label: 'Valor mensual liberado', value: fmt(sim.valMes), color: 'text-indigo-400' },
                    { label: 'Valor anual potencial', value: fmt(sim.valAnual), color: 'text-violet-400' },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 text-center space-y-1">
                      <div className={`text-xl font-black mono ${color}`}>{value}</div>
                      <div className="text-[10px] text-zinc-600 leading-snug">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Process recommendation */}
                {process && PROCESS_RECOMMENDATIONS[process] && (
                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-4 space-y-1.5">
                    <div className="text-[10px] text-indigo-500 mono uppercase tracking-widest font-medium">
                      Solución compatible
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {PROCESS_RECOMMENDATIONS[process]}
                    </p>
                  </div>
                )}

                {/* Microcopy */}
                <p className="text-[11px] text-zinc-700 leading-relaxed italic">
                  Esta simulación es referencial y no reemplaza un diagnóstico técnico. Sirve para visualizar el costo oculto de procesos manuales, repetitivos o mal sistematizados.
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo('contacto')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-cyan-300 border border-cyan-500/30 bg-cyan-500/8 hover:bg-cyan-500/15 transition-all"
                >
                  Solicitar diagnóstico con estos datos <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
