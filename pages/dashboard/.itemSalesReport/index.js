import React from "react"
import { connect } from "react-redux"
import update from 'immutability-helper';
import moment from 'moment';
import wrapper from "./wrapper"
import ItemSalesReport from "./../../../src/components/templates/itemSalesReport"
import { itemSalesReportData } from "./itemSalesReport.data"
import {
  salesReport
} from '../../../src/reduxHelper'
import Loader from "./../../../src/components/atoms/loading"
import { fileToObject } from "antd/lib/upload/utils";
const dateFormat = "YYYY/MM/DD"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationCascaderData: [],
      dateRange: [],
      salesReportData: [],
      filteredTableData: [],
      queryData: {},
      selectedLocations: []
    }
  }

  componentDidMount() {
    this.loadSalesReportData()
    this.createLocationCascaderData()
  }

  handleDateChange = range => {
    let fromDate = moment(range[0]).format(dateFormat)
    let toDate = moment(range[1]).format(dateFormat)
    var abc = update(this.state.dateRange, {
      fromDate: { $set: fromDate },
      toDate: { $set: toDate }
    });
    this.setState({ dateRange: abc })

  }

  handleSearchByLocationId(value) {
    this.setState({ selectedLocations: value })
  }

  handleApply = () => {
    this.props
      .getSalesReport(this.state.selectedLocations, this.state.dateRange.fromDate, this.state.dateRange.toDate)
      .then(res => {
        // console.log(res)
        this.setState({ salesReportData: res })
        this.setState({ filteredTableData: res })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleReset = () => {
    this.loadSalesReportData()
  }

  handleSearch(e) {
    const filteredEvents = this.state.salesReportData.filter(function (data) {
      var pattern = new RegExp(e.target.value, "i")
      return data.productName.match(pattern)
    })
    this.setState({ filteredTableData: filteredEvents })
  }

  render() {
    return (
      <ItemSalesReport
        columns={itemSalesReportData.columns}
        columnData={this.state.filteredTableData}
        pagination={{
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        }}
        cascaderData={this.createCascaderDataArray()}
        onApply={() => this.handleApply()}
        onReset={() => this.handleReset()}
        onSearch={value => this.handleSearch(value)}
        handleDateChange={range => this.handleDateChange(range)}
      />
    )
  }

  createCascaderDataArray = () => {
    return [
      {
        placeholder: " Select Location",
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

  //DO NOT DELETE FOR NOW

  // _createSalesReportColumns(data) {
  //   let temp = []
  //   if (Array.isArray(data)) {
  //     data.map(item => {
  //       let object = {}
  //       object.productName = item.productName
  //       object.category = item.category
  //       object.productUnits = item.productUnits
  //       object.grossSales = item.grossSales
  //       object.location = item.location 
  //       object.unit = item.unit  
  //       temp.push(object)
  //     })
  //   }
  //   return temp
  // }

  loadSalesReportData() {
    let businessID = this.props.business.response.data[0].businessID
    let locationData = this.props.locations.response.data
    let allLocationId = locationData.map(item => {
      return (item.blocationID)
    })
    this.props
      .getSalesReport(allLocationId, '2015-07-04', '2022-07-06')
      .then(res => {
        // console.log(res)
        this.setState({ salesReportData: res })
        this.setState({ filteredTableData: res })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

const mapStateToProps = state => ({
  locations: state.locations,
  salesReport: state.salesReport
})

const mapDispatchToState = dispatch => ({
  getSalesReport: (location, from, to) => dispatch(salesReport.action(location, from, to)),
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(App)
)
