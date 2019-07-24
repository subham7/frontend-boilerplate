import React, { Component } from "react"
import { connect } from "react-redux"
import {
  businessTransactions,
  receiptById,
} from "../../../src/reduxHelper"
import Transactions from "../../../src/components/organisms/transactions"
import { transactionColumns } from "./transactions.data"
import Loading from "../../../src/components/atoms/loading"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { transactiosTableData: [], filteredTableData: [] }
  }

  componentDidMount() {
    this.loadTransactions()
  }

  handleSearch(e) {
    const filteredEvents = this.state.transactiosTableData.filter(function(
      data
    ) {
      var pattern = new RegExp(e.target.value, "i")
      return data.transactionID.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.businessTransactions.isLoaded)
      return (
        <Transactions
          rowSelection={{}}
          columns={transactionColumns}
          columnData={this.state.filteredTableData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          onSearch={value => this.handleSearch(value)}
        />
      )
    else return <Loading/>
  }

  _createTransactionColumns(data) {
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.transactionID = item.transactionID
        object.receiptID = item.receipt,
        object.type =  (item.transactiontypeunfold).name,
        object.amount = item.amount
        object.date = item.date.split('T')[0]
        object.time = item.date.split('T')[1].substr(0, 8)
        object.handleModalClick = (receiptID, modalData) => {
          console.log(receiptID, "rid")
          this.props.getReceiptById(receiptID).then(res => {
            var data = [res, item]
            modalData(data)
          })
        }
        temp.push(object)
      })
    }
    return temp
  }

  loadTransactions() {
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getBusinessTransactions(businessID)
      .then(_ => {
        this.setState(
          {
            transactiosTableData: this._createTransactionColumns(
              this.props.businessTransactions.response.data
            )
          },
          () => {
            this.setState({
              filteredTableData: this.state.transactiosTableData
            })
          }
        )
      })
      .catch(err => console.log(err))
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  businessTransactions: state.businessTransactions
})

const mapDispatchToProps = dispatch => ({
  getBusinessTransactions: businessID => dispatch(businessTransactions.action(businessID)),
  getReceiptById: (rid) => dispatch(receiptById.action(rid)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
