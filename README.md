# Portfolio

A minimal, dark, 3D personal portfolio built with React, Three.js (via React Three Fiber), and MUI.

## Install & run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Where to customize

| What | File |
|---|---|
| Your name, tagline, hero copy | `src/components/Hero.jsx` |
| Navbar initials | `src/components/Navbar.jsx` (`Y.N.`) |
| About paragraph | `src/components/About.jsx` |
| Stats (projects/technologies/hackathons/certifications) | `src/data/experience.js` → `stats` |
| Skills list | `src/data/skills.js` |
| Projects (title, description, tech, links) | `src/data/projects.js` |
| Experience & education timeline | `src/data/experience.js` → `timeline` |
| Certifications | `src/data/experience.js` → `certifications` |
| Email, GitHub, LinkedIn, location | `src/components/Contact.jsx` and `src/components/Footer.jsx` |
| Colors (background, accent) | `src/theme/theme.js` and `:root` in `src/index.css` |
| The 3D object in the hero | `src/components/HeroScene.jsx` — swap `icosahedronGeometry` for another Three.js geometry, adjust material props, or change particle count |

Search the project for placeholders like `[YOUR NAME]`, `[YOUR EMAIL]`, `[GITHUB URL]`, `[LINKEDIN URL]`, and `[LOCATION]` and replace them with real information.

## Notes

- The contact form validates client-side only (no backend) and shows a success confirmation via an MUI Snackbar.
- The 3D scene reduces particle count and geometry detail on small screens, and respects `prefers-reduced-motion`.
- Section content lives in `src/data/*.js` so it can be edited without touching component logic.
