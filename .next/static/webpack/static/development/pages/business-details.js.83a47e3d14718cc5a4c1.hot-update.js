webpackHotUpdate("static/development/pages/business-details.js",{

/***/ "./src/components/organisms/forms/busniessDetails.js":
/*!***********************************************************!*\
  !*** ./src/components/organisms/forms/busniessDetails.js ***!
  \***********************************************************/
/*! exports provided: BusinessDetails, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessDetails", function() { return BusinessDetails; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_xinformed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/xinformed */ "./src/utils/xinformed/index.js");










var BusinessDetails =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(BusinessDetails, _Component);

  function BusinessDetails(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BusinessDetails);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BusinessDetails).call(this, props));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.setFormApi = _this.setFormApi.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BusinessDetails, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.getFormData(this.formAPi.getState()); // console.log(this.formAPi.getState());
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
        placeholder: "Business"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Select"], {
        style: {
          width: 195
        },
        field: "businesstype",
        option: this.props.formData,
        placeholder: "Business type"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "website",
        placeholder: "Website",
        style: {
          marginBottom: 15
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        field: "address",
        placeholder: "Address Line 1",
        style: {
          marginBottom: 15
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
        field: "city",
        placeholder: "City"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "state",
        placeholder: "State"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
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
        field: "pincode",
        placeholder: "Pin Code"
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          float: "left"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        style: {
          width: 195
        },
        field: "country",
        placeholder: "Country"
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["TextArea"], {
        rows: "3",
        field: "bio",
        style: {
          marginBottom: 15
        },
        placeholder: "Business Bio"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", null, "Do you accept cards?"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["RadioGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        style: {
          'paddingRight': 10
        }
      }, "isMRP"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
        value: true,
        field: "isMRP"
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_9__["Radio"], {
        value: false,
        field: "isMRP"
      }, "No"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", null, "Branding"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "Your brand infomration applie to the look and feel of appointments,booking and marketing."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192
        }
      }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        style: {
          float: "left",
          width: 192,
          marginLeft: 15
        },
        type: "primary",
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        }
      }, "Save"))));
    }
  }]);

  return BusinessDetails;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (BusinessDetails);

/***/ })

})
//# sourceMappingURL=business-details.js.83a47e3d14718cc5a4c1.hot-update.js.map