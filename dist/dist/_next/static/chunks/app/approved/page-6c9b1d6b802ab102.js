(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{1131:function(e,t,s){Promise.resolve().then(s.bind(s,5748))},5748:function(e,t,s){"use strict";s.r(t);var r=s(7437),n=s(7648),a=s(9376),i=s(2265),o=s(9981),c=s(6223);let u=()=>{let e=(0,a.useRouter)(),t=(0,a.useSearchParams)(),[s,c]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(!t)return;let s=t.get("request_token"),r=t.get("approved"),n=t.get("username");"true"===r&&s&&(async()=>{try{let t=await o.Z.post("/3/authentication/session/new",{request_token:s}),r=localStorage.getItem("userdb"),a=r?JSON.parse(r):[],i=a.find(e=>n===e.username);i?(i.sessionId=t.data.session_id,localStorage.setItem("user",JSON.stringify(i)),localStorage.setItem("userdb",JSON.stringify(a)),console.log("Session created:",t.data)):(console.error("User not found in local storage."),c("User not found in local storage.")),c("Request has been approved, redirecting to the page."),e.push("/")}catch(e){console.error("Error creating session:",e)}})()},[t,e]),(0,r.jsxs)("div",{className:"h-screen flex items-center justify-center text-black dark:text-white",children:[(0,r.jsx)("div",{children:s}),(0,r.jsx)(n.default,{href:"/",children:"Back to dashboard."})]})};t.default=(0,c.Q)(()=>(0,r.jsx)(i.Suspense,{fallback:(0,r.jsx)("div",{className:"h-screen flex items-center justify-center text-black dark:text-white",children:"Loading..."}),children:(0,r.jsx)(u,{})}))},6223:function(e,t,s){"use strict";s.d(t,{Q:function(){return i},v:function(){return o}});var r=s(7437),n=s(2265),a=s(9376);let i=e=>t=>{let s=(0,a.useRouter)();return(0,n.useEffect)(()=>{localStorage.getItem("user")||s.push("/login")},[s]),(0,r.jsx)(e,{...t})},o=e=>t=>{let s=(0,a.useRouter)();return(0,n.useEffect)(()=>{localStorage.getItem("user")&&s.push("/")},[s]),(0,r.jsx)(e,{...t})}},9981:function(e,t,s){"use strict";let r=s(3464).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDExNTRiZTU3ODExZDJhZjY2YTY3Y2IzNmJlNjU2NiIsIm5iZiI6MTcyOTEyMjYxOC41Mzk2NTUsInN1YiI6IjY3MGU1ZjdmMGI4MDA1MzdkNzVjZWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ydqrJxAM5ja3tZCKmktPtenQ68DkX_f6E-5m2kyVsA")}});t.Z=r}},function(e){e.O(0,[301,648,971,117,744],function(){return e(e.s=1131)}),_N_E=e.O()}]);