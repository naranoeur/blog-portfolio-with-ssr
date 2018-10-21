webpackHotUpdate("Photos",{

/***/ "./client/components/photos/Photo.js":
/*!*******************************************!*\
  !*** ./client/components/photos/Photo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  border-bottom: 1px solid #aaa;\\n  padding: 15px 0;\\n  &:last-child {\\n    border-bottom: none;\\n  }\\n  .mainPhoto {\\n    display: block;\\n    max-width: 100%;\\n    margin: 0 auto 10px auto;\\n  }\\n  .description {\\n    margin-bottom: 15px;\\n  }\\n'], ['\\n  border-bottom: 1px solid #aaa;\\n  padding: 15px 0;\\n  &:last-child {\\n    border-bottom: none;\\n  }\\n  .mainPhoto {\\n    display: block;\\n    max-width: 100%;\\n    margin: 0 auto 10px auto;\\n  }\\n  .description {\\n    margin-bottom: 15px;\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLazyLoad = __webpack_require__(/*! react-lazy-load */ \"./node_modules/react-lazy-load/lib/LazyLoad.js\");\n\nvar _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar PhotoStyle = _styledComponents2.default.div(_templateObject);\n\nvar App = function App(props) {\n  var photoUrl = props.photoUrl,\n      altTag = props.altTag,\n      description = props.description,\n      location = props.location;\n\n  return _react2.default.createElement(\n    PhotoStyle,\n    null,\n    _react2.default.createElement(\n      _reactLazyLoad2.default,\n      { debounce: false },\n      _react2.default.createElement('img', { className: 'mainPhoto', src: photoUrl, alt: altTag })\n    ),\n    location && _react2.default.createElement(\n      'div',\n      { className: 'location' },\n      _react2.default.createElement(\n        'span',\n        null,\n        'Location: '\n      ),\n      location\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: 'description' },\n      description\n    )\n  );\n};\n\nexports.default = App;\n\n//# sourceURL=webpack:///./client/components/photos/Photo.js?");

/***/ })

})