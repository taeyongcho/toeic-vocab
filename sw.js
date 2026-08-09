// 앱 셸 캐시 (네트워크 우선 - 업데이트 즉시 반영, 오프라인은 캐시 폴백)
const CACHE = 'toeic-voca-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './ai.js',
  './srs.js',
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
  // API 호출(외부)은 그대로 통과
  if (url.origin !== location.origin) return;
  // 네트워크 우선: 최신 파일을 받아 캐시 갱신, 실패(오프라인) 시 캐시 사용
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
