// 간단한 오프라인 캐시 (앱 셸)
const CACHE = 'toeic-voca-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './ai.js',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // API 호출(외부)은 캐시하지 않음
  if (url.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
