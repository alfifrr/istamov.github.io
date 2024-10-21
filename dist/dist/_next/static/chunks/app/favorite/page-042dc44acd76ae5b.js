(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[705],{7267:function(e,t,r){Promise.resolve().then(r.bind(r,9359))},9359:function(e,t,r){"use strict";r.r(t);var s=r(7437),a=r(1756),o=r(1410),n=r(6113),i=r(4889),l=r(9085),c=r(6223),d=r(2265);t.default=(0,c.Q)(()=>{let{getFavorites:e,addFavorite:t}=(0,l.s)(),{user:r}=(0,i.a)(),[c,u]=(0,d.useState)([]),[h,x]=(0,d.useState)([]);(0,d.useEffect)(()=>{e().then(e=>{console.log(e),x(e),u(e.map(e=>e.id))}).catch(e=>{console.error(e)})},[e,r]);let g=(e,r)=>{t(e,r).then(t=>{t?r?(u(t=>[...t,e]),console.log("Favorite added")):(u(t=>t.filter(t=>t!==e)),console.log("Favorite removed")):console.error("Could not update favorite list")}).catch(e=>{console.log("Error adding favorite:",e)})};return h?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.NavbarSection,{}),(0,s.jsx)("h2",{className:"text-3xl text-center my-4 font-bold text-gray-900 dark:text-white",children:"My Favorite Movies"}),h?(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center",children:h.map(e=>(0,s.jsx)(a.Z,{movie:e,onChange:g,user:r?{sessionId:r.sessionId}:{sessionId:null},checkedIds:c},e.id))}):(0,s.jsx)("div",{className:"text-xs text-center text-gray-900 dark:text-white",children:"No favorite movies found, add them by clicking on the checkboxes!"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.NavbarSection,{}),(0,s.jsx)("h2",{className:"text-3xl text-center my-4 font-bold text-gray-900 dark:text-white",children:"My Favorite Movies"}),(0,s.jsx)(n.Z,{})]})})},1756:function(e,t,r){"use strict";var s=r(7437);r(2265);var a=r(9751);let o={root:{base:"flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",children:"flex h-full flex-col justify-start gap-4 p-2",horizontal:{off:"flex-col",on:"flex-col md:max-w-xl md:flex-row"},href:"hover:bg-gray-100 dark:hover:bg-gray-700"},img:{base:"",horizontal:{off:"rounded-t-lg",on:"h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"}}};t.Z=e=>{let{movie:t,onChange:r,user:n,checkedIds:i}=e,l=i&&i.includes(t.id);return(0,s.jsxs)(a.Zb,{theme:o,style:{maxWidth:"200px",height:"auto"},className:"max-w-sm",imgAlt:t.title,imgSrc:"https://image.tmdb.org/t/p/".concat("w".concat(300)).concat(t.poster_path),children:[n&&n.sessionId&&(0,s.jsx)(a.XZ,{checked:l,onChange:e=>r&&r(t.id,e.target.checked)}),(0,s.jsx)("h5",{className:"text-2xl font-bold tracking-tight text-gray-900 dark:text-white",children:t.title}),(0,s.jsx)("p",{className:"font-normal text-gray-700 dark:text-gray-400",children:t.overview.length>50?"".concat(t.overview.substring(0,50),"..."):t.overview})]},t.id)}},1410:function(e,t,r){"use strict";r.d(t,{NavbarSection:function(){return l}});var s=r(7437),a=r(4889),o=r(9751),n=r(7648),i=r(2265);function l(){let{user:e,logout:t}=(0,a.a)(),[r,l]=(0,i.useState)(null);return(0,i.useEffect)(()=>{if(e)l(e.username);else{let e=localStorage.getItem("user");e&&l(JSON.parse(e).username)}},[e]),(0,s.jsxs)(o.wp,{fluid:!0,rounded:!0,children:[(0,s.jsx)(o.UG,{children:(0,s.jsxs)("span",{className:"self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white",children:["Welcome, ",r||"guest","!"]})}),(0,s.jsxs)("div",{className:"flex md:order-2",children:[r?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"flex items-center mr-4 text-black dark:text-white",children:r}),(0,s.jsx)(o.zx,{onClick:t,children:"Logout"})]}):(0,s.jsx)(n.default,{href:"/login",children:(0,s.jsx)(o.zx,{children:"Login"})}),(0,s.jsx)(o.Ok,{children:(0,s.jsx)(o.Sh,{})}),(0,s.jsx)(o.My,{})]}),(0,s.jsxs)(o.kF,{children:[e&&e.sessionId&&(0,s.jsx)(n.default,{href:"/favorite",children:(0,s.jsx)(o.iV,{as:"div",children:"Favorites"})}),(0,s.jsx)(n.default,{href:"/",children:(0,s.jsx)(o.iV,{as:"div",children:"Dashboard"})})]})]})}},6113:function(e,t,r){"use strict";var s=r(7437);r(2265),t.Z=()=>(0,s.jsx)("div",{className:"border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto",children:(0,s.jsxs)("div",{className:"animate-pulse flex space-x-4",children:[(0,s.jsx)("div",{className:"rounded-full bg-slate-700 h-10 w-10"}),(0,s.jsxs)("div",{className:"flex-1 space-y-6 py-1",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-700 rounded"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-4",children:[(0,s.jsx)("div",{className:"h-2 bg-slate-700 rounded col-span-2"}),(0,s.jsx)("div",{className:"h-2 bg-slate-700 rounded col-span-1"})]}),(0,s.jsx)("div",{className:"h-2 bg-slate-700 rounded"})]})]})]})})},4889:function(e,t,r){"use strict";r.d(t,{AuthProvider:function(){return l},a:function(){return c}});var s=r(7437),a=r(2265),o=r(9981),n=r(9376);let i=(0,a.createContext)(void 0),l=e=>{let{children:t}=e,r=(0,n.useRouter)(),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!0);(0,a.useEffect)(()=>{let e=localStorage.getItem("user");e&&(c(JSON.parse(e)),u(!1))},[]);let h=async e=>{try{let t=await o.Z.get("/3/authentication/token/new"),r=await t.data,s="https://www.themoviedb.org/authenticate/".concat(r.request_token,"?redirect_to=").concat("".concat("http://localhost:3000"),"/approved?username=").concat(e);window.open(s,"_blank")}catch(e){console.log(e)}},x=async(e,t)=>{let r=localStorage.getItem("userdb"),s=r?JSON.parse(r):[];if(s.find(t=>t.username===e))return!1;{await h(e);let r={username:e,password:t,sessionId:null};return s.push(r),localStorage.setItem("userdb",JSON.stringify(s)),c(r),!0}};return(0,s.jsx)(i.Provider,{value:{user:l,login:(e,t)=>{let r=localStorage.getItem("userdb"),s=(r?JSON.parse(r):[]).find(t=>t.username===e);return!!s&&s.password===t&&(s.sessionId||h(e),c(s),localStorage.setItem("user",JSON.stringify(s)),!0)},register:x,logout:()=>{c(null),localStorage.removeItem("user"),window.location.reload(),r.push("/")}},children:t})},c=()=>{let e=(0,a.useContext)(i);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},9085:function(e,t,r){"use strict";r.d(t,{FavoriteProvider:function(){return l},s:function(){return c}});var s=r(7437),a=r(2265),o=r(9981),n=r(4889);let i=(0,a.createContext)(void 0),l=e=>{let{children:t}=e,{user:r}=(0,n.a)(),a=async()=>{let e=localStorage.getItem("user");try{console.log(e&&JSON.parse(e).sessionId);let t=await o.Z.get("/3/account/".concat("21572701","/favorite/movies?language=en-US&page=1&session_id=").concat(e&&JSON.parse(e).sessionId));return console.log(t.data.results),t.data.results}catch(e){return console.error("Error requesting GET favorites:",e),Promise.reject(e)}},l=async(e,t)=>{try{return!!(await o.Z.post("/3/account/".concat("21572701","/favorite?session_id=").concat(r&&r.sessionId),{media_type:"movie",media_id:e,favorite:t})).data.success}catch(e){return console.error("Error requesting POST favorite:",e),!1}};return(0,s.jsx)(i.Provider,{value:{getFavorites:a,addFavorite:l},children:t})},c=()=>{let e=(0,a.useContext)(i);if(void 0===e)throw Error("useFavorite must be used within a FavoriteProvider");return e}},6223:function(e,t,r){"use strict";r.d(t,{Q:function(){return n},v:function(){return i}});var s=r(7437),a=r(2265),o=r(9376);let n=e=>t=>{let r=(0,o.useRouter)();return(0,a.useEffect)(()=>{localStorage.getItem("user")||r.push("/login")},[r]),(0,s.jsx)(e,{...t})},i=e=>t=>{let r=(0,o.useRouter)();return(0,a.useEffect)(()=>{localStorage.getItem("user")&&r.push("/")},[r]),(0,s.jsx)(e,{...t})}},9981:function(e,t,r){"use strict";let s=r(3464).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDExNTRiZTU3ODExZDJhZjY2YTY3Y2IzNmJlNjU2NiIsIm5iZiI6MTcyOTEyMjYxOC41Mzk2NTUsInN1YiI6IjY3MGU1ZjdmMGI4MDA1MzdkNzVjZWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ydqrJxAM5ja3tZCKmktPtenQ68DkX_f6E-5m2kyVsA")}});t.Z=s}},function(e){e.O(0,[51,240,699,422,501,301,503,648,751,971,117,744],function(){return e(e.s=7267)}),_N_E=e.O()}]);