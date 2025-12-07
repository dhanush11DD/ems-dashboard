/**
 * Theme Utility Functions
 * Centralized theme configuration for consistent styling across the application
 */

// Status type definitions
export type StatusType = 'online' | 'offline' | 'running' | 'standby' | 'warning' | 'error' | 'good' | 'excellent';

// Phase type definitions
export type PhaseType = 'red' | 'yellow' | 'blue';

/**
 * Get status-based text color classes
 */
export const getStatusTextColor = (status: string): string => {
  const statusMap: Record<string, string> = {
    online: 'text-status-online',
    offline: 'text-status-offline',
    warning: 'text-status-warning',
    excellent: 'text-status-online',
    good: 'text-semantic-info',
    running: 'text-status-online',
    standby: 'text-status-standby',
    error: 'text-status-error',
  };
  return statusMap[status?.toLowerCase()] || 'text-text-secondary';
};

/**
 * Get status-based background and border classes
 */
export const getStatusBgClasses = (status: string): string => {
  const statusMap: Record<string, string> = {
    online: 'bg-status-online-bg border-status-online-border',
    offline: 'bg-status-offline-bg border-status-offline-border',
    running: 'bg-status-online-bg border-status-online-border',
    standby: 'bg-status-standby-bg border-status-standby-border',
    error: 'bg-status-error-bg border-status-error-border',
  };
  return statusMap[status?.toLowerCase()] || 'bg-background-overlay border-border-secondary';
};

/**
 * Get phase-based text color classes
 */
export const getPhaseTextColor = (phase: PhaseType): string => {
  const phaseMap: Record<PhaseType, string> = {
    red: 'text-phase-red',
    yellow: 'text-phase-yellow',
    blue: 'text-phase-blue',
  };
  return phaseMap[phase];
};

/**
 * Get phase gradient colors for inline styles
 */
export const getPhaseGradient = (phase: PhaseType): { from: string; to: string } => {
  const gradientMap: Record<PhaseType, { from: string; to: string }> = {
    red: { from: '#ef4444', to: '#f87171' },
    yellow: { from: '#eab308', to: '#facc15' },
    blue: { from: '#3b82f6', to: '#60a5fa' },
  };
  return gradientMap[phase];
};

/**
 * Card component classes
 */
export const cardClasses = {
  base: 'rounded-card backdrop-blur-card relative overflow-hidden',
  primary: 'bg-gradient-card-br border border-border-primary',
  secondary: 'bg-background-card border border-border-secondary',
  padding: {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-5',
  },
  glow: {
    cyan: 'shadow-glow-cyan',
    green: 'shadow-glow-green',
    red: 'shadow-glow-red',
    blue: 'shadow-glow-blue',
    purple: 'shadow-glow-purple',
  },
};

/**
 * Status card classes with glow effects
 */
export const statusCardClasses = {
  online: `${cardClasses.base} bg-status-online-bg border border-status-online-border`,
  offline: `${cardClasses.base} bg-status-offline-bg border border-status-offline-border`,
  running: `${cardClasses.base} bg-status-online-bg border border-status-online-border`,
  standby: `${cardClasses.base} bg-status-standby-bg border border-status-standby-border`,
  error: `${cardClasses.base} bg-status-error-bg border border-status-error-border`,
};

/**
 * Panel classes for different sections
 */
export const panelClasses = {
  voltage: `${cardClasses.base} bg-gradient-card-br border border-accent-red backdrop-blur-card`,
  current: `${cardClasses.base} bg-gradient-card-br border border-accent-blue backdrop-blur-card`,
  earth: `${cardClasses.base} bg-gradient-card-br border border-accent-green backdrop-blur-card`,
  ups: `${cardClasses.base} bg-gradient-card-br border border-accent-purple backdrop-blur-card`,
  ac: `${cardClasses.base} bg-gradient-card-br border border-accent-cyan backdrop-blur-card`,
  contacts: `${cardClasses.base} bg-gradient-card-br border border-accent-orange backdrop-blur-card`,
};

/**
 * Text classes
 */
export const textClasses = {
  title: 'text-4xl font-bold bg-gradient-title bg-clip-text text-transparent',
  subtitle: 'text-text-secondary',
  heading: {
    h1: 'text-heading-1 font-semibold',
    h2: 'text-heading-2 font-semibold',
    h3: 'text-heading-3 font-semibold',
    h4: 'text-heading-4 font-semibold',
  },
  label: 'text-label text-text-secondary uppercase tracking-wider',
  value: 'text-text-accent font-mono font-semibold',
  mono: 'font-mono',
};

/**
 * Button classes
 */
export const buttonClasses = {
  base: 'rounded-button font-semibold transition-all duration-200',
  primary: 'bg-brand-primary text-background-primary hover:bg-brand-primary/90',
  secondary: 'bg-background-tertiary text-text-primary border border-border-primary hover:bg-background-tertiary/80',
  danger: 'bg-semantic-danger text-white hover:bg-semantic-danger/90',
  ghost: 'bg-transparent text-text-primary hover:bg-background-overlay',
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
};

/**
 * Badge classes
 */
export const badgeClasses = {
  base: 'rounded-badge px-2 py-1 text-xs font-semibold uppercase',
  online: 'bg-status-online-bg text-status-online border border-status-online-border',
  offline: 'bg-status-offline-bg text-status-offline border border-status-offline-border',
  warning: 'bg-status-warning-bg text-status-warning border border-status-warning-border',
  standby: 'bg-status-standby-bg text-status-standby border border-status-standby-border',
};

/**
 * Glow effect decorative elements
 */
export const glowClasses = {
  cyan: 'absolute top-0 right-0 w-24 h-24 bg-gradient-glow-cyan rounded-full blur-2xl',
  green: 'absolute top-0 right-0 w-24 h-24 bg-gradient-glow-green rounded-full blur-2xl',
  purple: 'absolute top-0 right-0 w-24 h-24 bg-gradient-glow-purple rounded-full blur-2xl',
  blue: 'absolute top-0 right-0 w-24 h-24 bg-gradient-glow-blue rounded-full blur-2xl',
};

/**
 * Layout classes
 */
export const layoutClasses = {
  page: 'min-h-screen bg-gradient-primary text-text-primary p-6',
  container: 'max-w-7xl mx-auto',
  section: 'mb-section',
  grid: {
    cols2: 'grid grid-cols-2 gap-6',
    cols3: 'grid grid-cols-3 gap-6',
    cols4: 'grid grid-cols-4 gap-4',
  },
};

/**
 * Progress bar classes
 */
export const progressBarClasses = {
  container: 'w-full bg-background-tertiary rounded-full h-2',
  bar: 'h-2 rounded-full transition-all duration-300',
};

/**
 * Icon sizes
 */
export const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

/**
 * Border accent colors for panels
 */
export const borderAccentClasses = {
  cyan: 'border-border-accent-cyan',
  blue: 'border-border-accent-blue',
  purple: 'border-border-accent-purple',
  green: 'border-border-accent-green',
  red: 'border-border-accent-red',
  orange: 'border-border-accent-orange',
};
