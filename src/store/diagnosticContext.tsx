'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { DiagnosticResult } from '@/data/wizard';

interface DiagnosticContextType {
  result: DiagnosticResult | null;
  setResult: (r: DiagnosticResult) => void;
  clearResult: () => void;
}

const DiagnosticContext = createContext<DiagnosticContextType>({
  result: null,
  setResult: () => {},
  clearResult: () => {},
});

export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [result, setResultState] = useState<DiagnosticResult | null>(null);
  return (
    <DiagnosticContext.Provider
      value={{
        result,
        setResult: setResultState,
        clearResult: () => setResultState(null),
      }}
    >
      {children}
    </DiagnosticContext.Provider>
  );
}

export const useDiagnostic = () => useContext(DiagnosticContext);
