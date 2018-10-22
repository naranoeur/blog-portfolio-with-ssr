module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=5)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("styled-components")},function(e,n){e.exports=require("react-dom/server")},function(e,n,t){"use strict";e.exports=function(){return"\n    \x3c!-- Global site tag (gtag.js) - Google Analytics --\x3e\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-111588482-3\"><\/script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', 'UA-111588482-3');\n    <\/script>\n  "}},,function(e,n,t){"use strict";var o=c(t(0)),a=c(t(2)),r=t(1),i=c(t(6)),l=c(t(7)),u=c(t(3));function c(e){return e&&e.__esModule?e:{default:e}}e.exports=function(e){var n=new r.ServerStyleSheet,t=n.collectStyles(o.default.createElement(l.default,e)),c=a.default.renderToString(t),s=n.getStyleTags();return'\n  <!DOCTYPE html>\n  <html lang="en">\n  <head>\n    '+(0,u.default)()+'\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Photos!</title>\n    <script>window.__INITIAL_DATA__ = '+(0,i.default)(e)+"<\/script>\n    "+s+'\n    <style>\n      body {\n        font-size: 16px;\n        background-color: #ebecf2;\n        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Fira Sans",Ubuntu,Oxygen,"Oxygen Sans",Cantarell,"Droid Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Emoji","Segoe UI Symbol","Lucida Grande",Helvetica,Arial,sans-serif;\n        padding: 0;\n        margin: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="app">'+c+'</div>\n    <script src="'+e.clientJsUrl+'" ><\/script>\n  </body>\n  </html>\n  '}},function(e,n){e.exports=require("serialize-javascript")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  max-width: 600px;\n  margin: 20px auto;\n  .pageNavigationUrls {\n    margin: 10px 0;\n    a {\n      display: inline-block;\n      color: inherit;\n    }\n    .previousPageLink {\n      float: right;\n    }\n  }\n"],["\n  max-width: 600px;\n  margin: 20px auto;\n  .pageNavigationUrls {\n    margin: 10px 0;\n    a {\n      display: inline-block;\n      color: inherit;\n    }\n    .previousPageLink {\n      float: right;\n    }\n  }\n"]),r=u(t(0)),i=u(t(1)),l=u(t(8));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.div(a);n.default=function(e){var n=e.photos,t=e.nextPageUrl,a=e.previousPageUrl,i=n.map(function(e,n){return r.default.createElement(l.default,o({},e,{key:n}))});return r.default.createElement(c,null,r.default.createElement("div",{className:"photosContainer"},i),r.default.createElement("div",{className:"pageNavigationUrls"},t&&r.default.createElement("a",{className:"nextPageLink",href:t},"← Next Page"),a&&r.default.createElement("a",{className:"previousPageLink",href:a},"Previous Page →")))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),a=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  padding: 10px 0;\n  background-color: white;\n  border-radius: 2px;\n  line-height: 21px;\n  margin-bottom: 10px;\n  .location {\n    margin: 0 10px 5px 10px;\n  }\n  .description {\n    margin: 0 10px 15px 10px;\n  }\n  .mainPhotoContainer {\n    margin: 0 auto 10px auto;\n    overflow: hidden;\n    display: block;\n    position: relative;\n    .mainPhoto {\n      display: block;\n      max-width: 100%;\n    }\n    .LazyLoad {\n      height: ",";\n      background-color: #f0f0f0;\n    }\n    .photoLink {\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      display: block;\n      position: absolute;\n      z-index: 10;\n    }\n  }\n"],["\n  padding: 10px 0;\n  background-color: white;\n  border-radius: 2px;\n  line-height: 21px;\n  margin-bottom: 10px;\n  .location {\n    margin: 0 10px 5px 10px;\n  }\n  .description {\n    margin: 0 10px 15px 10px;\n  }\n  .mainPhotoContainer {\n    margin: 0 auto 10px auto;\n    overflow: hidden;\n    display: block;\n    position: relative;\n    .mainPhoto {\n      display: block;\n      max-width: 100%;\n    }\n    .LazyLoad {\n      height: ",";\n      background-color: #f0f0f0;\n    }\n    .photoLink {\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      display: block;\n      position: absolute;\n      z-index: 10;\n    }\n  }\n"]),r=l(t(0)),i=l(t(9));function l(e){return e&&e.__esModule?e:{default:e}}var u=l(t(1)).default.div(a,function(e){return e.imageFinishedLoading?"auto":"600px"}),c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={imageFinishedLoading:!1},t.handleImageFinishedLoading=t.handleImageFinishedLoading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.default.Component),o(n,[{key:"handleImageFinishedLoading",value:function(){var e=this;window.setTimeout(function(){e.setState({imageFinishedLoading:!0})},100)}},{key:"render",value:function(){var e=this.state.imageFinishedLoading,n=this.props,t=n.photoUrl,o=n.photoSrcUrl,a=n.altTag,l=n.description,c=n.location;return r.default.createElement(u,{imageFinishedLoading:e},r.default.createElement("div",{className:"mainPhotoContainer"},r.default.createElement(i.default,{debounce:!1,offset:400},r.default.createElement("img",{className:"mainPhoto",src:o,alt:a,onLoad:this.handleImageFinishedLoading})),r.default.createElement("a",{href:t,className:"photoLink"})),c&&r.default.createElement("div",{className:"location"},r.default.createElement("span",null,"Location: "),c),r.default.createElement("div",{className:"description"},l))}}]),n}();n.default=c},function(e,n){e.exports=require("react-lazy-load")}]);