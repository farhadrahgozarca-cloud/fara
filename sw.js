/* FARA GYM offline cache: pages network first, assets cache first */
const CACHE="fara-gym-v2";
const ASSETS=["./", "index.html", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon-64.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon.svg", "icons/maskable-512.png", "fonts/big-shoulders-display-latin-600-normal.woff2", "fonts/big-shoulders-display-latin-700-normal.woff2", "fonts/big-shoulders-display-latin-800-normal.woff2", "fonts/figtree-latin-400-normal.woff2", "fonts/figtree-latin-500-normal.woff2", "fonts/figtree-latin-600-normal.woff2", "fonts/figtree-latin-700-normal.woff2", "fonts/playfair-display-latin-600-normal.woff2", "fonts/playfair-display-latin-700-normal.woff2", "fonts/playfair-display-latin-800-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{
  const req=e.request;if(req.method!=="GET")return;
  if(req.mode==="navigate"){e.respondWith(fetch(req).then(res=>{const c=res.clone();caches.open(CACHE).then(x=>x.put("index.html",c));return res;}).catch(()=>caches.match("index.html")));return;}
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(res=>{if(res&&res.ok&&new URL(req.url).origin===location.origin){const c=res.clone();caches.open(CACHE).then(x=>x.put(req,c));}return res;})));
});
