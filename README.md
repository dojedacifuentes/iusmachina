# Ojeda & Andrade Labs

Web oficial para **Ojeda & Andrade Labs** y su línea jurídica **IusMachina**.

## Correr localmente

```bash
cd ojeda-andrade-labs
npm install
npm run dev
```

Abre http://localhost:3000 en tu navegador.

## Build de producción

```bash
npm run build
npm run start
```

## Deploy en Vercel

1. Sube la carpeta `ojeda-andrade-labs` a un repositorio GitHub.
2. Ve a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente → Deploy.

No requiere variables de entorno.

## Configurar contacto

Edita `src/components/sections/ContactSection.tsx`:

```ts
const CONTACT_EMAIL = 'contacto@ojedaandradelabs.cl'; // Cambia aquí
const WA_NUMBER = '+56900000000';                      // Cambia aquí
```

## Agregar proyectos al portafolio

Edita `src/data/projects.ts` y agrega un nuevo objeto al array `projects`:

```ts
{
  title: 'Nombre del proyecto',
  category: 'Legaltech',           // Ver ProjectCategory en el mismo archivo
  description: 'Descripción...',
  problem: 'Problema que resuelve...',
  tags: ['Tag1', 'Tag2'],
  status: 'Demo funcional',         // Ver ProjectStatus en el mismo archivo
  demoUrl: 'https://tu-demo.vercel.app',   // opcional
  repoUrl: 'https://github.com/...',       // opcional
  featured: true,                          // opcional, aparece en "Destacados"
  caseNote: 'Qué demuestra este proyecto.',
}
```

## Stack

- **Next.js 16** (App Router) — framework principal
- **TypeScript** — tipado completo
- **TailwindCSS v4** — estilos utility-first
- **Framer Motion v12** — animaciones
- **Lucide React** — iconografía
- **Space Grotesk + JetBrains Mono** — tipografía
- Sin backend · Sin base de datos · Desplegable en Vercel gratis

## Estructura de archivos clave

```
src/
├── app/
│   ├── layout.tsx          → SEO, fonts, layout raíz
│   ├── globals.css         → Variables CSS, utilidades, animaciones
│   └── page.tsx            → Ensambla todas las secciones
├── components/
│   ├── common/
│   │   └── GridBackground.tsx
│   ├── layout/
│   │   ├── Navbar.tsx      → Navbar sticky con menú móvil
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── WhatWeDoSection.tsx
│       ├── AboutSection.tsx
│       ├── IusMachinaSection.tsx
│       ├── ServicesSection.tsx
│       ├── SectorsSection.tsx
│       ├── DemoLabSection.tsx
│       ├── PortfolioSection.tsx    → Filtros por categoría + cards
│       ├── WorkshopsSection.tsx
│       ├── MethodSection.tsx
│       ├── CybersecuritySection.tsx
│       └── ContactSection.tsx     → Formulario mailto + WhatsApp
└── data/
    ├── projects.ts         → Datos del portafolio (editable)
    └── team.ts             → Perfiles del equipo (editable)
```
