const staticCacheName = 'site-static-v2';
const assets = [
    '/',
    '/index.html',
    './scripts/app.js',
    './scripts/accordian.js',
    './scripts/booklist.js',
    './scripts/class-styles.js',
    './scripts/nyt-api.js',
    './scripts/sounds.js',
    './styles/main-styles.css',
    './styles/styles.css',
    './images/person-reading-144.jpg',
    './images/icons/br-icon-72.png',
    './images/icons/br-icon-96.png',
    './images/icons/br-icon-128.png',
    './images/icons/br-icon-144.png',
    './images/icons/br-icon-152.png',
    './images/icons/br-icon-192.png',
    './images/icons/br-icon-384.png',
    './images/best-reads-favicon.png',
    './sounds/click.mp3',
    // 'https://www.googletagmanager.com/gtag/js?id=G-9ZC1DBETDC',
    // NYT api url
    //'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=diIY45XysDkQAiOZr6dGSPoNM5ARPGeg',
];

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
                .filter(key => key !== staticCacheName)
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
            return cacheRes ||fetch(evt.request);
        })
    );
});