(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4669:function(e,r,o){Promise.resolve().then(o.t.bind(o,7960,23)),Promise.resolve().then(o.bind(o,4889)),Promise.resolve().then(o.bind(o,9085)),Promise.resolve().then(o.bind(o,6595)),Promise.resolve().then(o.bind(o,4672)),Promise.resolve().then(o.bind(o,8044)),Promise.resolve().then(o.bind(o,9718)),Promise.resolve().then(o.bind(o,8852)),Promise.resolve().then(o.bind(o,7489)),Promise.resolve().then(o.bind(o,2155)),Promise.resolve().then(o.bind(o,6769)),Promise.resolve().then(o.bind(o,9504)),Promise.resolve().then(o.bind(o,4242)),Promise.resolve().then(o.bind(o,9278)),Promise.resolve().then(o.bind(o,8414)),Promise.resolve().then(o.bind(o,1892)),Promise.resolve().then(o.bind(o,4077)),Promise.resolve().then(o.bind(o,8629)),Promise.resolve().then(o.bind(o,2401)),Promise.resolve().then(o.bind(o,9254)),Promise.resolve().then(o.bind(o,2718)),Promise.resolve().then(o.bind(o,4483)),Promise.resolve().then(o.bind(o,1010)),Promise.resolve().then(o.bind(o,9223)),Promise.resolve().then(o.bind(o,878)),Promise.resolve().then(o.bind(o,3290)),Promise.resolve().then(o.bind(o,1221)),Promise.resolve().then(o.bind(o,4436)),Promise.resolve().then(o.bind(o,5865)),Promise.resolve().then(o.bind(o,1045)),Promise.resolve().then(o.bind(o,3983)),Promise.resolve().then(o.bind(o,4957)),Promise.resolve().then(o.bind(o,9819)),Promise.resolve().then(o.bind(o,4894)),Promise.resolve().then(o.bind(o,6174)),Promise.resolve().then(o.bind(o,2327)),Promise.resolve().then(o.bind(o,8396)),Promise.resolve().then(o.bind(o,5199)),Promise.resolve().then(o.bind(o,6787)),Promise.resolve().then(o.bind(o,946)),Promise.resolve().then(o.bind(o,7274)),Promise.resolve().then(o.bind(o,1960)),Promise.resolve().then(o.bind(o,7604)),Promise.resolve().then(o.bind(o,1999)),Promise.resolve().then(o.bind(o,4460)),Promise.resolve().then(o.bind(o,5728)),Promise.resolve().then(o.bind(o,4940)),Promise.resolve().then(o.bind(o,7334)),Promise.resolve().then(o.bind(o,2241)),Promise.resolve().then(o.bind(o,5336)),Promise.resolve().then(o.bind(o,5752)),Promise.resolve().then(o.bind(o,3194)),Promise.resolve().then(o.bind(o,1842)),Promise.resolve().then(o.bind(o,1505)),Promise.resolve().then(o.bind(o,4547)),Promise.resolve().then(o.bind(o,1346)),Promise.resolve().then(o.bind(o,6739)),Promise.resolve().then(o.bind(o,8139)),Promise.resolve().then(o.bind(o,5224)),Promise.resolve().then(o.bind(o,362)),Promise.resolve().then(o.bind(o,9682)),Promise.resolve().then(o.bind(o,3283)),Promise.resolve().then(o.bind(o,5552)),Promise.resolve().then(o.bind(o,7241)),Promise.resolve().then(o.t.bind(o,1511,23)),Promise.resolve().then(o.t.bind(o,2221,23))},4889:function(e,r,o){"use strict";o.d(r,{AuthProvider:function(){return a},a:function(){return d}});var s=o(7437),n=o(2265),t=o(9981),i=o(9376);let l=(0,n.createContext)(void 0),a=e=>{let{children:r}=e,o=(0,i.useRouter)(),[a,d]=(0,n.useState)(null),[h,m]=(0,n.useState)(!0);(0,n.useEffect)(()=>{let e=localStorage.getItem("user");e&&(d(JSON.parse(e)),m(!1))},[]);let v=async e=>{try{let r=await t.Z.get("/3/authentication/token/new"),o=await r.data,s="https://www.themoviedb.org/authenticate/".concat(o.request_token,"?redirect_to=").concat("".concat("http://localhost:3000"),"/approved?username=").concat(e);window.open(s,"_blank")}catch(e){console.log(e)}},c=async(e,r)=>{let o=localStorage.getItem("userdb"),s=o?JSON.parse(o):[];if(s.find(r=>r.username===e))return!1;{await v(e);let o={username:e,password:r,sessionId:null};return s.push(o),localStorage.setItem("userdb",JSON.stringify(s)),d(o),!0}};return(0,s.jsx)(l.Provider,{value:{user:a,login:(e,r)=>{let o=localStorage.getItem("userdb"),s=(o?JSON.parse(o):[]).find(r=>r.username===e);return!!s&&s.password===r&&(s.sessionId||v(e),d(s),localStorage.setItem("user",JSON.stringify(s)),!0)},register:c,logout:()=>{d(null),localStorage.removeItem("user"),window.location.reload(),o.push("/")}},children:r})},d=()=>{let e=(0,n.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},9085:function(e,r,o){"use strict";o.d(r,{FavoriteProvider:function(){return a},s:function(){return d}});var s=o(7437),n=o(2265),t=o(9981),i=o(4889);let l=(0,n.createContext)(void 0),a=e=>{let{children:r}=e,{user:o}=(0,i.a)(),n=async()=>{let e=localStorage.getItem("user");try{console.log(e&&JSON.parse(e).sessionId);let r=await t.Z.get("/3/account/".concat("21572701","/favorite/movies?language=en-US&page=1&session_id=").concat(e&&JSON.parse(e).sessionId));return console.log(r.data.results),r.data.results}catch(e){return console.error("Error requesting GET favorites:",e),Promise.reject(e)}},a=async(e,r)=>{try{return!!(await t.Z.post("/3/account/".concat("21572701","/favorite?session_id=").concat(o&&o.sessionId),{media_type:"movie",media_id:e,favorite:r})).data.success}catch(e){return console.error("Error requesting POST favorite:",e),!1}};return(0,s.jsx)(l.Provider,{value:{getFavorites:n,addFavorite:a},children:r})},d=()=>{let e=(0,n.useContext)(l);if(void 0===e)throw Error("useFavorite must be used within a FavoriteProvider");return e}},9981:function(e,r,o){"use strict";let s=o(3464).Z.create({baseURL:"https://api.themoviedb.org",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDExNTRiZTU3ODExZDJhZjY2YTY3Y2IzNmJlNjU2NiIsIm5iZiI6MTcyOTEyMjYxOC41Mzk2NTUsInN1YiI6IjY3MGU1ZjdmMGI4MDA1MzdkNzVjZWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ydqrJxAM5ja3tZCKmktPtenQ68DkX_f6E-5m2kyVsA")}});r.Z=s},7960:function(){},2221:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},1511:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}}},function(e){e.O(0,[587,878,51,240,699,422,501,301,503,971,117,744],function(){return e(e.s=4669)}),_N_E=e.O()}]);