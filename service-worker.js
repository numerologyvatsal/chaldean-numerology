/*
=========================================
CHALDEAN NUMEROLOGY
Service Worker
Offline / PWA Support
=========================================
*/

const CACHE_NAME = "chaldean-numerology-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",

  "./css/style.css",

  "./js/utils.js",
  "./js/engine.js",
  "./js/calculations.js",
  "./js/database.js",

  "./js/interpretations.js",
  "./js/interpretations-gu.js",
  "./js/language.js",

  "./js/report.js",
  "./js/script.js",

  "./manifest.json",

  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

// =====================================
// INSTALL
// =====================================

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    }),
  );

  self.skipWaiting();
});

// =====================================
// ACTIVATE
// =====================================

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      );
    }),
  );

  self.clients.claim();
});

// =====================================
// FETCH / OFFLINE
// =====================================

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === "opaque"
          ) {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }

          return new Response("Offline", {
            status: 503,
            statusText: "Offline",
          });
        });
    }),
  );
});
