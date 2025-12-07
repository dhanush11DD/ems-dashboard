# EMS Dashboard Theme Guide

## Overview

This project uses a centralized theme configuration system built on Tailwind CSS. All colors, spacing, typography, and design tokens are defined in `tailwind.config.ts` and accessed through utility functions in `src/lib/theme.ts`.

## Why Centralized Theming?

- **Consistency**: All pages use the same design tokens
- **Maintainability**: Change colors/styles in one place
- **Scalability**: Easy to add new pages with consistent styling
- **Type Safety**: TypeScript types for theme values
- **Reusability**: Pre-built component classes

## File Structure

```
ems-dashboard/
├── tailwind.config.ts          # Tailwind theme configuration
├── src/
│   ├── lib/
│   │   └── theme.ts            # Theme utility functions
│   └── app/
│       ├── Dashboard.tsx       # Example usage
│       └── page.tsx
```

## Theme Configuration (`tailwind.config.ts`)

### Color Palette

#### Brand Colors
```typescript
brand: {
  primary: "#22d3ee",    // cyan-400
  secondary: "#3b82f6",  // blue-500
  accent: "#a855f7",     // purple-600
}
```

#### Status Colors
```typescript
status: {
  online: { DEFAULT, light, dark, bg, border }
  offline: { DEFAULT, light, dark, bg, border }
  warning: { DEFAULT, light, dark, bg, border }
  standby: { DEFAULT, light, dark, bg, border }
  error: { DEFAULT, light, dark, bg, border }
}
```

**Usage:**
```tsx
<div className="text-status-online">Online</div>
<div className="bg-status-online-bg border-status-online-border">Card</div>
```

#### Phase Colors (Power Monitoring)
```typescript
phase: {
  red: { DEFAULT, light, dark, from, to }
  yellow: { DEFAULT, light, dark, from, to }
  blue: { DEFAULT, light, dark, from, to }
}
```

**Usage:**
```tsx
<span className="text-phase-red">Red Phase</span>
```

#### Semantic Colors
```typescript
semantic: {
  success: "#4ade80",  // green-400
  info: "#22d3ee",     // cyan-400
  danger: "#f87171",   // red-400
  alert: "#fb923c",    // orange-400
}
```

**Usage:**
```tsx
<div className="text-semantic-info">Information</div>
<div className="text-semantic-alert">Alert</div>
```

#### Background Colors
```typescript
background: {
  primary: "#000000",                    // black
  secondary: "#111827",                  // gray-900
  tertiary: "#1f2937",                   // gray-800
  card: "rgba(31, 41, 55, 0.5)",        // gray-800/50
  overlay: "rgba(0, 0, 0, 0.3)",        // black/30
}
```

**Usage:**
```tsx
<div className="bg-background-primary">Page</div>
<div className="bg-background-card">Card</div>
<div className="bg-background-overlay">Overlay</div>
```

#### Text Colors
```typescript
text: {
  primary: "#f3f4f6",    // gray-100
  secondary: "#9ca3af",  // gray-400
  tertiary: "#6b7280",   // gray-500
  accent: "#22d3ee",     // cyan-400
  white: "#ffffff",
}
```

**Usage:**
```tsx
<p className="text-text-primary">Main text</p>
<p className="text-text-secondary">Secondary text</p>
<p className="text-text-accent">Accent text</p>
```

#### Border Colors
```typescript
border: {
  primary: "rgba(34, 211, 238, 0.3)",    // cyan-500/30
  secondary: "rgba(107, 114, 128, 0.5)", // gray-700/50
}

// Border accent utilities
borderColor: {
  "accent-cyan": "rgba(34, 211, 238, 0.3)",
  "accent-blue": "rgba(59, 130, 246, 0.3)",
  "accent-purple": "rgba(168, 85, 247, 0.3)",
  "accent-green": "rgba(34, 197, 94, 0.3)",
  "accent-red": "rgba(239, 68, 68, 0.3)",
  "accent-orange": "rgba(249, 115, 22, 0.3)",
}
```

**Usage:**
```tsx
<div className="border border-border-primary">Card</div>
<div className="border border-accent-cyan">Cyan border</div>
```

### Background Gradients

```typescript
backgroundImage: {
  "gradient-primary": "linear-gradient(...)",     // Page background
  "gradient-card": "linear-gradient(...)",        // Card background
  "gradient-card-br": "linear-gradient(...)",     // Card background (bottom-right)
  "gradient-title": "linear-gradient(...)",       // Title gradient
  "gradient-glow-cyan": "linear-gradient(...)",   // Glow effects
  "gradient-glow-green": "linear-gradient(...)",
  "gradient-glow-purple": "linear-gradient(...)",
  "gradient-glow-blue": "linear-gradient(...)",
}
```

**Usage:**
```tsx
<div className="bg-gradient-primary">Page</div>
<h1 className="bg-gradient-title bg-clip-text text-transparent">Title</h1>
```

### Box Shadows

```typescript
boxShadow: {
  "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
  "glow-green": "0 0 20px rgba(34, 197, 94, 0.3)",
  "glow-red": "0 0 20px rgba(239, 68, 68, 0.3)",
  "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
  "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
  "card": "0 4px 6px -1px rgba(0, 0, 0, 0.3), ...",
  "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.4), ...",
}
```

**Usage:**
```tsx
<div className="shadow-glow-cyan">Glowing card</div>
<div className="shadow-card hover:shadow-card-hover">Interactive card</div>
```

### Typography

```typescript
fontSize: {
  "display-1": ["4rem", { lineHeight: "1", fontWeight: "700" }],
  "display-2": ["3rem", { lineHeight: "1", fontWeight: "700" }],
  "heading-1": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }],
  "heading-2": ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }],
  "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
  "heading-4": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
  "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
  "body": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
  "body-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
  "caption": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
  "label": ["0.75rem", { lineHeight: "1rem", fontWeight: "500", letterSpacing: "0.05em" }],
}
```

**Usage:**
```tsx
<h1 className="text-heading-1">Heading</h1>
<p className="text-body">Body text</p>
<span className="text-label">Label</span>
```

## Theme Utilities (`src/lib/theme.ts`)

### Status Functions

#### `getStatusTextColor(status: string): string`
Returns the appropriate text color class for a status.

```tsx
import { getStatusTextColor } from '@/lib/theme';

<div className={getStatusTextColor('online')}>Online</div>
// Returns: 'text-status-online'
```

#### `getStatusBgClasses(status: string): string`
Returns background and border classes for a status.

```tsx
import { getStatusBgClasses } from '@/lib/theme';

<div className={getStatusBgClasses('running')}>Running</div>
// Returns: 'bg-status-online-bg border-status-online-border'
```

### Phase Functions

#### `getPhaseTextColor(phase: PhaseType): string`
Returns text color for power phases.

```tsx
import { getPhaseTextColor } from '@/lib/theme';

<span className={getPhaseTextColor('red')}>Red Phase</span>
// Returns: 'text-phase-red'
```

#### `getPhaseGradient(phase: PhaseType): { from: string; to: string }`
Returns gradient colors for inline styles.

```tsx
import { getPhaseGradient } from '@/lib/theme';

const gradient = getPhaseGradient('blue');
<div style={{ background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }} />
```

### Pre-built Component Classes

#### Card Classes
```tsx
import { cardClasses } from '@/lib/theme';

<div className={`${cardClasses.base} ${cardClasses.primary} ${cardClasses.padding.md}`}>
  Card content
</div>
```

Available:
- `cardClasses.base` - Base card styles
- `cardClasses.primary` - Primary card background
- `cardClasses.secondary` - Secondary card background
- `cardClasses.padding.sm/md/lg` - Padding variants
- `cardClasses.glow.cyan/green/red/blue/purple` - Glow effects

#### Panel Classes
```tsx
import { panelClasses } from '@/lib/theme';

<div className={panelClasses.voltage}>Voltage Panel</div>
<div className={panelClasses.current}>Current Panel</div>
<div className={panelClasses.earth}>Earth Panel</div>
<div className={panelClasses.ups}>UPS Panel</div>
<div className={panelClasses.ac}>AC Panel</div>
<div className={panelClasses.contacts}>Contacts Panel</div>
```

#### Text Classes
```tsx
import { textClasses } from '@/lib/theme';

<h1 className={textClasses.title}>Page Title</h1>
<p className={textClasses.subtitle}>Subtitle</p>
<h2 className={textClasses.heading.h1}>Heading 1</h2>
<div className={textClasses.label}>Label</div>
<span className={textClasses.value}>Value</span>
```

#### Button Classes
```tsx
import { buttonClasses } from '@/lib/theme';

<button className={`${buttonClasses.base} ${buttonClasses.primary} ${buttonClasses.size.md}`}>
  Primary Button
</button>
```

Available:
- `buttonClasses.primary/secondary/danger/ghost`
- `buttonClasses.size.sm/md/lg`

#### Layout Classes
```tsx
import { layoutClasses } from '@/lib/theme';

<div className={layoutClasses.page}>
  <div className={layoutClasses.container}>
    <div className={layoutClasses.section}>
      <div className={layoutClasses.grid.cols4}>
        {/* Grid items */}
      </div>
    </div>
  </div>
</div>
```

#### Icon Sizes
```tsx
import { iconSizes } from '@/lib/theme';

<Icon className={iconSizes.md} />
```

Available: `xs`, `sm`, `md`, `lg`, `xl`

#### Progress Bar Classes
```tsx
import { progressBarClasses } from '@/lib/theme';

<div className={progressBarClasses.container}>
  <div className={progressBarClasses.bar} style={{ width: '75%' }} />
</div>
```

#### Glow Classes
```tsx
import { glowClasses } from '@/lib/theme';

<div className="relative">
  <div className={glowClasses.cyan}></div>
  <div className="relative">Content</div>
</div>
```

## Usage Examples

### Creating a New Page

```tsx
"use client";
import { layoutClasses, textClasses, cardClasses } from '@/lib/theme';

export default function NewPage() {
  return (
    <div className={layoutClasses.page}>
      <div className={layoutClasses.section}>
        <h1 className={textClasses.title}>Page Title</h1>
        <p className={textClasses.subtitle}>Page description</p>
      </div>

      <div className={`${layoutClasses.grid.cols3} ${layoutClasses.section}`}>
        <div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
          Card 1
        </div>
        <div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
          Card 2
        </div>
        <div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
          Card 3
        </div>
      </div>
    </div>
  );
}
```

### Creating a Status Card

```tsx
import { getStatusBgClasses, getStatusTextColor, cardClasses, glowClasses } from '@/lib/theme';

function StatusCard({ status, title, value }) {
  return (
    <div className={`${getStatusBgClasses(status)} ${cardClasses.base} ${cardClasses.padding.md}`}>
      <div className={glowClasses.cyan}></div>
      <div className="relative">
        <div className="text-xs text-text-secondary uppercase">{title}</div>
        <div className={`text-2xl font-bold ${getStatusTextColor(status)} uppercase`}>
          {value}
        </div>
      </div>
    </div>
  );
}
```

### Creating a Data Panel

```tsx
import { panelClasses, cardClasses, textClasses, iconSizes } from '@/lib/theme';
import { Activity } from 'lucide-react';

function DataPanel({ title, data }) {
  return (
    <div className={`${panelClasses.current} ${cardClasses.padding.lg}`}>
      <div className="flex items-center gap-2 mb-4">
        <Activity className={`${iconSizes.md} text-phase-blue`} />
        <h3 className="text-lg font-semibold text-phase-blue">{title}</h3>
      </div>
      <div className="space-y-3">
        {data.map(item => (
          <div key={item.id} className="bg-background-overlay rounded p-3 border border-border-secondary">
            {/* Content */}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Customization

### Adding New Colors

1. **Edit `tailwind.config.ts`:**
```typescript
colors: {
  // Add your new color
  custom: {
    primary: "#ff0000",
    secondary: "#00ff00",
  }
}
```

2. **Use in components:**
```tsx
<div className="text-custom-primary bg-custom-secondary">Content</div>
```

### Adding New Component Classes

1. **Edit `src/lib/theme.ts`:**
```typescript
export const myComponentClasses = {
  base: 'rounded-lg border',
  variant1: 'bg-blue-500 text-white',
  variant2: 'bg-green-500 text-white',
};
```

2. **Use in components:**
```tsx
import { myComponentClasses } from '@/lib/theme';

<div className={`${myComponentClasses.base} ${myComponentClasses.variant1}`}>
  Content
</div>
```

## Best Practices

1. **Always use theme utilities** instead of hardcoding colors
2. **Use semantic color names** (e.g., `text-semantic-info` instead of `text-cyan-400`)
3. **Leverage pre-built component classes** for consistency
4. **Add new design tokens to config** before using them
5. **Use TypeScript types** for type safety
6. **Document custom additions** in this guide

## Migration from Hardcoded Classes

Before:
```tsx
<div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4">
  <p className="text-gray-400">Label</p>
  <p className="text-cyan-400">Value</p>
</div>
```

After:
```tsx
<div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
  <p className="text-text-secondary">Label</p>
  <p className="text-text-accent">Value</p>
</div>
```

## Troubleshooting

### Colors not showing up
- Make sure Tailwind is processing the config file
- Check that custom colors are in the `extend` section
- Verify the class name matches the config exactly

### Type errors
- Import types from `@/lib/theme`
- Use `PhaseType` for phase-related functions
- Use `StatusType` for status-related functions

### Classes not applying
- Check if you're using dynamic class names (not supported by Tailwind)
- Use the theme utility functions instead
- For dynamic values, use inline styles with theme colors

## Support

For questions or issues with the theme system, refer to:
- Tailwind CSS documentation: https://tailwindcss.com/docs
- This theme guide
- The Dashboard.tsx file for implementation examples
