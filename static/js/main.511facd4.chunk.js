(this["webpackJsonpdayscounter.app"]=this["webpackJsonpdayscounter.app"]||[]).push([[0],{105:function(e){e.exports=JSON.parse('{"a":"dayscounter.app","b":"0.1.21"}')},128:function(e){e.exports=JSON.parse('{"a":"Color"}')},131:function(e){e.exports=JSON.parse('{"a":"Days"}')},136:function(e){e.exports=JSON.parse('{"a":"ColorPicker"}')},137:function(e){e.exports=JSON.parse('{"a":"DateCardActions"}')},142:function(e){e.exports=JSON.parse('{"a":"DateCard"}')},143:function(e){e.exports=JSON.parse('{"a":"DateCardList"}')},144:function(e){e.exports=JSON.parse('{"a":"MicroButton"}')},145:function(e){e.exports=JSON.parse('{"a":"InputOutline"}')},147:function(e){e.exports=JSON.parse('{"a":"EntryUpdater"}')},150:function(e){e.exports=JSON.parse('{"a":"Footer"}')},151:function(e){e.exports=JSON.parse('{"a":"CTA"}')},153:function(e){e.exports=JSON.parse('{"a":"Header"}')},154:function(e){e.exports=JSON.parse('{"a":"App"}')},183:function(e,a,t){e.exports=t(213)},213:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(10),i=t.n(o),c=t(33),l=t.n(c),s=t(122),u=t.n(s),d=t(123),m=t.n(d),p=t(124),f=t(60),g=t(273),b=t(157),v=t(264),h=t(18),E=t(13),y=t(21),k=t(271),O=t(270),j=t(277),x=t(72),C=t(262),N=t(260),w=t(219),S=t(258),D=t(259),R=t(248),M=t(23),q=t(22),B=t.n(q),P=t(276),T=t(129),W=t.n(T),I=t(130),A=t.n(I),F=t(250),z=t(128),J=Object(F.a)((function(e){return{root:function(a){return{pointerEvents:a.interactive?"inherit":"none","& svg":{transition:e.transitions.create("color")}}}}}),{name:z.a});function Y(e){var a=e.code,t=e.selected,n=e.interactive,o=e.size,i=e.className,c=(Object(M.a)(e,["code","selected","interactive","size","className"]),J({code:a,selected:t,interactive:n})),l={width:o,height:o,color:a};return r.a.createElement(P.a,{tabIndex:n?null:-1,value:a,checked:t,className:B()(c.root,i),icon:r.a.createElement(W.a,{style:l}),checkedIcon:r.a.createElement(A.a,{style:l})})}Y.defaultProps={size:28};var L=Y,U=t(131),V=Object(F.a)((function(e){return{root:{fontWeight:"bold",color:e.palette.primary.light,whiteSpace:"nowrap",lineHeight:1}}}),{name:U.a});var H=function(e){var a=e.className,t=Object(M.a)(e,["className"]),n=V();return r.a.createElement(x.a,Object.assign({variant:"h6",component:"span",className:B()(n.root,a)},t))},_=t(252),G=t(261),K=t(251),Z=t(158),$=t(257),Q=t(141),X=t.n(Q),ee=t(139),ae=t.n(ee),te=t(140),ne=t.n(te),re=t(138),oe=t.n(re),ie=t(278),ce=t(17),le=t(132),se=t.n(le),ue=t(134),de=t.n(ue),me=t(133),pe=t.n(me),fe=t(99),ge=t.n(fe),be=t(100),ve=t.n(be),he=t(135),Ee=t.n(he),ye=t(58),ke=t.n(ye),Oe=t(87),je=t.n(Oe),xe=t(101),Ce=t.n(xe),Ne=t(102),we=t.n(Ne);var Se=function(){var e=[],a=Object(ce.a)(),t="dark"===a.palette.type?"400":"300";return e[0]=a.palette.divider,e[1]=se.a[t],e[2]=pe.a[t],e[3]=de.a[t],e[4]=ge.a[t],e[5]=ve.a[t],e[6]=Ee.a[t],e[7]=ke.a[t],e[8]=je.a[t],e[9]=Ce.a[t],e[10]=we.a[t],{colors:e,getColorValueByIndex:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e[a]||e[0]},getColorIndexByValue:function(a){return e.findIndex((function(e){return a===e}))||0},getRandomColor:function(){return Math.floor(Math.random()*e.length)}}},De=t(12),Re=t(136),Me=Object(F.a)((function(e){return{list:Object(De.a)({flexDirection:"row",justifyContent:"space-between"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})}}),{name:Re.a});var qe=function(e){var a=e.onSelect,t=e.selected,n=e.hideSelected,o=e.className,i=Object(M.a)(e,["onSelect","selected","hideSelected","className"]),c=Me(),l=Se(),s=Object(E.a)({name:"colors",className:B()(c.list,o),onChange:function(e){a(l.getColorIndexByValue(e.target.value))}},i);return r.a.createElement(ie.a,s,l.colors.map((function(e){var a=l.colors[t]===e;return a&&n?null:r.a.createElement(L,{interactive:!0,key:e,code:e,selected:a})})))},Be=t(137),Pe=Object(F.a)((function(e){return{divider:{margin:e.spacing(1,0)},subheader:{lineHeight:1,padding:e.spacing(1,2,.5)},colors:{maxWidth:230,flexWrap:"wrap"}}}),{name:Be.a});var Te=function(e){var a=e.id,t=e.selectedColor,n=e.onRequestEdit,o=e.onRequestColorChange,i=e.onRequestDuplicate,c=e.onRequestDelete,l=Pe(),s=r.a.useState({open:!1,anchor:null}),u=Object(y.a)(s,2),d=u[0],m=u[1],p=function(){m({open:!1,anchor:null})};return r.a.createElement(_.a,null,r.a.createElement(K.a,{"aria-controls":a,"aria-haspopup":"true",onClick:function(e){m({open:!0,anchor:e.currentTarget})}},r.a.createElement(oe.a,null)),r.a.createElement(Z.a,{overrides:{List:{root:{props:{component:"div"}}}},className:l.menu,id:a,anchorEl:d.anchor,open:d.open,onClose:p,transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement($.a,{component:"div",onClick:function(e){p(),n&&n()}},r.a.createElement(S.a,null,r.a.createElement(ae.a,null)),r.a.createElement(D.a,{primary:"Edit"})),r.a.createElement(N.a,{className:l.divider}),r.a.createElement(G.a,{component:"div",className:l.subheader},"Pick a new color"),r.a.createElement($.a,{component:"div",button:!1},r.a.createElement(qe,{className:l.colors,selected:t,onSelect:function(e){p(),o&&o(e)},hideSelected:!0})),r.a.createElement(N.a,{className:l.divider}),r.a.createElement($.a,{component:"div",onClick:function(e){p(),i&&i()}},r.a.createElement(S.a,null,r.a.createElement(ne.a,null)),r.a.createElement(D.a,{primary:"Duplicate"})),r.a.createElement($.a,{component:"div",onClick:function(e){p(),c&&c()}},r.a.createElement(S.a,null,r.a.createElement(X.a,null)),r.a.createElement(D.a,{primary:"Delete Counter"}))))};var We=function(e){return l()(e).format("MMMM Do, YYYY")};var Ie=function(e){return l()(e).startOf("day")},Ae=Ie(new Date),Fe=t(142),ze=Object(F.a)((function(e){return{li:{minHeight:79},primary:function(a){return{display:"block",paddingRight:a.interactive?e.spacing(6):null}},when:{marginLeft:e.spacing(1)},label:{marginLeft:e.spacing(1),overflowWrap:"break-word"},skeleton:{display:"inline-block",margin:e.spacing(.5,1,.5,0)}}}),{name:Fe.a});function Je(e){var a=ze(e),t=Se(),n=r.a.useState(!1),o=Object(y.a)(n,2),i=o[0],c=o[1],l=Ie(e.data.date),s=Math.abs(l.diff(Ae,"day")),u=l.isBefore(Ae)?l.from(Ae):Ae.to(l),d="".concat(We(l)," ").concat(s>25?"(".concat(u,")"):""),m=function(a){e.onRequestDelete&&e.onRequestDelete()},p=function(a){e.onRequestEdit&&e.onRequestEdit()},f=function(a){e.onRequestColorChange&&e.onRequestColorChange(a)},g=function(a){e.onRequestDuplicate&&e.onRequestDuplicate()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{in:!e.data.deleted,onEnter:function(){return c(!1)},onExited:function(){return c(!0)}},r.a.createElement("div",{style:{display:i?"none":"block"}},e.dividerBefore?r.a.createElement(N.a,{component:"div"}):null,r.a.createElement(w.a,{component:"div",className:a.li,divider:e.dividerAfter},r.a.createElement(S.a,null,r.a.createElement(L,{code:t.getColorValueByIndex(l.isValid()?e.data.color:0)})),r.a.createElement(D.a,{primary:l.isValid()?r.a.createElement("span",{className:a.primary},0===s?r.a.createElement(H,null,"Today"):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,s," ",s>1?"days":"day"),r.a.createElement(x.a,{variant:"body1",component:"span",color:"textSecondary",className:a.when},l.isBefore(Ae)?"since":"until")),r.a.createElement(x.a,{variant:"body1",component:"span",className:a.label},e.data.label||d)):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{className:a.skeleton,variant:"text",width:"15%"}),r.a.createElement(C.a,{className:a.skeleton,variant:"text",width:"10%"}),r.a.createElement(C.a,{className:a.skeleton,variant:"text",width:"40%"})),secondary:l.isValid()?e.data.label?d:null:!!e.data.label&&r.a.createElement(C.a,{variant:"text",width:"50%"})}),e.interactive?r.a.createElement(Te,{id:e.data.id,selectedColor:e.data.color,onRequestEdit:p,onRequestColorChange:f,onRequestDuplicate:g,onRequestDelete:m}):null))))}Je.defaultProps={dividerBefore:!0,dividerAfter:!1,interactive:!0};var Ye=Je,Le=t(218),Ue=t(256),Ve=t(143),He=Object(F.a)((function(e){return{root:{overflow:"hidden"},list:{padding:0}}}),{name:Ve.a});var _e=function(e){var a=e.single,t=e.subheader,n=e.className,o=e.children,i=(Object(M.a)(e,["single","subheader","className","children"]),He());return r.a.createElement(Le.a,{square:a,elevation:0,className:B()(i.root,n)},t?r.a.createElement(G.a,{component:"div"},t):null,r.a.createElement(Ue.a,{component:"div",className:i.list},o))},Ge=t(280),Ke=t(272),Ze=t(269),$e=t(268),Qe=t(275),Xe=t(266),ea=t(274),aa=t(144),ta=Object(F.a)((function(e){return{root:Object(E.a)(Object(E.a)({},e.typography.body2),{},{padding:0,margin:0,outline:"0 none",color:e.palette.primary.main,background:"none",border:0,cursor:"pointer","&:hover":{textDecoration:"underline"},"&:focus":Object(De.a)({textDecoration:"underline"},e.customBreakpoints.onlyTouch,{textDecoration:"none"})})}}),{name:aa.a});var na=function(e){var a=e.className,t=Object(M.a)(e,["className"]),n=ta();return r.a.createElement("button",Object.assign({className:B()(n.root,a)},t))},ra=t(265),oa=t(281),ia=t(146),ca=t.n(ia),la=t(145),sa=Object(F.a)((function(e){return{root:{position:"relative",marginTop:e.spacing(1)},wrapper:{position:"relative"},content:{padding:e.spacing(2),borderRadius:e.shape.borderRadius},inputLabel:{position:"absolute",left:0,top:0,transform:"translate(0, ".concat(e.spacing(3),"px) scale(1)")},notch:{borderColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}}}),{name:la.a}),ua=function(e){var a=e.id,t=e.label,n=e.helperText,o=e.children,c=sa(),l=r.a.useState(0),s=Object(y.a)(l,2),u=s[0],d=s[1],m=r.a.useRef(null);return r.a.useEffect((function(){var e=i.a.findDOMNode(m.current);d(null!=e?e.offsetWidth:0)}),[t]),r.a.createElement("div",{className:c.root},r.a.createElement(oa.a,{ref:m,htmlFor:a,variant:"outlined",className:c.inputLabel,shrink:!0},t),r.a.createElement("div",{className:c.wrapper},r.a.createElement("div",{id:a,className:c.content},o,r.a.createElement(ca.a,{notched:!0,labelWidth:u,className:c.notch}))),!!n&&r.a.createElement(ra.a,{variant:"outlined"},n))},da=[{date:"Dec 25",label:"Christmas Day",color:10},{date:"Jan 01",label:"New Year's Day",color:3},{date:"Apr 01",label:"April's Fool Day",color:2}];var ma=function(e){var a=Ie(e).set("year",Ae.year());return a.isBefore(Ae)?a.set("year",Ae.year()+1):a},pa=t(147),fa=Object(F.a)((function(e){return{dialogContent:{paddingTop:0},suggestions:{textAlign:"right",marginTop:e.spacing(2)},suggestionButton:{display:"inline-block","&:not(:last-child):after":{content:'","',marginRight:e.spacing(.5)}},colorsWrapper:{marginTop:e.spacing(2)},preview:{margin:e.spacing(0,-3)},picker:{width:"100%"},dialogPaper:{backgroundColor:e.palette.background.default},formContent:{padding:e.spacing(1,0,3)}}}),{name:pa.a});var ga=function(e){var a=fa(),t=Se(),n=Object(ce.a)(),o=Object(Xe.a)(n.breakpoints.down("sm")),i=e.data||{},c="object"===typeof e.data&&null!==e.data,l=t.getRandomColor(),s=r.a.useState(i.id||Date.now()),u=Object(y.a)(s,1)[0],d=r.a.useState(i.date||Ae),m=Object(y.a)(d,2),p=m[0],f=m[1],g=r.a.useState(i.label||""),b=Object(y.a)(g,2),v=b[0],h=b[1],E=r.a.useState(i.id?i.color:l),O=Object(y.a)(E,2),j=O[0],C=O[1],N={date:p,label:v,color:j},w=function(){e.onRequestSave(null)};return r.a.createElement(Ge.a,{fullScreen:o,disableBackdropClick:!0,open:!0,fullWidth:!0,maxWidth:"sm",onClose:w,"aria-labelledby":"form-dialog-title",PaperProps:{className:a.dialogPaper}},r.a.createElement($e.a,{id:"form-dialog-title"},c?"Editing":"Creating a"," counter"),r.a.createElement(Ze.a,{dividers:!0,className:a.dialogContent},r.a.createElement(_e,{single:!0,className:a.preview},r.a.createElement(Ye,{data:N,interactive:!1,dividerAfter:!0,dividerBefore:!1})),c?null:r.a.createElement("div",{className:a.suggestions},c?null:r.a.createElement("div",null,r.a.createElement(x.a,{component:"span",variant:"caption",color:"textSecondary"},"Suggestions:")," ",da.map((function(e){return r.a.createElement(na,{key:e.color,className:a.suggestionButton,onClick:function(){return function(e){var a=e.date,t=e.label,n=e.color;f(ma(a)),h(t),C(n)}(e)}},e.label)})))),r.a.createElement("div",{className:a.formContent},r.a.createElement(ea.a,{showToolbar:!1,className:a.picker,label:"Date",onChange:function(e){f(e)},value:p,fullWidth:!0,inputFormat:"DD/MM/YYYY",autoOk:!0,minDate:new Date("1900-01-01"),maxDate:new Date("2100-12-31"),renderInput:function(e){return r.a.createElement(Qe.a,Object.assign({margin:"normal",variant:"outlined",required:!0,fullWidth:!0},e,{helperText:!c&&"dd/mm/yyyy",error:!Ie(p).isValid(),InputLabelProps:{shrink:!0}}))}}),r.a.createElement(Qe.a,{margin:"normal",label:"Label",InputLabelProps:{shrink:!0},fullWidth:!0,value:v,onChange:function(e){h(e.target.value)},variant:"outlined",helperText:!c&&"Optional but recommended"}),r.a.createElement("div",{className:a.colorsWrapper},r.a.createElement(ua,{id:"colors",label:"Color",helperText:!c&&"Pick a color to tag your counter"},r.a.createElement(qe,{className:a.colors,selected:j,onSelect:function(e){C(e)}}))))),r.a.createElement(Ke.a,null,r.a.createElement(k.a,{onClick:w,color:"primary"},"Cancel"),r.a.createElement(k.a,{onClick:function(){Ie(p).isValid()&&e.onRequestSave({id:u,date:Ie(p),label:v,color:j})},disabled:!Ie(p).isValid(),color:"primary",variant:v&&p?"contained":"text"},"Save")))},ba=t(90),va=Object(ba.a)("dayscounter-ui");var ha=function(){var e=Object(Xe.a)("(prefers-color-scheme: dark)"),a=va({enableDarkMode:null,hidePrivacyStatement:null}),t=Object(y.a)(a,2),n=t[0],o=t[1];return r.a.useEffect((function(){null===n.enableDarkMode&&o((function(a){return Object(E.a)(Object(E.a)({},a),{},{enableDarkMode:e})}))}),[e,n.enableDarkMode]),{userInterface:n,setUserInterface:o,toggleDarkMode:function(){o((function(e){return Object(E.a)(Object(E.a)({},e),{},{enableDarkMode:!e.enableDarkMode})}))},togglePrivacyStatement:function(){o((function(e){return Object(E.a)(Object(E.a)({},e),{},{hidePrivacyStatement:!e.hidePrivacyStatement})}))}}},Ea=t(150),ya=Object(F.a)((function(e){return{privacy:Object(De.a)({},e.breakpoints.up("lg"),{display:"inline-block",marginTop:e.spacing(1.5),maxWidth:300})}}),{name:Ea.a});var ka=function(e){var a=e.className,t=(Object(M.a)(e,["className"]),ya()),n=ha(),o=n.userInterface,i=n.toggleDarkMode,c=n.togglePrivacyStatement;return r.a.createElement("div",{className:B()(a)},r.a.createElement(x.a,{variant:"body2",gutterBottom:!0},"# ",r.a.createElement("a",{href:"https://github.com/pierrecholhot/dayscounter.app/",target:"_blank",rel:"noopener noreferrer"},"open source")," # ",r.a.createElement("a",{href:"https://pierre.cx",target:"_blank",rel:"noopener noreferrer"},"made with love")," # ",function(){var e="".concat(o.enableDarkMode?"light":"dark"," theme");return r.a.createElement(na,{onClick:i},e)}()),o.hidePrivacyStatement?null:r.a.createElement(x.a,{variant:"body2",className:t.privacy,color:"textSecondary"},r.a.createElement("strong",null,"Privacy:")," Your data is never shared or stored outside of this browser."," ",r.a.createElement(na,{onClick:c},"Dismiss")))},Oa=t(152),ja=t.n(Oa),xa=t(151),Ca=Object(F.a)((function(e){return{root:{margin:e.spacing(0,"auto"),maxWidth:e.spacing(40),width:"100%"}}}),{name:xa.a});var Na=function(e){var a=e.className,t=Object(M.a)(e,["className"]),n=Ca(),o={className:B()(n.root,a),size:"large",variant:"contained",color:"secondary",startIcon:r.a.createElement(ja.a,null)};return r.a.createElement(k.a,Object.assign({},o,t),"Create counter")},wa=t(153),Sa=Object(F.a)((function(e){var a,t,n;return{title:(t={margin:e.spacing(0,0,2),fontSize:"3rem"},Object(De.a)(t,e.breakpoints.up("sm"),{fontSize:"4rem"}),Object(De.a)(t,e.breakpoints.up("md"),{fontSize:e.typography.h1.fontSize}),Object(De.a)(t,e.breakpoints.up("lg"),{fontSize:60}),Object(De.a)(t,"& a",{display:"inline-block",position:"relative","&::after":(a={content:'".app"',fontSize:"50%",color:e.palette.secondary.light,position:"absolute",right:0,top:-14},Object(De.a)(a,e.breakpoints.up("md"),{top:-20}),Object(De.a)(a,e.breakpoints.up("lg"),{top:-14}),a)}),Object(De.a)(t,"& a:hover",{textDecoration:"none"}),t),intro:(n={display:"inline-block",fontSize:"1.6rem",margin:e.spacing(0,0,4),maxWidth:350},Object(De.a)(n,e.breakpoints.up("sm"),{fontSize:"2rem",maxWidth:420}),Object(De.a)(n,e.breakpoints.up("md"),{fontSize:e.typography.h4.fontSize,maxWidth:450}),n)}}),{name:wa.a});var Da=function(e){var a=e.className,t=Object(M.a)(e,["className"]),n=Sa();return r.a.createElement("div",{className:B()(a)},r.a.createElement(x.a,{variant:"h1",component:"h1",className:n.title},r.a.createElement("a",{href:"https://dayscounter.app/"},"Days counter")),r.a.createElement(x.a,{variant:"h4",component:"h2",className:n.intro},"Track and count ",r.a.createElement("strong",null,"days since")," and ",r.a.createElement("strong",null,"days until")," a certain date"),r.a.createElement("div",null,r.a.createElement(Na,{onClick:t.onRequestCreate})))},Ra=[{label:"My birthday! \ud83c\udf89",date:"Mar 4",color:1},{label:"International Talk Like a Pirate Day",date:"Sep 19",color:2},{label:"Christmas \ud83c\udf84",date:"Dec 25",color:3},{label:"Our anniversary \u2764\ufe0f",date:"Nov 25",color:4},{label:"Put A Pillow On Your Fridge Day",date:"May 29",color:5}],Ma="DaysCounterAppUpdate",qa=function(){window.dispatchEvent(new Event(Ma))};var Ba=t(63),Pa=Object(ba.a)("datastore");var Ta=function(){var e=Pa([]),a=Object(y.a)(e,2),t=a[0],n=a[1];function r(e){return t.find((function(a){return a.id===e}))}function o(e){return t.findIndex((function(a){return a.id===e}))}return{dataStore:t,addEntry:function(e){n((function(a){return[e].concat(Object(Ba.a)(a))}))},removeEntry:function(e){n((function(a){return a.filter((function(a){return a.id!==e}))}))},findEntryData:r,findEntryIndex:o,updateEntry:function(e,a){var i=r(e),c=o(e),l=Object(E.a)(Object(E.a)({},i),a),s=Object(Ba.a)(t);return s[c]=l,n(s),l},cleanupEntries:function(){n((function(e){return e.filter((function(e){return!e.deleted}))}))}}};function Wa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>4}function Ia(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Wa(e.length)}function Aa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=function(e,a){return Ie(e.date).isBefore(Ie(a.date))?-1:1};return Object(Ba.a)(e).sort(a)}var Fa=t(154),za=Object(F.a)((function(e){return{root:Object(De.a)({padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,4)}),header:Object(De.a)({margin:e.spacing(6,0,0),textAlign:"center"},e.breakpoints.up("lg"),{margin:e.spacing(0),textAlign:"left"}),headers:Object(De.a)({},e.breakpoints.up("lg"),{height:"90vh",position:"sticky",top:0}),content:Object(De.a)({maxWidth:720,margin:e.spacing(0,"auto"),paddingTop:e.spacing(6)},e.breakpoints.up("lg"),{margin:e.spacing(0),padding:e.spacing(10,0)}),list:{margin:e.spacing(0,0,4,0)},examples:Object(De.a)({},e.breakpoints.up("lg"),{height:"calc(90vh - ".concat(e.spacing(20),"px)"),display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center","& > div":{flex:1}}),footer:Object(De.a)({marginTop:e.spacing(4),marginBottom:e.spacing(4),textAlign:"center"},e.breakpoints.up("lg"),{marginBottom:e.spacing(0),textAlign:"left"})}}),{name:Fa.a});var Ja=function(e){!function(){var e=Object(f.b)(),a=e.enqueueSnackbar,t=e.closeSnackbar,n=function(){var e={key:Ma,persist:!0,action:r.a.createElement(k.a,{color:"primary",size:"small",onClick:function(){return window.location.reload(!0)}},"Update")};a("A new version of this app is available",e)};r.a.useEffect((function(){return window.addEventListener(Ma,n,{once:!0}),function(){return window.removeEventListener(Ma,n)}}),[])}();var a=za(),t=Object(f.b)(),n=t.enqueueSnackbar,o=t.closeSnackbar,i=r.a.useState(!1),c=Object(y.a)(i,2),l=c[0],s=c[1],u=r.a.useState(null),d=Object(y.a)(u,2),m=d[0],p=d[1],g=Ta(),b=g.dataStore,v=g.addEntry,h=g.removeEntry,C=g.updateEntry,N=g.cleanupEntries;r.a.useEffect((function(){N()}),[]);var w=function(e){var a=Object(E.a)(Object(E.a)({},e),{},{deleted:!0});S(a),n("Deleted \xab ".concat(e.label||We(e.date)," \xbb"),{key:e.id,action:function(){return R(e)},onClose:function(a,t){"instructed"!==t&&"clickaway"!==t&&function(e){h(e.id)}(e)}})},S=function(e){e&&C(e.id,e),p(null)},D=function(e){e&&v(e),s(!1)},R=function(e){return r.a.createElement(k.a,{color:"primary",size:"small",onClick:function(){return function(e){var a=Object(E.a)(Object(E.a)({},e),{},{deleted:!1});S(a),o(e.id)}(e)}},"Undo")},M=function(e){return r.a.createElement(Ye,{data:e,key:e.id,onRequestEdit:function(){return p(e)},onRequestColorChange:function(a){return function(e,a){var t=Object(E.a)(Object(E.a)({},e),{},{color:a});S(t)}(e,a)},onRequestDuplicate:function(){return function(e){D(Object(E.a)(Object(E.a)({},e),{},{id:Date.now()}))}(e)},onRequestDelete:function(){return w(e)}})},q=function(e,t){return t.length?r.a.createElement(_e,{className:a.list,subheader:r.a.createElement(r.a.Fragment,null,e," Counters ",(n=t,Ia(n)?"(".concat(n.length,")"):null))},t.map(M)):null;var n};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.root},r.a.createElement(O.a,{className:a.grid,container:!0},r.a.createElement(O.a,{item:!0,xs:12,xl:1}),r.a.createElement(O.a,{item:!0,xs:12,lg:5,xl:4,className:a.headers,container:!0,justify:"center",alignItems:"center"},r.a.createElement("div",null,r.a.createElement(Da,{className:a.header,onRequestCreate:function(){return s(!0)}}),r.a.createElement(j.a,{only:["xs","sm","md"],implementation:"css"},r.a.createElement(ka,{className:a.footer})))),r.a.createElement(O.a,{item:!0,xs:12,lg:6,xl:5},r.a.createElement("div",{className:a.content},b.length?r.a.createElement(x.a,{component:"div",align:"right",color:"textSecondary",variant:"overline",paragraph:!0},Ae.format("dddd, MMMM D, YYYY (UTC Z)")):null,function(){if(b.length)return null;var e=Ra.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{date:ma(e.date)})}));return r.a.createElement("div",{className:a.examples},r.a.createElement(_e,{subheader:"Some examples below"},Aa(e).map((function(e){return r.a.createElement(Ye,{key:e.id,data:e,interactive:!1})}))))}(),function(){var e=Aa(b.filter((function(e){return!Ie(e.date).isBefore(Ae)})));return q("Upcoming",e)}(),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=function(e,a){return Ie(e.date).isBefore(Ie(a.date))?1:-1};return Object(Ba.a)(e).sort(a)}(b.filter((function(e){return Ie(e.date).isBefore(Ae)})));return q("Past",e)}(),b.length&&Ia(b)?r.a.createElement(x.a,{component:"div",align:"right",color:"textSecondary",variant:"overline"},"You have ",b.length," counters in total"):null),r.a.createElement(j.a,{only:["lg","xl"],implementation:"js"},r.a.createElement(ka,{className:a.footer}))))),l?r.a.createElement(ga,{onRequestSave:D}):null,m?r.a.createElement(ga,{data:m,onRequestSave:S}):null)},Ya=(t(210),t(211),t(103)),La=t.n(Ya),Ua=t(70),Va=t.n(Ua),Ha=t(155),_a=t.n(Ha),Ga={headingsFontFamily:"'Righteous', arial",backgroundColor:{light:Va.a[100],dark:Va.a[900]},paperBackgroundColor:{light:"#FFF",dark:Va.a.A400},primaryColor:{light:La.a[800],dark:La.a[600]},secondaryColor:{light:ke.a[800],dark:ke.a[600]},selectionColor:{light:je.a[800],dark:_a.a[600]}};var Ka=function(e){var a=ha().userInterface,t=Object(b.a)(function(e){var a=e?"dark":"light",t={type:a,primary:{main:Ga.primaryColor[a]},secondary:{main:Ga.secondaryColor[a]},background:{default:Ga.backgroundColor[a],paper:Ga.paperBackgroundColor[a]}};e&&(t.primary.contrastText=Ga.backgroundColor.light);var n={h1:{fontFamily:Ga.headingsFontFamily,color:Ga.primaryColor[a]}},r={onlyTouch:"@media (hover: none) and (pointer: coarse)"},o={"html, body, #root":{width:"100%",height:"100%"},body:{"-webkit-tap-highlight-color":"transparent",transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"},"::selection":{backgroundColor:Ga.selectionColor[a],color:Ga.backgroundColor[a]},a:{color:Ga.primaryColor[a],textDecoration:"none","&:hover, &:focus":Object(De.a)({textDecoration:"underline",outline:"none"},r.onlyTouch,{textDecoration:"none"})}};return{typography:n,palette:t,overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.8)"}},MuiPaper:{root:{transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiListSubheader:{sticky:{backgroundColor:Ga.paperBackgroundColor[a],transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"}},MuiCssBaseline:{"@global":o}},customBreakpoints:r}}(a.enableDarkMode));return r.a.createElement(v.a,{theme:t},r.a.createElement(g.a,null),r.a.createElement(h.a,{dateAdapter:p.a},r.a.createElement(f.a,{maxSnack:3},r.a.createElement(Ja,null))))},Za=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $a(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Qa=t(104),Xa=t.n(Qa),et=t(156);function at(){return(at=Object(et.a)(Xa.a.mark((function e(a){return Xa.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===a||void 0===a?void 0:a.waiting)){e.next=5;break}return e.next=3,a.unregister();case 3:a.waiting.postMessage({type:"SKIP_WAITING"}),qa();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var tt=function(e){return at.apply(this,arguments)},nt=t(105);l.a.extend(m.a),l.a.extend(u.a),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ka,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");Za?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$a(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$a(a,e)}))}}({onUpdate:tt}),console.log(nt.a,nt.b)}},[[183,1,2]]]);
//# sourceMappingURL=main.511facd4.chunk.js.map