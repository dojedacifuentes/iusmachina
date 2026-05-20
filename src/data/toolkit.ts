export type ToolCategory = 'Todos' | 'IA Conversacional' | 'IA Documental' | 'IusMachina' | 'Automatización' | 'Ciberseguridad';

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  bestFor: string;
  badges: string[];
  url?: string;
  accent: string;
  border: string;
  bg: string;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  'Todos',
  'IA Conversacional',
  'IA Documental',
  'IusMachina',
  'Automatización',
  'Ciberseguridad',
];

export const tools: Tool[] = [
  {
    id: 'claude',
    name: 'Claude',
    category: 'IA Conversacional',
    description: 'Modelo de Anthropic. Sobresaliente en análisis profundo, redacción estructurada y razonamiento jurídico complejo.',
    bestFor: 'Análisis documental, redacción profesional, razonamiento estratégico.',
    badges: ['análisis', 'drafting', 'razonamiento'],
    url: 'https://claude.ai',
    accent: 'text-amber-400',
    border: 'border-amber-500/25',
    bg: 'bg-amber-500/5',
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'IA Conversacional',
    description: 'Modelo de OpenAI. Versátil, ampliamente disponible y con capacidades multimodales avanzadas.',
    bestFor: 'Resúmenes, borradores, explicaciones pedagógicas, reformulación de textos.',
    badges: ['síntesis', 'versatilidad', 'multimodal'],
    url: 'https://chat.openai.com',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/5',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'IA Conversacional',
    description: 'Modelo de Google DeepMind. Integra búsqueda web en tiempo real y contexto actualizado.',
    bestFor: 'Investigación con fuentes recientes, noticias, jurisprudencia actualizada.',
    badges: ['investigación', 'tiempo real', 'búsqueda'],
    url: 'https://gemini.google.com',
    accent: 'text-blue-400',
    border: 'border-blue-500/25',
    bg: 'bg-blue-500/5',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'IA Conversacional',
    description: 'Motor de respuestas con búsqueda verificada y citas automáticas. Ideal para investigación académica.',
    bestFor: 'Investigación con fuentes, consultas académicas, contexto normativo actualizado.',
    badges: ['fuentes', 'citaciones', 'académico'],
    url: 'https://perplexity.ai',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/5',
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'IA Documental',
    description: 'Herramienta de Google para trabajar exclusivamente con documentos propios como fuentes de conocimiento.',
    bestFor: 'Estudio de material propio, análisis de sentencias, organización de apuntes.',
    badges: ['documentos', 'estudio', 'síntesis'],
    url: 'https://notebooklm.google.com',
    accent: 'text-violet-400',
    border: 'border-violet-500/25',
    bg: 'bg-violet-500/5',
  },
  {
    id: 'iusprompt',
    name: 'IusPrompt Lab',
    category: 'IusMachina',
    description: 'Generador de prompts jurídicos y profesionales de Ojeda & Andrade Labs. Instrucciones éticas, funcionales y estratégicas.',
    bestFor: 'Estructurar prompts precisos, seguridad en el uso de IA, trabajo jurídico documentado.',
    badges: ['jurídico', 'ético', 'prompting'],
    accent: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/6',
  },
  {
    id: 'lexdocs',
    name: 'LexDocs',
    category: 'IusMachina',
    description: 'Automatización de documentos jurídicos: minutas, contratos, informes y exportación PDF mediante formularios inteligentes.',
    bestFor: 'Generación documental, plantillas jurídicas, informes estructurados.',
    badges: ['documentos', 'automatización', 'PDF'],
    accent: 'text-indigo-400',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/5',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Automatización',
    description: 'Plataforma de versionado y colaboración. Esencial para control de versiones y despliegue continuo.',
    bestFor: 'Control de código fuente, trabajo colaborativo, integración con Vercel.',
    badges: ['código', 'versiones', 'colaboración'],
    url: 'https://github.com',
    accent: 'text-zinc-300',
    border: 'border-zinc-500/20',
    bg: 'bg-zinc-500/4',
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Automatización',
    description: 'Plataforma de despliegue rápido para proyectos web. Integra con GitHub en segundos.',
    bestFor: 'Desplegar prototipos, plataformas Next.js y apps funcionales sin configuración.',
    badges: ['despliegue', 'web', 'prototipado'],
    url: 'https://vercel.com',
    accent: 'text-white',
    border: 'border-white/12',
    bg: 'bg-white/3',
  },
  {
    id: 'seguridad-contrasenas',
    name: 'Gestión de contraseñas',
    category: 'Ciberseguridad',
    description: 'Uso de gestores de contraseñas robustos para evitar reutilización y exposición de credenciales.',
    bestFor: 'Protección de accesos, higiene digital básica, contraseñas únicas por servicio.',
    badges: ['seguridad', 'privacidad', 'accesos'],
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/4',
  },
  {
    id: '2fa',
    name: 'Doble factor (2FA)',
    category: 'Ciberseguridad',
    description: 'Activación de autenticación en dos pasos en todas las cuentas críticas del entorno profesional.',
    bestFor: 'Proteger cuentas de IA, correo, GitHub, Vercel y servicios cloud.',
    badges: ['autenticación', 'seguridad', 'protocolo'],
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/4',
  },
];

export interface WorkflowStep {
  tool: string;
  action: string;
  output: string;
  color: string;
  iconColor: string;
}

export interface Workflow {
  id: string;
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  result: string;
  category: string;
  accent: string;
  border: string;
  bg: string;
}

export const workflows: Workflow[] = [
  {
    id: 'investigacion-juridica',
    title: 'Investigación jurídica profunda',
    subtitle: 'Para análisis doctrinario, jurisprudencia y contexto normativo actualizado',
    category: 'Legaltech',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/4',
    steps: [
      { tool: 'Perplexity', action: 'Búsqueda con fuentes', output: 'Marco normativo + citas', color: 'border-cyan-500/25 bg-cyan-500/5', iconColor: 'text-cyan-400' },
      { tool: 'NotebookLM', action: 'Analizar documentos propios', output: 'Síntesis personalizada', color: 'border-violet-500/25 bg-violet-500/5', iconColor: 'text-violet-400' },
      { tool: 'Claude', action: 'Razonamiento jurídico', output: 'Análisis estructurado', color: 'border-amber-500/25 bg-amber-500/5', iconColor: 'text-amber-400' },
    ],
    result: 'Análisis jurídico con fuentes verificadas, documentos propios y razonamiento profundo',
  },
  {
    id: 'examen-grado',
    title: 'Preparación Examen de Grado',
    subtitle: 'Memorización activa, síntesis normativa y práctica por ramas',
    category: 'Herramientas de estudio',
    accent: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/4',
    steps: [
      { tool: 'NotebookLM', action: 'Cargar apuntes y códigos', output: 'Resúmenes por rama', color: 'border-violet-500/25 bg-violet-500/5', iconColor: 'text-violet-400' },
      { tool: 'IusPrompt Lab', action: 'Generar prompts de repaso', output: 'Prompts estructurados', color: 'border-cyan-500/25 bg-cyan-500/5', iconColor: 'text-cyan-400' },
      { tool: 'Claude', action: 'Casos prácticos con feedback', output: 'Evaluación y corrección', color: 'border-amber-500/25 bg-amber-500/5', iconColor: 'text-amber-400' },
    ],
    result: 'Sistema de estudio activo con síntesis propia, prompts adaptados y práctica evaluada',
  },
  {
    id: 'automatizacion-documental',
    title: 'Automatización documental',
    subtitle: 'Contratos, minutas e informes generados desde plantillas inteligentes',
    category: 'IA Documental',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/4',
    steps: [
      { tool: 'IusPrompt Lab', action: 'Configurar instrucción', output: 'Prompt estructurado', color: 'border-cyan-500/25 bg-cyan-500/5', iconColor: 'text-cyan-400' },
      { tool: 'Claude', action: 'Redactar documento', output: 'Borrador profesional', color: 'border-amber-500/25 bg-amber-500/5', iconColor: 'text-amber-400' },
      { tool: 'LexDocs', action: 'Exportar en plantilla', output: 'PDF o Word final', color: 'border-indigo-500/25 bg-indigo-500/5', iconColor: 'text-indigo-400' },
    ],
    result: 'Documentos jurídicos generados desde prompts precisos, listos para uso profesional',
  },
  {
    id: 'prototipo-app',
    title: 'Prototipado de app funcional',
    subtitle: 'De idea a plataforma desplegada en horas, no semanas',
    category: 'Automatización',
    accent: 'text-white',
    border: 'border-white/12',
    bg: 'bg-white/3',
    steps: [
      { tool: 'Claude', action: 'Diseñar arquitectura', output: 'Estructura + componentes', color: 'border-amber-500/25 bg-amber-500/5', iconColor: 'text-amber-400' },
      { tool: 'GitHub', action: 'Versionado del código', output: 'Repositorio + historial', color: 'border-zinc-500/20 bg-zinc-500/4', iconColor: 'text-zinc-300' },
      { tool: 'Vercel', action: 'Despliegue automático', output: 'URL pública en minutos', color: 'border-white/12 bg-white/3', iconColor: 'text-white' },
    ],
    result: 'App o plataforma funcional desplegada y accesible con URL pública en pocas horas',
  },
  {
    id: 'analisis-seguro',
    title: 'Análisis seguro de información sensible',
    subtitle: 'Procesar datos jurídicos con privacidad y buenas prácticas digitales',
    category: 'Ciberseguridad',
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/4',
    steps: [
      { tool: 'IusPrompt Lab', action: 'Instrucción ética + privacidad', output: 'Prompt sin datos sensibles', color: 'border-cyan-500/25 bg-cyan-500/5', iconColor: 'text-cyan-400' },
      { tool: 'Claude', action: 'Análisis con criterio jurídico', output: 'Respuesta controlada', color: 'border-amber-500/25 bg-amber-500/5', iconColor: 'text-amber-400' },
      { tool: '2FA + contraseñas', action: 'Proteger accesos al flujo', output: 'Entorno verificado', color: 'border-rose-500/20 bg-rose-500/4', iconColor: 'text-rose-400' },
    ],
    result: 'Flujo de análisis con IA que protege información sensible sin comprometer la privacidad',
  },
];
