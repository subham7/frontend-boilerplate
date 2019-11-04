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
    this.state = { employeeCascaderData: [], locationCascaderData: [] }
  }

  componentDidMount() {
    this.loadEmployeeData()
    this.createLocationCascaderData()
  }

  render() {
    if (this.props.employees.isLoaded) {
      return (
        <CashReconcillation
          columns={cashReconData.columns}
          columnData={cashReconData.dummyData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          cascaderData={this.createCascaderDataArray()}
        />
      )
    } else return <Loader />
  }

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

  createEmployeeCascaderData() {
    let employeeData = this.props.employees.response.data
    this.setState({
      employeeCascaderData: employeeData.map(item => ({
        value: item.userID,
        name: `${item.firstName} ${item.LastName}`
      }))
    })
  }

  createLocationCascaderData() {
    let locationData = this.props.locations.response.data
    this.setState({
      locationCascaderData: locationData.map(item => ({
        value: item.blocationID,
        name: item.name
      }))
    })
  }

  createCascaderDataArray() {
    return [
      {
        placeholder: "Employee",
        optionArray: this.state.employeeCascaderData,
        onChange: () => {}
      },
      {
        placeholder: "Location",
        optionArray: this.state.locationCascaderData,
        onChange: () => {}
      }
    ]
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
