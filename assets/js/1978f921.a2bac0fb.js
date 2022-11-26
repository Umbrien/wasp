"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8610:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(4996);const r=e=>a.createElement("div",null,a.createElement("p",{align:"center"},a.createElement("figure",null,a.createElement("img",{alt:e.alt,src:(0,o.Z)(e.source)}),a.createElement("figcaption",{class:"image-caption"},e.caption))))},2908:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(9960);n(4996);const r=()=>a.createElement("span",{className:"in-blog-cta--divider"}," \u2192 "),i=()=>a.createElement("p",null,a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://e44cy1h4s0q.typeform.com/to/ycUzQa5A"},"We are in Alpha (try it out)!"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://discord.gg/rzdnErX"},"Join our community"),a.createElement(r,null),a.createElement(o.Z,{className:"in-blog-cta--link",to:"https://wasp-lang.notion.site/Founding-Engineer-at-Wasp-402274568afa4d7eb7f428f8fa2c0816"},"Work with us"))},2505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=(n(9960),n(4996),n(2908),n(589),n(8610));const i={title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",authors:["maksym36ua"],tags:["webdev","wasp","hacktoberfest","github"]},s=void 0,l={permalink:"/blog/2022/11/17/hacktoberfest-wrap-up",editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/blog/blog/2022-11-17-hacktoberfest-wrap-up.md",source:"@site/blog/2022-11-17-hacktoberfest-wrap-up.md",title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",description:"2078 lines of code across 24 PRs were changed in Wasp repo during HacktoberFest 2022 - the most prominent online event for promoting and celebrating OSS culture. October has been a blast, to say the least, and the most active month in the repo's history.",date:"2022-11-17T00:00:00.000Z",formattedDate:"November 17, 2022",tags:[{label:"webdev",permalink:"/blog/tags/webdev"},{label:"wasp",permalink:"/blog/tags/wasp"},{label:"hacktoberfest",permalink:"/blog/tags/hacktoberfest"},{label:"github",permalink:"/blog/tags/github"}],readingTime:5.74,hasTruncateMarker:!1,authors:[{name:"Maksym Khamrovskyi",title:"DevRel @ Wasp",key:"maksym36ua"}],frontMatter:{title:"How Wasp reached all-time high PR count during Hacktoberfest: tips for OSS maintainers",authors:["maksym36ua"],tags:["webdev","wasp","hacktoberfest","github"]},prevItem:{title:"Wasp Beta Launch Week announcement",permalink:"/blog/2022/11/26/wasp-beta-launch-week"},nextItem:{title:"Alpha Testing Program: post-mortem",permalink:"/blog/2022/11/16/alpha-testing-program-post-mortem"}},p={authorsImageUrls:[void 0]},c=[{value:"How it went: the stats",id:"how-it-went-the-stats",level:2},{value:"A thin line between genuine interactions and annoying self-promotion",id:"a-thin-line-between-genuine-interactions-and-annoying-self-promotion",level:2},{value:"Was it worth it?",id:"was-it-worth-it",level:2},{value:"Wrap up",id:"wrap-up",level:2},{value:"P.S. - Thanks to our contributors!",id:"ps---thanks-to-our-contributors",level:2}],u={toc:c};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2078 lines of code across 24 PRs were changed in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp"},"Wasp repo")," during ",(0,o.kt)("a",{parentName:"p",href:"https://hacktoberfest.com/"},"HacktoberFest 2022")," - the most prominent online event for promoting and celebrating OSS culture. October has been a blast, to say the least, and the most active month in the repo's history."),(0,o.kt)("p",null,"This is the story of our journey along with the tips on leveraging Hacktoberfest to get your repo buzzing! \ud83d\udc1d\ud83d\udc1d"),(0,o.kt)("h2",{id:"how-it-went-the-stats"},"How it went: the stats"),(0,o.kt)("p",null,"Let's take a quick look at the charts below (data obtained from ",(0,o.kt)("a",{parentName:"p",href:"https://ossinsight.io/analyze/wasp-lang/wasp"},"OSS Insight")," platform) \ud83d\udc47"),(0,o.kt)(r.Z,{alt:"PR history",source:"img/hacktoberfest-wrap-up/pr-history.png",caption:"24 contributor PRs in Oct, an all-time high!",mdxType:"ImgWithCaption"}),(0,o.kt)(r.Z,{alt:"Lines of code changes",source:"img/hacktoberfest-wrap-up/code-lines-history.png",caption:"On the other hand, number of changed LoC isn't that huge",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,'While the number of PRs is at an all-time high, the number of updated lines of code is fewer than usual. If we take a look at the distribution of PR sizes in the first chart, we can see that "xs" and "s" PRs are in the majority (20 out of 24).'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This brings us to our first conclusion: first-time contributors start with small steps!")," The main benefit here is getting potential contributors interested and familiar with the project, rather than expecting them to jump in and\nimmediately start implementing the next major feature. Efforts like that require investing time to understand and digest codebase architecture, design decisions and the development process."),(0,o.kt)("p",null,"On the other hand, being able to implement and merge any feature, no matter the size, from beginning to the end, and to get your name on the list of contributors of your favourite project is an amazing feeling! That will make your contributors feel like superheroes and motivate them to keep taking on larger and larger chunks, and maybe eventually even join the core team!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Thus, the second conclusion would be: don\u2019t underestimate the significance of small PRs!")," It's not about reducing your backlog, but rather encouraging developers to get engaged with your project in a friendly way."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To make it easier for your new contributors, you can prepare in advance good issues to get started with - e.g. smaller bugs, docs improvements, fun but isolated problems, etc."),(0,o.kt)("p",{parentName:"admonition"},"We added ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},(0,o.kt)("inlineCode",{parentName:"a"},"good-first-issue"))," label to such issues in Wasp repo, and even added extra context such as ",(0,o.kt)("inlineCode",{parentName:"p"},"no-haskell"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"webdev"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"example"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docs"),".")),(0,o.kt)("p",null,"With your repo being set, the next question is ",(0,o.kt)("em",{parentName:"p"},'"How do I get people to pick my project to work on"'),'? Relying solely\non putting "Hacktoberfest" topic on your GitHub repo won\'t do the trick, not with thousands of other repos doing the same.'),(0,o.kt)("p",null,"If you want to get noticed, ",(0,o.kt)("strong",{parentName:"p"},"you need to do marketing. A lot of it. The name of the game here is what you put in is what you get back.")," Let's talk about this in more detail."),(0,o.kt)("h2",{id:"a-thin-line-between-genuine-interactions-and-annoying-self-promotion"},"A thin line between genuine interactions and annoying self-promotion"),(0,o.kt)("p",null,"First and foremost, you'll need to create ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/735"},"an entry point")," with all the necessary information for the participants. We opted for a GitHub issue where we categorized Hacktoberfest issues by type, complexity, etc, but it can be anything - a dedicated landing page, Medium/Dev.to article, or whatever works for you. Once you have that, you can start promoting it."),(0,o.kt)(r.Z,{alt:"Hacktoberfest entry point - gh issue",source:"img/hacktoberfest-wrap-up/hf-gh-entry-point.png",caption:"Our entry point for Hacktoberfest",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"Our marketing strategy consisted of the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tweeting regularly - what's new, interesting issues, ...")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Writing meaningful Reddit posts about your achievements")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Hanging out in HacktoberFest ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/hacktoberfest"},"Discord server"),", chatting with others and answering their questions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Checking posts with ",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/t/hacktoberfest"},"appropriate")," ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/tag/hacktoberfest2022"},"tags")," on different blogging websites like Medium, Dev.to, Hashnode, etc. and participating in conversations. "))),(0,o.kt)("p",null,"There are plenty of other ways to advertise your project, like joining events or writing articles. Even ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dailydotdev/memetoberfest"},"meme contests"),". The activities mentioned above worked the best for us. Let\u2019s dive a bit deeper."),(0,o.kt)("p",null,"Tweets are pretty obvious - as mentioned, you can share updates on how stuff is going. Tag contributors, inform your followers about available issues and mention those who might be a good fit for tackling them.  "),(0,o.kt)("p",null,"Reddit is a much more complex beast. You need to avoid clickbait post titles, comply with subreddit rules on self-promotion and try to give meaningful info to the community simultaneously. Take less than you give, and you\u2019re good. "),(0,o.kt)(r.Z,{alt:"posting on reddit",source:"img/hacktoberfest-wrap-up/oss-reddit-post.png",caption:"How posting on Reddit feels",mdxType:"ImgWithCaption"}),(0,o.kt)("p",null,"The Discord server marketing was pretty straightforward. There\u2019s even a dedicated channel for self-promotion. In case you're not talkative much, dropping a link to your project is OK, and that\u2019s it. On the other hand, the server is an excellent platform for discussing Hacktoberfest-related issues, approaches, and ideas. The more you chat, the higher your chances of drawing attention to your project."),(0,o.kt)("p",null,"The most engaging but also time consuming activity was commenting on blog posts of other Hacktoberfest participants. ",(0,o.kt)("strong",{parentName:"p"},"Pretending that you\u2019re interested in the topic only to leave a self-promoting comment will not bring you anywhere - it can only result in your comment being removed"),". Make sure to provide value: add more information on the topic of the article, address specific points the author may have missed, or mention how you\u2019ve dealt with the related issue in your project. "),(0,o.kt)("p",null,"Be consistent and dedicate time to regularly to check new articles and jump into discussions. Share a link to your repo only if it fits into the flow of the conversation."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Content marketing in a nutshell",src:n(6391).Z,width:"736",height:"532"})),(0,o.kt)("h2",{id:"was-it-worth-it"},"Was it worth it?"),(0,o.kt)("p",null,"Before joining HacktoberFest as maintainers, we weren\u2019t sure it would be worth the time investment. Our skepticism was reinforced by the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/developersIndia/comments/xvynx9/hacktoberfest_is_ruining_opensource/"},"Mentions")," of people submitting trivial PRs just to win the award")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The fact that we're making a relatively complex project (DSL for developing React + Node.js full-stack web apps with less code) and it might be hard for people to get into it")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The compiler is written is Haskell, with templates in JavaScript - again, not the very common project setup"))),(0,o.kt)("p",null,"Fortunately, none of this turned out to be a problem! We've got 24 valid PRs, both Haskell and non-Haskell, a ton of valuable feedback, and several dozen new users and community members. "),(0,o.kt)("h2",{id:"wrap-up"},"Wrap up"),(0,o.kt)("p",null,"Don\u2019t expect magic to happen. HacktoberFest is all about smaller changes and getting community introduced to your project. Be ready to promote your repo genuinely and don\u2019t be afraid to take part in the contest. We hope that helps and wish you the best of luck!"),(0,o.kt)("p",null,"Remember, HacktoberFest is all about the celebration of open source. Stick to that principle, and you\u2019ll get the results you could only wish for!"),(0,o.kt)("h2",{id:"ps---thanks-to-our-contributors"},"P.S. - Thanks to our contributors!"),(0,o.kt)("p",null,"Massive shout out to our contributors: ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ussgarci"},"@ussgarci"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/h4r1337"},"@h4r1337"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/d0m96"},"@d0m96"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/EmmanuelCoder"},"@EmmanuelCoder"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/gautier_difolco"},"@gautier_difolco"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/vaishnav_mk1"},"@vaishnav_mk1"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/NeoLight1010"},"@NeoLight1010"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/abscubix"},"@abscubix"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/JFarayola"},"@JFarayola"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/Shahx95"},"@Shahx95")," and everyone else for making it possible. You rock! \ud83e\udd18"))}h.isMDXComponent=!0},589:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Wasp is a configuration language (DSL) for building full-stack web apps with less code and best practices that works alongside React and Node.js. We are on a mission to streamline web app development while empowering developers to continue using the power of code and their favorite tools. We are backed by Y Combinator and engineers from Airbnb, Facebook, and Lyft.")))}i.isMDXComponent=!0},6391:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/content-marketing-in-a-nutshell-2a0f296439c966511b1e9bdcd7805bea.png"}}]);