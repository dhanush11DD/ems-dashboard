"use client";
import { TrendingDown, TrendingUp, Minus } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';
import DailyMetricCard from './DailyMetricCard';

export default function DailyMetricsGrid() {
  const metrics = useFlowMeterStore((s) => s.dailyMetrics);

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      <DailyMetricCard
        title="Day Min Flow"
        value={metrics.minFlow}
        unit="m³/hr"
        icon={TrendingDown}
        color="text-blue-400"
      />
      <DailyMetricCard
        title="Day Max Flow"
        value={metrics.maxFlow}
        unit="m³/hr"
        icon={TrendingUp}
        color="text-orange-400"
      />
      <DailyMetricCard
        title="Day Avg Flow"
        value={metrics.avgFlow}
        unit="m³/hr"
        icon={Minus}
        color="text-cyan-400"
      />
    </div>
  );
}
