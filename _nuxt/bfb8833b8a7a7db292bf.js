(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t){!function(e,t){"use strict";function n(e){return document.createElement(e)}function r(element,e){for(var t in e)try{element.style[t]=e[t]}catch(e){}return element}function o(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof e}function c(e,t){if("array"!==o(t))return-1;if(t.indexOf)return t.indexOf(e);for(var i=0,n=t.length;i<n;i++)if(t[i]===e)return i;return-1}function h(){var e=arguments;for(var t in e[1])if(e[1].hasOwnProperty(t))switch(o(e[1][t])){case"object":e[0][t]=h({},e[0][t],e[1][t]);break;case"array":e[0][t]=e[1][t].slice(0);break;default:e[0][t]=e[1][t]}return e.length>2?h.apply(null,[e[0]].concat(Array.prototype.slice.call(e,2))):e[0]}function d(e){return 1===(e=Math.round(255*e).toString(16)).length?"0"+e:e}function l(element,e,t,n){element.addEventListener?element[n?"removeEventListener":"addEventListener"](e,t,!1):element.attachEvent&&element[n?"detachEvent":"attachEvent"]("on"+e,t)}var f;!function(){var t=e.performance;if(t&&(t.now||t.webkitNow)){var n=t.now?"now":"webkitNow";f=t[n].bind(t)}else f=function(){return+new Date}}();var m=e.cancelAnimationFrame||e.cancelRequestAnimationFrame,v=e.requestAnimationFrame;!function(){for(var t=["moz","webkit","o"],n=0,i=0,r=t.length;i<r&&!m;++i)m=e[t[i]+"CancelAnimationFrame"]||e[t[i]+"CancelRequestAnimationFrame"],v=m&&e[t[i]+"RequestAnimationFrame"];m||(v=function(t){var r=f(),o=Math.max(0,16-(r-n));return n=r+o,e.setTimeout((function(){t(r+o)}),o)},m=function(e){clearTimeout(e)})}();var w="string"===o(document.createElement("div").textContent)?"textContent":"innerText";function y(e,k){"object"===o(e)&&e.nodeType===t&&(k=e,e=document.body),e||(e=document.body);var O,M,time,L,S,A,F,i,C,j=this,z=h({},y.defaults,k||{}),P={},H=[],D=100,K=[],I=z.threshold,N=0,W=f()-I,Y=[],T=[],R="fps"===z.show;function B(e,t,n,r){return M[0|e][Math.round(Math.min((t-n)/(r-n)*D,D))]}function X(){P.legend.fps!==R&&(P.legend.fps=R,P.legend[w]=R?"FPS":"ms"),F=R?j.fps:j.duration,P.count[w]=F>999?"999+":F.toFixed(F>99?0:z.decimals)}function J(){if(time=f(),W<time-z.threshold&&(j.fps-=j.fps/Math.max(1,60*z.smoothing/z.interval),j.duration=1e3/j.fps),function(){for(i=z.history;i--;)Y[i]=0===i?j.fps:Y[i-1],T[i]=0===i?j.duration:T[i-1]}(),X(),z.heat){if(K.length)for(i=K.length;i--;)K[i].el.style[O[K[i].name].heatOn]=R?B(O[K[i].name].heatmap,j.fps,0,z.maxFps):B(O[K[i].name].heatmap,j.duration,z.threshold,0);if(P.graph&&O.column.heatOn)for(i=H.length;i--;)H[i].style[O.column.heatOn]=R?B(O.column.heatmap,Y[i],0,z.maxFps):B(O.column.heatmap,T[i],z.threshold,0)}if(P.graph)for(C=0;C<z.history;C++)H[C].style.height=(R?Y[C]?Math.round(A/z.maxFps*Math.min(Y[C],z.maxFps)):0:T[C]?Math.round(A/z.threshold*Math.min(T[C],z.threshold)):0)+"px"}function V(){z.interval<20?(L=v(V),J()):(L=setTimeout(V,z.interval),S=v(J))}function Z(e){(e=e||window.event).preventDefault?(e.preventDefault(),e.stopPropagation()):(e.returnValue=!1,e.cancelBubble=!0),j.toggle()}function _(){z.toggleOn&&l(P.container,z.toggleOn,Z,1),e.removeChild(P.container)}function G(){for(var t in P.container&&_(),function(){if(O=y.theme[z.theme],!(M=O.compiledHeatmaps||[]).length&&O.heatmaps.length){for(C=0;C<O.heatmaps.length;C++)for(M[C]=[],i=0;i<=D;i++)M[C][i]=(e=.33/D*i,s=O.heatmaps[C].saturation,t=O.heatmaps[C].lightness,n=void 0,g=void 0,b=void 0,r=void 0,o=void 0,c=void 0,h=void 0,0==(r=t<=.5?t*(1+s):t+s-t*s)?"#000":(h=r*((r-(o=2*t-r))/r)*((e*=6)-(c=Math.floor(e))),0===c||6===c?(n=r,g=o+h,b=o):1===c?(n=r-h,g=r,b=o):2===c?(n=o,g=r,b=o+h):3===c?(n=o,g=r-h,b=r):4===c?(n=o+h,g=o,b=r):(n=r,g=o,b=r-h),"#"+d(n)+d(g)+d(b)));O.compiledHeatmaps=M}var e,s,t,n,g,b,r,o,c,h}(),P.container=r(n("div"),O.container),P.count=P.container.appendChild(r(n("div"),O.count)),P.legend=P.container.appendChild(r(n("div"),O.legend)),P.graph=z.graph?P.container.appendChild(r(n("div"),O.graph)):0,K.length=0,P)P[t]&&O[t].heatOn&&K.push({name:t,el:P[t]});if(H.length=0,P.graph)for(P.graph.style.width=z.history*O.column.width+(z.history-1)*O.column.spacing+"px",i=0;i<z.history;i++)H[i]=P.graph.appendChild(r(n("div"),O.column)),H[i].style.position="absolute",H[i].style.bottom=0,H[i].style.right=i*O.column.width+i*O.column.spacing+"px",H[i].style.width=O.column.width+"px",H[i].style.height="0px";Q(),X(),e.appendChild(P.container),P.graph&&(A=P.graph.clientHeight),z.toggleOn&&("click"===z.toggleOn&&(P.container.style.cursor="pointer"),l(P.container,z.toggleOn,Z))}function Q(){r(P.container,z)}j.options=z,j.fps=0,j.duration=0,j.isPaused=0,j.tickStart=function(){N=f()},j.tick=function(){time=f(),I+=(time-W-I)/z.smoothing,j.fps=1e3/I,j.duration=N<W?I:time-N,W=time},j.pause=function(){return L&&(j.isPaused=1,clearTimeout(L),m(L),m(S),L=S=0),j},j.resume=function(){return L||(j.isPaused=0,V()),j},j.set=function(e,t){return z[e]=t,R="fps"===z.show,-1!==c(e,x)&&G(),-1!==c(e,E)&&Q(),j},j.showDuration=function(){return j.set("show","ms"),j},j.showFps=function(){return j.set("show","fps"),j},j.toggle=function(){return j.set("show",R?"ms":"fps"),j},j.hide=function(){return j.pause(),P.container.style.display="none",j},j.show=function(){return j.resume(),P.container.style.display="block",j},j.destroy=function(){j.pause(),_(),j.tick=j.tickStart=function(){}},G(),V()}y.extend=h,window.FPSMeter=y,y.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var x=["toggleOn","theme","heat","graph","history"],E=["position","zIndex","left","top","right","bottom","margin"]}(window),function(e,t,n){"use strict";t.theme={};var base=t.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};t.theme.dark=t.extend({},base,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),t.theme.light=t.extend({},base,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),t.theme.colorful=t.extend({},base,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),t.theme.transparent=t.extend({},base,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter)},181:function(e,t,n){var r=n(182),o=n(184),c=n(163),h=n(178),d=n(179);e.exports=function(e,t){var n=t||{};void 0===n.noScroll&&(n.noScroll=n.preventDefault);var f={view:c(new Float32Array(16)),projection:c(new Float32Array(16)),center:new Float32Array(n.center||3),theta:n.theta||0,phi:n.phi||0,distance:Math.log(n.distance||10),eye:new Float32Array(3),up:new Float32Array(n.up||[0,1,0]),fovy:n.fovy||Math.PI/4,near:void 0!==n.near?n.near:.01,far:void 0!==n.far?n.far:1e3,noScroll:void 0!==n.noScroll&&n.noScroll,flipY:!!n.flipY,dtheta:0,dphi:0,rotationSpeed:void 0!==n.rotationSpeed?n.rotationSpeed:1,zoomSpeed:void 0!==n.zoomSpeed?n.zoomSpeed:1,renderOnDirty:void 0!==typeof n.renderOnDirty&&!!n.renderOnDirty},element=n.element,m=void 0!==n.damping?n.damping:.9,v=new Float32Array([1,0,0]),w=new Float32Array([0,0,1]),y=Math.log("minDistance"in n?n.minDistance:.1),x=Math.log("maxDistance"in n?n.maxDistance:1e3),E=0,k=0,O=0;if(l&&!1!==n.mouse){var source=element||e._gl.canvas;function M(){return element?element.offsetHeight:window.innerHeight}r(source,(function(e,t,n){if(1&e){var r=(t-k)/(element?element.offsetWidth:window.innerWidth),o=(n-O)/M();f.dtheta+=4*f.rotationSpeed*r,f.dphi+=4*f.rotationSpeed*o,f.dirty=!0}k=t,O=n})),o(source,(function(e,t){E+=t/M()*f.zoomSpeed,f.dirty=!0}),n.noScroll)}function L(e){var t=e*m;return Math.abs(t)<.1?0:(f.dirty=!0,t)}function S(e,t,n){return Math.min(Math.max(e,t),n)}f.dirty=!0;var A=e({context:Object.assign({},f,{dirty:function(){return f.dirty},projection:function(e){return h(f.projection,f.fovy,e.viewportWidth/e.viewportHeight,f.near,f.far),f.flipY&&(f.projection[5]*=-1),f.projection}}),uniforms:Object.keys(f).reduce((function(t,n){return t[n]=e.context(n),t}),{})});function F(e,t){void 0!==F.dirty&&(f.dirty=F.dirty||f.dirty,F.dirty=void 0),e&&t&&(f.dirty=!0),f.renderOnDirty&&!f.dirty||(t||(t=e,e={}),function(e){Object.keys(e).forEach((function(t){f[t]=e[t]}));var t=f.center,n=f.eye,r=f.up,o=f.dtheta,c=f.dphi;f.theta+=o,f.phi=S(f.phi+c,-Math.PI/2,Math.PI/2),f.distance=S(f.distance+E,y,x),f.dtheta=L(o),f.dphi=L(c),E=L(E);for(var h=f.theta,l=f.phi,m=Math.exp(f.distance),k=m*Math.sin(h)*Math.cos(l),O=m*Math.cos(h)*Math.cos(l),M=m*Math.sin(l),i=0;i<3;++i)n[i]=t[i]+k*w[i]+O*v[i]+M*r[i];d(f.view,n,t,r)}(e),A(t),f.dirty=!1)}return Object.keys(f).forEach((function(e){F[e]=f[e]})),F};var l="undefined"!=typeof window},182:function(e,t,n){"use strict";e.exports=function(element,e){e||(e=element,element=window);var t=0,n=0,o=0,c={shift:!1,alt:!1,control:!1,meta:!1},h=!1;function d(e){var t=!1;return"altKey"in e&&(t=t||e.altKey!==c.alt,c.alt=!!e.altKey),"shiftKey"in e&&(t=t||e.shiftKey!==c.shift,c.shift=!!e.shiftKey),"ctrlKey"in e&&(t=t||e.ctrlKey!==c.control,c.control=!!e.ctrlKey),"metaKey"in e&&(t=t||e.metaKey!==c.meta,c.meta=!!e.metaKey),t}function l(h,l){var f=r.x(l),m=r.y(l);"buttons"in l&&(h=0|l.buttons),(h!==t||f!==n||m!==o||d(l))&&(t=0|h,n=f||0,o=m||0,e&&e(t,n,o,c))}function f(e){l(0,e)}function m(){(t||n||o||c.shift||c.alt||c.meta||c.control)&&(n=o=0,t=0,c.shift=c.alt=c.control=c.meta=!1,e&&e(0,0,0,c))}function v(r){d(r)&&e&&e(t,n,o,c)}function w(e){0===r.buttons(e)?l(0,e):l(t,e)}function y(e){l(t|r.buttons(e),e)}function x(e){l(t&~r.buttons(e),e)}function E(){h||(h=!0,element.addEventListener("mousemove",w),element.addEventListener("mousedown",y),element.addEventListener("mouseup",x),element.addEventListener("mouseleave",f),element.addEventListener("mouseenter",f),element.addEventListener("mouseout",f),element.addEventListener("mouseover",f),element.addEventListener("blur",m),element.addEventListener("keyup",v),element.addEventListener("keydown",v),element.addEventListener("keypress",v),element!==window&&(window.addEventListener("blur",m),window.addEventListener("keyup",v),window.addEventListener("keydown",v),window.addEventListener("keypress",v)))}E();var k={element:element};return Object.defineProperties(k,{enabled:{get:function(){return h},set:function(e){e?E():function(){if(!h)return;h=!1,element.removeEventListener("mousemove",w),element.removeEventListener("mousedown",y),element.removeEventListener("mouseup",x),element.removeEventListener("mouseleave",f),element.removeEventListener("mouseenter",f),element.removeEventListener("mouseout",f),element.removeEventListener("mouseover",f),element.removeEventListener("blur",m),element.removeEventListener("keyup",v),element.removeEventListener("keydown",v),element.removeEventListener("keypress",v),element!==window&&(window.removeEventListener("blur",m),window.removeEventListener("keyup",v),window.removeEventListener("keydown",v),window.removeEventListener("keypress",v))}()},enumerable:!0},buttons:{get:function(){return t},enumerable:!0},x:{get:function(){return n},enumerable:!0},y:{get:function(){return o},enumerable:!0},mods:{get:function(){return c},enumerable:!0}}),k};var r=n(183)},183:function(e,t,n){"use strict";function r(e){return e.target||e.srcElement||window}t.buttons=function(e){if("object"==typeof e){if("buttons"in e)return e.buttons;if("which"in e){if(2===(b=e.which))return 4;if(3===b)return 2;if(b>0)return 1<<b-1}else if("button"in e){var b;if(1===(b=e.button))return 4;if(2===b)return 2;if(b>=0)return 1<<b}}return 0},t.element=r,t.x=function(e){if("object"==typeof e){if("offsetX"in e)return e.offsetX;var t=r(e).getBoundingClientRect();return e.clientX-t.left}return 0},t.y=function(e){if("object"==typeof e){if("offsetY"in e)return e.offsetY;var t=r(e).getBoundingClientRect();return e.clientY-t.top}return 0}},184:function(e,t,n){"use strict";var r=n(185);e.exports=function(element,e,t){"function"==typeof element&&(t=!!e,e=element,element=window);var n=r("ex",element),o=function(r){t&&r.preventDefault();var o=r.deltaX||0,c=r.deltaY||0,h=r.deltaZ||0,d=1;switch(r.deltaMode){case 1:d=n;break;case 2:d=window.innerHeight}if(c*=d,h*=d,(o*=d)||c||h)return e(o,c,h,r)};return element.addEventListener("wheel",o),o}},185:function(e,t,n){"use strict";var r=n(186);e.exports=d;var o=h("in",document.body);function c(element,e){var t=r(getComputedStyle(element).getPropertyValue(e));return t[0]*d(t[1],element)}function h(e,element){var t=document.createElement("div");t.style.height="128"+e,element.appendChild(t);var n=c(t,"height")/128;return element.removeChild(t),n}function d(e,element){if(!e)return null;switch(element=element||document.body,e=(e+""||"px").trim().toLowerCase(),element!==window&&element!==document||(element=document.body),e){case"%":return element.clientHeight/100;case"ch":case"ex":return h(e,element);case"em":return c(element,"font-size");case"rem":return c(document.body,"font-size");case"vw":return window.innerWidth/100;case"vh":return window.innerHeight/100;case"vmin":return Math.min(window.innerWidth,window.innerHeight)/100;case"vmax":return Math.max(window.innerWidth,window.innerHeight)/100;case"in":return o;case"cm":return o/2.54;case"mm":return o/25.4;case"pt":return o/72;case"pc":return o/6;case"px":return 1}var t=r(e);if(!isNaN(t[0])&&t[1]){var n=d(t[1],element);return"number"==typeof n?t[0]*n:null}return null}},186:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var n=parseFloat(e,10);return t[0]=n,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},236:function(e,t){e.exports=function(e){"string"==typeof e&&(e=[e]);for(var t=[].slice.call(arguments,1),n=[],i=0;i<e.length-1;i++)n.push(e[i],t[i]||"");return n.push(e[i]),n.join("")}},299:function(e,t,n){var r=n(300);function o(e){for(var t=e.positions,n=e.cells,r=[],o=[],c={},h=0,i=0;i<n.length;i++){var d=n[i],l=d[0],f=d[1],m=d[2],v=t[l],w=t[f],y=t[m],a=A(v,w),b=A(w,y),x=A(y,v),E=o.indexOf(a);-1===E&&(E=h++,o.push(a));var k=o.indexOf(b);-1===k&&(k=h++,o.push(b));var O=o.indexOf(x);-1===O&&(O=h++,o.push(x));var M=o.indexOf(v);-1===M&&(M=h++,o.push(v));var L=o.indexOf(w);-1===L&&(L=h++,o.push(w));var S=o.indexOf(y);-1===S&&(S=h++,o.push(y)),r.push([M,E,O]),r.push([L,k,E]),r.push([S,O,k]),r.push([E,k,O])}return{cells:r,positions:o};function A(a,b){var e=function(a,b){return[(a[0]+b[0])/2,(a[1]+b[1])/2,(a[2]+b[2])/2]}(a,b),t=function(e){return e[0].toPrecision(6)+","+e[1].toPrecision(6)+","+e[2].toPrecision(6)}(e),n=c[t];return n||(c[t]=e)}}e.exports=function(e){e=0|+e;var t=[],n=[],c=.5+Math.sqrt(5)/2;t.push([-1,+c,0]),t.push([1,+c,0]),t.push([-1,-c,0]),t.push([1,-c,0]),t.push([0,-1,+c]),t.push([0,1,+c]),t.push([0,-1,-c]),t.push([0,1,-c]),t.push([+c,0,-1]),t.push([+c,0,1]),t.push([-c,0,-1]),t.push([-c,0,1]),n.push([0,11,5]),n.push([0,5,1]),n.push([0,1,7]),n.push([0,7,10]),n.push([0,10,11]),n.push([1,5,9]),n.push([5,11,4]),n.push([11,10,2]),n.push([10,7,6]),n.push([7,1,8]),n.push([3,9,4]),n.push([3,4,2]),n.push([3,2,6]),n.push([3,6,8]),n.push([3,8,9]),n.push([4,9,5]),n.push([2,4,11]),n.push([6,2,10]),n.push([8,6,7]),n.push([9,8,1]);var h={cells:n,positions:t};for(;e-- >0;)h=o(h);t=h.positions;for(var i=0;i<t.length;i++)r(t[i]);return h}},300:function(e,t){e.exports=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n]*e[n];if(0===(t=Math.sqrt(t)))return Array.apply(null,new Array(e.length)).map(Number.prototype.valueOf,0);for(n=0;n<e.length;n++)e[n]/=t;return e}},301:function(e,t){t.vertexNormals=function(e,t,n){for(var r=t.length,o=new Array(r),c=void 0===n?1e-6:n,i=0;i<r;++i)o[i]=[0,0,0];for(i=0;i<e.length;++i)for(var h=e[i],p=0,d=h[h.length-1],l=h[0],f=0;f<h.length;++f){p=d,d=l,l=h[(f+1)%h.length];for(var m=t[p],v=t[d],w=t[l],y=new Array(3),x=0,E=new Array(3),k=0,O=0;O<3;++O)y[O]=m[O]-v[O],x+=y[O]*y[O],E[O]=w[O]-v[O],k+=E[O]*E[O];if(x*k>c){var M=o[d],L=1/Math.sqrt(x*k);for(O=0;O<3;++O){var u=(O+1)%3,S=(O+2)%3;M[O]+=L*(E[u]*y[S]-E[S]*y[u])}}}for(i=0;i<r;++i){M=o[i];var A=0;for(O=0;O<3;++O)A+=M[O]*M[O];if(A>c)for(L=1/Math.sqrt(A),O=0;O<3;++O)M[O]*=L;else for(O=0;O<3;++O)M[O]=0}return o},t.faceNormals=function(e,t,n){for(var r=e.length,o=new Array(r),c=void 0===n?1e-6:n,i=0;i<r;++i){for(var h=e[i],d=new Array(3),l=0;l<3;++l)d[l]=t[h[l]];var f=new Array(3),m=new Array(3);for(l=0;l<3;++l)f[l]=d[1][l]-d[0][l],m[l]=d[2][l]-d[0][l];var v=new Array(3),w=0;for(l=0;l<3;++l){var u=(l+1)%3,y=(l+2)%3;v[l]=f[u]*m[y]-f[y]*m[u],w+=v[l]*v[l]}w=w>c?1/Math.sqrt(w):0;for(l=0;l<3;++l)v[l]*=w;o[i]=v}return o}}}]);