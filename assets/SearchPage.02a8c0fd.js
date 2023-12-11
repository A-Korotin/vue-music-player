import{c as P,r as h,a as d,f as X,o as H,h as m,l as J,p as W,T as G,d as Y,H as Z,a4 as L,a5 as y,ai as B,af as R,a7 as O,a8 as q,aa as ee,aA as te,az as ae,ae as M,a6 as $,ag as Q,ah as E,ac as ie,ad as re}from"./index.587891a8.js";import{b as ne}from"./format.801e7424.js";import{T as se,p as le}from"./TrackCard.e61f03a3.js";import{a as oe}from"./axios.6e1fcf85.js";import{Q as ue}from"./QCard.e8e8d238.js";const I=XMLHttpRequest,D=I.prototype.open,ce=["top","right","bottom","left"];let j=[],k=0;function de({p:e,pos:t,active:n,horiz:o,reverse:u,dir:s}){let i=1,a=1;return o===!0?(u===!0&&(i=-1),t==="bottom"&&(a=-1),{transform:`translate3d(${i*(e-100)}%,${n?0:a*-200}%,0)`}):(u===!0&&(a=-1),t==="right"&&(i=-1),{transform:`translate3d(${n?0:s*i*-200}%,${a*(e-100)}%,0)`})}function fe(e,t){return typeof t!="number"&&(e<25?t=Math.random()*3+3:e<65?t=Math.random()*3:e<85?t=Math.random()*2:e<99?t=.6:t=0),ne(e+t,0,100)}function me(e){k++,j.push(e),!(k>1)&&(I.prototype.open=function(t,n){const o=[],u=()=>{j.forEach(i=>{(i.hijackFilter.value===null||i.hijackFilter.value(n)===!0)&&(i.start(),o.push(i.stop))})},s=()=>{o.forEach(i=>{i()})};this.addEventListener("loadstart",u,{once:!0}),this.addEventListener("loadend",s,{once:!0}),D.apply(this,arguments)})}function he(e){j=j.filter(t=>t.start!==e),k=Math.max(0,k-1),k===0&&(I.prototype.open=D)}var ve=P({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>ce.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:t}){const{proxy:n}=J(),o=h(0),u=h(!1),s=h(!0);let i=0,a=null,l;const f=d(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(s.value===!0?"":" no-transition")),v=d(()=>e.position==="top"||e.position==="bottom"),z=d(()=>v.value===!0?"height":"width"),w=d(()=>{const c=u.value,g=de({p:o.value,pos:e.position,active:c,horiz:v.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:n.$q.lang.rtl===!0?-1:1});return g[z.value]=e.size,g.opacity=c?1:0,g}),A=d(()=>u.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":o.value}:{"aria-hidden":"true"});function S(c=300){const g=l;return l=Math.max(0,c)||0,i++,i>1?(g===0&&c>0?_():a!==null&&g>0&&c<=0&&(clearTimeout(a),a=null),i):(a!==null&&clearTimeout(a),t("start"),o.value=0,a=setTimeout(()=>{a=null,s.value=!0,c>0&&_()},u.value===!0?500:1),u.value!==!0&&(u.value=!0,s.value=!1),i)}function b(c){return i>0&&(o.value=fe(o.value,c)),i}function p(){if(i=Math.max(0,i-1),i>0)return i;a!==null&&(clearTimeout(a),a=null),t("stop");const c=()=>{s.value=!0,o.value=100,a=setTimeout(()=>{a=null,u.value=!1},1e3)};return o.value===0?a=setTimeout(c,1):c(),i}function _(){o.value<100&&(a=setTimeout(()=>{a=null,b(),_()},l))}let T;return X(()=>{e.skipHijack!==!0&&(T=!0,me({start:S,stop:p,hijackFilter:d(()=>e.hijackFilter||null)}))}),H(()=>{a!==null&&clearTimeout(a),T===!0&&he(S)}),Object.assign(n,{start:S,stop:p,increment:b}),()=>m("div",{class:f.value,style:w.value,...A.value})}});const ge="http://localhost:3000",pe=oe.create({baseURL:ge});class _e{constructor(t){this.api=t}async search(t){const o={method:"GET",url:"https://deezerdevs-deezer.p.rapidapi.com/search",params:{q:t},headers:{"X-RapidAPI-Key":"bd64f7aebfmsh7203062447d77f1p17a7b3jsn355f0d6dbb7b","X-RapidAPI-Host":"deezerdevs-deezer.p.rapidapi.com"}};return this.api(o)}}const F=new _e(pe),ye={ratio:[String,Number]};function Se(e,t){return d(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const be=16/9;var ke=P({name:"QImg",props:{...ye,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:be},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const o=h(e.initialRatio),u=Se(e,o);let s=null,i=!1;const a=[h(null),h(p())],l=h(0),f=h(!1),v=h(!1),z=d(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=d(()=>({width:e.width,height:e.height})),A=d(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),S=d(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));W(()=>b(),_);function b(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function p(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function _(r){s!==null&&(clearTimeout(s),s=null),v.value=!1,r===null?(f.value=!1,a[l.value^1].value=p()):f.value=!0,a[l.value].value=r}function T({target:r}){i!==!0&&(s!==null&&(clearTimeout(s),s=null),o.value=r.naturalHeight===0?.5:r.naturalWidth/r.naturalHeight,c(r,1))}function c(r,x){i===!0||x===1e3||(r.complete===!0?g(r):s=setTimeout(()=>{s=null,c(r,x+1)},50))}function g(r){i!==!0&&(l.value=l.value^1,a[l.value].value=null,f.value=!1,v.value=!1,n("load",r.currentSrc||r.src))}function U(r){s!==null&&(clearTimeout(s),s=null),f.value=!1,v.value=!0,a[l.value].value=null,a[l.value^1].value=p(),n("error",r)}function N(r){const x=a[r].value,C={key:"img_"+r,class:A.value,style:S.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...x};return l.value===r?(C.class+=" q-img__image--waiting",Object.assign(C,{onLoad:T,onError:U})):C.class+=" q-img__image--loaded",m("div",{class:"q-img__container absolute-full",key:"img"+r},m("img",C))}function V(){return f.value!==!0?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},Y(t[v.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[m(Z,{color:e.spinnerColor,size:e.spinnerSize})])}return _(b()),H(()=>{i=!0,s!==null&&(clearTimeout(s),s=null)}),()=>{const r=[];return u.value!==null&&r.push(m("div",{key:"filler",style:u.value})),v.value!==!0&&(a[0].value!==null&&r.push(N(0)),a[1].value!==null&&r.push(N(1))),r.push(m(G,{name:"q-transition--fade"},V)),m("div",{class:z.value,style:w.value,role:"img","aria-label":e.alt},r)}}});const qe={props:{name:{type:String,required:!0},picture:{type:String,required:!0}}},Te={class:"absolute-bottom text-h6"};function xe(e,t,n,o,u,s){return y(),B(ue,{class:"artist-card fit inline cursor-pointer border-hover bg-primary q-mr-sm"},{default:R(()=>[O(ke,{src:this.picture},{default:R(()=>[q("div",Te,ee(n.name),1)]),_:1},8,["src"])]),_:1})}var Ce=L(qe,[["render",xe],["__scopeId","data-v-7c7e32ec"]]);const je={data(){return{tracks:[],artists:[]}},props:{query:{type:String,required:!1,default:"Bones"}},setup(e){return{reactiveQuery:te(e,"query")}},computed:{...ae(le,["queue"])},methods:{filterArtists(e){let t=e.map(n=>JSON.stringify({id:n.artist.id,name:n.artist.name,picture:n.artist.picture_big}));return t=Array.from(new Set(t)).slice(0,5),t.map(n=>JSON.parse(n))},onTrackPlay(){this.queue=this.tracks}},async mounted(){const t=(await F.search(this.query)).data.data;this.tracks=t,this.artists=this.filterArtists(t)},watch:{reactiveQuery:{async handler(e,t){console.log(e,t);const o=(await F.search(this.query)).data.data;this.tracks=o,this.artists=this.filterArtists(o)}}},components:{TrackCard:se,ArtistCard:Ce}},K=e=>(ie("data-v-baffec16"),e=e(),re(),e),ze={class:"container bg-primary column q-pl-sm"},we=K(()=>q("h6",null,"Artists",-1)),Ae={class:"row fit inline"},$e=K(()=>q("h6",null,"Tracks",-1)),Be={class:"column fit inline"};function Ie(e,t,n,o,u,s){const i=M("ArtistCard"),a=M("TrackCard");return y(),$("main",ze,[O(ve,{ref:"bar",position:"top",color:"secondary",size:"5px"},null,512),we,q("section",Ae,[(y(!0),$(Q,null,E(u.artists,l=>(y(),B(i,{key:l.id,name:l.name,picture:l.picture},null,8,["name","picture"]))),128))]),$e,q("section",Be,[(y(!0),$(Q,null,E(u.tracks,(l,f)=>(y(),B(a,{key:l.id,id:l.id,name:l.title,artist:l.artist.name,cover:l.album.cover_small,duration:l.duration,preview:l.preview,index:f,onClick:s.onTrackPlay},null,8,["id","name","artist","cover","duration","preview","index","onClick"]))),128))])])}var Fe=L(je,[["render",Ie],["__scopeId","data-v-baffec16"]]);export{Fe as default};