"use client";
import { useFlowMeterStore } from '../../store/useFlowMeterStore';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useFlowMeterStore((s) => s.theme);

  return (
    <div data-theme={theme} className={theme === 'dark' ? 'fm-dark' : 'fm-light'}>
      {children}
    </div>
  );
}
