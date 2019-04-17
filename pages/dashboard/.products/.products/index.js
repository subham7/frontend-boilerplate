import React from "react"
import { connect } from "react-redux"

import { products, addProduct } from "../../../../src/reduxHelper"

import Products from "../../../../src/components/organisms/items"
import { itemData } from "./product.data"
import wrapper from "./wrapper"

import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsTableData: []
    }
  }

  componentDidMount() {
    console.log("mount")
    this.loadproductsData()
  }

  handleCreateproducts(data, cb) {
    console.log("producttttt", data)
    data.values.productID = uuidv4()
    data.values.business = this.props.business.response.data.businessID
    this.props
      .addProduct(data.values)
      .then(res => {
        this.loadproductsData()
        cb({ status: true, message: "products created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  callback(key) {
    // console.log(key);
  }

  render() {
    if (this.props.products.isLoaded) {
      return (
        <div>
          <Products
            formData={this.createSelectData(
              this.props.productCategories.response.data
            )}
            rowSelection={{}}
            cardData={itemData.cardData}
            cascaderData={itemData.cascaderData}
            columns={itemData.productColumns}
            columnData={this.state.productsTableData}
            onCreate={(data, cb) => this.handleCreateproducts(data, cb)}
          />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }

  _createproductsColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.code = item.code
        object.barcode = item.barcode
        object.category = item.productcategory
        object.price = item.price
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = data.name
      object.code = data.code
      object.barcode = data.barcode
      object.category = data.productcategory
      object.price = data.price
      temp.push(object)
    }
    console.log("inside create columns, temp: ", temp)
    return temp
  }

  loadproductsData() {
    console.log("loading")
    let businessID = this.props.business.response.data.businessID

    this.props
      .getproducts(businessID)
      .then(res => {
        console.log(this._createproductsColumns(res) + "est")
        this.setState({ productsTableData: this._createproductsColumns(res) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.productcategoryID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  products: state.products,
  taxcategories: state.taxcategories,
  addProduct: state.addProduct,
  productCategories: state.productCategories
})

// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getproducts: businessID => dispatch(products.action(businessID)),
  addProduct: (businessID, object) =>
    dispatch(addProduct.action(businessID, object)),
  getTaxeCategories: businessID =>
    dispatch(getTaxeCategories.action(businessID)),
  addTaxeCategories: (businessID, object) =>
    dispatch(addTaxeCategories.action(businessID, object))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
