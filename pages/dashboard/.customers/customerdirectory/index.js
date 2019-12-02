import React, { Component } from "react"
import { connect } from "react-redux"
import CustomerDirectory from "../../../../src/components/templates/CustomerDirectory"
import Loading from "./../../../../src/components/atoms/loading"

import {
  uniqueCustomers,
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
      // console.log()
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

  handleModalClick = (receiptID, modalData) => {
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
        modalData(this.state.receiptDetails)
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
    if (this.props.uniqueCustomers.response)
      return ( 
        <CustomerDirectory
          listData={this.state.filteredTableData}
          customerData={this.state.customerDetails}
          receiptCardData={this.state.receiptData}
          receiptCardDetails={this.state.receiptDetails}
          actionData={["abcd", "efgh"]}
          // date="Today 12-12-2019"
          onClick={this.handleClick}
          handleModalClick={this.handleModalClick}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading />
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  uniqueCustomers: state.uniqueCustomers
})

const mapDispatchToProps = dispatch => ({
  getUsers: (businessID) => dispatch(uniqueCustomers.action(businessID)),
  getReceipts: (customerID) => dispatch(customerReceipts.action(customerID)),
  getReceiptById: (rid) => dispatch(receiptById.action(rid)),
  getReceiptTransactionType: (rid) => dispatch(receiptTransactionType.action(rid)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
