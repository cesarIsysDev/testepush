if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts("worker-xp8V7SJdx-J1YzViagvGV.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/main-1ba2d472a593ce4d.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/pages/_app-5dd69db9846dc915.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/pages/components/CopyTextComponent-f9e682fd566b9be5.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/pages/index-76bce0fdd8546a22.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/chunks/webpack-fd82975a6094609f.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/xp8V7SJdx-J1YzViagvGV/_buildManifest.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/xp8V7SJdx-J1YzViagvGV/_middlewareManifest.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/_next/static/xp8V7SJdx-J1YzViagvGV/_ssgManifest.js",revision:"xp8V7SJdx-J1YzViagvGV"},{url:"/favicon.ico",revision:"80c67b31408f699a797e3568c078e1d4"},{url:"/home.jpg",revision:"fa790f91ab0892c9228f3131a7777e10"},{url:"/icon-192x192.png",revision:"53b593f26b004932c61254b8dd628670"},{url:"/icon-256x256.png",revision:"819b9f94eef34157a21aa1c1c398fadf"},{url:"/icon-384x384.png",revision:"22d0b94351a04d3ac4d74334ad860a2f"},{url:"/icon-512x512.png",revision:"e22a88987faf92ec4fdc3b7f9c2459b5"},{url:"/manifest.json",revision:"e45fdfc59b1a6d67f5da2f8076cbda28"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
