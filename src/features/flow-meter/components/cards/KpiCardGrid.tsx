"use client";
import { Droplets, BarChart3, Power, AlertTriangle } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';
import { getFlowThresholdLevel } from '../../constants/flowMeterConfig';
import KpiCard from './KpiCard';

export default function KpiCardGrid() {
  const currentFlow = useFlowMeterStore((s) => s.currentFlow);
  const totalFlow = useFlowMeterStore((s) => s.totalFlow);
  const valve = useFlowMeterStore((s) => s.valve);
  const alarms = useFlowMeterStore((s) => s.alarms);

  const flowLevel = getFlowThresholdLevel(currentFlow);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <KpiCard
        title="Current Flow"
        value={currentFlow.toFixed(2)}
        unit="m\u00B3/hr"
        icon={Droplets}
        level={flowLevel}
        subtitle="Real-time flow rate"
      />
      <KpiCard
        title="Total Flow"
        value={totalFlow.toFixed(2)}
        unit="m\u00B3"
        icon={BarChart3}
        accentColor="text-cyan-400"
        subtitle="Cumulative today"
      />
      <KpiCard
        title="Valve Status"
        value={valve.position.toUpperCase()}
        unit=""
        icon={Power}
        accentColor={valve.position === 'open' ? 'text-green-400' : 'text-red-400'}
        subtitle={valve.isTransitioning ? 'Transitioning...' : `Since ${new Date(valve.lastChanged).toLocaleTimeString()}`}
      />
      <KpiCard
        title="Active Alarms"
        value={alarms.length}
        unit="alerts"
        icon={AlertTriangle}
        accentColor={alarms.length > 5 ? 'text-red-400' : alarms.length > 0 ? 'text-orange-400' : 'text-green-400'}
        subtitle={alarms.length === 0 ? 'All clear' : `${alarms.filter((a) => a.severity === 'critical').length} critical`}
      />
    </div>
  );
}
