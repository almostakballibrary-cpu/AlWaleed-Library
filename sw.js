// Service Worker - مكتبة المستقبل
const CACHE_NAME = 'maktaba-almustaqbal-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap'
];

// التثبيت - تخزين الملفات الأساسية
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE.filter(url => !url.startsWith('http')));
    })
  );
  self.skipWaiting();
});

// التفعيل - حذف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// الاعتراض على الطلبات - Network First ثم Cache
self.addEventListener('fetch', (event) => {
  // تجاهل طلبات Chrome extensions وغيرها
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // تخزين نسخة في الكاش إذا كان الرد ناجحاً
        if (response.status === 200 && event.request.method === 'GET') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // في حال انقطاع الاتصال، استخدم الكاش
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // صفحة fallback للموارد غير المتاحة
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});
