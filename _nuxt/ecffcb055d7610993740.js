(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{236:function(t,n,e){var content=e(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(54).default)("6759f5ab",content,!0,{sourceMap:!1})},254:function(t,n,e){var map={"./01-triangle.png":255,"./02-rectangle.png":256,"./03-cube.png":257,"./04-regl.png":258,"./05-bunny.png":259,"./06-normals.png":260,"./07-look-at.png":261,"./08-deviceorientation.png":262,"./09-glslify.png":263,"./10-sphere.png":264,"./11-texture.png":265};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=254},255:function(t,n,e){t.exports=e.p+"img/9019f65.png"},256:function(t,n,e){t.exports=e.p+"img/68e0326.png"},257:function(t,n,e){t.exports=e.p+"img/a911669.png"},258:function(t,n,e){t.exports=e.p+"img/3859f3e.png"},259:function(t,n,e){t.exports=e.p+"img/209c824.png"},260:function(t,n,e){t.exports=e.p+"img/549dca8.png"},261:function(t,n,e){t.exports=e.p+"img/53de3f5.png"},262:function(t,n,e){t.exports=e.p+"img/d283ad9.png"},263:function(t,n,e){t.exports=e.p+"img/44c1007.png"},264:function(t,n,e){t.exports=e.p+"img/a4b3590.png"},265:function(t,n,e){t.exports=e.p+"img/a4b3590.png"},266:function(t,n,e){"use strict";var o=e(236);e.n(o).a},267:function(t,n,e){(t.exports=e(53)(!1)).push([t.i,'.posts{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:20px;grid-row-gap:20px;padding:20px;max-width:900px;margin:0 auto}.post{text-decoration:none;display:block}.post__picture-outer{position:relative}.post__picture-outer:before{content:"";display:block;width:100%;padding-top:100%}.post__picture{position:absolute;top:0;left:0;width:100%;height:100%;display:block;-o-object-fit:cover;object-fit:cover}.post__title{margin-top:10px;color:#000;font-size:1.6rem;line-height:1.2em}',""])},310:function(t,n,e){"use strict";e.r(n);var o={computed:{posts:function(){return this.$store.state.posts}}},r=(e(266),e(24)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"posts"},[t._l(t.posts,(function(n){return[o("nuxt-link",{key:n.attributes.slug,staticClass:"post",attrs:{to:"experiment/"+n.attributes.slug}},[o("div",{staticClass:"post__picture-outer"},[o("img",{staticClass:"post__picture",attrs:{src:e(254)("./"+n.attributes.slug+".png")}})]),t._v(" "),o("div",{staticClass:"post__title"},[t._v("\n        "+t._s(n.attributes.title)+" ("+t._s(n.attributes.date)+")\n      ")])])]}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);