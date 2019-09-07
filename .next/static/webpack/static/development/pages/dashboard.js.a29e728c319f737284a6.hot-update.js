webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/.taxes/.taxes/taxes.data.js":
/*!*****************************************************!*\
  !*** ./pages/dashboard/.taxes/.taxes/taxes.data.js ***!
  \*****************************************************/
/*! exports provided: taxesColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxesColumns", function() { return taxesColumns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/components/atoms/stockTag */ "./src/components/atoms/stockTag/index.js");
/* harmony import */ var _src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/components/atoms/tableButton */ "./src/components/atoms/tableButton/index.js");
/* harmony import */ var _src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/components/molecules/cascader */ "./src/components/molecules/cascader/index.js");
/* harmony import */ var _src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/components/molecules/modelButton */ "./src/components/molecules/modelButton/index.js");
/* harmony import */ var _src_components_organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/createTax */ "./src/components/organisms/forms/createTax.js");
/* harmony import */ var _src_components_organisms_forms_assignHsn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/components/organisms/forms/assignHsn */ "./src/components/organisms/forms/assignHsn.js");







var taxesColumns = [{
  title: 'Name',
  dataIndex: 'name'
}, {
  title: 'Tax Category',
  dataIndex: '',
  render: function render(object) {
    var categoryIndex = object.selectData.findIndex(function (id) {
      return id.value == object.taxCategory;
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_src_components_atoms_stockTag__WEBPACK_IMPORTED_MODULE_1__["default"])(object.selectData[categoryIndex].name));
  }
}, {
  title: 'Percentage',
  dataIndex: 'percentage',
  render: function render(percentage) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, percentage, "%");
  }
}, // {
//     title: "Assign",
//     dataIndex: "",
//     key: "assign",
//     render: object => {
//       // console.log(object.assign.taxCategoryData)
//       return (
//         <Model
//           form={AssignItem}
//           title="Assign Items"
//           buttonValue="Assign"
//           formData={object.assign}
//           assignedData={{}}
//           onSubmit={(data, cb) =>
//             object.assign.handleAssign(data, object.taxID, cb)
//           }
//         />
//       )
//     }
//   },
{
  title: 'Edit',
  key: 'edit',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_modelButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: true,
      form: _src_components_organisms_forms_createTax__WEBPACK_IMPORTED_MODULE_5__["default"],
      prefilledValues: object.prefilledValues,
      formData: object.selectData,
      title: "Edit Tax",
      isTableModal: true,
      onSubmit: function onSubmit(data, cb) {
        return object.handleFeatures.handleEdit(data, object.taxID, cb);
      }
    }));
  }
}, {
  title: '',
  dataIndex: '',
  render: function render(object) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_molecules_cascader__WEBPACK_IMPORTED_MODULE_3__["default"], {
      placeholder: "Actions",
      style: {
        width: 120,
        "marginRight": "30px"
      },
      optionArray: object.cascaderData
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_atoms_tableButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    }));
  }
}];


/***/ })

})
//# sourceMappingURL=dashboard.js.a29e728c319f737284a6.hot-update.js.map