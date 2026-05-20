# First Wave · Laundry Advisory

The website for **First Wave**, a hands-on industrial laundry advisory founded by Mick Connor.

Positioning: vendor-neutral, operator-grade laundry advisory for commercial laundries, hotels, hospitals, airlines, and developers across the GCC and Europe.

## Tech stack

- [Astro](https://astro.build/) — static site framework
- TypeScript (strict)
- Vanilla CSS (custom design system)
- [Inter](https://rsms.me/inter/) + [Fraunces](https://fonts.google.com/specimen/Fraunces) — via Google Fonts

## Local development

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Deploy this folder to any static host (Vercel, Netlify, Cloudflare Pages).

## Project structure

```
site/
├── public/              # Static assets (photos, video, favicon)
│   ├── mick.jpg         # Mick Connor hero photograph
│   └── laundry.mp4      # Industrial laundry background video
├── src/
│   ├── layouts/
│   │   └── Layout.astro # HTML shell + meta + fonts
│   ├── pages/
│   │   └── index.astro  # Homepage
│   └── styles/
│       └── global.css   # Design system + all styles
└── astro.config.mjs
```

## Design system

- **Primary palette**: Midnight `#050E1E`, Ink `#0A1628`, Brass `#C8985C`, Ice `#F0F4FA`
- **Typography**: Inter (sans), Fraunces (serif accents)
- **Voice**: First-person, direct, operator's vocabulary

See `Mick Connor Advisory - Final Website Plan.docx` in the project root for the full design + content brief.
