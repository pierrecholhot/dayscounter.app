(this["webpackJsonpdayscounter.app"]=this["webpackJsonpdayscounter.app"]||[]).push([[0],{105:function(e){e.exports=JSON.parse('{"a":"dayscounter.app","b":"0.1.14"}')},129:function(e){e.exports=JSON.parse('{"a":"Color"}')},132:function(e){e.exports=JSON.parse('{"a":"Days"}')},137:function(e){e.exports=JSON.parse('{"a":"ColorPicker"}')},138:function(e){e.exports=JSON.parse('{"a":"DateCardActions"}')},143:function(e){e.exports=JSON.parse('{"a":"DateCard"}')},144:function(e){e.exports=JSON.parse('{"a":"DateCardList"}')},145:function(e){e.exports=JSON.parse('{"a":"MicroButton"}')},146:function(e){e.exports=JSON.parse('{"a":"InputOutline"}')},148:function(e){e.exports=JSON.parse('{"a":"EntryUpdater"}')},150:function(e){e.exports=JSON.parse('{"a":"CTA"}')},152:function(e){e.exports=JSON.parse('{"a":"Header"}')},153:function(e){e.exports=JSON.parse('{"a":"App"}')},182:function(e,t,a){e.exports=a(212)},212:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),c=a(33),l=a.n(c),s=a(122),u=a.n(s),d=a(123),m=a.n(d),p=a(18),f=a(124),g=a(60),b=a(272),h=a(265),v=a(156),E=a(263),y=a(17),k=a(63),O=a(24),j=a(86),w=a(270),C=a(269),N=a(276),x=a(72),S=a(261),D=a(259),R=a(218),q=a(257),T=a(258),B=a(247),W=a(22),A=a(21),M=a.n(A),P=a(275),F=a(130),z=a.n(F),I=a(131),J=a.n(I),Y=a(249),L=a(129),U=Object(Y.a)((function(e){return{root:function(t){return{pointerEvents:t.interactive?"inherit":"none","& svg":{transition:e.transitions.create("color")}}}}}),{name:L.a});function V(e){var t=e.code,a=e.selected,n=e.interactive,o=e.size,i=e.className,c=(Object(W.a)(e,["code","selected","interactive","size","className"]),U({code:t,selected:a,interactive:n})),l={width:o,height:o,color:t};return r.a.createElement(P.a,{tabIndex:n?null:-1,value:t,checked:a,className:M()(c.root,i),icon:r.a.createElement(z.a,{style:l}),checkedIcon:r.a.createElement(J.a,{style:l})})}V.defaultProps={size:28};var H=V,_=a(132),G=Object(Y.a)((function(e){return{root:{fontWeight:"bold",color:e.palette.primary.light,whiteSpace:"nowrap",lineHeight:1}}}),{name:_.a});var K=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=G();return r.a.createElement(x.a,Object.assign({variant:"h6",component:"span",className:M()(n.root,t)},a))},Z=a(251),$=a(260),Q=a(250),X=a(157),ee=a(256),te=a(142),ae=a.n(te),ne=a(140),re=a.n(ne),oe=a(141),ie=a.n(oe),ce=a(139),le=a.n(ce),se=a(277),ue=a(16),de=a(133),me=a.n(de),pe=a(135),fe=a.n(pe),ge=a(134),be=a.n(ge),he=a(99),ve=a.n(he),Ee=a(100),ye=a.n(Ee),ke=a(136),Oe=a.n(ke),je=a(58),we=a.n(je),Ce=a(88),Ne=a.n(Ce),xe=a(101),Se=a.n(xe),De=a(102),Re=a.n(De);function qe(){var e=[],t=Object(ue.a)(),a="dark"===t.palette.type?"400":"300";return e[0]=t.palette.divider,e[1]=me.a[a],e[2]=be.a[a],e[3]=fe.a[a],e[4]=ve.a[a],e[5]=ye.a[a],e[6]=Oe.a[a],e[7]=we.a[a],e[8]=Ne.a[a],e[9]=Se.a[a],e[10]=Re.a[a],{colors:e,getColorValueByIndex:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e[t]||e[0]},getColorIndexByValue:function(t){return e.findIndex((function(e){return t===e}))||0},getRandomColor:function(){return Math.floor(Math.random()*e.length)}}}var Te=a(14),Be=a(137),We=Object(Y.a)((function(e){return{list:Object(Te.a)({flexDirection:"row",justifyContent:"space-between"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})}}),{name:Be.a});var Ae=function(e){var t=e.onSelect,a=e.selected,n=e.hideSelected,o=e.className,i=Object(W.a)(e,["onSelect","selected","hideSelected","className"]),c=We(),l=qe(),s=Object(O.a)({name:"colors",className:M()(c.list,o),onChange:function(e){t(l.getColorIndexByValue(e.target.value))}},i);return r.a.createElement(se.a,s,l.colors.map((function(e){var t=l.colors[a]===e;return t&&n?null:r.a.createElement(H,{interactive:!0,key:e,code:e,selected:t})})))},Me=a(138),Pe=Object(Y.a)((function(e){return{divider:{margin:e.spacing(1,0)},subheader:{lineHeight:1,padding:e.spacing(1,2,.5)},colors:{maxWidth:230,flexWrap:"wrap"}}}),{name:Me.a});var Fe=function(e){var t=e.id,a=e.selectedColor,n=e.onRequestEdit,o=e.onRequestColorChange,i=e.onRequestDuplicate,c=e.onRequestDelete,l=Pe(),s=r.a.useState({open:!1,anchor:null}),u=Object(p.a)(s,2),d=u[0],m=u[1],f=function(){m({open:!1,anchor:null})};return r.a.createElement(Z.a,null,r.a.createElement(Q.a,{"aria-controls":t,"aria-haspopup":"true",onClick:function(e){m({open:!0,anchor:e.currentTarget})}},r.a.createElement(le.a,null)),r.a.createElement(X.a,{overrides:{List:{root:{props:{component:"div"}}}},className:l.menu,id:t,anchorEl:d.anchor,open:d.open,onClose:f,transformOrigin:{vertical:"top"}},r.a.createElement(ee.a,{component:"div",onClick:function(e){f(),n&&n()}},r.a.createElement(q.a,null,r.a.createElement(re.a,null)),r.a.createElement(T.a,{primary:"Edit"})),r.a.createElement(D.a,{className:l.divider}),r.a.createElement($.a,{component:"div",className:l.subheader},"Pick a new color"),r.a.createElement(ee.a,{component:"div",button:!1},r.a.createElement(Ae,{className:l.colors,selected:a,onSelect:function(e){f(),o&&o(e)},hideSelected:!0})),r.a.createElement(D.a,{className:l.divider}),r.a.createElement(ee.a,{component:"div",onClick:function(e){f(),i&&i()}},r.a.createElement(q.a,null,r.a.createElement(ie.a,null)),r.a.createElement(T.a,{primary:"Duplicate"})),r.a.createElement(ee.a,{component:"div",onClick:function(e){f(),c&&c()}},r.a.createElement(q.a,null,r.a.createElement(ae.a,null)),r.a.createElement(T.a,{primary:"Delete Counter"}))))},ze=function(e){return l()(e).format("MMMM Do, YYYY")},Ie=function(e){return l()(e).startOf("day")},Je=Ie(new Date),Ye=a(143),Le=Object(Y.a)((function(e){return{li:{minHeight:79},primary:function(t){return{display:"block",paddingRight:t.interactive?e.spacing(6):null}},when:{marginLeft:e.spacing(1)},label:{marginLeft:e.spacing(1),overflowWrap:"break-word"},skeleton:{display:"inline-block",margin:e.spacing(.5,1,.5,0)}}}),{name:Ye.a});function Ue(e){var t=Le(e),a=qe(),n=r.a.useState(!1),o=Object(p.a)(n,2),i=o[0],c=o[1],l=Ie(e.data.date),s=Math.abs(l.diff(Je,"day")),u=l.isBefore(Je)?l.from(Je):Je.to(l),d="".concat(ze(l)," ").concat(s>25?"(".concat(u,")"):""),m=function(t){e.onRequestDelete&&e.onRequestDelete()},f=function(t){e.onRequestEdit&&e.onRequestEdit()},g=function(t){e.onRequestColorChange&&e.onRequestColorChange(t)},b=function(t){e.onRequestDuplicate&&e.onRequestDuplicate()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{in:!e.data.deleted,onEnter:function(){return c(!1)},onExited:function(){return c(!0)}},r.a.createElement("div",{style:{display:i?"none":"block"}},e.dividerBefore?r.a.createElement(D.a,{component:"div"}):null,r.a.createElement(R.a,{component:"div",className:t.li,divider:e.dividerAfter},r.a.createElement(q.a,null,r.a.createElement(H,{code:a.getColorValueByIndex(l.isValid()?e.data.color:0)})),r.a.createElement(T.a,{primary:l.isValid()?r.a.createElement("span",{className:t.primary},0===s?r.a.createElement(K,null,"Today"):r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,s," ",s>1?"days":"day"),r.a.createElement(x.a,{variant:"body1",component:"span",color:"textSecondary",className:t.when},l.isBefore(Je)?"since":"until")),r.a.createElement(x.a,{variant:"body1",component:"span",className:t.label},e.data.label||d)):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:t.skeleton,variant:"text",width:"15%"}),r.a.createElement(S.a,{className:t.skeleton,variant:"text",width:"10%"}),r.a.createElement(S.a,{className:t.skeleton,variant:"text",width:"40%"})),secondary:l.isValid()?e.data.label?d:null:!!e.data.label&&r.a.createElement(S.a,{variant:"text",width:"50%"})}),e.interactive?r.a.createElement(Fe,{id:e.data.id,selectedColor:e.data.color,onRequestEdit:f,onRequestColorChange:g,onRequestDuplicate:b,onRequestDelete:m}):null))))}Ue.defaultProps={dividerBefore:!0,dividerAfter:!1,interactive:!0};var Ve=Ue,He=a(217),_e=a(255),Ge=a(144),Ke=Object(Y.a)((function(e){return{root:{overflow:"hidden"},list:{padding:0}}}),{name:Ge.a});var Ze=function(e){var t=e.single,a=e.subheader,n=e.className,o=e.children,i=(Object(W.a)(e,["single","subheader","className","children"]),Ke());return r.a.createElement(He.a,{square:t,elevation:0,className:M()(i.root,n)},a?r.a.createElement($.a,{component:"div"},a):null,r.a.createElement(_e.a,{component:"div",className:i.list},o))},$e=a(279),Qe=a(271),Xe=a(268),et=a(267),tt=a(274),at=a(273),nt=a(145),rt=Object(Y.a)((function(e){return{root:Object(O.a)(Object(O.a)({},e.typography.body2),{},{padding:0,margin:0,outline:"0 none",color:e.palette.primary.main,background:"none",border:0,cursor:"pointer","&:hover, &:focus":{textDecoration:"underline"}})}}),{name:nt.a});var ot=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=rt();return r.a.createElement("button",Object.assign({className:M()(n.root,t)},a))},it=a(264),ct=a(280),lt=a(147),st=a.n(lt),ut=a(146),dt=Object(Y.a)((function(e){return{root:{position:"relative",marginTop:e.spacing(1)},wrapper:{position:"relative"},content:{padding:e.spacing(2),borderRadius:e.shape.borderRadius},inputLabel:{position:"absolute",left:0,top:0,transform:"translate(0, ".concat(e.spacing(3),"px) scale(1)")},notch:{borderColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}}}),{name:ut.a}),mt=function(e){var t=e.id,a=e.label,n=e.helperText,o=e.children,c=dt(),l=r.a.useState(0),s=Object(p.a)(l,2),u=s[0],d=s[1],m=r.a.useRef(null);return r.a.useEffect((function(){var e=i.a.findDOMNode(m.current);d(null!=e?e.offsetWidth:0)}),[a]),r.a.createElement("div",{className:c.root},r.a.createElement(ct.a,{ref:m,htmlFor:t,variant:"outlined",className:c.inputLabel,shrink:!0},a),r.a.createElement("div",{className:c.wrapper},r.a.createElement("div",{id:t,className:c.content},o,r.a.createElement(st.a,{notched:!0,labelWidth:u,className:c.notch}))),!!n&&r.a.createElement(it.a,{variant:"outlined"},n))},pt=[{date:"Dec 25",label:"Christmas Day",color:10},{date:"Jan 01",label:"New Year's Day",color:3},{date:"Apr 01",label:"April's Fool Day",color:2}],ft=function(e){var t=Ie(e).set("year",Je.year());return t.isBefore(Je)?t.set("year",Je.year()+1):t},gt=a(148),bt=Object(Y.a)((function(e){return{dialogContent:{paddingTop:0},suggestions:{textAlign:"right",marginTop:e.spacing(2)},suggestionButton:{display:"inline-block","&:not(:last-child):after":{content:'","',marginRight:e.spacing(.5)}},colorsWrapper:{marginTop:e.spacing(2)},preview:{margin:e.spacing(0,-3)},picker:{width:"100%"},dialogPaper:{backgroundColor:e.palette.background.default},formContent:{padding:e.spacing(1,0,3)}}}),{name:gt.a});var ht=function(e){var t=bt(),a=qe(),n=Object(ue.a)(),o=Object(h.a)(n.breakpoints.down("sm")),i=e.data||{},c="object"===typeof e.data&&null!==e.data,l=a.getRandomColor(),s=r.a.useState(i.id||Date.now()),u=Object(p.a)(s,1)[0],d=r.a.useState(i.date||Je),m=Object(p.a)(d,2),f=m[0],g=m[1],b=r.a.useState(i.label||""),v=Object(p.a)(b,2),E=v[0],y=v[1],k=r.a.useState(i.id?i.color:l),O=Object(p.a)(k,2),j=O[0],C=O[1],N={date:f,label:E,color:j},S=function(){e.onRequestSave(null)};return r.a.createElement($e.a,{fullScreen:o,disableBackdropClick:!0,open:!0,fullWidth:!0,maxWidth:"sm",onClose:S,"aria-labelledby":"form-dialog-title",PaperProps:{className:t.dialogPaper}},r.a.createElement(et.a,{id:"form-dialog-title"},c?"Editing":"Creating a"," counter"),r.a.createElement(Xe.a,{dividers:!0,className:t.dialogContent},r.a.createElement(Ze,{single:!0,className:t.preview},r.a.createElement(Ve,{data:N,interactive:!1,dividerAfter:!0,dividerBefore:!1})),c?null:r.a.createElement("div",{className:t.suggestions},c?null:r.a.createElement("div",null,r.a.createElement(x.a,{component:"span",variant:"caption",color:"textSecondary"},"Suggestions:")," ",pt.map((function(e){return r.a.createElement(ot,{key:e.color,className:t.suggestionButton,onClick:function(){return function(e){var t=e.date,a=e.label,n=e.color;g(ft(t)),y(a),C(n)}(e)}},e.label)})))),r.a.createElement("div",{className:t.formContent},r.a.createElement(at.a,{showToolbar:!1,className:t.picker,label:"Date",onChange:function(e){g(e)},value:f,fullWidth:!0,inputFormat:"DD/MM/YYYY",autoOk:!0,minDate:new Date("1900-01-01"),maxDate:new Date("2100-12-31"),renderInput:function(e){return r.a.createElement(tt.a,Object.assign({margin:"normal",variant:"outlined",required:!0,fullWidth:!0},e,{helperText:!c&&"dd/mm/yyyy",error:!Ie(f).isValid()}))}}),r.a.createElement(tt.a,{margin:"normal",label:"Label",InputLabelProps:{shrink:!0},fullWidth:!0,value:E,onChange:function(e){y(e.target.value)},variant:"outlined",helperText:!c&&"Optional but recommended"}),r.a.createElement("div",{className:t.colorsWrapper},r.a.createElement(mt,{id:"colors",label:"Color",helperText:!c&&"Pick a color to tag your counter"},r.a.createElement(Ae,{className:t.colors,selected:j,onSelect:function(e){C(e)}}))))),r.a.createElement(Qe.a,null,r.a.createElement(w.a,{onClick:S,color:"primary"},"Cancel"),r.a.createElement(w.a,{onClick:function(){Ie(f).isValid()&&e.onRequestSave({id:u,date:Ie(f),label:E,color:j})},disabled:!Ie(f).isValid(),color:"primary",variant:E&&f?"contained":"text"},"Save")))},vt=Object(j.a)("showPrivacy");var Et=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=vt(!0),o=Object(p.a)(n,2),i=o[0],c=o[1],l=Object(ue.a)(),s=r.a.createElement("a",{href:"https://github.com/pierrecholhot/dayscounter.app/",target:"_blank",rel:"noopener noreferrer"},"open source"),u=r.a.createElement("a",{href:"https://pierre.cx",target:"_blank",rel:"noopener noreferrer"},"made with love"),d=r.a.createElement(ot,{onClick:a.onRequestSwitchTheme},"dark"===l.palette.type?"light":"dark"," theme");return r.a.createElement("div",{className:M()(t)},r.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"# ",s," # ",u," # ",d),i?r.a.createElement(x.a,{variant:"body2"},r.a.createElement("strong",null,"Privacy:")," Your data is never shared or stored outside of this browser."," ",r.a.createElement(ot,{onClick:function(){return c(!1)}},"Dismiss")):null)},yt=a(151),kt=a.n(yt),Ot=a(150),jt=Object(Y.a)((function(e){return{root:{margin:e.spacing(0,"auto"),maxWidth:e.spacing(40),width:"100%"}}}),{name:Ot.a});var wt=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=jt(),o={className:M()(n.root,t),size:"large",variant:"contained",color:"secondary",startIcon:r.a.createElement(kt.a,null)};return r.a.createElement(w.a,Object.assign({},o,a),"Create counter")},Ct=a(152),Nt=Object(Y.a)((function(e){var t,a,n;return{title:(a={margin:e.spacing(0,0,2),fontSize:"3rem"},Object(Te.a)(a,e.breakpoints.up("sm"),{fontSize:"4rem"}),Object(Te.a)(a,e.breakpoints.up("md"),{fontSize:e.typography.h1.fontSize}),Object(Te.a)(a,e.breakpoints.up("lg"),{fontSize:60}),Object(Te.a)(a,"& a",{display:"inline-block",position:"relative","&::after":(t={content:'".app"',fontSize:"50%",color:e.palette.secondary.light,position:"absolute",right:0,top:-14},Object(Te.a)(t,e.breakpoints.up("md"),{top:-20}),Object(Te.a)(t,e.breakpoints.up("lg"),{top:-14}),t)}),Object(Te.a)(a,"& a:hover",{textDecoration:"none"}),a),intro:(n={display:"inline-block",fontSize:"1.6rem",margin:e.spacing(0,0,4),maxWidth:350},Object(Te.a)(n,e.breakpoints.up("sm"),{fontSize:"2rem",maxWidth:420}),Object(Te.a)(n,e.breakpoints.up("md"),{fontSize:e.typography.h4.fontSize,maxWidth:450}),n)}}),{name:Ct.a});var xt=function(e){var t=e.className,a=Object(W.a)(e,["className"]),n=Nt();return r.a.createElement("div",{className:M()(t)},r.a.createElement(x.a,{variant:"h1",component:"h1",className:n.title},r.a.createElement("a",{href:"https://dayscounter.app/"},"Days counter")),r.a.createElement(x.a,{variant:"h4",component:"h2",className:n.intro},"Track and count ",r.a.createElement("strong",null,"days since")," and ",r.a.createElement("strong",null,"days until")," a certain date"),r.a.createElement("div",null,r.a.createElement(wt,{onClick:a.onRequestCreate})))},St=[{label:"My birthday! \ud83c\udf89",date:"Mar 4",color:1},{label:"International Talk Like a Pirate Day",date:"Sep 19",color:2},{label:"Christmas \ud83c\udf84",date:"Dec 25",color:3},{label:"Our anniversary \u2764\ufe0f",date:"Nov 25",color:4},{label:"Put A Pillow On Your Fridge Day",date:"May 29",color:5}];var Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>4},Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Dt(e.length)};function qt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return Ie(e.date).isBefore(Ie(t.date))?-1:1}))}var Tt=a(153),Bt=Object(Y.a)((function(e){return{root:Object(Te.a)({padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,4)}),header:Object(Te.a)({margin:e.spacing(6,0,0),textAlign:"center"},e.breakpoints.up("lg"),{margin:e.spacing(0),textAlign:"left"}),headers:Object(Te.a)({},e.breakpoints.up("lg"),{height:"90vh",position:"sticky",top:0}),content:Object(Te.a)({maxWidth:720,margin:e.spacing(0,"auto"),paddingTop:e.spacing(6)},e.breakpoints.up("lg"),{margin:e.spacing(0),padding:e.spacing(10,0)}),list:{margin:e.spacing(0,0,4,0)},examples:Object(Te.a)({},e.breakpoints.up("lg"),{height:"calc(100vh - ".concat(e.spacing(20),"px)"),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& > div":{flex:1}}),footer:Object(Te.a)({marginTop:e.spacing(4),marginBottom:e.spacing(2),textAlign:"center"},e.breakpoints.up("lg"),{marginBottom:e.spacing(0),textAlign:"left"})}}),{name:Tt.a}),Wt=Object(j.a)("datastore");var At=function(e){var t=Bt(),a=Object(g.b)(),n=a.enqueueSnackbar,o=a.closeSnackbar,i=function(){var e=Object(g.b)(),t=e.enqueueSnackbar,a=e.closeSnackbar,n={key:"UpdateNotification",persist:!0,preventDuplicate:!0,action:r.a.createElement(w.a,{color:"primary",size:"small",onClick:function(){return window.location.reload(!0)}},"Update")};return{show:function(){return t("A new version of this app is available",n)},hide:function(){return a(n.key)}}}(),c=r.a.useState(!1),l=Object(p.a)(c,2),s=l[0],u=l[1],d=r.a.useState(null),m=Object(p.a)(d,2),f=m[0],b=m[1],h=Wt([]),v=Object(p.a)(h,2),E=v[0],y=v[1],j=E.filter((function(e){return e.deleted})),S=function(e){var t=Object(O.a)(Object(O.a)({},e),{},{deleted:!0});D(t),n("Deleted \xab ".concat(e.label||ze(e.date)," \xbb"),{key:e.id,action:function(){return q(e)},onClose:function(t,a){"instructed"!==a&&"clickaway"!==a&&function(e){y((function(t){return t.filter((function(t){return t.id!==e.id}))}))}(e)}})},D=function(e){if(e){var t=E.findIndex((function(t){return t.id===e.id})),a=Object(k.a)(E);a[t]=e,y(a),b(null)}else b(null)},R=function(e){e&&y((function(t){return[].concat(Object(k.a)(t),[e])})),u(!1)},q=function(e){return r.a.createElement(w.a,{color:"primary",size:"small",onClick:function(){return function(e){var t=Object(O.a)(Object(O.a)({},e),{},{deleted:!1});D(t),o(e.id)}(e)}},"Undo")},T=function(e){return r.a.createElement(Ve,{data:e,key:e.id,onRequestEdit:function(){return b(e)},onRequestColorChange:function(t){return function(e,t){var a=Object(O.a)(Object(O.a)({},e),{},{color:t});D(a)}(e,t)},onRequestDuplicate:function(){return function(e){R(Object(O.a)(Object(O.a)({},e),{},{id:Date.now()}))}(e)},onRequestDelete:function(){return S(e)}})},B=function(e){if(!Rt(e))return null;var t=e.length;if(j.length){var a=t-j.length;return Dt(a)?"(".concat(a,")"):null}return"(".concat(t,")")},W=function(e,a){return a.length&&a.length!==j.length?r.a.createElement(Ze,{className:t.list,subheader:r.a.createElement(r.a.Fragment,null,e," Counters ",B(a))},a.map(T)):null};return r.a.useEffect((function(){window.addEventListener("DaysCounterAppUpdate",(function(){return i.show()}),{once:!0})}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(C.a,{className:t.grid,container:!0},r.a.createElement(C.a,{item:!0,xs:12,xl:1}),r.a.createElement(C.a,{item:!0,xs:12,lg:5,xl:4,className:t.headers,container:!0,justify:"center",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(xt,{className:t.header,onRequestCreate:function(){return u(!0)}}),r.a.createElement(N.a,{only:["xs","sm","md"],implementation:"css"},r.a.createElement(Et,{className:t.footer,onRequestSwitchTheme:e.onRequestSwitchTheme})))),r.a.createElement(C.a,{item:!0,xs:12,lg:6,xl:5},r.a.createElement("div",{className:t.content},E.length?r.a.createElement(x.a,{component:"div",align:"right",color:"textSecondary",variant:"overline",paragraph:!0},Je.format("dddd, MMMM D, YYYY (UTC Z)")):null,function(){if(E.length)return null;var e=St.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{date:ft(e.date)})}));return r.a.createElement("div",{className:t.examples},r.a.createElement(Ze,{subheader:"Some examples below"},qt(e).map((function(e){return r.a.createElement(Ve,{key:e.id,data:e,interactive:!1})}))))}(),function(){var e=qt(E.filter((function(e){return!Ie(e.date).isBefore(Je)})));return W("Upcoming",e)}(),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return Ie(e.date).isBefore(Ie(t.date))?1:-1}))}(E.filter((function(e){return Ie(e.date).isBefore(Je)})));return W("Past",e)}(),E.length&&Rt(E)?r.a.createElement(x.a,{component:"div",align:"right",color:"textSecondary",variant:"overline"},"You have ",E.length," counters in total"):null),r.a.createElement(N.a,{only:["lg","xl"],implementation:"js"},r.a.createElement(Et,{className:t.footer,onRequestSwitchTheme:e.onRequestSwitchTheme}))))),s?r.a.createElement(ht,{onRequestSave:R}):null,f?r.a.createElement(ht,{data:f,onRequestSave:D}):null)},Mt=(a(209),a(210),a(103)),Pt=a.n(Mt),Ft=a(70),zt=a.n(Ft),It=a(154),Jt=a.n(It),Yt={headingsFontFamily:"'Righteous', arial",backgroundColor:{light:zt.a[100],dark:zt.a[900]},paperBackgroundColor:{light:"#FFF",dark:zt.a.A400},primaryColor:{light:Pt.a[800],dark:Pt.a[600]},secondaryColor:{light:we.a[800],dark:we.a[600]},selectionColor:{light:Ne.a[800],dark:Jt.a[600]}},Lt=Yt.selectionColor,Ut=Yt.backgroundColor,Vt=Yt.paperBackgroundColor,Ht=Yt.primaryColor,_t=Yt.secondaryColor,Gt=Yt.headingsFontFamily;var Kt=function(e){var t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],o=a[1],i=Object(h.a)("(prefers-color-scheme: dark)");r.a.useEffect((function(){o(i)}),[i]);var c=Object(v.a)(function(e){var t=e?"dark":"light",a={type:t,primary:{main:Ht[t]},secondary:{main:_t[t]},background:{default:Ut[t],paper:Vt[t]}};return e&&(a.primary.contrastText=Ut.light),{typography:{h1:{fontFamily:Gt,color:Ht[t]}},palette:a,overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.8)"}},MuiPaper:{root:{transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiListSubheader:{sticky:{backgroundColor:Vt[t],transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiCssBaseline:{"@global":{"html, body, #root":{width:"100%",height:"100%"},body:{"-webkit-tap-highlight-color":"transparent",transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"},"::selection":{backgroundColor:Lt[t],color:Ut[t]},a:{color:Ht[t],textDecoration:"none","&:hover, &:focus":{textDecoration:"underline",outline:"none"}}}}}}}(n));return r.a.createElement(E.a,{theme:c},r.a.createElement(b.a,null),r.a.createElement(y.a,{dateAdapter:f.a},r.a.createElement(g.a,{maxSnack:3},r.a.createElement(At,{onRequestSwitchTheme:function(){return o(!n)}}))))},Zt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $t(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Qt=a(104),Xt=a.n(Qt),ea=a(155),ta=function(){var e=Object(ea.a)(Xt.a.mark((function e(t){return Xt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.waiting){e.next=5;break}return e.next=3,t.unregister();case 3:t.waiting.postMessage({type:"SKIP_WAITING"}),window.dispatchEvent(new Event("DaysCounterAppUpdate"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),aa=a(105);l.a.extend(m.a),l.a.extend(u.a),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Kt,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Zt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$t(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$t(t,e)}))}}({onUpdate:ta}),console.log(aa.a,aa.b)}},[[182,1,2]]]);
//# sourceMappingURL=main.23cea2b3.chunk.js.map