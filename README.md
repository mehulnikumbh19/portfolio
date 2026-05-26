# Mehul Nikumbh Cybersecurity GRC Portfolio

Static, deploy-ready personal portfolio built with React 18, Vite, Tailwind CSS, Lucide React, and Framer Motion.

## Design Direction

The site uses a dark cybersecurity and GRC control-room theme:

- Deep black, navy, and slate background system
- Cyan, blue, green, and restrained purple accents
- Animated grid background and cyber lines
- Dark glass-style cards with controlled hover glow
- Sans-first typography with mono labels and metadata
- Framer Motion section reveals, staggered cards, and sub-300ms UI transitions
- Reduced-motion support and accessible focus states

## Features

- Sticky responsive navbar with mobile menu and ESC close support
- Strong hero section with terminal-style GRC control panel
- Animated metric counters
- Recruiter snapshot cards
- About, problems solved, workflow, skills, experience, projects, case studies, GRC Lab, frameworks, artifacts, education, learning, FAQ, contact, and footer sections
- Centralized content in `src/data/portfolioData.js`
- SEO metadata, Open Graph tags, Twitter card tags, favicon placeholder, and JSON-LD structured data

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
