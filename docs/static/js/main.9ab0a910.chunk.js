(this.webpackJsonpfizualizer=this.webpackJsonpfizualizer||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),u=a(9),o=a.n(u),l=(a(91),a(8)),i=a.n(l),s=a(12),p=a(13),f=a(43),m=a(44);!function(e){e.SET_DATABASE_URL="database/SET_DATABASE_URL",e.SET_LOADED="database/SET_LOADED",e.RESET="database/RESET"}(n||(n={}));var E,d=function(e,t){return{type:n.SET_DATABASE_URL,payload:{url:e,projectId:t}}},b=function(){return{type:n.SET_LOADED}},h=a(28),v={loaded:!1,connected:!1},O=a(36),j=Object(O.b)({database:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_DATABASE_URL:return Object(h.a)(Object(h.a)({},e),{},{loaded:!0,databaseUrl:t.payload.url,projectId:t.payload.projectId,connected:!0});case n.SET_LOADED:return Object(h.a)(Object(h.a)({},e),{},{loaded:!0});case n.RESET:return Object(h.a)(Object(h.a)({},v),{},{loaded:!0});default:return e}}}),k=Object(O.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=a(41),w=a.n(S),_="http://localhost:8938",y=function(){function e(){Object(f.a)(this,e)}return Object(m.a)(e,[{key:"setSettings",value:function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("".concat(_,"/firebase"),{url:t,projectId:a});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"getCollection",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.map((function(e){return{name:e}})),e.next=3,w.a.post("".concat(_,"/collection"),{path:a});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDocument",value:function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={path:t.map((function(e){return{name:e}}))},e.next=3,w.a.post("".concat(_,"/document"),a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getListCollection",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.post("".concat(_,"/list"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),g=function(){function e(){Object(f.a)(this,e)}return Object(m.a)(e,[{key:"getSavedUrl",value:function(){var e=localStorage.getItem("__database_url__");if(e)return JSON.parse(e)}},{key:"setSavedUrl",value:function(e,t){var a={hostname:e,projectId:t};localStorage.setItem("__database_url__",JSON.stringify(a))}},{key:"clearUrl",value:function(){localStorage.removeItem("__database_url__")}},{key:"clear",value:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.clearUrl(),k.dispatch({type:n.RESET});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"init",value:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getSavedUrl()){e.next=4;break}return k.dispatch(b()),e.abrupt("return");case 4:return e.next=6,(new y).setSettings(t.hostname,t.projectId);case 6:if(e.sent){e.next=9;break}return k.dispatch(b()),e.abrupt("return");case 9:k.dispatch(d(t.hostname,t.projectId));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setUrl",value:function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new y).setSettings(t,a);case 2:if(e.sent){e.next=5;break}return e.abrupt("return",!1);case 5:return this.setSavedUrl(t,a),k.dispatch(d(t,a)),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),C=a(144),x=a(148),T=a(149),D=a(34),L=a(79),U=a.n(L),I=function(){return c.a.createElement(C.a,null,c.a.createElement(x.a,null,c.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(U.a,null)),c.a.createElement(D.a,{variant:"h6"},"Fizualizer")))},N=a(50),A=a(163),R=a(150),M=a(151),P=a(152),z=a(161),B=a(154),J=a(155),V=a(156),W=function(e){var t=e.open,a=Object(r.useState)(!1),n=Object(p.a)(a,2),u=n[0],o=n[1],l=Object(r.useState)(""),f=Object(p.a)(l,2),m=f[0],E=f[1],d=Object(r.useState)(""),b=Object(p.a)(d,2),h=b[0],v=b[1],O=Object(r.useState)(!0),j=Object(p.a)(O,2),k=j[0],S=j[1],w=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,(new g).setUrl(h,m);case 3:t=e.sent,S(t),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(A.a,{open:t},c.a.createElement(R.a,null,"Database URL"),c.a.createElement(M.a,null,c.a.createElement(P.a,null,"Please provider the database URL to use this tool"),k&&c.a.createElement(P.a,null,"Invalid URL"),c.a.createElement(z.a,{autoFocus:!0,margin:"dense",label:"URL",type:"text",fullWidth:!0,value:h,onChange:function(e){return v(e.target.value)}}),c.a.createElement(z.a,{autoFocus:!0,margin:"dense",label:"ProjectId",type:"text",fullWidth:!0,value:m,onChange:function(e){return E(e.target.value)}})),c.a.createElement(B.a,null,u?c.a.createElement(J.a,{size:"1rem"}):c.a.createElement(V.a,{color:"primary",onClick:w},"Save")))},X=a(118);!function(e){e.COLLECTION="COLLECTION",e.DOCUMENT="DOCUMENT"}(E||(E={}));var F=a(53),H=a.n(F),$=a(153),q=a(119),G=a(157),K=function(e){e.path;var t=e.setPath,a=Object(r.useState)([]),n=Object(p.a)(a,2),u=n[0],o=n[1];return Object(r.useEffect)((function(){(new y).getListCollection().then((function(e){return o(e)}))}),[]),c.a.createElement($.a,null,u.map((function(e){return c.a.createElement(q.a,{key:e,button:!0},c.a.createElement(G.a,{onClick:function(){return t([e])}},e))})))},Q=a(52),Y=function(e){var t=e.path,a=e.setPath,n=Object(r.useState)([]),u=Object(p.a)(n,2),o=u[0],l=u[1],f=Object(r.useCallback)(Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new y).getCollection(t);case 2:a=e.sent,l(a.documents.map((function(e){return e.name})));case 4:case"end":return e.stop()}}),e)}))),[t]);return Object(r.useEffect)((function(){f()}),[f]),c.a.createElement("div",null,c.a.createElement(V.a,{onClick:f},"Refresh"),c.a.createElement($.a,null,o.map((function(e){return c.a.createElement(q.a,{key:e,button:!0,onClick:function(){return a([].concat(Object(Q.a)(t),[e]))}},c.a.createElement(G.a,null,e))}))))},Z=a(158),ee=function(e){var t=e.path,a=e.setPath,n=Object(r.useState)([]),u=Object(p.a)(n,2),o=u[0],l=u[1],f=Object(r.useState)([]),m=Object(p.a)(f,2),E=m[0],d=m[1],b=Object(r.useCallback)(Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new y).getDocument(t);case 2:a=e.sent,l(a.collections.map((function(e){return e.name}))),d(Object.keys(a.data).map((function(e){return{key:e,value:a.data[e].toString()}})));case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(r.useEffect)((function(){b()}),[b]),c.a.createElement("div",null,c.a.createElement(V.a,{onClick:b},"Refresh"),c.a.createElement($.a,{subheader:c.a.createElement(Z.a,{component:"div"},"Subcollections")},o.map((function(e){return c.a.createElement(q.a,{key:e,button:!0,onClick:function(){return a([].concat(Object(Q.a)(t),[e]))}},c.a.createElement(G.a,null,e))}))),c.a.createElement($.a,{subheader:c.a.createElement(Z.a,{component:"div"},"Data")},E.map((function(e){return c.a.createElement(q.a,{key:e.key},c.a.createElement(G.a,null,e.key,": ",e.value))}))))},te=function(e,t){return e.reduce((function(e,a,n){return n>t?e:"".concat(e,"/").concat(a)}),"")},ae=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],u=Object(r.useMemo)((function(){return a.length%2===0?E.DOCUMENT:E.COLLECTION}),[a]);return c.a.createElement(X.a,{elevation:1},c.a.createElement("div",{className:H.a.path},c.a.createElement("div",{onClick:function(){return n([])},className:H.a.pathElm},"/ Home"),a.map((function(e,t){return c.a.createElement("div",{key:te(a,t),className:H.a.pathElm,onClick:function(){return n(a.filter((function(e,a){return a<=t})))}},"/ ",e)}))),0===a.length&&c.a.createElement(K,{path:a,setPath:n}),u===E.COLLECTION&&c.a.createElement(Y,{path:a,setPath:n}),u===E.DOCUMENT&&0!==a.length&&c.a.createElement(ee,{path:a,setPath:n}))},ne=a(80),re=a(159),ce=a(160);var ue=function(){var e=Object(r.useState)(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],u=c.a.useState(null),o=Object(p.a)(u,2),l=o[0],f=o[1],m=Object(N.b)((function(e){return e.database})),E=Object(r.useMemo)((function(){return!m.connected&&m.loaded}),[m.connected,m.loaded]);Object(r.useEffect)((function(){(new g).init()}),[]);var d=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new g).clear();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(I,null),c.a.createElement("div",{style:{height:80}}),c.a.createElement("div",null,c.a.createElement(V.a,{onClick:function(e){f(e.currentTarget),n(!0)}},"Menu"),c.a.createElement(ne.a,{keepMounted:!0,open:a,onClose:function(){return n(!1)},anchorEl:l},c.a.createElement(re.a,{onClick:d},"Reset configuration"))),c.a.createElement(ce.a,null,c.a.createElement(W,{open:E}),m.connected&&c.a.createElement(ae,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N.a,{store:k},c.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports={path:"View_path__-axx5",pathElm:"View_pathElm__dMa74"}},86:function(e,t,a){e.exports=a(117)},91:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.9ab0a910.chunk.js.map