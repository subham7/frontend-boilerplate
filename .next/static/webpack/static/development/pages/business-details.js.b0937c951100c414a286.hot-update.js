webpackHotUpdate("static/development/pages/business-details.js",{

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

/***/ })

})
//# sourceMappingURL=business-details.js.b0937c951100c414a286.hot-update.js.map