import React from 'react';
import { connect } from 'react-redux'

// import {getproductss, addproducts} from "../../../src/reduxHelper"
import Products from "../../../src/components/organisms/items"
import Categories from "../../../src/components/organisms/categories"

import {itemData} from './product.data';
import {categoryData} from "./category.data"
import uuidv4 from "uuid/v4"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


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



    handleCreateproducts(data, cb) {
      data.values.bproductsID = uuidv4()
      let businessID = this.props.business.response.data.businessID
        this.props.addproducts(businessID, data.values).then(res =>{
          this.loadproductsData()
          cb({status:true, message: "products created successful"})
        }).catch(err => {
          console.log(err)
          cb({status:false, message: "SomeError occured"})
        })
      }
      
      callback(key) {
        // console.log(key);
       }
    render() {
      console.log('rerender')
      if(true){
        return (
              <div>
                <Tabs defaultActiveKey={"1"} onChange={this.callback}>
                  <TabPane tab="Product Categories" key="1"><Categories cardData={categoryData.cardData} cascaderData={categoryData.cascaderData} columns={categoryData.categoryColumns} columnData={[]}/></TabPane>
                  <TabPane tab="Products" key="2"><Products rowSelection={{}} cardData={itemData.cardData} cascaderData={itemData.cascaderData} columns={itemData.productColumns} columnData={this.state.productsTableData} onCreate={(data,cb) => this.handleCreateproducts(data,cb)} /></TabPane>
                  
                </Tabs>
              </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }

  _createproductsColumns(data){
    let temp = []
    if(Array.isArray(data)){
      data.map(item => {
        let object = {}
        object.pocname = item.pocName,
        object.name = item.name
        object.address = item.address
        object.email = item.pocEmail
        temp.push(object)
      })            
    }else{
      let object = {}
      object.pocname = data.pocName,
      object.name = data.name
      object.address = data.address
      object.email = data.pocEmail
      temp.push(object)
      }
      console.log("inside create columns, temp: ", temp)
      return temp;
  }

  loadproductsData(){
    console.log("loading")
    let businessID = this.props.business.response.data.businessID
      this.props.getproductss(businessID).then(res => {
        console.log(this._createproductsColumns(res) + "est")
        this.setState({productsTableData: this._createproductsColumns(res)})  
      }).catch(err => {
        console.log(err)
      })
  }
}


const mapStateToProps = state => ({
    business: state.businesses,
    products: state.products,
    taxcategories: state.taxcategories,
    addproducts: state.addproducts
  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getproducts: (businessID) => dispatch(getproducts.action(businessID)),
    addproducts: (businessID, object) => dispatch(addproducts.action(businessID, object)),
    getTaxeCategories: (businessID) => dispatch(getTaxeCategories.action(businessID)),
    addTaxeCategories: (businessID, object) => dispatch(addTaxeCategories.action(businessID, object))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(App);