import React, { Component } from "react"
import { connect } from "react-redux"

import Purchase from "../../../src/components/organisms/ItemPurchase"
import {
  stockdiary,
  addPurchase,
  getLocationByID
} from "../../../src/reduxHelper"

import { itemPurchaseData } from "./purchase.data"
import wrapper from "./wrapper"
import uuidv4 from "uuid/v4"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      purchaseItemTableData: [],
      filteredTableData: []
    }
  }

  componentDidMount() {
    console.log("purchase state", this.props)
    this.loadPurchaseData()
  }

  handleCreatePurchase = (data, cb) => {
    this.props
      .addPurchase(data.values)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleSearch(e) {
    const filteredEvents = this.state.purchaseItemTableData.filter(function(
      data
    ) {
      var pattern = new RegExp(e.target.value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    return (
      <div>
        <Purchase
          rowSelection={{}}
          columns={itemPurchaseData.itemPurchaseColumns}
          columnData={this.state.filteredTableData}
          cascaderData={itemPurchaseData.cascaderData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onSearch={value => this.handleSearch(value)}
          onCreate={(data, cb) => this.handleCreatePurchase(data, cb)}
        />
      </div>
    )
  }

  createpurchasecolumns(data) {
    let columns = []
    data.map(item =>
      columns.push({
        purchaseItemID: item.purchaseID,
        amount: item.amount,
        date: item.date,
        desription: item.description,
        vendor: item.vendor,
        location: JSON.parse(item.locationunfold).name
      })
    )
    return columns
  }

  loadPurchaseData() {
    this.props.stockdiary().then(data => {
      console.log("gibberish", data)
      this.setState({ purchaseItemTableData: this.createpurchasecolumns(data) })
      this.setState({ filteredTableData: this.state.purchaseItemTableData })
    })
  } 
}

const mapStateToProps = state => {
  return {
    stockdiary: state.stockdiary,
    blocations: state.getLocationByID
  }
}

const mapDispatchToProps = dispatch => ({
  stockdiary: () => dispatch(stockdiary.action()),
  addPurchase: data => dispatch(addPurchase.action(data))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
