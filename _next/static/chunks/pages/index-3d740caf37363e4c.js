(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},3796:function(n,e,t){"use strict";t.r(e);var r=t(5893),o=t(7294);e.default=function(n){var e=n.text,t=(0,o.useState)(!1),i=t[0],s=t[1];return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:e}),(0,r.jsx)("button",{onClick:function(){navigator.clipboard.writeText(e).then((function(){s(!0),setTimeout((function(){return s(!1)}),2e3)}))},children:i?"Copied!":"Copy"})]})}},3678:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r,o=t(5893),i=t(7294),s=t(3796);function c(){var n=function(n){return console.log(n),fetch("api/notification",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()})).then((function(n){c(n.endpoint),l(n.expirationTime),f(n.keys),g(n.body)}))},e=(0,i.useState)(""),t=e[0],c=e[1],u=(0,i.useState)(""),a=u[0],l=u[1],h=(0,i.useState)(""),d=h[0],f=h[1],p=(0,i.useState)(""),x=p[0],g=p[1];return(0,i.useEffect)((function(){r=function(n){for(var e=(n+"=".repeat((4-n.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(e),r=new Uint8Array(t.length),o=0;o<t.length;++o)r[o]=t.charCodeAt(o);return r}("BDeEjWwSClAYzHE15bxl1I0vlnTryaLz8XrfiqpX_nq9sLnmrEL3W-q_y3628MGBjJ10XKFb21LKk1OQGBsrf9Q"),console.log(r)})),(0,o.jsx)("div",{className:"p-0",children:(0,o.jsxs)("div",{className:"container my-5",children:[(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(console.log("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:r,userVisibleOnly:!0}).then((function(e){n(e)})).catch((function(n){console.log(n),setClientError(n.toString()),"granted"!==Notification.permission?console.log("Permission was not granted."):console.error("An error ocurred during the subscription process.",n)}))):(console.log("Existed subscription detected."),n(t))})):console.log("Push manager unavailable.")})).catch((function(n){console.error("An error ocurred during Service Worker registration.",n)}))},children:"Subscribe!"}),(0,o.jsx)("button",{onClick:function(){navigator.serviceWorker.ready.then((function(n){n.pushManager.getSubscription().then((function(n){null!==n?n.unsubscribe().then((function(n){})).catch((function(n){})):console.log("nothing to unsubscribe")}))}))},children:"UnSubscribe!"}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"endpoint: "}),(0,o.jsx)(s.default,{text:t}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"expirationTime:"}),(0,o.jsx)(s.default,{text:a||"null"}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"keys (auth): "}),(0,o.jsx)(s.default,{text:d.auth}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"keys (p256dh):"}),(0,o.jsx)(s.default,{text:d.p256dh}),(0,o.jsx)("hr",{}),(0,o.jsx)("p",{children:"response"}),(0,o.jsx)(s.default,{text:x})]})})}}},function(n){n.O(0,[774,888,179],(function(){return e=8581,n(n.s=e);var e}));var e=n.O();_N_E=e}]);