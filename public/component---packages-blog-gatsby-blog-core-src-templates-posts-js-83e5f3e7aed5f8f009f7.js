"use strict";(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[142],{4397:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var o=e(808),a=e(7378),i=e(3392),r=e(4858),l=e(4459),s=e(8113),u=e(6081),c=e(724),Z=e(5242),d=e(559),g=["data"],v=function(t){var n=t.data,e=n.posts,v=void 0===e?{}:e,m=n.featuredPosts,f=void 0===m?{}:m,h=(n.recentPosts,(0,o.Z)(t,g)),p=h.pageContext,x=((p=void 0===p?{}:p).services,(0,c.pB)());return(0,d.tZ)(i.Ar,h,(0,d.tZ)(u.Z,{showBelow:250}),(0,d.tZ)(s.Z,{title:"الصفحة الرئيسية"})," ",(0,d.tZ)(s.Z,{title:"Home"}),(0,d.tZ)(l.Z,null),(0,d.tZ)(i.VM,null,(0,d.tZ)(Z.Z,{categories:x,variant:"horizontal",omitTitle:!0})),(0,d.tZ)(l.Z,null),(0,d.tZ)(i.VM,{sx:{position:"relative"}},(0,d.tZ)(r.Z,{nodes:f.nodes,limit:1,columns:[1],variant:"horizontal-cover-hero",loading:"eager"})),(0,d.tZ)(l.Z,null),(0,d.tZ)(i.VM,null,(0,d.tZ)(r.Z,{nodes:f.nodes,limit:2,skip:1,columns:[1,1,2],variant:"horizontal",loading:"eager"})),(0,d.tZ)(i.VM,null,(0,d.tZ)(l.Z,null),(0,d.tZ)(i.jL,null),(0,d.tZ)(l.Z,null)),(0,d.tZ)(l.Z,null),(0,d.tZ)(i.VM,{wide:!0},v.group.length&&v.group.map((function(t,n){return(0,d.tZ)(a.Fragment,{key:t.categoryName+".list"},1===n?(0,d.tZ)(i.Kq,{title:t.categoryName,titleLink:t.nodes[0].category.slug},(0,d.tZ)(i.or,null,(0,d.tZ)(r.Z,{nodes:t.nodes,limit:1,variant:["horizontal-md","horizontal"]})),(0,d.tZ)(i.YE,{sx:{pl:3,display:[null,"flex"]}},(0,d.tZ)(i.V7,null))):(0,d.tZ)(i.Kq,{effectProps:{effect:"fadeInLeft"},title:t.categoryName,titleLink:t.nodes[0].category.slug},(0,d.tZ)(i.or,null,(0,d.tZ)(r.Z,{nodes:t.nodes,limit:1,variant:"horizontal-cover-hero"}),(0,d.tZ)(l.Z,{space:2}),(0,d.tZ)(r.Z,{nodes:t.nodes,limit:2,skip:2,columns:[1,1,2],variant:"horizontal",loading:"eager",omitCategory:!0}),(0,d.tZ)(l.Z,{space:2}),(0,d.tZ)(r.Z,{nodes:t.nodes,limit:2,skip:4,columns:[1,2],variant:["horizontal-md","horizontal-aside"],mediaType:"icon",omitCategory:!0}))),n!==v.group.length-1&&(0,d.tZ)(l.Z,null))}))),(0,d.tZ)(l.Z,{space:3}))},m=v},724:function(t,n,e){e.d(n,{gN:function(){return s},h4:function(){return c},pB:function(){return r}});var o=e(5414),a=e(8676),i=e.n(a),r=function(){var t=(0,o.useStaticQuery)(l).kanashCatagory;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},l="1977805750",s=function(){var t=(0,o.useStaticQuery)(u).allArticleAuthor;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},u="1366205697",c=function(){var t=(0,o.useStaticQuery)(Z).allArticleAuthor;return t.nodes?i()(t.nodes,(function(t){return t.slug})):null},Z="2588575963"},5242:function(t,n,e){e.d(n,{Z:function(){return h}});var o=e(5773),a=e(808),i=(e(7378),e(8945)),r=e(7566),l=e(5414),s=e(6030),u=e(559),c={button:{vertical:{variant:"cards.primary",display:"flex",alignItems:"center",textAlign:"initial",overflow:"hidden",mb:3,p:0,pr:2,svg:{color:"omegaDark",verticalAlign:"middle",size:"icon.xs"},":hover":{svg:{color:"white"},"div:first-of-type":{bg:"alpha"}}},horizontal:{variant:"cards.interactive",p:0,svg:{color:"alpha",size:"icon.sm"},":hover":{svg:{color:"omegaDark"}}}},icon:{vertical:{display:["flex","none","flex"],transition:"all 250ms ease",alignItems:"center",justifyContent:"center",alignSelf:"stretch",bg:"omegaLight",width:70},horizontal:{display:["block","none","block"],boxSizing:"content-box",transition:"all 250ms ease",borderRadius:"bottom",width:"1/3",height:"icon.sm",mx:"auto",pt:3}},text:{flex:"auto",color:"omegaDark",whiteSpace:"nowrap",p:3,m:0}},Z=function(t){var n=t.variant,e=t.name,o=t.Icon,a=t.iconPath,r=t.iconColor,Z=t.to;return(0,u.tZ)(i.zx,{variant:"none",as:Z&&l.Link,to:Z,sx:c.button[n]},(o||a)&&(0,u.tZ)(i.xu,{sx:c.icon[n]},a&&(0,u.tZ)(s.Z,{src:a}),o&&(0,u.tZ)(o,{color:r})),(0,u.tZ)(i.X6,{variant:"h4",as:"span",sx:c.text},e))},d=Z;Z.defaultProps={variant:"horizontal",number:void 0};var g=e(7619),v=["variant","categories"],m={horizontal:{display:"flex",flexWrap:"nowrap",overflowX:"auto",width:"auto",scrollBehavior:"smooth",m:-2,a:{flex:1,minWidth:["1/3","auto"],m:2}}},f=function(t){var n=t.variant,e=t.categories,l=(0,a.Z)(t,v);return(0,u.tZ)(g.Z,(0,o.Z)({aside:"vertical"===n,title:"مواضيع"},l),(0,u.tZ)(i.xu,{sx:m[n]},e&&e.map((function(t){var e=t.id,o=t.name,a=t.slug,i=t.totalCount,l=t.icon,s={key:e,name:o,number:i,to:a,iconPath:l,Icon:!l&&r.ALl,variant:n};return(0,u.tZ)(d,s)}))))},h=f;f.defaultProps={variant:"vertical"}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-posts-js-83e5f3e7aed5f8f009f7.js.map