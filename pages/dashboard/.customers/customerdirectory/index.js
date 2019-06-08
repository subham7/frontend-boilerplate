import React, { Component } from "react"
import { connect } from "react-redux"
import CustomerDirectory from "../../../../src/components/templates/CustomerDirectory"
import {
  receiptCardData,
  listData,
  customerData
} from "./customerDirectory.data"

class App extends Component {
  render() {
    if (true)
      return (
        <CustomerDirectory
          customerData={customerData}
          actionData={["abcd", "efgh"]}
          date="Today 12-12-2019"
          receiptCardData={receiptCardData}
          data={listData}
          customerId="xx12xx"
        />
      )
    else return <h1>Loading..</h1>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
