(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(n,t,e){"use strict";e.r(t);var o=e(156),r=e(157),c=e(171),l=e.n(c),f=e(190),d=e.n(f),m=e(191),v=e.n(m),h=function(){function n(canvas){Object(o.a)(this,n),this.regl=l()(canvas),this.camera=v()(this.regl,{center:[0,2.5,0],distance:30}),this.init()}return Object(r.a)(n,[{key:"init",value:function(){var n=this;this.regl.frame((function(){n.camera((function(){n.regl.clear({depth:1,color:[.75,.85,.8,1]}),n.draw()}))}))}},{key:"draw",value:function(){console.log("draw:05"),this.regl({vert:"\n        precision mediump float;\n        attribute vec3 position;\n        uniform mat4 projection;\n        uniform mat4 view;\n        void main () {\n          gl_Position = projection * view * vec4(position, 1.0);\n        }\n      ",frag:"\n        precision mediump float;\n        void main () {\n          gl_FragColor = vec4(0.3, 0.4, 0.3, 1.0);\n        }\n      ",attributes:{position:d.a.positions},elements:d.a.cells})()}},{key:"destroy",value:function(){this.regl&&this.regl.destroy()}}]),n}();t.default=h}}]);