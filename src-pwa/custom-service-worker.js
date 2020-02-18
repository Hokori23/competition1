/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

var cacheName = 'staticFiles'
var cacheFiles = [
    '/',
    './index.html',
    './css/mdui.min.css',
    './fonts/roboto/Roboto-Black.woff',
    './fonts/roboto/Roboto-Black.woff2',
    './fonts/roboto/Roboto-Medium.woff',
    './fonts/roboto/Roboto-Medium.woff2',
    './fonts/roboto/Roboto-Thin.woff',
    './fonts/roboto/Roboto-Thin.woff2',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      'index.html'
    ]))
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  )
})
