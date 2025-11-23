# IGTC ESPORTS Website

A modern, animated esports organization website built with React, TypeScript, and Framer Motion.

## Features

- 🎮 Modern gaming-themed design
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🧪 Comprehensive test coverage
- ♿ Accessibility compliant

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: CSS Modules with custom properties
- **Animations**: Framer Motion
- **Routing**: React Router
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library + Fast-check

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test        # Run tests in watch mode
npm run test:run    # Run tests once
npm run test:ui     # Run tests with UI
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation/     # Navigation bar
│   ├── Hero/           # Hero section
│   ├── News/           # News cards and section
│   ├── Sponsors/       # Sponsors section
│   └── Collaborations/ # Collaborations section
├── pages/              # Page components
│   ├── Home/
│   ├── Esports/
│   ├── Rankings/
│   ├── Games/
│   ├── AboutUs/
│   └── NotFound/
├── styles/             # Global styles
│   ├── variables.css   # CSS custom properties
│   ├── global.css      # Global styles and resets
│   └── animations.css  # Animation keyframes
├── hooks/              # Custom React hooks
├── test/               # Test setup
└── App.tsx             # Main app component
```

## Testing

The project includes:
- **Unit Tests**: Component rendering and behavior tests
- **Property-Based Tests**: Using fast-check for comprehensive testing
- **Integration Tests**: User flow testing

## License

MIT
