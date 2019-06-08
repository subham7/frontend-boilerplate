import React from "react"
import { connect } from "react-redux"

import { products, addProduct, deleteProduct, updateProduct } from "../../../../src/reduxHelper"
import Products from '../../../../src/components/organisms/items'
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import wrapper from "./wrapper"
import { itemData } from './product.data'
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    this.loadproductsData()
  }

  handleCreateproducts(data, cb) {
    data.values.productID = uuidv4()
    data.values.business = this.props.business.response.data[0][0].businessID
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
    const filteredEvents = this.state.productsTableData.filter(function (data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
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
            pagination={{ pageSize: 10, showLessItems: true, showSizeChanger: true ,pageSizeOptions: ['5', '10', '15', '20'] }}
            cardData={itemData.cardData}
            cascaderData={itemData.cascaderData}
            columns={itemData.productColumns}
            columnData={this.state.filteredTableData}
            onCreate={(data, cb) => this.handleCreateproducts(data, cb)}
            onSearch={(value) => this.handleSearch(value)}
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
        object.productID = item.productID,
        object.code = item.code
        object.barcode = item.barcode
        object.category = item.productcategory
        object.price = item.price
        object.prefilledValues = item
        object.selectData = this.createSelectData(this.props.productCategories.response.data)
        object.handleFeatures = {
          handleDelete: urlParams => {
            urlParams.businessID = this.props.business.response.data[0][0].businessID;
            console.log("here", urlParams)
            this.props.deleteProduct(urlParams).then(res => {
              this.loadproductsData();
            }).catch(err => {
              console.log(err);
            })
          },
          editProduct: (data, id, cb) => {
            console.log("clicked", data, id, cb)
            this.props.updateProduct(id, data.values).then(res => {
              this.loadproductsData()
              cb({ status: true, message: "Product updated" })
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
      object.name = data.name
      object.productID = item.productID,
      object.code = data.code
      object.barcode = data.barcode
      object.category = data.productcategory
      object.price = data.price
      object.handleFeatures = {
        handleDelete: urlParams => {
          urlParams.businessID = this.props.business.response.data[0].businessID;
          console.log("here", urlParams)
          this.props.deleteProduct(urlParams).then(res => {
            this.loadproductsData();
          }).catch(err => {
            console.log(err);
          })
        },
        editProduct: (data, id, cb) => {
          console.log("clicked", data, id, cb)
          this.props.updateProduct(id, data.values).then(res => {
            this.loadproductsData()
            cb({ status: true, message: "Product updated" })
          }).catch(err => {
            console.log(err)
            cb({ status: false, message: "Some Error while updating" })
          })
        }
      }
      temp.push(object)
      }
      return temp
    }

    loadproductsData() {
      console.log("loading")
      let businessID = this.props.business.response.data[0].businessID
      this.props.getproducts(businessID).then(res => {
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
  }

  const mapStateToProps = state => {
    // console.log("apnaaaaaaaa stateeeee", state)
    return({
    business: state.businesses,
    products: state.products,
    taxcategories: state.taxcategories,
    // addProduct: state.addProduct,
    // deleteProduct: state.deleteProduct,
    // updateProduct: state.updateProduct
  })}
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getproducts: businessID => dispatch(products.action(businessID)),
    addProduct: (businessID, object) =>
      dispatch(addProduct.action(businessID, object)),
    getTaxeCategories: businessID =>
      dispatch(getTaxeCategories.action(businessID)),
    addTaxeCategories: (businessID, object) =>
      dispatch(addTaxeCategories.action(businessID, object)),
    deleteProduct: (urlParams) =>
      dispatch(deleteProduct.action(urlParams)),
    updateProduct: (productID, object) =>
      dispatch(updateProduct.action(productID, object))
  })
  export default wrapper(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(App)
  )
