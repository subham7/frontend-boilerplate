import React, { Component } from "react"
import { connect } from "react-redux"

import { employees } from "../../../src/reduxHelper"
import Employees from "./../../../src/components/templates/emplolyee"
import { employeeColumns, employeeColumnData } from "./employees.data"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { employeesTableData: [] }
  }

  componentDidMount() {
    this.loadEmployeeData()
  }

  render() {
    if (this.props.employees.isLoaded)
      return (
        <Employees
          rowSelection={{}}
          columns={employeeColumns}
          columnData={this.state.employeesTableData}
        />
      )
    else return <h1>Loading...</h1>
  }

  _createEmployeeColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.name
        object.employeeId = item.id
        object.role = item.username
        object.permissions = [
          "Permission",
          "Permission",
          "Permission",
          "Permission"
        ]
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = data.name
      object.employeeId = data.id
      object.role = data.username
      object.permissions = [
        "Permission",
        "Permission",
        "Permission",
        "Permission"
      ]
      temp.push(object)
    }
    return temp
  }

  // Integrated with test api
  loadEmployeeData() {
    let businessID = this.props.business.response.data.businessID
    this.props
      .getEmployees()
      .then(res => {
        this.setState({
          employeesTableData: this._createEmployeeColumns(
            this.props.employees.response.data
          )
        })
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  employees: state.employees
})

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(employees.action())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
