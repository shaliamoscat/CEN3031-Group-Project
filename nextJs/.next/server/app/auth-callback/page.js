(()=>{var e={};e.id=689,e.ids=[689],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},25721:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>p,routeModule:()=>m,tree:()=>u});var s=r(73137),a=r(54647),n=r(4183),o=r.n(n),i=r(71775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=s.AppPageRouteModule,u=["",{children:["auth-callback",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,59614)),"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/app/auth-callback/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,83642)),"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/app/auth-callback/page.tsx"],d="/auth-callback/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:a.x.APP_PAGE,page:"/auth-callback/page",pathname:"/auth-callback",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},87695:(e,t,r)=>{Promise.resolve().then(r.bind(r,30425))},30425:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(60080),a=r(57114),n=r(80066);let o=()=>{let e=(0,a.useRouter)(),t=(0,a.useSearchParams)(),r=t.get("origin");return n.S.authCallback.useQuery(void 0,{onSuccess:({success:t})=>{t&&e.push(r?`/${r}`:"/dashboard")},onError:t=>{t.data?.code==="UNAUTHORIZED"&&e.push("/sign-in")},retry:!0,retryDelay:500}),s.jsx("div",{className:"w-full mt-24 flex justify-center",children:s.jsx("div",{className:"flex flex-col items-center gap-2",children:s.jsx("h3",{className:"font-semibold text-xl",children:" Please login / signup "})})})}},59614:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var s=r(17536);let a=(0,s.createProxy)(String.raw`/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/app/auth-callback/page.tsx`),{__esModule:n,$$typeof:o}=a,i=a.default,l=i},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(96885);let a=e=>{let t=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},57114:(e,t,r)=>{e.exports=r(82778)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[691,308,885,974],()=>r(25721));module.exports=s})();