export interface TrainingModule {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  displayDate: string;
  objectives: string[];
  contents: string[];
  tools: string[];
  activity: string;
  deliverable: string;
  timeline: { time: string; topic: string; type: string; description: string }[];
  color: string;
  accent: string;
  border: string;
  iconBg: string;
}

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 1,
    title: 'Fundamentos de IA y Prompting Jurídico',
    subtitle: 'Del prompt improvisado al workflow jurídico verificable.',
    duration: '2 horas',
    displayDate: '8 SEP 2026',
    objectives: [
      'Comprender cómo funcionan los LLMs y por qué alucinan',
      'Construir prompts jurídicos estructurados con técnica real',
      'Distinguir búsqueda semántica de generación de texto',
      'Identificar riesgos éticos y legales del uso de IA en derecho',
    ],
    contents: [
      'IA generativa: cómo funciona un LLM en términos jurídicamente relevantes',
      'Anatomía del prompt: rol, contexto, instrucción, formato, restricción',
      'Técnicas: zero-shot, few-shot, chain-of-thought aplicadas al derecho',
      'Alucinaciones: por qué ocurren y cómo mitigarlas sistemáticamente',
      'Prompt Lab en vivo: construcción de prompts desde casos reales',
      'Checklist de verificación jurídica post-IA',
    ],
    tools: ['Claude', 'ChatGPT', 'Perplexity'],
    activity: 'Construcción en vivo de 5 prompts jurídicos estructurados. Comparación de outputs entre modelos ante el mismo caso legal chileno.',
    deliverable: 'Biblioteca personal de prompts jurídicos con checklist de verificación',
    timeline: [
      { time: '0:00–0:20', topic: 'IA generativa: fundamentos', type: 'theory', description: 'Cómo piensa un LLM. Por qué inventa cosas con total seguridad.' },
      { time: '0:20–0:40', topic: 'Anatomía del prompt jurídico', type: 'demo', description: 'Rol + contexto + instrucción + formato + restricción. Demo en vivo.' },
      { time: '0:40–1:00', topic: 'Alucinaciones y sesgos', type: 'analysis', description: 'Casos reales de errores de IA en el derecho. Protocolos de mitigación.' },
      { time: '1:00–1:25', topic: 'Prompting para estudio jurídico', type: 'practice', description: 'Zero-shot, few-shot, chain-of-thought aplicados a materias legales.' },
      { time: '1:25–1:45', topic: 'Taller: construye tu primer prompt', type: 'workshop', description: 'Ejercicio práctico en vivo. Prompt Lab como herramienta de apoyo.' },
      { time: '1:45–2:00', topic: 'Checklist y cierre', type: 'closing', description: 'Verificación jurídica post-IA. Qué llevas al Módulo 2.' },
    ],
    color: 'border-cyan-500/25 bg-cyan-500/5',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/25',
    iconBg: 'bg-cyan-500/15 border-cyan-500/30',
  },
  {
    id: 2,
    title: 'Claude for Legal y Flujos Jurídicos',
    subtitle: 'Construye workflows que producen documentos reales.',
    duration: '2 horas',
    displayDate: '15 SEP 2026',
    objectives: [
      'Dominar Claude como plataforma de producción jurídica de alto nivel',
      'Diseñar flujos jurídicos asistidos por IA para las principales áreas del derecho',
      'Construir documentos (contratos, memorandos, recursos) con IA como co-redactor',
      'Integrar NotebookLM y Gemini como herramientas de investigación y análisis',
    ],
    contents: [
      'Claude Projects: system prompts jurídicos y gestión del contexto',
      'Lectura de documentos extensos: contratos, expedientes y sentencias',
      'Síntesis jurisprudencial masiva: técnicas y protocolos de verificación',
      'NotebookLM para investigación: sube la doctrina y pregúntale',
      'Diseño de workflow integral: del caso al documento final',
      'Ejercicio: expediente jurídico completo generado con IA supervisada',
    ],
    tools: ['Claude', 'NotebookLM', 'Gemini'],
    activity: 'Simulación de caso real: elaboración de expediente jurídico completo usando Claude como co-redactor supervisado.',
    deliverable: 'Expediente jurídico completo generado con IA, con documentación del proceso y análisis crítico',
    timeline: [
      { time: '0:00–0:20', topic: 'Claude para análisis jurídico', type: 'demo', description: 'Claude Projects, system prompts y gestión del contexto largo.' },
      { time: '0:20–0:45', topic: 'Lectura de documentos extensos', type: 'practice', description: 'Contratos, expedientes, sentencias. Claude lee todo lo que un asociado tarda días.' },
      { time: '0:45–1:10', topic: 'Síntesis y jurisprudencia', type: 'workshop', description: 'Análisis masivo de sentencias. NotebookLM como base de fuentes verificables.' },
      { time: '1:10–1:30', topic: 'Diseño de workflow jurídico', type: 'practice', description: 'Perplexity → NotebookLM → Claude → documento final. Flujo completo.' },
      { time: '1:30–1:50', topic: 'Expediente en vivo', type: 'workshop', description: 'Construcción de un expediente jurídico real con IA como co-redactor.' },
      { time: '1:50–2:00', topic: 'Cierre y entregable', type: 'closing', description: 'Revisión del expediente. Qué llevas al Módulo 3.' },
    ],
    color: 'border-indigo-500/25 bg-indigo-500/5',
    accent: 'text-indigo-400',
    border: 'border-indigo-500/25',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
  },
  {
    id: 3,
    title: 'Agentes Jurídicos y Ecosistema Legaltech',
    subtitle: 'Construye criterio antes de automatizar. El abogado que dirige la IA.',
    duration: '2 horas',
    displayDate: '22 SEP 2026',
    objectives: [
      'Comprender la arquitectura de agentes de IA y GPTs jurídicos especializados',
      'Construir system prompts de producción para agentes jurídicos propios',
      'Evaluar el ecosistema legaltech global y su aplicabilidad al derecho chileno',
      'Analizar riesgos éticos, de datos y de responsabilidad profesional en IA jurídica',
    ],
    contents: [
      'GPTs y agentes jurídicos: arquitectura, límites y casos de uso reales',
      'System prompts de producción: diseño de tu agente jurídico propio',
      'Claude Projects y Model Context Protocol (MCP): el futuro de los agentes',
      'Evaluación del ecosistema legaltech: Harvey AI, Clio, Thomson Reuters AI',
      'Riesgos éticos y de datos personales en el uso de IA jurídica',
      'Diseño de soluciones legaltech orientadas a problemas jurídicos concretos',
    ],
    tools: ['Claude', 'ChatGPT', 'Perplexity'],
    activity: 'Taller de diseño legaltech: identifica un problema jurídico real y diseña la arquitectura de IA para abordarlo.',
    deliverable: 'Propuesta de solución legaltech con arquitectura de IA, flujo documentado y análisis de viabilidad ética',
    timeline: [
      { time: '0:00–0:20', topic: 'GPTs y agentes jurídicos', type: 'demo', description: 'Arquitectura de agentes. System prompts de producción. Demo en vivo.' },
      { time: '0:20–0:45', topic: 'Construye tu agente jurídico', type: 'workshop', description: 'System prompt de Claude Project o GPT personalizado.' },
      { time: '0:45–1:10', topic: 'Diseño de solución legaltech', type: 'practice', description: 'Identificación del problema, selección de herramientas y arquitectura.' },
      { time: '1:10–1:30', topic: 'Ecosistema legaltech global', type: 'demo', description: 'Harvey AI, Clio, Thomson Reuters AI. El mercado que ya existe.' },
      { time: '1:30–1:50', topic: 'Ética, datos y responsabilidad', type: 'analysis', description: 'Riesgos reales del abogado que usa IA. Protocolos de resguardo profesional.' },
      { time: '1:50–2:00', topic: 'Cierre del programa', type: 'closing', description: 'Presentación de propuestas. Certificación institucional. Comunidad DIAT.' },
    ],
    color: 'border-violet-500/25 bg-violet-500/5',
    accent: 'text-violet-400',
    border: 'border-violet-500/25',
    iconBg: 'bg-violet-500/15 border-violet-500/30',
  },
];

export const TRAINING_BADGES = [
  '3 módulos',
  '6 horas totales',
  'Enfoque práctico',
  'Material descargable',
  'Prompt Lab incluido',
  'Flujos multi-IA',
  'Ciberseguridad aplicada',
  'Certificación DIAT',
];

export const TRAINING_DIFFERENTIALS = [
  'No es una charla genérica sobre IA. Se trabaja con casos jurídicos y profesionales reales.',
  'Se enseñan flujos prácticos multi-IA, no solo herramientas sueltas.',
  'Se integra Prompt Lab como herramienta demostrativa funcional.',
  'Se entregan materiales descargables y biblioteca de prompts.',
  'Se abordan criterios de seguridad, privacidad y límites profesionales.',
  'Adaptable a instituciones, estudios jurídicos o equipos específicos.',
  'Incluye actividades prácticas y entregable real por módulo.',
];

export const TYPE_LABELS: Record<string, string> = {
  theory: 'Teoría',
  demo: 'Demo',
  analysis: 'Análisis',
  practice: 'Práctica',
  workshop: 'Taller',
  closing: 'Cierre',
};
