(this["webpackJsonpdayscounter.app"]=this["webpackJsonpdayscounter.app"]||[]).push([[0],{115:function(e,t,a){e.exports=a(126)},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o),c=a(24),l=a(58),s=a(173),u=a(100),d=a(172),m=a(171),p=a(18),f=a(11),g=a.n(f),h=a(80),b=a(83),v=a.n(b),y=(a(123),a(124),a(66)),E=a.n(y),k=a(65),O=a.n(k),w=a(85),x=a.n(w),C=a(67),j=a.n(C),S=a(84),N=a.n(S),D={headingsFontFamily:"'Righteous'",backgroundColor:{light:O.a[100],dark:O.a[900]},primaryColor:{light:E.a[800],dark:E.a[600]},secondaryColor:{light:j.a[800],dark:j.a[600]},selectionColor:{light:N.a[800],dark:x.a[600]}},B=D.selectionColor,R=D.backgroundColor,T=D.primaryColor,q=D.secondaryColor,W=D.headingsFontFamily,P=a(43),A=a(68),M=a(169),z=a(130),J=a(86),U=a(17),F=a(22),Y=a.n(F),L=a(165),$=a(129),I=a(177),V=a(92),_=a.n(V),H=["transparent","#772d8b","#ff7400","#efd28d","#0c7489","#ec0048","#00b9b9","#ef476f","#21897e","#6bec00","#004777"],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return H[e]||H[0]},K=function(e){return g()(e).format("MMMM Do, YYYY")},Q=a(30),X=a(163),Z=a(88),ee=Object(X.a)((function(e){return{root:Object(P.a)(Object(P.a)({},e.typography.body2),{},{padding:0,margin:0,outline:"0 none",color:e.palette.primary.main,background:"none",border:0,cursor:"pointer","&:hover, &:focus":{textDecoration:"underline"}})}}),{name:Z.a});var te=function(e){var t=e.className,a=Object(Q.a)(e,["className"]),n=ee();return r.a.createElement("button",Object.assign({className:Y()(n.root,t)},a))},ae=a(89),ne=Object(X.a)((function(e){return{root:function(t){var a="transparent"===t.code?e.palette.primary.main:t.code,n="0 0 0 ".concat(e.spacing(.25),"px ").concat(e.palette.background.paper,", 0 0 0 ").concat(e.spacing(.5),"px ").concat(a),r="0 0 0 ".concat(e.spacing(.25),"px ").concat(e.palette.primary.main);return{width:e.spacing(3),height:e.spacing(3),margin:e.spacing(1.5),borderRadius:"50%",backgroundColor:t.code,opacity:.78,transitionProperty:"box-shadow, background-color",transitionDuration:e.transitions.duration.short,transitionEasing:e.transitions.easing.sharp,boxShadow:t.selected?n:"none","&:focus":{boxShadow:t.selected?n:r}}}}}),{name:ae.a});var re=function(e){var t=e.code,a=e.selected,n=e.interactive,o=e.className,i=Object(Q.a)(e,["code","selected","interactive","className"]),c=ne({code:t,selected:a}),l=n?te:"div";return r.a.createElement(l,Object.assign({className:Y()(c.root,o)},i))},oe=a(90),ie=Object(X.a)((function(e){var t,a;return{root:(t={transitionProperty:"transform",transitionDuration:e.transitions.duration.shortest,transitionEasing:e.transitions.easing.sharp,userSelect:"none"},Object(U.a)(t,e.breakpoints.down("sm"),{marginBottom:e.spacing(4)}),Object(U.a)(t,"@media (any-hover: hover)",{"&:hover":{"& $interactivePaper":{backgroundColor:"rgba(192, 202, 51, 0.3)",borderColor:"rgba(192, 202, 51, 0.3)"},"& $deleteBtn":{opacity:1}}}),t),content:{display:"flex",flexDirection:"row",alignItems:"center",flex:1},button:function(e){return{width:"100%",textAlign:"left",cursor:e.onRequestEdit?"pointer":"default","&:hover, &:focus":{textDecoration:"none"},"&:focus $interactivePaper":{backgroundColor:"rgba(192, 202, 51, 0.5)",borderColor:"rgba(192, 202, 51, 0.5)"},"&:focus + div $deleteBtn":{opacity:1}}},paper:{padding:e.spacing(2,3),margin:e.spacing(0,2),"& > *:not(:last-child)":{marginRight:e.spacing(2)}},interactivePaper:function(t){return{transitionProperty:"background-color",transitionDuration:e.transitions.duration.shortest,transitionEasing:e.transitions.easing.sharp}},days:{color:e.palette.primary.light,fontWeight:"bold"},deleteBtn:(a={color:e.palette.error.dark},Object(U.a)(a,e.breakpoints.up("md"),{opacity:0}),Object(U.a)(a,"&:focus",{opacity:1}),a)}}),{name:oe.a});function ce(e){var t=ie(e),a=g()().startOf("day"),n=g()(e.data.date).startOf("day"),o=K(n),i=Math.abs(n.diff(a,"day"));if(e.isBeingDeleted)return null;return r.a.createElement("div",{className:Y()(t.root,e.className)},r.a.createElement("div",{className:t.content},e.hideColor?null:r.a.createElement("div",null,r.a.createElement(re,{code:G(e.data.color)})),r.a.createElement(te,{className:t.button},r.a.createElement($.a,{variant:"outlined",className:Y()(t.paper,Object(U.a)({},t.interactivePaper,e.interactive)),onClick:function(t){e.onRequestEdit&&e.onRequestEdit()}},r.a.createElement(I.a,{arrow:!0,title:n.isBefore(a)?n.from(a):a.to(n)},r.a.createElement(z.a,{display:"inline",variant:"h6",className:t.days},i," ",i>1?"days":"day")),r.a.createElement(z.a,{display:"inline",variant:"caption",color:"textSecondary"},n.isBefore(a)?"since":"until"),e.data.label?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{display:"inline",variant:"subtitle1"},e.data.label),r.a.createElement(z.a,{display:"inline",variant:"subtitle1",color:"textSecondary"},"(",o,")")):r.a.createElement(z.a,{display:"inline",variant:"subtitle1"},o))),e.interactive?r.a.createElement("div",null,r.a.createElement(I.a,{title:"Delete"},r.a.createElement(L.a,{className:t.deleteBtn,"aria-label":"delete counter",onClick:function(t){e.onRequestDelete&&e.onRequestDelete()}},r.a.createElement(_.a,null)))):null))}ce.defaultProps={interactive:!0};var le=ce,se=a(176),ue=a(168),de=a(167),me=a(166);function pe(e,t){return g()(e.date).startOf("day").isBefore(g()(t.date).startOf("day"))?1:-1}function fe(e,t){return g()(e.date).startOf("day").isBefore(g()(t.date).startOf("day"))?-1:1}var ge=[{id:1,date:"Jun 1 2020",label:"dayscounter.app launched",color:2},{id:2,date:"May 11 2020",label:"quarantine ended",color:3},{id:3,date:g()().subtract(2,"week"),label:"I went to the movies last time",color:4},{id:4,date:g()().add(5,"month"),label:"My birthday! \ud83c\udf89",color:5}].sort(pe);var he=function(e){return r.a.createElement(se.a,Object.assign({maxWidth:"md","aria-labelledby":"form-dialog-title"},e),r.a.createElement(me.a,{id:"form-dialog-title"},"Examples"),r.a.createElement(de.a,null,ge.map((function(e){return r.a.createElement(le,{key:e.id,data:e,interactive:!1})}))),r.a.createElement(ue.a,null,r.a.createElement(M.a,{onClick:e.onClose,color:"primary"},"Close")))},be=a(94),ve=a.n(be),ye=a(93),Ee=Object(X.a)((function(e){return{root:{margin:e.spacing(0,"auto"),maxWidth:e.spacing(40),width:"100%"}}}),{name:ye.a});var ke=function(e){var t=e.className,a=Object(Q.a)(e,["className"]),n=Ee(),o={className:Y()(n.root,t),size:"large",variant:"contained",color:"secondary",startIcon:r.a.createElement(ve.a,null)};return r.a.createElement(M.a,Object.assign({},o,a),"Create counter")},Oe=a(174),we=a(175),xe=a(95),Ce=Object(X.a)((function(e){return{list:{display:"flex",flexDirection:"row",flexWrap:"wrap",paddingTop:e.spacing(1),"& > *":{flexShrink:0,cursor:"pointer"},"& > :first-child:not(:focus)":{boxShadow:"0 0 3px rgba(0, 0, 0, 0.4)"}}}}),{name:xe.a});var je=function(e){var t=e.onChange,a=e.selected,n=Object(Q.a)(e,["onChange","selected"]),o=Ce();return r.a.createElement("div",n,r.a.createElement(z.a,{variant:"caption",color:"textSecondary"},"Color"),r.a.createElement("div",{className:o.list},H.map((function(e,n){return r.a.createElement(re,{key:e,interactive:!0,code:e,onClick:function(){return t(n)},selected:n===a})}))))},Se=a(96),Ne=Object(X.a)((function(e){return{preview:{marginBottom:e.spacing(2)},colors:{marginTop:e.spacing(1)}}}),{name:Se.a});var De=function(e){var t=Ne(),a=e.data||{},n="object"===typeof e.data&&null!==e.data,o=Math.floor(Math.random()*H.length),i=g()(),l=r.a.useState(a.id||Date.now()),s=Object(c.a)(l,1)[0],u=r.a.useState(a.date||i),d=Object(c.a)(u,2),m=d[0],p=d[1],f=r.a.useState(a.label||""),h=Object(c.a)(f,2),b=h[0],v=h[1],y=r.a.useState(a.id?a.color:o),E=Object(c.a)(y,2),k=E[0],O=E[1],w={date:g()(m).isValid()?m:i,label:b,color:k},x=function(){e.onRequestSave(null)};return r.a.createElement(se.a,{disableBackdropClick:!0,open:!0,fullWidth:!0,maxWidth:"sm",onClose:x,"aria-labelledby":"form-dialog-title"},r.a.createElement(me.a,{id:"form-dialog-title"},n?"Editing":"Creating"," counter"),r.a.createElement(de.a,null,r.a.createElement("div",{className:t.preview},r.a.createElement(le,{data:w,interactive:!1})),r.a.createElement(we.a,{required:!0,margin:"dense",label:"Date",onChange:function(e){p(e)},value:m,fullWidth:!0,format:"DD/MM/YYYY",autoOk:!0}),r.a.createElement(Oe.a,{margin:"dense",label:"Label",fullWidth:!0,value:b,onChange:function(e){v(e.target.value)}}),r.a.createElement(je,{className:t.colors,selected:k,onChange:function(e){O(e)}})),r.a.createElement(ue.a,null,r.a.createElement(M.a,{onClick:x,color:"primary"},"Cancel"),r.a.createElement(M.a,{onClick:function(){g()(m).isValid()&&e.onRequestSave({id:s,date:m,label:b,color:k})},color:"primary"},"Save")))},Be=a(97),Re=Object(X.a)((function(e){var t;return{title:(t={margin:e.spacing(4,"auto",3),fontSize:"3rem"},Object(U.a)(t,e.breakpoints.up("md"),{fontSize:e.typography.h1.fontSize}),Object(U.a)(t,"&::after",{content:'".app"',fontSize:24,color:e.palette.secondary.light}),Object(U.a)(t,"& a:hover",{textDecoration:"none"}),t),intro:Object(U.a)({fontSize:"1.5rem",maxWidth:650,margin:e.spacing(0,"auto")},e.breakpoints.up("md"),{fontSize:e.typography.h4.fontSize}),colorTransition:{transitionProperty:"color",transitionDuration:e.transitions.duration.short,transitionEasing:e.transitions.easing.sharp}}}),{name:Be.a});var Te=function(e){var t=Re();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{variant:"h1",component:"h1",className:Y()(t.title,t.colorTransition)},r.a.createElement("a",{href:"https://dayscounter.app/"},"Days Counter")),r.a.createElement(z.a,{variant:"h4",component:"h2",className:Y()(t.intro,t.colorTransition)},"Simple tool to track and count ",r.a.createElement("strong",null,"days since")," and ",r.a.createElement("strong",null,"days until")," a certain date"))},qe=a(98),We=Object(X.a)((function(e){return{root:{marginBottom:e.spacing(2)}}}),{name:qe.a});var Pe=function(e){var t=e.className,a=Object(Q.a)(e,["className"]),n=We();return r.a.createElement("div",{className:Y()(n.root,t)},r.a.createElement(z.a,{variant:"body2",gutterBottom:!0},"#"," ",r.a.createElement("a",{href:"https://github.com/pierrecholhot/dayscounter.app/",target:"_blank",rel:"noopener noreferrer"},"open source")," ","#"," ",r.a.createElement("a",{href:"https://pierre.cx",target:"_blank",rel:"noopener noreferrer"},"made with love")," ","# ",r.a.createElement(te,{onClick:a.onRequestSwitchTheme},a.isDarkTheme?"light":"dark"," theme")),r.a.createElement(z.a,{variant:"body2"},r.a.createElement("strong",null,"Privacy:")," Your data is never shared or stored outside of this browser"))},Ae=a(99),Me=Object(X.a)((function(e){return{root:Object(U.a)({height:"100vh",width:"100%",maxWidth:"960px",margin:e.spacing(0,"auto"),textAlign:"center",display:"flex",flexDirection:"column",padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,4)}),create:{margin:e.spacing(6,0,7),display:"flex",flexDirection:"column",justifyContent:"space-between"},examplesTrigger:{marginTop:e.spacing(1)},examples:{margin:e.spacing(1,0,0,0)},list:{flex:1,margin:e.spacing(0,0,4,0)},title:{position:"relative",display:"block",textAlign:"left",paddingLeft:e.spacing(11),padding:e.spacing(2,0)}}}),{name:Ae.a}),ze=Object(J.a)("datastore");var Je=function(e){var t=Me(),a=Object(l.b)(),n=a.enqueueSnackbar,o=a.closeSnackbar,i=r.a.useState(!1),s=Object(c.a)(i,2),u=s[0],d=s[1],m=r.a.useState(!1),p=Object(c.a)(m,2),f=p[0],h=p[1],b=r.a.useState(null),v=Object(c.a)(b,2),y=v[0],E=v[1],k=r.a.useState([]),O=Object(c.a)(k,2),w=O[0],x=O[1],C=ze([]),j=Object(c.a)(C,2),S=j[0],N=j[1],D=g()().startOf("day"),B=function(){var e=r.a.createElement(M.a,{color:"primary",size:"small",onClick:function(){return window.location.reload()}},"Update");n("A new version of this app is available",{key:"DaysCounterAppUpdate",persist:!0,action:e})},R=function(e){x((function(t){return[].concat(Object(A.a)(t),[e])})),n("Deleted \xab ".concat(e.label||K(e.date)," \xbb"),{key:e.id,action:function(){return W(e)},onClose:function(t,a){"instructed"!==a&&"clickaway"!==a&&function(e){var t=function(t){return t.id!==e.id};N((function(e){return e.filter(t)})),x((function(e){return e.filter(t)}))}(e)}})},T=function(e){N((function(t){return t.map((function(t){return t.id===y.id?Object(P.a)(Object(P.a)({},t),e):t}))})),E(null)},q=function(e){e&&N((function(t){return[].concat(Object(A.a)(t),[e])})),h(!1)},W=function(e){return r.a.createElement(M.a,{color:"primary",size:"small",onClick:function(){return function(e){x((function(t){return t.filter((function(t){return t.id!==e.id}))})),o(e.id)}(e)}},"Undo")},J=function(e){return r.a.createElement(le,{data:e,key:e.id,onRequestEdit:function(){return E(e)},onRequestDelete:function(){return R(e)},isBeingDeleted:w.find((function(t){return t.id===e.id}))})};return r.a.useEffect((function(){window.addEventListener("DaysCounterAppUpdate",B,{once:!0})})),r.a.createElement("div",{className:t.root},r.a.createElement(Te,null),r.a.createElement("div",{className:t.create},r.a.createElement(ke,{onClick:function(){return h(!0)}}),f?r.a.createElement(De,{onRequestSave:q}):null,S.length?null:r.a.createElement("div",{className:t.examplesTrigger},r.a.createElement(te,{onClick:function(){return d(!0)}},"see some examples"),r.a.createElement(he,{open:u,onClose:function(){return d(!1)}}))),r.a.createElement("div",{className:t.list},S.sort(fe).filter((function(e){return!g()(e.date).startOf("day").isBefore(D)})).map(J),function(){var e=S.sort(pe).filter((function(e){return g()(e.date).startOf("day").isBefore(D)}));return e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{variant:"overline",className:t.title},"Past"),e.map(J)):null}()),r.a.createElement(Pe,{isDarkTheme:e.isDarkTheme,onRequestSwitchTheme:e.onRequestSwitchTheme}),y?r.a.createElement(De,{data:y,onRequestSave:T}):null)};g.a.extend(v.a);var Ue=function(e){var t=r.a.useState(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],i=Object(m.a)("(prefers-color-scheme: dark)");r.a.useEffect((function(){o(i)}),[i]);var f=Object(u.a)(function(e){var t=e?"dark":"light";return{typography:{h1:{fontFamily:W,color:T[t]}},palette:{type:t,primary:{main:T[t]},secondary:{main:q[t]},background:{default:R[t]}},overrides:{MuiCssBaseline:{"@global":{"html, body, #root":{width:"100%",height:"100%"},body:{"-moz-osx-font-smoothing":"grayscale","-webkit-font-smoothing":"antialiased","-webkit-font-feature-settings":"normal","-webkit-tap-highlight-color":"transparent",transitionProperty:"background-color",transitionDuration:"250ms",transitionEasing:"cubic-bezier(0.4, 0, 0.6, 1)"},"::selection":{backgroundColor:B[t],color:R[t]},a:{color:T[t],textDecoration:"none","&:hover, &:focus":{textDecoration:"underline",outline:"none"}}}}}}}(n));return r.a.createElement(d.a,{theme:f},r.a.createElement(s.a,null),r.a.createElement(p.a,{utils:h.a},r.a.createElement(l.a,{maxSnack:3},r.a.createElement(Je,{isDarkTheme:n,onRequestSwitchTheme:function(){return o(!n)}}))))},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ye(t,e)}))}}({onUpdate:function(){var e=new Event("DaysCounterAppUpdate");window.dispatchEvent(e)}})},88:function(e){e.exports=JSON.parse('{"a":"MicroButton"}')},89:function(e){e.exports=JSON.parse('{"a":"Color"}')},90:function(e){e.exports=JSON.parse('{"a":"DateCard"}')},93:function(e){e.exports=JSON.parse('{"a":"CTA"}')},95:function(e){e.exports=JSON.parse('{"a":"ColorPicker"}')},96:function(e){e.exports=JSON.parse('{"a":"EntryUpdater"}')},97:function(e){e.exports=JSON.parse('{"a":"Header"}')},98:function(e){e.exports=JSON.parse('{"a":"Footer"}')},99:function(e){e.exports=JSON.parse('{"a":"App"}')}},[[115,1,2]]]);
//# sourceMappingURL=main.81ca1528.chunk.js.map