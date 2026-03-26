"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { Activity } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number; dataKey: string; color: string }>; label?: string }) {
  if (!active || !payload) return null;
  return (
    <div className="fm-card border fm-border rounded-lg p-3 shadow-xl text-xs">
      <p className="fm-text-secondary mb-1.5 font-medium">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="fm-text-secondary capitalize">{entry.dataKey === 'flowRate' ? 'Flow' : 'Average'}:</span>
          <span className="font-mono font-bold fm-text-primary">{entry.value.toFixed(2)} m³/hr</span>
        </div>
      ))}
    </div>
  );
}

export default function RealTimeFlowChart() {
  const chartData = useFlowMeterStore((s) => s.chartData);
  const theme = useFlowMeterStore((s) => s.theme);

  const gridColor = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)';
  const axisColor = theme === 'dark' ? '#6b7280' : '#9ca3af';

  return (
    <div className="fm-card border fm-border rounded-lg p-4 sm:p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          <h3 className="text-sm sm:text-base font-semibold fm-text-primary">FLOW RATE TREND</h3>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-xs fm-text-secondary">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-cyan-400 rounded" />
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-0.5 bg-purple-400 rounded" style={{ borderTop: '1px dashed' }} />
            <span>Average</span>
          </div>
        </div>
      </div>
      <div className="h-52 sm:h-64 lg:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10, fill: axisColor }}
              tickLine={{ stroke: axisColor }}
              axisLine={{ stroke: gridColor }}
              interval="preserveStartEnd"
              minTickGap={40}
            />
            <YAxis
              tick={{ fontSize: 10, fill: axisColor }}
              tickLine={{ stroke: axisColor }}
              axisLine={{ stroke: gridColor }}
              domain={[0, 'auto']}
              tickFormatter={(v: number) => v.toFixed(1)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="flowRate"
              stroke="#22d3ee"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#22d3ee', stroke: '#0e7490', strokeWidth: 2 }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="average"
              stroke="#a855f7"
              strokeWidth={1.5}
              strokeDasharray="5 5"
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
