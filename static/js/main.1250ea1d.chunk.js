(this.webpackJsonpportifolio=this.webpackJsonpportifolio||[]).push([[0],{114:function(e,t,n){},126:function(e,t){},127:function(e,t){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(35),r=n.n(c),o=(n(114),n(15)),s=n(13),l=n(28),d=n(5),j=n(190),u=n(189),b=n(187),h=n(192),O=n(196),x=n(195),p=n(191),v=n(193),f=n(182),g=n(194),m=n(188),y=n(1);function w(e){var t,n,i,c=a.useState(0),r=Object(s.a)(c,2),o=r[0],l=r[1],d=a.useState(10),b=Object(s.a)(d,2),w=b[0],S=b[1];return Object(y.jsxs)(u.a,{sx:{width:"100%",overflow:"hidden"},children:[Object(y.jsx)(p.a,{sx:{maxHeight:440},children:Object(y.jsxs)(h.a,{stickyHeader:!0,"aria-label":"sticky table",options:{columnsButton:!0},children:[Object(y.jsx)(v.a,{children:Object(y.jsx)(g.a,{children:e.columns.map((function(e){return Object(y.jsx)(x.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label})}))})}),Object(y.jsx)(O.a,{children:null===e||void 0===e||null===(t=e.rows)||void 0===t?void 0:t.slice(o*w,o*w+w).map((function(t){var n;return Object(y.jsx)(g.a,{hover:!0,role:"checkbox",tabIndex:-1,children:null===e||void 0===e||null===(n=e.columns)||void 0===n?void 0:n.map((function(e,n){var a=t[e.id];return Object(y.jsx)(x.a,{align:e.align,children:a},a)}))})}))})]})}),Object(y.jsx)("div",{id:"view-table-drop-indicator",children:!(null===e||void 0===e||null===(n=e.columns)||void 0===n?void 0:n.length)>0&&Object(y.jsx)(j.a,{component:"span",sx:{p:2,m:2,border:"1px dashed grey"},children:Object(y.jsx)(m.a,{children:"+ Drop here to view data"})})}),Object(y.jsx)(f.a,{rowsPerPageOptions:[10,25,100],component:"div",count:null===e||void 0===e||null===(i=e.rows)||void 0===i?void 0:i.length,rowsPerPage:w,page:o,onPageChange:function(e,t){l(t)},onRowsPerPageChange:function(e){S(+e.target.value),l(0)}})]})}var S=n(98),D=n.n(S),k=n(180),C=n(184),N=n(185),P=n(19),F=n(102);P.e.register(P.d,P.i,P.b,P.n,P.o,P.g);var T={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Visualization"}}};function J(e){return Object(y.jsx)(F.a,{options:T,data:null===e||void 0===e?void 0:e.graphData})}var E=n(3),L=n(176),R=n(199),z=n(197),B=n(198),G=n(200),I=n(23),A=n(96),W=n.n(A),H=n(97),V=n.n(H),M=Object(d.a)("div")((function(e){var t=e.theme;return Object(E.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(L.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(L.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),X=Object(d.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),_=Object(d.a)(I.c)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(E.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function U(){return Object(y.jsx)(j.a,{sx:{flexGrow:1},children:Object(y.jsx)(R.a,{position:"static",children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(B.a,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mr:2},children:Object(y.jsx)(W.a,{})}),Object(y.jsx)(G.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"DnD XLSX Viewer/Report"}),Object(y.jsxs)(M,{children:[Object(y.jsx)(X,{children:Object(y.jsx)(V.a,{})}),Object(y.jsx)(_,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})]})})})}var q=n(79),K=n.n(q);function Q(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),i=Object(s.a)(n,2),c=i[0],r=i[1];return Object(y.jsxs)("div",{children:[Object(y.jsxs)(m.a,{variant:"secondary",onClick:function(){return t.current.click()},children:[" ",c||"+ Upload File"]}),Object(y.jsx)("input",{style:{display:"none"},onChange:function(t){return function(t){var n=null,a=null,i=new FileReader,c=t.target.files[0];r(null===c||void 0===c?void 0:c.name),i.onload=function(t){var c,r=i.result;n=K.a.read(r,{type:"binary"}),a=n.SheetNames.reduce((function(e,t){var a=n.Sheets[t];return e[t]=K.a.utils.sheet_to_json(a),e}),{}),e.setExcelData(null===(c=a)||void 0===c?void 0:c.Sheet1)},i.readAsBinaryString(c)}(t)},ref:t,type:"file"})]})}var Y=Object(d.a)(u.a)((function(e){var t=e.theme;return Object(l.a)(Object(l.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary,border:"none",boxShadow:"none"})}));function Z(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=n,l=Object(a.useState)(null),d=Object(s.a)(l,2),u=d[0],h=d[1],O=Object(a.useState)([]),x=Object(s.a)(O,2),p=x[0],v=x[1],f=Object(a.useState)([]),g=Object(s.a)(f,2),S=g[0],P=g[1],F=Object(a.useState)(!0),T=Object(s.a)(F,2),E=T[0],L=T[1],R=Object.keys((null===n||void 0===n?void 0:n[0])||{}).map((function(e){return{id:e,label:e,minWidth:170}})),z=Object.keys((null===n||void 0===n?void 0:n[0])||{})||[];Object(a.useEffect)((function(){v(R.filter((function(e){return S.includes(e.id)})))}),[S]);var B=function(e){e.preventDefault()};return Object(y.jsxs)(i.a.Fragment,{children:[" ",Object(y.jsx)(U,{}),Object(y.jsx)(j.a,{sx:{flexGrow:1},style:{border:"none"},children:Object(y.jsxs)(b.a,{container:!0,children:[Object(y.jsx)(b.a,{item:!0,xs:12,md:3,children:Object(y.jsxs)(Y,{style:{float:"left"},children:[" ",Object(y.jsx)(Q,{setExcelData:function(e){c([]),h(null),c(e)}})," "]})}),Object(y.jsx)(b.a,{item:!0,xs:12,md:9,children:Object(y.jsx)("h3",{children:"A Simple Data Visualization Tool\u2699\ufe0f."})})]})}),Object(y.jsx)(j.a,{sx:{flexGrow:1},style:{border:"none"},children:Object(y.jsxs)(b.a,{container:!0,spacing:2,children:[Object(y.jsx)(b.a,{item:!0,xs:12,md:3,children:Object(y.jsxs)(Y,{children:[0!==(null===z||void 0===z?void 0:z.length)&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(m.a,{className:"mb-10",onClick:function(){return P(0===(null===S||void 0===S?void 0:S.length)?z:[])},style:{float:"left"},variant:"text",size:"small",children:[0===(null===S||void 0===S?void 0:S.length)?"Show":"Hide"," All"]}),Object(y.jsx)(m.a,{className:"mb-10",onClick:function(){return L(!E)},style:{float:"left"},variant:"outlined",size:"small",children:E?"Show Graph":"Show Table"})]}),Object(y.jsxs)("table",{children:[z.map((function(e,t){var n="".concat(150*(t+1),"ms");return Object(y.jsx)(k.a,{in:!0,style:{transitionDelay:n},children:Object(y.jsx)("tr",{draggable:"true",onDragStart:function(t){return function(e,t){console.log(t),e.dataTransfer.dropEffect="move",e.dataTransfer.setData("text/plain",JSON.stringify(t))}(t,e)},children:Object(y.jsxs)("td",{children:[Object(y.jsxs)("span",{style:{marginTop:"-8px"},children:[" ",Object(y.jsx)(D.a,{className:"vv"})]}),Object(y.jsxs)("span",{children:[" ",e,E&&S.includes(e)&&Object(y.jsx)(C.a,{className:"checkbox-hover",defaultChecked:S.includes(e),onChange:function(){S.includes(e)?P(S.filter((function(t){return t!==e}))):P([e].concat(Object(o.a)(S)))}})]})," "]})})})})),0===(null===z||void 0===z?void 0:z.length)&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("tr",{children:Object(y.jsx)(N.a,{severity:"info",children:"No data. Please upload file!"})})})]})]})}),Object(y.jsxs)(b.a,{item:!0,xs:12,md:9,children:[E&&(null===z||void 0===z?void 0:z.length)>0&&Object(y.jsxs)(Y,{children:[" ",Object(y.jsx)("div",{onDragOver:B,onDrop:function(e){e.preventDefault();var t=e.dataTransfer.getData("text/plain");S.includes(JSON.parse(t))||P([JSON.parse(t)].concat(Object(o.a)(S)))},children:Object(y.jsx)(w,{columns:p,rows:r})})]}),!E&&Object(y.jsxs)(Y,{onDragOver:B,onDrop:function(e){e.preventDefault();var t=e.dataTransfer.getData("text/plain");console.log("rechd",JSON.parse(t));var a=n.map((function(e){return e.Name}));h({labels:a,datasets:[{label:JSON.parse(t),data:n.map((function(e){return e[JSON.parse(t)]})),backgroundColor:"rgba(255, 99, 132, 0.5)"}]})},children:[" ",Object(y.jsxs)("div",{children:[u&&Object(y.jsx)(J,{graphData:u,columns:S})," ",!u&&Object(y.jsx)(j.a,{component:"span",sx:{p:2,border:"1px dashed grey"},children:Object(y.jsx)(m.a,{children:"+ Drop here to create report"})})]})]})]})]})})]})}var $=n(181),ee=n(101);var te=function(){return Object(y.jsx)($.a,{backend:ee.a,children:Object(y.jsx)("div",{children:Object(y.jsx)(Z,{})})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(te,{})}),document.getElementById("root")),ne()},90:function(e,t){}},[[128,1,2]]]);
//# sourceMappingURL=main.1250ea1d.chunk.js.map