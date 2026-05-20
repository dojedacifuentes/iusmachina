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
    title: 'Investigación jurídica estratégica',
    subtitle: 'Análisis normativo, doctrinal o jurisprudencial en profundidad',
    steps: [
      {
        tool: 'Perplexity',
        action: 'Levantar contexto y fuentes',
        output: 'Marco normativo + referencias',
        color: 'border-cyan-500/30 bg-cyan-500/5',
        iconColor: 'text-cyan-400',
      },
      {
        tool: 'NotebookLM',
        action: 'Organizar material propio',
        output: 'Base documental ordenada',
        color: 'border-violet-500/30 bg-violet-500/5',
        iconColor: 'text-violet-400',
      },
      {
        tool: 'Claude',
        action: 'Estructurar análisis y redactar',
        output: 'Análisis fundamentado',
        color: 'border-amber-500/30 bg-amber-500/5',
        iconColor: 'text-amber-400',
      },
      {
        tool: 'ChatGPT',
        action: 'Reformular y contrastar enfoques',
        output: 'Versión revisada',
        color: 'border-emerald-500/30 bg-emerald-500/5',
        iconColor: 'text-emerald-400',
      },
    ],
    result: 'Flujo de investigación más sólido, trazable y ordenado.',
    category: 'Investigación',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
  },
  {
    id: 'examen-grado',
    title: 'Preparación examen de grado',
    subtitle: 'Entrenamiento activo con múltiples IA en cadena',
    steps: [
      {
        tool: 'NotebookLM',
        action: 'Organizar material base',
        output: 'Fuentes y apuntes listos',
        color: 'border-violet-500/30 bg-violet-500/5',
        iconColor: 'text-violet-400',
      },
      {
        tool: 'Claude',
        action: 'Crear esquemas y respuestas orales',
        output: 'Mapa conceptual + respuestas tipo',
        color: 'border-amber-500/30 bg-amber-500/5',
        iconColor: 'text-amber-400',
      },
      {
        tool: 'ChatGPT',
        action: 'Generar preguntas y repreguntas',
        output: 'Batería de preguntas de grado',
        color: 'border-emerald-500/30 bg-emerald-500/5',
        iconColor: 'text-emerald-400',
      },
      {
        tool: 'IusPrompt Lab',
        action: 'Diseñar prompts de estudio más precisos',
        output: 'Prompts optimizados para estudio',
        color: 'border-cyan-500/30 bg-cyan-500/5',
        iconColor: 'text-cyan-400',
      },
    ],
    result: 'Entrenamiento más completo y activo para el examen oral.',
    category: 'Estudio',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/5',
  },
  {
    id: 'automatizacion-documental',
    title: 'Automatización documental',
    subtitle: 'Convertir formularios y datos en documentos estructurados',
    steps: [
      {
        tool: 'App personalizada',
        action: 'Recopilar datos del usuario',
        output: 'Formulario completado',
        color: 'border-indigo-500/30 bg-indigo-500/5',
        iconColor: 'text-indigo-400',
      },
      {
        tool: 'Claude',
        action: 'Redactar estructura y lenguaje base',
        output: 'Borrador documental',
        color: 'border-amber-500/30 bg-amber-500/5',
        iconColor: 'text-amber-400',
      },
      {
        tool: 'Revisión profesional',
        action: 'Ajuste jurídico y criterio experto',
        output: 'Documento corregido',
        color: 'border-zinc-500/30 bg-zinc-500/5',
        iconColor: 'text-zinc-400',
      },
      {
        tool: 'LexDocs',
        action: 'Exportar en PDF o formato final',
        output: 'Documento listo y trazable',
        color: 'border-cyan-500/30 bg-cyan-500/5',
        iconColor: 'text-cyan-400',
      },
    ],
    result: 'Generación documental eficiente, auditada y replicable.',
    category: 'Automatización',
    accent: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/5',
  },
  {
    id: 'prototipo-app',
    title: 'Diseño y despliegue de app jurídica',
    subtitle: 'Del concepto al prototipo funcional en horas, no semanas',
    steps: [
      {
        tool: 'IusPrompt Lab',
        action: 'Definir arquitectura y prompt técnico',
        output: 'Prompt estructurado + spec',
        color: 'border-cyan-500/30 bg-cyan-500/5',
        iconColor: 'text-cyan-400',
      },
      {
        tool: 'Claude',
        action: 'Generar código y componentes',
        output: 'Código base funcional',
        color: 'border-amber-500/30 bg-amber-500/5',
        iconColor: 'text-amber-400',
      },
      {
        tool: 'GitHub',
        action: 'Versionar y gestionar el proyecto',
        output: 'Repositorio organizado',
        color: 'border-zinc-500/30 bg-zinc-500/5',
        iconColor: 'text-zinc-300',
      },
      {
        tool: 'Vercel',
        action: 'Desplegar automáticamente',
        output: 'URL pública disponible',
        color: 'border-white/20 bg-white/4',
        iconColor: 'text-white',
      },
    ],
    result: 'Prototipo funcional y desplegable en tiempo récord.',
    category: 'Prototipado',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
  },
  {
    id: 'analisis-seguro',
    title: 'Análisis seguro de documentos sensibles',
    subtitle: 'Usar IA con criterio de privacidad y responsabilidad',
    steps: [
      {
        tool: 'IusPrompt Lab',
        action: 'Definir criterios éticos y límites',
        output: 'Instrucciones de seguridad claras',
        color: 'border-rose-500/30 bg-rose-500/5',
        iconColor: 'text-rose-400',
      },
      {
        tool: 'Claude',
        action: 'Analizar con instrucciones precisas',
        output: 'Análisis controlado y trazable',
        color: 'border-amber-500/30 bg-amber-500/5',
        iconColor: 'text-amber-400',
      },
      {
        tool: 'Revisión profesional',
        action: 'Verificar outputs y criterio experto',
        output: 'Resultado validado',
        color: 'border-zinc-500/30 bg-zinc-500/5',
        iconColor: 'text-zinc-400',
      },
      {
        tool: 'Checklist de seguridad',
        action: 'Aplicar protocolo de privacidad',
        output: 'Proceso auditado y documentado',
        color: 'border-emerald-500/30 bg-emerald-500/5',
        iconColor: 'text-emerald-400',
      },
    ],
    result: 'Uso responsable, trazable y profesional de IA con datos sensibles.',
    category: 'Ciberseguridad',
    accent: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/5',
  },
];
