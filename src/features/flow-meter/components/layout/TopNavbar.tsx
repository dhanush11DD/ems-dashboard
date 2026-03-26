"use client";
import { useState, useEffect } from 'react';
import { Sun, Moon, Wifi, WifiOff, Droplets } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';

export default function TopNavbar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const theme = useFlowMeterStore((s) => s.theme);
  const toggleTheme = useFlowMeterStore((s) => s.toggleTheme);
  const isConnected = useFlowMeterStore((s) => s.isConnected);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fm-card border-b fm-border px-4 py-3 flex items-center justify-between">
      {/* Left: breadcrumb + mobile logo */}
      <div className="flex items-center gap-3">
        <div className="md:hidden w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
          <Droplets className="w-4 h-4 text-cyan-400" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-xs fm-text-secondary">
            <span>EMS Dashboard</span>
            <span>/</span>
            <span className="text-cyan-400 font-medium">Flow Meter</span>
          </div>
          <h2 className="text-sm sm:text-base font-semibold fm-text-primary">
            Water Flow Monitoring
          </h2>
        </div>
      </div>

      {/* Right: status + clock + theme toggle */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Connection status */}
        <div className="flex items-center gap-1.5">
          {isConnected ? (
            <>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <Wifi className="w-3.5 h-3.5 text-green-400 hidden sm:block" />
            </>
          ) : (
            <>
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <WifiOff className="w-3.5 h-3.5 text-red-400 hidden sm:block" />
            </>
          )}
          <span className="text-[10px] fm-text-secondary hidden sm:inline">
            {isConnected ? 'LIVE' : 'OFFLINE'}
          </span>
        </div>

        {/* Clock */}
        <div className="text-right hidden sm:block">
          <div className="text-sm font-mono text-cyan-400">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="text-[10px] fm-text-secondary">
            {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="w-8 h-8 rounded-lg border fm-border flex items-center justify-center fm-text-secondary hover:fm-text-primary hover:bg-white/5 transition-colors"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}
