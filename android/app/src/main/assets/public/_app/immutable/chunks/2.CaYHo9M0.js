const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web.BInuHrK_.js","./utils.BTQTK8J1.js","./preload-helper.D6kgxu3v.js","./index.Kxl9Blxd.js","./scheduler.2sQ1eBph.js","./web.BfD2muO_.js","./web.C-9bNgOv.js"])))=>i.map(i=>d[i]);
import{s as ee,n as S,c as Te,o as Fe,a as We,b as ge,r as Ee}from"./scheduler.2sQ1eBph.js";import{S as te,i as ne,e as f,s as C,t as ce,c as p,a as I,l as k,f as y,b as ue,d as v,k as i,g as R,h as o,j as he,o as Ie,p as Ge,m as z,n as de,G as je,A as se,B as le,C as ae,w as re,u as oe,D as ie}from"./index.ur5PK8xl.js";import{e as De}from"./each.D6YF6ztN.js";import{c as Le,p as ze,r as xe,W as Ye,b as ye,u as pe,T as Je,A as Ke,d as Qe,C as Xe}from"./utils.BTQTK8J1.js";import{_ as ke}from"./preload-helper.D6kgxu3v.js";import{g as Oe}from"./entry.DPDAdYUY.js";function Ue(r,e,n){const t=r.slice();return t[8]=e[n],t}function Ze(r){let e,n=De(r[2]),t=[];for(let s=0;s<n.length;s+=1)t[s]=Se(Ue(r,n,s));return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=Ie()},l(s){for(let a=0;a<t.length;a+=1)t[a].l(s);e=Ie()},m(s,a){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(s,a);R(s,e,a)},p(s,a){if(a&12){n=De(s[2]);let l;for(l=0;l<n.length;l+=1){const u=Ue(s,n,l);t[l]?t[l].p(u,a):(t[l]=Se(u),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=n.length}},d(s){s&&v(e),Ge(t,s)}}}function et(r){let e,n="Loading...";return{c(){e=f("p"),e.textContent=n},l(t){e=p(t,"P",{"data-svelte-h":!0}),k(e)!=="svelte-qdsr2u"&&(e.textContent=n)},m(t,s){R(t,e,s)},p:S,d(t){t&&v(e)}}}function Se(r){let e,n,t,s,a,l,u,c,g=r[8].product+"",h,d,m,w,T,D,$=r[8].price+"",_,b,P,W="Add to cart",E,j,U;function H(){return r[6](r[8])}return{c(){e=f("div"),n=f("div"),t=f("img"),l=C(),u=f("div"),c=f("p"),h=ce(g),d=C(),m=f("div"),w=f("p"),T=f("span"),D=ce("Rs "),_=ce($),b=C(),P=f("button"),P.textContent=W,E=C(),this.h()},l(q){e=p(q,"DIV",{class:!0});var O=I(e);n=p(O,"DIV",{class:!0});var Z=I(n);t=p(Z,"IMG",{class:!0,src:!0,alt:!0}),Z.forEach(v),l=y(O),u=p(O,"DIV",{class:!0});var M=I(u);c=p(M,"P",{class:!0});var Y=I(c);h=ue(Y,g),Y.forEach(v),d=y(M),m=p(M,"DIV",{class:!0});var x=I(m);w=p(x,"P",{class:!0});var A=I(w);T=p(A,"SPAN",{class:!0});var N=I(T);D=ue(N,"Rs "),_=ue(N,$),N.forEach(v),A.forEach(v),b=y(x),P=p(x,"BUTTON",{class:!0,"data-svelte-h":!0}),k(P)!=="svelte-1gqkzz4"&&(P.textContent=W),x.forEach(v),M.forEach(v),E=y(O),O.forEach(v),this.h()},h(){i(t,"class","w-[208px] h-[250px]"),ge(t.src,s=r[8].photo)||i(t,"src",s),i(t,"alt",a=r[8].product),i(n,"class","p-2 bg-blue-300 shadow-lg"),i(c,"class","mb-1 text-xl font-normal text-green-50 whitespace-nowrap"),i(T,"class","text-green-900"),i(w,"class","text-sm font-normal"),i(P,"class","px-4 py-1 text-sm text-white bg-green-800 shadow-sm hover:bg-green-900 active:bg-green-800"),i(m,"class","flex justify-between items-center"),i(u,"class","p-2 mt-8 bg-blue-300/20 w-48"),i(e,"class","bg-blue-600 p-4")},m(q,O){R(q,e,O),o(e,n),o(n,t),o(e,l),o(e,u),o(u,c),o(c,h),o(u,d),o(u,m),o(m,w),o(w,T),o(T,D),o(T,_),o(m,b),o(m,P),o(e,E),j||(U=z(P,"click",H),j=!0)},p(q,O){r=q,O&4&&!ge(t.src,s=r[8].photo)&&i(t,"src",s),O&4&&a!==(a=r[8].product)&&i(t,"alt",a),O&4&&g!==(g=r[8].product+"")&&he(h,g),O&4&&$!==($=r[8].price+"")&&he(_,$)},d(q){q&&v(e),j=!1,U()}}}function tt(r){let e,n,t,s,a="Deals of the day",l,u,c,g="Time Left",h,d,m,w,T;function D(b,P){if(b[1])return et;if(b[2])return Ze}let $=D(r),_=$&&$(r);return{c(){e=f("div"),n=f("div"),t=f("div"),s=f("div"),s.textContent=a,l=C(),u=f("div"),c=f("p"),c.textContent=g,h=C(),d=f("p"),m=ce(r[0]),w=C(),T=f("div"),_&&_.c(),this.h()},l(b){e=p(b,"DIV",{class:!0});var P=I(e);n=p(P,"DIV",{class:!0});var W=I(n);t=p(W,"DIV",{class:!0});var E=I(t);s=p(E,"DIV",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-15cejys"&&(s.textContent=a),l=y(E),u=p(E,"DIV",{class:!0});var j=I(u);c=p(j,"P",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-ifqhiy"&&(c.textContent=g),h=y(j),d=p(j,"P",{class:!0});var U=I(d);m=ue(U,r[0]),U.forEach(v),j.forEach(v),w=y(E),T=p(E,"DIV",{class:!0});var H=I(T);_&&_.l(H),H.forEach(v),E.forEach(v),W.forEach(v),P.forEach(v),this.h()},h(){i(s,"class","mb-8 text-3xl font-bold md:text-4xl md:mb-4"),i(c,"class","text-lg font-normal text-green-300"),i(d,"class","text-lg font-semibold text-green-50 md:w-fit"),i(u,"class","flex gap-4 justify-start mb-6 md:mb-14"),i(T,"class","overflow-x-scroll pb-2 flex gap-2"),i(t,"class","px-4 pt-16 text-green-50 md:px-20"),i(n,"class","container mx-auto"),i(e,"class","pb-10 bg-green-700")},m(b,P){R(b,e,P),o(e,n),o(n,t),o(t,s),o(t,l),o(t,u),o(u,c),o(u,h),o(u,d),o(d,m),o(t,w),o(t,T),_&&_.m(T,null)},p(b,[P]){P&1&&he(m,b[0]),$===($=D(b))&&_?_.p(b,P):(_&&_.d(1),_=$&&$(b),_&&(_.c(),_.m(T,null)))},i:S,o:S,d(b){b&&v(e),_&&_.d()}}}function nt(r){const e=Math.floor(r/3600),n=Math.floor(r%3600/60),t=r%60;return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function st(r,e,n){let t,s,a,l,u;Te(r,Le,d=>n(7,l=d)),Te(r,ze,d=>n(5,u=d));let c=3600;Fe(()=>{const d=setInterval(()=>{c>0&&n(4,c--,c)},1e3);return()=>clearInterval(d)});function g(d){We(Le,l=[...l,d],l),console.log(l)}const h=d=>{g(d)};return r.$$.update=()=>{r.$$.dirty&32&&n(2,t=u.data),r.$$.dirty&32&&n(1,s=u.loading),r.$$.dirty&16&&n(0,a=nt(c))},[a,s,t,g,c,u,h]}class lt extends te{constructor(e){super(),ne(this,e,st,tt,ee,{})}}function at(r){let e,n=`<div class="container mx-auto"><div class="flex flex-col pb-10 md:pb-20 place-content-end h-[90vh] max-h-[1000px] px-4 md:px-20 max-w-screen-xl"><div><h1 class="mb-10 min-w-full text-7xl font-bold lg:text-8xl">All <span class="text-green-900">Groceries</span>,<br/> for all
					<span class="text-green-900">needs</span></h1> <p class="mb-10 text-base font-semibold text-gray-600 md:mb-14 md:w-1/2 lg:w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis optio cupiditate rem
					dolore? Inventore delectus excepturi accusamus repellat!</p> <a href="./products" class="px-6 py-2 font-semibold text-white bg-green-700 rounded-2xl">Shop Now</a></div></div></div>`;return{c(){e=f("div"),e.innerHTML=n,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-3b7x6g"&&(e.innerHTML=n),this.h()},h(){i(e,"class","bg-blue-300")},m(t,s){R(t,e,s)},p:S,i:S,o:S,d(t){t&&v(e)}}}class rt extends te{constructor(e){super(),ne(this,e,null,at,ee,{})}}const ot=xe("Geolocation",{web:()=>ke(()=>import("./web.BInuHrK_.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>new r.GeolocationWeb)});function it(r){var q,O,Z,M,Y,x;let e,n,t="Geolocation",s,a,l,u,c=((O=(q=r[0])==null?void 0:q.coords)==null?void 0:O.latitude)+"",g,h,d,m,w=((M=(Z=r[0])==null?void 0:Z.coords)==null?void 0:M.longitude)+"",T,D,$,_,b=((x=(Y=r[0])==null?void 0:Y.coords)==null?void 0:x.accuracy)+"",P,W,E,j="Print Current Position",U,H;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("p"),u=ce("Latitude: "),g=ce(c),h=C(),d=f("p"),m=ce("Longitude: "),T=ce(w),D=C(),$=f("p"),_=ce("Accuracy: "),P=ce(b),W=C(),E=f("button"),E.textContent=j,this.h()},l(A){e=p(A,"DIV",{class:!0});var N=I(e);n=p(N,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-1ymgx20"&&(n.textContent=t),s=y(N),a=p(N,"DIV",{});var V=I(a);l=p(V,"P",{});var X=I(l);u=ue(X,"Latitude: "),g=ue(X,c),X.forEach(v),h=y(V),d=p(V,"P",{});var B=I(d);m=ue(B,"Longitude: "),T=ue(B,w),B.forEach(v),D=y(V),$=p(V,"P",{});var F=I($);_=ue(F,"Accuracy: "),P=ue(F,b),F.forEach(v),V.forEach(v),W=y(N),E=p(N,"BUTTON",{class:!0,"data-svelte-h":!0}),k(E)!=="svelte-1oww8nl"&&(E.textContent=j),N.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(E,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(e,"class","w-full flex flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(A,N){R(A,e,N),o(e,n),o(e,s),o(e,a),o(a,l),o(l,u),o(l,g),o(a,h),o(a,d),o(d,m),o(d,T),o(a,D),o(a,$),o($,_),o($,P),o(e,W),o(e,E),U||(H=z(E,"click",r[1]),U=!0)},p(A,[N]){var V,X,B,F,fe,ve;N&1&&c!==(c=((X=(V=A[0])==null?void 0:V.coords)==null?void 0:X.latitude)+"")&&he(g,c),N&1&&w!==(w=((F=(B=A[0])==null?void 0:B.coords)==null?void 0:F.longitude)+"")&&he(T,w),N&1&&b!==(b=((ve=(fe=A[0])==null?void 0:fe.coords)==null?void 0:ve.accuracy)+"")&&he(P,b)},i:S,o:S,d(A){A&&v(e),U=!1,H()}}}function ct(r,e,n){let t={};return[t,async()=>{n(0,t=await ot.getCurrentPosition())}]}class ut extends te{constructor(e){super(),ne(this,e,ct,it,ee,{})}}var me;(function(r){r.Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS"})(me||(me={}));var be;(function(r){r.Rear="REAR",r.Front="FRONT"})(be||(be={}));var we;(function(r){r.Uri="uri",r.Base64="base64",r.DataUrl="dataUrl"})(we||(we={}));class He extends Ye{async getPhoto(e){return new Promise(async(n,t)=>{if(e.webUseInput||e.source===me.Photos)this.fileInputExperience(e,n,t);else if(e.source===me.Prompt){let s=document.querySelector("pwa-action-sheet");s||(s=document.createElement("pwa-action-sheet"),document.body.appendChild(s)),s.header=e.promptLabelHeader||"Photo",s.cancelable=!1,s.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],s.addEventListener("onSelection",async a=>{a.detail===0?this.fileInputExperience(e,n,t):this.cameraExperience(e,n,t)})}else this.cameraExperience(e,n,t)})}async pickImages(e){return new Promise(async(n,t)=>{this.multipleFileInputExperience(n,t)})}async cameraExperience(e,n,t){if(customElements.get("pwa-camera-modal")){const s=document.createElement("pwa-camera-modal");s.facingMode=e.direction===be.Front?"user":"environment",document.body.appendChild(s);try{await s.componentOnReady(),s.addEventListener("onPhoto",async a=>{const l=a.detail;l===null?t(new ye("User cancelled photos app")):l instanceof Error?t(l):n(await this._getCameraPhoto(l,e)),s.dismiss(),document.body.removeChild(s)}),s.present()}catch{this.fileInputExperience(e,n,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,n,t)}fileInputExperience(e,n,t){let s=document.querySelector("#_capacitor-camera-input");const a=()=>{var l;(l=s.parentNode)===null||l===void 0||l.removeChild(s)};s||(s=document.createElement("input"),s.id="_capacitor-camera-input",s.type="file",s.hidden=!0,document.body.appendChild(s),s.addEventListener("change",l=>{const u=s.files[0];let c="jpeg";if(u.type==="image/png"?c="png":u.type==="image/gif"&&(c="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const g=new FileReader;g.addEventListener("load",()=>{if(e.resultType==="dataUrl")n({dataUrl:g.result,format:c});else if(e.resultType==="base64"){const h=g.result.split(",")[1];n({base64String:h,format:c})}a()}),g.readAsDataURL(u)}else n({webPath:URL.createObjectURL(u),format:c}),a()}),s.addEventListener("cancel",l=>{t(new ye("User cancelled photos app")),a()})),s.accept="image/*",s.capture=!0,e.source===me.Photos||e.source===me.Prompt?s.removeAttribute("capture"):e.direction===be.Front?s.capture="user":e.direction===be.Rear&&(s.capture="environment"),s.click()}multipleFileInputExperience(e,n){let t=document.querySelector("#_capacitor-camera-input-multiple");const s=()=>{var a;(a=t.parentNode)===null||a===void 0||a.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",a=>{const l=[];for(let u=0;u<t.files.length;u++){const c=t.files[u];let g="jpeg";c.type==="image/png"?g="png":c.type==="image/gif"&&(g="gif"),l.push({webPath:URL.createObjectURL(c),format:g})}e({photos:l}),s()}),t.addEventListener("cancel",a=>{n(new ye("User cancelled photos app")),s()})),t.accept="image/*",t.click()}_getCameraPhoto(e,n){return new Promise((t,s)=>{const a=new FileReader,l=e.type.split("/")[1];n.resultType==="uri"?t({webPath:URL.createObjectURL(e),format:l,saved:!1}):(a.readAsDataURL(e),a.onloadend=()=>{const u=a.result;n.resultType==="dataUrl"?t({dataUrl:u,format:l,saved:!1}):t({base64String:u.split(",")[1],format:l,saved:!1})},a.onerror=u=>{s(u)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}new He;const qe=xe("Camera",{web:()=>new He});function Ae(r){let e,n;return{c(){e=f("img"),this.h()},l(t){e=p(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(e,"class","max-w-80"),ge(e.src,n=r[0])||i(e,"src",n),i(e,"alt","some")},m(t,s){R(t,e,s)},p(t,s){s&1&&!ge(e.src,n=t[0])&&i(e,"src",n)},d(t){t&&v(e)}}}function dt(r){let e,n,t="Camera",s,a,l,u="pick photo",c,g,h=r[0]&&Ae(r);return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),h&&h.c(),a=C(),l=f("button"),l.textContent=u,this.h()},l(d){e=p(d,"DIV",{class:!0});var m=I(e);n=p(m,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-1aoxesh"&&(n.textContent=t),s=y(m),h&&h.l(m),a=y(m),l=p(m,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1wx50pl"&&(l.textContent=u),m.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(d,m){R(d,e,m),o(e,n),o(e,s),h&&h.m(e,null),o(e,a),o(e,l),c||(g=z(l,"click",r[1]),c=!0)},p(d,[m]){d[0]?h?h.p(d,m):(h=Ae(d),h.c(),h.m(e,a)):h&&(h.d(1),h=null)},i:S,o:S,d(d){d&&v(e),h&&h.d(),c=!1,g()}}}function ft(r,e,n){let t;return[t,async()=>{const a=await qe.getPhoto({quality:90,allowEditing:!0,resultType:we.Uri});n(0,t=a.webPath)}]}class pt extends te{constructor(e){super(),ne(this,e,ft,dt,ee,{})}}var Ce;(function(r){r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT"})(Ce||(Ce={}));var Ne;(function(r){r.Success="SUCCESS",r.Warning="WARNING",r.Error="ERROR"})(Ne||(Ne={}));const $e=xe("Haptics",{web:()=>ke(()=>import("./web.BfD2muO_.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url).then(r=>new r.HapticsWeb)});function mt(r){let e,n,t="Haptics",s,a,l,u="High",c,g,h="Medium",d,m,w="Light",T,D;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("button"),l.textContent=u,c=C(),g=f("button"),g.textContent=h,d=C(),m=f("button"),m.textContent=w,this.h()},l($){e=p($,"DIV",{class:!0});var _=I(e);n=p(_,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-jgk5ee"&&(n.textContent=t),s=y(_),a=p(_,"DIV",{class:!0});var b=I(a);l=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-9hoicb"&&(l.textContent=u),c=y(b),g=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(g)!=="svelte-1ikw8r0"&&(g.textContent=h),d=y(b),m=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(m)!=="svelte-1xzkpqe"&&(m.textContent=w),b.forEach(v),_.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(g,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"),i(m,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"),i(a,"class","flex flex-col gap-2"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m($,_){R($,e,_),o(e,n),o(e,s),o(e,a),o(a,l),o(a,c),o(a,g),o(a,d),o(a,m),T||(D=[z(l,"click",r[2]),z(g,"click",r[0]),z(m,"click",r[1])],T=!0)},p:S,i:S,o:S,d($){$&&v(e),T=!1,Ee(D)}}}function ht(r){return[async()=>{await $e.impact({style:Ce.Medium})},async()=>{await $e.impact({style:Ce.Light})},async()=>{await $e.vibrate()}]}class gt extends te{constructor(e){super(),ne(this,e,ht,mt,ee,{})}}function Ve(r){let e,n;return{c(){e=f("img"),this.h()},l(t){e=p(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(e,"class","max-w-80"),ge(e.src,n=r[0])||i(e,"src",n),i(e,"alt","some")},m(t,s){R(t,e,s)},p(t,s){s&1&&!ge(e.src,n=t[0])&&i(e,"src",n)},d(t){t&&v(e)}}}function Re(r){let e,n="Product Added Successfully",t,s,a="View Products";return{c(){e=f("p"),e.textContent=n,t=C(),s=f("a"),s.textContent=a,this.h()},l(l){e=p(l,"P",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-1wx3u6k"&&(e.textContent=n),t=y(l),s=p(l,"A",{href:!0,"data-svelte-h":!0}),k(s)!=="svelte-1yn2k40"&&(s.textContent=a),this.h()},h(){i(e,"class","text-green-100"),i(s,"href","/products")},m(l,u){R(l,e,u),R(l,t,u),R(l,s,u)},d(l){l&&(v(e),v(t),v(s))}}}function Be(r){let e,n="You are not logged in";return{c(){e=f("p"),e.textContent=n,this.h()},l(t){e=p(t,"P",{class:!0,"data-svelte-h":!0}),k(e)!=="svelte-y0y5y7"&&(e.textContent=n),this.h()},h(){i(e,"class","text-red-300")},m(t,s){R(t,e,s)},d(t){t&&v(e)}}}function vt(r){let e,n,t="Add Product",s,a,l="Product Name",u,c,g,h,d="Price",m,w,T,D,$="Size",_,b,P,W="Small",E,j="Medium",U,H="Big",q,O,Z="Photo",M,Y,x,A="Pick Photo",N,V,X="Add Product",B,F,fe,ve,G=r[0]&&Ve(r),J=r[1]&&Re(),K=!r[4]&&Be();return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("label"),a.textContent=l,u=C(),c=f("input"),g=C(),h=f("label"),h.textContent=d,m=C(),w=f("input"),T=C(),D=f("label"),D.textContent=$,_=C(),b=f("select"),P=f("option"),P.textContent=W,E=f("option"),E.textContent=j,U=f("option"),U.textContent=H,q=C(),O=f("label"),O.textContent=Z,M=C(),G&&G.c(),Y=C(),x=f("button"),x.textContent=A,N=C(),V=f("button"),V.textContent=X,B=C(),J&&J.c(),F=C(),K&&K.c(),this.h()},l(Q){e=p(Q,"DIV",{class:!0});var L=I(e);n=p(L,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-1hx6w3q"&&(n.textContent=t),s=y(L),a=p(L,"LABEL",{for:!0,"data-svelte-h":!0}),k(a)!=="svelte-1l0kx9b"&&(a.textContent=l),u=y(L),c=p(L,"INPUT",{class:!0,id:!0,type:!0}),g=y(L),h=p(L,"LABEL",{for:!0,"data-svelte-h":!0}),k(h)!=="svelte-hat3sk"&&(h.textContent=d),m=y(L),w=p(L,"INPUT",{class:!0,id:!0,type:!0}),T=y(L),D=p(L,"LABEL",{for:!0,"data-svelte-h":!0}),k(D)!=="svelte-1hoau7q"&&(D.textContent=$),_=y(L),b=p(L,"SELECT",{class:!0,id:!0});var _e=I(b);P=p(_e,"OPTION",{"data-svelte-h":!0}),k(P)!=="svelte-1i62f28"&&(P.textContent=W),E=p(_e,"OPTION",{"data-svelte-h":!0}),k(E)!=="svelte-1u6j0ru"&&(E.textContent=j),U=p(_e,"OPTION",{"data-svelte-h":!0}),k(U)!=="svelte-1o4g6em"&&(U.textContent=H),_e.forEach(v),q=y(L),O=p(L,"LABEL",{for:!0,"data-svelte-h":!0}),k(O)!=="svelte-vljccy"&&(O.textContent=Z),M=y(L),G&&G.l(L),Y=y(L),x=p(L,"BUTTON",{class:!0,"data-svelte-h":!0}),k(x)!=="svelte-1y9a9eh"&&(x.textContent=A),N=y(L),V=p(L,"BUTTON",{class:!0,"data-svelte-h":!0}),k(V)!=="svelte-15yku37"&&(V.textContent=X),B=y(L),J&&J.l(L),F=y(L),K&&K.l(L),L.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(a,"for","name"),i(c,"class","px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"),i(c,"id","name"),i(c,"type","text"),i(h,"for","price"),i(w,"class","px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"),i(w,"id","price"),i(w,"type","number"),i(D,"for","size"),P.__value="small",de(P,P.__value),E.__value="medium",de(E,E.__value),U.__value="big",de(U,U.__value),i(b,"class","px-4 py-2 mb-2 w-full text-md bg-blue-100 border focus:outline-none focus:ring-2 focus:ring-green-800 text-green-950"),i(b,"id","size"),i(O,"for","photo"),i(x,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(V,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(Q,L){R(Q,e,L),o(e,n),o(e,s),o(e,a),o(e,u),o(e,c),de(c,r[3]),o(e,g),o(e,h),o(e,m),o(e,w),de(w,r[2]),o(e,T),o(e,D),o(e,_),o(e,b),o(b,P),o(b,E),o(b,U),o(e,q),o(e,O),o(e,M),G&&G.m(e,null),o(e,Y),o(e,x),o(e,N),o(e,V),o(e,B),J&&J.m(e,null),o(e,F),K&&K.m(e,null),fe||(ve=[z(c,"input",r[8]),z(w,"input",r[9]),z(x,"click",r[6]),z(V,"click",r[7])],fe=!0)},p(Q,[L]){L&8&&c.value!==Q[3]&&de(c,Q[3]),L&4&&je(w.value)!==Q[2]&&de(w,Q[2]),Q[0]?G?G.p(Q,L):(G=Ve(Q),G.c(),G.m(e,Y)):G&&(G.d(1),G=null),Q[1]?J||(J=Re(),J.c(),J.m(e,F)):J&&(J.d(1),J=null),Q[4]?K&&(K.d(1),K=null):K||(K=Be(),K.c(),K.m(e,null))},i:S,o:S,d(Q){Q&&v(e),G&&G.d(),J&&J.d(),K&&K.d(),fe=!1,Ee(ve)}}}function bt(r,e,n){let t,s=pe.user();Te(r,s,w=>n(4,t=w));let a,l=!1,u,c;const g=async()=>{const w=await qe.getPhoto({quality:90,resultType:we.Uri});console.log("image",JSON.stringify(w)),n(0,a=w.webPath),w.path};async function h(){if(!t){Oe("/auth");return}let w,T;w=a.split("/").pop(),T=await pe.products.readFileFromUri(a);const{publicUrl:D}=await pe.products.uploadFile(w,T);console.log("publicUrl",D);const $={name:c,price:u,photo:D,size:document.getElementById("size").value};console.log("product",$);const{data:_,error:b}=await pe.products.addProduct($);console.log(_,b),b||(pe.others.showToast("Product added successfully"),n(1,l=!0),Oe("/products"))}function d(){c=this.value,n(3,c)}function m(){u=je(this.value),n(2,u)}return[a,l,u,c,t,s,g,h,d,m]}class xt extends te{constructor(e){super(),ne(this,e,bt,vt,ee,{})}}function _t(r){let e,n,t="Toast",s,a,l,u="Toast",c,g;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("button"),l.textContent=u,this.h()},l(h){e=p(h,"DIV",{class:!0});var d=I(e);n=p(d,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-gje63r"&&(n.textContent=t),s=y(d),a=p(d,"DIV",{class:!0});var m=I(a);l=p(m,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1d90o9d"&&(l.textContent=u),m.forEach(v),d.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(a,"class","flex flex-col gap-2"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(h,d){R(h,e,d),o(e,n),o(e,s),o(e,a),o(a,l),c||(g=z(l,"click",r[0]),c=!0)},p:S,i:S,o:S,d(h){h&&v(e),c=!1,g()}}}function wt(r){return[async()=>{await Je.show({text:"Hello! This is a toast"})}]}class Ct extends te{constructor(e){super(),ne(this,e,wt,_t,ee,{})}}function yt(r){let e,n,t="Notification",s,a,l,u="Notification",c,g;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("button"),l.textContent=u,this.h()},l(h){e=p(h,"DIV",{class:!0});var d=I(e);n=p(d,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-g58ayp"&&(n.textContent=t),s=y(d),a=p(d,"DIV",{class:!0});var m=I(a);l=p(m,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-1mx435f"&&(l.textContent=u),m.forEach(v),d.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(a,"class","flex flex-col gap-2"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(h,d){R(h,e,d),o(e,n),o(e,s),o(e,a),o(a,l),c||(g=z(l,"click",r[0]),c=!0)},p:S,i:S,o:S,d(h){h&&v(e),c=!1,g()}}}function $t(r){return[async()=>{await pe.others.addLocalNotification("This is title","This is body",1)}]}class Pt extends te{constructor(e){super(),ne(this,e,$t,yt,ee,{})}}const Pe=xe("Share",{web:()=>ke(()=>import("./web.C-9bNgOv.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url).then(r=>new r.ShareWeb)});function Tt(r){let e,n,t="Share Sheet",s,a,l,u="Share All Options",c,g,h="Share Text Only",d,m,w="Share URL Only",T,D;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("button"),l.textContent=u,c=C(),g=f("button"),g.textContent=h,d=C(),m=f("button"),m.textContent=w,this.h()},l($){e=p($,"DIV",{class:!0});var _=I(e);n=p(_,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-16qptl6"&&(n.textContent=t),s=y(_),a=p(_,"DIV",{class:!0});var b=I(a);l=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-59ri9k"&&(l.textContent=u),c=y(b),g=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(g)!=="svelte-1cztuph"&&(g.textContent=h),d=y(b),m=p(b,"BUTTON",{class:!0,"data-svelte-h":!0}),k(m)!=="svelte-fshzpr"&&(m.textContent=w),b.forEach(v),_.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(g,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(m,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(a,"class","flex flex-col gap-2"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m($,_){R($,e,_),o(e,n),o(e,s),o(e,a),o(a,l),o(a,c),o(a,g),o(a,d),o(a,m),T||(D=[z(l,"click",r[0]),z(g,"click",r[1]),z(m,"click",r[2])],T=!0)},p:S,i:S,o:S,d($){$&&v(e),T=!1,Ee(D)}}}function Et(r){const e={title:"Sample Text",text:"This is a sample text",url:"http://google.com/",dialogTitle:"Share with buddies"},n={text:"This is sample text"},t={url:"http://google.com/"};return[async()=>{await Pe.share(e)},async()=>{await Pe.share(n)},async()=>{await Pe.share(t)}]}class kt extends te{constructor(e){super(),ne(this,e,Et,Tt,ee,{})}}function It(r){let e,n,t="Actions Sheet",s,a,l,u="Actions",c,g;return{c(){e=f("div"),n=f("p"),n.textContent=t,s=C(),a=f("div"),l=f("button"),l.textContent=u,this.h()},l(h){e=p(h,"DIV",{class:!0});var d=I(e);n=p(d,"P",{class:!0,"data-svelte-h":!0}),k(n)!=="svelte-1ia15ei"&&(n.textContent=t),s=y(d),a=p(d,"DIV",{class:!0});var m=I(a);l=p(m,"BUTTON",{class:!0,"data-svelte-h":!0}),k(l)!=="svelte-v7cx7p"&&(l.textContent=u),m.forEach(v),d.forEach(v),this.h()},h(){i(n,"class","text-lg text-green-100 font-semibold"),i(l,"class","bg-green-500 hover:bg-green-800 active:bg-green-700 text-white font-bold py-2 px-4 rounded"),i(a,"class","flex flex-col gap-2"),i(e,"class","flex w-full flex-col gap-4 justify-between mb-6 md:mb-14 bg-blue-600 p-4")},m(h,d){R(h,e,d),o(e,n),o(e,s),o(e,a),o(a,l),c||(g=z(l,"click",r[0]),c=!0)},p:S,i:S,o:S,d(h){h&&v(e),c=!1,g()}}}function Dt(r){return[async()=>{const n=await Ke.showActions({title:"Actions to Select",message:"Select an option to perform",options:[{title:"Option 1"},{title:"Option 2"},{title:"Close",style:Qe.Destructive}]});console.log("Action Sheet result:",n)}]}class Lt extends te{constructor(e){super(),ne(this,e,Dt,It,ee,{})}}const Me=xe("AppToWebPlugin",{web:{fetchAccessToken:async()=>(console.log("Using mock implementation for web"),{accessToken:"web-mock-access-token"}),receiveDataFromWeb:async({data:r})=>(console.log("Mock receiveDataFromWeb called with:",r),{success:!0})}});function Ot(r){let e,n,t,s,a,l,u,c,g="Others",h,d,m,w,T,D,$,_,b,P,W,E,j,U,H,q,O,Z,M,Y;return e=new rt({}),t=new lt({}),w=new Lt({}),D=new Pt({}),_=new ut({}),P=new pt({}),E=new gt({}),H=new Ct({}),O=new kt({}),M=new xt({}),{c(){se(e.$$.fragment),n=C(),se(t.$$.fragment),s=C(),a=f("div"),l=f("div"),u=f("div"),c=f("div"),c.textContent=g,h=C(),d=f("div"),m=f("div"),se(w.$$.fragment),T=C(),se(D.$$.fragment),$=C(),se(_.$$.fragment),b=C(),se(P.$$.fragment),W=C(),se(E.$$.fragment),j=C(),U=f("div"),se(H.$$.fragment),q=C(),se(O.$$.fragment),Z=C(),se(M.$$.fragment),this.h()},l(x){le(e.$$.fragment,x),n=y(x),le(t.$$.fragment,x),s=y(x),a=p(x,"DIV",{class:!0});var A=I(a);l=p(A,"DIV",{class:!0});var N=I(l);u=p(N,"DIV",{class:!0});var V=I(u);c=p(V,"DIV",{class:!0,"data-svelte-h":!0}),k(c)!=="svelte-1lpowoy"&&(c.textContent=g),h=y(V),d=p(V,"DIV",{class:!0});var X=I(d);m=p(X,"DIV",{class:!0});var B=I(m);le(w.$$.fragment,B),T=y(B),le(D.$$.fragment,B),$=y(B),le(_.$$.fragment,B),b=y(B),le(P.$$.fragment,B),W=y(B),le(E.$$.fragment,B),B.forEach(v),j=y(X),U=p(X,"DIV",{class:!0});var F=I(U);le(H.$$.fragment,F),q=y(F),le(O.$$.fragment,F),Z=y(F),le(M.$$.fragment,F),F.forEach(v),X.forEach(v),V.forEach(v),N.forEach(v),A.forEach(v),this.h()},h(){i(c,"class","mb-8 text-3xl font-bold md:text-4xl md:mb-4"),i(m,"class","md:flex md:flex-row md:gap-4 justify-between"),i(U,"class","md:flex md:flex-row md:gap-4 justify-between"),i(d,"class","flex flex-col gap-4"),i(u,"class","px-4 pt-16 md:px-20 max-w-screen-xl"),i(l,"class","container mx-auto"),i(a,"class","pb-20 bg-blue-300")},m(x,A){ae(e,x,A),R(x,n,A),ae(t,x,A),R(x,s,A),R(x,a,A),o(a,l),o(l,u),o(u,c),o(u,h),o(u,d),o(d,m),ae(w,m,null),o(m,T),ae(D,m,null),o(m,$),ae(_,m,null),o(m,b),ae(P,m,null),o(m,W),ae(E,m,null),o(d,j),o(d,U),ae(H,U,null),o(U,q),ae(O,U,null),o(U,Z),ae(M,U,null),Y=!0},p:S,i(x){Y||(re(e.$$.fragment,x),re(t.$$.fragment,x),re(w.$$.fragment,x),re(D.$$.fragment,x),re(_.$$.fragment,x),re(P.$$.fragment,x),re(E.$$.fragment,x),re(H.$$.fragment,x),re(O.$$.fragment,x),re(M.$$.fragment,x),Y=!0)},o(x){oe(e.$$.fragment,x),oe(t.$$.fragment,x),oe(w.$$.fragment,x),oe(D.$$.fragment,x),oe(_.$$.fragment,x),oe(P.$$.fragment,x),oe(E.$$.fragment,x),oe(H.$$.fragment,x),oe(O.$$.fragment,x),oe(M.$$.fragment,x),Y=!1},d(x){x&&(v(n),v(s),v(a)),ie(e,x),ie(t,x),ie(w),ie(D),ie(_),ie(P),ie(E),ie(H),ie(O),ie(M)}}}function Ut(r){async function e(){const n=Xe.getPlatform();console.log(`Running on platform: ${n}`);try{const t=await Me.fetchAccessToken();return console.log(`Access Token on ${n}:`,t.accessToken),(async a=>await Me.receiveDataFromWeb({data:a}))("Hello from Web").then(a=>{console.log("Success from web:",a.success)}),t.accessToken}catch(t){console.error(`Error fetching access token on ${n}:`,t)}}return e(),[]}class Mt extends te{constructor(e){super(),ne(this,e,Ut,Ot,ee,{})}}export{Ce as I,Ne as N,Mt as P};
