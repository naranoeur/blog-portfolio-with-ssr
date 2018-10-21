webpackHotUpdate("Photos",{

/***/ "./client/components/photos/Photo.js":
/*!*******************************************!*\
  !*** ./client/components/photos/Photo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  border-bottom: 1px solid #aaa;\\n  padding: 15px 0;\\n  &:last-child {\\n    border-bottom: none;\\n  }\\n  .description {\\n    margin-bottom: 15px;\\n  }\\n  .mainPhotoContainer {\\n    margin: 0 auto 10px auto;\\n    overflow: hidden;\\n    .mainPhoto {\\n      display: block;\\n      max-width: 100%;\\n    }\\n    .LazyLoad {\\n      height: ', ';\\n      background-color: #f0f0f0;\\n    }\\n  }\\n'], ['\\n  border-bottom: 1px solid #aaa;\\n  padding: 15px 0;\\n  &:last-child {\\n    border-bottom: none;\\n  }\\n  .description {\\n    margin-bottom: 15px;\\n  }\\n  .mainPhotoContainer {\\n    margin: 0 auto 10px auto;\\n    overflow: hidden;\\n    .mainPhoto {\\n      display: block;\\n      max-width: 100%;\\n    }\\n    .LazyLoad {\\n      height: ', ';\\n      background-color: #f0f0f0;\\n    }\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLazyLoad = __webpack_require__(/*! react-lazy-load */ \"./node_modules/react-lazy-load/lib/LazyLoad.js\");\n\nvar _reactLazyLoad2 = _interopRequireDefault(_reactLazyLoad);\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar PhotoStyle = _styledComponents2.default.div(_templateObject, function (props) {\n  return props.imageFinishedLoading ? \"auto\" : \"600px\";\n});\n\nvar Photo = function (_React$Component) {\n  _inherits(Photo, _React$Component);\n\n  function Photo(props) {\n    _classCallCheck(this, Photo);\n\n    var _this = _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).call(this, props));\n\n    _this.state = {\n      imageFinishedLoading: false\n    };\n    _this.handleImageFinishedLoading = _this.handleImageFinishedLoading.bind(_this);\n    return _this;\n  }\n\n  _createClass(Photo, [{\n    key: 'handleImageFinishedLoading',\n    value: function handleImageFinishedLoading() {\n      var _this2 = this;\n\n      window.setTimeout(function () {\n        _this2.setState({ imageFinishedLoading: true });\n      }, 100);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var imageFinishedLoading = this.state.imageFinishedLoading;\n      var _props = this.props,\n          photoUrl = _props.photoUrl,\n          altTag = _props.altTag,\n          description = _props.description,\n          location = _props.location;\n\n      return _react2.default.createElement(\n        PhotoStyle,\n        { imageFinishedLoading: imageFinishedLoading },\n        _react2.default.createElement(\n          'div',\n          { className: 'mainPhotoContainer' },\n          _react2.default.createElement(\n            _reactLazyLoad2.default,\n            { debounce: false, offset: '400' },\n            _react2.default.createElement('img', {\n              className: 'mainPhoto',\n              src: photoUrl,\n              alt: altTag,\n              onLoad: this.handleImageFinishedLoading\n            })\n          )\n        ),\n        location && _react2.default.createElement(\n          'div',\n          { className: 'location' },\n          _react2.default.createElement(\n            'span',\n            null,\n            'Location: '\n          ),\n          location\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'description' },\n          description\n        )\n      );\n    }\n  }]);\n\n  return Photo;\n}(_react2.default.Component);\n\nexports.default = Photo;\n\n//# sourceURL=webpack:///./client/components/photos/Photo.js?");

/***/ })

})