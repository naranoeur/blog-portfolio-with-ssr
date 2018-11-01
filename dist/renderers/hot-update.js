exports.id = "home";
exports.modules = {

/***/ "./client/components/Home.js":
/*!***********************************!*\
  !*** ./client/components/Home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  .main {\\n    font-size: 18px;\\n    text-align: center;\\n    max-width: 600px;\\n    margin: 50px auto 0 auto;\\n  }\\n'], ['\\n  .main {\\n    font-size: 18px;\\n    text-align: center;\\n    max-width: 600px;\\n    margin: 50px auto 0 auto;\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _Banner = __webpack_require__(/*! ./utilities/Banner */ \"./client/components/utilities/Banner.js\");\n\nvar _Banner2 = _interopRequireDefault(_Banner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar HomeStyle = _styledComponents2.default.div(_templateObject);\n\nvar Home = function Home(props) {\n  return _react2.default.createElement(\n    HomeStyle,\n    null,\n    _react2.default.createElement(_Banner2.default, null),\n    _react2.default.createElement(\n      'div',\n      { className: 'main' },\n      'Coming soon...'\n    )\n  );\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./client/components/Home.js?");

/***/ })

};