const staticCacheName = 'site-static'
const assets = [
    '/',
    'index.html',
    'app.js',
    'style.css',
]


//Install service worker
self.addEventListener("install", event => {
    
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets')
            cache.addAll(assets)
        })
    )
    
})

// activate event
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
                )
        })
    )
   
})

//fetch event
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request)
        })
    )
})