webpackHotUpdate("static/development/pages/business-details.js",{

/***/ "./pages/business-details/index.js":
/*!*****************************************!*\
  !*** ./pages/business-details/index.js ***!
  \*****************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_templates_businessDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/components/templates/businessDetails */ "./src/components/templates/businessDetails/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_utils_token__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/utils/token */ "./src/utils/token/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);










var uuidv4 = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");






var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFormData", function (data) {
      data.values.businessID = uuidv4();
      data.values.owner = _src_utils_token__WEBPACK_IMPORTED_MODULE_11__["default"].getTokenData().data.user[0].userID;
      var dispatchData = data.values;

      _this.props.businessSignupDispatch(dispatchData).then(function (res) {
        console.log(res);

        if (res.affectedRows) {
          next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/dashboard");
        } else {
          alert("Cannot add business, check console for error");
        }
      }).catch(function (err) {
        console.log(err);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // load businesstype if not loaded
      if (!this.props.businesstype.response) {
        this.props.getBusinessType().then(function (data) {}).catch(function (err) {});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.businesstype.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_src_components_templates_businessDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
          getFormData: function getFormData(data) {
            return _this2.handleFormData(data);
          },
          formData: this.createSelectData(this.props.businesstype.response.data)
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Loading");
      }
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.businesstypeID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    businessSignup: state.businessSignup,
    businesstype: state.businessType,
    user: state.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    businessSignupDispatch: function businessSignupDispatch(businessSignupData) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["addBusiness"].action(businessSignupData));
    },
    getUserDispatch: function getUserDispatch(userID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["user"].action(userID));
    },
    getBusinessType: function getBusinessType() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_9__["businessType"].action());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=business-details.js.338120338adfd1153498.hot-update.js.map