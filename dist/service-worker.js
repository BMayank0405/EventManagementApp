/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

importScripts(
  "/precache-manifest.eaa41405b2c131a1defa83f47fcc5ea3.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/get-event/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "event-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/all-societies/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "society-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/all-venues/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "venue-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/society\/status/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "society-status", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/faculty\/pending-events/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "-status", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/faculty\/history/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "faculty-history", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/admin\/get-head/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "admin-head", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/admin\/getAllUsers/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "admin-allusers", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.cacheFirst({ cacheName: "google-api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":86400,"purgeOnQuotaError":false})] }), 'GET');
