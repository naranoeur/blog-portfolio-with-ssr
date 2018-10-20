exports.id = "photos";
exports.modules = {

/***/ "./client/serverRenderers/Photos.js":
/*!******************************************!*\
  !*** ./client/serverRenderers/Photos.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.js\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nvar _Photos = __webpack_require__(/*! ../components/Photos */ \"./client/components/Photos.js\");\n\nvar _Photos2 = _interopRequireDefault(_Photos);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function (data) {\n\n  var sheet = new _styledComponents.ServerStyleSheet();\n  var jsx = sheet.collectStyles(_react2.default.createElement(_Photos2.default, data));\n  var appBody = _server2.default.renderToString(jsx);\n  var styleTags = sheet.getStyleTags();\n\n  return '\\n  <!DOCTYPE html>\\n  <html lang=\"en\">\\n  <head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n    <title>Photos!</title>\\n    ' + styleTags + '\\n    <style>\\n      body {\\n        font-size: 16px;\\n        background-color: #ebecf2;\\n        font-family: -apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Fira Sans\",Ubuntu,Oxygen,\"Oxygen Sans\",Cantarell,\"Droid Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Lucida Grande\",Helvetica,Arial,sans-serif;\\n      }\\n    </style>\\n  </head>\\n  <body>\\n    <div id=\"app\">' + appBody + '</div>\\n  </body>\\n  </html>\\n  ';\n};\n\n//# sourceURL=webpack:///./client/serverRenderers/Photos.js?");

/***/ })

};