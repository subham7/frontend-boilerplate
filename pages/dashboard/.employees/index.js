import React, { Component } from "react"
import { connect } from "react-redux"

import { employees } from "../../../src/reduxHelper"
import Employees from "./../../../src/components/templates/emplolyee"

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
    if (this.props.employees.isLoaded) return <div>Enployees</div>
    else return <h1>Loading</h1>
  }

  loadEmployeeData() {
    console.log("employee data load")
    this.props
      .getEmployees()
      .then(res => console.log(res))
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
