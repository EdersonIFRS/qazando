import{b4 as E}from"./index-462dc4aa.js";var ae=e=>e.type==="checkbox",ee=e=>e instanceof Date,T=e=>e==null;const Qe=e=>typeof e=="object";var p=e=>!T(e)&&!Array.isArray(e)&&Qe(e)&&!ee(e),Xe=e=>p(e)&&e.target?ae(e.target)?e.target.checked:e.target.value:e,At=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Ye=(e,i)=>e.has(At(i)),xt=e=>{const i=e.constructor&&e.constructor.prototype;return p(i)&&i.hasOwnProperty("isPrototypeOf")},pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(pe&&(e instanceof Blob||e instanceof FileList))&&(s||p(e)))if(i=s?[]:{},!Array.isArray(e)&&!xt(e))i=e;else for(const r in e)i[r]=G(e[r]);else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,c=(e,i,s)=>{if(!i||!p(e))return s;const r=le(i.split(/[,[\].]+?/)).reduce((n,l)=>T(n)?n:n[l],e);return k(r)||r===e?k(e[i])?s:e[i]:r};const de={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},K={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ft=E.createContext(null),Ce=()=>E.useContext(Ft);var Ze=(e,i,s,r=!0)=>{const n={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const d=l;return i._proxyFormState[d]!==I.all&&(i._proxyFormState[d]=!r||I.all),s&&(s[d]=!0),e[d]}});return n},B=e=>p(e)&&!Object.keys(e).length,et=(e,i,s,r)=>{s(e);const{name:n,...l}=e;return B(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(d=>i[d]===(!r||I.all))},ce=e=>Array.isArray(e)?e:[e],tt=(e,i,s)=>s&&i?e===i:!e||!i||e===i||ce(e).some(r=>r&&(r.startsWith(i)||i.startsWith(r)));function Oe(e){const i=E.useRef(e);i.current=e,E.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}function mt(e){const i=Ce(),{control:s=i.control,disabled:r,name:n,exact:l}=e||{},[d,g]=E.useState(s._formState),v=E.useRef(!0),A=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),C=E.useRef(n);return C.current=n,Oe({disabled:r,next:x=>v.current&&tt(C.current,x.name,l)&&et(x,A.current,s._updateFormState)&&g({...s._formState,...x}),subject:s._subjects.state}),E.useEffect(()=>(v.current=!0,A.current.isValid&&s._updateValid(!0),()=>{v.current=!1}),[s]),Ze(d,s,A.current,!1)}var H=e=>typeof e=="string",rt=(e,i,s,r,n)=>H(e)?(r&&i.watch.add(e),c(s,e,n)):Array.isArray(e)?e.map(l=>(r&&i.watch.add(l),c(s,l))):(r&&(i.watchAll=!0),s);function wt(e){const i=Ce(),{control:s=i.control,name:r,defaultValue:n,disabled:l,exact:d}=e||{},g=E.useRef(r);g.current=r,Oe({disabled:l,subject:s._subjects.values,next:C=>{tt(g.current,C.name,d)&&A(G(rt(g.current,s._names,C.values||s._formValues,!1,n)))}});const[v,A]=E.useState(s._getWatch(r,n));return E.useEffect(()=>s._removeUnmounted()),v}var Le=e=>/^\w*$/.test(e),st=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function m(e,i,s){let r=-1;const n=Le(i)?[i]:st(i),l=n.length,d=l-1;for(;++r<l;){const g=n[r];let v=s;if(r!==d){const A=e[g];v=p(A)||Array.isArray(A)?A:isNaN(+n[r+1])?{}:[]}e[g]=v,e=e[g]}return e}function St(e){const i=Ce(),{name:s,control:r=i.control,shouldUnregister:n}=e,l=Ye(r._names.array,s),d=wt({control:r,name:s,defaultValue:c(r._formValues,s,c(r._defaultValues,s,e.defaultValue)),exact:!0}),g=mt({control:r,name:s}),v=E.useRef(r.register(s,{...e.rules,value:d}));return E.useEffect(()=>{const A=r._options.shouldUnregister||n,C=(x,V)=>{const N=c(r._fields,x);N&&(N._f.mount=V)};if(C(s,!0),A){const x=G(c(r._options.defaultValues,s));m(r._defaultValues,s,x),k(c(r._formValues,s))&&m(r._formValues,s,x)}return()=>{(l?A&&!r._state.action:A)?r.unregister(s):C(s,!1)}},[s,r,l,n]),{field:{name:s,value:d,onChange:E.useCallback(A=>v.current.onChange({target:{value:Xe(A),name:s},type:de.CHANGE}),[s]),onBlur:E.useCallback(()=>v.current.onBlur({target:{value:c(r._formValues,s),name:s},type:de.BLUR}),[s,r]),ref:A=>{const C=c(r._fields,s);C&&A&&(C._f.ref={focus:()=>A.focus(),select:()=>A.select(),setCustomValidity:x=>A.setCustomValidity(x),reportValidity:()=>A.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(g.errors,s)},isDirty:{enumerable:!0,get:()=>!!c(g.dirtyFields,s)},isTouched:{enumerable:!0,get:()=>!!c(g.touchedFields,s)},error:{enumerable:!0,get:()=>c(g.errors,s)}})}}const Nt=e=>e.render(St(e));var Dt=(e,i,s,r,n)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:n||!0}}:{};const Ee=(e,i,s)=>{for(const r of s||Object.keys(e)){const n=c(e,r);if(n){const{_f:l,...d}=n;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else p(d)&&Ee(d,i)}}};var We=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),He=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),kt=(e,i,s)=>{const r=le(c(e,s));return m(r,"root",i[s]),m(e,s,r),e},te=e=>typeof e=="boolean",Te=e=>e.type==="file",z=e=>typeof e=="function",ye=e=>{if(!pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>H(e),Re=e=>e.type==="radio",he=e=>e instanceof RegExp;const je={value:!1,isValid:!1},$e={value:!0,isValid:!0};var it=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?$e:{value:e[0].value,isValid:!0}:$e:je}return je};const Ke={isValid:!1,value:null};var ut=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Ke):Ke;function Ge(e,i,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||te(e)&&!e)return{type:s,message:fe(e)?e:"",ref:i}}var Z=e=>p(e)&&!he(e)?e:{value:e,message:""},ze=async(e,i,s,r,n)=>{const{ref:l,refs:d,required:g,maxLength:v,minLength:A,min:C,max:x,pattern:V,validate:N,name:U,valueAsNumber:_e,mount:oe,disabled:Ve}=e._f,_=c(i,U);if(!oe||Ve)return{};const P=d?d[0]:l,j=F=>{r&&P.reportValidity&&(P.setCustomValidity(te(F)?"":F||""),P.reportValidity())},O={},re=Re(l),se=ae(l),be=re||se,q=(_e||Te(l))&&k(l.value)&&k(_)||ye(l)&&l.value===""||_===""||Array.isArray(_)&&!_.length,J=Dt.bind(null,U,s,O),$=(F,b,S,R=K.maxLength,M=K.minLength)=>{const W=F?b:S;O[U]={type:F?R:M,message:W,ref:l,...J(F?R:M,W)}};if(n?!Array.isArray(_)||!_.length:g&&(!be&&(q||T(_))||te(_)&&!_||se&&!it(d).isValid||re&&!ut(d).isValid)){const{value:F,message:b}=fe(g)?{value:!!g,message:g}:Z(g);if(F&&(O[U]={type:K.required,message:b,ref:P,...J(K.required,b)},!s))return j(b),O}if(!q&&(!T(C)||!T(x))){let F,b;const S=Z(x),R=Z(C);if(!T(_)&&!isNaN(_)){const M=l.valueAsNumber||_&&+_;T(S.value)||(F=M>S.value),T(R.value)||(b=M<R.value)}else{const M=l.valueAsDate||new Date(_),W=ue=>new Date(new Date().toDateString()+" "+ue),Q=l.type=="time",ie=l.type=="week";H(S.value)&&_&&(F=Q?W(_)>W(S.value):ie?_>S.value:M>new Date(S.value)),H(R.value)&&_&&(b=Q?W(_)<W(R.value):ie?_<R.value:M<new Date(R.value))}if((F||b)&&($(!!F,S.message,R.message,K.max,K.min),!s))return j(O[U].message),O}if((v||A)&&!q&&(H(_)||n&&Array.isArray(_))){const F=Z(v),b=Z(A),S=!T(F.value)&&_.length>+F.value,R=!T(b.value)&&_.length<+b.value;if((S||R)&&($(S,F.message,b.message),!s))return j(O[U].message),O}if(V&&!q&&H(_)){const{value:F,message:b}=Z(V);if(he(F)&&!_.match(F)&&(O[U]={type:K.pattern,message:b,ref:l,...J(K.pattern,b)},!s))return j(b),O}if(N){if(z(N)){const F=await N(_,i),b=Ge(F,P);if(b&&(O[U]={...b,...J(K.validate,b.message)},!s))return j(b.message),O}else if(p(N)){let F={};for(const b in N){if(!B(F)&&!s)break;const S=Ge(await N[b](_,i),P,b);S&&(F={...S,...J(b,S.message)},j(S.message),s&&(O[U]=F))}if(!B(F)&&(O[U]={ref:P,...F},!s))return O}}return j(!0),O};function Et(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=k(e)?r++:e[i[r++]];return e}function pt(e){for(const i in e)if(!k(e[i]))return!1;return!0}function L(e,i){const s=Array.isArray(i)?i:Le(i)?[i]:st(i),r=s.length===1?e:Et(e,s),n=s.length-1,l=s[n];return r&&delete r[l],n!==0&&(p(r)&&B(r)||Array.isArray(r)&&pt(r))&&L(e,s.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}}var ge=e=>T(e)||!Qe(e);function X(e,i){if(ge(e)||ge(i))return e===i;if(ee(e)&&ee(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const n of s){const l=e[n];if(!r.includes(n))return!1;if(n!=="ref"){const d=i[n];if(ee(l)&&ee(d)||p(l)&&p(d)||Array.isArray(l)&&Array.isArray(d)?!X(l,d):l!==d)return!1}}return!0}var nt=e=>e.type==="select-multiple",Ct=e=>Re(e)||ae(e),Se=e=>ye(e)&&e.isConnected,at=e=>{for(const i in e)if(z(e[i]))return!0;return!1};function ve(e,i={}){const s=Array.isArray(e);if(p(e)||s)for(const r in e)Array.isArray(e[r])||p(e[r])&&!at(e[r])?(i[r]=Array.isArray(e[r])?[]:{},ve(e[r],i[r])):T(e[r])||(i[r]=!0);return i}function lt(e,i,s){const r=Array.isArray(e);if(p(e)||r)for(const n in e)Array.isArray(e[n])||p(e[n])&&!at(e[n])?k(i)||ge(s[n])?s[n]=Array.isArray(e[n])?ve(e[n],[]):{...ve(e[n])}:lt(e[n],T(i)?{}:i[n],s[n]):s[n]=!X(e[n],i[n]);return s}var De=(e,i)=>lt(e,i,ve(i)),ot=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>k(e)?e:i?e===""?NaN:e&&+e:s&&H(e)?new Date(e):r?r(e):e;function ke(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Te(i)?i.files:Re(i)?ut(e.refs).value:nt(i)?[...i.selectedOptions].map(({value:s})=>s):ae(i)?it(e.refs).value:ot(k(i.value)?e.ref.value:i.value,e)}var Ot=(e,i,s,r)=>{const n={};for(const l of e){const d=c(i,l);d&&m(n,l,d._f)}return{criteriaMode:s,names:[...e],fields:n,shouldUseNativeValidation:r}},ne=e=>k(e)?e:he(e)?e.source:p(e)?he(e.value)?e.value.source:e.value:e,Lt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Je(e,i,s){const r=c(e,s);if(r||Le(s))return{error:r,name:s};const n=s.split(".");for(;n.length;){const l=n.join("."),d=c(i,l),g=c(e,l);if(d&&!Array.isArray(d)&&s!==l)return{name:s};if(g&&g.type)return{name:l,error:g};n.pop()}return{name:s}}var Tt=(e,i,s,r,n)=>n.isOnAll?!1:!s&&n.isOnTouch?!(i||e):(s?r.isOnBlur:n.isOnBlur)?!e:(s?r.isOnChange:n.isOnChange)?e:!0,Rt=(e,i)=>!le(c(e,i)).length&&L(e,i);const Ut={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Mt(e={},i){let s={...Ut,...e},r={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},l=p(s.defaultValues)||p(s.values)?G(s.defaultValues||s.values)||{}:{},d=s.shouldUnregister?{}:G(l),g={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},A,C=0;const x={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},V={values:we(),array:we(),state:we()},N=e.resetOptions&&e.resetOptions.keepDirtyValues,U=We(s.mode),_e=We(s.reValidateMode),oe=s.criteriaMode===I.all,Ve=t=>u=>{clearTimeout(C),C=setTimeout(t,u)},_=async t=>{if(x.isValid||t){const u=s.resolver?B((await q()).errors):await $(n,!0);u!==r.isValid&&V.state.next({isValid:u})}},P=t=>x.isValidating&&V.state.next({isValidating:t}),j=(t,u=[],a,y,f=!0,o=!0)=>{if(y&&a){if(g.action=!0,o&&Array.isArray(c(n,t))){const h=a(c(n,t),y.argA,y.argB);f&&m(n,t,h)}if(o&&Array.isArray(c(r.errors,t))){const h=a(c(r.errors,t),y.argA,y.argB);f&&m(r.errors,t,h),Rt(r.errors,t)}if(x.touchedFields&&o&&Array.isArray(c(r.touchedFields,t))){const h=a(c(r.touchedFields,t),y.argA,y.argB);f&&m(r.touchedFields,t,h)}x.dirtyFields&&(r.dirtyFields=De(l,d)),V.state.next({name:t,isDirty:b(t,u),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else m(d,t,u)},O=(t,u)=>{m(r.errors,t,u),V.state.next({errors:r.errors})},re=(t,u,a,y)=>{const f=c(n,t);if(f){const o=c(d,t,k(a)?c(l,t):a);k(o)||y&&y.defaultChecked||u?m(d,t,u?o:ke(f._f)):M(t,o),g.mount&&_()}},se=(t,u,a,y,f)=>{let o=!1,h=!1;const w={name:t};if(!a||y){x.isDirty&&(h=r.isDirty,r.isDirty=w.isDirty=b(),o=h!==w.isDirty);const D=X(c(l,t),u);h=c(r.dirtyFields,t),D?L(r.dirtyFields,t):m(r.dirtyFields,t,!0),w.dirtyFields=r.dirtyFields,o=o||x.dirtyFields&&h!==!D}if(a){const D=c(r.touchedFields,t);D||(m(r.touchedFields,t,a),w.touchedFields=r.touchedFields,o=o||x.touchedFields&&D!==a)}return o&&f&&V.state.next(w),o?w:{}},be=(t,u,a,y)=>{const f=c(r.errors,t),o=x.isValid&&te(u)&&r.isValid!==u;if(e.delayError&&a?(A=Ve(()=>O(t,a)),A(e.delayError)):(clearTimeout(C),A=null,a?m(r.errors,t,a):L(r.errors,t)),(a?!X(f,a):f)||!B(y)||o){const h={...y,...o&&te(u)?{isValid:u}:{},errors:r.errors,name:t};r={...r,...h},V.state.next(h)}P(!1)},q=async t=>s.resolver(d,s.context,Ot(t||v.mount,n,s.criteriaMode,s.shouldUseNativeValidation)),J=async t=>{const{errors:u}=await q();if(t)for(const a of t){const y=c(u,a);y?m(r.errors,a,y):L(r.errors,a)}else r.errors=u;return u},$=async(t,u,a={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:o,...h}=f;if(o){const w=v.array.has(o.name),D=await ze(f,d,oe,s.shouldUseNativeValidation&&!u,w);if(D[o.name]&&(a.valid=!1,u))break;!u&&(c(D,o.name)?w?kt(r.errors,D,o.name):m(r.errors,o.name,D[o.name]):L(r.errors,o.name))}h&&await $(h,u,a)}}return a.valid},F=()=>{for(const t of v.unMount){const u=c(n,t);u&&(u._f.refs?u._f.refs.every(a=>!Se(a)):!Se(u._f.ref))&&Ae(t)}v.unMount=new Set},b=(t,u)=>(t&&u&&m(d,t,u),!X(Ue(),l)),S=(t,u,a)=>rt(t,v,{...g.mount?d:k(u)?l:H(t)?{[t]:u}:u},a,u),R=t=>le(c(g.mount?d:l,t,e.shouldUnregister?c(l,t,[]):[])),M=(t,u,a={})=>{const y=c(n,t);let f=u;if(y){const o=y._f;o&&(!o.disabled&&m(d,t,ot(u,o)),f=ye(o.ref)&&T(u)?"":u,nt(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?ae(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(w=>w===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Te(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||V.values.next({name:t,values:{...d}})))}(a.shouldDirty||a.shouldTouch)&&se(t,f,a.shouldTouch,a.shouldDirty,!0),a.shouldValidate&&ue(t)},W=(t,u,a)=>{for(const y in u){const f=u[y],o=`${t}.${y}`,h=c(n,o);(v.array.has(t)||!ge(f)||h&&!h._f)&&!ee(f)?W(o,f,a):M(o,f,a)}},Q=(t,u,a={})=>{const y=c(n,t),f=v.array.has(t),o=G(u);m(d,t,o),f?(V.array.next({name:t,values:{...d}}),(x.isDirty||x.dirtyFields)&&a.shouldDirty&&V.state.next({name:t,dirtyFields:De(l,d),isDirty:b(t,o)})):y&&!y._f&&!T(o)?W(t,o,a):M(t,o,a),He(t,v)&&V.state.next({...r}),V.values.next({name:t,values:{...d}}),!g.mount&&i()},ie=async t=>{const u=t.target;let a=u.name,y=!0;const f=c(n,a),o=()=>u.type?ke(f._f):Xe(t);if(f){let h,w;const D=o(),Y=t.type===de.BLUR||t.type===de.FOCUS_OUT,_t=!Lt(f._f)&&!s.resolver&&!c(r.errors,a)&&!f._f.deps||Tt(Y,c(r.touchedFields,a),r.isSubmitted,_e,U),Fe=He(a,v,Y);m(d,a,D),Y?(f._f.onBlur&&f._f.onBlur(t),A&&A(0)):f._f.onChange&&f._f.onChange(t);const me=se(a,D,Y,!1),Vt=!B(me)||Fe;if(!Y&&V.values.next({name:a,type:t.type,values:{...d}}),_t)return x.isValid&&_(),Vt&&V.state.next({name:a,...Fe?{}:me});if(!Y&&Fe&&V.state.next({...r}),P(!0),s.resolver){const{errors:Ie}=await q([a]),bt=Je(r.errors,n,a),qe=Je(Ie,n,bt.name||a);h=qe.error,a=qe.name,w=B(Ie)}else h=(await ze(f,d,oe,s.shouldUseNativeValidation))[a],y=isNaN(D)||D===c(d,a,D),y&&(h?w=!1:x.isValid&&(w=await $(n,!0)));y&&(f._f.deps&&ue(f._f.deps),be(a,w,h,me))}},ue=async(t,u={})=>{let a,y;const f=ce(t);if(P(!0),s.resolver){const o=await J(k(t)?t:f);a=B(o),y=t?!f.some(h=>c(o,h)):a}else t?(y=(await Promise.all(f.map(async o=>{const h=c(n,o);return await $(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&_()):y=a=await $(n);return V.state.next({...!H(t)||x.isValid&&a!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:a}:{},errors:r.errors,isValidating:!1}),u.shouldFocus&&!y&&Ee(n,o=>o&&c(r.errors,o),t?f:v.mount),y},Ue=t=>{const u={...l,...g.mount?d:{}};return k(t)?u:H(t)?c(u,t):t.map(a=>c(u,a))},Me=(t,u)=>({invalid:!!c((u||r).errors,t),isDirty:!!c((u||r).dirtyFields,t),isTouched:!!c((u||r).touchedFields,t),error:c((u||r).errors,t)}),ct=t=>{t&&ce(t).forEach(u=>L(r.errors,u)),V.state.next({errors:t?r.errors:{}})},ft=(t,u,a)=>{const y=(c(n,t,{_f:{}})._f||{}).ref;m(r.errors,t,{...u,ref:y}),V.state.next({name:t,errors:r.errors,isValid:!1}),a&&a.shouldFocus&&y&&y.focus&&y.focus()},dt=(t,u)=>z(t)?V.values.subscribe({next:a=>t(S(void 0,u),a)}):S(t,u,!0),Ae=(t,u={})=>{for(const a of t?ce(t):v.mount)v.mount.delete(a),v.array.delete(a),u.keepValue||(L(n,a),L(d,a)),!u.keepError&&L(r.errors,a),!u.keepDirty&&L(r.dirtyFields,a),!u.keepTouched&&L(r.touchedFields,a),!s.shouldUnregister&&!u.keepDefaultValue&&L(l,a);V.values.next({values:{...d}}),V.state.next({...r,...u.keepDirty?{isDirty:b()}:{}}),!u.keepIsValid&&_()},xe=(t,u={})=>{let a=c(n,t);const y=te(u.disabled);return m(n,t,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:t}},name:t,mount:!0,...u}}),v.mount.add(t),a?y&&m(d,t,u.disabled?void 0:c(d,t,ke(a._f))):re(t,!0,u.value),{...y?{disabled:u.disabled}:{},...s.shouldUseNativeValidation?{required:!!u.required,min:ne(u.min),max:ne(u.max),minLength:ne(u.minLength),maxLength:ne(u.maxLength),pattern:ne(u.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){xe(t,u),a=c(n,t);const o=k(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Ct(o),w=a._f.refs||[];if(h?w.find(D=>D===o):o===a._f.ref)return;m(n,t,{_f:{...a._f,...h?{refs:[...w.filter(Se),o,...Array.isArray(c(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),re(t,!1,void 0,o)}else a=c(n,t,{}),a._f&&(a._f.mount=!1),(s.shouldUnregister||u.shouldUnregister)&&!(Ye(v.array,t)&&g.action)&&v.unMount.add(t)}}},Be=()=>s.shouldFocusError&&Ee(n,t=>t&&c(r.errors,t),v.mount),yt=(t,u)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let y=G(d);if(V.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:o}=await q();r.errors=f,y=o}else await $(n);L(r.errors,"root"),B(r.errors)?(V.state.next({errors:{}}),await t(y,a)):(u&&await u({...r.errors},a),Be(),setTimeout(Be)),V.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ht=(t,u={})=>{c(n,t)&&(k(u.defaultValue)?Q(t,c(l,t)):(Q(t,u.defaultValue),m(l,t,u.defaultValue)),u.keepTouched||L(r.touchedFields,t),u.keepDirty||(L(r.dirtyFields,t),r.isDirty=u.defaultValue?b(t,c(l,t)):b()),u.keepError||(L(r.errors,t),x.isValid&&_()),V.state.next({...r}))},Ne=(t,u={})=>{const a=t||l,y=G(a),f=t&&!B(t)?y:l;if(u.keepDefaultValues||(l=a),!u.keepValues){if(u.keepDirtyValues||N)for(const o of v.mount)c(r.dirtyFields,o)?m(f,o,c(d,o)):Q(o,c(f,o));else{if(pe&&k(t))for(const o of v.mount){const h=c(n,o);if(h&&h._f){const w=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ye(w)){const D=w.closest("form");if(D){D.reset();break}}}}n={}}d=e.shouldUnregister?u.keepDefaultValues?G(l):{}:y,V.array.next({values:{...f}}),V.values.next({values:{...f}})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!g.mount&&i(),g.mount=!x.isValid||!!u.keepIsValid,g.watch=!!e.shouldUnregister,V.state.next({submitCount:u.keepSubmitCount?r.submitCount:0,isDirty:u.keepDirty?r.isDirty:!!(u.keepDefaultValues&&!X(t,l)),isSubmitted:u.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:u.keepDirtyValues?r.dirtyFields:u.keepDefaultValues&&t?De(l,t):{},touchedFields:u.keepTouched?r.touchedFields:{},errors:u.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Pe=(t,u)=>Ne(z(t)?t(d):t,u),gt=(t,u={})=>{const a=c(n,t),y=a&&a._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),u.shouldSelect&&f.select())}},vt=t=>{r={...r,...t}};return z(s.defaultValues)&&s.defaultValues().then(t=>{Pe(t,s.resetOptions),V.state.next({isLoading:!1})}),{control:{register:xe,unregister:Ae,getFieldState:Me,_executeSchema:q,_getWatch:S,_getDirty:b,_updateValid:_,_removeUnmounted:F,_updateFieldArray:j,_getFieldArray:R,_reset:Ne,_updateFormState:vt,_subjects:V,_proxyFormState:x,get _fields(){return n},get _formValues(){return d},get _state(){return g},set _state(t){g=t},get _defaultValues(){return l},get _names(){return v},set _names(t){v=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ue,register:xe,handleSubmit:yt,watch:dt,setValue:Q,getValues:Ue,reset:Pe,resetField:ht,clearErrors:ct,unregister:Ae,setError:ft,setFocus:gt,getFieldState:Me}}function Pt(e={}){const i=E.useRef(),[s,r]=E.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Mt(e,()=>r(l=>({...l}))),formState:s});const n=i.current.control;return n._options=e,Oe({subject:n._subjects.state,next:l=>{et(l,n._proxyFormState,n._updateFormState,!0)&&r({...n._formState})}}),E.useEffect(()=>{e.values&&!X(e.values,n._defaultValues)&&n._reset(e.values,n._options.resetOptions)},[e.values,n]),E.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),i.current.formState=Ze(s,n),i.current}export{Nt as C,Pt as u};