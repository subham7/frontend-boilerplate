webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/.products/.products/index.js":
/*!******************************************************!*\
  !*** ./pages/dashboard/.products/.products/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_organisms_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/components/organisms/items */ "./src/components/organisms/items/index.js");
/* harmony import */ var _src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../src/components/atoms/loading */ "./src/components/atoms/loading/index.js");
/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapper */ "./pages/dashboard/.products/.products/wrapper.js");
/* harmony import */ var _product_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product.data */ "./pages/dashboard/.products/.products/product.data.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_13__);















var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App).call(this, props));
    _this.state = {
      productsTableData: [],
      filteredTableData: [],
      cardData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var businessID = this.props.business.response.data[0].businessID;
      this.props.getTaxes(businessID).then(function (_) {
        _this2.loadproductsData();
      });
      this.props.getInventoryStock(businessID).then(function (res) {
        console.log(res);

        _this2.setState({
          cardData: res
        });
      });
    }
  }, {
    key: "handleCreateproducts",
    value: function handleCreateproducts(data, cb) {
      var _this3 = this;

      data.values.productID = uuid_v4__WEBPACK_IMPORTED_MODULE_13___default()();
      data.values.business = this.props.business.response.data[0].businessID;
      this.props.addProduct(data.values).then(function (res) {
        _this3.loadproductsData();

        cb({
          status: true,
          message: "products created successfully"
        });
      }).catch(function (err) {
        console.log(err);
        cb({
          status: false,
          message: "SomeError occured"
        });
      });
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      var filteredEvents = this.state.productsTableData.filter(function (data) {
        var pattern = new RegExp(e.target.value, "i");
        return data.name.match(pattern);
      });
      this.setState({
        filteredTableData: filteredEvents
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      if (this.props.products.isLoaded) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_organisms_items__WEBPACK_IMPORTED_MODULE_9__["default"], {
          formData: this.createSelectData(this.props.productCategories.response.data),
          rowSelection: {},
          pagination: {
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          },
          cardData: this.state.cardData,
          cascaderData: _product_data__WEBPACK_IMPORTED_MODULE_12__["itemData"].cascaderData,
          columns: _product_data__WEBPACK_IMPORTED_MODULE_12__["itemData"].productColumns,
          columnData: this.state.filteredTableData,
          onCreate: function onCreate(data, cb) {
            return _this4.handleCreateproducts(data, cb);
          },
          onSearch: function onSearch(value) {
            return _this4.handleSearch(value);
          }
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_src_components_atoms_loading__WEBPACK_IMPORTED_MODULE_10__["default"], null);
      }
    }
  }, {
    key: "_createproductsColumns",
    value: function _createproductsColumns(data) {
      var _this5 = this;

      var temp = [];

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        data.map(function (item) {
          var object = {};
          object.name = item.name;
          object.productID = item.productID;
          object.code = item.code;
          object.barcode = item.barcode;
          object.category = item.productcategory;
          object.location = item.location; //map location here

          object.price = item.price;
          object.prefilledValues = item;
          object.selectData = _this5.createSelectData(_this5.props.productCategories.response.data);
          object.handleFeatures = {
            handleDelete: function handleDelete(urlParams) {
              urlParams.businessID = _this5.props.business.response.data[0][0].businessID;
              console.log("here", urlParams);

              _this5.props.deleteProduct(urlParams).then(function (res) {
                _this5.loadproductsData();
              }).catch(function (err) {
                console.log(err);
              });
            },
            editProduct: function editProduct(data, id, cb) {
              _this5.props.updateProduct(id, data.values).then(function (res) {
                _this5.loadproductsData();

                cb({
                  status: true,
                  message: "Product updated"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: false,
                  message: "Some Error while updating"
                });
              });
            }
          }, object.assign = {
            handleAssign: function handleAssign(data, id, cb) {
              console.log(data, id, "received data");
              var obj = {};
              obj.product = id;
              obj.tax = data.values.assignedTo;

              _this5.props.addTaxProduct(obj).then(function (res) {
                cb({
                  status: true,
                  message: "Product tax assigned"
                });
              }).catch(function (err) {
                console.log(err);
                cb({
                  status: true,
                  message: "ERROR!"
                });
              });
            },
            // assignedTaxes: attributesetID => this.props.assignedTaxes(attributesetID),
            taxesData: _this5.createSelectTaxData(_this5.props.taxes.response.data),
            productID: item.productID
          };
          temp.push(object);
        });
      }

      return temp;
    }
  }, {
    key: "loadproductsData",
    value: function loadproductsData() {
      var _this6 = this;

      console.log("loading");
      var businessID = this.props.business.response.data[0].businessID;
      this.props.getproducts(businessID).then(function (res) {
        _this6.setState({
          productsTableData: _this6._createproductsColumns(res)
        });

        _this6.setState({
          filteredTableData: _this6.state.productsTableData
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createSelectData",
    value: function createSelectData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.productcategoryID
        };
      });
      return selectData;
    }
  }, {
    key: "createSelectTaxData",
    value: function createSelectTaxData(data) {
      var selectData = data.map(function (item) {
        return {
          name: item.name,
          value: item.taxID
        };
      });
      return selectData;
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  // console.log("apnaaaaaaaa stateeeee", state)
  return {
    business: state.businesses,
    products: state.products,
    taxcategories: state.taxcategories,
    inventoryStock: state.inventoryStock,
    taxes: state.taxes
  };
}; // Example Syntax for writing dispatch


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getproducts: function getproducts(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["products"].action(businessID));
    },
    getTaxes: function getTaxes(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["taxes"].action(businessID));
    },
    addProduct: function addProduct(businessID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addProduct"].action(businessID, object));
    },
    getTaxeCategories: function (_getTaxeCategories) {
      function getTaxeCategories(_x) {
        return _getTaxeCategories.apply(this, arguments);
      }

      getTaxeCategories.toString = function () {
        return _getTaxeCategories.toString();
      };

      return getTaxeCategories;
    }(function (businessID) {
      return dispatch(getTaxeCategories.action(businessID));
    }),
    addTaxeCategories: function (_addTaxeCategories) {
      function addTaxeCategories(_x2, _x3) {
        return _addTaxeCategories.apply(this, arguments);
      }

      addTaxeCategories.toString = function () {
        return _addTaxeCategories.toString();
      };

      return addTaxeCategories;
    }(function (businessID, object) {
      return dispatch(addTaxeCategories.action(businessID, object));
    }),
    deleteProduct: function deleteProduct(urlParams) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["deleteProduct"].action(urlParams));
    },
    updateProduct: function updateProduct(productID, object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["updateProduct"].action(productID, object));
    },
    addTaxProduct: function addTaxProduct(object) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["addProductsTax"].action(object));
    },
    reviewPurchase: function reviewPurchase() {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["reviewPurchase"].action());
    },
    getInventoryStock: function getInventoryStock(businessID) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_8__["inventoryStock"].action(businessID));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ })

})
//# sourceMappingURL=dashboard.js.aa70b7a7d4685f6e91da.hot-update.js.map