"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[869],{8676:function(t){t.exports=function(t,a){a=a||JSON.stringify;for(var e=[],n={},r=0;r<t.length;r++){var i=t[r],c=a(i);n[c]||(e.push(i),n[c]=!0)}return e}},6349:function(t,a,e){e.r(a);var n=e(5791);a.default=n.Z},5791:function(t,a,e){e.d(a,{Z:function(){return m}});var n=e(5773),r=e(808),i=(e(7378),e(3392)),c=e(1421),s=e(6196),o=e(4858),f=e(4459),d=e(8113),l=e(8355),b=e(4686),u=e(7524),p=e(4718),g=e(559),h=["data"],m=function(t){var a=t.data,e=a.posts,m=a.collectionInfo,Z=(a.featuredPosts,(0,r.Z)(t,h));return(0,g.tZ)(i.Ar,Z,(0,g.tZ)(d.Z,{title:m.name,description:m.description}),(0,g.tZ)(f.Z,null),(0,g.tZ)(i.Kq,{effectProps:{effect:"fadeInDown"}},(0,g.tZ)(c.Z,{header:m.name,subheader:m.title})),(0,g.tZ)(i.Kq,null,(0,g.tZ)(i.or,null,e.nodes&&(0,g.tZ)(o.Z,{nodes:e.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3],omitCategory:Z.pageContext&&"category"===Z.pageContext.collectionType}))),(0,g.tZ)(f.Z,null),(0,g.tZ)(i.jS,null,(0,g.tZ)(s.Z,(0,n.Z)({},e.pageInfo,m))),(0,g.tZ)(i.Kq,null,(0,g.tZ)(i.YE,{pl:4},(0,g.tZ)(f.Z,null),(0,g.tZ)(l.Z,null)),(0,g.tZ)(i.YE,{pl:4},(0,g.tZ)(f.Z,null),(0,g.tZ)(p.Z,null)),(0,g.tZ)(i.YE,{pl:4},(0,g.tZ)(f.Z,null),(0,g.tZ)(b.Z,null)),(0,g.tZ)(i.YE,{pl:4},(0,g.tZ)(f.Z,null),(0,g.tZ)(u.Z,null))))}},1421:function(t,a,e){e.d(a,{Z:function(){return c}});e(7378);var n=e(8945),r=e(559),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},c=function(t){var a=t.header,e=t.subheader,c=t.running;t.totalCount;return(0,r.tZ)("div",null,(0,r.tZ)(n.X6,{variant:"h2",as:"h2"},a),e&&(0,r.tZ)(n.xv,{variant:"h3",sx:i.subheader},e),c&&(0,r.tZ)(n.xv,{variant:"h4",sx:i.runninghead},c))}},6196:function(t,a,e){e.d(a,{Z:function(){return b}});var n=e(4649),r=(e(7378),e(5414)),i=e(8945),c=e(7566),s=function(t){return t.replace(/\/*$/,"/")},o=e(559);function f(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?f(Object(e),!0).forEach((function(a){(0,n.Z)(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var l={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},b=function(t){var a=t.currentPage,e=t.pageCount,n=t.hasPreviousPage,f=t.hasNextPage,b=t.basePath,u=void 0===b?"":b,p=t.slug;if(!f&&!n)return"";var g=s(u+(void 0===p?"":p)),h=s(g+"page"),m=a>=3?""+h+(a-1):g,Z=""+h+(a+1);return(0,o.tZ)(i.kC,{sx:l.wrapper},(0,o.tZ)(i.xu,{sx:l.item},n&&(0,o.tZ)(i.zx,{variant:"mute",as:r.Link,to:m,sx:l.button},(0,o.tZ)(c.Dli,null),"الصفحة السابقة")),(0,o.tZ)(i.xu,{sx:d(d({},l.item),l.number)},"الصفحة ",(0,o.tZ)("strong",null,a)," من ",(0,o.tZ)("strong",null,e)),(0,o.tZ)(i.xu,{sx:l.item},f&&(0,o.tZ)(i.zx,{variant:"dark",as:r.Link,to:Z,sx:l.button},"الصفحة اللاحقة",(0,o.tZ)(c.bUI,null))))}},8355:function(t,a,e){e(7378);var n=e(5414),r=e(1655),i=e(8945),c=e(1025),s=e(7619),o=e(559),f={image:{overflow:"hidden",img:{borderRadius:"lg"}},caption:{display:"block",textAlign:"center",fontSize:0,mt:1}};a.Z=function(t){var a=["chiva","besma","albirre"];Math.floor(Math.random()*a.length);return(0,o.tZ)(s.Z,{title:""},(0,o.tZ)(i.rU,{variant:"mute",as:n.Link,sx:f.caption},"إعلان"),(0,o.tZ)(i.rU,{href:"https://fr-ca.facebook.com/elirada.mr/",target:"_blank"},(0,o.tZ)(r.S,{src:"./irada.png",css:(0,c.i)(f.image),alt:"إعلان",__imageData:e(7220)})))}},7524:function(t,a,e){e(7378);var n=e(5414),r=e(1655),i=e(8945),c=e(1025),s=e(7619),o=e(559),f={image:{overflow:"hidden",img:{borderRadius:"lg"}},caption:{display:"block",textAlign:"center",fontSize:0,mt:1}};a.Z=function(t){var a=["chiva","besma","albirre"];Math.floor(Math.random()*a.length);return(0,o.tZ)(s.Z,{title:""},(0,o.tZ)(i.rU,{variant:"mute",as:n.Link,sx:f.caption},"إعلان"),(0,o.tZ)(i.rU,{href:"https://ar-ar.facebook.com/Association.Chiva/",target:"_blank"},(0,o.tZ)(r.S,{src:"./chiva.png",css:(0,c.i)(f.image),alt:"إعلان",__imageData:e(1884)})))}},4686:function(t,a,e){e(7378);var n=e(5414),r=e(1655),i=e(8945),c=e(1025),s=e(7619),o=e(559),f={image:{overflow:"hidden",img:{borderRadius:"lg"}},caption:{display:"block",textAlign:"center",fontSize:0,mt:1}};a.Z=function(t){var a=["chiva","besma","albirre"];Math.floor(Math.random()*a.length);return(0,o.tZ)(s.Z,{title:""},(0,o.tZ)(i.rU,{variant:"mute",as:n.Link,sx:f.caption},"إعلان"),(0,o.tZ)(i.rU,{href:"https://www.facebook.com/ongbesma/",target:"_blank"},(0,o.tZ)(r.S,{src:"./besma.png",css:(0,c.i)(f.image),alt:"إعلان",__imageData:e(8564)})))}},4718:function(t,a,e){e(7378);var n=e(5414),r=e(1655),i=e(8945),c=e(1025),s=e(7619),o=e(559),f={image:{overflow:"hidden",img:{borderRadius:"lg"}},caption:{display:"block",textAlign:"center",fontSize:0,mt:1}};a.Z=function(t){var a=["chiva","besma","albirre"];Math.floor(Math.random()*a.length);return(0,o.tZ)(s.Z,{title:""},(0,o.tZ)(i.rU,{variant:"mute",as:n.Link,sx:f.caption},"إعلان"),(0,o.tZ)(i.rU,{href:"https://ar-ar.facebook.com/albirre1434/",target:"_blank"},(0,o.tZ)(r.S,{src:"./birre.png",css:(0,c.i)(f.image),alt:"إعلان",__imageData:e(2487)})))}},7220:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/850e144ea63f1da658a4f9839905421f/f7f5e/irada.png","srcSet":"/static/850e144ea63f1da658a4f9839905421f/ce8ad/irada.png 225w,\\n/static/850e144ea63f1da658a4f9839905421f/2db5a/irada.png 450w,\\n/static/850e144ea63f1da658a4f9839905421f/f7f5e/irada.png 900w","sizes":"(min-width: 900px) 900px, 100vw"},"sources":[{"srcSet":"/static/850e144ea63f1da658a4f9839905421f/71a10/irada.webp 225w,\\n/static/850e144ea63f1da658a4f9839905421f/901f1/irada.webp 450w,\\n/static/850e144ea63f1da658a4f9839905421f/4ffff/irada.webp 900w","type":"image/webp","sizes":"(min-width: 900px) 900px, 100vw"}]},"width":900,"height":600}')},2487:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2dbda12c61aba03e7aa42f31b8169294/3662a/birre.jpg","srcSet":"/static/2dbda12c61aba03e7aa42f31b8169294/eafb8/birre.jpg 270w,\\n/static/2dbda12c61aba03e7aa42f31b8169294/fa18d/birre.jpg 540w,\\n/static/2dbda12c61aba03e7aa42f31b8169294/3662a/birre.jpg 1080w","sizes":"(min-width: 1080px) 1080px, 100vw"},"sources":[{"srcSet":"/static/2dbda12c61aba03e7aa42f31b8169294/81dc6/birre.webp 270w,\\n/static/2dbda12c61aba03e7aa42f31b8169294/dbf77/birre.webp 540w,\\n/static/2dbda12c61aba03e7aa42f31b8169294/85e18/birre.webp 1080w","type":"image/webp","sizes":"(min-width: 1080px) 1080px, 100vw"}]},"width":1080,"height":762}')},1884:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f8aca8922bdd3ff139dcda827fde440c/30f07/chiva.jpg","srcSet":"/static/f8aca8922bdd3ff139dcda827fde440c/41624/chiva.jpg 160w,\\n/static/f8aca8922bdd3ff139dcda827fde440c/1b894/chiva.jpg 320w,\\n/static/f8aca8922bdd3ff139dcda827fde440c/30f07/chiva.jpg 640w","sizes":"(min-width: 640px) 640px, 100vw"},"sources":[{"srcSet":"/static/f8aca8922bdd3ff139dcda827fde440c/60b4d/chiva.webp 160w,\\n/static/f8aca8922bdd3ff139dcda827fde440c/5e011/chiva.webp 320w,\\n/static/f8aca8922bdd3ff139dcda827fde440c/90d07/chiva.webp 640w","type":"image/webp","sizes":"(min-width: 640px) 640px, 100vw"}]},"width":640,"height":640}')},8564:function(t){t.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#68a868","images":{"fallback":{"src":"/static/5427f55c4c718e5566916034d72d19aa/b7c3d/besma.jpg","srcSet":"/static/5427f55c4c718e5566916034d72d19aa/f54e5/besma.jpg 241w,\\n/static/5427f55c4c718e5566916034d72d19aa/c3bca/besma.jpg 481w,\\n/static/5427f55c4c718e5566916034d72d19aa/b7c3d/besma.jpg 962w","sizes":"(min-width: 962px) 962px, 100vw"},"sources":[{"srcSet":"/static/5427f55c4c718e5566916034d72d19aa/5e3f0/besma.webp 241w,\\n/static/5427f55c4c718e5566916034d72d19aa/14a3d/besma.webp 481w,\\n/static/5427f55c4c718e5566916034d72d19aa/a0b49/besma.webp 962w","type":"image/webp","sizes":"(min-width: 962px) 962px, 100vw"}]},"width":962,"height":1022}')}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-collection-tag-js-d038463935d640fe29de.js.map