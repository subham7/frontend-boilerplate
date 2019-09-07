webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/components/organisms/forms/assignHsn.js":
/*!*****************************************************!*\
  !*** ./src/components/organisms/forms/assignHsn.js ***!
  \*****************************************************/
/*! exports provided: F3, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(F3).call(this, props)); // this.state = { hsnCode: [], isLoaded: false }
    // this.handleClick = this.handleClick.bind(this)
    // this.setFormApi = this.setFormApi.bind(this)

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "loadTaxCategories", function () {
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
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_atoms_tableButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          icon: "close",
          style: style.removeBtn
        }), "     ", item.hsnname);
      })) : null), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_11__["Form"], {
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
/* harmony default export */ __webpack_exports__["default"] = (F3);

/***/ })

})
//# sourceMappingURL=dashboard.js.a4d50db2a4b32d934697.hot-update.js.map