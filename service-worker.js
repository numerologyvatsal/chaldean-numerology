const CACHE_NAME = "chaldean-numerology-v1";

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
];

// =====================================
// Install
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
// Activate
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
// Offline Fetch
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
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());

            return networkResponse;
          });
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
    }),
  );
});
