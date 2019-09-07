webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/.products/.products/product.data.js":
/*!*************************************************************!*\
  !*** ./pages/dashboard/.products/.products/product.data.js ***!
  \*************************************************************/
/*! exports provided: itemData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemData", function() { return itemData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createItem */ "./src/components/organisms/forms/createItem.js");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignHsn */ "./src/components/organisms/forms/assignHsn.js");






var cardData = [{
  iconType: 'bank',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#F88998'
  },
  title: '25',
  description: 'Items Out of Stock'
}, {
  iconType: 'shopping-cart',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#FFB353'
  },
  title: '25',
  description: 'Items Out of Stock'
}, {
  iconType: 'rise',
  iconStyle: {
    fontSize: "30px",
    marginTop: '30%',
    color: '#69E4A6'
  },
  title: '25',
  description: 'Items Out of Stock'
}];
var cascaderData = [{
  placeholder: 'All Categories',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Inventory',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Stores',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}, {
  placeholder: 'All Actions',
  optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads'] // style: { width: 162 }

}];
var productColumns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'CODE',
  dataIndex: 'code',
  key: 'code'
}, {
  title: 'BARCODE',
  dataIndex: 'barcode',
  key: 'barcode'
}, {
  title: 'CATEGORY',
  dataIndex: '',
  render: function render(object) {
    var categoryIndex = object.selectData.findIndex(function (id) {
      return id.value == object.category;
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(object.selectData[categoryIndex].name));
  }
}, // {
//     title: 'LOCATION',
//     dataIndex: 'location',
//     key: 'location'
// },
// {
//     title: 'INVENTORY',
//     dataIndex: 'inventory',
//     key: 'inventory',
//     render: inventory => (<span>{stockTag(inventory)}</span>)
// },
{
  title: 'PRICE',
  key: 'price',
  dataIndex: 'price',
  render: function render(price) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "INR ", price));
  }
}, {
  title: "Assign Tax",
  dataIndex: "",
  key: "assign",
  render: function render(object) {
    // console.log(object.assign.taxCategoryData)
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      form: {},
      title: "Assign Tax",
      buttonValue: "Assign",
      formData: object.assign,
      assignedData: {},
      onSubmit: function onSubmit(data, cb) {
        return object.assign.handleAssign(data, object.taxID, cb);
      }
    });
  }
}, {
  title: 'Rename',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createItem__WEBPACK_IMPORTED_MODULE_4__["default"],
      prefilledValues: object.prefilledValues,
      formData: object.selectData,
      title: "Edit Product",
      isTableModal: true,
      buttonValue: "Create",
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.editProduct(data, object.productID, cb);
      }
    });
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: function onSubmit() {
        return object.handleFeatures.handleDelete(object);
      },
      modalTitle: "Sure you want to delete ?",
      icon: "delete",
      shape: "round",
      size: "small",
      style: {
        backgroundColor: '#F84D65',
        color: 'white'
      }
    });
  }
}];
var productColumnData = [{
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [20],
  price: 10
}, {
  product: 'Hide & Seek',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [200],
  price: 30
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [2],
  price: 10
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [20],
  price: 10
}, {
  product: 'Hide & Seek',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [200],
  price: 30
}, {
  product: 'Parle G',
  code: '1X2X3X4X5',
  category: 'Biscuits',
  location: 'BBSR',
  inventory: [2],
  price: 10
}];
var itemData = {
  cardData: cardData,
  cascaderData: cascaderData,
  productColumns: productColumns,
  productColumnData: productColumnData
};

/***/ })

})
//# sourceMappingURL=dashboard.js.8dd52f72b89a81639e1d.hot-update.js.map