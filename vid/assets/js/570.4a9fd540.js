"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[570],{7293:(e,n,t)=>{t.d(n,{A:()=>T});var i=t(6540),l=t(4848);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),o=t?.props.children;return{mdxAdmonitionTitle:o,rest:s.length>0?(0,l.jsx)(l.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var o=t(4164),a=t(1312),c=t(7559);const r={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,l.jsx)("div",{className:(0,o.A)(c.G.common.admonition,c.G.common.admonitionType(n),r.admonition,t),children:i})}function u(e){let{icon:n,title:t}=e;return(0,l.jsxs)("div",{className:r.admonitionHeading,children:[(0,l.jsx)("span",{className:r.admonitionIcon,children:n}),t]})}function m(e){let{children:n}=e;return n?(0,l.jsx)("div",{className:r.admonitionContent,children:n}):null}function h(e){const{type:n,icon:t,title:i,children:s,className:o}=e;return(0,l.jsxs)(d,{type:n,className:o,children:[(0,l.jsx)(u,{title:i,icon:t}),(0,l.jsx)(m,{children:s})]})}function f(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,l.jsx)(f,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function p(e){return(0,l.jsx)(h,{...x,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function v(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,l.jsx)(v,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,l.jsx)(h,{...g,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function C(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,l.jsx)(C,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,l.jsx)(h,{...b,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function N(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const L={icon:(0,l.jsx)(N,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function H(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const y={icon:(0,l.jsx)(H,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,l.jsx)(N,{}),title:(0,l.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const k={...{note:p,tip:j,info:A,warning:function(e){return(0,l.jsx)(h,{...L,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(h,{...y,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(p,{title:"secondary",...e}),important:e=>(0,l.jsx)(A,{title:"important",...e}),success:e=>(0,l.jsx)(j,{title:"success",...e}),caution:function(e){return(0,l.jsx)(h,{..._,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=s(e),t=(i=n.type,k[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),k.info));var i;return(0,l.jsx)(t,{...n})}},2857:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),l=t(8453),s=t(5260),o=t(1432),a=t(4848);function c(e){return(0,a.jsx)("code",{...e})}var r=t(8774);var d=t(4164),u=t(3427),m=t(2303),h=t(1422);const f={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function x(e){return!!e&&("SUMMARY"===e.tagName||x(e.parentElement))}function p(e,n){return!!e&&(e===n||p(e.parentElement,n))}function v(e){let{summary:n,children:t,...l}=e;(0,u.A)().collectAnchor(l.id);const s=(0,m.A)(),o=(0,i.useRef)(null),{collapsed:c,setCollapsed:r}=(0,h.u)({initialState:!l.open}),[v,g]=(0,i.useState)(l.open),j=i.isValidElement(n)?n:(0,a.jsx)("summary",{children:n??"Details"});return(0,a.jsxs)("details",{...l,ref:o,open:v,"data-collapsed":c,className:(0,d.A)(f.details,s&&f.isBrowser,l.className),onMouseDown:e=>{x(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;x(n)&&p(n,o.current)&&(e.preventDefault(),c?(r(!1),g(!0)):r(!0))},children:[j,(0,a.jsx)(h.N,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{r(e),g(!e)},children:(0,a.jsx)("div",{className:f.collapsibleContent,children:t})})]})}const g={details:"details_b_Ee"},j="alert alert--info";function C(e){let{...n}=e;return(0,a.jsx)(v,{...n,className:(0,d.A)(j,g.details,n.className)})}function b(e){const n=i.Children.toArray(e.children),t=n.find((e=>i.isValidElement(e)&&"summary"===e.type)),l=(0,a.jsx)(a.Fragment,{children:n.filter((e=>e!==t))});return(0,a.jsx)(C,{...e,summary:t,children:l})}var A=t(1107);function N(e){return(0,a.jsx)(A.A,{...e})}const L={containsTaskList:"containsTaskList_mC6p"};function H(e){if(void 0!==e)return(0,d.A)(e,e?.includes("contains-task-list")&&L.containsTaskList)}const y={img:"img_ev3q"};var _=t(7293),k=t(418);const T={Head:s.A,details:b,Details:b,code:function(e){return function(e){return void 0!==e.children&&i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,a.jsx)(c,{...e}):(0,a.jsx)(o.A,{...e})},a:function(e){return(0,a.jsx)(r.A,{...e})},pre:function(e){return(0,a.jsx)(a.Fragment,{children:e.children})},ul:function(e){return(0,a.jsx)("ul",{...e,className:H(e.className)})},li:function(e){return(0,u.A)().collectAnchor(e.id),(0,a.jsx)("li",{...e})},img:function(e){return(0,a.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,d.A)(n,y.img))});var n},h1:e=>(0,a.jsx)(N,{as:"h1",...e}),h2:e=>(0,a.jsx)(N,{as:"h2",...e}),h3:e=>(0,a.jsx)(N,{as:"h3",...e}),h4:e=>(0,a.jsx)(N,{as:"h4",...e}),h5:e=>(0,a.jsx)(N,{as:"h5",...e}),h6:e=>(0,a.jsx)(N,{as:"h6",...e}),admonition:_.A,mermaid:k.A};function w(e){let{children:n}=e;return(0,a.jsx)(l.x,{components:T,children:n})}},7763:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var i=t(4164),l=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(4848);const a="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function r(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(l.A,{...t,linkClassName:a,linkActiveClassName:c})})}},9765:(e,n,t)=>{t.d(n,{A:()=>u});t(6540);var i=t(4164),l=t(1422),s=t(5195),o=t(1312);const a={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var c=t(4848);function r(e){let{collapsed:n,...t}=e;return(0,c.jsx)("button",{type:"button",...t,className:(0,i.A)("clean-btn",a.tocCollapsibleButton,!n&&a.tocCollapsibleButtonExpanded,t.className),children:(0,c.jsx)(o.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const d={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function u(e){let{toc:n,className:t,minHeadingLevel:o,maxHeadingLevel:a}=e;const{collapsed:u,toggleCollapsed:m}=(0,l.u)({initialState:!0});return(0,c.jsxs)("div",{className:(0,i.A)(d.tocCollapsible,!u&&d.tocCollapsibleExpanded,t),children:[(0,c.jsx)(r,{collapsed:u,onClick:m}),(0,c.jsx)(l.N,{lazy:!0,className:d.tocCollapsibleContent,collapsed:u,children:(0,c.jsx)(s.A,{toc:n,minHeadingLevel:o,maxHeadingLevel:a})})]})}},5195:(e,n,t)=>{t.d(n,{A:()=>x});var i=t(6540),l=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):i.push(l)})),i}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function a(e){const n=e.getBoundingClientRect();return n.top===n.bottom?a(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>a(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function r(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=r();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:l,minHeadingLevel:s,maxHeadingLevel:o}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let l=n;l<=t;l+=1)i.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),r=c(a,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])}var u=t(8774),m=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:l}=e;return n.length?(0,m.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const x=(0,l.p)(),p=r??x.tableOfContents.minHeadingLevel,v=u??x.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,i.useMemo)((()=>o({toc:s(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:p,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:p,maxHeadingLevel:v}}),[a,c,p,v])),(0,m.jsx)(f,{toc:g,className:t,linkClassName:a,...h})}},996:(e,n,t)=>{t.d(n,{A:()=>h});t(6540);var i=t(4164),l=t(1312),s=t(5260),o=t(4848);function a(){return(0,o.jsx)(l.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,o.jsx)(l.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,o.jsx)(s.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(a,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(c,{})})}function h(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{}),(0,o.jsx)(m,{...e})]})}}}]);