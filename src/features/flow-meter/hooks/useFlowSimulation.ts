"use client";
import { useEffect, useRef } from 'react';
import { useFlowMeterStore } from '../store/useFlowMeterStore';
import { SIMULATION_CONFIG, FLOW_THRESHOLDS } from '../constants/flowMeterConfig';
import type { Alarm } from '../types';

export function useFlowSimulation() {
  const flowRef = useRef(0.61);
  const sumRef = useRef(0);
  const countRef = useRef(0);
  const minRef = useRef(Infinity);
  const maxRef = useRef(0);

  const updateFlow = useFlowMeterStore((s) => s.updateFlow);
  const addChartPoint = useFlowMeterStore((s) => s.addChartPoint);
  const updateDailyMetrics = useFlowMeterStore((s) => s.updateDailyMetrics);
  const addAlarm = useFlowMeterStore((s) => s.addAlarm);
  const addEvent = useFlowMeterStore((s) => s.addEvent);

  useEffect(() => {
    const interval = setInterval(() => {
      // Random walk for realistic flow simulation
      const delta = (Math.random() - 0.48) * 0.25;
      const { min, max } = SIMULATION_CONFIG.flowRateRange;
      flowRef.current = Math.max(min, Math.min(max, flowRef.current + delta));
      const flowRate = parseFloat(flowRef.current.toFixed(2));

      // Update running stats
      countRef.current++;
      sumRef.current += flowRate;
      if (flowRate < minRef.current) minRef.current = flowRate;
      if (flowRate > maxRef.current) maxRef.current = flowRate;

      const avg = parseFloat((sumRef.current / countRef.current).toFixed(2));

      // Update store
      updateFlow(flowRate);

      const now = new Date();
      addChartPoint({
        time: now.toLocaleTimeString('en-US', { hour12: false }),
        timestamp: now.getTime(),
        flowRate,
        average: avg,
      });

      updateDailyMetrics({
        minFlow: parseFloat(minRef.current.toFixed(2)),
        maxFlow: parseFloat(maxRef.current.toFixed(2)),
        avgFlow: avg,
      });

      // Random alarm generation
      if (Math.random() < SIMULATION_CONFIG.alarmProbability) {
        const thresholds = FLOW_THRESHOLDS.flowRate;
        let severity: Alarm['severity'] = 'info';
        let message = 'Flow rate update';
        let threshold: number = thresholds.normal;

        if (flowRate > thresholds.critical) {
          severity = 'critical';
          message = 'Flow rate exceeded critical threshold';
          threshold = thresholds.critical;
        } else if (flowRate > thresholds.high) {
          severity = 'warning';
          message = 'High flow rate detected';
          threshold = thresholds.high;
        } else if (flowRate < thresholds.low) {
          severity = 'warning';
          message = 'Low flow rate warning';
          threshold = thresholds.low;
        }

        const alarm: Alarm = {
          id: `alm-${Date.now()}`,
          severity,
          message,
          timestamp: now.toISOString(),
          parameter: 'Flow Rate',
          value: flowRate,
          threshold,
        };
        addAlarm(alarm);
        addEvent({
          id: `evt-${Date.now()}`,
          message: alarm.message,
          timestamp: now.toISOString(),
          type: 'alarm',
        });
      }
    }, SIMULATION_CONFIG.intervalMs);

    return () => clearInterval(interval);
  }, [updateFlow, addChartPoint, updateDailyMetrics, addAlarm, addEvent]);
}
