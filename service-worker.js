self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('weather').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/app.js',
      '/manifest.json'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
