import React from 'react';
import { connect } from 'react-redux'

import {getLocations, addLocation} from "../../../src/reduxHelper"
import Locations from "../../../src/components/templates/locations"

import {locationColumns, locationColumnData} from './locations.data'

import uuidv4 from "uuid/v4"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          locationTableData :[]
        }
    }

    componentDidMount(){
      console.log("mount")
      this.loadLocationData()
    }



    handleCreateLocation(data, cb) {
      data.values.blocationID = uuidv4()
      let businessID = this.props.business.response.data.businessID
        this.props.addLocation(businessID, data.values).then(res =>{
          this.loadLocationData()
          cb({status:true, message: "Location created successful"})
        }).catch(err => {
          console.log(err)
          cb({status:false, message: "SomeError occured"})
        })
      }

    render() {
      console.log('rerender')
      if(this.props.locations.isLoaded){
        return (
            <div> 
                <Locations rowSelection={{}} columns={locationColumns} columnData={this.state.locationTableData} onCreate={(data,cb) => this.handleCreateLocation(data,cb)} />
            </div>
          );
      }else {
          return <h1>Loading</h1>
      }
        
  }

  _createLocationColumns(data){
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

  loadLocationData(){
    console.log("loading")
    let businessID = this.props.business.response.data.businessID
      this.props.getLocations(businessID).then(res => {
        console.log(this._createLocationColumns(res) + "est")
        this.setState({locationTableData: this._createLocationColumns(res)})  
      }).catch(err => {
        console.log(err)
      })
  }
}


const mapStateToProps = state => ({
    business: state.businesses,
    locations: state.locations,
    addLocation: state.addLocation
  })
  // Example Syntax for writing dispatch
  const mapDispatchToProps = dispatch => ({
    getLocations: (businessID) => dispatch(getLocations.action(businessID)),
    addLocation: (businessID, object) => dispatch(addLocation.action(businessID, object))
  })
  export default connect(mapStateToProps,mapDispatchToProps)(App);