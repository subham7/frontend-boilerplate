import React from 'react';
import { connect } from 'react-redux'

// import {getproductss, addproducts} from "../../../src/reduxHelper"
import Products from './.products'
import Categories from "./.productcategories"

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

      
      callback(key) {
        // console.log(key);
       }
    render() {
      console.log('rerender')
      if(true){
        return (
              <div>
                <Tabs defaultActiveKey={"1"} onChange={this.callback}>
                  <TabPane tab="Product Categories" key="1"><Categories/></TabPane>
                  <TabPane tab="Products" key="2">kdnjksn</TabPane>
                </Tabs>
              </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }

}


const mapStateToProps = state => ({

  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
      
})
  export default connect(mapStateToProps,mapDispatchToProps)(App);