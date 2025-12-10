# PDF Hunt

Modern React + Vite web app for browsing and managing study materials with an admin console, PDF preview, themed UI, and Firebase-backed persistence.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- lucide-react icons
- Firebase (Auth, Firestore)

## Features

- **Progressive Web App (PWA)**: Installable on desktop and mobile devices with offline support
- Themed UI with light/dark toggle and animated background.
- Tabbed browsing for Udvash, ACS, Others, and About.
- Nested folders/files with PDF preview (Google Drive embed) and download links.
- Admin console for creating/editing/deleting folders/files and updating About/profile links.
- Firebase Auth (Google) gated admin access; Firestore persistence for app data.
- First-time visitor tour with app installation prompts

## Project Structure

- `src/App.jsx` — main app + UI + admin logic + PWA install handlers.
- `src/firebase.js` — Firebase init (Auth, Firestore).
- `src/main.jsx` — React entry.
- `src/index.css` — Tailwind setup + base styles.
- `public/manifest.json` — PWA manifest configuration.
- `public/sw.js` — Service worker for offline support.
- `vite.config.js` — Vite config.
- `tailwind.config.js`, `postcss.config.cjs` — Tailwind/PostCSS config.

## Prerequisites

- Node.js 18+ and npm.
- Firebase project with Firestore and Google Sign-In enabled.
- PWA icons: `public/icon-192.png` and `public/icon-512.png` (see PWA Setup section).

## Setup

1. Install deps

```bash
npm install
```

2. Configure Firebase  
   Update `src/firebase.js` with your Firebase project keys. Ensure `authDomain`, `projectId`, and `apiKey` match your project.
3. Allow admin emails  
   Edit `ALLOWED_ADMIN_EMAILS` in `src/App.jsx` to include authorized admin addresses.
4. Run dev server

```bash
npm run dev -- --host
```

Open the shown URL (e.g., http://localhost:5173 or 5174). 5) Build

```bash
npm run build
```

Outputs to `dist/`.

## How the App Works (User View)

- Tabs at bottom: Udvash / ACS / Others / About Me.
- Click folders to drill down; click files to open PDF preview (Google Drive embed) and download.
- Search bar filters within current scope (recursively).
- Theme toggle (sun/moon) switches light/dark.

## How the Admin Console Works

- Access via About tab → “Login to Admin Console.”
- Google sign-in is required; only emails in `ALLOWED_ADMIN_EMAILS` are allowed. Others are immediately signed out.
- Admin console tabs:
  - **Content**: add/edit/delete folders and files; supports nested folders. File links expect Google Drive IDs or full URLs (ID is extracted).
  - **Profile**: edit About info and social links.
- All admin edits persist to Firestore document `app/state`.

## Firebase Notes

- Firestore document used: collection `app`, doc `state`.
- Auth provider: Google; enforced allowlist via `ALLOWED_ADMIN_EMAILS`.

## Deployment (Firebase Hosting)

1. Install Firebase CLI (if not): `npm install -g firebase-tools`
2. Login: `firebase login`
3. Init hosting (once): `firebase init hosting` (choose your project, set `dist` as public dir, single-page app: yes)
4. Build: `npm run build`
5. Deploy: `firebase deploy --only hosting`

## PWA Setup

### Creating App Icons

You need to create two icon files in the `public` folder:

1. **icon-192.png** (192x192 pixels)
2. **icon-512.png** (512x512 pixels)

**Options to create icons:**
- Use online tools like [RealFaviconGenerator](https://realfavicongenerator.net/)
- Use image editing software (Photoshop, GIMP, Canva)
- Use a logo/image and resize it to the required dimensions

**Quick method:** Create a simple colored square with your app name/logo, export as PNG with the exact dimensions.

### PWA Features

- **Install Prompt**: Appears in search bar (download icon) and as a popup for first-time visitors
- **First Visit Tour**: Shows app features before prompting to install
- **Service Worker**: Enables offline functionality and faster loading
- **Installable**: Works on desktop (Chrome/Edge) and mobile (Android/iOS)

### Testing PWA

1. Build the app: `npm run build`
2. Serve locally: `npm run preview` or deploy to Firebase Hosting
3. Open in Chrome/Edge and check:
   - Install icon appears in address bar
   - "Install App" option in browser menu
   - Works offline after installation

### PWA Behavior

- **First Visit**: Tour popup appears after 1 second (only once per user)
- **Install Button**: Shows in search bar when browser supports installation
- **Install Prompt**: Bottom banner appears if user hasn't dismissed it
- **After Install**: App runs in standalone mode, install prompts hidden

## Environment Tips

- If you rotate Firebase keys, update `src/firebase.js` and rebuild.
- To change admin allowlist, edit `ALLOWED_ADMIN_EMAILS` and redeploy.
- Keep Drive links valid; file IDs power the PDF viewer.
- PWA requires HTTPS (or localhost) to work properly.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally
- `npm start` — alias to `vite`
