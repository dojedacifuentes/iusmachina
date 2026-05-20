export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  description: string;
  credentials: string[];
  areas: string[];
  quote: string;
  badges: string[];
  color: string;
  accent: string;
  linkedin: string;
  email: string;
}

export const team: TeamMember[] = [
  {
    name: 'Diego Hernán Ojeda Cifuentes',
    initials: 'DO',
    role: 'Cofundador · Derecho, IA aplicada y dirección de proyectos',
    description:
      'Egresado de Derecho de la PUCV, con trayectoria en la intersección entre Derecho, inteligencia artificial, filosofía jurídica, alfabetización digital, programación aplicada y ciberseguridad.',
    credentials: [
      'Más de 6 años liderando Hackea y proyectos de alfabetización digital',
      'Director del Programa DIAT (Derecho, Innovación, Academia y Tecnología)',
      'Creador y desarrollador de la plataforma DIAT Prompting Hub',
      'Organizador de conferencias internacionales y actividades académicas interdisciplinarias',
      'Diplomado en ciberseguridad y protección de datos',
      'Artículos publicados sobre transparencia algorítmica y participación en proyectos de investigación',
    ],
    areas: [
      'Derecho e inteligencia artificial',
      'Filosofía del Derecho',
      'Transparencia algorítmica',
      'Ciberseguridad y protección de datos',
      'Programación aplicada',
      'Dirección de proyectos',
      'Legaltech',
    ],
    quote:
      'Combina criterio jurídico, formación tecnológica y experiencia académica para diseñar soluciones digitales aplicadas a problemas reales del Derecho, la educación y la gestión profesional.',
    badges: ['Derecho + IA', 'Filosofía del Derecho', 'Ciberseguridad', 'Transparencia algorítmica', 'DIAT', 'Legaltech'],
    color: 'border-cyan-500/20 bg-cyan-500/5',
    accent: 'text-cyan-400',
    linkedin: 'https://www.linkedin.com/in/diegoojedac/',
    email: 'dojedacifuentes@gmail.com',
  },
  {
    name: 'Diego Andrade Cortés',
    initials: 'DA',
    role: 'Cofundador · Abogado e IA generativa aplicada',
    description:
      'Abogado de MLV Abogados, con más de 3 años de experiencia profesional y especialización práctica en IA generativa aplicada al trabajo jurídico, la automatización y el diseño de soluciones digitales.',
    credentials: [
      'Abogado en MLV Abogados',
      'Más de 3 años de experiencia en el ejercicio profesional del Derecho',
      'Especializado en IA generativa para optimizar análisis, redacción y organización documental',
      'Usuario avanzado de Claude y herramientas de IA generativa',
      'Flujos de trabajo con IA aplicada a tareas jurídicas, documentales y profesionales',
    ],
    areas: [
      'Ejercicio profesional del Derecho',
      'IA generativa aplicada',
      'Claude avanzado',
      'Automatización de tareas jurídicas',
      'Gestión documental',
      'Redacción y análisis jurídico asistido',
      'Legaltech aplicada',
    ],
    quote:
      'Aporta experiencia práctica desde el ejercicio profesional del Derecho y el uso avanzado de IA generativa para construir herramientas útiles, concretas y adaptadas al trabajo real de abogados.',
    badges: ['Abogado', 'MLV Abogados', 'IA generativa', 'Claude avanzado', 'Automatización jurídica', 'Legaltech'],
    color: 'border-indigo-500/20 bg-indigo-500/5',
    accent: 'text-indigo-400',
    linkedin: 'https://www.linkedin.com/in/diego-andrade-cort%C3%A9s-1a7396166/',
    email: 'diegoandradecortes@gmail.com',
  },
];
