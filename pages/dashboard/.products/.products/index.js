import React from "react"
import { connect } from "react-redux"

import {
  products,
  addProduct,
  deleteProduct,
  updateProduct,
  reviewPurchase,
  inventoryStock,
  taxes,
  addProductsTax
} from "../../../../src/reduxHelper"
import Products from "../../../../src/components/organisms/items"
import Loading from "../../../../src/components/atoms/loading"
import wrapper from "./wrapper"
import { itemData } from "./product.data"
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
    this.props.getTaxes(businessID).then(_ => {
      this.loadproductsData()
    })
    this.props.getInventoryStock(businessID).then(res => {
      console.log(res)
      this.setState({ cardData: res })
    })
  }

  handleCreateproducts(data, cb) {
    data.values.productID = uuidv4()
    data.values.business = this.props.business.response.data[0].businessID
    this.props
      .addProduct(data.values)
      .then(res => {
        this.loadproductsData()
        cb({ status: true, message: "products created successfully" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
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
    if (this.props.products.isLoaded) {
      console.log(this.state.filteredTableData)
      return (
        <div>
          <Products
            formData={this.createSelectData(
              this.props.productCategories.response.data
            )}
            rowSelection={{}}
            pagination={{
              pageSize: 10,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            cardData={this.state.cardData}
            cascaderData={itemData.cascaderData}
            columns={itemData.productColumns}
            columnData={this.state.filteredTableData}
            onCreate={(data, cb) => this.handleCreateproducts(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <Loading />
    }
  }

  _createproductsColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.productID = item.productID
        object.code = item.code
        object.barcode = item.barcode
        object.category = item.productcategory
        object.location = item.location //map location here
        object.price = item.price
        object.prefilledValues = item
        object.isActive = item.isActive
        object.selectData = this.createSelectData(
          this.props.productCategories.response.data
        )
        ;(object.handleFeatures = {
          handleDelete: urlParams => {
            urlParams.businessID = this.props.business.response.data[0][0].businessID
            console.log("here", urlParams)
            this.props
              .deleteProduct(urlParams)
              .then(res => {
                this.loadproductsData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          editProduct: (data, id, cb) => {
            this.props
              .updateProduct(id, data.values)
              .then(res => {
                this.loadproductsData()
                cb({ status: true, message: "Product updated" })
              })
              .catch(err => {
                console.log(err)
                cb({ status: false, message: "Some Error while updating" })
              })
          }
        }),
          (object.assign = {
            handleAssign: (data, id, cb) => {
              console.log(data, id, "received data")
              let obj = {}
              obj.product = id
              obj.tax = data.values.assignedTo
              this.props
                .addTaxProduct(obj)
                .then(res => {
                  cb({
                    status: true,
                    message: "Product tax assigned"
                  })
                })
                .catch(err => {
                  console.log(err)
                  cb({ status: true, message: "ERROR!" })
                })
            },
            // assignedTaxes: attributesetID => this.props.assignedTaxes(attributesetID),
            taxesData: this.createSelectTaxData(this.props.taxes.response.data),
            productID: item.productID
          })
        temp.push(object)
      })
    }
    return temp
  }

  loadproductsData() {
    console.log("loading")
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getproducts(businessID)
      .then(res => {
        console.log(res)
        this.setState({ productsTableData: this._createproductsColumns(res) })
        this.setState({ filteredTableData: this.state.productsTableData })
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

  createSelectTaxData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.taxID
    }))
    return selectData
  }
}

const mapStateToProps = state => {
  // console.log("apnaaaaaaaa stateeeee", state)
  return {
    business: state.businesses,
    products: state.products,
    taxcategories: state.taxcategories,
    inventoryStock: state.inventoryStock,
    taxes: state.taxes
  }
}

// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getproducts: businessID => dispatch(products.action(businessID)),
  getTaxes: businessID => dispatch(taxes.action(businessID)),
  addProduct: (businessID, object) =>
    dispatch(addProduct.action(businessID, object)),
  getTaxeCategories: businessID =>
    dispatch(getTaxeCategories.action(businessID)),
  addTaxeCategories: (businessID, object) =>
    dispatch(addTaxeCategories.action(businessID, object)),
  deleteProduct: urlParams => dispatch(deleteProduct.action(urlParams)),
  updateProduct: (productID, object) =>
    dispatch(updateProduct.action(productID, object)),
  addTaxProduct: object => dispatch(addProductsTax.action(object)),
  reviewPurchase: () => dispatch(reviewPurchase.action()),
  getInventoryStock: businessID => dispatch(inventoryStock.action(businessID))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
