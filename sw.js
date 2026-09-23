// 앱 셸 캐시 (네트워크 우선 - 업데이트 즉시 반영, 오프라인은 캐시 폴백)
const CACHE = 'toeic-voca-v6';

// index.html 이 ?v= 붙은 URL 을 요청하므로 프리캐시도 같은 URL 로 맞춘다.
// (안 맞추면 오프라인에서 캐시 미스가 난다) — 배포 시 index.html 의 v 와 함께 올릴 것.
const V = '?v=6';
const ASSETS = [
  './',
  './index.html',
  './style.css' + V,
  './app.js' + V,
  './ai.js' + V,
  './srs.js' + V,
  './icons.js' + V,
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', e => {
  // 하나라도 실패하면 설치 전체가 실패하므로 개별 처리한다.
  e.waitUntil(
    caches.open(CACHE).then(c =>
      Promise.all(ASSETS.map(u => c.add(u).catch(() => {})))
    )
  );
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
  if (e.request.method !== 'GET') return;

  e.respondWith((async () => {
    try {
      // cache:'no-cache' 로 HTTP 캐시를 건너뛰고 항상 조건부 요청(ETag)을 보낸다.
      // 서버가 Cache-Control 을 안 내려주면 브라우저가 휴리스틱 캐싱을 적용해
      // 재검증조차 안 하기 때문에, 이게 없으면 '네트워크 우선'이어도 옛 파일이 나온다.
      // (폰에서만 구 CSS 가 남아 있던 실제 원인)
      let res;
      try {
        res = await fetch(e.request, { cache: 'no-cache' });
      } catch (_) {
        res = await fetch(e.request); // init 미지원 브라우저 대비
      }
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    } catch (err) {
      const cached = await caches.match(e.request);
      if (cached) return cached;
      throw err;
    }
  })());
});
