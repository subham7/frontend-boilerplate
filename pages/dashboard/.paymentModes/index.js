import React from "react"
import { connect } from "react-redux"
import axios from 'axios'
import {
  businesses,
  updateBusinesses
} from "../../../src/reduxHelper"
import PaymentModes from "../../../src/components/templates/paymentModes"
import Loading from "./../../../src/components/atoms/loading"
import { locationColumns } from "./paymentmodes.data"
import { message } from "antd"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredTableData: [],
      businessTableData: []
    }
  }

  componentDidMount() {
    this.loadBusinessData()
  }

  handleSearch(e) {
    let value = e.target.value
    const filteredEvents = this.state.businessTableData.filter(function (data) {
      var pattern = new RegExp(value, "i")
      return data.name.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    if (this.props.businesses.isLoaded) {
      return (
        <div>
          <PaymentModes
            rowSelection={{}}
            columns={locationColumns}
            columnData={this.state.filteredTableData}
            pagination={{
              pageSize: 10,
              showLessItems: true,
              showSizeChanger: true,
              pageSizeOptions: ["5", "10", "15", "20"]
            }}
            // onCreate={(data, cb) => this.handleCreateLocation(data, cb)}
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      )
    } else {
      return <Loading />
    }
  }

  _createPaymentModeColumns(data) {
    // console.log
    let temp = []
    if (Array.isArray(data)) {
      data.map(item => {
        let object = {}
        object.businessID = item.businessID
        object.name = item.name
        object.paymentmodes = item.paymentmodes
        object.handleFeatures = {
          handleCheckbox: (objId, checkedValues) => {
            let object = {}
            object.paymentmodes = JSON.stringify(checkedValues)
            this.props.updateBusinesses(objId, object)
            .then(res =>{ 
              message.success("Payment Mode changed")
            })
            .catch(err => {
              console.log(err)
              message.error("Some error occured")
            })
          }
        }
        temp.push(object)
      })
    }
    return temp
  }

  loadBusinessData() {
    let businessID = this.props.business.response.data[0].businessID
    this.props
      .getbusinesses(businessID)
      .then(res => {
        this.setState({ businessTableData: this._createPaymentModeColumns(res) })
        this.setState({ filteredTableData: this.state.businessTableData })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  businesses: state.businesses
})

// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  getbusinesses: businessID => dispatch(businesses.action(businessID)),
  updateBusinesses: (businessID, object) => dispatch(updateBusinesses.action(businessID, object))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
