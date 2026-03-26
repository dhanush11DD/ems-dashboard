"use client";
import type { ThresholdLevel } from '../../constants/flowMeterConfig';
import { getThresholdColor, getThresholdBorderColor, getThresholdBgColor } from '../../constants/flowMeterConfig';

interface KpiCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: React.ElementType;
  level?: ThresholdLevel;
  subtitle?: string;
  accentColor?: string;
}

export default function KpiCard({
  title,
  value,
  unit,
  icon: Icon,
  level = 'normal',
  subtitle,
  accentColor,
}: KpiCardProps) {
  const textColor = accentColor || getThresholdColor(level);
  const borderColor = accentColor ? 'fm-border' : getThresholdBorderColor(level);
  const bgColor = accentColor ? '' : getThresholdBgColor(level);

  return (
    <div
      className={`fm-card border ${borderColor} rounded-lg p-3 sm:p-4 relative overflow-hidden ${bgColor}`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl" />
      <div className="relative">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] sm:text-xs fm-text-secondary uppercase tracking-wider font-medium">
            {title}
          </span>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor}`} />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={`text-xl sm:text-2xl lg:text-3xl font-bold font-mono ${textColor}`}>
            {value}
          </span>
          <span className="text-xs sm:text-sm fm-text-secondary">{unit}</span>
        </div>
        {subtitle && (
          <p className="text-[10px] sm:text-xs fm-text-secondary mt-1.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
