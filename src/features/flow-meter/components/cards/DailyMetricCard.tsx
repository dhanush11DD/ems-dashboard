"use client";

interface DailyMetricCardProps {
  title: string;
  value: number;
  unit: string;
  icon: React.ElementType;
  color: string;
}

export default function DailyMetricCard({ title, value, unit, icon: Icon, color }: DailyMetricCardProps) {
  return (
    <div className="fm-card border fm-border rounded-lg p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${color}`} />
        <span className="text-[10px] sm:text-xs fm-text-secondary uppercase tracking-wider">{title}</span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className={`text-lg sm:text-xl lg:text-2xl font-bold font-mono ${color}`}>
          {value.toFixed(2)}
        </span>
        <span className="text-xs fm-text-secondary">{unit}</span>
      </div>
    </div>
  );
}
