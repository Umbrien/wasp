(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5290],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2908:function(e,t,n){"use strict";var a=n(7294),r=n(6742),o=n(4996),i=function(){return a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 ")};t.Z=function(){return a.createElement("p",null,a.createElement(r.Z,{className:"in-blog-cta--link",to:(0,o.Z)("/docs")},"We are in Alpha (try it out)!"),a.createElement(i,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(i,null),a.createElement(r.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(9756),r=n(7294),o=n(3727),i=n(2263),s=n(3919),l=n(412),u=(0,r.createContext)({collectLink:function(){}}),c=n(4996),d=n(8780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,m=e.isNavLink,h=e.to,f=e.href,g=e.activeClassName,b=e.isActive,w=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,k=(0,a.Z)(e,p),I=(0,i.Z)().siteConfig,j=I.trailingSlash,O=I.baseUrl,W=(0,c.C)().withBaseUrl,C=(0,r.useContext)(u),x=h||f,E=(0,s.Z)(x),S=null==x?void 0:x.replace("pathname://",""),P=void 0!==S?(n=S,y&&function(e){return e.startsWith("/")}(n)?W(n):n):void 0;P&&E&&(P=(0,d.applyTrailingSlash)(P,{trailingSlash:j,baseUrl:O}));var M,N=(0,r.useRef)(!1),Z=m?o.OL:o.rU,T=l.Z.canUseIntersectionObserver;(0,r.useEffect)((function(){return!T&&E&&null!=P&&window.docusaurus.prefetch(P),function(){T&&M&&M.disconnect()}}),[P,T,E]);var _=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,U=!P||!E||_;return P&&E&&!_&&!w&&C.collectLink(P),U?r.createElement("a",Object.assign({href:P},x&&!E&&{target:"_blank",rel:"noopener noreferrer"},k)):r.createElement(Z,Object.assign({},k,{onMouseEnter:function(){N.current||null==P||(window.docusaurus.preload(P),N.current=!0)},innerRef:function(e){var t,n;T&&e&&E&&(t=e,n=function(){null!=P&&window.docusaurus.prefetch(P)},(M=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(t),M.disconnect(),n())}))}))).observe(t))},to:P||""},m&&{isActive:b,activeClassName:g}))}},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var a=n(2263),r=n(3919);function o(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,o=e.split(/[#?]/)[0],i="/"===o||o===a?o:(r=o,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,i)}},8780:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var o=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(o).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(6742),n(4996),n(2908)),s=n(589),l=["components"],u={title:"Meet the team - Martijn Faassen, Founding Engineer",author:"Matija Sosic",author_title:"CEO & Co-founder @ Wasp",author_url:"https://github.com/matijasos",author_image_url:"https://github.com/matijasos.png",image:"/img/martijn-intro-banner.png",tags:["wasp","new-hire"]},c=void 0,d={permalink:"/blog/2022/02/03/martijn-intro",editUrl:"https://github.com/wasp-lang/wasp/edit/master/web/blog/blog/2022-02-03-martijn-intro.md",source:"@site/blog/2022-02-03-martijn-intro.md",title:"Meet the team - Martijn Faassen, Founding Engineer",description:"Welcome Martijn!",date:"2022-02-03T00:00:00.000Z",formattedDate:"February 3, 2022",tags:[{label:"wasp",permalink:"/blog/tags/wasp"},{label:"new-hire",permalink:"/blog/tags/new-hire"}],readingTime:4.485,truncated:!1,authors:[{name:"Matija Sosic",title:"CEO & Co-founder @ Wasp",url:"https://github.com/matijasos",imageURL:"https://github.com/matijasos.png"}],nextItem:{title:"Build a metrics dashboard with background jobs in Wasp - Say hello to Waspleau!",permalink:"/blog/2022/01/27/waspleau"}},p={authorsImageUrls:[void 0]},m=[],h={toc:m};function f(e){var t=e.components,u=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Welcome Martijn!",src:n(6958).Z})),(0,o.kt)("p",null,"Find Martijn on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/faassen"},"Twitter")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/faassen"},"GitHub"),"."),(0,o.kt)(s.ZP,{mdxType:"WaspIntro"}),(0,o.kt)(i.Z,{mdxType:"InBlogCta"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Martijn, welcome to the Wasp team!")," Martijn is an experienced full-stack engineer and seasoned OSS contributor and author - he is one of the early adopters and evangelists of Python, back in the day when you had to explain to other developers that Python is a cool new language they should try out (sounds familiar, right? ;)). His passion is ",(0,o.kt)("a",{parentName:"p",href:"https://blog.startifact.com/posts/framework-patterns-javascript-edition/"},"building and designing web frameworks")," and he has authored and contributed to numerous OSS projects such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lxml/lxml"},"lxml"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/reselect"},"reselect")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/morepath/morepath"},"Morepath"),". We're more than excited about the opportunity to work together!"),(0,o.kt)("h4",{id:"why-did-you-join-wasp"},"Why did you join Wasp?"),(0,o.kt)("p",null,"I have been using web frameworks since before the term \u201cweb framework\u201d had come into common usage. I have also been building them - obscure frameworks that never became very popular, but I did learn a lot. I\u2019ve worked on several server-side web frameworks in Python, a client-side web framework in JavaScript before it was cool, and a number of web form frameworks. I\u2019m drawn to building frameworks. I\u2019ve written a few blog posts about ",(0,o.kt)("a",{parentName:"p",href:"https://blog.startifact.com/posts/framework-patterns-javascript-edition/"},"framework patterns"),"."),(0,o.kt)("p",null,"So when the founders of Wasp contacted me and asked me to join them to build a web framework together, it was easy to say yes. I\u2019m really excited to put a lot of what I\u2019ve learned about web frameworks to use, and to learn a lot more about them along the way."),(0,o.kt)("h4",{id:"what-did-you-do-before"},"What did you do before?"),(0,o.kt)("p",null,"I\u2019ve been a web developer for almost 25 years now. I was an early adopter of the Python programming language \u2014 I remember I had to explain to other programmers what it was. Over the years I\u2019ve worked on many web applications: invoice processing software, a CMS, quite a few in-house applications for a range of organizations, and so on. I started when web development was all on the server side, and I evolved with it as JavaScript and later TypeScript became more important."),(0,o.kt)("h4",{id:"what-is-your-favorite-languageframework"},"What is your favorite language/framework?"),(0,o.kt)("p",null,"I\u2019ve worked with Python for decades. The language has been really good to me. But I enjoy learning new programming languages, and I\u2019ve read the manuals for many more. Of course just reading a manual isn't the same as speaking a language! As to the languages that I did learned to speak, I\u2019ve been really enjoying TypeScript the last few years and I have also learned Rust on the side, though I haven\u2019t used it for any customer projects yet. I like languages that stretch my brain, so getting to pick up Haskell for Wasp makes me happy."),(0,o.kt)("h4",{id:"what-are-you-most-excited-about-in-wasp"},"What are you most excited about in Wasp?"),(0,o.kt)("p",null,"Wasp combines existing systems into something new. I believe the whole can be greater than the sum of its parts, and I get to be part of discovering that new whole. Wasp is an opportunity to think about web frameworks thoroughly, and work on ways to make life better for web developers."),(0,o.kt)("p",null,"I have had my biggest open source successes not when I built something from scratch, but when I combined and extended existing systems to create something new. I believe Wasp can be huge because it takes this route."),(0,o.kt)("p",null,"And I get to work with really nice and smart people to do it!"),(0,o.kt)("h4",{id:"how-did-you-start-coding"},"How did you start coding?"),(0,o.kt)("p",null,"I started to program back in the 1980s because I wanted to create games. In the early days I could only do that on the one computer in my father\u2019s office, so sometimes I\u2019d go with him there in the evening and write simple BASIC programs. After a while we got a computer at home, and I played a lot with simple graphics programming, still aiming to create games. Then I picked up assembler, as it was faster than BASIC, and finally in the 1990s a whole world of software development opened up to me. I used C++ for a while, and Delphi, until in 1998 I discovered Python. This language was a revelation to me at the time \u2014 dynamically typed, bindings for everything even back then. It made me feel really empowered as a developer and I got into web development quickly after that."),(0,o.kt)("h4",{id:"what-is-your-dev-setup"},"What is your dev setup?"),(0,o.kt)("p",null,"I\u2019m using VSCode on Fedora Linux. I\u2019ve used Emacs for years, and until recently used Vi to do quick edits, but I switched to VSCode some years ago and recently replaced Vi with Micro as a quick command-line tool. I\u2019ve been using Linux since 1995."),(0,o.kt)("p",null,"Last summer I experimented with my desktop a lot; I now have 3 monitors, one of which is vertical. I also started to use the i3 tiled window manager, and I\u2019m using a split mechanical keyboard (",(0,o.kt)("a",{parentName:"p",href:"https://dygma.com/"},"Dygma Raise"),"). I don\u2019t know whether any of this really makes me more productive but it\u2019s fun."),(0,o.kt)("h4",{id:"camelcase-or-snake_case"},(0,o.kt)("inlineCode",{parentName:"h4"},"camelCase")," or ",(0,o.kt)("inlineCode",{parentName:"h4"},"snake_case"),"?"),(0,o.kt)("p",null,"Whichever is appropriate for the language. Unless the data is produced with a different convention on the server, then I stick to that on the client as well. I\u2019m a big fan of code autoformatters."),(0,o.kt)("h4",{id:"whats-one-piece-of-advice-youd-give-to-an-aspiring-developer"},"What's one piece of advice you'd give to an aspiring developer?"),(0,o.kt)("p",null,"Don\u2019t be afraid to spend time talking and thinking. You don\u2019t have to be typing code all the time. It may feel unproductive but it\u2019s fine."),(0,o.kt)(i.Z,{mdxType:"InBlogCta"}))}f.isMDXComponent=!0},589:function(e,t,n){"use strict";n.d(t,{ZP:function(){return l}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}l.isMDXComponent=!0},6958:function(e,t,n){"use strict";t.Z=n.p+"assets/images/martijn-intro-banner-290144fc7932e2d814c60d8d7ad73f34.png"}}]);