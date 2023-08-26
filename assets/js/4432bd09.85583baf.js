"use strict";(self.webpackChunkicc_guide=self.webpackChunkicc_guide||[]).push([[498],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),u=r(6550),i=r(1980),c=r(7392),s=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=i??p;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var h=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),n=c[r].value;n!==u&&(p(t),i(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},8110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));r(4866),r(5162);const l={sidebar_position:2.3,title:"\u0411\u043e\u0439 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u0445",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0431\u043e\u0441\u0441\u0430."},o=void 0,u={unversionedId:"icc/lower_spire/gunship_battle",id:"icc/lower_spire/gunship_battle",title:"\u0411\u043e\u0439 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u0445",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0431\u043e\u0441\u0441\u0430.",source:"@site/docs/icc/lower_spire/gunship_battle.md",sourceDirName:"icc/lower_spire",slug:"/icc/lower_spire/gunship_battle",permalink:"/LK_Guide/icc/lower_spire/gunship_battle",draft:!1,editUrl:"https://github.com/adeptsofcataclysm/LK_Guide/tree/source/docs/icc/lower_spire/gunship_battle.md",tags:[],version:"current",sidebarPosition:2.3,frontMatter:{sidebar_position:2.3,title:"\u0411\u043e\u0439 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u0445",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0431\u043e\u0441\u0441\u0430."},sidebar:"icc",previous:{title:"\u041b\u0435\u0434\u0438 \u0421\u043c\u0435\u0440\u0442\u043d\u044b\u0439 \u0428\u0435\u043f\u043e\u0442",permalink:"/LK_Guide/icc/lower_spire/lady_deathwhisper"},next:{title:"\u0421\u0430\u0443\u0440\u0444\u0430\u043d\u0433 \u0421\u043c\u0435\u0440\u0442\u043e\u043d\u043e\u0441\u043d\u044b\u0439",permalink:"/LK_Guide/icc/lower_spire/saurfang"}},i={},c=[{value:"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u044d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440\u0435",id:"\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438-\u043d\u0430-\u044d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440\u0435",level:2},{value:"\u041a\u043e\u0440\u0430\u0431\u043b\u044c",id:"\u043a\u043e\u0440\u0430\u0431\u043b\u044c",level:3}],s={toc:c},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("center",null,(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pervim_delom_samoleti",src:r(6105).Z,width:"850",height:"444"}))),(0,a.kt)("center",null,(0,a.kt)("i",null,(0,a.kt)("b",null,"\u0412\u043e\u0439\u043d\u0430, \u0432\u043e\u0439\u043d\u0430 \u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f"))),(0,a.kt)("p",null,'\u0422\u0440\u0435\u0442\u0438\u0439 \u044d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440 \u0432 "\u0448\u0442\u0443\u0440\u043c\u0435 \u0446\u0438\u0442\u0430\u0434\u0435\u043b\u0438". \u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u0431\u0435\u0434\u044b \u043d\u0430\u0434 \u041b\u0435\u0434\u0438 \u0421\u043c\u0435\u0440\u0442\u043d\u044b\u0439 \u0441\u0438\u043b\u044b \u0410\u043b\u044c\u044f\u043d\u0441\u0430 \u0438 \u041e\u0440\u0434\u044b \u043f\u043e\u043b\u0435\u0442\u0435\u043b\u0438 \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u044f\u0440\u0443\u0441 \u0426\u041b\u041a. \u0418\n\u043f\u043e\u043a\u0430 \u0422\u0438\u0440\u0438\u043e\u043d \u0424\u043e\u0440\u0434\u0440\u0438\u043d\u0433 \u0438 \u0422\u0440\u0430\u043b\u043b \u043d\u0435 \u0432\u0438\u0434\u044f\u0442, \u041c\u0443\u0440\u0430\u0434\u0438\u043d \u0438 \u0421\u0430\u0443\u0440\u0444\u0430\u043d\u0433\n\u0440\u0435\u0448\u0430\u044e\u0442 \u043f\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0432\u043e\u0439\u043d\u0443\u0448\u043a\u0443 \u043d\u0430 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u044b\u0445 \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u0445 (\u0434\u0430 \u0434\u0430 \u0434\u0430! \u0438\u043c\u043c\u0435\u043d\u043e \u0442\u0430\u043a \u0432\u0441\u0451 \u0438 \u0431\u044b\u043b\u043e!).'),(0,a.kt)("p",null,'\u042d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u043d\u0435\u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0438 \u043f\u043e \u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0444\u0430\u043d\u043e\u0432\u044b\u0439. \u041e\u0431\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f \u0438\u043c\u0435\u044e\u0442 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0442\u0438\u043f\u0430 "\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f" (\u0442.\u0435. \u043f\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u043c\n\u0432\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e "\u043e\u0441\u0430\u0434\u043d\u044b\u0439" \u0443\u0440\u043e\u043d). \u0417\u0430\u0434\u0430\u0447\u0438 \u0440\u0435\u0439\u0434\u0430:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'\u0421\u0442\u0440\u0435\u043b\u044f\u0442\u044c \u0438\u0437 \u043f\u0443\u0448\u0435\u043a \u043f\u043e \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u043e\u043c\u0443 \u043a\u043e\u0440\u0430\u0431\u043b\u044e (\u043d\u0430\u043d\u043e\u0441\u0438\u0442\u044c "\u043e\u0441\u0430\u0434\u043d\u044b\u0439" \u0443\u0440\u043e\u043d)'),(0,a.kt)("li",{parentName:"ol"},"\u0417\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u043f\u0430\u043b\u0443\u0431\u0443 \u0441\u0432\u043e\u0435\u0433\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044f \u043e\u0442 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u0438\u0445 \u0430\u0431\u043e\u0440\u0434\u0430\u0436\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434."),(0,a.kt)("li",{parentName:"ol"},"\u0418\u0434\u0442\u0438 \u043d\u0430 \u0430\u0431\u043e\u0440\u0434\u0430\u0436 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044f \u0438 \u0443\u0431\u0438\u0432\u0430\u0442\u044c \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0433\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u0440\u0435\u043c\u044f \u043e\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0437\u0430\u043c\u043e\u0440\u0430\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u0440\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0435\n\u043e\u0440\u0443\u0434\u0438\u044f.")),(0,a.kt)("p",null,"\u0412\u0441\u0451 \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f \u0443\u0441\u043b\u043e\u0432\u043d\u043e \u0442\u0440\u0435\u043c\u044f \u043b\u044e\u0434\u0435\u0439. 4 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0441\u0438\u0434\u044f\u0442 \u0432 \u043f\u0443\u0448\u043a\u0430\u0445 \u0438 \u0441\u0442\u0440\u0435\u043b\u044f\u044e\u0442 \u043f\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044e; 1 \u0442\u0430\u043d\u043a, 2 \u0445\u0438\u043b\u0430 \u0438 \u0447\u0430\u0441\u0442\u044c \u0414\u0414\n\u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0432 ",(0,a.kt)("strong",{parentName:"p"},"\u0437\u0430\u0449\u0438\u0442\u0435"),"; 1 \u0442\u0430\u043d\u043a, 2-3 \u0445\u0438\u043b\u0430 \u0438 \u043e\u0441\u0442\u0430\u0432\u0448\u0430\u044f\u0441\u044f \u0447\u0430\u0441\u0442\u044c \u0414\u0414 (",(0,a.kt)("strong",{parentName:"p"},'"\u0430\u0431\u043e\u0440\u0434\u0430\u0436\u043d\u0438\u043a\u0438"'),") \u0431\u0443\u0434\u0443\u0442 \u043b\u0435\u0442\u0435\u0442\u044c \u043d\u0430 \u0432\u0440\u0430\u0436\u0435\u0441\u043a\u0438\u0439 \u043a\u043e\u0440\u0430\u0431\u043b\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0436\u0435\u0442-\u043f\u0430\u043a\u043e\u0432."),(0,a.kt)("h2",{id:"\u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438-\u043d\u0430-\u044d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440\u0435"},"\u0421\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043d\u0430 \u044d\u043d\u043a\u0430\u0443\u043d\u0442\u0435\u0440\u0435"),(0,a.kt)("h3",{id:"\u043a\u043e\u0440\u0430\u0431\u043b\u044c"},"\u041a\u043e\u0440\u0430\u0431\u043b\u044c"),(0,a.kt)("p",null,"\u041d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0434\u0432\u0435 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438: \u043f\u0443\u0448\u043a\u0438 \u0438 \u0433\u043e\u0431\u043b\u0438\u043d\u0441\u043a\u0438\u0439 \u0434\u0436\u0435\u0442\u043f\u0430\u043a."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.wowhead.com/wotlk/ru/item=49278"},"\u0413\u043e\u0431\u043b\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u043a\u0435\u0442\u043d\u044b\u0439 \u0443\u0441\u043a\u043e\u0440\u0438\u0442\u0435\u043b\u044c"),": \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0435\u0434\u043c\u0435\u0442 \u0431\u0435\u0440\u0451\u0442\u0441\u044f \u0443")))}d.isMDXComponent=!0},6105:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/GB_intro-750ce3f76d26b23216c9758ed14717fb.png"}}]);