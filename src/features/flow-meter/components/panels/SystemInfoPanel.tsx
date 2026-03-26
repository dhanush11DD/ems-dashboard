"use client";
import { Server, Calendar, Wrench, Gauge } from 'lucide-react';
import { useFlowMeterStore } from '../../store/useFlowMeterStore';

function InfoRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b fm-border-subtle last:border-0">
      <span className="text-xs fm-text-secondary">{label}</span>
      <span className={`text-xs font-mono font-semibold ${highlight ? 'text-cyan-400' : 'fm-text-primary'}`}>
        {value}
      </span>
    </div>
  );
}

export default function SystemInfoPanel() {
  const systemInfo = useFlowMeterStore((s) => s.systemInfo);

  return (
    <div className="fm-card border fm-border rounded-lg p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <Server className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <h3 className="text-sm sm:text-base font-semibold fm-text-primary">SYSTEM INFO</h3>
      </div>
      <div className="space-y-0">
        <InfoRow label="Source Name" value={systemInfo.sourceName} highlight />
        <InfoRow label="Pipe Size" value={systemInfo.pipeSize} />
        <InfoRow label="Bypass Flow" value={`${systemInfo.bypassFlow.toFixed(1)} m³/hr`} />
        <InfoRow label="Mode" value={systemInfo.mode} highlight />
        <InfoRow label="Meter ID" value={systemInfo.meterId} />
        <InfoRow label="Firmware" value={systemInfo.firmware} />
        <InfoRow label="Install Date" value={systemInfo.installDate} />
        <InfoRow label="Last Calibration" value={systemInfo.lastCalibration} />
      </div>
    </div>
  );
}
