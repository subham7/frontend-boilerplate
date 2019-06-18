import React, { Component } from "react"
import { connect } from "react-redux"
import CustomerDirectory from "../../../../src/components/templates/CustomerDirectory"
import {
  receiptCardData,
  listData,
  customerData
} from "./customerDirectory.data"
import Loading from "./../../../../src/components/atoms/loading"


import { businessUsers, customerReceipts } from "../../../../src/reduxHelper"
import ROOTURL from "../../../../src/api/ROOTURL"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerDetails: [],
      receiptData: [],
      usersTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    console.log(businessID)
    this.props.getUsers(businessID).then(res => {
      console.log(res)
      this.setState({ filteredTableData: res, usersTableData: res })
    })
  }

  handleClick = userID => {
    console.log(userID)
    axios.get(`${ROOTURL}/users?_where=(userID,eq,${userID})`).then(res => {
      console.log(res)
      this.setState({ customerDetails: res.data })
      return this.props.getReceipts(userID)
    })
    .then(res => {
      console.log(res)
      this.setState({receiptData: res})
    })
  }

  handleSearch(e) {
    const filteredEvents = this.state.usersTableData.filter(function(data) {
      var pattern = new RegExp(e.target.value, "i")
      var name = `${data.firstName} ${data.LastName}`
      return name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.businessUsers.response)
      return (
        <CustomerDirectory
          listData={this.state.filteredTableData}
          customerData={this.state.customerDetails}
          actionData={["abcd", "efgh"]}
          date="Today 12-12-2019"
          receiptCardData={this.state.receiptData}
          onClick={this.handleClick}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading />
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  businessUsers: state.businessUsers
})

const mapDispatchToProps = dispatch => ({
  getUsers: (businessID) => dispatch(businessUsers.action(businessID)),
  getReceipts: (customerID) => dispatch(customerReceipts.action(customerID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
