# Quick Fix: Create PWA Icons

## The Problem
The install prompt isn't showing because the icon files (`icon-192.png` and `icon-512.png`) are missing. Browsers require these for PWA installation.

## Solution: Generate Icons Now

### Method 1: Using the Icon Generator (Easiest)

1. **Open the icon generator:**
   - Navigate to: `http://localhost:5173/generate-icons.html` (if running locally)
   - OR open `public/generate-icons.html` directly in your browser

2. **Generate and download:**
   - Click "Generate Icons" (or they generate automatically)
   - Click "Download Both Icons" button
   - Save both files to the `public/` folder

3. **Rebuild and redeploy:**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Method 2: Create Icons Manually

1. Create two PNG images:
   - `icon-192.png` (exactly 192x192 pixels)
   - `icon-512.png` (exactly 512x512 pixels)

2. Use any image editor (Photoshop, GIMP, Canva, etc.)
   - Design your app icon
   - Export at exact sizes: 192x192 and 512x512
   - Save as PNG format

3. Place files in `public/` folder

4. Rebuild and redeploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

## Verify Installation Works

After adding icons and redeploying:

1. Open your deployed app: https://pdfhunt2025.web.app
2. Open browser console (F12)
3. Look for messages:
   - ✅ "beforeinstallprompt event fired!" = Icons working!
   - ⚠️ "Icon is missing" = Icons not found, check paths
4. Check for install icon in browser address bar
5. Test the install prompt

## Debugging

If install still doesn't work, check browser console for:
- Manifest validation errors
- Icon loading errors
- Service worker registration status

The app will show helpful error messages in the console to help diagnose issues.

