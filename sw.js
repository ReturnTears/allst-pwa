const CACHE_NAME = 'pwa'  // 定义缓存名称
self.addEventListener('install', event => {
  console.log('安装事件...')
  self.skipWaiting()  // 等待跳过
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => 
      cache.addAll([
        // 在安装Service Worker时， 将相关资源进行缓存
        "./src/assets/pwa.jpg",
        "custom404.html",
        "/",
        "index.html"
      ])
    )
  )
})
self.addEventListener('activate', event => {
  clients.claim()
  console.log('准备就绪...') // 立即受控
})
console.log("========> 这里是sw.js ");
self.addEventListener('fetch', event => {
  if (/network\.jpg$/.test(event.request.url)) {
    return event.respondWith(fetch('./src/assets/pwa.jpg'))
  }
  if (event.request.mode === 'navigate') {
    return event.respondWith(
      fetch(event.request).then(res => {
        if (res.status === 404) {
          return fetch('custom404.html')
        }
        return res
      })
    )
  }
  return event.respondWith(
    fetch(event.request).then(res => {
      if (event.request.mode == "navigate" && res.status === 404) {
        return fetch('custom404.html')
      }
      return res
    }).catch(() => {
      // 离线状态下的处理
      return caches.open(CACHE_NAME).then(cache => {
        // 从Cache里面取资源
        return cache.match(event.request).then(response => {
          if (response) {
            return response
          }
          return cache.match("custom404.html")
        })
      })
    })
  )
})
