webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./src/utils/auth/index.js":
/*!*********************************!*\
  !*** ./src/utils/auth/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);




var Auth = function Auth(_ref) {
  var auth = _ref.auth,
      param = _ref.param,
      yes = _ref.yes,
      no = _ref.no;
  var rules = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(auth.response);
  if (rules.data.permissions[param]) return yes;else return no;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Auth));

/***/ })

})
//# sourceMappingURL=dashboard.js.fc3063562bb44b18992b.hot-update.js.map