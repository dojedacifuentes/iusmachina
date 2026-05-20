'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Zap, RotateCcw, Copy, MessageCircle, ArrowRight, CheckCheck } from 'lucide-react';
import { WIZARD_QUESTIONS, buildResult, type WizardAnswers, type DiagnosticResult } from '@/data/wizard';
import { useDiagnostic } from '@/store/diagnosticContext';

const WA_NUMBER = '56934301930';
const TOTAL_STEPS = WIZARD_QUESTIONS.length;

type Phase = 'intro' | 'quiz' | 'result';

const levelConfig = {
  initial:   { color: 'text-zinc-300',   border: 'border-zinc-500/30',   bg: 'bg-zinc-500/8',   ring: 'text-zinc-400' },
  good:      { color: 'text-indigo-300', border: 'border-indigo-500/30', bg: 'bg-indigo-500/8', ring: 'text-indigo-400' },
  high:      { color: 'text-cyan-300',   border: 'border-cyan-500/30',   bg: 'bg-cyan-500/8',   ring: 'text-cyan-400' },
  strategic: { color: 'text-cyan-200',   border: 'border-cyan-400/40',   bg: 'bg-cyan-500/10',  ring: 'text-cyan-300' },
};

function CircleProgress({ value, ring }: { value: number; ring: string }) {
  const r = 15.9155;
  const circ = 100;
  const dash = (value / 100) * circ;
  return (
    <div className="relative w-28 h-28 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r={r} fill="none" stroke="currentColor"
          strokeWidth="2.2" className="text-zinc-800" />
        <circle cx="18" cy="18" r={r} fill="none" stroke="currentColor"
          strokeWidth="2.2" strokeLinecap="round"
          strokeDasharray={`${dash} ${circ - dash}`}
          className={`${ring} transition-all duration-1000`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-white leading-none">{value}%</span>
        <span className="text-[9px] text-zinc-500 mono mt-0.5">compat.</span>
      </div>
    </div>
  );
}

export function AIEvaluationSection() {
  const { setResult } = useDiagnostic();
  const [phase, setPhase] = useState<Phase>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>({});
  const [result, setLocalResult] = useState<DiagnosticResult | null>(null);
  const [copied, setCopied] = useState(false);

  const currentQuestion = WIZARD_QUESTIONS[step];
  const progress = ((step) / TOTAL_STEPS) * 100;

  function handleSingle(questionId: string, optionId: string) {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    if (step < TOTAL_STEPS - 1) {
      setStep(s => s + 1);
    } else {
      finishWizard(newAnswers);
    }
  }

  function handleMultiToggle(questionId: string, optionId: string) {
    const current = (answers[questionId] as string[] | undefined) ?? [];
    const next = current.includes(optionId)
      ? current.filter(id => id !== optionId)
      : [...current, optionId];
    setAnswers(a => ({ ...a, [questionId]: next }));
  }

  function handleMultiContinue() {
    if (step < TOTAL_STEPS - 1) {
      setStep(s => s + 1);
    } else {
      finishWizard(answers);
    }
  }

  function finishWizard(finalAnswers: WizardAnswers) {
    const r = buildResult(finalAnswers);
    setLocalResult(r);
    setResult(r);
    setPhase('result');
  }

  function handleBack() {
    if (step > 0) setStep(s => s - 1);
    else setPhase('intro');
  }

  function handleRestart() {
    setPhase('intro');
    setStep(0);
    setAnswers({});
    setLocalResult(null);
  }

  function buildWAUrl() {
    if (!result) return '#';
    const text = encodeURIComponent(
      `Hola, quiero solicitar un diagnóstico para mi proceso.\n\nResultado de Evaluación IA:\n- Compatibilidad: ${result.compatibility}%\n- Nivel: ${result.level}\n- Perfil: ${result.profile}\n- Servicio recomendado: ${result.serviceLabel}\n- Prioridad: ${result.priority}\n- Horas semanales estimadas: ${result.weeklyHours}\n\nMe gustaría evaluar una solución para mejorar productividad, orden y automatización.`
    );
    return `https://wa.me/${WA_NUMBER}?text=${text}`;
  }

  function handleCopy() {
    if (!result) return;
    navigator.clipboard.writeText(
      `Evaluación IA — Ojeda & Andrade Labs\nCompatibilidad: ${result.compatibility}%\nNivel: ${result.level}\nPerfil: ${result.profile}\nServicio recomendado: ${result.serviceLabel}\nPrioridad: ${result.priority}\nHoras semanales: ${result.weeklyHours}\n\n${result.message}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const multiSelected = currentQuestion?.type === 'multi'
    ? ((answers[currentQuestion?.id] as string[] | undefined) ?? [])
    : [];

  return (
    <section id="evaluacion" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3"
        >
          <div className="text-[11px] text-zinc-600 uppercase tracking-widest mono font-medium">
            Herramienta central
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Evaluación IA de productividad
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xl mx-auto">
            Responde 8 preguntas y recibe un diagnóstico de compatibilidad con los servicios de Ojeda &amp; Andrade Labs.
          </p>
        </motion.div>

        {/* Wizard card */}
        <AnimatePresence mode="wait">

          {/* ─── INTRO ─── */}
          {phase === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/6 to-indigo-500/5 overflow-hidden"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Diagnóstico de compatibilidad IA</h3>
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                      Identifica si tu proceso es compatible con automatización, plataformas internas, flujos de IA o capacitación aplicada.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { n: '8', label: 'preguntas breves' },
                    { n: '3 min', label: 'tiempo estimado' },
                    { n: '100%', label: 'orientado a oportunidad' },
                  ].map(({ n, label }) => (
                    <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center">
                      <div className="text-xl font-black text-cyan-400 mono">{n}</div>
                      <div className="text-[11px] text-zinc-600 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed border-t border-white/[0.05] pt-4">
                  El resultado nunca comunica fracaso. Está formulado como oportunidad y apunta al servicio más compatible con tu perfil y proceso actual.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPhase('quiz')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
                >
                  <Zap className="w-4 h-4" />
                  Iniciar evaluación
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ─── QUIZ ─── */}
          {phase === 'quiz' && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/[0.09] bg-white/[0.02] overflow-hidden"
            >
              {/* Progress bar */}
              <div className="h-1 bg-zinc-800/60">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                  initial={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Step indicator + nav */}
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Atrás
                  </button>
                  <span className="text-[11px] text-zinc-600 mono font-medium">
                    {step + 1} / {TOTAL_STEPS}
                  </span>
                </div>

                {/* Question */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {currentQuestion.title}
                  </h3>
                  {currentQuestion.subtitle && (
                    <p className="text-xs text-zinc-500">{currentQuestion.subtitle}</p>
                  )}
                </div>

                {/* Options */}
                <div className={`grid gap-2.5 ${
                  currentQuestion.options.length <= 4
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {currentQuestion.options.map(option => {
                    const isSelected = currentQuestion.type === 'multi'
                      ? multiSelected.includes(option.id)
                      : answers[currentQuestion.id] === option.id;

                    return (
                      <motion.button
                        key={option.id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          currentQuestion.type === 'multi'
                            ? handleMultiToggle(currentQuestion.id, option.id)
                            : handleSingle(currentQuestion.id, option.id)
                        }
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                          isSelected
                            ? 'border-cyan-500/50 bg-cyan-500/12 text-cyan-200'
                            : 'border-white/[0.08] bg-white/[0.02] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.15] hover:bg-white/[0.04]'
                        }`}
                      >
                        {option.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Multi-select continue button */}
                {currentQuestion.type === 'multi' && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleMultiContinue}
                    disabled={multiSelected.length === 0}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Continuar <ChevronRight className="w-4 h-4" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* ─── RESULT ─── */}
          {phase === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl border overflow-hidden ${levelConfig[result.levelKey].border} ${levelConfig[result.levelKey].bg}`}
            >
              <div className="p-6 sm:p-8 space-y-6">
                {/* Score + level */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <CircleProgress value={result.compatibility} ring={levelConfig[result.levelKey].ring} />
                  <div className="text-center sm:text-left space-y-2">
                    <div className={`text-xs mono font-bold uppercase tracking-widest ${levelConfig[result.levelKey].color}`}>
                      {result.level}
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">
                      Compatibilidad detectada: {result.compatibility}%
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <span className={`px-2.5 py-1 rounded-lg border text-[11px] mono font-medium ${levelConfig[result.levelKey].border} ${levelConfig[result.levelKey].color}`}>
                        {result.profile}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] text-[11px] mono text-zinc-500">
                        {result.weeklyHours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <p className="text-sm text-zinc-400 leading-relaxed border-t border-white/[0.06] pt-5">
                  {result.message}
                </p>

                {/* Recommended service */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 space-y-2">
                  <div className="text-[10px] text-zinc-700 mono uppercase tracking-widest">Servicio recomendado</div>
                  <div className={`text-base font-bold ${levelConfig[result.levelKey].color}`}>
                    {result.serviceLabel}
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{result.serviceDescription}</p>
                  <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 mt-1">
                    <div className="text-[10px] text-zinc-700 mono uppercase tracking-widest mb-1">Beneficio esperado</div>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{result.serviceBenefit}</p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollTo('contacto')}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
                  >
                    <Zap className="w-4 h-4" />
                    Solicitar diagnóstico
                  </motion.button>
                  <a
                    href={buildWAUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-emerald-300 border border-emerald-500/30 bg-emerald-500/8 hover:bg-emerald-500/15 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enviar por WhatsApp
                  </a>
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-zinc-400 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                  >
                    {copied ? <CheckCheck className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                </div>

                {/* Secondary CTAs */}
                <div className="flex flex-wrap gap-3 items-center border-t border-white/[0.05] pt-4">
                  <button
                    onClick={() => scrollTo('simulador')}
                    className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    Probar simulador de ahorro <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 text-xs text-zinc-700 hover:text-zinc-500 transition-colors ml-auto"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Progress dots — only during quiz */}
        {phase === 'quiz' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center gap-1.5"
          >
            {WIZARD_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i < step ? 'w-4 bg-cyan-500/60' :
                  i === step ? 'w-6 bg-cyan-400' :
                  'w-2 bg-zinc-800'
                }`}
              />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
