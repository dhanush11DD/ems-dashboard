/**
 * Theme Example Component
 * 
 * This file demonstrates how to use the centralized theme system.
 * Copy and adapt these patterns for your own components.
 */

"use client";
import React from 'react';
import { Activity, Zap, AlertCircle } from 'lucide-react';
import {
  getStatusTextColor,
  getStatusBgClasses,
  getPhaseTextColor,
  getPhaseGradient,
  layoutClasses,
  textClasses,
  cardClasses,
  panelClasses,
  glowClasses,
  iconSizes,
  progressBarClasses,
  buttonClasses,
  badgeClasses,
  type PhaseType,
  type StatusType,
} from '@/lib/theme';

// Example 1: Simple Status Card
export function StatusCard({ status, title, value }: { 
  status: StatusType; 
  title: string; 
  value: string;
}) {
  return (
    <div className={`${getStatusBgClasses(status)} ${cardClasses.base} ${cardClasses.padding.md}`}>
      <div className={glowClasses.cyan}></div>
      <div className="relative">
        <div className={textClasses.label}>{title}</div>
        <div className={`text-2xl font-bold ${getStatusTextColor(status)} uppercase mt-2`}>
          {value}
        </div>
      </div>
    </div>
  );
}

// Example 2: Info Card with Icon
export function InfoCard({ 
  icon: Icon, 
  title, 
  value, 
  unit 
}: { 
  icon: React.ElementType; 
  title: string; 
  value: string | number; 
  unit?: string;
}) {
  return (
    <div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className={`${iconSizes.md} text-semantic-info`} />
        <div className={textClasses.label}>{title}</div>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-text-accent font-mono">{value}</span>
        {unit && <span className="text-text-secondary text-sm">{unit}</span>}
      </div>
    </div>
  );
}

// Example 3: Data Panel
export function DataPanel({ 
  title, 
  icon: Icon, 
  children 
}: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
}) {
  return (
    <div className={`${panelClasses.current} ${cardClasses.padding.lg}`}>
      <div className="flex items-center gap-2 mb-4">
        <Icon className={`${iconSizes.md} text-phase-blue`} />
        <h3 className="text-lg font-semibold text-phase-blue">{title}</h3>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

// Example 4: Data Row
export function DataRow({ 
  label, 
  value, 
  unit 
}: { 
  label: string; 
  value: string | number; 
  unit?: string;
}) {
  return (
    <div className="bg-background-overlay rounded p-3 border border-border-secondary">
      <div className="flex justify-between items-center">
        <span className="text-text-secondary">{label}:</span>
        <span className="text-semantic-info font-bold font-mono">
          {value}{unit}
        </span>
      </div>
    </div>
  );
}

// Example 5: Progress Indicator
export function ProgressIndicator({ 
  label, 
  value, 
  max, 
  phase 
}: { 
  label: string; 
  value: number; 
  max: number; 
  phase: PhaseType;
}) {
  const gradient = getPhaseGradient(phase);
  const percentage = (value / max) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className={`${getPhaseTextColor(phase)} font-semibold text-sm uppercase`}>
          {label}
        </span>
        <span className={`${getPhaseTextColor(phase)} font-bold font-mono`}>
          {value}
        </span>
      </div>
      <div className={progressBarClasses.container}>
        <div 
          className={progressBarClasses.bar}
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})`
          }}
        />
      </div>
    </div>
  );
}

// Example 6: Alert Box
export function AlertBox({ 
  type, 
  message 
}: { 
  type: 'info' | 'warning' | 'error'; 
  message: string;
}) {
  const colorMap = {
    info: 'text-semantic-info border-semantic-info',
    warning: 'text-status-warning border-status-warning',
    error: 'text-semantic-danger border-semantic-danger',
  };

  return (
    <div className={`border-l-4 ${colorMap[type]} bg-background-card p-4 rounded`}>
      <div className="flex items-center gap-2">
        <AlertCircle className={iconSizes.md} />
        <p className="text-text-primary">{message}</p>
      </div>
    </div>
  );
}

// Example 7: Button Group
export function ButtonGroup() {
  return (
    <div className="flex gap-2">
      <button className={`${buttonClasses.base} ${buttonClasses.primary} ${buttonClasses.size.md}`}>
        Primary
      </button>
      <button className={`${buttonClasses.base} ${buttonClasses.secondary} ${buttonClasses.size.md}`}>
        Secondary
      </button>
      <button className={`${buttonClasses.base} ${buttonClasses.danger} ${buttonClasses.size.md}`}>
        Danger
      </button>
      <button className={`${buttonClasses.base} ${buttonClasses.ghost} ${buttonClasses.size.md}`}>
        Ghost
      </button>
    </div>
  );
}

// Example 8: Status Badge
export function StatusBadge({ status }: { status: StatusType }) {
  const badgeMap: Record<StatusType, string> = {
    online: badgeClasses.online,
    offline: badgeClasses.offline,
    warning: badgeClasses.warning,
    standby: badgeClasses.standby,
    running: badgeClasses.online,
    error: badgeClasses.offline,
    good: badgeClasses.online,
    excellent: badgeClasses.online,
  };

  return (
    <span className={`${badgeClasses.base} ${badgeMap[status]}`}>
      {status}
    </span>
  );
}

// Example 9: Grid Layout
export function GridExample() {
  return (
    <div className={layoutClasses.page}>
      <div className={layoutClasses.section}>
        <h1 className={textClasses.title}>Grid Layout Example</h1>
        <p className={textClasses.subtitle}>Responsive grid with theme utilities</p>
      </div>

      {/* 4 Column Grid */}
      <div className={`${layoutClasses.grid.cols4} ${layoutClasses.section}`}>
        <StatusCard status="online" title="System 1" value="Online" />
        <StatusCard status="running" title="System 2" value="Running" />
        <StatusCard status="standby" title="System 3" value="Standby" />
        <StatusCard status="offline" title="System 4" value="Offline" />
      </div>

      {/* 3 Column Grid */}
      <div className={`${layoutClasses.grid.cols3} ${layoutClasses.section}`}>
        <InfoCard icon={Activity} title="Active Users" value={1234} />
        <InfoCard icon={Zap} title="Power Usage" value={85} unit="%" />
        <InfoCard icon={AlertCircle} title="Alerts" value={3} />
      </div>

      {/* 2 Column Grid */}
      <div className={layoutClasses.grid.cols2}>
        <DataPanel title="System Metrics" icon={Activity}>
          <DataRow label="CPU Usage" value={45} unit="%" />
          <DataRow label="Memory" value={8.2} unit="GB" />
          <DataRow label="Disk Space" value={256} unit="GB" />
        </DataPanel>

        <DataPanel title="Network Stats" icon={Zap}>
          <DataRow label="Upload" value={125} unit="Mbps" />
          <DataRow label="Download" value={980} unit="Mbps" />
          <DataRow label="Latency" value={12} unit="ms" />
        </DataPanel>
      </div>
    </div>
  );
}

// Example 10: Complete Page Template
export default function ThemeExamplePage() {
  return (
    <div className={layoutClasses.page}>
      {/* Header Section */}
      <div className={layoutClasses.section}>
        <h1 className={textClasses.title}>Theme Example Page</h1>
        <p className={textClasses.subtitle}>
          Demonstrating the centralized theme system
        </p>
      </div>

      {/* Status Cards */}
      <div className={`${layoutClasses.grid.cols4} ${layoutClasses.section}`}>
        <StatusCard status="online" title="Site Status" value="Online" />
        <StatusCard status="running" title="ATM Status" value="Running" />
        <StatusCard status="warning" title="Alerts" value="2 Warnings" />
        <StatusCard status="good" title="Health" value="Good" />
      </div>

      {/* Info Cards */}
      <div className={`${layoutClasses.grid.cols3} ${layoutClasses.section}`}>
        <InfoCard icon={Activity} title="Transactions" value={287} unit="today" />
        <InfoCard icon={Zap} title="Power Load" value={45} unit="%" />
        <InfoCard icon={AlertCircle} title="Uptime" value={99.8} unit="%" />
      </div>

      {/* Progress Indicators */}
      <div className={`${cardClasses.primary} ${cardClasses.padding.lg} ${layoutClasses.section}`}>
        <h3 className={textClasses.heading.h3}>Phase Monitoring</h3>
        <div className="space-y-4 mt-4">
          <ProgressIndicator label="Red Phase" value={235.5} max={250} phase="red" />
          <ProgressIndicator label="Yellow Phase" value={237.2} max={250} phase="yellow" />
          <ProgressIndicator label="Blue Phase" value={236.8} max={250} phase="blue" />
        </div>
      </div>

      {/* Alerts */}
      <div className={`space-y-3 ${layoutClasses.section}`}>
        <AlertBox type="info" message="System is operating normally" />
        <AlertBox type="warning" message="Temperature slightly elevated" />
        <AlertBox type="error" message="Connection timeout detected" />
      </div>

      {/* Buttons */}
      <div className={layoutClasses.section}>
        <h3 className={textClasses.heading.h3}>Action Buttons</h3>
        <div className="mt-4">
          <ButtonGroup />
        </div>
      </div>

      {/* Badges */}
      <div className={layoutClasses.section}>
        <h3 className={textClasses.heading.h3}>Status Badges</h3>
        <div className="flex gap-2 mt-4">
          <StatusBadge status="online" />
          <StatusBadge status="running" />
          <StatusBadge status="standby" />
          <StatusBadge status="warning" />
          <StatusBadge status="offline" />
        </div>
      </div>
    </div>
  );
}
