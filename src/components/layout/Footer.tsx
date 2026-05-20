import { Zap } from 'lucide-react';

const footerLinks = [
  { label: 'IusMachina', href: '#iusmachina' },
  { label: 'Apps personalizadas', href: '#servicios' },
  { label: 'Talleres IA', href: '#talleres' },
  { label: 'Automatización documental', href: '#servicios' },
  { label: 'Ciberseguridad aplicada', href: '#ciberseguridad' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Método', href: '#metodo' },
  { label: 'Contacto', href: '#contacto' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[oklch(0.075_0.015_250)] mt-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-8">

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Identity */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <span className="text-sm font-bold text-white">Ojeda &amp; Andrade</span>
                <span className="text-sm font-bold text-cyan-400"> Labs</span>
              </div>
            </div>
            <p className="text-[12px] text-zinc-500 leading-relaxed">
              Apps inteligentes, automatización documental y ciberseguridad aplicada.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] text-cyan-400 mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                IusMachina
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] text-zinc-500 mono">
                Legaltech aplicada
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-[11px] text-zinc-700 mono">
            © 2026 Ojeda &amp; Andrade Labs. Todos los derechos reservados.
          </div>
          <div className="text-[11px] text-zinc-700 mono">
            Construido con IA generativa · Next.js · Vercel
          </div>
        </div>

      </div>
    </footer>
  );
}
