const CACHE_NAME = 'eso-scribing-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './js/tailwindcss.js',
  './css/fonts.css',
  './Gemini_Generated_Image_x5uhjrx5uhjrx5uh.png',
  './fonts/Cinzel-regular.woff2',
  './fonts/Cinzel-500.woff2',
  './fonts/Cinzel-600.woff2',
  './fonts/Cinzel-700.woff2',
  './fonts/Cinzel-800.woff2',
  './fonts/Cinzel-900.woff2',
  './fonts/Lora-regular.woff2',
  './fonts/Lora-italic.woff2',
  './fonts/Lora-500.woff2',
  './fonts/Lora-500italic.woff2',
  './fonts/Lora-600.woff2',
  './fonts/Lora-600italic.woff2',
  './fonts/Lora-700.woff2',
  './fonts/Lora-700italic.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
