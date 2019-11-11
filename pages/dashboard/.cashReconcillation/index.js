import React from "react"
import { connect } from "react-redux"

import { employees } from "./../../../src/reduxHelper"
import wrapper from "./wrapper"
import CashReconcillation from "./../../../src/components/templates/cashReconcillation"
import Loader from "./../../../src/components/atoms/loading"
import { cashReconData } from "./cashReconcillation.data"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeCascaderData: [],
      locationCascaderData: [],
      cashReconData: []
    }
  }

  componentDidMount() {
    this.loadEmployeeData()
    this.createLocationCascaderData()
    this.setDataToState()
  }

  render() {
    if (this.props.employees.isLoaded) {
      return (
        <CashReconcillation
          columns={cashReconData.columns}
          columnData={this.state.cashReconData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          cascaderData={this.createCascaderDataArray()}
          reset={() => this.setDataToState()}
          applyFilter={() => this.applyFilter()}
        />
      )
    } else return <Loader />
  }

  // Loads employee data from api call
  loadEmployeeData() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getEmployees(urlParams)
      .then(_ => {
        this.createEmployeeCascaderData()
      })
      .catch(err => console.log(err))
  }

  // Converts employee data from api to cascader format
  createEmployeeCascaderData() {
    let employeeData = this.props.employees.response.data
    this.setState({
      employeeCascaderData: employeeData.map(item => ({
        value: item.userID,
        name: `${item.firstName} ${item.LastName}`
      }))
    })
  }

  // Converts location data from api to cascader format
  createLocationCascaderData() {
    let locationData = this.props.locations.response.data
    this.setState({
      locationCascaderData: locationData.map(item => ({
        value: item.blocationID,
        name: item.name
      }))
    })
  }

  // Returns array prop for cascader data with all the required fields
  createCascaderDataArray() {
    return [
      {
        placeholder: "Employee",
        optionArray: this.state.employeeCascaderData,
        onChange: value => this.handleSearchByStaffId(value)
      },
      {
        placeholder: "Location",
        optionArray: this.state.locationCascaderData,
        onChange: value => this.handleSearchByLocationId(value)
      }
    ]
  }

  handleCascaderValue(name, value) {
    this.setState({ [name]: value })
  }

  applyFilter() {
    for (let i = 0; i < this.createCascaderDataArray().length; i++)
    this.handleSearch
  }

  handleSearch() {
    const filteredEvents = this.state.cashReconData.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here staffId is compared to value
      return data.staffId.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Compares value from employee cascader to employeeId and change state wrt to the employeeId
  handleSearchByStaffId(value) {
    const filteredEvents = this.state.cashReconData.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here staffId is compared to value
      return data.staffId.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Compares value from location cascader to locationId and change state wrt to the locationId
  handleSearchByLocationId(value) {
    const filteredEvents = this.state.cashReconData.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here locationId is compared to value
      return data.locationId.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Sets api data to local state or reset all the filters
  setDataToState() {
    this.setState({ cashReconData: cashReconData.dummyData })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  employees: state.employees,
  locations: state.locations
})

const mapDispatchToProps = dispatch => ({
  getEmployees: object => dispatch(employees.action(object))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
