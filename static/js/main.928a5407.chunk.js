(this["webpackJsonpblack-square"]=this["webpackJsonpblack-square"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c,r=n(0),a=n.n(r),i=n(4),u=n.n(i),o=(n(9),n(2)),s=(n(10),n(1));var l=function(){var e=Object(r.useState)(600),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(600),u=Object(o.a)(i,2),l=u[0],f=u[1],x=Object(r.useState)(new DOMMatrix),d=Object(o.a)(x,2),b=d[0],v=d[1],j=Object(r.useState)({x:0,y:0}),O=Object(o.a)(j,2),h=O[0],y=O[1],g=Object(r.useState)({x:-1,y:-1}),S=Object(o.a)(g,2),w=S[0],M=S[1],m=Object(r.useState)({x:-1,y:-1}),p=Object(o.a)(m,2),D=p[0],E=p[1],L=Object(r.useState)(!1),T=Object(o.a)(L,2),Y=T[0],k=T[1],C=Object(r.useRef)(null),X=Object(r.useRef)(null);Object(r.useEffect)((function(){a(window.innerWidth),f(window.innerHeight),k(!0)}),[]),Object(r.useEffect)((function(){C.current&&(c=C.current.createSVGMatrix(),C.current.addEventListener("wheel",F,{passive:!1})),document.addEventListener("gesturestart",(function(e){e.preventDefault()})),document.addEventListener("gesturechange",(function(e){e.preventDefault()})),document.addEventListener("gestureend",(function(e){e.preventDefault()})),document.addEventListener("DOMMouseScroll",(function(e){e.preventDefault()}))}),[Y]);var F=function(e){if(C.current&&X.current){e.preventDefault();var t=.03*e.deltaY*-1,n=function(e,t,n,c){var r,a=n.createSVGPoint();return a.x=e,a.y=t,{x:(a=a.matrixTransform(null===(r=c.getScreenCTM())||void 0===r?void 0:r.inverse())).x,y:a.y}}(e.clientX,e.clientY,C.current,X.current);c=(c=(c=c.translate(n.x,n.y)).scale(1+t)).translate(-n.x,-n.y);var r=C.current.createSVGTransform();r.setMatrix(c),v(r.matrix)}};return Object(s.jsx)("div",{className:"container",children:Y&&Object(s.jsx)("svg",{onContextMenu:function(e){return e.preventDefault()},onMouseDown:function(e){M({x:e.clientX,y:e.clientY}),E(h)},onTouchStart:function(e){var t=e.touches,n=(e.nativeEvent,t[0]);M({x:n.clientX,y:n.clientY}),E(h)},onTouchMove:function(e){var t=e.touches;if(w.x>-1&&w.y>-1){var n=t[0];y({x:D.x+-1*(n.clientX-w.x),y:D.y+-1*(n.clientY-w.y)})}},onMouseMove:function(e){w.x>-1&&w.y>-1&&y({x:D.x+(w.x-e.clientX),y:D.y+(w.y-e.clientY)})},onMouseUp:function(){w.x>-1&&w.y>-1&&M({x:-1,y:-1})},width:n,ref:C,height:l,viewBox:"".concat(h.x," ").concat(h.y," ").concat(n," ").concat(l),style:{background:"snow"},children:Object(s.jsxs)("g",{transform:"matrix(\n              ".concat(b.a,",\n              ").concat(b.b,",\n              ").concat(b.c,",\n              ").concat(b.d,",\n              ").concat(b.e,",\n              ").concat(b.f,"\n            )"),ref:X,children:[Object(s.jsx)("rect",{width:n-700,fill:"rgb(40, 40, 40)",height:l-200,x:100,y:100}),Object(s.jsx)("rect",{width:300,fill:"rgb(40, 40, 40)",height:300,x:n-500,y:100})]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};u.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),f()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.928a5407.chunk.js.map