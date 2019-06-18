import React, { Component } from "react"
import { connect } from "react-redux"
import Permission from "./../../../src/components/templates/permission"
import {
  getPermissions,
  updatePermission,
  getLocationByBid,
  getEmployeeByLid
} from "./../../../src/reduxHelper"
import Loading from "./../../../src/components/atoms/loading"
import { message } from "antd"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { formValues: { location: "", employee: "" } }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    this.props.getLocationByBid(businessID).then(res => console.log(res))
  }

  createRuleData = data => {
    if (!data) return null
    else if (Object.keys(data.data).length === 0) return null
    return data.data.map(item => ({
      roleID: item.role,
      user: item.user,
      location: item.location,
      permission: item.permission,
      role: JSON.parse(item.roleunfold).name
    }))
  }

  createLocationData = data => {
    if (Object.keys(data).length === 0) return null
    return data.map(item => ({
      value: item.blocationID,
      name: item.name
    }))
  }

  createEmployeeData = data => {
    if (Object.keys(data).length === 0) return null
    return data.map(item => {
      let name = JSON.parse(item.userunfold)
      return {
        value: item.user,
        name: `${name.firstName} ${name.LastName}`
      }
    })
  }

  handleChange = (checked, roleID, user, location) => {
    this.props
      .updatePermission({
        role: roleID,
        permission: checked,
        user: user,
        location: location
      })
      .then(_ => {
        message.success("Permission changed successfully.")
      })
      .catch(err => {
        message.error("There was an error")
        console.log(err)
      })
  }

  handleValue = (value, name) => {
    this.setState({ formValues: { ...this.state.formValues, [name]: value } })
  }

  onClick = () => {
    this.props.getPermissions(this.state.formValues.employee)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  }

  handleFocus = option => {
    switch (option) {
      case "employee":
        this.props.getEmployeeByLid(this.state.formValues.location)
        break
      case "location":
        this.setState({
          formValues: {
            ...this.state.formValues,
            employee: ""
          }
        })
        break

      default:
        console.log("Some Error Occured")
        break
    }
  }

  render() {
    if (this.props.locationData.isLoaded)
      return (
        <Permission
          rules={this.createRuleData(this.props.permissions.response)}
          onChange={this.handleChange}
          formData={{
            handleValue: this.handleValue,
            value: {
              location: this.state.formValues.location,
              employee: this.state.formValues.employee
            },
            handleFocus: this.handleFocus,
            location: this.createLocationData(
              this.props.locationData.response.data
            ),
            employee: this.props.employeeData.isLoaded
              ? this.createEmployeeData(this.props.employeeData.response.data)
              : null,
            onClick: this.onClick
          }}
        />
      )
    else return <Loading />
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  permissions: state.getPermissions,
  employeeData: state.getEmployeeByLid,
  locationData: state.getLocationByBid
})

const mapDispatchToProps = dispatch => ({
  getPermissions: userID => dispatch(getPermissions.action(userID)),
  updatePermission: data => dispatch(updatePermission.action(data)),
  getEmployeeByLid: locationID => dispatch(getEmployeeByLid.action(locationID)),
  getLocationByBid: businessID => dispatch(getLocationByBid.action(businessID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
