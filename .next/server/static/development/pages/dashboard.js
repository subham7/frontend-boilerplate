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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

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

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

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

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
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

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
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
var isProd = process.env && "development" === 'production';

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

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

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

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

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

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/dashboard/.appPermisions/index.js":
/*!*************************************************!*\
  !*** ./pages/dashboard/.appPermisions/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_templates_permission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/components/templates/permission */ "./src/components/templates/permission/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");

















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createRuleData", function (data) {
      console.log("create rule ", data);
      if (!data) return null;else if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data.data).length === 0) return null;
      return data.data.map(function (item) {
        return {
          roleID: item.role,
          user: item.user,
          location: item.location,
          permission: item.permission,
          role: item.roleunfold.name
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createLocationData", function (data) {
      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data).length === 0) return null;
      return data.map(function (item) {
        return {
          value: item.blocationID,
          name: item.name
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createEmployeeData", function (data) {
      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data).length === 0) return null;
      return data.map(function (item) {
        var name = item.userunfold;
        return {
          value: item.user,
          name: "".concat(name.firstName, " ").concat(name.LastName)
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleChange", function (checked, roleID, user, location) {
      _this.props.updatePermission({
        permission: checked
      }, roleID, user, location).then(function (_) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.success("Permission changed successfully.");
      }).catch(function (err) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("There was an error");

        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleValue", function (value, name) {
      _this.setState({
        formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.formValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, name, value))
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onClick", function () {
      _this.props.getPermissions(_this.state.formValues.employee);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleFocus", function (option) {
      switch (option) {
        case "employee":
          _this.props.getEmployeeByLid(_this.state.formValues.location);

          break;

        case "location":
          _this.setState({
            formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.formValues, {
              employee: ""
            })
          });

          break;

        default:
          console.log("Some Error Occured");
          break;
      }
    });

    _this.state = {
      formValues: {
        location: "",
        employee: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var businessID = this.props.business.response.data[0].businessID;
      this.props.getLocationByBid(businessID);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.locationData.isLoaded) return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src_components_templates_permission__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "app",
        rules: this.createRuleData(this.props.permissions.response),
        onChange: this.handleChange,
        formData: {
          handleValue: this.handleValue,
          value: {
            location: this.state.formValues.location,
            employee: this.state.formValues.employee
          },
          handleFocus: this.handleFocus,
          location: this.createLocationData(this.props.locationData.response.data),
          employee: this.props.employeeData.isLoaded ? this.createEmployeeData(this.props.employeeData.response.data) : null,
          onClick: this.onClick
        }
      });else return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    permissions: state.getPermissions,
    employeeData: state.getEmployeeByLid,
    locationData: state.getLocationByBid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getPermissions: function getPermissions(userID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["getPermissions"].action(userID));
    },
    updatePermission: function updatePermission(data, roleId, userId, locationId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["updatePermission"].action(data, roleId, userId, locationId));
    },
    getEmployeeByLid: function getEmployeeByLid(locationID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["getEmployeeByLid"].action(locationID));
    },
    getLocationByBid: function getLocationByBid(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["getLocationByBid"].action(businessID));
    },
    businessPermissions: function businessPermissions(userId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["businessPermissions"].action(userId));
    },
    getEmployeeByBusinessId: function getEmployeeByBusinessId(businessId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["getEmployeeByBusinessId"].action(businessId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.attributes/attributes/attributes.data.js":
/*!*******************************************************************!*\
  !*** ./pages/dashboard/.attributes/attributes/attributes.data.js ***!
  \*******************************************************************/
/*! exports provided: attributesColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesColumns", function() { return attributesColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeSet */ "./src/components/organisms/forms/createAttributeSet.js");





var attributesColumns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "Alias",
  dataIndex: "alias",
  key: "alias"
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Create Attributes",
      isTableModal: true,
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.attributeID, cb);
      }
    });
  }
}, {
  title: 'Delete',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.attributeID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.attributes/attributes/index.js":
/*!*********************************************************!*\
  !*** ./pages/dashboard/.attributes/attributes/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/taxCategory */ "./src/components/organisms/taxCategory/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeSet */ "./src/components/organisms/forms/createAttributeSet.js");
/* harmony import */ var _attributes_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributes.data */ "./pages/dashboard/.attributes/attributes/attributes.data.js");
/* harmony import */ var _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pagesData/taxCategory */ "./pagesData/taxCategory.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      attributesTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadAttributes();
    }
  }, {
    key: "handleCreateAttributeSet",
    value: function handleCreateAttributeSet(data, cb) {
      var _this2 = this;

      data.values.attributeID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      console.log("post request data", data.values);
      this.props.addAttributes(data.values).then(function (res) {
        _this2.loadAttributes();

        cb({
          status: true,
          message: "AttributeSet created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.attributesTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.attributes.isLoaded) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
        form: _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_10__["default"],
        title: "Create Attributes",
        rowSelection: {},
        cascaderData: _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__["taxCategoryData"].cascaderData,
        columns: _attributes_data__WEBPACK_IMPORTED_MODULE_11__["attributesColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this3.handleCreateAttributeSet(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this3.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
  }, {
    key: "_createAttributeSetColoumns",
    value: function _createAttributeSetColoumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.alias = item.alias;
          object.attributeID = item.attributeID;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this4.props.deleteAttributes(id).then(function (res) {
                _this4.loadAttributes();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this4.props.updateAttributes(id, data.values).then(function (res) {
                _this4.loadAttributes();

                cb({
                  status: true,
                  message: "Attribute Set updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadAttributes",
    value: function loadAttributes() {
      var _this5 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getAttributes(urlParams).then(function (data) {
        console.log(data);

        _this5.setState({
          attributesTableData: _this5._createAttributeSetColoumns(_this5.props.attributes.response.data)
        }, function () {
          _this5.setState({
            filteredTableData: _this5.state.attributesTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    attributes: state.attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAttributes: function getAttributes(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributes"].action(object));
    },
    addAttributes: function addAttributes(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addAttributes"].action(object));
    },
    deleteAttributes: function deleteAttributes(attributeID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteAttributes"].action(attributeID));
    },
    updateAttributes: function updateAttributes(attributeID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateAttributes"].action(attributeID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.attributes/attributeset/attributeset.data.js":
/*!***********************************************************************!*\
  !*** ./pages/dashboard/.attributes/attributeset/attributeset.data.js ***!
  \***********************************************************************/
/*! exports provided: attributesetsColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesetsColumns", function() { return attributesetsColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeSet */ "./src/components/organisms/forms/createAttributeSet.js");
/* harmony import */ var _src_components_organisms_forms_assignAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignAttribute */ "./src/components/organisms/forms/assignAttribute.js");






var attributesetsColumns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "Alias",
  dataIndex: "alias",
  key: "alias"
}, {
  title: "Assign",
  dataIndex: "",
  key: "assign",
  render: function render(object) {
    // console.log(object.assign.taxCategoryData)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      form: _src_components_organisms_forms_assignAttribute__WEBPACK_IMPORTED_MODULE_5__["default"],
      title: "Assign attributes",
      buttonValue: "Assign",
      formData: object.assign,
      assignedData: {},
      onSubmit: function onSubmit(data, cb) {
        return object.assign.handleAssign(data, object.attributesetID, cb);
      }
    });
  }
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Create Attribute Set",
      isTableModal: true,
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.attributesetID, cb);
      }
    });
  }
}, {
  title: 'Delete',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.attributesetID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.attributes/attributeset/index.js":
/*!***********************************************************!*\
  !*** ./pages/dashboard/.attributes/attributeset/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/taxCategory */ "./src/components/organisms/taxCategory/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeSet */ "./src/components/organisms/forms/createAttributeSet.js");
/* harmony import */ var _attributeset_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributeset.data */ "./pages/dashboard/.attributes/attributeset/attributeset.data.js");
/* harmony import */ var _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pagesData/taxCategory */ "./pagesData/taxCategory.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      attributeSetTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getAttribute().then(function () {
        _this2.loadAttributeSet();
      });
    }
  }, {
    key: "handleCreateAttributeSet",
    value: function handleCreateAttributeSet(data, cb) {
      var _this3 = this;

      data.values.attributesetID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      console.log("post request data", data.values);
      this.props.addAttributeSet(data.values).then(function (res) {
        _this3.loadAttributeSet();

        cb({
          status: true,
          message: "AttributeSet created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.attributeSetTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.attributesets.isLoaded) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
        form: _src_components_organisms_forms_createAttributeSet__WEBPACK_IMPORTED_MODULE_10__["default"],
        title: "Create Attribute Set",
        rowSelection: {},
        cascaderData: _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__["taxCategoryData"].cascaderData,
        columns: _attributeset_data__WEBPACK_IMPORTED_MODULE_11__["attributesetsColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this4.handleCreateAttributeSet(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this4.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
  }, {
    key: "_createAttributeSetColoumns",
    value: function _createAttributeSetColoumns(data) {
      var _this5 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.alias = item.alias;
          object.attributesetID = item.attributesetID;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this5.props.deleteAttributeSet(id).then(function (res) {
                _this5.loadAttributeSet();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this5.props.updateAttributeSet(id, data.values).then(function (res) {
                _this5.loadAttributeSet();

                cb({
                  status: true,
                  message: "Attribute Set updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          }, object.assign = {
            handleAssign: function handleAssign(data, id, cb) {
              var obj = {};
              obj.attributeset = id;
              obj.attribute = data.values.assignedTo;
              console.log(obj);

              _this5.props.assignAttribute(obj).then(function (res) {
                cb({
                  status: true,
                  message: "Attributes assigned"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: true,
                  message: "ERROR!"
                });
              });
            },
            assignedAttribute: function assignedAttribute(attributesetID) {
              return _this5.props.assignedAttribute(attributesetID);
            },
            attributeData: _this5.createSelectAttributeData(_this5.props.attributes.response.data),
            attributesetID: item.attributesetID
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadAttributeSet",
    value: function loadAttributeSet() {
      var _this6 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getAttributeSet(urlParams).then(function (data) {
        console.log(data);

        _this6.setState({
          attributeSetTableData: _this6._createAttributeSetColoumns(_this6.props.attributesets.response.data)
        }, function () {
          _this6.setState({
            filteredTableData: _this6.state.attributeSetTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "createSelectAttributeData",
    value: function createSelectAttributeData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.attributeID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    attributesets: state.attributesets,
    attributes: state.attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAttributeSet: function getAttributeSet(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributesets"].action(object));
    },
    getAttribute: function getAttribute(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributes"].action(object));
    },
    addAttributeSet: function addAttributeSet(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addAttributeSet"].action(object));
    },
    assignAttribute: function assignAttribute(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["assignAttribute"].action(object));
    },
    assignedAttribute: function assignedAttribute(attributesetID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["assignedAttribute"].action(attributesetID));
    },
    deleteAttributeSet: function deleteAttributeSet(attributesetID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteAttributeSet"].action(attributesetID));
    },
    updateAttributeSet: function updateAttributeSet(attributesetID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateAttributeSet"].action(attributesetID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.attributes/attributevalues/attributevalue.data.js":
/*!****************************************************************************!*\
  !*** ./pages/dashboard/.attributes/attributevalues/attributevalue.data.js ***!
  \****************************************************************************/
/*! exports provided: attributeValueColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueColumns", function() { return attributeValueColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeValue */ "./src/components/organisms/forms/createAttributeValue.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../attributes */ "./pages/dashboard/.attributes/attributes/index.js");






var attributeValueColumns = [{
  title: "Attribute",
  dataIndex: "",
  key: "attribute",
  render: function render(object) {
    var attribute = object.selectData.findIndex(function (id) {
      return id.value == object.attribute;
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, object.selectData[attribute].name);
  }
}, {
  title: "Value",
  dataIndex: "value",
  key: "value"
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createAttributeValue__WEBPACK_IMPORTED_MODULE_4__["default"],
      formData: object.selectData,
      title: "Create Attributes Value",
      isTableModal: true,
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.attributevalueID, cb);
      }
    });
  }
}, {
  title: 'Delete',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.attributevalueID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.attributes/attributevalues/index.js":
/*!**************************************************************!*\
  !*** ./pages/dashboard/.attributes/attributevalues/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/taxCategory */ "./src/components/organisms/taxCategory/index.js");
/* harmony import */ var _src_components_organisms_forms_createAttributeValue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createAttributeValue */ "./src/components/organisms/forms/createAttributeValue.js");
/* harmony import */ var _attributevalue_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributevalue.data */ "./pages/dashboard/.attributes/attributevalues/attributevalue.data.js");
/* harmony import */ var _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pagesData/taxCategory */ "./pagesData/taxCategory.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      attributesTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getAttributes().then(function (res) {
        // console.log(res)
        _this2.loadAttributeValue();
      });
    }
  }, {
    key: "handleCreateAttributeValue",
    value: function handleCreateAttributeValue(data, cb) {
      var _this3 = this;

      data.values.attributevalueID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      console.log("post request data", data.values);
      this.props.addAttributeValues(data.values).then(function (res) {
        _this3.loadAttributeValue();

        cb({
          status: true,
          message: "AttributeSet created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.attributesTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.value.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.attributevalues.isLoaded) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
        form: _src_components_organisms_forms_createAttributeValue__WEBPACK_IMPORTED_MODULE_10__["default"],
        formData: this.createSelectAttributeData(this.props.attributes.response.data),
        title: "Create Attributes",
        rowSelection: {},
        cascaderData: _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__["taxCategoryData"].cascaderData,
        columns: _attributevalue_data__WEBPACK_IMPORTED_MODULE_11__["attributeValueColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this4.handleCreateAttributeValue(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this4.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
  }, {
    key: "_createAttributeValueColoumns",
    value: function _createAttributeValueColoumns(data) {
      var _this5 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.value = item.value;
          object.attribute = item.attribute;
          object.attributeFunc = _this5.props.getAttributeByName(item.attributevalueID).then(function (res) {
            return res[0].attributeunfold;
          });
          object.attributevalueID = item.attributevalueID;
          object.selectData = _this5.createSelectAttributeData(_this5.props.attributes.response.data);
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this5.props.deleteAttributeValues(id).then(function (res) {
                _this5.loadAttributeValue();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this5.props.updateAttributeValues(id, data.values).then(function (res) {
                _this5.loadAttributeValue();

                cb({
                  status: true,
                  message: "AttributeValue Set updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadAttributeValue",
    value: function loadAttributeValue() {
      var _this6 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getAttributeValue(urlParams).then(function (data) {
        console.log(data);

        _this6.setState({
          attributesTableData: _this6._createAttributeValueColoumns(_this6.props.attributevalues.response.data)
        }, function () {
          _this6.setState({
            filteredTableData: _this6.state.attributesTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "createSelectAttributeData",
    value: function createSelectAttributeData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.attributeID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    attributevalues: state.attributevalues,
    attributes: state.attributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAttributeValue: function getAttributeValue(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributevalues"].action(object));
    },
    getAttributes: function getAttributes(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributes"].action(object));
    },
    getAttributeByName: function getAttributeByName(attributevalueID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["attributeName"].action(attributevalueID));
    },
    addAttributeValues: function addAttributeValues(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addAttributeValues"].action(object));
    },
    deleteAttributeValues: function deleteAttributeValues(attributevalueID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteAttributeValues"].action(attributevalueID));
    },
    updateAttributeValues: function updateAttributeValues(attributevalueID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateAttributeValues"].action(attributevalueID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.attributes/index.js":
/*!**********************************************!*\
  !*** ./pages/dashboard/.attributes/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _attributeset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributeset */ "./pages/dashboard/.attributes/attributeset/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributes */ "./pages/dashboard/.attributes/attributes/index.js");
/* harmony import */ var _attributevalues__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributevalues */ "./pages/dashboard/.attributes/attributevalues/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_12__);













var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane;

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("mount");
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
          defaultActiveKey: "1",
          onChange: this.callback
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Attribute Set",
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_attributeset__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Attributes",
          key: "2"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_attributes__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Attribute Value",
          key: "3"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_attributevalues__WEBPACK_IMPORTED_MODULE_11__["default"], null))));
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.customers/customerdirectory/index.js":
/*!***************************************************************!*\
  !*** ./pages/dashboard/.customers/customerdirectory/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_templates_CustomerDirectory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/templates/CustomerDirectory */ "./src/components/templates/CustomerDirectory/index.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_api_ROOTURL__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/api/ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleClick", function (userID) {
      console.log(userID);
      axios__WEBPACK_IMPORTED_MODULE_14___default.a.get("".concat(_src_api_ROOTURL__WEBPACK_IMPORTED_MODULE_13__["default"], "/users?_where=(userID,eq,").concat(userID, ")")).then(function (res) {
        _this.setState({
          customerDetails: res.data
        });

        return _this.props.getReceipts(userID);
      }).then(function (res) {
        console.log(res);

        _this.setState({
          receiptData: res
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleModalClick", function (receiptID, modalData) {
      console.log(receiptID, "receiptId");
      var promises = [_this.props.getReceiptById(receiptID), _this.props.getReceiptTransactionType(receiptID)];

      _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promises).then(function (result) {
        var data = [result[0], result[1][0]];

        _this.setState({
          receiptDetails: data
        }); // console.log(this.state.receiptDetails, "state")


        modalData(_this.state.receiptDetails);
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      customerDetails: [],
      receiptData: [],
      receiptDetails: [],
      // receiptTransactionsData: [],
      usersTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var businessID = this.props.business.response.data[0].businessID;
      console.log(businessID);
      this.props.getUsers(businessID).then(function (res) {
        _this2.setState({
          filteredTableData: res,
          usersTableData: res
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.usersTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        var name = "".concat(data.firstName, " ").concat(data.LastName);
        return name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.businessUsers.response) return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_templates_CustomerDirectory__WEBPACK_IMPORTED_MODULE_10__["default"], {
        listData: this.state.filteredTableData,
        customerData: this.state.customerDetails,
        receiptCardData: this.state.receiptData,
        receiptCardDetails: this.state.receiptDetails,
        actionData: ["abcd", "efgh"] // date="Today 12-12-2019"
        ,
        onClick: this.handleClick,
        handleModalClick: this.handleModalClick,
        onSearch: function onSearch(value) {
          return _this3.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_11__["default"], null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    businessUsers: state.businessUsers
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUsers: function getUsers(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__["businessUsers"].action(businessID));
    },
    getReceipts: function getReceipts(customerID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__["customerReceipts"].action(customerID));
    },
    getReceiptById: function getReceiptById(rid) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__["receiptById"].action(rid));
    },
    getReceiptTransactionType: function getReceiptTransactionType(rid) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_12__["receiptTransactionType"].action(rid));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.customers/index.js":
/*!*********************************************!*\
  !*** ./pages/dashboard/.customers/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _customerdirectory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customerdirectory */ "./pages/dashboard/.customers/customerdirectory/index.js");










var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane;

var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("mount");
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
          defaultActiveKey: "1",
          onChange: this.callback
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Directory",
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customerdirectory__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Feedback",
          key: "2"
        }, "Feedback"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Insights",
          key: "3"
        }, "Insights"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Settings",
          key: "4"
        }, "Settings")));
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {};
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.discount/discount.data.js":
/*!****************************************************!*\
  !*** ./pages/dashboard/.discount/discount.data.js ***!
  \****************************************************/
/*! exports provided: discountColumns, discountColumnData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discountColumns", function() { return discountColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discountColumnData", function() { return discountColumnData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_organisms_forms_assignItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/organisms/forms/assignItem */ "./src/components/organisms/forms/assignItem.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/organisms/forms/addEmploy */ "./src/components/organisms/forms/addEmploy.js");

// import stockTag from "../src/components/atoms/stockTag"





var discountColumns = [{
  title: "Discount Code",
  dataIndex: "code",
  key: "code"
}, {
  title: "Type",
  dataIndex: "type",
  key: "type"
}, {
  title: "Amount",
  dataIndex: "amount",
  key: "amount"
}, {
  title: "Min Purchase Amount",
  dataIndex: "minAmnt",
  key: "minAmnt"
}, //   {
//     title: "Assign",
//     dataIndex: "assign",
//     key: "assign",
//     render: assign => (
//       <Model
//         form={AssignItem}
//         title="Assign Items"
//         buttonValue="Assign"
//         onSubmit={assign.onCreate}
//         formData={assign}
//       />
//     )
//   },
// {
//   title: "Permissions",
//   dataIndex: "permissions",
//   key: "permissions",
//   render: permissions => (
//     <Cascader style={{ width: 120 }} optionArray={permissions} />
//   )
// },
// {
//   title: "Store Role",
//   dataIndex: "role",
//   key: "role",
//   render: role => <Tag color="green">{role}</Tag>
// },
{
  title: "Rename",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_5__["default"],
      title: "Create Item",
      isTableModal: true,
      buttonValue: "Create",
      prefilledValues: object.prefilledValues,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.userID, cb);
      }
    });
  }
}, {
  title: "",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.userID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: "#F84D65",
        color: "white"
      }
    });
  }
}];
var discountColumnData = [{
  code: "TAKE100",
  type: "cash",
  amount: "100 INR",
  minAmnt: "2000 INR"
}, {
  code: "20%OFF",
  type: "%",
  amount: "20%",
  minAmnt: "99 INR"
}];


/***/ }),

/***/ "./pages/dashboard/.discount/index.js":
/*!********************************************!*\
  !*** ./pages/dashboard/.discount/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_templates_locations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/components/templates/locations */ "./src/components/templates/locations/index.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_organisms_productTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/components/organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _discount_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./discount.data */ "./pages/dashboard/.discount/discount.data.js");










 // import { locationColumns } from "./locations.data"





var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      filteredTableData: [],
      locationTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.loadLocationData()
    }
  }, {
    key: "handleCreateLocation",
    value: function handleCreateLocation(data, cb) {
      var _this2 = this;

      data.values.blocationID = uuid_v4__WEBPACK_IMPORTED_MODULE_11___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      var businessID = this.props.business.response.data[0].businessID;
      this.props.addLocation(data.values).then(function (res) {
        _this2.loadLocationData();

        cb({
          status: true,
          message: "Location created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "Some Error occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var value = e.target.value;
      var filteredEvents = this.state.locationTableData.filter(function (data) {
        var pattern = new RegExp(value, "i"); // console.log((pattern), "patttttttern")

        return data.name.match(pattern); // return data.name.includes(value)
      });
      console.log(filteredEvents, "filterrrr");
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, "Discounts")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_productTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
          columns: _discount_data__WEBPACK_IMPORTED_MODULE_13__["discountColumns"],
          data: _discount_data__WEBPACK_IMPORTED_MODULE_13__["discountColumnData"]
        }));
      } else {}
    }
  }, {
    key: "_createLocationColumns",
    value: function _createLocationColumns(data) {
      var _this3 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.pocname = item.pocName;
          object.name = item.name;
          object.number = item.pocPhone;
          object.blocationID = item.blocationID;
          object.address = item.address;
          object.email = item.pocEmail, object.prefilledValues = item;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this3.props.deleteLocation(id).then(function (res) {
                _this3.loadLocationData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              _this3.props.updateLocation(id, data.values).then(function (res) {
                _this3.loadLocationData();

                cb({
                  status: true,
                  message: "Location updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      } else {
        var object = {};
        object.pocname = item.pocName, object.name = item.name;
        object.blocationID = item.blocationID;
        object.address = data.address;
        object.email = data.pocEmail;
        object.prefilledValues = item;
        object.handleFeatures = {
          handleDelete: function handleDelete(id) {
            console.log(id);

            _this3.props.deleteLocation(id).then(function (res) {
              _this3.loadLocationData();
            }).catch(function (err) {
              console.log(err);
            });
          },
          handleUpdate: function handleUpdate(data, id, cb) {
            _this3.props.updateLocation(id, data.values).then(function (res) {
              _this3.loadLocationData();

              cb({
                status: true,
                message: "Location updated"
              });
            }).catch(function (err) {
              console.log(err);
              cb({
                status: false,
                message: "Some Error while updating"
              });
            });
          }
        };
        temp.push(object);
      }

      return temp;
    }
  }, {
    key: "loadLocationData",
    value: function loadLocationData() {
      var _this4 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getLocations(businessID).then(function (res) {
        _this4.setState({
          locationTableData: _this4._createLocationColumns(res)
        });

        _this4.setState({
          filteredTableData: _this4.state.locationTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    locations: state.locations
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getLocations: function getLocations(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["locations"].action(businessID));
    },
    addLocation: function addLocation(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addLocation"].action(object));
    },
    deleteLocation: function deleteLocation(blocationID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteLocation"].action(blocationID));
    },
    updateLocation: function updateLocation(blocationID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateLocation"].action(blocationID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.employees/employees.data.js":
/*!******************************************************!*\
  !*** ./pages/dashboard/.employees/employees.data.js ***!
  \******************************************************/
/*! exports provided: employeeColumns, employeeColumnData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeColumns", function() { return employeeColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeColumnData", function() { return employeeColumnData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_organisms_forms_assignItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/organisms/forms/assignItem */ "./src/components/organisms/forms/assignItem.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/components/organisms/forms/addEmploy */ "./src/components/organisms/forms/addEmploy.js");

// import stockTag from "../src/components/atoms/stockTag"





var employeeColumns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "EmployeeID",
  dataIndex: "userName",
  key: "userName"
}, {
  title: "Email",
  dataIndex: "email",
  key: "email"
}, {
  title: "Phone",
  dataIndex: "phone",
  key: "phone"
}, {
  title: "Assign",
  dataIndex: "assign",
  key: "assign",
  render: function render(assign) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      form: _src_components_organisms_forms_assignItem__WEBPACK_IMPORTED_MODULE_3__["default"],
      title: "Assign Items",
      buttonValue: "Assign",
      onSubmit: assign.onCreate,
      formData: assign
    });
  }
}, // {
//   title: "Permissions",
//   dataIndex: "permissions",
//   key: "permissions",
//   render: permissions => (
//     <Cascader style={{ width: 120 }} optionArray={permissions} />
//   )
// },
// {
//   title: "Store Role",
//   dataIndex: "role",
//   key: "role",
//   render: role => <Tag color="green">{role}</Tag>
// },
{
  title: "Rename",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_5__["default"],
      title: "Create Item",
      isTableModal: true,
      buttonValue: "Create",
      prefilledValues: object.prefilledValues,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.userID, cb);
      }
    });
  }
}, {
  title: "",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.userID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: "#F84D65",
        color: "white"
      }
    });
  }
}];
var employeeColumnData = [{
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}, {
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}, {
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}, {
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}, {
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}, {
  product: "Test Name",
  employee: "1*2*3*4*5",
  role: "Admin",
  permissions: ["Permission", "Permission", "Permission", "Permission"]
}];


/***/ }),

/***/ "./pages/dashboard/.employees/index.js":
/*!*********************************************!*\
  !*** ./pages/dashboard/.employees/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_templates_employee__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../src/components/templates/employee */ "./src/components/templates/employee/index.js");
/* harmony import */ var _employees_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees.data */ "./pages/dashboard/.employees/employees.data.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/.employees/wrapper.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App).call(this, props));
    _this.state = {
      employeesTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadEmployeeData();
    }
  }, {
    key: "handleCreateLocation",
    value: function handleCreateLocation(data, cb) {
      var _this2 = this;

      data.values.userID = uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      data.values.usertype = "8a0930f9-5aab-11e9-9666-f8cab8258ec4";
      this.props.addEmployee(data.values).then(function (res) {
        _this2.loadEmployeeData();

        cb({
          status: true,
          message: "Employee created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleAssignUserLocation",
    value: function handleAssignUserLocation(data, cb) {
      console.log(data.values);
      this.props.addEmployeeLocation(data.values).then(function (res) {
        cb({
          status: true,
          message: "User Assigned to location successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    } // 8a0930f9-5aab-11e9-9666-f8cab8258ec4

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (true) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_employee__WEBPACK_IMPORTED_MODULE_10__["default"], {
        formData: this.createSelectData(this.props.locations.response.data),
        rowSelection: {},
        columns: _employees_data__WEBPACK_IMPORTED_MODULE_11__["employeeColumns"],
        columnData: this.state.employeesTableData,
        pagination: {
          pageSize: 5,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this3.handleCreateLocation(data, cb);
        }
      });else {}
    }
  }, {
    key: "_createEmployeeColumns",
    value: function _createEmployeeColumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.firstName + " " + item.LastName;
          object.userID = item.userID;
          object.userName = item.userName;
          object.email = item.email;
          object.phone = item.phone;
          object.prefilledValues = item;
          object.assign = {
            onCreate: function onCreate(data, cb) {
              data.values.user = item.userID;

              _this4.handleAssignUserLocation(data, cb);
            },
            onRemove: function onRemove(id, cb) {
              console.log(id);

              _this4.props.deleteEmployeeLocation(id).then(function (res) {
                cb("Location removed successfully.");
              }).catch(function (err) {
                cb(err, "Error occured while removing.");
              });
            },
            employeeLocation: function employeeLocation(object) {
              return _this4.props.employeelocations(object);
            },
            employeeID: item.userID,
            locationData: _this4.createSelectData(_this4.props.locations.response.data)
          };
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              // let businessID = this.props.business.response.data[0].businessID;
              _this4.props.deleteEmployee(id).then(function (res) {
                _this4.loadEmployeeData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              _this4.props.updateEmployee(id, data.values).then(function (res) {
                _this4.loadEmployeeData();

                cb({
                  status: true,
                  message: "Employee data updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error occured while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    } // Integrated with test api

  }, {
    key: "loadEmployeeData",
    value: function loadEmployeeData() {
      var _this5 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getEmployees(urlParams).then(function (res) {
        // console.log(res)
        _this5.setState({
          employeesTableData: _this5._createEmployeeColumns(_this5.props.employees.response.data)
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).length != 0) {
        var selectData = data.map(function (item) {
          return {
            name: item.name,
            value: item.blocationID
          };
        });
        return selectData;
      } else {
        return [{
          name: "",
          value: ""
        }];
      }
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    employees: state.employees,
    locations: state.locations // addEmployee: state.addEmployee,
    // updateEmployee: state.updateEmployee,
    // deleteEmployee: state.deleteEmployee

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getEmployees: function getEmployees(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["employees"].action(object));
    },
    addEmployee: function addEmployee(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["addEmployee"].action(object));
    },
    addEmployeeLocation: function addEmployeeLocation(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["addEmployeeLocation"].action(object));
    },
    deleteEmployee: function deleteEmployee(employeeID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["deleteEmployee"].action(employeeID));
    },
    updateEmployee: function updateEmployee(employeeID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["updateEmployee"].action(employeeID, object));
    },
    employeelocations: function employeelocations(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["employeelocations"].action(object));
    },
    deleteEmployeeLocation: function deleteEmployeeLocation(id) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["deleteEmployeeLocation"].action(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./pages/dashboard/.employees/wrapper.js":
/*!***********************************************!*\
  !*** ./pages/dashboard/.employees/wrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");









function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

    function App(props) {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.locations.isLoaded) {
          this.loadData();
        }
      }
    }, {
      key: "loadData",
      value: function loadData() {
        var businessID = this.props.business.response.data[0].businessID;
        this.props.getLocations(businessID).then(function (res) {
          return console.log(res);
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.locations.isLoaded) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);else return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_8__["default"], null);
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      business: state.businesses,
      locations: state.locations
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getLocations: function getLocations(businessID) {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["locations"].action(businessID));
      }
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App);
}

/***/ }),

/***/ "./pages/dashboard/.home/home.data.js":
/*!********************************************!*\
  !*** ./pages/dashboard/.home/home.data.js ***!
  \********************************************/
/*! exports provided: columns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columns", function() { return columns; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "antd/lib/tag/style");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var topProductColumns = [{
  title: 'Top Selling Items',
  dataIndex: 'productName',
  key: 'name',
  render: function render(text) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Units',
  dataIndex: 'productUnits',
  key: 'address'
}];
var columnstopselling = [{
  title: 'Date',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Sales',
  key: 'tags',
  dataIndex: 'tags',
  render: function render(tags) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, tags.map(function (tag) {
      var color = tag[0] == "-" ? 'volcano' : 'green';

      if (tag === 'loser') {
        color = 'volcano';
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
        color: color,
        key: tag
      }, "\u20B9 ", tag);
    }));
  }
}];
var columnstopcat = [{
  title: 'Top Categories',
  dataIndex: 'name',
  key: 'name',
  render: function render(text) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: "javascript:;"
    }, text);
  }
}, {
  title: 'Units',
  dataIndex: 'productCategoryCount',
  key: 'productCategoryCount'
}];

var getConfigPaymentObject = function getConfigPaymentObject(paymentTypeData) {
  var configpayment = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Payment Methods'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black'
          }
        }
      }
    },
    series: [{
      name: 'Payment Methods',
      colorByPoint: true,
      data: paymentTypeData
    }]
  };
  return configpayment;
};

var getConfigTopSalePersonObject = function getConfigTopSalePersonObject(salesmanName, salesValue) {
  var configTopSalePerson = {
    title: {
      text: 'Top Sales person'
    },
    subtitle: {
      text: 'Sales'
    },
    xAxis: {
      categories: salesmanName
    },
    series: [{
      type: 'column',
      colorByPoint: true,
      data: salesValue,
      showInLegend: false
    }]
  };
  return configTopSalePerson;
};

var getConfigStoreDivisonObject = function getConfigStoreDivisonObject(loacationSalesData) {
  var configStoreDivison = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Store Wise Divison'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: 'black'
          }
        }
      }
    },
    series: [{
      name: 'Store Wise Division',
      colorByPoint: true,
      data: loacationSalesData
    }]
  };
  return configStoreDivison;
};

var columns = {
  topProductColumns: topProductColumns,
  columnstopselling: columnstopselling,
  columnstopcat: columnstopcat,
  getConfigPaymentObject: getConfigPaymentObject,
  getConfigTopSalePersonObject: getConfigTopSalePersonObject,
  getConfigStoreDivisonObject: getConfigStoreDivisonObject
};

/***/ }),

/***/ "./pages/dashboard/.home/index.js":
/*!****************************************!*\
  !*** ./pages/dashboard/.home/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/table/style */ "antd/lib/table/style");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _home_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home.data */ "./pages/dashboard/.home/home.data.js");
/* harmony import */ var _src_api_business__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../src/api/business */ "./src/api/business/index.js");





















var ReactHighcharts = __webpack_require__(/*! react-highcharts */ "react-highcharts");



var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadAllReports", function (locationID) {
      _this.loadTopItems(locationID);

      _this.loadTopCategory(locationID);

      _this.loadTransactionType(locationID);

      _this.loadTopSalesman();

      _this.loadLocationSales();

      _this.loadSalesWithinDates();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "handleChange", function (value) {
      _this.setState({
        initialBlocation: value
      });

      _this.loadAllReports(value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadTopItems", function (locationID) {
      _this.props.getTopProducts(locationID, '2018-07-04', '2021-07-06').then(function (data) {
        _this.setState({
          topProductsData: data.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadTopCategory", function (locationID) {
      _this.props.topCategories(locationID, '2018-07-04', '2021-07-06').then(function (data) {
        _this.setState({
          topCategoryData: data.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadTransactionType", function (locationID) {
      _this.props.paymentTypes(locationID, '2018-07-04', '2021-07-06').then(function (data) {
        var dataArray = data.map(function (item, i) {
          return {
            name: item.name,
            y: item.paymentTypeCount
          };
        });

        _this.setState({
          paymentTypeData: dataArray.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadTopSalesman", function () {
      //send businessID
      _this.props.getTopSalesman(_this.props.business.response.data[0].businessID).then(function (data) {
        var salesValue = [];
        var salesmanName = [];

        for (var index = 0; index < data.length; index++) {
          salesValue.push(data[index].totalSalesAmount);
          salesmanName.push(data[index].name);
        }

        _this.setState({
          topSalesmanData: {
            salesValue: salesValue,
            salesmanName: salesmanName
          }
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadLocationSales", function () {
      _this.props.getLocationSales(_this.props.business.response.data[0].businessID).then(function (data) {
        var dataArray = data.map(function (item, i) {
          return {
            name: item.name,
            y: item.units
          };
        });

        _this.setState({
          loacationSalesData: dataArray
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "loadSalesWithinDates", function () {
      _this.props.getSalesDate(_this.props.business.response.data[0].businessID).then(function (data) {
        var salesData = [];

        for (var index = 0; index < data.length; index++) {
          salesData.push({
            key: index,
            name: '' + data[index].day + '-' + data[index].month + '-' + data[index].year,
            tags: [data[index].totalSale]
          });
        }

        _this.setState({
          grossSalesData: salesData.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      initialBlocation: null,
      blocations: [],
      topProductsData: [],
      topCategoryData: [],
      paymentTypeData: [],
      topSalesmanData: [],
      loacationSalesData: [],
      grossSalesData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.getBlocations(this.props.business.response.data[0].businessID).then(function (data) {
        _this2.setState({
          blocations: data
        });

        _this2.setState({
          initialBlocation: _this2.createSelectData(_this2.state.blocations)[0].value
        });

        _this2.loadAllReports(_this2.state.initialBlocation);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        style: {
          padding: '30px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 24
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        placeholder: "Select Location",
        optionArray: this.createSelectData(this.state.blocations),
        handleChange: this.handleChange // defaultValue={intialValue}

      }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
        pagination: {
          position: "none"
        },
        columns: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].columnstopselling,
        dataSource: this.state.grossSalesData,
        size: "small"
      })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
        pagination: {
          position: "none"
        },
        columns: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].columnstopcat,
        dataSource: this.state.topCategoryData,
        size: "small"
      })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_3___default.a, {
        pagination: {
          position: "none"
        },
        columns: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].topProductColumns,
        dataSource: this.state.topProductsData,
        size: "small"
      }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ReactHighcharts, {
        config: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].getConfigPaymentObject(this.state.paymentTypeData),
        ref: "chart"
      }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ReactHighcharts, {
        config: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].getConfigTopSalePersonObject(this.state.topSalesmanData.salesmanName, this.state.topSalesmanData.salesValue),
        ref: "chart"
      })))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
        span: 22
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(ReactHighcharts, {
        config: _home_data__WEBPACK_IMPORTED_MODULE_19__["columns"].getConfigStoreDivisonObject(this.state.loacationSalesData),
        ref: "chart"
      })))));
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.blocationID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]); // this.props.locations.response.data[2]


var mapStateToProps = function mapStateToProps(state) {
  return {
    locations: state.locations,
    business: state.businesses
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getBlocations: function getBlocations(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["locations"].action(businessID));
    },
    getTopProducts: function getTopProducts(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["topItems"].action(location, from, to));
    },
    topCategories: function topCategories(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["topCategories"].action(location, from, to));
    },
    paymentTypes: function paymentTypes(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["paymentTypes"].action(location, from, to));
    },
    getTopSalesman: function getTopSalesman(business) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["topSalesman"].action(business));
    },
    getLocationSales: function getLocationSales(business) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["locationSales"].action(business));
    },
    getSalesDate: function getSalesDate(business) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["salesDatewise"].action(business));
    },
    getLocations: function getLocations(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_18__["locations"].action(businessID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.locations/index.js":
/*!*********************************************!*\
  !*** ./pages/dashboard/.locations/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_templates_locations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/components/templates/locations */ "./src/components/templates/locations/index.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var _locations_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./locations.data */ "./pages/dashboard/.locations/locations.data.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App).call(this, props));
    _this.state = {
      filteredTableData: [],
      locationTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadLocationData();
    }
  }, {
    key: "handleCreateLocation",
    value: function handleCreateLocation(data, cb) {
      var _this2 = this;

      // console.log(data, "main object")
      var headers = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      data.textInput.blocationID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      data.textInput.business = this.props.business.response.data[0].businessID;
      data.fileInput.append('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data.textInput));
      var finalInput = data.fileInput;
      this.props.addLocation(finalInput, headers).then(function (res) {
        _this2.loadLocationData();

        cb({
          status: true,
          message: "Location created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "Some Error occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var value = e.target.value;
      var filteredEvents = this.state.locationTableData.filter(function (data) {
        var pattern = new RegExp(value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.locations.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_locations__WEBPACK_IMPORTED_MODULE_11__["default"], {
          rowSelection: {},
          columns: _locations_data__WEBPACK_IMPORTED_MODULE_13__["locationColumns"],
          columnData: this.state.filteredTableData,
          pagination: {
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          onCreate: function onCreate(data, cb) {
            return _this3.handleCreateLocation(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this3.handleSearch(value);
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_12__["default"], null);
      }
    }
  }, {
    key: "_createLocationColumns",
    value: function _createLocationColumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.pocname = item.pocName;
          object.name = item.name;
          object.number = item.pocPhone;
          object.blocationID = item.blocationID;
          object.address = item.address;
          object.email = item.pocEmail, object.prefilledValues = item;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this4.props.deleteLocation(id).then(function (res) {
                _this4.loadLocationData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log(data, "main object")
              var headers = {
                headers: {
                  'content-type': 'multipart/form-data'
                }
              };
              data.fileInput.append('data', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data.textInput));
              var finalInput = data.fileInput;

              _this4.props.updateLocation(id, finalInput, headers).then(function (res) {
                _this4.loadLocationData();

                cb({
                  status: true,
                  message: "Location updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadLocationData",
    value: function loadLocationData() {
      var _this5 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getLocations(businessID).then(function (res) {
        _this5.setState({
          locationTableData: _this5._createLocationColumns(res)
        });

        _this5.setState({
          filteredTableData: _this5.state.locationTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    locations: state.locations
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getLocations: function getLocations(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["locations"].action(businessID));
    },
    addLocation: function addLocation(object, headers) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["addLocation"].action(object, headers));
    },
    deleteLocation: function deleteLocation(blocationID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["deleteLocation"].action(blocationID));
    },
    updateLocation: function updateLocation(blocationID, object, headers) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["updateLocation"].action(blocationID, object, headers));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.locations/locations.data.js":
/*!******************************************************!*\
  !*** ./pages/dashboard/.locations/locations.data.js ***!
  \******************************************************/
/*! exports provided: locationColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationColumns", function() { return locationColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/components/organisms/forms/createLocation */ "./src/components/organisms/forms/createLocation.js");




 // import Cascader from '../src/components/molecules/cascader'

var locationColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Manager',
  dataIndex: 'pocname',
  key: 'pocname'
}, {
  title: 'LOCATION',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'Phone Number',
  dataIndex: 'number'
}, {
  title: 'Email',
  dataIndex: 'email',
  key: 'email',
  render: function render(category) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#"
    }, category);
  }
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createLocation__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Create Item",
      isTableModal: true,
      buttonValue: "Create",
      prefilledValues: object.prefilledValues,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.blocationID, cb);
      }
    });
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.blocationID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.modifiers/index.js":
/*!*********************************************!*\
  !*** ./pages/dashboard/.modifiers/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modifiers */ "./pages/dashboard/.modifiers/modifiers/index.js");
/* harmony import */ var _mitems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mitems */ "./pages/dashboard/.modifiers/mitems/index.js");












var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane;

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
        defaultActiveKey: "1",
        onChange: this.callback
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
        tab: "Modifiers",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_modifiers__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
        tab: "Modifer Items",
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_mitems__WEBPACK_IMPORTED_MODULE_11__["default"], null))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.modifiers/mitems/index.js":
/*!****************************************************!*\
  !*** ./pages/dashboard/.modifiers/mitems/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/taxCategory */ "./src/components/organisms/taxCategory/index.js");
/* harmony import */ var _src_components_organisms_forms_addMitem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/addMitem */ "./src/components/organisms/forms/addMitem.js");
/* harmony import */ var _mitems_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mitems.data */ "./pages/dashboard/.modifiers/mitems/mitems.data.js");
/* harmony import */ var _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../pagesData/taxCategory */ "./pagesData/taxCategory.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      mitemsTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadModifierItems();
    }
  }, {
    key: "handleCreateMitems",
    value: function handleCreateMitems(data, cb) {
      var _this2 = this;

      data.values.mitemID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      this.props.addMitem(data.values).then(function (res) {
        _this2.loadModifierItems();

        cb({
          status: true,
          message: "Mitems created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.mitemsTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.mitems.isLoaded) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
        form: _src_components_organisms_forms_addMitem__WEBPACK_IMPORTED_MODULE_10__["default"],
        title: "Create Mitems",
        rowSelection: {},
        cascaderData: _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__["taxCategoryData"].cascaderData,
        columns: _mitems_data__WEBPACK_IMPORTED_MODULE_11__["mitemsColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this3.handleCreateMitems(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this3.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
    }
  }, {
    key: "_createMitemsColoumns",
    value: function _createMitemsColoumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.price = item.price;
          object.mitemID = item.mitemID;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this4.props.deleteMitem(id).then(function (res) {
                _this4.loadModifierItems();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this4.props.updateMitem(id, data.values).then(function (res) {
                _this4.loadModifierItems();

                cb({
                  status: true,
                  message: "Mtem updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadModifierItems",
    value: function loadModifierItems() {
      var _this5 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getMitems(urlParams).then(function (data) {
        console.log(data);

        _this5.setState({
          mitemsTableData: _this5._createMitemsColoumns(_this5.props.mitems.response.data)
        }, function () {
          _this5.setState({
            filteredTableData: _this5.state.mitemsTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    mitems: state.mitems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMitems: function getMitems(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["mitems"].action(object));
    },
    addMitem: function addMitem(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addMitem"].action(object));
    },
    deleteMitem: function deleteMitem(mitemID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteMitem"].action(mitemID));
    },
    updateMitem: function updateMitem(mitemID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateMitem"].action(mitemID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.modifiers/mitems/mitems.data.js":
/*!**********************************************************!*\
  !*** ./pages/dashboard/.modifiers/mitems/mitems.data.js ***!
  \**********************************************************/
/*! exports provided: mitemsColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mitemsColumns", function() { return mitemsColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_addMitem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/addMitem */ "./src/components/organisms/forms/addMitem.js");





var mitemsColumns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "Price",
  dataIndex: "price",
  key: "price"
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_addMitem__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Create Item",
      isTableModal: true,
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.mitemID, cb);
      }
    });
  }
}, {
  title: 'Delete',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.mitemID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.modifiers/modifiers/index.js":
/*!*******************************************************!*\
  !*** ./pages/dashboard/.modifiers/modifiers/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_modifiers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/modifiers */ "./src/components/organisms/modifiers/index.js");
/* harmony import */ var _modifier_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modifier.data */ "./pages/dashboard/.modifiers/modifiers/modifier.data.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");














var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      modifierItemData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getMitems(businessID).then(function (data) {//  console.log(data, "mitemmmmmm")
      });
      this.props.getProducts(businessID).then(function () {
        _this2.loadModifierData();
      });
    }
  }, {
    key: "handleModifiers",
    value: function handleModifiers(data, cb) {
      var _this3 = this;

      data.values.modifierID = uuid_v4__WEBPACK_IMPORTED_MODULE_11___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      console.log(data.values);
      this.props.addModifier(data.values).then(function (res) {
        _this3.loadModifierData();

        cb({
          status: true,
          message: "Modifier created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      console.log(e.target.value);
      var filteredEvents = this.state.modifierItemData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.modifiers.response && this.props.products.response) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_modifiers__WEBPACK_IMPORTED_MODULE_9__["default"], {
        cascaderData: _modifier_data__WEBPACK_IMPORTED_MODULE_10__["itemData"].cascaderData,
        columns: _modifier_data__WEBPACK_IMPORTED_MODULE_10__["itemData"].productColumns,
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 5,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this4.handleModifiers(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this4.handleSearch(value);
        }
      }));else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_12__["default"], null);
    }
  }, {
    key: "_createModifierColumns",
    value: function _createModifierColumns(data) {
      var _this5 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name, object.modifierID = item.modifierID;
          object.allowMultiple = item.allowMultiple, object.handleFeatures = {
            handleDelete: function handleDelete(modifierID) {
              console.log("here", modifierID);

              _this5.props.deleteModifier(modifierID).then(function (res) {
                _this5.loadModifierData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleEdit: function handleEdit(data, modifierID, cb) {
              data.values.business = _this5.props.business.response.data[0].businessID;
              console.log(data.values);

              _this5.props.updateModifier(modifierID, data.values).then(function (res) {
                _this5.loadModifierData();

                cb({
                  status: true,
                  message: "Modifier updated successfully"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some error occured while updating"
                });
              });
            }
          }, object.assignProduct = {
            handleAssignProduct: function handleAssignProduct(data, id, cb) {
              var obj = {};
              obj.modifier = id;
              obj.product = data.values.assignedTo;
              console.log(obj);

              _this5.props.addModifierProduct(obj).then(function (res) {
                return cb({
                  status: true,
                  message: "Product assigned successfully to modifier"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: true,
                  message: "some error occured"
                });
              });
            },
            assignedProduct: function assignedProduct(modifierID) {
              return _this5.props.getModifierProduct(modifierID);
            },
            productData: _this5.createSelectProductData(_this5.props.products.response.data),
            modifierID: item.modifierID
          }, object.assignMitem = {
            handleAssignMitem: function handleAssignMitem(data, id, cb) {
              var obj = {};
              obj.modifier = id;
              obj.mitem = data.values.assignedTo;
              console.log(obj); // this.props
              //   .addModifierMitem(obj)
              //   .then(res => cb({ status: true, message: "Modifier  Item assigned successfully to modifier" }))
              //   .catch(err => {
              //     console.log(err)
              //     cb({ status: true, message: "some error occured" })
              //   })
            },
            assignedProduct: function assignedProduct(modifierID) {
              return _this5.props.getModifierProduct(modifierID);
            },
            mitemData: _this5.createSelectMitemData(_this5.props.mitems.response.data),
            modifierID: item.modifierID
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadModifierData",
    value: function loadModifierData() {
      var _this6 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getmodifiers(businessID).then(function (modifiers) {
        console.log(modifiers, "modifiersss");

        _this6.setState({
          modifierItemData: _this6._createModifierColumns(modifiers)
        });

        _this6.setState({
          filteredTableData: _this6.state.modifierItemData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createSelectProductData",
    value: function createSelectProductData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.productID
        };
      });
      return selectData;
    }
  }, {
    key: "createSelectMitemData",
    value: function createSelectMitemData(data) {
      console.log(data, "seleeeect");
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.mitemID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    modifiers: state.modifiers,
    products: state.products,
    mitems: state.mitems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getmodifiers: function getmodifiers(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["modifiers"].action(businessID));
    },
    getProducts: function getProducts(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["products"].action(businessID));
    },
    addModifier: function addModifier(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addModifier"].action(object));
    },
    addModifierProduct: function addModifierProduct(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addModifierProduct"].action(object));
    },
    getModifierProduct: function getModifierProduct(modifierID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["modifierProduct"].action(modifierID));
    },
    getMitems: function getMitems(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["mitems"].action(businessID));
    },
    deleteModifier: function deleteModifier(modifierID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteModifier"].action(modifierID));
    },
    updateModifier: function updateModifier(modifierID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateModifier"].action(modifierID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.modifiers/modifiers/modifier.data.js":
/*!***************************************************************!*\
  !*** ./pages/dashboard/.modifiers/modifiers/modifier.data.js ***!
  \***************************************************************/
/*! exports provided: itemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemData", function() { return itemData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_atoms_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_assignMproduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignMproduct */ "./src/components/organisms/forms/assignMproduct.js");
/* harmony import */ var _src_components_organisms_forms_assignMitem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignMitem */ "./src/components/organisms/forms/assignMitem.js");
/* harmony import */ var _src_components_organisms_forms_createModifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createModifier */ "./src/components/organisms/forms/createModifier.js");








var cascaderData = {
  placeholder: 'All Categories',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
};
var productColumns = [{
  title: 'SET NAME',
  dataIndex: 'name',
  key: 'product'
}, {
  title: "Assign Products",
  dataIndex: "",
  key: "assignProduct",
  render: function render(object) {
    // console.log(object.assign.taxCategoryData)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      form: _src_components_organisms_forms_assignMproduct__WEBPACK_IMPORTED_MODULE_5__["default"],
      title: "Assign Products",
      buttonValue: "Assign Products",
      formData: object.assignProduct,
      assignedData: {},
      onSubmit: function onSubmit(data, cb) {
        return object.assignProduct.handleAssignProduct(data, object.modifierID, cb);
      }
    });
  }
}, {
  title: "Assign Modifier Item",
  dataIndex: "",
  key: "assignmitems",
  render: function render(object) {
    // console.log(object.assign.taxCategoryData)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      form: _src_components_organisms_forms_assignMitem__WEBPACK_IMPORTED_MODULE_6__["default"],
      title: "Assign Modifier Items",
      buttonValue: "Assign MItems",
      formData: object.assignMitem,
      assignedData: {},
      onSubmit: function onSubmit(data, cb) {
        return object.assignMitem.handleAssignMitem(data, object.modifierID, cb);
      }
    });
  }
}, {
  title: 'allowMultiple',
  dataIndex: 'allowMultiple',
  key: "allowMultiple"
}, {
  title: 'Edit',
  key: 'edit',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createModifier__WEBPACK_IMPORTED_MODULE_7__["default"],
      prefilledValues: object,
      formData: object.selectData,
      title: "Edit Modifier",
      isTableModal: true,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleEdit(data, object.modifierID, cb);
      }
    }));
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.modifierID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    }));
  }
}];
var itemData = {
  cascaderData: cascaderData,
  productColumns: productColumns
};

/***/ }),

/***/ "./pages/dashboard/.products/.productcategories/category.data.js":
/*!***********************************************************************!*\
  !*** ./pages/dashboard/.products/.productcategories/category.data.js ***!
  \***********************************************************************/
/*! exports provided: categoryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryData", function() { return categoryData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createCategory */ "./src/components/organisms/forms/createCategory.js");





var cardData = [{
  iconType: "bank",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#F88998"
  },
  title: "15",
  description: "Items Out of Stock"
}, {
  iconType: "shopping-cart",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#FFB353"
  },
  title: "25",
  description: "Items Out of Stock"
}, {
  iconType: "rise",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#69E4A6"
  },
  title: "25",
  description: "Items Out of Stock"
}];
var cascaderData = [{
  placeholder: "All Categories",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Inventory",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Stores",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Actions",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}];
var categoryColumns = [{
  title: "Category",
  dataIndex: "name"
}, {
  title: 'INVENTORY',
  dataIndex: 'inventory',
  key: 'inventory',
  render: function render(inventory) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(inventory));
  }
}, // {
//   title: "Assign",
//   dataIndex: "assign",
//   render: assign => (
//     <Model
//       form={<div>he</div>}
//       title="Assign Product"
//       buttonValue="Assign"
//       onSubmit={assign.onCreate}
//       formData={assign}
//     />
//   )
// },
{
  title: "Rename",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Edit Product Category",
      isTableModal: true,
      buttonValue: "Create",
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.editProductCategory(data, object.productcategoryID, cb);
      }
    });
  }
}, {
  title: "",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.productcategoryID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: "#F84D65",
        color: "white"
      }
    });
  }
}];
var categoryColumnData = [{
  name: "Test Name",
  inventory: [30]
}, {
  name: "Test Name",
  inventory: [250]
}, {
  name: "Test Name",
  inventory: [5]
}, {
  name: "Test Name",
  inventory: [30]
}, {
  name: "Test Name",
  inventory: [250]
}, {
  name: "Test Name",
  inventory: [5]
}];
var categoryData = {
  categoryColumns: categoryColumns,
  categoryColumnData: categoryColumnData,
  cardData: cardData,
  cascaderData: cascaderData
};

/***/ }),

/***/ "./pages/dashboard/.products/.productcategories/index.js":
/*!***************************************************************!*\
  !*** ./pages/dashboard/.products/.productcategories/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_organisms_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../src/components/organisms/categories */ "./src/components/organisms/categories/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createCategory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createCategory */ "./src/components/organisms/forms/createCategory.js");
/* harmony import */ var _category_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./category.data */ "./pages/dashboard/.products/.productcategories/category.data.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_16__);


















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "_createProductCategory", function (data) {
      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name, object.productcategoryID = item.productcategoryID, object.inventory = item.inventory, //map inventory details here
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              // let businessID = this.props.business.response.data[0].businessID;
              _this.props.deleteProductCategory(id).then(function (res) {
                _this.loadProductCategoryData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            editProductCategory: function editProductCategory(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this.props.updateProductCategory(id, data.values).then(function (res) {
                _this.loadProductCategoryData();

                cb({
                  status: true,
                  message: "Product category updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          }, object.assign = {};
          temp.push(object);
        });
      } else {
        var object = {};
        object.name = data.name, object.productcategoryID = data.productcategoryID, object.handleFeatures = {
          handleDelete: function handleDelete(id) {
            // let businessID = this.props.business.response.data[0].businessID;
            _this.props.deleteProductCategory(id).then(function (res) {
              _this.loadProductCategoryData();
            }).catch(function (err) {
              console.log(err);
            });
          },
          editProductCategory: function editProductCategory(data, id, cb) {
            _this.props.updateProductCategory(id, data.values).then(function (res) {
              _this.loadProductCategoryData();

              cb({
                status: true,
                message: "Product category updated"
              });
            }).catch(function (err) {
              console.log(err);
              cb({
                status: false,
                message: "Some Error occured while updating"
              });
            });
          }
        };
        temp.push(object);
      }

      return temp;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "loadProductCategoryData", function () {
      var urlParams = {};
      urlParams.businessID = _this.props.business.response.data[0].businessID;

      _this.props.getProductCategory(urlParams).then(function (res) {
        _this.setState({
          productsTableData: _this._createProductCategory(res)
        });

        _this.setState({
          filteredTableData: _this.state.productsTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      productsTableData: [],
      filteredTableData: [],
      cardData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.loadProductCategoryData();
      this.props.getInventoryStock(businessID).then(function (res) {
        _this2.setState({
          cardData: res
        });
      });
    }
  }, {
    key: "handleCreateProductCategory",
    value: function handleCreateProductCategory(data, cb) {
      var _this3 = this;

      // console.log(data)
      data.values.productcategoryID = uuid_v4__WEBPACK_IMPORTED_MODULE_16___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      this.props.addProductCategory(data.values).then(function (res) {
        _this3.loadProductCategoryData();

        cb({
          status: true,
          message: "Product category added"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "Some Error occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.productsTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      // console.log(this.state.cardData, "avvvvai")
      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_src_components_organisms_categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
          cardData: this.state.cardData,
          cascaderData: _category_data__WEBPACK_IMPORTED_MODULE_15__["categoryData"].cascaderData,
          columns: _category_data__WEBPACK_IMPORTED_MODULE_15__["categoryData"].categoryColumns,
          columnData: this.state.filteredTableData,
          pagination: {
            pageSize: 5,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          onCreate: function onCreate(data, cb) {
            return _this4.handleCreateProductCategory(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this4.handleSearch(value);
          }
        }));
      } else {}
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    productCategories: state.productCategories,
    inventoryStock: state.inventoryStock
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProductCategory: function getProductCategory(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["productCategories"].action(businessID));
    },
    addProductCategory: function addProductCategory(businessID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["addProductCategory"].action(businessID, object));
    },
    deleteProductCategory: function deleteProductCategory(productcategoryID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["deleteProductCategory"].action(productcategoryID));
    },
    updateProductCategory: function updateProductCategory(productcategoryID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["updateProductCategory"].action(productcategoryID, object));
    },
    getInventoryStock: function getInventoryStock(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_10__["inventoryStock"].action(businessID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.products/.products/index.js":
/*!******************************************************!*\
  !*** ./pages/dashboard/.products/.products/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/items */ "./src/components/organisms/items/index.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/.products/.products/wrapper.js");
/* harmony import */ var _product_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product.data */ "./pages/dashboard/.products/.products/product.data.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      productsTableData: [],
      filteredTableData: [],
      cardData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getTaxes(businessID).then(function (_) {
        _this2.loadproductsData();
      });
      this.props.getInventoryStock(businessID).then(function (res) {
        console.log(res);

        _this2.setState({
          cardData: res
        });
      });
    }
  }, {
    key: "handleCreateproducts",
    value: function handleCreateproducts(data, cb) {
      var _this3 = this;

      data.values.productID = uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      this.props.addProduct(data.values).then(function (res) {
        _this3.loadproductsData();

        cb({
          status: true,
          message: "products created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.productsTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.products.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_items__WEBPACK_IMPORTED_MODULE_9__["default"], {
          formData: this.createSelectData(this.props.productCategories.response.data),
          rowSelection: {},
          pagination: {
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          cardData: this.state.cardData,
          cascaderData: _product_data__WEBPACK_IMPORTED_MODULE_12__["itemData"].cascaderData,
          columns: _product_data__WEBPACK_IMPORTED_MODULE_12__["itemData"].productColumns,
          columnData: this.state.filteredTableData,
          onCreate: function onCreate(data, cb) {
            return _this4.handleCreateproducts(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this4.handleSearch(value);
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_10__["default"], null);
      }
    }
  }, {
    key: "_createproductsColumns",
    value: function _createproductsColumns(data) {
      var _this5 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.productID = item.productID;
          object.code = item.code;
          object.barcode = item.barcode;
          object.category = item.productcategory;
          object.location = item.location; //map location here

          object.price = item.price;
          object.prefilledValues = item;
          object.selectData = _this5.createSelectData(_this5.props.productCategories.response.data);
          object.handleFeatures = {
            handleDelete: function handleDelete(urlParams) {
              urlParams.businessID = _this5.props.business.response.data[0][0].businessID;
              console.log("here", urlParams);

              _this5.props.deleteProduct(urlParams).then(function (res) {
                _this5.loadproductsData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            editProduct: function editProduct(data, id, cb) {
              _this5.props.updateProduct(id, data.values).then(function (res) {
                _this5.loadproductsData();

                cb({
                  status: true,
                  message: "Product updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          }, object.assign = {
            handleAssign: function handleAssign(data, id, cb) {
              console.log(data, id, "received data");
              var obj = {};
              obj.product = id;
              obj.tax = data.values.assignedTo;

              _this5.props.addTaxProduct(obj).then(function (res) {
                cb({
                  status: true,
                  message: "Product tax assigned"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: true,
                  message: "ERROR!"
                });
              });
            },
            // assignedTaxes: attributesetID => this.props.assignedTaxes(attributesetID),
            taxesData: _this5.createSelectTaxData(_this5.props.taxes.response.data),
            productID: item.productID
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadproductsData",
    value: function loadproductsData() {
      var _this6 = this;

      console.log("loading");
      var businessID = this.props.business.response.data[0].businessID;
      this.props.getproducts(businessID).then(function (res) {
        _this6.setState({
          productsTableData: _this6._createproductsColumns(res)
        });

        _this6.setState({
          filteredTableData: _this6.state.productsTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.productcategoryID
        };
      });
      return selectData;
    }
  }, {
    key: "createSelectTaxData",
    value: function createSelectTaxData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.taxID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  // console.log("apnaaaaaaaa stateeeee", state)
  return {
    business: state.businesses,
    products: state.products,
    taxcategories: state.taxcategories,
    inventoryStock: state.inventoryStock,
    taxes: state.taxes
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getproducts: function getproducts(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["products"].action(businessID));
    },
    getTaxes: function getTaxes(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["taxes"].action(businessID));
    },
    addProduct: function addProduct(businessID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addProduct"].action(businessID, object));
    },
    getTaxeCategories: function (_getTaxeCategories) {
      function getTaxeCategories(_x) {
        return _getTaxeCategories.apply(this, arguments);
      }

      getTaxeCategories.toString = function () {
        return _getTaxeCategories.toString();
      };

      return getTaxeCategories;
    }(function (businessID) {
      return dispatch(getTaxeCategories.action(businessID));
    }),
    addTaxeCategories: function (_addTaxeCategories) {
      function addTaxeCategories(_x2, _x3) {
        return _addTaxeCategories.apply(this, arguments);
      }

      addTaxeCategories.toString = function () {
        return _addTaxeCategories.toString();
      };

      return addTaxeCategories;
    }(function (businessID, object) {
      return dispatch(addTaxeCategories.action(businessID, object));
    }),
    deleteProduct: function deleteProduct(urlParams) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteProduct"].action(urlParams));
    },
    updateProduct: function updateProduct(productID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateProduct"].action(productID, object));
    },
    addTaxProduct: function addTaxProduct(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addProductsTax"].action(object));
    },
    reviewPurchase: function reviewPurchase() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["reviewPurchase"].action());
    },
    getInventoryStock: function getInventoryStock(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["inventoryStock"].action(businessID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./pages/dashboard/.products/.products/product.data.js":
/*!*************************************************************!*\
  !*** ./pages/dashboard/.products/.products/product.data.js ***!
  \*************************************************************/
/*! exports provided: itemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemData", function() { return itemData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createItem */ "./src/components/organisms/forms/createItem.js");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignHsn */ "./src/components/organisms/forms/assignHsn.js");






var cardData = [{
  iconType: 'bank',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#F88998'
  },
  title: '25',
  description: 'Items Out of Stock'
}, {
  iconType: 'shopping-cart',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#FFB353'
  },
  title: '25',
  description: 'Items Out of Stock'
}, {
  iconType: 'rise',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#69E4A6'
  },
  title: '25',
  description: 'Items Out of Stock'
}];
var cascaderData = [{
  placeholder: 'All Categories',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Inventory',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Stores',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Actions',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}];
var productColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'CODE',
  dataIndex: 'code',
  key: 'code'
}, {
  title: 'BARCODE',
  dataIndex: 'barcode',
  key: 'barcode'
}, // {
//     title: 'CATEGORY',
//     dataIndex: '',
//     render: object => {
//         var categoryIndex = object.selectData.findIndex(id => id.value == object.category)
//         return <p>{stockTag(object.selectData[categoryIndex].name)}</p>
//     }
// },
// {
//     title: 'LOCATION',
//     dataIndex: 'location',
//     key: 'location'
// },
// {
//     title: 'INVENTORY',
//     dataIndex: 'inventory',
//     key: 'inventory',
//     render: inventory => (<span>{stockTag(inventory)}</span>)
// },
{
  title: 'PRICE',
  key: 'price',
  dataIndex: 'price',
  render: function render(price) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "INR ", price));
  }
}, {
  title: "Assign Tax",
  dataIndex: "",
  key: "assign",
  render: function render(object) {
    // console.log(object.assign.taxCategoryData)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      form: _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_5__["default"],
      title: "Assign Tax",
      buttonValue: "Assign",
      formData: object.assign,
      assignedData: {},
      onSubmit: function onSubmit(data, cb) {
        return object.assign.handleAssign(data, object.productID, cb);
      }
    });
  }
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_4__["default"],
      prefilledValues: object.prefilledValues,
      formData: object.selectData,
      title: "Edit Product",
      isTableModal: true,
      buttonValue: "Create",
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.editProduct(data, object.productID, cb);
      }
    });
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];
var productColumnData = [{
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [20],
  price: 10
}, {
  product: 'Hide & Seek',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [200],
  price: 30
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [2],
  price: 10
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [20],
  price: 10
}, {
  product: 'Hide & Seek',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [200],
  price: 30
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [2],
  price: 10
}];
var itemData = {
  cardData: cardData,
  cascaderData: cascaderData,
  productColumns: productColumns,
  productColumnData: productColumnData
};

/***/ }),

/***/ "./pages/dashboard/.products/.products/wrapper.js":
/*!********************************************************!*\
  !*** ./pages/dashboard/.products/.products/wrapper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__);








function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

    function App(props) {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this.props.productCategories.isLoaded) {
          var urlParams = {};
          urlParams.businessID = this.props.businesses.response.data.businessID;
          this.props.getProductCategories(urlParams);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.productCategories.isLoaded) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);else return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Loading... ");
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      businesses: state.businesses,
      productCategories: state.productCategories
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getProductCategories: function getProductCategories(businessID) {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["productCategories"].action(businessID));
      }
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App);
}

/***/ }),

/***/ "./pages/dashboard/.products/index.js":
/*!********************************************!*\
  !*** ./pages/dashboard/.products/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _products_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.products/index */ "./pages/dashboard/.products/.products/index.js");
/* harmony import */ var _productcategories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.productcategories */ "./pages/dashboard/.products/.productcategories/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_11__);








 // import {getproductss, addproducts} from "../../../src/reduxHelper"




var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane;

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      productsTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("mount"); // this.loadproductsData()
    }
  }, {
    key: "callback",
    value: function callback(key) {// console.log(key);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("rerender");

      if (true) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
          defaultActiveKey: "1",
          onChange: this.callback
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Product Categories",
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_productcategories__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
          tab: "Products",
          key: "2"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_products_index__WEBPACK_IMPORTED_MODULE_9__["default"], null))));
      } else {}
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.purchase/index.js":
/*!********************************************!*\
  !*** ./pages/dashboard/.purchase/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_organisms_ItemPurchase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/components/organisms/ItemPurchase */ "./src/components/organisms/ItemPurchase/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _purchase_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./purchase.data */ "./pages/dashboard/.purchase/purchase.data.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/.purchase/wrapper.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_14__);
















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCreatePurchase", function (data, cb) {
      data.purchaseID = uuid_v4__WEBPACK_IMPORTED_MODULE_14___default()();
      data.items = _this.props.form.itemsForm.values.items;

      _this.setState({
        formValue: data.values
      });

      _this.props.addPurchase(data).then(function (res) {
        _this.props.destroyReduxForm("itemsForm");
      }).catch(function (err) {
        return console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "reviewAction", function (pid) {
      _this.props.getPurchaseItems(pid);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getFormValue", function (data) {
      _this.setState({
        formValue: data
      }, function () {
        console.log(_this.state.formValue);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createpurchasecolumns", function (data) {
      return data.map(function (item) {
        return {
          purchaseItemID: item.purchaseID,
          amount: item.amount,
          date: item.date,
          desription: item.description,
          vendor: item.vendor,
          location: item.locationunfold.name,
          prefilledValues: item,
          formData: {
            product: _this.createProductSelectData(_this.props.products.response.data),
            location: _this.createLocationSelectData(_this.props.blocations.response.data),
            items: _this.props.getPurchaseItems,
            pid: item.purchaseID
          },
          handleFeatures: {
            handleDelete: function handleDelete(pid) {
              _this.props.deletePurchase(pid).then(function (_) {
                _this.loadPurchaseData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, pid, cb) {
              _this.props.updatePurchase(pid, data.values).then(function (_) {
                _this.loadPurchaseData();

                cb({
                  status: true,
                  message: "Purchase data updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error occured while updating"
                });
              });
            }
          }
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createProductSelectData", function (data) {
      return data.map(function (item) {
        return {
          name: item.name,
          value: item.productID
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "createLocationSelectData", function (data) {
      return data.map(function (item) {
        return {
          name: item.name,
          value: item.blocationID
        };
      });
    });

    _this.state = {
      purchaseItemTableData: [],
      filteredTableData: [],
      formValue: {},
      test: "test"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadPurchaseData();
      this.props.getReviewPurchase();
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.purchaseItemTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.vendor.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.reviewPurchase.isLoaded) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_organisms_ItemPurchase__WEBPACK_IMPORTED_MODULE_10__["default"], {
        formData: {
          product: this.createProductSelectData(this.props.products.response.data),
          location: this.createLocationSelectData(this.props.blocations.response.data)
        },
        rowSelection: {},
        columns: _purchase_data__WEBPACK_IMPORTED_MODULE_12__["itemPurchaseData"].itemPurchaseColumns,
        columnData: this.state.filteredTableData,
        cascaderData: _purchase_data__WEBPACK_IMPORTED_MODULE_12__["itemPurchaseData"].cascaderData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onSearch: function onSearch(value) {
          return _this2.handleSearch(value);
        },
        onCreate: function onCreate(data, cb) {
          return _this2.handleCreatePurchase(data, cb);
        },
        reviewPurchaseData: this.props.reviewPurchase.response.data,
        reviewAction: this.reviewAction,
        itemsData: this.props.purchaseItem,
        utilFunc: this.getFormValue
      }));else return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Loading....");
    }
  }, {
    key: "loadPurchaseData",
    value: function loadPurchaseData() {
      var _this3 = this;

      this.props.stockdiary().then(function (data) {
        _this3.setState({
          purchaseItemTableData: _this3.createpurchasecolumns(data)
        });

        _this3.setState({
          filteredTableData: _this3.state.purchaseItemTableData
        });
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.form,
    stockdiary: state.stockdiary,
    blocations: state.getLocationByID,
    products: state.products,
    reviewPurchase: state.reviewPurchase,
    purchaseItem: state.getPurchaseItems
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    destroyReduxForm: function destroyReduxForm(form) {
      return dispatch(Object(redux_form__WEBPACK_IMPORTED_MODULE_9__["destroy"])(form));
    },
    stockdiary: function stockdiary() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["stockdiary"].action());
    },
    addPurchase: function addPurchase(data) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["addPurchase"].action(data));
    },
    getReviewPurchase: function getReviewPurchase() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["reviewPurchase"].action());
    },
    getPurchaseItems: function getPurchaseItems(pid) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["getPurchaseItems"].action(pid));
    },
    deletePurchase: function deletePurchase(pid) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["deletePurchase"].action(pid));
    },
    updatePurchase: function updatePurchase(pid, data) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["updatePurchase"].action(pid, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./pages/dashboard/.purchase/purchase.data.js":
/*!****************************************************!*\
  !*** ./pages/dashboard/.purchase/purchase.data.js ***!
  \****************************************************/
/*! exports provided: itemPurchaseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemPurchaseData", function() { return itemPurchaseData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_editPurchase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../src/components/organisms/forms/editPurchase */ "./src/components/organisms/forms/editPurchase.js");






var cascaderData = [{
  placeholder: "All Categories",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Inventory",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Stores",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Actions",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}];
var itemPurchaseColumns = [{
  title: "Vendor",
  dataIndex: "vendor",
  key: "vendor" // render: object => <p>{object.productsData.vendor}</p>

}, {
  title: "Amount",
  dataIndex: "amount",
  key: "amount" // align: "center",
  // render: object => <p>{object.productsData.amount}</p>

}, {
  title: "Date",
  dataIndex: "date",
  key: "date" // render: object => {
  //   return <p>{object.productsData.date}</p>
  // }

}, {
  title: "Description",
  dataIndex: "description",
  key: "description" // render: object => {
  //   return <p />
  // }

}, {
  title: "Location",
  dataIndex: "location",
  key: "location" // render: locations => <span>{stockTag(locations)}</span>

}, {
  title: "Action",
  key: "action",
  dataIndex: "cascaderData",
  render: function render(cascaderData) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Actions",
      style: {
        width: 120,
        marginRight: "30px"
      },
      optionArray: cascaderData
    }));
  }
}, {
  title: "Edit",
  dataIndex: "",
  render: function render(object) {
    console.log(object);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_editPurchase__WEBPACK_IMPORTED_MODULE_5__["default"],
      formData: object.formData,
      title: "Edit Purchase",
      isTableModal: true,
      buttonValue: "Edit",
      prefilledValues: object.prefilledValues,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.purchaseItemID, cb);
      }
    });
  }
}, {
  title: "",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.purchaseItemID);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: "#F84D65",
        color: "white"
      }
    });
  }
}];
var itemPurchaseColumnData = [{
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}, {
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}, {
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}, {
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}, {
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}, {
  name: "Test Name",
  quantity: 15,
  mrp: 20,
  price: 16,
  locations: ["BBSR"],
  cascaderData: ["Permission", "Permission", "Permission", "Permission"]
}];
var itemPurchaseData = {
  cascaderData: cascaderData,
  itemPurchaseColumns: itemPurchaseColumns,
  itemPurchaseColumnData: itemPurchaseColumnData
};

/***/ }),

/***/ "./pages/dashboard/.purchase/wrapper.js":
/*!**********************************************!*\
  !*** ./pages/dashboard/.purchase/wrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__);








function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

    function App(props) {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var businessID = this.props.businesses.response.data[0].businessID;

        if (!this.props.products.response) {
          this.props.getProducts(businessID);
        }

        if (!this.props.getLocationByID.response) {
          this.props.getLocationByID(businessID);
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.products.isLoaded && this.props.blocations.isLoaded) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);else return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Loading... ");
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      businesses: state.businesses,
      blocations: state.getLocationByID,
      products: state.products
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getLocationByID: function getLocationByID(businessID) {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["getLocationByID"].action(businessID));
      },
      getProducts: function getProducts(businessID) {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["products"].action(businessID));
      }
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App);
}

/***/ }),

/***/ "./pages/dashboard/.taxes/.hsn/hsn.data.js":
/*!*************************************************!*\
  !*** ./pages/dashboard/.taxes/.hsn/hsn.data.js ***!
  \*************************************************/
/*! exports provided: hsnColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsnColumns", function() { return hsnColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createTaxCategory */ "./src/components/organisms/forms/createTaxCategory.js");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignHsn */ "./src/components/organisms/forms/assignHsn.js");







var hsnColumns = [{
  title: "HSN Code",
  dataIndex: "name"
}, // {
//     title: 'HSN Code',
//     dataIndex: 'hsnCode',
// },
// {
//   title: "Assign",
//   dataIndex: "",
//   key: "assign",
//   render: object => {
//     // console.log(object.assign.taxCategoryData)
//     return (
//       <Model
//         form={AssignItem}
//         title="Assign Items"
//         buttonValue="Assign"
//         formData={object.assign}
//         assignedData={{}}
//         onSubmit={(data, cb) =>
//           object.assign.handleAssign(data, object.hsnCode, cb)
//         }
//       />
//     )
//   }
// },
{
  title: "Edit",
  key: "edit",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_5__["default"],
      prefilledValues: object,
      title: "Edit HSN",
      isTableModal: true,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleEdit(data, object.hsnCode, cb);
      }
    }));
  }
}, {
  title: "",
  dataIndex: "",
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Actions",
      style: {
        width: 120,
        marginRight: "30px"
      },
      optionArray: object.cascaderData
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.hsnCode);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: "#F84D65",
        color: "white"
      }
    }));
  }
}];


/***/ }),

/***/ "./pages/dashboard/.taxes/.hsn/index.js":
/*!**********************************************!*\
  !*** ./pages/dashboard/.taxes/.hsn/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_organisms_hsn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/components/organisms/hsn */ "./src/components/organisms/hsn/index.js");
/* harmony import */ var _hsn_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hsn.data */ "./pages/dashboard/.taxes/.hsn/hsn.data.js");
/* harmony import */ var _pagesData_item_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../pagesData/item.data */ "./pagesData/item.data.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_12__);














var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      hsnTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      console.log(this.props.business.response.data, urlParams.businessID);
      this.props.getTaxCategories(urlParams);
      this.loadHsnCodeData();
    }
  }, {
    key: "handleCreateTaxes",
    value: function handleCreateTaxes(data, cb) {
      var _this2 = this;

      var object = {};
      object.hsnname = data.values.name;
      object.hsncodeID = data.values.name;
      this.props.addHsnCode(object).then(function (res) {
        _this2.loadHsnCodeData();

        cb({
          status: true,
          message: "HSN created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.hsnTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // will not render under taxcategory loaded
      if (this.props.hsncodes.isLoaded && this.props.taxCategories.isLoaded) {
        // console.log(this.state.hsnTableData)
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_hsn__WEBPACK_IMPORTED_MODULE_8__["default"], {
          rowSelection: {},
          cascaderData: _pagesData_item_data__WEBPACK_IMPORTED_MODULE_10__["itemData"].cascaderData,
          columns: _hsn_data__WEBPACK_IMPORTED_MODULE_9__["hsnColumns"],
          columnData: this.state.filteredTableData,
          pagination: {
            pageSize: 7,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          onCreate: function onCreate(data, cb) {
            return _this3.handleCreateTaxes(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this3.handleSearch(value);
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Loading");
      }
    }
  }, {
    key: "_createHsnCodeColoumns",
    value: function _createHsnCodeColoumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.hsnname;
          object.hsnCode = item.hsncodeID;
          object.selectData = _this4.createSelectData(_this4.props.taxCategories.response.data);
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this4.props.deleteHsnCode(id).then(function (res) {
                _this4.loadHsnCodeData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleEdit: function handleEdit(data, id, cb) {
              console.log("clicked", data, id, cb);
              var obj = {};
              obj.hsnname = data.values.name;

              _this4.props.updateHsnCode(id, obj).then(function (res) {
                _this4.loadHsnCodeData();

                cb({
                  status: true,
                  message: "HSN Code updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          }, // (object.assign = {
          //   handleAssign: (data, id, cb) => {
          //     let obj = {}
          //     obj.hsncode = id
          //     obj.taxcategory = data.values.assignedTo
          //     console.log(obj)
          //     this.props
          //       .addhsncodetaxcategories(obj)
          //       .then(res => {
          //         cb({
          //           status: true,
          //           message: "Tax Category assigned"
          //         })
          //       })
          //       .catch(err => {
          //         console.log(err)
          //         cb({ status: true, message: "Error occured" })
          //       })
          //   },
          //   assignedTaxCategory: hsnID => this.props.getHsnTaxCategory(hsnID),
          //   taxCategoryData: this.createSelectData(
          //     this.props.taxCategories.response.data
          //   ),
          //   hsnID: item.hsncodeID
          // })
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadHsnCodeData",
    value: function loadHsnCodeData() {
      var _this5 = this;

      this.props.getHsnCodes().then(function (res) {
        console.log(res);

        _this5.setState({
          hsnTableData: _this5._createHsnCodeColoumns(res)
        });

        _this5.setState({
          filteredTableData: _this5.state.hsnTableData
        });

        console.log("new Data:", _this5.state.hsnTableData);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.taxcategoryID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    hsncodes: state.hsncodes,
    taxCategories: state.taxCategories
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHsnCodes: function getHsnCodes() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["hsncodes"].action());
    },
    addHsnCode: function addHsnCode(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["addHsnCode"].action(object));
    },
    deleteHsnCode: function deleteHsnCode(hsncodeID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["deleteHsnCode"].action(hsncodeID));
    },
    updateHsnCode: function updateHsnCode(hsncodeID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["updateHsnCode"].action(hsncodeID, object));
    },
    getTaxCategories: function getTaxCategories(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["taxCategories"].action(object));
    },
    addhsncodetaxcategories: function addhsncodetaxcategories(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["addhsncodetaxcategories"].action(object));
    },
    getHsnTaxCategory: function getHsnTaxCategory(hsnID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["taxCategoryHsn"].action(hsnID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.taxes/.taxCategory/index.js":
/*!******************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxCategory/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/taxCategory */ "./src/components/organisms/taxCategory/index.js");
/* harmony import */ var _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createTaxCategory */ "./src/components/organisms/forms/createTaxCategory.js");
/* harmony import */ var _taxCategory_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taxCategory.data */ "./pages/dashboard/.taxes/.taxCategory/taxCategory.data.js");
/* harmony import */ var _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../pagesData/taxCategory */ "./pagesData/taxCategory.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      taxCategoryTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTaxCategoryData();
    }
  }, {
    key: "handleCreateTaxes",
    value: function handleCreateTaxes(data, cb) {
      var _this2 = this;

      data.values.taxcategoryID = uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      this.props.addTaxCategory(data.values).then(function (res) {
        _this2.loadTaxCategoryData();

        cb({
          status: true,
          message: "Taxes created successful"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.taxCategoryTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (true) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
        form: _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_10__["default"],
        title: "Create Tax Category",
        rowSelection: {},
        cascaderData: _pagesData_taxCategory__WEBPACK_IMPORTED_MODULE_12__["taxCategoryData"].cascaderData,
        columns: _taxCategory_data__WEBPACK_IMPORTED_MODULE_11__["taxCategoryColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onCreate: function onCreate(data, cb) {
          return _this3.handleCreateTaxes(data, cb);
        },
        onSearch: function onSearch(value) {
          return _this3.handleSearch(value);
        }
      });else {}
    }
  }, {
    key: "_createTaxCategoryColoumns",
    value: function _createTaxCategoryColoumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.taxCode = item.taxcategoryID;
          object.handleFeatures = {
            handleDelete: function handleDelete(id) {
              console.log(id);

              _this4.props.deleteTaxCategory(id).then(function (res) {
                _this4.loadTaxCategoryData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleUpdate: function handleUpdate(data, id, cb) {
              // console.log("clicked", data, id, cb)
              _this4.props.updateTaxCategory(id, data.values).then(function (res) {
                _this4.loadTaxCategoryData();

                cb({
                  status: true,
                  message: "Tax category updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          };
          temp.push(object);
        });
      }

      return temp;
    } // Integrated with test api

  }, {
    key: "loadTaxCategoryData",
    value: function loadTaxCategoryData() {
      var _this5 = this;

      var urlParams = {};
      urlParams.businessID = this.props.business.response.data[0].businessID;
      this.props.getTaxCategories(urlParams).then(function (_) {
        _this5.setState({
          taxCategoryTableData: _this5._createTaxCategoryColoumns(_this5.props.taxCategories.response.data)
        }, function () {
          _this5.setState({
            filteredTableData: _this5.state.taxCategoryTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    taxCategories: state.taxCategories,
    deleteTaxCategory: state.deleteTaxCategory,
    updateTaxCategory: state.updateTaxCategory
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTaxCategories: function getTaxCategories(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["taxCategories"].action(object));
    },
    addTaxCategory: function addTaxCategory(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addTaxCategory"].action(object));
    },
    deleteTaxCategory: function deleteTaxCategory(taxcategoryID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteTaxCategory"].action(taxcategoryID));
    },
    updateTaxCategory: function updateTaxCategory(taxcategoryID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateTaxCategory"].action(taxcategoryID, object));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.taxes/.taxCategory/taxCategory.data.js":
/*!*****************************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxCategory/taxCategory.data.js ***!
  \*****************************************************************/
/*! exports provided: taxCategoryColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxCategoryColumns", function() { return taxCategoryColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createTaxCategory */ "./src/components/organisms/forms/createTaxCategory.js");





var taxCategoryColumns = [{
  title: "Name",
  dataIndex: "name",
  key: "name"
}, {
  title: "Tax Code",
  dataIndex: "taxCode",
  key: "taxCode"
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_4__["default"],
      title: "Create Item",
      isTableModal: true,
      prefilledValues: object,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleUpdate(data, object.taxCode, cb);
      }
    });
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object.taxCode);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.taxes/.taxes/index.js":
/*!************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxes/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_organisms_taxes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/components/organisms/taxes */ "./src/components/organisms/taxes/index.js");
/* harmony import */ var _taxes_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taxes.data */ "./pages/dashboard/.taxes/.taxes/taxes.data.js");
/* harmony import */ var _pagesData_item_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../pagesData/item.data */ "./pagesData/item.data.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/.taxes/.taxes/wrapper.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      taxesTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTaxesData();
    }
  }, {
    key: "handleCreateTaxes",
    value: function handleCreateTaxes(data, cb) {
      var _this2 = this;

      data.values.taxID = uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()();
      this.props.addTax(data.values).then(function (res) {
        _this2.loadTaxesData();

        cb({
          status: true,
          message: "Taxes created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.taxesTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // will not render under taxcategory loaded
      if (this.props.taxCategories.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_taxes__WEBPACK_IMPORTED_MODULE_8__["default"], {
          formData: this.createSelectData(this.props.taxCategories.response.data),
          rowSelection: {},
          cascaderData: _pagesData_item_data__WEBPACK_IMPORTED_MODULE_10__["itemData"].cascaderData,
          columns: _taxes_data__WEBPACK_IMPORTED_MODULE_9__["taxesColumns"],
          columnData: this.state.filteredTableData,
          pagination: {
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          onCreate: function onCreate(data, cb) {
            return _this3.handleCreateTaxes(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this3.handleSearch(value);
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Loading");
      }
    }
  }, {
    key: "_createTaxesColumns",
    value: function _createTaxesColumns(data) {
      var _this4 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.taxID = item.taxID;
          object.taxCategory = item.taxcategory;
          object.percentage = item.percentage;
          object.selectData = _this4.createSelectData(_this4.props.taxCategories.response.data);
          object.prefilledValues = item;
          object.handleFeatures = {
            handleDelete: function handleDelete(urlParams) {
              console.log("here", urlParams);

              _this4.props.deleteTax(urlParams.taxID).then(function (res) {
                _this4.loadTaxesData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            handleEdit: function handleEdit(data, taxID, cb) {
              _this4.props.updateTax(taxID, data.values).then(function (res) {
                _this4.loadTaxesData();

                cb({
                  status: true,
                  message: "Tax updated successfully"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some error occured while updating"
                });
              });
            }
          }, object.assign = {
            handleAssign: function handleAssign(data, id, cb) {
              var obj = {};
              obj.tax = id;
              obj.hsncode = data.values.assignedTo;
              console.log(obj);

              _this4.props.addhsncodetax(obj).then(function (res) {
                cb({
                  status: true,
                  message: "HSN assigned"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: true,
                  message: "ERROR! HSN already assigned"
                });
              });
            },
            assignedhsnCode: function assignedhsnCode(taxID) {
              return _this4.props.getHsnTax(taxID);
            },
            hsnData: _this4.createSelectHsnData(_this4.props.hsncodes.response.data),
            taxID: item.taxID
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadTaxesData",
    value: function loadTaxesData() {
      var _this5 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getTaxes(businessID).then(function (res) {
        _this5.setState({
          taxesTableData: _this5._createTaxesColumns(res)
        });

        _this5.setState({
          filteredTableData: _this5.state.taxesTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.taxcategoryID
        };
      });
      return selectData;
    }
  }, {
    key: "createSelectHsnData",
    value: function createSelectHsnData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.hsnname,
          value: item.hsncodeID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    taxes: state.taxes,
    taxCategories: state.taxCategories,
    hsncodes: state.hsncodes
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTaxes: function getTaxes(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["taxes"].action(businessID));
    },
    addTax: function addTax(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["addTax"].action(object));
    },
    deleteTax: function deleteTax(taxID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["deleteTax"].action(taxID));
    },
    getTaxCategories: function getTaxCategories(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["getTaxCategories"].action(businessID));
    },
    updateTax: function updateTax(taxID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["updateTax"].action(taxID, object));
    },
    addhsncodetax: function addhsncodetax(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["addhsncodetax"].action(object));
    },
    getHsnTax: function getHsnTax(taxID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_11__["taxHsn"].action(taxID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ "./pages/dashboard/.taxes/.taxes/taxes.data.js":
/*!*****************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxes/taxes.data.js ***!
  \*****************************************************/
/*! exports provided: taxesColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxesColumns", function() { return taxesColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createTax */ "./src/components/organisms/forms/createTax.js");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignHsn */ "./src/components/organisms/forms/assignHsn.js");







var taxesColumns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Tax Category',
  dataIndex: '',
  render: function render(object) {
    var categoryIndex = object.selectData.findIndex(function (id) {
      return id.value == object.taxCategory;
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(object.selectData[categoryIndex].name));
  }
}, {
  title: 'Percentage',
  dataIndex: 'percentage',
  render: function render(percentage) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, percentage, "%");
  }
}, // {
//     title: "Assign",
//     dataIndex: "",
//     key: "assign",
//     render: object => {
//       // console.log(object.assign.taxCategoryData)
//       return (
//         <Model
//           form={AssignItem}
//           title="Assign Items"
//           buttonValue="Assign"
//           formData={object.assign}
//           assignedData={{}}
//           onSubmit={(data, cb) =>
//             object.assign.handleAssign(data, object.taxID, cb)
//           }
//         />
//       )
//     }
//   },
{
  title: 'Edit',
  key: 'edit',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_5__["default"],
      prefilledValues: object.prefilledValues,
      formData: object.selectData,
      title: "Edit Tax",
      isTableModal: true,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleEdit(data, object.taxID, cb);
      }
    }));
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Actions",
      style: {
        width: 120,
        "marginRight": "30px"
      },
      optionArray: object.cascaderData
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    }));
  }
}];


/***/ }),

/***/ "./pages/dashboard/.taxes/.taxes/wrapper.js":
/*!**************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxes/wrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__);








function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

    function App(props) {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // load taxCategories if not in state
        if (!this.props.taxCategories.response) {
          var urlParams = {};
          urlParams.businessID = this.props.businesses.response.data[0].businessID;
          this.props.getTaxCategories(urlParams).then(function (user) {}).catch(function (err) {});
        }

        if (!this.props.hsncodes.response) {
          // let urlParams = {}
          // urlParams.businessID = this.props.businesses.response.data.businessID
          this.props.getHsnCodes().then(function (user) {}).catch(function (err) {});
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.taxCategories.isLoaded && this.props.hsncodes.isLoaded) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);
        } else {
          // taxCategoreis cannot be loaded
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Loading");
        }
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      taxCategories: state.taxCategories,
      businesses: state.businesses,
      hsncodes: state.hsncodes
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getTaxCategories: function getTaxCategories(businessID) {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["taxCategories"].action(businessID));
      },
      getHsnCodes: function getHsnCodes() {
        return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["hsncodes"].action());
      }
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App);
}

/***/ }),

/***/ "./pages/dashboard/.taxes/index.js":
/*!*****************************************!*\
  !*** ./pages/dashboard/.taxes/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _taxes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.taxes */ "./pages/dashboard/.taxes/.taxes/index.js");
/* harmony import */ var _taxCategory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./.taxCategory */ "./pages/dashboard/.taxes/.taxCategory/index.js");
/* harmony import */ var _hsn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./.hsn */ "./pages/dashboard/.taxes/.hsn/index.js");













var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane;

var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "callback",
    value: function callback(key) {// console.log(key);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
        defaultActiveKey: "1",
        onChange: this.callback
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
        tab: "Tax Categories",
        key: "1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_taxCategory__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
        tab: "Taxes",
        key: "2"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_taxes__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
        tab: "HSN",
        key: "3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_hsn__WEBPACK_IMPORTED_MODULE_12__["default"], null))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.transactions/index.js":
/*!************************************************!*\
  !*** ./pages/dashboard/.transactions/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_transactions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/components/organisms/transactions */ "./src/components/organisms/transactions/index.js");
/* harmony import */ var _transactions_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./transactions.data */ "./pages/dashboard/.transactions/transactions.data.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");













var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      transactiosTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTransactions();
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.transactiosTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.transactionID.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.businessTransactions.isLoaded) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_transactions__WEBPACK_IMPORTED_MODULE_9__["default"], {
        rowSelection: {},
        columns: _transactions_data__WEBPACK_IMPORTED_MODULE_10__["transactionColumns"],
        columnData: this.state.filteredTableData,
        pagination: {
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        },
        onSearch: function onSearch(value) {
          return _this2.handleSearch(value);
        }
      });else return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_11__["default"], null);
    }
  }, {
    key: "_createTransactionColumns",
    value: function _createTransactionColumns(data) {
      var _this3 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.transactionID = item.transactionID;
          object.receiptID = item.receipt, object.type = item.transactiontypeunfold.name, object.amount = item.amount;
          object.date = item.date.split('T')[0];
          object.time = item.date.split('T')[1].substr(0, 8);

          object.handleModalClick = function (receiptID, modalData) {
            console.log(receiptID, "rid");

            _this3.props.getReceiptById(receiptID).then(function (res) {
              var data = [res, item];
              modalData(data);
            });
          };

          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadTransactions",
    value: function loadTransactions() {
      var _this4 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getBusinessTransactions(businessID).then(function (_) {
        _this4.setState({
          transactiosTableData: _this4._createTransactionColumns(_this4.props.businessTransactions.response.data)
        }, function () {
          _this4.setState({
            filteredTableData: _this4.state.transactiosTableData
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    businessTransactions: state.businessTransactions
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getBusinessTransactions: function getBusinessTransactions(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["businessTransactions"].action(businessID));
    },
    getReceiptById: function getReceiptById(rid) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["receiptById"].action(rid));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/.transactions/transactions.data.js":
/*!************************************************************!*\
  !*** ./pages/dashboard/.transactions/transactions.data.js ***!
  \************************************************************/
/*! exports provided: transactionColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionColumns", function() { return transactionColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modalDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/components/molecules/modalDetail */ "./src/components/molecules/modalDetail/index.js");




var transactionColumns = [{
  title: "Transaction ID",
  dataIndex: "transactionID",
  key: "transactionID"
}, {
  title: "Transaction Type",
  dataIndex: "type",
  key: "type",
  render: function render(type) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
  }
}, {
  title: "Amount",
  dataIndex: "amount",
  key: "amount",
  render: function render(amount) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u20B9", amount);
  }
}, {
  title: "Date",
  dataIndex: "date",
  key: "date"
}, {
  title: "Time",
  dataIndex: "time",
  key: "time"
}, {
  title: '',
  dataIndex: '',
  key: 'details',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modalDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isTableModal: true,
      receiptNo: object.receiptID,
      handleModalClick: object.handleModalClick
    });
  }
}];


/***/ }),

/***/ "./pages/dashboard/.webPermissions/index.js":
/*!**************************************************!*\
  !*** ./pages/dashboard/.webPermissions/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_templates_permission__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../src/components/templates/permission */ "./src/components/templates/permission/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");

















var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createRuleData", function (data) {
      if (!data) return null;else if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data.data).length === 0) return null;
      return data.data.map(function (item) {
        return {
          roleID: item.brole,
          user: item.user,
          business: item.business,
          permission: item.permission,
          role: item.broleunfold.name
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "createEmployeeData", function (data) {
      if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(data).length === 0) return null;
      return data.map(function (item) {
        return {
          value: item.userID,
          name: "".concat(item.firstName, " ").concat(item.LastName)
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleChange", function (checked, broleId, userId, businessId) {
      _this.props.updateWebPermission({
        permission: checked
      }, broleId, userId, businessId).then(function (_) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.success("Permission changed successfully.");
      }).catch(function (err) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default.a.error("There was an error");

        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleValue", function (value, name) {
      _this.setState({
        formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.formValues, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, name, value))
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "onClick", function () {
      _this.props.businessPermissions(_this.state.formValues.employee);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleFocus", function (option) {
      switch (option) {
        case "employee":
          _this.props.getEmployeeByLid(_this.state.formValues.location);

          break;

        case "location":
          _this.setState({
            formValues: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state.formValues, {
              employee: ""
            })
          });

          break;

        default:
          console.log("Some Error Occured");
          break;
      }
    });

    _this.state = {
      formValues: {
        employee: ""
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var businessID = this.props.business.response.data[0].businessID;
      this.props.getEmployeeByBusinessId(businessID).then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.employeeData.isLoaded) return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src_components_templates_permission__WEBPACK_IMPORTED_MODULE_13__["default"], {
        type: "web",
        rules: this.createRuleData(this.props.permissions.response),
        onChange: this.handleChange,
        formData: {
          handleValue: this.handleValue,
          value: {
            employee: this.state.formValues.employee
          },
          employee: this.createEmployeeData(this.props.employeeData.response.data),
          onClick: this.onClick
        }
      });else return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_15__["default"], null);
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    permissions: state.businessPermissions,
    employeeData: state.getEmployeeByBusinessId,
    locationData: state.getLocationByBid
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateWebPermission: function updateWebPermission(data, broleId, userId, businessId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["updateWebPermission"].action(data, broleId, userId, businessId));
    },
    businessPermissions: function businessPermissions(userId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["businessPermissions"].action(userId));
    },
    getEmployeeByBusinessId: function getEmployeeByBusinessId(businessId) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_14__["getEmployeeByBusinessId"].action(businessId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/dashboard/index.js":
/*!**********************************!*\
  !*** ./pages/dashboard/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "antd/lib/tabs/style");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "antd/lib/tabs");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_templates_dashboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/templates/dashboard */ "./src/components/templates/dashboard/index.js");
/* harmony import */ var _modifiers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.modifiers */ "./pages/dashboard/.modifiers/index.js");
/* harmony import */ var _src_components_organisms_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/components/organisms/categories */ "./src/components/organisms/categories/index.js");
/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./.employees */ "./pages/dashboard/.employees/index.js");
/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./.locations */ "./pages/dashboard/.locations/index.js");
/* harmony import */ var _taxes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./.taxes */ "./pages/dashboard/.taxes/index.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./.products */ "./pages/dashboard/.products/index.js");
/* harmony import */ var _customers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./.customers */ "./pages/dashboard/.customers/index.js");
/* harmony import */ var _purchase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./.purchase */ "./pages/dashboard/.purchase/index.js");
/* harmony import */ var _webPermissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./.webPermissions */ "./pages/dashboard/.webPermissions/index.js");
/* harmony import */ var _appPermisions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./.appPermisions */ "./pages/dashboard/.appPermisions/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./.attributes */ "./pages/dashboard/.attributes/index.js");
/* harmony import */ var _transactions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./.transactions */ "./pages/dashboard/.transactions/index.js");
/* harmony import */ var _discount__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./.discount */ "./pages/dashboard/.discount/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./.home */ "./pages/dashboard/.home/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/wrapper.js");
/* harmony import */ var _src_utils_wrappers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../src/utils/wrappers */ "./src/utils/wrappers/index.js");
/* harmony import */ var _src_utils_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./../../src/utils/auth */ "./src/utils/auth/index.js");
/* harmony import */ var _src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./../../src/components/templates/notAuthorized */ "./src/components/templates/notAuthorized/index.js");






























var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a.TabPane; // refactor code

var ItemsContent = function ItemsContent(props) {
  function callback(key) {// console.log(key);
  }

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default.a, {
    defaultActiveKey: props.selectedTab,
    onChange: callback
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Items",
    key: "1"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Modifiers",
    key: "2"
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Categories",
    key: "3"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_organisms_categories__WEBPACK_IMPORTED_MODULE_11__["default"], {
    cardData: props.categoryData.cardData,
    cascaderData: props.categoryData.cascaderData,
    columns: props.categoryData.categoryColumns,
    columnData: props.categoryData.categoryColumnData
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Sub-Categories",
    key: "4"
  }, "Content of Tab Pane 4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Discount",
    key: "5"
  }, "Content of Tab Pane 5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TabPane, {
    tab: "Taxes",
    key: "6"
  })));
};

var SwitchHandler =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SwitchHandler, _React$Component);

  function SwitchHandler() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SwitchHandler);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SwitchHandler).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SwitchHandler, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, function () {
        switch (_this.props.switchItem) {
          case "home":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_23__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "employees":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_employees__WEBPACK_IMPORTED_MODULE_12__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "locations":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_locations__WEBPACK_IMPORTED_MODULE_13__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "purchase":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_purchase__WEBPACK_IMPORTED_MODULE_17__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "taxes":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_taxes__WEBPACK_IMPORTED_MODULE_14__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "products":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_products__WEBPACK_IMPORTED_MODULE_15__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "discounts":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_discount__WEBPACK_IMPORTED_MODULE_22__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "customers":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_customers__WEBPACK_IMPORTED_MODULE_16__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "modifiers":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_modifiers__WEBPACK_IMPORTED_MODULE_10__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "attributes":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_attributes__WEBPACK_IMPORTED_MODULE_20__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "transactions":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: _this.props.switchItem,
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_transactions__WEBPACK_IMPORTED_MODULE_21__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "permissions-web":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: "permissions",
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_webPermissions__WEBPACK_IMPORTED_MODULE_18__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          case "permissions-app":
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_utils_auth__WEBPACK_IMPORTED_MODULE_27__["default"], {
              param: "permissions",
              yes: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_appPermisions__WEBPACK_IMPORTED_MODULE_19__["default"], null),
              no: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_notAuthorized__WEBPACK_IMPORTED_MODULE_28__["default"], null)
            });

          default:
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Error: 404");
        }
      }());
    }
  }]);

  return SwitchHandler;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var App =
/*#__PURE__*/
function (_React$Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component2);

  function App() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      if (!this.props.router.query.page) {
        next_router__WEBPACK_IMPORTED_MODULE_24___default.a.push("/dashboard?page=home");
      }

      var userName = this.props.user.response.data[0].firstName;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_dashboard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        sidebarTab: this.props.router.query.page,
        user: userName
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SwitchHandler, {
        switchItem: this.props.router.query.page,
        tab: this.props.router.query.tab
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_25__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_24__["withRouter"])(Object(_src_utils_wrappers__WEBPACK_IMPORTED_MODULE_26__["default"])(App))));

/***/ }),

/***/ "./pages/dashboard/wrapper.js":
/*!************************************!*\
  !*** ./pages/dashboard/wrapper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_utils_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../src/utils/token */ "./src/utils/token/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");










function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

    function App(props) {
      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
      _this.state = {
        setToken: false
      };
      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!localStorage.getItem("admin-api-key") && !react_cookies__WEBPACK_IMPORTED_MODULE_8___default.a.load('admin-api-key')) {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
        }

        _src_utils_token__WEBPACK_IMPORTED_MODULE_6__["default"].setFromStorage();
        this.setState({
          setToken: true
        });
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.setToken && _src_utils_token__WEBPACK_IMPORTED_MODULE_6__["default"].getToken()) return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);else return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_9__["default"], null);
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  return App;
}

/***/ }),

/***/ "./pagesData/item.data.js":
/*!********************************!*\
  !*** ./pagesData/item.data.js ***!
  \********************************/
/*! exports provided: itemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemData", function() { return itemData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");


var cardData = [{
  iconType: "bank",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#F88998"
  },
  title: "25",
  description: "Items Out of Stock"
}, {
  iconType: "shopping-cart",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#FFB353"
  },
  title: "25",
  description: "Items Out of Stock"
}, {
  iconType: "rise",
  iconStyle: {
    fontSize: "30px",
    marginTop: "30%",
    color: "#69E4A6"
  },
  title: "25",
  description: "Items Out of Stock"
}];
var cascaderData = [{
  placeholder: "All Categories",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Inventory",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Stores",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Actions",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}];
var productColumns = [{
  title: "PRODUCT",
  dataIndex: "product",
  key: "product"
}, {
  title: "CODE",
  dataIndex: "code",
  key: "code"
}, {
  title: "CATEGORY",
  dataIndex: "category",
  key: "category"
}, {
  title: "LOCATION",
  dataIndex: "location",
  key: "location"
}, {
  title: "INVENTORY",
  dataIndex: "inventory",
  key: "inventory",
  render: function render(inventory) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(inventory));
  }
}, {
  title: "PRICE",
  key: "price",
  dataIndex: "price",
  render: function render(price) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "INR ", price));
  }
}];
var productColumnData = [{
  product: "Parle G",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [20],
  price: 10
}, {
  product: "Hide & Seek",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [200],
  price: 30
}, {
  product: "Parle G",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [2],
  price: 10
}, {
  product: "Parle G",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [20],
  price: 10
}, {
  product: "Hide & Seek",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [200],
  price: 30
}, {
  product: "Parle G",
  code: "1X2X3X4X5",
  category: "Biscuits",
  location: "BBSR",
  inventory: [2],
  price: 10
}];
var itemData = {
  cardData: cardData,
  cascaderData: cascaderData,
  productColumns: productColumns,
  productColumnData: productColumnData
};

/***/ }),

/***/ "./pagesData/taxCategory.js":
/*!**********************************!*\
  !*** ./pagesData/taxCategory.js ***!
  \**********************************/
/*! exports provided: taxCategoryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxCategoryData", function() { return taxCategoryData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");




var taxCategoryColumns = [{
  title: "Name",
  dataIndex: "name"
}, {
  title: "Tax Code",
  dataIndex: "taxCode"
}];
var taxCategoryColumnData = [{
  name: "Test Name",
  taxCode: "GST1234"
}, {
  name: "Test Name",
  taxCode: "GST1234"
}, {
  name: "Test Name",
  taxCode: "GST1234"
}];
var cascaderData = [{
  placeholder: "All Categories",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Inventory",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Stores",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}, {
  placeholder: "All Actions",
  optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"] // style: { width: 162 }

}];
var taxCategoryData = {
  taxCategoryColumns: taxCategoryColumns,
  taxCategoryColumnData: taxCategoryColumnData,
  cascaderData: cascaderData
};

/***/ }),

/***/ "./src/api/ROOTURL.js":
/*!****************************!*\
  !*** ./src/api/ROOTURL.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ROOTURL; // Server Url

/* harmony default export */ __webpack_exports__["default"] = (ROOTURL = "http://142.93.222.40/api/v1"); // export default (ROOTURL = "http://127.0.0.1:8000/api/v1")

/***/ }),

/***/ "./src/api/attributes/index.js":
/*!*************************************!*\
  !*** ./src/api/attributes/index.js ***!
  \*************************************/
/*! exports provided: attributes, addAttributes, deleteAttributes, updateAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributes", function() { return addAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributes", function() { return deleteAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributes", function() { return updateAttributes; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributes = function attributes(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributes"));
};
var addAttributes = function addAttributes(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributes"), object);
};
var deleteAttributes = function deleteAttributes(attributesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributes/").concat(attributesID));
};
var updateAttributes = function updateAttributes(attributesID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributes/").concat(attributesID), object);
};

/***/ }),

/***/ "./src/api/attributeset/index.js":
/*!***************************************!*\
  !*** ./src/api/attributeset/index.js ***!
  \***************************************/
/*! exports provided: attributesets, addAttributeSet, deleteAttributeSet, updateAttributeSet, assignAttribute, assignedAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesets", function() { return attributesets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributeSet", function() { return addAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributeSet", function() { return deleteAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributeSet", function() { return updateAttributeSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignAttribute", function() { return assignAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignedAttribute", function() { return assignedAttribute; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributesets = function attributesets(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributesets"));
};
var addAttributeSet = function addAttributeSet(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributesets"), object);
};
var deleteAttributeSet = function deleteAttributeSet(attributesetsID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributesets/").concat(attributesetsID));
};
var updateAttributeSet = function updateAttributeSet(attributesetsID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributesets/").concat(attributesetsID), object);
};
var assignAttribute = function assignAttribute(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributeuse"), object);
};
var assignedAttribute = function assignedAttribute(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributeuse?_where=(attributeset,eq,").concat(modifierID, ")&_unfold={\"attribute\":[\"name\"]}"));
};

/***/ }),

/***/ "./src/api/attributevalues/index.js":
/*!******************************************!*\
  !*** ./src/api/attributevalues/index.js ***!
  \******************************************/
/*! exports provided: attributevalues, addAttributeValues, deleteAttributeValues, updateAttributeValues, attributeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributevalues", function() { return attributevalues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAttributeValues", function() { return addAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAttributeValues", function() { return deleteAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAttributeValues", function() { return updateAttributeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeName", function() { return attributeName; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var attributevalues = function attributevalues(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributevalues"));
};
var addAttributeValues = function addAttributeValues(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributevalues"), object);
};
var deleteAttributeValues = function deleteAttributeValues(attributevaluesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributevalues/").concat(attributevaluesID));
};
var updateAttributeValues = function updateAttributeValues(attributevaluesID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributevalues/").concat(attributevaluesID), object);
};
var attributeName = function attributeName(attributevaluesID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/attributevalues?_where=(attributevalueID,eq,").concat(attributevaluesID, ")&_unfold={\"attribute\":[\"name\"]}"));
};

/***/ }),

/***/ "./src/api/auth/index.js":
/*!*******************************!*\
  !*** ./src/api/auth/index.js ***!
  \*******************************/
/*! exports provided: auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookies */ "react-cookies");
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

/***/ "./src/api/business/index.js":
/*!***********************************!*\
  !*** ./src/api/business/index.js ***!
  \***********************************/
/*! exports provided: addBusiness, businesses, getBusinessById, businessTransactions, businessType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBusiness", function() { return addBusiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businesses", function() { return businesses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBusinessById", function() { return getBusinessById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessTransactions", function() { return businessTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessType", function() { return businessType; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for logging in of user:

var url = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"] + "/businesses";
var addBusiness = function addBusiness(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, data);
};
var businesses = function businesses(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID));
};
var getBusinessById = function getBusinessById(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID));
};
var businessTransactions = function businessTransactions(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/transactions?_unfold={\"transactiontype\":[\"name\"]}"));
};
var businessType = function businessType() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesstype"));
};

/***/ }),

/***/ "./src/api/employees/index.js":
/*!************************************!*\
  !*** ./src/api/employees/index.js ***!
  \************************************/
/*! exports provided: employees, addEmployee, deleteEmployee, updateEmployee, employeelocations, addEmployeeLocation, deleteEmployeeLocation */
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
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var employees = function employees(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(urlParams.businessID, "/users"));
};
var addEmployee = function addEmployee(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users"), object);
};
var deleteEmployee = function deleteEmployee(employeeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users/").concat(employeeID));
};
var updateEmployee = function updateEmployee(employeeID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users/").concat(employeeID), object);
};
var employeelocations = function employeelocations(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users/").concat(urlParams.userID, "/userslocations?_unfold={\"location\":[\"name\"]}"));
};
var addEmployeeLocation = function addEmployeeLocation(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/userslocations"), object);
};
var deleteEmployeeLocation = function deleteEmployeeLocation(employeeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/userslocations/").concat(employeeID));
};

/***/ }),

/***/ "./src/api/form/index.js":
/*!*******************************!*\
  !*** ./src/api/form/index.js ***!
  \*******************************/
/*! exports provided: formData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formData", function() { return formData; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);


var formData = function formData(data) {
  var dataDeepCopy = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, data);

  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    resolve(dataDeepCopy);
  });
};

/***/ }),

/***/ "./src/api/hsn/index.js":
/*!******************************!*\
  !*** ./src/api/hsn/index.js ***!
  \******************************/
/*! exports provided: hsncodes, addHsnCode, deleteHsnCode, updateHsnCode, addhsncodetax, taxHsn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsncodes", function() { return hsncodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHsnCode", function() { return addHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteHsnCode", function() { return deleteHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateHsnCode", function() { return updateHsnCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addhsncodetax", function() { return addhsncodetax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxHsn", function() { return taxHsn; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var hsncodes = function hsncodes() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/hsncodes"));
};
var addHsnCode = function addHsnCode(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/hsncodes"), object);
};
var deleteHsnCode = function deleteHsnCode(hsncodeID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/hsncodes/").concat(hsncodeID));
};
var updateHsnCode = function updateHsnCode(hsncodeID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/hsncodes/").concat(hsncodeID), object);
};
var addhsncodetax = function addhsncodetax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxhsncodes"), object);
};
var taxHsn = function taxHsn(taxID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxhsncodes?_where=(tax,eq,").concat(taxID, ")&_unfold={\"hsncode\":[\"hsnname\"]}"));
};

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var taxes = _interopRequireWildcard(__webpack_require__(/*! ./taxes */ "./src/api/taxes/index.js"));

var locations = _interopRequireWildcard(__webpack_require__(/*! ./locations */ "./src/api/locations/index.js"));

var business = _interopRequireWildcard(__webpack_require__(/*! ./business */ "./src/api/business/index.js"));

var users = _interopRequireWildcard(__webpack_require__(/*! ./users */ "./src/api/users/index.js"));

var login = _interopRequireWildcard(__webpack_require__(/*! ./login */ "./src/api/login/index.js"));

var signup = _interopRequireWildcard(__webpack_require__(/*! ./signup */ "./src/api/signup/index.js"));

var modifiers = _interopRequireWildcard(__webpack_require__(/*! ./modifiers */ "./src/api/modifiers/index.js"));

var employees = _interopRequireWildcard(__webpack_require__(/*! ./employees */ "./src/api/employees/index.js"));

var products = _interopRequireWildcard(__webpack_require__(/*! ./products */ "./src/api/products/index.js"));

var stockdiary = _interopRequireWildcard(__webpack_require__(/*! ./stockdiary */ "./src/api/stockdiary/index.js"));

var hsn = _interopRequireWildcard(__webpack_require__(/*! ./hsn */ "./src/api/hsn/index.js"));

var purchase = _interopRequireWildcard(__webpack_require__(/*! ./purchase */ "./src/api/purchase/index.js"));

var form = _interopRequireWildcard(__webpack_require__(/*! ./form */ "./src/api/form/index.js"));

var auth = _interopRequireWildcard(__webpack_require__(/*! ./auth */ "./src/api/auth/index.js"));

var permissions = _interopRequireWildcard(__webpack_require__(/*! ./permissions */ "./src/api/permissions/index.js"));

var inventory = _interopRequireWildcard(__webpack_require__(/*! ./inventory */ "./src/api/inventory/index.js"));

var mitems = _interopRequireWildcard(__webpack_require__(/*! ./mitems */ "./src/api/mitems/index.js"));

var attributesets = _interopRequireWildcard(__webpack_require__(/*! ./attributeset */ "./src/api/attributeset/index.js"));

var attributes = _interopRequireWildcard(__webpack_require__(/*! ./attributes */ "./src/api/attributes/index.js"));

var attributevalues = _interopRequireWildcard(__webpack_require__(/*! ./attributevalues */ "./src/api/attributevalues/index.js"));

var receipts = _interopRequireWildcard(__webpack_require__(/*! ./receipts */ "./src/api/receipts/index.js"));

var reports = _interopRequireWildcard(__webpack_require__(/*! ./reports */ "./src/api/reports/index.js"));

var productstax = _interopRequireWildcard(__webpack_require__(/*! ./producttax */ "./src/api/producttax/index.js"));

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
  reports: reports,
  productstax: productstax
};

/***/ }),

/***/ "./src/api/inventory/index.js":
/*!************************************!*\
  !*** ./src/api/inventory/index.js ***!
  \************************************/
/*! exports provided: inventoryStock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryStock", function() { return inventoryStock; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var inventoryStock = function inventoryStock(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/inventory/bus/").concat(businessID, "/compact"));
};

/***/ }),

/***/ "./src/api/locations/index.js":
/*!************************************!*\
  !*** ./src/api/locations/index.js ***!
  \************************************/
/*! exports provided: locations, addLocation, deleteLocation, updateLocation, getLocationByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLocation", function() { return addLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLocation", function() { return deleteLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocation", function() { return updateLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationByID", function() { return getLocationByID; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var locations = function locations(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/blocations"));
};
var addLocation = function addLocation(object, headers) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/blocations"), object, headers);
};
var deleteLocation = function deleteLocation(blocationID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/blocations/").concat(blocationID));
};
var updateLocation = function updateLocation(blocationID, object, headers) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/blocations/").concat(blocationID), object, headers);
};
var getLocationByID = function getLocationByID(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/blocations"));
};

/***/ }),

/***/ "./src/api/login/index.js":
/*!********************************!*\
  !*** ./src/api/login/index.js ***!
  \********************************/
/*! exports provided: login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for logging in of user:

var loginUrl = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"] + "/weblogin";
var login = function login(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(loginUrl, data);
};

/***/ }),

/***/ "./src/api/mitems/index.js":
/*!*********************************!*\
  !*** ./src/api/mitems/index.js ***!
  \*********************************/
/*! exports provided: mitems, addMitem, deleteMitem, updateMitem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mitems", function() { return mitems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMitem", function() { return addMitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMitem", function() { return deleteMitem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMitem", function() { return updateMitem; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var mitems = function mitems(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/mitems"));
};
var addMitem = function addMitem(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/mitems"), object);
};
var deleteMitem = function deleteMitem(mitemsID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/mitems/").concat(mitemsID));
};
var updateMitem = function updateMitem(mitemsID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/mitems/").concat(mitemsID), object);
};

/***/ }),

/***/ "./src/api/modifiers/index.js":
/*!************************************!*\
  !*** ./src/api/modifiers/index.js ***!
  \************************************/
/*! exports provided: modifiers, modifieruse, addModifierProduct, addModifier, deleteModifier, updateModifier, modifierProduct */
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
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var modifiers = function modifiers(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/modifiers"));
};
var modifieruse = function modifieruse() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifieruse"));
};
var addModifierProduct = function addModifierProduct(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifieruse"), object);
};
var addModifier = function addModifier(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifiers"), object);
};
var deleteModifier = function deleteModifier(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifiers/").concat(modifierID));
};
var updateModifier = function updateModifier(modifierID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifiers/").concat(modifierID), object);
};
var modifierProduct = function modifierProduct(modifierID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/modifieruse?_where=(modifier,eq,").concat(modifierID, ")&_unfold={\"product\":[\"name\"]}"));
};

/***/ }),

/***/ "./src/api/permissions/index.js":
/*!**************************************!*\
  !*** ./src/api/permissions/index.js ***!
  \**************************************/
/*! exports provided: businessRoles, appRoles, businessPermissions, getPermissions, updatePermission, getLocationByBid, getEmployeeByLid, getEmployeeByBusinessId, updateWebPermission */
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ROOTURL */ "./src/api/ROOTURL.js");

 // export const getPermissions = uid =>
//   axios.get(
//     `${ROOTURL}/nroleuserslocations?_where=(user,eq,0b6e1ac7-f8a9-4149-a302-ed3a0e901618)&_unfold={"role":["name"]}`
//   )

var businessRoles = function businessRoles() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/nbroles"));
};
var appRoles = function appRoles() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/nroles"));
}; // Fetch permission for business (dashboard)

var businessPermissions = function businessPermissions(userId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/businesspermission?_where=(user,eq,").concat(userId, ")&_unfold={\"brole\":[\"name\"]}"));
}; // Fetch permissions for app

var getPermissions = function getPermissions(userID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/nroleuserslocations?_where=(user,eq,").concat(userID, ")&_unfold={\"role\":[\"name\"]}"));
}; // Update app permissions

var updatePermission = function updatePermission(data, roleId, userId, locationId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/nroleuserslocations/").concat(roleId, "___").concat(userId, "___").concat(locationId), data);
};
var getLocationByBid = function getLocationByBid(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/businesses/").concat(businessID, "/blocations?_fields=blocationID,name"));
};
var getEmployeeByLid = function getEmployeeByLid(locationID) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/userslocations?_where=(location,eq,").concat(locationID, ")&_unfold={\"user\":[\"firstName\",\"LastName\"]}"));
};
var getEmployeeByBusinessId = function getEmployeeByBusinessId(businessId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/businesses/").concat(businessId, "/users?_fields=userID,userName,firstName,LastName"));
};
var updateWebPermission = function updateWebPermission(data, broleId, userId, businessId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/businesspermission/").concat(broleId, "___").concat(userId, "___").concat(businessId), data);
};

/***/ }),

/***/ "./src/api/products/index.js":
/*!***********************************!*\
  !*** ./src/api/products/index.js ***!
  \***********************************/
/*! exports provided: products, addProduct, deleteProduct, updateProduct, getProductById, productCategories, addProductCategory, deleteProductCategory, updateProductCategory */
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
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 //Products APIs

var products = function products(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/products"));
};
var addProduct = function addProduct(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/products"), object);
};
var deleteProduct = function deleteProduct(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/products/").concat(urlParams.productID));
};
var updateProduct = function updateProduct(productID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/products/").concat(productID), object);
};
var getProductById = function getProductById(productID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/products/").concat(productID));
}; //Product Category APIs

var productCategories = function productCategories(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(urlParams.businessID, "/productcategories"));
};
var addProductCategory = function addProductCategory(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/productcategories"), object);
};
var deleteProductCategory = function deleteProductCategory(productcategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/productcategories/").concat(productcategoryID));
};
var updateProductCategory = function updateProductCategory(productcategoryID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/productcategories/").concat(productcategoryID), object);
};

/***/ }),

/***/ "./src/api/producttax/index.js":
/*!*************************************!*\
  !*** ./src/api/producttax/index.js ***!
  \*************************************/
/*! exports provided: addProductsTax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductsTax", function() { return addProductsTax; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var addProductsTax = function addProductsTax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/productstaxes"), object);
};

/***/ }),

/***/ "./src/api/purchase/index.js":
/*!***********************************!*\
  !*** ./src/api/purchase/index.js ***!
  \***********************************/
/*! exports provided: addPurchase, reviewPurchase, getPurchaseItems, deletePurchase, updatePurchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPurchase", function() { return addPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPurchase", function() { return reviewPurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPurchaseItems", function() { return getPurchaseItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePurchase", function() { return deletePurchase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePurchase", function() { return updatePurchase; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ROOTURL */ "./src/api/ROOTURL.js");


var addPurchase = function addPurchase(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/purchases"), data);
};
var reviewPurchase = function reviewPurchase() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/purchases?_where=(verified,eq,0)&_unfold={\"location\":[\"name\"]}"));
};
var getPurchaseItems = function getPurchaseItems(pid) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/purchaseitems?_where=(purchase,eq,").concat(pid, ")&_unfold={\"product\":[\"name\"]}"));
};
var deletePurchase = function deletePurchase(pid) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/purchases/").concat(pid));
};
var updatePurchase = function updatePurchase(pid, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_1__["default"], "/purchases/").concat(pid), data);
};

/***/ }),

/***/ "./src/api/receipts/index.js":
/*!***********************************!*\
  !*** ./src/api/receipts/index.js ***!
  \***********************************/
/*! exports provided: receiptById, receiptTransactionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptById", function() { return receiptById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiptTransactionType", function() { return receiptTransactionType; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var receiptById = function receiptById(rid) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/receipts/").concat(rid));
};
var receiptTransactionType = function receiptTransactionType(rid) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/transactions?_where=(receipt,eq,").concat(rid, ")&_unfold={\"transactiontype\":[\"name\"]}"));
};

/***/ }),

/***/ "./src/api/reports/index.js":
/*!**********************************!*\
  !*** ./src/api/reports/index.js ***!
  \**********************************/
/*! exports provided: topItems, topCategories, paymentTypes, topSalesman, locationSales, salesDatewise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topItems", function() { return topItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topCategories", function() { return topCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentTypes", function() { return paymentTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topSalesman", function() { return topSalesman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationSales", function() { return locationSales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesDatewise", function() { return salesDatewise; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var topItems = function topItems(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/topproducts?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var topCategories = function topCategories(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/topproductscategories?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var paymentTypes = function paymentTypes(location, from, to) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/paymentwise?location=").concat(location, "&from=").concat(from, "&to=").concat(to));
};
var topSalesman = function topSalesman(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/topsalesman?business=").concat(business));
};
var locationSales = function locationSales(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/locationsales?business=").concat(business));
};
var salesDatewise = function salesDatewise(business) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/datewisetotalsale?business=").concat(business));
};

/***/ }),

/***/ "./src/api/signup/index.js":
/*!*********************************!*\
  !*** ./src/api/signup/index.js ***!
  \*********************************/
/*! exports provided: signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 // API call for signingup of user

var signupURL = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"] + "/websignup";
var signup = function signup(userData) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(signupURL, userData);
};

/***/ }),

/***/ "./src/api/stockdiary/index.js":
/*!*************************************!*\
  !*** ./src/api/stockdiary/index.js ***!
  \*************************************/
/*! exports provided: stockdiary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stockdiary", function() { return stockdiary; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var stockdiary = function stockdiary() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/purchases?_unfold={\"location\":[\"name\"]}"));
};

/***/ }),

/***/ "./src/api/taxes/index.js":
/*!********************************!*\
  !*** ./src/api/taxes/index.js ***!
  \********************************/
/*! exports provided: taxes, addTax, deleteTax, updateTax, taxCategories, addTaxCategory, deleteTaxCategory, updateTaxCategory, hsnTaxcategory */
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
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var taxes = function taxes(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/taxes"));
};
var addTax = function addTax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxes"), object);
};
var deleteTax = function deleteTax(taxID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxes/").concat(taxID));
};
var updateTax = function updateTax(taxID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxes/").concat(taxID), object);
};
var taxCategories = function taxCategories(urlParams) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(urlParams.businessID, "/taxcategories"));
};
var addTaxCategory = function addTaxCategory(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxcategories"), object);
};
var deleteTaxCategory = function deleteTaxCategory(taxCategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxcategories/").concat(taxCategoryID));
};
var updateTaxCategory = function updateTaxCategory(taxCategoryID, object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/taxcategories/").concat(taxCategoryID), object);
};
var hsnTaxcategory = function hsnTaxcategory(taxCategoryID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/hsncodetaxcategories?_where=(taxcategory,eq,").concat(taxCategoryID, ")&_unfold={\"hsncode\":[\"hsnname\"]}"));
};

/***/ }),

/***/ "./src/api/users/index.js":
/*!********************************!*\
  !*** ./src/api/users/index.js ***!
  \********************************/
/*! exports provided: user, allUsers, businessUsers, customerReceipts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUsers", function() { return allUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "businessUsers", function() { return businessUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerReceipts", function() { return customerReceipts; });
/* harmony import */ var _ROOTURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ROOTURL */ "./src/api/ROOTURL.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var getUserUrl = _ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"] + "/users/";
var user = function user(userID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users/").concat(userID));
};
var allUsers = function allUsers() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users"));
};
var businessUsers = function businessUsers(businessID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/businesses/").concat(businessID, "/users"));
};
var customerReceipts = function customerReceipts(customerID) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/users/").concat(customerID, "/receipts"));
};

/***/ }),

/***/ "./src/components/atoms/button/index.js":
/*!**********************************************!*\
  !*** ./src/components/atoms/button/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ButtonOne = function ButtonOne(_ref) {
  var color = _ref.color,
      value = _ref.value,
      onClick = _ref.onClick,
      loading = _ref.loading,
      width = _ref.width,
      style = _ref.style;
  var ButtonStyle = {
    backgroundColor: color,
    borderWidth: "0px",
    //padding: "0.2em 3.3em",
    borderRadius: "4px",
    width: width
  };

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "primary",
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, ButtonStyle, style),
      onClick: onClick,
      loading: loading
    }, value);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, ButtonStyle, style),
    onClick: onClick
  }, value);
};

ButtonOne.defaultProps = {
  color: "#030D34",
  value: "Click Me",
  width: ""
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonOne);

/***/ }),

/***/ "./src/components/atoms/input/index.js":
/*!*********************************************!*\
  !*** ./src/components/atoms/input/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/date-picker/style */ "antd/lib/date-picker/style");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_reduxFormField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../utils/reduxFormField */ "./src/utils/reduxFormField/index.js");







var TextArea = antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea;
var inputStyle = {
  // borderTop: "none",
  // borderLeft: "none",
  // borderRight: "none",
  // borderBottom: "1px solid #757575",
  // borderRadius: "0",
  width: "100%"
};
var dateStyle = {
  width: "100%"
};

var Input1 = function Input1(props) {
  var name = props.name,
      type = props.type,
      label = props.label,
      value = props.value,
      onChange = props.onChange;

  switch (type) {
    case "multiline":
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: {
          marginBottom: "25px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "label"
      }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TextArea, {
        autosize: {
          minRows: 4,
          maxRows: 7
        },
        name: name,
        value: value,
        onChange: onChange,
        style: inputStyle
      }));

    case "date":
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: {
          marginBottom: "25px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "label"
      }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default.a, {
        name: name,
        type: type,
        defaultValue: value,
        onChange: onChange,
        style: dateStyle,
        placeholder: "",
        format: "DD/MM/YYYY"
      }));

    default:
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: {
          marginBottom: "25px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "label"
      }, label), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
        name: name,
        type: type,
        value: value,
        onChange: onChange,
        style: inputStyle
      }));
  }
};

Input1.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
Input1.defaultProps = {
  type: "text",
  margin: "normal"
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_reduxFormField__WEBPACK_IMPORTED_MODULE_6__["default"])(Input1));

/***/ }),

/***/ "./src/components/atoms/loading/index.js":
/*!***********************************************!*\
  !*** ./src/components/atoms/loading/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Loading = function Loading() {
  var style = {
    loaderContainer: {
      height: "100%",
      width: "100%"
    },
    loader: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translateX(-50%)"
    }, "transform", "translateY(-50%)")
  };
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: style.loaderContainer
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: style.loader,
    size: "large",
    tip: "Loading..."
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/atoms/select/index.js":
/*!**********************************************!*\
  !*** ./src/components/atoms/select/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_reduxFormField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../utils/reduxFormField */ "./src/utils/reduxFormField/index.js");






var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

var Select1 = function Select1(props) {
  var _React$createElement;

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginBottom: "25px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "label"
  }, props.label), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, (_React$createElement = {
    showSearch: true,
    value: props.value
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "showSearch", props.showSearch), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "mode", props.type), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
    width: "100%"
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "optionFilterProp", "children"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onChange", props.onChange), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onFocus", props.onFocus), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "onBlur", props.handleBlur), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "filterOption", function filterOption(input, option) {
    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }), _React$createElement), props.option.map(function (optionData, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Option, {
      key: index,
      value: optionData.value
    }, optionData.name);
  })));
};

Select1.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  option: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
Select1.defaultProps = {
  helperText: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_reduxFormField__WEBPACK_IMPORTED_MODULE_5__["default"])(Select1));

/***/ }),

/***/ "./src/components/atoms/stockTag/index.js":
/*!************************************************!*\
  !*** ./src/components/atoms/stockTag/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stockTag; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tag/style */ "antd/lib/tag/style");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tag */ "antd/lib/tag");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function stockTag(tag) {
  var color;

  if (tag >= 0 && tag <= 10) {
    color = 'red';
  } else if (tag > 10 && tag <= 100) {
    color = 'yellow';
  } else if (tag > 100) {
    color = 'green';
  } else {
    color = '';
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: 80,
      textAlign: "center"
    },
    color: color,
    key: tag
  }, tag);
  ;
}

/***/ }),

/***/ "./src/components/atoms/tableButton/index.js":
/*!***************************************************!*\
  !*** ./src/components/atoms/tableButton/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







// const confirm =(e)=> {
//     console.log(e.values);
//     Modal.confirm({
//       title: 'Confirm',
//       content: 'Bla bla ...',
//       okText: 'OK',
//       cancelText: 'Cancel',
//       onOk: ()=>{
//         console.log('okayyyyy')
//         // console.log(e)
//       },
//       onCancel: ()=>console.log('cancel')
//     });
//   }
var ButtonIcon = function ButtonIcon(props) {
  var confirm = function confirm(e) {
    antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default.a.confirm({
      title: props.modalTitle,
      //   content: 'Bla bla ...',
      okText: 'OK',
      cancelText: 'Cancel',
      onOk: function onOk() {
        return props.onSubmit();
      },
      onCancel: function onCancel() {
        return console.log('cancel');
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: props.type,
    icon: props.icon,
    shape: props.shape,
    style: props.style,
    size: props.size,
    ghost: props.ghost,
    onClick: confirm
  }, props.value);
};

ButtonIcon.defaultProps = {
  type: '',
  shape: "round",
  ghost: false
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonIcon);

/***/ }),

/***/ "./src/components/molecules/ReceiptCard/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/ReceiptCard/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var ReceiptCard = function ReceiptCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 2
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_7___default.a, {
    type: props.iconType,
    style: props.iconStyle
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 16
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
    style: {
      color: "#2699FB"
    }
  }, "Receipt No. ", props.receiptNo)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
    style: {
      textAlign: "right"
    }
  }, "\u20B9", props.price))));
};

ReceiptCard.defaultProps = {
  style: {
    width: "100%",
    marginBottom: "15px",
    boxShadow: "3px 3px 8px #ddd"
  },
  loading: false,
  iconStyle: {
    fontSize: "30px",
    color: "#2699FB"
  },
  size: "small"
};
/* harmony default export */ __webpack_exports__["default"] = (ReceiptCard);

/***/ }),

/***/ "./src/components/molecules/card/index.js":
/*!************************************************!*\
  !*** ./src/components/molecules/card/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/skeleton/style */ "antd/lib/skeleton/style");
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/skeleton */ "antd/lib/skeleton");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a.Meta;

var Card1 = function Card1(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_5___default.a, {
    size: props.size,
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_1___default.a, {
    avatar: true,
    active: true,
    loading: props.loading
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Meta, {
    avatar: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: props.iconType,
      style: props.iconStyle
    }),
    title: props.title,
    description: props.description,
    extra: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "ellipsis"
    })
  })));
};

Card1.defaultProps = {
  title: 'Title',
  description: 'This is description',
  style: {
    width: '100%'
  },
  loading: false,
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%'
  },
  size: 'small'
};
/* harmony default export */ __webpack_exports__["default"] = (Card1);

/***/ }),

/***/ "./src/components/molecules/cascader/index.js":
/*!****************************************************!*\
  !*** ./src/components/molecules/cascader/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option;

var Cascader = function Cascader(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, props.label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    showArrow: true,
    allowClear: true,
    style: props.style,
    placeholder: props.placeholder,
    optionFilterProp: "children",
    onChange: props.handleChange,
    onFocus: props.handleFocus,
    onBlur: props.handleBlur,
    filterOption: props.filterOptions,
    defaultValue: props.defaultValue
  }, props.optionArray ? props.optionArray.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
      value: data.value
    }, data.name);
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: "noData",
    disabled: true
  }, "No Data Found")));
};

Cascader.defaultProps = {
  optionArrray: [],
  placeholder: "Select One",
  style: {
    width: "100%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Cascader);

/***/ }),

/***/ "./src/components/molecules/cascader2/index.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/cascader2/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/select/style */ "antd/lib/select/style");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option;

var Cascader = function Cascader(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, props.label), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    showArrow: true,
    allowClear: true,
    style: props.style,
    placeholder: props.placeholder,
    optionFilterProp: "children",
    onChange: props.handleChange,
    onFocus: props.handleFocus,
    onBlur: props.handleBlur,
    filterOption: props.filterOptions,
    value: props.value
  }, props.optionArray ? props.optionArray.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
      value: data.value
    }, data.name);
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: "noData",
    disabled: true
  }, "No Data Found")));
};

Cascader.defaultProps = {
  optionArrray: [],
  placeholder: "Select One",
  style: {
    width: "100%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Cascader);

/***/ }),

/***/ "./src/components/molecules/conatactList/index.js":
/*!********************************************************!*\
  !*** ./src/components/molecules/conatactList/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list/style */ "antd/lib/list/style");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);



 // import InfiniteScroll from 'react-infinite-scroller';

var ContactList = function ContactList(props) {
  var ContainerStyle = {
    border: "1px solid #e8e8e8",
    borderRadius: "4px",
    overflow: "auto",
    padding: "8px 10px",
    height: "82vh"
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: ContainerStyle
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    header: props.heading,
    dataSource: props.data,
    renderItem: function renderItem(item, k) {
      return (//{/* <div onClick={() => myFunction()}> */}
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
          key: k
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item.Meta, {
          title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
            onClick: function onClick() {
              return props.onClick(item.userID);
            }
          }, item.firstName + " " + item.LastName) //{/* description={<a href='#'>{item.description}</a>} */}

        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            color: "#3B86FF"
          }
        }, item.userID.slice(0, 8))) //{/* </div> */}

      );
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactList);

/***/ }),

/***/ "./src/components/molecules/elementHeader/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/elementHeader/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logoWithMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logoWithMsg */ "./src/components/molecules/logoWithMsg/index.js");



var ElemHeader = function ElemHeader(_ref) {
  var logo = _ref.logo,
      title = _ref.title;
  var ElemHeaderStyle = {
    height: "50px",
    backgroundColor: "#030D34",
    paddingTop: "4px",
    paddingLeft: "30px",
    overflow: "hidden",
    fontSize: "12px"
  };

  if (logo === "enabled") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: ElemHeaderStyle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        float: "left",
        width: "8%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logoWithMsg__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "#CCCCCC"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        color: "#FFFFFF",
        margin: 0
      }
    }, title)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: ElemHeaderStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "left",
      fontSize: "12px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      color: "#FFFFFF"
    }
  }, title)));
};

ElemHeader.defaultProps = {
  title: " Test Title"
};
/* harmony default export */ __webpack_exports__["default"] = (ElemHeader);

/***/ }),

/***/ "./src/components/molecules/logoWithMsg/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/logoWithMsg/index.js ***!
  \*******************************************************/
/*! exports provided: Logo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Logo = function Logo(_ref) {
  var color = _ref.color,
      message = _ref.message;
  var LogoStyle = {
    textAlign: "center",
    color: color,
    lineHeight: "17px"
  };
  var imageStyle = {
    width: "100%"
  };

  if (!message) {
    return (// <div style={{"padding":"0"}}>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/icons/LogoMainWhite.png",
        style: imageStyle
      }) // </div>

    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fragment", {
    style: LogoStyle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      marginTop: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "S K I P")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      "color": "#4D4F5C"
    }
  }, message));
};
Logo.defaultProps = {
  color: "#43425D"
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/molecules/modalDetail/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/modalDetail/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _receiptDetailsCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../receiptDetailsCard */ "./src/components/molecules/receiptDetailsCard/index.js");















var ModalDetail =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(ModalDetail, _React$Component);

  function ModalDetail() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ModalDetail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(ModalDetail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "state", {
      visible: false,
      loading: true,
      modalData: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "showModal", function () {
      _this.setState({
        visible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleOk", function (e) {
      // console.log(e);
      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleCancel", function (e) {
      // console.log(e);
      _this.setState({
        visible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "getModalData", function (receiptID) {
      _this.showModal();

      _this.props.handleModalClick(receiptID, function (response) {
        _this.setState({
          modalData: response,
          loading: false
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalDetail, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, this.props.isTableModal ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        type: "primary",
        onClick: function onClick() {
          return _this2.getModalData(_this2.props.receiptNo);
        },
        value: "View"
      }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.getModalData(_this2.props.receiptNo);
        }
      }, this.props.receiptCard), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        width: "100vh",
        title: "Receipt Details",
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel
      }, !this.state.loading ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_receiptDetailsCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
        data: this.state.modalData
      }) : react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default.a, null))));
    }
  }]);

  return ModalDetail;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalDetail);

/***/ }),

/***/ "./src/components/molecules/modelButton/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/modelButton/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "antd/lib/modal/style");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _elementHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../elementHeader */ "./src/components/molecules/elementHeader/index.js");


















var ModalButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(ModalButton, _React$Component);

  function ModalButton() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, ModalButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(ModalButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "state", {
      loading: false,
      visible: false,
      normalVisible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "showModal", function (option) {
      switch (option) {
        case "visible":
          _this.setState({
            visible: true
          });

          break;

        case "normalVisible":
          _this.setState({
            normalVisible: true
          });

          break;

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleCancel", function (option) {
      switch (option) {
        case "visible":
          _this.setState({
            visible: false
          });

          break;

        case "normalVisible":
          _this.setState({
            normalVisible: false
          });

          break;

        default:
          break;
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(ModalButton, [{
    key: "handleSubmit",
    value: function handleSubmit(data) {
      var _this2 = this;

      this.props.onSubmit(data, function (data) {
        if (data.status) {
          // alert(data.message)
          antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success(data.message);

          _this2.setState({
            visible: false
          });
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.error(data.message); // alert(data.message)

        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          visible = _this$state.visible,
          normalVisible = _this$state.normalVisible,
          loading = _this$state.loading;
      return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "jsx-1569199979"
      }, this.props.isTableModal ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: function onClick(_) {
          return _this3.showModal("visible");
        },
        icon: "form",
        style: {
          marginRight: "30px"
        },
        shape: "circle",
        type: "primary",
        size: "small",
        ghost: true
      }) : this.props.normal ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: this.props.buttonValue,
        onClick: function onClick(_) {
          return _this3.showModal("normalVisible");
        }
      }) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: this.props.buttonValue,
        onClick: function onClick(_) {
          return _this3.showModal("visible");
        }
      }), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: visible,
        onOk: this.handleOk,
        title: this.props.title,
        onCancel: function onCancel(_) {
          return _this3.handleCancel("visible");
        },
        footer: null,
        style: this.props.style,
        width: this.props.width
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        style: {
          marginTop: "10px",
          marginBottom: "10px"
        },
        className: "jsx-1569199979"
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(this.props.form, {
        formData: this.props.formData,
        onSubmit: function onSubmit(data) {
          return _this3.handleSubmit(data);
        },
        onCancel: function onCancel(_) {
          return _this3.handleCancel("visible");
        },
        prefilledValues: this.props.prefilledValues,
        utilFunc: this.props.utilFunc
      }))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
        visible: normalVisible,
        onOk: this.handleOk,
        title: this.props.title,
        onCancel: function onCancel(_) {
          return _this3.handleCancel("normalVisible");
        },
        footer: null,
        style: this.props.style,
        width: this.props.width
      }, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        style: {
          marginTop: "10px",
          marginBottom: "10px"
        },
        className: "jsx-1569199979"
      }, this.props.content)), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default.a, {
        id: "1569199979"
      }, ".ant-modal-header.jsx-1569199979{padding:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ByYW5heS9EZXNrdG9wL2FsbFNoaXQvc2tpcC1mcm9udGVuZC9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvbW9kZWxCdXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hvQixBQUdrQyxxQkFDdkIiLCJmaWxlIjoiL2hvbWUvcHJhbmF5L0Rlc2t0b3AvYWxsU2hpdC9za2lwLWZyb250ZW5kL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9tb2RlbEJ1dHRvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCBCdXR0b25PbmUgZnJvbSBcIi4uLy4uL2F0b21zL2J1dHRvblwiXG5pbXBvcnQgRWxlbUhlYWRlciBmcm9tIFwiLi4vZWxlbWVudEhlYWRlclwiXG5cbmNsYXNzIE1vZGFsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgbm9ybWFsVmlzaWJsZTogZmFsc2VcbiAgfVxuXG4gIHNob3dNb2RhbCA9IG9wdGlvbiA9PiB7XG4gICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgIGNhc2UgXCJ2aXNpYmxlXCI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJub3JtYWxWaXNpYmxlXCI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5vcm1hbFZpc2libGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2FuY2VsID0gb3B0aW9uID0+IHtcbiAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgY2FzZSBcInZpc2libGVcIjpcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJub3JtYWxWaXNpYmxlXCI6XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5vcm1hbFZpc2libGU6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChkYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdChkYXRhLCBkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cykge1xuICAgICAgICAvLyBhbGVydChkYXRhLm1lc3NhZ2UpXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2aXNpYmxlOiBmYWxzZSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgICAgIC8vIGFsZXJ0KGRhdGEubWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUsIG5vcm1hbFZpc2libGUsIGxvYWRpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucHJvcHMuaXNUYWJsZU1vZGFsID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e18gPT4gdGhpcy5zaG93TW9kYWwoXCJ2aXNpYmxlXCIpfVxuICAgICAgICAgICAgaWNvbj1cImZvcm1cIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMzBweFwiIH19XG4gICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAvPlxuICAgICAgICApIDogdGhpcy5wcm9wcy5ub3JtYWwgPyAoXG4gICAgICAgICAgPEJ1dHRvbk9uZVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuYnV0dG9uVmFsdWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtfID0+IHRoaXMuc2hvd01vZGFsKFwibm9ybWFsVmlzaWJsZVwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25PbmVcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmJ1dHRvblZhbHVlfVxuICAgICAgICAgICAgb25DbGljaz17XyA9PiB0aGlzLnNob3dNb2RhbChcInZpc2libGVcIil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgey8qIDxCdXR0b25PbmUgdmFsdWU9e3RoaXMucHJvcHMuYnV0dG9uVmFsdWV9IG9uQ2xpY2s9e3RoaXMuc2hvd01vZGFsfSAvPiAqL31cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgICAgICBvbk9rPXt0aGlzLmhhbmRsZU9rfVxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIG9uQ2FuY2VsPXtfID0+IHRoaXMuaGFuZGxlQ2FuY2VsKFwidmlzaWJsZVwiKX1cbiAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5mb3JtXG4gICAgICAgICAgICAgIGZvcm1EYXRhPXt0aGlzLnByb3BzLmZvcm1EYXRhfVxuICAgICAgICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiB0aGlzLmhhbmRsZVN1Ym1pdChkYXRhKX1cbiAgICAgICAgICAgICAgb25DYW5jZWw9e18gPT4gdGhpcy5oYW5kbGVDYW5jZWwoXCJ2aXNpYmxlXCIpfVxuICAgICAgICAgICAgICBwcmVmaWxsZWRWYWx1ZXM9e3RoaXMucHJvcHMucHJlZmlsbGVkVmFsdWVzfVxuICAgICAgICAgICAgICB1dGlsRnVuYz17dGhpcy5wcm9wcy51dGlsRnVuY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdmlzaWJsZT17bm9ybWFsVmlzaWJsZX1cbiAgICAgICAgICBvbk9rPXt0aGlzLmhhbmRsZU9rfVxuICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgIG9uQ2FuY2VsPXtfID0+IHRoaXMuaGFuZGxlQ2FuY2VsKFwibm9ybWFsVmlzaWJsZVwiKX1cbiAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb250ZW50fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYW50LW1vZGFsLWhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQnV0dG9uXG4iXX0= */\n/*@ sourceURL=/home/pranay/Desktop/allShit/skip-frontend/src/components/molecules/modelButton/index.js */"));
    }
  }]);

  return ModalButton;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ModalButton);

/***/ }),

/***/ "./src/components/molecules/receiptDetailsCard/index.js":
/*!**************************************************************!*\
  !*** ./src/components/molecules/receiptDetailsCard/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/divider/style */ "antd/lib/divider/style");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var ReceiptDetailsCard = function ReceiptDetailsCard(props) {
  console.log(props.data, "main overlay card");
  var receipts = props.data[0];
  var transaction = props.data[1];
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: props.style
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, "Receipt No. ", receipts.receiptID), transaction ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, "Transaction Id. ", transaction.transactionID) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_5___default.a, {
    dashed: true
  }), transaction ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Transaction Amount: \u20B9", transaction.amount, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, "Payment mode: ", transaction.transactiontypeunfold.name, " ")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    style: {
      textAlign: "right"
    }
  }, "Date: ", transaction.date.split('T')[0] + " / " + transaction.date.split('T').pop().substr(0, 8)))) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "No Transactions")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Final amount: \u20B9", receipts.billData.finalamount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    style: {
      textAlign: "center"
    }
  }, "Net amount: \u20B9", receipts.billData.netamount)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
    style: {
      textAlign: "right"
    }
  }, "Tax amount: \u20B9", receipts.billData.taxamount))), receipts.billData.bill.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        marginTop: "4px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, item.productname)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "center"
      }
    }, "Units: ", item.units)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "right"
      }
    }, "Price: \u20B9", item.price))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "Tax Name: ", item.taxname)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "center"
      }
    }, "Percentage: ", item.percentage, "%")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "right"
      }
    }, "Tax Amount: \u20B9", item.taxAmnt))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, "Pretax: ", item.preTax)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "center"
      }
    }, "Total Pretax: ", item.totalPreTax, "%")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
      style: {
        textAlign: "right"
      }
    }, "Toal Tax: \u20B9", item.totalTax))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReceiptDetailsCard);

/***/ }),

/***/ "./src/components/molecules/reviewItems/index.js":
/*!*******************************************************!*\
  !*** ./src/components/molecules/reviewItems/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var ReviewItems = function ReviewItems(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: "100%",
      marginBottom: "10px"
    },
    title: "Purchased Items"
  }, props.itemsData.isLoaded ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, props.itemsData.response.data.length != 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, props.itemsData.response.data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "flex",
      gutter: 4
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 24
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, item.productunfold.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 12
    }, "Cost Price ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, item.cp)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 12
    }, "MRP", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, item.mrp))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", null));
  })) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "No Data")) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, "Select an Item"));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewItems);

/***/ }),

/***/ "./src/components/molecules/reviewList/index.js":
/*!******************************************************!*\
  !*** ./src/components/molecules/reviewList/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









var ContainerStyle = {
  // overflow: "auto",
  padding: "0px 10px" // height: "82vh"

};

var ReviewList = function ReviewList(props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: ContainerStyle
  }, props.data.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        width: "100%",
        marginBottom: "10px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "flex",
      gutter: 4
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 24
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", null, item.vendor)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Amount", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, item.amount))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Location ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, item.locationunfold.name))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 8
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Date ", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", null, item.date))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 24
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, item.description)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_7___default.a, {
      span: 24
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      onClick: function onClick(_) {
        return props.actions(item.purchaseID);
      }
    }, "View Items"))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewList);

/***/ }),

/***/ "./src/components/molecules/searchBar/index.js":
/*!*****************************************************!*\
  !*** ./src/components/molecules/searchBar/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a.Search;

var SearchBar = function SearchBar(_ref) {
  var type = _ref.type,
      value = _ref.value,
      width = _ref.width,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["type", "value", "width"]);

  // console.log("searchhhh",props)
  if (type == "search") {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Search, {
      style: {
        "maxWidth": width
      },
      placeholder: value,
      onChange: function onChange(e) {
        return props.handleSearch(e);
      },
      enterButton: true
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      "maxWidth": width
    },
    addonAfter: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "arrow-right"
    }),
    placeholder: value
  }));
};

SearchBar.defaultProps = {
  width: "400px",
  value: "",
  type: "search"
};
/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./src/components/organisms/ContactDetails/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/ContactDetails/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "antd/lib/card/style");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _atoms_tableButton___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/tableButton/ */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _molecules_ReceiptCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/ReceiptCard */ "./src/components/molecules/ReceiptCard/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _molecules_modalDetail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../molecules/modalDetail */ "./src/components/molecules/modalDetail/index.js");














var ContactDeatil = function ContactDeatil(props) {
  // console.log(props.customerData[0])
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      backgroundColor: "#F1F1F3",
      height: "74.6vh",
      overflow: "auto"
    }
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
    span: 14
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, props.customerData[0].firstName + " " + props.customerData[0].LastName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    style: {
      color: "#2699FB"
    }
  }, props.customerData[0].email), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    style: {
      color: "#2699FB"
    }
  }, props.customerData[0].phone)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
    span: 2,
    offset: 4
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_atoms_tableButton___WEBPACK_IMPORTED_MODULE_9__["default"], {
    icon: "form",
    shape: "square",
    type: "primary"
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, {
    span: 4
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    optionArray: props.actionData,
    placeholder: "Action"
  }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "ACTIVITY"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
    style: {
      color: "#2699FB"
    }
  }, props.date))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_4___default.a, null, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(props.receiptCardData).length !== 0 ? props.receiptCardData.map(function (data) {
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, data.time), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_molecules_modalDetail__WEBPACK_IMPORTED_MODULE_12__["default"], {
      receiptCard: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_molecules_ReceiptCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        iconType: "stock",
        price: data.amount,
        receiptNo: data.receiptID.slice(0, 8)
      }),
      receiptNo: data.receiptID,
      receiptDetails: props.receiptDetails,
      handleModalClick: props.handleModalClick
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "No Receipt Data")));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactDeatil);

/***/ }),

/***/ "./src/components/organisms/ItemPurchase/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/ItemPurchase/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _forms_createPurchase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../forms/createPurchase */ "./src/components/organisms/forms/createPurchase.js");
/* harmony import */ var _reviewPurchase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../reviewPurchase */ "./src/components/organisms/reviewPurchase/index.js");





//Imports








var style = {
  reviewModal: {
    width: "100%"
  }
};

var ItemPurchase = function ItemPurchase(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Item Purchase")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "flex",
    gutter: 4
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 1
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    optionArray: props.cascaderData[0].optionArray,
    placeholder: "All"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 4
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    optionArray: props.cascaderData[0].optionArray,
    placeholder: "Vendor"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 5
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    optionArray: props.cascaderData[0].optionArray,
    placeholder: "Master Inventory"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 12
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleSearch: props.onSearch,
    value: "Search Product Name"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "enter"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    rowSelection: {},
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.pagination)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    push: 19
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: _forms_createPurchase__WEBPACK_IMPORTED_MODULE_11__["default"],
    formData: props.formData,
    title: "Create Purchase",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk,
    utilFunc: props.utilFunc
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    normal: true,
    width: 1200,
    content: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_reviewPurchase__WEBPACK_IMPORTED_MODULE_12__["default"], {
      heading: "",
      data: props.reviewPurchaseData,
      actions: props.reviewAction,
      itemsData: props.itemsData
    }),
    title: "Review Purchase",
    buttonValue: "Review Purchase"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemPurchase);

/***/ }),

/***/ "./src/components/organisms/cascaderAndSearch/index.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/cascaderAndSearch/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");









var CascaderAndSearch = function CascaderAndSearch(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: "8"
  }, props.dataArray.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 4
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_6__["default"], {
      placeholder: data.placeholder,
      onChange: data.onChange,
      onFocus: data.onFocus,
      onBlur: data.onBlur,
      optionArray: data.optionArray,
      style: data.style
    }));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    handleSearch: props.onSearch,
    value: props.placeholder,
    type: "search"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    key: 6
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: props.buttonValue,
    color: "#2699FB"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CascaderAndSearch);

/***/ }),

/***/ "./src/components/organisms/categories/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/categories/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cascaderAndSearch */ "./src/components/organisms/cascaderAndSearch/index.js");
/* harmony import */ var _stockCadRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stockCadRow */ "./src/components/organisms/stockCadRow/index.js");
/* harmony import */ var _productTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/forms/createCategory */ "./src/components/organisms/forms/createCategory.js");





//Imports







//Code
var ItemCategory = function ItemCategory(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_stockCadRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cardData: props.cardData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dataArray: props.cascaderData,
    buttonValue: "Quick Upload",
    onSearch: props.onSearch,
    placeholder: "Search Category"
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_productTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props.pagination)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    push: 20
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: _organisms_forms_createCategory__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: "Create Item",
    buttonValue: "Create",
    onSubmit: props.onCreate
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemCategory);

/***/ }),

/***/ "./src/components/organisms/forms/AppPermissionForm.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/forms/AppPermissionForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_cascader2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/cascader2 */ "./src/components/molecules/cascader2/index.js");













var PermissionForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PermissionForm, _Component);

  function PermissionForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PermissionForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(PermissionForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PermissionForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var style = {
        btn: {
          position: "absolute",
          bottom: "0",
          width: "100%"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        gutter: 4
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_cascader2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Location",
        optionArray: this.props.formData.location,
        handleFocus: function handleFocus(_) {
          return _this.props.formData.handleFocus("location");
        },
        handleChange: function handleChange(value) {
          console.log(value, "vallllllllll");
          return _this.props.formData.handleValue(value, "location");
        },
        value: this.props.formData.value.location
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_cascader2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Employee",
        optionArray: this.props.formData.employee,
        handleFocus: function handleFocus(_) {
          return _this.props.formData.handleFocus("employee");
        },
        handleChange: function handleChange(value) {
          return _this.props.formData.handleValue(value, "employee");
        },
        value: this.props.formData.value.employee
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 4
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: "Submit",
        style: style.btn,
        onClick: this.props.formData.onClick
      })));
    }
  }]);

  return PermissionForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PermissionForm);

/***/ }),

/***/ "./src/components/organisms/forms/WebPermissionForm.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/forms/WebPermissionForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_cascader2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/cascader2 */ "./src/components/molecules/cascader2/index.js");













var PermissionForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PermissionForm, _Component);

  function PermissionForm() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PermissionForm);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(PermissionForm).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PermissionForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      var style = {
        btn: {
          position: "absolute",
          bottom: "0",
          width: "100%"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        gutter: 4
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_cascader2__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Employee",
        optionArray: this.props.formData.employee,
        value: this.props.formData.value.employee,
        handleChange: function handleChange(value) {
          return _this.props.formData.handleValue(value, "employee");
        }
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 4
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: "Submit",
        style: style.btn,
        onClick: this.props.formData.onClick
      })));
    }
  }]);

  return PermissionForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PermissionForm);

/***/ }),

/***/ "./src/components/organisms/forms/addEmploy.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/forms/addEmploy.js ***!
  \*****************************************************/
/*! exports provided: F4, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var items = ["Apply Discount", "Cancel transactions", "Change settings", "Delete or void saved items in open tickets", "Edit items, taxes & inventory", "Edit taxes in a sale", "Issue refunds", "Manage & open cash", "Manage all open tickets & Manage customers", "View all transactions", "View all Deposits", "View all reports"];
var F4 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F4, _Component);

  function F4(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F4);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F4).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F4, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {}; // console.log(values)

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15,
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          width: "48%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "firstName",
        placeholder: "First Name",
        defaultValue: values.firstName
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "right",
          width: "48%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "lastName",
        placeholder: "Last Name",
        defaultValue: values.LastName
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "userName",
        style: {
          marginBottom: 15
        },
        placeholder: "User Name",
        defaultValue: values.userName
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "email",
        style: {
          marginBottom: 15
        },
        placeholder: "Email",
        defaultValue: values.email
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "phone",
        style: {
          marginBottom: 15
        },
        placeholder: "Phone",
        defaultValue: values.phone
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "password",
        style: {
          marginBottom: 15
        },
        placeholder: "Password",
        defaultValue: values.password
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 190
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 190,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F4;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F4);

/***/ }),

/***/ "./src/components/organisms/forms/addMitem.js":
/*!****************************************************!*\
  !*** ./src/components/organisms/forms/addMitem.js ***!
  \****************************************************/
/*! exports provided: F5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F5, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Mitem Name",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "price",
        placeholder: "Price",
        defaultValue: values.price
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F5;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F5);

/***/ }),

/***/ "./src/components/organisms/forms/assignAttribute.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/forms/assignAttribute.js ***!
  \***********************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/xinformed/antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/tableButton */ "./src/components/atoms/tableButton/index.js");













var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"];
var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "loadAttributes", function () {
      _this.props.formData.assignedAttribute(_this.props.formData.attributesetID).then(function (res) {
        var attribute = [];
        res.map(function (item) {
          attribute.push(item.attributeunfold);
        });

        _this.setState({
          attribute: attribute
        });

        return attribute;
      }).then(function (_) {
        _this.setState({
          isLoaded: true
        });
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _this.state = {
      attribute: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadAttributes();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
      this.loadAttributes();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      console.log(value);
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        container: {
          marginBottom: "20px"
        },
        heading: {
          marginBottom: "2px"
        },
        text: {
          marginBottom: "5px"
        },
        removeBtn: {
          fontSize: "10px",
          height: "16px",
          width: "28px",
          marginRight: "10px"
        } // console.log(this.props.formData.attributeData, "createeeeeeeeee")

      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: style.container
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        style: style.heading
      }, "Attributes Assigned"), this.state.isLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, this.state.attribute.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          style: style.text
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          icon: "close",
          style: style.removeBtn
        }), "     ", item.name);
      })) : null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Select"], {
        field: "assignedTo",
        mode: "multiple",
        option: this.props.formData.attributeData,
        style: {
          marginBottom: 15,
          width: '50%'
        },
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F3;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ }),

/***/ "./src/components/organisms/forms/assignHsn.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/forms/assignHsn.js ***!
  \*****************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/xinformed/antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/tableButton */ "./src/components/atoms/tableButton/index.js");














var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "loadTaxCategories", function () {
      _this.props.formData.assignedtaxes(_this.props.formData.taxID).then(function (res) {
        console.log(res);
        var taxes = [];
        res.map(function (item) {
          taxes.push(item.taxesunfold);
        });

        _this.setState({
          taxes: taxes
        });

        console.log(_this.state.taxes);
        return taxes;
      }).then(function (_) {
        _this.setState({
          isLoaded: true
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      taxes: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.loadTaxCategories()
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState(), function () {});
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi; // this.loadTaxCategories()
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        container: {
          marginBottom: "20px"
        },
        heading: {
          marginBottom: "2px"
        },
        text: {
          marginBottom: "5px"
        },
        removeBtn: {
          fontSize: "10px",
          height: "16px",
          width: "28px",
          marginRight: "10px"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Select"], {
        field: "assignedTo",
        style: {
          width: 250
        },
        option: this.props.formData.taxesData
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F3;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ }),

/***/ "./src/components/organisms/forms/assignItem.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/forms/assignItem.js ***!
  \******************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message/style */ "antd/lib/message/style");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/xinformed/antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../atoms/tableButton */ "./src/components/atoms/tableButton/index.js");















var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"];

var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(F3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "loadLoacation", function () {
      _this.props.formData.employeeLocation({
        userID: _this.props.formData.employeeID
      }).then(function (res) {
        var location = [];
        res.map(function (item) {
          item.locationunfold.id = item.location;
          location.push(item.locationunfold);
        });

        _this.setState({
          location: location
        });

        return location;
      }).then(function (_) {
        _this.setState({
          isLoaded: true
        });
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _this.state = {
      location: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadLoacation();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
      this.loadLoacation();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      console.log(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = {
        container: {
          marginBottom: "20px"
        },
        heading: {
          marginBottom: "2px"
        },
        text: {
          marginBottom: "5px"
        },
        removeBtn: {
          fontSize: "10px",
          height: "16px",
          width: "28px",
          marginRight: "10px"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: style.container
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        style: style.heading
      }, "Locations Assigned"), this.state.isLoaded ? react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, this.state.location.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
          style: style.text
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onSubmit: function onSubmit() {
            return _this2.props.formData.onRemove(item.id, function (err, msg) {
              err ? antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.error(msg) : antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default.a.success(msg);
            });
          },
          icon: "close",
          modalTitle: "Sure you want to delete ?",
          style: style.removeBtn
        }), "     ", item.name);
      })) : null), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_13__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_13__["Select"], {
        field: "location",
        mode: "multiple",
        option: this.props.formData.locationData,
        style: {
          marginBottom: 15,
          width: '50%'
        },
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F3;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ }),

/***/ "./src/components/organisms/forms/assignMitem.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/forms/assignMitem.js ***!
  \*******************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed/antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../atoms/tableButton */ "./src/components/atoms/tableButton/index.js");












var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F3).call(this, props));
    _this.state = {
      mitem: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.loadMitems()
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState(), function () {});
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi; // this.loadMitems()
    } // loadMitems = () => {
    //   this.props.formData
    //     .assignedMitem(this.props.formData.modifierID)
    //     .then(res => {
    //       console.log(res)
    //       let mitem = []
    //       res.map(item => {
    //         mitem.push( (item.mitemunfold))
    //       })
    //       this.setState({ mitem: mitem })
    //       console.log(this.state.mitem)
    //       return mitem
    //     })
    //     .then(_ => {
    //       this.setState({ isLoaded: true })
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // } 

  }, {
    key: "render",
    value: function render() {
      var style = {
        container: {
          marginBottom: "20px"
        },
        heading: {
          marginBottom: "2px"
        },
        text: {
          marginBottom: "5px"
        },
        removeBtn: {
          fontSize: "10px",
          height: "16px",
          width: "28px",
          marginRight: "10px"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: style.container
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        style: style.heading
      }, "Mitems Assigned"), this.state.isLoaded ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.state.mitem.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          style: style.text
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          icon: "close",
          style: style.removeBtn
        }), "     ", item.name);
      })) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Select"], {
        field: "assignedTo",
        style: {
          width: 250
        },
        option: this.props.formData.mitemData
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F3;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ }),

/***/ "./src/components/organisms/forms/assignMproduct.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/forms/assignMproduct.js ***!
  \**********************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/xinformed/antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../atoms/tableButton */ "./src/components/atoms/tableButton/index.js");













var items = ["Biscuits", "Drinks", "Fries", "Breads", "Fries", "Breads"];
var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "loadModifier", function () {
      _this.props.formData.assignedProduct(_this.props.formData.modifierID).then(function (res) {
        var product = [];
        res.map(function (item) {
          product.push(item.productunfold);
        });

        _this.setState({
          product: product
        });

        return product;
      }).then(function (_) {
        _this.setState({
          isLoaded: true
        });
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _this.state = {
      product: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadModifier();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
      this.loadModifier();
    }
  }, {
    key: "handleChange",
    value: function handleChange(value) {
      console.log(value);
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        container: {
          marginBottom: "20px"
        },
        heading: {
          marginBottom: "2px"
        },
        text: {
          marginBottom: "5px"
        },
        removeBtn: {
          fontSize: "10px",
          height: "16px",
          width: "28px",
          marginRight: "10px"
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: style.container
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        style: style.heading
      }, "Products Assigned"), this.state.isLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, this.state.product.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          style: style.text
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          icon: "close",
          style: style.removeBtn
        }), "     ", item.name);
      })) : null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Select"], {
        field: "assignedTo",
        mode: "multiple",
        option: this.props.formData.productData,
        style: {
          marginBottom: 15,
          width: '50%'
        },
        onChange: this.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save")));
    }
  }]);

  return F3;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ }),

/***/ "./src/components/organisms/forms/createAttributeSet.js":
/*!**************************************************************!*\
  !*** ./src/components/organisms/forms/createAttributeSet.js ***!
  \**************************************************************/
/*! exports provided: F5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F5, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Attribute Set Name",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "alias",
        placeholder: "Alias",
        defaultValue: values.alias
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F5;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F5);

/***/ }),

/***/ "./src/components/organisms/forms/createAttributeValue.js":
/*!****************************************************************!*\
  !*** ./src/components/organisms/forms/createAttributeValue.js ***!
  \****************************************************************/
/*! exports provided: F5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F5, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "value",
        placeholder: "Value",
        defaultValue: values.value
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        field: "attribute",
        style: {
          width: 195
        },
        option: this.props.formData,
        defaultValue: values.attribute
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F5;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F5);

/***/ }),

/***/ "./src/components/organisms/forms/createCategory.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/forms/createCategory.js ***!
  \**********************************************************/
/*! exports provided: F6, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F6 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F6, _Component);

  function F6(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F6);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F6).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F6, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "name",
        style: {
          marginBottom: 15
        },
        placeholder: "Category name",
        defaultValue: values.name
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F6;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F6);

/***/ }),

/***/ "./src/components/organisms/forms/createItem.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/forms/createItem.js ***!
  \******************************************************/
/*! exports provided: F2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");












var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

function handleChange(value) {
  console.log("selected ".concat(value));
}

var F2 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F2, _Component);

  function F2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F2).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      value: 1
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onChange", function (e) {
      console.log("radio checked", e.target.value);

      _this.setState({
        value: e.target.value
      });
    });

    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F2, [{
    key: "handleClick",
    value: function handleClick() {
      console.log(this.formAPi.getState());
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {}; // console.log(values)

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Name*",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "code",
        placeholder: "Code*",
        defaultValue: values.code
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Select"], {
        style: {
          width: 195
        },
        field: "productcategory",
        option: this.props.formData,
        defaultValue: values.productcategory
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "barcode",
        placeholder: " Barcode*",
        defaultValue: values.barcode
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "hsncode",
        placeholder: "Hsn Code*",
        defaultValue: values.hsncode
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "price",
        placeholder: "Price*",
        defaultValue: values.price
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["RadioGroup"], {
        defaultValue: values.isMRP == 1 ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          'paddingRight': 10
        }
      }, "isMRP"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: true,
        field: "isMRP"
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: false,
        field: "isMRP"
      }, "No")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h4", null, "Is quantity floatable?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["RadioGroup"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: true,
        field: "isQuantityFloatable"
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: false,
        field: "isQuantityFloatable"
      }, "No")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "manufacturer",
        placeholder: " Manufacturer",
        defaultValue: values.manufacturer
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "brand",
        placeholder: " Brand",
        defaultValue: values.brand
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "cost",
        placeholder: " Cost",
        defaultValue: values.cost
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Text"], {
        style: {
          width: 195
        },
        field: "mrp",
        placeholder: " MRP",
        defaultValue: values.mrp
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["TextArea"], {
        field: "description",
        rows: "3",
        style: {
          marginBottom: 15
        },
        placeholder: "Item Description:",
        defaultValue: values.description
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          marginBottom: 10
        },
        type: "primary"
      }, "Upload"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F2;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F2);

/***/ }),

/***/ "./src/components/organisms/forms/createLocation.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/forms/createLocation.js ***!
  \**********************************************************/
/*! exports provided: CreateLocation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateLocation", function() { return CreateLocation; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var validate = function validate(value) {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

var CreateLocation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(CreateLocation, _Component);

  function CreateLocation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CreateLocation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(CreateLocation).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleOnChange", function (_ref) {
      var file = _ref.file,
          fileList = _ref.fileList;

      if (file.status !== 'uploading') {// console.log(file, fileList);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleFileUpload", function (event) {
      // console.log(event.target.files, "fileeeeeeeeeee")
      _this.setState({
        file: event.target.files[0]
      });
    });

    _this.state = {
      file: null
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CreateLocation, [{
    key: "handleClick",
    value: function handleClick() {
      // console.log(this.state.file, "stateeeeeeeeee")
      var formData = new FormData();
      var data = this.formAPi.getState().values;

      var details = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(data);

      console.log(details);
      formData.append('file', this.state.file); // formData.append('data', details);
      // axios.patch("http://localhost:5000/api/v1/trying/02969910-28d5-499d-873d-62b6d70b18d3", formData, {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // })
      // .then(res => { // then print response status
      //   console.log(res.statusText, "statussssssssss")
      // })

      var obj = {
        textInput: this.formAPi.getState().values,
        fileInput: formData
      };
      this.props.onSubmit(obj);
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {}; // console.log(values)

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Point of Contact Info"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "pocName",
        style: {
          marginBottom: 15
        },
        placeholder: "Name",
        defaultValue: values.pocName
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "pocEmail",
        style: {
          marginBottom: 15
        },
        placeholder: "Email",
        defaultValue: values.pocEmail
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "pocPhone",
        style: {
          marginBottom: 15
        },
        placeholder: "Phone number",
        defaultValue: values.pocPhone
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Location Info"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "name",
        style: {
          marginBottom: 15
        },
        placeholder: "Location Name",
        defaultValue: values.name
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "latitude",
        style: {
          marginBottom: 15
        },
        placeholder: "Latitude",
        defaultValue: values.latitude
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "longitude",
        style: {
          marginBottom: 15
        },
        placeholder: "Longitue",
        defaultValue: values.longitude
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        field: "address",
        style: {
          marginBottom: 15
        },
        placeholder: "Address Line",
        defaultValue: values.address
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          width: 195
        },
        field: "city",
        placeholder: "City",
        defaultValue: values.city
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          width: 195
        },
        field: "state",
        placeholder: "State",
        defaultValue: values.state
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          width: 195
        },
        field: "pincode",
        placeholder: "Pin Code",
        defaultValue: values.pincode
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        style: {
          width: 195
        },
        field: "landmark",
        placeholder: "Landmark",
        defaultValue: values.landmark
      }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["TextArea"], {
        field: "bio",
        rows: "3",
        placeholder: "Bio",
        defaultValue: values.bio
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Business Hours"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Branding"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("form", {
        onSubmit: this.submitFile
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "file",
        onChange: this.handleFileUpload
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return CreateLocation;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (CreateLocation);

/***/ }),

/***/ "./src/components/organisms/forms/createModifier.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/forms/createModifier.js ***!
  \**********************************************************/
/*! exports provided: M2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M2", function() { return M2; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

var M2 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(M2, _Component);

  function M2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, M2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(M2).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(M2, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {}; // console.log(values)

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Name",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"], {
        defaultValue: values.allowMultiple == 1 ? true : false
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          'paddingRight': 10
        }
      }, "allowMultiple"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
        value: true,
        field: "allowMultiple"
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
        value: false,
        field: "allowMultiple"
      }, "No")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return M2;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (M2);

/***/ }),

/***/ "./src/components/organisms/forms/createPurchase.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/forms/createPurchase.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_reduxHelper__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _atoms_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./../../atoms/input */ "./src/components/atoms/input/index.js");
/* harmony import */ var _atoms_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./../../atoms/select */ "./src/components/atoms/select/index.js");























var createPurchase =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_13__["default"])(createPurchase, _Component);

  function createPurchase(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["default"])(this, createPurchase);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__["default"])(createPurchase).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this), "renderItems", function (_ref) {
      var fields = _ref.fields;
      return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onClick: function onClick() {
          return fields.push({});
        }
      }, "Add Items"), fields.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
          gutter: 4,
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_19__["Field"], {
          name: "".concat(item, ".cp"),
          label: "Cost Price",
          component: _atoms_input__WEBPACK_IMPORTED_MODULE_20__["default"]
        })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_19__["Field"], {
          name: "".concat(item, ".units"),
          label: "Units",
          component: _atoms_input__WEBPACK_IMPORTED_MODULE_20__["default"]
        })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_19__["Field"], {
          name: "".concat(item, ".mrp"),
          label: "MRP",
          component: _atoms_input__WEBPACK_IMPORTED_MODULE_20__["default"]
        })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_19__["Field"], {
          name: "".concat(item, ".product"),
          option: _this.props.formData.product,
          label: "Products",
          component: _atoms_select__WEBPACK_IMPORTED_MODULE_21__["default"]
        })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
          span: 6
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          onClick: function onClick() {
            return fields.remove(index);
          }
        }, "Remove")));
      }));
    });

    _this.state = {
      renderReview: false,
      formValues: {}
    };
    _this.renderReview = _this.renderReview.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_12__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["default"])(createPurchase, [{
    key: "renderReview",
    value: function () {
      var _renderReview = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = this.formAPi.getState().values;
                _context.next = 3;
                return this.props.formAction(data);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderReview() {
        return _renderReview.apply(this, arguments);
      }

      return renderReview;
    }()
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.props.form.response);
      this.props.form.response = null;
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        margin: {
          marginBottom: "10px"
        },
        dynamicForm: {
          marginTop: "20px",
          marginBottom: "20px"
        }
      };
      console.log(this.props.form.response, "this.props.form.response");

      if (this.props.form.response) {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          className: "App"
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", null, this.props.form.response.vendor), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("h1", null, "review"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            float: "left",
            width: 192,
            marginLeft: 15
          },
          type: "primary",
          onClick: this.handleClick
        }, "Save")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Form"], {
          getApi: this.setFormApi
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Text"], {
          field: "vendor",
          placeholder: "Vendor",
          style: style.margin
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Text"], {
          field: "description",
          placeholder: "Description",
          style: style.margin
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Select"], {
          field: "location",
          placeholder: "Location",
          option: this.props.formData.location,
          style: style.margin
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Date"], {
          field: "date",
          style: style.margin
        }), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_18__["Text"], {
          field: "amount",
          placeholder: "Amount",
          style: style.margin
        })), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          style: style.dynamicForm
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("form", {
          onSubmit: this.props.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_19__["FieldArray"], {
          name: "items",
          component: this.renderItems
        }))), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
          style: {
            display: "inline-block"
          }
        }, react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            float: "left",
            width: 192
          },
          onClick: this.props.onCancel
        }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_7___default.a, {
          style: {
            float: "left",
            width: 192,
            marginLeft: 15
          },
          type: "primary",
          onClick: this.renderReview
        }, "Proceed")));
      }
    }
  }]);

  return createPurchase;
}(react__WEBPACK_IMPORTED_MODULE_15__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.formData
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    formAction: function formAction(data) {
      return dispatch(_reduxHelper__WEBPACK_IMPORTED_MODULE_17__["formData"].action(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_form__WEBPACK_IMPORTED_MODULE_19__["reduxForm"])({
  form: "itemsForm"
})(Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(createPurchase)));

/***/ }),

/***/ "./src/components/organisms/forms/createTax.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/forms/createTax.js ***!
  \*****************************************************/
/*! exports provided: F5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F5, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block",
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left",
          marginRight: 8
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Tax Name",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "percentage",
        placeholder: "Percentage",
        defaultValue: values.percentage
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        field: "taxcategory",
        style: {
          width: 195
        },
        option: this.props.formData,
        defaultValue: values.taxcategory
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F5;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F5);

/***/ }),

/***/ "./src/components/organisms/forms/createTaxCategory.js":
/*!*************************************************************!*\
  !*** ./src/components/organisms/forms/createTaxCategory.js ***!
  \*************************************************************/
/*! exports provided: F5, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");











var validate = function validate(value) {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(F5, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {}; // console.log(values)

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "name",
        placeholder: "Name",
        defaultValue: values.name
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Save"))));
    }
  }]);

  return F5;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (F5);

/***/ }),

/***/ "./src/components/organisms/forms/editPurchase.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/forms/editPurchase.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! informed */ "informed");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_10__);












var editPurchase =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(editPurchase, _Component);

  function editPurchase(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, editPurchase);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(editPurchase).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(editPurchase, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState());
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
    }
  }, {
    key: "render",
    value: function render() {
      var style = {
        margin: {
          marginBottom: "10px"
        },
        dynamicForm: {
          marginTop: "20px",
          marginBottom: "20px"
        }
      };
      var values;
      this.props.prefilledValues ? values = this.props.prefilledValues : values = {};
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "vendor",
        placeholder: "Vendor",
        style: style.margin,
        defaultValue: values.vendor
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "description",
        placeholder: "Description",
        style: style.margin,
        defaultValue: values.description
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        field: "location",
        placeholder: "Location",
        option: this.props.formData.location,
        style: style.margin,
        value: values.location
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Date"], {
        field: "date",
        style: style.margin,
        placeholder: values.date
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "amount",
        placeholder: "Amount",
        style: style.margin,
        defaultValue: values.amount
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        },
        onClick: this.props.onCancel
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: this.handleClick
      }, "Proceed")));
    }
  }]);

  return editPurchase;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (editPurchase);

/***/ }),

/***/ "./src/components/organisms/hsn/index.js":
/*!***********************************************!*\
  !*** ./src/components/organisms/hsn/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/cascaderAndSearch */ "./src/components/organisms/cascaderAndSearch/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/forms/createTaxCategory */ "./src/components/organisms/forms/createTaxCategory.js");











var HSNTemplate = function HSNTemplate(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSearch: props.onSearch,
    placeholder: "Search Name",
    dataArray: props.cascaderData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props.pagination)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    push: 12
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: _organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_9__["default"],
    formData: props.formData,
    title: "Create HSN",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HSNTemplate);

/***/ }),

/***/ "./src/components/organisms/items/index.js":
/*!*************************************************!*\
  !*** ./src/components/organisms/items/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cascaderAndSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cascaderAndSearch */ "./src/components/organisms/cascaderAndSearch/index.js");
/* harmony import */ var _stockCadRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stockCadRow */ "./src/components/organisms/stockCadRow/index.js");
/* harmony import */ var _productTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../organisms/forms/createItem */ "./src/components/organisms/forms/createItem.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.js */ "./src/components/organisms/items/styles.js");














 //Code

var ItemTemplate = function ItemTemplate(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "row-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_stockCadRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    cardData: props.cardData
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "row-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dataArray: props.cascaderData,
    buttonValue: "Quick Upload",
    onSearch: props.onSearch,
    placeholder: "Search Name"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "row-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_productTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props.pagination)
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash) + " " + "row-container"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    as: "/dashboard/purchase",
    href: "/dashboard/purchase"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Purchase"
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Modify/Shift"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    push: 12
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    form: _organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_12__["default"],
    formData: props.formData,
    title: "Create Item",
    buttonValue: "Create",
    onSubmit: props.onCreate
  })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: _styles_js__WEBPACK_IMPORTED_MODULE_14__["default"].__hash
  }, _styles_js__WEBPACK_IMPORTED_MODULE_14__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemTemplate);

/***/ }),

/***/ "./src/components/organisms/items/styles.js":
/*!**************************************************!*\
  !*** ./src/components/organisms/items/styles.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".row-container.jsx-1118324863{margin-bottom:20px;}");

_defaultExport.__hash = "1118324863";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./src/components/organisms/modifiers/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/modifiers/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createModifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../organisms/forms/createModifier */ "./src/components/organisms/forms/createModifier.js");













//Code
var ModifierTemplate = function ModifierTemplate(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      "overflow": "hidden"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    optionArray: props.cascaderData.optionArray,
    placeholder: props.cascaderData.placeholder
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleSearch: props.onSearch,
    value: "Search"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3,
    push: 9
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: "Create Modifier Set"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.pagination)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    push: 19
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    form: _organisms_forms_createModifier__WEBPACK_IMPORTED_MODULE_11__["default"],
    title: "Create Modifier",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModifierTemplate);

/***/ }),

/***/ "./src/components/organisms/permissionSwitch/index.js":
/*!************************************************************!*\
  !*** ./src/components/organisms/permissionSwitch/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/switch/style */ "antd/lib/switch/style");
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/switch */ "antd/lib/switch");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







var style = {
  container: {
    paddingBottom: "6px"
  },
  switchContainer: {
    textAlign: "right"
  }
};

var app = function app(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: style.container
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: 4,
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 14
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", null, props.role.charAt(0).toUpperCase() + props.role.slice(1))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 10
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: style.switchContainer
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultChecked: props.defaultChecked,
    onChange: props.onChange
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/components/organisms/productTable/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/productTable/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "antd/lib/table/style");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ProductTable = function ProductTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    columns: props.columns,
    dataSource: props.data,
    rowSelection: props.rowSelection,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props.pagination)
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductTable);

/***/ }),

/***/ "./src/components/organisms/reviewPurchase/index.js":
/*!**********************************************************!*\
  !*** ./src/components/organisms/reviewPurchase/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _molecules_reviewList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../molecules/reviewList */ "./src/components/molecules/reviewList/index.js");
/* harmony import */ var _molecules_reviewItems__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../molecules/reviewItems */ "./src/components/molecules/reviewItems/index.js");













var reviewPurchase =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(reviewPurchase, _Component);

  function reviewPurchase() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, reviewPurchase);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(reviewPurchase).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(reviewPurchase, [{
    key: "render",
    value: function render() {
      console.log(this.props.itemsData);
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: "flex",
        gutter: 4
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 10
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_reviewList__WEBPACK_IMPORTED_MODULE_10__["default"], {
        heading: this.props.heading,
        data: this.props.data,
        actions: this.props.actions
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
        span: 14
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_reviewItems__WEBPACK_IMPORTED_MODULE_11__["default"], {
        itemsData: this.props.itemsData
      })));
    }
  }]);

  return reviewPurchase;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (reviewPurchase);

/***/ }),

/***/ "./src/components/organisms/sidePanel/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/sidePanel/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "antd/lib/divider/style");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "antd/lib/menu/style");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/components/organisms/sidePanel/styles.js");








var SubMenu = antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.SubMenu;
var style = {
  height: "calc(100vh - 50px)",
  width: "210px",
  padding: "20px 0 0 0"
};

var SidePanel = function SidePanel(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    theme: "light",
    style: style,
    mode: "inline",
    defaultSelectedKeys: [props.selected]
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      margin: "25px 0 50px 24px"
    },
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, "Hi ", props.user, "!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "home"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    as: "/dashboard/home",
    href: "/dashboard?page=home"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "HOME")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubMenu, {
    key: "masterData",
    title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
    }, "MASTER DATA")))
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "prodcuts"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=products"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "PRODUCTS"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "taxes"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=taxes"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "TAXES"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "modifiers"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=modifiers"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "MODIFIERS"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "attributes"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=attributes"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "ATTRIBUTES"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "discounts"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=discounts"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "DISCOUNTS")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "employees"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=employees"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "EMPLOYEES")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "cutomers"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=customers"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "CUSTOMERS")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "transactions"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=transactions"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "TRANSACTIONS")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubMenu, {
    key: "setting",
    title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
    }, "SETTING")))
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "account"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "ACCOUNT")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "personal_info"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "PERSONAL INFO")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "email_notif"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "EMAIL NOTIFICATION"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubMenu, {
    key: "business",
    title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
    }, "BUSINESS")))
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "locations"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=locations"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "LOCATIONS"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(SubMenu, {
    key: "permissions",
    title: react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash)
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
      className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
    }, "PERMISSIONS")))
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "permissions-web"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=permissions-web"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, " WEB PERMISSIONS"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "permissions-app"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=permissions-app"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "APP PERMISSIONS")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "purchase"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/dashboard?page=purchase"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "PURCHASE"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "receipts"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "RECEIPTS")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "devices"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "DEVICES"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "settings"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "SUPPORT")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "logout"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: '/logout'
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-".concat(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "sidebar-option"
  }, "LOGOUT")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: _styles__WEBPACK_IMPORTED_MODULE_7__["default"].__hash
  }, _styles__WEBPACK_IMPORTED_MODULE_7__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (SidePanel);

/***/ }),

/***/ "./src/components/organisms/sidePanel/styles.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/sidePanel/styles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".sidebar-option.jsx-3983810376{font-size:12px;}.ant-menu-item.jsx-3983810376{height:20px;}");

_defaultExport.__hash = "3983810376";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./src/components/organisms/stockCadRow/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/stockCadRow/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/spin/style */ "antd/lib/spin/style");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _molecules_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/card */ "./src/components/molecules/card/index.js");









var StockCard = function StockCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "flex",
    justify: "start",
    gutter: 3
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: "bank",
    iconStyle: {
      fontSize: "30px",
      marginTop: "30%",
      color: "#F88998"
    },
    title: props.cardData.outofstock ? props.cardData.outofstock : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "small"
    }),
    description: "Items out of stock"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: "shopping-cart",
    iconStyle: {
      fontSize: "30px",
      marginTop: "30%",
      color: "#FFB353"
    },
    title: props.cardData.alertstock ? props.cardData.alertstock : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "small"
    }),
    description: "Items on Low Stock Alert"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_molecules_card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: "rise",
    iconStyle: {
      fontSize: "30px",
      marginTop: "30%",
      color: "#69E4A6"
    },
    title: props.cardData.instock ? props.cardData.instock : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "small"
    }),
    description: "Items in stock"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (StockCard);

/***/ }),

/***/ "./src/components/organisms/taxCategory/index.js":
/*!*******************************************************!*\
  !*** ./src/components/organisms/taxCategory/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/cascaderAndSearch */ "./src/components/organisms/cascaderAndSearch/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/forms/createTaxCategory */ "./src/components/organisms/forms/createTaxCategory.js");











var TaxesCategory = function TaxesCategory(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSearch: props.onSearch,
    placeholder: "Search Name",
    dataArray: props.cascaderData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props.pagination),
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    push: 12
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: props.form,
    formData: props.formData,
    title: props.title,
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxesCategory);

/***/ }),

/***/ "./src/components/organisms/taxes/index.js":
/*!*************************************************!*\
  !*** ./src/components/organisms/taxes/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../organisms/cascaderAndSearch */ "./src/components/organisms/cascaderAndSearch/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../organisms/forms/createTax */ "./src/components/organisms/forms/createTax.js");











var TaxesTemplate = function TaxesTemplate(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_cascaderAndSearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSearch: props.onSearch,
    placeholder: "Search Name",
    dataArray: props.cascaderData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, props.pagination)
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    push: 12
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    form: _organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_9__["default"],
    formData: props.formData,
    title: "Create Tax",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TaxesTemplate);

/***/ }),

/***/ "./src/components/organisms/transactions/index.js":
/*!********************************************************!*\
  !*** ./src/components/organisms/transactions/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createModifier__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../organisms/forms/createModifier */ "./src/components/organisms/forms/createModifier.js");













var Transactions = function Transactions(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      "overflow": "hidden"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 3
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleSearch: props.onSearch,
    value: "TransactionID"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_8__["default"], {
    columns: props.columns,
    data: props.columnData,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.pagination)
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Transactions);

/***/ }),

/***/ "./src/components/templates/CustomerDirectory/index.js":
/*!*************************************************************!*\
  !*** ./src/components/templates/CustomerDirectory/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _organisms_ContactDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/ContactDetails */ "./src/components/organisms/ContactDetails/index.js");
/* harmony import */ var _molecules_conatactList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/conatactList */ "./src/components/molecules/conatactList/index.js");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");













var CustomerDirectory = function CustomerDirectory(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 8
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_conatactList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: props.onClick,
    heading: "CONTACT LIST",
    data: props.listData,
    customerId: "xx12xx"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 16
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 4
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 8
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    handleSearch: props.onSearch,
    value: "Search Name"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 4
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_9__["default"], {
    optionArray: props.filterArry,
    placeholder: "Filter"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Import/Export",
    width: "100%"
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    value: "Create",
    width: "100%"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", null), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(props.customerData).length !== 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_ContactDetails__WEBPACK_IMPORTED_MODULE_7__["default"], {
    customerData: props.customerData,
    handleModalClick: props.handleModalClick,
    actionData: props.actionData,
    date: props.date,
    receiptCardData: props.receiptCardData,
    receiptDetails: props.receiptDetails
  }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null)));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomerDirectory);

/***/ }),

/***/ "./src/components/templates/dashboard/index.js":
/*!*****************************************************!*\
  !*** ./src/components/templates/dashboard/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _molecules_elementHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules/elementHeader */ "./src/components/molecules/elementHeader/index.js");
/* harmony import */ var _organisms_sidePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/sidePanel */ "./src/components/organisms/sidePanel/index.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.js */ "./src/components/templates/dashboard/styles.js");






var Dashboard = function Dashboard(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_elementHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {
    logo: "enabled",
    title: "Business Details"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "content-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "sidebar"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_organisms_sidePanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: props.user
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-".concat(_styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "content"
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"].__hash
  }, _styles_js__WEBPACK_IMPORTED_MODULE_4__["default"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/components/templates/dashboard/styles.js":
/*!******************************************************!*\
  !*** ./src/components/templates/dashboard/styles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".dashboard.jsx-1008859389{min-height:100vh;}.header.jsx-1008859389{position:fixed;top:0;left:0;width:100%;height:50px;z-index:50;}.content-wrapper.jsx-1008859389{min-height:calc(100vh - 50px);position:absolute;top:50px;width:100%;}.content.jsx-1008859389{position:absolute;right:0;width:calc(100% - 210px);min-height:calc(100vh - 50px);display:inline-block;padding:10px 20px;}.sidebar.jsx-1008859389{position:fixed;top:50px;width:210px;height:calc(100vh - 50px);overflow-y:scroll;overflow-x:hidden;box-shadow:3px 3px 8px #ddd;}.sidebar.jsx-1008859389::-webkit-scrollbar{width:6px;}.sidebar.jsx-1008859389::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px;}.sidebar.jsx-1008859389::-webkit-scrollbar-thumb{background:#fff;border-radius:10px;}.sidebar.jsx-1008859389::-webkit-scrollbar-thumb.jsx-1008859389:hover{background:#fff;}");

_defaultExport.__hash = "1008859389";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./src/components/templates/employee/index.js":
/*!****************************************************!*\
  !*** ./src/components/templates/employee/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/forms/addEmploy */ "./src/components/organisms/forms/addEmploy.js");












var Employee = function Employee(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "EMPLOYEES")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.pagination),
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: _organisms_forms_addEmploy__WEBPACK_IMPORTED_MODULE_10__["default"],
    formData: props.formData,
    title: "Create Employee",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Employee);

/***/ }),

/***/ "./src/components/templates/locations/index.js":
/*!*****************************************************!*\
  !*** ./src/components/templates/locations/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/searchBar */ "./src/components/molecules/searchBar/index.js");
/* harmony import */ var _organisms_productTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../organisms/productTable */ "./src/components/organisms/productTable/index.js");
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../atoms/button */ "./src/components/atoms/button/index.js");
/* harmony import */ var _molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _organisms_forms_createLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../organisms/forms/createLocation */ "./src/components/organisms/forms/createLocation.js");












var LocationTemplate = function LocationTemplate(props) {
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("b", null, "Locations"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    span: 6,
    push: 16
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: "Search Name",
    handleSearch: props.onSearch,
    kucaur: "kakk"
  }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_organisms_productTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.pagination),
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_molecules_modelButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    form: _organisms_forms_createLocation__WEBPACK_IMPORTED_MODULE_10__["default"],
    title: "Create Location",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationTemplate);

/***/ }),

/***/ "./src/components/templates/notAuthorized/index.js":
/*!*********************************************************!*\
  !*** ./src/components/templates/notAuthorized/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var style = {
  textContainer: {
    height: "100%",
    width: "100%"
  },
  text: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    width: "400px",
    height: "400px",
    display: "table"
  },
  image: {
    height: "120px",
    width: "auto"
  },
  card: {
    display: "table-cell",
    verticalAlign: "middle",
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    borderRadius: "6px"
  }
};

var app = function app() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.textContainer
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.text
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.card
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/icons/accessdenied.png",
    alt: "Access Denied",
    style: style.image
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, " You are not authorized"))));
};

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/components/templates/permission/index.js":
/*!******************************************************!*\
  !*** ./src/components/templates/permission/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _organisms_permissionSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../organisms/permissionSwitch */ "./src/components/organisms/permissionSwitch/index.js");
/* harmony import */ var _organisms_forms_AppPermissionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms/forms/AppPermissionForm */ "./src/components/organisms/forms/AppPermissionForm.js");
/* harmony import */ var _organisms_forms_WebPermissionForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisms/forms/WebPermissionForm */ "./src/components/organisms/forms/WebPermissionForm.js");




var style = {
  container: {
    padding: "20px 180px"
  }
};

var app = function app(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.type === "app" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_forms_AppPermissionForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    formData: props.formData
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_forms_WebPermissionForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formData: props.formData
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style.container
  }, console.log("rule", props.rule), props.rules ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, console.log(props.rule), props.rules.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_organisms_permissionSwitch__WEBPACK_IMPORTED_MODULE_1__["default"], {
      role: item.role,
      defaultChecked: item.permission,
      onChange: props.type === "app" ? function (checked) {
        return props.onChange(checked, item.roleID, item.user, item.location);
      } : function (checked) {
        return props.onChange(checked, item.roleID, item.user, item.business);
      }
    });
  })) : null));
};

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ }),

/***/ "./src/reduxHelper/index.js":
/*!**********************************!*\
  !*** ./src/reduxHelper/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _reduxCodeGenerator = _interopRequireDefault(__webpack_require__(/*! ../utils/reduxCodeGenerator */ "./src/utils/reduxCodeGenerator/index.js"));

var _api = _interopRequireDefault(__webpack_require__(/*! ../api */ "./src/api/index.js"));

var tempObject = {};
(0, _keys.default)(_api.default).map(function (expName) {
  (0, _keys.default)(_api.default[expName]).map(function (childexportName) {
    tempObject[childexportName] = (0, _reduxCodeGenerator.default)(childexportName, _api.default[expName][childexportName]);
  });
});
module.exports = tempObject;

/***/ }),

/***/ "./src/utils/auth/index.js":
/*!*********************************!*\
  !*** ./src/utils/auth/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);




var Auth = function Auth(_ref) {
  var auth = _ref.auth,
      param = _ref.param,
      yes = _ref.yes,
      no = _ref.no;
  var rules = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(auth.response);
  console.log(rules);
  if (rules.data.permissions[param]) return yes;else return no;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Auth));

/***/ }),

/***/ "./src/utils/reduxCodeGenerator/index.js":
/*!***********************************************!*\
  !*** ./src/utils/reduxCodeGenerator/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");



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
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          loading: true
        });

      case actionSuccess:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          loading: false,
          isLoaded: true,
          response: action.data !== undefined ? action.data : null
        });

      case actionFailure:
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
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

/***/ "./src/utils/reduxFormField/index.js":
/*!*******************************************!*\
  !*** ./src/utils/reduxFormField/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var reduxFormField = function reduxFormField(Component) {
  return function (_ref) {
    var input = _ref.input,
        type = _ref.type,
        option = _ref.option,
        label = _ref.label,
        onBlur = _ref.onBlur,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, input, {
      type: type,
      option: option,
      label: label,
      onBlur: onBlur
    })), touched && error && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, error));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (reduxFormField);

/***/ }),

/***/ "./src/utils/token/getToken.js":
/*!*************************************!*\
  !*** ./src/utils/token/getToken.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_0__);


var getToken = function getToken() {
  if (react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.load('admin-api-key')) return react_cookies__WEBPACK_IMPORTED_MODULE_0___default.a.load('admin-api-key');else return localStorage.getItem("admin-api-key");
};

/* harmony default export */ __webpack_exports__["default"] = (getToken);

/***/ }),

/***/ "./src/utils/token/getTokenData.js":
/*!*****************************************!*\
  !*** ./src/utils/token/getTokenData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getToken */ "./src/utils/token/getToken.js");


var jwtDecode = __webpack_require__(/*! jwt-decode */ "jwt-decode");

var getTokenData = function getTokenData() {
  var token = Object(_getToken__WEBPACK_IMPORTED_MODULE_0__["default"])();
  console.log("token", token);
  return jwtDecode(token);
};

/* harmony default export */ __webpack_exports__["default"] = (getTokenData);

/***/ }),

/***/ "./src/utils/token/index.js":
/*!**********************************!*\
  !*** ./src/utils/token/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setToken */ "./src/utils/token/setToken.js");
/* harmony import */ var _removeToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeToken */ "./src/utils/token/removeToken.js");
/* harmony import */ var _setTokenStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setTokenStorage */ "./src/utils/token/setTokenStorage.js");
/* harmony import */ var _getToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getToken */ "./src/utils/token/getToken.js");
/* harmony import */ var _getTokenData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getTokenData */ "./src/utils/token/getTokenData.js");
/* harmony import */ var _setCookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCookie */ "./src/utils/token/setCookie.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  set: _setToken__WEBPACK_IMPORTED_MODULE_0__["default"],
  remove: _removeToken__WEBPACK_IMPORTED_MODULE_1__["default"],
  setFromStorage: _setTokenStorage__WEBPACK_IMPORTED_MODULE_2__["default"],
  getToken: _getToken__WEBPACK_IMPORTED_MODULE_3__["default"],
  getTokenData: _getTokenData__WEBPACK_IMPORTED_MODULE_4__["default"],
  setTokenCookie: _setCookie__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/utils/token/removeToken.js":
/*!****************************************!*\
  !*** ./src/utils/token/removeToken.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_1__);



var removeToken = function removeToken() {
  localStorage.removeItem("admin-api-key");
  react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.remove("admin-api-key");
  delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-api-key"];
};

/* harmony default export */ __webpack_exports__["default"] = (removeToken);

/***/ }),

/***/ "./src/utils/token/setCookie.js":
/*!**************************************!*\
  !*** ./src/utils/token/setCookie.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_1__);



var setTokenCookie = function setTokenCookie(token) {
  var expiryHours = 12; // const expires = new Date()
  // expires.setTime(expires.getTime() + (expiryHours * 60 * 60 * 1000))

  react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.save("admin-api-key", token);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ __webpack_exports__["default"] = (setTokenCookie);

/***/ }),

/***/ "./src/utils/token/setToken.js":
/*!*************************************!*\
  !*** ./src/utils/token/setToken.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


var setToken = function setToken(token) {
  localStorage.setItem("admin-api-key", token);
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ __webpack_exports__["default"] = (setToken);

/***/ }),

/***/ "./src/utils/token/setTokenStorage.js":
/*!********************************************!*\
  !*** ./src/utils/token/setTokenStorage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookies */ "react-cookies");
/* harmony import */ var react_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookies__WEBPACK_IMPORTED_MODULE_1__);



var setTokenFromStorage = function setTokenFromStorage() {
  var token;
  if (react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.load('admin-api-key')) token = react_cookies__WEBPACK_IMPORTED_MODULE_1___default.a.load('admin-api-key');else token = localStorage.getItem("admin-api-key");
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["x-api-key"] = token;
};

/* harmony default export */ __webpack_exports__["default"] = (setTokenFromStorage);

/***/ }),

/***/ "./src/utils/wrappers/index.js":
/*!*************************************!*\
  !*** ./src/utils/wrappers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_reduxHelper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_atoms_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../token */ "./src/utils/token/index.js");










function init(WrappedComponent) {
  var App =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

    function App(props) {
      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

      return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var tokenData = _token__WEBPACK_IMPORTED_MODULE_9__["default"].getTokenData();
        var userID = tokenData.data.user[0].userID;
        var businessID = tokenData.data.business; // load user if not in state

        if (!this.props.user.response) {
          this.props.getUser(userID).then(function (user) {}).catch(function (err) {});
        } // load business if not in state


        if (!this.props.business.response) {
          this.props.getBusiness(businessID).then(function (business) {}).catch(function (err) {});
        }

        if (!this.props.auth.isLoaded) {
          this.props.getAuthData();
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.props.user.isLoaded && this.props.business.isLoaded) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WrappedComponent, this.props);
        } else {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_atoms_loading__WEBPACK_IMPORTED_MODULE_8__["default"], null);
        }
      }
    }]);

    return App;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  var mapStateToProps = function mapStateToProps(state) {
    return {
      user: state.user,
      business: state.businesses,
      auth: state.auth
    };
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      getUser: function getUser(ID) {
        return dispatch(_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["user"].action(ID));
      },
      getBusiness: function getBusiness(userID) {
        return dispatch(_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["businesses"].action(userID));
      },
      getAuthData: function getAuthData() {
        return dispatch(_reduxHelper__WEBPACK_IMPORTED_MODULE_7__["auth"].action());
      }
    };
  };

  return Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(App);
}

/***/ }),

/***/ "./src/utils/xinformed/antdesignInformed.js":
/*!**************************************************!*\
  !*** ./src/utils/xinformed/antdesignInformed.js ***!
  \**************************************************/
/*! exports provided: Asearch, Form, Text_type1, Check, O, Tarea, Sel, R, RG, Date, useFormState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Asearch", function() { return Asearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text_type1", function() { return Text_type1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return Check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarea", function() { return Tarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sel", function() { return Sel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RG", function() { return RG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox/style */ "antd/lib/checkbox/style");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/radio/style */ "antd/lib/radio/style");
/* harmony import */ var antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/radio */ "antd/lib/radio");
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/date-picker/style */ "antd/lib/date-picker/style");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! informed */ "informed");
/* harmony import */ var informed__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(informed__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return informed__WEBPACK_IMPORTED_MODULE_17__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormState", function() { return informed__WEBPACK_IMPORTED_MODULE_17__["useFormState"]; });



















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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref, ["fieldState", "fieldApi"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_16___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__["default"])({}, props, {
    fieldState: fieldState,
    onChange: function onChange(date, dateString) {
      return setValue(dateString);
    }
  })));
});
var Text_type1 = Object(informed__WEBPACK_IMPORTED_MODULE_17__["asField"])(function (_ref2) {
  var fieldState = _ref2.fieldState,
      fieldApi = _ref2.fieldApi,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref2, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange = props.onChange,
      _onBlur = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_11___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__["default"])({}, rest, {
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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Asearch, _React$Component);

  function Asearch() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Asearch);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Asearch).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Asearch, [{
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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref3, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange2 = props.onChange,
      _onBlur2 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_radio__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__["default"])({
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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref4, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;
  props.field = props.name;

  var _onChange3 = props.onChange,
      _onBlur3 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__["default"])({}, rest, {
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
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(_ref5, ["fieldState", "fieldApi"]);

  var value = fieldState.value;
  var setValue = fieldApi.setValue,
      setTouched = fieldApi.setTouched;

  var _onChange4 = props.onChange,
      _onBlur4 = props.onBlur,
      initialValue = props.initialValue,
      forwardedRef = props.forwardedRef,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_15__["default"])(props, ["onChange", "onBlur", "initialValue", "forwardedRef"]);

  return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(TextArea, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_14__["default"])({}, rest, {
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
  var style = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.style, selectStyle);

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

/***/ "./src/utils/xinformed/index.js":
/*!**************************************!*\
  !*** ./src/utils/xinformed/index.js ***!
  \**************************************/
/*! exports provided: Text, Checkbox, Form, TextArea, Select, Option, Radio, RadioGroup, Date, useFormState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antdesignInformed */ "./src/utils/xinformed/antdesignInformed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Text_type1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Check"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Tarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Sel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["O"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["RG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["Date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormState", function() { return _antdesignInformed__WEBPACK_IMPORTED_MODULE_0__["useFormState"]; });




/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/dashboard/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pranay/Desktop/allShit/skip-frontend/pages/dashboard/index.js */"./pages/dashboard/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/card/style":
/*!**************************************!*\
  !*** external "antd/lib/card/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card/style");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/checkbox/style":
/*!******************************************!*\
  !*** external "antd/lib/checkbox/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/date-picker/style":
/*!*********************************************!*\
  !*** external "antd/lib/date-picker/style" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style":
/*!*****************************************!*\
  !*** external "antd/lib/divider/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style":
/*!**************************************!*\
  !*** external "antd/lib/icon/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/list/style":
/*!**************************************!*\
  !*** external "antd/lib/list/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list/style");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style":
/*!**************************************!*\
  !*** external "antd/lib/menu/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/message/style":
/*!*****************************************!*\
  !*** external "antd/lib/message/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message/style");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/modal/style":
/*!***************************************!*\
  !*** external "antd/lib/modal/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

/***/ }),

/***/ "antd/lib/radio":
/*!*********************************!*\
  !*** external "antd/lib/radio" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "antd/lib/radio/style":
/*!***************************************!*\
  !*** external "antd/lib/radio/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/select/style":
/*!****************************************!*\
  !*** external "antd/lib/select/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "antd/lib/skeleton":
/*!************************************!*\
  !*** external "antd/lib/skeleton" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ "antd/lib/skeleton/style":
/*!******************************************!*\
  !*** external "antd/lib/skeleton/style" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/skeleton/style");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/spin/style":
/*!**************************************!*\
  !*** external "antd/lib/spin/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin/style");

/***/ }),

/***/ "antd/lib/switch":
/*!**********************************!*\
  !*** external "antd/lib/switch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "antd/lib/switch/style":
/*!****************************************!*\
  !*** external "antd/lib/switch/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch/style");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "antd/lib/table/style":
/*!***************************************!*\
  !*** external "antd/lib/table/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style");

/***/ }),

/***/ "antd/lib/tabs":
/*!********************************!*\
  !*** external "antd/lib/tabs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),

/***/ "antd/lib/tabs/style":
/*!**************************************!*\
  !*** external "antd/lib/tabs/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs/style");

/***/ }),

/***/ "antd/lib/tag":
/*!*******************************!*\
  !*** external "antd/lib/tag" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "antd/lib/tag/style":
/*!*************************************!*\
  !*** external "antd/lib/tag/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "informed":
/*!***************************!*\
  !*** external "informed" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("informed");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-cookies":
/*!********************************!*\
  !*** external "react-cookies" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookies");

/***/ }),

/***/ "react-highcharts":
/*!***********************************!*\
  !*** external "react-highcharts" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-highcharts");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map