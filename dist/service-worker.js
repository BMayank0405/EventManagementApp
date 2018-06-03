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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

importScripts(
  "precache-manifest.60144109bbe17651b1eb050c29e4f6f4.js"
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

workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, workbox.strategies.staleWhileRevalidate({ cacheName: "g-apis-cache", plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.expiration.Plugin({"maxEntries":30,"maxAgeSeconds":720000})] }), 'GET');
workbox.routing.registerRoute(/get-event/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "event-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":100,"maxAgeSeconds":7200}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/all-societies/, workbox.strategies.networkFirst({ networkTimeoutSeconds: 3, cacheName: "societies-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":100,"maxAgeSeconds":7200}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
