(this["webpackJsonpdayscounter.app"]=this["webpackJsonpdayscounter.app"]||[]).push([[0],{105:function(e){e.exports=JSON.parse('{"a":"dayscounter.app","b":"0.1.11"}')},129:function(e){e.exports=JSON.parse('{"a":"Color"}')},132:function(e){e.exports=JSON.parse('{"a":"Days"}')},141:function(e){e.exports=JSON.parse('{"a":"DateCard"}')},142:function(e){e.exports=JSON.parse('{"a":"DateCardList"}')},143:function(e){e.exports=JSON.parse('{"a":"ColorPicker"}')},144:function(e){e.exports=JSON.parse('{"a":"MicroButton"}')},145:function(e){e.exports=JSON.parse('{"a":"InputOutline"}')},147:function(e){e.exports=JSON.parse('{"a":"EntryUpdater"}')},149:function(e){e.exports=JSON.parse('{"a":"CTA"}')},151:function(e){e.exports=JSON.parse('{"a":"Header"}')},152:function(e){e.exports=JSON.parse('{"a":"App"}')},180:function(e,t,a){e.exports=a(210)},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(33),l=a.n(c),s=a(122),u=a.n(s),d=a(123),m=a.n(d),p=a(18),f=a(124),g=a(60),b=a(271),h=a(264),v=a(155),E=a(262),y=a(17),k=a(63),O=a(27),j=a(86),w=a(269),x=a(268),N=a(275),C=a(259),S=a(258),D=a(216),R=a(256),q=a(257),T=a(72),B=a(246),W=a(22),A=a(21),P=a.n(A),z=a(274),F=a(130),M=a.n(F),I=a(131),J=a.n(I),L=a(248),U=a(129),Y=Object(L.a)((function(e){return{root:function(t){return{pointerEvents:t.interactive?"inherit":"none","& svg":{transition:e.transitions.create("color")}}}}}),{name:U.a});function V(e){var t=e.code,a=e.selected,n=e.interactive,o=e.size,i=e.className,c=(Object(W.a)(e,["code","selected","interactive","size","className"]),Y({code:t,selected:a,interactive:n})),l={width:o,height:o,color:t};return r.a.createElement(z.a,{tabIndex:n?null:-1,value:t,checked:a,className:P()(c.root,i),icon:r.a.createElement(M.a,{style:l}),checkedIcon:r.a.createElement(J.a,{style:l})})}V.defaultProps={size:28};var H=V,_=a(132),G=Object(L.a)((function(e){return{root:{fontWeight:"bold",color:e.palette.primary.light,whiteSpace:"nowrap",lineHeight:1}}}),{name:_.a});var K=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=G();return r.a.createElement(T.a,Object.assign({variant:"h6",component:"span",className:P()(n.root,t)},a))},$=a(250),Q=a(249),X=a(156),Z=a(255),ee=a(136),te=a.n(ee),ae=a(134),ne=a.n(ae),re=a(135),oe=a.n(re),ie=a(133),ce=a.n(ie);var le=function(e){var t=e.id,a=e.onRequestEdit,n=e.onRequestDuplicate,o=e.onRequestDelete,i=r.a.useState({open:!1,anchor:null}),c=Object(p.a)(i,2),l=c[0],s=c[1],u=function(){s({open:!1,anchor:null})};return r.a.createElement($.a,null,r.a.createElement(Q.a,{"aria-controls":t,"aria-haspopup":"true",onClick:function(e){s({open:!0,anchor:e.currentTarget})}},r.a.createElement(ce.a,null)),r.a.createElement(X.a,{id:t,anchorEl:l.anchor,open:l.open,onClose:u,transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(Z.a,{onClick:function(e){u(),a&&a()}},r.a.createElement(R.a,null,r.a.createElement(ne.a,null)),r.a.createElement(q.a,{primary:"Edit"})),r.a.createElement(Z.a,{onClick:function(e){u(),n&&n()}},r.a.createElement(R.a,null,r.a.createElement(oe.a,null)),r.a.createElement(q.a,{primary:"Duplicate"})),r.a.createElement(Z.a,{onClick:function(e){u(),o&&o()}},r.a.createElement(R.a,null,r.a.createElement(te.a,null)),r.a.createElement(q.a,{primary:"Delete Counter"}))))},se=function(e){return l()(e).format("MMMM Do, YYYY")},ue=function(e){return l()(e).startOf("day")},de=ue(new Date),me=a(16),pe=a(137),fe=a.n(pe),ge=a(139),be=a.n(ge),he=a(138),ve=a.n(he),Ee=a(99),ye=a.n(Ee),ke=a(100),Oe=a.n(ke),je=a(140),we=a.n(je),xe=a(59),Ne=a.n(xe),Ce=a(90),Se=a.n(Ce),De=a(101),Re=a.n(De),qe=a(102),Te=a.n(qe);function Be(){var e=[],t=Object(me.a)(),a="dark"===t.palette.type?"400":"300";return e[0]=t.palette.divider,e[1]=fe.a[a],e[2]=ve.a[a],e[3]=be.a[a],e[4]=ye.a[a],e[5]=Oe.a[a],e[6]=we.a[a],e[7]=Ne.a[a],e[8]=Se.a[a],e[9]=Re.a[a],e[10]=Te.a[a],{colors:e,getColorValueByIndex:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e[t]||e[0]},getColorIndexByValue:function(t){return e.findIndex((function(e){return t===e}))||0},getRandomColor:function(){return Math.floor(Math.random()*e.length)}}}var We=a(141),Ae=Object(L.a)((function(e){return{li:{minHeight:79},primary:function(t){return{display:"block",paddingRight:t.interactive?e.spacing(6):null}},when:{marginLeft:e.spacing(1)},label:{marginLeft:e.spacing(1),overflowWrap:"break-word"},skeleton:{display:"inline-block",margin:e.spacing(.5,1,.5,0)}}}),{name:We.a});function Pe(e){var t=Ae(e),a=Be(),n=r.a.useState(!1),o=Object(p.a)(n,2),i=o[0],c=o[1],l=ue(e.data.date),s=Math.abs(l.diff(de,"day")),u=l.isBefore(de)?l.from(de):de.to(l),d="".concat(se(l)," ").concat(s>25?"(".concat(u,")"):""),m=function(t){e.onRequestDelete&&e.onRequestDelete()},f=function(t){e.onRequestEdit&&e.onRequestEdit()},g=function(t){e.onRequestDuplicate&&e.onRequestDuplicate()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{in:!e.data.deleted,onEnter:function(){return c(!1)},onExited:function(){return c(!0)}},r.a.createElement("div",{style:{display:i?"none":"block"}},e.dividerBefore?r.a.createElement(S.a,{component:"div"}):null,r.a.createElement(D.a,{component:"div",className:t.li},r.a.createElement(R.a,null,r.a.createElement(H,{code:a.getColorValueByIndex(l.isValid()?e.data.color:0)})),r.a.createElement(q.a,{primary:l.isValid()?r.a.createElement("span",{className:t.primary},0===s?r.a.createElement(K,null,"Today"):r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,s," ",s>1?"days":"day"),r.a.createElement(T.a,{variant:"body1",component:"span",color:"textSecondary",className:t.when},l.isBefore(de)?"since":"until")),r.a.createElement(T.a,{variant:"body1",component:"span",className:t.label},e.data.label||d)):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:t.skeleton,variant:"text",width:"15%"}),r.a.createElement(C.a,{className:t.skeleton,variant:"text",width:"10%"}),r.a.createElement(C.a,{className:t.skeleton,variant:"text",width:"40%"})),secondary:l.isValid()?e.data.label?d:null:!!e.data.label&&r.a.createElement(C.a,{variant:"text",width:"50%"})}),e.interactive?r.a.createElement(le,{id:e.data.id,onRequestEdit:f,onRequestDuplicate:g,onRequestDelete:m}):null),e.dividerAfter?r.a.createElement(S.a,{component:"div"}):null)))}Pe.defaultProps={dividerBefore:!0,dividerAfter:!1,interactive:!0};var ze=Pe,Fe=a(215),Me=a(254),Ie=a(260),Je=a(142),Le=Object(L.a)((function(e){return{root:{overflow:"hidden"},list:{padding:0}}}),{name:Je.a});var Ue=function(e){var t=e.single,a=e.subheader,n=e.className,o=e.children,i=(Object(W.a)(e,["single","subheader","className","children"]),Le());return r.a.createElement(Fe.a,{square:t,elevation:0,className:P()(i.root,n)},a?r.a.createElement(Ie.a,{component:"div"},a):null,r.a.createElement(Me.a,{component:"div",className:i.list},o))},Ye=a(278),Ve=a(270),He=a(267),_e=a(266),Ge=a(273),Ke=a(272),$e=a(276),Qe=a(14),Xe=a(143),Ze=Object(L.a)((function(e){return{list:Object(Qe.a)({flexDirection:"row",justifyContent:"space-between"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})}}),{name:Xe.a});var et=function(e){var t=e.onSelect,a=e.selected,n=e.className,o=Object(W.a)(e,["onSelect","selected","className"]),i=Ze(),c=Be(),l=Object(O.a)({name:"colors",className:P()(i.list,n),onChange:function(e){t(c.getColorIndexByValue(e.target.value))}},o);return r.a.createElement($e.a,l,c.colors.map((function(e){return r.a.createElement(H,{interactive:!0,key:e,code:e,selected:c.colors[a]===e})})))},tt=a(144),at=Object(L.a)((function(e){return{root:Object(O.a)(Object(O.a)({},e.typography.body2),{},{padding:0,margin:0,outline:"0 none",color:e.palette.primary.main,background:"none",border:0,cursor:"pointer","&:hover, &:focus":{textDecoration:"underline"}})}}),{name:tt.a});var nt=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=at();return r.a.createElement("button",Object.assign({className:P()(n.root,t)},a))},rt=a(263),ot=a(279),it=a(146),ct=a.n(it),lt=a(145),st=Object(L.a)((function(e){return{root:{position:"relative",marginTop:e.spacing(1)},wrapper:{position:"relative"},content:{padding:e.spacing(2),borderRadius:e.shape.borderRadius},inputLabel:{position:"absolute",left:0,top:0,transform:"translate(0, ".concat(e.spacing(3),"px) scale(1)")},notch:{borderColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}}}),{name:lt.a}),ut=function(e){var t=e.id,a=e.label,n=e.helperText,o=e.children,c=st(),l=r.a.useState(0),s=Object(p.a)(l,2),u=s[0],d=s[1],m=r.a.useRef(null);return r.a.useEffect((function(){var e=i.a.findDOMNode(m.current);d(null!=e?e.offsetWidth:0)}),[a]),r.a.createElement("div",{className:c.root},r.a.createElement(ot.a,{ref:m,htmlFor:t,variant:"outlined",className:c.inputLabel,shrink:!0},a),r.a.createElement("div",{className:c.wrapper},r.a.createElement("div",{id:t,className:c.content},o,r.a.createElement(ct.a,{notched:!0,labelWidth:u,className:c.notch}))),!!n&&r.a.createElement(rt.a,{variant:"outlined"},n))},dt=[{date:"Dec 25",label:"Christmas Day",color:10},{date:"Jan 01",label:"New Year's Day",color:3},{date:"Apr 01",label:"April's Fool Day",color:2}],mt=function(e){var t=ue(e).set("year",de.year());return t.isBefore(de)?t.set("year",de.year()+1):t},pt=a(147),ft=Object(L.a)((function(e){return{suggestions:{textAlign:"right",marginTop:e.spacing(2)},suggestionButton:{display:"inline-block","&:not(:last-child):after":{content:'","',marginRight:e.spacing(.5)}},colorsWrapper:{marginTop:e.spacing(2)},picker:{width:"100%"},dialogPaper:{backgroundColor:e.palette.background.default},formContent:{padding:e.spacing(1,0,3)}}}),{name:pt.a});var gt=function(e){var t=ft(),a=Be(),n=Object(me.a)(),o=Object(h.a)(n.breakpoints.down("sm")),i=e.data||{},c="object"===typeof e.data&&null!==e.data,l=a.getRandomColor(),s=r.a.useState(i.id||Date.now()),u=Object(p.a)(s,1)[0],d=r.a.useState(i.date||de),m=Object(p.a)(d,2),f=m[0],g=m[1],b=r.a.useState(i.label||""),v=Object(p.a)(b,2),E=v[0],y=v[1],k=r.a.useState(i.id?i.color:l),O=Object(p.a)(k,2),j=O[0],x=O[1],N={date:f,label:E,color:j},C=function(){e.onRequestSave(null)};return r.a.createElement(Ye.a,{fullScreen:o,disableBackdropClick:!0,open:!0,fullWidth:!0,maxWidth:"sm",onClose:C,"aria-labelledby":"form-dialog-title",PaperProps:{className:t.dialogPaper}},r.a.createElement(_e.a,{id:"form-dialog-title"},c?"Editing":"Creating a"," counter"),r.a.createElement(Ue,{single:!0},r.a.createElement(ze,{data:N,interactive:!1,dividerAfter:!0,dividerBefore:!0})),r.a.createElement(He.a,null,c?null:r.a.createElement("div",{className:t.suggestions},c?null:r.a.createElement("div",null,r.a.createElement(T.a,{component:"span",variant:"caption",color:"textSecondary"},"Suggestions:")," ",dt.map((function(e){return r.a.createElement(nt,{key:e.color,className:t.suggestionButton,onClick:function(){return function(e){var t=e.date,a=e.label,n=e.color;g(mt(t)),y(a),x(n)}(e)}},e.label)})))),r.a.createElement("div",{className:t.formContent},r.a.createElement(Ke.a,{showToolbar:!1,className:t.picker,label:"Date",onChange:function(e){g(e)},value:f,fullWidth:!0,inputFormat:"DD/MM/YYYY",autoOk:!0,minDate:new Date("1900-01-01"),maxDate:new Date("2100-12-31"),renderInput:function(e){return r.a.createElement(Ge.a,Object.assign({margin:"normal",variant:"outlined",required:!0,fullWidth:!0},e,{helperText:!c&&"dd/mm/yyyy",error:!ue(f).isValid()}))}}),r.a.createElement(Ge.a,{margin:"normal",label:"Label",InputLabelProps:{shrink:!0},fullWidth:!0,value:E,onChange:function(e){y(e.target.value)},variant:"outlined",helperText:!c&&"Optional but recommended"}),r.a.createElement("div",{className:t.colorsWrapper},r.a.createElement(ut,{id:"colors",label:"Color",helperText:!c&&"Pick a color to tag your counter"},r.a.createElement(et,{className:t.colors,selected:j,onSelect:function(e){x(e)}}))))),r.a.createElement(S.a,null),r.a.createElement(Ve.a,null,r.a.createElement(w.a,{onClick:C,color:"primary"},"Cancel"),r.a.createElement(w.a,{onClick:function(){ue(f).isValid()&&e.onRequestSave({id:u,date:ue(f),label:E,color:j})},disabled:!ue(f).isValid(),color:"primary",variant:E&&f?"contained":"text"},"Save")))},bt=Object(j.a)("showPrivacy");var ht=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=bt(!0),o=Object(p.a)(n,2),i=o[0],c=o[1],l=Object(me.a)(),s=r.a.createElement("a",{href:"https://github.com/pierrecholhot/dayscounter.app/",target:"_blank",rel:"noopener noreferrer"},"open source"),u=r.a.createElement("a",{href:"https://pierre.cx",target:"_blank",rel:"noopener noreferrer"},"made with love"),d=r.a.createElement(nt,{onClick:a.onRequestSwitchTheme},"dark"===l.palette.type?"light":"dark"," theme");return r.a.createElement("div",{className:P()(t)},r.a.createElement(T.a,{variant:"body2",gutterBottom:!0},"# ",s," # ",u," # ",d),i?r.a.createElement(T.a,{variant:"body2"},r.a.createElement("strong",null,"Privacy:")," Your data is never shared or stored outside of this browser."," ",r.a.createElement(nt,{onClick:function(){return c(!1)}},"Dismiss")):null)},vt=a(150),Et=a.n(vt),yt=a(149),kt=Object(L.a)((function(e){return{root:{margin:e.spacing(0,"auto"),maxWidth:e.spacing(40),width:"100%"}}}),{name:yt.a});var Ot=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=kt(),o={className:P()(n.root,t),size:"large",variant:"contained",color:"secondary",startIcon:r.a.createElement(Et.a,null)};return r.a.createElement(w.a,Object.assign({},o,a),"Create counter")},jt=a(151),wt=Object(L.a)((function(e){var t,a,n;return{title:(a={margin:e.spacing(0,0,2),fontSize:"3rem"},Object(Qe.a)(a,e.breakpoints.up("sm"),{fontSize:"4rem"}),Object(Qe.a)(a,e.breakpoints.up("md"),{fontSize:e.typography.h1.fontSize}),Object(Qe.a)(a,e.breakpoints.up("lg"),{fontSize:60}),Object(Qe.a)(a,"& a",{display:"inline-block",position:"relative","&::after":(t={content:'".app"',fontSize:"50%",color:e.palette.secondary.light,position:"absolute",right:0,top:-14},Object(Qe.a)(t,e.breakpoints.up("md"),{top:-20}),Object(Qe.a)(t,e.breakpoints.up("lg"),{top:-14}),t)}),Object(Qe.a)(a,"& a:hover",{textDecoration:"none"}),a),intro:(n={display:"inline-block",fontSize:"1.6rem",margin:e.spacing(0,0,4),maxWidth:350},Object(Qe.a)(n,e.breakpoints.up("sm"),{fontSize:"2rem",maxWidth:420}),Object(Qe.a)(n,e.breakpoints.up("md"),{fontSize:e.typography.h4.fontSize,maxWidth:450}),n)}}),{name:jt.a});var xt=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=wt();return r.a.createElement("div",{className:P()(t)},r.a.createElement(T.a,{variant:"h1",component:"h1",className:n.title},r.a.createElement("a",{href:"https://dayscounter.app/"},"Days counter")),r.a.createElement(T.a,{variant:"h4",component:"h2",className:n.intro},"Track and count ",r.a.createElement("strong",null,"days since")," and ",r.a.createElement("strong",null,"days until")," a certain date"),r.a.createElement("div",null,r.a.createElement(Ot,{onClick:a.onRequestCreate})))},Nt=[{label:"My birthday! \ud83c\udf89",date:"Mar 4",color:1},{label:"International Talk Like a Pirate Day",date:"Sep 19",color:2},{label:"Christmas \ud83c\udf84",date:"Dec 25",color:3},{label:"Our anniversary \u2764\ufe0f",date:"Nov 25",color:4},{label:"Put A Pillow On Your Fridge Day",date:"May 29",color:5}];var Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>4};function St(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return ue(e.date).isBefore(ue(t.date))?-1:1}))}var Dt=a(152),Rt=Object(L.a)((function(e){return{root:Object(Qe.a)({padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,4)}),header:Object(Qe.a)({margin:e.spacing(6,0,0),textAlign:"center"},e.breakpoints.up("lg"),{margin:e.spacing(0),textAlign:"left"}),headers:Object(Qe.a)({},e.breakpoints.up("lg"),{height:"90vh",position:"sticky",top:0}),content:Object(Qe.a)({maxWidth:720,margin:e.spacing(0,"auto"),paddingTop:e.spacing(6)},e.breakpoints.up("lg"),{margin:e.spacing(0),padding:e.spacing(10,0)}),list:{margin:e.spacing(0,0,4,0)},examples:Object(Qe.a)({},e.breakpoints.up("lg"),{height:"calc(100vh - ".concat(e.spacing(20),"px)"),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& > div":{flex:1}}),footer:Object(Qe.a)({marginTop:e.spacing(4),marginBottom:e.spacing(2),textAlign:"center"},e.breakpoints.up("lg"),{marginBottom:e.spacing(0),textAlign:"left"})}}),{name:Dt.a}),qt=Object(j.a)("datastore");var Tt=function(e){var t=Rt(),a=Object(g.b)(),n=a.enqueueSnackbar,o=a.closeSnackbar,i=function(){var e=Object(g.b)(),t=e.enqueueSnackbar,a=e.closeSnackbar,n={key:"UpdateNotification",persist:!0,preventDuplicate:!0,action:r.a.createElement(w.a,{color:"primary",size:"small",onClick:function(){return window.location.reload(!0)}},"Update")};return{show:function(){return t("A new version of this app is available",n)},hide:function(){return a(n.key)}}}(),c=r.a.useState(!1),l=Object(p.a)(c,2),s=l[0],u=l[1],d=r.a.useState(null),m=Object(p.a)(d,2),f=m[0],b=m[1],h=qt([]),v=Object(p.a)(h,2),E=v[0],y=v[1],j=E.filter((function(e){return e.deleted})),C=function(){i.show()},S=function(e){var t=Object(O.a)(Object(O.a)({},e),{},{deleted:!0});D(t),n("Deleted \xab ".concat(e.label||se(e.date)," \xbb"),{key:e.id,action:function(){return q(e)},onClose:function(t,a){"instructed"!==a&&"clickaway"!==a&&function(e){y((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)}})},D=function(e){if(e){var t=E.findIndex((function(t){return t.id===e.id})),a=Object(k.a)(E);a[t]=e,y(a),b(null)}else b(null)},R=function(e){e&&y((function(t){return[].concat(Object(k.a)(t),[e])})),u(!1)},q=function(e){return r.a.createElement(w.a,{color:"primary",size:"small",onClick:function(){return function(e){var t=Object(O.a)(Object(O.a)({},e),{},{deleted:!1});D(t),o(e.id)}(e)}},"Undo")},T=function(e){return r.a.createElement(ze,{data:e,key:e.id,onRequestEdit:function(){return b(e)},onRequestDuplicate:function(){return function(e){R(Object(O.a)(Object(O.a)({},e),{},{id:Date.now()}))}(e)},onRequestDelete:function(){return S(e)}})},B=function(e){if(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Ct(e.length)}(e))return null;var t=e.length;if(j.length){var a=t-j.length;return Ct(a)?"(".concat(a,")"):null}return"(".concat(t,")")},W=function(e,a){return a.length&&a.length!==j.length?r.a.createElement(Ue,{className:t.list,subheader:r.a.createElement(r.a.Fragment,null,e," Counters ",B(a))},a.map(T)):null};return r.a.useEffect((function(){window.addEventListener("DaysCounterAppUpdate",C,{once:!0})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{className:t.grid,container:!0},r.a.createElement(x.a,{item:!0,xs:12,xl:1}),r.a.createElement(x.a,{item:!0,xs:12,lg:5,xl:4,className:t.headers,container:!0,justify:"center",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(xt,{className:t.header,onRequestCreate:function(){return u(!0)}}),r.a.createElement(N.a,{only:["xs","sm","md"],implementation:"css"},r.a.createElement(ht,{className:t.footer,onRequestSwitchTheme:e.onRequestSwitchTheme})))),r.a.createElement(x.a,{item:!0,xs:12,lg:6,xl:5},r.a.createElement("div",{className:t.content},function(){if(E.length)return null;var e=Nt.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{date:mt(e.date)})}));return r.a.createElement("div",{className:t.examples},r.a.createElement(Ue,{subheader:"Some examples below"},St(e).map((function(e){return r.a.createElement(ze,{key:e.id,data:e,interactive:!1})}))))}(),function(){var e=St(E.filter((function(e){return!ue(e.date).isBefore(de)})));return W("Upcoming",e)}(),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return ue(e.date).isBefore(ue(t.date))?1:-1}))}(E.filter((function(e){return ue(e.date).isBefore(de)})));return W("Past",e)}()),r.a.createElement(N.a,{only:["lg","xl"],implementation:"js"},r.a.createElement(ht,{className:t.footer,onRequestSwitchTheme:e.onRequestSwitchTheme}))))),s?r.a.createElement(gt,{onRequestSave:R}):null,f?r.a.createElement(gt,{data:f,onRequestSave:D}):null)},Bt=(a(207),a(208),a(103)),Wt=a.n(Bt),At=a(70),Pt=a.n(At),zt=a(153),Ft=a.n(zt),Mt={headingsFontFamily:"'Righteous', arial",backgroundColor:{light:Pt.a[100],dark:Pt.a[900]},paperBackgroundColor:{light:"#FFF",dark:Pt.a.A400},primaryColor:{light:Wt.a[800],dark:Wt.a[600]},secondaryColor:{light:Ne.a[800],dark:Ne.a[600]},selectionColor:{light:Se.a[800],dark:Ft.a[600]}},It=Mt.selectionColor,Jt=Mt.backgroundColor,Lt=Mt.paperBackgroundColor,Ut=Mt.primaryColor,Yt=Mt.secondaryColor,Vt=Mt.headingsFontFamily;var Ht=function(e){var t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],o=a[1],i=Object(h.a)("(prefers-color-scheme: dark)");r.a.useEffect((function(){o(i)}),[i]);var c=Object(v.a)(function(e){var t=e?"dark":"light",a={type:t,primary:{main:Ut[t]},secondary:{main:Yt[t]},background:{default:Jt[t],paper:Lt[t]}};return e&&(a.primary.contrastText=Jt.light),{typography:{h1:{fontFamily:Vt,color:Ut[t]}},palette:a,overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.8)"}},MuiPaper:{root:{transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiListSubheader:{sticky:{backgroundColor:Lt[t],transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiCssBaseline:{"@global":{"html, body, #root":{width:"100%",height:"100%"},body:{"-webkit-tap-highlight-color":"transparent",transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"},"::selection":{backgroundColor:It[t],color:Jt[t]},a:{color:Ut[t],textDecoration:"none","&:hover, &:focus":{textDecoration:"underline",outline:"none"}}}}}}}(n));return r.a.createElement(E.a,{theme:c},r.a.createElement(b.a,null),r.a.createElement(y.a,{dateAdapter:f.a},r.a.createElement(g.a,{maxSnack:3},r.a.createElement(Tt,{onRequestSwitchTheme:function(){return o(!n)}}))))},_t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Gt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Kt=a(104),$t=a.n(Kt),Qt=a(154),Xt=function(){var e=Object(Qt.a)($t.a.mark((function e(t){return $t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.waiting){e.next=5;break}return e.next=3,t.unregister();case 3:t.waiting.postMessage({type:"SKIP_WAITING"}),window.dispatchEvent(new Event("DaysCounterAppUpdate"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Zt=a(105);l.a.extend(m.a),l.a.extend(u.a),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ht,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");_t?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Gt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Gt(t,e)}))}}({onUpdate:Xt}),console.log(Zt.a,Zt.b)}},[[180,1,2]]]);
//# sourceMappingURL=main.c768a1a8.chunk.js.map