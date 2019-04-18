import React from "react"
import { connect } from "react-redux"

import { locations, addLocation, deleteLocation, updateLocation } from "../../../src/reduxHelper"
import Locations from "../../../src/components/templates/locations"

import { locationColumns, locationColumnData } from "./locations.data"

import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationTableData: []
    }
  }

  componentDidMount() {
    this.loadLocationData()
  }

  handleCreateLocation(data, cb) {
    data.values.blocationID = uuidv4()
    let businessID = this.props.business.response.data.businessID
    this.props
      .addLocation(businessID, data.values)
      .then(res => {
        this.loadLocationData()
        cb({ status: true, message: "Location created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  render() {
    if (this.props.locations.isLoaded) {
      // console.log(this.state.locationTableData)
      return (
        <div>
          <Locations
            rowSelection={{}}
            columns={locationColumns}
            columnData={this.state.locationTableData}
            onCreate={(data, cb) => this.handleCreateLocation(data, cb)}
          />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }

  _createLocationColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {};
        object.pocname = item.pocName
        object.name = item.name
        object.blocationID = item.blocationID
        object.address = item.address
        object.email = item.pocEmail
        object.handleFeatures = {
          handleDelete: (id) => {
            console.log(id)
            this.props.deleteLocation(id).then(res => {
              this.loadLocationData();
            }).catch(err => {
              console.log(err);
            })
          },
          handleUpdate: (data, id, cb) => {
            console.log("clicked", data, id, cb)
            this.props.updateLocation(id, data.values).then(res => {
              this.loadLocationData()
              cb({ status: true, message: "Location updated" })
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
        ;(object.pocname = item.pocName), (object.name = item.name)
      object.blocationID = item.blocationID
      object.address = data.address
      object.email = data.pocEmail
      temp.push(object)
    }
    return temp
  }

  loadLocationData() {
    let businessID = this.props.business.response.data.businessID
    this.props
      .getLocations(businessID)
      .then(res => {
        this.setState({ locationTableData: this._createLocationColumns(res) })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  locations: state.locations,
  addLocation: state.addLocation,
  deleteLocation: state.deleteLocation,
  updateLocation: state.updateLocation
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getLocations: businessID => dispatch(locations.action(businessID)),
  addLocation: (businessID, object) => dispatch(addLocation.action(businessID, object)),
  deleteLocation: (blocationID) => dispatch(deleteLocation.action(blocationID)),
  updateLocation: (blocationID, object) => dispatch(updateLocation.action(blocationID, object)),  
  })
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
