# jordanlei.com

Personal portfolio for Jordan Lei: research, education, experience, contact information, and an art gallery.

## Stack

- Vue 3 and Vue Router
- Vite 5
- Hand-written CSS and static assets
- Optional Firebase Hosting configuration

Use Node 20 or newer.

## Structure

```
src/
├── app/                 # Application shell
├── content/             # Portfolio content and navigation data
├── features/            # Home and art features
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

- Update navigation, bio/hero configuration, and social links in `src/content/profile.js` and `src/content/navigation.js`.
- Update research, education, experience, and artwork in their corresponding files under `src/content/`.
- Add artwork to `public/images/art/` and then add its metadata to `src/content/art.js`.

## Deployment

Any static host can deploy the output of `npm run build`. `firebase.json` is included for Firebase Hosting deployments.

## License

Private / proprietary. All rights reserved.
