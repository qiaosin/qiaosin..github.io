import{aq as X,aB as G,a3 as oe,G as ae,aE as pe,K as ye,X as x,bg as be,u as Q,bh as Ee,bi as te,t as F,bj as Ce,bk as ge,bl as Te,bm as he,b7 as P,e as ee,L as K,d as z,b as H,r as h,bn as we,i as Se,W as Le,J as se,f as B,o as R,c as j,v as U,n as w,j as o,x as Ae,w as k,g as Z,h as Me,E as ke,k as J,a0 as re,l as ie,bo as De,aY as Be,V as Ie,bc as Ne,s as D,bp as Oe,T as Re,bq as $e,br as ne,a_ as Ye,I as _e,ax as He,Z as ze,Y as Ve,ay as Ue,at as We,bd as Ke,m as Xe}from"./index-09328375.js";import{F as Ge,c as Pe,i as je,E as qe}from"./focus-trap-76b79176.js";import{t as xe,U as ue}from"./event-fe80fd0c.js";import{u as le,g as Fe}from"./index-3c681246.js";let V;const Ze=e=>{var s;if(!X)return 0;if(V!==void 0)return V;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const l=t.offsetWidth;t.style.overflow="scroll";const n=document.createElement("div");n.style.width="100%",t.appendChild(n);const i=n.offsetWidth;return(s=t.parentNode)==null||s.removeChild(t),V=l-i,V};function So(e,s){if(!X)return;if(!s){e.scrollTop=0;return}const t=[];let l=s.offsetParent;for(;l!==null&&e!==l&&e.contains(l);)t.push(l),l=l.offsetParent;const n=s.offsetTop+t.reduce((f,c)=>f+c.offsetTop,0),i=n+s.offsetHeight,u=e.scrollTop,r=u+e.clientHeight;n<u?e.scrollTop=n:i>r&&(e.scrollTop=i-e.clientHeight)}var W=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(W||{});const q=e=>{const s=G(e)?e:[e],t=[];return s.forEach(l=>{var n;G(l)?t.push(...q(l)):oe(l)&&G(l.children)?t.push(...q(l.children)):(t.push(l),oe(l)&&((n=l.component)!=null&&n.subTree)&&t.push(...q(l.component.subTree)))}),t},Je=(e,s,t,l)=>{let n={offsetX:0,offsetY:0};const i=f=>{const c=f.clientX,p=f.clientY,{offsetX:y,offsetY:C}=n,v=e.value.getBoundingClientRect(),d=v.left,T=v.top,I=v.width,$=v.height,N=document.documentElement.clientWidth,Y=document.documentElement.clientHeight,_=-d+y,O=-T+C,S=N-d-I+y,L=Y-T-$+C,g=a=>{let m=y+a.clientX-c,b=C+a.clientY-p;l!=null&&l.value||(m=Math.min(Math.max(m,_),S),b=Math.min(Math.max(b,O),L)),n={offsetX:m,offsetY:b},e.value&&(e.value.style.transform=`translate(${x(m)}, ${x(b)})`)},A=()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",A)};document.addEventListener("mousemove",g),document.addEventListener("mouseup",A)},u=()=>{s.value&&e.value&&s.value.addEventListener("mousedown",i)},r=()=>{s.value&&e.value&&s.value.removeEventListener("mousedown",i)};ae(()=>{pe(()=>{t.value?u():r()})}),ye(()=>{r()})},Qe=(e,s={})=>{be(e)||xe("[useLockscreen]","You need to pass a ref param to this function");const t=s.ns||Q("popup"),l=Ee(()=>t.bm("parent","hidden"));if(!X||te(document.body,l.value))return;let n=0,i=!1,u="0";const r=()=>{setTimeout(()=>{he(document==null?void 0:document.body,l.value),i&&document&&(document.body.style.width=u)},200)};F(e,f=>{if(!f){r();return}i=!te(document.body,l.value),i&&(u=document.body.style.width),n=Ze(t.namespace.value);const c=document.documentElement.clientHeight<document.body.scrollHeight,p=Ce(document.body,"overflowY");n>0&&(c||p==="scroll")&&i&&(document.body.style.width=`calc(100% - ${n}px)`),ge(document.body,l.value)}),Te(()=>r())},de=e=>{if(!e)return{onClick:P,onMousedown:P,onMouseup:P};let s=!1,t=!1;return{onClick:u=>{s&&t&&e(u),s=t=!1},onMousedown:u=>{s=u.target===u.currentTarget},onMouseup:u=>{t=u.target===u.currentTarget}}},eo=ee({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:K([String,Array,Object])},zIndex:{type:K([String,Number])}}),oo={click:e=>e instanceof MouseEvent},to="overlay";var so=z({name:"ElOverlay",props:eo,emits:oo,setup(e,{slots:s,emit:t}){const l=Q(to),n=f=>{t("click",f)},{onClick:i,onMousedown:u,onMouseup:r}=de(e.customMaskEvent?void 0:n);return()=>e.mask?H("div",{class:[l.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:i,onMousedown:u,onMouseup:r},[h(s,"default")],W.STYLE|W.CLASS|W.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[h(s,"default")])}});const no=so,ce=Symbol("dialogInjectionKey"),fe=ee({center:Boolean,alignCenter:Boolean,closeIcon:{type:Se},draggable:Boolean,overflow:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),lo={close:()=>!0},ao=["aria-level"],ro=["aria-label"],io=["id"],uo=z({name:"ElDialogContent"}),co=z({...uo,props:fe,emits:lo,setup(e){const s=e,{t}=Le(),{Close:l}=De,{dialogRef:n,headerRef:i,bodyId:u,ns:r,style:f}=se(ce),{focusTrapRef:c}=se(Ge),p=B(()=>[r.b(),r.is("fullscreen",s.fullscreen),r.is("draggable",s.draggable),r.is("align-center",s.alignCenter),{[r.m("center")]:s.center}]),y=Pe(c,n),C=B(()=>s.draggable),v=B(()=>s.overflow);return Je(n,i,C,v),(d,T)=>(R(),j("div",{ref:o(y),class:w(o(p)),style:re(o(f)),tabindex:"-1"},[U("header",{ref_key:"headerRef",ref:i,class:w([o(r).e("header"),{"show-close":d.showClose}])},[h(d.$slots,"header",{},()=>[U("span",{role:"heading","aria-level":d.ariaLevel,class:w(o(r).e("title"))},Ae(d.title),11,ao)]),d.showClose?(R(),j("button",{key:0,"aria-label":o(t)("el.dialog.close"),class:w(o(r).e("headerbtn")),type:"button",onClick:T[0]||(T[0]=I=>d.$emit("close"))},[H(o(ke),{class:w(o(r).e("close"))},{default:k(()=>[(R(),Z(Me(d.closeIcon||o(l))))]),_:1},8,["class"])],10,ro)):J("v-if",!0)],2),U("div",{id:o(u),class:w(o(r).e("body"))},[h(d.$slots,"default")],10,io),d.$slots.footer?(R(),j("footer",{key:0,class:w(o(r).e("footer"))},[h(d.$slots,"footer")],2)):J("v-if",!0)],6))}});var fo=ie(co,[["__file","dialog-content.vue"]]);const vo=ee({...fe,appendToBody:Boolean,appendTo:{type:K(String),default:"body"},beforeClose:{type:K(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),mo={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ue]:e=>Be(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},po=(e,s)=>{var t;const n=Ie().emit,{nextZIndex:i}=Ne();let u="";const r=le(),f=le(),c=D(!1),p=D(!1),y=D(!1),C=D((t=e.zIndex)!=null?t:i());let v,d;const T=Oe("namespace",$e),I=B(()=>{const E={},M=`--${T.value}-dialog`;return e.fullscreen||(e.top&&(E[`${M}-margin-top`]=e.top),e.width&&(E[`${M}-width`]=x(e.width))),E}),$=B(()=>e.alignCenter?{display:"flex"}:{});function N(){n("opened")}function Y(){n("closed"),n(ue,!1),e.destroyOnClose&&(y.value=!1)}function _(){n("close")}function O(){d==null||d(),v==null||v(),e.openDelay&&e.openDelay>0?{stop:v}=ne(()=>A(),e.openDelay):A()}function S(){v==null||v(),d==null||d(),e.closeDelay&&e.closeDelay>0?{stop:d}=ne(()=>a(),e.closeDelay):a()}function L(){function E(M){M||(p.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(E):S()}function g(){e.closeOnClickModal&&L()}function A(){X&&(c.value=!0)}function a(){c.value=!1}function m(){n("openAutoFocus")}function b(){n("closeAutoFocus")}function ve(E){var M;((M=E.detail)==null?void 0:M.focusReason)==="pointer"&&E.preventDefault()}e.lockScroll&&Qe(c);function me(){e.closeOnPressEscape&&L()}return F(()=>e.modelValue,E=>{E?(p.value=!1,O(),y.value=!0,C.value=je(e.zIndex)?i():C.value++,Re(()=>{n("open"),s.value&&(s.value.scrollTop=0)})):c.value&&S()}),F(()=>e.fullscreen,E=>{s.value&&(E?(u=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=u)}),ae(()=>{e.modelValue&&(c.value=!0,y.value=!0,O())}),{afterEnter:N,afterLeave:Y,beforeLeave:_,handleClose:L,onModalClick:g,close:S,doClose:a,onOpenAutoFocus:m,onCloseAutoFocus:b,onCloseRequested:me,onFocusoutPrevented:ve,titleId:r,bodyId:f,closed:p,style:I,overlayDialogStyle:$,rendered:y,visible:c,zIndex:C}},yo=["aria-label","aria-labelledby","aria-describedby"],bo=z({name:"ElDialog",inheritAttrs:!1}),Eo=z({...bo,props:vo,emits:mo,setup(e,{expose:s}){const t=e,l=Ye();Fe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},B(()=>!!l.title));const n=Q("dialog"),i=D(),u=D(),r=D(),{visible:f,titleId:c,bodyId:p,style:y,overlayDialogStyle:C,rendered:v,zIndex:d,afterEnter:T,afterLeave:I,beforeLeave:$,handleClose:N,onModalClick:Y,onOpenAutoFocus:_,onCloseAutoFocus:O,onCloseRequested:S,onFocusoutPrevented:L}=po(t,i);_e(ce,{dialogRef:i,headerRef:u,bodyId:p,ns:n,rendered:v,style:y});const g=de(Y),A=B(()=>t.draggable&&!t.fullscreen);return s({visible:f,dialogContentRef:r}),(a,m)=>(R(),Z(Ke,{to:a.appendTo,disabled:a.appendTo!=="body"?!1:!a.appendToBody},[H(We,{name:"dialog-fade",onAfterEnter:o(T),onAfterLeave:o(I),onBeforeLeave:o($),persisted:""},{default:k(()=>[He(H(o(no),{"custom-mask-event":"",mask:a.modal,"overlay-class":a.modalClass,"z-index":o(d)},{default:k(()=>[U("div",{role:"dialog","aria-modal":"true","aria-label":a.title||void 0,"aria-labelledby":a.title?void 0:o(c),"aria-describedby":o(p),class:w(`${o(n).namespace.value}-overlay-dialog`),style:re(o(C)),onClick:m[0]||(m[0]=(...b)=>o(g).onClick&&o(g).onClick(...b)),onMousedown:m[1]||(m[1]=(...b)=>o(g).onMousedown&&o(g).onMousedown(...b)),onMouseup:m[2]||(m[2]=(...b)=>o(g).onMouseup&&o(g).onMouseup(...b))},[H(o(qe),{loop:"",trapped:o(f),"focus-start-el":"container",onFocusAfterTrapped:o(_),onFocusAfterReleased:o(O),onFocusoutPrevented:o(L),onReleaseRequested:o(S)},{default:k(()=>[o(v)?(R(),Z(fo,ze({key:0,ref_key:"dialogContentRef",ref:r},a.$attrs,{center:a.center,"align-center":a.alignCenter,"close-icon":a.closeIcon,draggable:o(A),overflow:a.overflow,fullscreen:a.fullscreen,"show-close":a.showClose,title:a.title,"aria-level":a.headerAriaLevel,onClose:o(N)}),Ve({header:k(()=>[a.$slots.title?h(a.$slots,"title",{key:1}):h(a.$slots,"header",{key:0,close:o(N),titleId:o(c),titleClass:o(n).e("title")})]),default:k(()=>[h(a.$slots,"default")]),_:2},[a.$slots.footer?{name:"footer",fn:k(()=>[h(a.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):J("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,yo)]),_:3},8,["mask","overlay-class","z-index"]),[[Ue,o(f)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Co=ie(Eo,[["__file","dialog.vue"]]);const Lo=Xe(Co);export{Lo as E,q as f,So as s};
//# sourceMappingURL=dialog-54aac7ab.js.map