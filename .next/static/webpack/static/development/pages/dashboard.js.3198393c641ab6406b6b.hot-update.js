webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/components/organisms/forms/createItem.js":
/*!******************************************************!*\
  !*** ./src/components/organisms/forms/createItem.js ***!
  \******************************************************/
/*! exports provided: F2, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
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
      }, "No")))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h5", null, "Do you accept cards?"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          display: "inline-block"
        }
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["RadioGroup"], null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: true,
        field: "cardAccepted"
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_utils_xinformed__WEBPACK_IMPORTED_MODULE_10__["Radio"], {
        value: false,
        field: "cardAccepted"
      }, "No"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
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

/***/ })

})
//# sourceMappingURL=dashboard.js.3198393c641ab6406b6b.hot-update.js.map