(this["webpackJsonpfrakton-test"]=this["webpackJsonpfrakton-test"]||[]).push([[0],{15:function(t,e,c){},23:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),i=c(17),r=c.n(i),a=(c(23),c(7)),j=c(2),o=(c(15),c(1));function u(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("img",{src:"https://images.ctfassets.net/fo9twyrwpveg/5IURrhL2GzLDalrwMf2Hk8/c2390464b515b8c149a0790506123894/frakton_logo.svg"}),Object(o.jsx)("div",{className:"title",children:"Frakton / Web Developer Proficient Test"})]})}var l=c(9),d=function(){var t=Object(n.useState)([""]),e=Object(l.a)(t,2),c=e[0],s=e[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){fetch("https://jsonplaceholder.typicode.com/albums").then((function(t){return t.json()})).then((function(t){return s(t)}))};return Object(o.jsx)("div",{className:"albums",children:c?c.map((function(t){return Object(o.jsx)("div",{className:"album",children:Object(o.jsxs)(a.b,{to:"/photos/"+t.id,children:[Object(o.jsx)("div",{className:"id",children:t.id}),Object(o.jsx)("div",{className:"name",children:t.title})]})})})):null})};var h=function(){var t=Object(j.f)().id,e=Object(n.useState)([""]),c=Object(l.a)(e,2),s=c[0],i=c[1];Object(n.useEffect)((function(){r()}),[t]);var r=function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return t.json()})).then((function(t){return i(t)}))};return Object(o.jsx)("div",{className:"photos",children:Object(o.jsx)("ul",{children:s.filter((function(e){return e.albumId==t})).map((function(t,e){return Object(o.jsx)("li",{children:Object(o.jsxs)(a.b,{to:"/photos/"+t.albumId+"/"+t.id,children:[Object(o.jsx)("div",{className:"image",children:Object(o.jsx)("img",{src:t.thumbnailUrl})}),Object(o.jsx)("h3",{className:"name",children:t.title})]})})}))})})};var b=function(){var t=Object(j.f)().id,e=Object(n.useState)([""]),c=Object(l.a)(e,2),s=c[0],i=c[1];Object(n.useEffect)((function(){r()}),[]);var r=function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(t){return t.json()})).then((function(t){return i(t)}))};return Object(o.jsx)("div",{children:s.filter((function(e){return e.id==t})).map((function(t){return Object(o.jsx)("img",{src:t.url})}))})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(a.a,{basename:"",children:[Object(o.jsx)(u,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(d,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/photos/:id",children:Object(o.jsx)(h,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/photos/:id/:id",children:Object(o.jsx)(b,{})})]})]})})})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[30,1,2]]]);
//# sourceMappingURL=main.79a0df8a.chunk.js.map