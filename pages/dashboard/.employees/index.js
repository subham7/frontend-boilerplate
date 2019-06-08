import React, { Component } from "react"
import { connect } from "react-redux"

import {
  employees,
  addEmployee,
  employeelocations,
  addEmployeeLocation,
  deleteEmployee,
  updateEmployee
} from "../../../src/reduxHelper"
import Employees from "./../../../src/components/templates/employee"
import { employeeColumns, employeeColumnData } from "./employees.data"
import wrapper from "./wrapper"

import uuid from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { employeesTableData: [] }
  }

  componentDidMount() {
    this.loadEmployeeData()
  }
  handleCreateLocation(data, cb) {
    data.values.userID = uuid()
    data.values.business = this.props.business.response.data.businessID
    data.values.usertype = "8a0930f9-5aab-11e9-9666-f8cab8258ec4"
    this.props
      .addEmployee(data.values)
      .then(res => {
        this.loadEmployeeData()
        cb({ status: true, message: "Employee created successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  handleAssignUserLocation(data, cb) {
    console.log(data.values)
    this.props
      .addEmployeeLocation(data.values)
      .then(res => {
        cb({ status: true, message: "User Assigned to location successful" })
      })
      .catch(err => {
        console.log(err)
        cb({ status: false, message: "SomeError occured" })
      })
  }

  // 8a0930f9-5aab-11e9-9666-f8cab8258ec4
  render() {
    if (true)
      return (
        <Employees
          formData={this.createSelectData(this.props.locations.response.data)}
          rowSelection={{}}
          columns={employeeColumns}
          columnData={this.state.employeesTableData}
          onCreate={(data, cb) => this.handleCreateLocation(data, cb)}
        />
      )
    else return <h1>Loading...</h1>
  }

  _createEmployeeColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.name = item.firstName + " " + item.LastName
        object.userID = item.userID
        object.userName = item.userName
        object.email = item.email
        object.phone = item.phone
        object.prefilledValues = item
        object.assign = {
          onCreate: (data, cb) => {
            data.values.user = item.userID
            this.handleAssignUserLocation(data, cb)
          },
          employeeLocation: object => this.props.employeelocations(object),
          employeeID: item.userID,
          locationData: this.createSelectData(
            this.props.locations.response.data
          )
        }
        object.handleFeatures = {
          handleDelete: id => {
            // let businessID = this.props.business.response.data.businessID;
            this.props
              .deleteEmployee(id)
              .then(res => {
                this.loadEmployeeData()
              })
              .catch(err => {
                console.log(err)
              })
          },
          handleUpdate: (data, id, cb) => {
            this.props
              .updateEmployee(id, data.values)
              .then(res => {
                this.loadEmployeeData()
                cb({ status: true, message: "Employee data updated" })
              })
              .catch(err => {
                console.log(err)
                cb({
                  status: false,
                  message: "Some Error occured while updating"
                })
              })
          }
        }
        temp.push(object)
      })
    } else {
      let object = {}
      object.name = data.firstName + " " + data.LastName
      object.userName = data.userName
      object.email = data.email
      object.phone = data.phone
      object.assign = {
        onCreate: (data, cb) => {
          data.values.user = item.userID
          this.handleAssignUserLocation(data, cb)
        },
        employeeLocation: object => this.props.employeelocations(object),
        locationData: this.createSelectData(this.props.locations.response.data)
      }
      object.handleFeatures = {
        handleDelete: id => {
          // let businessID = this.props.business.response.data.businessID;
          this.props
            .deleteEmployee(id)
            .then(res => {
              this.loadEmployeeData()
            })
            .catch(err => {
              console.log(err)
            })
        },
        handleUpdate: (data, id, cb) => {
          this.props
            .updateEmployee(id, data.values)
            .then(res => {
              this.loadEmployeeData()
              cb({ status: true, message: "Employee data updated" })
            })
            .catch(err => {
              console.log(err)
              cb({
                status: false,
                message: "Some Error occured while updating"
              })
            })
        }
      }
      temp.push(object)
    }
    return temp
  }

  // Integrated with test api
  loadEmployeeData() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data.businessID
    this.props
      .getEmployees(urlParams)
      .then(res => {
        // console.log(res)
        this.setState({
          employeesTableData: this._createEmployeeColumns(
            this.props.employees.response.data
          )
        })
      })
      .catch(err => console.log(err))
  }

  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.blocationID
    }))
    return selectData
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  employees: state.employees,
  addEmployee: state.addEmployee,
  updateEmployee: state.updateEmployee,
  deleteEmployee: state.deleteEmployee,
  locations: state.locations
})

const mapDispatchToProps = dispatch => ({
  getEmployees: object => dispatch(employees.action(object)),
  addEmployee: object => dispatch(addEmployee.action(object)),
  addEmployeeLocation: object => dispatch(addEmployeeLocation.action(object)),
  deleteEmployee: employeeID => dispatch(deleteEmployee.action(employeeID)),
  updateEmployee: (employeeID, object) =>
    dispatch(updateEmployee.action(employeeID, object)),
  employeelocations: object => dispatch(employeelocations.action(object))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
