"use client";
import { useState } from 'react';
import { Bell, Clock, X, AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';
import type { AlarmSeverity } from '../../types';

function getSeverityStyles(severity: AlarmSeverity) {
  switch (severity) {
    case 'critical':
      return { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30', icon: AlertTriangle };
    case 'warning':
      return { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: AlertCircle };
    case 'info':
      return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: Info };
  }
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', { hour12: false });
}

function formatDateTime(iso: string): string {
  const d = new Date(iso);
  return `${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ${d.toLocaleTimeString('en-US', { hour12: false })}`;
}

export default function AlarmsEventsPanel() {
  const [tab, setTab] = useState<'alarms' | 'events'>('alarms');
  const alarms = useFlowMeterStore((s) => s.alarms);
  const events = useFlowMeterStore((s) => s.events);
  const removeAlarm = useFlowMeterStore((s) => s.removeAlarm);

  return (
    <div className="fm-card border fm-border rounded-lg p-4 sm:p-5">
      {/* Header with tabs */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
          <h3 className="text-sm sm:text-base font-semibold fm-text-primary">ALARMS & EVENTS</h3>
        </div>
        <div className="flex rounded-lg border fm-border overflow-hidden">
          <button
            onClick={() => setTab('alarms')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === 'alarms'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'fm-text-secondary hover:fm-text-primary'
            }`}
          >
            Alarms ({alarms.length})
          </button>
          <button
            onClick={() => setTab('events')}
            className={`px-3 py-1.5 text-xs font-medium transition-colors border-l fm-border ${
              tab === 'events'
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'fm-text-secondary hover:fm-text-primary'
            }`}
          >
            Events ({events.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-h-64 sm:max-h-72 overflow-y-auto space-y-2 scrollbar-thin">
        {tab === 'alarms' && (
          <>
            {alarms.length === 0 ? (
              <div className="text-center py-8 fm-text-secondary text-sm">
                No active alarms
              </div>
            ) : (
              alarms.map((alarm) => {
                const styles = getSeverityStyles(alarm.severity);
                const SevIcon = styles.icon;
                return (
                  <div
                    key={alarm.id}
                    className={`flex items-start gap-3 p-3 rounded-lg border ${styles.border} ${styles.bg}`}
                  >
                    <SevIcon className={`w-4 h-4 shrink-0 mt-0.5 ${styles.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold ${styles.color}`}>{alarm.message}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-[10px] fm-text-secondary">
                          {alarm.parameter}: {alarm.value.toFixed(2)} (threshold: {alarm.threshold})
                        </span>
                        <span className="text-[10px] fm-text-secondary">
                          {formatTime(alarm.timestamp)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeAlarm(alarm.id)}
                      className="fm-text-secondary hover:text-red-400 transition-colors shrink-0"
                      title="Dismiss"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })
            )}
          </>
        )}

        {tab === 'events' && (
          <>
            {events.length === 0 ? (
              <div className="text-center py-8 fm-text-secondary text-sm">
                No recent events
              </div>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 p-3 rounded-lg border fm-border-subtle fm-hover-bg"
                >
                  <Clock className="w-3.5 h-3.5 fm-text-secondary shrink-0" />
                  <p className="text-xs fm-text-primary flex-1">{event.message}</p>
                  <span className="text-[10px] fm-text-secondary whitespace-nowrap">
                    {formatDateTime(event.timestamp)}
                  </span>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}
