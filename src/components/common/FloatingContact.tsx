'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail, X, Phone } from 'lucide-react';

const WA_NUMBER = '+56934301930';
const EMAILS = [
  { label: 'Diego Ojeda', address: 'dojedacifuentes@gmail.com' },
  { label: 'Diego Andrade', address: 'diegoandradecortes@gmail.com' },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const waUrl = `https://wa.me/${WA_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent('Hola, me interesa conocer más sobre Ojeda & Andrade Labs / IusMachina.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-white/[0.1] bg-[oklch(0.10_0.018_250/0.97)] backdrop-blur-xl shadow-2xl p-4 w-64 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">Contacto directo</span>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 flex items-center justify-center rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.06] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/8 hover:bg-emerald-500/15 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-300">WhatsApp</div>
                <div className="text-[10px] text-zinc-500 mono">{WA_NUMBER}</div>
              </div>
            </a>

            {/* Emails */}
            <div className="space-y-1.5">
              {EMAILS.map(({ label, address }) => (
                <a
                  key={address}
                  href={`mailto:${address}?subject=Consulta%20—%20Ojeda%20%26%20Andrade%20Labs`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 w-full px-3 py-2 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/20 transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-zinc-400 font-medium">{label}</div>
                    <div className="text-[10px] text-zinc-600 mono truncate">{address}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-[9px] text-zinc-700 text-center mono pt-1">
              Ojeda &amp; Andrade Labs · IusMachina
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all ${
          open
            ? 'bg-zinc-800 border border-white/10 text-zinc-400'
            : 'bg-emerald-500 hover:bg-emerald-400 text-white glow-cyan'
        }`}
        aria-label="Abrir contacto"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Phone className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
