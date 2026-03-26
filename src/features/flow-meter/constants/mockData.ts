import type { Alarm, EventLog, FlowDataPoint } from '../types';

export const INITIAL_MOCK = {
  currentFlow: 0.61,
  totalFlow: 2.64,
  dailyMetrics: {
    minFlow: 0,
    maxFlow: 1.22,
    avgFlow: 0.16,
  },
  valveStatus: 'closed' as const,
  alarms: 567,
  events: 13,
  bypassFlow: 0.0,
};

export const INITIAL_ALARMS: Alarm[] = [
  {
    id: 'alm-001',
    severity: 'critical',
    message: 'Flow rate exceeded critical threshold',
    timestamp: new Date(Date.now() - 300000).toISOString(),
    parameter: 'Flow Rate',
    value: 1.62,
    threshold: 1.5,
  },
  {
    id: 'alm-002',
    severity: 'warning',
    message: 'High flow rate detected',
    timestamp: new Date(Date.now() - 600000).toISOString(),
    parameter: 'Flow Rate',
    value: 1.15,
    threshold: 1.0,
  },
  {
    id: 'alm-003',
    severity: 'info',
    message: 'Valve position changed to CLOSED',
    timestamp: new Date(Date.now() - 900000).toISOString(),
    parameter: 'Valve',
    value: 0,
    threshold: 0,
  },
  {
    id: 'alm-004',
    severity: 'warning',
    message: 'Low flow rate warning',
    timestamp: new Date(Date.now() - 1200000).toISOString(),
    parameter: 'Flow Rate',
    value: 0.15,
    threshold: 0.2,
  },
];

export const INITIAL_EVENTS: EventLog[] = [
  {
    id: 'evt-001',
    message: 'System startup completed',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    type: 'system',
  },
  {
    id: 'evt-002',
    message: 'Valve closed by operator',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    type: 'valve',
  },
  {
    id: 'evt-003',
    message: 'High flow alarm triggered',
    timestamp: new Date(Date.now() - 900000).toISOString(),
    type: 'alarm',
  },
  {
    id: 'evt-004',
    message: 'Calibration check passed',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    type: 'system',
  },
];

export function generateInitialChartData(points: number = 20): FlowDataPoint[] {
  const data: FlowDataPoint[] = [];
  const now = Date.now();
  let flow = 0.5;
  let sum = 0;

  for (let i = points; i > 0; i--) {
    const delta = (Math.random() - 0.45) * 0.3;
    flow = Math.max(0, Math.min(2.0, flow + delta));
    sum += flow;
    const time = new Date(now - i * 2500);
    data.push({
      time: time.toLocaleTimeString('en-US', { hour12: false }),
      timestamp: time.getTime(),
      flowRate: parseFloat(flow.toFixed(2)),
      average: parseFloat((sum / (points - i + 1)).toFixed(2)),
    });
  }
  return data;
}
