# Theme Quick Reference

## Import Statement
```tsx
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
} from '@/lib/theme';
```

## Common Patterns

### Page Layout
```tsx
<div className={layoutClasses.page}>
  <div className={layoutClasses.section}>
    <h1 className={textClasses.title}>Title</h1>
    <p className={textClasses.subtitle}>Subtitle</p>
  </div>
</div>
```

### Grid Layouts
```tsx
<div className={layoutClasses.grid.cols2}>...</div>  // 2 columns
<div className={layoutClasses.grid.cols3}>...</div>  // 3 columns
<div className={layoutClasses.grid.cols4}>...</div>  // 4 columns
```

### Cards
```tsx
// Primary card
<div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
  Content
</div>

// Card with glow
<div className={`${cardClasses.primary} ${cardClasses.padding.md} relative`}>
  <div className={glowClasses.cyan}></div>
  <div className="relative">Content</div>
</div>
```

### Status Display
```tsx
// Status text
<span className={getStatusTextColor('online')}>Online</span>

// Status card
<div className={`${getStatusBgClasses('running')} ${cardClasses.base} ${cardClasses.padding.md}`}>
  <div className={`text-2xl ${getStatusTextColor('running')}`}>Running</div>
</div>
```

### Panels
```tsx
<div className={`${panelClasses.voltage} ${cardClasses.padding.lg}`}>...</div>
<div className={`${panelClasses.current} ${cardClasses.padding.lg}`}>...</div>
<div className={`${panelClasses.earth} ${cardClasses.padding.md}`}>...</div>
<div className={`${panelClasses.ups} ${cardClasses.padding.md}`}>...</div>
<div className={`${panelClasses.ac} ${cardClasses.padding.lg}`}>...</div>
<div className={`${panelClasses.contacts} ${cardClasses.padding.lg}`}>...</div>
```

### Typography
```tsx
<h1 className={textClasses.title}>Main Title</h1>
<h2 className={textClasses.heading.h1}>Heading 1</h2>
<h3 className={textClasses.heading.h2}>Heading 2</h3>
<p className={textClasses.subtitle}>Subtitle</p>
<div className={textClasses.label}>Label</div>
<span className={textClasses.value}>Value</span>
```

### Buttons
```tsx
<button className={`${buttonClasses.base} ${buttonClasses.primary} ${buttonClasses.size.md}`}>
  Primary
</button>
<button className={`${buttonClasses.base} ${buttonClasses.secondary} ${buttonClasses.size.md}`}>
  Secondary
</button>
```

### Icons
```tsx
<Icon className={iconSizes.xs} />  // 12px
<Icon className={iconSizes.sm} />  // 16px
<Icon className={iconSizes.md} />  // 20px
<Icon className={iconSizes.lg} />  // 24px
<Icon className={iconSizes.xl} />  // 32px
```

### Progress Bars
```tsx
<div className={progressBarClasses.container}>
  <div 
    className={progressBarClasses.bar}
    style={{ width: '75%', background: 'linear-gradient(...)' }}
  />
</div>
```

### Phase Colors (Power Monitoring)
```tsx
// Text color
<span className={getPhaseTextColor('red')}>Red Phase</span>

// Gradient
const gradient = getPhaseGradient('blue');
<div style={{ 
  background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` 
}} />
```

## Direct Tailwind Classes

### Colors
```tsx
// Status
text-status-online
text-status-offline
text-status-warning
text-status-standby
text-status-error

bg-status-online-bg
border-status-online-border

// Semantic
text-semantic-success
text-semantic-info
text-semantic-danger
text-semantic-alert

// Phase
text-phase-red
text-phase-yellow
text-phase-blue

// Text
text-text-primary
text-text-secondary
text-text-tertiary
text-text-accent
text-text-white

// Background
bg-background-primary
bg-background-secondary
bg-background-tertiary
bg-background-card
bg-background-overlay

// Border
border-border-primary
border-border-secondary
border-accent-cyan
border-accent-blue
border-accent-purple
border-accent-green
border-accent-red
border-accent-orange
```

### Gradients
```tsx
bg-gradient-primary      // Page background
bg-gradient-card         // Card background
bg-gradient-card-br      // Card background (bottom-right)
bg-gradient-title        // Title gradient (use with bg-clip-text text-transparent)
bg-gradient-glow-cyan    // Glow effects
bg-gradient-glow-green
bg-gradient-glow-purple
bg-gradient-glow-blue
```

### Shadows
```tsx
shadow-glow-cyan
shadow-glow-green
shadow-glow-red
shadow-glow-blue
shadow-glow-purple
shadow-card
shadow-card-hover
```

### Border Radius
```tsx
rounded-card    // 8px
rounded-button  // 6px
rounded-badge   // 4px
```

### Backdrop Blur
```tsx
backdrop-blur-card  // 4px
```

## Common Combinations

### Info Card
```tsx
<div className="bg-background-card border border-border-primary rounded-card p-4">
  <div className="text-text-secondary text-xs uppercase mb-1">Label</div>
  <div className="text-text-accent font-mono font-semibold">Value</div>
</div>
```

### Data Row
```tsx
<div className="flex justify-between text-sm">
  <span className="text-text-secondary">Label:</span>
  <span className="text-semantic-info font-bold">Value</span>
</div>
```

### Section Header
```tsx
<div className="flex items-center gap-2 mb-4">
  <Icon className={`${iconSizes.md} text-semantic-info`} />
  <h3 className="text-lg font-semibold text-semantic-info">SECTION TITLE</h3>
</div>
```

### Overlay Container
```tsx
<div className="bg-background-overlay rounded p-3 border border-border-secondary">
  Content
</div>
```

## Status Values
Valid status strings for `getStatusTextColor()` and `getStatusBgClasses()`:
- `'online'`
- `'offline'`
- `'running'`
- `'standby'`
- `'warning'`
- `'error'`
- `'good'`
- `'excellent'`

## Phase Values
Valid phase values for `getPhaseTextColor()` and `getPhaseGradient()`:
- `'red'`
- `'yellow'`
- `'blue'`

## Tips
1. Use `${layoutClasses.section}` for consistent spacing between sections
2. Combine `relative` with glow classes for decorative effects
3. Use `text-text-secondary` for labels and `text-text-accent` for values
4. Apply `uppercase` class with labels for consistency
5. Use `font-mono` for numeric values and codes
