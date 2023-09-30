"use strict";(self.webpackChunkicc_guide=self.webpackChunkicc_guide||[]).push([[647],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(7462),n=r(7294),l=r(6010),i=r(2466),o=r(6550),u=r(1980),c=r(7392),s=r(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,c]=f({queryString:r,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),k=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var k=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),a=c[r].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;t=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;t=s[r]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},2624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),l=r(4866),i=r(5162);const o={sidebar_position:1,slug:"/",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"Introduction page."},u=void 0,c={unversionedId:"icc/intro",id:"icc/intro",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"Introduction page.",source:"@site/docs/icc/intro.md",sourceDirName:"icc",slug:"/",permalink:"/LK_Guide/",draft:!1,editUrl:"https://github.com/adeptsofcataclysm/LK_Guide/tree/source/docs/icc/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"Introduction page."},sidebar:"icc",next:{title:"\u041d\u0438\u0436\u043d\u0438\u0439 \u042f\u0440\u0443\u0441",permalink:"/LK_Guide/icc/lower_spire/"}},s={},p=[{value:"\u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0426\u041b\u041a",id:"\u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435-\u0446\u043b\u043a",level:2},{value:"\u0428\u0442\u0443\u0440\u043c \u0426\u0438\u0442\u0430\u0434\u0435\u043b\u0438",id:"\u0448\u0442\u0443\u0440\u043c-\u0446\u0438\u0442\u0430\u0434\u0435\u043b\u0438",level:3},{value:"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044f\u0440\u0443\u0441",id:"\u0432\u0435\u0440\u0445\u043d\u0438\u0439-\u044f\u0440\u0443\u0441",level:3},{value:"\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u041a\u043e\u0440\u043e\u043b\u0451\u043c \u041b\u0438\u0447\u0451\u043c",id:"\u0441\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u0441-\u043a\u043e\u0440\u043e\u043b\u0451\u043c-\u043b\u0438\u0447\u0451\u043c",level:3}],d={toc:p},m="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u0446\u0438\u0442\u0430\u0434\u0435\u043b\u044c-\u043b\u0435\u0434\u044f\u043d\u043e\u0439-\u043a\u043e\u0440\u043e\u043d\u044b"},"\u0426\u0438\u0442\u0430\u0434\u0435\u043b\u044c \u041b\u0435\u0434\u044f\u043d\u043e\u0439 \u041a\u043e\u0440\u043e\u043d\u044b"),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://www.wowhcb.ru/adepts/icc/lich_king_snow_INTRO.gif",alt:"\u041a\u043e\u0440\u043e\u043b\u044c \u043b\u0438\u0447 \u0438 \u0441\u043d\u0435\u0436\u043e\u043a"}))),(0,n.kt)("p",null,"\u0426\u0438\u0442\u0430\u0434\u0435\u043b\u044c \u041b\u0435\u0434\u044f\u043d\u043e\u0439 \u041a\u043e\u0440\u043e\u043d\u044b \u2013 \u044d\u0442\u043e \u043a\u0443\u043b\u044c\u043c\u0438\u043d\u0430\u0446\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f Wrath of the Lich King."),(0,n.kt)("h2",{id:"\u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435-\u0446\u043b\u043a"},"\u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0426\u041b\u041a"),(0,n.kt)("p",null,"\u0426\u041b\u041a, \u043a\u0430\u043a \u0438 \u0423\u043b\u044c\u0434\u0443\u0430\u0440, \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0441\u0435\u043a\u0446\u0438\u0439. \u041e\u0434\u043d\u0430\u043a\u043e, \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0423\u043b\u044c\u0434\u0443\u0430\u0440\u0430, \u0442\u0443\u0442 \u043d\u0435\u0442 \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0431\u043e\u0441\u0441\u043e\u0432, \u043a\u0430\u043a,\n\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0418\u0433\u043d\u0438\u0441 \u0438\u043b\u0438 \u041e\u0441\u0442\u0440\u043e\u043a\u0440\u044b\u043b\u0430\u044f. \u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0440\u0435\u0439\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430 3 \u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0445 \u044d\u0442\u0430\u043f\u0430:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u0428\u0442\u0443\u0440\u043c \u0426\u0438\u0442\u0430\u0434\u0435\u043b\u0438"),(0,n.kt)("li",{parentName:"ol"},"\u041f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u044f\u0440\u0443\u0441\u0430 \u0426\u041b\u041a:",(0,n.kt)("br",{parentName:"li"}),"2.1 \u0427\u0443\u043c\u043e\u0434\u0435\u043b\u044c\u043d\u044f",(0,n.kt)("br",{parentName:"li"}),"2.2 \u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0439 \u0437\u0430\u043b",(0,n.kt)("br",{parentName:"li"}),"2.3 \u0417\u0430\u043b\u044b \u043b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445"),(0,n.kt)("li",{parentName:"ol"},"\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u041a\u043e\u0440\u043e\u043b\u0451\u043c \u041b\u0438\u0447\u0451\u043c")),(0,n.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u0432 \u0423\u043b\u044c\u0434\u0443\u0430\u0440\u0435, \u0432 \u0426\u041b\u041a \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u043e\u0432. \u041e\u043d\u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e \u043c\u0435\u0440\u0435 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0440\u0435\u0439\u0434\u0430."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("h3",{id:"\u0448\u0442\u0443\u0440\u043c-\u0446\u0438\u0442\u0430\u0434\u0435\u043b\u0438"},"\u0428\u0442\u0443\u0440\u043c \u0426\u0438\u0442\u0430\u0434\u0435\u043b\u0438")),(0,n.kt)("p",null,"\u042d\u0442\u0430 \u0447\u0430\u0441\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043b\u0438\u043d\u0435\u0439\u043d\u0430\u044f, \u0431\u043e\u0441\u0441\u044b \u0443\u0431\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/lower_spire/lord_marrowgar"},(0,n.kt)("strong",{parentName:"a"},"\u041b\u043e\u0440\u0434 \u0420\u0435\u0431\u0440\u0430\u0434")),(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/lower_spire/lady_deathwhisper"},(0,n.kt)("strong",{parentName:"a"},"\u041b\u0435\u0434\u0438 \u0421\u043c\u0435\u0440\u0442\u043d\u044b\u0439 \u0428\u0451\u043f\u043e\u0442")),(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/lower_spire/gunship_battle"},(0,n.kt)("strong",{parentName:"a"},"\u0411\u043e\u0439 \u043d\u0430 \u043a\u043e\u0440\u0430\u0431\u043b\u044f\u0445")),(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/lower_spire/saurfang"},(0,n.kt)("strong",{parentName:"a"},"\u0421\u0430\u0443\u0440\u0444\u0430\u043d\u0433 \u0421\u043c\u0435\u0440\u0442\u043e\u043d\u043e\u0441\u043d\u044b\u0439")),(0,n.kt)("br",null))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u041d\u0438\u0436\u043d\u0438\u0439 \u042f\u0440\u0443\u0441",src:r(4088).Z,width:"958",height:"642"})),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("h3",{id:"\u0432\u0435\u0440\u0445\u043d\u0438\u0439-\u044f\u0440\u0443\u0441"},"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044f\u0440\u0443\u0441")),(0,n.kt)("p",null,"\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u044f\u0440\u0443\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043e\u0433\u0440\u043e\u043c\u043d\u0443\u044e \u0447\u0430\u0441\u0442\u044c \u0446\u0438\u0442\u0430\u0434\u0435\u043b\u0438, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0438\u0433\u0440\u043e\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u0439\u0442\u0438 \u0432 \u0442\u0440\u0438 \u043a\u0440\u044b\u043b\u0430. \u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u043d\u0435\n\u0432\u0430\u0436\u0435\u043d, \u043e\u0434\u043d\u0430\u043a\u043e \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0447\u0438\u0449\u0435\u043d\u044b \u0432\u0441\u0435 \u0442\u0440\u0438 \u0447\u0430\u0441\u0442\u0438 \u044f\u0440\u0443\u0441\u0430, \u0440\u0435\u0439\u0434 \u043d\u0435 \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043a \u041a\u043e\u0440\u043e\u043b\u044e \u041b\u0438\u0447\u0443 \u0447\u0435\u0440\u0435\u0437 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439\n\u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"1111",label:"\u0427\u0443\u043c\u043e\u0434\u0435\u043b\u044c\u043d\u044f",mdxType:"TabItem"},(0,n.kt)("p",null,"\u0423\u0436\u0430\u0441\u043d\u0430\u044f \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u0438\u044f, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0440\u0437\u043a\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438\u0437 \u043f\u043b\u043e\u0442\u0438."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/plagueworks/festergut"},(0,n.kt)("strong",{parentName:"a"},"\u0422\u0443\u0445\u043b\u043e\u043f\u0443\u0437"))," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/plagueworks/rotface"},(0,n.kt)("strong",{parentName:"a"},"\u0413\u043d\u0438\u043b\u043e\u043c\u043e\u0440\u0434"))," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/plagueworks/putricide"},(0,n.kt)("strong",{parentName:"a"},"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440 \u041c\u0435\u0440\u0437\u043e\u0446\u0438\u0434"))," ",(0,n.kt)("br",null))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u041a \u041f\u0440\u043e\u0444\u0435\u0441\u0441\u043e\u0440\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0431\u0438\u0442\u044b \u043f\u0435\u0440\u0432\u044b\u0435 \u0434\u0432\u0430 \u0431\u043e\u043a\u043e\u0432\u044b\u0445 \u0431\u043e\u0441\u0441\u0430."))),(0,n.kt)(i.Z,{value:"2222",label:"\u0411\u0430\u0433\u0440\u043e\u0432\u044b\u0435 \u0437\u0430\u043b\u044b",mdxType:"TabItem"},(0,n.kt)("p",null,"\u041b\u043e\u0433\u043e\u0432\u043e \u044d\u043b\u044c\u0444\u043e\u0432-\u043a\u0440\u043e\u0432\u043e\u043f\u0438\u0439\u0446, \u0446\u0435\u043d\u0442\u0440 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043e\u043a \u0434\u0438\u0432\u0435\u0440\u0441\u0438\u0439 \u0438 \u0441\u043e\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0443\u043c\u043e\u0432 \u0432\u0440\u0430\u0433\u043e\u0432 \u043f\u043b\u0435\u0442\u0438."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/crimson_hall/blood_prince_council"},(0,n.kt)("strong",{parentName:"a"},"\u0421\u043e\u0432\u0435\u0442 \u041f\u0440\u0438\u0446\u0435\u0432 \u041a\u0440\u043e\u0432\u0438"))," (\u041a\u0435\u043b\u0435\u0441\u0435\u0442, \u0422\u0430\u043b\u0434\u0430\u0440\u0430\u043c, \u0412\u0430\u043b\u0430\u043d\u0430\u0440) ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/crimson_hall/lanathel"},(0,n.kt)("strong",{parentName:"a"},"\u041a\u0440\u043e\u0432\u0430\u0432\u0430\u044f \u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u041b\u0430\u043d\u0430'\u0442\u0435\u043b\u044c")),"."))),(0,n.kt)(i.Z,{value:"3333",label:"\u0417\u0430\u043b\u044b \u043b\u0435\u0434\u043e\u043a\u0440\u044b\u043b\u044b\u0445",mdxType:"TabItem"},(0,n.kt)("p",null,"\u0412 \u044d\u0442\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0446\u0438\u0442\u0430\u0434\u0435\u043b\u0438 \u0442\u0440\u0435\u043d\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432\u0440\u0430\u0439\u043a\u0443\u043b\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u043b\u0435\u0434\u044f\u043d\u044b\u0435 \u0437\u043c\u0435\u0438."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/frostwing_halls/valithria"},(0,n.kt)("strong",{parentName:"a"},"\u0412\u0430\u043b\u0438\u0442\u0440\u0438\u044f \u0421\u043d\u043e\u0445\u043e\u0434\u0438\u0446\u0430"))," ",(0,n.kt)("br",null),"\n",(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/frostwing_halls/sindragosa"},(0,n.kt)("strong",{parentName:"a"},"\u0421\u0438\u043d\u0434\u0440\u0430\u0433\u043e\u0441\u0430")),".")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u0432\u0442\u043e\u0440\u043e\u0439 \u044f\u0440\u0443\u0441",src:r(9249).Z,width:"958",height:"536"})),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("h3",{id:"\u0441\u0440\u0430\u0436\u0435\u043d\u0438\u0435-\u0441-\u043a\u043e\u0440\u043e\u043b\u0451\u043c-\u043b\u0438\u0447\u0451\u043c"},"\u0421\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0441 \u041a\u043e\u0440\u043e\u043b\u0451\u043c \u041b\u0438\u0447\u0451\u043c")),(0,n.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0437\u0430\u0447\u0438\u0441\u0442\u043a\u0438 \u0432\u0441\u0435\u0445 \u0431\u043e\u0441\u0441\u043e\u0432 \u0432\u043e \u0432\u0441\u0435\u0445 \u043a\u0440\u044b\u043b\u044c\u0435\u0432 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u044f\u0440\u0443\u0441\u0430 \u0438\u0433\u0440\u043e\u043a\u0438 \u0441\u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u0441\u0430\u043c\u0443\u044e \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u0426\u041b\u041a, \u043a \u041a\u043e\u0440\u043e\u043b\u044e \u041b\u0438\u0447\u0443.\n\u041c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0435 \u0446\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u0430\u043b\u0430 (\u043a\u0440\u0447 \u0441\u0438\u043d\u044f\u044f \u0437\u0432\u0435\u0437\u0434\u043e\u0447\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435). \u041d\u0438\u043a\u0430\u043a\u043e\u0433\u043e \u0442\u0440\u0435\u0448\u0430 \u0438\n\u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043a\u043e\u0440\u0438\u0434\u043e\u0440\u043e\u0432."),(0,n.kt)("div",{className:"text--center"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/LK_Guide/icc/the_lich_king"},(0,n.kt)("strong",{parentName:"a"},"\u041a\u043e\u0440\u043e\u043b\u044c \u041b\u0438\u0447")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u041b\u0435\u0434\u044f\u043d\u043e\u0439 \u0442\u043e\u043b\u0447\u043e\u043a",src:r(1373).Z,width:"958",height:"885"})),(0,n.kt)("p",null,"(Prepare to die)"))}f.isMDXComponent=!0},9249:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/\u0412\u0435\u0440\u0445\u043d\u0438\u0439_\u044f\u0440\u0443\u0441_\u0441\u043a\u043b\u0435\u0435\u043d\u043d\u044b\u0439-99b66035e2d26fd85f8a5de8be14df36.jpg"},1373:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/\u041b\u0435\u0434\u044f\u043d\u043e\u0439_\u0442\u0440\u043e\u043d-fe7a291b2893e5aeedd8abe6c4b70b10.jpg"},4088:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/\u041d\u0438\u0436\u043d\u0438\u0439_\u044f\u0440\u0443\u0441-92ce1c0aa309c740288ed892d01b18a5.jpg"}}]);