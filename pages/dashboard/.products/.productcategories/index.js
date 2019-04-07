import React from 'react';
import { connect } from 'react-redux'

import {products, addProduct} from "../../../../src/reduxHelper"
import Categories from "../../../../src/components/organisms/categories"

import {categoryData} from "./category.data"
import uuidv4 from "uuid/v4"


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          productsTableData :[]
        }
    }

    componentDidMount(){
      console.log("mount")
      // this.loadproductsData()
    }

    handleCreateProductCategory(data, cb){
      console.log(data);
      data.values.blocationID = uuidv4()
      // let businessID = this.props.response.data.businessID
      this.props.addProductCategory(businessID, data.values).then(res => {
        this.loadProductCategoryData()
        cb({status: true, message: "Product category added"})
      }). catch(err => {
        console.log(err);
        cb({status: false, message: "Some Error occured"})
      })
    }
      
      callback(key) {
        // console.log(key);
       }
    render() {
      console.log('rerender');
      if(true){
        return (
              <div>
                <Categories 
                  cardData={categoryData.cardData} 
                  cascaderData={categoryData.cascaderData} 
                  columns={categoryData.categoryColumns} 
                  columnData = {this.state.productsTableData}
                  onCreate={(data, cb) => this.handleCreateProductCategory(data, cb)} 
                />
              </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }
  _createProductCategory = (data) => {
    let temp = []
    if(Array.isArray(data)){
      data.map(item => {
        let object = {}
        // object.product = data.product,
        // object.code = data.code,
        // object.category = data.category
        temp.push(object)
      })
    } else {
      let object = {}

      temp.push(object)
    }
    return temp;
  }
  
  loadProductCategoryData = () => {
    businessID = this.props.business.data.businessID
    this.props.getProducts(businessID).then(res => {
      this.setState({productsTableData: this._createProductCategory(res)})
    }).catch(err => {
      console.log(err)
    })
  }
}


const mapStateToProps = state => ({
    business: state.businesses,
    products: state.products,
    addProduct: state.addProduct
  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getProducts: (businessID) => dispatch(products.action(businessID)),
    addLocation: (businessID, object) => dispatch(addProduct.action(businessID, object))
   })
  export default connect(mapStateToProps,mapDispatchToProps)(App);