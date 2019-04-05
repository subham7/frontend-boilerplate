import React from 'react';
import { connect } from 'react-redux'

// import {getTaxess, addTaxes} from "../../../src/reduxHelper"
import Taxes from "../../../src/components/organisms/taxes"

import {taxesColumns, taxesColumnData} from './taxes.data'
import {itemData} from "../../../pagesData/item.data"
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import uuidv4 from "uuid/v4"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          taxesTableData :[]
        }
    }

    componentDidMount(){
      console.log("mount")
      // this.loadTaxesData()
    }



    handleCreateTaxes(data, cb) {
      data.values.bTaxesID = uuidv4()
      let businessID = this.props.business.response.data.businessID
        this.props.addTaxes(businessID, data.values).then(res =>{
          this.loadTaxesData()
          cb({status:true, message: "Taxes created successful"})
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
                  <TabPane tab="Tax Categories" key="1"><h1>Nothing here</h1></TabPane>
                  <TabPane tab="Taxes" key="2"><Taxes rowSelection={{}} cascaderData={itemData.cascaderData} columns={taxesColumns} columnData={this.state.taxesTableData} onCreate={(data,cb) => this.handleCreateTaxes(data,cb)} /></TabPane>
                </Tabs>
              </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }

  _createTaxesColumns(data){
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

  loadTaxesData(){
    console.log("loading")
    let businessID = this.props.business.response.data.businessID
      this.props.getTaxess(businessID).then(res => {
        console.log(this._createTaxesColumns(res) + "est")
        this.setState({taxesTableData: this._createTaxesColumns(res)})  
      }).catch(err => {
        console.log(err)
      })
  }
}


const mapStateToProps = state => ({
    business: state.businesses,
    taxes: state.taxes,
    taxcategories: state.taxcategories,
    addTaxes: state.addTaxes
  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getTaxes: (businessID) => dispatch(getTaxes.action(businessID)),
    addTaxes: (businessID, object) => dispatch(addTaxes.action(businessID, object)),
    getTaxeCategories: (businessID) => dispatch(getTaxeCategories.action(businessID)),
    addTaxeCategories: (businessID, object) => dispatch(addTaxeCategories.action(businessID, object))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(App);