const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v2';
const assets = [
    '/',
    '/index.html',
    '/fallback.html',
    './sounds/click.mp3',
    './scripts/accordian.js',
    './scripts/app.js',
    './scripts/booklist.js',
    './scripts/class-styles.js',
    './scripts/nyt-api.js',
    './scripts/sounds.js',
    './styles/main-styles.css',
    './styles/styles.css',
    './images/logos/best-reads-horizontal-60.jpg',
    './images/icons/br-icon-72.png',
    './images/icons/br-icon-96.png',
    './images/icons/br-icon-128.png',
    './images/icons/br-icon-144.png',
    './images/icons/br-icon-152.png',
    './images/icons/br-icon-192.png',
    './images/icons/br-icon-384.png',
    './images/best-reads-favicon.png',
    // 'https://www.googletagmanager.com/gtag/js?id=G-9ZC1DBETDC',
    // NYT api url
    'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg',
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if(keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

// install service worker
self.addEventListener('install', evt => {
    // console.log('service worker has been installed');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// active service worker
self.addEventListener('activate', evt => {
    // console.log('service worker has been activated');
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

// fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCacheName, 20);
                    return fetchRes; 
                })
            });
        }).catch(() => {
            if(evt.request.url.indexOf('.html') < -1) {
                return caches.match('/fallback.html');
            }
        })
    );
});