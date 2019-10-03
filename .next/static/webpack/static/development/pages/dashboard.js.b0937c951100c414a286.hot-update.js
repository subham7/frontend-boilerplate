webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _attributeset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./attributeset */ "./pages/dashboard/.attributes/attributeset/index.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./attributes */ "./pages/dashboard/.attributes/attributes/index.js");
/* harmony import */ var _attributevalues__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attributevalues */ "./pages/dashboard/.attributes/attributevalues/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
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
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _products_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./.products/index */ "./pages/dashboard/.products/.products/index.js");
/* harmony import */ var _productcategories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.productcategories */ "./pages/dashboard/.products/.productcategories/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
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
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
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

/***/ "./pages/dashboard/.transactions/transactions.data.js":
/*!************************************************************!*\
  !*** ./pages/dashboard/.transactions/transactions.data.js ***!
  \************************************************************/
/*! exports provided: transactionColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionColumns", function() { return transactionColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/components/molecules/elementHeader/index.js":
/*!*********************************************************!*\
  !*** ./src/components/molecules/elementHeader/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/components/organisms/categories/index.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/categories/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./src/components/organisms/sidePanel/index.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/sidePanel/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=dashboard.js.b0937c951100c414a286.hot-update.js.map