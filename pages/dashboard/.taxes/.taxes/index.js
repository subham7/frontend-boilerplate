import React from 'react';
import { connect } from 'react-redux'

import Taxes from "../../../../src/components/organisms/taxes"

import {taxesColumns, taxesColumnData} from './taxes.data'
import {itemData} from "../../../../pagesData/item.data"

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
      if(true){
        return (
              <div>
                <Taxes rowSelection={{}} cascaderData={itemData.cascaderData} columns={taxesColumns} columnData={this.state.taxesTableData} onCreate={(data,cb) => this.handleCreateTaxes(data,cb)} />
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
        object.name = item.name
        object.name = item.taxCategory
        object.percentage = item.percentage
        temp.push(object)
      })            
    }else{
      let object = {}
      object.name = item.name
        object.name = item.taxCategory
        object.percentage = item.percentage
      temp.push(object)
      }
      return temp;
  }

  loadTaxesData(){
    let businessID = this.props.business.response.data.businessID
      this.props.getTaxes(businessID).then(res => {
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
    getTaxeCategories: (businessID) => dispatch(getTaxCategories.action(businessID))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(App);