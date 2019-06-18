import React from "react"
import { connect } from "react-redux"

import {
  locations,
  addLocation,
  deleteLocation,
  updateLocation
} from "../../../src/reduxHelper"
import Locations from "../../../src/components/templates/locations"
import Loading from "./../../../src/components/atoms/loading"
import { locationColumns } from "./locations.data"
import uuidv4 from "uuid/v4"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredTableData: [],
      locationTableData: []
    }
  }

  componentDidMount() {
    this.loadLocationData()
  }

  handleCreateLocation(data, cb) {
    data.values.blocationID = uuidv4()
    data.values.business = this.props.business.response.data[0].businessID
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .addLocation(data.values)
      .then(res => {
        this.loadLocationData()
        cb({ status: true, message: "Location created successfully" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "Some Error occured" })
      })
  }

  handleSearch(e) {
    let value = e.target.value
    const filteredEvents = this.state.locationTableData.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // console.log((pattern), "patttttttern")
      return data.name.match(pattern)
      // return data.name.includes(value)
    })
    console.log(filteredEvents, "filterrrr")
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.locations.isLoaded) {
      return (
        <div>
          <Locations
            rowSelection={{}}
            columns={locationColumns}
            columnData={this.state.filteredTableData}
            pagination={{
              pageSize: 10,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            onCreate={(data, cb) => this.handleCreateLocation(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <Loading />
    }
  }

  _createLocationColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.pocname = item.pocName
        object.name = item.name
        object.number = item.pocPhone
        object.blocationID = item.blocationID
        object.address = item.address
        ;(object.email = item.pocEmail), (object.prefilledValues = item)
        object.handleFeatures = {
          handleDelete: id => {
            console.log(id)
            this.props
              .deleteLocation(id)
              .then(res => {
                this.loadLocationData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            this.props
              .updateLocation(id, data.values)
              .then(res => {
                this.loadLocationData()
                cb({ status: true, message: "Location updated" })
              })
              .catch(err => {
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
      object.prefilledValues = item
      object.handleFeatures = {
        handleDelete: id => {
          console.log(id)
          this.props
            .deleteLocation(id)
            .then(res => {
              this.loadLocationData()
            })
            .catch(err => {
              console.log(err)
            })
        },
        handleUpdate: (data, id, cb) => {
          this.props
            .updateLocation(id, data.values)
            .then(res => {
              this.loadLocationData()
              cb({ status: true, message: "Location updated" })
            })
            .catch(err => {
              console.log(err)
              cb({ status: false, message: "Some Error while updating" })
            })
        }
      }
      temp.push(object)
    }
    return temp
  }

  loadLocationData() {
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getLocations(businessID)
      .then(res => {
        this.setState({ locationTableData: this._createLocationColumns(res) })
        this.setState({ filteredTableData: this.state.locationTableData })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  locations: state.locations
})

// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getLocations: businessID => dispatch(locations.action(businessID)),
  addLocation: object => dispatch(addLocation.action(object)),
  deleteLocation: blocationID => dispatch(deleteLocation.action(blocationID)),
  updateLocation: (blocationID, object) =>
    dispatch(updateLocation.action(blocationID, object))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
