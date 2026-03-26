export const FLOW_THRESHOLDS = {
  flowRate: {
    low: 0.2,
    normal: 0.5,
    high: 1.0,
    critical: 1.5,
  },
  temperature: {
    low: 5,
    normal: 25,
    high: 35,
    critical: 45,
  },
} as const;

export const SIMULATION_CONFIG = {
  intervalMs: 2500,
  maxChartPoints: 60,
  flowRateRange: { min: 0, max: 2.0 },
  alarmProbability: 0.03,
} as const;

export const SYSTEM_DEFAULTS: {
  sourceName: string;
  pipeSize: string;
  bypassFlow: number;
  mode: 'Manual' | 'Auto';
  meterId: string;
  firmware: string;
  installDate: string;
  lastCalibration: string;
} = {
  sourceName: 'Ariyanayakipuram WTP',
  pipeSize: '150mm',
  bypassFlow: 0.0,
  mode: 'Auto',
  meterId: 'FM-WTP-001',
  firmware: 'v3.2.1',
  installDate: '2024-03-15',
  lastCalibration: '2025-12-01',
};

export type ThresholdLevel = 'low' | 'normal' | 'high' | 'critical';

export function getFlowThresholdLevel(value: number): ThresholdLevel {
  const t = FLOW_THRESHOLDS.flowRate;
  if (value >= t.critical) return 'critical';
  if (value >= t.high) return 'high';
  if (value >= t.normal) return 'normal';
  return 'low';
}

export function getThresholdColor(level: ThresholdLevel): string {
  switch (level) {
    case 'critical': return 'text-red-400';
    case 'high': return 'text-orange-400';
    case 'normal': return 'text-green-400';
    case 'low': return 'text-blue-400';
  }
}

export function getThresholdBorderColor(level: ThresholdLevel): string {
  switch (level) {
    case 'critical': return 'border-red-500/50';
    case 'high': return 'border-orange-500/50';
    case 'normal': return 'border-green-500/50';
    case 'low': return 'border-blue-500/50';
  }
}

export function getThresholdBgColor(level: ThresholdLevel): string {
  switch (level) {
    case 'critical': return 'bg-red-500/10';
    case 'high': return 'bg-orange-500/10';
    case 'normal': return 'bg-green-500/10';
    case 'low': return 'bg-blue-500/10';
  }
}
