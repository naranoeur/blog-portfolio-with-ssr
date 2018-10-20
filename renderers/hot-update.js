exports.id = "photos";
exports.modules = {

/***/ "./client/components/Photos.js":
/*!*************************************!*\
  !*** ./client/components/Photos.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  max-width: 550px;\\n  margin: 20px auto;\\n  background-color: white;\\n  border-radius: 4px;\\n  padding: 10px 25px;\\n'], ['\\n  max-width: 550px;\\n  margin: 20px auto;\\n  background-color: white;\\n  border-radius: 4px;\\n  padding: 10px 25px;\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.esm.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _Photo = __webpack_require__(/*! ./photos/Photo */ \"./client/components/photos/Photo.js\");\n\nvar _Photo2 = _interopRequireDefault(_Photo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar PhotosStyle = _styledComponents2.default.div(_templateObject);\n\nvar Photos = function Photos(props) {\n  var photos = props.photos;\n\n  var photosListJsx = photos.map(function (photo) {\n    return _react2.default.createElement(_Photo2.default, photo);\n  });\n  return _react2.default.createElement(\n    PhotosStyle,\n    null,\n    photosListJsx,\n    photosListJsx\n  );\n};\n\nexports.default = Photos;\n\n//# sourceURL=webpack:///./client/components/Photos.js?");

/***/ })

};