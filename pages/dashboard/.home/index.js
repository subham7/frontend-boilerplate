import React, { Component } from "react"
import { connect } from "react-redux"
import moment from 'moment';
import Cascader from '../../../src/components/molecules/cascader'
import Button from '../../../src/components/atoms/button'
import {
  topItems,
  topCategories,
  paymentTypes,
  topSalesman,
  locationSales,
  salesDatewise,
  locations,
  allTransactions
} from "../../../src/reduxHelper"

import { columns } from './home.data'
const ReactHighcharts = require('react-highcharts');
import { Row, Col, Card, Table, Divider, Tag, Select, DatePicker } from 'antd';
import { businesses } from "../../../src/api/business";
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialBlocation: null,
      blocations: [],
      topProductsData: [],
      topCategoryData: [],
      paymentTypeData: [],
      topSalesmanData: [],
      loacationSalesData: [],
      grossSalesData: [],
      allTransactionsData: [],
      fromDate: moment().subtract(1, 'months').format(dateFormat),
      toDate: moment().format(dateFormat)
    }
  }

  componentDidMount() {
    let businessID = this.props.business.response.data[0].businessID
    this.props.getBlocations(this.props.business.response.data[0].businessID)
      .then(data => {
        this.setState({ blocations: data })
        this.setState({ initialBlocation: this.createSelectData(this.state.blocations)[0].value })
        this.loadAllReports(this.state.initialBlocation, businessID, this.state.fromDate, this.state.toDate)
      })
  }

  loadAllReports = (locationID, businessID, from, to) => {
    this.loadTopItems(locationID)
    this.loadTopCategory(locationID)
    this.loadTransactionType(locationID)
    this.loadTopSalesman()
    this.loadLocationSales()
    this.loadSalesWithinDates()
    this.loadAlltransactions(businessID, from, to)
  }

  handleChange = (value) => {
    this.setState({ initialBlocation: value })
    // this.loadAllReports(value)
    console.log(this.state.initialBlocation, "initailllll")
  }

  handleDatePickerChange = (dateRange) => {
    let fromDate = moment(dateRange[0]).format(dateFormat)
    let toDate = moment(dateRange[1]).format(dateFormat)
    let bID = this.props.business.response.data[0].businessID
    this.setState({ fromDate: fromDate, toDate: toDate })
    // this.loadAlltransactions(bID, fromDate, toDate)
    console.log(this.state.fromDate, "initailllll dateeee") 
  }

  handleSubmit = () => {
    let businessID = this.props.business.response.data[0].businessID
    this.loadAllReports(this.state.initialBlocation, businessID, this.state.fromDate, this.state.toDate)
  }

  render() {
    return (
      <div style={{ padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Cascader
              placeholder="Select Location"
              optionArray={this.createSelectData(this.state.blocations)}
              handleChange={this.handleChange}
            // defaultValue={intialValue}
            />
          </Col>
          <Col span={8}>
            <RangePicker
              style={{"width": "100%"}}
              defaultValue={[moment(moment().subtract(1, 'months'), dateFormat), moment(moment(), dateFormat)]}
              format={dateFormat}
              onChange={(range) => this.handleDatePickerChange(range)}
            />
          </Col>
          <Col span={4}>
            <Button style={{"width": "100%"}} onClick={this.handleSubmit} value="Get Reports" ></Button>
          </Col>
        </Row> 
        <br></br>
      <Row>
        <Col span={16}>
          <Table pagination={{ position: "none" }} columns={columns.allTransactionsColumns} dataSource={this.state.allTransactionsData} size="small" />
        </Col>
      </Row>
        <br></br>
        <Row gutter={16}>
          <Col span={8}>
            <Table pagination={{ position: "none" }} columns={columns.columnstopselling} dataSource={this.state.grossSalesData} size="small" />
          </Col>
          <Col span={8}>
            <Table pagination={{ position: "none" }} columns={columns.columnstopcat} dataSource={this.state.topCategoryData} size="small" />
          </Col>
          <Col span={8}>
            <Table pagination={{ position: "none" }} columns={columns.topProductColumns} dataSource={this.state.topProductsData} size="small" />
          </Col>
        </Row>
        <br></br>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={true}>
              <ReactHighcharts config={columns.getConfigPaymentObject(this.state.paymentTypeData)} ref="chart"></ReactHighcharts>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={true}>
              <ReactHighcharts config={columns.getConfigTopSalePersonObject(this.state.topSalesmanData.salesmanName, this.state.topSalesmanData.salesValue)} ref="chart"></ReactHighcharts>
            </Card>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={22}>
            <Card bordered={true}>
              <ReactHighcharts config={columns.getConfigStoreDivisonObject(this.state.loacationSalesData)} ref="chart"></ReactHighcharts>
            </Card>
          </Col>
        </Row>
       
      </div>
    )
  }

  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.blocationID
    }))
    return selectData
  }

  loadTopItems = (locationID) => {
    this.props.getTopProducts(locationID, '2018-07-04', '2021-07-06')
      .then(data => {
        this.setState({ topProductsData: data.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadTopCategory = (locationID) => {
    this.props.topCategories(locationID, '2018-07-04', '2021-07-06')
      .then(data => {
        this.setState({ topCategoryData: data.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadTransactionType = (locationID) => {
    this.props.paymentTypes(locationID, '2018-07-04', '2021-07-06')
      .then(data => {
        let dataArray = data.map((item, i) => {
          return {
            name: item.name,
            y: item.paymentTypeCount
          }
        })
        this.setState({ paymentTypeData: dataArray.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadTopSalesman = () => {
    //send businessID
    this.props
      .getTopSalesman(this.props.business.response.data[0].businessID)
      .then(data => {
        let salesValue = []
        let salesmanName = []
        for (let index = 0; index < data.length; index++) {
          salesValue.push(data[index].totalSalesAmount)
          salesmanName.push(data[index].name)
        }
        this.setState({
          topSalesmanData: {
            salesValue: salesValue,
            salesmanName: salesmanName
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadLocationSales = () => {
    this.props
      .getLocationSales(this.props.business.response.data[0].businessID)
      .then(data => {
        let dataArray = data.map((item, i) => {
          return {
            name: item.name,
            y: item.units
          }
        })
        this.setState({ loacationSalesData: dataArray })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadSalesWithinDates = () => {
    this.props
      .getSalesDate(this.props.business.response.data[0].businessID)
      .then(data => {
        let salesData = []
        for (let index = 0; index < data.length; index++) {
          salesData.push({
            key: index,
            name:
              "" +
              data[index].day +
              "-" +
              data[index].month +
              "-" +
              data[index].year,
            tags: [data[index].totalSale]
          })
        }
        this.setState({ grossSalesData: salesData.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadAlltransactions = (businessID, from, to) => {
    this.props.allTransactions(businessID, from, to)
      .then(data => {
        console.log(data)
        this.setState({ allTransactionsData: data })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// this.props.locations.response.data[2]
const mapStateToProps = state => ({
  locations: state.locations,
  business: state.businesses
})

const mapDispatchToProps = dispatch => ({
  getBlocations: (businessID) => dispatch(locations.action(businessID)),
  getTopProducts: (location, from, to) => dispatch(topItems.action(location, from, to)),
  topCategories: (location, from, to) => dispatch(topCategories.action(location, from, to)),
  paymentTypes: (location, from, to) => dispatch(paymentTypes.action(location, from, to)),
  allTransactions: (business, from, to) => dispatch(allTransactions.action(business, from, to)),
  getTopSalesman: (business) => dispatch(topSalesman.action(business)),
  getLocationSales: (business) => dispatch(locationSales.action(business)),
  getSalesDate: (business) => dispatch(salesDatewise.action(business)),
  getLocations: businessID => dispatch(locations.action(businessID))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
