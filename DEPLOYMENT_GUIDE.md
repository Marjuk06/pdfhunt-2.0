# PWA Auto-Update System - Deployment Guide

## ✅ What's Fixed

1. **Refresh Loop Issue** - Fixed! No more multiple refreshes
2. **Theme Toggle** - Fixed! Light/Dark mode now works and persists
3. **Auto-Update System** - Implemented! Users get notified of updates

## 🚀 How to Deploy (New Process)

### Step 1: Run Deployment Script
```bash
npm run deploy
```

This script will:
- Generate a new version timestamp
- Update `index.html` with versioned file references
- Update `sw.js` with new cache version
- Build the app
- Ready for Firebase deployment

### Step 2: Deploy to Firebase
```bash
firebase deploy --only hosting
```

## 📋 Manual Deployment (Alternative)

If you prefer manual control:

```bash
# 1. Update versions manually
node scripts/deploy.js

# 2. Build
npm run build

# 3. Deploy
firebase deploy --only hosting
```

## 🔄 How the Update System Works

### For Users:
1. **Automatic Check**: App checks for updates every 30 seconds
2. **Update Notification**: When update is found, a banner appears at the top
3. **User Choice**: User can click "Update Now" or dismiss
4. **Smooth Update**: Page reloads with new version (no refresh loop!)

### For Developers:
- Each deployment gets a unique version timestamp
- Service Worker uses Network-First for critical files (always fresh)
- Cache-First for assets (performance)
- Old caches are automatically cleaned up

## 🎨 Theme Toggle

- **Fixed**: Theme toggle (sun/moon button) now works properly
- **Persistent**: Theme preference is saved to localStorage
- **Instant**: Changes apply immediately

## 📱 PWA Install

- **Android/Desktop**: Install prompt appears automatically
- **iOS**: Shows instructions modal
- **Install Button**: Available in search bar when supported

## 🔧 Technical Details

### Service Worker Strategy:
- **Network-First**: HTML, JS, CSS, JSON (always get latest)
- **Cache-First**: Images, fonts, PDFs (performance)
- **Auto-Cleanup**: Old caches deleted automatically

### Update Detection:
- Checks every 30 seconds
- Checks on page visibility change
- Shows notification (doesn't auto-reload)

### Cache Versioning:
- Format: `pdfhunt-v[TIMESTAMP]`
- Updated automatically on each deployment
- Prevents stale cache issues

## 🐛 Troubleshooting

### If updates don't show:
1. Clear browser cache
2. Unregister old service worker (DevTools → Application → Service Workers)
3. Hard refresh (Ctrl+Shift+R)

### If theme doesn't persist:
1. Check browser localStorage
2. Clear and try again
3. Check console for errors

## 📝 Notes

- The deployment script updates versions automatically
- Service worker handles caching intelligently
- Users get smooth update experience
- No more refresh loops!

