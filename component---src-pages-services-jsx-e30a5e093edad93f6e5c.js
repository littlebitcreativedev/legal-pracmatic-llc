(self.webpackChunklegal_pracmatic_llc=self.webpackChunklegal_pracmatic_llc||[]).push([[262],{2508:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ae}});var n,r=a(7294),l=a(9703),i=a(3715),o=a(8512),c=a(4586),s=a(4906),d=function(e){var t=e.intl;return r.createElement("div",{className:"section-introduction"},r.createElement(s.Z,{container:!0,spacing:3},r.createElement(s.Z,{item:!0,xs:12,md:3},r.createElement("h2",null,t.formatMessage({id:"service_page.intro_heading"}))),r.createElement(s.Z,{item:!0,xs:12,md:4},r.createElement("p",null,t.formatMessage({id:"service_page.intro_text-one"})),r.createElement("p",null,t.formatMessage({id:"service_page.intro_text-two"})),r.createElement("p",null,t.formatMessage({id:"service_page.intro_text-three"}))),r.createElement(s.Z,{item:!0,xs:12,md:4},r.createElement("p",null,t.formatMessage({id:"service_page.intro_text-four"})),r.createElement("p",null,t.formatMessage({id:"service_page.intro_text-five"})))))},u=a(2122),m=a(1253),f=a(6156),p=(a(5504),a(2585)),v=a(6278),g=a(5165);function h(){if(n)return n;var e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),n="reverse",e.scrollLeft>0?n="default":(e.scrollLeft=1,0===e.scrollLeft&&(n="negative")),document.body.removeChild(e),n}function b(e,t){var a=e.scrollLeft;if("rtl"!==t)return a;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+a;case"reverse":return e.scrollWidth-e.clientWidth-a;default:return a}}function E(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var x={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function w(e){var t=e.onChange,a=(0,m.Z)(e,["onChange"]),n=r.useRef(),l=r.useRef(null),i=function(){n.current=l.current.offsetHeight-l.current.clientHeight};return r.useEffect((function(){var e=(0,v.Z)((function(){var e=n.current;i(),e!==n.current&&t(n.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[t]),r.useEffect((function(){i(),t(n.current)}),[t]),r.createElement("div",(0,u.Z)({style:x,ref:l},a))}var Z=a(3288),y=a(7969),C=r.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.color,i=e.orientation,o=(0,m.Z)(e,["classes","className","color","orientation"]);return r.createElement("span",(0,u.Z)({className:(0,p.Z)(a.root,a["color".concat((0,y.Z)(l))],n,"vertical"===i&&a.vertical),ref:t},o))})),M=(0,Z.Z)((function(e){return{root:{position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create()},colorPrimary:{backgroundColor:e.palette.primary.main},colorSecondary:{backgroundColor:e.palette.secondary.main},vertical:{height:"100%",width:2,right:0}}}),{name:"PrivateTabIndicator"})(C),N=a(8230),k=(0,N.Z)(r.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),S=(0,N.Z)(r.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight"),B=a(3472),W=r.createElement(k,{fontSize:"small"}),L=r.createElement(S,{fontSize:"small"}),z=r.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.direction,i=e.orientation,o=e.disabled,c=(0,m.Z)(e,["classes","className","direction","orientation","disabled"]);return r.createElement(B.Z,(0,u.Z)({component:"div",className:(0,p.Z)(a.root,n,o&&a.disabled,"vertical"===i&&a.vertical),ref:t,role:null,tabIndex:null},c),"left"===l?W:L)})),F=(0,Z.Z)({root:{width:40,flexShrink:0,opacity:.8,"&$disabled":{opacity:0}},vertical:{width:"100%",height:40,"& svg":{transform:"rotate(90deg)"}},disabled:{}},{name:"MuiTabScrollButton"})(z),_=a(6986),R=a(802),T=r.forwardRef((function(e,t){var a=e["aria-label"],n=e["aria-labelledby"],l=e.action,i=e.centered,o=void 0!==i&&i,c=e.children,s=e.classes,d=e.className,x=e.component,Z=void 0===x?"div":x,y=e.indicatorColor,C=void 0===y?"secondary":y,N=e.onChange,k=e.orientation,S=void 0===k?"horizontal":k,B=e.ScrollButtonComponent,W=void 0===B?F:B,L=e.scrollButtons,z=void 0===L?"auto":L,T=e.selectionFollowsFocus,H=e.TabIndicatorProps,I=void 0===H?{}:H,A=e.TabScrollButtonProps,D=e.textColor,P=void 0===D?"inherit":D,j=e.value,$=e.variant,O=void 0===$?"standard":$,U=(0,m.Z)(e,["aria-label","aria-labelledby","action","centered","children","classes","className","component","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant"]),q=(0,R.Z)(),G="scrollable"===O,K="rtl"===q.direction,V="vertical"===S,X=V?"scrollTop":"scrollLeft",J=V?"top":"left",Q=V?"bottom":"right",Y=V?"clientHeight":"clientWidth",ee=V?"height":"width";var te=r.useState(!1),ae=te[0],ne=te[1],re=r.useState({}),le=re[0],ie=re[1],oe=r.useState({start:!1,end:!1}),ce=oe[0],se=oe[1],de=r.useState({overflow:"hidden",marginBottom:null}),ue=de[0],me=de[1],fe=new Map,pe=r.useRef(null),ve=r.useRef(null),ge=function(){var e,t,a=pe.current;if(a){var n=a.getBoundingClientRect();e={clientWidth:a.clientWidth,scrollLeft:a.scrollLeft,scrollTop:a.scrollTop,scrollLeftNormalized:b(a,q.direction),scrollWidth:a.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}if(a&&!1!==j){var r=ve.current.children;if(r.length>0){var l=r[fe.get(j)];0,t=l?l.getBoundingClientRect():null}}return{tabsMeta:e,tabMeta:t}},he=(0,_.Z)((function(){var e,t=ge(),a=t.tabsMeta,n=t.tabMeta,r=0;if(n&&a)if(V)r=n.top-a.top+a.scrollTop;else{var l=K?a.scrollLeftNormalized+a.clientWidth-a.scrollWidth:a.scrollLeft;r=n.left-a.left+l}var i=(e={},(0,f.Z)(e,J,r),(0,f.Z)(e,ee,n?n[ee]:0),e);if(isNaN(le[J])||isNaN(le[ee]))ie(i);else{var o=Math.abs(le[J]-i[J]),c=Math.abs(le[ee]-i[ee]);(o>=1||c>=1)&&ie(i)}})),be=function(e){!function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(){},l=n.ease,i=void 0===l?E:l,o=n.duration,c=void 0===o?300:o,s=null,d=t[e],u=!1,m=function(){u=!0},f=function n(l){if(u)r(new Error("Animation cancelled"));else{null===s&&(s=l);var o=Math.min(1,(l-s)/c);t[e]=i(o)*(a-d)+d,o>=1?requestAnimationFrame((function(){r(null)})):requestAnimationFrame(n)}};d===a?r(new Error("Element already at target position")):requestAnimationFrame(f)}(X,pe.current,e)},Ee=function(e){var t=pe.current[X];V?t+=e:(t+=e*(K?-1:1),t*=K&&"reverse"===h()?-1:1),be(t)},xe=function(){Ee(-pe.current[Y])},we=function(){Ee(pe.current[Y])},Ze=r.useCallback((function(e){me({overflow:null,marginBottom:-e})}),[]),ye=(0,_.Z)((function(){var e=ge(),t=e.tabsMeta,a=e.tabMeta;if(a&&t)if(a[J]<t[J]){var n=t[X]+(a[J]-t[J]);be(n)}else if(a[Q]>t[Q]){var r=t[X]+(a[Q]-t[Q]);be(r)}})),Ce=(0,_.Z)((function(){if(G&&"off"!==z){var e,t,a=pe.current,n=a.scrollTop,r=a.scrollHeight,l=a.clientHeight,i=a.scrollWidth,o=a.clientWidth;if(V)e=n>1,t=n<r-l-1;else{var c=b(pe.current,q.direction);e=K?c<i-o-1:c>1,t=K?c>1:c<i-o-1}e===ce.start&&t===ce.end||se({start:e,end:t})}}));r.useEffect((function(){var e=(0,v.Z)((function(){he(),Ce()})),t=(0,g.Z)(pe.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}),[he,Ce]);var Me=r.useCallback((0,v.Z)((function(){Ce()})));r.useEffect((function(){return function(){Me.clear()}}),[Me]),r.useEffect((function(){ne(!0)}),[]),r.useEffect((function(){he(),Ce()})),r.useEffect((function(){ye()}),[ye,le]),r.useImperativeHandle(l,(function(){return{updateIndicator:he,updateScrollButtons:Ce}}),[he,Ce]);var Ne=r.createElement(M,(0,u.Z)({className:s.indicator,orientation:S,color:C},I,{style:(0,u.Z)({},le,I.style)})),ke=0,Se=r.Children.map(c,(function(e){if(!r.isValidElement(e))return null;var t=void 0===e.props.value?ke:e.props.value;fe.set(t,ke);var a=t===j;return ke+=1,r.cloneElement(e,{fullWidth:"fullWidth"===O,indicator:a&&!ae&&Ne,selected:a,selectionFollowsFocus:T,onChange:N,textColor:P,value:t})})),Be=function(){var e={};e.scrollbarSizeListener=G?r.createElement(w,{className:s.scrollable,onChange:Ze}):null;var t=ce.start||ce.end,a=G&&("auto"===z&&t||"desktop"===z||"on"===z);return e.scrollButtonStart=a?r.createElement(W,(0,u.Z)({orientation:S,direction:K?"right":"left",onClick:xe,disabled:!ce.start,className:(0,p.Z)(s.scrollButtons,"on"!==z&&s.scrollButtonsDesktop)},A)):null,e.scrollButtonEnd=a?r.createElement(W,(0,u.Z)({orientation:S,direction:K?"left":"right",onClick:we,disabled:!ce.end,className:(0,p.Z)(s.scrollButtons,"on"!==z&&s.scrollButtonsDesktop)},A)):null,e}();return r.createElement(Z,(0,u.Z)({className:(0,p.Z)(s.root,d,V&&s.vertical),ref:t},U),Be.scrollButtonStart,Be.scrollbarSizeListener,r.createElement("div",{className:(0,p.Z)(s.scroller,G?s.scrollable:s.fixed),style:ue,ref:pe,onScroll:Me},r.createElement("div",{"aria-label":a,"aria-labelledby":n,className:(0,p.Z)(s.flexContainer,V&&s.flexContainerVertical,o&&!G&&s.centered),onKeyDown:function(e){var t=e.target;if("tab"===t.getAttribute("role")){var a=null,n="vertical"!==S?"ArrowLeft":"ArrowUp",r="vertical"!==S?"ArrowRight":"ArrowDown";switch("vertical"!==S&&"rtl"===q.direction&&(n="ArrowRight",r="ArrowLeft"),e.key){case n:a=t.previousElementSibling||ve.current.lastChild;break;case r:a=t.nextElementSibling||ve.current.firstChild;break;case"Home":a=ve.current.firstChild;break;case"End":a=ve.current.lastChild}null!==a&&(a.focus(),e.preventDefault())}},ref:ve,role:"tablist"},Se),ae&&Ne),Be.scrollButtonEnd)})),H=(0,Z.Z)((function(e){return{root:{overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},vertical:{flexDirection:"column"},flexContainer:{display:"flex"},flexContainerVertical:{flexDirection:"column"},centered:{justifyContent:"center"},scroller:{position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},fixed:{overflowX:"hidden",width:"100%"},scrollable:{overflowX:"scroll",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},scrollButtons:{},scrollButtonsDesktop:(0,f.Z)({},e.breakpoints.down("xs"),{display:"none"}),indicator:{}}}),{name:"MuiTabs"})(T),I=r.forwardRef((function(e,t){var a=e.classes,n=e.className,l=e.disabled,i=void 0!==l&&l,o=e.disableFocusRipple,c=void 0!==o&&o,s=e.fullWidth,d=e.icon,f=e.indicator,v=e.label,g=e.onChange,h=e.onClick,b=e.onFocus,E=e.selected,x=e.selectionFollowsFocus,w=e.textColor,Z=void 0===w?"inherit":w,C=e.value,M=e.wrapped,N=void 0!==M&&M,k=(0,m.Z)(e,["classes","className","disabled","disableFocusRipple","fullWidth","icon","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"]);return r.createElement(B.Z,(0,u.Z)({focusRipple:!c,className:(0,p.Z)(a.root,a["textColor".concat((0,y.Z)(Z))],n,i&&a.disabled,E&&a.selected,v&&d&&a.labelIcon,s&&a.fullWidth,N&&a.wrapped),ref:t,role:"tab","aria-selected":E,disabled:i,onClick:function(e){g&&g(e,C),h&&h(e)},onFocus:function(e){x&&!E&&g&&g(e,C),b&&b(e)},tabIndex:E?0:-1},k),r.createElement("span",{className:a.wrapper},d,v),f)})),A=(0,Z.Z)((function(e){var t;return{root:(0,u.Z)({},e.typography.button,(t={maxWidth:264,minWidth:72,position:"relative",boxSizing:"border-box",minHeight:48,flexShrink:0,padding:"6px 12px"},(0,f.Z)(t,e.breakpoints.up("sm"),{padding:"6px 24px"}),(0,f.Z)(t,"overflow","hidden"),(0,f.Z)(t,"whiteSpace","normal"),(0,f.Z)(t,"textAlign","center"),(0,f.Z)(t,e.breakpoints.up("sm"),{minWidth:160}),t)),labelIcon:{minHeight:72,paddingTop:9,"& $wrapper > *:first-child":{marginBottom:6}},textColorInherit:{color:"inherit",opacity:.7,"&$selected":{opacity:1},"&$disabled":{opacity:.5}},textColorPrimary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.primary.main},"&$disabled":{color:e.palette.text.disabled}},textColorSecondary:{color:e.palette.text.secondary,"&$selected":{color:e.palette.secondary.main},"&$disabled":{color:e.palette.text.disabled}},selected:{},disabled:{},fullWidth:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},wrapped:{fontSize:e.typography.pxToRem(12),lineHeight:1.5},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"}}}),{name:"MuiTab"})(I),D=a(9756),P=function(e){var t=e.children,a=e.value,n=e.index,l=(0,D.Z)(e,["children","value","index"]);return r.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"tabpanel-"+n,"aria-labelledby":"tab-"+n},l),a===n&&r.createElement("div",null,t))},j=a(3618),$=a(7407),O=a.n($),U=a(338),q=a.n(U),G=a(4827),K=a.n(G),V=a(1163),X=a.n(V),J=function(e){return{id:"tab-"+e,"arial-controls":"tabpanel-"+e}},Q=function(e){var t=e.intl,a=(0,r.useState)(0),n=a[0],l=a[1];return r.createElement("div",{className:"service-descriptions"},r.createElement(H,{value:n,onChange:function(e,t){l(t)},variant:"scrollable",scrollButtons:"auto","arial-label":"tabs",className:"services-tabs"},r.createElement(A,Object.assign({className:"service-tab",icon:r.createElement(O(),null),label:t.formatMessage({id:"translations"})},J(0),{"arial-label":"transltations"})),r.createElement(A,Object.assign({className:"service-tab",icon:r.createElement(q(),null),label:t.formatMessage({id:"notary-public"})},J(1),{"arial-label":"notary-public"})),r.createElement(A,Object.assign({className:"service-tab",icon:r.createElement(K(),null),label:t.formatMessage({id:"document-preparation"})},J(2),{"arial-label":"document-preparation"})),r.createElement(A,Object.assign({className:"service-tab",icon:r.createElement(X(),null),label:t.formatMessage({id:"conciliations"})},J(3),{"arial-label":"conciliations"}))),r.createElement("div",{className:"services-tabpanel"},r.createElement(P,{value:n,index:0},r.createElement(j.Z,{imageUrl:"https://imagizer.imageshack.com/img924/3835/T87MLR.png",sectionHeading:t.formatMessage({id:"translations"}),text:t.formatMessage({id:"service_page.translation-description"}),routeName:"/services/translations",linkName:t.formatMessage({id:"learn-more"})})),r.createElement(P,{value:n,index:1},r.createElement(j.Z,{imageUrl:"https://imagizer.imageshack.com/img922/7974/HvEDLN.png",sectionHeading:t.formatMessage({id:"notary-public"}),text:t.formatMessage({id:"service_page.coming-soon"}),routeName:"/services/notary-public",linkName:t.formatMessage({id:"learn-more"})})),r.createElement(P,{value:n,index:2},r.createElement(j.Z,{imageUrl:"https://imagizer.imageshack.com/img922/1758/7IfFbD.png",sectionHeading:t.formatMessage({id:"document-preparation"}),text:t.formatMessage({id:"service_page.coming-soon"}),routeName:"/services/document-preparations",linkName:t.formatMessage({id:"learn-more"})})),r.createElement(P,{value:n,index:3},r.createElement(j.Z,{imageUrl:"https://imagizer.imageshack.com/img922/72/13iGmw.png",sectionHeading:t.formatMessage({id:"conciliations"}),text:t.formatMessage({id:"service_page.coming-soon"}),routeName:"/services/conciliations",linkName:t.formatMessage({id:"learn-more"})}))))},Y=a(8073),ee=a(2197),te=a(5435),ae=(0,l.injectIntl)((function(e){var t=e.location,a=e.intl;return r.createElement(r.Fragment,null,r.createElement(o.Z,{lang:a.locale,title:a.formatMessage({id:"services"})}),r.createElement("div",{className:"services"},r.createElement(i.Z,null,r.createElement(c.Z,{title:a.formatMessage({id:"services"}),imageUrl:"https://imagizer.imageshack.com/img922/7002/aGCfs0.png",altText:"",location:t}),r.createElement(d,{intl:a}),r.createElement(Q,{intl:a}),r.createElement(te.Z,{intl:a})),r.createElement(Y.Z,null),r.createElement(ee.Z,{intl:a})))}))}}]);
//# sourceMappingURL=component---src-pages-services-jsx-e30a5e093edad93f6e5c.js.map