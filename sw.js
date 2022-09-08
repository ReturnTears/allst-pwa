self.addEventListener('install', event => {
  console.log('安装事件...')
  self.skipWaiting()
})
self.addEventListener('activate', event => {
  // clients.claim()
  console.log('准备就绪...')
})
self.addEventListener('fetch', event => {
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
  if (/network\.jpg$/.test(event.request.url)) {
    return event.respondWith(fetch('./src/assets/pwa.jpg'))
  }
})
