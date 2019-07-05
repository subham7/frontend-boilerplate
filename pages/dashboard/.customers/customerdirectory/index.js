import React, { Component } from "react"
import { connect } from "react-redux"
import CustomerDirectory from "../../../../src/components/templates/CustomerDirectory"
import Loading from "./../../../../src/components/atoms/loading"

import {
  businessUsers,
  customerReceipts,
  receiptById,
  receiptTransactionType
} from "../../../../src/reduxHelper"
import ROOTURL from "../../../../src/api/ROOTURL"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerDetails: [],
      receiptData: [],
      receiptDetails: [],
      // receiptTransactionsData: [],
      usersTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    console.log(businessID)
    this.props.getUsers(businessID).then(res => {
      this.setState({ filteredTableData: res, usersTableData: res })
    })
  }

  handleClick = userID => {
    console.log(userID)
    axios.get(`${ROOTURL}/users?_where=(userID,eq,${userID})`).then(res => {
      this.setState({ customerDetails: res.data })
      return this.props.getReceipts(userID)
    })
      .then(res => {
        console.log(res)
        this.setState({ receiptData: res })
      })
  }

  handleReceiptClick = (receiptID, cb) => {
    console.log(receiptID, "receiptId")
    var promises = [
      this.props.getReceiptById(receiptID),
      this.props.getReceiptTransactionType(receiptID)
    ]
    Promise.all(promises)
      .then(result => {
        var data = [result[0], result[1][0]]
        this.setState({receiptDetails: data})
        // console.log(this.state.receiptDetails, "state")
        cb(this.state.receiptDetails)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSearch(e) {
    const filteredEvents = this.state.usersTableData.filter(function (data) {
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
          receiptCardData={this.state.receiptData}
          receiptCardDetails={this.state.receiptDetails}
          actionData={["abcd", "efgh"]}
          // date="Today 12-12-2019"
          onClick={this.handleClick}
          handleReceiptClick={this.handleReceiptClick}
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
  getReceipts: (customerID) => dispatch(customerReceipts.action(customerID)),
  getReceiptById: (rid) => dispatch(receiptById.action(rid)),
  getReceiptTransactionType: (rid) => dispatch(receiptTransactionType.action(rid)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
