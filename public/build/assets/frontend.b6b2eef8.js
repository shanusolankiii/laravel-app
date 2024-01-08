import{r as Ac,c as Rr,g as yx,j as X}from"./jquery.2116c0e0.js";var ce="top",ke="bottom",we="right",le="left",Xr="auto",Qi=[ce,ke,we,le],ti="start",$i="end",Gm="clippingParents",Ic="viewport",ji="popper",Km="reference",vc=Qi.reduce(function(C,l){return C.concat([l+"-"+ti,l+"-"+$i])},[]),Mc=[].concat(Qi,[Xr]).reduce(function(C,l){return C.concat([l,l+"-"+ti,l+"-"+$i])},[]),Ym="beforeRead",Qm="read",Zm="afterRead",Jm="beforeMain",Xm="main",tb="afterMain",eb="beforeWrite",nb="write",ib="afterWrite",ob=[Ym,Qm,Zm,Jm,Xm,tb,eb,nb,ib];function en(C){return C?(C.nodeName||"").toLowerCase():null}function _e(C){if(C==null)return window;if(C.toString()!=="[object Window]"){var l=C.ownerDocument;return l&&l.defaultView||window}return C}function ei(C){var l=_e(C).Element;return C instanceof l||C instanceof Element}function De(C){var l=_e(C).HTMLElement;return C instanceof l||C instanceof HTMLElement}function Nc(C){if(typeof ShadowRoot>"u")return!1;var l=_e(C).ShadowRoot;return C instanceof l||C instanceof ShadowRoot}function Ex(C){var l=C.state;Object.keys(l.elements).forEach(function(_){var x=l.styles[_]||{},S=l.attributes[_]||{},w=l.elements[_];!De(w)||!en(w)||(Object.assign(w.style,x),Object.keys(S).forEach(function(f){var k=S[f];k===!1?w.removeAttribute(f):w.setAttribute(f,k===!0?"":k)}))})}function xx(C){var l=C.state,_={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,_.popper),l.styles=_,l.elements.arrow&&Object.assign(l.elements.arrow.style,_.arrow),function(){Object.keys(l.elements).forEach(function(x){var S=l.elements[x],w=l.attributes[x]||{},f=Object.keys(l.styles.hasOwnProperty(x)?l.styles[x]:_[x]),k=f.reduce(function(h,b){return h[b]="",h},{});!De(S)||!en(S)||(Object.assign(S.style,k),Object.keys(w).forEach(function(h){S.removeAttribute(h)}))})}}const Pc={name:"applyStyles",enabled:!0,phase:"write",fn:Ex,effect:xx,requires:["computeStyles"]};function Xe(C){return C.split("-")[0]}var Xn=Math.max,Yr=Math.min,Ui=Math.round;function Cc(){var C=navigator.userAgentData;return C!=null&&C.brands&&Array.isArray(C.brands)?C.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function rb(){return!/^((?!chrome|android).)*safari/i.test(Cc())}function qi(C,l,_){l===void 0&&(l=!1),_===void 0&&(_=!1);var x=C.getBoundingClientRect(),S=1,w=1;l&&De(C)&&(S=C.offsetWidth>0&&Ui(x.width)/C.offsetWidth||1,w=C.offsetHeight>0&&Ui(x.height)/C.offsetHeight||1);var f=ei(C)?_e(C):window,k=f.visualViewport,h=!rb()&&_,b=(x.left+(h&&k?k.offsetLeft:0))/S,p=(x.top+(h&&k?k.offsetTop:0))/w,A=x.width/S,v=x.height/w;return{width:A,height:v,top:p,right:b+A,bottom:p+v,left:b,x:b,y:p}}function Lc(C){var l=qi(C),_=C.offsetWidth,x=C.offsetHeight;return Math.abs(l.width-_)<=1&&(_=l.width),Math.abs(l.height-x)<=1&&(x=l.height),{x:C.offsetLeft,y:C.offsetTop,width:_,height:x}}function sb(C,l){var _=l.getRootNode&&l.getRootNode();if(C.contains(l))return!0;if(_&&Nc(_)){var x=l;do{if(x&&C.isSameNode(x))return!0;x=x.parentNode||x.host}while(x)}return!1}function dn(C){return _e(C).getComputedStyle(C)}function Dx(C){return["table","td","th"].indexOf(en(C))>=0}function Tn(C){return((ei(C)?C.ownerDocument:C.document)||window.document).documentElement}function ts(C){return en(C)==="html"?C:C.assignedSlot||C.parentNode||(Nc(C)?C.host:null)||Tn(C)}function hm(C){return!De(C)||dn(C).position==="fixed"?null:C.offsetParent}function Tx(C){var l=/firefox/i.test(Cc()),_=/Trident/i.test(Cc());if(_&&De(C)){var x=dn(C);if(x.position==="fixed")return null}var S=ts(C);for(Nc(S)&&(S=S.host);De(S)&&["html","body"].indexOf(en(S))<0;){var w=dn(S);if(w.transform!=="none"||w.perspective!=="none"||w.contain==="paint"||["transform","perspective"].indexOf(w.willChange)!==-1||l&&w.willChange==="filter"||l&&w.filter&&w.filter!=="none")return S;S=S.parentNode}return null}function Bo(C){for(var l=_e(C),_=hm(C);_&&Dx(_)&&dn(_).position==="static";)_=hm(_);return _&&(en(_)==="html"||en(_)==="body"&&dn(_).position==="static")?l:_||Tx(C)||l}function Oc(C){return["top","bottom"].indexOf(C)>=0?"x":"y"}function Po(C,l,_){return Xn(C,Yr(l,_))}function Sx(C,l,_){var x=Po(C,l,_);return x>_?_:x}function ab(){return{top:0,right:0,bottom:0,left:0}}function cb(C){return Object.assign({},ab(),C)}function lb(C,l){return l.reduce(function(_,x){return _[x]=C,_},{})}var Ix=function(l,_){return l=typeof l=="function"?l(Object.assign({},_.rects,{placement:_.placement})):l,cb(typeof l!="number"?l:lb(l,Qi))};function Mx(C){var l,_=C.state,x=C.name,S=C.options,w=_.elements.arrow,f=_.modifiersData.popperOffsets,k=Xe(_.placement),h=Oc(k),b=[le,we].indexOf(k)>=0,p=b?"height":"width";if(!(!w||!f)){var A=Ix(S.padding,_),v=Lc(w),D=h==="y"?ce:le,P=h==="y"?ke:we,O=_.rects.reference[p]+_.rects.reference[h]-f[h]-_.rects.popper[p],z=f[h]-_.rects.reference[h],V=Bo(w),Z=V?h==="y"?V.clientHeight||0:V.clientWidth||0:0,Y=O/2-z/2,q=A[D],tt=Z-v[p]-A[P],ot=Z/2-v[p]/2+Y,Q=Po(q,ot,tt),et=h;_.modifiersData[x]=(l={},l[et]=Q,l.centerOffset=Q-ot,l)}}function Nx(C){var l=C.state,_=C.options,x=_.element,S=x===void 0?"[data-popper-arrow]":x;S!=null&&(typeof S=="string"&&(S=l.elements.popper.querySelector(S),!S)||!sb(l.elements.popper,S)||(l.elements.arrow=S))}const db={name:"arrow",enabled:!0,phase:"main",fn:Mx,effect:Nx,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Wi(C){return C.split("-")[1]}var Px={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Lx(C,l){var _=C.x,x=C.y,S=l.devicePixelRatio||1;return{x:Ui(_*S)/S||0,y:Ui(x*S)/S||0}}function gm(C){var l,_=C.popper,x=C.popperRect,S=C.placement,w=C.variation,f=C.offsets,k=C.position,h=C.gpuAcceleration,b=C.adaptive,p=C.roundOffsets,A=C.isFixed,v=f.x,D=v===void 0?0:v,P=f.y,O=P===void 0?0:P,z=typeof p=="function"?p({x:D,y:O}):{x:D,y:O};D=z.x,O=z.y;var V=f.hasOwnProperty("x"),Z=f.hasOwnProperty("y"),Y=le,q=ce,tt=window;if(b){var ot=Bo(_),Q="clientHeight",et="clientWidth";if(ot===_e(_)&&(ot=Tn(_),dn(ot).position!=="static"&&k==="absolute"&&(Q="scrollHeight",et="scrollWidth")),ot=ot,S===ce||(S===le||S===we)&&w===$i){q=ke;var M=A&&ot===tt&&tt.visualViewport?tt.visualViewport.height:ot[Q];O-=M-x.height,O*=h?1:-1}if(S===le||(S===ce||S===ke)&&w===$i){Y=we;var J=A&&ot===tt&&tt.visualViewport?tt.visualViewport.width:ot[et];D-=J-x.width,D*=h?1:-1}}var ft=Object.assign({position:k},b&&Px),kt=p===!0?Lx({x:D,y:O},_e(_)):{x:D,y:O};if(D=kt.x,O=kt.y,h){var B;return Object.assign({},ft,(B={},B[q]=Z?"0":"",B[Y]=V?"0":"",B.transform=(tt.devicePixelRatio||1)<=1?"translate("+D+"px, "+O+"px)":"translate3d("+D+"px, "+O+"px, 0)",B))}return Object.assign({},ft,(l={},l[q]=Z?O+"px":"",l[Y]=V?D+"px":"",l.transform="",l))}function Ox(C){var l=C.state,_=C.options,x=_.gpuAcceleration,S=x===void 0?!0:x,w=_.adaptive,f=w===void 0?!0:w,k=_.roundOffsets,h=k===void 0?!0:k,b={placement:Xe(l.placement),variation:Wi(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:S,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,gm(Object.assign({},b,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:f,roundOffsets:h})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,gm(Object.assign({},b,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})}const Bc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ox,data:{}};var jr={passive:!0};function Bx(C){var l=C.state,_=C.instance,x=C.options,S=x.scroll,w=S===void 0?!0:S,f=x.resize,k=f===void 0?!0:f,h=_e(l.elements.popper),b=[].concat(l.scrollParents.reference,l.scrollParents.popper);return w&&b.forEach(function(p){p.addEventListener("scroll",_.update,jr)}),k&&h.addEventListener("resize",_.update,jr),function(){w&&b.forEach(function(p){p.removeEventListener("scroll",_.update,jr)}),k&&h.removeEventListener("resize",_.update,jr)}}const zc={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bx,data:{}};var zx={left:"right",right:"left",bottom:"top",top:"bottom"};function Wr(C){return C.replace(/left|right|bottom|top/g,function(l){return zx[l]})}var Rx={start:"end",end:"start"};function pm(C){return C.replace(/start|end/g,function(l){return Rx[l]})}function Rc(C){var l=_e(C),_=l.pageXOffset,x=l.pageYOffset;return{scrollLeft:_,scrollTop:x}}function jc(C){return qi(Tn(C)).left+Rc(C).scrollLeft}function jx(C,l){var _=_e(C),x=Tn(C),S=_.visualViewport,w=x.clientWidth,f=x.clientHeight,k=0,h=0;if(S){w=S.width,f=S.height;var b=rb();(b||!b&&l==="fixed")&&(k=S.offsetLeft,h=S.offsetTop)}return{width:w,height:f,x:k+jc(C),y:h}}function Fx(C){var l,_=Tn(C),x=Rc(C),S=(l=C.ownerDocument)==null?void 0:l.body,w=Xn(_.scrollWidth,_.clientWidth,S?S.scrollWidth:0,S?S.clientWidth:0),f=Xn(_.scrollHeight,_.clientHeight,S?S.scrollHeight:0,S?S.clientHeight:0),k=-x.scrollLeft+jc(C),h=-x.scrollTop;return dn(S||_).direction==="rtl"&&(k+=Xn(_.clientWidth,S?S.clientWidth:0)-w),{width:w,height:f,x:k,y:h}}function Fc(C){var l=dn(C),_=l.overflow,x=l.overflowX,S=l.overflowY;return/auto|scroll|overlay|hidden/.test(_+S+x)}function ub(C){return["html","body","#document"].indexOf(en(C))>=0?C.ownerDocument.body:De(C)&&Fc(C)?C:ub(ts(C))}function Lo(C,l){var _;l===void 0&&(l=[]);var x=ub(C),S=x===((_=C.ownerDocument)==null?void 0:_.body),w=_e(x),f=S?[w].concat(w.visualViewport||[],Fc(x)?x:[]):x,k=l.concat(f);return S?k:k.concat(Lo(ts(f)))}function yc(C){return Object.assign({},C,{left:C.x,top:C.y,right:C.x+C.width,bottom:C.y+C.height})}function Vx(C,l){var _=qi(C,!1,l==="fixed");return _.top=_.top+C.clientTop,_.left=_.left+C.clientLeft,_.bottom=_.top+C.clientHeight,_.right=_.left+C.clientWidth,_.width=C.clientWidth,_.height=C.clientHeight,_.x=_.left,_.y=_.top,_}function fm(C,l,_){return l===Ic?yc(jx(C,_)):ei(l)?Vx(l,_):yc(Fx(Tn(C)))}function Hx(C){var l=Lo(ts(C)),_=["absolute","fixed"].indexOf(dn(C).position)>=0,x=_&&De(C)?Bo(C):C;return ei(x)?l.filter(function(S){return ei(S)&&sb(S,x)&&en(S)!=="body"}):[]}function $x(C,l,_,x){var S=l==="clippingParents"?Hx(C):[].concat(l),w=[].concat(S,[_]),f=w[0],k=w.reduce(function(h,b){var p=fm(C,b,x);return h.top=Xn(p.top,h.top),h.right=Yr(p.right,h.right),h.bottom=Yr(p.bottom,h.bottom),h.left=Xn(p.left,h.left),h},fm(C,f,x));return k.width=k.right-k.left,k.height=k.bottom-k.top,k.x=k.left,k.y=k.top,k}function hb(C){var l=C.reference,_=C.element,x=C.placement,S=x?Xe(x):null,w=x?Wi(x):null,f=l.x+l.width/2-_.width/2,k=l.y+l.height/2-_.height/2,h;switch(S){case ce:h={x:f,y:l.y-_.height};break;case ke:h={x:f,y:l.y+l.height};break;case we:h={x:l.x+l.width,y:k};break;case le:h={x:l.x-_.width,y:k};break;default:h={x:l.x,y:l.y}}var b=S?Oc(S):null;if(b!=null){var p=b==="y"?"height":"width";switch(w){case ti:h[b]=h[b]-(l[p]/2-_[p]/2);break;case $i:h[b]=h[b]+(l[p]/2-_[p]/2);break}}return h}function Gi(C,l){l===void 0&&(l={});var _=l,x=_.placement,S=x===void 0?C.placement:x,w=_.strategy,f=w===void 0?C.strategy:w,k=_.boundary,h=k===void 0?Gm:k,b=_.rootBoundary,p=b===void 0?Ic:b,A=_.elementContext,v=A===void 0?ji:A,D=_.altBoundary,P=D===void 0?!1:D,O=_.padding,z=O===void 0?0:O,V=cb(typeof z!="number"?z:lb(z,Qi)),Z=v===ji?Km:ji,Y=C.rects.popper,q=C.elements[P?Z:v],tt=$x(ei(q)?q:q.contextElement||Tn(C.elements.popper),h,p,f),ot=qi(C.elements.reference),Q=hb({reference:ot,element:Y,strategy:"absolute",placement:S}),et=yc(Object.assign({},Y,Q)),M=v===ji?et:ot,J={top:tt.top-M.top+V.top,bottom:M.bottom-tt.bottom+V.bottom,left:tt.left-M.left+V.left,right:M.right-tt.right+V.right},ft=C.modifiersData.offset;if(v===ji&&ft){var kt=ft[S];Object.keys(J).forEach(function(B){var nt=[we,ke].indexOf(B)>=0?1:-1,it=[ce,ke].indexOf(B)>=0?"y":"x";J[B]+=kt[it]*nt})}return J}function Ux(C,l){l===void 0&&(l={});var _=l,x=_.placement,S=_.boundary,w=_.rootBoundary,f=_.padding,k=_.flipVariations,h=_.allowedAutoPlacements,b=h===void 0?Mc:h,p=Wi(x),A=p?k?vc:vc.filter(function(P){return Wi(P)===p}):Qi,v=A.filter(function(P){return b.indexOf(P)>=0});v.length===0&&(v=A);var D=v.reduce(function(P,O){return P[O]=Gi(C,{placement:O,boundary:S,rootBoundary:w,padding:f})[Xe(O)],P},{});return Object.keys(D).sort(function(P,O){return D[P]-D[O]})}function qx(C){if(Xe(C)===Xr)return[];var l=Wr(C);return[pm(C),l,pm(l)]}function Wx(C){var l=C.state,_=C.options,x=C.name;if(!l.modifiersData[x]._skip){for(var S=_.mainAxis,w=S===void 0?!0:S,f=_.altAxis,k=f===void 0?!0:f,h=_.fallbackPlacements,b=_.padding,p=_.boundary,A=_.rootBoundary,v=_.altBoundary,D=_.flipVariations,P=D===void 0?!0:D,O=_.allowedAutoPlacements,z=l.options.placement,V=Xe(z),Z=V===z,Y=h||(Z||!P?[Wr(z)]:qx(z)),q=[z].concat(Y).reduce(function(ht,lt){return ht.concat(Xe(lt)===Xr?Ux(l,{placement:lt,boundary:p,rootBoundary:A,padding:b,flipVariations:P,allowedAutoPlacements:O}):lt)},[]),tt=l.rects.reference,ot=l.rects.popper,Q=new Map,et=!0,M=q[0],J=0;J<q.length;J++){var ft=q[J],kt=Xe(ft),B=Wi(ft)===ti,nt=[ce,ke].indexOf(kt)>=0,it=nt?"width":"height",gt=Gi(l,{placement:ft,boundary:p,rootBoundary:A,altBoundary:v,padding:b}),ut=nt?B?we:le:B?ke:ce;tt[it]>ot[it]&&(ut=Wr(ut));var bt=Wr(ut),Gt=[];if(w&&Gt.push(gt[kt]<=0),k&&Gt.push(gt[ut]<=0,gt[bt]<=0),Gt.every(function(ht){return ht})){M=ft,et=!1;break}Q.set(ft,Gt)}if(et)for(var at=P?3:1,jt=function(lt){var Ct=q.find(function(vt){var mt=Q.get(vt);if(mt)return mt.slice(0,lt).every(function(re){return re})});if(Ct)return M=Ct,"break"},F=at;F>0;F--){var rt=jt(F);if(rt==="break")break}l.placement!==M&&(l.modifiersData[x]._skip=!0,l.placement=M,l.reset=!0)}}const gb={name:"flip",enabled:!0,phase:"main",fn:Wx,requiresIfExists:["offset"],data:{_skip:!1}};function mm(C,l,_){return _===void 0&&(_={x:0,y:0}),{top:C.top-l.height-_.y,right:C.right-l.width+_.x,bottom:C.bottom-l.height+_.y,left:C.left-l.width-_.x}}function bm(C){return[ce,we,ke,le].some(function(l){return C[l]>=0})}function Gx(C){var l=C.state,_=C.name,x=l.rects.reference,S=l.rects.popper,w=l.modifiersData.preventOverflow,f=Gi(l,{elementContext:"reference"}),k=Gi(l,{altBoundary:!0}),h=mm(f,x),b=mm(k,S,w),p=bm(h),A=bm(b);l.modifiersData[_]={referenceClippingOffsets:h,popperEscapeOffsets:b,isReferenceHidden:p,hasPopperEscaped:A},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":A})}const pb={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Gx};function Kx(C,l,_){var x=Xe(C),S=[le,ce].indexOf(x)>=0?-1:1,w=typeof _=="function"?_(Object.assign({},l,{placement:C})):_,f=w[0],k=w[1];return f=f||0,k=(k||0)*S,[le,we].indexOf(x)>=0?{x:k,y:f}:{x:f,y:k}}function Yx(C){var l=C.state,_=C.options,x=C.name,S=_.offset,w=S===void 0?[0,0]:S,f=Mc.reduce(function(p,A){return p[A]=Kx(A,l.rects,w),p},{}),k=f[l.placement],h=k.x,b=k.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=h,l.modifiersData.popperOffsets.y+=b),l.modifiersData[x]=f}const fb={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yx};function Qx(C){var l=C.state,_=C.name;l.modifiersData[_]=hb({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})}const Vc={name:"popperOffsets",enabled:!0,phase:"read",fn:Qx,data:{}};function Zx(C){return C==="x"?"y":"x"}function Jx(C){var l=C.state,_=C.options,x=C.name,S=_.mainAxis,w=S===void 0?!0:S,f=_.altAxis,k=f===void 0?!1:f,h=_.boundary,b=_.rootBoundary,p=_.altBoundary,A=_.padding,v=_.tether,D=v===void 0?!0:v,P=_.tetherOffset,O=P===void 0?0:P,z=Gi(l,{boundary:h,rootBoundary:b,padding:A,altBoundary:p}),V=Xe(l.placement),Z=Wi(l.placement),Y=!Z,q=Oc(V),tt=Zx(q),ot=l.modifiersData.popperOffsets,Q=l.rects.reference,et=l.rects.popper,M=typeof O=="function"?O(Object.assign({},l.rects,{placement:l.placement})):O,J=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),ft=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,kt={x:0,y:0};if(!!ot){if(w){var B,nt=q==="y"?ce:le,it=q==="y"?ke:we,gt=q==="y"?"height":"width",ut=ot[q],bt=ut+z[nt],Gt=ut-z[it],at=D?-et[gt]/2:0,jt=Z===ti?Q[gt]:et[gt],F=Z===ti?-et[gt]:-Q[gt],rt=l.elements.arrow,ht=D&&rt?Lc(rt):{width:0,height:0},lt=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:ab(),Ct=lt[nt],vt=lt[it],mt=Po(0,Q[gt],ht[gt]),re=Y?Q[gt]/2-at-mt-Ct-J.mainAxis:jt-mt-Ct-J.mainAxis,hn=Y?-Q[gt]/2+at+mt+vt+J.mainAxis:F+mt+vt+J.mainAxis,je=l.elements.arrow&&Bo(l.elements.arrow),gn=je?q==="y"?je.clientTop||0:je.clientLeft||0:0,to=(B=ft==null?void 0:ft[q])!=null?B:0,Vo=ut+re-to-gn,St=ut+hn-to,oi=Po(D?Yr(bt,Vo):bt,ut,D?Xn(Gt,St):Gt);ot[q]=oi,kt[q]=oi-ut}if(k){var Ho,as=q==="x"?ce:le,$o=q==="x"?ke:we,Fe=ot[tt],ri=tt==="y"?"height":"width",si=Fe+z[as],Qt=Fe-z[$o],ne=[ce,le].indexOf(V)!==-1,eo=(Ho=ft==null?void 0:ft[tt])!=null?Ho:0,Uo=ne?si:Fe-Q[ri]-et[ri]-eo+J.altAxis,de=ne?Fe+Q[ri]+et[ri]-eo-J.altAxis:Qt,fe=D&&ne?Sx(Uo,Fe,de):Po(D?Uo:si,Fe,D?de:Qt);ot[tt]=fe,kt[tt]=fe-Fe}l.modifiersData[x]=kt}}const mb={name:"preventOverflow",enabled:!0,phase:"main",fn:Jx,requiresIfExists:["offset"]};function Xx(C){return{scrollLeft:C.scrollLeft,scrollTop:C.scrollTop}}function tD(C){return C===_e(C)||!De(C)?Rc(C):Xx(C)}function eD(C){var l=C.getBoundingClientRect(),_=Ui(l.width)/C.offsetWidth||1,x=Ui(l.height)/C.offsetHeight||1;return _!==1||x!==1}function nD(C,l,_){_===void 0&&(_=!1);var x=De(l),S=De(l)&&eD(l),w=Tn(l),f=qi(C,S,_),k={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(x||!x&&!_)&&((en(l)!=="body"||Fc(w))&&(k=tD(l)),De(l)?(h=qi(l,!0),h.x+=l.clientLeft,h.y+=l.clientTop):w&&(h.x=jc(w))),{x:f.left+k.scrollLeft-h.x,y:f.top+k.scrollTop-h.y,width:f.width,height:f.height}}function iD(C){var l=new Map,_=new Set,x=[];C.forEach(function(w){l.set(w.name,w)});function S(w){_.add(w.name);var f=[].concat(w.requires||[],w.requiresIfExists||[]);f.forEach(function(k){if(!_.has(k)){var h=l.get(k);h&&S(h)}}),x.push(w)}return C.forEach(function(w){_.has(w.name)||S(w)}),x}function oD(C){var l=iD(C);return ob.reduce(function(_,x){return _.concat(l.filter(function(S){return S.phase===x}))},[])}function rD(C){var l;return function(){return l||(l=new Promise(function(_){Promise.resolve().then(function(){l=void 0,_(C())})})),l}}function sD(C){var l=C.reduce(function(_,x){var S=_[x.name];return _[x.name]=S?Object.assign({},S,x,{options:Object.assign({},S.options,x.options),data:Object.assign({},S.data,x.data)}):x,_},{});return Object.keys(l).map(function(_){return l[_]})}var km={placement:"bottom",modifiers:[],strategy:"absolute"};function wm(){for(var C=arguments.length,l=new Array(C),_=0;_<C;_++)l[_]=arguments[_];return!l.some(function(x){return!(x&&typeof x.getBoundingClientRect=="function")})}function es(C){C===void 0&&(C={});var l=C,_=l.defaultModifiers,x=_===void 0?[]:_,S=l.defaultOptions,w=S===void 0?km:S;return function(k,h,b){b===void 0&&(b=w);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},km,w),modifiersData:{},elements:{reference:k,popper:h},attributes:{},styles:{}},A=[],v=!1,D={state:p,setOptions:function(V){var Z=typeof V=="function"?V(p.options):V;O(),p.options=Object.assign({},w,p.options,Z),p.scrollParents={reference:ei(k)?Lo(k):k.contextElement?Lo(k.contextElement):[],popper:Lo(h)};var Y=oD(sD([].concat(x,p.options.modifiers)));return p.orderedModifiers=Y.filter(function(q){return q.enabled}),P(),D.update()},forceUpdate:function(){if(!v){var V=p.elements,Z=V.reference,Y=V.popper;if(!!wm(Z,Y)){p.rects={reference:nD(Z,Bo(Y),p.options.strategy==="fixed"),popper:Lc(Y)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(J){return p.modifiersData[J.name]=Object.assign({},J.data)});for(var q=0;q<p.orderedModifiers.length;q++){if(p.reset===!0){p.reset=!1,q=-1;continue}var tt=p.orderedModifiers[q],ot=tt.fn,Q=tt.options,et=Q===void 0?{}:Q,M=tt.name;typeof ot=="function"&&(p=ot({state:p,options:et,name:M,instance:D})||p)}}}},update:rD(function(){return new Promise(function(z){D.forceUpdate(),z(p)})}),destroy:function(){O(),v=!0}};if(!wm(k,h))return D;D.setOptions(b).then(function(z){!v&&b.onFirstUpdate&&b.onFirstUpdate(z)});function P(){p.orderedModifiers.forEach(function(z){var V=z.name,Z=z.options,Y=Z===void 0?{}:Z,q=z.effect;if(typeof q=="function"){var tt=q({state:p,name:V,instance:D,options:Y}),ot=function(){};A.push(tt||ot)}})}function O(){A.forEach(function(z){return z()}),A=[]}return D}}var aD=es(),cD=[zc,Vc,Bc,Pc],lD=es({defaultModifiers:cD}),dD=[zc,Vc,Bc,Pc,fb,gb,mb,db,pb],Hc=es({defaultModifiers:dD});const bb=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:es,detectOverflow:Gi,createPopperBase:aD,createPopper:Hc,createPopperLite:lD,top:ce,bottom:ke,right:we,left:le,auto:Xr,basePlacements:Qi,start:ti,end:$i,clippingParents:Gm,viewport:Ic,popper:ji,reference:Km,variationPlacements:vc,placements:Mc,beforeRead:Ym,read:Qm,afterRead:Zm,beforeMain:Jm,main:Xm,afterMain:tb,beforeWrite:eb,write:nb,afterWrite:ib,modifierPhases:ob,applyStyles:Pc,arrow:db,computeStyles:Bc,eventListeners:zc,flip:gb,hide:pb,offset:fb,popperOffsets:Vc,preventOverflow:mb},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const yn=new Map,ac={set(C,l,_){yn.has(C)||yn.set(C,new Map);const x=yn.get(C);if(!x.has(l)&&x.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(x.keys())[0]}.`);return}x.set(l,_)},get(C,l){return yn.has(C)&&yn.get(C).get(l)||null},remove(C,l){if(!yn.has(C))return;const _=yn.get(C);_.delete(l),_.size===0&&yn.delete(C)}},uD=1e6,hD=1e3,Ec="transitionend",kb=C=>(C&&window.CSS&&window.CSS.escape&&(C=C.replace(/#([^\s"#']+)/g,(l,_)=>`#${CSS.escape(_)}`)),C),gD=C=>C==null?`${C}`:Object.prototype.toString.call(C).match(/\s([a-z]+)/i)[1].toLowerCase(),pD=C=>{do C+=Math.floor(Math.random()*uD);while(document.getElementById(C));return C},fD=C=>{if(!C)return 0;let{transitionDuration:l,transitionDelay:_}=window.getComputedStyle(C);const x=Number.parseFloat(l),S=Number.parseFloat(_);return!x&&!S?0:(l=l.split(",")[0],_=_.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(_))*hD)},wb=C=>{C.dispatchEvent(new Event(Ec))},cn=C=>!C||typeof C!="object"?!1:(typeof C.jquery<"u"&&(C=C[0]),typeof C.nodeType<"u"),En=C=>cn(C)?C.jquery?C[0]:C:typeof C=="string"&&C.length>0?document.querySelector(kb(C)):null,Zi=C=>{if(!cn(C)||C.getClientRects().length===0)return!1;const l=getComputedStyle(C).getPropertyValue("visibility")==="visible",_=C.closest("details:not([open])");if(!_)return l;if(_!==C){const x=C.closest("summary");if(x&&x.parentNode!==_||x===null)return!1}return l},xn=C=>!C||C.nodeType!==Node.ELEMENT_NODE||C.classList.contains("disabled")?!0:typeof C.disabled<"u"?C.disabled:C.hasAttribute("disabled")&&C.getAttribute("disabled")!=="false",_b=C=>{if(!document.documentElement.attachShadow)return null;if(typeof C.getRootNode=="function"){const l=C.getRootNode();return l instanceof ShadowRoot?l:null}return C instanceof ShadowRoot?C:C.parentNode?_b(C.parentNode):null},Qr=()=>{},zo=C=>{C.offsetHeight},Ab=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,cc=[],mD=C=>{document.readyState==="loading"?(cc.length||document.addEventListener("DOMContentLoaded",()=>{for(const l of cc)l()}),cc.push(C)):C()},Te=()=>document.documentElement.dir==="rtl",Ie=C=>{mD(()=>{const l=Ab();if(l){const _=C.NAME,x=l.fn[_];l.fn[_]=C.jQueryInterface,l.fn[_].Constructor=C,l.fn[_].noConflict=()=>(l.fn[_]=x,C.jQueryInterface)}})},pe=(C,l=[],_=C)=>typeof C=="function"?C(...l):_,vb=(C,l,_=!0)=>{if(!_){pe(C);return}const x=5,S=fD(l)+x;let w=!1;const f=({target:k})=>{k===l&&(w=!0,l.removeEventListener(Ec,f),pe(C))};l.addEventListener(Ec,f),setTimeout(()=>{w||wb(l)},S)},$c=(C,l,_,x)=>{const S=C.length;let w=C.indexOf(l);return w===-1?!_&&x?C[S-1]:C[0]:(w+=_?1:-1,x&&(w=(w+S)%S),C[Math.max(0,Math.min(w,S-1))])},bD=/[^.]*(?=\..*)\.|.*/,kD=/\..*/,wD=/::\d+$/,lc={};let _m=1;const Cb={mouseenter:"mouseover",mouseleave:"mouseout"},_D=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function yb(C,l){return l&&`${l}::${_m++}`||C.uidEvent||_m++}function Eb(C){const l=yb(C);return C.uidEvent=l,lc[l]=lc[l]||{},lc[l]}function AD(C,l){return function _(x){return Uc(x,{delegateTarget:C}),_.oneOff&&U.off(C,x.type,l),l.apply(C,[x])}}function vD(C,l,_){return function x(S){const w=C.querySelectorAll(l);for(let{target:f}=S;f&&f!==this;f=f.parentNode)for(const k of w)if(k===f)return Uc(S,{delegateTarget:f}),x.oneOff&&U.off(C,S.type,l,_),_.apply(f,[S])}}function xb(C,l,_=null){return Object.values(C).find(x=>x.callable===l&&x.delegationSelector===_)}function Db(C,l,_){const x=typeof l=="string",S=x?_:l||_;let w=Tb(C);return _D.has(w)||(w=C),[x,S,w]}function Am(C,l,_,x,S){if(typeof l!="string"||!C)return;let[w,f,k]=Db(l,_,x);l in Cb&&(f=(P=>function(O){if(!O.relatedTarget||O.relatedTarget!==O.delegateTarget&&!O.delegateTarget.contains(O.relatedTarget))return P.call(this,O)})(f));const h=Eb(C),b=h[k]||(h[k]={}),p=xb(b,f,w?_:null);if(p){p.oneOff=p.oneOff&&S;return}const A=yb(f,l.replace(bD,"")),v=w?vD(C,_,f):AD(C,f);v.delegationSelector=w?_:null,v.callable=f,v.oneOff=S,v.uidEvent=A,b[A]=v,C.addEventListener(k,v,w)}function xc(C,l,_,x,S){const w=xb(l[_],x,S);!w||(C.removeEventListener(_,w,Boolean(S)),delete l[_][w.uidEvent])}function CD(C,l,_,x){const S=l[_]||{};for(const[w,f]of Object.entries(S))w.includes(x)&&xc(C,l,_,f.callable,f.delegationSelector)}function Tb(C){return C=C.replace(kD,""),Cb[C]||C}const U={on(C,l,_,x){Am(C,l,_,x,!1)},one(C,l,_,x){Am(C,l,_,x,!0)},off(C,l,_,x){if(typeof l!="string"||!C)return;const[S,w,f]=Db(l,_,x),k=f!==l,h=Eb(C),b=h[f]||{},p=l.startsWith(".");if(typeof w<"u"){if(!Object.keys(b).length)return;xc(C,h,f,w,S?_:null);return}if(p)for(const A of Object.keys(h))CD(C,h,A,l.slice(1));for(const[A,v]of Object.entries(b)){const D=A.replace(wD,"");(!k||l.includes(D))&&xc(C,h,f,v.callable,v.delegationSelector)}},trigger(C,l,_){if(typeof l!="string"||!C)return null;const x=Ab(),S=Tb(l),w=l!==S;let f=null,k=!0,h=!0,b=!1;w&&x&&(f=x.Event(l,_),x(C).trigger(f),k=!f.isPropagationStopped(),h=!f.isImmediatePropagationStopped(),b=f.isDefaultPrevented());const p=Uc(new Event(l,{bubbles:k,cancelable:!0}),_);return b&&p.preventDefault(),h&&C.dispatchEvent(p),p.defaultPrevented&&f&&f.preventDefault(),p}};function Uc(C,l={}){for(const[_,x]of Object.entries(l))try{C[_]=x}catch{Object.defineProperty(C,_,{configurable:!0,get(){return x}})}return C}function vm(C){if(C==="true")return!0;if(C==="false")return!1;if(C===Number(C).toString())return Number(C);if(C===""||C==="null")return null;if(typeof C!="string")return C;try{return JSON.parse(decodeURIComponent(C))}catch{return C}}function dc(C){return C.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const ln={setDataAttribute(C,l,_){C.setAttribute(`data-bs-${dc(l)}`,_)},removeDataAttribute(C,l){C.removeAttribute(`data-bs-${dc(l)}`)},getDataAttributes(C){if(!C)return{};const l={},_=Object.keys(C.dataset).filter(x=>x.startsWith("bs")&&!x.startsWith("bsConfig"));for(const x of _){let S=x.replace(/^bs/,"");S=S.charAt(0).toLowerCase()+S.slice(1,S.length),l[S]=vm(C.dataset[x])}return l},getDataAttribute(C,l){return vm(C.getAttribute(`data-bs-${dc(l)}`))}};class Ro{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,_){const x=cn(_)?ln.getDataAttribute(_,"config"):{};return{...this.constructor.Default,...typeof x=="object"?x:{},...cn(_)?ln.getDataAttributes(_):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,_=this.constructor.DefaultType){for(const[x,S]of Object.entries(_)){const w=l[x],f=cn(w)?"element":gD(w);if(!new RegExp(S).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${x}" provided type "${f}" but expected type "${S}".`)}}}const yD="5.3.0";class Re extends Ro{constructor(l,_){super(),l=En(l),l&&(this._element=l,this._config=this._getConfig(_),ac.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ac.remove(this._element,this.constructor.DATA_KEY),U.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,_,x=!0){vb(l,_,x)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return ac.get(En(l),this.DATA_KEY)}static getOrCreateInstance(l,_={}){return this.getInstance(l)||new this(l,typeof _=="object"?_:null)}static get VERSION(){return yD}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const uc=C=>{let l=C.getAttribute("data-bs-target");if(!l||l==="#"){let _=C.getAttribute("href");if(!_||!_.includes("#")&&!_.startsWith("."))return null;_.includes("#")&&!_.startsWith("#")&&(_=`#${_.split("#")[1]}`),l=_&&_!=="#"?_.trim():null}return kb(l)},st={find(C,l=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(l,C))},findOne(C,l=document.documentElement){return Element.prototype.querySelector.call(l,C)},children(C,l){return[].concat(...C.children).filter(_=>_.matches(l))},parents(C,l){const _=[];let x=C.parentNode.closest(l);for(;x;)_.push(x),x=x.parentNode.closest(l);return _},prev(C,l){let _=C.previousElementSibling;for(;_;){if(_.matches(l))return[_];_=_.previousElementSibling}return[]},next(C,l){let _=C.nextElementSibling;for(;_;){if(_.matches(l))return[_];_=_.nextElementSibling}return[]},focusableChildren(C){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(_=>`${_}:not([tabindex^="-"])`).join(",");return this.find(l,C).filter(_=>!xn(_)&&Zi(_))},getSelectorFromElement(C){const l=uc(C);return l&&st.findOne(l)?l:null},getElementFromSelector(C){const l=uc(C);return l?st.findOne(l):null},getMultipleElementsFromSelector(C){const l=uc(C);return l?st.find(l):[]}},ns=(C,l="hide")=>{const _=`click.dismiss${C.EVENT_KEY}`,x=C.NAME;U.on(document,_,`[data-bs-dismiss="${x}"]`,function(S){if(["A","AREA"].includes(this.tagName)&&S.preventDefault(),xn(this))return;const w=st.getElementFromSelector(this)||this.closest(`.${x}`);C.getOrCreateInstance(w)[l]()})},ED="alert",xD="bs.alert",Sb=`.${xD}`,DD=`close${Sb}`,TD=`closed${Sb}`,SD="fade",ID="show";class is extends Re{static get NAME(){return ED}close(){if(U.trigger(this._element,DD).defaultPrevented)return;this._element.classList.remove(ID);const _=this._element.classList.contains(SD);this._queueCallback(()=>this._destroyElement(),this._element,_)}_destroyElement(){this._element.remove(),U.trigger(this._element,TD),this.dispose()}static jQueryInterface(l){return this.each(function(){const _=is.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}ns(is,"close");Ie(is);const MD="button",ND="bs.button",PD=`.${ND}`,LD=".data-api",OD="active",Cm='[data-bs-toggle="button"]',BD=`click${PD}${LD}`;class os extends Re{static get NAME(){return MD}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(OD))}static jQueryInterface(l){return this.each(function(){const _=os.getOrCreateInstance(this);l==="toggle"&&_[l]()})}}U.on(document,BD,Cm,C=>{C.preventDefault();const l=C.target.closest(Cm);os.getOrCreateInstance(l).toggle()});Ie(os);const zD="swipe",Ji=".bs.swipe",RD=`touchstart${Ji}`,jD=`touchmove${Ji}`,FD=`touchend${Ji}`,VD=`pointerdown${Ji}`,HD=`pointerup${Ji}`,$D="touch",UD="pen",qD="pointer-event",WD=40,GD={endCallback:null,leftCallback:null,rightCallback:null},KD={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Zr extends Ro{constructor(l,_){super(),this._element=l,!(!l||!Zr.isSupported())&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return GD}static get DefaultType(){return KD}static get NAME(){return zD}dispose(){U.off(this._element,Ji)}_start(l){if(!this._supportPointerEvents){this._deltaX=l.touches[0].clientX;return}this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX)}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),pe(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=WD)return;const _=l/this._deltaX;this._deltaX=0,_&&pe(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(U.on(this._element,VD,l=>this._start(l)),U.on(this._element,HD,l=>this._end(l)),this._element.classList.add(qD)):(U.on(this._element,RD,l=>this._start(l)),U.on(this._element,jD,l=>this._move(l)),U.on(this._element,FD,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType===UD||l.pointerType===$D)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const YD="carousel",QD="bs.carousel",Sn=`.${QD}`,Ib=".data-api",ZD="ArrowLeft",JD="ArrowRight",XD=500,Mo="next",zi="prev",Fi="left",Gr="right",tT=`slide${Sn}`,hc=`slid${Sn}`,eT=`keydown${Sn}`,nT=`mouseenter${Sn}`,iT=`mouseleave${Sn}`,oT=`dragstart${Sn}`,rT=`load${Sn}${Ib}`,sT=`click${Sn}${Ib}`,Mb="carousel",Fr="active",aT="slide",cT="carousel-item-end",lT="carousel-item-start",dT="carousel-item-next",uT="carousel-item-prev",Nb=".active",Pb=".carousel-item",hT=Nb+Pb,gT=".carousel-item img",pT=".carousel-indicators",fT="[data-bs-slide], [data-bs-slide-to]",mT='[data-bs-ride="carousel"]',bT={[ZD]:Gr,[JD]:Fi},kT={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},wT={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class jo extends Re{constructor(l,_){super(l,_),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=st.findOne(pT,this._element),this._addEventListeners(),this._config.ride===Mb&&this.cycle()}static get Default(){return kT}static get DefaultType(){return wT}static get NAME(){return YD}next(){this._slide(Mo)}nextWhenVisible(){!document.hidden&&Zi(this._element)&&this.next()}prev(){this._slide(zi)}pause(){this._isSliding&&wb(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(!!this._config.ride){if(this._isSliding){U.one(this._element,hc,()=>this.cycle());return}this.cycle()}}to(l){const _=this._getItems();if(l>_.length-1||l<0)return;if(this._isSliding){U.one(this._element,hc,()=>this.to(l));return}const x=this._getItemIndex(this._getActive());if(x===l)return;const S=l>x?Mo:zi;this._slide(S,_[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&U.on(this._element,eT,l=>this._keydown(l)),this._config.pause==="hover"&&(U.on(this._element,nT,()=>this.pause()),U.on(this._element,iT,()=>this._maybeEnableCycle())),this._config.touch&&Zr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const x of st.find(gT,this._element))U.on(x,oT,S=>S.preventDefault());const _={leftCallback:()=>this._slide(this._directionToOrder(Fi)),rightCallback:()=>this._slide(this._directionToOrder(Gr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),XD+this._config.interval))}};this._swipeHelper=new Zr(this._element,_)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const _=bT[l.key];_&&(l.preventDefault(),this._slide(this._directionToOrder(_)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const _=st.findOne(Nb,this._indicatorsElement);_.classList.remove(Fr),_.removeAttribute("aria-current");const x=st.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);x&&(x.classList.add(Fr),x.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const _=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=_||this._config.defaultInterval}_slide(l,_=null){if(this._isSliding)return;const x=this._getActive(),S=l===Mo,w=_||$c(this._getItems(),x,S,this._config.wrap);if(w===x)return;const f=this._getItemIndex(w),k=D=>U.trigger(this._element,D,{relatedTarget:w,direction:this._orderToDirection(l),from:this._getItemIndex(x),to:f});if(k(tT).defaultPrevented||!x||!w)return;const b=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=w;const p=S?lT:cT,A=S?dT:uT;w.classList.add(A),zo(w),x.classList.add(p),w.classList.add(p);const v=()=>{w.classList.remove(p,A),w.classList.add(Fr),x.classList.remove(Fr,A,p),this._isSliding=!1,k(hc)};this._queueCallback(v,x,this._isAnimated()),b&&this.cycle()}_isAnimated(){return this._element.classList.contains(aT)}_getActive(){return st.findOne(hT,this._element)}_getItems(){return st.find(Pb,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return Te()?l===Fi?zi:Mo:l===Fi?Mo:zi}_orderToDirection(l){return Te()?l===zi?Fi:Gr:l===zi?Gr:Fi}static jQueryInterface(l){return this.each(function(){const _=jo.getOrCreateInstance(this,l);if(typeof l=="number"){_.to(l);return}if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}U.on(document,sT,fT,function(C){const l=st.getElementFromSelector(this);if(!l||!l.classList.contains(Mb))return;C.preventDefault();const _=jo.getOrCreateInstance(l),x=this.getAttribute("data-bs-slide-to");if(x){_.to(x),_._maybeEnableCycle();return}if(ln.getDataAttribute(this,"slide")==="next"){_.next(),_._maybeEnableCycle();return}_.prev(),_._maybeEnableCycle()});U.on(window,rT,()=>{const C=st.find(mT);for(const l of C)jo.getOrCreateInstance(l)});Ie(jo);const _T="collapse",AT="bs.collapse",Fo=`.${AT}`,vT=".data-api",CT=`show${Fo}`,yT=`shown${Fo}`,ET=`hide${Fo}`,xT=`hidden${Fo}`,DT=`click${Fo}${vT}`,gc="show",Hi="collapse",Vr="collapsing",TT="collapsed",ST=`:scope .${Hi} .${Hi}`,IT="collapse-horizontal",MT="width",NT="height",PT=".collapse.show, .collapse.collapsing",Dc='[data-bs-toggle="collapse"]',LT={parent:null,toggle:!0},OT={parent:"(null|element)",toggle:"boolean"};class Oo extends Re{constructor(l,_){super(l,_),this._isTransitioning=!1,this._triggerArray=[];const x=st.find(Dc);for(const S of x){const w=st.getSelectorFromElement(S),f=st.find(w).filter(k=>k===this._element);w!==null&&f.length&&this._triggerArray.push(S)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return LT}static get DefaultType(){return OT}static get NAME(){return _T}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(PT).filter(k=>k!==this._element).map(k=>Oo.getOrCreateInstance(k,{toggle:!1}))),l.length&&l[0]._isTransitioning||U.trigger(this._element,CT).defaultPrevented)return;for(const k of l)k.hide();const x=this._getDimension();this._element.classList.remove(Hi),this._element.classList.add(Vr),this._element.style[x]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const S=()=>{this._isTransitioning=!1,this._element.classList.remove(Vr),this._element.classList.add(Hi,gc),this._element.style[x]="",U.trigger(this._element,yT)},f=`scroll${x[0].toUpperCase()+x.slice(1)}`;this._queueCallback(S,this._element,!0),this._element.style[x]=`${this._element[f]}px`}hide(){if(this._isTransitioning||!this._isShown()||U.trigger(this._element,ET).defaultPrevented)return;const _=this._getDimension();this._element.style[_]=`${this._element.getBoundingClientRect()[_]}px`,zo(this._element),this._element.classList.add(Vr),this._element.classList.remove(Hi,gc);for(const S of this._triggerArray){const w=st.getElementFromSelector(S);w&&!this._isShown(w)&&this._addAriaAndCollapsedClass([S],!1)}this._isTransitioning=!0;const x=()=>{this._isTransitioning=!1,this._element.classList.remove(Vr),this._element.classList.add(Hi),U.trigger(this._element,xT)};this._element.style[_]="",this._queueCallback(x,this._element,!0)}_isShown(l=this._element){return l.classList.contains(gc)}_configAfterMerge(l){return l.toggle=Boolean(l.toggle),l.parent=En(l.parent),l}_getDimension(){return this._element.classList.contains(IT)?MT:NT}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Dc);for(const _ of l){const x=st.getElementFromSelector(_);x&&this._addAriaAndCollapsedClass([_],this._isShown(x))}}_getFirstLevelChildren(l){const _=st.find(ST,this._config.parent);return st.find(l,this._config.parent).filter(x=>!_.includes(x))}_addAriaAndCollapsedClass(l,_){if(!!l.length)for(const x of l)x.classList.toggle(TT,!_),x.setAttribute("aria-expanded",_)}static jQueryInterface(l){const _={};return typeof l=="string"&&/show|hide/.test(l)&&(_.toggle=!1),this.each(function(){const x=Oo.getOrCreateInstance(this,_);if(typeof l=="string"){if(typeof x[l]>"u")throw new TypeError(`No method named "${l}"`);x[l]()}})}}U.on(document,DT,Dc,function(C){(C.target.tagName==="A"||C.delegateTarget&&C.delegateTarget.tagName==="A")&&C.preventDefault();for(const l of st.getMultipleElementsFromSelector(this))Oo.getOrCreateInstance(l,{toggle:!1}).toggle()});Ie(Oo);const ym="dropdown",BT="bs.dropdown",ni=`.${BT}`,qc=".data-api",zT="Escape",Em="Tab",RT="ArrowUp",xm="ArrowDown",jT=2,FT=`hide${ni}`,VT=`hidden${ni}`,HT=`show${ni}`,$T=`shown${ni}`,Lb=`click${ni}${qc}`,Ob=`keydown${ni}${qc}`,UT=`keyup${ni}${qc}`,Vi="show",qT="dropup",WT="dropend",GT="dropstart",KT="dropup-center",YT="dropdown-center",Zn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',QT=`${Zn}.${Vi}`,Kr=".dropdown-menu",ZT=".navbar",JT=".navbar-nav",XT=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",t2=Te()?"top-end":"top-start",e2=Te()?"top-start":"top-end",n2=Te()?"bottom-end":"bottom-start",i2=Te()?"bottom-start":"bottom-end",o2=Te()?"left-start":"right-start",r2=Te()?"right-start":"left-start",s2="top",a2="bottom",c2={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},l2={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class tn extends Re{constructor(l,_){super(l,_),this._popper=null,this._parent=this._element.parentNode,this._menu=st.next(this._element,Kr)[0]||st.prev(this._element,Kr)[0]||st.findOne(Kr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return c2}static get DefaultType(){return l2}static get NAME(){return ym}toggle(){return this._isShown()?this.hide():this.show()}show(){if(xn(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!U.trigger(this._element,HT,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(JT))for(const x of[].concat(...document.body.children))U.on(x,"mouseover",Qr);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Vi),this._element.classList.add(Vi),U.trigger(this._element,$T,l)}}hide(){if(xn(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!U.trigger(this._element,FT,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const x of[].concat(...document.body.children))U.off(x,"mouseover",Qr);this._popper&&this._popper.destroy(),this._menu.classList.remove(Vi),this._element.classList.remove(Vi),this._element.setAttribute("aria-expanded","false"),ln.removeDataAttribute(this._menu,"popper"),U.trigger(this._element,VT,l)}}_getConfig(l){if(l=super._getConfig(l),typeof l.reference=="object"&&!cn(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${ym.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(typeof bb>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=this._parent:cn(this._config.reference)?l=En(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const _=this._getPopperConfig();this._popper=Hc(l,this._menu,_)}_isShown(){return this._menu.classList.contains(Vi)}_getPlacement(){const l=this._parent;if(l.classList.contains(WT))return o2;if(l.classList.contains(GT))return r2;if(l.classList.contains(KT))return s2;if(l.classList.contains(YT))return a2;const _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains(qT)?_?e2:t2:_?i2:n2}_detectNavbar(){return this._element.closest(ZT)!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ln.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...pe(this._config.popperConfig,[l])}}_selectMenuItem({key:l,target:_}){const x=st.find(XT,this._menu).filter(S=>Zi(S));!x.length||$c(x,_,l===xm,!x.includes(_)).focus()}static jQueryInterface(l){return this.each(function(){const _=tn.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof _[l]>"u")throw new TypeError(`No method named "${l}"`);_[l]()}})}static clearMenus(l){if(l.button===jT||l.type==="keyup"&&l.key!==Em)return;const _=st.find(QT);for(const x of _){const S=tn.getInstance(x);if(!S||S._config.autoClose===!1)continue;const w=l.composedPath(),f=w.includes(S._menu);if(w.includes(S._element)||S._config.autoClose==="inside"&&!f||S._config.autoClose==="outside"&&f||S._menu.contains(l.target)&&(l.type==="keyup"&&l.key===Em||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const k={relatedTarget:S._element};l.type==="click"&&(k.clickEvent=l),S._completeHide(k)}}static dataApiKeydownHandler(l){const _=/input|textarea/i.test(l.target.tagName),x=l.key===zT,S=[RT,xm].includes(l.key);if(!S&&!x||_&&!x)return;l.preventDefault();const w=this.matches(Zn)?this:st.prev(this,Zn)[0]||st.next(this,Zn)[0]||st.findOne(Zn,l.delegateTarget.parentNode),f=tn.getOrCreateInstance(w);if(S){l.stopPropagation(),f.show(),f._selectMenuItem(l);return}f._isShown()&&(l.stopPropagation(),f.hide(),w.focus())}}U.on(document,Ob,Zn,tn.dataApiKeydownHandler);U.on(document,Ob,Kr,tn.dataApiKeydownHandler);U.on(document,Lb,tn.clearMenus);U.on(document,UT,tn.clearMenus);U.on(document,Lb,Zn,function(C){C.preventDefault(),tn.getOrCreateInstance(this).toggle()});Ie(tn);const Bb="backdrop",d2="fade",Dm="show",Tm=`mousedown.bs.${Bb}`,u2={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h2={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class zb extends Ro{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return u2}static get DefaultType(){return h2}static get NAME(){return Bb}show(l){if(!this._config.isVisible){pe(l);return}this._append();const _=this._getElement();this._config.isAnimated&&zo(_),_.classList.add(Dm),this._emulateAnimation(()=>{pe(l)})}hide(l){if(!this._config.isVisible){pe(l);return}this._getElement().classList.remove(Dm),this._emulateAnimation(()=>{this.dispose(),pe(l)})}dispose(){!this._isAppended||(U.off(this._element,Tm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add(d2),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=En(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),U.on(l,Tm,()=>{pe(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){vb(l,this._getElement(),this._config.isAnimated)}}const g2="focustrap",p2="bs.focustrap",Jr=`.${p2}`,f2=`focusin${Jr}`,m2=`keydown.tab${Jr}`,b2="Tab",k2="forward",Sm="backward",w2={autofocus:!0,trapElement:null},_2={autofocus:"boolean",trapElement:"element"};class Rb extends Ro{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return w2}static get DefaultType(){return _2}static get NAME(){return g2}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),U.off(document,Jr),U.on(document,f2,l=>this._handleFocusin(l)),U.on(document,m2,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){!this._isActive||(this._isActive=!1,U.off(document,Jr))}_handleFocusin(l){const{trapElement:_}=this._config;if(l.target===document||l.target===_||_.contains(l.target))return;const x=st.focusableChildren(_);x.length===0?_.focus():this._lastTabNavDirection===Sm?x[x.length-1].focus():x[0].focus()}_handleKeydown(l){l.key===b2&&(this._lastTabNavDirection=l.shiftKey?Sm:k2)}}const Im=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Mm=".sticky-top",Hr="padding-right",Nm="margin-right";class Tc{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Hr,_=>_+l),this._setElementAttributes(Im,Hr,_=>_+l),this._setElementAttributes(Mm,Nm,_=>_-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Hr),this._resetElementAttributes(Im,Hr),this._resetElementAttributes(Mm,Nm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,_,x){const S=this.getWidth(),w=f=>{if(f!==this._element&&window.innerWidth>f.clientWidth+S)return;this._saveInitialAttribute(f,_);const k=window.getComputedStyle(f).getPropertyValue(_);f.style.setProperty(_,`${x(Number.parseFloat(k))}px`)};this._applyManipulationCallback(l,w)}_saveInitialAttribute(l,_){const x=l.style.getPropertyValue(_);x&&ln.setDataAttribute(l,_,x)}_resetElementAttributes(l,_){const x=S=>{const w=ln.getDataAttribute(S,_);if(w===null){S.style.removeProperty(_);return}ln.removeDataAttribute(S,_),S.style.setProperty(_,w)};this._applyManipulationCallback(l,x)}_applyManipulationCallback(l,_){if(cn(l)){_(l);return}for(const x of st.find(l,this._element))_(x)}}const A2="modal",v2="bs.modal",Se=`.${v2}`,C2=".data-api",y2="Escape",E2=`hide${Se}`,x2=`hidePrevented${Se}`,jb=`hidden${Se}`,Fb=`show${Se}`,D2=`shown${Se}`,T2=`resize${Se}`,S2=`click.dismiss${Se}`,I2=`mousedown.dismiss${Se}`,M2=`keydown.dismiss${Se}`,N2=`click${Se}${C2}`,Pm="modal-open",P2="fade",Lm="show",pc="modal-static",L2=".modal.show",O2=".modal-dialog",B2=".modal-body",z2='[data-bs-toggle="modal"]',R2={backdrop:!0,focus:!0,keyboard:!0},j2={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ki extends Re{constructor(l,_){super(l,_),this._dialog=st.findOne(O2,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Tc,this._addEventListeners()}static get Default(){return R2}static get DefaultType(){return j2}static get NAME(){return A2}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||U.trigger(this._element,Fb,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Pm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){!this._isShown||this._isTransitioning||U.trigger(this._element,E2).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Lm),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){U.off(window,Se),U.off(this._dialog,Se),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new zb({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Rb({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const _=st.findOne(B2,this._dialog);_&&(_.scrollTop=0),zo(this._element),this._element.classList.add(Lm);const x=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,U.trigger(this._element,D2,{relatedTarget:l})};this._queueCallback(x,this._dialog,this._isAnimated())}_addEventListeners(){U.on(this._element,M2,l=>{if(l.key===y2){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),U.on(window,T2,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),U.on(this._element,I2,l=>{U.one(this._element,S2,_=>{if(!(this._element!==l.target||this._element!==_.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Pm),this._resetAdjustments(),this._scrollBar.reset(),U.trigger(this._element,jb)})}_isAnimated(){return this._element.classList.contains(P2)}_triggerBackdropTransition(){if(U.trigger(this._element,x2).defaultPrevented)return;const _=this._element.scrollHeight>document.documentElement.clientHeight,x=this._element.style.overflowY;x==="hidden"||this._element.classList.contains(pc)||(_||(this._element.style.overflowY="hidden"),this._element.classList.add(pc),this._queueCallback(()=>{this._element.classList.remove(pc),this._queueCallback(()=>{this._element.style.overflowY=x},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,_=this._scrollBar.getWidth(),x=_>0;if(x&&!l){const S=Te()?"paddingLeft":"paddingRight";this._element.style[S]=`${_}px`}if(!x&&l){const S=Te()?"paddingRight":"paddingLeft";this._element.style[S]=`${_}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,_){return this.each(function(){const x=Ki.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof x[l]>"u")throw new TypeError(`No method named "${l}"`);x[l](_)}})}}U.on(document,N2,z2,function(C){const l=st.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&C.preventDefault(),U.one(l,Fb,S=>{S.defaultPrevented||U.one(l,jb,()=>{Zi(this)&&this.focus()})});const _=st.findOne(L2);_&&Ki.getInstance(_).hide(),Ki.getOrCreateInstance(l).toggle(this)});ns(Ki);Ie(Ki);const F2="offcanvas",V2="bs.offcanvas",un=`.${V2}`,Vb=".data-api",H2=`load${un}${Vb}`,$2="Escape",Om="show",Bm="showing",zm="hiding",U2="offcanvas-backdrop",Hb=".offcanvas.show",q2=`show${un}`,W2=`shown${un}`,G2=`hide${un}`,Rm=`hidePrevented${un}`,$b=`hidden${un}`,K2=`resize${un}`,Y2=`click${un}${Vb}`,Q2=`keydown.dismiss${un}`,Z2='[data-bs-toggle="offcanvas"]',J2={backdrop:!0,keyboard:!0,scroll:!1},X2={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Dn extends Re{constructor(l,_){super(l,_),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return J2}static get DefaultType(){return X2}static get NAME(){return F2}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){if(this._isShown||U.trigger(this._element,q2,{relatedTarget:l}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Tc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Bm);const x=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Om),this._element.classList.remove(Bm),U.trigger(this._element,W2,{relatedTarget:l})};this._queueCallback(x,this._element,!0)}hide(){if(!this._isShown||U.trigger(this._element,G2).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(zm),this._backdrop.hide();const _=()=>{this._element.classList.remove(Om,zm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Tc().reset(),U.trigger(this._element,$b)};this._queueCallback(_,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=()=>{if(this._config.backdrop==="static"){U.trigger(this._element,Rm);return}this.hide()},_=Boolean(this._config.backdrop);return new zb({className:U2,isVisible:_,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:_?l:null})}_initializeFocusTrap(){return new Rb({trapElement:this._element})}_addEventListeners(){U.on(this._element,Q2,l=>{if(l.key===$2){if(this._config.keyboard){this.hide();return}U.trigger(this._element,Rm)}})}static jQueryInterface(l){return this.each(function(){const _=Dn.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}U.on(document,Y2,Z2,function(C){const l=st.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&C.preventDefault(),xn(this))return;U.one(l,$b,()=>{Zi(this)&&this.focus()});const _=st.findOne(Hb);_&&_!==l&&Dn.getInstance(_).hide(),Dn.getOrCreateInstance(l).toggle(this)});U.on(window,H2,()=>{for(const C of st.find(Hb))Dn.getOrCreateInstance(C).show()});U.on(window,K2,()=>{for(const C of st.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(C).position!=="fixed"&&Dn.getOrCreateInstance(C).hide()});ns(Dn);Ie(Dn);const tS=/^aria-[\w-]*$/i,Ub={"*":["class","dir","id","lang","role",tS],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},eS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),nS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,iS=(C,l)=>{const _=C.nodeName.toLowerCase();return l.includes(_)?eS.has(_)?Boolean(nS.test(C.nodeValue)):!0:l.filter(x=>x instanceof RegExp).some(x=>x.test(_))};function oS(C,l,_){if(!C.length)return C;if(_&&typeof _=="function")return _(C);const S=new window.DOMParser().parseFromString(C,"text/html"),w=[].concat(...S.body.querySelectorAll("*"));for(const f of w){const k=f.nodeName.toLowerCase();if(!Object.keys(l).includes(k)){f.remove();continue}const h=[].concat(...f.attributes),b=[].concat(l["*"]||[],l[k]||[]);for(const p of h)iS(p,b)||f.removeAttribute(p.nodeName)}return S.body.innerHTML}const rS="TemplateFactory",sS={allowList:Ub,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},aS={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},cS={entry:"(string|element|function|null)",selector:"(string|element)"};class lS extends Ro{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return sS}static get DefaultType(){return aS}static get NAME(){return rS}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[S,w]of Object.entries(this._config.content))this._setContent(l,w,S);const _=l.children[0],x=this._resolvePossibleFunction(this._config.extraClass);return x&&_.classList.add(...x.split(" ")),_}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[_,x]of Object.entries(l))super._typeCheckConfig({selector:_,entry:x},cS)}_setContent(l,_,x){const S=st.findOne(x,l);if(!!S){if(_=this._resolvePossibleFunction(_),!_){S.remove();return}if(cn(_)){this._putElementInTemplate(En(_),S);return}if(this._config.html){S.innerHTML=this._maybeSanitize(_);return}S.textContent=_}}_maybeSanitize(l){return this._config.sanitize?oS(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return pe(l,[this])}_putElementInTemplate(l,_){if(this._config.html){_.innerHTML="",_.append(l);return}_.textContent=l.textContent}}const dS="tooltip",uS=new Set(["sanitize","allowList","sanitizeFn"]),fc="fade",hS="modal",$r="show",gS=".tooltip-inner",jm=`.${hS}`,Fm="hide.bs.modal",No="hover",mc="focus",pS="click",fS="manual",mS="hide",bS="hidden",kS="show",wS="shown",_S="inserted",AS="click",vS="focusin",CS="focusout",yS="mouseenter",ES="mouseleave",xS={AUTO:"auto",TOP:"top",RIGHT:Te()?"left":"right",BOTTOM:"bottom",LEFT:Te()?"right":"left"},DS={allowList:Ub,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},TS={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Xi extends Re{constructor(l,_){if(typeof bb>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l,_),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return DS}static get DefaultType(){return TS}static get NAME(){return dS}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(!!this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),U.off(this._element.closest(jm),Fm,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const l=U.trigger(this._element,this.constructor.eventName(kS)),x=(_b(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!x)return;this._disposePopper();const S=this._getTipElement();this._element.setAttribute("aria-describedby",S.getAttribute("id"));const{container:w}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(w.append(S),U.trigger(this._element,this.constructor.eventName(_S))),this._popper=this._createPopper(S),S.classList.add($r),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))U.on(k,"mouseover",Qr);const f=()=>{U.trigger(this._element,this.constructor.eventName(wS)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(f,this.tip,this._isAnimated())}hide(){if(!this._isShown()||U.trigger(this._element,this.constructor.eventName(mS)).defaultPrevented)return;if(this._getTipElement().classList.remove($r),"ontouchstart"in document.documentElement)for(const S of[].concat(...document.body.children))U.off(S,"mouseover",Qr);this._activeTrigger[pS]=!1,this._activeTrigger[mc]=!1,this._activeTrigger[No]=!1,this._isHovered=null;const x=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),U.trigger(this._element,this.constructor.eventName(bS)))};this._queueCallback(x,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const _=this._getTemplateFactory(l).toHtml();if(!_)return null;_.classList.remove(fc,$r),_.classList.add(`bs-${this.constructor.NAME}-auto`);const x=pD(this.constructor.NAME).toString();return _.setAttribute("id",x),this._isAnimated()&&_.classList.add(fc),_}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new lS({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[gS]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(fc)}_isShown(){return this.tip&&this.tip.classList.contains($r)}_createPopper(l){const _=pe(this._config.placement,[this,l,this._element]),x=xS[_.toUpperCase()];return Hc(this._element,l,this._getPopperConfig(x))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(_=>Number.parseInt(_,10)):typeof l=="function"?_=>l(_,this._element):l}_resolvePossibleFunction(l){return pe(l,[this._element])}_getPopperConfig(l){const _={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:x=>{this._getTipElement().setAttribute("data-popper-placement",x.state.placement)}}]};return{..._,...pe(this._config.popperConfig,[_])}}_setListeners(){const l=this._config.trigger.split(" ");for(const _ of l)if(_==="click")U.on(this._element,this.constructor.eventName(AS),this._config.selector,x=>{this._initializeOnDelegatedTarget(x).toggle()});else if(_!==fS){const x=_===No?this.constructor.eventName(yS):this.constructor.eventName(vS),S=_===No?this.constructor.eventName(ES):this.constructor.eventName(CS);U.on(this._element,x,this._config.selector,w=>{const f=this._initializeOnDelegatedTarget(w);f._activeTrigger[w.type==="focusin"?mc:No]=!0,f._enter()}),U.on(this._element,S,this._config.selector,w=>{const f=this._initializeOnDelegatedTarget(w);f._activeTrigger[w.type==="focusout"?mc:No]=f._element.contains(w.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},U.on(this._element.closest(jm),Fm,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");!l||(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,_){clearTimeout(this._timeout),this._timeout=setTimeout(l,_)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const _=ln.getDataAttributes(this._element);for(const x of Object.keys(_))uS.has(x)&&delete _[x];return l={..._,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:En(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[_,x]of Object.entries(this._config))this.constructor.Default[_]!==x&&(l[_]=x);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const _=Xi.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof _[l]>"u")throw new TypeError(`No method named "${l}"`);_[l]()}})}}Ie(Xi);const SS="popover",IS=".popover-header",MS=".popover-body",NS={...Xi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},PS={...Xi.DefaultType,content:"(null|string|element|function)"};class Wc extends Xi{static get Default(){return NS}static get DefaultType(){return PS}static get NAME(){return SS}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[IS]:this._getTitle(),[MS]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const _=Wc.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof _[l]>"u")throw new TypeError(`No method named "${l}"`);_[l]()}})}}Ie(Wc);const LS="scrollspy",OS="bs.scrollspy",Gc=`.${OS}`,BS=".data-api",zS=`activate${Gc}`,Vm=`click${Gc}`,RS=`load${Gc}${BS}`,jS="dropdown-item",Ri="active",FS='[data-bs-spy="scroll"]',bc="[href]",VS=".nav, .list-group",Hm=".nav-link",HS=".nav-item",$S=".list-group-item",US=`${Hm}, ${HS} > ${Hm}, ${$S}`,qS=".dropdown",WS=".dropdown-toggle",GS={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},KS={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class rs extends Re{constructor(l,_){super(l,_),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return GS}static get DefaultType(){return KS}static get NAME(){return LS}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=En(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(_=>Number.parseFloat(_))),l}_maybeEnableSmoothScroll(){!this._config.smoothScroll||(U.off(this._config.target,Vm),U.on(this._config.target,Vm,bc,l=>{const _=this._observableSections.get(l.target.hash);if(_){l.preventDefault();const x=this._rootElement||window,S=_.offsetTop-this._element.offsetTop;if(x.scrollTo){x.scrollTo({top:S,behavior:"smooth"});return}x.scrollTop=S}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(_=>this._observerCallback(_),l)}_observerCallback(l){const _=f=>this._targetLinks.get(`#${f.target.id}`),x=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(_(f))},S=(this._rootElement||document.documentElement).scrollTop,w=S>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=S;for(const f of l){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(_(f));continue}const k=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(w&&k){if(x(f),!S)return;continue}!w&&!k&&x(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=st.find(bc,this._config.target);for(const _ of l){if(!_.hash||xn(_))continue;const x=st.findOne(decodeURI(_.hash),this._element);Zi(x)&&(this._targetLinks.set(decodeURI(_.hash),_),this._observableSections.set(_.hash,x))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(Ri),this._activateParents(l),U.trigger(this._element,zS,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains(jS)){st.findOne(WS,l.closest(qS)).classList.add(Ri);return}for(const _ of st.parents(l,VS))for(const x of st.prev(_,US))x.classList.add(Ri)}_clearActiveClass(l){l.classList.remove(Ri);const _=st.find(`${bc}.${Ri}`,l);for(const x of _)x.classList.remove(Ri)}static jQueryInterface(l){return this.each(function(){const _=rs.getOrCreateInstance(this,l);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}U.on(window,RS,()=>{for(const C of st.find(FS))rs.getOrCreateInstance(C)});Ie(rs);const YS="tab",QS="bs.tab",ii=`.${QS}`,ZS=`hide${ii}`,JS=`hidden${ii}`,XS=`show${ii}`,tI=`shown${ii}`,eI=`click${ii}`,nI=`keydown${ii}`,iI=`load${ii}`,oI="ArrowLeft",$m="ArrowRight",rI="ArrowUp",Um="ArrowDown",Jn="active",qm="fade",kc="show",sI="dropdown",aI=".dropdown-toggle",cI=".dropdown-menu",wc=":not(.dropdown-toggle)",lI='.list-group, .nav, [role="tablist"]',dI=".nav-item, .list-group-item",uI=`.nav-link${wc}, .list-group-item${wc}, [role="tab"]${wc}`,qb='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',_c=`${uI}, ${qb}`,hI=`.${Jn}[data-bs-toggle="tab"], .${Jn}[data-bs-toggle="pill"], .${Jn}[data-bs-toggle="list"]`;class Yi extends Re{constructor(l){super(l),this._parent=this._element.closest(lI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),U.on(this._element,nI,_=>this._keydown(_)))}static get NAME(){return YS}show(){const l=this._element;if(this._elemIsActive(l))return;const _=this._getActiveElem(),x=_?U.trigger(_,ZS,{relatedTarget:l}):null;U.trigger(l,XS,{relatedTarget:_}).defaultPrevented||x&&x.defaultPrevented||(this._deactivate(_,l),this._activate(l,_))}_activate(l,_){if(!l)return;l.classList.add(Jn),this._activate(st.getElementFromSelector(l));const x=()=>{if(l.getAttribute("role")!=="tab"){l.classList.add(kc);return}l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),U.trigger(l,tI,{relatedTarget:_})};this._queueCallback(x,l,l.classList.contains(qm))}_deactivate(l,_){if(!l)return;l.classList.remove(Jn),l.blur(),this._deactivate(st.getElementFromSelector(l));const x=()=>{if(l.getAttribute("role")!=="tab"){l.classList.remove(kc);return}l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),U.trigger(l,JS,{relatedTarget:_})};this._queueCallback(x,l,l.classList.contains(qm))}_keydown(l){if(![oI,$m,rI,Um].includes(l.key))return;l.stopPropagation(),l.preventDefault();const _=[$m,Um].includes(l.key),x=$c(this._getChildren().filter(S=>!xn(S)),l.target,_,!0);x&&(x.focus({preventScroll:!0}),Yi.getOrCreateInstance(x).show())}_getChildren(){return st.find(_c,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,_){this._setAttributeIfNotExists(l,"role","tablist");for(const x of _)this._setInitialAttributesOnChild(x)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const _=this._elemIsActive(l),x=this._getOuterElement(l);l.setAttribute("aria-selected",_),x!==l&&this._setAttributeIfNotExists(x,"role","presentation"),_||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const _=st.getElementFromSelector(l);!_||(this._setAttributeIfNotExists(_,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(_,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,_){const x=this._getOuterElement(l);if(!x.classList.contains(sI))return;const S=(w,f)=>{const k=st.findOne(w,x);k&&k.classList.toggle(f,_)};S(aI,Jn),S(cI,kc),x.setAttribute("aria-expanded",_)}_setAttributeIfNotExists(l,_,x){l.hasAttribute(_)||l.setAttribute(_,x)}_elemIsActive(l){return l.classList.contains(Jn)}_getInnerElement(l){return l.matches(_c)?l:st.findOne(_c,l)}_getOuterElement(l){return l.closest(dI)||l}static jQueryInterface(l){return this.each(function(){const _=Yi.getOrCreateInstance(this);if(typeof l=="string"){if(_[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);_[l]()}})}}U.on(document,eI,qb,function(C){["A","AREA"].includes(this.tagName)&&C.preventDefault(),!xn(this)&&Yi.getOrCreateInstance(this).show()});U.on(window,iI,()=>{for(const C of st.find(hI))Yi.getOrCreateInstance(C)});Ie(Yi);const gI="toast",pI="bs.toast",In=`.${pI}`,fI=`mouseover${In}`,mI=`mouseout${In}`,bI=`focusin${In}`,kI=`focusout${In}`,wI=`hide${In}`,_I=`hidden${In}`,AI=`show${In}`,vI=`shown${In}`,CI="fade",Wm="hide",Ur="show",qr="showing",yI={animation:"boolean",autohide:"boolean",delay:"number"},EI={animation:!0,autohide:!0,delay:5e3};class ss extends Re{constructor(l,_){super(l,_),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return EI}static get DefaultType(){return yI}static get NAME(){return gI}show(){if(U.trigger(this._element,AI).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(CI);const _=()=>{this._element.classList.remove(qr),U.trigger(this._element,vI),this._maybeScheduleHide()};this._element.classList.remove(Wm),zo(this._element),this._element.classList.add(Ur,qr),this._queueCallback(_,this._element,this._config.animation)}hide(){if(!this.isShown()||U.trigger(this._element,wI).defaultPrevented)return;const _=()=>{this._element.classList.add(Wm),this._element.classList.remove(qr,Ur),U.trigger(this._element,_I)};this._element.classList.add(qr),this._queueCallback(_,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ur),super.dispose()}isShown(){return this._element.classList.contains(Ur)}_maybeScheduleHide(){!this._config.autohide||this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay))}_onInteraction(l,_){switch(l.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=_;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=_;break}}if(_){this._clearTimeout();return}const x=l.relatedTarget;this._element===x||this._element.contains(x)||this._maybeScheduleHide()}_setListeners(){U.on(this._element,fI,l=>this._onInteraction(l,!0)),U.on(this._element,mI,l=>this._onInteraction(l,!1)),U.on(this._element,bI,l=>this._onInteraction(l,!0)),U.on(this._element,kI,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const _=ss.getOrCreateInstance(this,l);if(typeof l=="string"){if(typeof _[l]>"u")throw new TypeError(`No method named "${l}"`);_[l](this)}})}}ns(ss);Ie(ss);var xI={exports:{}};/*!
 * Select2 4.1.0-rc.0
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */(function(C){(function(l){C.exports?C.exports=function(_,x){return x===void 0&&(typeof window<"u"?x=Ac():x=Ac()(_)),l(x),x}:l(jQuery)})(function(l){var _=function(){if(l&&l.fn&&l.fn.select2&&l.fn.select2.amd)var S=l.fn.select2.amd;var S;return function(){if(!S||!S.requirejs){S?f=S:S={};/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */var w,f,k;(function(h){var b,p,A,v,D={},P={},O={},z={},V=Object.prototype.hasOwnProperty,Z=[].slice,Y=/\.js$/;function q(B,nt){return V.call(B,nt)}function tt(B,nt){var it,gt,ut,bt,Gt,at,jt,F,rt,ht,lt,Ct,vt=nt&&nt.split("/"),mt=O.map,re=mt&&mt["*"]||{};if(B){for(B=B.split("/"),Gt=B.length-1,O.nodeIdCompat&&Y.test(B[Gt])&&(B[Gt]=B[Gt].replace(Y,"")),B[0].charAt(0)==="."&&vt&&(Ct=vt.slice(0,vt.length-1),B=Ct.concat(B)),rt=0;rt<B.length;rt++)if(lt=B[rt],lt===".")B.splice(rt,1),rt-=1;else if(lt===".."){if(rt===0||rt===1&&B[2]===".."||B[rt-1]==="..")continue;rt>0&&(B.splice(rt-1,2),rt-=2)}B=B.join("/")}if((vt||re)&&mt){for(it=B.split("/"),rt=it.length;rt>0;rt-=1){if(gt=it.slice(0,rt).join("/"),vt){for(ht=vt.length;ht>0;ht-=1)if(ut=mt[vt.slice(0,ht).join("/")],ut&&(ut=ut[gt],ut)){bt=ut,at=rt;break}}if(bt)break;!jt&&re&&re[gt]&&(jt=re[gt],F=rt)}!bt&&jt&&(bt=jt,at=F),bt&&(it.splice(0,at,bt),B=it.join("/"))}return B}function ot(B,nt){return function(){var it=Z.call(arguments,0);return typeof it[0]!="string"&&it.length===1&&it.push(null),p.apply(h,it.concat([B,nt]))}}function Q(B){return function(nt){return tt(nt,B)}}function et(B){return function(nt){D[B]=nt}}function M(B){if(q(P,B)){var nt=P[B];delete P[B],z[B]=!0,b.apply(h,nt)}if(!q(D,B)&&!q(z,B))throw new Error("No "+B);return D[B]}function J(B){var nt,it=B?B.indexOf("!"):-1;return it>-1&&(nt=B.substring(0,it),B=B.substring(it+1,B.length)),[nt,B]}function ft(B){return B?J(B):[]}A=function(B,nt){var it,gt=J(B),ut=gt[0],bt=nt[1];return B=gt[1],ut&&(ut=tt(ut,bt),it=M(ut)),ut?it&&it.normalize?B=it.normalize(B,Q(bt)):B=tt(B,bt):(B=tt(B,bt),gt=J(B),ut=gt[0],B=gt[1],ut&&(it=M(ut))),{f:ut?ut+"!"+B:B,n:B,pr:ut,p:it}};function kt(B){return function(){return O&&O.config&&O.config[B]||{}}}v={require:function(B){return ot(B)},exports:function(B){var nt=D[B];return typeof nt<"u"?nt:D[B]={}},module:function(B){return{id:B,uri:"",exports:D[B],config:kt(B)}}},b=function(B,nt,it,gt){var ut,bt,Gt,at,jt,F,rt=[],ht=typeof it,lt;if(gt=gt||B,F=ft(gt),ht==="undefined"||ht==="function"){for(nt=!nt.length&&it.length?["require","exports","module"]:nt,jt=0;jt<nt.length;jt+=1)if(at=A(nt[jt],F),bt=at.f,bt==="require")rt[jt]=v.require(B);else if(bt==="exports")rt[jt]=v.exports(B),lt=!0;else if(bt==="module")ut=rt[jt]=v.module(B);else if(q(D,bt)||q(P,bt)||q(z,bt))rt[jt]=M(bt);else if(at.p)at.p.load(at.n,ot(gt,!0),et(bt),{}),rt[jt]=D[bt];else throw new Error(B+" missing "+bt);Gt=it?it.apply(D[B],rt):void 0,B&&(ut&&ut.exports!==h&&ut.exports!==D[B]?D[B]=ut.exports:(Gt!==h||!lt)&&(D[B]=Gt))}else B&&(D[B]=it)},w=f=p=function(B,nt,it,gt,ut){if(typeof B=="string")return v[B]?v[B](nt):M(A(B,ft(nt)).f);if(!B.splice){if(O=B,O.deps&&p(O.deps,O.callback),!nt)return;nt.splice?(B=nt,nt=it,it=null):B=h}return nt=nt||function(){},typeof it=="function"&&(it=gt,gt=ut),gt?b(h,B,nt,it):setTimeout(function(){b(h,B,nt,it)},4),p},p.config=function(B){return p(B)},w._defined=D,k=function(B,nt,it){if(typeof B!="string")throw new Error("See almond README: incorrect module build, no module name");nt.splice||(it=nt,nt=[]),!q(D,B)&&!q(P,B)&&(P[B]=[B,nt,it])},k.amd={jQuery:!0}})(),S.requirejs=w,S.require=f,S.define=k}}(),S.define("almond",function(){}),S.define("jquery",[],function(){var w=l||$;return w==null&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),w}),S.define("select2/utils",["jquery"],function(w){var f={};f.Extend=function(p,A){var v={}.hasOwnProperty;function D(){this.constructor=p}for(var P in A)v.call(A,P)&&(p[P]=A[P]);return D.prototype=A.prototype,p.prototype=new D,p.__super__=A.prototype,p};function k(p){var A=p.prototype,v=[];for(var D in A){var P=A[D];typeof P=="function"&&D!=="constructor"&&v.push(D)}return v}f.Decorate=function(p,A){var v=k(A),D=k(p);function P(){var tt=Array.prototype.unshift,ot=A.prototype.constructor.length,Q=p.prototype.constructor;ot>0&&(tt.call(arguments,p.prototype.constructor),Q=A.prototype.constructor),Q.apply(this,arguments)}A.displayName=p.displayName;function O(){this.constructor=P}P.prototype=new O;for(var z=0;z<D.length;z++){var V=D[z];P.prototype[V]=p.prototype[V]}for(var Z=function(tt){var ot=function(){};tt in P.prototype&&(ot=P.prototype[tt]);var Q=A.prototype[tt];return function(){var et=Array.prototype.unshift;return et.call(arguments,ot),Q.apply(this,arguments)}},Y=0;Y<v.length;Y++){var q=v[Y];P.prototype[q]=Z(q)}return P};var h=function(){this.listeners={}};h.prototype.on=function(p,A){this.listeners=this.listeners||{},p in this.listeners?this.listeners[p].push(A):this.listeners[p]=[A]},h.prototype.trigger=function(p){var A=Array.prototype.slice,v=A.call(arguments,1);this.listeners=this.listeners||{},v==null&&(v=[]),v.length===0&&v.push({}),v[0]._type=p,p in this.listeners&&this.invoke(this.listeners[p],A.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},h.prototype.invoke=function(p,A){for(var v=0,D=p.length;v<D;v++)p[v].apply(this,A)},f.Observable=h,f.generateChars=function(p){for(var A="",v=0;v<p;v++){var D=Math.floor(Math.random()*36);A+=D.toString(36)}return A},f.bind=function(p,A){return function(){p.apply(A,arguments)}},f._convertData=function(p){for(var A in p){var v=A.split("-"),D=p;if(v.length!==1){for(var P=0;P<v.length;P++){var O=v[P];O=O.substring(0,1).toLowerCase()+O.substring(1),O in D||(D[O]={}),P==v.length-1&&(D[O]=p[A]),D=D[O]}delete p[A]}}return p},f.hasScroll=function(p,A){var v=w(A),D=A.style.overflowX,P=A.style.overflowY;return D===P&&(P==="hidden"||P==="visible")?!1:D==="scroll"||P==="scroll"?!0:v.innerHeight()<A.scrollHeight||v.innerWidth()<A.scrollWidth},f.escapeMarkup=function(p){var A={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return typeof p!="string"?p:String(p).replace(/[&<>"'\/\\]/g,function(v){return A[v]})},f.__cache={};var b=0;return f.GetUniqueElementId=function(p){var A=p.getAttribute("data-select2-id");return A!=null||(p.id?A="select2-data-"+p.id:A="select2-data-"+(++b).toString()+"-"+f.generateChars(4),p.setAttribute("data-select2-id",A)),A},f.StoreData=function(p,A,v){var D=f.GetUniqueElementId(p);f.__cache[D]||(f.__cache[D]={}),f.__cache[D][A]=v},f.GetData=function(p,A){var v=f.GetUniqueElementId(p);return A?f.__cache[v]&&f.__cache[v][A]!=null?f.__cache[v][A]:w(p).data(A):f.__cache[v]},f.RemoveData=function(p){var A=f.GetUniqueElementId(p);f.__cache[A]!=null&&delete f.__cache[A],p.removeAttribute("data-select2-id")},f.copyNonInternalCssClasses=function(p,A){var v=p.getAttribute("class").trim().split(/\s+/);v=v.filter(function(O){return O.indexOf("select2-")===0});var D=A.getAttribute("class").trim().split(/\s+/);D=D.filter(function(O){return O.indexOf("select2-")!==0});var P=v.concat(D);p.setAttribute("class",P.join(" "))},f}),S.define("select2/results",["jquery","./utils"],function(w,f){function k(h,b,p){this.$element=h,this.data=p,this.options=b,k.__super__.constructor.call(this)}return f.Extend(k,f.Observable),k.prototype.render=function(){var h=w('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&h.attr("aria-multiselectable","true"),this.$results=h,h},k.prototype.clear=function(){this.$results.empty()},k.prototype.displayMessage=function(h){var b=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var p=w('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),A=this.options.get("translations").get(h.message);p.append(b(A(h.args))),p[0].className+=" select2-results__message",this.$results.append(p)},k.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},k.prototype.append=function(h){this.hideLoading();var b=[];if(h.results==null||h.results.length===0){this.$results.children().length===0&&this.trigger("results:message",{message:"noResults"});return}h.results=this.sort(h.results);for(var p=0;p<h.results.length;p++){var A=h.results[p],v=this.option(A);b.push(v)}this.$results.append(b)},k.prototype.position=function(h,b){var p=b.find(".select2-results");p.append(h)},k.prototype.sort=function(h){var b=this.options.get("sorter");return b(h)},k.prototype.highlightFirstItem=function(){var h=this.$results.find(".select2-results__option--selectable"),b=h.filter(".select2-results__option--selected");b.length>0?b.first().trigger("mouseenter"):h.first().trigger("mouseenter"),this.ensureHighlightVisible()},k.prototype.setClasses=function(){var h=this;this.data.current(function(b){var p=b.map(function(v){return v.id.toString()}),A=h.$results.find(".select2-results__option--selectable");A.each(function(){var v=w(this),D=f.GetData(this,"data"),P=""+D.id;D.element!=null&&D.element.selected||D.element==null&&p.indexOf(P)>-1?(this.classList.add("select2-results__option--selected"),v.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),v.attr("aria-selected","false"))})})},k.prototype.showLoading=function(h){this.hideLoading();var b=this.options.get("translations").get("searching"),p={disabled:!0,loading:!0,text:b(h)},A=this.option(p);A.className+=" loading-results",this.$results.prepend(A)},k.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},k.prototype.option=function(h){var b=document.createElement("li");b.classList.add("select2-results__option"),b.classList.add("select2-results__option--selectable");var p={role:"option"},A=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;(h.element!=null&&A.call(h.element,":disabled")||h.element==null&&h.disabled)&&(p["aria-disabled"]="true",b.classList.remove("select2-results__option--selectable"),b.classList.add("select2-results__option--disabled")),h.id==null&&b.classList.remove("select2-results__option--selectable"),h._resultId!=null&&(b.id=h._resultId),h.title&&(b.title=h.title),h.children&&(p.role="group",p["aria-label"]=h.text,b.classList.remove("select2-results__option--selectable"),b.classList.add("select2-results__option--group"));for(var v in p){var D=p[v];b.setAttribute(v,D)}if(h.children){var P=w(b),O=document.createElement("strong");O.className="select2-results__group",this.template(h,O);for(var z=[],V=0;V<h.children.length;V++){var Z=h.children[V],Y=this.option(Z);z.push(Y)}var q=w("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});q.append(z),P.append(O),P.append(q)}else this.template(h,b);return f.StoreData(b,"data",h),b},k.prototype.bind=function(h,b){var p=this,A=h.id+"-results";this.$results.attr("id",A),h.on("results:all",function(v){p.clear(),p.append(v.data),h.isOpen()&&(p.setClasses(),p.highlightFirstItem())}),h.on("results:append",function(v){p.append(v.data),h.isOpen()&&p.setClasses()}),h.on("query",function(v){p.hideMessages(),p.showLoading(v)}),h.on("select",function(){!h.isOpen()||(p.setClasses(),p.options.get("scrollAfterSelect")&&p.highlightFirstItem())}),h.on("unselect",function(){!h.isOpen()||(p.setClasses(),p.options.get("scrollAfterSelect")&&p.highlightFirstItem())}),h.on("open",function(){p.$results.attr("aria-expanded","true"),p.$results.attr("aria-hidden","false"),p.setClasses(),p.ensureHighlightVisible()}),h.on("close",function(){p.$results.attr("aria-expanded","false"),p.$results.attr("aria-hidden","true"),p.$results.removeAttr("aria-activedescendant")}),h.on("results:toggle",function(){var v=p.getHighlightedResults();v.length!==0&&v.trigger("mouseup")}),h.on("results:select",function(){var v=p.getHighlightedResults();if(v.length!==0){var D=f.GetData(v[0],"data");v.hasClass("select2-results__option--selected")?p.trigger("close",{}):p.trigger("select",{data:D})}}),h.on("results:previous",function(){var v=p.getHighlightedResults(),D=p.$results.find(".select2-results__option--selectable"),P=D.index(v);if(!(P<=0)){var O=P-1;v.length===0&&(O=0);var z=D.eq(O);z.trigger("mouseenter");var V=p.$results.offset().top,Z=z.offset().top,Y=p.$results.scrollTop()+(Z-V);O===0?p.$results.scrollTop(0):Z-V<0&&p.$results.scrollTop(Y)}}),h.on("results:next",function(){var v=p.getHighlightedResults(),D=p.$results.find(".select2-results__option--selectable"),P=D.index(v),O=P+1;if(!(O>=D.length)){var z=D.eq(O);z.trigger("mouseenter");var V=p.$results.offset().top+p.$results.outerHeight(!1),Z=z.offset().top+z.outerHeight(!1),Y=p.$results.scrollTop()+Z-V;O===0?p.$results.scrollTop(0):Z>V&&p.$results.scrollTop(Y)}}),h.on("results:focus",function(v){v.element[0].classList.add("select2-results__option--highlighted"),v.element[0].setAttribute("aria-selected","true")}),h.on("results:message",function(v){p.displayMessage(v)}),w.fn.mousewheel&&this.$results.on("mousewheel",function(v){var D=p.$results.scrollTop(),P=p.$results.get(0).scrollHeight-D+v.deltaY,O=v.deltaY>0&&D-v.deltaY<=0,z=v.deltaY<0&&P<=p.$results.height();O?(p.$results.scrollTop(0),v.preventDefault(),v.stopPropagation()):z&&(p.$results.scrollTop(p.$results.get(0).scrollHeight-p.$results.height()),v.preventDefault(),v.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(v){var D=w(this),P=f.GetData(this,"data");if(D.hasClass("select2-results__option--selected")){p.options.get("multiple")?p.trigger("unselect",{originalEvent:v,data:P}):p.trigger("close",{});return}p.trigger("select",{originalEvent:v,data:P})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(v){var D=f.GetData(this,"data");p.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),p.trigger("results:focus",{data:D,element:w(this)})})},k.prototype.getHighlightedResults=function(){var h=this.$results.find(".select2-results__option--highlighted");return h},k.prototype.destroy=function(){this.$results.remove()},k.prototype.ensureHighlightVisible=function(){var h=this.getHighlightedResults();if(h.length!==0){var b=this.$results.find(".select2-results__option--selectable"),p=b.index(h),A=this.$results.offset().top,v=h.offset().top,D=this.$results.scrollTop()+(v-A),P=v-A;D-=h.outerHeight(!1)*2,p<=2?this.$results.scrollTop(0):(P>this.$results.outerHeight()||P<0)&&this.$results.scrollTop(D)}},k.prototype.template=function(h,b){var p=this.options.get("templateResult"),A=this.options.get("escapeMarkup"),v=p(h,b);v==null?b.style.display="none":typeof v=="string"?b.innerHTML=A(v):w(b).append(v)},k}),S.define("select2/keys",[],function(){var w={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return w}),S.define("select2/selection/base",["jquery","../utils","../keys"],function(w,f,k){function h(b,p){this.$element=b,this.options=p,h.__super__.constructor.call(this)}return f.Extend(h,f.Observable),h.prototype.render=function(){var b=w('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,f.GetData(this.$element[0],"old-tabindex")!=null?this._tabindex=f.GetData(this.$element[0],"old-tabindex"):this.$element.attr("tabindex")!=null&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),b.attr("aria-disabled","false"),this.$selection=b,b},h.prototype.bind=function(b,p){var A=this,v=b.id+"-results";this.container=b,this.$selection.on("focus",function(D){A.trigger("focus",D)}),this.$selection.on("blur",function(D){A._handleBlur(D)}),this.$selection.on("keydown",function(D){A.trigger("keypress",D),D.which===k.SPACE&&D.preventDefault()}),b.on("results:focus",function(D){A.$selection.attr("aria-activedescendant",D.data._resultId)}),b.on("selection:update",function(D){A.update(D.data)}),b.on("open",function(){A.$selection.attr("aria-expanded","true"),A.$selection.attr("aria-owns",v),A._attachCloseHandler(b)}),b.on("close",function(){A.$selection.attr("aria-expanded","false"),A.$selection.removeAttr("aria-activedescendant"),A.$selection.removeAttr("aria-owns"),A.$selection.trigger("focus"),A._detachCloseHandler(b)}),b.on("enable",function(){A.$selection.attr("tabindex",A._tabindex),A.$selection.attr("aria-disabled","false")}),b.on("disable",function(){A.$selection.attr("tabindex","-1"),A.$selection.attr("aria-disabled","true")})},h.prototype._handleBlur=function(b){var p=this;window.setTimeout(function(){document.activeElement==p.$selection[0]||w.contains(p.$selection[0],document.activeElement)||p.trigger("blur",b)},1)},h.prototype._attachCloseHandler=function(b){w(document.body).on("mousedown.select2."+b.id,function(p){var A=w(p.target),v=A.closest(".select2"),D=w(".select2.select2-container--open");D.each(function(){if(this!=v[0]){var P=f.GetData(this,"element");P.select2("close")}})})},h.prototype._detachCloseHandler=function(b){w(document.body).off("mousedown.select2."+b.id)},h.prototype.position=function(b,p){var A=p.find(".selection");A.append(b)},h.prototype.destroy=function(){this._detachCloseHandler(this.container)},h.prototype.update=function(b){throw new Error("The `update` method must be defined in child classes.")},h.prototype.isEnabled=function(){return!this.isDisabled()},h.prototype.isDisabled=function(){return this.options.get("disabled")},h}),S.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(w,f,k,h){function b(){b.__super__.constructor.apply(this,arguments)}return k.Extend(b,f),b.prototype.render=function(){var p=b.__super__.render.call(this);return p[0].classList.add("select2-selection--single"),p.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),p},b.prototype.bind=function(p,A){var v=this;b.__super__.bind.apply(this,arguments);var D=p.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",D).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",D),this.$selection.attr("aria-controls",D),this.$selection.on("mousedown",function(P){P.which===1&&v.trigger("toggle",{originalEvent:P})}),this.$selection.on("focus",function(P){}),this.$selection.on("blur",function(P){}),p.on("focus",function(P){p.isOpen()||v.$selection.trigger("focus")})},b.prototype.clear=function(){var p=this.$selection.find(".select2-selection__rendered");p.empty(),p.removeAttr("title")},b.prototype.display=function(p,A){var v=this.options.get("templateSelection"),D=this.options.get("escapeMarkup");return D(v(p,A))},b.prototype.selectionContainer=function(){return w("<span></span>")},b.prototype.update=function(p){if(p.length===0){this.clear();return}var A=p[0],v=this.$selection.find(".select2-selection__rendered"),D=this.display(A,v);v.empty().append(D);var P=A.title||A.text;P?v.attr("title",P):v.removeAttr("title")},b}),S.define("select2/selection/multiple",["jquery","./base","../utils"],function(w,f,k){function h(b,p){h.__super__.constructor.apply(this,arguments)}return k.Extend(h,f),h.prototype.render=function(){var b=h.__super__.render.call(this);return b[0].classList.add("select2-selection--multiple"),b.html('<ul class="select2-selection__rendered"></ul>'),b},h.prototype.bind=function(b,p){var A=this;h.__super__.bind.apply(this,arguments);var v=b.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",v),this.$selection.on("click",function(D){A.trigger("toggle",{originalEvent:D})}),this.$selection.on("click",".select2-selection__choice__remove",function(D){if(!A.isDisabled()){var P=w(this),O=P.parent(),z=k.GetData(O[0],"data");A.trigger("unselect",{originalEvent:D,data:z})}}),this.$selection.on("keydown",".select2-selection__choice__remove",function(D){A.isDisabled()||D.stopPropagation()})},h.prototype.clear=function(){var b=this.$selection.find(".select2-selection__rendered");b.empty(),b.removeAttr("title")},h.prototype.display=function(b,p){var A=this.options.get("templateSelection"),v=this.options.get("escapeMarkup");return v(A(b,p))},h.prototype.selectionContainer=function(){var b=w('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>');return b},h.prototype.update=function(b){if(this.clear(),b.length!==0){for(var p=[],A=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",v=0;v<b.length;v++){var D=b[v],P=this.selectionContainer(),O=this.display(D,P),z=A+k.generateChars(4)+"-";D.id?z+=D.id:z+=k.generateChars(4),P.find(".select2-selection__choice__display").append(O).attr("id",z);var V=D.title||D.text;V&&P.attr("title",V);var Z=this.options.get("translations").get("removeItem"),Y=P.find(".select2-selection__choice__remove");Y.attr("title",Z()),Y.attr("aria-label",Z()),Y.attr("aria-describedby",z),k.StoreData(P[0],"data",D),p.push(P)}var q=this.$selection.find(".select2-selection__rendered");q.append(p)}},h}),S.define("select2/selection/placeholder",[],function(){function w(f,k,h){this.placeholder=this.normalizePlaceholder(h.get("placeholder")),f.call(this,k,h)}return w.prototype.normalizePlaceholder=function(f,k){return typeof k=="string"&&(k={id:"",text:k}),k},w.prototype.createPlaceholder=function(f,k){var h=this.selectionContainer();h.html(this.display(k)),h[0].classList.add("select2-selection__placeholder"),h[0].classList.remove("select2-selection__choice");var b=k.title||k.text||h.text();return this.$selection.find(".select2-selection__rendered").attr("title",b),h},w.prototype.update=function(f,k){var h=k.length==1&&k[0].id!=this.placeholder.id,b=k.length>1;if(b||h)return f.call(this,k);this.clear();var p=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(p)},w}),S.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(w,f,k){function h(){}return h.prototype.bind=function(b,p,A){var v=this;b.call(this,p,A),this.placeholder==null&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(D){v._handleClear(D)}),p.on("keypress",function(D){v._handleKeyboardClear(D,p)})},h.prototype._handleClear=function(b,p){if(!this.isDisabled()){var A=this.$selection.find(".select2-selection__clear");if(A.length!==0){p.stopPropagation();var v=k.GetData(A[0],"data"),D=this.$element.val();this.$element.val(this.placeholder.id);var P={data:v};if(this.trigger("clear",P),P.prevented){this.$element.val(D);return}for(var O=0;O<v.length;O++)if(P={data:v[O]},this.trigger("unselect",P),P.prevented){this.$element.val(D);return}this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}},h.prototype._handleKeyboardClear=function(b,p,A){A.isOpen()||(p.which==f.DELETE||p.which==f.BACKSPACE)&&this._handleClear(p)},h.prototype.update=function(b,p){if(b.call(this,p),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),!(this.$selection.find(".select2-selection__placeholder").length>0||p.length===0)){var A=this.$selection.find(".select2-selection__rendered").attr("id"),v=this.options.get("translations").get("removeAllItems"),D=w('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');D.attr("title",v()),D.attr("aria-label",v()),D.attr("aria-describedby",A),k.StoreData(D[0],"data",p),this.$selection.prepend(D),this.$selection[0].classList.add("select2-selection--clearable")}},h}),S.define("select2/selection/search",["jquery","../utils","../keys"],function(w,f,k){function h(b,p,A){b.call(this,p,A)}return h.prototype.render=function(b){var p=this.options.get("translations").get("search"),A=w('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=A,this.$search=A.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",p());var v=b.call(this);return this._transferTabIndex(),v.append(this.$searchContainer),v},h.prototype.bind=function(b,p,A){var v=this,D=p.id+"-results",P=p.id+"-container";b.call(this,p,A),v.$search.attr("aria-describedby",P),p.on("open",function(){v.$search.attr("aria-controls",D),v.$search.trigger("focus")}),p.on("close",function(){v.$search.val(""),v.resizeSearch(),v.$search.removeAttr("aria-controls"),v.$search.removeAttr("aria-activedescendant"),v.$search.trigger("focus")}),p.on("enable",function(){v.$search.prop("disabled",!1),v._transferTabIndex()}),p.on("disable",function(){v.$search.prop("disabled",!0)}),p.on("focus",function(V){v.$search.trigger("focus")}),p.on("results:focus",function(V){V.data._resultId?v.$search.attr("aria-activedescendant",V.data._resultId):v.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(V){v.trigger("focus",V)}),this.$selection.on("focusout",".select2-search--inline",function(V){v._handleBlur(V)}),this.$selection.on("keydown",".select2-search--inline",function(V){V.stopPropagation(),v.trigger("keypress",V),v._keyUpPrevented=V.isDefaultPrevented();var Z=V.which;if(Z===k.BACKSPACE&&v.$search.val()===""){var Y=v.$selection.find(".select2-selection__choice").last();if(Y.length>0){var q=f.GetData(Y[0],"data");v.searchRemoveChoice(q),V.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(V){v.$search.val()&&V.stopPropagation()});var O=document.documentMode,z=O&&O<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(V){if(z){v.$selection.off("input.search input.searchcheck");return}v.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(V){if(z&&V.type==="input"){v.$selection.off("input.search input.searchcheck");return}var Z=V.which;Z==k.SHIFT||Z==k.CTRL||Z==k.ALT||Z!=k.TAB&&v.handleSearch(V)})},h.prototype._transferTabIndex=function(b){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},h.prototype.createPlaceholder=function(b,p){this.$search.attr("placeholder",p.text)},h.prototype.update=function(b,p){var A=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),b.call(this,p),this.resizeSearch(),A&&this.$search.trigger("focus")},h.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},h.prototype.searchRemoveChoice=function(b,p){this.trigger("unselect",{data:p}),this.$search.val(p.text),this.handleSearch()},h.prototype.resizeSearch=function(){this.$search.css("width","25px");var b="100%";if(this.$search.attr("placeholder")===""){var p=this.$search.val().length+1;b=p*.75+"em"}this.$search.css("width",b)},h}),S.define("select2/selection/selectionCss",["../utils"],function(w){function f(){}return f.prototype.render=function(k){var h=k.call(this),b=this.options.get("selectionCssClass")||"";return b.indexOf(":all:")!==-1&&(b=b.replace(":all:",""),w.copyNonInternalCssClasses(h[0],this.$element[0])),h.addClass(b),h},f}),S.define("select2/selection/eventRelay",["jquery"],function(w){function f(){}return f.prototype.bind=function(k,h,b){var p=this,A=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],v=["opening","closing","selecting","unselecting","clearing"];k.call(this,h,b),h.on("*",function(D,P){if(A.indexOf(D)!==-1){P=P||{};var O=w.Event("select2:"+D,{params:P});p.$element.trigger(O),v.indexOf(D)!==-1&&(P.prevented=O.isDefaultPrevented())}})},f}),S.define("select2/translation",["jquery","require"],function(w,f){function k(h){this.dict=h||{}}return k.prototype.all=function(){return this.dict},k.prototype.get=function(h){return this.dict[h]},k.prototype.extend=function(h){this.dict=w.extend({},h.all(),this.dict)},k._cache={},k.loadPath=function(h){if(!(h in k._cache)){var b=f(h);k._cache[h]=b}return new k(k._cache[h])},k}),S.define("select2/diacritics",[],function(){var w={"\u24B6":"A",\uFF21:"A",\u00C0:"A",\u00C1:"A",\u00C2:"A",\u1EA6:"A",\u1EA4:"A",\u1EAA:"A",\u1EA8:"A",\u00C3:"A",\u0100:"A",\u0102:"A",\u1EB0:"A",\u1EAE:"A",\u1EB4:"A",\u1EB2:"A",\u0226:"A",\u01E0:"A",\u00C4:"A",\u01DE:"A",\u1EA2:"A",\u00C5:"A",\u01FA:"A",\u01CD:"A",\u0200:"A",\u0202:"A",\u1EA0:"A",\u1EAC:"A",\u1EB6:"A",\u1E00:"A",\u0104:"A","\u023A":"A","\u2C6F":"A","\uA732":"AA",\u00C6:"AE",\u01FC:"AE",\u01E2:"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B",\uFF22:"B",\u1E02:"B",\u1E04:"B",\u1E06:"B","\u0243":"B",\u0182:"B",\u0181:"B","\u24B8":"C",\uFF23:"C",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u00C7:"C",\u1E08:"C",\u0187:"C","\u023B":"C","\uA73E":"C","\u24B9":"D",\uFF24:"D",\u1E0A:"D",\u010E:"D",\u1E0C:"D",\u1E10:"D",\u1E12:"D",\u1E0E:"D",\u0110:"D",\u018B:"D",\u018A:"D",\u0189:"D","\uA779":"D",\u01F1:"DZ",\u01C4:"DZ",\u01F2:"Dz",\u01C5:"Dz","\u24BA":"E",\uFF25:"E",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u1EC0:"E",\u1EBE:"E",\u1EC4:"E",\u1EC2:"E",\u1EBC:"E",\u0112:"E",\u1E14:"E",\u1E16:"E",\u0114:"E",\u0116:"E",\u00CB:"E",\u1EBA:"E",\u011A:"E",\u0204:"E",\u0206:"E",\u1EB8:"E",\u1EC6:"E",\u0228:"E",\u1E1C:"E",\u0118:"E",\u1E18:"E",\u1E1A:"E",\u0190:"E",\u018E:"E","\u24BB":"F",\uFF26:"F",\u1E1E:"F",\u0191:"F","\uA77B":"F","\u24BC":"G",\uFF27:"G",\u01F4:"G",\u011C:"G",\u1E20:"G",\u011E:"G",\u0120:"G",\u01E6:"G",\u0122:"G",\u01E4:"G",\u0193:"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H",\uFF28:"H",\u0124:"H",\u1E22:"H",\u1E26:"H",\u021E:"H",\u1E24:"H",\u1E28:"H",\u1E2A:"H",\u0126:"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I",\uFF29:"I",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u0128:"I",\u012A:"I",\u012C:"I",\u0130:"I",\u00CF:"I",\u1E2E:"I",\u1EC8:"I",\u01CF:"I",\u0208:"I",\u020A:"I",\u1ECA:"I",\u012E:"I",\u1E2C:"I",\u0197:"I","\u24BF":"J",\uFF2A:"J",\u0134:"J","\u0248":"J","\u24C0":"K",\uFF2B:"K",\u1E30:"K",\u01E8:"K",\u1E32:"K",\u0136:"K",\u1E34:"K",\u0198:"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L",\uFF2C:"L",\u013F:"L",\u0139:"L",\u013D:"L",\u1E36:"L",\u1E38:"L",\u013B:"L",\u1E3C:"L",\u1E3A:"L",\u0141:"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L",\u01C7:"LJ",\u01C8:"Lj","\u24C2":"M",\uFF2D:"M",\u1E3E:"M",\u1E40:"M",\u1E42:"M","\u2C6E":"M",\u019C:"M","\u24C3":"N",\uFF2E:"N",\u01F8:"N",\u0143:"N",\u00D1:"N",\u1E44:"N",\u0147:"N",\u1E46:"N",\u0145:"N",\u1E4A:"N",\u1E48:"N","\u0220":"N",\u019D:"N","\uA790":"N","\uA7A4":"N",\u01CA:"NJ",\u01CB:"Nj","\u24C4":"O",\uFF2F:"O",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u1ED2:"O",\u1ED0:"O",\u1ED6:"O",\u1ED4:"O",\u00D5:"O",\u1E4C:"O",\u022C:"O",\u1E4E:"O",\u014C:"O",\u1E50:"O",\u1E52:"O",\u014E:"O",\u022E:"O",\u0230:"O",\u00D6:"O",\u022A:"O",\u1ECE:"O",\u0150:"O",\u01D1:"O",\u020C:"O",\u020E:"O",\u01A0:"O",\u1EDC:"O",\u1EDA:"O",\u1EE0:"O",\u1EDE:"O",\u1EE2:"O",\u1ECC:"O",\u1ED8:"O",\u01EA:"O",\u01EC:"O",\u00D8:"O",\u01FE:"O",\u0186:"O",\u019F:"O","\uA74A":"O","\uA74C":"O",\u0152:"OE",\u01A2:"OI","\uA74E":"OO",\u0222:"OU","\u24C5":"P",\uFF30:"P",\u1E54:"P",\u1E56:"P",\u01A4:"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q",\uFF31:"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R",\uFF32:"R",\u0154:"R",\u1E58:"R",\u0158:"R",\u0210:"R",\u0212:"R",\u1E5A:"R",\u1E5C:"R",\u0156:"R",\u1E5E:"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S",\uFF33:"S","\u1E9E":"S",\u015A:"S",\u1E64:"S",\u015C:"S",\u1E60:"S",\u0160:"S",\u1E66:"S",\u1E62:"S",\u1E68:"S",\u0218:"S",\u015E:"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T",\uFF34:"T",\u1E6A:"T",\u0164:"T",\u1E6C:"T",\u021A:"T",\u0162:"T",\u1E70:"T",\u1E6E:"T",\u0166:"T",\u01AC:"T",\u01AE:"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U",\uFF35:"U",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u0168:"U",\u1E78:"U",\u016A:"U",\u1E7A:"U",\u016C:"U",\u00DC:"U",\u01DB:"U",\u01D7:"U",\u01D5:"U",\u01D9:"U",\u1EE6:"U",\u016E:"U",\u0170:"U",\u01D3:"U",\u0214:"U",\u0216:"U",\u01AF:"U",\u1EEA:"U",\u1EE8:"U",\u1EEE:"U",\u1EEC:"U",\u1EF0:"U",\u1EE4:"U",\u1E72:"U",\u0172:"U",\u1E76:"U",\u1E74:"U","\u0244":"U","\u24CB":"V",\uFF36:"V",\u1E7C:"V",\u1E7E:"V",\u01B2:"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W",\uFF37:"W",\u1E80:"W",\u1E82:"W",\u0174:"W",\u1E86:"W",\u1E84:"W",\u1E88:"W","\u2C72":"W","\u24CD":"X",\uFF38:"X",\u1E8A:"X",\u1E8C:"X","\u24CE":"Y",\uFF39:"Y",\u1EF2:"Y",\u00DD:"Y",\u0176:"Y",\u1EF8:"Y",\u0232:"Y",\u1E8E:"Y",\u0178:"Y",\u1EF6:"Y",\u1EF4:"Y",\u01B3:"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z",\uFF3A:"Z",\u0179:"Z",\u1E90:"Z",\u017B:"Z",\u017D:"Z",\u1E92:"Z",\u1E94:"Z",\u01B5:"Z",\u0224:"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a",\uFF41:"a",\u1E9A:"a",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u1EA7:"a",\u1EA5:"a",\u1EAB:"a",\u1EA9:"a",\u00E3:"a",\u0101:"a",\u0103:"a",\u1EB1:"a",\u1EAF:"a",\u1EB5:"a",\u1EB3:"a",\u0227:"a",\u01E1:"a",\u00E4:"a",\u01DF:"a",\u1EA3:"a",\u00E5:"a",\u01FB:"a",\u01CE:"a",\u0201:"a",\u0203:"a",\u1EA1:"a",\u1EAD:"a",\u1EB7:"a",\u1E01:"a",\u0105:"a","\u2C65":"a",\u0250:"a","\uA733":"aa",\u00E6:"ae",\u01FD:"ae",\u01E3:"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b",\uFF42:"b",\u1E03:"b",\u1E05:"b",\u1E07:"b",\u0180:"b",\u0183:"b",\u0253:"b","\u24D2":"c",\uFF43:"c",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u00E7:"c",\u1E09:"c",\u0188:"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d",\uFF44:"d",\u1E0B:"d",\u010F:"d",\u1E0D:"d",\u1E11:"d",\u1E13:"d",\u1E0F:"d",\u0111:"d",\u018C:"d",\u0256:"d",\u0257:"d","\uA77A":"d",\u01F3:"dz",\u01C6:"dz","\u24D4":"e",\uFF45:"e",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u1EC1:"e",\u1EBF:"e",\u1EC5:"e",\u1EC3:"e",\u1EBD:"e",\u0113:"e",\u1E15:"e",\u1E17:"e",\u0115:"e",\u0117:"e",\u00EB:"e",\u1EBB:"e",\u011B:"e",\u0205:"e",\u0207:"e",\u1EB9:"e",\u1EC7:"e",\u0229:"e",\u1E1D:"e",\u0119:"e",\u1E19:"e",\u1E1B:"e","\u0247":"e",\u025B:"e",\u01DD:"e","\u24D5":"f",\uFF46:"f",\u1E1F:"f",\u0192:"f","\uA77C":"f","\u24D6":"g",\uFF47:"g",\u01F5:"g",\u011D:"g",\u1E21:"g",\u011F:"g",\u0121:"g",\u01E7:"g",\u0123:"g",\u01E5:"g",\u0260:"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h",\uFF48:"h",\u0125:"h",\u1E23:"h",\u1E27:"h",\u021F:"h",\u1E25:"h",\u1E29:"h",\u1E2B:"h",\u1E96:"h",\u0127:"h","\u2C68":"h","\u2C76":"h",\u0265:"h",\u0195:"hv","\u24D8":"i",\uFF49:"i",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u0129:"i",\u012B:"i",\u012D:"i",\u00EF:"i",\u1E2F:"i",\u1EC9:"i",\u01D0:"i",\u0209:"i",\u020B:"i",\u1ECB:"i",\u012F:"i",\u1E2D:"i",\u0268:"i",\u0131:"i","\u24D9":"j",\uFF4A:"j",\u0135:"j",\u01F0:"j","\u0249":"j","\u24DA":"k",\uFF4B:"k",\u1E31:"k",\u01E9:"k",\u1E33:"k",\u0137:"k",\u1E35:"k",\u0199:"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l",\uFF4C:"l",\u0140:"l",\u013A:"l",\u013E:"l",\u1E37:"l",\u1E39:"l",\u013C:"l",\u1E3D:"l",\u1E3B:"l",\u017F:"l",\u0142:"l",\u019A:"l",\u026B:"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l",\u01C9:"lj","\u24DC":"m",\uFF4D:"m",\u1E3F:"m",\u1E41:"m",\u1E43:"m",\u0271:"m",\u026F:"m","\u24DD":"n",\uFF4E:"n",\u01F9:"n",\u0144:"n",\u00F1:"n",\u1E45:"n",\u0148:"n",\u1E47:"n",\u0146:"n",\u1E4B:"n",\u1E49:"n",\u019E:"n",\u0272:"n",\u0149:"n","\uA791":"n","\uA7A5":"n",\u01CC:"nj","\u24DE":"o",\uFF4F:"o",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u1ED3:"o",\u1ED1:"o",\u1ED7:"o",\u1ED5:"o",\u00F5:"o",\u1E4D:"o",\u022D:"o",\u1E4F:"o",\u014D:"o",\u1E51:"o",\u1E53:"o",\u014F:"o",\u022F:"o",\u0231:"o",\u00F6:"o",\u022B:"o",\u1ECF:"o",\u0151:"o",\u01D2:"o",\u020D:"o",\u020F:"o",\u01A1:"o",\u1EDD:"o",\u1EDB:"o",\u1EE1:"o",\u1EDF:"o",\u1EE3:"o",\u1ECD:"o",\u1ED9:"o",\u01EB:"o",\u01ED:"o",\u00F8:"o",\u01FF:"o",\u0254:"o","\uA74B":"o","\uA74D":"o",\u0275:"o",\u0153:"oe",\u01A3:"oi",\u0223:"ou","\uA74F":"oo","\u24DF":"p",\uFF50:"p",\u1E55:"p",\u1E57:"p",\u01A5:"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q",\uFF51:"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r",\uFF52:"r",\u0155:"r",\u1E59:"r",\u0159:"r",\u0211:"r",\u0213:"r",\u1E5B:"r",\u1E5D:"r",\u0157:"r",\u1E5F:"r","\u024D":"r",\u027D:"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s",\uFF53:"s",\u00DF:"s",\u015B:"s",\u1E65:"s",\u015D:"s",\u1E61:"s",\u0161:"s",\u1E67:"s",\u1E63:"s",\u1E69:"s",\u0219:"s",\u015F:"s","\u023F":"s","\uA7A9":"s","\uA785":"s",\u1E9B:"s","\u24E3":"t",\uFF54:"t",\u1E6B:"t",\u1E97:"t",\u0165:"t",\u1E6D:"t",\u021B:"t",\u0163:"t",\u1E71:"t",\u1E6F:"t",\u0167:"t",\u01AD:"t",\u0288:"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u",\uFF55:"u",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u0169:"u",\u1E79:"u",\u016B:"u",\u1E7B:"u",\u016D:"u",\u00FC:"u",\u01DC:"u",\u01D8:"u",\u01D6:"u",\u01DA:"u",\u1EE7:"u",\u016F:"u",\u0171:"u",\u01D4:"u",\u0215:"u",\u0217:"u",\u01B0:"u",\u1EEB:"u",\u1EE9:"u",\u1EEF:"u",\u1EED:"u",\u1EF1:"u",\u1EE5:"u",\u1E73:"u",\u0173:"u",\u1E77:"u",\u1E75:"u",\u0289:"u","\u24E5":"v",\uFF56:"v",\u1E7D:"v",\u1E7F:"v",\u028B:"v","\uA75F":"v",\u028C:"v","\uA761":"vy","\u24E6":"w",\uFF57:"w",\u1E81:"w",\u1E83:"w",\u0175:"w",\u1E87:"w",\u1E85:"w",\u1E98:"w",\u1E89:"w","\u2C73":"w","\u24E7":"x",\uFF58:"x",\u1E8B:"x",\u1E8D:"x","\u24E8":"y",\uFF59:"y",\u1EF3:"y",\u00FD:"y",\u0177:"y",\u1EF9:"y",\u0233:"y",\u1E8F:"y",\u00FF:"y",\u1EF7:"y",\u1E99:"y",\u1EF5:"y",\u01B4:"y","\u024F":"y","\u1EFF":"y","\u24E9":"z",\uFF5A:"z",\u017A:"z",\u1E91:"z",\u017C:"z",\u017E:"z",\u1E93:"z",\u1E95:"z",\u01B6:"z",\u0225:"z","\u0240":"z","\u2C6C":"z","\uA763":"z",\u0386:"\u0391",\u0388:"\u0395",\u0389:"\u0397",\u038A:"\u0399",\u03AA:"\u0399",\u038C:"\u039F",\u038E:"\u03A5",\u03AB:"\u03A5",\u038F:"\u03A9",\u03AC:"\u03B1",\u03AD:"\u03B5",\u03AE:"\u03B7",\u03AF:"\u03B9",\u03CA:"\u03B9",\u0390:"\u03B9",\u03CC:"\u03BF",\u03CD:"\u03C5",\u03CB:"\u03C5",\u03B0:"\u03C5",\u03CE:"\u03C9",\u03C2:"\u03C3","\u2019":"'"};return w}),S.define("select2/data/base",["../utils"],function(w){function f(k,h){f.__super__.constructor.call(this)}return w.Extend(f,w.Observable),f.prototype.current=function(k){throw new Error("The `current` method must be defined in child classes.")},f.prototype.query=function(k,h){throw new Error("The `query` method must be defined in child classes.")},f.prototype.bind=function(k,h){},f.prototype.destroy=function(){},f.prototype.generateResultId=function(k,h){var b=k.id+"-result-";return b+=w.generateChars(4),h.id!=null?b+="-"+h.id.toString():b+="-"+w.generateChars(4),b},f}),S.define("select2/data/select",["./base","../utils","jquery"],function(w,f,k){function h(b,p){this.$element=b,this.options=p,h.__super__.constructor.call(this)}return f.Extend(h,w),h.prototype.current=function(b){var p=this,A=Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(v){return p.item(k(v))});b(A)},h.prototype.select=function(b){var p=this;if(b.selected=!0,b.element!=null&&b.element.tagName.toLowerCase()==="option"){b.element.selected=!0,this.$element.trigger("input").trigger("change");return}if(this.$element.prop("multiple"))this.current(function(v){var D=[];b=[b],b.push.apply(b,v);for(var P=0;P<b.length;P++){var O=b[P].id;D.indexOf(O)===-1&&D.push(O)}p.$element.val(D),p.$element.trigger("input").trigger("change")});else{var A=b.id;this.$element.val(A),this.$element.trigger("input").trigger("change")}},h.prototype.unselect=function(b){var p=this;if(!!this.$element.prop("multiple")){if(b.selected=!1,b.element!=null&&b.element.tagName.toLowerCase()==="option"){b.element.selected=!1,this.$element.trigger("input").trigger("change");return}this.current(function(A){for(var v=[],D=0;D<A.length;D++){var P=A[D].id;P!==b.id&&v.indexOf(P)===-1&&v.push(P)}p.$element.val(v),p.$element.trigger("input").trigger("change")})}},h.prototype.bind=function(b,p){var A=this;this.container=b,b.on("select",function(v){A.select(v.data)}),b.on("unselect",function(v){A.unselect(v.data)})},h.prototype.destroy=function(){this.$element.find("*").each(function(){f.RemoveData(this)})},h.prototype.query=function(b,p){var A=[],v=this,D=this.$element.children();D.each(function(){if(!(this.tagName.toLowerCase()!=="option"&&this.tagName.toLowerCase()!=="optgroup")){var P=k(this),O=v.item(P),z=v.matches(b,O);z!==null&&A.push(z)}}),p({results:A})},h.prototype.addOptions=function(b){this.$element.append(b)},h.prototype.option=function(b){var p;b.children?(p=document.createElement("optgroup"),p.label=b.text):(p=document.createElement("option"),p.textContent!==void 0?p.textContent=b.text:p.innerText=b.text),b.id!==void 0&&(p.value=b.id),b.disabled&&(p.disabled=!0),b.selected&&(p.selected=!0),b.title&&(p.title=b.title);var A=this._normalizeItem(b);return A.element=p,f.StoreData(p,"data",A),k(p)},h.prototype.item=function(b){var p={};if(p=f.GetData(b[0],"data"),p!=null)return p;var A=b[0];if(A.tagName.toLowerCase()==="option")p={id:b.val(),text:b.text(),disabled:b.prop("disabled"),selected:b.prop("selected"),title:b.prop("title")};else if(A.tagName.toLowerCase()==="optgroup"){p={text:b.prop("label"),children:[],title:b.prop("title")};for(var v=b.children("option"),D=[],P=0;P<v.length;P++){var O=k(v[P]),z=this.item(O);D.push(z)}p.children=D}return p=this._normalizeItem(p),p.element=b[0],f.StoreData(b[0],"data",p),p},h.prototype._normalizeItem=function(b){b!==Object(b)&&(b={id:b,text:b}),b=k.extend({},{text:""},b);var p={selected:!1,disabled:!1};return b.id!=null&&(b.id=b.id.toString()),b.text!=null&&(b.text=b.text.toString()),b._resultId==null&&b.id&&this.container!=null&&(b._resultId=this.generateResultId(this.container,b)),k.extend({},p,b)},h.prototype.matches=function(b,p){var A=this.options.get("matcher");return A(b,p)},h}),S.define("select2/data/array",["./select","../utils","jquery"],function(w,f,k){function h(b,p){this._dataToConvert=p.get("data")||[],h.__super__.constructor.call(this,b,p)}return f.Extend(h,w),h.prototype.bind=function(b,p){h.__super__.bind.call(this,b,p),this.addOptions(this.convertToOptions(this._dataToConvert))},h.prototype.select=function(b){var p=this.$element.find("option").filter(function(A,v){return v.value==b.id.toString()});p.length===0&&(p=this.option(b),this.addOptions(p)),h.__super__.select.call(this,b)},h.prototype.convertToOptions=function(b){var p=this,A=this.$element.find("option"),v=A.map(function(){return p.item(k(this)).id}).get(),D=[];function P(Q){return function(){return k(this).val()==Q.id}}for(var O=0;O<b.length;O++){var z=this._normalizeItem(b[O]);if(v.indexOf(z.id)>=0){var V=A.filter(P(z)),Z=this.item(V),Y=k.extend(!0,{},z,Z),q=this.option(Y);V.replaceWith(q);continue}var tt=this.option(z);if(z.children){var ot=this.convertToOptions(z.children);tt.append(ot)}D.push(tt)}return D},h}),S.define("select2/data/ajax",["./array","../utils","jquery"],function(w,f,k){function h(b,p){this.ajaxOptions=this._applyDefaults(p.get("ajax")),this.ajaxOptions.processResults!=null&&(this.processResults=this.ajaxOptions.processResults),h.__super__.constructor.call(this,b,p)}return f.Extend(h,w),h.prototype._applyDefaults=function(b){var p={data:function(A){return k.extend({},A,{q:A.term})},transport:function(A,v,D){var P=k.ajax(A);return P.then(v),P.fail(D),P}};return k.extend({},p,b,!0)},h.prototype.processResults=function(b){return b},h.prototype.query=function(b,p){var A=this;this._request!=null&&(typeof this._request.abort=="function"&&this._request.abort(),this._request=null);var v=k.extend({type:"GET"},this.ajaxOptions);typeof v.url=="function"&&(v.url=v.url.call(this.$element,b)),typeof v.data=="function"&&(v.data=v.data.call(this.$element,b));function D(){var P=v.transport(v,function(O){var z=A.processResults(O,b);A.options.get("debug")&&window.console&&console.error&&(!z||!z.results||!Array.isArray(z.results))&&console.error("Select2: The AJAX results did not return an array in the `results` key of the response."),p(z)},function(){"status"in P&&(P.status===0||P.status==="0")||A.trigger("results:message",{message:"errorLoading"})});A._request=P}this.ajaxOptions.delay&&b.term!=null?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(D,this.ajaxOptions.delay)):D()},h}),S.define("select2/data/tags",["jquery"],function(w){function f(k,h,b){var p=b.get("tags"),A=b.get("createTag");A!==void 0&&(this.createTag=A);var v=b.get("insertTag");if(v!==void 0&&(this.insertTag=v),k.call(this,h,b),Array.isArray(p))for(var D=0;D<p.length;D++){var P=p[D],O=this._normalizeItem(P),z=this.option(O);this.$element.append(z)}}return f.prototype.query=function(k,h,b){var p=this;if(this._removeOldTags(),h.term==null||h.page!=null){k.call(this,h,b);return}function A(v,D){for(var P=v.results,O=0;O<P.length;O++){var z=P[O],V=z.children!=null&&!A({results:z.children},!0),Z=(z.text||"").toUpperCase(),Y=(h.term||"").toUpperCase(),q=Z===Y;if(q||V){if(D)return!1;v.data=P,b(v);return}}if(D)return!0;var tt=p.createTag(h);if(tt!=null){var ot=p.option(tt);ot.attr("data-select2-tag","true"),p.addOptions([ot]),p.insertTag(P,tt)}v.results=P,b(v)}k.call(this,h,A)},f.prototype.createTag=function(k,h){if(h.term==null)return null;var b=h.term.trim();return b===""?null:{id:b,text:b}},f.prototype.insertTag=function(k,h,b){h.unshift(b)},f.prototype._removeOldTags=function(k){var h=this.$element.find("option[data-select2-tag]");h.each(function(){this.selected||w(this).remove()})},f}),S.define("select2/data/tokenizer",["jquery"],function(w){function f(k,h,b){var p=b.get("tokenizer");p!==void 0&&(this.tokenizer=p),k.call(this,h,b)}return f.prototype.bind=function(k,h,b){k.call(this,h,b),this.$search=h.dropdown.$search||h.selection.$search||b.find(".select2-search__field")},f.prototype.query=function(k,h,b){var p=this;function A(P){var O=p._normalizeItem(P),z=p.$element.find("option").filter(function(){return w(this).val()===O.id});if(!z.length){var V=p.option(O);V.attr("data-select2-tag",!0),p._removeOldTags(),p.addOptions([V])}v(O)}function v(P){p.trigger("select",{data:P})}h.term=h.term||"";var D=this.tokenizer(h,this.options,A);D.term!==h.term&&(this.$search.length&&(this.$search.val(D.term),this.$search.trigger("focus")),h.term=D.term),k.call(this,h,b)},f.prototype.tokenizer=function(k,h,b,p){for(var A=b.get("tokenSeparators")||[],v=h.term,D=0,P=this.createTag||function(Y){return{id:Y.term,text:Y.term}};D<v.length;){var O=v[D];if(A.indexOf(O)===-1){D++;continue}var z=v.substr(0,D),V=w.extend({},h,{term:z}),Z=P(V);if(Z==null){D++;continue}p(Z),v=v.substr(D+1)||"",D=0}return{term:v}},f}),S.define("select2/data/minimumInputLength",[],function(){function w(f,k,h){this.minimumInputLength=h.get("minimumInputLength"),f.call(this,k,h)}return w.prototype.query=function(f,k,h){if(k.term=k.term||"",k.term.length<this.minimumInputLength){this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:k.term,params:k}});return}f.call(this,k,h)},w}),S.define("select2/data/maximumInputLength",[],function(){function w(f,k,h){this.maximumInputLength=h.get("maximumInputLength"),f.call(this,k,h)}return w.prototype.query=function(f,k,h){if(k.term=k.term||"",this.maximumInputLength>0&&k.term.length>this.maximumInputLength){this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:k.term,params:k}});return}f.call(this,k,h)},w}),S.define("select2/data/maximumSelectionLength",[],function(){function w(f,k,h){this.maximumSelectionLength=h.get("maximumSelectionLength"),f.call(this,k,h)}return w.prototype.bind=function(f,k,h){var b=this;f.call(this,k,h),k.on("select",function(){b._checkIfMaximumSelected()})},w.prototype.query=function(f,k,h){var b=this;this._checkIfMaximumSelected(function(){f.call(b,k,h)})},w.prototype._checkIfMaximumSelected=function(f,k){var h=this;this.current(function(b){var p=b!=null?b.length:0;if(h.maximumSelectionLength>0&&p>=h.maximumSelectionLength){h.trigger("results:message",{message:"maximumSelected",args:{maximum:h.maximumSelectionLength}});return}k&&k()})},w}),S.define("select2/dropdown",["jquery","./utils"],function(w,f){function k(h,b){this.$element=h,this.options=b,k.__super__.constructor.call(this)}return f.Extend(k,f.Observable),k.prototype.render=function(){var h=w('<span class="select2-dropdown"><span class="select2-results"></span></span>');return h.attr("dir",this.options.get("dir")),this.$dropdown=h,h},k.prototype.bind=function(){},k.prototype.position=function(h,b){},k.prototype.destroy=function(){this.$dropdown.remove()},k}),S.define("select2/dropdown/search",["jquery"],function(w){function f(){}return f.prototype.render=function(k){var h=k.call(this),b=this.options.get("translations").get("search"),p=w('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=p,this.$search=p.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",b()),h.prepend(p),h},f.prototype.bind=function(k,h,b){var p=this,A=h.id+"-results";k.call(this,h,b),this.$search.on("keydown",function(v){p.trigger("keypress",v),p._keyUpPrevented=v.isDefaultPrevented()}),this.$search.on("input",function(v){w(this).off("keyup")}),this.$search.on("keyup input",function(v){p.handleSearch(v)}),h.on("open",function(){p.$search.attr("tabindex",0),p.$search.attr("aria-controls",A),p.$search.trigger("focus"),window.setTimeout(function(){p.$search.trigger("focus")},0)}),h.on("close",function(){p.$search.attr("tabindex",-1),p.$search.removeAttr("aria-controls"),p.$search.removeAttr("aria-activedescendant"),p.$search.val(""),p.$search.trigger("blur")}),h.on("focus",function(){h.isOpen()||p.$search.trigger("focus")}),h.on("results:all",function(v){if(v.query.term==null||v.query.term===""){var D=p.showSearch(v);D?p.$searchContainer[0].classList.remove("select2-search--hide"):p.$searchContainer[0].classList.add("select2-search--hide")}}),h.on("results:focus",function(v){v.data._resultId?p.$search.attr("aria-activedescendant",v.data._resultId):p.$search.removeAttr("aria-activedescendant")})},f.prototype.handleSearch=function(k){if(!this._keyUpPrevented){var h=this.$search.val();this.trigger("query",{term:h})}this._keyUpPrevented=!1},f.prototype.showSearch=function(k,h){return!0},f}),S.define("select2/dropdown/hidePlaceholder",[],function(){function w(f,k,h,b){this.placeholder=this.normalizePlaceholder(h.get("placeholder")),f.call(this,k,h,b)}return w.prototype.append=function(f,k){k.results=this.removePlaceholder(k.results),f.call(this,k)},w.prototype.normalizePlaceholder=function(f,k){return typeof k=="string"&&(k={id:"",text:k}),k},w.prototype.removePlaceholder=function(f,k){for(var h=k.slice(0),b=k.length-1;b>=0;b--){var p=k[b];this.placeholder.id===p.id&&h.splice(b,1)}return h},w}),S.define("select2/dropdown/infiniteScroll",["jquery"],function(w){function f(k,h,b,p){this.lastParams={},k.call(this,h,b,p),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return f.prototype.append=function(k,h){this.$loadingMore.remove(),this.loading=!1,k.call(this,h),this.showLoadingMore(h)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},f.prototype.bind=function(k,h,b){var p=this;k.call(this,h,b),h.on("query",function(A){p.lastParams=A,p.loading=!0}),h.on("query:append",function(A){p.lastParams=A,p.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},f.prototype.loadMoreIfNeeded=function(){var k=w.contains(document.documentElement,this.$loadingMore[0]);if(!(this.loading||!k)){var h=this.$results.offset().top+this.$results.outerHeight(!1),b=this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1);h+50>=b&&this.loadMore()}},f.prototype.loadMore=function(){this.loading=!0;var k=w.extend({},{page:1},this.lastParams);k.page++,this.trigger("query:append",k)},f.prototype.showLoadingMore=function(k,h){return h.pagination&&h.pagination.more},f.prototype.createLoadingMore=function(){var k=w('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),h=this.options.get("translations").get("loadingMore");return k.html(h(this.lastParams)),k},f}),S.define("select2/dropdown/attachBody",["jquery","../utils"],function(w,f){function k(h,b,p){this.$dropdownParent=w(p.get("dropdownParent")||document.body),h.call(this,b,p)}return k.prototype.bind=function(h,b,p){var A=this;h.call(this,b,p),b.on("open",function(){A._showDropdown(),A._attachPositioningHandler(b),A._bindContainerResultHandlers(b)}),b.on("close",function(){A._hideDropdown(),A._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(v){v.stopPropagation()})},k.prototype.destroy=function(h){h.call(this),this.$dropdownContainer.remove()},k.prototype.position=function(h,b,p){b.attr("class",p.attr("class")),b[0].classList.remove("select2"),b[0].classList.add("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=p},k.prototype.render=function(h){var b=w("<span></span>"),p=h.call(this);return b.append(p),this.$dropdownContainer=b,b},k.prototype._hideDropdown=function(h){this.$dropdownContainer.detach()},k.prototype._bindContainerResultHandlers=function(h,b){if(!this._containerResultsHandlersBound){var p=this;b.on("results:all",function(){p._positionDropdown(),p._resizeDropdown()}),b.on("results:append",function(){p._positionDropdown(),p._resizeDropdown()}),b.on("results:message",function(){p._positionDropdown(),p._resizeDropdown()}),b.on("select",function(){p._positionDropdown(),p._resizeDropdown()}),b.on("unselect",function(){p._positionDropdown(),p._resizeDropdown()}),this._containerResultsHandlersBound=!0}},k.prototype._attachPositioningHandler=function(h,b){var p=this,A="scroll.select2."+b.id,v="resize.select2."+b.id,D="orientationchange.select2."+b.id,P=this.$container.parents().filter(f.hasScroll);P.each(function(){f.StoreData(this,"select2-scroll-position",{x:w(this).scrollLeft(),y:w(this).scrollTop()})}),P.on(A,function(O){var z=f.GetData(this,"select2-scroll-position");w(this).scrollTop(z.y)}),w(window).on(A+" "+v+" "+D,function(O){p._positionDropdown(),p._resizeDropdown()})},k.prototype._detachPositioningHandler=function(h,b){var p="scroll.select2."+b.id,A="resize.select2."+b.id,v="orientationchange.select2."+b.id,D=this.$container.parents().filter(f.hasScroll);D.off(p),w(window).off(p+" "+A+" "+v)},k.prototype._positionDropdown=function(){var h=w(window),b=this.$dropdown[0].classList.contains("select2-dropdown--above"),p=this.$dropdown[0].classList.contains("select2-dropdown--below"),A=null,v=this.$container.offset();v.bottom=v.top+this.$container.outerHeight(!1);var D={height:this.$container.outerHeight(!1)};D.top=v.top,D.bottom=v.top+D.height;var P={height:this.$dropdown.outerHeight(!1)},O={top:h.scrollTop(),bottom:h.scrollTop()+h.height()},z=O.top<v.top-P.height,V=O.bottom>v.bottom+P.height,Z={left:v.left,top:D.bottom},Y=this.$dropdownParent;Y.css("position")==="static"&&(Y=Y.offsetParent());var q={top:0,left:0};(w.contains(document.body,Y[0])||Y[0].isConnected)&&(q=Y.offset()),Z.top-=q.top,Z.left-=q.left,!b&&!p&&(A="below"),!V&&z&&!b?A="above":!z&&V&&b&&(A="below"),(A=="above"||b&&A!=="below")&&(Z.top=D.top-q.top-P.height),A!=null&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+A),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+A)),this.$dropdownContainer.css(Z)},k.prototype._resizeDropdown=function(){var h={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(h.minWidth=h.width,h.position="relative",h.width="auto"),this.$dropdown.css(h)},k.prototype._showDropdown=function(h){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},k}),S.define("select2/dropdown/minimumResultsForSearch",[],function(){function w(k){for(var h=0,b=0;b<k.length;b++){var p=k[b];p.children?h+=w(p.children):h++}return h}function f(k,h,b,p){this.minimumResultsForSearch=b.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),k.call(this,h,b,p)}return f.prototype.showSearch=function(k,h){return w(h.data.results)<this.minimumResultsForSearch?!1:k.call(this,h)},f}),S.define("select2/dropdown/selectOnClose",["../utils"],function(w){function f(){}return f.prototype.bind=function(k,h,b){var p=this;k.call(this,h,b),h.on("close",function(A){p._handleSelectOnClose(A)})},f.prototype._handleSelectOnClose=function(k,h){if(h&&h.originalSelect2Event!=null){var b=h.originalSelect2Event;if(b._type==="select"||b._type==="unselect")return}var p=this.getHighlightedResults();if(!(p.length<1)){var A=w.GetData(p[0],"data");A.element!=null&&A.element.selected||A.element==null&&A.selected||this.trigger("select",{data:A})}},f}),S.define("select2/dropdown/closeOnSelect",[],function(){function w(){}return w.prototype.bind=function(f,k,h){var b=this;f.call(this,k,h),k.on("select",function(p){b._selectTriggered(p)}),k.on("unselect",function(p){b._selectTriggered(p)})},w.prototype._selectTriggered=function(f,k){var h=k.originalEvent;h&&(h.ctrlKey||h.metaKey)||this.trigger("close",{originalEvent:h,originalSelect2Event:k})},w}),S.define("select2/dropdown/dropdownCss",["../utils"],function(w){function f(){}return f.prototype.render=function(k){var h=k.call(this),b=this.options.get("dropdownCssClass")||"";return b.indexOf(":all:")!==-1&&(b=b.replace(":all:",""),w.copyNonInternalCssClasses(h[0],this.$element[0])),h.addClass(b),h},f}),S.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(w){function f(){}return f.prototype.highlightFirstItem=function(k){var h=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(h.length>0){var b=h.first(),p=w.GetData(b[0],"data"),A=p.element;if(A&&A.getAttribute&&A.getAttribute("data-select2-tag")==="true"){b.trigger("mouseenter");return}}k.call(this)},f}),S.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(w){var f=w.input.length-w.maximum,k="Please delete "+f+" character";return f!=1&&(k+="s"),k},inputTooShort:function(w){var f=w.minimum-w.input.length,k="Please enter "+f+" or more characters";return k},loadingMore:function(){return"Loading more results\u2026"},maximumSelected:function(w){var f="You can only select "+w.maximum+" item";return w.maximum!=1&&(f+="s"),f},noResults:function(){return"No results found"},searching:function(){return"Searching\u2026"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),S.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(w,f,k,h,b,p,A,v,D,P,O,z,V,Z,Y,q,tt,ot,Q,et,M,J,ft,kt,B,nt,it,gt,ut,bt,Gt){function at(){this.reset()}at.prototype.apply=function(F){if(F=w.extend(!0,{},this.defaults,F),F.dataAdapter==null&&(F.ajax!=null?F.dataAdapter=Y:F.data!=null?F.dataAdapter=Z:F.dataAdapter=V,F.minimumInputLength>0&&(F.dataAdapter=P.Decorate(F.dataAdapter,ot)),F.maximumInputLength>0&&(F.dataAdapter=P.Decorate(F.dataAdapter,Q)),F.maximumSelectionLength>0&&(F.dataAdapter=P.Decorate(F.dataAdapter,et)),F.tags&&(F.dataAdapter=P.Decorate(F.dataAdapter,q)),(F.tokenSeparators!=null||F.tokenizer!=null)&&(F.dataAdapter=P.Decorate(F.dataAdapter,tt))),F.resultsAdapter==null&&(F.resultsAdapter=f,F.ajax!=null&&(F.resultsAdapter=P.Decorate(F.resultsAdapter,kt)),F.placeholder!=null&&(F.resultsAdapter=P.Decorate(F.resultsAdapter,ft)),F.selectOnClose&&(F.resultsAdapter=P.Decorate(F.resultsAdapter,it)),F.tags&&(F.resultsAdapter=P.Decorate(F.resultsAdapter,bt))),F.dropdownAdapter==null){if(F.multiple)F.dropdownAdapter=M;else{var rt=P.Decorate(M,J);F.dropdownAdapter=rt}F.minimumResultsForSearch!==0&&(F.dropdownAdapter=P.Decorate(F.dropdownAdapter,nt)),F.closeOnSelect&&(F.dropdownAdapter=P.Decorate(F.dropdownAdapter,gt)),F.dropdownCssClass!=null&&(F.dropdownAdapter=P.Decorate(F.dropdownAdapter,ut)),F.dropdownAdapter=P.Decorate(F.dropdownAdapter,B)}F.selectionAdapter==null&&(F.multiple?F.selectionAdapter=h:F.selectionAdapter=k,F.placeholder!=null&&(F.selectionAdapter=P.Decorate(F.selectionAdapter,b)),F.allowClear&&(F.selectionAdapter=P.Decorate(F.selectionAdapter,p)),F.multiple&&(F.selectionAdapter=P.Decorate(F.selectionAdapter,A)),F.selectionCssClass!=null&&(F.selectionAdapter=P.Decorate(F.selectionAdapter,v)),F.selectionAdapter=P.Decorate(F.selectionAdapter,D)),F.language=this._resolveLanguage(F.language),F.language.push("en");for(var ht=[],lt=0;lt<F.language.length;lt++){var Ct=F.language[lt];ht.indexOf(Ct)===-1&&ht.push(Ct)}return F.language=ht,F.translations=this._processTranslations(F.language,F.debug),F},at.prototype.reset=function(){function F(ht){function lt(Ct){return z[Ct]||Ct}return ht.replace(/[^\u0000-\u007E]/g,lt)}function rt(ht,lt){if(ht.term==null||ht.term.trim()==="")return lt;if(lt.children&&lt.children.length>0){for(var Ct=w.extend(!0,{},lt),vt=lt.children.length-1;vt>=0;vt--){var mt=lt.children[vt],re=rt(ht,mt);re==null&&Ct.children.splice(vt,1)}return Ct.children.length>0?Ct:rt(ht,Ct)}var hn=F(lt.text).toUpperCase(),je=F(ht.term).toUpperCase();return hn.indexOf(je)>-1?lt:null}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:P.escapeMarkup,language:{},matcher:rt,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(ht){return ht},templateResult:function(ht){return ht.text},templateSelection:function(ht){return ht.text},theme:"default",width:"resolve"}},at.prototype.applyFromElement=function(F,rt){var ht=F.language,lt=this.defaults.language,Ct=rt.prop("lang"),vt=rt.closest("[lang]").prop("lang"),mt=Array.prototype.concat.call(this._resolveLanguage(Ct),this._resolveLanguage(ht),this._resolveLanguage(lt),this._resolveLanguage(vt));return F.language=mt,F},at.prototype._resolveLanguage=function(F){if(!F)return[];if(w.isEmptyObject(F))return[];if(w.isPlainObject(F))return[F];var rt;Array.isArray(F)?rt=F:rt=[F];for(var ht=[],lt=0;lt<rt.length;lt++)if(ht.push(rt[lt]),typeof rt[lt]=="string"&&rt[lt].indexOf("-")>0){var Ct=rt[lt].split("-"),vt=Ct[0];ht.push(vt)}return ht},at.prototype._processTranslations=function(F,rt){for(var ht=new O,lt=0;lt<F.length;lt++){var Ct=new O,vt=F[lt];if(typeof vt=="string")try{Ct=O.loadPath(vt)}catch{try{vt=this.defaults.amdLanguageBase+vt,Ct=O.loadPath(vt)}catch{rt&&window.console&&console.warn&&console.warn('Select2: The language file for "'+vt+'" could not be automatically loaded. A fallback will be used instead.')}}else w.isPlainObject(vt)?Ct=new O(vt):Ct=vt;ht.extend(Ct)}return ht},at.prototype.set=function(F,rt){var ht=w.camelCase(F),lt={};lt[ht]=rt;var Ct=P._convertData(lt);w.extend(!0,this.defaults,Ct)};var jt=new at;return jt}),S.define("select2/options",["jquery","./defaults","./utils"],function(w,f,k){function h(b,p){this.options=b,p!=null&&this.fromElement(p),p!=null&&(this.options=f.applyFromElement(this.options,p)),this.options=f.apply(this.options)}return h.prototype.fromElement=function(b){var p=["select2"];this.options.multiple==null&&(this.options.multiple=b.prop("multiple")),this.options.disabled==null&&(this.options.disabled=b.prop("disabled")),this.options.autocomplete==null&&b.prop("autocomplete")&&(this.options.autocomplete=b.prop("autocomplete")),this.options.dir==null&&(b.prop("dir")?this.options.dir=b.prop("dir"):b.closest("[dir]").prop("dir")?this.options.dir=b.closest("[dir]").prop("dir"):this.options.dir="ltr"),b.prop("disabled",this.options.disabled),b.prop("multiple",this.options.multiple),k.GetData(b[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),k.StoreData(b[0],"data",k.GetData(b[0],"select2Tags")),k.StoreData(b[0],"tags",!0)),k.GetData(b[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),b.attr("ajax--url",k.GetData(b[0],"ajaxUrl")),k.StoreData(b[0],"ajax-Url",k.GetData(b[0],"ajaxUrl")));var A={};function v(tt,ot){return ot.toUpperCase()}for(var D=0;D<b[0].attributes.length;D++){var P=b[0].attributes[D].name,O="data-";if(P.substr(0,O.length)==O){var z=P.substring(O.length),V=k.GetData(b[0],z),Z=z.replace(/-([a-z])/g,v);A[Z]=V}}w.fn.jquery&&w.fn.jquery.substr(0,2)=="1."&&b[0].dataset&&(A=w.extend(!0,{},b[0].dataset,A));var Y=w.extend(!0,{},k.GetData(b[0]),A);Y=k._convertData(Y);for(var q in Y)p.indexOf(q)>-1||(w.isPlainObject(this.options[q])?w.extend(this.options[q],Y[q]):this.options[q]=Y[q]);return this},h.prototype.get=function(b){return this.options[b]},h.prototype.set=function(b,p){this.options[b]=p},h}),S.define("select2/core",["jquery","./options","./utils","./keys"],function(w,f,k,h){var b=function(p,A){k.GetData(p[0],"select2")!=null&&k.GetData(p[0],"select2").destroy(),this.$element=p,this.id=this._generateId(p),A=A||{},this.options=new f(A,p),b.__super__.constructor.call(this);var v=p.attr("tabindex")||0;k.StoreData(p[0],"old-tabindex",v),p.attr("tabindex","-1");var D=this.options.get("dataAdapter");this.dataAdapter=new D(p,this.options);var P=this.render();this._placeContainer(P);var O=this.options.get("selectionAdapter");this.selection=new O(p,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,P);var z=this.options.get("dropdownAdapter");this.dropdown=new z(p,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,P);var V=this.options.get("resultsAdapter");this.results=new V(p,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var Z=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(Y){Z.trigger("selection:update",{data:Y})}),p[0].classList.add("select2-hidden-accessible"),p.attr("aria-hidden","true"),this._syncAttributes(),k.StoreData(p[0],"select2",this),p.data("select2",this)};return k.Extend(b,k.Observable),b.prototype._generateId=function(p){var A="";return p.attr("id")!=null?A=p.attr("id"):p.attr("name")!=null?A=p.attr("name")+"-"+k.generateChars(2):A=k.generateChars(4),A=A.replace(/(:|\.|\[|\]|,)/g,""),A="select2-"+A,A},b.prototype._placeContainer=function(p){p.insertAfter(this.$element);var A=this._resolveWidth(this.$element,this.options.get("width"));A!=null&&p.css("width",A)},b.prototype._resolveWidth=function(p,A){var v=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if(A=="resolve"){var D=this._resolveWidth(p,"style");return D!=null?D:this._resolveWidth(p,"element")}if(A=="element"){var P=p.outerWidth(!1);return P<=0?"auto":P+"px"}if(A=="style"){var O=p.attr("style");if(typeof O!="string")return null;for(var z=O.split(";"),V=0,Z=z.length;V<Z;V=V+1){var Y=z[V].replace(/\s/g,""),q=Y.match(v);if(q!==null&&q.length>=1)return q[1]}return null}if(A=="computedstyle"){var tt=window.getComputedStyle(p[0]);return tt.width}return A},b.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},b.prototype._registerDomEvents=function(){var p=this;this.$element.on("change.select2",function(){p.dataAdapter.current(function(A){p.trigger("selection:update",{data:A})})}),this.$element.on("focus.select2",function(A){p.trigger("focus",A)}),this._syncA=k.bind(this._syncAttributes,this),this._syncS=k.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(A){p._syncA(),p._syncS(A)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},b.prototype._registerDataEvents=function(){var p=this;this.dataAdapter.on("*",function(A,v){p.trigger(A,v)})},b.prototype._registerSelectionEvents=function(){var p=this,A=["toggle","focus"];this.selection.on("toggle",function(){p.toggleDropdown()}),this.selection.on("focus",function(v){p.focus(v)}),this.selection.on("*",function(v,D){A.indexOf(v)===-1&&p.trigger(v,D)})},b.prototype._registerDropdownEvents=function(){var p=this;this.dropdown.on("*",function(A,v){p.trigger(A,v)})},b.prototype._registerResultsEvents=function(){var p=this;this.results.on("*",function(A,v){p.trigger(A,v)})},b.prototype._registerEvents=function(){var p=this;this.on("open",function(){p.$container[0].classList.add("select2-container--open")}),this.on("close",function(){p.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){p.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){p.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){p.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(A){p.isOpen()||p.trigger("open",{}),this.dataAdapter.query(A,function(v){p.trigger("results:all",{data:v,query:A})})}),this.on("query:append",function(A){this.dataAdapter.query(A,function(v){p.trigger("results:append",{data:v,query:A})})}),this.on("keypress",function(A){var v=A.which;p.isOpen()?v===h.ESC||v===h.UP&&A.altKey?(p.close(A),A.preventDefault()):v===h.ENTER||v===h.TAB?(p.trigger("results:select",{}),A.preventDefault()):v===h.SPACE&&A.ctrlKey?(p.trigger("results:toggle",{}),A.preventDefault()):v===h.UP?(p.trigger("results:previous",{}),A.preventDefault()):v===h.DOWN&&(p.trigger("results:next",{}),A.preventDefault()):(v===h.ENTER||v===h.SPACE||v===h.DOWN&&A.altKey)&&(p.open(),A.preventDefault())})},b.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},b.prototype._isChangeMutation=function(p){var A=this;if(p.addedNodes&&p.addedNodes.length>0)for(var v=0;v<p.addedNodes.length;v++){var D=p.addedNodes[v];if(D.selected)return!0}else{if(p.removedNodes&&p.removedNodes.length>0)return!0;if(Array.isArray(p))return p.some(function(P){return A._isChangeMutation(P)})}return!1},b.prototype._syncSubtree=function(p){var A=this._isChangeMutation(p),v=this;A&&this.dataAdapter.current(function(D){v.trigger("selection:update",{data:D})})},b.prototype.trigger=function(p,A){var v=b.__super__.trigger,D={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(A===void 0&&(A={}),p in D){var P=D[p],O={prevented:!1,name:p,args:A};if(v.call(this,P,O),O.prevented){A.prevented=!0;return}}v.call(this,p,A)},b.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},b.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},b.prototype.close=function(p){!this.isOpen()||this.trigger("close",{originalEvent:p})},b.prototype.isEnabled=function(){return!this.isDisabled()},b.prototype.isDisabled=function(){return this.options.get("disabled")},b.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},b.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},b.prototype.focus=function(p){this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},b.prototype.enable=function(p){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(p==null||p.length===0)&&(p=[!0]);var A=!p[0];this.$element.prop("disabled",A)},b.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var p=[];return this.dataAdapter.current(function(A){p=A}),p},b.prototype.val=function(p){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),p==null||p.length===0)return this.$element.val();var A=p[0];Array.isArray(A)&&(A=A.map(function(v){return v.toString()})),this.$element.val(A).trigger("input").trigger("change")},b.prototype.destroy=function(){k.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",k.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),k.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},b.prototype.render=function(){var p=w('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return p.attr("dir",this.options.get("dir")),this.$container=p,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),k.StoreData(p[0],"element",this.$element),p},b}),S.define("jquery-mousewheel",["jquery"],function(w){return w}),S.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(w,f,k,h,b){if(w.fn.select2==null){var p=["open","close","destroy"];w.fn.select2=function(A){if(A=A||{},typeof A=="object")return this.each(function(){var P=w.extend(!0,{},A);new k(w(this),P)}),this;if(typeof A=="string"){var v,D=Array.prototype.slice.call(arguments,1);return this.each(function(){var P=b.GetData(this,"select2");P==null&&window.console&&console.error&&console.error("The select2('"+A+"') method was called on an element that is not using Select2."),v=P[A].apply(P,D)}),p.indexOf(A)>-1?this:v}else throw new Error("Invalid arguments for Select2: "+A)}}return w.fn.select2.defaults==null&&(w.fn.select2.defaults=h),k}),{define:S.define,require:S.require}}(),x=_.require("jquery.select2");return l.fn.select2.amd=_,x})})(xI);var DI={exports:{}};/*!
 * jQuery Validation Plugin v1.19.5
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2022 Jörn Zaefferer
 * Released under the MIT license
 */(function(C){(function(l){C.exports?C.exports=l(Ac()):l(jQuery)})(function(l){l.extend(l.fn,{validate:function(w){if(!this.length){w&&w.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.");return}var f=l.data(this[0],"validator");return f||(this.attr("novalidate","novalidate"),f=new l.validator(w,this[0]),l.data(this[0],"validator",f),f.settings.onsubmit&&(this.on("click.validate",":submit",function(k){f.submitButton=k.currentTarget,l(this).hasClass("cancel")&&(f.cancelSubmit=!0),l(this).attr("formnovalidate")!==void 0&&(f.cancelSubmit=!0)}),this.on("submit.validate",function(k){f.settings.debug&&k.preventDefault();function h(){var b,p;return f.submitButton&&(f.settings.submitHandler||f.formSubmitted)&&(b=l("<input type='hidden'/>").attr("name",f.submitButton.name).val(l(f.submitButton).val()).appendTo(f.currentForm)),f.settings.submitHandler&&!f.settings.debug?(p=f.settings.submitHandler.call(f,f.currentForm,k),b&&b.remove(),p!==void 0?p:!1):!0}return f.cancelSubmit?(f.cancelSubmit=!1,h()):f.form()?f.pendingRequest?(f.formSubmitted=!0,!1):h():(f.focusInvalid(),!1)})),f)},valid:function(){var w,f,k;return l(this[0]).is("form")?w=this.validate().form():(k=[],w=!0,f=l(this[0].form).validate(),this.each(function(){w=f.element(this)&&w,w||(k=k.concat(f.errorList))}),f.errorList=k),w},rules:function(w,f){var k=this[0],h=typeof this.attr("contenteditable")<"u"&&this.attr("contenteditable")!=="false",b,p,A,v,D,P;if(k!=null&&(!k.form&&h&&(k.form=this.closest("form")[0],k.name=this.attr("name")),k.form!=null)){if(w)switch(b=l.data(k.form,"validator").settings,p=b.rules,A=l.validator.staticRules(k),w){case"add":l.extend(A,l.validator.normalizeRule(f)),delete A.messages,p[k.name]=A,f.messages&&(b.messages[k.name]=l.extend(b.messages[k.name],f.messages));break;case"remove":return f?(P={},l.each(f.split(/\s/),function(O,z){P[z]=A[z],delete A[z]}),P):(delete p[k.name],A)}return v=l.validator.normalizeRules(l.extend({},l.validator.classRules(k),l.validator.attributeRules(k),l.validator.dataRules(k),l.validator.staticRules(k)),k),v.required&&(D=v.required,delete v.required,v=l.extend({required:D},v)),v.remote&&(D=v.remote,delete v.remote,v=l.extend(v,{remote:D})),v}}});var _=function(w){return w.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};l.extend(l.expr.pseudos||l.expr[":"],{blank:function(w){return!_(""+l(w).val())},filled:function(w){var f=l(w).val();return f!==null&&!!_(""+f)},unchecked:function(w){return!l(w).prop("checked")}}),l.validator=function(w,f){this.settings=l.extend(!0,{},l.validator.defaults,w),this.currentForm=f,this.init()},l.validator.format=function(w,f){return arguments.length===1?function(){var k=l.makeArray(arguments);return k.unshift(w),l.validator.format.apply(this,k)}:(f===void 0||(arguments.length>2&&f.constructor!==Array&&(f=l.makeArray(arguments).slice(1)),f.constructor!==Array&&(f=[f]),l.each(f,function(k,h){w=w.replace(new RegExp("\\{"+k+"\\}","g"),function(){return h})})),w)},l.extend(l.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:l([]),errorLabelContainer:l([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(w){this.lastActive=w,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,w,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(w)))},onfocusout:function(w){!this.checkable(w)&&(w.name in this.submitted||!this.optional(w))&&this.element(w)},onkeyup:function(w,f){var k=[16,17,18,20,35,36,37,38,39,40,45,144,225];f.which===9&&this.elementValue(w)===""||l.inArray(f.keyCode,k)!==-1||(w.name in this.submitted||w.name in this.invalid)&&this.element(w)},onclick:function(w){w.name in this.submitted?this.element(w):w.parentNode.name in this.submitted&&this.element(w.parentNode)},highlight:function(w,f,k){w.type==="radio"?this.findByName(w.name).addClass(f).removeClass(k):l(w).addClass(f).removeClass(k)},unhighlight:function(w,f,k){w.type==="radio"?this.findByName(w.name).removeClass(f).addClass(k):l(w).removeClass(f).addClass(k)}},setDefaults:function(w){l.extend(l.validator.defaults,w)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:l.validator.format("Please enter no more than {0} characters."),minlength:l.validator.format("Please enter at least {0} characters."),rangelength:l.validator.format("Please enter a value between {0} and {1} characters long."),range:l.validator.format("Please enter a value between {0} and {1}."),max:l.validator.format("Please enter a value less than or equal to {0}."),min:l.validator.format("Please enter a value greater than or equal to {0}."),step:l.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){this.labelContainer=l(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||l(this.currentForm),this.containers=l(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var w=this.currentForm,f=this.groups={},k;l.each(this.settings.groups,function(b,p){typeof p=="string"&&(p=p.split(/\s/)),l.each(p,function(A,v){f[v]=b})}),k=this.settings.rules,l.each(k,function(b,p){k[b]=l.validator.normalizeRule(p)});function h(b){var p=typeof l(this).attr("contenteditable")<"u"&&l(this).attr("contenteditable")!=="false";if(!this.form&&p&&(this.form=l(this).closest("form")[0],this.name=l(this).attr("name")),w===this.form){var A=l.data(this.form,"validator"),v="on"+b.type.replace(/^validate/,""),D=A.settings;D[v]&&!l(this).is(D.ignore)&&D[v].call(A,this,b)}}l(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",h).on("click.validate","select, option, [type='radio'], [type='checkbox']",h),this.settings.invalidHandler&&l(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),l.extend(this.submitted,this.errorMap),this.invalid=l.extend({},this.errorMap),this.valid()||l(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var w=0,f=this.currentElements=this.elements();f[w];w++)this.check(f[w]);return this.valid()},element:function(w){var f=this.clean(w),k=this.validationTargetFor(f),h=this,b=!0,p,A;return k===void 0?delete this.invalid[f.name]:(this.prepareElement(k),this.currentElements=l(k),A=this.groups[k.name],A&&l.each(this.groups,function(v,D){D===A&&v!==k.name&&(f=h.validationTargetFor(h.clean(h.findByName(v))),f&&f.name in h.invalid&&(h.currentElements.push(f),b=h.check(f)&&b))}),p=this.check(k)!==!1,b=b&&p,p?this.invalid[k.name]=!1:this.invalid[k.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),l(w).attr("aria-invalid",!p)),b},showErrors:function(w){if(w){var f=this;l.extend(this.errorMap,w),this.errorList=l.map(this.errorMap,function(k,h){return{message:k,element:f.findByName(h)[0]}}),this.successList=l.grep(this.successList,function(k){return!(k.name in w)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){l.fn.resetForm&&l(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var w=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(w)},resetElements:function(w){var f;if(this.settings.unhighlight)for(f=0;w[f];f++)this.settings.unhighlight.call(this,w[f],this.settings.errorClass,""),this.findByName(w[f].name).removeClass(this.settings.validClass);else w.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(w){var f=0,k;for(k in w)w[k]!==void 0&&w[k]!==null&&w[k]!==!1&&f++;return f},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(w){w.not(this.containers).text(""),this.addWrapper(w).hide()},valid:function(){return this.size()===0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{l(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch{}},findLastActive:function(){var w=this.lastActive;return w&&l.grep(this.errorList,function(f){return f.element.name===w.name}).length===1&&w},elements:function(){var w=this,f={};return l(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var k=this.name||l(this).attr("name"),h=typeof l(this).attr("contenteditable")<"u"&&l(this).attr("contenteditable")!=="false";return!k&&w.settings.debug&&window.console&&console.error("%o has no name assigned",this),h&&(this.form=l(this).closest("form")[0],this.name=k),this.form!==w.currentForm||k in f||!w.objectLength(l(this).rules())?!1:(f[k]=!0,!0)})},clean:function(w){return l(w)[0]},errors:function(){var w=this.settings.errorClass.split(" ").join(".");return l(this.settings.errorElement+"."+w,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=l([]),this.toHide=l([])},reset:function(){this.resetInternals(),this.currentElements=l([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(w){this.reset(),this.toHide=this.errorsFor(w)},elementValue:function(w){var f=l(w),k=w.type,h=typeof f.attr("contenteditable")<"u"&&f.attr("contenteditable")!=="false",b,p;return k==="radio"||k==="checkbox"?this.findByName(w.name).filter(":checked").val():k==="number"&&typeof w.validity<"u"?w.validity.badInput?"NaN":f.val():(h?b=f.text():b=f.val(),k==="file"?b.substr(0,12)==="C:\\fakepath\\"?b.substr(12):(p=b.lastIndexOf("/"),p>=0||(p=b.lastIndexOf("\\"),p>=0)?b.substr(p+1):b):typeof b=="string"?b.replace(/\r/g,""):b)},check:function(w){w=this.validationTargetFor(this.clean(w));var f=l(w).rules(),k=l.map(f,function(P,O){return O}).length,h=!1,b=this.elementValue(w),p,A,v,D;typeof f.normalizer=="function"?D=f.normalizer:typeof this.settings.normalizer=="function"&&(D=this.settings.normalizer),D&&(b=D.call(w,b),delete f.normalizer);for(A in f){v={method:A,parameters:f[A]};try{if(p=l.validator.methods[A].call(this,b,w,v.parameters),p==="dependency-mismatch"&&k===1){h=!0;continue}if(h=!1,p==="pending"){this.toHide=this.toHide.not(this.errorsFor(w));return}if(!p)return this.formatAndAdd(w,v),!1}catch(P){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+w.id+", check the '"+v.method+"' method.",P),P instanceof TypeError&&(P.message+=".  Exception occurred when checking element "+w.id+", check the '"+v.method+"' method."),P}}if(!h)return this.objectLength(f)&&this.successList.push(w),!0},customDataMessage:function(w,f){return l(w).data("msg"+f.charAt(0).toUpperCase()+f.substring(1).toLowerCase())||l(w).data("msg")},customMessage:function(w,f){var k=this.settings.messages[w];return k&&(k.constructor===String?k:k[f])},findDefined:function(){for(var w=0;w<arguments.length;w++)if(arguments[w]!==void 0)return arguments[w]},defaultMessage:function(w,f){typeof f=="string"&&(f={method:f});var k=this.findDefined(this.customMessage(w.name,f.method),this.customDataMessage(w,f.method),!this.settings.ignoreTitle&&w.title||void 0,l.validator.messages[f.method],"<strong>Warning: No message defined for "+w.name+"</strong>"),h=/\$?\{(\d+)\}/g;return typeof k=="function"?k=k.call(this,f.parameters,w):h.test(k)&&(k=l.validator.format(k.replace(h,"{$1}"),f.parameters)),k},formatAndAdd:function(w,f){var k=this.defaultMessage(w,f);this.errorList.push({message:k,element:w,method:f.method}),this.errorMap[w.name]=k,this.submitted[w.name]=k},addWrapper:function(w){return this.settings.wrapper&&(w=w.add(w.parent(this.settings.wrapper))),w},defaultShowErrors:function(){var w,f,k;for(w=0;this.errorList[w];w++)k=this.errorList[w],this.settings.highlight&&this.settings.highlight.call(this,k.element,this.settings.errorClass,this.settings.validClass),this.showLabel(k.element,k.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(w=0;this.successList[w];w++)this.showLabel(this.successList[w]);if(this.settings.unhighlight)for(w=0,f=this.validElements();f[w];w++)this.settings.unhighlight.call(this,f[w],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return l(this.errorList).map(function(){return this.element})},showLabel:function(w,f){var k,h,b,p,A=this.errorsFor(w),v=this.idOrName(w),D=l(w).attr("aria-describedby");A.length?(A.removeClass(this.settings.validClass).addClass(this.settings.errorClass),A.html(f)):(A=l("<"+this.settings.errorElement+">").attr("id",v+"-error").addClass(this.settings.errorClass).html(f||""),k=A,this.settings.wrapper&&(k=A.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(k):this.settings.errorPlacement?this.settings.errorPlacement.call(this,k,l(w)):k.insertAfter(w),A.is("label")?A.attr("for",v):A.parents("label[for='"+this.escapeCssMeta(v)+"']").length===0&&(b=A.attr("id"),D?D.match(new RegExp("\\b"+this.escapeCssMeta(b)+"\\b"))||(D+=" "+b):D=b,l(w).attr("aria-describedby",D),h=this.groups[w.name],h&&(p=this,l.each(p.groups,function(P,O){O===h&&l("[name='"+p.escapeCssMeta(P)+"']",p.currentForm).attr("aria-describedby",A.attr("id"))})))),!f&&this.settings.success&&(A.text(""),typeof this.settings.success=="string"?A.addClass(this.settings.success):this.settings.success(A,w)),this.toShow=this.toShow.add(A)},errorsFor:function(w){var f=this.escapeCssMeta(this.idOrName(w)),k=l(w).attr("aria-describedby"),h="label[for='"+f+"'], label[for='"+f+"'] *";return k&&(h=h+", #"+this.escapeCssMeta(k).replace(/\s+/g,", #")),this.errors().filter(h)},escapeCssMeta:function(w){return w===void 0?"":w.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(w){return this.groups[w.name]||(this.checkable(w)?w.name:w.id||w.name)},validationTargetFor:function(w){return this.checkable(w)&&(w=this.findByName(w.name)),l(w).not(this.settings.ignore)[0]},checkable:function(w){return/radio|checkbox/i.test(w.type)},findByName:function(w){return l(this.currentForm).find("[name='"+this.escapeCssMeta(w)+"']")},getLength:function(w,f){switch(f.nodeName.toLowerCase()){case"select":return l("option:selected",f).length;case"input":if(this.checkable(f))return this.findByName(f.name).filter(":checked").length}return w.length},depend:function(w,f){return this.dependTypes[typeof w]?this.dependTypes[typeof w](w,f):!0},dependTypes:{boolean:function(w){return w},string:function(w,f){return!!l(w,f.form).length},function:function(w,f){return w(f)}},optional:function(w){var f=this.elementValue(w);return!l.validator.methods.required.call(this,f,w)&&"dependency-mismatch"},startRequest:function(w){this.pending[w.name]||(this.pendingRequest++,l(w).addClass(this.settings.pendingClass),this.pending[w.name]=!0)},stopRequest:function(w,f){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[w.name],l(w).removeClass(this.settings.pendingClass),f&&this.pendingRequest===0&&this.formSubmitted&&this.form()&&this.pendingRequest===0?(l(this.currentForm).trigger("submit"),this.submitButton&&l("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!f&&this.pendingRequest===0&&this.formSubmitted&&(l(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(w,f){return f=typeof f=="string"&&f||"remote",l.data(w,"previousValue")||l.data(w,"previousValue",{old:null,valid:!0,message:this.defaultMessage(w,{method:f})})},destroy:function(){this.resetForm(),l(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(w,f){w.constructor===String?this.classRuleSettings[w]=f:l.extend(this.classRuleSettings,w)},classRules:function(w){var f={},k=l(w).attr("class");return k&&l.each(k.split(" "),function(){this in l.validator.classRuleSettings&&l.extend(f,l.validator.classRuleSettings[this])}),f},normalizeAttributeRule:function(w,f,k,h){/min|max|step/.test(k)&&(f===null||/number|range|text/.test(f))&&(h=Number(h),isNaN(h)&&(h=void 0)),h||h===0?w[k]=h:f===k&&f!=="range"&&(w[f==="date"?"dateISO":k]=!0)},attributeRules:function(w){var f={},k=l(w),h=w.getAttribute("type"),b,p;for(b in l.validator.methods)b==="required"?(p=w.getAttribute(b),p===""&&(p=!0),p=!!p):p=k.attr(b),this.normalizeAttributeRule(f,h,b,p);return f.maxlength&&/-1|2147483647|524288/.test(f.maxlength)&&delete f.maxlength,f},dataRules:function(w){var f={},k=l(w),h=w.getAttribute("type"),b,p;for(b in l.validator.methods)p=k.data("rule"+b.charAt(0).toUpperCase()+b.substring(1).toLowerCase()),p===""&&(p=!0),this.normalizeAttributeRule(f,h,b,p);return f},staticRules:function(w){var f={},k=l.data(w.form,"validator");return k.settings.rules&&(f=l.validator.normalizeRule(k.settings.rules[w.name])||{}),f},normalizeRules:function(w,f){return l.each(w,function(k,h){if(h===!1){delete w[k];return}if(h.param||h.depends){var b=!0;switch(typeof h.depends){case"string":b=!!l(h.depends,f.form).length;break;case"function":b=h.depends.call(f,f);break}b?w[k]=h.param!==void 0?h.param:!0:(l.data(f.form,"validator").resetElements(l(f)),delete w[k])}}),l.each(w,function(k,h){w[k]=typeof h=="function"&&k!=="normalizer"?h(f):h}),l.each(["minlength","maxlength"],function(){w[this]&&(w[this]=Number(w[this]))}),l.each(["rangelength","range"],function(){var k;w[this]&&(Array.isArray(w[this])?w[this]=[Number(w[this][0]),Number(w[this][1])]:typeof w[this]=="string"&&(k=w[this].replace(/[\[\]]/g,"").split(/[\s,]+/),w[this]=[Number(k[0]),Number(k[1])]))}),l.validator.autoCreateRanges&&(w.min!=null&&w.max!=null&&(w.range=[w.min,w.max],delete w.min,delete w.max),w.minlength!=null&&w.maxlength!=null&&(w.rangelength=[w.minlength,w.maxlength],delete w.minlength,delete w.maxlength)),w},normalizeRule:function(w){if(typeof w=="string"){var f={};l.each(w.split(/\s/),function(){f[this]=!0}),w=f}return w},addMethod:function(w,f,k){l.validator.methods[w]=f,l.validator.messages[w]=k!==void 0?k:l.validator.messages[w],f.length<3&&l.validator.addClassRules(w,l.validator.normalizeRule(w))},methods:{required:function(w,f,k){if(!this.depend(k,f))return"dependency-mismatch";if(f.nodeName.toLowerCase()==="select"){var h=l(f).val();return h&&h.length>0}return this.checkable(f)?this.getLength(w,f)>0:w!=null&&w.length>0},email:function(w,f){return this.optional(f)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(w)},url:function(w,f){return this.optional(f)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(w)},date:function(){var w=!1;return function(f,k){return w||(w=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(k)||!/Invalid|NaN/.test(new Date(f).toString())}}(),dateISO:function(w,f){return this.optional(f)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(w)},number:function(w,f){return this.optional(f)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(w)},digits:function(w,f){return this.optional(f)||/^\d+$/.test(w)},minlength:function(w,f,k){var h=Array.isArray(w)?w.length:this.getLength(w,f);return this.optional(f)||h>=k},maxlength:function(w,f,k){var h=Array.isArray(w)?w.length:this.getLength(w,f);return this.optional(f)||h<=k},rangelength:function(w,f,k){var h=Array.isArray(w)?w.length:this.getLength(w,f);return this.optional(f)||h>=k[0]&&h<=k[1]},min:function(w,f,k){return this.optional(f)||w>=k},max:function(w,f,k){return this.optional(f)||w<=k},range:function(w,f,k){return this.optional(f)||w>=k[0]&&w<=k[1]},step:function(w,f,k){var h=l(f).attr("type"),b="Step attribute on input type "+h+" is not supported.",p=["text","number","range"],A=new RegExp("\\b"+h+"\\b"),v=h&&!A.test(p.join()),D=function(V){var Z=(""+V).match(/(?:\.(\d+))?$/);return Z&&Z[1]?Z[1].length:0},P=function(V){return Math.round(V*Math.pow(10,z))},O=!0,z;if(v)throw new Error(b);return z=D(k),(D(w)>z||P(w)%P(k)!==0)&&(O=!1),this.optional(f)||O},equalTo:function(w,f,k){var h=l(k);return this.settings.onfocusout&&h.not(".validate-equalTo-blur").length&&h.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){l(f).valid()}),w===h.val()},remote:function(w,f,k,h){if(this.optional(f))return"dependency-mismatch";h=typeof h=="string"&&h||"remote";var b=this.previousValue(f,h),p,A,v;return this.settings.messages[f.name]||(this.settings.messages[f.name]={}),b.originalMessage=b.originalMessage||this.settings.messages[f.name][h],this.settings.messages[f.name][h]=b.message,k=typeof k=="string"&&{url:k}||k,v=l.param(l.extend({data:w},k.data)),b.old===v?b.valid:(b.old=v,p=this,this.startRequest(f),A={},A[f.name]=w,l.ajax(l.extend(!0,{mode:"abort",port:"validate"+f.name,dataType:"json",data:A,context:p.currentForm,success:function(D){var P=D===!0||D==="true",O,z,V;p.settings.messages[f.name][h]=b.originalMessage,P?(V=p.formSubmitted,p.resetInternals(),p.toHide=p.errorsFor(f),p.formSubmitted=V,p.successList.push(f),p.invalid[f.name]=!1,p.showErrors()):(O={},z=D||p.defaultMessage(f,{method:h,parameters:w}),O[f.name]=b.message=z,p.invalid[f.name]=!0,p.showErrors(O)),b.valid=P,p.stopRequest(f,P)}},k)),"pending")}}});var x={},S;return l.ajaxPrefilter?l.ajaxPrefilter(function(w,f,k){var h=w.port;w.mode==="abort"&&(x[h]&&x[h].abort(),x[h]=k)}):(S=l.ajax,l.ajax=function(w){var f=("mode"in w?w:l.ajaxSettings).mode,k=("port"in w?w:l.ajaxSettings).port;return f==="abort"?(x[k]&&x[k].abort(),x[k]=S.apply(this,arguments),x[k]):S.apply(this,arguments)}),l})})(DI);var Sc={exports:{}};(function(C,l){(function(_){const x=_.en=_.en||{};x.dictionary=Object.assign(x.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(_,x){C.exports=x()}(self,()=>(()=>{var _={3062:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const D=v},903:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const D=v},3143:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},4717:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const D=v},9315:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const D=v},8733:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const D=v},3508:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const D=v},2640:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const D=v},5083:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},4036:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const D=v},3773:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const D=v},3689:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const D=v},1905:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},9773:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const D=v},2347:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},7754:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},4564:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},4652:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const D=v},7442:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},9292:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},1613:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const D=v},6306:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const D=v},3881:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const D=v},6945:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},4906:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=v},5332:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const D=v},6781:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const D=v},5485:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},3949:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7686:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},7339:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const D=v},9688:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},8847:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const D=v},6574:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},4879:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},3662:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const D=v},2577:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},1046:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},8793:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},4650:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const D=v},7676:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},5868:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},6764:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const D=v},9695:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const D=v},5542:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const D=v},3332:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const D=v},4793:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const D=v},3488:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const D=v},8506:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const D=v},4921:(f,k,h)=>{h.d(k,{Z:()=>D});var b=h(1799),p=h.n(b),A=h(2609),v=h.n(A)()(p());v.push([f.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const D=v},2609:f=>{f.exports=function(k){var h=[];return h.toString=function(){return this.map(function(b){var p=k(b);return b[2]?"@media ".concat(b[2]," {").concat(p,"}"):p}).join("")},h.i=function(b,p,A){typeof b=="string"&&(b=[[null,b,""]]);var v={};if(A)for(var D=0;D<this.length;D++){var P=this[D][0];P!=null&&(v[P]=!0)}for(var O=0;O<b.length;O++){var z=[].concat(b[O]);A&&v[z[0]]||(p&&(z[2]?z[2]="".concat(p," and ").concat(z[2]):z[2]=p),h.push(z))}},h}},1799:f=>{function k(b,p){return function(A){if(Array.isArray(A))return A}(b)||function(A,v){var D=A&&(typeof Symbol<"u"&&A[Symbol.iterator]||A["@@iterator"]);if(D!=null){var P,O,z=[],V=!0,Z=!1;try{for(D=D.call(A);!(V=(P=D.next()).done)&&(z.push(P.value),!v||z.length!==v);V=!0);}catch(Y){Z=!0,O=Y}finally{try{V||D.return==null||D.return()}finally{if(Z)throw O}}return z}}(b,p)||function(A,v){if(!!A){if(typeof A=="string")return h(A,v);var D=Object.prototype.toString.call(A).slice(8,-1);if(D==="Object"&&A.constructor&&(D=A.constructor.name),D==="Map"||D==="Set")return Array.from(A);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return h(A,v)}}(b,p)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function h(b,p){(p==null||p>b.length)&&(p=b.length);for(var A=0,v=new Array(p);A<p;A++)v[A]=b[A];return v}f.exports=function(b){var p=k(b,4),A=p[1],v=p[3];if(!v)return A;if(typeof btoa=="function"){var D=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),P="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(D),O="/*# ".concat(P," */"),z=v.sources.map(function(V){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(V," */")});return[A].concat(z).concat([O]).join(`
`)}return[A].join(`
`)}},6062:(f,k,h)=>{var b,p=function(){return b===void 0&&(b=Boolean(window&&document&&document.all&&!window.atob)),b},A=function(){var Q={};return function(et){if(Q[et]===void 0){var M=document.querySelector(et);if(window.HTMLIFrameElement&&M instanceof window.HTMLIFrameElement)try{M=M.contentDocument.head}catch{M=null}Q[et]=M}return Q[et]}}(),v=[];function D(Q){for(var et=-1,M=0;M<v.length;M++)if(v[M].identifier===Q){et=M;break}return et}function P(Q,et){for(var M={},J=[],ft=0;ft<Q.length;ft++){var kt=Q[ft],B=et.base?kt[0]+et.base:kt[0],nt=M[B]||0,it="".concat(B," ").concat(nt);M[B]=nt+1;var gt=D(it),ut={css:kt[1],media:kt[2],sourceMap:kt[3]};gt!==-1?(v[gt].references++,v[gt].updater(ut)):v.push({identifier:it,updater:ot(ut,et),references:1}),J.push(it)}return J}function O(Q){var et=document.createElement("style"),M=Q.attributes||{};if(M.nonce===void 0){var J=h.nc;J&&(M.nonce=J)}if(Object.keys(M).forEach(function(kt){et.setAttribute(kt,M[kt])}),typeof Q.insert=="function")Q.insert(et);else{var ft=A(Q.insert||"head");if(!ft)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ft.appendChild(et)}return et}var z,V=(z=[],function(Q,et){return z[Q]=et,z.filter(Boolean).join(`
`)});function Z(Q,et,M,J){var ft=M?"":J.media?"@media ".concat(J.media," {").concat(J.css,"}"):J.css;if(Q.styleSheet)Q.styleSheet.cssText=V(et,ft);else{var kt=document.createTextNode(ft),B=Q.childNodes;B[et]&&Q.removeChild(B[et]),B.length?Q.insertBefore(kt,B[et]):Q.appendChild(kt)}}function Y(Q,et,M){var J=M.css,ft=M.media,kt=M.sourceMap;if(ft?Q.setAttribute("media",ft):Q.removeAttribute("media"),kt&&typeof btoa<"u"&&(J+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(kt))))," */")),Q.styleSheet)Q.styleSheet.cssText=J;else{for(;Q.firstChild;)Q.removeChild(Q.firstChild);Q.appendChild(document.createTextNode(J))}}var q=null,tt=0;function ot(Q,et){var M,J,ft;if(et.singleton){var kt=tt++;M=q||(q=O(et)),J=Z.bind(null,M,kt,!1),ft=Z.bind(null,M,kt,!0)}else M=O(et),J=Y.bind(null,M,et),ft=function(){(function(B){if(B.parentNode===null)return!1;B.parentNode.removeChild(B)})(M)};return J(Q),function(B){if(B){if(B.css===Q.css&&B.media===Q.media&&B.sourceMap===Q.sourceMap)return;J(Q=B)}else ft()}}f.exports=function(Q,et){(et=et||{}).singleton||typeof et.singleton=="boolean"||(et.singleton=p());var M=P(Q=Q||[],et);return function(J){if(J=J||[],Object.prototype.toString.call(J)==="[object Array]"){for(var ft=0;ft<M.length;ft++){var kt=D(M[ft]);v[kt].references--}for(var B=P(J,et),nt=0;nt<M.length;nt++){var it=D(M[nt]);v[it].references===0&&(v[it].updater(),v.splice(it,1))}M=B}}}}},x={};function S(f){var k=x[f];if(k!==void 0)return k.exports;var h=x[f]={id:f,exports:{}};return _[f](h,h.exports,S),h.exports}S.n=f=>{var k=f&&f.__esModule?()=>f.default:()=>f;return S.d(k,{a:k}),k},S.d=(f,k)=>{for(var h in k)S.o(k,h)&&!S.o(f,h)&&Object.defineProperty(f,h,{enumerable:!0,get:k[h]})},S.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),S.o=(f,k)=>Object.prototype.hasOwnProperty.call(f,k),S.nc=void 0;var w={};return(()=>{function f({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function k(o){const t=o;t.set("_isCssTransitionsDisabled",!1),t.disableCssTransitions=()=>{t._isCssTransitionsDisabled=!0},t.enableCssTransitions=()=>{t._isCssTransitionsDisabled=!1},t.extendTemplate({attributes:{class:[t.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function h({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}S.d(w,{default:()=>sc});const b=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),p={isMac:v(b),isWindows:function(o){return o.indexOf("windows")>-1}(b),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(b),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(b),isiOS:function(o){return!!o.match(/iphone|ipad/i)||v(o)&&navigator.maxTouchPoints>0}(b),isAndroid:function(o){return o.indexOf("android")>-1}(b),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(b),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}},A=p;function v(o){return o.indexOf("macintosh")>-1}function D(o,t,e,n){e=e||function(c,d){return c===d};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,d,u){const g=P(c,d,u);if(g===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const m=O(c,g),y=O(d,g),E=P(m,y,u),T=c.length-E,I=d.length-E;return{firstIndex:g,lastIndexOld:T,lastIndexNew:I}}(i,r,e);return n?function(c,d){const{firstIndex:u,lastIndexOld:g,lastIndexNew:m}=c;if(u===-1)return Array(d).fill("equal");let y=[];return u>0&&(y=y.concat(Array(u).fill("equal"))),m-u>0&&(y=y.concat(Array(m-u).fill("insert"))),g-u>0&&(y=y.concat(Array(g-u).fill("delete"))),m<d&&(y=y.concat(Array(d-m).fill("equal"))),y}(s,r.length):function(c,d){const u=[],{firstIndex:g,lastIndexOld:m,lastIndexNew:y}=d;return y-g>0&&u.push({index:g,type:"insert",values:c.slice(g,y)}),m-g>0&&u.push({index:g+(y-g),type:"delete",howMany:m-g}),u}(r,s)}function P(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function O(o,t){return o.slice(t).reverse()}function z(o,t,e){e=e||function(T,I){return T===I};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return z.fastDiff(o,t,e,!0);let r,s;if(i<n){const T=o;o=t,t=T,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=t.length,d=c-a,u={},g={};function m(T){const I=(g[T-1]!==void 0?g[T-1]:-1)+1,N=g[T+1]!==void 0?g[T+1]:-1,L=I>N?-1:1;u[T+L]&&(u[T]=u[T+L].slice(0)),u[T]||(u[T]=[]),u[T].push(I>N?r:s);let j=Math.max(I,N),K=j-T;for(;K<a&&j<c&&e(o[K],t[j]);)K++,j++,u[T].push("equal");return j}let y,E=0;do{for(y=-E;y<d;y++)g[y]=m(y);for(y=d+E;y>d;y--)g[y]=m(y);g[d]=m(d),E++}while(g[d]!==c);return u[d].slice(1)}function V(o,...t){t.forEach(e=>{const n=Object.getOwnPropertyNames(e),i=Object.getOwnPropertySymbols(e);n.concat(i).forEach(r=>{if(r in o.prototype||typeof e=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const s=Object.getOwnPropertyDescriptor(e,r);s.enumerable=!1,Object.defineProperty(o.prototype,r,s)})})}z.fastDiff=D;const Z=function(){return function o(){o.called=!0}};class Y{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Z(),this.off=Z()}}const q=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function tt(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+q[o>>0&255]+q[o>>8&255]+q[o>>16&255]+q[o>>24&255]+q[t>>0&255]+q[t>>8&255]+q[t>>16&255]+q[t>>24&255]+q[e>>0&255]+q[e>>8&255]+q[e>>16&255]+q[e>>24&255]+q[n>>0&255]+q[n>>8&255]+q[n>>16&255]+q[n>>24&255]}const ot={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function Q(o,t){const e=ot.get(t.priority);for(let n=0;n<o.length;n++)if(ot.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const et="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class M extends Error{constructor(t,e,n){super(function(i,r){const s=new WeakSet,a=(u,g)=>{if(typeof g=="object"&&g!==null){if(s.has(g))return`[object ${g.constructor.name}]`;s.add(g)}return g},c=r?` ${JSON.stringify(r,a)}`:"",d=kt(i);return i+c+d}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new M(t.message,e);throw n.stack=t.stack,n}}function J(o,t){console.warn(...B(o,t))}function ft(o,t){console.error(...B(o,t))}function kt(o){return`
Read more: ${et}#error-${o}`}function B(o,t){const e=kt(o);return t?[o,t,e]:[o,e]}const nt="36.0.1",it=typeof window=="object"?window:S.g;if(it.CKEDITOR_VERSION)throw new M("ckeditor-duplicated-modules",null);it.CKEDITOR_VERSION=nt;const gt=Symbol("listeningTo"),ut=Symbol("emitterId"),bt=Symbol("delegations"),Gt=at(Object);function at(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...s)=>{i||(i=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,s;this[gt]||(this[gt]={});const a=this[gt];F(t)||jt(t);const c=F(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(d,u,g,m,y){u._addEventListener?u._addEventListener(g,m,y):d._addEventListener.call(u,g,m,y)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[gt];let r=t&&F(t);const s=i&&r?i[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!i||t&&!s||e&&!a))if(n)vt(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:vt(this,t,e,n));else if(a){for(;n=a.pop();)vt(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[gt]}}fire(t,...e){try{const n=t instanceof Y?t:new Y(this,t),i=n.name;let r=lt(this,i);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[bt];if(s){const a=s.get(i),c=s.get("*");a&&Ct(a,n,e),c&&Ct(c,n,e)}return n.return}catch(n){M.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[bt]||(this[bt]=new Map),t.forEach(i=>{const r=this[bt].get(i);r?r.set(e,n):this[bt].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[bt])if(t)if(e){const n=this[bt].get(t);n&&n.delete(e)}else this[bt].delete(t);else this[bt].clear()}_addEventListener(t,e,n){(function(s,a){const c=rt(s);if(c[a])return;let d=a,u=null;const g=[];for(;d!==""&&!c[d];)c[d]={callbacks:[],childEvents:[]},g.push(c[d]),u&&c[d].childEvents.push(u),u=d,d=d.substr(0,d.lastIndexOf(":"));if(d!==""){for(const m of g)m.callbacks=c[d].callbacks.slice();c[d].childEvents.push(u)}})(this,t);const i=ht(this,t),r={callback:e,priority:ot.get(n.priority)};for(const s of i)Q(s,r)}_removeEventListener(t,e){const n=ht(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:Gt}function jt(o,t){o[ut]||(o[ut]=t||tt())}function F(o){return o[ut]}function rt(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function ht(o,t){const e=rt(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=ht(o,e.childEvents[i]);n=n.concat(r)}return n}function lt(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?lt(o,t.substr(0,t.lastIndexOf(":"))):null}function Ct(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new Y(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function vt(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{at[o]=Gt.prototype[o]});const mt=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},re=Symbol("observableProperties"),hn=Symbol("boundObservables"),je=Symbol("boundProperties"),gn=Symbol("decoratedMethods"),to=Symbol("decoratedOriginal"),Vo=St(at());function St(o){return o?class extends o{set(t,e){if(mt(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);oi(this);const n=this[re];if(t in this&&!n.has(t))throw new M("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let s=this.fire(`set:${t}`,t,i,r);s===void 0&&(s=i),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!$o(t))throw new M("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new M("observable-bind-duplicate-properties",this);oi(this);const e=this[je];t.forEach(i=>{if(e.has(i))throw new M("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:Ho,toMany:as,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[re])return;const e=this[je],n=this[hn];if(t.length){if(!$o(t))throw new M("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),d=c[a];d.delete(r),d.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){oi(this);const e=this[t];if(!e)throw new M("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][to]=e,this[gn]||(this[gn]=[]),this[gn].push(t)}stopListening(t,e,n){if(!t&&this[gn]){for(const i of this[gn])this[i]=this[i][to];delete this[gn]}super.stopListening(t,e,n)}}:Vo}function oi(o){o[re]||(Object.defineProperty(o,re,{value:new Map}),Object.defineProperty(o,hn,{value:new Map}),Object.defineProperty(o,je,{value:new Map}))}function Ho(...o){const t=function(...r){if(!r.length)throw new M("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new M("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new M("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new M("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new M("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const s=i[hn];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,d)=>{a=s.get(r.observable)[d],a&&a.forEach(u=>{Fe(i,u.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(d=>{s=d.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([d.observable,s]),function(u,g,m,y){const E=u[hn],T=E.get(m),I=T||{};I[y]||(I[y]=new Set),I[y].add(g),T||E.set(m,I)}(r._observable,a,d.observable,s)})})}(this),this._bindProperties.forEach(r=>{Fe(this._observable,r)})}function as(o,t,e){if(this._bindings.size>1)throw new M("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function $o(o){return o.every(t=>typeof t=="string")}function Fe(o,t){const e=o[je].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{St[o]=Vo.prototype[o]});class ri{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function si(o){let t=0;for(const e of o)t++;return t}function Qt(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function ne(o){return!(!o||!o[Symbol.iterator])}const eo=typeof Rr=="object"&&Rr&&Rr.Object===Object&&Rr;var Uo=typeof self=="object"&&self&&self.Object===Object&&self;const de=eo||Uo||Function("return this")(),fe=de.Symbol;var Kc=Object.prototype,Wb=Kc.hasOwnProperty,Gb=Kc.toString,no=fe?fe.toStringTag:void 0;const Kb=function(o){var t=Wb.call(o,no),e=o[no];try{o[no]=void 0;var n=!0}catch{}var i=Gb.call(o);return n&&(t?o[no]=e:delete o[no]),i};var Yb=Object.prototype.toString;const Qb=function(o){return Yb.call(o)};var Zb="[object Null]",Jb="[object Undefined]",Yc=fe?fe.toStringTag:void 0;const pn=function(o){return o==null?o===void 0?Jb:Zb:Yc&&Yc in Object(o)?Kb(o):Qb(o)},se=Array.isArray,Ae=function(o){return o!=null&&typeof o=="object"};var Xb="[object String]";const Qc=function(o){return typeof o=="string"||!se(o)&&Ae(o)&&pn(o)==Xb};function Zc(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!Qc(n)&&ne(n)||(n=[n]);for(let s of n)Qc(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const Jc=function(o,t){return function(e){return o(t(e))}},cs=Jc(Object.getPrototypeOf,Object);var tk="[object Object]",ek=Function.prototype,nk=Object.prototype,Xc=ek.toString,ik=nk.hasOwnProperty,ok=Xc.call(Object);const ue=function(o){if(!Ae(o)||pn(o)!=tk)return!1;var t=cs(o);if(t===null)return!0;var e=ik.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Xc.call(e)==ok},rk=function(){this.__data__=[],this.size=0},io=function(o,t){return o===t||o!=o&&t!=t},qo=function(o,t){for(var e=o.length;e--;)if(io(o[e][0],t))return e;return-1};var sk=Array.prototype.splice;const ak=function(o){var t=this.__data__,e=qo(t,o);return!(e<0)&&(e==t.length-1?t.pop():sk.call(t,e,1),--this.size,!0)},ck=function(o){var t=this.__data__,e=qo(t,o);return e<0?void 0:t[e][1]},lk=function(o){return qo(this.__data__,o)>-1},dk=function(o,t){var e=this.__data__,n=qo(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function ai(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}ai.prototype.clear=rk,ai.prototype.delete=ak,ai.prototype.get=ck,ai.prototype.has=lk,ai.prototype.set=dk;const Wo=ai,uk=function(){this.__data__=new Wo,this.size=0},hk=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},gk=function(o){return this.__data__.get(o)},pk=function(o){return this.__data__.has(o)};var fk="[object AsyncFunction]",mk="[object Function]",bk="[object GeneratorFunction]",kk="[object Proxy]";const Mn=function(o){if(!mt(o))return!1;var t=pn(o);return t==mk||t==bk||t==fk||t==kk},ls=de["__core-js_shared__"];var tl=function(){var o=/[^.]+$/.exec(ls&&ls.keys&&ls.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const wk=function(o){return!!tl&&tl in o};var _k=Function.prototype.toString;const Nn=function(o){if(o!=null){try{return _k.call(o)}catch{}try{return o+""}catch{}}return""};var Ak=/^\[object .+?Constructor\]$/,vk=Function.prototype,Ck=Object.prototype,yk=vk.toString,Ek=Ck.hasOwnProperty,xk=RegExp("^"+yk.call(Ek).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Dk=function(o){return!(!mt(o)||wk(o))&&(Mn(o)?xk:Ak).test(Nn(o))},Tk=function(o,t){return o==null?void 0:o[t]},Pn=function(o,t){var e=Tk(o,t);return Dk(e)?e:void 0},oo=Pn(de,"Map"),ro=Pn(Object,"create"),Sk=function(){this.__data__=ro?ro(null):{},this.size=0},Ik=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var Mk="__lodash_hash_undefined__",Nk=Object.prototype.hasOwnProperty;const Pk=function(o){var t=this.__data__;if(ro){var e=t[o];return e===Mk?void 0:e}return Nk.call(t,o)?t[o]:void 0};var Lk=Object.prototype.hasOwnProperty;const Ok=function(o){var t=this.__data__;return ro?t[o]!==void 0:Lk.call(t,o)};var Bk="__lodash_hash_undefined__";const zk=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=ro&&t===void 0?Bk:t,this};function ci(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}ci.prototype.clear=Sk,ci.prototype.delete=Ik,ci.prototype.get=Pk,ci.prototype.has=Ok,ci.prototype.set=zk;const el=ci,Rk=function(){this.size=0,this.__data__={hash:new el,map:new(oo||Wo),string:new el}},jk=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},Go=function(o,t){var e=o.__data__;return jk(t)?e[typeof t=="string"?"string":"hash"]:e.map},Fk=function(o){var t=Go(this,o).delete(o);return this.size-=t?1:0,t},Vk=function(o){return Go(this,o).get(o)},Hk=function(o){return Go(this,o).has(o)},$k=function(o,t){var e=Go(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function li(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}li.prototype.clear=Rk,li.prototype.delete=Fk,li.prototype.get=Vk,li.prototype.has=Hk,li.prototype.set=$k;const Ko=li;var Uk=200;const qk=function(o,t){var e=this.__data__;if(e instanceof Wo){var n=e.__data__;if(!oo||n.length<Uk-1)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new Ko(n)}return e.set(o,t),this.size=e.size,this};function di(o){var t=this.__data__=new Wo(o);this.size=t.size}di.prototype.clear=uk,di.prototype.delete=hk,di.prototype.get=gk,di.prototype.has=pk,di.prototype.set=qk;const so=di,Wk=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},Yo=function(){try{var o=Pn(Object,"defineProperty");return o({},"",{}),o}catch{}}(),ds=function(o,t,e){t=="__proto__"&&Yo?Yo(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var Gk=Object.prototype.hasOwnProperty;const us=function(o,t,e){var n=o[t];Gk.call(o,t)&&io(n,e)&&(e!==void 0||t in o)||ds(o,t,e)},ui=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],o[a],a,e,o):void 0;c===void 0&&(c=o[a]),i?ds(e,a,c):us(e,a,c)}return e},Kk=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n};var Yk="[object Arguments]";const nl=function(o){return Ae(o)&&pn(o)==Yk};var il=Object.prototype,Qk=il.hasOwnProperty,Zk=il.propertyIsEnumerable;const hs=nl(function(){return arguments}())?nl:function(o){return Ae(o)&&Qk.call(o,"callee")&&!Zk.call(o,"callee")},Jk=function(){return!1};var ol=l&&!l.nodeType&&l,rl=ol&&!0&&C&&!C.nodeType&&C,sl=rl&&rl.exports===ol?de.Buffer:void 0;const ao=(sl?sl.isBuffer:void 0)||Jk;var Xk=9007199254740991,tw=/^(?:0|[1-9]\d*)$/;const gs=function(o,t){var e=typeof o;return!!(t=t==null?Xk:t)&&(e=="number"||e!="symbol"&&tw.test(o))&&o>-1&&o%1==0&&o<t};var ew=9007199254740991;const al=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=ew};var zt={};zt["[object Float32Array]"]=zt["[object Float64Array]"]=zt["[object Int8Array]"]=zt["[object Int16Array]"]=zt["[object Int32Array]"]=zt["[object Uint8Array]"]=zt["[object Uint8ClampedArray]"]=zt["[object Uint16Array]"]=zt["[object Uint32Array]"]=!0,zt["[object Arguments]"]=zt["[object Array]"]=zt["[object ArrayBuffer]"]=zt["[object Boolean]"]=zt["[object DataView]"]=zt["[object Date]"]=zt["[object Error]"]=zt["[object Function]"]=zt["[object Map]"]=zt["[object Number]"]=zt["[object Object]"]=zt["[object RegExp]"]=zt["[object Set]"]=zt["[object String]"]=zt["[object WeakMap]"]=!1;const nw=function(o){return Ae(o)&&al(o.length)&&!!zt[pn(o)]},ps=function(o){return function(t){return o(t)}};var cl=l&&!l.nodeType&&l,co=cl&&!0&&C&&!C.nodeType&&C,fs=co&&co.exports===cl&&eo.process;const hi=function(){try{var o=co&&co.require&&co.require("util").types;return o||fs&&fs.binding&&fs.binding("util")}catch{}}();var ll=hi&&hi.isTypedArray;const ms=ll?ps(ll):nw;var iw=Object.prototype.hasOwnProperty;const dl=function(o,t){var e=se(o),n=!e&&hs(o),i=!e&&!n&&ao(o),r=!e&&!n&&!i&&ms(o),s=e||n||i||r,a=s?Kk(o.length,String):[],c=a.length;for(var d in o)!t&&!iw.call(o,d)||s&&(d=="length"||i&&(d=="offset"||d=="parent")||r&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||gs(d,c))||a.push(d);return a};var ow=Object.prototype;const bs=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||ow)},rw=Jc(Object.keys,Object);var sw=Object.prototype.hasOwnProperty;const aw=function(o){if(!bs(o))return rw(o);var t=[];for(var e in Object(o))sw.call(o,e)&&e!="constructor"&&t.push(e);return t},Qo=function(o){return o!=null&&al(o.length)&&!Mn(o)},ks=function(o){return Qo(o)?dl(o):aw(o)},cw=function(o,t){return o&&ui(t,ks(t),o)},lw=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var dw=Object.prototype.hasOwnProperty;const uw=function(o){if(!mt(o))return lw(o);var t=bs(o),e=[];for(var n in o)(n!="constructor"||!t&&dw.call(o,n))&&e.push(n);return e},gi=function(o){return Qo(o)?dl(o,!0):uw(o)},hw=function(o,t){return o&&ui(t,gi(t),o)};var ul=l&&!l.nodeType&&l,hl=ul&&!0&&C&&!C.nodeType&&C,gl=hl&&hl.exports===ul?de.Buffer:void 0,pl=gl?gl.allocUnsafe:void 0;const fl=function(o,t){if(t)return o.slice();var e=o.length,n=pl?pl(e):new o.constructor(e);return o.copy(n),n},ml=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},gw=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},bl=function(){return[]};var pw=Object.prototype.propertyIsEnumerable,kl=Object.getOwnPropertySymbols;const ws=kl?function(o){return o==null?[]:(o=Object(o),gw(kl(o),function(t){return pw.call(o,t)}))}:bl,fw=function(o,t){return ui(o,ws(o),t)},wl=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},_l=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)wl(t,ws(o)),o=cs(o);return t}:bl,mw=function(o,t){return ui(o,_l(o),t)},Al=function(o,t,e){var n=t(o);return se(o)?n:wl(n,e(o))},_s=function(o){return Al(o,ks,ws)},bw=function(o){return Al(o,gi,_l)},As=Pn(de,"DataView"),vs=Pn(de,"Promise"),Cs=Pn(de,"Set"),ys=Pn(de,"WeakMap");var vl="[object Map]",Cl="[object Promise]",yl="[object Set]",El="[object WeakMap]",xl="[object DataView]",kw=Nn(As),ww=Nn(oo),_w=Nn(vs),Aw=Nn(Cs),vw=Nn(ys),Ln=pn;(As&&Ln(new As(new ArrayBuffer(1)))!=xl||oo&&Ln(new oo)!=vl||vs&&Ln(vs.resolve())!=Cl||Cs&&Ln(new Cs)!=yl||ys&&Ln(new ys)!=El)&&(Ln=function(o){var t=pn(o),e=t=="[object Object]"?o.constructor:void 0,n=e?Nn(e):"";if(n)switch(n){case kw:return xl;case ww:return vl;case _w:return Cl;case Aw:return yl;case vw:return El}return t});const lo=Ln;var Cw=Object.prototype.hasOwnProperty;const yw=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&Cw.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Zo=de.Uint8Array,Es=function(o){var t=new o.constructor(o.byteLength);return new Zo(t).set(new Zo(o)),t},Ew=function(o,t){var e=t?Es(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var xw=/\w*$/;const Dw=function(o){var t=new o.constructor(o.source,xw.exec(o));return t.lastIndex=o.lastIndex,t};var Dl=fe?fe.prototype:void 0,Tl=Dl?Dl.valueOf:void 0;const Tw=function(o){return Tl?Object(Tl.call(o)):{}},Sl=function(o,t){var e=t?Es(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)};var Sw="[object Boolean]",Iw="[object Date]",Mw="[object Map]",Nw="[object Number]",Pw="[object RegExp]",Lw="[object Set]",Ow="[object String]",Bw="[object Symbol]",zw="[object ArrayBuffer]",Rw="[object DataView]",jw="[object Float32Array]",Fw="[object Float64Array]",Vw="[object Int8Array]",Hw="[object Int16Array]",$w="[object Int32Array]",Uw="[object Uint8Array]",qw="[object Uint8ClampedArray]",Ww="[object Uint16Array]",Gw="[object Uint32Array]";const Kw=function(o,t,e){var n=o.constructor;switch(t){case zw:return Es(o);case Sw:case Iw:return new n(+o);case Rw:return Ew(o,e);case jw:case Fw:case Vw:case Hw:case $w:case Uw:case qw:case Ww:case Gw:return Sl(o,e);case Mw:return new n;case Nw:case Ow:return new n(o);case Pw:return Dw(o);case Lw:return new n;case Bw:return Tw(o)}};var Il=Object.create;const Yw=function(){function o(){}return function(t){if(!mt(t))return{};if(Il)return Il(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),Ml=function(o){return typeof o.constructor!="function"||bs(o)?{}:Yw(cs(o))};var Qw="[object Map]";const Zw=function(o){return Ae(o)&&lo(o)==Qw};var Nl=hi&&hi.isMap;const Jw=Nl?ps(Nl):Zw;var Xw="[object Set]";const t_=function(o){return Ae(o)&&lo(o)==Xw};var Pl=hi&&hi.isSet;const e_=Pl?ps(Pl):t_;var n_=1,i_=2,o_=4,Ll="[object Arguments]",Ol="[object Function]",r_="[object GeneratorFunction]",Bl="[object Object]",Ot={};Ot[Ll]=Ot["[object Array]"]=Ot["[object ArrayBuffer]"]=Ot["[object DataView]"]=Ot["[object Boolean]"]=Ot["[object Date]"]=Ot["[object Float32Array]"]=Ot["[object Float64Array]"]=Ot["[object Int8Array]"]=Ot["[object Int16Array]"]=Ot["[object Int32Array]"]=Ot["[object Map]"]=Ot["[object Number]"]=Ot[Bl]=Ot["[object RegExp]"]=Ot["[object Set]"]=Ot["[object String]"]=Ot["[object Symbol]"]=Ot["[object Uint8Array]"]=Ot["[object Uint8ClampedArray]"]=Ot["[object Uint16Array]"]=Ot["[object Uint32Array]"]=!0,Ot["[object Error]"]=Ot[Ol]=Ot["[object WeakMap]"]=!1;const xs=function o(t,e,n,i,r,s){var a,c=e&n_,d=e&i_,u=e&o_;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!mt(t))return t;var g=se(t);if(g){if(a=yw(t),!c)return ml(t,a)}else{var m=lo(t),y=m==Ol||m==r_;if(ao(t))return fl(t,c);if(m==Bl||m==Ll||y&&!r){if(a=d||y?{}:Ml(t),!c)return d?mw(t,hw(a,t)):fw(t,cw(a,t))}else{if(!Ot[m])return r?t:{};a=Kw(t,m,c)}}s||(s=new so);var E=s.get(t);if(E)return E;s.set(t,a),e_(t)?t.forEach(function(I){a.add(o(I,e,n,I,t,s))}):Jw(t)&&t.forEach(function(I,N){a.set(N,o(I,e,n,N,t,s))});var T=g?void 0:(u?d?bw:_s:d?gi:ks)(t);return Wk(T||t,function(I,N){T&&(I=t[N=I]),us(a,N,o(I,e,n,N,t,s))}),a};var s_=1,a_=4;const zl=function(o,t){return xs(o,s_|a_,t=typeof t=="function"?t:void 0)},uo=function(o){return Ae(o)&&o.nodeType===1&&!ue(o)};class Rl{constructor(t,e){this._config={},e&&this.define(jl(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(ue(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const s of r)ue(t[s])||(t[s]={}),t=t[s];if(ue(n))return ue(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!ue(t[i])){t=null;break}t=t[i]}return t?jl(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function jl(o){return zl(o,c_)}function c_(o){return uo(o)?o:void 0}function fn(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Jo(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const Fl=On(at());function On(o){return o?class extends o{listenTo(t,e,n,i={}){if(fn(t)||Jo(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(t,r)||new l_(t,r);this.listenTo(s,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(fn(t)||Jo(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[gt];return r&&r[i]?r[i].emitter:null}(this,Vl(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:Fl}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{On[o]=Fl.prototype[o]});class l_ extends at(){constructor(t,e){super(),jt(this,Vl(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),at().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){at().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function Vl(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=tt())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Ds;try{Ds={window,document}}catch{Ds={window:{},document:{}}}const _t=Ds;function Hl(o){const t=[];let e=o;for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}function Vt(o){return Object.prototype.toString.call(o)=="[object Text]"}function Xo(o){return Object.prototype.toString.apply(o)=="[object Range]"}function $l(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const Ul=["top","right","bottom","left","width","height"];class Ht{constructor(t){const e=Xo(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Wl(t)||e)if(e){const n=Ht.getDomRangeRects(t);tr(this,Ht.getBoundingRect(n))}else tr(this,t.getBoundingClientRect());else if(Jo(t)){const{innerWidth:n,innerHeight:i}=t;tr(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else tr(this,t)}clone(){return new Ht(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new Ht(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!ql(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!ql(n);){const i=new Ht(n),r=e.getIntersection(i);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(const e of Ul)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(Jo(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=$l(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new Ht(i));else{let i=t.startContainer;Vt(i)&&(i=i.parentNode);const r=new Ht(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new Ht(e))}}function tr(o,t){for(const e of Ul)o[e]=t[e]}function ql(o){return!!Wl(o)&&o===o.ownerDocument.body}function Wl(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}class Rt{constructor(t,e){Rt._observerInstance||Rt._createObserver(),this._element=t,this._callback=e,Rt._addElementCallback(t,e),Rt._observerInstance.observe(t)}destroy(){Rt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){Rt._elementCallbacks||(Rt._elementCallbacks=new Map);let n=Rt._elementCallbacks.get(t);n||(n=new Set,Rt._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=Rt._getElementCallbacks(t);n&&(n.delete(e),n.size||(Rt._elementCallbacks.delete(t),Rt._observerInstance.unobserve(t))),Rt._elementCallbacks&&!Rt._elementCallbacks.size&&(Rt._observerInstance=null,Rt._elementCallbacks=null)}static _getElementCallbacks(t){return Rt._elementCallbacks?Rt._elementCallbacks.get(t):null}static _createObserver(){Rt._observerInstance=new _t.window.ResizeObserver(t=>{for(const e of t){const n=Rt._getElementCallbacks(e.target);if(n)for(const i of n)i(e)}})}}function d_(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Ts(o){return t=>t+o}function er(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function Gl(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function pi(o){return o&&o.nodeType===Node.COMMENT_NODE}function Bn(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}function Kl({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){Mn(t)&&(t=t()),Mn(n)&&(n=n());const s=function(m){return m&&m.parentNode?m.offsetParent===_t.document.body?null:m.offsetParent:null}(o),a=new Ht(o),c=new Ht(t);let d;const u=i&&function(m){m=Object.assign({top:0,bottom:0,left:0,right:0},m);const y=new Ht(_t.window);return y.top+=m.top,y.height-=m.top,y.bottom-=m.bottom,y.height-=m.bottom,y}(r)||null,g={targetRect:c,elementRect:a,positionedElementAncestor:s,viewportRect:u};if(n||i){const m=n&&new Ht(n).getVisible();Object.assign(g,{limiterRect:m,viewportRect:u}),d=function(y,E){const{elementRect:T}=E,I=T.getArea(),N=y.map(K=>new Ss(K,E)).filter(K=>!!K.name);let L=0,j=null;for(const K of N){const{limiterIntersectionArea:pt,viewportIntersectionArea:Et}=K;if(pt===I)return K;const Tt=Et**2+pt**2;Tt>L&&(L=Tt,j=K)}return j}(e,g)||new Ss(e[0],g)}else d=new Ss(e[0],g);return d}function Yl(o){const{scrollX:t,scrollY:e}=_t.window;return o.clone().moveBy(t,e)}Rt._observerInstance=null,Rt._elementCallbacks=null;class Ss{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCorrdinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;if(t){const e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{const n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Yl(this._rect),this._options.positionedElementAncestor&&function(t,e){const n=Yl(new Ht(e)),i=$l(e);let r=0,s=0;r-=n.left,s-=n.top,r+=e.scrollLeft,s+=e.scrollTop,r-=i.left,s-=i.top,t.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function Ql(o){const t=o.parentNode;t&&t.removeChild(o)}function u_(o,t,e){const n=t.clone().moveBy(0,e),i=t.clone().moveBy(0,-e),r=new Ht(o).excludeScrollbarsAndBorders();if(![i,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=o;Jl(i,r)?a-=r.top-t.top+e:Zl(n,r)&&(a+=t.bottom-r.bottom+e),Xl(t,r)?s-=r.left-t.left+e:td(t,r)&&(s+=t.right-r.right+e),o.scrollTo(s,a)}}function h_(o,t){const e=Is(o);let n,i;for(;o!=e.document.body;)i=t(),n=new Ht(o).excludeScrollbarsAndBorders(),n.contains(i)||(Jl(i,n)?o.scrollTop-=n.top-i.top:Zl(i,n)&&(o.scrollTop+=i.bottom-n.bottom),Xl(i,n)?o.scrollLeft-=n.left-i.left:td(i,n)&&(o.scrollLeft+=i.right-n.right)),o=o.parentNode}function Zl(o,t){return o.bottom>t.bottom}function Jl(o,t){return o.top<t.top}function Xl(o,t){return o.left<t.left}function td(o,t){return o.right>t.right}function Is(o){return Xo(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function g_(o){if(Xo(o)){let t=o.commonAncestorContainer;return Vt(t)&&(t=t.parentNode),t}return o.parentNode}function ed(o,t){const e=Is(o),n=new Ht(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,s=new Ht(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const p_={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},f_={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},yt=function(){const o={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;for(const t of"`-=[];',./\\")o[t]=t.charCodeAt(0);return o}(),m_=Object.fromEntries(Object.entries(yt).map(([o,t])=>[t,o.charAt(0).toUpperCase()+o.slice(1)]));function fi(o){let t;if(typeof o=="string"){if(t=yt[o.toLowerCase()],!t)throw new M("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?yt.alt:0)+(o.ctrlKey?yt.ctrl:0)+(o.shiftKey?yt.shift:0)+(o.metaKey?yt.cmd:0);return t}function Ms(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return fi(e.slice(0,-1));const n=fi(e);return A.isMac&&n==yt.ctrl?yt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function nd(o){let t=Ms(o);return Object.entries(A.isMac?p_:f_).reduce((e,[n,i])=>((t&yt[n])!=0&&(t&=~yt[n],e+=i),e),"")+(t?m_[t]:"")}function Ns(o,t){const e=t==="ltr";switch(o){case yt.arrowleft:return e?"left":"right";case yt.arrowright:return e?"right":"left";case yt.arrowup:return"up";case yt.arrowdown:return"down"}}function Zt(o){return Array.isArray(o)?o:[o]}function b_(o,t,e=1){if(typeof e!="number")throw new M("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(_t.window.CKEDITOR_TRANSLATIONS).length;n===1&&(o=Object.keys(_t.window.CKEDITOR_TRANSLATIONS)[0]);const i=t.id||t.string;if(n===0||!function(c,d){return!!_t.window.CKEDITOR_TRANSLATIONS[c]&&!!_t.window.CKEDITOR_TRANSLATIONS[c].dictionary[d]}(o,i))return e!==1?t.plural:t.string;const r=_t.window.CKEDITOR_TRANSLATIONS[o].dictionary,s=_t.window.CKEDITOR_TRANSLATIONS[o].getPluralForm||(c=>c===1?0:1),a=r[i];return typeof a=="string"?a:a[Number(s(e))]}_t.window.CKEDITOR_TRANSLATIONS||(_t.window.CKEDITOR_TRANSLATIONS={});const k_=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function id(o){return k_.includes(o)?"rtl":"ltr"}class w_{constructor({uiLanguage:t="en",contentLanguage:e}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=id(this.uiLanguage),this.contentLanguageDirection=id(this.contentLanguage),this.t=(n,i)=>this._t(n,i)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Zt(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(b_(this.uiLanguage,t,n),e)}}class Me extends at(){constructor(t={},e={}){super();const n=ne(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new M("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new M("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new M("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const d=t(r);if(!d)return void this._skippedIndexesFromExternal.push(s);let u=s;for(const g of this._skippedIndexesFromExternal)s>g&&u--;for(const g of e._skippedIndexesFromExternal)u>=g&&u++;this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r),this.add(d,u);for(let g=0;g<e._skippedIndexesFromExternal.length;g++)u<=e._skippedIndexesFromExternal[g]&&e._skippedIndexesFromExternal[g]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,d)=>(s<d&&c.push(d-1),s>d&&c.push(d),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new M("collection-add-invalid-id",this);if(this.get(n))throw new M("collection-add-item-already-exists",this)}else t[e]=n=tt();return n}_remove(t){let e,n,i,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new M("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Kt(o){const t=o.next();return t.done?null:t.value}class ve extends On(St()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new M("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Ve{constructor(){this._listener=new(On())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+fi(n),n)})}set(t,e,n={}){const i=Ms(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+fi(t),t)}destroy(){this._listener.stopListening()}}function He(o){return ne(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}const __=1e4;function od(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function rd(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const A_=function(){const o=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return new RegExp(`${o}|${t}(?:\u200D${t})*`,"ug")}();function v_(o,t){const e=String(o).matchAll(A_);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class mn extends Me{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new M("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const i of t)n.delegate(i).to(e);this.on("add",(n,i)=>{for(const r of t)i.delegate(r).to(e)}),this.on("remove",(n,i)=>{for(const r of t)i.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}var C_=S(6062),ct=S.n(C_),sd=S(4793),y_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(sd.Z,y_),sd.Z.locals;class At extends On(St()){constructor(t){super(),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Me,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t,n.t=t&&t.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ne.bind(this,this)}createCollection(t){const e=new mn(t);return this._viewCollections.add(e),e}registerChild(t){ne(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){ne(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ne(t)}extendTemplate(t){Ne.extend(this.template,t)}render(){if(this.isRendered)throw new M("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class Ne extends at(){constructor(t){super(),Object.assign(this,dd(ld(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,intoFragment:!1,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new M("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)ir(n)?yield n:Ps(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,i)=>new E_({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:i}),if:(n,i,r)=>new ad({observable:t,emitter:e,attribute:n,valueIfTrue:i,callback:r})}}static extend(t,e){if(t._isRendered)throw new M("template-extend-render",[this,t]);pd(t,dd(ld(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new M("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),nr(this.text)?this._bindToObservable({schema:this.text,updater:x_(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){if(!this.attributes)return;const e=t.node,n=t.revertData;for(const i in this.attributes){const r=e.getAttribute(i),s=this.attributes[i];n&&(n.attributes[i]=r);const a=fd(s)?s[0].ns:null;if(nr(s)){const c=fd(s)?s[0].value:s;n&&md(i)&&c.unshift(r),this._bindToObservable({schema:c,updater:D_(e,i,a),data:t})}else if(i=="style"&&typeof s[0]!="string")this._renderStyleAttribute(s[0],t);else{n&&r&&md(i)&&s.unshift(r);const c=s.map(d=>d&&d.value||d).reduce((d,u)=>d.concat(u),[]).reduce(hd,"");mi(c)||e.setAttributeNS(a,i,c)}}}_renderStyleAttribute(t,e){const n=e.node;for(const i in t){const r=t[i];nr(r)?this._bindToObservable({schema:[r],updater:T_(n,i),data:e}):n.style[i]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,i=t.isApplying;let r=0;for(const s of this.children)if(Ls(s)){if(!i){s.setParent(e);for(const a of s)n.appendChild(a.element)}}else if(ir(s))i||(s.isRendered||s.render(),n.appendChild(s.element));else if(fn(s))n.appendChild(s);else if(i){const a={children:[],bindings:[],attributes:{}};t.revertData.children.push(a),s._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(i=>{const[r,s]=e.split("@");return i.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const i=n.revertData;cd(t,e,n);const r=t.filter(s=>!mi(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));i&&i.bindings.push(r)}_revertTemplateFromNode(t,e){for(const i of e.bindings)for(const r of i)r();if(e.text)return void(t.textContent=e.text);const n=t;for(const i in e.attributes){const r=e.attributes[i];r===null?n.removeAttribute(i):n.setAttribute(i,r)}for(let i=0;i<e.children.length;++i)this._revertTemplateFromNode(n.childNodes[i],e.children[i])}}class ho{constructor(t){this.attribute=t.attribute,this.observable=t.observable,this.emitter=t.emitter,this.callback=t.callback}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const i=()=>cd(t,e,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,i),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,i)}}}class E_ extends ho{constructor(t){super(t),this.eventNameOrFunction=t.eventNameOrFunction}activateDomEventListener(t,e,n){const i=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,i),()=>{this.emitter.stopListening(n.node,t,i)}}}class ad extends ho{constructor(t){super(t),this.valueIfTrue=t.valueIfTrue}getValue(t){return!mi(super.getValue(t))&&(this.valueIfTrue||!0)}}function nr(o){return!!o&&(o.value&&(o=o.value),Array.isArray(o)?o.some(nr):o instanceof ho)}function cd(o,t,{node:e}){const n=function(r,s){return r.map(a=>a instanceof ho?a.getValue(s):a)}(o,e);let i;i=o.length==1&&o[0]instanceof ad?n[0]:n.reduce(hd,""),mi(i)?t.remove():t.set(i)}function x_(o){return{set(t){o.textContent=t},remove(){o.textContent=""}}}function D_(o,t,e){return{set(n){o.setAttributeNS(e,t,n)},remove(){o.removeAttributeNS(e,t)}}}function T_(o,t){return{set(e){o.style[t]=e},remove(){o.style[t]=null}}}function ld(o){return zl(o,t=>{if(t&&(t instanceof ho||Ps(t)||ir(t)||Ls(t)))return t})}function dd(o){if(typeof o=="string"?o=function(t){return{text:[t]}}(o):o.text&&function(t){t.text=Zt(t.text)}(o),o.on&&(o.eventListeners=function(t){for(const e in t)ud(t,e);return t}(o.on),delete o.on),!o.text){o.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Zt(e[n].value)),ud(e,n)}(o.attributes);const t=[];if(o.children)if(Ls(o.children))t.push(o.children);else for(const e of o.children)Ps(e)||ir(e)||fn(e)?t.push(e):t.push(new Ne(e));o.children=t}return o}function ud(o,t){o[t]=Zt(o[t])}function hd(o,t){return mi(t)?o:mi(o)?t:`${o} ${t}`}function gd(o,t){for(const e in t)o[e]?o[e].push(...t[e]):o[e]=t[e]}function pd(o,t){if(t.attributes&&(o.attributes||(o.attributes={}),gd(o.attributes,t.attributes)),t.eventListeners&&(o.eventListeners||(o.eventListeners={}),gd(o.eventListeners,t.eventListeners)),t.text&&o.text.push(...t.text),t.children&&t.children.length){if(o.children.length!=t.children.length)throw new M("ui-template-extend-children-mismatch",o);let e=0;for(const n of t.children)pd(o.children[e++],n)}}function mi(o){return!o&&o!==0}function ir(o){return o instanceof At}function Ps(o){return o instanceof Ne}function Ls(o){return o instanceof mn}function fd(o){return mt(o[0])&&o[0].ns}function md(o){return o=="class"||o=="style"}class S_ extends mn{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Ne({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=Zc(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var bd=S(6574),I_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(bd.Z,I_),bd.Z.locals;class zn extends At{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",t.if("isColorInherited","ck-icon_inherit-color")],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");e&&(this.viewBox=e);for(const{name:n,value:i}of Array.from(t.attributes))zn.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,i);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}zn.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var kd=S(4906),M_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(kd.Z,M_),kd.Z.locals;class Bt extends At{constructor(t){super(t);const e=this.bindTemplate,n=tt();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new zn,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",r=>!r),e.if("isVisible","ck-hidden",r=>!r),e.to("isOn",r=>r?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",r=>r||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,r=>!r),"aria-pressed":e.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":e.to("_tooltipString"),"data-cke-tooltip-position":e.to("tooltipPosition")},children:this.children,on:{click:e.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};A.isSafari&&(i.on.mousedown=e.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(t){const e=new At,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){const t=new At;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>nd(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=nd(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var wd=S(5332),N_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(wd.Z,N_),wd.Z.locals;class or extends Bt{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new At;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var _d=S(6781),P_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(_d.Z,P_),_d.Z.locals;class L_{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(Os(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new M("componentfactory-item-missing",this,{name:t});return this._components.get(Os(t)).callback(this.editor.locale)}has(t){return this._components.has(Os(t))}}function Os(o){return String(o).toLowerCase()}var Ad=S(5485),O_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Ad.Z,O_),Ad.Z.locals;class bi extends At{constructor(t,e,n){super(t);const i=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new Ve,this.focusTracker=new ve,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",r=>!r)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":i.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(e,n,i)=>{i&&(this.panelPosition==="auto"?this.panelView.position=bi._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const t=(e,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:t,north:e,southEast:n,southWest:i,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:c,northMiddleEast:d,northMiddleWest:u}=bi.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,a,c,t,r,s,d,u,e]:[i,n,c,a,t,s,r,u,d,e]}}bi.defaultPanelPositions={south:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/2,name:"s"}),southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),southMiddleEast:(o,t)=>({top:o.bottom,left:o.left-(t.width-o.width)/4,name:"sme"}),southMiddleWest:(o,t)=>({top:o.bottom,left:o.left-3*(t.width-o.width)/4,name:"smw"}),north:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/2,name:"n"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),northMiddleEast:(o,t)=>({top:o.top-t.height,left:o.left-(t.width-o.width)/4,name:"nme"}),northMiddleWest:(o,t)=>({top:o.top-t.height,left:o.left-3*(t.width-o.width)/4,name:"nmw"})},bi._getOptimalPosition=Kl;const vd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class B_ extends Bt{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",e=>String(e))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new zn;return t.content=vd,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var Cd=S(7686),z_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Cd.Z,z_),Cd.Z.locals;class Bs extends At{constructor(t){super(t);const e=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Ve,this.focusTracker=new ve,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new Bt;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new Bt,e=t.bindTemplate;return t.icon=vd,t.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":e.to("isOn"),"aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}class R_ extends At{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const t=this.children.first;typeof t.focus=="function"?t.focus():J("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}class ki{constructor(t){if(this.focusables=t.focusables,this.focusTracker=t.focusTracker,this.keystrokeHandler=t.keystrokeHandler,this.actions=t.actions,t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const i of n)t.keystrokeHandler.set(i,(r,s)=>{this[e](),s()})}}get first(){return this.focusables.find(zs)||null}get last(){return this.focusables.filter(zs).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const i=e.element===this.focusTracker.focusedElement;return i&&(t=n),i}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let i=(e+n+t)%n;do{const r=this.focusables.get(i);if(zs(r))return r;i=(i+n+t)%n}while(i!==e);return null}}function zs(o){return!(!o.focus||!Bn(o.element))}class yd extends At{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class j_ extends At{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Ed(o){return Array.isArray(o)?{items:o,removeItems:[]}:o?Object.assign({items:[],removeItems:[]},o):{items:[],removeItems:[]}}class W extends St(){constructor(t){super(),this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",xd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",xd),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function xd(o){o.return=!1,o.stop()}class wt extends St(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Dd,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Dd),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function Dd(o){o.return=!1,o.stop()}class Td extends wt{constructor(t){super(t),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){Q(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Sd extends at(){constructor(t,e=[],n=[]){super(),this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new M("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function E(T,I=new Set){T.forEach(N=>{c(N)&&(I.has(N)||(I.add(N),N.pluginName&&!i._availablePlugins.has(N.pluginName)&&i._availablePlugins.set(N.pluginName,N),N.requires&&E(N.requires,I)))})})(t),m(t);const s=[...function E(T,I=new Set){return T.map(N=>c(N)?N:i._availablePlugins.get(N)).reduce((N,L)=>I.has(L)?N:(I.add(L),L.requires&&(m(L.requires,L),E(L.requires,I).forEach(j=>N.add(j))),N.add(L)),new Set)}(t.filter(E=>!u(E,e)))];(function(E,T){for(const I of T){if(typeof I!="function")throw new M("plugincollection-replace-plugin-invalid-type",null,{pluginItem:I});const N=I.pluginName;if(!N)throw new M("plugincollection-replace-plugin-missing-name",null,{pluginItem:I});if(I.requires&&I.requires.length)throw new M("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:N});const L=i._availablePlugins.get(N);if(!L)throw new M("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:N});const j=E.indexOf(L);if(j===-1){if(i._contextPlugins.has(L))return;throw new M("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:N})}if(L.requires&&L.requires.length)throw new M("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:N});E.splice(j,1,I),i._availablePlugins.set(N,I)}})(s,n);const a=function(E){return E.map(T=>{let I=i._contextPlugins.get(T);return I=I||new T(r),i._add(T,I),I})}(s);return y(a,"init").then(()=>y(a,"afterInit")).then(()=>a);function c(E){return typeof E=="function"}function d(E){return c(E)&&E.isContextPlugin}function u(E,T){return T.some(I=>I===E||g(E)===I||g(I)===E)}function g(E){return c(E)?E.pluginName||E.name:E}function m(E,T=null){E.map(I=>c(I)?I:i._availablePlugins.get(I)||I).forEach(I=>{(function(N,L){if(!c(N))throw L?new M("plugincollection-soft-required",r,{missingPlugin:N,requiredBy:g(L)}):new M("plugincollection-plugin-not-found",r,{plugin:N})})(I,T),function(N,L){if(!!d(L)&&!d(N))throw new M("plugincollection-context-required",r,{plugin:g(N),requiredBy:g(L)})}(I,T),function(N,L){if(!!L&&!!u(N,e))throw new M("plugincollection-required",r,{plugin:g(N),requiredBy:g(L)})}(I,T)})}function y(E,T){return E.reduce((I,N)=>N[T]?i._contextPlugins.has(N)?I:I.then(N[T].bind(N)):I,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new M("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}class F_{constructor(t){this.config=new Rl(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Sd(this,e);const n=this.config.get("language")||{};this.locale=new w_({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Me,this._contextOwner=null}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new M("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new M("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new M("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class rr extends St(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var Id=S(4717),V_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Id.Z,V_),Id.Z.locals;const sr=new WeakMap;function Md(o){const{view:t,element:e,text:n,isDirectHost:i=!0,keepOnFocus:r=!1}=o,s=t.document;sr.has(s)||(sr.set(s,new Map),s.registerPostFixer(a=>Rs(s,a)),s.on("change:isComposing",()=>{t.change(a=>Rs(s,a))},{priority:"high"})),sr.get(s).set(e,{text:n,isDirectHost:i,keepOnFocus:r,hostElement:i?e:null}),t.change(a=>Rs(s,a))}function H_(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function Rs(o,t){const e=sr.get(o),n=[];let i=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Nd(t,r,s)&&(i=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=$_(r);a&&(n.includes(a)||(s.hostElement=a,Nd(t,r,s)&&(i=!0)))}return i}function Nd(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&function(a,c){if(!a.isAttached()||Array.from(a.getChildren()).some(m=>!m.is("uiElement")))return!1;const u=a.document,g=u.selection.anchor;return!(u.isComposing&&g&&g.parent===a||!c&&u.isFocused&&(!g||g.parent===a))}(r,e.keepOnFocus)?function(a,c){return!c.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",c),!0)}(o,r)&&(s=!0):H_(o,r)&&(s=!0),s}function $_(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class Rn{is(){throw new Error("is() method is abstract")}}var U_=4;const Pd=function(o){return xs(o,U_)};class jn extends at(Rn){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new M("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Qt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Pd(this);return delete t.parent,t}}jn.prototype.is=function(o){return o==="node"||o==="view:node"};class Nt extends jn{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Nt&&(this===t||this.data===t.data)}_clone(){return new Nt(this.document,this.data)}}Nt.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class $e extends Rn{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new M("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new M("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}$e.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class Ue{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=Ld(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=Ld(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Ld(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return ue(n)?(n.style!==void 0&&J("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&J("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),js(n,r,s=>i.getAttribute(s))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return js(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return js(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function js(o,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>ue(a)?(a.key!==void 0&&a.value!==void 0||J("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):ue(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(d,u){return d===!0||d===u||d instanceof RegExp&&u.match(d)})(s,c)&&function(d,u,g){if(d===!0)return!0;const m=g(u);return d===m||d instanceof RegExp&&!!String(m).match(d)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}var q_="[object Symbol]";const ar=function(o){return typeof o=="symbol"||Ae(o)&&pn(o)==q_};var W_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,G_=/^\w*$/;const K_=function(o,t){if(se(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!ar(o))||G_.test(o)||!W_.test(o)||t!=null&&o in Object(t)};var Y_="Expected a function";function Fs(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError(Y_);var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(Fs.Cache||Ko),e}Fs.Cache=Ko;const Q_=Fs;var Z_=500,J_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,X_=/\\(\\)?/g,tA=function(o){var t=Q_(o,function(n){return e.size===Z_&&e.clear(),n}),e=t.cache;return t}(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(J_,function(e,n,i,r){t.push(i?r.replace(X_,"$1"):n||e)}),t});const eA=tA,nA=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var iA=1/0,Od=fe?fe.prototype:void 0,Bd=Od?Od.toString:void 0;const oA=function o(t){if(typeof t=="string")return t;if(se(t))return nA(t,o)+"";if(ar(t))return Bd?Bd.call(t):"";var e=t+"";return e=="0"&&1/t==-iA?"-0":e},Vs=function(o){return o==null?"":oA(o)},Hs=function(o,t){return se(o)?o:K_(o,t)?[o]:eA(Vs(o))},rA=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0};var sA=1/0;const $s=function(o){if(typeof o=="string"||ar(o))return o;var t=o+"";return t=="0"&&1/o==-sA?"-0":t},zd=function(o,t){for(var e=0,n=(t=Hs(t,o)).length;o!=null&&e<n;)o=o[$s(t[e++])];return e&&e==n?o:void 0},Rd=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},aA=function(o,t){return t.length<2?o:zd(o,Rd(t,0,-1))},cA=function(o,t){return t=Hs(t,o),(o=aA(o,t))==null||delete o[$s(rA(t))]},lA=function(o,t){return o==null||cA(o,t)},cr=function(o,t,e){var n=o==null?void 0:zd(o,t);return n===void 0?e:n},Us=function(o,t,e){(e!==void 0&&!io(o[t],e)||e===void 0&&!(t in o))&&ds(o,t,e)},dA=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[o?a:++i];if(e(r[c],c,r)===!1)break}return t}}(),uA=function(o){return Ae(o)&&Qo(o)},qs=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},hA=function(o){return ui(o,gi(o))},gA=function(o,t,e,n,i,r,s){var a=qs(o,e),c=qs(t,e),d=s.get(c);if(d)Us(o,e,d);else{var u=r?r(a,c,e+"",o,t,s):void 0,g=u===void 0;if(g){var m=se(c),y=!m&&ao(c),E=!m&&!y&&ms(c);u=c,m||y||E?se(a)?u=a:uA(a)?u=ml(a):y?(g=!1,u=fl(c,!0)):E?(g=!1,u=Sl(c,!0)):u=[]:ue(c)||hs(c)?(u=a,hs(a)?u=hA(a):mt(a)&&!Mn(a)||(u=Ml(c))):g=!1}g&&(s.set(c,u),i(u,c,n,r,s),s.delete(c)),Us(o,e,u)}},pA=function o(t,e,n,i,r){t!==e&&dA(e,function(s,a){if(r||(r=new so),mt(s))gA(t,e,a,n,o,i,r);else{var c=i?i(qs(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),Us(t,a,c)}},gi)},Fn=function(o){return o},fA=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var jd=Math.max;const mA=function(o,t,e){return t=jd(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=jd(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),fA(o,this,a)}},bA=function(o){return function(){return o}},kA=Yo?function(o,t){return Yo(o,"toString",{configurable:!0,enumerable:!1,value:bA(t),writable:!0})}:Fn;var wA=800,_A=16,AA=Date.now;const vA=function(o){var t=0,e=0;return function(){var n=AA(),i=_A-(n-e);if(e=n,i>0){if(++t>=wA)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(kA),CA=function(o,t){return vA(mA(o,t,Fn),o+"")},yA=function(o,t,e){if(!mt(e))return!1;var n=typeof t;return!!(n=="number"?Qo(e)&&gs(t,e.length):n=="string"&&t in e)&&io(e[t],o)},Fd=function(o){return CA(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&yA(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},Vd=Fd(function(o,t,e){pA(o,t,e)}),EA=function(o,t,e,n){if(!mt(o))return o;for(var i=-1,r=(t=Hs(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=$s(t[i]),d=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var u=a[c];(d=n?n(u,c,a):void 0)===void 0&&(d=mt(u)?u:gs(t[i+1])?[]:{})}us(a,c,d),a=a[c]}return o},xA=function(o,t,e){return o==null?o:EA(o,t,e)};class DA{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let d=0;d<n.length;d++){const u=n.charAt(d);if(i===null)switch(u){case":":a||(a=n.substr(r,d-r),s=d+1);break;case'"':case"'":i=u;break;case";":{const g=n.substr(s,d-s);a&&c.set(a.trim(),g.trim()),a=null,r=d+1;break}}else u===i&&(i=null)}return c}(t).entries());for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(mt(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=Ws(t);lA(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!mt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=cr(this._styles,n);!i||!Array.from(Object.keys(i)).length&&this.remove(n)}}class TA{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(mt(e))Gs(n,Ws(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:s}=i(e);Gs(n,r,s)}else Gs(n,t,e)}getNormalized(t,e){if(!t)return Vd({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return cr(e,n);const i=n(t,e);if(i)return i}return cr(e,Ws(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Ws(o){return o.replace("-",".")}function Gs(o,t,e){let n=e;mt(e)&&(n=Vd({},cr(o,t),e)),xA(o,t,n)}class me extends jn{constructor(t,e,n,i){if(super(t),this.name=e,this._attrs=function(r){const s=He(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Hd(this._classes,r),this._attrs.delete("class")}this._styles=new DA(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof me))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Ue(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Nt(r,s)]:(ne(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Nt(r,a):a instanceof $e?new Nt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?Hd(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Zt(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Zt(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),ue(t)?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Zt(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Hd(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}me.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class go extends me{constructor(...t){super(...t),this.getFillerOffset=$d}}function $d(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}go.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class lr extends St(go){constructor(...t){super(...t);const e=t[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",n=>n&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}lr.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Ud=Symbol("rootName");class qd extends lr{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Ud)}set rootName(t){this._setCustomProperty(Ud,t)}set _name(t){this.name=t}}qd.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Vn{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new M("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new M("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=G._createAt(t.startPosition):this.position=G._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,i;do i=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof Nt){if(t.isAtEnd)return this.position=G._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof me)return this.shallow?t.offset++:t=new G(i,0),this.position=t,this._formatReturnValue("elementStart",i,e,t,1);if(i instanceof Nt){if(this.singleCharacters)return t=new G(i,0),this.position=t,this._next();{let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new $e(i,0,s),t=G._createAfter(r)):(r=new $e(i,0,i.data.length),t.offset++),this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new $e(n,t.offset,r);return t.offset+=r,this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=G._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof Nt){if(t.isAtStart)return this.position=G._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof me)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new G(i,i.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof Nt){if(this.singleCharacters)return t=new G(i,i.data.length),this.position=t,this._previous();{let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new $e(i,a,i.data.length-a),s=r.data.length,t=G._createBefore(r)}else r=new $e(i,0,i.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new $e(n,t.offset,r);return this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=G._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof $e&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=G._createAfter(e.textNode):(i=G._createAfter(e.textNode),this.position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=G._createBefore(e.textNode):(i=G._createBefore(e.textNode),this.position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class G extends Rn{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof lr);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=G._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Vn(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=Qt(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Vn(t)}clone(){return new G(this.parent,this.offset)}static _createAt(t,e){if(t instanceof G)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new M("view-createpositionat-offset-required",n)}return new G(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new G(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new M("view-position-after-root",t,{root:t});return new G(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new G(t.textNode,t.offsetInText);if(!t.parent)throw new M("view-position-before-root",t,{root:t});return new G(t.parent,t.index)}}G.prototype.is=function(o){return o==="position"||o==="view:position"};class dt extends Rn{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Vn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(dr,{direction:"backward"}),e=this.end.getLastMatchingPosition(dr);return t.parent.is("$text")&&t.isAtStart&&(t=G._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=G._createAfter(e.parent)),new dt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(dr);if(t.isAfter(this.end)||t.isEqual(this.end))return new dt(t,t);let e=this.end.getLastMatchingPosition(dr,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new G(n,0)),i&&i.is("$text")&&(e=new G(i,i.data.length)),new dt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new dt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new dt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new dt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Vn(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new dt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Vn(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Vn(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new G(t,e),new G(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(G._createBefore(t),e)}}function dr(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}dt.prototype.is=function(o){return o==="range"||o==="view:range"};class qe extends at(Rn){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=si(this.getRanges());if(e!=si(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof qe||e instanceof Ks)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof dt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof G)this._setRanges([new dt(e)]),this._setFakeOptions(i);else if(e instanceof jn){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new M("view-selection-setto-required-second-parameter",this);s=n=="in"?dt._createIn(e):n=="on"?dt._createOn(e):new dt(G._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!ne(e))throw new M("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new M("view-selection-setfocus-no-ranges",this);const n=G._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new dt(n,i),!0):this._addRange(new dt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof dt))throw new M("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new M("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new dt(t.start,t.end))}}qe.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Ks extends at(Rn){constructor(...t){super(),this._selection=new qe,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Ks.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class wi extends Y{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Ys=Symbol("bubbling contexts");function Qs(o){return class extends o{fire(t,...e){try{const n=t instanceof Y?t:new Y(this,t),i=Zs(this);if(!i.size)return;if(po(n,"capturing",this),_i(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&Boolean(Wd(i,s));let c=s||function(d){if(!d)return null;const u=d.start.parent,g=d.end.parent,m=u.getPath(),y=g.getPath();return m.length>y.length?u:g}(r);if(po(n,"atTarget",c),!a){if(_i(i,"$text",n,...e))return n.return;po(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(_i(i,"$root",n,...e))return n.return}else if(c.is("element")&&_i(i,c.name,n,...e))return n.return;if(_i(i,c,n,...e))return n.return;c=c.parent,po(n,"bubbling",c)}return po(n,"bubbling",this),_i(i,"$document",n,...e),n.return}catch(n){M.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=Zt(n.context||"$document"),r=Zs(this);for(const s of i){let a=r.get(s);a||(a=new(at()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=Zs(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=Qs(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{Qs[t]=o.prototype[t]})}function po(o,t,e){o instanceof wi&&(o._eventPhase=t,o._currentTarget=e)}function _i(o,t,e,...n){const i=typeof t=="string"?o.get(t):Wd(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function Wd(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function Zs(o){return o[Ys]||(o[Ys]=new Map),o[Ys]}class ur extends Qs(St()){constructor(t){super(),this.selection=new Ks,this.roots=new Me({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class Hn extends me{constructor(...t){super(...t),this.getFillerOffset=SA,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new M("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function SA(){if(Js(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Js(o)>1)return null;o=o.parent}return!o||Js(o)>1?null:this.childCount}function Js(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}Hn.DEFAULT_PRIORITY=10,Hn.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Xs extends me{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=IA}_insertChild(t,e){if(e&&(e instanceof jn||Array.from(e).length>0))throw new M("view-emptyelement-cannot-add",[this,e]);return 0}}function IA(){return null}Xs.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class hr extends me{constructor(...t){super(...t),this.getFillerOffset=NA}_insertChild(t,e){if(e&&(e instanceof jn||Array.from(e).length>0))throw new M("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function MA(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==yt.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,d=s.focusOffset,u=r.domPositionToView(c,d);if(u===null)return;let g=!1;const m=u.getLastMatchingPosition(y=>(y.item.is("uiElement")&&(g=!0),!(!y.item.is("uiElement")&&!y.item.is("attributeElement"))));if(g){const y=r.viewPositionToDom(m);a?s.collapse(y.parent,y.offset):s.extend(y.parent,y.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function NA(){return null}hr.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class ta extends me{constructor(...t){super(...t),this.getFillerOffset=PA}_insertChild(t,e){if(e&&(e instanceof jn||Array.from(e).length>0))throw new M("view-rawelement-cannot-add",[this,e]);return 0}render(){}}function PA(){return null}ta.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class $n extends at(Rn){constructor(t,e){super(),this.document=t,this._children=[],e&&this._insertChild(0,e),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new Nt(r,s)]:(ne(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Nt(r,a):a instanceof $e?new Nt(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}$n.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Gd{constructor(t){this.document=t,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(...t){this.document.selection._setFocus(...t)}createDocumentFragment(t){return new $n(this.document,t)}createText(t){return new Nt(this.document,t)}createAttributeElement(t,e,n={}){const i=new Hn(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;ue(n)?i=n:r=n;const s=new go(this.document,t,e,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const i=new lr(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new Xs(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new hr(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new ta(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ue(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof G?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new M("view-writer-break-non-container-element",this.document);if(!e.parent)throw new M("view-writer-break-root",this.document);if(t.isAtStart)return G._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(G._createAfter(e),n);const i=new dt(t,G._createAt(e,"end")),r=new G(n,0);this.move(i,r)}return G._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new G(s,a))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return Yd(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new G(i,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new M("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof Nt?G._createAt(i,"end"):G._createAt(e,"end");return this.move(dt._createIn(n),G._createAt(e,"end")),this.remove(dt._createOn(n)),r}insert(t,e){Qd(e=ne(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],d=!a.is("uiElement");return c&&c.breakAttributes==d?c.nodes.push(a):s.push({breakAttributes:d,nodes:[a]}),s},[]);let i=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new dt(i,r):new dt(t)}remove(t){const e=t instanceof dt?t:dt._createOn(t);if(fo(e,this.document),e.isCollapsed)return new $n(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const d of a)this._removeFromClonedElementsGroup(d);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new $n(this.document,a)}clear(t,e){fo(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&e.isSimilar(r))s=dt._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=dt._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Hn))throw new M("view-writer-wrap-invalid-attribute",this.document);if(fo(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new dt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Hn))throw new M("view-writer-unwrap-invalid-attribute",this.document);if(fo(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new dt(a,c)}rename(t,e){const n=new go(this.document,t,e.getAttributes());return this.insert(G._createAfter(e),n),this.move(dt._createIn(e),G._createAt(n,0)),this.remove(dt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return G._createAt(t,e)}createPositionAfter(t){return G._createAfter(t)}createPositionBefore(t){return G._createBefore(t)}createRange(...t){return new dt(...t)}createRangeOn(t){return dt._createOn(t)}createRangeIn(t){return dt._createIn(t)}createSelection(...t){return new qe(...t)}createSlot(t){if(!this._slotFactory)throw new M("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?ea(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new M("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?na(t):t;const s=i._insertChild(r.offset,e);for(const u of e)this._addToClonedElementsGroup(u);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const d=this.mergeAttributes(a);return new dt(c,d)}_wrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),d=c.is("$text"),u=c.is("attributeElement");if(u&&this._wrapAttributeElement(i,c))s.push(new G(t,r));else if(d||!u||LA(i,c)){const g=i._clone();c._remove(),g._appendChild(c),t._insertChild(r,g),this._addToClonedElementsGroup(g),s.push(new G(t,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return dt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const d=c.getChildren(),u=c.childCount;c._remove(),t._insertChild(r,d),this._removeFromClonedElementsGroup(c),s.push(new G(t,r),new G(t,r+u)),r+=u,n+=u-1}else this._unwrapAttributeElement(i,c)?(s.push(new G(t,r),new G(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return dt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new dt(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Kd(t.clone());t.parent.is("$text")&&(t=na(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new dt(t,t.getShiftedBy(1));this.wrap(i,e);const r=new G(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Nt&&a instanceof Nt?Yd(s,a):Kd(r)}_wrapAttributeElement(t,e){if(!Zd(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Zd(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(fo(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new dt(c,c)}const r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new dt(a,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new M("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new M("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new M("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&ia(i.parent)||ia(i))return t.clone();if(i.is("$text"))return this._breakAttributes(na(t),e);if(n==i.childCount){const r=new G(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new G(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const d=new G(i.parent,r);return this._breakAttributes(d,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function ea(o){let t=o.parent;for(;!ia(t);){if(!t)return;t=t.parent}return t}function LA(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Kd(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new G(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new G(e,0):o}function na(o){if(o.offset==o.parent.data.length)return new G(o.parent.parent,o.parent.index+1);if(o.offset===0)return new G(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new Nt(o.root.document,t)),new G(o.parent.parent,o.parent.index+1)}function Yd(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new G(o,e)}const OA=[Nt,Hn,go,Xs,ta,hr];function Qd(o,t){for(const e of o){if(!OA.some(n=>e instanceof n))throw new M("view-writer-insert-invalid-node-type",t);e.is("$text")||Qd(e.getChildren(),t)}}function ia(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function fo(o,t){const e=ea(o.start),n=ea(o.end);if(!e||!n||e!==n)throw new M("view-writer-invalid-range-container",t)}function Zd(o,t){return o.id===null&&t.id===null}const Jd=o=>o.createTextNode("\xA0"),Xd=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText="\xA0",t},tu=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},We=7,gr="\u2060".repeat(We);function be(o){return Vt(o)&&o.data.substr(0,We)===gr}function mo(o){return o.data.length==We&&be(o)}function eu(o){return be(o)?o.data.slice(We):o.data}function BA(o,t){if(t.keyCode==yt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;be(n)&&i<=We&&e.collapse(n,0)}}}var nu=S(9315),zA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(nu.Z,zA),nu.Z.locals;class RA extends St(){constructor(t,e){super(),this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),A.isBlink&&!A.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new M("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!A.isAndroid)return;let t=null;const e=!(A.isBlink&&!A.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=G._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;be(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=iu(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){if(!this.domConverter.mapViewToDom(t))return;const e=Array.from(this.domConverter.mapViewToDom(t).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),i=this._diffNodeLists(e,n),r=this._findReplaceActions(i,e,n);if(r.indexOf("replace")!==-1){const s={equal:0,insert:0,delete:0};for(const a of r)if(a==="replace"){const c=s.equal+s.insert,d=s.equal+s.delete,u=t.getChild(c);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,e[d]),Ql(n[c]),s.equal++}else s[a]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?G._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Vt(e.parent)&&be(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!be(t))throw new M("view-renderer-filler-was-lost",this);mo(t)?t.remove():t.data=t.data.substr(We),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof Nt||r instanceof Nt)&&(!A.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=gr+i),su(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(A.isAndroid){let g=null;for(const m of Array.from(n.childNodes)){if(g&&Vt(g)&&Vt(m)){n.normalize();break}g=m}}const i=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&iu(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=A.isAndroid?this._findReplaceActions(a,r,s,{replaceText:!0}):a;let d=0;const u=new Set;for(const g of c)g==="delete"?(u.add(r[d]),Ql(r[d])):g!=="equal"&&g!=="replace"||d++;d=0;for(const g of c)g==="insert"?(Gl(n,d,s[d]),d++):g==="replace"?(su(r[d],s[d].data),d++):g==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[d])),d++);for(const g of u)g.parentNode||this.domConverter.unbindDomElement(g)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),z(t,e,jA.bind(null,this.domConverter))}_findReplaceActions(t,e,n,i={}){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const d of t)d==="insert"?a.push(n[c.equal+c.insert]):d==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(z(s,a,i.replaceText?ru:ou).map(u=>u==="equal"?"replace":u)),r.push("equal"),s=[],a=[]),c[d]++;return r.concat(z(s,a,i.replaceText?ru:ou).map(d=>d==="equal"?"replace":d))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(A.isBlink&&!A.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&A.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(i.parent,i.offset),A.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function iu(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(Vt(i))return i.data=gr+i.data,i;{const r=o.createTextNode(gr);return Array.isArray(t)?n.splice(e,0,r):Gl(t,e,r),r}}function ou(o,t){return fn(o)&&fn(t)&&!Vt(o)&&!Vt(t)&&!pi(o)&&!pi(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function ru(o,t){return fn(o)&&fn(t)&&Vt(o)&&Vt(t)}function jA(o,t,e){return t===e||(Vt(t)&&Vt(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function su(o,t){const e=o.data;if(e==t)return;const n=D(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const FA=tu(_t.document),VA=Jd(_t.document),HA=Xd(_t.document),pr="data-ck-unsafe-attribute-",au="data-ck-unsafe-element";class fr{constructor(t,e={}){this.document=t,this.renderingMode=e.renderingMode||"editing",this.blockFillerMode=e.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?_t.document:_t.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Ue,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new qe(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const d of a){for(const g of d.getAttributeNames())this.setDomElementAttribute(d,g,d.getAttribute(g));const u=d.tagName.toLowerCase();this._shouldRenameElement(u)&&(du(u),d.replaceWith(this._createReplacementDomElement(u,d)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?(du(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(const i of t.getAttributeKeys())this.setDomElementAttribute(n,i,t.getAttribute(i),t)}if(e.withChildren!==!1)for(const i of this.viewChildrenToDom(t,e))n.appendChild(i);return n}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||J("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(pr+e)&&r&&t.removeAttribute(pr+e),t.setAttribute(r?e:pr+e,n)}removeDomElementAttribute(t,e){e!=au&&(t.removeAttribute(e),t.removeAttribute(pr+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Kt(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&J("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return be(n)&&(i+=We),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return Vt(r)&&be(r)?{parent:r,offset:We}:{parent:n,offset:i?er(i)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;const n=this.getHostViewElement(t);if(n)return n;if(pi(t)&&e.skipComments)return null;if(Vt(t)){if(mo(t))return null;{const i=this._processDataFromDomText(t);return i===""?null:new Nt(this.document,i)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let i;if(this.isDocumentFragment(t))i=new $n(this.document),e.bind&&this.bindDocumentFragments(t,i);else{i=this._createViewElement(t,e),e.bind&&this.bindElements(t,i);const r=t.attributes;if(r)for(let s=r.length,a=0;a<s;a++)i._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(i,e)||pi(t)){const s=pi(t)?t.data:t.innerHTML;return i._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(t),i}}if(e.withChildren!==!1)for(const r of this.domChildrenToView(t,e))i._appendChild(r);return i}}*domChildrenToView(t,e){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n],r=this.domToView(i,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;Vt(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new qe(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new dt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,er(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return G._createBefore(n);if(Vt(t)){if(mo(t))return this.domPositionToView(t.parentNode,er(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(be(t)&&(r-=We,r=r<0?0:r),new G(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new G(i,0)}else{const i=t.childNodes[e-1];if(Vt(i)&&mo(i))return this.domPositionToView(i.parentNode,er(i));const r=Vt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new G(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(mo(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof Nt?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof Nt?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=_t.window,r=[];cu(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),cu(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),_t.window.scrollTo(n,i)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(FA):!(t.tagName!=="BR"||!lu(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(HA)||function(e,n){return e.isEqualNode(VA)&&lu(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=Hl(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Jd(this._domDocument);case"markedNbsp":return Xd(this._domDocument);case"br":return tu(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(Vt(t)&&be(t)&&e<We||this.isElement(t)&&be(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(d,u){return Hl(d).some(m=>m.tagName&&u.includes(m.tagName.toLowerCase()))}(t,this.preElements))return eu(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),i=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),s=this._checkShouldRightTrimDomText(t,i);r&&(e=e.replace(/^ /,"")),s&&(e=e.replace(/ $/,"")),e=eu(new Text(e)),e=e.replace(/ \u00A0/g,"  ");const a=i&&this.isElement(i)&&i.tagName!="BR",c=i&&Vt(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!i||a||c)&&(e=e.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!be(t)}_getTouchingInlineViewNode(t,e){const n=new Vn({startPosition:e?G._createAfter(t):G._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"firstChild":"lastChild",i=e?"nextSibling":"previousSibling";let r=!0,s=t;do if(!r&&s[n]?s=s[n]:s[i]?(s=s[i],r=!1):(s=s.parentNode,r=!0),!s||this._isBlockElement(s))return null;while(!Vt(s)&&s.tagName!="BR"&&!this._isInlineObjectElement(s));return s}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(pi(t))return new hr(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new me(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(au,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function cu(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function lu(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function du(o){o==="script"&&J("domconverter-unsafe-script-element-detected"),o==="style"&&J("domconverter-unsafe-style-element-detected")}class Ge extends On(){constructor(t){super(),this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const uu=Fd(function(o,t){ui(t,gi(t),o)});class Ai{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,uu(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class bn extends Ge{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Ai(this.view,e,n))}}class $A extends bn{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return fi(this)}};this.fire(t.type,t,e)}}const oa=function(){return de.Date.now()};var UA=/\s/;const qA=function(o){for(var t=o.length;t--&&UA.test(o.charAt(t)););return t};var WA=/^\s+/;const GA=function(o){return o&&o.slice(0,qA(o)+1).replace(WA,"")};var hu=NaN,KA=/^[-+]0x[0-9a-f]+$/i,YA=/^0b[01]+$/i,QA=/^0o[0-7]+$/i,ZA=parseInt;const gu=function(o){if(typeof o=="number")return o;if(ar(o))return hu;if(mt(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=mt(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=GA(o);var e=YA.test(o);return e||QA.test(o)?ZA(o.slice(2),e?2:8):KA.test(o)?hu:+o};var JA="Expected a function",XA=Math.max,tv=Math.min;const bo=function(o,t,e){var n,i,r,s,a,c,d=0,u=!1,g=!1,m=!0;if(typeof o!="function")throw new TypeError(JA);function y(L){var j=n,K=i;return n=i=void 0,d=L,s=o.apply(K,j)}function E(L){var j=L-c;return c===void 0||j>=t||j<0||g&&L-d>=r}function T(){var L=oa();if(E(L))return I(L);a=setTimeout(T,function(j){var K=t-(j-c);return g?tv(K,r-(j-d)):K}(L))}function I(L){return a=void 0,m&&n?y(L):(n=i=void 0,s)}function N(){var L=oa(),j=E(L);if(n=arguments,i=this,c=L,j){if(a===void 0)return function(K){return d=K,a=setTimeout(T,t),u?y(K):s}(c);if(g)return clearTimeout(a),a=setTimeout(T,t),y(c)}return a===void 0&&(a=setTimeout(T,t)),s}return t=gu(t)||0,mt(e)&&(u=!!e.leading,r=(g="maxWait"in e)?XA(gu(e.maxWait)||0,t):r,m="trailing"in e?!!e.trailing:m),N.cancel=function(){a!==void 0&&clearTimeout(a),d=0,n=c=i=a=void 0},N.flush=function(){return a===void 0?s:I(oa())},N};class ev extends Ge{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=bo(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new qe(e.getRanges(),{backward:e.isBackward,fake:!1});t!=yt.arrowleft&&t!=yt.arrowup||n.setTo(n.getFirstPosition()),t!=yt.arrowright&&t!=yt.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}var nv="__lodash_hash_undefined__";const iv=function(o){return this.__data__.set(o,nv),this},ov=function(o){return this.__data__.has(o)};function mr(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new Ko;++t<e;)this.add(o[t])}mr.prototype.add=mr.prototype.push=iv,mr.prototype.has=ov;const rv=mr,sv=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},av=function(o,t){return o.has(t)};var cv=1,lv=2;const pu=function(o,t,e,n,i,r){var s=e&cv,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var d=r.get(o),u=r.get(t);if(d&&u)return d==t&&u==o;var g=-1,m=!0,y=e&lv?new rv:void 0;for(r.set(o,t),r.set(t,o);++g<a;){var E=o[g],T=t[g];if(n)var I=s?n(T,E,g,t,o,r):n(E,T,g,o,t,r);if(I!==void 0){if(I)continue;m=!1;break}if(y){if(!sv(t,function(N,L){if(!av(y,L)&&(E===N||i(E,N,e,n,r)))return y.push(L)})){m=!1;break}}else if(E!==T&&!i(E,T,e,n,r)){m=!1;break}}return r.delete(o),r.delete(t),m},dv=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},uv=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var hv=1,gv=2,pv="[object Boolean]",fv="[object Date]",mv="[object Error]",bv="[object Map]",kv="[object Number]",wv="[object RegExp]",_v="[object Set]",Av="[object String]",vv="[object Symbol]",Cv="[object ArrayBuffer]",yv="[object DataView]",fu=fe?fe.prototype:void 0,ra=fu?fu.valueOf:void 0;const Ev=function(o,t,e,n,i,r,s){switch(e){case yv:if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case Cv:return!(o.byteLength!=t.byteLength||!r(new Zo(o),new Zo(t)));case pv:case fv:case kv:return io(+o,+t);case mv:return o.name==t.name&&o.message==t.message;case wv:case Av:return o==t+"";case bv:var a=dv;case _v:var c=n&hv;if(a||(a=uv),o.size!=t.size&&!c)return!1;var d=s.get(o);if(d)return d==t;n|=gv,s.set(o,t);var u=pu(a(o),a(t),n,i,r,s);return s.delete(o),u;case vv:if(ra)return ra.call(o)==ra.call(t)}return!1};var xv=1,Dv=Object.prototype.hasOwnProperty;const Tv=function(o,t,e,n,i,r){var s=e&xv,a=_s(o),c=a.length;if(c!=_s(t).length&&!s)return!1;for(var d=c;d--;){var u=a[d];if(!(s?u in t:Dv.call(t,u)))return!1}var g=r.get(o),m=r.get(t);if(g&&m)return g==t&&m==o;var y=!0;r.set(o,t),r.set(t,o);for(var E=s;++d<c;){var T=o[u=a[d]],I=t[u];if(n)var N=s?n(I,T,u,t,o,r):n(T,I,u,o,t,r);if(!(N===void 0?T===I||i(T,I,e,n,r):N)){y=!1;break}E||(E=u=="constructor")}if(y&&!E){var L=o.constructor,j=t.constructor;L==j||!("constructor"in o)||!("constructor"in t)||typeof L=="function"&&L instanceof L&&typeof j=="function"&&j instanceof j||(y=!1)}return r.delete(o),r.delete(t),y};var Sv=1,mu="[object Arguments]",bu="[object Array]",br="[object Object]",ku=Object.prototype.hasOwnProperty;const Iv=function(o,t,e,n,i,r){var s=se(o),a=se(t),c=s?bu:lo(o),d=a?bu:lo(t),u=(c=c==mu?br:c)==br,g=(d=d==mu?br:d)==br,m=c==d;if(m&&ao(o)){if(!ao(t))return!1;s=!0,u=!1}if(m&&!u)return r||(r=new so),s||ms(o)?pu(o,t,e,n,i,r):Ev(o,t,c,e,n,i,r);if(!(e&Sv)){var y=u&&ku.call(o,"__wrapped__"),E=g&&ku.call(t,"__wrapped__");if(y||E){var T=y?o.value():o,I=E?t.value():t;return r||(r=new so),i(T,I,e,n,r)}}return!!m&&(r||(r=new so),Tv(o,t,e,n,i,r))},wu=function o(t,e,n,i,r){return t===e||(t==null||e==null||!Ae(t)&&!Ae(e)?t!=t&&e!=e:Iv(t,e,n,i,o,r))},Mv=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?wu(o,t,void 0,e):!!n};class _u extends Ge{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&be(s.target)&&i.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),d=Array.from(e.domChildrenToView(a,{withChildren:!1}));Mv(c,d,Nv)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function Nv(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class sa extends bn{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class Pv extends Ge{constructor(t){super(t),this.mutationObserver=t.getObserver(_u),this.focusObserver=t.getObserver(sa),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=bo(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=bo(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!A.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Lv extends bn{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Au{constructor(t,e={}){this._files=e.cacheFiles?vu(t):null,this._native=t}get files(){return this._files||(this._files=vu(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function vu(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class Ov extends bn{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new Au(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(e.length)a=e.map(c=>n.domConverter.domRangeToView(c));else if(A.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(A.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`)){const c=s.split(/\n{1,2}/g);let d=a;for(let u=0;u<c.length;u++){const g=c[u];g!=""&&(this.fire(t.type,t,{data:g,dataTransfer:r,targetRanges:d,inputType:t.inputType,isComposing:t.isComposing}),d=[i.selection.getFirstRange()]),u+1<c.length&&(this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:d}),d=[i.selection.getFirstRange()])}}else this.fire(t.type,t,{data:s,dataTransfer:r,targetRanges:a,inputType:t.inputType,isComposing:t.isComposing})}}class Bv extends Ge{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((i=n.keyCode)==yt.arrowright||i==yt.arrowleft||i==yt.arrowup||i==yt.arrowdown)){const r=new wi(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var i})}observe(){}}class zv extends Ge{constructor(t){super(t);const e=this.document;e.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=yt.tab||i.ctrlKey)return;const r=new wi(e,"tab",e.selection.getFirstRange());e.fire(r,i),r.stop.called&&n.stop()})}observe(){}}class Rv extends St(){constructor(t){super(),this.document=new ur(t),this.domConverter=new fr(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new RA(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting","isComposing").to(this.document,"isFocused","isSelecting","isComposing"),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Gd(this.document),this.addObserver(_u),this.addObserver(sa),this.addObserver(Pv),this.addObserver($A),this.addObserver(ev),this.addObserver(Lv),this.addObserver(Bv),this.addObserver(Ov),this.addObserver(zv),this.document.on("arrowKey",BA,{priority:"low"}),MA(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const i={};for(const{name:s,value:a}of Array.from(t.attributes))i[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(t,i);const r=()=>{this._writer.setAttribute("contenteditable",(!n.isReadOnly).toString(),n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:i})=>e.removeAttribute(i));const n=this._initialDomRootAttributes.get(e);for(const i in n)e.setAttribute(i,n[i]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,i]of this.domRoots)e.observe(i,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&function({target:e,viewportOffset:n=0}){const i=Is(e);let r=i,s=null;for(;r;){let a;a=g_(r==i?e:s),h_(a,()=>ed(e,r));const c=ed(e,r);if(u_(r,c,n),r.parent!=r){if(s=r.frameElement,r=r.parent,!s)return}else r=null}}({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new M("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){M.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.getObserver(sa).flush(),this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return G._createAt(t,e)}createPositionAfter(t){return G._createAfter(t)}createPositionBefore(t){return G._createBefore(t)}createRange(...t){return new dt(...t)}createRangeOn(t){return dt._createOn(t)}createRangeIn(t){return dt._createIn(t)}createSelection(...t){return new qe(...t)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}class kn{is(){throw new Error("is() method is abstract")}}class vi extends kn{constructor(t){super(),this.parent=null,this._attrs=He(t)}get document(){return null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new M("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new M("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Qt(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}_clone(t){return new this.constructor(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=He(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}vi.prototype.is=function(o){return o==="node"||o==="model:node"};class ko{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new M("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new M("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof vi))throw new M("model-nodelist-insertnodes-not-node",this);this._nodes=function(n,i,r,s){if(Math.max(i.length,n.length)>__)return n.slice(0,r).concat(i).concat(n.slice(r+s,n.length));{const a=Array.from(n);return a.splice(r,s,...i),a}}(this._nodes,Array.from(e),t,0)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Pt extends vi{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new Pt(this.data,this.getAttributes())}static fromJSON(t){return new Pt(t.data,t.attributes)}}Pt.prototype.is=function(o){return o==="$text"||o==="model:$text"||o==="text"||o==="model:text"||o==="node"||o==="model:node"};class Pe extends kn{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.offsetSize)throw new M("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new M("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}Pe.prototype.is=function(o){return o==="$textProxy"||o==="model:$textProxy"||o==="textProxy"||o==="model:textProxy"};class It extends vi{constructor(t,e,n){super(e),this._children=new ko,this.name=t,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):void 0;return new It(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new Pt(i)]:(ne(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new Pt(r):r instanceof Pe?new Pt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}static fromJSON(t){let e;if(t.children){e=[];for(const n of t.children)n.name?e.push(It.fromJSON(n)):e.push(Pt.fromJSON(n))}return new It(t.name,t.attributes,e)}}It.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="model:element"):o==="element"||o==="model:element"||o==="node"||o==="model:node"};class Ke{constructor(t){if(!t||!t.boundaries&&!t.startPosition)throw new M("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new M("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=H._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,i,r;do i=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=i,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};const i=wo(e,n),r=i||Cu(e,n,i);if(r instanceof It)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=r),this.position=e,Un("elementStart",r,t,e,1);if(r instanceof Pt){let s;if(this.singleCharacters)s=1;else{let d=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<d&&(d=this.boundaries.end.offset),s=d-e.offset}const a=e.offset-r.startOffset,c=new Pe(r,a,s);return e.offset+=s,this.position=e,Un("text",c,t,e,s)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Un("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};const i=e.parent,r=wo(e,i),s=r||yu(e,i,r);if(s instanceof It)return e.offset--,this.shallow?(this.position=e,Un("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this.position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():Un("elementEnd",s,t,e));if(s instanceof Pt){let a;if(this.singleCharacters)a=1;else{let u=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>u&&(u=this.boundaries.start.offset),a=e.offset-u}const c=e.offset-s.startOffset,d=new Pe(s,c-a,a);return e.offset-=a,this.position=e,Un("text",d,t,e,a)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Un("elementStart",n,t,e,1)}}function Un(o,t,e,n,i){return{done:!1,value:{type:o,item:t,previousPosition:e,nextPosition:n,length:i}}}class H extends kn{constructor(t,e,n="toNone"){if(super(),!t.is("element")&&!t.is("documentFragment"))throw new M("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new M("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new M("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new M("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return wo(this,this.parent)}get nodeAfter(){const t=this.parent;return Cu(this,t,wo(this,t))}get nodeBefore(){const t=this.parent;return yu(this,t,wo(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=Qt(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Ke(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=Qt(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){if(this.root!==t.root)return!1;const e=Math.min(this.path.length,t.path.length);for(let n=0;n<e;n++){const i=this.path[n]-t.path[n];if(i<-1||i>1)return!1;if(i===1)return Eu(t,this,n);if(i===-1)return Eu(this,t,n)}return this.path.length===t.path.length||(this.path.length>t.path.length?aa(this.path,e):aa(t.path,e))}hasSameParentAs(t){return this.root!==t.root?!1:Qt(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=H._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?H._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=H._createAt(this);if(this.root!=t.root)return n;if(Qt(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(Qt(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;if(t.offset<=this.path[i]){if(t.offset+e>this.path[i])return null;n.path[i]-=e}}return n}_getTransformedByInsertion(t,e){const n=H._createAt(this);if(this.root!=t.root)return n;if(Qt(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(Qt(t.getParentPath(),this.getParentPath())=="prefix"){const i=t.path.length-1;t.offset<=this.path[i]&&(n.path[i]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return H._createAt(this);const i=this._getTransformedByDeletion(t,n);return i===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):i._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,i=H._createAt(e);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-t.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof H)return new H(t.root,t.path,t.stickiness);{const i=t;if(e=="end")e=i.maxOffset;else{if(e=="before")return this._createBefore(i,n);if(e=="after")return this._createAfter(i,n);if(e!==0&&!e)throw new M("model-createpositionat-offset-required",[this,t])}if(!i.is("element")&&!i.is("documentFragment"))throw new M("model-position-parent-incorrect",[this,t]);const r=i.getPath();return r.push(e),new this(i.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new M("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new M("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new H(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new M("model-position-fromjson-no-root",e,{rootName:t.root});return new H(e.getRoot(t.root),t.path,t.stickiness)}}function wo(o,t){const e=t.getChild(t.offsetToIndex(o.offset));return e&&e.is("$text")&&e.startOffset<o.offset?e:null}function Cu(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset))}function yu(o,t,e){return e!==null?null:t.getChild(t.offsetToIndex(o.offset)-1)}function Eu(o,t,e){return e+1!==o.path.length&&!!aa(t.path,e+1)&&!!function(n,i){let r=n.parent,s=n.path.length-1,a=0;for(;s>=i;){if(n.path[s]+a!==r.maxOffset)return!1;a=1,s--,r=r.parent}return!0}(o,e+1)}function aa(o,t){for(;t<o.length;){if(o[t]!==0)return!1;t++}return!0}H.prototype.is=function(o){return o==="position"||o==="model:position"};class R extends kn{constructor(t,e){super(),this.start=H._createAt(t),this.end=e?H._createAt(e):H._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Ke({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Qt(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}containsItem(t){const e=H._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new R(this.start,t.start)),this.containsPosition(t.end)&&e.push(new R(t.end,this.end))):e.push(new R(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new R(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let i=this.start,r=this.end;return t.start.isBefore(i)&&(i=t.start),t.end.isAfter(r)&&(r=t.end),new R(i,r)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=H._createAt(this.start);let i=n.parent;for(;n.path.length>e+1;){const r=i.maxOffset-n.offset;r!==0&&t.push(new R(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new R(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new Ke(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Ke(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Ke(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new R(this.start,this.end)]}getTransformedByOperations(t){const e=[new R(this.start,this.end)];for(const n of t)for(let i=0;i<e.length;i++){const r=e[i].getTransformedByOperation(n);e.splice(i,1,...r),i+=r.length-1}for(let n=0;n<e.length;n++){const i=e[n];for(let r=n+1;r<e.length;r++){const s=e[r];(i.containsRange(s)||s.containsRange(i)||i.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,i=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,i,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new R(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new R(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=H._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new R(e,n)):new R(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new R(this.start,t),new R(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const i=new R(this.start,this.end);return i.start=i.start._getTransformedByInsertion(t,e),i.end=i.end._getTransformedByInsertion(t,e),[i]}}_getTransformedByMove(t,e,n,i=!1){if(this.isCollapsed){const g=this.start._getTransformedByMove(t,e,n);return[new R(g)]}const r=R._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!i&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const g=this.start._getTransformedByMove(t,e,n),m=this.end._getTransformedByMove(t,e,n);return[new R(g,m)]}let a;const c=this.getDifference(r);let d=null;const u=this.getIntersection(r);if(c.length==1?d=new R(c[0].start._getTransformedByDeletion(t,n),c[0].end._getTransformedByDeletion(t,n)):c.length==2&&(d=new R(this.start,this.end._getTransformedByDeletion(t,n))),a=d?d._getTransformedByInsertion(s,n,u!==null||i):[],u){const g=new R(u.start._getCombined(r.start,s),u.end._getCombined(r.start,s));a.length==2?a.splice(1,0,g):a.push(g)}return a}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),i=this.end._getTransformedByDeletion(t,e);return n==null&&i==null?null:(n==null&&(n=t),i==null&&(i=t),new R(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return new this(H._createAt(t,0),H._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(H._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new M("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=t.indexOf(e),i=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(i.start);r++)i.start=H._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(i.end);r++)i.end=H._createAt(t[r].end);return i}static fromJSON(t,e){return new this(H.fromJSON(t.start,e),H.fromJSON(t.end,e))}}R.prototype.is=function(o){return o==="range"||o==="model:range"};class xu extends at(){constructor(){super(),this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new M("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),i=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=H._createAt(i,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const i of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(i);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const i=this._elementToMarkerNames.get(t)||new Set;i.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,i)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const i=this._elementToMarkerNames.get(t);i&&(i.delete(e),i.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new R(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new dt(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const i of e)if(i.is("attributeElement"))for(const r of i.getElementsWithSameId())n.add(r);else n.add(i);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let i=0;for(let r=0;r<e;r++)i+=this.getModelLength(t.getChild(r));return i}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,i=0,r=0,s=0;if(t.is("$text"))return new G(t,e);for(;r<e;)n=t.getChild(s),i=this.getModelLength(n),r+=i,s++;return r==e?this._moveViewPositionToTextNode(new G(t,s)):this.findPositionIn(n,e-(r-i))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof Nt?new G(e,e.data.length):n instanceof Nt?new G(n,0):t}}class jv{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=kr(e),t instanceof Pe&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=kr(e),t instanceof Pe&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=kr(e),t instanceof Pe&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const i=n.get(e);return i===void 0?null:i}revert(t,e){e=kr(e),t instanceof Pe&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,i]of this._consumable)for(const[r,s]of i){const a=r.split(":")[0];s&&t==a&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new M("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const i=n.get(t.endOffset);i&&(e=i.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,i=t.parent,r=Symbol("$textProxy:"+t.data);let s,a;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(i,r),r}}function kr(o){const t=o.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?o:t.length>1?t[0]+":"+t[1]:t[0]}class Du extends at(){constructor(t){super(),this._conversionApi={dispatcher:this,...t},this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const i=this._createConversionApi(n,t.getRefreshedItems());for(const s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,i);const r=this._reduceChanges(t.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(R._createFromPositionAndShift(s.position,s.length),i):s.type==="reinsert"?this._convertReinsert(R._createFromPositionAndShift(s.position,s.length),i):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,i):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,i);for(const s of i.mapper.flushUnboundMarkerNames()){const a=e.get(s).getRange();this._convertMarkerRemove(s,a,i),this._convertMarkerAdd(s,a,i)}for(const s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(t,e,n,i={}){const r=this._createConversionApi(n,void 0,i);this._convertInsert(t,r);for(const[s,a]of e)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const i=Array.from(e.getMarkersAtPosition(t.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,t,i),this.fire("selection",{selection:t},r),t.isCollapsed){for(const s of i){const a=s.getRange();if(!Fv(t.getFirstPosition(),s,r.mapper))continue;const c={item:t,markerName:s.name,markerRange:a};r.consumable.test(t,"addMarker:"+s.name)&&this.fire(`addMarker:${s.name}`,c,r)}for(const s of t.getAttributeKeys()){const a={item:t,range:t.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:t.getAttribute(s)};r.consumable.test(t,"attribute:"+a.attributeKey)&&this.fire(`attribute:${a.attributeKey}:$text`,a,r)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(const i of Array.from(t.getWalker({shallow:!0})).map(Tu))this._testAndFire("insert",i,e)}_convertRemove(t,e,n,i){this.fire(`remove:${n}`,{position:t,length:e},i)}_convertAttribute(t,e,n,i,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(const s of t){const a={item:s.item,range:R._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${e}`,a,r)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const i of n.map(Tu))this._testAndFire("insert",{...i,reconversion:!0},e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const i=`addMarker:${t}`;if(n.consumable.add(e,i),this.fire(i,{markerName:t,markerRange:e},n),n.consumable.consume(e,i)){this._addConsumablesForRange(n.consumable,e,i);for(const r of e.getItems()){if(!n.consumable.test(r,i))continue;const s={item:r,range:R._createOn(r),markerName:t,markerRange:e};this.fire(i,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire(`removeMarker:${t}`,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const i=n.item;if(t.test(i,"insert")===null){t.add(i,"insert");for(const r of i.getAttributeKeys())t.add(i,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(const i of e.getItems())t.add(i,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const i of n)t.add(e,"addMarker:"+i.name);for(const i of e.getAttributeKeys())t.add(e,"attribute:"+i);return t}_testAndFire(t,e,n){const i=function(c,d){const u=d.item.is("element")?d.item.name:"$text";return`${c}:${u}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(i))return;a.add(i)}else s.set(r,new Set([i]));this.fire(i,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:R._createOn(t)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,e)}_createConversionApi(t,e=new Set,n={}){const i={...this._conversionApi,consumable:new jv,writer:t,options:n,convertItem:r=>this._convertInsert(R._createOn(r),i),convertChildren:r=>this._convertInsert(R._createIn(r),i,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,i),canReuseView:r=>!e.has(i.mapper.toModelElement(r))};return this._firedEventsMap.set(i,new Map),i}}function Fv(o,t,e){const n=t.getRange(),i=Array.from(o.getAncestors());return i.shift(),i.reverse(),!i.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function Tu(o){return{item:o.item,range:R._createFromPositionAndShift(o.previousPosition,o.length)}}class Ye extends at(kn){constructor(...t){super(),this._lastRangeBackward=!1,this._attrs=new Map,this._ranges=[],t.length&&this.setTo(...t)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new R(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new R(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new R(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]);else if(e instanceof Ye)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof R)this._setRanges([e],!!i&&!!i.backward);else if(e instanceof H)this._setRanges([new R(e)]);else if(e instanceof vi){const r=!!i&&!!i.backward;let s;if(n=="in")s=R._createIn(e);else if(n=="on")s=R._createOn(e);else{if(n===void 0)throw new M("model-selection-setto-required-second-parameter",[this,e]);s=new R(H._createAt(e,n))}this._setRanges([s],r)}else{if(!ne(e))throw new M("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,i&&!!i.backward)}}_setRanges(t,e=!1){const n=Array.from(t),i=n.some(r=>{if(!(r instanceof R))throw new M("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(s=>!s.isEqual(r))});(n.length!==this._ranges.length||i)&&(this._replaceAllRanges(n),this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0}))}setFocus(t,e){if(this.anchor===null)throw new M("model-selection-setfocus-no-ranges",[this,t]);const n=H._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new R(n,i)),this._lastRangeBackward=!0):(this._pushRange(new R(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Iu(e.start,t);n&&ca(n,e)&&(yield n);for(const r of e.getWalker()){const s=r.item;r.type=="elementEnd"&&Vv(s,t,e)&&(yield s)}const i=Iu(e.end,t);i&&!e.end.isTouching(H._createAt(i,0))&&ca(i,e)&&(yield i)}}containsEntireContent(t=this.anchor.root){const e=H._createAt(t,0),n=H._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new R(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new M("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_replaceAllRanges(t){this._removeAllRanges();for(const e of t)this._pushRange(e)}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Su(o,t){return!t.has(o)&&(t.add(o),o.root.document.model.schema.isBlock(o)&&!!o.parent)}function Vv(o,t,e){return Su(o,t)&&ca(o,e)}function Iu(o,t){const e=o.parent.root.document.model.schema,n=o.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const r=n.find(s=>!i&&(i=e.isLimit(s),!i&&Su(s,t)));return n.forEach(s=>t.add(s)),r}function ca(o,t){const e=function(n){const i=n.root.document.model.schema;let r=n.parent;for(;r;){if(i.isBlock(r))return r;r=r.parent}}(o);return e?!t.containsRange(R._createOn(e),!0):!0}Ye.prototype.is=function(o){return o==="selection"||o==="model:selection"};class Le extends at(R){constructor(t,e){super(t,e),Hv.call(this)}detach(){this.stopListening()}toRange(){return new R(this.start,this.end)}static fromRange(t){return new Le(t.start,t.end)}}function Hv(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&$v.call(this,e)},{priority:"low"})}function $v(o){const t=this.getTransformedByOperation(o),e=R._createFromRanges(t),n=!e.isEqual(this),i=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,o);let r=null;if(n){e.root.rootName=="$graveyard"&&(r=o.type=="remove"?o.sourcePosition:o.deletionPosition);const s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:r})}Le.prototype.is=function(o){return o==="liveRange"||o==="model:liveRange"||o=="range"||o==="model:range"};const _o="selection:";class Ce extends at(kn){constructor(t){super(),this._selection=new Uv(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection.updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(...t){this._selection.setTo(...t)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection.getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return _o+t}static _isStoreAttributeKey(t){return t.startsWith(_o)}}Ce.prototype.is=function(o){return o==="selection"||o=="model:selection"||o=="documentSelection"||o=="model:documentSelection"};class Uv extends Ye{constructor(t){super(),this.markers=new Me({idProperty:"name"}),this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this._model=t.model,this._document=t,this.listenTo(this._model,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{this._validateSelectionRanges(this.getRanges())}),this.listenTo(this._model.markers,"update",(e,n,i,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(i,r){const s=i.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const c=a.position.parent;a.length===c.maxOffset&&i.enqueueChange(r,d=>{const u=Array.from(c.getAttributeKeys()).filter(g=>g.startsWith(_o));for(const g of u)d.removeAttribute(g,c)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(...t){super.setTo(...t),this._updateAttributes(!0),this.updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this.updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=tt();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new M("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this.updateMarkers()}_replaceAllRanges(t){this._validateSelectionRanges(t),super._replaceAllRanges(t)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_validateSelectionRanges(t){for(const e of t)if(!this._document._validateSelectionRange(e))throw new M("document-selection-wrong-position",this,{range:e})}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=Le.fromRange(t);return e.on("change:range",(n,i,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const i of this._model.markers){const r=i.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=i.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&t.push(i)}const n=Array.from(this.markers);for(const i of t)this.markers.has(i)||(this.markers.add(i),e=!0);for(const i of Array.from(this.markers))t.includes(i)||(this.markers.remove(i),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const r=Array.from(this.markers),s=this.markers.has(t);if(e){let a=!1;for(const c of this.getRanges())if(e.containsRange(c,!c.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(t),i=!0):!a&&s&&(this.markers.remove(t),i=!0)}else s&&(this.markers.remove(t),i=!0);i&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){const e=He(this._getSurroundingAttributes()),n=He(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);const i=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||i.push(r);for(const[r]of n)this.hasAttribute(r)||i.push(r);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(t,e,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,i),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,i]of this.getAttributes())t.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of t)this._setAttribute(n,i,!1)&&e.add(n);return e}*getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(_o)&&(yield[e.substr(_o.length),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const i=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=wr(i)),n||(n=wr(r)),!this.isGravityOverridden&&!n){let s=i;for(;s&&!e.isInline(s)&&!n;)s=s.previousSibling,n=wr(s)}if(!n){let s=r;for(;s&&!e.isInline(s)&&!n;)s=s.nextSibling,n=wr(s)}n||(n=this.getStoredAttributes())}else{const i=this.getFirstRange();for(const r of i){if(r.item.is("element")&&e.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function wr(o){return o instanceof Pe||o instanceof Pt?o.getAttributes():null}class Mu{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}var qv=1,Wv=4;const qn=function(o){return xs(o,qv|Wv)};class Gv extends Mu{elementToElement(t){return this.add(function(e){const n=Lu(e.model),i=Ao(e.view,"container");return n.attributes.length&&(n.children=!0),r=>{r.on(`insert:${n.name}`,function(s,a=Yv){return(c,d,u)=>{if(!a(d.item,u.consumable,{preflight:!0}))return;const g=s(d.item,u,d);if(!g)return;a(d.item,u.consumable);const m=u.mapper.toViewPosition(d.range.start);u.mapper.bindElements(d.item,g),u.writer.insert(m,g),u.convertAttributes(d.item),ju(g,d.item.getChildren(),u,{reconversion:d.reconversion})}}(i,Ru(n)),{priority:e.converterPriority||"normal"}),(n.children||n.attributes.length)&&r.on("reduceChanges",zu(n),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){const n=Lu(e.model),i=Ao(e.view,"container");return n.children=!0,r=>{if(r._conversionApi.schema.checkChild(n.name,"$text"))throw new M("conversion-element-to-structure-disallowed-text",r,{elementName:n.name});var s,a;r.on(`insert:${n.name}`,(s=i,a=Ru(n),(c,d,u)=>{if(!a(d.item,u.consumable,{preflight:!0}))return;const g=new Map;u.writer._registerSlotFactory(function(E,T,I){return(N,L="children")=>{const j=N.createContainerElement("$slot");let K=null;if(L==="children")K=Array.from(E.getChildren());else{if(typeof L!="function")throw new M("conversion-slot-mode-unknown",I.dispatcher,{modeOrFilter:L});K=Array.from(E.getChildren()).filter(pt=>L(pt))}return T.set(j,K),j}}(d.item,g,u));const m=s(d.item,u,d);if(u.writer._clearSlotFactory(),!m)return;(function(E,T,I){const N=Array.from(T.values()).flat(),L=new Set(N);if(L.size!=N.length)throw new M("conversion-slot-filter-overlap",I.dispatcher,{element:E});if(L.size!=E.childCount)throw new M("conversion-slot-filter-incomplete",I.dispatcher,{element:E})})(d.item,g,u),a(d.item,u.consumable);const y=u.mapper.toViewPosition(d.range.start);u.mapper.bindElements(d.item,m),u.writer.insert(y,m),u.convertAttributes(d.item),function(E,T,I,N){I.mapper.on("modelToViewPosition",K,{priority:"highest"});let L=null,j=null;for([L,j]of T)ju(E,j,I,N),I.writer.move(I.writer.createRangeIn(L),I.writer.createPositionBefore(L)),I.writer.remove(L);function K(pt,Et){const Tt=Et.modelPosition.nodeAfter,Yt=j.indexOf(Tt);Yt<0||(Et.viewPosition=Et.mapper.findPositionIn(L,Yt))}I.mapper.off("modelToViewPosition",K)}(m,g,u,{reconversion:d.reconversion})}),{priority:e.converterPriority||"normal"}),r.on("reduceChanges",zu(n),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=qn(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Ao(e.view[s],"attribute");else e.view=Ao(e.view,"attribute");const r=Ou(e);return s=>{s.on(i,function(a){return(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const g=a(d.attributeOldValue,u,d),m=a(d.attributeNewValue,u,d);if(!g&&!m)return;u.consumable.consume(d.item,c.name);const y=u.writer,E=y.document.selection;if(d.item instanceof Ye||d.item instanceof Ce)y.wrap(E.getFirstRange(),m);else{let T=u.mapper.toViewRange(d.range);d.attributeOldValue!==null&&g&&(T=y.unwrap(T,g)),d.attributeNewValue!==null&&m&&y.wrap(T,m)}}}(r),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=qn(e);let n=e.model;typeof n=="string"&&(n={key:n});let i=`attribute:${n.key}`;if(n.name&&(i+=":"+n.name),n.values)for(const s of n.values)e.view[s]=Bu(e.view[s]);else e.view=Bu(e.view);const r=Ou(e);return s=>{var a;s.on(i,(a=r,(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const g=a(d.attributeOldValue,u,d),m=a(d.attributeNewValue,u,d);if(!g&&!m)return;u.consumable.consume(d.item,c.name);const y=u.mapper.toViewElement(d.item),E=u.writer;if(!y)throw new M("conversion-attribute-to-attribute-on-text",u.dispatcher,d);if(d.attributeOldValue!==null&&g)if(g.key=="class"){const T=Zt(g.value);for(const I of T)E.removeClass(I,y)}else if(g.key=="style"){const T=Object.keys(g.value);for(const I of T)E.removeStyle(I,y)}else E.removeAttribute(g.key,y);if(d.attributeNewValue!==null&&m)if(m.key=="class"){const T=Zt(m.value);for(const I of T)E.addClass(I,y)}else if(m.key=="style"){const T=Object.keys(m.value);for(const I of T)E.setStyle(I,m.value[I],y)}else E.setAttribute(m.key,m.value,y)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){const n=Ao(e.view,"ui");return i=>{var r;i.on(`addMarker:${e.model}`,(r=n,(s,a,c)=>{a.isOpening=!0;const d=r(a,c);a.isOpening=!1;const u=r(a,c);if(!d||!u)return;const g=a.markerRange;if(g.isCollapsed&&!c.consumable.consume(g,s.name))return;for(const E of g)if(!c.consumable.consume(E.item,s.name))return;const m=c.mapper,y=c.writer;y.insert(m.toViewPosition(g.start),d),c.mapper.bindElementToMarker(d,a.markerName),g.isCollapsed||(y.insert(m.toViewPosition(g.end),u),c.mapper.bindElementToMarker(u,a.markerName)),s.stop()}),{priority:e.converterPriority||"normal"}),i.on(`removeMarker:${e.model}`,(s,a,c)=>{const d=c.mapper.markerNameToElements(a.markerName);if(d){for(const u of d)c.mapper.unbindElementFromMarkerName(u,a.markerName),c.writer.clear(c.writer.createRangeOn(u),u);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}},{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var i;n.on(`addMarker:${e.model}`,(i=e.view,(r,s,a)=>{if(!s.item||!(s.item instanceof Ye||s.item instanceof Ce||s.item.is("$textProxy")))return;const c=la(i,s,a);if(!c||!a.consumable.consume(s.item,r.name))return;const d=a.writer,u=Nu(d,c),g=d.document.selection;if(s.item instanceof Ye||s.item instanceof Ce)d.wrap(g.getFirstRange(),u);else{const m=a.mapper.toViewRange(s.range),y=d.wrap(m,u);for(const E of y.getItems())if(E.is("attributeElement")&&E.isSimilar(u)){a.mapper.bindElementToMarker(E,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on(`addMarker:${e.model}`,function(r){return(s,a,c)=>{if(!a.item||!(a.item instanceof It))return;const d=la(r,a,c);if(!d||!c.consumable.test(a.item,s.name))return;const u=c.mapper.toViewElement(a.item);if(u&&u.getCustomProperty("addHighlight")){c.consumable.consume(a.item,s.name);for(const g of R._createIn(a.item))c.consumable.consume(g.item,s.name);u.getCustomProperty("addHighlight")(u,d,c.writer),c.mapper.bindElementToMarker(u,a.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on(`removeMarker:${e.model}`,function(r){return(s,a,c)=>{if(a.markerRange.isCollapsed)return;const d=la(r,a,c);if(!d)return;const u=Nu(c.writer,d),g=c.mapper.markerNameToElements(a.markerName);if(g){for(const m of g)c.mapper.unbindElementFromMarkerName(m,a.markerName),m.is("attributeElement")?c.writer.unwrap(c.writer.createRangeOn(m),u):m.getCustomProperty("removeHighlight")(m,d.id,c.writer);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){e=qn(e);const n=e.model;let i=e.view;return i||(i=r=>({group:n,name:r.substr(e.model.length+1)})),r=>{var s;r.on(`addMarker:${n}`,(s=i,(a,c,d)=>{const u=s(c.markerName,d);if(!u)return;const g=c.markerRange;d.consumable.consume(g,a.name)&&(Pu(g,!1,d,c,u),Pu(g,!0,d,c,u),a.stop())}),{priority:e.converterPriority||"normal"}),r.on(`removeMarker:${n}`,function(a){return(c,d,u)=>{const g=a(d.markerName,u);if(!g)return;const m=u.mapper.markerNameToElements(d.markerName);if(m){for(const E of m)u.mapper.unbindElementFromMarkerName(E,d.markerName),E.is("containerElement")?(y(`data-${g.group}-start-before`,E),y(`data-${g.group}-start-after`,E),y(`data-${g.group}-end-before`,E),y(`data-${g.group}-end-after`,E)):u.writer.clear(u.writer.createRangeOn(E),E);u.writer.clearClonedElementsGroup(d.markerName),c.stop()}function y(E,T){if(T.hasAttribute(E)){const I=new Set(T.getAttribute(E).split(","));I.delete(g.name),I.size==0?u.writer.removeAttribute(E,T):u.writer.setAttribute(E,Array.from(I).join(","),T)}}}}(i),{priority:e.converterPriority||"normal"})}}(t))}}function Nu(o,t){const e=o.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function Pu(o,t,e,n,i){const r=t?o.start:o.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let c,d;t&&s||!t&&!a?(c=s,d=!0):(c=a,d=!1);const u=e.mapper.toViewElement(c);if(u)return void function(g,m,y,E,T,I){const N=`data-${I.group}-${m?"start":"end"}-${y?"before":"after"}`,L=g.hasAttribute(N)?g.getAttribute(N).split(","):[];L.unshift(I.name),E.writer.setAttribute(N,L.join(","),g),E.mapper.bindElementToMarker(g,T.markerName)}(u,t,d,e,n,i)}(function(c,d,u,g,m){const y=`${m.group}-${d?"start":"end"}`,E=m.name?{name:m.name}:null,T=u.writer.createUIElement(y,E);u.writer.insert(c,T),u.mapper.bindElementToMarker(T,g.markerName)})(e.mapper.toViewPosition(r),t,e,n,i)}function Lu(o){return typeof o=="string"&&(o={name:o}),o.attributes?Array.isArray(o.attributes)||(o.attributes=[o.attributes]):o.attributes=[],o.children=!!o.children,o}function Ao(o,t){return typeof o=="function"?o:(e,n)=>function(i,r,s){typeof i=="string"&&(i={name:i});let a;const c=r.writer,d=Object.assign({},i.attributes);if(s=="container")a=c.createContainerElement(i.name,d);else if(s=="attribute"){const u={priority:i.priority||Hn.DEFAULT_PRIORITY};a=c.createAttributeElement(i.name,d,u)}else a=c.createUIElement(i.name,d);if(i.styles){const u=Object.keys(i.styles);for(const g of u)c.setStyle(g,i.styles[g],a)}if(i.classes){const u=i.classes;if(typeof u=="string")c.addClass(u,a);else for(const g of u)c.addClass(g,a)}return a}(o,n,t)}function Ou(o){return o.model.values?(t,e,n)=>{const i=o.view[t];return i?i(t,e,n):null}:o.view}function Bu(o){return typeof o=="string"?t=>({key:o,value:t}):typeof o=="object"?o.value?()=>o:t=>({key:o.key,value:t}):o}function la(o,t,e){const n=typeof o=="function"?o(t,e):o;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function zu(o){const t=function(e){return(n,i)=>{if(!n.is("element",e.name))return!1;if(i.type=="attribute"){if(e.attributes.includes(i.attributeKey))return!0}else if(e.children)return!0;return!1}}(o);return(e,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.type=="attribute"?r.range.start.nodeAfter:r.position.parent;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=H._createBefore(s);i.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else i.push(r)}n.changes=i}}function Ru(o){return(t,e,n={})=>{const i=["insert"];for(const r of o.attributes)t.hasAttribute(r)&&i.push(`attribute:${r}`);return!!i.every(r=>e.test(t,r))&&(n.preflight||i.forEach(r=>e.consume(t,r)),!0)}}function ju(o,t,e,n){for(const i of t)Kv(o.root,i,e,n)||e.convertItem(i)}function Kv(o,t,e,n){const{writer:i,mapper:r}=e;if(!n.reconversion)return!1;const s=r.toViewElement(t);return!(!s||s.root==o)&&!!e.canReuseView(s)&&(i.move(i.createRangeOn(s),r.toViewPosition(H._createBefore(t))),!0)}function Yv(o,t,{preflight:e}={}){return e?t.test(o,"insert"):t.consume(o,"insert")}function Fu(o){const{schema:t,document:e}=o.model;for(const n of e.getRootNames()){const i=e.getRoot(n);if(i.isEmpty&&!t.checkChild(i,"$text")&&t.checkChild(i,"paragraph"))return o.insertElement("paragraph",i),!0}return!1}function Vu(o,t,e){const n=e.createContext(o);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function Hu(o,t){const e=t.createElement("paragraph");return t.insert(e,o),t.createPositionAt(e,0)}class Qv extends Mu{elementToElement(t){return this.add($u(t))}elementToAttribute(t){return this.add(function(e){e=qn(e),Uu(e);const n=qu(e,!1),i=da(e.view),r=i?`element:${i}`:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=qn(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(e)),Uu(e,n);const i=qu(e,!0);return r=>{r.on("element",i,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){const n=function(i){return(r,s)=>{const a=typeof i=="string"?i:i(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(e.model);return $u({...e,model:n})}(t))}dataToMarker(t){return this.add(function(e){e=qn(e),e.model||(e.model=s=>s?e.view+":"+s:e.view);const n={view:e.view,model:e.model},i=ua(Wu(n,"start")),r=ua(Wu(n,"end"));return s=>{s.on(`element:${e.view}-start`,i,{priority:e.converterPriority||"normal"}),s.on(`element:${e.view}-end`,r,{priority:e.converterPriority||"normal"});const a=ot.get("low"),c=ot.get("highest"),d=ot.get(e.converterPriority)/c;s.on("element",function(u){return(g,m,y)=>{const E=`data-${u.view}`;function T(I,N){for(const L of N){const j=u.model(L,y),K=y.writer.createElement("$marker",{"data-name":j});y.writer.insert(K,I),m.modelCursor.isEqual(I)?m.modelCursor=m.modelCursor.getShiftedBy(1):m.modelCursor=m.modelCursor._getTransformedByInsertion(I,1),m.modelRange=m.modelRange._getTransformedByInsertion(I,1)[0]}}(y.consumable.test(m.viewItem,{attributes:E+"-end-after"})||y.consumable.test(m.viewItem,{attributes:E+"-start-after"})||y.consumable.test(m.viewItem,{attributes:E+"-end-before"})||y.consumable.test(m.viewItem,{attributes:E+"-start-before"}))&&(m.modelRange||Object.assign(m,y.convertChildren(m.viewItem,m.modelCursor)),y.consumable.consume(m.viewItem,{attributes:E+"-end-after"})&&T(m.modelRange.end,m.viewItem.getAttribute(E+"-end-after").split(",")),y.consumable.consume(m.viewItem,{attributes:E+"-start-after"})&&T(m.modelRange.end,m.viewItem.getAttribute(E+"-start-after").split(",")),y.consumable.consume(m.viewItem,{attributes:E+"-end-before"})&&T(m.modelRange.start,m.viewItem.getAttribute(E+"-end-before").split(",")),y.consumable.consume(m.viewItem,{attributes:E+"-start-before"})&&T(m.modelRange.start,m.viewItem.getAttribute(E+"-start-before").split(",")))}}(n),{priority:a+d})}}(t))}}function $u(o){const t=ua(o=qn(o)),e=da(o.view),n=e?`element:${e}`:"element";return i=>{i.on(n,t,{priority:o.converterPriority||"normal"})}}function da(o){return typeof o=="string"?o:typeof o=="object"&&typeof o.name=="string"?o.name:null}function ua(o){const t=new Ue(o.view);return(e,n,i)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!i.consumable.test(n.viewItem,s))return;const a=function(c,d,u){return c instanceof Function?c(d,u):u.writer.createElement(c)}(o.model,n.viewItem,i);a&&i.safeInsert(a,n.modelCursor)&&(i.consumable.consume(n.viewItem,s),i.convertChildren(n.viewItem,a),i.updateConversionResult(a,n))}}function Uu(o,t=null){const e=t===null||(r=>r.getAttribute(t)),n=typeof o.model!="object"?o.model:o.model.key,i=typeof o.model!="object"||o.model.value===void 0?e:o.model.value;o.model={key:n,value:i}}function qu(o,t){const e=new Ue(o.view);return(n,i,r)=>{if(!i.modelRange&&t)return;const s=e.match(i.viewItem);if(!s||(function(u,g){const m=typeof u=="function"?u(g):u;return typeof m=="object"&&!da(m)?!1:!m.classes&&!m.attributes&&!m.styles}(o.view,i.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(i.viewItem,s.match)))return;const a=o.model.key,c=typeof o.model.value=="function"?o.model.value(i.viewItem,r):o.model.value;if(c===null)return;i.modelRange||Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor)),function(u,g,m,y){let E=!1;for(const T of Array.from(u.getItems({shallow:m})))y.schema.checkAttribute(T,g.key)&&(E=!0,T.hasAttribute(g.key)||y.writer.setAttribute(g.key,g.value,T));return E}(i.modelRange,{key:a,value:c},t,r)&&(r.consumable.test(i.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(i.viewItem,s.match))}}function Wu(o,t){return{view:`${o.view}-${t}`,model:(e,n)=>{const i=e.getAttribute("name"),r=o.model(i,n);return n.writer.createElement("$marker",{"data-name":r})}}}class Zv extends St(){constructor(t,e){super(),this.model=t,this.view=new Rv(e),this.mapper=new xu,this.downcastDispatcher=new Du({mapper:this.mapper,schema:t.schema});const n=this.model.document,i=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(i,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(c,d)=>{const u=d.newSelection,g=[];for(const y of u.getRanges())g.push(a.toModelRange(y));const m=s.createSelection(g,{backward:u.isBackward});m.isEqual(s.document.selection)||s.change(y=>{y.setSelection(m)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,c)=>{if(!c.consumable.consume(a.item,s.name))return;const d=c.writer,u=c.mapper.toViewPosition(a.range.start),g=d.createText(a.item.data);d.insert(u,g)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,c)=>{c.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||c.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,c)=>{const d=c.mapper.toViewPosition(a.position),u=a.position.getShiftedBy(a.length),g=c.mapper.toViewPosition(u,{isPhantom:!0}),m=c.writer.createRange(d,g),y=c.writer.remove(m.getTrimmed());for(const E of c.writer.createRangeIn(y).getItems())c.mapper.unbindViewElement(E,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=c.writer,u=d.document.selection;for(const g of u.getRanges())g.isCollapsed&&g.end.parent.isAttached()&&c.writer.mergeAttributes(g.start);d.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=a.selection;if(d.isCollapsed||!c.consumable.consume(d,"selection"))return;const u=[];for(const g of d.getRanges())u.push(c.mapper.toViewRange(g));c.writer.setSelection(u,{backward:d.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,c)=>{const d=a.selection;if(!d.isCollapsed||!c.consumable.consume(d,"selection"))return;const u=c.writer,g=d.getFirstPosition(),m=c.mapper.toViewPosition(g),y=u.breakAttributes(m);u.setSelection(y)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new qd(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new M("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}class vo{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Jv(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&e.attributes.push(s);const i=t.getClassNames();for(const s of i)e.classes.push(s);const r=t.getStyleNames();for(const s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new vo),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,vo.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=vo.createFrom(n,e);return e}}const _r=["attributes","classes","styles"];class Jv{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e of _r)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e of _r)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e of _r)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e of _r)e in t&&this._revert(e,t[e])}_add(t,e){const n=se(e)?e:[e],i=this._consumables[t];for(const r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new M("viewconsumable-invalid-attribute",this);if(i.set(r,!0),t==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!0)}}_test(t,e){const n=se(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){const s=i.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(t,e){const n=se(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(i.set(r,!1),t=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))i.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){const n=se(e)?e:[e],i=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style")i.get(r)===!1&&i.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class Xv extends St(){constructor(){super(),this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Wn(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Wn(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new M("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new M("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:"is"in t&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e){if(t instanceof H){const n=t.nodeBefore,i=t.nodeAfter;if(!(n instanceof It))throw new M("schema-check-merge-no-element-before",this);if(!(i instanceof It))throw new M("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,i])=>{if(!i)return;const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,i])=>{const r=t(n,i);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof H?e=t.parent:e=(t instanceof R?[t]:Array.from(t.getRanges())).reduce((n,i)=>{const r=i.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new Pt("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const i of n)for(const r of i)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new R(t);let n,i;const r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new Ke({boundaries:R._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(i=new Ke({boundaries:R._createIn(r),startPosition:t}));for(const s of function*(a,c){let d=!1;for(;!d;){if(d=!0,a){const u=a.next();u.done||(d=!1,yield{walker:a,value:u.value})}if(c){const u=c.next();u.done||(d=!1,yield{walker:c,value:u.value})}}}(n,i)){const a=s.walker==n?"elementEnd":"elementStart",c=s.value;if(c.type==a&&this.isObject(c.item))return R._createOn(c.item);if(this.checkChild(c.nextPosition,"$text"))return new R(c.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){const i=n.model;for(const[r,s]of Object.entries(e))i.schema.checkAttribute(t,r)&&n.setAttribute(r,s,t)}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))Gu(this,n,e);else{const i=R._createIn(n).getPositions();for(const r of i)Gu(this,r.nodeBefore||r.parent,e)}}getAttributesWithProperty(t,e,n){const i={};for(const[r,s]of t.getAttributes()){const a=this.getAttributeProperties(r);a[e]!==void 0&&(n!==void 0&&n!==a[e]||(i[r]=s))}return i}createContext(t){return new Wn(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const i of n)t[i]=tC(e[i],i);for(const i of n)eC(t,i);for(const i of n)nC(t,i);for(const i of n)iC(t,i);for(const i of n)oC(t,i),rC(t,i);for(const i of n)sC(t,i),aC(t,i),cC(t,i);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const i=e.getItem(n);if(t.allowIn.includes(i.name)){if(n==0)return!0;{const r=this.getDefinition(i);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,i=t.start;for(const r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(R._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(i)||(yield new R(n,i)),n=H._createAfter(r)),i=H._createAfter(r);n.isEqual(i)||(yield new R(n,i))}}class Wn{constructor(t){if(t instanceof Wn)return t;let e;e=typeof t=="string"?[t]:Array.isArray(t)?t:t.getAncestors({includeSelf:!0}),this._items=e.map(dC)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new Wn([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function tC(o,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)i[a]=!!r[a]}}(o,e),Gn(o,e,"allowIn"),Gn(o,e,"allowContentOf"),Gn(o,e,"allowWhere"),Gn(o,e,"allowAttributes"),Gn(o,e,"allowAttributesOf"),Gn(o,e,"allowChildren"),Gn(o,e,"inheritTypesFrom"),function(n,i){for(const r of n){const s=r.inheritAllFrom;s&&(i.allowContentOf.push(s),i.allowWhere.push(s),i.allowAttributesOf.push(s),i.inheritTypesFrom.push(s))}}(o,e),e}function eC(o,t){const e=o[t];for(const n of e.allowChildren){const i=o[n];i&&i.allowIn.push(t)}e.allowChildren.length=0}function nC(o,t){for(const e of o[t].allowContentOf)o[e]&&lC(o,e).forEach(n=>{n.allowIn.push(t)});delete o[t].allowContentOf}function iC(o,t){for(const e of o[t].allowWhere){const n=o[e];if(n){const i=n.allowIn;o[t].allowIn.push(...i)}}delete o[t].allowWhere}function oC(o,t){for(const e of o[t].allowAttributesOf){const n=o[e];if(n){const i=n.allowAttributes;o[t].allowAttributes.push(...i)}}delete o[t].allowAttributesOf}function rC(o,t){const e=o[t];for(const n of e.inheritTypesFrom){const i=o[n];if(i){const r=Object.keys(i).filter(s=>s.startsWith("is"));for(const s of r)s in e||(e[s]=i[s])}}delete e.inheritTypesFrom}function sC(o,t){const e=o[t],n=e.allowIn.filter(i=>o[i]);e.allowIn=Array.from(new Set(n))}function aC(o,t){const e=o[t];for(const n of e.allowIn)o[n].allowChildren.push(t)}function cC(o,t){const e=o[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function Gn(o,t,e){for(const n of o){const i=n[e];typeof i=="string"?t[e].push(i):Array.isArray(i)&&t[e].push(...i)}}function lC(o,t){const e=o[t];return(n=o,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(e.name));var n}function dC(o){return typeof o=="string"||o.is("documentFragment")?{name:typeof o=="string"?o:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:o.is("element")?o.name:"$text",*getAttributeKeys(){yield*o.getAttributeKeys()},getAttribute:t=>o.getAttribute(t)}}function Gu(o,t,e){for(const n of t.getAttributeKeys())o.checkAttribute(t,n)||e.removeAttribute(n,t)}class uC extends at(){constructor(t){super(),this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi={...t,consumable:null,writer:null,store:null,convertItem:(e,n)=>this._convertItem(e,n),convertChildren:(e,n)=>this._convertChildren(e,n),safeInsert:(e,n)=>this._safeInsert(e,n),updateConversionResult:(e,n)=>this._updateConversionResult(e,n),splitToAllowedParent:(e,n)=>this._splitToAllowedParent(e,n),getSplitParts:e=>this._getSplitParts(e),keepEmptyElement:e=>this._keepEmptyElement(e)}}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,a){let c;for(const d of new Wn(s)){const u={};for(const m of d.getAttributeKeys())u[m]=d.getAttribute(m);const g=a.createElement(d.name,u);c&&a.insert(g,c),c=H._createAt(g,0)}return c}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=vo.createFrom(t),this.conversionApi.store={};const{modelRange:i}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(i){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,a){const c=new Set,d=new Map,u=R._createIn(s).getItems();for(const g of u)g.is("element","$marker")&&c.add(g);for(const g of c){const m=g.getAttribute("data-name"),y=a.createPositionBefore(g);d.has(m)?d.get(m).end=y.clone():d.set(m,new R(y.clone())),a.remove(g)}return d}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){const n={viewItem:t,modelCursor:e,modelRange:null};if(t.is("element")?this.fire(`element:${t.name}`,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof R))throw new M("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:H._createAt(e,0);const i=new R(n);for(const r of Array.from(t.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof R&&(i.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),i=this.conversionApi.writer;e.modelRange||(e.modelRange=i.createRange(i.createPositionBefore(t),i.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(t);e.modelCursor=r?i.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:i}=this.conversionApi;let r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return Vu(e,t,n)?{position:Hu(e,i)}:null;const s=this.conversionApi.writer.split(e,r),a=[];for(const d of s.range.getWalker())if(d.type=="elementEnd")a.push(d.item);else{const u=a.pop(),g=d.item;this._registerSplitPair(u,g)}const c=s.range.end.parent;return this._cursorParents.set(t,c),{position:s.position,cursorParent:c}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}class hC{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class gC{constructor(t){this.skipComments=!0,this.domParser=new DOMParser,this.domConverter=new fr(t,{renderingMode:"data"}),this.htmlWriter=new hC}toData(t){const e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e,{skipComments:this.skipComments})}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),i=e.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class pC extends at(){constructor(t,e){super(),this.model=t,this.mapper=new xu,this.downcastDispatcher=new Du({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,i,r)=>{if(!r.consumable.consume(i.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(i.range.start),c=s.createText(i.item.data);s.insert(a,c)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,r)=>{r.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||r.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new uC({schema:t.schema}),this.viewDocument=new ur(e),this.stylesProcessor=e,this.htmlProcessor=new gC(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Gd(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:r,consumable:s,writer:a})=>{let c=i.modelCursor;if(!s.test(i.viewItem))return;if(!r.checkChild(c,"$text")){if(!Vu(c,"$text",r)||i.viewItem.data.trim().length==0)return;const u=c.nodeBefore;c=Hu(c,a),u&&u.is("element","$marker")&&(a.move(a.createRangeOn(u),c),c=a.createPositionAfter(u))}s.consume(i.viewItem);const d=a.createText(i.viewItem.data);a.insert(d,c),i.modelRange=a.createRange(c,c.getShiftedBy(d.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,r)=>{if(!i.modelRange&&r.consumable.consume(i.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(i.viewItem,i.modelCursor);i.modelRange=s,i.modelCursor=a}},{priority:"lowest"}),St().prototype.decorate.call(this,"init"),St().prototype.decorate.call(this,"set"),St().prototype.decorate.call(this,"get"),St().prototype.decorate.call(this,"toView"),St().prototype.decorate.call(this,"toModel"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Fu)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new M("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const r=R._createIn(t),s=new $n(n);this.mapper.bindElements(t,s);const a=t.is("documentFragment")?t.markers:function(c){const d=[],u=c.root.document;if(!u)return new Map;const g=R._createIn(c);for(const m of u.model.markers){const y=m.getRange(),E=y.isCollapsed,T=y.start.isEqual(g.start)||y.end.isEqual(g.end);if(E&&T)d.push([m.name,y]);else{const I=g.getIntersection(y);I&&d.push([m.name,I])}}return d.sort(([m,y],[E,T])=>{if(y.end.compareWith(T.start)!=="after")return 1;if(y.start.compareWith(T.end)!=="before")return-1;switch(y.start.compareWith(T.start)){case"before":return 1;case"after":return-1;default:switch(y.end.compareWith(T.end)){case"before":return 1;case"after":return-1;default:return E.localeCompare(m)}}}),new Map(d)}(t);return this.downcastDispatcher.convert(r,a,i,e),s}init(t){if(this.model.document.version)throw new M("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new M("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(e)){const r=this.model.document.getRoot(i);n.insert(this.parse(e[i],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new M("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);i.remove(i.createRangeIn(s)),i.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}class fC{constructor(t,e){this._helpers=new Map,this._downcast=Zt(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Zt(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new M("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new M("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of ha(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of ha(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of ha(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new M("conversion-group-exists",this);const i=n?new Gv(e):new Qv(e);this._helpers.set(t,i)}}function*ha(o){if(o.model.values)for(const t of o.model.values){const e={key:o.model.key,value:t},n=o.view[t],i=o.upcastAlso?o.upcastAlso[t]:void 0;yield*Ku(e,n,i)}else yield*Ku(o.model,o.view,o.upcastAlso)}function*Ku(o,t,e){if(yield{model:o,view:t},e)for(const n of Zt(e))yield{model:o,view:n}}class ye{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t,e){return new this(t.baseVersion)}}function ga(o,t){const e=Qu(t),n=e.reduce((s,a)=>s+a.offsetSize,0),i=o.parent;Eo(o);const r=o.index;return i._insertChild(r,e),yo(i,r+e.length),yo(i,r),new R(o,o.getShiftedBy(n))}function Yu(o){if(!o.isFlat)throw new M("operation-utils-remove-range-not-flat",this);const t=o.start.parent;Eo(o.start),Eo(o.end);const e=t._removeChildren(o.start.index,o.end.index-o.start.index);return yo(t,o.start.index),e}function Co(o,t){if(!o.isFlat)throw new M("operation-utils-move-range-not-flat",this);const e=Yu(o);return ga(t=t._getTransformedByDeletion(o.start,o.end.offset-o.start.offset),e)}function Qu(o){const t=[];(function e(n){if(typeof n=="string")t.push(new Pt(n));else if(n instanceof Pe)t.push(new Pt(n.data,n.getAttributes()));else if(n instanceof vi)t.push(n);else if(ne(n))for(const i of n)e(i)})(o);for(let e=1;e<t.length;e++){const n=t[e],i=t[e-1];n instanceof Pt&&i instanceof Pt&&Zu(n,i)&&(t.splice(e-1,2,new Pt(i.data+n.data,i.getAttributes())),e--)}return t}function yo(o,t){const e=o.getChild(t-1),n=o.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&Zu(e,n)){const i=new Pt(e.data+n.data,e.getAttributes());o._removeChildren(t-1,2),o._insertChild(t-1,i)}}function Eo(o){const t=o.textNode,e=o.parent;if(t){const n=o.offset-t.startOffset,i=t.index;e._removeChildren(i,1);const r=new Pt(t.data.substr(0,n),t.getAttributes()),s=new Pt(t.data.substr(n),t.getAttributes());e._insertChild(i,[r,s])}}function Zu(o,t){const e=o.getAttributes(),n=t.getAttributes();for(const i of e){if(i[1]!==t.getAttribute(i[0]))return!1;n.next()}return n.next().done}class Dt extends ye{constructor(t,e,n,i){super(i),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new Dt(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Dt(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new M("move-operation-nodes-do-not-exist",this);if(t===e&&n<i&&i<n+this.howMany)throw new M("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Qt(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new M("move-operation-node-into-itself",this)}}_execute(){Co(R._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=H.fromJSON(t.sourcePosition,e),i=H.fromJSON(t.targetPosition,e);return new this(n,t.howMany,i,t.baseVersion)}}class Jt extends ye{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new ko(Qu(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new ko([...this.nodes].map(n=>n._clone(!0))),e=new Jt(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new H(t,[0]);return new Dt(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new M("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new ko([...t].map(e=>e._clone(!0))),ga(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const r of t.nodes)r.name?n.push(It.fromJSON(r)):n.push(Pt.fromJSON(r));const i=new Jt(H.fromJSON(t.position,e),n,t.baseVersion);return i.shouldReceiveAttributes=t.shouldReceiveAttributes,i}}class he extends ye{constructor(t,e,n,i,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=i}get type(){return"marker"}clone(){return new he(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new he(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){this.newRange?this._markers._set(this.name,this.newRange,!0,this.affectsData):this._markers._remove(this.name)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new he(t.name,t.oldRange?R.fromJSON(t.oldRange,e):null,t.newRange?R.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}const Ju=function(o,t){return wu(o,t)};class qt extends ye{constructor(t,e,n,i,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new qt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new qt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new M("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Ju(t.getAttribute(this.key),this.oldValue))throw new M("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new M("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){Ju(this.oldValue,this.newValue)||function(t,e,n){Eo(t.start),Eo(t.end);for(const i of t.getItems({shallow:!0})){const r=i.is("$textProxy")?i.textNode:i;n!==null?r._setAttribute(e,n):r._removeAttribute(e),yo(r.parent,r.index)}yo(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new qt(R.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Xt extends ye{get type(){return"noop"}clone(){return new Xt(this.baseVersion)}getReversed(){return new Xt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}class ge extends ye{constructor(t,e,n,i){super(i),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new ge(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new ge(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof It))throw new M("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new M("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new ge(H.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class nn extends ye{constructor(t,e,n,i,r){super(r),this.root=t,this.key=e,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new nn(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new nn(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new M("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new M("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new M("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new M("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new nn(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class $t extends ye{constructor(t,e,n,i,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new H(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new R(this.sourcePosition,t)}clone(){return new $t(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new H(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new Lt(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new M("merge-operation-source-position-invalid",this);if(!e.parent)throw new M("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new M("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;Co(R._createIn(t),this.targetPosition),Co(R._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=H.fromJSON(t.sourcePosition,e),i=H.fromJSON(t.targetPosition,e),r=H.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,i,r,t.baseVersion)}}class Lt extends ye{constructor(t,e,n,i,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new H(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new R(this.splitPosition,t)}clone(){return new Lt(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new H(t,[0]);return new $t(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new M("split-operation-position-invalid",this);if(!t.parent)throw new M("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new M("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new M("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)Co(R._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();ga(this.insertionPosition,e)}Co(new R(H._createAt(t,this.splitPosition.offset),H._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new H(t.root,e,"toPrevious")}static fromJSON(t,e){const n=H.fromJSON(t.splitPosition,e),i=H.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?H.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,i,r,t.baseVersion)}}const Oe={};Oe[qt.className]=qt,Oe[Jt.className]=Jt,Oe[he.className]=he,Oe[Dt.className]=Dt,Oe[Xt.className]=Xt,Oe[ye.className]=ye,Oe[ge.className]=ge,Oe[nn.className]=nn,Oe[Lt.className]=Lt,Oe[$t.className]=$t;class mC{static fromJSON(t,e){return Oe[t.__className].fromJSON(t,e)}}const pa=new Map;function xt(o,t,e){let n=pa.get(o);n||(n=new Map,pa.set(o,n)),n.set(t,e)}function bC(o){return[o]}function Xu(o,t,e={}){const n=function(i,r){const s=pa.get(i);return s&&s.has(r)?s.get(r):bC}(o.constructor,t.constructor);try{return n(o=o.clone(),t,e)}catch(i){throw i}}function kC(o,t,e){o=o.slice(),t=t.slice();const n=new wC(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(o),n.setOriginalOperations(t);const i=n.originalOperations;if(o.length==0||t.length==0)return{operationsA:o,operationsB:t,originalOperations:i};const r=new WeakMap;for(const c of o)r.set(c,0);const s={nextBaseVersionA:o[o.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:o.length,originalOperationsBCount:t.length};let a=0;for(;a<o.length;){const c=o[a],d=r.get(c);if(d==t.length){a++;continue}const u=t[d],g=Xu(c,u,n.getContext(c,u,!0)),m=Xu(u,c,n.getContext(u,c,!1));n.updateRelation(c,u),n.setOriginalOperations(g,c),n.setOriginalOperations(m,u);for(const y of g)r.set(y,d+m.length);o.splice(a,1,...g),t.splice(d,1,...m)}if(e.padWithNoOps){const c=o.length-s.originalOperationsACount,d=t.length-s.originalOperationsBCount;eh(o,d-c),eh(t,c-d)}return th(o,s.nextBaseVersionB),th(t,s.nextBaseVersionA),{operationsA:o,operationsB:t,originalOperations:i}}class wC{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const i of t)this.originalOperations.set(i,n||i)}updateRelation(t,e){if(t instanceof Dt)e instanceof $t?t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter"):e instanceof Dt&&(t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter"));else if(t instanceof Lt){if(e instanceof $t)t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");else if(e instanceof Dt)if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=R._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const i=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:i,offset:r})}}}else if(t instanceof $t)e instanceof $t?(t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement")):e instanceof Lt&&t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource");else if(t instanceof he){const n=t.newRange;if(!n)return;if(e instanceof Dt){const i=R._createFromPositionAndShift(e.sourcePosition,e.howMany),r=i.containsPosition(n.start)||i.start.isEqual(n.start),s=i.containsPosition(n.end)||i.end.isEqual(n.end);!r&&!s||i.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()})}else if(e instanceof $t){const i=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),a=n.end.isEqual(e.sourcePosition);(i||r||s||a)&&this._setRelation(t,e,{wasInLeftElement:i,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a})}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),i=this._history.getUndoneOperation(n);if(!i)return null;const r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(i)||null}_setRelation(t,e,n){const i=this.originalOperations.get(t),r=this.originalOperations.get(e);let s=this._relations.get(i);s||(s=new Map,this._relations.set(i,s)),s.set(r,n)}}function th(o,t){for(const e of o)e.baseVersion=t++}function eh(o,t){for(let e=0;e<t;e++)o.push(new Xt(0))}function nh(o,t,e){const n=o.nodes.getNode(0).getAttribute(t);if(n==e)return null;const i=new R(o.position,o.position.getShiftedBy(o.howMany));return new qt(i,t,n,e,0)}function ih(o,t){return o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function Ci(o,t){const e=[];for(let n=0;n<o.length;n++){const i=o[n],r=new Dt(i.start,i.end.offset-i.start.offset,t,0);e.push(r);for(let s=n+1;s<o.length;s++)o[s]=o[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}xt(qt,qt,(o,t,e)=>{if(o.key===t.key&&o.range.start.hasSameParentAs(t.range.start)){const n=o.range.getDifference(t.range).map(r=>new qt(r,o.key,o.oldValue,o.newValue,0)),i=o.range.getIntersection(t.range);return i&&e.aIsStrong&&n.push(new qt(i,t.key,t.newValue,o.newValue,0)),n.length==0?[new Xt(0)]:n}return[o]}),xt(qt,Jt,(o,t)=>{if(o.range.start.hasSameParentAs(t.position)&&o.range.containsPosition(t.position)){const e=o.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new qt(n,o.key,o.oldValue,o.newValue,o.baseVersion));if(t.shouldReceiveAttributes){const n=nh(t,o.key,o.oldValue);n&&e.unshift(n)}return e}return o.range=o.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[o]}),xt(qt,$t,(o,t)=>{const e=[];o.range.start.hasSameParentAs(t.deletionPosition)&&(o.range.containsPosition(t.deletionPosition)||o.range.start.isEqual(t.deletionPosition))&&e.push(R._createFromPositionAndShift(t.graveyardPosition,1));const n=o.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(i=>new qt(i,o.key,o.oldValue,o.newValue,o.baseVersion))}),xt(qt,Dt,(o,t)=>function(n,i){const r=R._createFromPositionAndShift(i.sourcePosition,i.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const c=[];for(let d of a){d=d._getTransformedByDeletion(i.sourcePosition,i.howMany);const u=i.getMovedRangeStart(),g=d.start.hasSameParentAs(u),m=d._getTransformedByInsertion(u,i.howMany,g);c.push(...m)}return s&&c.push(s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),c}(o.range,t).map(n=>new qt(n,o.key,o.oldValue,o.newValue,o.baseVersion))),xt(qt,Lt,(o,t)=>{if(o.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.range.end.offset++,[o];if(o.range.start.hasSameParentAs(t.splitPosition)&&o.range.containsPosition(t.splitPosition)){const e=o.clone();return e.range=new R(t.moveTargetPosition.clone(),o.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),o.range.end=t.splitPosition.clone(),o.range.end.stickiness="toPrevious",[o,e]}return o.range=o.range._getTransformedBySplitOperation(t),[o]}),xt(Jt,qt,(o,t)=>{const e=[o];if(o.shouldReceiveAttributes&&o.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(o.position)){const n=nh(o,t.key,t.newValue);n&&e.push(n)}return e}),xt(Jt,Jt,(o,t,e)=>(o.position.isEqual(t.position)&&e.aIsStrong||(o.position=o.position._getTransformedByInsertOperation(t)),[o])),xt(Jt,Dt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),xt(Jt,Lt,(o,t)=>(o.position=o.position._getTransformedBySplitOperation(t),[o])),xt(Jt,$t,(o,t)=>(o.position=o.position._getTransformedByMergeOperation(t),[o])),xt(he,Jt,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByInsertOperation(t)[0]),o.newRange&&(o.newRange=o.newRange._getTransformedByInsertOperation(t)[0]),[o])),xt(he,he,(o,t,e)=>{if(o.name==t.name){if(!e.aIsStrong)return[new Xt(0)];o.oldRange=t.newRange?t.newRange.clone():null}return[o]}),xt(he,$t,(o,t)=>(o.oldRange&&(o.oldRange=o.oldRange._getTransformedByMergeOperation(t)),o.newRange&&(o.newRange=o.newRange._getTransformedByMergeOperation(t)),[o])),xt(he,Dt,(o,t,e)=>{if(o.oldRange&&(o.oldRange=R._createFromRanges(o.oldRange._getTransformedByMoveOperation(t))),o.newRange){if(e.abRelation){const n=R._createFromRanges(o.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(o.newRange.start))return o.newRange.end=n.end,o.newRange.start.path=e.abRelation.path,[o];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(o.newRange.end))return o.newRange.start=n.start,o.newRange.end.path=e.abRelation.path,[o]}o.newRange=R._createFromRanges(o.newRange._getTransformedByMoveOperation(t))}return[o]}),xt(he,Lt,(o,t,e)=>{if(o.oldRange&&(o.oldRange=o.oldRange._getTransformedBySplitOperation(t)),o.newRange){if(e.abRelation){const n=o.newRange._getTransformedBySplitOperation(t);return o.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?o.newRange.start=H._createAt(t.insertionPosition):o.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(o.newRange.start=H._createAt(t.moveTargetPosition)),o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?o.newRange.end=H._createAt(t.moveTargetPosition):o.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?o.newRange.end=H._createAt(t.insertionPosition):o.newRange.end=n.end,[o]}o.newRange=o.newRange._getTransformedBySplitOperation(t)}return[o]}),xt($t,Jt,(o,t)=>(o.sourcePosition.hasSameParentAs(t.position)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByInsertOperation(t),o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t),[o])),xt($t,$t,(o,t,e)=>{if(o.sourcePosition.isEqual(t.sourcePosition)&&o.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),o.sourcePosition=new H(t.graveyardPosition.root,n),o.howMany=0,[o]}return[new Xt(0)]}if(o.sourcePosition.isEqual(t.sourcePosition)&&!o.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=o.targetPosition.root.rootName=="$graveyard",i=t.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=t.targetPosition._getTransformedByMergeOperation(t),s=o.targetPosition._getTransformedByMergeOperation(t);return[new Dt(r,o.howMany,s,0)]}return[new Xt(0)]}return o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMergeOperation(t),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),o.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),xt($t,Dt,(o,t,e)=>{const n=R._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&o.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.sourcePosition)?[new Xt(0)]:(o.sourcePosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.sourcePosition.hasSameParentAs(t.sourcePosition)&&(o.howMany-=t.howMany),o.sourcePosition=o.sourcePosition._getTransformedByMoveOperation(t),o.targetPosition=o.targetPosition._getTransformedByMoveOperation(t),o.graveyardPosition.isEqual(t.targetPosition)||(o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)),[o])}),xt($t,Lt,(o,t,e)=>{if(t.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),o.deletionPosition.isEqual(t.graveyardPosition)&&(o.howMany=t.howMany)),o.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,i=t.graveyardPosition&&o.deletionPosition.isEqual(t.graveyardPosition);if(n||i||e.abRelation=="mergeTargetNotMoved")return o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),[o]}if(o.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return o.howMany=0,o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o];if(e.abRelation=="mergeSameElement"||o.sourcePosition.offset>0)return o.sourcePosition=t.moveTargetPosition.clone(),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}return o.sourcePosition.hasSameParentAs(t.splitPosition)&&(o.howMany=t.splitPosition.offset),o.sourcePosition=o.sourcePosition._getTransformedBySplitOperation(t),o.targetPosition=o.targetPosition._getTransformedBySplitOperation(t),[o]}),xt(Dt,Jt,(o,t)=>{const e=R._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByInsertOperation(t,!1)[0];return o.sourcePosition=e.start,o.howMany=e.end.offset-e.start.offset,o.targetPosition.isEqual(t.position)||(o.targetPosition=o.targetPosition._getTransformedByInsertOperation(t)),[o]}),xt(Dt,Dt,(o,t,e)=>{const n=R._createFromPositionAndShift(o.sourcePosition,o.howMany),i=R._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=e.aIsStrong,a=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?a=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(a=!1),r=o.targetPosition.isEqual(t.targetPosition)&&a?o.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):o.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),ih(o,t)&&ih(t,o))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Ci([n],r);if(i.containsPosition(o.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Ci([n],r);const c=Qt(o.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(c=="prefix"||c=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Ci([n],r);o.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?o.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;const d=[],u=n.getDifference(i);for(const m of u){m.start=m.start._getTransformedByDeletion(t.sourcePosition,t.howMany),m.end=m.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const y=Qt(m.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",E=m._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,y);d.push(...E)}const g=n.getIntersection(i);return g!==null&&s&&(g.start=g.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),g.end=g.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),d.length===0?d.push(g):d.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?d.unshift(g):d.push(g):d.splice(1,0,g)),d.length===0?[new Xt(o.baseVersion)]:Ci(d,r)}),xt(Dt,Lt,(o,t,e)=>{let n=o.targetPosition.clone();o.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=o.targetPosition._getTransformedBySplitOperation(t));const i=R._createFromPositionAndShift(o.sourcePosition,o.howMany);if(i.end.isEqual(t.insertionPosition))return t.graveyardPosition||o.howMany++,o.targetPosition=n,[o];if(i.start.hasSameParentAs(t.splitPosition)&&i.containsPosition(t.splitPosition)){let s=new R(t.splitPosition,i.end);return s=s._getTransformedBySplitOperation(t),Ci([new R(i.start,t.splitPosition),s],n)}o.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),o.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=o.targetPosition);const r=[i._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const s=i.start.isEqual(t.graveyardPosition)||i.containsPosition(t.graveyardPosition);o.howMany>1&&s&&!e.aWasUndone&&r.push(R._createFromPositionAndShift(t.insertionPosition,1))}return Ci(r,n)}),xt(Dt,$t,(o,t,e)=>{const n=R._createFromPositionAndShift(o.sourcePosition,o.howMany);if(t.deletionPosition.hasSameParentAs(o.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(o.type!="remove"||e.forceWeakRemove){if(o.howMany==1)return e.bWasUndone?(o.sourcePosition=t.graveyardPosition.clone(),o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]):[new Xt(0)]}else if(!e.aWasUndone){const r=[];let s=t.graveyardPosition.clone(),a=t.targetPosition._getTransformedByMergeOperation(t);o.howMany>1&&(r.push(new Dt(o.sourcePosition,o.howMany-1,o.targetPosition,0)),s=s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1),a=a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany-1));const c=t.deletionPosition._getCombined(o.sourcePosition,o.targetPosition),d=new Dt(s,1,c,0),u=d.getMovedRangeStart().path.slice();u.push(0);const g=new H(d.targetPosition.root,u);a=a._getTransformedByMove(s,c,1);const m=new Dt(a,t.howMany,g,0);return r.push(d),r.push(m),r}}const i=R._createFromPositionAndShift(o.sourcePosition,o.howMany)._getTransformedByMergeOperation(t);return o.sourcePosition=i.start,o.howMany=i.end.offset-i.start.offset,o.targetPosition=o.targetPosition._getTransformedByMergeOperation(t),[o]}),xt(ge,Jt,(o,t)=>(o.position=o.position._getTransformedByInsertOperation(t),[o])),xt(ge,$t,(o,t)=>o.position.isEqual(t.deletionPosition)?(o.position=t.graveyardPosition.clone(),o.position.stickiness="toNext",[o]):(o.position=o.position._getTransformedByMergeOperation(t),[o])),xt(ge,Dt,(o,t)=>(o.position=o.position._getTransformedByMoveOperation(t),[o])),xt(ge,ge,(o,t,e)=>{if(o.position.isEqual(t.position)){if(!e.aIsStrong)return[new Xt(0)];o.oldName=t.newName}return[o]}),xt(ge,Lt,(o,t)=>{if(Qt(o.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new ge(o.position.getShiftedBy(1),o.oldName,o.newName,0);return[o,e]}return o.position=o.position._getTransformedBySplitOperation(t),[o]}),xt(nn,nn,(o,t,e)=>{if(o.root===t.root&&o.key===t.key){if(!e.aIsStrong||o.newValue===t.newValue)return[new Xt(0)];o.oldValue=t.newValue}return[o]}),xt(Lt,Jt,(o,t)=>(o.splitPosition.hasSameParentAs(t.position)&&o.splitPosition.offset<t.position.offset&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByInsertOperation(t),o.insertionPosition=o.insertionPosition._getTransformedByInsertOperation(t),[o])),xt(Lt,$t,(o,t,e)=>{if(!o.graveyardPosition&&!e.bWasUndone&&o.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const i=new H(t.graveyardPosition.root,n),r=Lt.getInsertionPosition(new H(t.graveyardPosition.root,n)),s=new Lt(i,0,r,null,0);return o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),o.graveyardPosition=s.insertionPosition.clone(),o.graveyardPosition.stickiness="toNext",[s,o]}return o.splitPosition.hasSameParentAs(t.deletionPosition)&&!o.splitPosition.isAfter(t.deletionPosition)&&o.howMany--,o.splitPosition.hasSameParentAs(t.targetPosition)&&(o.howMany+=t.howMany),o.splitPosition=o.splitPosition._getTransformedByMergeOperation(t),o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedByMergeOperation(t)),[o]}),xt(Lt,Dt,(o,t,e)=>{const n=R._createFromPositionAndShift(t.sourcePosition,t.howMany);if(o.graveyardPosition){const r=n.start.isEqual(o.graveyardPosition)||n.containsPosition(o.graveyardPosition);if(!e.bWasUndone&&r){const s=o.splitPosition._getTransformedByMoveOperation(t),a=o.graveyardPosition._getTransformedByMoveOperation(t),c=a.path.slice();c.push(0);const d=new H(a.root,c);return[new Dt(s,o.howMany,d,0)]}o.graveyardPosition=o.graveyardPosition._getTransformedByMoveOperation(t)}const i=o.splitPosition.isEqual(t.targetPosition);if(i&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return o.howMany+=t.howMany,o.splitPosition=o.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),[o];if(i&&e.abRelation&&e.abRelation.howMany){const{howMany:r,offset:s}=e.abRelation;return o.howMany+=r,o.splitPosition=o.splitPosition.getShiftedBy(s),[o]}if(o.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(o.splitPosition)){const r=t.howMany-(o.splitPosition.offset-t.sourcePosition.offset);return o.howMany-=r,o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany),o.splitPosition=t.sourcePosition.clone(),o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),[o]}return t.sourcePosition.isEqual(t.targetPosition)||(o.splitPosition.hasSameParentAs(t.sourcePosition)&&o.splitPosition.offset<=t.sourcePosition.offset&&(o.howMany-=t.howMany),o.splitPosition.hasSameParentAs(t.targetPosition)&&o.splitPosition.offset<t.targetPosition.offset&&(o.howMany+=t.howMany)),o.splitPosition.stickiness="toNone",o.splitPosition=o.splitPosition._getTransformedByMoveOperation(t),o.splitPosition.stickiness="toNext",o.graveyardPosition?o.insertionPosition=o.insertionPosition._getTransformedByMoveOperation(t):o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),[o]}),xt(Lt,Lt,(o,t,e)=>{if(o.splitPosition.isEqual(t.splitPosition)){if(!o.graveyardPosition&&!t.graveyardPosition)return[new Xt(0)];if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition))return[new Xt(0)];if(e.abRelation=="splitBefore")return o.howMany=0,o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t),[o]}if(o.graveyardPosition&&t.graveyardPosition&&o.graveyardPosition.isEqual(t.graveyardPosition)){const n=o.splitPosition.root.rootName=="$graveyard",i=t.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&e.aIsStrong){const r=[];return t.howMany&&r.push(new Dt(t.moveTargetPosition,t.howMany,t.splitPosition,0)),o.howMany&&r.push(new Dt(o.splitPosition,o.howMany,o.moveTargetPosition,0)),r}return[new Xt(0)]}if(o.graveyardPosition&&(o.graveyardPosition=o.graveyardPosition._getTransformedBySplitOperation(t)),o.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return o.howMany++,[o];if(t.splitPosition.isEqual(o.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const i=new H(t.insertionPosition.root,n);return[o,new Dt(o.insertionPosition,1,i,0)]}return o.splitPosition.hasSameParentAs(t.splitPosition)&&o.splitPosition.offset<t.splitPosition.offset&&(o.howMany-=t.howMany),o.splitPosition=o.splitPosition._getTransformedBySplitOperation(t),o.insertionPosition=Lt.getInsertionPosition(o.splitPosition),[o]});class ie extends at(H){constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new M("model-liveposition-root-not-rootelement",t);_C.call(this)}detach(){this.stopListening()}toPosition(){return new H(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function _C(){this.listenTo(this.root.document.model,"applyOperation",(o,t)=>{const e=t[0];e.isDocumentOperation&&AC.call(this,e)},{priority:"low"})}function AC(o){const t=this.getTransformedByOperation(o);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}ie.prototype.is=function(o){return o==="livePosition"||o==="model:livePosition"||o=="position"||o==="model:position"};class yi{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},J("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:i=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=i,this.isTyping=r}get type(){return J("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class vC{constructor(t){this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set,this._markerCollection=t}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(t){const e=t;switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const n of e.range.getItems({shallow:!0}))this._isInInsertedElement(n.parent)||this._markAttribute(n);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const n=this._isInInsertedElement(e.sourcePosition.parent),i=this._isInInsertedElement(e.targetPosition.parent);n||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),i||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const n=R._createFromPositionAndShift(e.position,1);for(const i of this._markerCollection.getMarkersIntersectingRange(n)){const r=i.getData();this.bufferMarkerChange(i.name,r,r)}break}case"split":{const n=e.splitPosition.parent;this._isInInsertedElement(n)||this._markRemove(n,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const n=e.sourcePosition.parent;this._isInInsertedElement(n.parent)||this._markRemove(n.parent,n.startOffset,1);const i=e.graveyardPosition.parent;this._markInsert(i,e.graveyardPosition.offset,1);const r=e.targetPosition.parent;this._isInInsertedElement(r)||this._markInsert(r,e.targetPosition.offset,n.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){const i=this._changedMarkers.get(t);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{newMarkerData:n,oldMarkerData:e})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){const n=t.range&&!e.range,i=!t.range&&e.range,r=t.range&&e.range&&!t.range.isEqual(e.range);if(n||i||r)return!0}}return!1}getChanges(t={}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((u,g)=>u.offset===g.offset?u.type!=g.type?u.type=="remove"?-1:1:0:u.offset<g.offset?-1:1),r=this._elementSnapshots.get(n),s=oh(n.getChildren()),a=CC(r.length,i);let c=0,d=0;for(const u of a)if(u==="i")e.push(this._getInsertDiff(n,c,s[c])),c++;else if(u==="r")e.push(this._getRemoveDiff(n,c,r[d])),d++;else if(u==="a"){const g=s[c].attributes,m=r[d].attributes;let y;if(s[c].name=="$text")y=new R(H._createAt(n,c),H._createAt(n,c+1));else{const E=n.offsetToIndex(c);y=new R(H._createAt(n,c),H._createAt(n.getChild(E),0))}e.push(...this._getAttributesDiff(y,m,g)),c++,d++}else c++,d++}e.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<e.length;n++){const r=e[i],s=e[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),c=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,d=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||c||d?(r.length++,d&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):i=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(yC),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=R._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(t,e,n){const i={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i)}_markRemove(t,e,n){const i={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,i),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,oh(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const i=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){const s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:i,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=t.howMany;else if(i<=r)if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){const s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(i<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const s=i-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(i<=r){const s=n.howMany;n.howMany=t.offset-n.offset;const a=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&i>n.offset){if(i>r){const s={type:"attribute",offset:r,howMany:i-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(i>r?(t.nodesToHandle=i-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&i>n.offset){const s={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&i<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&i>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:H._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:H._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const i=[];n=new Map(n);for(const[r,s]of e){const a=n.has(r)?n.get(r):null;a!==s&&i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)i.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return i}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),i=t.startOffset;if(n){for(const r of n)if(r.type=="insert"&&i>=r.offset&&i<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const i=new R(H._createAt(t,e),H._createAt(t,e+n));for(const r of i.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function oh(o){const t=[];for(const e of o)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function CC(o,t){const e=[];let n=0,i=0;for(const r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");i+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,i+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,i+=r.howMany}if(i<o)for(let r=0;r<o-i-n;r++)e.push("e");return e}function yC(o){const t="position"in o&&o.position.root.rootName=="$graveyard",e="range"in o&&o.range.root.rootName=="$graveyard";return!t&&!e}class EC{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new M("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];const n=this._operations[0];t===void 0&&(t=n.baseVersion);let i=e-1;for(const[a,c]of this._gaps)t>a&&t<c&&(t=c),i>a&&i<c&&(i=a-1);if(i<n.baseVersion||t>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(t);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(i);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(t){const e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}class Ar extends It{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}toJSON(){return this.rootName}}Ar.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"):o==="rootElement"||o==="model:rootElement"||o==="element"||o==="model:element"||o==="node"||o==="model:node"};const fa="$graveyard";class xC extends at(){constructor(t){super(),this.model=t,this.history=new EC,this.selection=new Ce(this),this.roots=new Me({idProperty:"rootName"}),this.differ=new vC(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",fa),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,i,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),i===null&&n.on("change",(c,d)=>{const u=n.getData();this.differ.bufferMarkerChange(n.name,{...u,range:d},u)})})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(fa)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new M("model-document-createroot-name-exists",this,{name:e});const n=new Ar(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=fa)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=Pd(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,i=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(i)||e.createRange(i)}_validateSelectionRange(t){return rh(t.start)&&rh(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function rh(o){const t=o.textNode;if(t){const e=t.data,n=o.offset-t.startOffset;return!od(e,n)&&!rd(e,n)}return!0}class DC extends at(){constructor(){super(...arguments),this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof Ei?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,i=!1){const r=t instanceof Ei?t.name:t;if(r.includes(","))throw new M("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const d=s.getData(),u=s.getRange();let g=!1;return u.isEqual(e)||(s._attachLiveRange(Le.fromRange(e)),g=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,g=!0),typeof i=="boolean"&&i!=s.affectsData&&(s._affectsData=i,g=!0),g&&this.fire(`update:${r}`,s,u,e,d),s}const a=Le.fromRange(e),c=new Ei(r,a,n,i);return this._markers.set(r,c),this.fire(`update:${r}`,c,null,e,{...c.getData(),range:null}),c}_remove(t){const e=t instanceof Ei?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire(`update:${e}`,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Ei?t.name:t,n=this._markers.get(e);if(!n)throw new M("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire(`update:${e}`,n,i,i,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}class Ei extends at(kn){constructor(t,e,n,i){super(),this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new M("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new M("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new M("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new M("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new M("marker-destroyed",this);return this._liveRange.toRange()}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Ei.prototype.is=function(o){return o==="marker"||o==="model:marker"};class TC extends ye{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new M("detach-operation-on-document-node",this)}_execute(){Yu(R._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class on extends kn{constructor(t){super(),this.markers=new Map,this._children=new ko,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get nextSibling(){return null}get previousSibling(){return null}get root(){return this}get parent(){return null}get document(){return null}getAncestors(){return[]}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(It.fromJSON(n)):e.push(Pt.fromJSON(n));return new on(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(i){return typeof i=="string"?[new Pt(i)]:(ne(i)||(i=[i]),Array.from(i).map(r=>typeof r=="string"?new Pt(r):r instanceof Pe?new Pt(r.data,r.getAttributes()):r))}(e);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const i of n)i.parent=null;return n}}on.prototype.is=function(o){return o==="documentFragment"||o==="model:documentFragment"};class SC{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new Pt(t,e)}createElement(t,e){return new It(t,e)}createDocumentFragment(){return new on}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof Pt&&t.data=="")return;const i=H._createAt(e,n);if(t.parent){if(ch(t.root,i.root))return void this.move(R._createOn(t),i);if(t.root.document)throw new M("model-writer-insert-forbidden-move",this);this.remove(t)}const r=i.root.document?i.root.document.version:null,s=new Jt(i,t,r);if(t instanceof Pt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof on)for(const[a,c]of t.markers){const d=H._createAt(c.root,0),u={range:new R(c.start._getCombined(d,i),c.end._getCombined(d,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,u):this.addMarker(a,u)}}insertText(t,e,n,i){e instanceof on||e instanceof It||e instanceof H?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,i)}insertElement(t,e,n,i){e instanceof on||e instanceof It||e instanceof H?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,i)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof on||e instanceof It?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof on||e instanceof It?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof R){const i=n.getMinimalFlatRanges();for(const r of i)sh(this,t,e,r)}else ah(this,t,e,n)}setAttributes(t,e){for(const[n,i]of He(t))this.setAttribute(n,i,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof R){const n=e.getMinimalFlatRanges();for(const i of n)sh(this,t,null,i)}else ah(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(t instanceof R)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof R))throw new M("writer-move-invalid-range",this);if(!t.isFlat)throw new M("writer-move-range-not-flat",this);const i=H._createAt(e,n);if(i.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!ch(t.root,i.root))throw new M("writer-move-different-document",this);const r=t.root.document?t.root.document.version:null,s=new Dt(t.start,t.end.offset-t.start.offset,i,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof R?t:R._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),IC(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof It))throw new M("writer-merge-no-element-before",this);if(!(n instanceof It))throw new M("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(...t){return this.model.createSelection(...t)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(R._createIn(n),H._createAt(e,"end")),this.remove(n)}_merge(t){const e=H._createAt(t.nodeBefore,"end"),n=H._createAt(t.nodeAfter,0),i=t.root.document.graveyard,r=new H(i,[0]),s=t.root.document.version,a=new $t(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof It))throw new M("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,i=new ge(H._createBefore(t),t.name,e,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,i,r=t.parent;if(!r.parent)throw new M("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new M("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-t.offset,c=Lt.getInsertionPosition(t),d=new Lt(t,a,c,null,s);this.batch.addOperation(d),this.model.applyOperation(d),n||i||(n=r,i=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new R(H._createAt(n,"end"),H._createAt(i,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new M("writer-wrap-range-not-flat",this);const n=e instanceof It?e:new It(e);if(n.childCount>0)throw new M("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new M("writer-wrap-element-attached",this);this.insert(n,t.start);const i=new R(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(i,H._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new M("writer-unwrap-element-no-parent",this);this.move(R._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new M("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,i=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new M("writer-addmarker-marker-exists",this);if(!i)throw new M("writer-addmarker-no-range",this);return n?(xo(this,t,null,i,r),this.model.markers.get(t)):this.model.markers._set(t,i,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,i=this.model.markers.get(n);if(!i)throw new M("writer-updatemarker-marker-not-exists",this);if(!e)return J("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",a=s?e.affectsData:i.affectsData;if(!r&&!e.range&&!s)throw new M("writer-updatemarker-wrong-options",this);const c=i.getRange(),d=e.range?e.range:c;r&&e.usingOperation!==i.managedUsingOperations?e.usingOperation?xo(this,n,null,d,a):(xo(this,n,c,null,a),this.model.markers._set(n,d,void 0,a)):i.managedUsingOperations?xo(this,n,c,d,a):this.model.markers._set(n,d,void 0,a)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new M("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);xo(this,e,n.getRange(),null,n.affectsData)}setSelection(...t){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(...t)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,i]of He(t))this._setSelectionAttribute(n,i)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=Ce._getStoreAttributeKey(t);this.setAttribute(i,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=Ce._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new M("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let r=!1;if(t==="move"){const s=e;r=s.containsPosition(i.start)||s.start.isEqual(i.start)||s.containsPosition(i.end)||s.end.isEqual(i.end)}else{const s=e,a=s.nodeBefore,c=s.nodeAfter,d=i.start.parent==a&&i.start.isAtEnd,u=i.end.parent==c&&i.end.offset==0,g=i.end.nodeAfter==c,m=i.start.nodeAfter==c;r=d||u||g||m}r&&this.updateMarker(n.name,{range:i})}}}function sh(o,t,e,n){const i=o.model,r=i.document;let s,a,c,d=n.start;for(const g of n.getWalker({shallow:!0}))c=g.item.getAttribute(t),s&&a!=c&&(a!=e&&u(),d=s),s=g.nextPosition,a=c;function u(){const g=new R(d,s),m=g.root.document?r.version:null,y=new qt(g,t,a,e,m);o.batch.addOperation(y),i.applyOperation(y)}s instanceof H&&s!=d&&a!=e&&u()}function ah(o,t,e,n){const i=o.model,r=i.document,s=n.getAttribute(t);let a,c;if(s!=e){if(n.root===n){const d=n.document?r.version:null;c=new nn(n,t,s,e,d)}else{a=new R(H._createBefore(n),o.createPositionAfter(n));const d=a.root.document?r.version:null;c=new qt(a,t,s,e,d)}o.batch.addOperation(c),i.applyOperation(c)}}function xo(o,t,e,n,i){const r=o.model,s=r.document,a=new he(t,e,n,r.markers,!!i,s.version);o.batch.addOperation(a),r.applyOperation(a)}function IC(o,t,e,n){let i;if(o.root.document){const r=n.document,s=new H(r.graveyard,[0]);i=new Dt(o,t,s,r.version)}else i=new TC(o,t);e.addOperation(i),n.applyOperation(i)}function ch(o,t){return o===t||o instanceof Ar&&t instanceof Ar}function MC(o){o.document.registerPostFixer(t=>function(e,n){const i=n.document.selection,r=n.schema,s=[];let a=!1;for(const c of i.getRanges()){const d=NC(c,r);d&&!d.isEqual(c)?(s.push(d),a=!0):s.push(c)}return a&&e.setSelection(function(c){const d=[...c],u=new Set;let g=1;for(;g<d.length;){const m=d[g],y=d.slice(0,g);for(const[E,T]of y.entries())if(!u.has(E)){if(m.isEqual(T))u.add(E);else if(m.isIntersecting(T)){u.add(E),u.add(g);const I=m.getJoined(T);d.push(I)}}g++}return d.filter((m,y)=>!u.has(y))}(s),{backward:i.isBackward}),!1}(t,o))}function NC(o,t){return o.isCollapsed?function(e,n){const i=e.start,r=n.getNearestSelectionRange(i);if(!r){const a=i.getAncestors().reverse().find(c=>n.isObject(c));return a?R._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return i.isEqual(s)?null:new R(s)}(o,t):function(e,n){const{start:i,end:r}=e,s=n.checkChild(i,"$text"),a=n.checkChild(r,"$text"),c=n.getLimitElement(i),d=n.getLimitElement(r);if(c===d){if(s&&a)return null;if(function(m,y,E){const T=m.nodeAfter&&!E.isLimit(m.nodeAfter)||E.checkChild(m,"$text"),I=y.nodeBefore&&!E.isLimit(y.nodeBefore)||E.checkChild(y,"$text");return T||I}(i,r,n)){const m=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),y=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),E=m?m.start:i,T=y?y.end:r;return new R(E,T)}}const u=c&&!c.is("rootElement"),g=d&&!d.is("rootElement");if(u||g){const m=i.nodeAfter&&r.nodeBefore&&i.nodeAfter.parent===r.nodeBefore.parent,y=u&&(!m||!dh(i.nodeAfter,n)),E=g&&(!m||!dh(r.nodeBefore,n));let T=i,I=r;return y&&(T=H._createBefore(lh(c,n))),E&&(I=H._createAfter(lh(d,n))),new R(T,I)}return null}(o,t)}function lh(o,t){let e=o,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function dh(o,t){return o&&t.isSelectable(o)}function PC(o,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=o.schema;o.change(r=>{if(!e.doNotResetEntireContent&&function(d,u){const g=d.getLimitElement(u);if(!u.containsEntireContent(g))return!1;const m=u.getFirstRange();return m.start.parent==m.end.parent?!1:d.checkChild(g,"paragraph")}(i,t))return void function(d,u){const g=d.model.schema.getLimitElement(u);d.remove(d.createRangeIn(g)),gh(d,d.createPositionAt(g,0),u)}(r,t);const s={};if(!e.doNotAutoparagraph){const d=t.getSelectedElement();d&&Object.assign(s,i.getAttributesWithProperty(d,"copyOnReplace",!0))}const[a,c]=function(d){const u=d.root.document.model,g=d.start;let m=d.end;if(u.hasContent(d,{ignoreMarkers:!0})){const y=function(E){const T=E.parent,I=T.root.document.model.schema,N=T.getAncestors({parentFirst:!0,includeSelf:!0});for(const L of N){if(I.isLimit(L))return null;if(I.isBlock(L))return L}}(m);if(y&&m.isTouching(u.createPositionAt(y,0))){const E=u.createSelection(d);u.modifySelection(E,{direction:"backward"});const T=E.getLastPosition(),I=u.createRange(T,m);u.hasContent(I,{ignoreMarkers:!0})||(m=T)}}return[ie.fromPosition(g,"toPrevious"),ie.fromPosition(m,"toNext")]}(n);a.isTouching(c)||r.remove(r.createRange(a,c)),e.leaveUnmerged||(function(d,u,g){const m=d.model;if(!ma(d.model.schema,u,g))return;const[y,E]=function(T,I){const N=T.getAncestors(),L=I.getAncestors();let j=0;for(;N[j]&&N[j]==L[j];)j++;return[N[j],L[j]]}(u,g);!y||!E||(!m.hasContent(y,{ignoreMarkers:!0})&&m.hasContent(E,{ignoreMarkers:!0})?hh(d,u,g,y.parent):uh(d,u,g,y.parent))}(r,a,c),i.removeDisallowedAttributes(a.parent.getChildren(),r)),ph(r,t,a),!e.doNotAutoparagraph&&function(d,u){const g=d.checkChild(u,"$text"),m=d.checkChild(u,"paragraph");return!g&&m}(i,a)&&gh(r,a,t,s),a.detach(),c.detach()})}function uh(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(r,t),o.merge(t);e.parent.isEmpty;){const s=e.parent;e=o.createPositionBefore(s),o.remove(s)}ma(o.model.schema,t,e)&&uh(o,t,e,n)}}function hh(o,t,e,n){const i=t.parent,r=e.parent;if(i!=n&&r!=n){for(t=o.createPositionAfter(i),(e=o.createPositionBefore(r)).isEqual(t)||o.insert(i,e);t.parent.isEmpty;){const s=t.parent;t=o.createPositionBefore(s),o.remove(s)}e=o.createPositionBefore(r),function(s,a){const c=a.nodeBefore,d=a.nodeAfter;c.name!=d.name&&s.rename(c,d.name),s.clearAttributes(c),s.setAttributes(Object.fromEntries(d.getAttributes()),c),s.merge(a)}(o,e),ma(o.model.schema,t,e)&&hh(o,t,e,n)}}function ma(o,t,e){const n=t.parent,i=e.parent;return n!=i&&!o.isLimit(n)&&!o.isLimit(i)&&function(r,s,a){const c=new R(r,s);for(const d of c.getWalker())if(a.isLimit(d.item))return!1;return!0}(t,e,o)}function gh(o,t,e,n={}){const i=o.createElement("paragraph");o.model.schema.setAllowedAttributes(i,n,o),o.insert(i,t),ph(o,e,o.createPositionAt(i,0))}function ph(o,t,e){t instanceof Ce?o.setSelection(e):t.setTo(e)}function fh(o,t){const e=[];Array.from(o.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(o.start)||n.start.isEqual(o.start))&&(n.end.isBefore(o.end)||n.end.isEqual(o.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const r=t.createRangeOn(i);i=i.parent,t.remove(r)}})}class LC{constructor(t,e,n){this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null,this._nodeToSelect=null,this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0)}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new M("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this._nodeToSelect?R._createOn(this._nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new R(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=ie.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new M("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this._nodeToSelect=t:this._nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=ie.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=ie.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof It)||!this._canMergeLeft(t))return;const e=ie._createBefore(t);e.stickiness="toNext";const n=ie.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=ie._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=ie._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof It)||!this._canMergeRight(t))return;const e=ie._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new M("insertcontent-invalid-insertion-position",this);this.position=H._createAt(e.nodeBefore,"end");const n=ie.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=ie._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=ie._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof It&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof It&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function mh(o,t,e="auto"){const n=o.getSelectedElement();if(n&&t.schema.isObject(n)&&!t.schema.isInline(n))return e=="before"||e=="after"?t.createRange(t.createPositionAt(n,e)):t.createRangeOn(n);const i=Kt(o.getSelectedBlocks());if(!i)return t.createRange(o.focus);if(i.isEmpty)return t.createRange(t.createPositionAt(i,0));const r=t.createPositionAfter(i);return o.focus.isTouching(r)?t.createRange(r):t.createRange(t.createPositionBefore(i))}function OC(o,t,e,n,i={}){if(!o.schema.isObject(t))throw new M("insertobject-element-not-an-object",o,{object:t});let r;r=e?e instanceof Ye||e instanceof Ce?e:o.createSelection(e,n):o.document.selection;let s=r;i.findOptimalPosition&&o.schema.isBlock(t)&&(s=o.createSelection(mh(r,o,i.findOptimalPosition)));const a=Kt(r.getSelectedBlocks()),c={};return a&&Object.assign(c,o.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),o.change(d=>{s.isCollapsed||o.deleteContent(s,{doNotAutoparagraph:!0});let u=t;const g=s.anchor.parent;!o.schema.checkChild(g,t)&&o.schema.checkChild(g,"paragraph")&&o.schema.checkChild("paragraph",t)&&(u=d.createElement("paragraph"),d.insert(t,u)),o.schema.setAllowedAttributes(u,c,d);const m=o.insertContent(u,s);return m.isCollapsed||i.setSelection&&function(y,E,T,I){const N=y.model;if(T=="on")return void y.setSelection(E,"on");if(T!="after")throw new M("insertobject-invalid-place-parameter-value",N);let L=E.nextSibling;if(N.schema.isInline(E))return void y.setSelection(E,"after");!(L&&N.schema.checkChild(L,"$text"))&&N.schema.checkChild(E.parent,"paragraph")&&(L=y.createElement("paragraph"),N.schema.setAllowedAttributes(L,I,y),N.insertContent(L,y.createPositionAfter(E))),L&&y.setSelection(L,0)}(d,t,i.setSelection,c),m})}const BC=' ,.?!:;"-()';function zC(o,t){const{isForward:e,walker:n,unit:i,schema:r,treatEmojiAsSingleUnit:s}=o,{type:a,item:c,nextPosition:d}=t;if(a=="text")return o.unit==="word"?function(u,g){let m=u.position.textNode;for(m||(m=g?u.position.nodeAfter:u.position.nodeBefore);m&&m.is("$text");){const y=u.position.offset-m.startOffset;if(FC(m,y,g))m=g?u.position.nodeAfter:u.position.nodeBefore;else{if(jC(m.data,y,g))break;u.next()}}return u.position}(n,e):function(u,g,m){const y=u.position.textNode;if(y){const E=y.data;let T=u.position.offset-y.startOffset;for(;od(E,T)||g=="character"&&rd(E,T)||m&&v_(E,T);)u.next(),T=u.position.offset-y.startOffset}return u.position}(n,i,s);if(a==(e?"elementStart":"elementEnd")){if(r.isSelectable(c))return H._createAt(c,e?"after":"before");if(r.checkChild(d,"$text"))return d}else{if(r.isLimit(c))return void n.skip(()=>!0);if(r.checkChild(d,"$text"))return d}}function RC(o,t){const e=o.root,n=H._createAt(e,t?"end":0);return t?new R(o,n):new R(n,o)}function jC(o,t,e){const n=t+(e?0:-1);return BC.includes(o.charAt(n))}function FC(o,t,e){return t===(e?o.offsetSize:0)}class VC extends St(){constructor(){super(),this.markers=new DC,this.document=new xC(this),this.schema=new Xv,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),MC(this),this.document.registerPostFixer(Fu)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new yi,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){M.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new yi):t instanceof yi||(t=new yi(t)):t=new yi,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){M.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(i,r,s,a){return i.change(c=>{let d;d=s?s instanceof Ye||s instanceof Ce?s:c.createSelection(s,a):i.document.selection,d.isCollapsed||i.deleteContent(d,{doNotAutoparagraph:!0});const u=new LC(i,c,d.anchor),g=[];let m;if(r.is("documentFragment")){if(r.markers.size){const T=[];for(const[I,N]of r.markers){const{start:L,end:j}=N,K=L.isEqual(j);T.push({position:L,name:I,isCollapsed:K},{position:j,name:I,isCollapsed:K})}T.sort(({position:I},{position:N})=>I.isBefore(N)?1:-1);for(const{position:I,name:N,isCollapsed:L}of T){let j=null,K=null;const pt=I.parent===r&&I.isAtStart,Et=I.parent===r&&I.isAtEnd;pt||Et?L&&(K=pt?"start":"end"):(j=c.createElement("$marker"),c.insert(j,I)),g.push({name:N,element:j,collapsed:K})}}m=r.getChildren()}else m=[r];u.handleNodes(m);let y=u.getSelectionRange();if(r.is("documentFragment")&&g.length){const T=y?Le.fromRange(y):null,I={};for(let N=g.length-1;N>=0;N--){const{name:L,element:j,collapsed:K}=g[N],pt=!I[L];if(pt&&(I[L]=[]),j){const Et=c.createPositionAt(j,"before");I[L].push(Et),c.remove(j)}else{const Et=u.getAffectedRange();if(!Et){K&&I[L].push(u.position);continue}K?I[L].push(Et[K]):I[L].push(pt?Et.start:Et.end)}}for(const[N,[L,j]]of Object.entries(I))L&&j&&L.root===j.root&&c.addMarker(N,{usingOperation:!0,affectsData:!0,range:new R(L,j)});T&&(y=T.toRange(),T.detach())}y&&(d instanceof Ce?c.setSelection(y):d.setTo(y));const E=u.getAffectedRange()||i.createRange(d.anchor);return u.destroy(),E})}(this,t,e,n)}insertObject(t,e,n,i){return OC(this,t,e,n,i)}deleteContent(t,e){PC(this,t,e)}modifySelection(t,e){(function(n,i,r={}){const s=n.schema,a=r.direction!="backward",c=r.unit?r.unit:"character",d=!!r.treatEmojiAsSingleUnit,u=i.focus,g=new Ke({boundaries:RC(u,a),singleCharacters:!0,direction:a?"forward":"backward"}),m={walker:g,schema:s,isForward:a,unit:c,treatEmojiAsSingleUnit:d};let y;for(;y=g.next();){if(y.done)return;const E=zC(m,y.value);if(E)return void(i instanceof Ce?n.change(T=>{T.setSelectionFocus(E)}):i.setFocus(E))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(i=>{const r=i.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,c=s.start.getCommonPath(s.end),d=a.getNodeByPath(c);let u;u=s.start.parent==s.end.parent?s:i.createRange(i.createPositionAt(d,s.start.path[c.length]),i.createPositionAt(d,s.end.path[c.length]+1));const g=u.end.offset-u.start.offset;for(const m of u.getItems({shallow:!0}))m.is("$textProxy")?i.appendText(m.data,m.getAttributes(),r):i.append(i.cloneElement(m,!0),r);if(u!=s){const m=s._getTransformedByMove(u.start,i.createPositionAt(r,0),g)[0],y=i.createRange(i.createPositionAt(r,0),m.start);fh(i.createRange(m.end,i.createPositionAt(r,"end")),i),fh(y,i)}return r})}(this,t)}hasContent(t,e={}){const n=t instanceof R?t:R._createIn(t);if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:r=!1}=e;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!i||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new H(t,e,n)}createPositionAt(t,e){return H._createAt(t,e)}createPositionAfter(t){return H._createAfter(t)}createPositionBefore(t){return H._createBefore(t)}createRange(t,e){return new R(t,e)}createRangeIn(t){return R._createIn(t)}createRangeOn(t){return R._createOn(t)}createSelection(...t){return new Ye(...t)}createBatch(t){return new yi(t)}createOperationFromJSON(t){return mC.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];this.fire("_beforeChanges");try{for(;this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new SC(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}}finally{this._pendingChanges.length=0,this._currentWriter=null,this.fire("_afterChanges")}return t}}class HC extends bn{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class ba extends bn{constructor(t){super(t),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class xi{constructor(t){this.document=t}createDocumentFragment(t){return new $n(this.document,t)}createElement(t,e,n){return new me(this.document,t,e,n)}createText(t){return new Nt(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const i=n.getChildIndex(t);return this.removeChildren(i,1,n),this.insertChild(i,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new me(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){ue(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return G._createAt(t,e)}createPositionAfter(t){return G._createAfter(t)}createPositionBefore(t){return G._createBefore(t)}createRange(t,e){return new dt(t,e)}createRangeOn(t){return dt._createOn(t)}createRangeIn(t){return dt._createIn(t)}createSelection(...t){return new qe(...t)}}class $C{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new M("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class UC extends Ve{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,s)=>{this.editor.execute(i),s()}}super.set(t,e,n)}}class qC extends St(){constructor(t={}){super();const e=this.constructor,n=t.language||e.defaultConfig&&e.defaultConfig.language;this._context=t.context||new F_({language:n}),this._context._addEditor(this,!t.context);const i=Array.from(e.builtinPlugins||[]);this.config=new Rl(t,e.defaultConfig),this.config.define("plugins",i),this.config.define(this._context._getEditorConfig()),this.plugins=new Sd(this,i,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new $C,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new VC;const r=new TA;this.data=new pC(this.model,r),this.editing=new Zv(this.model,r),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new fC([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new UC(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new M("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new M("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new M("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],i=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(i),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(t,...e){try{return this.commands.execute(t,...e)}catch(n){M.rethrowUnexpectedError(n,this)}}focus(){this.editing.view.focus()}}function vr(o){return class extends o{setData(t){this.data.set(t)}getData(t){return this.data.get(t)}}}{const o=vr(Object);vr.setData=o.prototype.setData,vr.getData=o.prototype.getData}function ka(o){return class extends o{updateSourceElement(t=this.data.get()){if(!this.sourceElement)throw new M("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),n=this.sourceElement instanceof HTMLTextAreaElement;d_(this.sourceElement,e||n?t:"")}}}ka.updateSourceElement=ka(Object).prototype.updateSourceElement;class bh extends rr{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Me({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new M("pendingactions-add-invalid-message",this);const e=new(St());return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Wt={bold:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"/></svg>',cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',importExport:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path clip-rule="evenodd" d="M19 4.5 14 0H3v12.673l.868-1.041c.185-.222.4-.402.632-.54V1.5h8v5h5v7.626a2.24 2.24 0 0 1 1.5.822V4.5ZM14 5V2l3.3 3H14Zm-3.692 12.5c.062.105.133.206.213.303L11.52 19H8v-.876a2.243 2.243 0 0 0 1.82-.624h.488Zm7.518-.657a.75.75 0 0 0-1.152-.96L15.5 17.29V12H14v5.29l-1.174-1.408a.75.75 0 0 0-1.152.96l2.346 2.816a.95.95 0 0 0 1.46 0l2.346-2.815Zm-15.056-.38a.75.75 0 0 1-.096-1.056l2.346-2.815a.95.95 0 0 1 1.46 0l2.346 2.815a.75.75 0 1 1-1.152.96L6.5 14.96V20H5v-5.04l-1.174 1.408a.75.75 0 0 1-1.056.096Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',paragraph:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5.5H7v5h3.5a2.5 2.5 0 1 0 0-5zM5 3h6.5v.025a5 5 0 0 1 0 9.95V13H7v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/></svg>',plus:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 0 0-1 1v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V3a1 1 0 0 0-1-1Z"/></svg>',text:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M9.816 11.5 7.038 4.785 4.261 11.5h5.555Zm.62 1.5H3.641l-1.666 4.028H.312l5.789-14h1.875l5.789 14h-1.663L10.436 13Z"/><path clip-rule="evenodd" d="m12.09 17-.534-1.292.848-1.971.545 1.319L12.113 17h-.023Zm1.142-5.187.545 1.319L15.5 9.13l1.858 4.316h-3.45l.398.965h3.467L18.887 17H20l-3.873-9h-1.254l-1.641 3.813Z"/></g><defs><clipPath id="a"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>'};var kh=S(5542),WC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(kh.Z,WC),kh.Z.locals;const{threeVerticalDots:wh}=Wt,GC={alignLeft:Wt.alignLeft,bold:Wt.bold,importExport:Wt.importExport,paragraph:Wt.paragraph,plus:Wt.plus,text:Wt.text,threeVerticalDots:Wt.threeVerticalDots};class wa extends At{constructor(t,e){super(t);const n=this.bindTemplate,i=this.t;this.options=e||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new ve,this.keystrokes=new Ve,this.set("class",void 0),this.set("isCompact",!1),this.itemsView=new KC(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=t.uiLanguageDirection==="rtl";this._focusCycler=new ki({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(c=>{c.target===a.element&&c.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new QC(this):new YC(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e,n){this.items.addMany(this._buildItemsFromConfig(t,e,n))}_buildItemsFromConfig(t,e,n){const i=Ed(t),r=n||i.removeItems;return this._cleanItemsConfiguration(i.items,e,r).map(s=>mt(s)?this._createNestedToolbarDropdown(s,e,r):s==="|"?new yd:s==="-"?new j_:e.create(s)).filter(s=>!!s)}_cleanItemsConfiguration(t,e,n){const i=t.filter((r,s,a)=>r==="|"||n.indexOf(r)===-1&&(r==="-"?!this.options.shouldGroupWhenFull||(J("toolbarview-line-break-ignored-when-grouping-items",a),!1):!(!mt(r)&&!e.has(r))||(J("toolbarview-item-unavailable",{item:r}),!1)));return this._cleanSeparatorsAndLineBreaks(i)}_cleanSeparatorsAndLineBreaks(t){const e=s=>s!=="-"&&s!=="|",n=t.length,i=t.findIndex(e);if(i===-1)return[];const r=n-t.slice().reverse().findIndex(e);return t.slice(i,r).filter((s,a,c)=>e(s)?!0:!(a>0&&c[a-1]===s))}_createNestedToolbarDropdown(t,e,n){let{label:i,icon:r,items:s,tooltip:a=!0,withText:c=!1}=t;if(s=this._cleanItemsConfiguration(s,e,n),!s.length)return null;const d=wn(this.locale);return i||J("toolbarview-nested-toolbar-dropdown-missing-label",t),d.class="ck-toolbar__nested-toolbar-dropdown",d.buttonView.set({label:i,tooltip:a,withText:!!c}),r!==!1?d.buttonView.icon=GC[r]||r||wh:d.buttonView.withText=!0,_a(d,()=>d.toolbarView._buildItemsFromConfig(s,e,n)),d}}class KC extends At{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class YC{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class QC{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("change",this._updateFocusCycleableItems.bind(this)),t.children.on("change",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{const i=n.index,r=Array.from(n.added);for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+r.length;s++){const a=r[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Bn(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new Ht(t.lastChild),i=new Ht(t);if(!this.cachedPadding){const r=_t.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new Rt(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new yd),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=wn(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",_a(n,this.groupedItems),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:wh}),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var _h=S(1046),ZC={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(_h.Z,ZC),_h.Z.locals;class JC extends At{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new ve,this.keystrokes=new Ve,this._focusCycler=new ki({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.set("ariaLabel",void 0),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"],"aria-label":e.to("ariaLabel")},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Ah extends At{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!0),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item",e.if("isVisible","ck-hidden",n=>!n)]},children:this.children})}focus(){this.children.first.focus()}}class XC extends At{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var vh=S(7339),t0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(vh.Z,t0),vh.Z.locals;var Ch=S(3949),e0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Ch.Z,e0),Ch.Z.locals;function wn(o,t=B_){const e=new t(o),n=new R_(o),i=new bi(o,e,n);return e.bind("isEnabled").to(i),e instanceof Bs?e.arrowView.bind("isOn").to(i,"isOpen"):e.bind("isOn").to(i,"isOpen"),function(r){(function(s){s.on("render",()=>{f({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof or||(s.isOpen=!1)})}(r),function(s){s.focusTracker.on("change:isFocused",(a,c,d)=>{s.isOpen&&!d&&(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,c)=>{s.isOpen&&(s.panelView.focus(),c())}),s.keystrokes.set("arrowup",(a,c)=>{s.isOpen&&(s.panelView.focusLast(),c())})}(r),function(s){s.on("change:isOpen",(a,c,d)=>{if(d)return;const u=s.panelView.element;u&&u.contains(_t.document.activeElement)&&s.buttonView.focus()})}(r),function(s){s.on("change:isOpen",(a,c,d)=>{d&&s.panelView.focus()},{priority:"low"})}(r)}(i),i}function _a(o,t,e={}){o.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),o.isOpen?yh(o,t,e):o.once("change:isOpen",()=>yh(o,t,e),{priority:"highest"}),e.enableActiveItemFocusOnDropdownOpen&&Dh(o,()=>o.toolbarView.items.find(n=>n.isOn))}function yh(o,t,e){const n=o.locale,i=n.t,r=o.toolbarView=new wa(n),s=typeof t=="function"?t():t;r.ariaLabel=e.ariaLabel||i("Dropdown toolbar"),e.maxWidth&&(r.maxWidth=e.maxWidth),e.class&&(r.class=e.class),e.isCompact&&(r.isCompact=e.isCompact),e.isVertical&&(r.isVertical=!0),s instanceof mn?r.items.bindTo(s).using(a=>a):r.items.addMany(s),o.panelView.children.add(r),r.items.delegate("execute").to(o)}function Eh(o,t,e={}){o.isOpen?xh(o,t,e):o.once("change:isOpen",()=>xh(o,t,e),{priority:"highest"}),Dh(o,()=>o.listView.items.find(n=>n instanceof Ah&&n.children.first.isOn))}function xh(o,t,e){const n=o.locale,i=o.listView=new JC(n),r=typeof t=="function"?t():t;i.ariaLabel=e.ariaLabel,i.items.bindTo(r).using(s=>{if(s.type==="separator")return new XC(n);if(s.type==="button"||s.type==="switchbutton"){const a=new Ah(n);let c;return c=s.type==="button"?new Bt(n):new or(n),c.bind(...Object.keys(s.model)).to(s.model),c.delegate("execute").to(a),a.children.add(c),a}return null}),o.panelView.children.add(i),i.items.delegate("execute").to(o)}function Dh(o,t){o.on("change:isOpen",()=>{if(!o.isOpen)return;const e=t();e&&(typeof e.focus=="function"?e.focus():J("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:ot.low-10})}var Th=S(8793),n0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Th.Z,n0),Th.Z.locals;const Sh=Ts("px"),Ih=_t.document.body;class ae extends At{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class",void 0),this._pinWhenIsVisibleCallback=null,this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",Sh),left:e.to("left",Sh)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=ae.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast,e.viewportStickyNorth],limiter:Ih,fitInViewport:!0},t),i=ae._getOptimalPosition(n),r=parseInt(i.left),s=parseInt(i.top),a=i.name,c=i.config||{},{withArrow:d=!0}=c;this.top=s,this.left=r,this.position=a,this.withArrow=d}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Aa(t.target),n=t.limiter?Aa(t.limiter):Ih;this.listenTo(_t.document,"scroll",(i,r)=>{const s=r.target,a=e&&s.contains(e),c=n&&s.contains(n);!a&&!c&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(_t.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(_t.document,"scroll"),this.stopListening(_t.window,"resize")}}function Aa(o){return uo(o)?o:Xo(o)?o.commonAncestorContainer:typeof o=="function"?Aa(o()):null}function Mh(o={}){const{sideOffset:t=ae.arrowSideOffset,heightOffset:e=ae.arrowHeightOffset,stickyVerticalOffset:n=ae.stickyVerticalOffset,config:i}=o;return{northWestArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left-t,name:"arrow_sw",...i&&{config:i}}),northWestArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left-.25*c.width-t,name:"arrow_smw",...i&&{config:i}}),northWestArrowSouth:(a,c)=>({top:r(a,c),left:a.left-c.width/2,name:"arrow_s",...i&&{config:i}}),northWestArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left-.75*c.width+t,name:"arrow_sme",...i&&{config:i}}),northWestArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left-c.width+t,name:"arrow_se",...i&&{config:i}}),northArrowSouthWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-t,name:"arrow_sw",...i&&{config:i}}),northArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.25*c.width-t,name:"arrow_smw",...i&&{config:i}}),northArrowSouth:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...i&&{config:i}}),northArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-.75*c.width+t,name:"arrow_sme",...i&&{config:i}}),northArrowSouthEast:(a,c)=>({top:r(a,c),left:a.left+a.width/2-c.width+t,name:"arrow_se",...i&&{config:i}}),northEastArrowSouthWest:(a,c)=>({top:r(a,c),left:a.right-t,name:"arrow_sw",...i&&{config:i}}),northEastArrowSouthMiddleWest:(a,c)=>({top:r(a,c),left:a.right-.25*c.width-t,name:"arrow_smw",...i&&{config:i}}),northEastArrowSouth:(a,c)=>({top:r(a,c),left:a.right-c.width/2,name:"arrow_s",...i&&{config:i}}),northEastArrowSouthMiddleEast:(a,c)=>({top:r(a,c),left:a.right-.75*c.width+t,name:"arrow_sme",...i&&{config:i}}),northEastArrowSouthEast:(a,c)=>({top:r(a,c),left:a.right-c.width+t,name:"arrow_se",...i&&{config:i}}),southWestArrowNorthWest:a=>({top:s(a),left:a.left-t,name:"arrow_nw",...i&&{config:i}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-.25*c.width-t,name:"arrow_nmw",...i&&{config:i}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...i&&{config:i}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-.75*c.width+t,name:"arrow_nme",...i&&{config:i}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+t,name:"arrow_ne",...i&&{config:i}}),southArrowNorthWest:a=>({top:s(a),left:a.left+a.width/2-t,name:"arrow_nw",...i&&{config:i}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-.25*c.width-t,name:"arrow_nmw",...i&&{config:i}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...i&&{config:i}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-.75*c.width+t,name:"arrow_nme",...i&&{config:i}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+t,name:"arrow_ne",...i&&{config:i}}),southEastArrowNorthWest:a=>({top:s(a),left:a.right-t,name:"arrow_nw",...i&&{config:i}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-.25*c.width-t,name:"arrow_nmw",...i&&{config:i}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...i&&{config:i}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-.75*c.width+t,name:"arrow_nme",...i&&{config:i}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+t,name:"arrow_ne",...i&&{config:i}}),westArrowEast:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.left-c.width-e,name:"arrow_e",...i&&{config:i}}),eastArrowWest:(a,c)=>({top:a.top+a.height/2-c.height/2,left:a.right+e,name:"arrow_w",...i&&{config:i}}),viewportStickyNorth:(a,c,d)=>a.getIntersection(d)?{top:d.top+n,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...i}}:null};function r(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}ae.arrowSideOffset=25,ae.arrowHeightOffset=10,ae.stickyVerticalOffset=20,ae._getOptimalPosition=Kl,ae.defaultPositions=Mh();var Nh=S(3332),i0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Nh.Z,i0),Nh.Z.locals;const Ph="ck-tooltip";class te extends On(){constructor(t){if(super(),te._editors.add(t),te._instance)return te._instance;te._instance=this,this.tooltipTextView=new At(t.locale),this.tooltipTextView.set("text",""),this.tooltipTextView.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:this.tooltipTextView.bindTemplate.to("text")}]}),this.balloonPanelView=new ae(t.locale),this.balloonPanelView.class=Ph,this.balloonPanelView.content.add(this.tooltipTextView),this._resizeObserver=null,this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._pinTooltipDebounced=bo(this._pinTooltip,600),this.listenTo(_t.document,"mouseenter",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(_t.document,"mouseleave",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(_t.document,"focus",this._onEnterOrFocus.bind(this),{useCapture:!0}),this.listenTo(_t.document,"blur",this._onLeaveOrBlur.bind(this),{useCapture:!0}),this.listenTo(_t.document,"scroll",this._onScroll.bind(this),{useCapture:!0}),this._watchdogExcluded=!0}destroy(t){const e=t.ui.view&&t.ui.view.body;te._editors.delete(t),this.stopListening(t.ui),e&&e.has(this.balloonPanelView)&&e.remove(this.balloonPanelView),te._editors.size||(this._unpinTooltip(),this.balloonPanelView.destroy(),this.stopListening(),te._instance=null)}static getPositioningFunctions(t){const e=te.defaultBalloonPositions;return{s:[e.southArrowNorth,e.southArrowNorthEast,e.southArrowNorthWest],n:[e.northArrowSouth],e:[e.eastArrowWest],w:[e.westArrowEast],sw:[e.southArrowNorthEast],se:[e.southArrowNorthWest]}[t]}_onEnterOrFocus(t,{target:e}){const n=va(e);var i;n&&n!==this._currentElementWithTooltip&&(this._unpinTooltip(),this._pinTooltipDebounced(n,{text:(i=n).dataset.ckeTooltipText,position:i.dataset.ckeTooltipPosition||"s",cssClass:i.dataset.ckeTooltipClass||""}))}_onLeaveOrBlur(t,{target:e,relatedTarget:n}){if(t.name==="mouseleave"){if(!uo(e)||this._currentElementWithTooltip&&e!==this._currentElementWithTooltip)return;const i=va(e),r=va(n);i&&i!==r&&this._unpinTooltip()}else{if(this._currentElementWithTooltip&&e!==this._currentElementWithTooltip)return;this._unpinTooltip()}}_onScroll(t,{target:e}){this._currentElementWithTooltip&&(e.contains(this.balloonPanelView.element)&&e.contains(this._currentElementWithTooltip)||this._unpinTooltip())}_pinTooltip(t,{text:e,position:n,cssClass:i}){const r=Kt(te._editors.values()).ui.view.body;r.has(this.balloonPanelView)||r.add(this.balloonPanelView),this.tooltipTextView.text=e,this.balloonPanelView.pin({target:t,positions:te.getPositioningFunctions(n)}),this._resizeObserver=new Rt(t,()=>{Bn(t)||this._unpinTooltip()}),this.balloonPanelView.class=[Ph,i].filter(s=>s).join(" ");for(const s of te._editors)this.listenTo(s.ui,"update",this._updateTooltipPosition.bind(this),{priority:"low"});this._currentElementWithTooltip=t,this._currentTooltipPosition=n}_unpinTooltip(){this._pinTooltipDebounced.cancel(),this.balloonPanelView.unpin();for(const t of te._editors)this.stopListening(t.ui,"update");this._currentElementWithTooltip=null,this._currentTooltipPosition=null,this._resizeObserver&&this._resizeObserver.destroy()}_updateTooltipPosition(){Bn(this._currentElementWithTooltip)?this.balloonPanelView.pin({target:this._currentElementWithTooltip,positions:te.getPositioningFunctions(this._currentTooltipPosition)}):this._unpinTooltip()}}function va(o){return uo(o)?o.closest("[data-cke-tooltip-text]:not([data-cke-tooltip-disabled])"):null}te.defaultBalloonPositions=Mh({heightOffset:5,sideOffset:13}),te._editors=new Set,te._instance=null;class o0 extends St(){constructor(t){super(),this.editor=t,this.componentFactory=new L_(t),this.focusTracker=new ve,this.tooltipManager=new te(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.isReady=!1,this.once("ready",()=>{this.isReady=!0}),this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[],this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update()),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor);for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let d=0;d<i.length;d++){const u=i.shift();if(i.push(u),u!==c&&this._focusFocusableCandidateToolbar(u)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(Bn(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>Lh(e)-Lh(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!Bn(e.element)&&(e.focus(),!0)}}function Lh(o){const{toolbarView:t,options:e}=o;let n=10;return Bn(t.element)&&n--,e.isContextual&&n--,n}var Oh=S(9688),r0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Oh.Z,r0),Oh.Z.locals;class s0 extends At{constructor(t){super(t),this.body=new S_(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Bh=S(3662),a0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Bh.Z,a0),Bh.Z.locals;class zh extends At{constructor(t){super(t),this.set("text",void 0),this.set("for",void 0),this.id=`ck-editor__label_${tt()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class c0 extends s0{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new zh;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class l0 extends At{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class d0 extends l0{constructor(t,e,n,i={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}var Rh=S(8847),u0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Rh.Z,u0),Rh.Z.locals;var jh=S(4879),h0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(jh.Z,h0),jh.Z.locals;class g0 extends At{constructor(t){super(t),this.set("value",void 0),this.set("id",void 0),this.set("placeholder",void 0),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById",void 0),this.focusTracker=new ve,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),inputmode:e.to("inputMode"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}class p0 extends g0{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Fh=S(2577),f0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Fh.Z,f0),Fh.Z.locals;class Ca extends At{constructor(t,e){super(t);const n=`ck-labeled-field-view-${tt()}`,i=`ck-labeled-field-view-status-${tt()}`;this.fieldView=e(this,n,i),this.set("label",void 0),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class",void 0),this.set("placeholder",void 0),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.fieldWrapperChildren=this.createCollection([this.fieldView,this.labelView]),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:this.fieldWrapperChildren},this.statusView]})}_createLabelView(t){const e=new zh(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new At(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function ya(o,t,e){const n=new p0(o.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(o,"isEnabled",i=>!i),n.bind("hasError").to(o,"errorText",i=>!!i),n.on("input",()=>{o.errorText=null}),o.bind("isEmpty","isFocused","placeholder").to(n),n}class Ea extends rr{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Vh extends St(){constructor(t,e){super(),e&&uu(this,e),t&&this.set(t)}}var Hh=S(4650),m0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Hh.Z,m0),Hh.Z.locals;var $h=S(7676),b0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()($h.Z,b0),$h.Z.locals;const Cr=Ts("px");class yr extends W{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=null,this._fakePanelsView=null}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new M("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new M("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new M("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new ae(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new k0(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new w0(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class k0 extends At{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new ve,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new Bt(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class w0 extends At{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",Cr),left:n.to("left",Cr),width:n.to("width",Cr),height:n.to("height",Cr)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new At;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new Ht(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var Uh=S(5868),_0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Uh.Z,_0),Uh.Z.locals;const Do=Ts("px");class A0 extends At{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ne({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Do(this._panelRect.height):null)}}}).render(),this._contentPanel=new Ne({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Do(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?Do(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?Do(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(_t.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Do(-_t.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var qh=S(9695),v0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(qh.Z,v0),qh.Z.locals;class C0 extends o0{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Ed(t.config.get("toolbar")),this._elementReplacer=new ri}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement,r=t.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");r&&Md({view:e,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var Wh=S(3143),y0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ct()(Wh.Z,y0),Wh.Z.locals;class E0 extends c0{constructor(t,e,n={}){super(t),this.stickyPanel=new A0(t),this.toolbar=new wa(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new d0(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class x0 extends vr(ka(qC)){constructor(t,e={}){if(!Er(t)&&e.initialData!==void 0)throw new M("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return Er(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(t)),Er(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new E0(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new C0(this,i),function(r){if(!Mn(r.updateSourceElement))throw new M("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(function(a){return!!a&&a.tagName.toLowerCase()==="textarea"}(s)&&s.form){let a;const c=s.form,d=()=>r.updateSourceElement();Mn(c.submit)&&(a=c.submit,c.submit=()=>{d(),a.apply(c)}),c.addEventListener("submit",d),r.on("destroy",()=>{c.removeEventListener("submit",d),a&&(c.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(Er(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function Er(o){return uo(o)}class xa extends bn{constructor(t){super(t);const e=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new Y(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),c.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new Au(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,d=s.clientY;let u;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,d)?u=a.caretRangeFromPoint(c,d):s.rangeParent&&(u=a.createRange(),u.setStart(s.rangeParent,s.rangeOffset),u.collapse(!0)),u?r.domConverter.domRangeToView(u):null}(this.view,t)),this.fire(t.type,t,i)}}const Gh=["figcaption","li"];function Kh(o){let t="";if(o.is("$text")||o.is("$textProxy"))t=o.data;else if(o.is("element","img")&&o.hasAttribute("alt"))t=o.getAttribute("alt");else if(o.is("element","br"))t=`
`;else{let e=null;for(const n of o.getChildren()){const i=Kh(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(Gh.includes(e.name)||Gh.includes(n.name)?t+=`
`:t+=`

`),f=/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+$/i,k=0;k<w.length;k++)if(!f.test(w[k]))return!1;return!0},"Please enter valid YouTube link(s)"),X("#personal-info-edit-form").validate({ignore:"",rules:{pract_title:{required:!0},pract_type:{required:!0,lettersonly:!0},pract_designation:{required:!0,lettersonly:!0},pract_email:{required:!0,email:!0},pract_license_year:{required:!0,yearonly:!0}},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")}}),X("#education-associations-edit-form").validate({ignore:"",rules:{},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")}}),X("#practice-info-edit-form").validate({ignore:"",rules:{"pract_conditions_supported[]":{required:!0},pract_free_call:{required:!0}},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")}}),X("#clinic-info-edit-form").validate({ignore:"",rules:{pract_visibility:{required:!1},"pract_clinic[]":{required:!1}},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")}}),X("#image-edit-form").validate({rules:{pract_profile_image:{required:!1,accept:"image/png,image/jpeg,image/jpg"}},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")}}),X("#add-clinic-edit-form").validate({rules:{clinic_name:{required:!0},clinic_email:{required:!0,email:!0},clinic_address_1:{required:!0},clinic_city:{required:!0}},errorElement:"span",errorPlacement:function(x,S){x.addClass("invalid-feedback"),S.closest(".form-group").append(x)},highlight:function(x,S,w){X(x).addClass("is-invalid")},unhighlight:function(x,S,w){X(x).removeClass("is-invalid")},submitHandler:function(x){X("#add-clinic-edit-form-loader").removeClass("d-none"),x.submit()}})});X("#virtual-clinic-info-edit-form").validate({rules:{pract_v_clinic_name:{required:!0},pract_v_clinic_address:{required:!0},pract_v_clinic_email:{required:!0}},errorElement:"span",errorPlacement:function(C,l){C.addClass("invalid-feedback"),l.closest(".form-group").append(C)},highlight:function(C,l,_){X(C).addClass("is-invalid")},unhighlight:function(C,l,_){X(C).removeClass("is-invalid")}});X("#youtube_video_link").validate({rules:{video_links:{youtubevideo:!1}},errorElement:"span",errorPlacement:function(C,l){C.addClass("invalid-feedback"),l.closest(".form-group").append(C)},highlight:function(C,l,_){X(C).addClass("is-invalid")},unhighlight:function(C,l,_){X(C).removeClass("is-invalid")}});