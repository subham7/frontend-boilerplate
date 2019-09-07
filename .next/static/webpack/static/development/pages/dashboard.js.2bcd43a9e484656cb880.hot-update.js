webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./pages/dashboard/.home/index.js":
/*!****************************************!*\
  !*** ./pages/dashboard/.home/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/antd/lib/table/style/index.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tag/style */ "./node_modules/antd/lib/tag/style/index.js");
/* harmony import */ var antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/tag */ "./node_modules/antd/lib/tag/index.js");
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../src/reduxHelper */ "./src/reduxHelper/index.js");
/* harmony import */ var _src_reduxHelper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_api_business__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../src/api/business */ "./src/api/business/index.js");





















var ReactHighcharts = __webpack_require__(/*! react-highcharts */ "./node_modules/react-highcharts/dist/ReactHighcharts.js");



var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_15__["default"])(App, _Component);

  function App(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__["default"])(this, App);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__["default"])(App).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "loadTopItems", function () {
      _this.props.getTopProducts('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06').then(function (data) {
        _this.setState({
          topProductsData: data.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "loadTopCategory", function () {
      _this.props.topCategories('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06').then(function (data) {
        _this.setState({
          topCategoryData: data.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "loadTransactionType", function () {
      _this.props.paymentTypes('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06').then(function (data) {
        var dataArray = data.map(function (item, i) {
          return {
            name: item.name,
            y: item.paymentTypeCount
          };
        });

        _this.setState({
          paymentTypeData: dataArray.splice(0, 3)
        });
      }).catch(function (err) {
        console.log(err);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_14__["default"])(_this), "loadTopSalesman", function () {
      _this.props.getTopSalesman('e96c8b21-4773-407c-a440-4d4c9d67aa79').then(function (data) {
        var salesunits = [];
        var salesmanName = [];

        for (var index = 0; index < data.length; index++) {
          salesunits.push(data[index].totalNumberOfSales);
          salesmanName.push(data[index].employee);
        }

        console.log(salesmanName, salesunits, "hehhe");

        _this.setState({
          topSalesmanData: {
            salesunits: salesunits,
            salesmanName: salesmanName
          }
        });

        console.log(_this.state.topSalesmanData);
      }).catch(function (err) {
        console.log(err);
      });
    });

    _this.state = {
      topProductsData: [],
      topCategoryData: [],
      paymentTypeData: [],
      topSalesmanData: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadTopItems();
      this.loadTopCategory();
      this.loadTransactionType();
      this.loadTopSalesman();
    }
  }, {
    key: "render",
    value: function render() {
      var columns = [{
        title: 'Top Selling Items',
        dataIndex: 'productName',
        key: 'name',
        render: function render(text) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
            href: "javascript:;"
          }, text);
        }
      }, {
        title: 'Units',
        dataIndex: 'productUnits',
        key: 'address'
      }];
      var columnstopselling = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: function render(text) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
            href: "javascript:;"
          }, text);
        }
      }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: function render(tags) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", null, tags.map(function (tag) {
            var color = tag[0] == "-" ? 'volcano' : 'green';

            if (tag === 'loser') {
              color = 'volcano';
            }

            return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_tag__WEBPACK_IMPORTED_MODULE_9___default.a, {
              color: color,
              key: tag
            }, tag.toUpperCase());
          }));
        }
      }];
      var datatopselling = [{
        key: '1',
        name: 'Today',
        tags: ['+₹20k']
      }, {
        key: '2',
        name: 'Yesterday',
        tags: ['+₹15k']
      }, {
        key: '3',
        name: 'Last Week',
        tags: ['-₹10k']
      }];
      var columnstopcat = [{
        title: 'Top Categories',
        dataIndex: 'name',
        key: 'name',
        render: function render(text) {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
            href: "javascript:;"
          }, text);
        }
      }, {
        title: 'Units',
        dataIndex: 'productCategoryCount',
        key: 'productCategoryCount'
      }];
      var configpayment = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Payment Methods'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Payment Methods',
          colorByPoint: true,
          data: this.state.paymentTypeData
        }]
      };
      var configTopSalePerson = {
        title: {
          text: 'Top Sales person'
        },
        subtitle: {
          text: 'Sales'
        },
        xAxis: {
          categories: ['Ron', 'Joe', 'Bajo', 'Apr', 'Jean', 'Modi']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: [500, 325, 800, 400, 550, 750],
          showInLegend: false
        }]
      };
      var configStoreDivison = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Store Wise Divison'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'Store Wise Division',
          colorByPoint: true,
          data: [{
            name: 'Hydrabad',
            y: 44.9
          }, {
            name: 'Bangalore',
            y: 55.1,
            sliced: true,
            selected: true
          }]
        }]
      };
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        style: {
          padding: '30px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_7___default.a, {
        pagination: {
          position: "none"
        },
        columns: columnstopselling,
        dataSource: datatopselling,
        size: "small",
        showHeader: false,
        title: function title() {
          return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("strong", null, "GROSS SALES");
        }
      })), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_7___default.a, {
        pagination: {
          position: "none"
        },
        columns: columnstopcat,
        dataSource: this.state.topCategoryData,
        size: "small"
      })), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 8
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_7___default.a, {
        pagination: {
          position: "none"
        },
        columns: columns,
        dataSource: this.state.topProductsData,
        size: "small"
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(ReactHighcharts, {
        config: configpayment,
        ref: "chart"
      }))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(ReactHighcharts, {
        config: configTopSalePerson,
        ref: "chart"
      })))), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        span: 22
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        bordered: true
      }, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(ReactHighcharts, {
        config: configStoreDivison,
        ref: "chart"
      })))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_17__["Component"]); // this.props.locations.response.data[2]


var mapStateToProps = function mapStateToProps(state) {
  return {
    locations: state.locations
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getTopProducts: function getTopProducts(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__["topItems"].action(location, from, to));
    },
    topCategories: function topCategories(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__["topCategories"].action(location, from, to));
    },
    paymentTypes: function paymentTypes(location, from, to) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__["paymentTypes"].action(location, from, to));
    },
    getTopSalesman: function getTopSalesman(business) {
      return dispatch(_src_reduxHelper__WEBPACK_IMPORTED_MODULE_19__["topSalesman"].action(business));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ })

})
//# sourceMappingURL=dashboard.js.2bcd43a9e484656cb880.hot-update.js.map