'use client';
import { ReactNode } from 'react';
import { DiagnosticProvider } from '@/store/diagnosticContext';

export function ClientProviders({ children }: { children: ReactNode }) {
  return <DiagnosticProvider>{children}</DiagnosticProvider>;
}
