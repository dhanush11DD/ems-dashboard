# EMS Dashboard

A modern, real-time Energy Management System (EMS) dashboard built with Next.js, TypeScript, and Tailwind CSS. Features a centralized theme system for consistent styling across the entire application.

## Features

- ✅ Real-time ATM power monitoring
- ✅ Three-phase power visualization
- ✅ Status indicators and alerts
- ✅ Temperature and AC monitoring
- ✅ UPS system tracking
- ✅ Centralized theme system
- ✅ Type-safe styling utilities
- ✅ Responsive design
- ✅ Modern UI with glassmorphism effects

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Theme System:** Custom centralized configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ems-dashboard/
├── src/
│   ├── app/
│   │   ├── Dashboard.tsx          # Main dashboard component
│   │   ├── page.tsx               # Root page
│   │   └── globals.css            # Global styles
│   ├── components/
│   │   └── ThemeExample.tsx       # Theme usage examples
│   └── lib/
│       └── theme.ts               # Theme utilities
├── tailwind.config.ts             # Tailwind theme configuration
├── THEME_GUIDE.md                 # Complete theme documentation
├── THEME_QUICK_REFERENCE.md       # Quick reference guide
└── THEME_IMPLEMENTATION_SUMMARY.md # Implementation summary
```

## Theme System

This project uses a **centralized theme system** for consistent styling across all pages.

### Key Files

- **`tailwind.config.ts`** - Theme configuration (colors, typography, spacing)
- **`src/lib/theme.ts`** - Utility functions and component classes
- **`THEME_GUIDE.md`** - Complete documentation
- **`THEME_QUICK_REFERENCE.md`** - Quick reference for developers

### Quick Example

```tsx
import {
  layoutClasses,
  textClasses,
  cardClasses,
  getStatusTextColor,
} from '@/lib/theme';

export default function MyPage() {
  return (
    <div className={layoutClasses.page}>
      <h1 className={textClasses.title}>Page Title</h1>
      <div className={`${cardClasses.primary} ${cardClasses.padding.md}`}>
        <span className={getStatusTextColor('online')}>Online</span>
      </div>
    </div>
  );
}
```

### Color Palette

- **Brand:** Cyan, Blue, Purple
- **Status:** Green (online), Red (offline), Yellow (warning), Blue (standby)
- **Phase:** Red, Yellow, Blue (for power monitoring)
- **Semantic:** Success, Info, Danger, Alert

### Documentation

- 📖 **[Complete Theme Guide](./THEME_GUIDE.md)** - Full documentation
- 🚀 **[Quick Reference](./THEME_QUICK_REFERENCE.md)** - Common patterns
- 📋 **[Implementation Summary](./THEME_IMPLEMENTATION_SUMMARY.md)** - Overview
- 💡 **[Theme Examples](./src/components/ThemeExample.tsx)** - Code examples

## Development

### Adding a New Page

1. Create a new file in `src/app/`
2. Import theme utilities from `@/lib/theme`
3. Use pre-built component classes
4. Reference `THEME_QUICK_REFERENCE.md` for patterns

Example:
```tsx
"use client";
import { layoutClasses, textClasses, cardClasses } from '@/lib/theme';

export default function NewPage() {
  return (
    <div className={layoutClasses.page}>
      <div className={layoutClasses.section}>
        <h1 className={textClasses.title}>New Page</h1>
      </div>
    </div>
  );
}
```

### Customizing the Theme

1. Edit colors in `tailwind.config.ts`
2. Update component classes in `src/lib/theme.ts`
3. Changes apply globally across all pages

### Type Safety

The theme system includes TypeScript types:
- `StatusType` - Valid status values
- `PhaseType` - Valid phase values
- Full autocomplete support in IDE

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Learn More

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind Configuration](https://tailwindcss.com/docs/configuration)

### Project Documentation
- [Theme Guide](./THEME_GUIDE.md)
- [Quick Reference](./THEME_QUICK_REFERENCE.md)
- [Theme Examples](./src/components/ThemeExample.tsx)

## Contributing

When contributing, please:
1. Use the centralized theme system
2. Follow existing patterns in `Dashboard.tsx`
3. Update documentation for new features
4. Maintain type safety

## License

This project is built with [Next.js](https://nextjs.org) and uses the MIT license.
