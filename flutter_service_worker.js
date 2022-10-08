'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f420a9c06ff62f7cc6b4c76c859b0a05",
"assets/assets/images/adaptionBack.png": "2fe4285b1d715e6e80d2f63f0294efe9",
"assets/assets/images/background.png": "15404aeec271e10ceefb5f66538e4f0f",
"assets/assets/images/camera.png": "7625b15ea35bc7652de75fa7e3f59b68",
"assets/assets/images/caty.png": "35615a638366995dd86fb1e269203404",
"assets/assets/images/CompositeLayer%2520(2).png": "f6040d35855733a849ac08005de9ae7a",
"assets/assets/images/CompositeLayer%2520(3).png": "30d61c59ef6741b8382ce0334147acd4",
"assets/assets/images/CompositeLayer%2520(4).png": "ec4688a2888966f9fe3cdb7f8a3aa945",
"assets/assets/images/CompositeLayer.png": "79bd472f725a1db9ac1a3be0295d278b",
"assets/assets/images/dish.png": "d385540c2a3573b846b3898cd8bdada0",
"assets/assets/images/Dodg.png": "f491e23981330f10636cbc26b3234f4d",
"assets/assets/images/Dog.png": "f491e23981330f10636cbc26b3234f4d",
"assets/assets/images/dogHand.png": "b4e44d693027ca07fd2701f1ce1a3f54",
"assets/assets/images/dogy.png": "770f787642b9c9e4e6df9201b4f36535",
"assets/assets/images/elsa.png": "14de23fdbf60c32460bb42d65aa9b044",
"assets/assets/images/email.png": "a293c600bb5dbe62a062d02522287857",
"assets/assets/images/facebook.png": "30decb19d6539d2be6a03795be1462fe",
"assets/assets/images/feed.png": "49f119971885c2eabdc3451a688e9c4d",
"assets/assets/images/footerDog.png": "cb80767449166fb0046995eb5199e2f7",
"assets/assets/images/google.png": "98867d606c85cd41fbb586f41b5fe318",
"assets/assets/images/Group%25201.png": "e843e19bdd5bf42c902a087903ac1ccd",
"assets/assets/images/Icon%2520ionic-ios-%2520(1).png": "1f3ebd6c047448351d883b8b23acd46a",
"assets/assets/images/Icon%2520ionic-ios-%2520(2).png": "ff5bb374a365fd8cca4be98a108faf9e",
"assets/assets/images/Icon%2520ionic-ios-.png": "878f29b38403f6e41d025880589c7b4e",
"assets/assets/images/Icon%2520material-p%2520(1).png": "6902df3225db99b3c8bcf56096fa6e74",
"assets/assets/images/Icon%2520material-p%2520(2).png": "d74777c239ebb5de112b53487893ac72",
"assets/assets/images/Icon%2520material-p.png": "9631a423825c78ae517dd7d9ad87e10d",
"assets/assets/images/image1.png": "0fd3069f4a4024d24c64d5cce22b2f32",
"assets/assets/images/image2.png": "231b3936ccabed90c44e44eea42ebc28",
"assets/assets/images/leg.png": "d86082909b793232997e0d57c7fad06a",
"assets/assets/images/logo.png": "07996f434cd92032d75d3173a381edf5",
"assets/assets/images/petology.png": "e843e19bdd5bf42c902a087903ac1ccd",
"assets/assets/images/Rectangle%25202.png": "f0a4576792ba661321b570af54a6db3d",
"assets/assets/images/requestDog.png": "ca9ba5ce5f3066273fb038f1cb59694d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "09db927e12542de0dd0ffa7bc4259e68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8d5e084640740fedde88ca107f361d69",
"/": "8d5e084640740fedde88ca107f361d69",
"main.dart.js": "a456578c54a05a632cc12630ec91939c",
"manifest.json": "48d0f1f9ae796f1ac3ea94e130f0ecbc",
"version.json": "0a0f33dd3fd54c18bcbd4767caa92e69"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
