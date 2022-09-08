self.addEventListener('install', event => {
  self.skipWaiting()
})
self.addEventListener('activate', event => {
  clients.claim()
})
self.addEventListener('fetch', event => {
  if (/network\.jpg$/.test(event.request.url)) {
    return event.respondWith(fetch('./src/assets/pwa.jpg'))
  }
})
