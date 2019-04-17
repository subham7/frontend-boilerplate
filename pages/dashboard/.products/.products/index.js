import React from "react"
import { connect } from "react-redux"

import { products, addProduct, deleteProduct } from "../../../../src/reduxHelper"
import Products from '../../../../src/components/organisms/items'
import ButtonIcon from '../../../../src/components/atoms/tableButton';

import { itemData } from './product.data'
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productsTableData: []
    }
    this.productColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'CODE',
        dataIndex: 'code',
        key: 'code'
      },
      {
        title: 'BARCODE',
        dataIndex: 'barcode',
        key: 'barcode'
      },
      {
        title: 'CATEGORY',
        dataIndex: 'category',
        key: 'category'
      },
      // {
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
        render: price => <span><b>INR {price}</b></span>
      },
      {
        title: '',
        dataIndex: '',
        render: (object) => {
          // console.log("theeereee", object);
          return (
            <ButtonIcon onSubmit={() => this.handleDelete(object)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
          )
        }
      }
    ]
  }

  handleDelete = urlParams => {
    urlParams.businessID = this.props.business.response.data.businessID;
    console.log("here", urlParams)
    this.props.deleteProduct(urlParams).then(res => {
      this.loadproductsData();
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
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
    // console.log('rerender')
    if (this.props.products.isLoaded) {
      return (
        <div>
          <Products
            rowSelection={{}}
            cardData={itemData.cardData}
            cascaderData={itemData.cascaderData}
            columns={this.productColumns}
            columnData={this.state.productsTableData}
            onCreate={(data, cb) => this.handleCreateproducts(data, cb)}
          />
        </div>
      );
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
    // console.log("inside create columns, temp: ", temp)
    return temp
  }

  loadproductsData() {
    console.log("loading")
    let businessID = this.props.business.response.data.businessID

    this.props.getproducts(businessID).then(res => {
      // console.log(this._createproductsColumns(res))
      this.setState({ productsTableData: this._createproductsColumns(res) })
    })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  products: state.products,
  taxcategories: state.taxcategories,
  addProduct: state.addProduct,
  deleteProduct: state.deleteProduct
})
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
    dispatch(deleteProduct.action(urlParams))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
