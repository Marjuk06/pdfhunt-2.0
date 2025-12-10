# Admin / Owner Instructions (Firebase + Auth + Data)

## What’s implemented

- Google Sign-In for admins only; allowlist is enforced in `ALLOWED_ADMIN_EMAILS` inside `src/App.jsx`.
- Firestore persistence: app state is saved to `app/state` (collection/doc).
- Drive PDF preview via file links (ID extracted automatically).

## One-time setup

1. Firebase project: already configured in `src/firebase.js`. Replace with your own keys if needed.
2. Enable providers:
   - Firebase Console → Authentication → Sign-in method → enable Google.
   - Firebase Console → Firestore Database → Create database (production or test mode).
3. Allowlist admins:
   - Edit `ALLOWED_ADMIN_EMAILS` in `src/App.jsx` (array of allowed email strings).
4. Deploy Hosting (once):
   - `npm install -g firebase-tools`
   - `firebase login`
   - `firebase init hosting` (select project, public dir `dist`, SPA: yes)

## Daily operations

- Start locally: `npm run dev -- --host` (visit printed URL).
- Build for deploy: `npm run build`.
- Deploy: `firebase deploy --only hosting`.
- If you change Firebase config or allowlist, rebuild and redeploy.

## How auth gating works

- User clicks “Login to Admin Console” → Google popup via Firebase Auth.
- On sign-in:
  - If email is in `ALLOWED_ADMIN_EMAILS`, view switches to admin dashboard.
  - Otherwise the user is immediately signed out and shown “Access denied”.
- Sign-out:
  - From admin nav “Exit” or manual `signOut` call → returns to app view.

## How data persistence works

- Admin edits (folders/files/profile) call `setDoc` to `app/state`.
- On app load, we `getDoc` from `app/state` to hydrate data.
- If Firestore doc is missing, UI falls back to `initialData` until saved once.
- Only admins trigger writes; non-admins can’t persist changes.

## About Google Drive links

- For files, paste full Drive URL or ID; the app extracts the ID.
- Preview uses `https://drive.google.com/file/d/{id}/preview`.
- Download uses `https://drive.google.com/u/0/uc?id={id}&export=download`.

## Things to customize safely

- Allowed admins: `ALLOWED_ADMIN_EMAILS` in `src/App.jsx`.
- Firebase keys: `src/firebase.js`.
- Initial seed data: `initialData` in `src/App.jsx` (only a fallback; Firestore overwrites after first save).
- UI branding/text: headers, About content in `initialData` or via admin Profile tab.

## Common issues

- Blank data after deploy: ensure Firestore has `app/state` doc or log in as admin and save once.
- Access denied: confirm the Google account email is in `ALLOWED_ADMIN_EMAILS`.
- PDF not loading: verify Drive link/ID is valid and shared for viewing.
- Port in use locally: Vite will pick another port (shown in console, e.g., 5174).

## Security notes

- Keep `ALLOWED_ADMIN_EMAILS` tight; don’t allow wildcard domains unless intended.
- Firestore rules: consider adding rules to restrict writes to authenticated allowlisted emails (custom claims or email match). Example rule (email match):
  ```rules
  service cloud.firestore {
    match /databases/{database}/documents {
      match /app/state {
        allow read: if true;
        allow write: if request.auth != null && request.auth.token.email in [
          "admin@example.com"
        ];
      }
    }
  }
  ```
  Update the list to mirror `ALLOWED_ADMIN_EMAILS`.
