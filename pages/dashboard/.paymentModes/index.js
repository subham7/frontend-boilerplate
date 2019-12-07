import React from "react"
import { connect } from "react-redux"
import axios from 'axios'
import {
  locations,
  addLocation
} from "../../../src/reduxHelper"
import PaymentModes from "../../../src/components/templates/paymentModes"
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
    // console.log(data, "main object")
    const headers = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    data.textInput.blocationID = uuidv4()
    data.textInput.business = this.props.business.response.data[0].businessID
    data.fileInput.append('data', JSON.stringify(data.textInput));
    let finalInput = data.fileInput
    this.props
      .addLocation(finalInput, headers)
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
    const filteredEvents = this.state.locationTableData.filter(function (data) {
      var pattern = new RegExp(value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.locations.isLoaded) {
      return (
        <div>
          <PaymentModes
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
        object.email = item.pocEmail
        object.prefilledValues = item
        object.handleFeatures = {
          handleCheckbox: (checkedValues) => {
            console.log('checked = ', checkedValues);
          }
        }
        temp.push(object)
      })
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
  addLocation: (object, headers) => dispatch(addLocation.action(object, headers))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
