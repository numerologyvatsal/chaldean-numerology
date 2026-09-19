/*
=========================================
CHALDEAN NUMEROLOGY
Service Worker
=========================================
*/

const CACHE_NAME = "chaldean-numerology-v3";

const FILES_TO_CACHE = [
  "/chaldean-numerology/",
  "/chaldean-numerology/index.html",

  "/chaldean-numerology/css/style.css",

  "/chaldean-numerology/js/utils.js",
  "/chaldean-numerology/js/engine.js",
  "/chaldean-numerology/js/calculations.js",
  "/chaldean-numerology/js/database.js",
  "/chaldean-numerology/js/interpretations.js",
  "/chaldean-numerology/js/interpretations-gu.js",
  "/chaldean-numerology/js/language.js",
  "/chaldean-numerology/js/report.js",
  "/chaldean-numerology/js/script.js",

  "/chaldean-numerology/manifest.json",

  "/chaldean-numerology/icons/icon-192.png",
  "/chaldean-numerology/icons/icon-512.png",
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
// FETCH
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
            return caches.match("/chaldean-numerology/index.html");
          }

          return new Response("Offline", {
            status: 503,
            statusText: "Offline",
          });
        });
    }),
  );
});
