export interface FlowDataPoint {
  time: string;
  timestamp: number;
  flowRate: number;
  average: number;
}

export type ValvePosition = 'open' | 'closed';

export interface ValveState {
  position: ValvePosition;
  lastChanged: string;
  isTransitioning: boolean;
}

export type AlarmSeverity = 'critical' | 'warning' | 'info';

export interface Alarm {
  id: string;
  severity: AlarmSeverity;
  message: string;
  timestamp: string;
  parameter: string;
  value: number;
  threshold: number;
}

export interface EventLog {
  id: string;
  message: string;
  timestamp: string;
  type: 'valve' | 'alarm' | 'system';
}

export interface DailyMetrics {
  minFlow: number;
  maxFlow: number;
  avgFlow: number;
}

export interface SystemInfo {
  sourceName: string;
  pipeSize: string;
  bypassFlow: number;
  mode: 'Manual' | 'Auto';
  meterId: string;
  firmware: string;
  installDate: string;
  lastCalibration: string;
}

export type ThemeMode = 'dark' | 'light';

export interface FlowMeterState {
  currentFlow: number;
  totalFlow: number;
  valve: ValveState;
  alarms: Alarm[];
  events: EventLog[];
  dailyMetrics: DailyMetrics;
  systemInfo: SystemInfo;
  chartData: FlowDataPoint[];
  isConnected: boolean;
  theme: ThemeMode;

  // Actions
  updateFlow: (flowRate: number) => void;
  addChartPoint: (point: FlowDataPoint) => void;
  setValvePosition: (position: ValvePosition) => void;
  setValveTransitioning: (transitioning: boolean) => void;
  addAlarm: (alarm: Alarm) => void;
  removeAlarm: (id: string) => void;
  addEvent: (event: EventLog) => void;
  updateDailyMetrics: (metrics: Partial<DailyMetrics>) => void;
  toggleTheme: () => void;
  setConnected: (connected: boolean) => void;
}
