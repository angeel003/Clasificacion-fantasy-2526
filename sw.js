// sw.js -> Service Worker para forzar que siempre se coja la versión nueva
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", () => clients.claim());

self.addEventListener("fetch", (event) => {
  // Siempre pide los archivos al servidor (GitHub Pages), no usa caché
  event.respondWith(fetch(event.request));
});
