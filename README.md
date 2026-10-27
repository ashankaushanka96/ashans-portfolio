# Ashan's Portfolio

A responsive React portfolio with a dark purple and lime theme, an interactive infrastructure map, project-specific artwork, filterable projects, and accessible project dialogs.

## Development

```sh
npm install
npm run dev
```

Vite serves the site at `/ashans-portfolio/`. The development server listens on all network interfaces for testing on devices connected to the same Wi-Fi.

```sh
npm run build    # Production output in dist/
npm run preview  # Preview the production build
npm run lint     # Check JavaScript and React code
```

## Project structure

- `src/App.jsx` — page sections, navigation, project filters, and dialogs.
- `src/components/InteractiveVisuals.jsx` — interactive system map, project artwork, and motion effects.
- `src/config/` — project, experience, certification, tool, and contact data.
- `src/index.css` — responsive styling, fonts, and animations, including reduced-motion support.
- `src/assets/` — local fonts and tool/certification logos.
- `public/resume/` — downloadable CV.
- `public/branding/` — favicon SVG source and browser PNG; `public/favicon.ico` provides an ICO fallback.

The app uses React 18, React Icons, CSS, and Tailwind's base styles. Vite handles builds and ESLint checks the source.

## Deployment

```sh
npm run deploy
```

This builds the project and publishes `dist/` using `gh-pages`. The base path in `vite.config.js` and homepage in `package.json` target the `ashans-portfolio` GitHub Pages repository.
