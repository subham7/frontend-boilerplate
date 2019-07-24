import React, { Component } from "react"
import { connect } from "react-redux"
import Permission from "../../../src/components/templates/permission"
import {
  updateWebPermission,
  businessPermissions,
  getEmployeeByBusinessId
} from "../../../src/reduxHelper"
import Loading from "../../../src/components/atoms/loading"
import { message } from "antd"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { formValues: { employee: "" } }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    this.props.getEmployeeByBusinessId(businessID).then(res => console.log(res))
  }

  createRuleData = data => {
    if (!data) return null
    else if (Object.keys(data.data).length === 0) return null
    return data.data.map(item => ({
      roleID: item.brole,
      user: item.user,
      business: item.business,
      permission: item.permission,
      role: item.broleunfold.name
    }))
  }

  createEmployeeData = data => {
    if (Object.keys(data).length === 0) return null
    return data.map(item => ({
      value: item.userID,
      name: `${item.firstName} ${item.LastName}`
    }))
  }

  handleChange = (checked, broleId, userId, businessId) => {
    this.props
      .updateWebPermission({ permission: checked }, broleId, userId, businessId)
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
    this.props.businessPermissions(this.state.formValues.employee)
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
    if (this.props.employeeData.isLoaded)
      return (
        <Permission
          type="web"
          rules={this.createRuleData(this.props.permissions.response)}
          onChange={this.handleChange}
          formData={{
            handleValue: this.handleValue,
            value: {
              employee: this.state.formValues.employee
            },
            employee: this.createEmployeeData(
              this.props.employeeData.response.data
            ),
            onClick: this.onClick
          }}
        />
      )
    else return <Loading />
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  permissions: state.businessPermissions,
  employeeData: state.getEmployeeByBusinessId,
  locationData: state.getLocationByBid
})

const mapDispatchToProps = dispatch => ({
  updateWebPermission: (data, broleId, userId, businessId) =>
    dispatch(updateWebPermission.action(data, broleId, userId, businessId)),
  businessPermissions: userId => dispatch(businessPermissions.action(userId)),
  getEmployeeByBusinessId: businessId =>
    dispatch(getEmployeeByBusinessId.action(businessId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
