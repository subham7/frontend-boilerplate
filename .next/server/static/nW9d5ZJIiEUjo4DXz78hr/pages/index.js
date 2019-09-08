module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "++s5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributes", function() { return addAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributes", function() { return deleteAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributes", function() { return updateAttributes; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributes = function attributes(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributes"));
};
var addAttributes = function addAttributes(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributes"), object);
};
var deleteAttributes = function deleteAttributes(attributesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributes/").concat(attributesID));
};
var updateAttributes = function updateAttributes(attributesID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributes/").concat(attributesID), object);
};

/***/ }),

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "1H6Q":
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "3PsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "3niX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("SevZ"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "6ULd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiers", function() { return modifiers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifieruse", function() { return modifieruse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModifierProduct", function() { return addModifierProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addModifier", function() { return addModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteModifier", function() { return deleteModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateModifier", function() { return updateModifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifierProduct", function() { return modifierProduct; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var modifiers = function modifiers(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/modifiers"));
};
var modifieruse = function modifieruse() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifieruse"));
};
var addModifierProduct = function addModifierProduct(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifieruse"), object);
};
var addModifier = function addModifier(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifiers"), object);
};
var deleteModifier = function deleteModifier(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifiers/").concat(modifierID));
};
var updateModifier = function updateModifier(modifierID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifiers/").concat(modifierID), object);
};
var modifierProduct = function modifierProduct(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/modifieruse?_where=(modifier,eq,").concat(modifierID, ")&_unfold={\"product\":[\"name\"]}"));
};

/***/ }),

/***/ "83ri":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "8MYf":
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),

/***/ "8j7k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for signingup of user

var signupURL = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] + "/websignup";
var signup = function signup(userData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(signupURL, userData);
};

/***/ }),

/***/ "8pv/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptById", function() { return receiptById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptTransactionType", function() { return receiptTransactionType; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var receiptById = function receiptById(rid) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/receipts/").concat(rid));
};
var receiptTransactionType = function receiptTransactionType(rid) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/transactions?_where=(receipt,eq,").concat(rid, ")&_unfold={\"transactiontype\":[\"name\"]}"));
};

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "CCqc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsncodes", function() { return hsncodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHsnCode", function() { return addHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHsnCode", function() { return deleteHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHsnCode", function() { return updateHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addhsncodetax", function() { return addhsncodetax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxHsn", function() { return taxHsn; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var hsncodes = function hsncodes() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/hsncodes"));
};
var addHsnCode = function addHsnCode(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/hsncodes"), object);
};
var deleteHsnCode = function deleteHsnCode(hsncodeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/hsncodes/").concat(hsncodeID));
};
var updateHsnCode = function updateHsnCode(hsncodeID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/hsncodes/").concat(hsncodeID), object);
};
var addhsncodetax = function addhsncodetax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxhsncodes"), object);
};
var taxHsn = function taxHsn(taxID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxhsncodes?_where=(tax,eq,").concat(taxID, ")&_unfold={\"hsncode\":[\"hsnname\"]}"));
};

/***/ }),

/***/ "Ch5H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "antd/lib/typography/style"
var style_ = __webpack_require__("t5cU");

// EXTERNAL MODULE: external "antd/lib/typography"
var typography_ = __webpack_require__("S4j3");
var typography_default = /*#__PURE__*/__webpack_require__.n(typography_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/atoms/logo/index.js



var Title = typography_default.a.Title;
var styles = {
  inverted: {
    background: "black",
    color: "#ddd",
    display: "inline-block"
  },
  normal: {
    background: "white",
    color: "black",
    display: "inline-block"
  },
  logo: {
    width: "40%"
  }
};

var logo_Logo = function Logo(props) {
  return (// <Title style={styles[props.type]} level={2}>
    //     FINITO
    // </Title>
    external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("img", {
      style: styles.logo,
      src: "/static/images/icons/LogoMainNormal.png"
    }))
  );
};

logo_Logo.defaultProps = {
  type: "normal"
};
/* harmony default export */ var logo = (logo_Logo);
// CONCATENATED MODULE: ./src/components/molecules/logoHeading/index.js





var Text = typography_default.a.Text;
var logoHeading_styles = {
  centerText: {
    textAlign: "center" // marginBottom: "10px"

  },
  displayBlock: {
    display: "block",
    marginTop: "-10px"
  }
};

var logoHeading_LogoHeading = function LogoHeading(props) {
  return external_react_["createElement"]("div", {
    style: Object(objectSpread["a" /* default */])({}, logoHeading_styles.centerText, props.style)
  }, external_react_["createElement"](logo, {
    type: props.logoType
  }), external_react_["createElement"]("br", null), external_react_["createElement"]("br", null), external_react_["createElement"](Text, {
    style: logoHeading_styles.displayBlock,
    type: props.textType
  }, props.text));
};

logoHeading_LogoHeading.defaultProps = {
  textType: 'secondary',
  logoType: 'normal',
  style: {}
};
/* harmony default export */ var logoHeading = __webpack_exports__["a"] = (logoHeading_LogoHeading);

/***/ }),

/***/ "DnGC":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "EJbO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox/style");

/***/ }),

/***/ "EpBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Asearch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Text_type1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Check; });
/* unused harmony export O */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Tarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Sel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Date; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EJbO");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JCEF");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("JHZV");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XQdj");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Tit0");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("oRSk");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("RGP6");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("83ri");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("8MYf");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return informed__WEBPACK_IMPORTED_MODULE_17__["Form"]; });



















// import 'antd/dist/antd.css';
var selectStyle = {
  backgroundColor: "#fff",
  border: "1px solid #d9d9d9",
  height: "32px",
  borderRadius: "4px"
};
var Date = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref) {
  var fieldState = _ref.fieldState,
      _ref$fieldApi = _ref.fieldApi,
      setTouched = _ref$fieldApi.setTouched,
      setValue = _ref$fieldApi.setValue,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(_ref, ["fieldState", "fieldApi"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({}, props, {
    fieldState: fieldState,
    onChange: function onChange(date, dateString) {
      return setValue(dateString);
    }
  })));
});
var Text_type1 = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref2) {
  var fieldState = _ref2.fieldState,
      fieldApi = _ref2.fieldApi,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(_ref2, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({}, rest, {
    ref: forwardedRef,
    onChange: function onChange(e) {
      setValue(e.target.value);
      console.log(value);

      if (_onChange) {
        _onChange(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched();

      if (_onBlur) {
        _onBlur(e);
      }
    }
  }));
});
var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a.Search;
var Asearch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Asearch, _React$Component);

  function Asearch() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(this, Asearch);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Asearch).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Asearch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(Search, {
        placeholder: this.props.placeholder,
        style: {
          width: 360
        },
        onSearch: function onSearch(value) {
          return console.log(value);
        },
        enterButton: true
      }));
    }
  }]);

  return Asearch;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component); //  Not required we gonna use from .... bootstrap

var RG = antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a.Group;
var R = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref3) {
  var fieldState = _ref3.fieldState,
      fieldApi = _ref3.fieldApi,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(_ref3, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange2 = props.onChange,
      _onBlur2 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({
    type: "radio"
  }, rest, {
    ref: forwardedRef,
    onChange: function onChange(e) {
      setValue(e.target.value);
      console.log(value);

      if (_onChange2) {
        _onChange2(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched();

      if (_onBlur2) {
        _onBlur2(e);
      }
    }
  }));
}); //  Not required we gonna use from .... bootstrap

var Check = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref4) {
  var fieldState = _ref4.fieldState,
      fieldApi = _ref4.fieldApi,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(_ref4, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;
  props.field = props.name;

  var _onChange3 = props.onChange,
      _onBlur3 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({}, rest, {
    ref: forwardedRef,
    onChange: function onChange(e) {
      setValue(e.target.checked);
      console.log("checked = ".concat(e.target.checked));

      if (_onChange3) {
        _onChange3(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched();

      if (_onBlur3) {
        _onBlur3(e);
      }
    }
  }));
});
var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a.TextArea;
var Tarea = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref5) {
  var fieldState = _ref5.fieldState,
      fieldApi = _ref5.fieldApi,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(_ref5, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange4 = props.onChange,
      _onBlur4 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(TextArea, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"])({}, rest, {
    ref: forwardedRef,
    onChange: function onChange(e) {
      setValue(e.target.value);
      console.log(value);

      if (_onChange4) {
        _onChange4(e);
      }
    },
    onBlur: function onBlur(e) {
      setTouched();

      if (_onBlur4) {
        _onBlur4(e);
      }
    }
  }));
});
var O = informed__WEBPACK_IMPORTED_MODULE_17__["Select"].Option;

var Sel = function Sel(props) {
  var style = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, props.style, selectStyle);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_17__["Select"], {
    field: props.field,
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_17__["Option"], {
    value: "",
    disabled: true
  }, "Select One..."), props.option.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(informed__WEBPACK_IMPORTED_MODULE_17__["Option"], {
      key: index,
      value: data.value
    }, data.name);
  }));
};



/***/ }),

/***/ "ErRJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _keys = _interopRequireDefault(__webpack_require__("pLtp"));

var _reduxCodeGenerator = _interopRequireDefault(__webpack_require__("VaFv"));

var _api = _interopRequireDefault(__webpack_require__("Nlzp"));

var tempObject = {};
(0, _keys.default)(_api.default).map(function (expName) {
  (0, _keys.default)(_api.default[expName]).map(function (childexportName) {
    tempObject[childexportName] = (0, _reduxCodeGenerator.default)(childexportName, _api.default[expName][childexportName]);
  });
});
module.exports = tempObject;

/***/ }),

/***/ "JCEF":
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "JHZV":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style");

/***/ }),

/***/ "JJsV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formData", function() { return formData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);


var formData = function formData(data) {
  var dataDeepCopy = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, data);

  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    resolve(dataDeepCopy);
  });
};

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MX0m":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3niX")


/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "Nd40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mitems", function() { return mitems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMitem", function() { return addMitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMitem", function() { return deleteMitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMitem", function() { return updateMitem; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var mitems = function mitems(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/mitems"));
};
var addMitem = function addMitem(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/mitems"), object);
};
var deleteMitem = function deleteMitem(mitemsID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/mitems/").concat(mitemsID));
};
var updateMitem = function updateMitem(mitemsID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/mitems/").concat(mitemsID), object);
};

/***/ }),

/***/ "NeRB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var styles = {
  BackGround: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    width: "50%",
    backgroundColor: "#44f"
  },
  footer: {
    bottom: 0,
    textAlign: "center"
  }
};

var BackGroundCover = function BackGroundCover(props) {
  var BackGroundColor = props.BackGroundColor,
      opacity = props.opacity,
      width = props.width,
      top = props.top;
  var BackGround = styles.BackGround;
  styles.BackGround = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, BackGround, {
    backgroundColor: BackGroundColor,
    top: top,
    opacity: opacity,
    width: width
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: styles.BackGround
  }, props.footer ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    style: styles.footer
  }, props.footer) : null));
};

BackGroundCover.defaultProps = {
  top: "0",
  BackGroundColor: "#44f",
  opacity: 1,
  width: "50%",
  style: {},
  footer: ''
};
/* harmony default export */ __webpack_exports__["a"] = (BackGroundCover);

/***/ }),

/***/ "Nlzp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var taxes = _interopRequireWildcard(__webpack_require__("uuVs"));

var locations = _interopRequireWildcard(__webpack_require__("dNIM"));

var business = _interopRequireWildcard(__webpack_require__("ivx8"));

var users = _interopRequireWildcard(__webpack_require__("lVwQ"));

var login = _interopRequireWildcard(__webpack_require__("dVUk"));

var signup = _interopRequireWildcard(__webpack_require__("8j7k"));

var modifiers = _interopRequireWildcard(__webpack_require__("6ULd"));

var employees = _interopRequireWildcard(__webpack_require__("fo1k"));

var products = _interopRequireWildcard(__webpack_require__("kNwf"));

var stockdiary = _interopRequireWildcard(__webpack_require__("SNX7"));

var hsn = _interopRequireWildcard(__webpack_require__("CCqc"));

var purchase = _interopRequireWildcard(__webpack_require__("oHXn"));

var form = _interopRequireWildcard(__webpack_require__("JJsV"));

var auth = _interopRequireWildcard(__webpack_require__("tt+l"));

var permissions = _interopRequireWildcard(__webpack_require__("fU5x"));

var inventory = _interopRequireWildcard(__webpack_require__("nGcB"));

var mitems = _interopRequireWildcard(__webpack_require__("Nd40"));

var attributesets = _interopRequireWildcard(__webpack_require__("bq1K"));

var attributes = _interopRequireWildcard(__webpack_require__("++s5"));

var attributevalues = _interopRequireWildcard(__webpack_require__("X8dz"));

var receipts = _interopRequireWildcard(__webpack_require__("8pv/"));

var reports = _interopRequireWildcard(__webpack_require__("xYtC"));

module.exports = {
  taxes: taxes,
  locations: locations,
  business: business,
  signup: signup,
  login: login,
  users: users,
  employees: employees,
  products: products,
  modifiers: modifiers,
  stockdiary: stockdiary,
  hsn: hsn,
  purchase: purchase,
  form: form,
  auth: auth,
  permissions: permissions,
  inventory: inventory,
  mitems: mitems,
  attributesets: attributesets,
  attributes: attributes,
  attributevalues: attributevalues,
  receipts: receipts,
  reports: reports
};

/***/ }),

/***/ "RGP6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "antd/lib/message/style"
var style_ = __webpack_require__("XZ83");

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__("3PsY");
var message_default = /*#__PURE__*/__webpack_require__.n(message_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__("MX0m");
var styled_jsx_style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./src/components/organisms/BackgroundCover/index.js
var BackgroundCover = __webpack_require__("NeRB");

// EXTERNAL MODULE: external "antd/lib/button/style"
var button_style_ = __webpack_require__("DnGC");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./src/utils/xinformed/index.js
var xinformed = __webpack_require__("pKkg");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/organisms/forms/login.js












var validate = function validate(value) {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

var login_F =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(F, _Component);

  function F(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, F);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(F).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(assertThisInitialized["a" /* default */])(_this)); // no need if used arrow function in callback

    _this.setFormApi = _this.setFormApi.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(F, [{
    key: "handleClick",
    value: function handleClick(e) {
      this.props.getFormData(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(xinformed["c" /* Form */], {
        getApi: this.setFormApi
      }, external_react_default.a.createElement(xinformed["g" /* Text */], {
        field: "userName",
        style: {
          marginBottom: 15
        },
        placeholder: "User Name"
      }), external_react_default.a.createElement(xinformed["g" /* Text */], {
        field: "password",
        style: {
          marginBottom: 30
        },
        placeholder: "Password"
      }), external_react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 30,
          width: "100%"
        }
      }, external_react_default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, external_react_default.a.createElement(xinformed["a" /* Checkbox */], {
        field: "rememberme"
      }), external_react_default.a.createElement("label", {
        style: {
          marginLeft: 10
        }
      }, "Keep me signed in.")), external_react_default.a.createElement("div", {
        style: {
          float: "right"
        }
      }, external_react_default.a.createElement("h4", null, "Forgot Password")))), external_react_default.a.createElement("div", {
        style: {
          display: "inline-block",
          width: "100%"
        }
      }, external_react_default.a.createElement(button_default.a, {
        style: {
          float: "left",
          width: "45%"
        },
        type: "primary",
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }, "Log-in"), external_react_default.a.createElement(link_default.a, {
        as: "/signup",
        href: "/signup"
      }, external_react_default.a.createElement(button_default.a, {
        style: {
          float: "right",
          width: "45%",
          marginLeft: 15
        }
      }, "Sign Up"))));
    }
  }]);

  return F;
}(external_react_["Component"]);
/* harmony default export */ var login = (login_F);
// EXTERNAL MODULE: ./src/components/molecules/logoHeading/index.js + 1 modules
var logoHeading = __webpack_require__("Ch5H");

// CONCATENATED MODULE: ./src/components/templates/login/styles.js
var _defaultExport = [".leftSide.jsx-206069984{margin-right:50%;}", ".rightSide.jsx-206069984{margin-left:50%;height:100%;}", ".header.jsx-206069984{margin:10%;}", ".content.jsx-206069984{margin:10%;margin-bottom:0;}"];
_defaultExport.__hash = "206069984";
/* harmony default export */ var styles = (_defaultExport);
// CONCATENATED MODULE: ./src/components/templates/login/index.js







var login_Login = function Login(props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash)
  }, external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "leftSide"
  }, external_react_default.a.createElement(BackgroundCover["a" /* default */], null)), external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "rightSide"
  }, external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "header"
  }, external_react_default.a.createElement(logoHeading["a" /* default */], {
    text: "Welcome back! Please login to your account."
  })), external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "content"
  }, external_react_default.a.createElement(login, {
    getFormData: props.getFormData
  })), external_react_default.a.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "footer"
  })), external_react_default.a.createElement(styled_jsx_style_default.a, {
    id: styles.__hash
  }, styles));
};

/* harmony default export */ var templates_login = (login_Login);
// EXTERNAL MODULE: ./src/reduxHelper/index.js
var reduxHelper = __webpack_require__("ErRJ");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/utils/token/index.js + 6 modules
var token = __webpack_require__("mkzz");

// EXTERNAL MODULE: external "react-cookies"
var external_react_cookies_ = __webpack_require__("1H6Q");
var external_react_cookies_default = /*#__PURE__*/__webpack_require__.n(external_react_cookies_);

// CONCATENATED MODULE: ./pages/index.js








 // import { startClock, serverRenderClock } from '../src/store'







var pages_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App(props) {
    Object(classCallCheck["a" /* default */])(this, App);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this, props));
  }

  Object(createClass["a" /* default */])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(localStorage.getItem("admin-api-key"), "consllllll")
      // cookie.remove("admin-api-key")
      if (localStorage.getItem("admin-api-key") != null) router_default.a.push('/dashboard');
      if (external_react_cookies_default.a.load("admin-api-key")) router_default.a.push('/dashboard');
    }
  }, {
    key: "handleFormData",
    value: function handleFormData(data) {
      // TODO: check later , wher id is coming from in formstate
      var formData = data.values;
      console.log(formData, "loginnnn");
      this.props.loginDispatch(formData).then(function (res) {
        console.log("response", res);

        if (formData.rememberme) {
          token["a" /* default */].set(res.token);
        } else {
          token["a" /* default */].setTokenCookie(res.token);
        } // login was successful
        // check if account is blocked


        if (res.user[0].isblocked) {
          alert("You account is not active");
        } else {
          if (!res.user[0].data1) {
            router_default.a.push("/business-details");
          } else if (!res.user[0].data2) {
            router_default.a.push("/master-data");
          } else {
            router_default.a.push("/dashboard");

            message_default.a.success("Logged in successfully");
          }
        }
      }).catch(function (err) {
        console.log(err.response);

        if (err.reponse && (err.response.status = 401)) {
          message_default.a.error("Login Failed");
        } else {
          message_default.a.error("Something bad happend at our end");
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(templates_login, {
        getFormData: function getFormData(data) {
          return _this.handleFormData(data);
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore,
          req = _ref.req;
      // console.log(req)
      var isServer = !!req; // reduxStore.dispatch(serverRenderClock(isServer))

      return {};
    }
  }]);

  return App;
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    login: state.login
  };
}; // Example Syntax for writing dispatch


var pages_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginDispatch: function loginDispatch(username, password) {
      return dispatch(reduxHelper["login"].action(username, password));
    }
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, pages_mapDispatchToProps)(pages_App));

/***/ }),

/***/ "S4j3":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography");

/***/ }),

/***/ "SNX7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockdiary", function() { return stockdiary; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var stockdiary = function stockdiary() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/purchases?_unfold={\"location\":[\"name\"]}"));
};

/***/ }),

/***/ "SevZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("9kyW"));

var _stylesheet = _interopRequireDefault(__webpack_require__("bVZc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VaFv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zrwo");



//  Reference url https://medium.com/skyshidigital/simplify-redux-request-success-failure-pattern-ce77340eae06
function reduxHelper(actionName, fn) {
  if (typeof actionName !== "string") {
    throw new Error("actionName must be a string");
  }

  if (typeof fn !== "function") {
    throw new Error("fn must be a function");
  }

  var actionNameUpper = actionName.toUpperCase();
  var actionRequest = actionNameUpper + "_REQUEST";
  var actionSuccess = actionNameUpper + "_SUCCESS";
  var actionFailure = actionNameUpper + "_FAILURE";
  var initialState = {
    response: null,
    loading: false,
    isLoaded: false,
    error: null
  };

  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    switch (action.type) {
      case actionRequest:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          loading: true
        });

      case actionSuccess:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          loading: false,
          isLoaded: true,
          response: action.data !== undefined ? action.data : null
        });

      case actionFailure:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, state, {
          loading: false,
          error: action.error
        });

      default:
        return state;
    }
  }; // we are not using arrow function, because there no arguments binding
  // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions


  var action = function action() {
    console.log("working on ".concat(actionRequest.split('_')[0], " action"));
    var args = arguments; // console.log(typeof args, args);

    return function (dispatch) {
      dispatch({
        type: actionRequest
      });

      try {
        var result = fn.apply(null, args); // It's a promise

        if (typeof result.then === "function") {
          return result.then(function (data) {
            dispatch({
              type: actionSuccess,
              data: data
            });
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(data.data);
          }).catch(function (error) {
            dispatch({
              type: actionFailure,
              error: error
            });
            return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
          });
        } else {
          dispatch({
            type: actionSuccess,
            data: result
          });
          return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve();
        }
      } catch (error) {
        dispatch({
          type: actionFailure,
          error: error
        });
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
      }
    };
  };

  return {
    action: action,
    actionTypes: {
      request: actionRequest,
      success: actionSuccess,
      failure: actionFailure
    },
    reducer: reducer
  };
}

/* harmony default export */ __webpack_exports__["default"] = (reduxHelper);

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "X8dz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributevalues", function() { return attributevalues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributeValues", function() { return addAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributeValues", function() { return deleteAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributeValues", function() { return updateAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeName", function() { return attributeName; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributevalues = function attributevalues(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributevalues"));
};
var addAttributeValues = function addAttributeValues(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributevalues"), object);
};
var deleteAttributeValues = function deleteAttributeValues(attributevaluesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributevalues/").concat(attributevaluesID));
};
var updateAttributeValues = function updateAttributeValues(attributevaluesID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributevalues/").concat(attributevaluesID), object);
};
var attributeName = function attributeName(attributevaluesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributevalues?_where=(attributevalueID,eq,").concat(attributevaluesID, ")&_unfold={\"attribute\":[\"name\"]}"));
};

/***/ }),

/***/ "XQdj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XZ83":
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bVZc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "bq1K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesets", function() { return attributesets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributeSet", function() { return addAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributeSet", function() { return deleteAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributeSet", function() { return updateAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignAttribute", function() { return assignAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignedAttribute", function() { return assignedAttribute; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributesets = function attributesets(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributesets"));
};
var addAttributeSet = function addAttributeSet(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributesets"), object);
};
var deleteAttributeSet = function deleteAttributeSet(attributesetsID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributesets/").concat(attributesetsID));
};
var updateAttributeSet = function updateAttributeSet(attributesetsID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributesets/").concat(attributesetsID), object);
};
var assignAttribute = function assignAttribute(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributeuse"), object);
};
var assignedAttribute = function assignedAttribute(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/attributeuse?_where=(attributeset,eq,").concat(modifierID, ")&_unfold={\"attribute\":[\"name\"]}"));
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dNIM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocation", function() { return addLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLocation", function() { return deleteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocation", function() { return updateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationByID", function() { return getLocationByID; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var locations = function locations(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/blocations"));
};
var addLocation = function addLocation(object, headers) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/blocations"), object, headers);
};
var deleteLocation = function deleteLocation(blocationID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/blocations/").concat(blocationID));
};
var updateLocation = function updateLocation(blocationID, object, headers) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/blocations/").concat(blocationID), object, headers);
};
var getLocationByID = function getLocationByID(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/blocations"));
};

/***/ }),

/***/ "dVUk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for logging in of user:

var loginUrl = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] + "/weblogin";
var login = function login(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(loginUrl, data);
};

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fU5x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessRoles", function() { return businessRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoles", function() { return appRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessPermissions", function() { return businessPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermissions", function() { return getPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePermission", function() { return updatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationByBid", function() { return getLocationByBid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeeByLid", function() { return getEmployeeByLid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeeByBusinessId", function() { return getEmployeeByBusinessId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWebPermission", function() { return updateWebPermission; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o2U/");

 // export const getPermissions = uid =>
//   axios.get(
//     `${ROOTURL}/nroleuserslocations?_where=(user,eq,0b6e1ac7-f8a9-4149-a302-ed3a0e901618)&_unfold={"role":["name"]}`
//   )

var businessRoles = function businessRoles() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/nbroles"));
};
var appRoles = function appRoles() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/nroles"));
}; // Fetch permission for business (dashboard)

var businessPermissions = function businessPermissions(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/businesspermission?_where=(user,eq,").concat(userId, ")&_unfold={\"brole\":[\"name\"]}"));
}; // Fetch permissions for app

var getPermissions = function getPermissions(userID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/nroleuserslocations?_where=(user,eq,").concat(userID, ")&_unfold={\"role\":[\"name\"]}"));
}; // Update app permissions

var updatePermission = function updatePermission(data, roleId, userId, locationId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/nroleuserslocations/").concat(roleId, "___").concat(userId, "___").concat(locationId), data);
};
var getLocationByBid = function getLocationByBid(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/businesses/").concat(businessID, "/blocations?_fields=blocationID,name"));
};
var getEmployeeByLid = function getEmployeeByLid(locationID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/userslocations?_where=(location,eq,").concat(locationID, ")&_unfold={\"user\":[\"firstName\",\"LastName\"]}"));
};
var getEmployeeByBusinessId = function getEmployeeByBusinessId(businessId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/businesses/").concat(businessId, "/users?_fields=userID,userName,firstName,LastName"));
};
var updateWebPermission = function updateWebPermission(data, broleId, userId, businessId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/businesspermission/").concat(broleId, "___").concat(userId, "___").concat(businessId), data);
};

/***/ }),

/***/ "fo1k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employees", function() { return employees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployee", function() { return addEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEmployee", function() { return updateEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeelocations", function() { return employeelocations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployeeLocation", function() { return addEmployeeLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployeeLocation", function() { return deleteEmployeeLocation; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var employees = function employees(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(urlParams.businessID, "/users"));
};
var addEmployee = function addEmployee(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users"), object);
};
var deleteEmployee = function deleteEmployee(employeeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users/").concat(employeeID));
};
var updateEmployee = function updateEmployee(employeeID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users/").concat(employeeID), object);
};
var employeelocations = function employeelocations(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users/").concat(urlParams.userID, "/userslocations?_unfold={\"location\":[\"name\"]}"));
};
var addEmployeeLocation = function addEmployeeLocation(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/userslocations"), object);
};
var deleteEmployeeLocation = function deleteEmployeeLocation(employeeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/userslocations/").concat(employeeID));
};

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ivx8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBusiness", function() { return addBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businesses", function() { return businesses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusinessById", function() { return getBusinessById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessTransactions", function() { return businessTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessType", function() { return businessType; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for logging in of user:

var url = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] + "/businesses";
var addBusiness = function addBusiness(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, data);
};
var businesses = function businesses(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID));
};
var getBusinessById = function getBusinessById(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID));
};
var businessTransactions = function businessTransactions(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/transactions?_unfold={\"transactiontype\":[\"name\"]}"));
};
var businessType = function businessType() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesstype"));
};

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kNwf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProduct", function() { return addProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductById", function() { return getProductById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productCategories", function() { return productCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductCategory", function() { return addProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductCategory", function() { return deleteProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProductCategory", function() { return updateProductCategory; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 //Products APIs

var products = function products(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/products"));
};
var addProduct = function addProduct(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/products"), object);
};
var deleteProduct = function deleteProduct(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/products/").concat(urlParams.productID));
};
var updateProduct = function updateProduct(productID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/products/").concat(productID), object);
};
var getProductById = function getProductById(productID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/products/").concat(productID));
}; //Product Category APIs

var productCategories = function productCategories(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(urlParams.businessID, "/productcategories"));
};
var addProductCategory = function addProductCategory(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/productcategories"), object);
};
var deleteProductCategory = function deleteProductCategory(productcategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/productcategories/").concat(productcategoryID));
};
var updateProductCategory = function updateProductCategory(productcategoryID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/productcategories/").concat(productcategoryID), object);
};

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "lVwQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUsers", function() { return allUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessUsers", function() { return businessUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerReceipts", function() { return customerReceipts; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var getUserUrl = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] + "/users/";
var user = function user(userID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users/").concat(userID));
};
var allUsers = function allUsers() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users"));
};
var businessUsers = function businessUsers(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/users"));
};
var customerReceipts = function customerReceipts(customerID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/users/").concat(customerID, "/receipts"));
};

/***/ }),

/***/ "mkzz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/utils/token/setToken.js


var setToken_setToken = function setToken(token) {
  localStorage.setItem("admin-api-key", token);
  external_axios_default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ var token_setToken = (setToken_setToken);
// EXTERNAL MODULE: external "react-cookies"
var external_react_cookies_ = __webpack_require__("1H6Q");
var external_react_cookies_default = /*#__PURE__*/__webpack_require__.n(external_react_cookies_);

// CONCATENATED MODULE: ./src/utils/token/removeToken.js



var removeToken_removeToken = function removeToken() {
  localStorage.removeItem("admin-api-key");
  external_react_cookies_default.a.remove("admin-api-key");
  delete external_axios_default.a.defaults.headers.common["x-api-key"];
};

/* harmony default export */ var token_removeToken = (removeToken_removeToken);
// CONCATENATED MODULE: ./src/utils/token/setTokenStorage.js



var setTokenStorage_setTokenFromStorage = function setTokenFromStorage() {
  var token;
  if (external_react_cookies_default.a.load('admin-api-key')) token = external_react_cookies_default.a.load('admin-api-key');else token = localStorage.getItem("admin-api-key");
  external_axios_default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ var setTokenStorage = (setTokenStorage_setTokenFromStorage);
// CONCATENATED MODULE: ./src/utils/token/getToken.js


var getToken_getToken = function getToken() {
  if (external_react_cookies_default.a.load('admin-api-key')) return external_react_cookies_default.a.load('admin-api-key');else return localStorage.getItem("admin-api-key");
};

/* harmony default export */ var token_getToken = (getToken_getToken);
// CONCATENATED MODULE: ./src/utils/token/getTokenData.js


var jwtDecode = __webpack_require__("tlnx");

var getTokenData_getTokenData = function getTokenData() {
  var token = token_getToken();
  console.log("token", token);
  return jwtDecode(token);
};

/* harmony default export */ var token_getTokenData = (getTokenData_getTokenData);
// CONCATENATED MODULE: ./src/utils/token/setCookie.js



var setCookie_setTokenCookie = function setTokenCookie(token) {
  var expiryHours = 12; // const expires = new Date()
  // expires.setTime(expires.getTime() + (expiryHours * 60 * 60 * 1000))

  external_react_cookies_default.a.save("admin-api-key", token);
  external_axios_default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ var setCookie = (setCookie_setTokenCookie);
// CONCATENATED MODULE: ./src/utils/token/index.js






/* harmony default export */ var utils_token = __webpack_exports__["a"] = ({
  set: token_setToken,
  remove: token_removeToken,
  setFromStorage: setTokenStorage,
  getToken: token_getToken,
  getTokenData: token_getTokenData,
  setTokenCookie: setCookie
});

/***/ }),

/***/ "nGcB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryStock", function() { return inventoryStock; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var inventoryStock = function inventoryStock(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/inventory/bus/").concat(businessID, "/compact"));
};

/***/ }),

/***/ "o2U/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ROOTURL; // Server Url
// export default (ROOTURL = "http://142.93.222.40/api/v1")

/* harmony default export */ __webpack_exports__["a"] = (ROOTURL = "http://127.0.0.1:8000/api/v1");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oHXn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPurchase", function() { return addPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPurchase", function() { return reviewPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchaseItems", function() { return getPurchaseItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePurchase", function() { return deletePurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePurchase", function() { return updatePurchase; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o2U/");


var addPurchase = function addPurchase(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/purchases"), data);
};
var reviewPurchase = function reviewPurchase() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/purchases?_where=(verified,eq,0)&_unfold={\"location\":[\"name\"]}"));
};
var getPurchaseItems = function getPurchaseItems(pid) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/purchaseitems?_where=(purchase,eq,").concat(pid, ")&_unfold={\"product\":[\"name\"]}"));
};
var deletePurchase = function deletePurchase(pid) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/purchases/").concat(pid));
};
var updatePurchase = function updatePurchase(pid, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "/purchases/").concat(pid), data);
};

/***/ }),

/***/ "oRSk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pKkg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("EpBQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "t5cU":
/***/ (function(module, exports) {

module.exports = require("antd/lib/typography/style");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "tt+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1H6Q");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_1__);


var auth = function auth() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    console.log("inside auth api");
    if (react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.load('admin-api-key')) resolve(react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.load('admin-api-key'));else resolve(localStorage.getItem("admin-api-key")); // resolve({
    //   data: {
    //     token:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6dHJ1ZSwiaG9tZSI6ZmFsc2UsImVtcGxveWVlcyI6dHJ1ZSwiY3VzdG9tZXJzIjp0cnVlLCJtb2RpZmllcnMiOnRydWUsImxvY2F0aW9ucyI6dHJ1ZSwicGVybWlzc2lvbiI6dHJ1ZSwicHVyY2hhc2UiOnRydWUsImF0dHJpYnV0ZXMiOnRydWV9.xIam7OScv3fc99XkLXsXqqDHeAkGQYaB-eSS1t6-lDM"
    //     // token:
    //     //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0cyI6dHJ1ZSwidGF4ZXMiOnRydWUsImRpc2NvdW50cyI6ZmFsc2UsImhvbWUiOmZhbHNlLCJlbXBsb3llZXMiOmZhbHNlLCJjdXN0b21lcnMiOnRydWUsIm1vZGlmaWVycyI6dHJ1ZSwibG9jYXRpb25zIjp0cnVlLCJwZXJtaXNzaW9ucyI6dHJ1ZX0.IV6tURRw4p3JBi1nbhMcdRUIi4fxSwb7Ckv-hVmMACc"
    //   }
    // })
  });
};

/***/ }),

/***/ "uuVs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxes", function() { return taxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTax", function() { return addTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTax", function() { return deleteTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTax", function() { return updateTax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxCategories", function() { return taxCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaxCategory", function() { return addTaxCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTaxCategory", function() { return deleteTaxCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTaxCategory", function() { return updateTaxCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsnTaxcategory", function() { return hsnTaxcategory; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var taxes = function taxes(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(businessID, "/taxes"));
};
var addTax = function addTax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxes"), object);
};
var deleteTax = function deleteTax(taxID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxes/").concat(taxID));
};
var updateTax = function updateTax(taxID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxes/").concat(taxID), object);
};
var taxCategories = function taxCategories(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/businesses/").concat(urlParams.businessID, "/taxcategories"));
};
var addTaxCategory = function addTaxCategory(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxcategories"), object);
};
var deleteTaxCategory = function deleteTaxCategory(taxCategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxcategories/").concat(taxCategoryID));
};
var updateTaxCategory = function updateTaxCategory(taxCategoryID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/taxcategories/").concat(taxCategoryID), object);
};
var hsnTaxcategory = function hsnTaxcategory(taxCategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/hsncodetaxcategories?_where=(taxcategory,eq,").concat(taxCategoryID, ")&_unfold={\"hsncode\":[\"hsnname\"]}"));
};

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xYtC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topItems", function() { return topItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topCategories", function() { return topCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentTypes", function() { return paymentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topSalesman", function() { return topSalesman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationSales", function() { return locationSales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesDatewise", function() { return salesDatewise; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o2U/");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var topItems = function topItems(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/topproducts?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var topCategories = function topCategories(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/topproductscategories?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var paymentTypes = function paymentTypes(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/paymentwise?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var topSalesman = function topSalesman(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/topsalesman?business=").concat(business));
};
var locationSales = function locationSales(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/locationsales?business=").concat(business));
};
var salesDatewise = function salesDatewise(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], "/datewisetotalsale?business=").concat(business));
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });