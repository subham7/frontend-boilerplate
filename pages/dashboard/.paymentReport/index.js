import React from "react"
import { connect } from "react-redux"

import wrapper from "./wrapper"
import PaymentReport from "./../../../src/components/templates/paymentReport"
import { paymentReportData } from "./paymentReport.data"
import Loader from "./../../../src/components/atoms/loading"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationCascaderData: [],
      dateRange: []
    }
  }

  componentDidMount() {
    this.createLocationCascaderData()
  }

  render() {
    return (
      <PaymentReport
        columns={paymentReportData.columns}
        pagination={{
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        }}
        cascaderData={this.createCascaderDataArray()}
        handleDateChange={range => this.handleDateChange(range)}
      />
    )
  }

  createCascaderDataArray = () => {
    return [
      {
        placeholder: "Location",
        optionArray: this.state.locationCascaderData,
        mode: "multiple",
        onChange: value => this.handleSearchByLocationId(value)
      }
    ]
  }

  createLocationCascaderData = () => {
    let locationData = this.props.locations.response.data
    this.setState({
      locationCascaderData: locationData.map(item => ({
        value: item.blocationID,
        name: item.name
      }))
    })
  }

  handleDateChange = range => {
    this.setState({ dateRange: range })
  }

  handleSearchByLocationId(value) {
    console.log(value)
  }
}

const mapStateToProps = state => ({
  locations: state.locations
})

const mapDispatchToState = dispatch => ({})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(App)
)
