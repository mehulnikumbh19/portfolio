# Mehul Nikumbh Cybersecurity GRC Portfolio

Static, deploy-ready personal portfolio built with React 18, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## Design Direction

The site uses a retro pixel cybersecurity and GRC operating-system theme:

- Orange halftone outer background with cream and paper canvas panels
- Thick 3px black borders and hard offset shadows (`6px 6px 0 #050505`)
- Press Start 2P for large pixel display, VT323 for retro labels, Space Grotesk for body
- Pixel profile card header, dark status strip, orange status dot
- Black skills panel, retro cartridge artifact cards, CSS-only project preview tiles (access matrix, control map, vulnerability heatmap, SIEM feed)
- Snappy Framer Motion section reveals (~160ms, custom retro easing), tactile button press (`translate(4px,4px)` to flatten shadow)
- Respects `prefers-reduced-motion` and uses visible focus outlines

## Features

- Pixel UI navbar with mobile menu sheet, ESC and click-outside to close
- Hero with identity card, black skills matrix, and GRC console mini-window
- Animated metric counters in pixel display typography
- About, Skills, Cyber Risk Problems, Experience, Works (Projects), Case Files, GRC Lab, Frameworks, Artifacts, Contact sections
- Centralized content in `src/data/portfolioData.js`
- SEO metadata, Open Graph tags, Twitter card tags, favicon.io favicon set, and JSON-LD structured data

## Local Setup

```bash
npm install
npm run dev
```

Vite will print a local URL, usually:

```bash
http://localhost:5173
```

## Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

## Deploy To GitHub Pages

For a user site such as `https://mehulnikumbh19.github.io/`, keep `base: "/"` in `vite.config.js`.

For a project page such as `https://username.github.io/repository-name/`, set:

```js
export default defineConfig({
  plugins: [react()],
  base: "/repository-name/"
});
```

Then deploy the generated `dist` folder using your preferred GitHub Pages workflow.

## Content Updates

Edit portfolio content in:

```text
src/data/portfolioData.js
```

Main reusable components are in:

```text
src/components
```

## Artifact Placeholders

Place downloadable files in the `public` folder using these names:

- `Mehul_Nikumbh_Resume.pdf`
- `Mehul_Nikumbh_GRC_Portfolio.pdf`
- `AccessGuard_Project_Guide.pdf`
- `Audit_Evidence_Tracker_Sample.xlsx`
- `Risk_Register_Sample.xlsx`
- `Vulnerability_Dashboard_Sample.xlsx`
- `Access_Review_Workbook_Sample.xlsx`

Selected artifacts use simulated data for portfolio demonstration purposes.
