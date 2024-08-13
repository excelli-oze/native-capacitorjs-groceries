import{s as ee,n as B,c as te,o as le,a as se,b as J}from"../chunks/scheduler.2sQ1eBph.js";import{S as ae,i as re,e as p,c as _,a as v,d,k as f,g as x,s as y,o as N,l as G,f as E,p as ne,t as M,b as R,h as o,m as ce,j as K}from"../chunks/index.ur5PK8xl.js";import{e as Q}from"../chunks/each.D6YF6ztN.js";import{p as ie,c as W}from"../chunks/utils.BTQTK8J1.js";function X(n,t,r){const e=n.slice();return e[5]=t[r],e}function oe(n){let t,r="Products",e,l,a=n[0]&&Y(n);return{c(){t=p("div"),t.textContent=r,e=y(),a&&a.c(),l=N(),this.h()},l(s){t=_(s,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-y0lyg9"&&(t.textContent=r),e=E(s),a&&a.l(s),l=N(),this.h()},h(){f(t,"class","text-2xl font-bold md:text-4xl ")},m(s,c){x(s,t,c),x(s,e,c),a&&a.m(s,c),x(s,l,c)},p(s,c){s[0]?a?a.p(s,c):(a=Y(s),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},d(s){s&&(d(t),d(e),d(l)),a&&a.d(s)}}}function fe(n){let t,r="Loading...";return{c(){t=p("p"),t.textContent=r},l(e){t=_(e,"P",{"data-svelte-h":!0}),G(t)!=="svelte-qdsr2u"&&(t.textContent=r)},m(e,l){x(e,t,l)},p:B,d(e){e&&d(t)}}}function Y(n){let t,r=Q(n[0]),e=[];for(let l=0;l<r.length;l+=1)e[l]=Z(X(n,r,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let a=0;a<e.length;a+=1)e[a].l(l);t=N()},m(l,a){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(l,a);x(l,t,a)},p(l,a){if(a&5){r=Q(l[0]);let s;for(s=0;s<r.length;s+=1){const c=X(l,r,s);e[s]?e[s].p(c,a):(e[s]=Z(c),e[s].c(),e[s].m(t.parentNode,t))}for(;s<e.length;s+=1)e[s].d(1);e.length=r.length}},d(l){l&&d(t),ne(e,l)}}}function Z(n){let t,r,e,l,a,s,c,i,C=n[5].title+"",I,q,h,k,g,S,w=n[5].price+"",D,T,m,O="Add to cart",j,A,U;function $(){return n[3](n[5])}return{c(){t=p("div"),r=p("div"),e=p("img"),s=y(),c=p("div"),i=p("p"),I=M(C),q=y(),h=p("div"),k=p("p"),g=p("span"),S=M("Rs "),D=M(w),T=y(),m=p("button"),m.textContent=O,j=y(),this.h()},l(b){t=_(b,"DIV",{class:!0});var u=v(t);r=_(u,"DIV",{class:!0});var z=v(r);e=_(z,"IMG",{class:!0,src:!0,alt:!0}),z.forEach(d),s=E(u),c=_(u,"DIV",{class:!0});var P=v(c);i=_(P,"P",{class:!0});var F=v(i);I=R(F,C),F.forEach(d),q=E(P),h=_(P,"DIV",{class:!0});var V=v(h);k=_(V,"P",{class:!0});var H=v(k);g=_(H,"SPAN",{class:!0});var L=v(g);S=R(L,"Rs "),D=R(L,w),L.forEach(d),H.forEach(d),T=E(V),m=_(V,"BUTTON",{class:!0,"data-svelte-h":!0}),G(m)!=="svelte-444ri9"&&(m.textContent=O),V.forEach(d),P.forEach(d),j=E(u),u.forEach(d),this.h()},h(){f(e,"class","w-[208px] h-[250px]"),J(e.src,l=n[5].image)||f(e,"src",l),f(e,"alt",a=n[5].title),f(r,"class","p-2 w-full bg-blue-300 shadow-lg h-fit"),f(i,"class","mb-1 text-xl font-normal text-green-50 "),f(g,"class","text-green-900"),f(k,"class","text-sm font-normal"),f(m,"class","px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800"),f(h,"class","flex justify-between items-center"),f(c,"class","p-2 mt-8 bg-blue-300/20"),f(t,"class","bg-blue-600 p-4 w-[256px]")},m(b,u){x(b,t,u),o(t,r),o(r,e),o(t,s),o(t,c),o(c,i),o(i,I),o(c,q),o(c,h),o(h,k),o(k,g),o(g,S),o(g,D),o(h,T),o(h,m),o(t,j),A||(U=ce(m,"click",$),A=!0)},p(b,u){n=b,u&1&&!J(e.src,l=n[5].image)&&f(e,"src",l),u&1&&a!==(a=n[5].title)&&f(e,"alt",a),u&1&&C!==(C=n[5].title+"")&&K(I,C),u&1&&w!==(w=n[5].price+"")&&K(D,w)},d(b){b&&d(t),A=!1,U()}}}function de(n){let t;function r(a,s){return a[1]?fe:oe}let e=r(n),l=e(n);return{c(){t=p("div"),l.c(),this.h()},l(a){t=_(a,"DIV",{class:!0});var s=v(t);l.l(s),s.forEach(d),this.h()},h(){f(t,"class","w-screen grid grid-cols-1 w-screen bg-blue-100 pt-4 gap-y-12 place-items-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20 max-w-screen-2xl mx-auto min-h-screen")},m(a,s){x(a,t,s),l.m(t,null)},p(a,[s]){e===(e=r(a))&&l?l.p(a,s):(l.d(1),l=e(a),l&&(l.c(),l.m(t,null)))},i:B,o:B,d(a){a&&d(t),l.d()}}}function ue(n,t,r){let e;te(n,W,i=>r(4,e=i));let l=[],a=!0;le(async()=>{fetch("https://fakestoreapi.com/products").then(i=>i.json()).then(i=>{ie.set({loading:!1,data:i}),r(0,l=i),r(1,a=!1)})});function s(i){se(W,e=[...e,i],e),console.log(e)}return[l,a,s,i=>{s(i)}]}class ve extends ae{constructor(t){super(),re(this,t,ue,de,ee,{})}}export{ve as component};
