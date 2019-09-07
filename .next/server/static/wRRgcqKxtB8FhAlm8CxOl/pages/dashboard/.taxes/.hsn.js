module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
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

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

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

/***/ "1Wvg":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select/style");

/***/ }),

/***/ "1XP0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

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

// EXTERNAL MODULE: external "antd/lib/row/style"
var style_ = __webpack_require__("oOiI");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col/style"
var col_style_ = __webpack_require__("Bg3c");

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./src/components/organisms/cascaderAndSearch/index.js
var cascaderAndSearch = __webpack_require__("REst");

// EXTERNAL MODULE: ./src/components/organisms/productTable/index.js
var productTable = __webpack_require__("Algq");

// EXTERNAL MODULE: ./src/components/molecules/modelButton/index.js
var modelButton = __webpack_require__("A9gk");

// EXTERNAL MODULE: ./src/components/organisms/forms/createTaxCategory.js
var createTaxCategory = __webpack_require__("JvNI");

// CONCATENATED MODULE: ./src/components/organisms/hsn/index.js











var hsn_HSNTemplate = function HSNTemplate(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(cascaderAndSearch["a" /* default */], {
    onSearch: props.onSearch,
    placeholder: "Search Name",
    dataArray: props.cascaderData
  }), external_react_default.a.createElement(productTable["a" /* default */], {
    rowSelection: props.rowSelection,
    columns: props.columns,
    data: props.columnData,
    pagination: Object(objectSpread["a" /* default */])({}, props.pagination)
  }), external_react_default.a.createElement(row_default.a, null, external_react_default.a.createElement(col_default.a, {
    span: 3,
    push: 12
  }, external_react_default.a.createElement(modelButton["a" /* default */], {
    form: createTaxCategory["a" /* default */],
    formData: props.formData,
    title: "Create HSN",
    buttonValue: "Create",
    onSubmit: props.onCreate,
    handleSubmitOk: props.handleSubmitOk
  }))));
};

/* harmony default export */ var hsn = (hsn_HSNTemplate);
// EXTERNAL MODULE: ./pages/dashboard/.taxes/.hsn/hsn.data.js
var hsn_data = __webpack_require__("lEtj");

// EXTERNAL MODULE: ./pagesData/item.data.js
var item_data = __webpack_require__("OvHP");

// EXTERNAL MODULE: ./src/reduxHelper/index.js
var reduxHelper = __webpack_require__("ErRJ");

// EXTERNAL MODULE: external "uuid/v4"
var v4_ = __webpack_require__("xg6E");

// CONCATENATED MODULE: ./pages/dashboard/.taxes/.hsn/index.js














var _hsn_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, App);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).call(this, props));
    _this.state = {
      hsnTableData: [],
      filteredTableData: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(App, [{
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
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(hsn, {
          rowSelection: {},
          cascaderData: item_data["a" /* itemData */].cascaderData,
          columns: hsn_data["hsnColumns"],
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
        return external_react_default.a.createElement("h1", null, "Loading");
      }
    }
  }, {
    key: "_createHsnCodeColoumns",
    value: function _createHsnCodeColoumns(data) {
      var _this4 = this;

      var temp = [];

      if (is_array_default()(data)) {
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
}(external_react_default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    business: state.businesses,
    hsncodes: state.hsncodes,
    taxCategories: state.taxCategories
  };
}; // Example Syntax for writing dispatch


var _hsn_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getHsnCodes: function getHsnCodes() {
      return dispatch(reduxHelper["hsncodes"].action());
    },
    addHsnCode: function addHsnCode(object) {
      return dispatch(reduxHelper["addHsnCode"].action(object));
    },
    deleteHsnCode: function deleteHsnCode(hsncodeID) {
      return dispatch(reduxHelper["deleteHsnCode"].action(hsncodeID));
    },
    updateHsnCode: function updateHsnCode(hsncodeID, object) {
      return dispatch(reduxHelper["updateHsnCode"].action(hsncodeID, object));
    },
    getTaxCategories: function getTaxCategories(object) {
      return dispatch(reduxHelper["taxCategories"].action(object));
    },
    addhsncodetaxcategories: function addhsncodetaxcategories(object) {
      return dispatch(reduxHelper["addhsncodetaxcategories"].action(object));
    },
    getHsnTaxCategory: function getHsnTaxCategory(hsnID) {
      return dispatch(reduxHelper["taxCategoryHsn"].action(hsnID));
    }
  };
};

/* harmony default export */ var _hsn = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, _hsn_mapDispatchToProps)(_hsn_App));

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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1XP0");


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

/***/ "9GBe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export F3 */
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_xinformed_antdesignInformed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EpBQ");
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("pKkg");
/* harmony import */ var _atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("fEpf");














var validate = function validate(value) {
  return !value || value.length < 5 ? "Field must be at least five characters" : undefined;
};

var F3 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(F3, _Component);

  function F3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, F3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(F3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this), "loadTaxCategories", function () {
      _this.props.formData.assignedhsnCode(_this.props.formData.taxID).then(function (res) {
        console.log(res);
        var hsnCode = [];
        res.map(function (item) {
          hsnCode.push(item.hsncodeunfold);
        });

        _this.setState({
          hsnCode: hsnCode
        });

        console.log(_this.state.hsnCode);
        return hsnCode;
      }).then(function (_) {
        _this.setState({
          isLoaded: true
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      hsnCode: [],
      isLoaded: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(F3, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTaxCategories();
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.onSubmit(this.formAPi.getState(), function () {});
    }
  }, {
    key: "setFormApi",
    value: function setFormApi(formAPi) {
      this.formAPi = formAPi;
      this.loadTaxCategories();
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
        } // console.log(this.props.formData.hsnData)

      };
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "App"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: style.container
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        style: style.heading
      }, "HSN Assigned"), this.state.isLoaded ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", null, this.state.hsnCode.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
          style: style.text
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
          icon: "close",
          style: style.removeBtn
        }), "     ", item.hsnname);
      })) : null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__[/* Form */ "c"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__[/* Select */ "f"], {
        field: "assignedTo",
        style: {
          width: 250
        },
        option: this.props.formData.hsnData
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
/* harmony default export */ __webpack_exports__["a"] = (F3);

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

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "A9gk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bmdr");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("XZ83");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("3PsY");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("vYYK");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("MX0m");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("f+nQ");
/* harmony import */ var _elementHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("kf+a");


















var ModalButton =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(ModalButton, _React$Component);

  function ModalButton() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(this, ModalButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(ModalButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "state", {
      loading: false,
      visible: false,
      normalVisible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "showModal", function (option) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this), "handleCancel", function (option) {
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

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ModalButton, [{
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
      }) : this.props.normal ? react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
        value: this.props.buttonValue,
        onClick: function onClick(_) {
          return _this3.showModal("normalVisible");
        }
      }) : react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], {
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
      }, [".ant-modal-header.jsx-1569199979{padding:0 !important;}"]));
    }
  }]);

  return ModalButton;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ModalButton);

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

/***/ "Algq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lRur");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Puj+");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ProductTable = function ProductTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
    columns: props.columns,
    dataSource: props.data,
    rowSelection: props.rowSelection,
    pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, props.pagination)
  });
};

/* harmony default export */ __webpack_exports__["a"] = (ProductTable);

/***/ }),

/***/ "BWRB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "Bg3c":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "BucJ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag/style");

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

/***/ "JvNI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export F5 */
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("pKkg");











var validate = function validate(value) {
  return !value || value.length < 5 ? 'Field must be at least five characters' : undefined;
};

var F5 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(F5, _Component);

  function F5(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, F5);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(F5).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(F5, [{
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
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__[/* Form */ "c"], {
        getApi: this.setFormApi
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginBottom: 15
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__[/* Text */ "g"], {
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
/* harmony default export */ __webpack_exports__["a"] = (F5);

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

/***/ "OvHP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return itemData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zbDu");


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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(inventory));
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

/***/ "P7Vo":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "REst":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oOiI");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tI3Q");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Bg3c");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vsU0");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _atoms_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f+nQ");
/* harmony import */ var _molecules_cascader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("wuxv");
/* harmony import */ var _molecules_searchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("z7Nt");









var CascaderAndSearch = function CascaderAndSearch(props) {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gutter: "8"
  }, props.dataArray.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
      span: 4
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_molecules_cascader__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      placeholder: data.placeholder,
      onChange: data.onChange,
      onFocus: data.onFocus,
      onBlur: data.onBlur,
      optionArray: data.optionArray,
      style: data.style
    }));
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 5
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_molecules_searchBar__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    handleSearch: props.onSearch,
    value: props.placeholder,
    type: "search"
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    span: 3,
    key: 6
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_atoms_button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    value: props.buttonValue,
    color: "#2699FB"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (CascaderAndSearch);

/***/ }),

/***/ "RGP6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker/style");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

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

/***/ "bmdr":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal/style");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "f+nQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrwo");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
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
      style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, ButtonStyle, style),
      onClick: onClick,
      loading: loading
    }, value);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "primary",
    style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, ButtonStyle, style),
    onClick: onClick
  }, value);
};

ButtonOne.defaultProps = {
  color: "#030D34",
  value: "Click Me",
  width: ""
};
/* harmony default export */ __webpack_exports__["a"] = (ButtonOne);

/***/ }),

/***/ "fEpf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DnGC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bmdr");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






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
/* harmony default export */ __webpack_exports__["a"] = (ButtonIcon);

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

/***/ "kf+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/molecules/logoWithMsg/index.js

var logoWithMsg_Logo = function Logo(_ref) {
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
      external_react_default.a.createElement("img", {
        src: "/static/images/icons/LogoMainWhite.png",
        style: imageStyle
      }) // </div>

    );
  }

  return external_react_default.a.createElement("fragment", {
    style: LogoStyle
  }, external_react_default.a.createElement("h1", {
    style: {
      marginTop: 0
    }
  }, external_react_default.a.createElement("b", null, "S K I P")), external_react_default.a.createElement("p", {
    style: {
      "color": "#4D4F5C"
    }
  }, message));
};
logoWithMsg_Logo.defaultProps = {
  color: "#43425D"
};
/* harmony default export */ var logoWithMsg = (logoWithMsg_Logo);
// CONCATENATED MODULE: ./src/components/molecules/elementHeader/index.js



var elementHeader_ElemHeader = function ElemHeader(_ref) {
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
    return external_react_default.a.createElement("div", {
      style: ElemHeaderStyle
    }, external_react_default.a.createElement("div", {
      style: {
        float: "left",
        width: "8%"
      }
    }, external_react_default.a.createElement(logoWithMsg, {
      color: "#CCCCCC"
    })), external_react_default.a.createElement("div", {
      style: {
        textAlign: "center"
      }
    }, external_react_default.a.createElement("h1", {
      style: {
        color: "#FFFFFF",
        margin: 0
      }
    }, title)));
  }

  return external_react_default.a.createElement("div", {
    style: ElemHeaderStyle
  }, external_react_default.a.createElement("div", {
    style: {
      textAlign: "left",
      fontSize: "12px"
    }
  }, external_react_default.a.createElement("h1", {
    style: {
      color: "#FFFFFF"
    }
  }, title)));
};

elementHeader_ElemHeader.defaultProps = {
  title: " Test Title"
};
/* harmony default export */ var elementHeader = __webpack_exports__["a"] = (elementHeader_ElemHeader);

/***/ }),

/***/ "lEtj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsnColumns", function() { return hsnColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zbDu");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fEpf");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wuxv");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("A9gk");
/* harmony import */ var _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("JvNI");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9GBe");







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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      visible: true,
      form: _src_components_organisms_forms_createTaxCategory__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      placeholder: "Actions",
      style: {
        width: 120,
        marginRight: "30px"
      },
      optionArray: object.cascaderData
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
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

/***/ "lRur":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table/style");

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

/* harmony default export */ __webpack_exports__["a"] = (ROOTURL = "http://142.93.222.40/api/v1"); // export default (ROOTURL = "http://127.0.0.1:8000/api/v1")

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

/***/ "oOiI":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "oRSk":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

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

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

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

/***/ "umso":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wuxv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1Wvg");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A4pX");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



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
    filterOption: props.filterOptions
  }, props.optionArray ? props.optionArray.map(function (data, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
      value: data
    }, data);
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
/* harmony default export */ __webpack_exports__["a"] = (Cascader);

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

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

/***/ "xg6E":
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "z7Nt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("umso");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BWRB");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qNsG");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oRSk");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_4___default.a.Search;

var SearchBar = function SearchBar(_ref) {
  var type = _ref.type,
      value = _ref.value,
      width = _ref.width,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ref, ["type", "value", "width"]);

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
/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "zbDu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stockTag; });
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BucJ");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("P7Vo");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
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