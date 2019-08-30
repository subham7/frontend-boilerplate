import React from "react"
import { connect } from "react-redux"

import {
  productCategories,
  addProductCategory,
  deleteProductCategory,
  updateProductCategory,
  inventoryStock
} from "../../../../src/reduxHelper"
import Categories from "../../../../src/components/organisms/categories"
import ButtonIcon from "../../../../src/components/atoms/tableButton"
import Model from "../../../../src/components/molecules/modelButton"
import createCategory from "../../../../src/components/organisms/forms/createCategory"

import { categoryData, categoryColumns } from "./category.data"
import { Button } from "antd"
import Loader from "../../../../src/components/atoms/loading"
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsTableData: [],
      filteredTableData: [],
      cardData: []
    }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    this.loadProductCategoryData()
    this.props.getInventoryStock(businessID).then(res => {
      this.setState({ cardData: res })
    })
  }

  handleCreateProductCategory(data, cb) {
    // console.log(data)
    data.values.productcategoryID = uuidv4()
    data.values.business = this.props.business.response.data[0].businessID
    this.props
      .addProductCategory(data.values)
      .then(res => {
        this.loadProductCategoryData()
        cb({ status: true, message: "Product category added" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "Some Error occured" })
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.productsTableData.filter(function(data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    // console.log(this.state.cardData, "avvvvai")
    if (this.props.productCategories.isLoaded) {
      return (
        <div>
          <Categories
            cardData={this.state.cardData}
            cascaderData={categoryData.cascaderData}
            columns={categoryData.categoryColumns}
            columnData={this.state.filteredTableData}
            pagination={{
              pageSize: 5,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            onCreate={(data, cb) => this.handleCreateProductCategory(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <Loader />
    }
  }
  _createProductCategory = data => {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        ;(object.name = item.name),
          (object.productcategoryID = item.productcategoryID),
          (object.inventory = item.inventory), //map inventory details here
          (object.handleFeatures = {
            handleDelete: id => {
              // let businessID = this.props.business.response.data[0].businessID;
              this.props
                .deleteProductCategory(id)
                .then(res => {
                  this.loadProductCategoryData()
                })
                .catch(err => {
                  console.log(err)
                })
            },
            editProductCategory: (data, id, cb) => {
              // console.log("clicked", data, id, cb)
              this.props
                .updateProductCategory(id, data.values)
                .then(res => {
                  this.loadProductCategoryData()
                  cb({ status: true, message: "Product category updated" })
                })
                .catch(err => {
                  console.log(err)
                  cb({ status: false, message: "Some Error while updating" })
                })
            }
          }),
          (object.assign = {})
        temp.push(object)
      })
    } else {
      let object = {}
      ;(object.name = data.name),
        (object.productcategoryID = data.productcategoryID),
        (object.handleFeatures = {
          handleDelete: id => {
            // let businessID = this.props.business.response.data[0].businessID;
            this.props
              .deleteProductCategory(id)
              .then(res => {
                this.loadProductCategoryData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          editProductCategory: (data, id, cb) => {
            this.props
              .updateProductCategory(id, data.values)
              .then(res => {
                this.loadProductCategoryData()
                cb({ status: true, message: "Product category updated" })
              })
              .catch(err => {
                console.log(err)
                cb({
                  status: false,
                  message: "Some Error occured while updating"
                })
              })
          }
        })
      temp.push(object)
    }
    return temp
  }

  loadProductCategoryData = () => {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getProductCategory(urlParams)
      .then(res => {
        this.setState({ productsTableData: this._createProductCategory(res) })
        this.setState({ filteredTableData: this.state.productsTableData })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  productCategories: state.productCategories,
  inventoryStock: state.inventoryStock
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getProductCategory: businessID =>
    dispatch(productCategories.action(businessID)),
  addProductCategory: (businessID, object) => {
    return dispatch(addProductCategory.action(businessID, object))
  },
  deleteProductCategory: productcategoryID =>
    dispatch(deleteProductCategory.action(productcategoryID)),
  updateProductCategory: (productcategoryID, object) => {
    return dispatch(updateProductCategory.action(productcategoryID, object))
  },
  getInventoryStock: businessID => dispatch(inventoryStock.action(businessID))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
