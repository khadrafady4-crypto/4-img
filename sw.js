// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('game-cache').then((cache) => {
      return cache.addAll([
        '/2025/10/gameplay4img.html', // صفحة اللعبة
        '/2025/10/4img.html',         // صفحة المقال
        // أضف أي ملفات أخرى تريد حفظها مؤقتًا، مثل CSS أو صور
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
