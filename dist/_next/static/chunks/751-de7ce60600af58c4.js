"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{9751:function(e,a,t){let s;t.d(a,{bZ:function(){return d},zx:function(){return x.z},Zb:function(){return N},XZ:function(){return w},Sh:function(){return y.DarkThemeToggle},Ok:function(){return L},__:function(){return Z},wp:function(){return X.Navbar},UG:function(){return J.NavbarBrand},kF:function(){return Q.NavbarCollapse},iV:function(){return W.NavbarLink},My:function(){return Y.NavbarToggle},oi:function(){return er.o}}),t(6595),t(4672),t(8044),t(9718);var r=t(7437),l=t(8913),i=t(3335),o=t(5247),n=t(8562);let d=({additionalContent:e,children:a,className:t,color:s="info",icon:d,onDismiss:c,rounded:m=!0,theme:h={},withBorderAccent:b,...f})=>{let u=(0,o.E)((0,n.gh)().alert,h);return(0,r.jsxs)("div",{className:(0,i.m6)(u.base,u.color[s],m&&u.rounded,b&&u.borderAccent,t),role:"alert",...f,children:[(0,r.jsxs)("div",{className:u.wrapper,"data-testid":"flowbite-alert-wrapper",children:[d&&(0,r.jsx)(d,{className:u.icon,"data-testid":"flowbite-alert-icon"}),(0,r.jsx)("div",{children:a}),"function"==typeof c&&(0,r.jsx)("button",{"aria-label":"Dismiss",className:(0,i.m6)(u.closeButton.base,u.closeButton.color[s]),onClick:c,type:"button",children:(0,r.jsx)(l.apv,{"aria-hidden":!0,className:u.closeButton.icon})})]}),e&&(0,r.jsx)("div",{children:e})]})};d.displayName="Alert";let c=({children:e,className:a,theme:t={},...s})=>{let l=(0,o.E)((0,n.gh)().avatar.group,t);return(0,r.jsx)("div",{"data-testid":"avatar-group-element",className:(0,i.m6)(l.base,a),...s,children:e})};c.displayName="Avatar.Group";let m=({className:e,href:a,theme:t={},total:s,...l})=>{let d=(0,o.E)((0,n.gh)().avatar.groupCounter,t);return(0,r.jsxs)("a",{href:a,className:(0,i.m6)(d.base,e),...l,children:["+",s]})};m.displayName="Avatar.GroupCounter";let h=({alt:e="",bordered:a=!1,children:t,className:s,color:l="light",img:d,placeholderInitials:c="",rounded:m=!1,size:h="md",stacked:b=!1,status:f,statusPosition:u="top-left",theme:g={},...p})=>{let x=(0,o.E)((0,n.gh)().avatar,g),N=(0,i.m6)(x.root.img.base,a&&x.root.bordered,a&&x.root.color[l],m&&x.root.rounded,b&&x.root.stacked,x.root.img.on,x.root.size[h]),j={className:(0,i.m6)(N,x.root.img.on),"data-testid":"flowbite-avatar-img"};return(0,r.jsxs)("div",{className:(0,i.m6)(x.root.base,s),"data-testid":"flowbite-avatar",...p,children:[(0,r.jsxs)("div",{className:"relative",children:[d?"string"==typeof d?(0,r.jsx)("img",{alt:e,src:d,...j}):d({alt:e,...j}):c?(0,r.jsx)("div",{className:(0,i.m6)(x.root.img.off,x.root.initials.base,b&&x.root.stacked,a&&x.root.bordered,a&&x.root.color[l],x.root.size[h],m&&x.root.rounded),"data-testid":"flowbite-avatar-initials-placeholder",children:(0,r.jsx)("span",{className:(0,i.m6)(x.root.initials.text),"data-testid":"flowbite-avatar-initials-placeholder-text",children:c})}):(0,r.jsx)("div",{className:(0,i.m6)(N,x.root.img.off),"data-testid":"flowbite-avatar-img",children:(0,r.jsx)("svg",{className:x.root.img.placeholder,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})})}),f&&(0,r.jsx)("span",{"data-testid":"flowbite-avatar-status",className:(0,i.m6)(x.root.status.base,x.root.status[f],x.root.statusPosition[u])})]}),t&&(0,r.jsx)("div",{children:t})]})};h.displayName="Avatar",Object.assign(h,{Group:c,Counter:m}),t(3401);var b=t(8852);let f=({children:e,...a})=>(0,r.jsx)("div",{"data-testid":"flowbite-banner",role:"banner",tabIndex:-1,...a,children:e});f.displayName="Banner",Object.assign(f,{CollapseButton:b.BannerCollapseButton});var u=t(2265);let g=(0,u.forwardRef)(({children:e,className:a,href:t,icon:s,theme:d={},...c},m)=>{let h=void 0!==t,b=(0,o.E)((0,n.gh)().breadcrumb.item,d);return(0,r.jsxs)("li",{className:(0,i.m6)(b.base,a),...c,children:[(0,r.jsx)(l.yoF,{"aria-hidden":!0,className:b.chevron,"data-testid":"flowbite-breadcrumb-separator"}),(0,r.jsxs)(h?"a":"span",{ref:m,className:b.href[h?"on":"off"],"data-testid":"flowbite-breadcrumb-item",href:t,children:[s&&(0,r.jsx)(s,{"aria-hidden":!0,className:b.icon}),e]})]})});g.displayName="Breadcrumb.Item";let p=({children:e,className:a,theme:t={},...s})=>{let l=(0,o.E)((0,n.gh)().breadcrumb.root,t);return(0,r.jsx)("nav",{"aria-label":"Breadcrumb",className:(0,i.m6)(l.base,a),...s,children:(0,r.jsx)("ol",{className:l.list,children:e})})};p.displayName="Breadcrumb",Object.assign(p,{Item:g});var x=t(2279);t(5463);let N=e=>{let{children:a,className:t,horizontal:s,href:l,theme:d={}}=e,c=void 0===l?"div":"a",m=v(e),h=(0,o.E)((0,n.gh)().card,d);return(0,r.jsxs)(c,{"data-testid":"flowbite-card",href:l,className:(0,i.m6)(h.root.base,h.root.horizontal[s?"on":"off"],l&&h.root.href,t),...m,children:[(0,r.jsx)(j,{...e}),(0,r.jsx)("div",{className:h.root.children,children:a})]})},j=({theme:e={},...a})=>{let t=(0,o.E)((0,n.gh)().card,e);return a.renderImage?a.renderImage(t,a.horizontal??!1):a.imgSrc?(0,r.jsx)("img",{"data-testid":"flowbite-card-image",alt:a.imgAlt??"",src:a.imgSrc,className:(0,i.m6)(t.img.base,t.img.horizontal[a.horizontal?"on":"off"])}):null},v=(s=["renderImage","imgSrc","imgAlt","children","className","horizontal","href","theme"],e=>{let a={};for(let t in e)s.includes(t)||(a[t]=e[t]);return a});t(7489);let w=(0,u.forwardRef)(({className:e,color:a="default",theme:t={},...s},l)=>{let d=(0,o.E)((0,n.gh)().checkbox,t);return(0,r.jsx)("input",{ref:l,type:"checkbox",className:(0,i.m6)(d.root.base,d.root.color[a],e),...s})});w.displayName="Checkbox",t(2155),t(6769),t(9504);var y=t(4242);t(9278),t(8955),t(8414),t(1892),t(4077),t(8629),t(2401),t(9254),t(2718);var E=t(6200);(0,u.forwardRef)(({className:e,color:a="gray",helperText:t,sizing:s="md",theme:l={},...d},c)=>{let m=(0,o.E)((0,n.gh)().fileInput,l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:(0,i.m6)(m.root.base,e),children:(0,r.jsx)("div",{className:m.field.base,children:(0,r.jsx)("input",{className:(0,i.m6)(m.field.input.base,m.field.input.colors[a],m.field.input.sizes[s]),...d,type:"file",ref:c})})}),t&&(0,r.jsx)(E.p,{color:a,children:t})]})}).displayName="FileInput",(0,u.forwardRef)(({label:e,helperText:a,color:t="default",sizing:s="md",variant:l,disabled:d=!1,theme:c={},className:m,...h},b)=>{let f=(0,u.useId)(),g=(0,o.E)((0,n.gh)().floatingLabel,c);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:(0,i.m6)("relative","standard"===l?"z-0":""),children:[(0,r.jsx)("input",{type:"text",id:h.id?h.id:"floatingLabel"+f,"aria-describedby":"outlined_success_help",className:(0,i.m6)(g.input[t][l][s],m),placeholder:" ","data-testid":"floating-label",disabled:d,...h,ref:b}),(0,r.jsx)("label",{htmlFor:h.id?h.id:"floatingLabel"+f,className:(0,i.m6)(g.label[t][l][s],m),children:e})]}),(0,r.jsx)("p",{id:"outlined_helper_text"+f,className:(0,i.m6)(g.helperText[t],m),children:a})]})}).displayName="FloatingLabel";var k=t(5552),I=t(7241);function R({theme:e}){return(0,n.Dc)(e),null}function F({mode:e,theme:a}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I.ThemeModeInit,{mode:e}),(0,r.jsx)(R,{theme:a}),(0,r.jsx)(k.ThemeClientInit,{theme:a})]})}let L=({children:e,theme:a})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{mode:a?.mode,theme:a?.theme}),e]});L.displayName="Flowbite";let z=({alt:e,className:a,children:t,href:s,name:l,src:d,theme:c={},...m})=>{let h=(0,o.E)((0,n.gh)().footer.brand,c);return(0,r.jsx)("div",{children:s?(0,r.jsxs)("a",{"data-testid":"flowbite-footer-brand",href:s,className:(0,i.m6)(h.base,a),...m,children:[(0,r.jsx)("img",{alt:e,src:d,className:h.img}),(0,r.jsx)("span",{"data-testid":"flowbite-footer-brand-span",className:h.span,children:l}),t]}):(0,r.jsx)("img",{alt:e,"data-testid":"flowbite-footer-brand",src:d,className:(0,i.m6)(h.img,a),...m})})},C=({by:e,className:a,href:t,theme:s={},year:l,...d})=>{let c=(0,o.E)((0,n.gh)().footer.copyright,s);return(0,r.jsxs)("div",{"data-testid":"flowbite-footer-copyright",className:(0,i.m6)(c.base,a),...d,children:["\xa9 ",l,t?(0,r.jsx)("a",{href:t,className:c.href,children:e}):(0,r.jsx)("span",{"data-testid":"flowbite-footer-copyright-span",className:c.span,children:e})]})},B=({className:e,theme:a={},...t})=>{let s=(0,o.E)((0,n.gh)().footer.divider,a);return(0,r.jsx)("hr",{"data-testid":"footer-divider",className:(0,i.m6)(s.base,e),...t})},S=({ariaLabel:e,className:a,href:t,icon:s,theme:l={},...d})=>{let c=(0,o.E)((0,n.gh)().footer.icon,l);return(0,r.jsx)("div",{children:t?(0,r.jsx)("a",{"aria-label":e,"data-testid":"flowbite-footer-icon",href:t,className:(0,i.m6)(c.base,a),...d,children:(0,r.jsx)(s,{className:c.size})}):(0,r.jsx)(s,{"data-testid":"flowbite-footer-icon",className:c.size,...d})})},T=({as:e="a",children:a,className:t,href:s,theme:l={},...d})=>{let c=(0,o.E)((0,n.gh)().footer.groupLink.link,l);return(0,r.jsx)("li",{className:(0,i.m6)(c.base,t),children:(0,r.jsx)(e,{href:s,className:c.href,...d,children:a})})},O=({children:e,className:a,col:t=!1,theme:s={},...l})=>{let d=(0,o.E)((0,n.gh)().footer.groupLink,s);return(0,r.jsx)("ul",{"data-testid":"footer-groupLink",className:(0,i.m6)(d.base,t&&d.col,a),...l,children:e})},G=({as:e="h2",className:a,theme:t={},title:s,...l})=>{let d=(0,o.E)((0,n.gh)().footer.title,t);return(0,r.jsx)(e,{"data-testid":"flowbite-footer-title",className:(0,i.m6)(d.base,a),...l,children:s})},_=({bgDark:e=!1,children:a,className:t,container:s=!1,theme:l={},...d})=>{let c=(0,o.E)((0,n.gh)().footer,l);return(0,r.jsx)("footer",{"data-testid":"flowbite-footer",className:(0,i.m6)(c.root.base,e&&c.root.bgDark,s&&c.root.container,t),...d,children:a})};_.displayName="Footer",C.displayName="Footer.Copyright",T.displayName="Footer.Link",z.displayName="Footer.Brand",O.displayName="Footer.LinkGroup",S.displayName="Footer.Icon",G.displayName="Footer.Title",B.displayName="Footer.Divider",Object.assign(_,{Copyright:C,Link:T,LinkGroup:O,Brand:z,Icon:S,Title:G,Divider:B});var A=t(1273);let D=(0,u.forwardRef)(({theme:e={},icon:a=A.tLl,className:t,...s},l)=>{let d=(0,o.E)((0,n.gh)().hr.icon,e);return(0,r.jsxs)("div",{className:d.base,children:[(0,r.jsx)("hr",{className:(0,i.m6)(d.hrLine,t),role:"separator","data-testid":"flowbite-hr-icon",ref:l,...s}),(0,r.jsx)("div",{className:d.icon.base,children:(0,r.jsx)(a,{"aria-hidden":!0,className:d.icon.icon})})]})}),M=(0,u.forwardRef)(({theme:e={},className:a,...t},s)=>{let l=(0,o.E)((0,n.gh)().hr.square,e);return(0,r.jsx)("hr",{className:(0,i.m6)(l.base,a),role:"separator","data-testid":"flowbite-hr-square",ref:s,...t})}),H=(0,u.forwardRef)(({theme:e={},text:a,className:t,...s},l)=>{let d=(0,o.E)((0,n.gh)().hr.text,e);return(0,r.jsxs)("div",{className:d.base,children:[(0,r.jsx)("hr",{className:(0,i.m6)(d.hrLine,t),"data-testid":"flowbite-hr-text",role:"separator",ref:l,...s}),(0,r.jsx)("span",{className:d.text,children:a})]})}),P=(0,u.forwardRef)(({theme:e={},className:a,...t},s)=>{let l=(0,o.E)((0,n.gh)().hr.trimmed,e);return(0,r.jsx)("hr",{className:(0,i.m6)(l.base,a),role:"separator","data-testid":"flowbite-hr-trimmed",ref:s,...t})}),q=(0,u.forwardRef)(({theme:e={},className:a,...t},s)=>{let l=(0,o.E)((0,n.gh)().hr.root,e);return(0,r.jsx)("hr",{className:(0,i.m6)(l.base,a),role:"separator","data-testid":"flowbite-hr",ref:s,...t})});q.displayName="HR",P.displayName="HR.Trimmed",D.displayName="HR.Icon",H.displayName="HR.Text",M.displayName="HR.Square",Object.assign(q,{Trimmed:P,Icon:D,Text:H,Square:M});let Z=({children:e,className:a,color:t="default",disabled:s=!1,theme:l={},value:d,...c})=>{let m=(0,o.E)((0,n.gh)().label,l);return(0,r.jsx)("label",{className:(0,i.m6)(m.root.base,m.root.colors[t],s&&m.root.disabled,a),"data-testid":"flowbite-label",...c,children:d??e??""})};Z.displayName="Label";let $=({children:e,className:a,icon:t,theme:s={},...l})=>{let d=(0,o.E)((0,n.gh)().list.item,s);return(0,r.jsxs)("li",{className:(0,i.m6)(d.withIcon[t?"on":"off"],a),...l,children:[t&&(0,r.jsx)(t,{className:(0,i.m6)(d.icon)}),e]})},K=({children:e,className:a,unstyled:t,nested:s,ordered:l,horizontal:d,theme:c={},...m})=>{let h=(0,o.E)((0,n.gh)().list,c);return(0,r.jsx)(l?"ol":"ul",{className:(0,i.m6)(h.root.base,h.root.ordered[l?"on":"off"],t&&h.root.unstyled,s&&h.root.nested,d&&h.root.horizontal,a),...m,children:e})};K.displayName="List",$.displayName="List.Item",Object.assign(K,{Item:$});let U=({active:e,children:a,className:t,href:s,icon:l,onClick:d,theme:c={},disabled:m,...h})=>{let b=(0,o.E)((0,n.gh)().listGroup.item,c),f=void 0!==s;return(0,r.jsx)("li",{className:(0,i.m6)(b.base,t),children:(0,r.jsxs)(f?"a":"button",{href:s,onClick:d,type:f?void 0:"button",disabled:m,className:(0,i.m6)(b.link.active[e?"on":"off"],b.link.disabled[m?"on":"off"],b.link.base,b.link.href[f?"on":"off"]),...h,children:[l&&(0,r.jsx)(l,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:b.link.icon}),a]})})},V=({children:e,className:a,theme:t={},...s})=>{let l=(0,o.E)((0,n.gh)().listGroup,t);return(0,r.jsx)("ul",{className:(0,i.m6)(l.root.base,a),...s,children:e})};V.displayName="ListGroup",U.displayName="ListGroup.Item",Object.assign(V,{Item:U}),t(1010),t(9223),t(878),t(3290),t(1221),t(4436),t(5865);var X=t(1045),J=t(3983),Q=t(4957),W=t(9819),Y=t(4894);let ee=(e,a)=>e>=a?[]:[...Array(a-e+1).keys()].map(a=>a+e),ea=({active:e,children:a,className:t,onClick:s,theme:l={},...d})=>{let c=(0,o.E)((0,n.gh)().pagination,l);return(0,r.jsx)("button",{type:"button",className:(0,i.m6)(e&&c.pages.selector.active,t),onClick:s,...d,children:a})};ea.displayName="Pagination.Button";let et=({children:e,className:a,onClick:t,theme:s={},disabled:l=!1,...d})=>{let c=(0,o.E)((0,n.gh)().pagination,s);return(0,r.jsx)("button",{type:"button",className:(0,i.m6)(l&&c.pages.selector.disabled,a),disabled:l,onClick:t,...d,children:e})};et.displayName="Pagination.Navigation";let es=({className:e,currentPage:a,layout:t="pagination",nextLabel:s="Next",onPageChange:d,previousLabel:c="Previous",renderPaginationButton:m=e=>(0,r.jsx)(ea,{...e}),showIcons:h=!1,theme:b={},totalPages:f,...u})=>{let g=(0,o.E)((0,n.gh)().pagination,b),p=Math.min(Math.max("pagination"===t?a+2:a+4,5),f),x=Math.max(1,p-4);return(0,r.jsxs)("nav",{className:(0,i.m6)(g.base,e),...u,children:["table"===t&&(0,r.jsxs)("div",{className:g.layout.table.base,children:["Showing ",(0,r.jsx)("span",{className:g.layout.table.span,children:x})," to\xa0",(0,r.jsx)("span",{className:g.layout.table.span,children:p})," of\xa0",(0,r.jsx)("span",{className:g.layout.table.span,children:f})," Entries"]}),(0,r.jsxs)("ul",{className:g.pages.base,children:[(0,r.jsx)("li",{children:(0,r.jsxs)(et,{className:(0,i.m6)(g.pages.previous.base,h&&g.pages.showIcon),onClick:()=>{d(Math.max(a-1,1))},disabled:1===a,children:[h&&(0,r.jsx)(l.DEl,{"aria-hidden":!0,className:g.pages.previous.icon}),c]})}),"pagination"===t&&ee(x,p).map(e=>(0,r.jsx)("li",{"aria-current":e===a?"page":void 0,children:m({className:(0,i.m6)(g.pages.selector.base,a===e&&g.pages.selector.active),active:e===a,onClick:()=>d(e),children:e})},e)),(0,r.jsx)("li",{children:(0,r.jsxs)(et,{className:(0,i.m6)(g.pages.next.base,h&&g.pages.showIcon),onClick:()=>{d(Math.min(a+1,f))},disabled:a===f,children:[s,h&&(0,r.jsx)(l.MOd,{"aria-hidden":!0,className:g.pages.next.icon})]})})]})]})};es.displayName="Pagination",Object.assign(es,{Button:ea}),t(6174),(0,u.forwardRef)(({className:e,theme:a={},...t},s)=>{let l=(0,o.E)((0,n.gh)().radio,a);return(0,r.jsx)("input",{ref:s,type:"radio",className:(0,i.m6)(l.root.base,e),...t})}).displayName="Radio",(0,u.forwardRef)(({className:e,sizing:a="md",theme:t={},...s},l)=>{let d=(0,o.E)((0,n.gh)().rangeSlider,t);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{"data-testid":"flowbite-range-slider",className:(0,i.m6)(d.root.base,e),children:(0,r.jsx)("div",{className:d.field.base,children:(0,r.jsx)("input",{ref:l,type:"range",className:(0,i.m6)(d.field.input.base,d.field.input.sizes[a]),...s})})})})}).displayName="RangeSlider",t(2327),t(2174),t(8396),(0,u.forwardRef)(({addon:e,children:a,className:t,color:s="gray",helperText:l,icon:d,shadow:c,sizing:m="md",theme:h={},...b},f)=>{let u=(0,o.E)((0,n.gh)().select,h);return(0,r.jsxs)("div",{className:(0,i.m6)(u.base,t),children:[e&&(0,r.jsx)("span",{className:u.addon,children:e}),(0,r.jsxs)("div",{className:u.field.base,children:[d&&(0,r.jsx)("div",{className:u.field.icon.base,children:(0,r.jsx)(d,{className:u.field.icon.svg})}),(0,r.jsx)("select",{className:(0,i.m6)(u.field.select.base,u.field.select.colors[s],u.field.select.sizes[m],u.field.select.withIcon[d?"on":"off"],u.field.select.withAddon[e?"on":"off"],u.field.select.withShadow[c?"on":"off"]),...b,ref:f,children:a}),l&&(0,r.jsx)(E.p,{color:s,children:l})]})]})}).displayName="Select",t(5199),t(946),t(6787),t(7274),t(1960),t(7604),t(1999),t(5088),t(4460),t(5728),t(4940),t(7334),t(2241),t(5336),t(5752),t(3194);var er=t(1137);(0,u.forwardRef)(({className:e,color:a="gray",helperText:t,shadow:s,theme:l={},...d},c)=>{let m=(0,o.E)((0,n.gh)().textarea,l);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("textarea",{ref:c,className:(0,i.m6)(m.base,m.colors[a],m.withShadow[s?"on":"off"],e),...d}),t&&(0,r.jsx)(E.p,{color:a,children:t})]})}).displayName="Textarea",t(1842),t(1505),t(4547),t(1346),t(6739),t(8139),t(5224),t(362),t(9682),(0,u.forwardRef)(({checked:e,className:a,color:t="blue",sizing:s="md",disabled:l,label:d,name:c,onChange:m,theme:h={},...b},f)=>{let g=(0,u.useId)(),p=(0,o.E)((0,n.gh)().toggleSwitch,h),x=()=>m(!e);return(0,r.jsxs)(r.Fragment,{children:[c&&e?(0,r.jsx)("input",{ref:f,checked:e,hidden:!0,name:c,readOnly:!0,type:"checkbox",className:"sr-only"}):null,(0,r.jsxs)("button",{"aria-checked":e,"aria-labelledby":`${g}-flowbite-toggleswitch-label`,disabled:l,id:`${g}-flowbite-toggleswitch`,onClick:()=>{x()},onKeyDown:e=>{"Enter"==e.code&&e.preventDefault()},role:"switch",tabIndex:0,type:"button",className:(0,i.m6)(p.root.base,p.root.active[l?"off":"on"],a),...b,children:[(0,r.jsx)("div",{"data-testid":"flowbite-toggleswitch-toggle",className:(0,i.m6)(p.toggle.base,p.toggle.checked[e?"on":"off"],e&&p.toggle.checked.color[t],p.toggle.sizes[s])}),d?.length?(0,r.jsx)("span",{"data-testid":"flowbite-toggleswitch-label",id:`${g}-flowbite-toggleswitch-label`,className:p.root.label,children:d}):null]})]})}).displayName="ToggleSwitch",t(5121),t(3283),t(6120)}}]);