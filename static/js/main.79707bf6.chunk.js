(this["webpackJsonpdayscounter.app"]=this["webpackJsonpdayscounter.app"]||[]).push([[0],{127:function(e){e.exports=JSON.parse('{"a":"Color"}')},130:function(e){e.exports=JSON.parse('{"a":"Days"}')},139:function(e){e.exports=JSON.parse('{"a":"DateCard"}')},140:function(e){e.exports=JSON.parse('{"a":"DateCardList"}')},141:function(e){e.exports=JSON.parse('{"a":"ColorPicker"}')},142:function(e){e.exports=JSON.parse('{"a":"MicroButton"}')},143:function(e){e.exports=JSON.parse('{"a":"InputOutline"}')},145:function(e){e.exports=JSON.parse('{"a":"EntryUpdater"}')},147:function(e){e.exports=JSON.parse('{"a":"CTA"}')},149:function(e){e.exports=JSON.parse('{"a":"Header"}')},150:function(e){e.exports=JSON.parse('{"a":"App"}')},177:function(e,t,a){e.exports=a(207)},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(30),l=a.n(i),s=a(120),u=a.n(s),d=a(121),m=a.n(d),p=a(15),f=a(122),g=a(60),h=a(266),b=a(260),v=a(153),E=a(258),y=a(16),k=a(44),O=a(39),w=a(85),j=a(264),N=a(255),C=a(254),S=a(213),x=a(252),D=a(253),R=a(71),B=a(242),q=a(20),W=a(19),A=a.n(W),T=a(269),P=a(128),F=a.n(P),M=a(129),I=a.n(M),z=a(244),J=a(127),L=Object(z.a)((function(e){return{root:function(t){return{pointerEvents:t.interactive?"inherit":"none","& svg":{transition:e.transitions.create("color")}}}}}),{name:J.a});function U(e){var t=e.code,a=e.selected,n=e.interactive,o=e.size,c=e.className,i=(Object(q.a)(e,["code","selected","interactive","size","className"]),L({code:t,selected:a,interactive:n})),l={width:o,height:o,color:t};return r.a.createElement(T.a,{tabIndex:n?null:-1,value:t,checked:a,className:A()(i.root,c),icon:r.a.createElement(F.a,{style:l}),checkedIcon:r.a.createElement(I.a,{style:l})})}U.defaultProps={size:28};var Y=U,V=a(130),_=Object(z.a)((function(e){return{root:{fontWeight:"bold",color:e.palette.primary.light,whiteSpace:"nowrap"}}}),{name:V.a});var H=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=_();return r.a.createElement(R.a,Object.assign({variant:"h6",component:"span",className:A()(n.root,t)},a))},G=a(246),K=a(245),$=a(154),Q=a(251),X=a(134),Z=a.n(X),ee=a(132),te=a.n(ee),ae=a(133),ne=a.n(ae),re=a(131),oe=a.n(re);var ce=function(e){var t=e.id,a=e.onRequestEdit,n=e.onRequestDuplicate,o=e.onRequestDelete,c=r.a.useState({open:!1,anchor:null}),i=Object(p.a)(c,2),l=i[0],s=i[1],u=function(){s({open:!1,anchor:null})};return r.a.createElement(G.a,null,r.a.createElement(K.a,{"aria-controls":t,"aria-haspopup":"true",onClick:function(e){s({open:!0,anchor:e.currentTarget})}},r.a.createElement(oe.a,null)),r.a.createElement($.a,{id:t,anchorEl:l.anchor,open:l.open,onClose:u,transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(Q.a,{onClick:function(e){u(),a&&a()}},r.a.createElement(x.a,null,r.a.createElement(te.a,null)),r.a.createElement(D.a,{primary:"Edit"})),r.a.createElement(Q.a,{onClick:function(e){u(),n&&n()}},r.a.createElement(x.a,null,r.a.createElement(ne.a,null)),r.a.createElement(D.a,{primary:"Duplicate"})),r.a.createElement(Q.a,{onClick:function(e){u(),o&&o()}},r.a.createElement(x.a,null,r.a.createElement(Z.a,null)),r.a.createElement(D.a,{primary:"Delete Counter"}))))},ie=function(e){return l()(e).format("MMMM Do, YYYY")},le=function(e){return l()(e).startOf("day")},se=le(new Date),ue=a(25),de=a(135),me=a.n(de),pe=a(137),fe=a.n(pe),ge=a(136),he=a.n(ge),be=a(97),ve=a.n(be),Ee=a(98),ye=a.n(Ee),ke=a(138),Oe=a.n(ke),we=a(59),je=a.n(we),Ne=a(89),Ce=a.n(Ne),Se=a(99),xe=a.n(Se),De=a(100),Re=a.n(De);function Be(){var e=[],t=Object(ue.a)(),a="dark"===t.palette.type?"400":"300";return e[0]=t.palette.divider,e[1]=me.a[a],e[2]=he.a[a],e[3]=fe.a[a],e[4]=ve.a[a],e[5]=ye.a[a],e[6]=Oe.a[a],e[7]=je.a[a],e[8]=Ce.a[a],e[9]=xe.a[a],e[10]=Re.a[a],{colors:e,getColorValueByIndex:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e[t]||e[0]},getColorIndexByValue:function(t){return e.findIndex((function(e){return t===e}))||0},getRandomColor:function(){return Math.floor(Math.random()*e.length)}}}var qe=a(139),We=Object(z.a)((function(e){return{primary:function(t){return{display:"block",paddingRight:t.interactive?e.spacing(6):null}},when:{marginLeft:e.spacing(1)},label:{marginLeft:e.spacing(1),overflowWrap:"break-word"},skeleton:{display:"inline-block",margin:e.spacing(.5,1,.5,0)}}}),{name:qe.a});function Ae(e){var t=We(e),a=Be(),n=r.a.useState(!1),o=Object(p.a)(n,2),c=o[0],i=o[1],l=le(e.data.date),s=Math.abs(l.diff(se,"day")),u=l.isBefore(se)?l.from(se):se.to(l),d="".concat(ie(l)," ").concat(s>25?"(".concat(u,")"):""),m=function(t){e.onRequestDelete&&e.onRequestDelete()},f=function(t){e.onRequestEdit&&e.onRequestEdit()},g=function(t){e.onRequestDuplicate&&e.onRequestDuplicate()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{in:!e.isBeingDeleted,onEnter:function(){return i(!1)},onExited:function(){return i(!0)}},r.a.createElement("div",{style:{display:c?"none":"block"}},e.dividerBefore?r.a.createElement(C.a,{component:"div"}):null,r.a.createElement(S.a,{component:"div"},r.a.createElement(x.a,null,r.a.createElement(Y,{code:a.getColorValueByIndex(l.isValid()?e.data.color:0)})),r.a.createElement(D.a,{primary:l.isValid()?r.a.createElement("span",{className:t.primary},0===s?r.a.createElement(H,null,"Today"):r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null,s," ",s>1?"days":"day"),r.a.createElement(R.a,{variant:"body1",component:"span",color:"textSecondary",className:t.when},l.isBefore(se)?"since":"until")),r.a.createElement(R.a,{variant:"body1",component:"span",className:t.label},e.data.label||d)):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:t.skeleton,variant:"text",width:"15%"}),r.a.createElement(N.a,{className:t.skeleton,variant:"text",width:"10%"}),r.a.createElement(N.a,{className:t.skeleton,variant:"text",width:"40%"})),secondary:l.isValid()?e.data.label?d:null:!!e.data.label&&r.a.createElement(N.a,{variant:"text",width:"50%"})}),e.interactive?r.a.createElement(ce,{id:e.data.id,onRequestEdit:f,onRequestDuplicate:g,onRequestDelete:m}):null),e.dividerAfter?r.a.createElement(C.a,{component:"div"}):null)))}Ae.defaultProps={dividerBefore:!0,dividerAfter:!1,interactive:!0};var Te=Ae,Pe=a(212),Fe=a(250),Me=a(256),Ie=a(140),ze=Object(z.a)((function(e){return{root:{overflow:"hidden"},list:{padding:0}}}),{name:Ie.a});var Je=function(e){var t=e.subheader,a=e.className,n=e.children,o=(Object(q.a)(e,["subheader","className","children"]),ze());return r.a.createElement(Pe.a,{elevation:0,className:A()(o.root,a)},t?r.a.createElement(Me.a,{component:"div"},t):null,r.a.createElement(Fe.a,{component:"div",className:o.list},n))},Le=a(272),Ue=a(265),Ye=a(263),Ve=a(262),_e=a(268),He=a(267),Ge=a(270),Ke=a(32),$e=a(141),Qe=Object(z.a)((function(e){return{list:Object(Ke.a)({flexDirection:"row",justifyContent:"space-between"},e.breakpoints.down("sm"),{justifyContent:"flex-start"})}}),{name:$e.a});var Xe=function(e){var t=e.onSelect,a=e.selected,n=e.className,o=Object(q.a)(e,["onSelect","selected","className"]),c=Qe(),i=Be(),l=Object(O.a)({name:"colors",className:A()(c.list,n),onChange:function(e){t(i.getColorIndexByValue(e.target.value))}},o);return r.a.createElement(Ge.a,l,i.colors.map((function(e){return r.a.createElement(Y,{interactive:!0,key:e,code:e,selected:i.colors[a]===e})})))},Ze=a(142),et=Object(z.a)((function(e){return{root:Object(O.a)(Object(O.a)({},e.typography.body2),{},{padding:0,margin:0,outline:"0 none",color:e.palette.primary.main,background:"none",border:0,cursor:"pointer","&:hover, &:focus":{textDecoration:"underline"}})}}),{name:Ze.a});var tt=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=et();return r.a.createElement("button",Object.assign({className:A()(n.root,t)},a))},at=a(259),nt=a(273),rt=a(144),ot=a.n(rt),ct=a(143),it=Object(z.a)((function(e){return{root:{position:"relative",marginTop:e.spacing(1)},wrapper:{position:"relative"},content:{padding:e.spacing(2),borderRadius:e.shape.borderRadius},inputLabel:{position:"absolute",left:0,top:0,transform:"translate(0, ".concat(e.spacing(3),"px) scale(1)")},notch:{borderColor:"light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}}}),{name:ct.a}),lt=function(e){var t=e.id,a=e.label,n=e.helperText,o=e.children,c=it(),i=r.a.useState(0),l=Object(p.a)(i,2),s=l[0],u=l[1],d=r.a.useRef(null);return r.a.useEffect((function(){var e=d.current||{current:null};e.current&&u(e.current.offsetWidth)}),[a]),r.a.createElement("div",{className:c.root},r.a.createElement(nt.a,{ref:d,htmlFor:t,variant:"outlined",className:c.inputLabel,shrink:!0},a),r.a.createElement("div",{className:c.wrapper},r.a.createElement("div",{id:t,className:c.content},o,r.a.createElement(ot.a,{notched:!0,labelWidth:s,className:c.notch}))),!!n&&r.a.createElement(at.a,{variant:"outlined"},n))},st=[{date:"Dec 25",label:"Christmas Day",color:10},{date:"Jan 01",label:"New Year's Day",color:3},{date:"Apr 01",label:"April's Fool Day",color:2}],ut=function(e){var t=le(e).set("year",se.year());return t.isBefore(se)?t.set("year",se.year()+1):t},dt=a(145),mt=Object(z.a)((function(e){return{suggestions:{textAlign:"right",margin:e.spacing(1,0)},suggestionButton:{display:"inline-block","&:not(:last-child):after":{content:'","',marginRight:e.spacing(.5)}},colorsWrapper:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},picker:{width:"100%"},dialogPaper:{backgroundColor:e.palette.background.default}}}),{name:dt.a});var pt=function(e){var t=mt(),a=Be(),n=Object(ue.a)(),o=Object(b.a)(n.breakpoints.down("sm")),c=e.data||{},i="object"===typeof e.data&&null!==e.data,l=a.getRandomColor(),s=r.a.useState(c.id||Date.now()),u=Object(p.a)(s,1)[0],d=r.a.useState(c.date||se),m=Object(p.a)(d,2),f=m[0],g=m[1],h=r.a.useState(c.label||""),v=Object(p.a)(h,2),E=v[0],y=v[1],k=r.a.useState(c.id?c.color:l),O=Object(p.a)(k,2),w=O[0],N=O[1],S={date:f,label:E,color:w},x=function(){e.onRequestSave(null)};return r.a.createElement(Le.a,{fullScreen:o,disableBackdropClick:!0,open:!0,fullWidth:!0,maxWidth:"sm",onClose:x,"aria-labelledby":"form-dialog-title",PaperProps:{className:t.dialogPaper}},r.a.createElement(Ve.a,{id:"form-dialog-title"},i?"Editing":"Creating a"," counter"),r.a.createElement(Je,null,r.a.createElement(Te,{data:S,interactive:!1,dividerAfter:!0,dividerBefore:!0})),r.a.createElement(Ye.a,null,i?null:r.a.createElement("div",{className:t.suggestions},i?null:r.a.createElement("div",null,r.a.createElement(R.a,{component:"span",variant:"caption",color:"textSecondary"},"Suggestions:")," ",st.map((function(e){return r.a.createElement(tt,{key:e.color,className:t.suggestionButton,onClick:function(){return function(e){var t=e.date,a=e.label,n=e.color;g(ut(t)),y(a),N(n)}(e)}},e.label)})))),r.a.createElement(He.a,{showToolbar:!1,className:t.picker,label:"Date",onChange:function(e){g(e)},value:f,fullWidth:!0,inputFormat:"DD/MM/YYYY",autoOk:!0,minDate:new Date("1900-01-01"),maxDate:new Date("2100-12-31"),renderInput:function(e){return r.a.createElement(_e.a,Object.assign({margin:"normal",variant:"outlined",required:!0,fullWidth:!0},e,{helperText:!i&&"dd/mm/yyyy"}))}}),r.a.createElement(_e.a,{margin:"normal",label:"Label",InputLabelProps:{shrink:!0},fullWidth:!0,value:E,onChange:function(e){y(e.target.value)},variant:"outlined",helperText:!i&&"Optional but recommended"}),r.a.createElement("div",{className:t.colorsWrapper},r.a.createElement(lt,{id:"colors",label:"Color",helperText:!i&&"Pick a color to tag your counter"},r.a.createElement(Xe,{className:t.colors,selected:w,onSelect:function(e){N(e)}})))),r.a.createElement(C.a,null),r.a.createElement(Ue.a,null,r.a.createElement(j.a,{onClick:x,color:"primary"},"Cancel"),r.a.createElement(j.a,{onClick:function(){le(f).isValid()&&e.onRequestSave({id:u,date:le(f),label:E,color:w})},color:"primary"},"Save")))},ft=Object(w.a)("showPrivacy");var gt=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=ft(!0),o=Object(p.a)(n,2),c=o[0],i=o[1],l=Object(ue.a)(),s=r.a.createElement("a",{href:"https://github.com/pierrecholhot/dayscounter.app/",target:"_blank",rel:"noopener noreferrer"},"open source"),u=r.a.createElement("a",{href:"https://pierre.cx",target:"_blank",rel:"noopener noreferrer"},"made with love"),d=r.a.createElement(tt,{onClick:a.onRequestSwitchTheme},"dark"===l.palette.type?"light":"dark"," theme");return r.a.createElement("div",{className:A()(t)},r.a.createElement(R.a,{variant:"body2",gutterBottom:!0},"# ",s," # ",u," # ",d),c?r.a.createElement(R.a,{variant:"body2"},r.a.createElement("strong",null,"Privacy:")," Your data is never shared or stored outside of this browser."," ",r.a.createElement(tt,{onClick:function(){return i(!1)}},"Dismiss")):null)},ht=a(148),bt=a.n(ht),vt=a(147),Et=Object(z.a)((function(e){return{root:{margin:e.spacing(0,"auto"),maxWidth:e.spacing(40),width:"100%"}}}),{name:vt.a});var yt=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=Et(),o={className:A()(n.root,t),size:"large",variant:"contained",color:"secondary",startIcon:r.a.createElement(bt.a,null)};return r.a.createElement(j.a,Object.assign({},o,a),"Create counter")},kt=a(149),Ot=Object(z.a)((function(e){var t;return{title:(t={margin:e.spacing(0,"auto",3),fontSize:"3rem"},Object(Ke.a)(t,e.breakpoints.up("md"),{fontSize:e.typography.h1.fontSize}),Object(Ke.a)(t,"&::after",{content:'".app"',fontSize:"40%",color:e.palette.secondary.light}),Object(Ke.a)(t,"& a:hover",{textDecoration:"none"}),t),intro:Object(Ke.a)({fontSize:"1.5rem",maxWidth:450,margin:e.spacing(0,"auto",6)},e.breakpoints.up("md"),{fontSize:e.typography.h4.fontSize,maxWidth:500})}}),{name:kt.a});var wt=function(e){var t=e.className,a=Object(q.a)(e,["className"]),n=Ot();return r.a.createElement("div",{className:A()(t)},r.a.createElement(R.a,{variant:"h1",component:"h1",className:n.title},r.a.createElement("a",{href:"https://dayscounter.app/"},"Days Counter")),r.a.createElement(R.a,{variant:"h4",component:"h2",className:n.intro},"Track and count ",r.a.createElement("strong",null,"days since")," and ",r.a.createElement("strong",null,"days until")," a certain date"),r.a.createElement("div",null,r.a.createElement(yt,{onClick:a.onRequestCreate})))},jt=[{label:"My birthday! \ud83c\udf89",date:"Mar 4",color:1},{label:"International Talk Like a Pirate Day",date:"Sep 19",color:2},{label:"Christmas \ud83c\udf84",date:"Dec 25",color:3},{label:"Our anniversary \u2764\ufe0f",date:"Nov 25",color:4},{label:"Put A Pillow On Your Fridge Day",date:"May 29",color:5}];var Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e>4};function Ct(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return le(e.date).isBefore(le(t.date))?-1:1}))}var St=a(150),xt=Object(z.a)((function(e){return{root:Object(Ke.a)({maxWidth:800,margin:e.spacing(0,"auto"),padding:e.spacing(0,2)},e.breakpoints.up("sm"),{padding:e.spacing(0,4)}),header:{margin:e.spacing(4,0,7),textAlign:"center"},list:{marginBottom:e.spacing(4)},footer:{margin:e.spacing(4,0),textAlign:"center"}}}),{name:St.a}),Dt=Object(w.a)("datastore");var Rt=function(e){var t=xt(),a=Object(g.b)(),n=a.enqueueSnackbar,o=a.closeSnackbar,c=function(){var e="UpdateNotification",t=Object(g.b)(),a=t.enqueueSnackbar,n=t.closeSnackbar,o=r.a.createElement(j.a,{color:"primary",size:"small",onClick:function(){return window.location.reload(!0)}},"Update");return{show:function(){return a("A new version of this app is available",{key:e,action:o,persist:!0})},hide:function(){return n(e)}}}(),i=r.a.useState(!1),l=Object(p.a)(i,2),s=l[0],u=l[1],d=r.a.useState(null),m=Object(p.a)(d,2),f=m[0],h=m[1],b=r.a.useState([]),v=Object(p.a)(b,2),E=v[0],y=v[1],w=Dt([]),N=Object(p.a)(w,2),C=N[0],S=N[1],x=function(){c.show()},D=function(e){y((function(t){return[].concat(Object(k.a)(t),[e])})),n("Deleted \xab ".concat(e.label||ie(e.date)," \xbb"),{key:e.id,action:function(){return q(e)},onClose:function(t,a){"instructed"!==a&&"clickaway"!==a&&function(e){var t=function(t){return t.id!==e.id};S((function(e){return e.filter(t)})),y((function(e){return e.filter(t)}))}(e)}})},R=function(e){if(e){var t=C.findIndex((function(t){return t.id===e.id})),a=Object(k.a)(C);a[t]=e,S(a),h(null)}else h(null)},B=function(e){e&&S((function(t){return[].concat(Object(k.a)(t),[e])})),u(!1)},q=function(e){return r.a.createElement(j.a,{color:"primary",size:"small",onClick:function(){return function(e){y((function(t){return t.filter((function(t){return t.id!==e.id}))})),o(e.id)}(e)}},"Undo")},W=function(e){return r.a.createElement(Te,{data:e,key:e.id,onRequestEdit:function(){return h(e)},onRequestDuplicate:function(){return function(e){B(Object(O.a)(Object(O.a)({},e),{},{id:Date.now()}))}(e)},onRequestDelete:function(){return D(e)},isBeingDeleted:E.find((function(t){return t.id===e.id}))})},A=function(e){if(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Nt(e.length)}(e))return null;var t=e.length;if(E.length){var a=t-E.length;return Nt(a)?"(".concat(a,")"):null}return"(".concat(t,")")},T=function(e,a){if(!a.length)return null;if(E.length&&a.every((function(e){return E.find((function(t){return t.id===e.id}))})))return null;return r.a.createElement(Je,{className:t.list,subheader:r.a.createElement(r.a.Fragment,null,e," Counters ",A(a))},a.map(W))};return r.a.useEffect((function(){window.addEventListener("DaysCounterAppUpdate",x,{once:!0})}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(wt,{className:t.header,onRequestCreate:function(){return u(!0)}}),C.length?null:r.a.createElement(Je,{subheader:"Some examples below"},Object(k.a)(jt).map((function(e){return Object(O.a)(Object(O.a)({},e),{},{date:ut(e.date)})})).sort(Ct).map((function(e){return r.a.createElement(Te,{key:e.id,data:e,interactive:!1})}))),function(){var e=Ct(C.filter((function(e){return!le(e.date).isBefore(se)})));return T("Upcoming",e)}(),function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(k.a)(e).sort((function(e,t){return le(e.date).isBefore(le(t.date))?1:-1}))}(C.filter((function(e){return le(e.date).isBefore(se)})));return T("Past",e)}(),r.a.createElement(gt,{className:t.footer,onRequestSwitchTheme:e.onRequestSwitchTheme})),s?r.a.createElement(pt,{onRequestSave:B}):null,f?r.a.createElement(pt,{data:f,onRequestSave:R}):null)},Bt=(a(204),a(205),a(101)),qt=a.n(Bt),Wt=a(69),At=a.n(Wt),Tt=a(151),Pt=a.n(Tt),Ft={headingsFontFamily:"'Righteous', arial",backgroundColor:{light:At.a[100],dark:At.a[900]},paperBackgroundColor:{light:"#FFF",dark:At.a.A400},primaryColor:{light:qt.a[800],dark:qt.a[600]},secondaryColor:{light:je.a[800],dark:je.a[600]},selectionColor:{light:Ce.a[800],dark:Pt.a[600]}},Mt=Ft.selectionColor,It=Ft.backgroundColor,zt=Ft.paperBackgroundColor,Jt=Ft.primaryColor,Lt=Ft.secondaryColor,Ut=Ft.headingsFontFamily;var Yt=function(e){var t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],o=a[1],c=Object(b.a)("(prefers-color-scheme: dark)");r.a.useEffect((function(){o(c)}),[c]);var i=Object(v.a)(function(e){var t=e?"dark":"light",a={type:t,primary:{main:Jt[t]},secondary:{main:Lt[t]},background:{default:It[t],paper:zt[t]}};return{typography:{h1:{fontFamily:Ut,color:Jt[t]}},palette:a,overrides:{MuiBackdrop:{root:{backgroundColor:"rgba(0,0,0,0.8)"}},MuiListSubheader:{sticky:{backgroundColor:zt[t]}},MuiCssBaseline:{"@global":{"html, body, #root":{width:"100%",height:"100%",minHeight:"100vh"},body:{"-webkit-tap-highlight-color":"transparent",transitionProperty:"background-color",transitionDuration:"250ms",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.6, 1)"},"::selection":{backgroundColor:Mt[t],color:It[t]},a:{color:Jt[t],textDecoration:"none","&:hover, &:focus":{textDecoration:"underline",outline:"none"}}}}}}}(n));return r.a.createElement(E.a,{theme:i},r.a.createElement(h.a,null),r.a.createElement(y.a,{dateAdapter:f.a},r.a.createElement(g.a,{maxSnack:3},r.a.createElement(Rt,{onRequestSwitchTheme:function(){return o(!n)}}))))},Vt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _t(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ht=a(102),Gt=a.n(Ht),Kt=a(152),$t=function(){var e=Object(Kt.a)(Gt.a.mark((function e(t){return Gt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.waiting){e.next=5;break}return e.next=3,t.unregister();case 3:t.waiting.postMessage({type:"SKIP_WAITING"}),window.dispatchEvent(new Event("DaysCounterAppUpdate"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();l.a.extend(m.a),l.a.extend(u.a),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Yt,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Vt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_t(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_t(t,e)}))}}({onUpdate:$t})}},[[177,1,2]]]);
//# sourceMappingURL=main.79707bf6.chunk.js.map