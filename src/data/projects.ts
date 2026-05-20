export type ProjectStatus =
  | 'Demo funcional'
  | 'Prototipo'
  | 'Plataforma activa'
  | 'En desarrollo'
  | 'Repositorio';

export type ProjectCategory =
  | 'Todos'
  | 'Legaltech'
  | 'Herramientas de estudio'
  | 'Examen de Grado'
  | 'RPG jurídico'
  | 'Derecho Civil'
  | 'Administrativo y Público'
  | 'Talleres y IA'
  | 'Apps personalizadas'
  | 'Pymes'
  | 'IA y prompting';

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  tags: string[];
  status: ProjectStatus;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  caseNote: string;
}

export const CATEGORIES: ProjectCategory[] = [
  'Todos',
  'Legaltech',
  'Herramientas de estudio',
  'Examen de Grado',
  'RPG jurídico',
  'Derecho Civil',
  'Administrativo y Público',
  'Talleres y IA',
  'Apps personalizadas',
  'Pymes',
  'IA y prompting',
];

export const projects: Project[] = [
  {
    title: 'DIAT Prompting Hub',
    category: 'Talleres y IA',
    description:
      'Plataforma académica completa para taller de IA jurídica: módulos, generador de prompts LexPrompt, flashcards, toolkit IA y dossier exportable en PDF.',
    problem:
      'Organizar contenidos, módulos, herramientas y experiencia formativa en una plataforma académica aplicada.',
    tags: ['IA jurídica', 'Talleres', 'Prompting', 'Next.js 16', 'Legaltech'],
    status: 'Demo funcional',
    demoUrl: 'https://taller-diat.vercel.app',
    featured: true,
    caseNote:
      'Demuestra diseño de plataformas formativas, organización modular y experiencia académica aplicada.',
  },
  {
    title: 'Solergy',
    category: 'Pymes',
    description:
      'Landing comercial inteligente para empresa de energía solar: simulador de ahorro, captación de leads, panel de gestión y analytics.',
    problem:
      'Captación de clientes, simulación de ahorro energético y gestión de leads para empresa comercial.',
    tags: ['Landing comercial', 'Simulador', 'Leads', 'Pymes', 'Next.js 16'],
    status: 'Demo funcional',
    featured: true,
    caseNote: 'Demuestra landing comercial con simulador de ahorro y captación de leads.',
  },
  {
    title: 'Dr. Gabriel Mena',
    category: 'Apps personalizadas',
    description:
      'Plataforma clínica para médico especialista en salud mental: perfil público, panel de pacientes, notas SOAP, citas y seguimiento emocional con visualización de datos.',
    problem:
      'Gestión integral de pacientes, citas, notas clínicas y seguimiento para profesional de salud.',
    tags: ['App médica', 'Dashboard clínico', 'Salud', 'Profesional independiente'],
    status: 'Prototipo',
    featured: true,
    caseNote:
      'Demuestra adaptación de dashboards profesionales a contextos de salud y seguimiento clínico.',
  },
  {
    title: 'Marea — Workspace Jurídico',
    category: 'Legaltech',
    description:
      'App personalizada para abogada académica: gestión de interrogaciones, magíster, flashcards jurídicas, tareas, biblioteca normativa, modo focus y sistema de recompensas.',
    problem:
      'Centralizar herramientas académicas y jurídicas en un espacio digital funcional, accesible y personalizado.',
    tags: ['App jurídica', 'Abogada', 'Workspace', 'React + Vite', 'Legaltech'],
    status: 'Demo funcional',
    featured: true,
    caseNote:
      'Demuestra personalización de herramientas jurídicas para flujos reales de trabajo académico.',
  },
  {
    title: 'Lex RPG — Código Civil y CPC',
    category: 'RPG jurídico',
    description:
      'RPG educativo para memorizar y aplicar artículos del Código Civil y Código de Procedimiento Civil mediante combates cognitivos, mundos jurídicos y mecánicas de avance por nivel.',
    problem:
      'Memorizar artículos jurídicos de forma activa y significativa para el examen de grado.',
    tags: ['RPG', 'Gamificación', 'Código Civil', 'CPC', 'Examen de Grado'],
    status: 'Prototipo',
    caseNote:
      'Demuestra gamificación del aprendizaje jurídico con sistemas interactivos de memoria activa.',
  },
  {
    title: 'Controllab Administrativo',
    category: 'Administrativo y Público',
    description:
      'Plataforma académica para el estudio de Derecho Administrativo: control de la actividad pública, procedimientos, potestad sancionadora, casos y sistematización normativa.',
    problem:
      'Organizar y estudiar materias complejas de Derecho Administrativo de forma estructurada.',
    tags: ['Derecho Administrativo', 'Control público', 'Educación jurídica', 'Next.js 16'],
    status: 'Prototipo',
    caseNote:
      'Demuestra transformación de contenidos académicos complejos en experiencias digitales.',
  },
  {
    title: 'El Jardín de Mónica',
    category: 'Apps personalizadas',
    description:
      'App web personal diseñada como jardín vivo y refugio cultural: notas, biblioteca, perros, música, memoria emocional y espacio de bienestar digital.',
    problem:
      'Crear un espacio digital accesible, personalizado y emocional para usuario adulto no técnico.',
    tags: ['App personal', 'React + Vite', 'Accesibilidad', 'Digital garden'],
    status: 'Demo funcional',
    caseNote:
      'Demuestra diseño accesible y personalización profunda para usuarios no técnicos.',
  },
];
