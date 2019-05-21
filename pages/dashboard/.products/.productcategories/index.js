import React from "react"
import { connect } from "react-redux"

import { productCategories, addProductCategory, deleteProductCategory, updateProductCategory } from "../../../../src/reduxHelper"
import Categories from "../../../../src/components/organisms/categories"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createCategory from "../../../../src/components/organisms/forms/createCategory"

import { categoryData, categoryColumns } from "./category.data"
import { Button } from 'antd';
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsTableData: []
    }
  }

  componentDidMount() {
    this.loadProductCategoryData()
  }

  handleCreateProductCategory(data, cb) {
    // console.log(data)
    data.values.productcategoryID = uuidv4()
    data.values.business = this.props.business.response.data.businessID
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

  callback(key) {
    // console.log(key);
  }
  render() {
    if (true) {
      return (
        <div>
          <Categories
            cardData={categoryData.cardData}
            cascaderData={categoryData.cascaderData}
            columns={categoryData.categoryColumns}
            columnData={this.state.productsTableData}
            onCreate={(data, cb) => this.handleCreateProductCategory(data, cb)}
          />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }
  _createProductCategory = data => {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name,
          object.productcategoryID = item.productcategoryID,
          // object.inventory = [50],
          object.handleFeatures = {
            handleDelete: (id) => {
              // let businessID = this.props.business.response.data.businessID;
              this.props.deleteProductCategory(id).then(res => {
                this.loadProductCategoryData();
              }).catch(err => {
                console.log(err);
              })
            },
            editProductCategory: (data, id, cb) => {
              // console.log("clicked", data, id, cb)
              this.props.updateProductCategory(id, data.values).then(res => {
                this.loadProductCategoryData()
                cb({ status: true, message: "Product category updated" })
              }).catch(err => {
                console.log(err)
                cb({ status: false, message: "Some Error while updating" })
              })
            }
          }
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = data.name,
        object.productcategoryID = data.productcategoryID,
        object.handleFeatures = {
          handleDelete: (id) => {
            // let businessID = this.props.business.response.data.businessID;
            this.props.deleteProductCategory(id).then(res => {
              this.loadProductCategoryData();
            }).catch(err => {
              console.log(err);
            })
          },
          editProductCategory: (data, id, cb) => {
            this.props.updateProductCategory(id, data.values).then(res => {
              this.loadProductCategoryData()
              cb({ status: true, message: "Product category updated" })
            }).catch(err => {
              console.log(err)
              cb({ status: false, message: "Some Error occured while updating" })
            })
          }
        }
      temp.push(object)
    }
    return temp
  }

  loadProductCategoryData = () => {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data.businessID
    this.props
      .getProductCategory(urlParams)
      .then(res => {
        this.setState({ productsTableData: this._createProductCategory(res) })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  productCategories: state.productCategories,
  // addProductCategory: state.addProductCategory,
  // deleteProductCategory: state.deleteProductCategory,
  // updateProductCategory: state.updateProductCategory
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getProductCategory: (businessID) => dispatch(productCategories.action(businessID)),
  addProductCategory: (businessID, object) => {
    console.log("heeeeeee", businessID)
    return(dispatch(addProductCategory.action(businessID, object)))},
  deleteProductCategory: (productcategoryID) => dispatch(deleteProductCategory.action(productcategoryID)),
  updateProductCategory: (productcategoryID, object) => {
    console.log("heeeeeee", productcategoryID, object)
    return(dispatch(updateProductCategory.action(productcategoryID, object)))}
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
