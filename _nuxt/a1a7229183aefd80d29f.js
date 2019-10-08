(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{301:function(n,o,e){"use strict";e.r(o),o.default="#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)\n\nprecision highp float;\n\nattribute vec3 position;\nattribute vec3 vertexNormals;\n\nuniform mat4  projection;\nuniform mat4  view;\nuniform mat4  rotationY;\nuniform float time;\n\nvarying vec3 vVertexNormals;\nvarying vec3 vColor;\n\nvoid main () {\n  vVertexNormals = vertexNormals;\n\n  vec3 p = position;\n  float noise = snoise4(vec4(position, time));\n\n  p += (vertexNormals * (noise / 5.0)); \n\n  vColor = mix(vec3(0.0, 0.2, 0.4), vec3(0.0, 1.0, 1.0), (noise + 1.0) / 2.0);\n\n  gl_Position = projection * view * vec4(p, 1.0);\n}\n"}}]);