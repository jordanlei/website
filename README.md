# jordanlei.com

Personal site (Next.js): home page with parallax hero, research and CV sections, and a separate art portfolio. Live site: [jordanlei.com](https://jordanlei.com).

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js](https://nextjs.org/) (pages router) |
| UI | React 18 |
| Styling | Global CSS (`styles/global.css`) + CSS modules per feature |
| Images | `next/image` for optimized images; static files under `public/` |
| Fonts | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (loaded in `pages/_app.js`) for headings; system UI font stack for body text |

This repo does not use Tailwind, Bootstrap, or a component library—the layout is hand-written CSS and small local components.

## Project layout

```
website/
├── pages/
│   ├── _app.js          # App shell, global font link, `global.css` import
│   ├── index.js         # Home (parallax, sections)
│   └── art/index.js     # Art gallery data + layout
├── components/          # Section components, parallax, gallery, lightbox
├── styles/              # `global.css` + `*.module.css`
├── public/
│   ├── images/          # Logos, hero layers, art, contact icons
│   └── files/           # PDFs (resume, posters)
└── firebase.json        # Optional Firebase hosting config (if you use `firebase deploy`)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Development server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm start` | Serve the production build locally |

Use **Node 20+** (see `package.json` `engines`).

## Adding content

- **New home section** — add a component under `components/`, import it in `pages/index.js`, and add a `Link` in `components/menu.js` (same `href` as the section’s `id`).
- **Art** — add image files under `public/images/art/`, then add an entry to the `IMAGES` array in `pages/art/index.js` (`file`, `caption`, `subcaption`, `width`, `height`).

## Deployment

- **Vercel** (or similar): connect the repo, build command `npm run build`, output `.next` / default Next.js settings.
- **Firebase** — `firebase.json` is present for Firebase Web Frameworks hosting; use only if you deploy with the Firebase CLI.

## License

Private / proprietary. All rights reserved.
