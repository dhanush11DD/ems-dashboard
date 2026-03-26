import { create } from 'zustand';
import type { FlowMeterState, ValvePosition, Alarm, EventLog, FlowDataPoint, ThemeMode } from '../types';
import { SYSTEM_DEFAULTS, SIMULATION_CONFIG } from '../constants/flowMeterConfig';
import { INITIAL_ALARMS, INITIAL_EVENTS, generateInitialChartData, INITIAL_MOCK } from '../constants/mockData';

export const useFlowMeterStore = create<FlowMeterState>((set) => ({
  currentFlow: INITIAL_MOCK.currentFlow,
  totalFlow: INITIAL_MOCK.totalFlow,
  valve: {
    position: 'closed',
    lastChanged: new Date().toISOString(),
    isTransitioning: false,
  },
  alarms: INITIAL_ALARMS,
  events: INITIAL_EVENTS,
  dailyMetrics: INITIAL_MOCK.dailyMetrics,
  systemInfo: SYSTEM_DEFAULTS,
  chartData: generateInitialChartData(20),
  isConnected: true,
  theme: 'dark' as ThemeMode,

  updateFlow: (flowRate: number) =>
    set((state) => ({
      currentFlow: flowRate,
      totalFlow: parseFloat((state.totalFlow + (flowRate * SIMULATION_CONFIG.intervalMs) / 3600000).toFixed(4)),
    })),

  addChartPoint: (point: FlowDataPoint) =>
    set((state) => ({
      chartData: [...state.chartData, point].slice(-SIMULATION_CONFIG.maxChartPoints),
    })),

  setValvePosition: (position: ValvePosition) =>
    set(() => ({
      valve: {
        position,
        lastChanged: new Date().toISOString(),
        isTransitioning: false,
      },
    })),

  setValveTransitioning: (transitioning: boolean) =>
    set((state) => ({
      valve: { ...state.valve, isTransitioning: transitioning },
    })),

  addAlarm: (alarm: Alarm) =>
    set((state) => ({
      alarms: [alarm, ...state.alarms].slice(0, 50),
    })),

  removeAlarm: (id: string) =>
    set((state) => ({
      alarms: state.alarms.filter((a) => a.id !== id),
    })),

  addEvent: (event: EventLog) =>
    set((state) => ({
      events: [event, ...state.events].slice(0, 30),
    })),

  updateDailyMetrics: (metrics) =>
    set((state) => ({
      dailyMetrics: { ...state.dailyMetrics, ...metrics },
    })),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'dark' ? 'light' : 'dark',
    })),

  setConnected: (connected: boolean) =>
    set(() => ({
      isConnected: connected,
    })),
}));
