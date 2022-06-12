
const statitCacheName='site-static'
const assests=[
    "/generator/",
    "/generator/index.html",
    "/generator/app.js",
    "/generator/style.css"
]
//install sw
self.addEventListener('install',evt=>{
        evt.waitUntil(
            caches.open(statitCacheName).then(cache=>{
            console.log('assests been added')
            cache.addAll(assests)
         })
        )
});

//activate sw
self.addEventListener('activate',evt=>{
    console.log('sw has been activated')
})
//fetch event
self.addEventListener('fetch',evt=>{
    evt.respondWith(
        caches.match(evt.resquest).then(
            cacheRes=>{return cacheRes || fetch(evt.resquest) }
        )
    )
});