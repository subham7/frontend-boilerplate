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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator;

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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

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

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/lib/with-redux-store */ "./src/lib/with-redux-store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);










var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
        store: reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_5___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp));

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

/***/ "./src/lib/with-redux-store.js":
/*!*************************************!*\
  !*** ./src/lib/with-redux-store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./src/store/index.js");











var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AppWithRedux, _React$Component);

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps(appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppWithRedux);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)
  );
});

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _reduxHelper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxHelper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-form */ "redux-form");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_3__);


 // Redux-Form


var reducers = {
  // Redux-form
  form: redux_form__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};

_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_reduxHelper__WEBPACK_IMPORTED_MODULE_2__).map(function (functionName) {
  reducers[functionName] = _reduxHelper__WEBPACK_IMPORTED_MODULE_2__[functionName].reducer;
});

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(reducers));

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

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");




var exampleInitialState = {}; // export const actionTypes = {
//     TICK: 'TICK',
//     INCREMENT: 'INCREMENT',
//     DECREMENT: 'DECREMENT',
//     RESET: 'RESET'
//   }
// export const reducer = (state = exampleInitialState, action) => {
//     switch (action.type) {
//       case actionTypes.TICK:
//         return Object.assign({}, state, {
//           lastUpdate: action.ts,
//           light: !!action.light
//         })
//       case actionTypes.INCREMENT:
//         return Object.assign({}, state, {
//           count: state.count + 1
//         })
//       case actionTypes.DECREMENT:
//         return Object.assign({}, state, {
//           count: state.count - 1
//         })
//       case actionTypes.RESET:
//         return Object.assign({}, state, {
//           count: exampleInitialState.count
//         })
//       default:
//         return state
//     }
//   }
// export const serverRenderClock = isServer => dispatch => {
//     return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
//   }
//   export const startClock = dispatch => {
//     return setInterval(() => {
//       // Dispatch `TICK` every 1 second
//       dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//     }, 1000)
//   }
//   export const incrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.INCREMENT })
//   }
//   export const decrementCount = () => dispatch => {
//     return dispatch({ type: actionTypes.DECREMENT })
//   }
//   export const resetCount = () => dispatch => {
//     return dispatch({ type: actionTypes.RESET })
//   }

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
}

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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map