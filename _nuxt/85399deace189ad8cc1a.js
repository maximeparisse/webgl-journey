(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{164:function(t,n){t.exports=1e-6},165:function(t,n){t.exports=function(){var t=new Float32Array(3);return t[0]=0,t[1]=0,t[2]=0,t}},166:function(t,n){t.exports=function(t,n,e){var r=new Float32Array(3);return r[0]=t,r[1]=n,r[2]=e,r}},167:function(t,n){t.exports=function(t,a){var n=a[0],e=a[1],r=a[2],o=n*n+e*e+r*r;o>0&&(o=1/Math.sqrt(o),t[0]=a[0]*o,t[1]=a[1]*o,t[2]=a[2]*o);return t}},168:function(t,n){t.exports=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},169:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]-b[0],t[1]=a[1]-b[1],t[2]=a[2]-b[2],t}},170:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]*b[0],t[1]=a[1]*b[1],t[2]=a[2]*b[2],t}},171:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]/b[0],t[1]=a[1]/b[1],t[2]=a[2]/b[2],t}},172:function(t,n){t.exports=function(a,b){var t=b[0]-a[0],n=b[1]-a[1],e=b[2]-a[2];return Math.sqrt(t*t+n*n+e*e)}},173:function(t,n){t.exports=function(a,b){var t=b[0]-a[0],n=b[1]-a[1],e=b[2]-a[2];return t*t+n*n+e*e}},174:function(t,n){t.exports=function(a){var t=a[0],n=a[1],e=a[2];return Math.sqrt(t*t+n*n+e*e)}},175:function(t,n){t.exports=function(a){var t=a[0],n=a[1],e=a[2];return t*t+n*n+e*e}},176:function(t,n){!function(t,n){"use strict";function e(t){return document.createElement(t)}function r(element,t){for(var n in t)try{element.style[n]=t[n]}catch(t){}return element}function o(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof t}function c(t,n){if("array"!==o(n))return-1;if(n.indexOf)return n.indexOf(t);for(var i=0,e=n.length;i<e;i++)if(n[i]===t)return i;return-1}function f(){var t=arguments;for(var n in t[1])if(t[1].hasOwnProperty(n))switch(o(t[1][n])){case"object":t[0][n]=f({},t[0][n],t[1][n]);break;case"array":t[0][n]=t[1][n].slice(0);break;default:t[0][n]=t[1][n]}return t.length>2?f.apply(null,[t[0]].concat(Array.prototype.slice.call(t,2))):t[0]}function l(t){return 1===(t=Math.round(255*t).toString(16)).length?"0"+t:t}function h(element,t,n,e){element.addEventListener?element[e?"removeEventListener":"addEventListener"](t,n,!1):element.attachEvent&&element[e?"detachEvent":"attachEvent"]("on"+t,n)}var d;!function(){var n=t.performance;if(n&&(n.now||n.webkitNow)){var e=n.now?"now":"webkitNow";d=n[e].bind(n)}else d=function(){return+new Date}}();var m=t.cancelAnimationFrame||t.cancelRequestAnimationFrame,x=t.requestAnimationFrame;!function(){for(var n=["moz","webkit","o"],e=0,i=0,r=n.length;i<r&&!m;++i)m=t[n[i]+"CancelAnimationFrame"]||t[n[i]+"CancelRequestAnimationFrame"],x=m&&t[n[i]+"RequestAnimationFrame"];m||(x=function(n){var r=d(),o=Math.max(0,16-(r-e));return e=r+o,t.setTimeout((function(){n(r+o)}),o)},m=function(t){clearTimeout(t)})}();var v="string"===o(document.createElement("div").textContent)?"textContent":"innerText";function y(t,k){"object"===o(t)&&t.nodeType===n&&(k=t,t=document.body),t||(t=document.body);var O,E,time,S,z,A,C,i,F,L=this,D=f({},y.defaults,k||{}),j={},P=[],T=100,H=[],I=D.threshold,R=0,N=d()-I,B=[],J=[],V="fps"===D.show;function X(t,n,e,r){return E[0|t][Math.round(Math.min((n-e)/(r-e)*T,T))]}function G(){j.legend.fps!==V&&(j.legend.fps=V,j.legend[v]=V?"FPS":"ms"),C=V?L.fps:L.duration,j.count[v]=C>999?"999+":C.toFixed(C>99?0:D.decimals)}function Q(){if(time=d(),N<time-D.threshold&&(L.fps-=L.fps/Math.max(1,60*D.smoothing/D.interval),L.duration=1e3/L.fps),function(){for(i=D.history;i--;)B[i]=0===i?L.fps:B[i-1],J[i]=0===i?L.duration:J[i-1]}(),G(),D.heat){if(H.length)for(i=H.length;i--;)H[i].el.style[O[H[i].name].heatOn]=V?X(O[H[i].name].heatmap,L.fps,0,D.maxFps):X(O[H[i].name].heatmap,L.duration,D.threshold,0);if(j.graph&&O.column.heatOn)for(i=P.length;i--;)P[i].style[O.column.heatOn]=V?X(O.column.heatmap,B[i],0,D.maxFps):X(O.column.heatmap,J[i],D.threshold,0)}if(j.graph)for(F=0;F<D.history;F++)P[F].style.height=(V?B[F]?Math.round(A/D.maxFps*Math.min(B[F],D.maxFps)):0:J[F]?Math.round(A/D.threshold*Math.min(J[F],D.threshold)):0)+"px"}function W(){D.interval<20?(S=x(W),Q()):(S=setTimeout(W,D.interval),z=x(Q))}function Y(t){(t=t||window.event).preventDefault?(t.preventDefault(),t.stopPropagation()):(t.returnValue=!1,t.cancelBubble=!0),L.toggle()}function Z(){D.toggleOn&&h(j.container,D.toggleOn,Y,1),t.removeChild(j.container)}function K(){for(var n in j.container&&Z(),function(){if(O=y.theme[D.theme],!(E=O.compiledHeatmaps||[]).length&&O.heatmaps.length){for(F=0;F<O.heatmaps.length;F++)for(E[F]=[],i=0;i<=T;i++)E[F][i]=(t=.33/T*i,s=O.heatmaps[F].saturation,n=O.heatmaps[F].lightness,e=void 0,g=void 0,b=void 0,r=void 0,o=void 0,c=void 0,f=void 0,0==(r=n<=.5?n*(1+s):n+s-n*s)?"#000":(f=r*((r-(o=2*n-r))/r)*((t*=6)-(c=Math.floor(t))),0===c||6===c?(e=r,g=o+f,b=o):1===c?(e=r-f,g=r,b=o):2===c?(e=o,g=r,b=o+f):3===c?(e=o,g=r-f,b=r):4===c?(e=o+f,g=o,b=r):(e=r,g=o,b=r-f),"#"+l(e)+l(g)+l(b)));O.compiledHeatmaps=E}var t,s,n,e,g,b,r,o,c,f}(),j.container=r(e("div"),O.container),j.count=j.container.appendChild(r(e("div"),O.count)),j.legend=j.container.appendChild(r(e("div"),O.legend)),j.graph=D.graph?j.container.appendChild(r(e("div"),O.graph)):0,H.length=0,j)j[n]&&O[n].heatOn&&H.push({name:n,el:j[n]});if(P.length=0,j.graph)for(j.graph.style.width=D.history*O.column.width+(D.history-1)*O.column.spacing+"px",i=0;i<D.history;i++)P[i]=j.graph.appendChild(r(e("div"),O.column)),P[i].style.position="absolute",P[i].style.bottom=0,P[i].style.right=i*O.column.width+i*O.column.spacing+"px",P[i].style.width=O.column.width+"px",P[i].style.height="0px";U(),G(),t.appendChild(j.container),j.graph&&(A=j.graph.clientHeight),D.toggleOn&&("click"===D.toggleOn&&(j.container.style.cursor="pointer"),h(j.container,D.toggleOn,Y))}function U(){r(j.container,D)}L.options=D,L.fps=0,L.duration=0,L.isPaused=0,L.tickStart=function(){R=d()},L.tick=function(){time=d(),I+=(time-N-I)/D.smoothing,L.fps=1e3/I,L.duration=R<N?I:time-R,N=time},L.pause=function(){return S&&(L.isPaused=1,clearTimeout(S),m(S),m(z),S=z=0),L},L.resume=function(){return S||(L.isPaused=0,W()),L},L.set=function(t,n){return D[t]=n,V="fps"===D.show,-1!==c(t,w)&&K(),-1!==c(t,M)&&U(),L},L.showDuration=function(){return L.set("show","ms"),L},L.showFps=function(){return L.set("show","fps"),L},L.toggle=function(){return L.set("show",V?"ms":"fps"),L},L.hide=function(){return L.pause(),j.container.style.display="none",L},L.show=function(){return L.resume(),j.container.style.display="block",L},L.destroy=function(){L.pause(),Z(),L.tick=L.tickStart=function(){}},K(),W()}y.extend=f,window.FPSMeter=y,y.defaults={interval:100,smoothing:10,show:"fps",toggleOn:"click",decimals:1,maxFps:60,threshold:100,position:"absolute",zIndex:10,left:"5px",top:"5px",right:"auto",bottom:"auto",margin:"0 0 0 0",theme:"dark",heat:0,graph:0,history:20};var w=["toggleOn","theme","heat","graph","history"],M=["position","zIndex","left","top","right","bottom","margin"]}(window),function(t,n,e){"use strict";n.theme={};var base=n.theme.base={heatmaps:[],container:{heatOn:null,heatmap:null,padding:"5px",minWidth:"95px",height:"30px",lineHeight:"30px",textAlign:"right",textShadow:"none"},count:{heatOn:null,heatmap:null,position:"absolute",top:0,right:0,padding:"5px 10px",height:"30px",fontSize:"24px",fontFamily:"Consolas, Andale Mono, monospace",zIndex:2},legend:{heatOn:null,heatmap:null,position:"absolute",top:0,left:0,padding:"5px 10px",height:"30px",fontSize:"12px",lineHeight:"32px",fontFamily:"sans-serif",textAlign:"left",zIndex:2},graph:{heatOn:null,heatmap:null,position:"relative",boxSizing:"padding-box",MozBoxSizing:"padding-box",height:"100%",zIndex:1},column:{width:4,spacing:1,heatOn:null,heatmap:null}};n.theme.dark=n.extend({},base,{heatmaps:[{saturation:.8,lightness:.8}],container:{background:"#222",color:"#fff",border:"1px solid #1a1a1a",textShadow:"1px 1px 0 #222"},count:{heatOn:"color"},column:{background:"#3f3f3f"}}),n.theme.light=n.extend({},base,{heatmaps:[{saturation:.5,lightness:.5}],container:{color:"#666",background:"#fff",textShadow:"1px 1px 0 rgba(255,255,255,.5), -1px -1px 0 rgba(255,255,255,.5)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},count:{heatOn:"color"},column:{background:"#eaeaea"}}),n.theme.colorful=n.extend({},base,{heatmaps:[{saturation:.5,lightness:.6}],container:{heatOn:"backgroundColor",background:"#888",color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.2)",boxShadow:"0 0 0 1px rgba(0,0,0,.1)"},column:{background:"#777",backgroundColor:"rgba(0,0,0,.2)"}}),n.theme.transparent=n.extend({},base,{heatmaps:[{saturation:.8,lightness:.5}],container:{padding:0,color:"#fff",textShadow:"1px 1px 0 rgba(0,0,0,.5)"},count:{padding:"0 5px",height:"40px",lineHeight:"40px"},legend:{padding:"0 5px",height:"40px",lineHeight:"42px"},graph:{height:"40px"},column:{width:5,background:"#999",heatOn:"backgroundColor",opacity:.5}})}(window,FPSMeter)},179:function(t,n,e){t.exports={EPSILON:e(164),create:e(165),clone:e(180),angle:e(181),fromValues:e(166),copy:e(182),set:e(183),equals:e(184),exactEquals:e(185),add:e(186),subtract:e(169),sub:e(187),multiply:e(170),mul:e(188),divide:e(171),div:e(189),min:e(190),max:e(191),floor:e(192),ceil:e(193),round:e(194),scale:e(195),scaleAndAdd:e(196),distance:e(172),dist:e(197),squaredDistance:e(173),sqrDist:e(198),length:e(174),len:e(199),squaredLength:e(175),sqrLen:e(200),negate:e(201),inverse:e(202),normalize:e(167),dot:e(168),cross:e(203),lerp:e(204),random:e(205),transformMat4:e(206),transformMat3:e(207),transformQuat:e(208),rotateX:e(209),rotateY:e(210),rotateZ:e(211),forEach:e(212)}},180:function(t,n){t.exports=function(a){var t=new Float32Array(3);return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}},181:function(t,n,e){t.exports=function(a,b){var t=r(a[0],a[1],a[2]),n=r(b[0],b[1],b[2]);o(t,t),o(n,n);var e=c(t,n);return e>1?0:Math.acos(e)};var r=e(166),o=e(167),c=e(168)},182:function(t,n){t.exports=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t}},183:function(t,n){t.exports=function(t,n,e,r){return t[0]=n,t[1]=e,t[2]=r,t}},184:function(t,n,e){t.exports=function(a,b){var t=a[0],n=a[1],e=a[2],o=b[0],c=b[1],f=b[2];return Math.abs(t-o)<=r*Math.max(1,Math.abs(t),Math.abs(o))&&Math.abs(n-c)<=r*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(e-f)<=r*Math.max(1,Math.abs(e),Math.abs(f))};var r=e(164)},185:function(t,n){t.exports=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]}},186:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]+b[0],t[1]=a[1]+b[1],t[2]=a[2]+b[2],t}},187:function(t,n,e){t.exports=e(169)},188:function(t,n,e){t.exports=e(170)},189:function(t,n,e){t.exports=e(171)},190:function(t,n){t.exports=function(t,a,b){return t[0]=Math.min(a[0],b[0]),t[1]=Math.min(a[1],b[1]),t[2]=Math.min(a[2],b[2]),t}},191:function(t,n){t.exports=function(t,a,b){return t[0]=Math.max(a[0],b[0]),t[1]=Math.max(a[1],b[1]),t[2]=Math.max(a[2],b[2]),t}},192:function(t,n){t.exports=function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t}},193:function(t,n){t.exports=function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t}},194:function(t,n){t.exports=function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t}},195:function(t,n){t.exports=function(t,a,b){return t[0]=a[0]*b,t[1]=a[1]*b,t[2]=a[2]*b,t}},196:function(t,n){t.exports=function(t,a,b,n){return t[0]=a[0]+b[0]*n,t[1]=a[1]+b[1]*n,t[2]=a[2]+b[2]*n,t}},197:function(t,n,e){t.exports=e(172)},198:function(t,n,e){t.exports=e(173)},199:function(t,n,e){t.exports=e(174)},200:function(t,n,e){t.exports=e(175)},201:function(t,n){t.exports=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t}},202:function(t,n){t.exports=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t}},203:function(t,n){t.exports=function(t,a,b){var n=a[0],e=a[1],r=a[2],o=b[0],c=b[1],f=b[2];return t[0]=e*f-r*c,t[1]=r*o-n*f,t[2]=n*c-e*o,t}},204:function(t,n){t.exports=function(t,a,b,n){var e=a[0],r=a[1],o=a[2];return t[0]=e+n*(b[0]-e),t[1]=r+n*(b[1]-r),t[2]=o+n*(b[2]-o),t}},205:function(t,n){t.exports=function(t,n){n=n||1;var e=2*Math.random()*Math.PI,r=2*Math.random()-1,o=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(e)*o,t[1]=Math.sin(e)*o,t[2]=r*n,t}},206:function(t,n){t.exports=function(t,a,n){var e=a[0],r=a[1],o=a[2],c=n[3]*e+n[7]*r+n[11]*o+n[15];return c=c||1,t[0]=(n[0]*e+n[4]*r+n[8]*o+n[12])/c,t[1]=(n[1]*e+n[5]*r+n[9]*o+n[13])/c,t[2]=(n[2]*e+n[6]*r+n[10]*o+n[14])/c,t}},207:function(t,n){t.exports=function(t,a,n){var e=a[0],r=a[1],o=a[2];return t[0]=e*n[0]+r*n[3]+o*n[6],t[1]=e*n[1]+r*n[4]+o*n[7],t[2]=e*n[2]+r*n[5]+o*n[8],t}},208:function(t,n){t.exports=function(t,a,q){var n=a[0],e=a[1],r=a[2],o=q[0],c=q[1],f=q[2],l=q[3],h=l*n+c*r-f*e,d=l*e+f*n-o*r,m=l*r+o*e-c*n,x=-o*n-c*e-f*r;return t[0]=h*l+x*-o+d*-f-m*-c,t[1]=d*l+x*-c+m*-o-h*-f,t[2]=m*l+x*-f+h*-c-d*-o,t}},209:function(t,n){t.exports=function(t,a,b,n){var e=b[1],r=b[2],o=a[1]-e,c=a[2]-r,f=Math.sin(n),l=Math.cos(n);return t[0]=a[0],t[1]=e+o*l-c*f,t[2]=r+o*f+c*l,t}},210:function(t,n){t.exports=function(t,a,b,n){var e=b[0],r=b[2],o=a[0]-e,c=a[2]-r,f=Math.sin(n),l=Math.cos(n);return t[0]=e+c*f+o*l,t[1]=a[1],t[2]=r+c*l-o*f,t}},211:function(t,n){t.exports=function(t,a,b,n){var e=b[0],r=b[1],o=a[0]-e,c=a[1]-r,f=Math.sin(n),l=Math.cos(n);return t[0]=e+o*l-c*f,t[1]=r+o*f+c*l,t[2]=a[2],t}},212:function(t,n,e){t.exports=function(a,t,n,e,o,c){var i,f;t||(t=3);n||(n=0);f=e?Math.min(e*t+n,a.length):a.length;for(i=n;i<f;i+=t)r[0]=a[i],r[1]=a[i+1],r[2]=a[i+2],o(r,r,c),a[i]=r[0],a[i+1]=r[1],a[i+2]=r[2];return a};var r=e(165)()},223:function(t,n){t.exports=function(t){"string"==typeof t&&(t=[t]);for(var n=[].slice.call(arguments,1),e=[],i=0;i<t.length-1;i++)e.push(t[i],n[i]||"");return e.push(t[i]),e.join("")}},307:function(t,n){var e=["manifest","onDone","onProgress","onError"],r=["type","src","stream","credentials","parser"],o=["onData","onDone"],c=-1,f=0,l=1;function h(t){throw new Error("resl: "+t)}function d(object,t,n){Object.keys(object).forEach((function(param){t.indexOf(param)<0&&h('invalid parameter "'+param+'" in '+n)}))}function m(t,n){this.state=f,this.ready=!1,this.progress=0,this.name=t,this.cancel=n}t.exports=function(t){"object"==typeof t&&t||h("invalid or missing configuration"),d(t,e,"config");var n=t.manifest;function x(n,e){if(n in t){var r=t[n];return"function"!=typeof r&&h('invalid callback "'+n+'"'),r}return null}"object"==typeof n&&n||h("missing manifest");var v=x("onDone");v||h("missing onDone() callback");var y=x("onProgress"),w=x("onError"),M={},k=f;function O(t){var n=t.name,e=t.stream,r="binary"===t.type,o=t.parser,h=new XMLHttpRequest,d=null,x=new m(n,(function(){if(x.state===l||x.state===c)return;h.onreadystatechange=null,h.abort(),x.state=c}));function v(){if(!(h.readyState<2||x.state===l||x.state===c)){if(200!==h.status)return A('error loading resource "'+t.name+'"');var e;if(h.readyState>2&&x.state===f)if(e="binary"===t.type?h.response:h.responseText,o.data)try{d=o.data(e)}catch(t){return A(t)}else d=e;if(h.readyState>3&&x.state===f){if(o.done)try{d=o.done()}catch(t){return A(t)}x.state=l}M[n]=d,x.progress=.75*x.progress+.25,x.ready=t.stream&&!!d||x.state===l,C()}}return h.onreadystatechange=e?v:function(){4===h.readyState&&v()},r&&(h.responseType="arraybuffer"),t.credentials&&(h.withCredentials=!0),h.open("GET",t.src,!0),h.send(),x}function E(t,element){var n=t.name,e=t.parser,r=new m(n,(function(){if(r.state===l||r.state===c)return;r.state=c,k(),element.src=""})),o=element;function h(){if(r.state===f)if(e.data)try{o=e.data(element)}catch(t){return A(t)}else o=element}function d(t){h(),M[n]=o,t.lengthComputable?r.progress=Math.max(r.progress,t.loaded/t.total):r.progress=.75*r.progress+.25,C(n)}function x(){if(h(),r.state===f){if(e.done)try{o=e.done()}catch(t){return A(t)}r.state=l}r.progress=1,r.ready=!0,M[n]=o,k(),C("finish "+n)}function v(){A('error loading asset "'+n+'"')}if(t.stream&&element.addEventListener("progress",d),"image"===t.type)element.addEventListener("load",x);else{var y=!1,w=!1;element.addEventListener("loadedmetadata",(function(){w=!0,y&&x()})),element.addEventListener("canplay",(function(){y=!0,w&&x()}))}function k(){t.stream&&element.removeEventListener("progress",d),"image"===t.type?element.addEventListener("load",x):element.addEventListener("canplay",x),element.removeEventListener("error",v)}return element.addEventListener("error",v),t.credentials?element.crossOrigin="use-credentials":element.crossOrigin="anonymous",element.src=t.src,r}var S={text:O,binary:function(t){return O(t)},image:function(t){return E(t,document.createElement("img"))},video:function(t){return E(t,document.createElement("video"))},audio:function(t){return E(t,document.createElement("audio"))}},z=Object.keys(n).map((function(t){var e=n[t];function c(t,n){if(t in e.parser){var r=e.parser[t];return"function"!=typeof r&&h("invalid parser callback "+t+' for asset "'+t+'"'),r}return n}"string"==typeof e?e={src:e}:"object"==typeof e&&e||h('invalid asset definition "'+t+'"'),d(e,r,'asset "'+t+'"');var f,l,m,x,v={};return"parser"in e&&("function"==typeof e.parser?v={data:e.parser}:"object"==typeof e.parser&&e.parser?(d(v,o,'parser for asset "'+t+'"'),"onData"in v||h('missing onData callback for parser in asset "'+t+'"'),v={data:c("onData"),done:c("onDone")}):h('invalid parser for asset "'+t+'"')),{name:t,type:(f="type",l=Object.keys(S),m="text",x=m,f in e&&(x=e[f]),l.indexOf(x)<0&&h("invalid "+f+' "'+x+'" for asset "'+t+'", possible values: '+l),x),stream:!!e.stream,credentials:!!e.credentials,src:function(n,r,o){var c=o;return n in e?c=e[n]:r&&h("missing "+n+' for asset "'+t+'"'),"string"!=typeof c&&h("invalid "+n+' for asset "'+t+'", must be a string'),c}("src",!0,""),parser:v}})).map((function(t){return S[t.type](t)}));function A(t){k!==c&&k!==l&&(k=c,z.forEach((function(t){t.cancel()})),w?w("string"==typeof t?new Error("resl: "+t):t):console.error("resl error:",t))}function C(t){if(k!==c&&k!==l){var progress=0,n=0;z.forEach((function(t){t.ready&&(n+=1),progress+=t.progress})),n===z.length?(k=l,v(M)):y&&y(progress/z.length,t)}}0===z.length&&setTimeout((function(){C("done")}),1)}},308:function(t,n){function e(t){for(var n=[],i=0;i<t.length;i++)for(var e=t[i],r=0;r<e.length;r++)n.push(e[r]);return n}function r(t){var n=function(t){for(var n=t.wy/t.sy,e=t.wy/2,r=t.sy+1,c=Array(r),i=0;i<r;i++)c[i]=o(t,n*i-e);return c}(t),r=function(t){function n(n,e){return(t.sx+1)*e+n}for(var e=[],r=0;r<t.sx;r++)for(var o=0;o<t.sy;o++){var a=n(r+0,o+0),b=n(r+1,o+0),c=n(r+1,o+1),f=n(r+0,o+1);e.push([a,b,c]),e.push([c,f,a])}return e}(t),c=e(n),f=function(t,n){return n.map((function(p){return[p[0]/t.wx+.5,p[1]/t.wy+.5]}))}(t,c);return{positions:c,cells:r,uvs:f,vertexCount:(t.sx+1)*(t.sy+1)}}function o(t,n){for(var e=t.wx/2,r=t.wx/t.sx,o=t.sx+1,c=Array(o),i=0;i<o;i++)c[i]=[r*i-e,n];return c}function c(t){return{positions:t.positions,cells:t.cells,uvs:t.uvs,vertexCount:t.vertexCount}}function f(t,n){for(var e=Array(n),i=0;i<n;i++)e[i]=t.slice();return e}function l(t){var n=function(t){var n=t.size,e=t.segments,o=r({wx:n[0],wy:n[1],sx:e[0],sy:e[1]}),l=r({wx:n[2],wy:n[1],sx:e[2],sy:e[1]}),h=r({wx:n[0],wy:n[2],sx:e[0],sy:e[2]}),d=c(o),m=c(l),x=c(h);return o.positions=o.positions.map((function(p){return[p[0],p[1],n[2]/2]})),d.positions=d.positions.map((function(p){return[p[0],-p[1],-n[2]/2]})),l.positions=l.positions.map((function(p){return[n[0]/2,-p[1],p[0]]})),m.positions=m.positions.map((function(p){return[-n[0]/2,p[1],p[0]]})),h.positions=h.positions.map((function(p){return[p[0],n[1]/2,-p[1]]})),x.positions=x.positions.map((function(p){return[p[0],-n[1]/2,p[1]]})),o.normals=f([0,0,1],o.positions.length),d.normals=f([0,0,-1],d.positions.length),l.normals=f([1,0,0],l.positions.length),m.normals=f([-1,0,0],m.positions.length),h.normals=f([0,1,0],h.positions.length),x.normals=f([0,-1,0],x.positions.length),[o,d,l,m,h,x]}(t),o=n.map((function(t){return t.positions})),l=n.map((function(t){return t.uvs})),h=n.map((function(t){return t.normals})),d=function(t){var n=0;return t.map((function(t){var e=t.cells.map((function(t){return t.map((function(t){return t+n}))}));return n+=t.vertexCount,e}))}(n);return{positions:e(o),uvs:e(l),cells:e(d),normals:e(h)}}t.exports=function(t){return l(function(t){var n={size:[1,1,1],segments:[1,1,1]};return t&&(Array.isArray(t.size)?n.size=t.size:"number"==typeof t.size&&(n.size=[t.size,t.size,t.size]),Array.isArray(t.segments)?n.segments=t.segments:"number"==typeof t.segments&&(n.segments=[t.segments,t.segments,t.segments])),n}(t))}}}]);