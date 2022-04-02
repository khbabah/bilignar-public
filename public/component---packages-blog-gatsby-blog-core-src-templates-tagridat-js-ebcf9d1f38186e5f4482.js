/*! For license information please see component---packages-blog-gatsby-blog-core-src-templates-tagridat-js-ebcf9d1f38186e5f4482.js.LICENSE.txt */
(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_news||[]).push([[573],{4557:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},4460:function(e,t){"use strict";var n=function(e,t,n,r){return"boolean"==typeof e?e:"function"==typeof e?e(t,n,r):!(!0!=!!e||!e)},r=function(e,t){return Object.hasOwnProperty.call(e,t)},o=function(e,t,n,r){return r?new Error(r):new Error("Required "+e[t]+" `"+t+"` was not specified in `"+n+"`.")};t.Z=function(e,t,i){return function(e,t){if("function"!=typeof e)throw new TypeError("The typeValidator argument must be a function with the signature function(props, propName, componentName).");if(t&&"string"!=typeof t)throw new TypeError("The error message is optional, but must be a string if provided.")}(e,i),function(a,s,c){for(var u=arguments.length,l=Array(3<u?u-3:0),p=3;p<u;p++)l[p-3]=arguments[p];return n(t,a,s,c)?r(a,s)?e.apply(void 0,[a,s,c].concat(l)):o(a,s,c,i):e.apply(void 0,[a,s,c].concat(l))}}},9506:function(e,t,n){var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o={},i={},a={},s={};function c(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function u(e,t){c(e,(function(e){return t(e),1}))}function l(t,n,r){t=t.push?t:[t];var d=n&&n.call,f=d?n:r,h=d?t.join(""):n,m=t.length;function b(e){return e.call?e():o[e]}function w(){if(!--m)for(var e in o[h]=1,f&&f(),a)c(e.split("|"),b)&&!u(a[e],b)&&(a[e]=[])}return setTimeout((function(){u(t,(function t(n,r){return null===n?w():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),s[n]?(h&&(i[h]=1),2==s[n]?w():setTimeout((function(){t(n,!0)}),0)):(s[n]=1,h&&(i[h]=1),void p(n,w)))}))}),0),l}function p(e,o){var i,a=n.createElement("script");a.onload=a.onerror=a.onreadystatechange=function(){a.readyState&&!/^c|loade/.test(a.readyState)||i||(a.onload=a.onreadystatechange=null,i=1,s[e]=2,o())},a.async=1,a.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(a,r.lastChild)}return l.get=p,l.order=function(e,t,n){!function r(o){o=e.shift(),e.length?l(o,r):l(o,t,n)}()},l.path=function(t){e=t},l.urlArgs=function(e){t=e},l.ready=function(e,t,n){e=e.push?e:[e];var r,i=[];return!u(e,(function(e){o[e]||i.push(e)}))&&c(e,(function(e){return o[e]}))?t():(r=e.join("|"),a[r]=a[r]||[],a[r].push(t),n&&n(i)),l},l.done=function(e){l([null],e)},l},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)},2886:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ue}});var r=n(7378),o=n(3392),i=(n(1421),n(4459)),a=n(8113),s=n(724),c=n(8945),u=n(4649),l=n(3782),p=n(382),d=n.n(p),f=n(4246);var h=r.createContext({prefixes:{}});h.Consumer,h.Provider;function m(e,t){var n=(0,r.useContext)(h).prefixes;return e||n[t]||t}var b=["bsPrefix","className","as"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=["xxl","xl","lg","md","sm","xs"],v=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=void 0===o?"div":o,a=(0,l.Z)(e,b),s=m(n,"row"),c="".concat(s,"-cols"),u=[];return y.forEach((function(e){var t,n=a[e];delete a[e],t=null!=n&&"object"==typeof n?n.cols:n;var r="xs"!==e?"-".concat(e):"";null!=t&&u.push("".concat(c).concat(r,"-").concat(t))})),(0,f.jsx)(i,g(g({ref:t},a),{},{className:d().apply(void 0,[r,s].concat(u))}))}));v.displayName="Row";var O=v,j=n(5809),P=["as","bsPrefix","className"],C=["className"];function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=["xxl","xl","lg","md","sm","xs"];var k=r.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,r=e.className,o=(0,l.Z)(e,P);n=m(n,"col");var i=[],a=[];return T.forEach((function(e){var t,r,s,c=o[e];delete o[e],"object"==typeof c&&null!=c?(t=c.span,r=c.offset,s=c.order):t=c;var u="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(n).concat(u):"".concat(n).concat(u,"-").concat(t)),null!=s&&a.push("order".concat(u,"-").concat(s)),null!=r&&a.push("offset".concat(u,"-").concat(r))})),[x(x({},o),{},{className:d().apply(void 0,[r].concat(i,a))}),{as:t,bsPrefix:n,spans:i}]}(e),r=(0,j.Z)(n,2),o=r[0],i=o.className,a=(0,l.Z)(o,C),s=r[1],c=s.as,u=void 0===c?"div":c,p=s.bsPrefix,h=s.spans;return(0,f.jsx)(u,x(x({},a),{},{ref:t,className:d()(i,!h.length&&p)}))}));k.displayName="Col";var D=k,L=/-(.)/g;var E=["className","bsPrefix","as"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return e[0].toUpperCase()+(t=e,t.replace(L,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function F(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,o=void 0===n?S(e):n,i=t.Component,a=t.defaultProps,s=r.forwardRef((function(t,n){var r=t.className,o=t.bsPrefix,a=t.as,s=void 0===a?i||"div":a,c=(0,l.Z)(t,E),u=m(o,e);return(0,f.jsx)(s,N({ref:n,className:d()(r,u)},c))}));return s.defaultProps=a,s.displayName=o,s}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=function(e){return r.forwardRef((function(t,n){return(0,f.jsx)("div",B(B({},t),{},{ref:n,className:d()(t.className,e)}))}))},W=["bsPrefix","className","variant","as"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var I=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.variant,i=e.as,a=void 0===i?"img":i,s=(0,l.Z)(e,W),c=m(n,"card-img");return(0,f.jsx)(a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ref:t,className:d()(o?"".concat(c,"-").concat(o):c,r)},s))}));I.displayName="CardImg";var H=I,q=r.createContext(null);q.displayName="CardHeaderContext";var A=q,V=["bsPrefix","className","as"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=r.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,a=void 0===i?"div":i,s=(0,l.Z)(e,V),c=m(n,"card-header"),u=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:c}}),[c]);return(0,f.jsx)(A.Provider,{value:u,children:(0,f.jsx)(a,z(z({ref:t},s),{},{className:d()(o,c)}))})}));X.displayName="CardHeader";var G=X,J=["bsPrefix","className","bg","text","border","body","children","as"];function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,u.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=R("h5"),ee=R("h6"),te=F("card-body"),ne=F("card-title",{Component:$}),re=F("card-subtitle",{Component:ee}),oe=F("card-link",{Component:"a"}),ie=F("card-text",{Component:"p"}),ae=F("card-footer"),se=F("card-img-overlay"),ce=r.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.bg,i=e.text,a=e.border,s=e.body,c=e.children,u=e.as,p=void 0===u?"div":u,h=(0,l.Z)(e,J),b=m(n,"card");return(0,f.jsx)(p,Y(Y({ref:t},h),{},{className:d()(r,b,o&&"bg-".concat(o),i&&"text-".concat(i),a&&"border-".concat(a)),children:s?(0,f.jsx)(te,{children:c}):c}))}));ce.displayName="Card",ce.defaultProps={body:!1};var ue=Object.assign(ce,{Img:H,Title:ne,Subtitle:re,Body:te,Link:oe,Text:ie,Header:G,Footer:ae,ImgOverlay:se}),le=n(6081);function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var de=n(1976),fe=n(1873),he=n(7169);function me(e,t){if(t&&("object"===fe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,he.Z)(e)}function be(e){return be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},be(e)}var we=n(6983);function ge(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&(0,we.Z)(e,t)}var ye=n(3615),ve=n.n(ye),Oe=n(4460),je=n(4557),Pe=n.n(je),Ce="https://platform.twitter.com/widgets.js",Ze=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"buildChromeOptions",value:function(e){return e.chrome="",this.props.noHeader&&(e.chrome=e.chrome+" noheader"),this.props.noFooter&&(e.chrome=e.chrome+" nofooter"),this.props.noBorders&&(e.chrome=e.chrome+" noborders"),this.props.noScrollbar&&(e.chrome=e.chrome+" noscrollbar"),this.props.transparent&&(e.chrome=e.chrome+" transparent"),e}},{key:"buildOptions",value:function(){var e=Object.assign({},this.props.options);return this.props.autoHeight&&(e.height=this.refs.embedContainer.parentNode.offsetHeight),e=Object.assign({},e,{theme:this.props.theme,linkColor:this.props.linkColor,borderColor:this.props.borderColor,lang:this.props.lang})}},{key:"renderWidget",value:function(e){var t=this,n=this.props.onLoad;this.isMountCanceled||window.twttr.widgets.createTimeline({sourceType:this.props.sourceType,screenName:this.props.screenName,userId:this.props.userId,ownerScreenName:this.props.ownerScreenName,slug:this.props.slug,id:this.props.id||this.props.widgetId,url:this.props.url},this.refs.embedContainer,e).then((function(e){t.setState({isLoading:!1}),n&&n(e)}))}},{key:"componentDidMount",value:function(){var e=this;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){if(window.twttr){var t=e.buildOptions();t=e.buildChromeOptions(t),e.renderWidget(t)}else console.error("Failure to load window.twttr in TwitterTimelineEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Ze,"propTypes",{sourceType:ve().oneOf(["profile","likes","list","collection","url","widget"]).isRequired,screenName:(0,Oe.Z)(ve().string,(function(e){return!e.hasOwnProperty("userId")&&("profile"===e.sourceType||"likes"===e.sourceType)})),userId:(0,Oe.Z)(ve().number,(function(e){return!e.hasOwnProperty("screenName")&&("profile"===e.sourceType||"likes"===e.sourceType)})),ownerScreenName:(0,Oe.Z)(ve().string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),slug:(0,Oe.Z)(ve().string,(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("id")})),id:(0,Oe.Z)(ve().oneOfType([ve().number,ve().string]),(function(e){return"list"===e.sourceType&&!e.hasOwnProperty("ownerScreenName")&&!e.hasOwnProperty("slug")||"collection"===e.sourceType})),url:(0,Oe.Z)(ve().string,(function(e){return"url"===e.sourceType})),widgetId:(0,Oe.Z)(ve().string,(function(e){return"widget"===e.sourceType})),options:ve().object,autoHeight:ve().bool,theme:ve().oneOf(["dark","light"]),linkColor:ve().string,borderColor:ve().string,noHeader:ve().bool,noFooter:ve().bool,noBorders:ve().bool,noScrollbar:ve().bool,transparent:ve().bool,lang:ve().string,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var xe=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createShareButton(e.props.url,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterShareButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(xe,"propTypes",{url:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Te=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createFollowButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterFollowButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Te,"propTypes",{screenName:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var ke=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createHashtagButton(e.props.tag,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterHashtagButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(ke,"propTypes",{tag:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var De=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMentionButton(e.props.screenName,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMentionButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(De,"propTypes",{screenName:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Le=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"renderWidget",value:function(){var e=this,t=this.props.onLoad;window.twttr?this.isMountCanceled||window.twttr.widgets.createTweet(this.props.tweetId,this.refs.embedContainer,this.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterTweetEmbed, aborting load.")}},{key:"componentDidMount",value:function(){var e=this;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){e.renderWidget()}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Le,"propTypes",{tweetId:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Ee=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createMoment(e.props.momentId,e.refs.shareMoment,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterMomentShare, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"shareMoment"}))}}]),t}(r.Component);(0,u.Z)(Ee,"propTypes",{momentId:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Me=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createDMButton(e.props.id,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterDMButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Me,"propTypes",{id:ve().number.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Ne=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createVideo(e.props.id,e.refs.embedContainer).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterVideoEmbed, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Ne,"propTypes",{id:ve().string.isRequired,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Se=function(e){function t(e){var n;return pe(this,t),(n=me(this,be(t).call(this,e))).state={isLoading:!0},n}return ge(t,e),(0,de.Z)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.onLoad;Pe().canUseDOM&&n(9506)(Ce,"twitter-embed",(function(){window.twttr?e.isMountCanceled||window.twttr.widgets.createPeriscopeOnAirButton(e.props.username,e.refs.embedContainer,e.props.options).then((function(n){e.setState({isLoading:!1}),t&&t(n)})):console.error("Failure to load window.twttr in TwitterOnAirButton, aborting load.")}))}},{key:"componentWillUnmount",value:function(){this.isMountCanceled=!0}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props.placeholder;return r.createElement(r.Fragment,null,e&&t,r.createElement("div",{ref:"embedContainer"}))}}]),t}(r.Component);(0,u.Z)(Se,"propTypes",{username:ve().string.isRequired,options:ve().object,placeholder:ve().oneOfType([ve().string,ve().element]),onLoad:ve().func});var Fe=n(559),Ue=function(e){var t=(0,s.h4)(),n={direction:{textAlign:"center"},fixTaille:{height:400,width:500}};return(0,Fe.tZ)(o.Ar,e,(0,Fe.tZ)(a.Z,{title:"تغريدات"}),(0,Fe.tZ)(le.Z,{showBelow:250}),(0,Fe.tZ)(i.Z,null),(0,Fe.tZ)(o.VM,null,(0,Fe.tZ)(c.xu,{sx:n.direction},(0,Fe.tZ)(O,null,t.map((function(e){return(0,Fe.tZ)(r.Fragment,null,(0,Fe.tZ)(D,{md:4},(0,Fe.tZ)(ue,{border:"primry",className:"mb-3",sx:n.fixTaille},(0,Fe.tZ)(ue.Body,null,(0,Fe.tZ)(ue.Title,null,e.name),(0,Fe.tZ)(ue.Text,null,(0,Fe.tZ)(Ze,{sourceType:"profile",screenName:e.slug.split(/[//]/)[2],options:{height:400,width:400},noHeader:!0,noFooter:!0,borderColor:"#1DA1F2",placeholder:(0,Fe.tZ)("div",{className:"loader"})}))))))}))))))}},724:function(e,t,n){"use strict";n.d(t,{gN:function(){return c},h4:function(){return l},pB:function(){return a}});var r=n(5414),o=n(8676),i=n.n(o),a=function(){var e=(0,r.useStaticQuery)(s).kanashCatagory;return e.nodes?i()(e.nodes,(function(e){return e.slug})):null},s="1956254406",c=function(){var e=(0,r.useStaticQuery)(u).allArticleAuthor;return e.nodes?i()(e.nodes,(function(e){return e.slug})):null},u="1366205697",l=function(){var e=(0,r.useStaticQuery)(p).allArticleAuthor;return e.nodes?i()(e.nodes,(function(e){return e.slug})):null},p="2588575963"},1421:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});n(7378);var r=n(8945),o=n(559),i={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},a=function(e){var t=e.header,n=e.subheader,a=e.running;e.totalCount;return(0,o.tZ)("div",null,(0,o.tZ)(r.X6,{variant:"h2",as:"h2"},t),n&&(0,o.tZ)(r.xv,{variant:"h3",sx:i.subheader},n),a&&(0,o.tZ)(r.xv,{variant:"h4",sx:i.runninghead},a))}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-tagridat-js-ebcf9d1f38186e5f4482.js.map