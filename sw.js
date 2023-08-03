const CACHE_NAME = 'pwa'  // 定义缓存名称
var installPromptEvent = null;
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
self.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  installPromptEvent = event;
  // document.querySelector('#btn-install').disabled = false;
  document.querySelector('#btn-install').addEventListener('click', event => {
    if (!installPromptEvent) {
      return;
    }
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('用户已同意添加到桌面');
      } else {
        console.log('用户已取消添加到桌面');
      }
    })
  })
})
self.addEventListener('appinstalled', event => {
  console.log('已安装到桌面屏幕')
});
