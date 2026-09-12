# jordanlei.com

Personal portfolio for Jordan Lei: research, experience, education, contact information, and an art archive.

The site is intentionally lightweight and content-driven. The homepage acts as the primary portfolio, while `/art` is a dedicated archive view for artwork.

## Stack

- Vue 3 and Vue Router
- Vite 5
- Hand-written CSS and static assets
- ESLint 9
- Playwright for visual inspection during responsive design work
- Optional Firebase Hosting configuration

Use Node 20 or newer.

## Structure

```
src/
├── app/                 # Application shell
├── content/             # Portfolio content and navigation data
├── features/            # Home and art feature pages
├── shared/components/   # Reusable UI components
├── styles/              # Design tokens, base styles, and utilities
└── router/              # Route definitions
public/
├── files/               # Downloadable PDFs
├── images/              # Site imagery and logos
└── favicon.png
```

## Commands

| Command | Purpose |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview a production build locally |
| `npm run lint` | Check JavaScript and Vue files |

## Editing content

- Navigation lives in `src/content/navigation.js`.
- Hero imagery and social links live in `src/content/profile.js`.
- Research, education, experience, and artwork live in their corresponding files under `src/content/`.
- Add new artwork to `public/images/art/`, then add its metadata to `src/content/art.js`.
- Use `displayFile` in `src/content/art.js` when a homepage preview should use an optimized derivative while the archive keeps the original image.

## Design Notes

- Desktop sections use full-width heading rules. When a section has an outbound action, use a heading/action row so the link aligns with the bottom of the section title.
- Mobile uses a bottom fixed index strip rather than a hamburger menu. Keep the short mobile labels in `src/shared/components/Menu.vue`.
- Mobile section markers follow the homepage order: `01 / Home`, `02 / About`, `03 / Research`, `04 / Work`, `05 / Study`, `06 / Art`, `07 / Hello`.
- Experience and education cards use a compact logo/title row, with the details spanning the full card width below.
- The homepage Art section is a preview carousel. The full archive remains at `/art`.

## Visual QA

Playwright is installed for screenshot-based checks. The project does not currently include committed screenshot tests; it is used as an inspection tool while iterating on responsive layouts.

To inspect manually:

1. Run `npm run dev`.
2. Open the Vite local URL in a browser, or use Playwright locally to capture mobile screenshots.
3. Run `npm run lint` and `npm run build` before handing off changes.

## Deployment

Any static host can deploy the output of `npm run build`. `firebase.json` is included for Firebase Hosting deployments.

## License

Private / proprietary. All rights reserved.
