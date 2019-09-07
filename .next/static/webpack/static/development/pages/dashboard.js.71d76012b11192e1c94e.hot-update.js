webpackHotUpdate("static/development/pages/dashboard.js",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var addProductsTax = function addProductsTax(object) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(_ROOTURL__WEBPACK_IMPORTED_MODULE_0__["default"], "/productstaxes"), object);
};

/***/ })

})
//# sourceMappingURL=dashboard.js.71d76012b11192e1c94e.hot-update.js.map