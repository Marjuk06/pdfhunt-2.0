// Auto-updated cache version
const CACHE_VERSION = 'v1766330097189';
const CACHE_NAME = `pdfhunt-${CACHE_VERSION}`;

// Critical files that need Network-First strategy
const CRITICAL_FILES = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Assets that can be Cache-First (images, fonts, etc.)
const isAsset = (url) => {
  return /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot|pdf)$/i.test(url) ||
         url.includes('/assets/') ||
         url.includes('/icon-');
};

// Network-First for critical files, Cache-First for assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...', CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Pre-cache critical files
        return cache.addAll(CRITICAL_FILES.map(url => new Request(url, { cache: 'reload' })));
      })
      .then(() => {
        // Skip waiting to activate immediately
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...', CACHE_VERSION);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all old caches
          if (cacheName !== CACHE_NAME && cacheName.startsWith('pdfhunt-')) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control immediately
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip external resources (Firebase, Google APIs, etc.)
  if (url.origin !== self.location.origin) {
    return fetch(event.request);
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return fetch(event.request);
  }

  // Network-First for critical files (HTML, JS, CSS, JSON)
  const isCritical = CRITICAL_FILES.some(path => url.pathname === path) ||
                     url.pathname.includes('.js') ||
                     url.pathname.includes('.css') ||
                     url.pathname.includes('.json') ||
                     url.searchParams.has('v'); // Versioned files

  if (isCritical) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then((response) => {
          // Update cache with fresh content
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback for offline
            return new Response('Offline', { status: 503 });
          });
        })
    );
  } else if (isAsset(event.request.url)) {
    // Cache-First for assets (performance optimization)
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Not in cache, fetch and cache
          return fetch(event.request).then((response) => {
            if (response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          });
        })
    );
  } else {
    // Default: try network, fallback to cache
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  }
});

// Handle messages from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Received SKIP_WAITING, activating new service worker...');
    self.skipWaiting().then(() => {
      // Notify all clients to reload
      return self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_UPDATED' });
        });
      });
    });
  }
});
