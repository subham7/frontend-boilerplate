import React from "react"
import { connect } from "react-redux"

import wrapper from "./wrapper"
import PaymentReport from "./../../../src/components/templates/itemSalesReport"
import { inventoryReportData } from "./inventoryReport.data"
import Loader from "./../../../src/components/atoms/loading"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationCascaderData: [],
      categoryCascaderData: [],
      dateRange: []
    }
  }

  componentDidMount() {
    this.createLocationCascaderData()
    this.createCategoryCascaderData()
  }

  render() {
    return (
      <div>
        <PaymentReport
          columns={inventoryReportData.columns}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          cascaderData={this.createCascaderDataArray()}
          handleDateChange={range => this.handleDateChange(range)}
        />
      </div>
    )
  }

  createCascaderDataArray = () => {
    return [
      {
        placeholder: "Select Location",
        optionArray: this.state.locationCascaderData,
        mode: "multiple",
        onChange: value => this.handleSearchByLocationId(value)
      },
      {
        placeholder: "Select Category",
        optionArray: this.state.categoryCascaderData,
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

  createCategoryCascaderData = () => {
    let categoryData = this.props.productCategories.response.data
    this.setState({
      categoryCascaderData: categoryData.map(item => ({
        value: item.productcategoryID,
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
  locations: state.locations,
  productCategories: state.productCategories
})

const mapDispatchToState = dispatch => ({})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(App)
)
