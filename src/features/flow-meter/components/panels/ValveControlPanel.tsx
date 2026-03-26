"use client";
import { useState } from 'react';
import { Power, Loader2 } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';
import ConfirmationModal from '../modals/ConfirmationModal';

export default function ValveControlPanel() {
  const valve = useFlowMeterStore((s) => s.valve);
  const setValvePosition = useFlowMeterStore((s) => s.setValvePosition);
  const setValveTransitioning = useFlowMeterStore((s) => s.setValveTransitioning);
  const addEvent = useFlowMeterStore((s) => s.addEvent);
  const [showConfirm, setShowConfirm] = useState(false);

  const isOpen = valve.position === 'open';
  const targetAction = isOpen ? 'CLOSE' : 'OPEN';

  const handleConfirm = () => {
    setShowConfirm(false);
    setValveTransitioning(true);

    // Simulate valve transition delay
    setTimeout(() => {
      const newPosition = isOpen ? 'closed' : 'open';
      setValvePosition(newPosition);
      addEvent({
        id: `evt-${Date.now()}`,
        message: `Valve ${newPosition === 'open' ? 'opened' : 'closed'} by operator`,
        timestamp: new Date().toISOString(),
        type: 'valve',
      });
    }, 2000);
  };

  return (
    <>
      <div className="fm-card border fm-border rounded-lg p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-4">
          <Power className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          <h3 className="text-sm sm:text-base font-semibold fm-text-primary">VALVE CONTROL</h3>
        </div>

        {/* Valve status visual */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <div
            className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 flex items-center justify-center transition-all duration-500 ${
              valve.isTransitioning
                ? 'border-yellow-500/50 bg-yellow-500/10'
                : isOpen
                ? 'border-green-500/50 bg-green-500/10'
                : 'border-red-500/50 bg-red-500/10'
            }`}
          >
            {valve.isTransitioning ? (
              <Loader2 className="w-8 h-8 text-yellow-400 animate-spin" />
            ) : (
              <div className="text-center">
                <Power
                  className={`w-8 h-8 mx-auto mb-1 ${isOpen ? 'text-green-400' : 'text-red-400'}`}
                />
                <span
                  className={`text-xs font-bold uppercase ${
                    isOpen ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {valve.position}
                </span>
              </div>
            )}
          </div>

          {/* Status info */}
          <div className="text-center space-y-1">
            <p className="text-[10px] sm:text-xs fm-text-secondary">
              Last changed: {new Date(valve.lastChanged).toLocaleTimeString()}
            </p>
            {valve.isTransitioning && (
              <p className="text-xs text-yellow-400 font-medium animate-pulse">
                Transitioning...
              </p>
            )}
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={() => setShowConfirm(true)}
          disabled={valve.isTransitioning}
          className={`w-full py-2.5 sm:py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            isOpen
              ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
              : 'bg-green-500/20 border border-green-500/50 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {valve.isTransitioning ? 'Processing...' : `${targetAction} Valve`}
        </button>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        title={`${targetAction} Valve`}
        message={`Are you sure you want to ${targetAction.toLowerCase()} the valve? This action will ${
          isOpen ? 'stop' : 'start'
        } the water flow immediately.`}
        confirmLabel={`Yes, ${targetAction}`}
        confirmVariant={isOpen ? 'danger' : 'primary'}
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
