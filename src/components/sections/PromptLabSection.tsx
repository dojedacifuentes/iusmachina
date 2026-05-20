'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Copy, Check, RefreshCw, ChevronDown } from 'lucide-react';

/* ── Types ── */
interface PromptConfig {
  area: string;
  purpose: string;
  platform: string;
  depth: string;
  documents: string;
  ethics: string[];
  outputType: string;
}

/* ── Options ── */
const AREAS = [
  'Derecho civil', 'Procesal civil', 'Derecho penal', 'Procesal penal',
  'Derecho administrativo', 'Constitucional', 'Filosofía del Derecho',
  'Compliance', 'Contratos', 'Sucesorio', 'Investigación jurídica',
  'Estudio para examen de grado', 'Redacción profesional', 'General',
];

const PURPOSES = [
  'Estudiar y comprender', 'Resumir texto o documento', 'Analizar documento',
  'Redactar escrito jurídico', 'Generar preguntas de estudio', 'Preparar examen oral',
  'Investigar con fuentes', 'Automatizar respuesta tipo', 'Comparar normas o instituciones',
  'Revisar y auditar contrato', 'Diseñar arquitectura de app', 'Crear flujo de trabajo',
];

const PLATFORMS = [
  { name: 'Claude', hint: 'Mejor para análisis profundo y redacción jurídica' },
  { name: 'ChatGPT', hint: 'Versátil, accesible y con multimodalidad' },
  { name: 'Gemini', hint: 'Ideal con búsqueda web en tiempo real' },
  { name: 'Perplexity', hint: 'Investigación con fuentes verificadas' },
  { name: 'NotebookLM', hint: 'Trabajar exclusivamente con documentos propios' },
  { name: 'Multi-IA workflow', hint: 'Combinar varias IA en secuencia' },
];

const DEPTHS = [
  { value: 'Rápido', desc: 'Síntesis directa y concisa' },
  { value: 'Intermedio', desc: 'Con estructura y ejemplos' },
  { value: 'Exhaustivo', desc: 'Máxima profundidad y fundamento' },
];

const DOCUMENT_OPTIONS = [
  'Sin documentos adjuntos',
  'Basado solo en documentos',
  'Documentos + conocimiento general',
  'Documento como referencia comparativa',
];

const ETHICS_OPTIONS = [
  'No incluir datos sensibles',
  'Proteger confidencialidad',
  'Evitar alucinaciones — pedir fundamento',
  'Solicitar citas o referencias',
  'Priorizar lenguaje técnico jurídico',
  'Priorizar claridad pedagógica',
  'Advertir si hay incertidumbre',
  'Restringir uso de datos personales',
  'Aplicar criterios de ciberseguridad básica',
];

const OUTPUT_TYPES = [
  'Prompt listo para copiar',
  'Prompt estructurado con secciones',
  'Prompt técnico avanzado',
  'Prompt estilo workflow paso a paso',
  'Prompt comparativo entre IA',
];

const DEFAULTS: PromptConfig = {
  area: 'Derecho civil',
  purpose: 'Estudiar y comprender',
  platform: 'Claude',
  depth: 'Intermedio',
  documents: 'Sin documentos adjuntos',
  ethics: ['Evitar alucinaciones — pedir fundamento', 'Advertir si hay incertidumbre'],
  outputType: 'Prompt estructurado con secciones',
};

/* ── Prompt generator ── */
function generatePrompt(c: PromptConfig): string {
  const taskMap: Record<string, string> = {
    'Estudiar y comprender': 'Ayúdame a estudiar y comprender en profundidad el siguiente tema. Explica los conceptos clave, sus fundamentos y aplicaciones prácticas.',
    'Resumir texto o documento': 'Genera un resumen estructurado, claro y jerarquizado del siguiente contenido. Organiza las ideas por importancia y extrae los puntos esenciales.',
    'Analizar documento': 'Analiza detalladamente el documento o texto que te proporciono. Identifica su estructura, argumentos principales, vacíos, riesgos y puntos de mejora.',
    'Redactar escrito jurídico': 'Redacta un documento jurídico profesional con base en los datos que te proporcionaré. Usa lenguaje técnico adecuado, estructura formal y argumentación sólida.',
    'Generar preguntas de estudio': 'Genera una batería de preguntas de comprensión, análisis y aplicación sobre el tema indicado. Incluye preguntas simples, de desarrollo y de aplicación a casos.',
    'Preparar examen oral': 'Simula un examen oral y ayúdame a preparar respuestas claras, estructuradas y fundamentadas. Incluye posibles repreguntas y puntos de profundización.',
    'Investigar con fuentes': 'Investiga el siguiente tema con rigor académico. Identifica marco normativo, doctrina relevante y jurisprudencia aplicable. Cita fuentes cuando sea posible.',
    'Automatizar respuesta tipo': 'Diseña una respuesta estructurada y replicable para el caso o situación que te indico. La respuesta debe poder usarse como plantilla adaptable.',
    'Comparar normas o instituciones': 'Compara las normas, instituciones o conceptos jurídicos que te indico. Identifica similitudes, diferencias, fortalezas y debilidades de cada uno.',
    'Revisar y auditar contrato': 'Revisa el contrato o acuerdo que te proporciono. Identifica riesgos jurídicos, vacíos, cláusulas abusivas, inconsistencias y propón mejoras.',
    'Diseñar arquitectura de app': 'Ayúdame a diseñar la arquitectura, flujo de pantallas, componentes y lógica de la aplicación digital que te describo.',
    'Crear flujo de trabajo': 'Diseña un flujo de trabajo eficiente, claro y escalable para el proceso que te describa. Incluye pasos, responsables y resultados esperados.',
  };

  const depthMap: Record<string, string> = {
    'Rápido': 'Sé conciso y directo. Prioriza la síntesis sobre la extensión.',
    'Intermedio': 'Responde con profundidad moderada. Incluye estructura clara, ejemplos relevantes y contexto necesario.',
    'Exhaustivo': 'Responde con máxima profundidad. Desarrolla argumentos, incluye fundamentos doctrinales, ejemplos concretos y análisis crítico.',
  };

  const docMap: Record<string, string> = {
    'Basado solo en documentos': '\nIMPORTANTE: Trabaja exclusivamente con el contenido de los documentos adjuntos. No uses información externa ni conocimiento propio.',
    'Documentos + conocimiento general': '\nUsa los documentos adjuntos como fuente primaria y complementa con tu conocimiento general del área cuando sea necesario.',
    'Documento como referencia comparativa': '\nUsa el documento adjunto como referencia para comparar con otros marcos normativos, instituciones o enfoques doctrinales.',
  };

  const platformTips: Record<string, string> = {
    'Claude': 'Puedes adjuntar documentos directamente al chat. Claude tiene ventana de contexto extensa — ideal para análisis profundo.',
    'ChatGPT': 'Usa el modo de análisis avanzado si adjuntas documentos. Para investigación, activa la búsqueda web si está disponible.',
    'Gemini': 'Activa la búsqueda web integrada para obtener fuentes actualizadas. Verifica la vigencia normativa de los resultados.',
    'Perplexity': 'Solicita fuentes verificadas. Usa el modo académico si está disponible para obtener referencias más rigurosas.',
    'NotebookLM': 'Carga los documentos como "fuentes" antes de iniciar. NotebookLM trabaja exclusivamente con tu material propio.',
    'Multi-IA workflow': 'Usa Perplexity para contexto → NotebookLM para organizar documentos propios → Claude para análisis → ChatGPT para reformular.',
  };

  const lines: string[] = [];

  lines.push(`# Prompt generado — IusPrompt Lab`);
  lines.push(`Área: ${c.area} · Finalidad: ${c.purpose} · Plataforma: ${c.platform} · Profundidad: ${c.depth}`);
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`Eres un asistente especializado en **${c.area}**.`);
  lines.push('');
  lines.push(taskMap[c.purpose] || 'Asiste con la siguiente consulta.');

  if (c.documents !== 'Sin documentos adjuntos' && docMap[c.documents]) {
    lines.push(docMap[c.documents]);
  }

  lines.push('');
  lines.push(depthMap[c.depth] || '');

  if (c.ethics.length > 0) {
    lines.push('');
    lines.push('**Criterios de seguridad y ética que debes aplicar:**');
    c.ethics.forEach(e => lines.push(`- ${e}`));
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(`> 💡 *${platformTips[c.platform] ?? ''}*`);
  lines.push('');
  lines.push('**[Escribe aquí tu consulta, texto o instrucción específica]**');

  return lines.join('\n');
}

/* ── Sub-components ── */
function SelectField({
  label, value, options, onChange,
}: {
  label: string; value: string; options: string[]; onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full px-3 py-2.5 pr-8 rounded-xl border border-white/[0.08] bg-[oklch(0.10_0.018_250)] text-sm text-zinc-200 focus:outline-none focus:border-cyan-500/40 appearance-none cursor-pointer transition-all"
        >
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600 pointer-events-none" />
      </div>
    </div>
  );
}

/* ── Main component ── */
export function PromptLabSection() {
  const [config, setConfig] = useState<PromptConfig>(DEFAULTS);
  const [generated, setGenerated] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof PromptConfig, value: unknown) =>
    setConfig(prev => ({ ...prev, [key]: value }));

  const toggleEthic = (e: string) =>
    set('ethics', config.ethics.includes(e)
      ? config.ethics.filter(x => x !== e)
      : [...config.ethics, e]);

  const handleGenerate = () => setGenerated(generatePrompt(config));

  const handleCopy = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => { setGenerated(null); setConfig(DEFAULTS); };

  return (
    <section id="prompt-lab" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 text-[11px] text-cyan-400 font-semibold mono uppercase tracking-widest">
            <Zap className="w-3 h-3" /> IusPrompt Lab
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Generador de prompts éticos y estratégicos
          </h2>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Diseña prompts más seguros, precisos y útiles para trabajo jurídico y profesional.
            Estructura instrucciones con criterio técnico, ético y estratégico.
          </p>
        </motion.div>

        {/* Main interface */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-[1fr_1.1fr] gap-5"
        >
          {/* Left: Configuration */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 space-y-4">
            <div className="text-xs font-semibold text-zinc-300 mb-1">Configuración del prompt</div>

            <div className="grid sm:grid-cols-2 gap-4">
              <SelectField label="Área o materia" value={config.area} options={AREAS} onChange={v => set('area', v)} />
              <SelectField label="Finalidad" value={config.purpose} options={PURPOSES} onChange={v => set('purpose', v)} />
            </div>

            {/* Platform selector */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Plataforma IA</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PLATFORMS.map(({ name, hint }) => (
                  <button
                    key={name}
                    onClick={() => set('platform', name)}
                    title={hint}
                    className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all text-left ${
                      config.platform === name
                        ? 'border-cyan-500/40 bg-cyan-500/12 text-cyan-300'
                        : 'border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.12]'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Depth */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Nivel de profundidad</label>
              <div className="grid grid-cols-3 gap-2">
                {DEPTHS.map(({ value, desc }) => (
                  <button
                    key={value}
                    onClick={() => set('depth', value)}
                    title={desc}
                    className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                      config.depth === value
                        ? 'border-indigo-500/40 bg-indigo-500/12 text-indigo-300'
                        : 'border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <SelectField label="Uso de documentos" value={config.documents} options={DOCUMENT_OPTIONS} onChange={v => set('documents', v)} />

            {/* Ethics */}
            <div className="space-y-1.5">
              <label className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">
                Criterios éticos y de seguridad
              </label>
              <div className="grid gap-1.5">
                {ETHICS_OPTIONS.map(e => (
                  <label key={e} className="flex items-center gap-2.5 cursor-pointer group">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                      config.ethics.includes(e)
                        ? 'border-cyan-500/60 bg-cyan-500/20'
                        : 'border-white/[0.1] bg-white/[0.02] group-hover:border-white/20'
                    }`}>
                      {config.ethics.includes(e) && (
                        <Check className="w-2.5 h-2.5 text-cyan-400" />
                      )}
                    </div>
                    <input type="checkbox" checked={config.ethics.includes(e)} onChange={() => toggleEthic(e)} className="sr-only" />
                    <span className={`text-xs transition-colors ${config.ethics.includes(e) ? 'text-zinc-300' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                      {e}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <SelectField label="Tipo de salida" value={config.outputType} options={OUTPUT_TYPES} onChange={v => set('outputType', v)} />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleGenerate}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors glow-cyan"
            >
              <Zap className="w-4 h-4" />
              Generar prompt
            </motion.button>
          </div>

          {/* Right: Output */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-zinc-300">Resultado</div>
              {generated && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-medium transition-all ${
                      copied
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                        : 'border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-zinc-200 hover:border-white/15'
                    }`}
                  >
                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/[0.07] text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" /> Limpiar
                  </button>
                </div>
              )}
            </div>

            {generated ? (
              <div className="flex-1 rounded-xl border border-white/[0.06] bg-[oklch(0.08_0.016_250)] p-4 overflow-auto max-h-[520px]">
                <pre className="text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono">
                  {generated}
                </pre>
              </div>
            ) : (
              <div className="flex-1 min-h-[300px] rounded-xl border border-dashed border-white/[0.07] flex flex-col items-center justify-center gap-4 text-center p-6">
                <div className="w-12 h-12 rounded-2xl border border-cyan-500/25 bg-cyan-500/8 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-400">Tu prompt aparecerá aquí</div>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed max-w-xs">
                    Configura los parámetros a la izquierda y presiona <span className="text-cyan-500">Generar prompt</span>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Jurídico', 'Ético', 'Estructurado', 'Listo para copiar'].map(b => (
                    <span key={b} className="px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.02] text-[10px] text-zinc-600 mono">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Microcopy */}
            <div className="text-[10px] text-zinc-700 leading-relaxed">
              Usa IA con mejores instrucciones, no con mejores esperanzas.
              Los prompts generados son plantillas de partida — ajusta según tu caso específico.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
