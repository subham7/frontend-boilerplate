import React, { Component } from "react"
import { connect } from "react-redux"

import {
  topItems,
  topCategories,
  paymentTypes,
  topSalesman,
  locationSales
} from "../../../src/reduxHelper"

const ReactHighcharts = require('react-highcharts');
import { Row, Col, Card, Table, Divider, Tag, Descriptions } from 'antd';
import { businesses } from "../../../src/api/business";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topProductsData: [],
      topCategoryData: [],
      paymentTypeData: [],
      topSalesmanData: [],
      loacationSalesData: []
    }
  }

  componentDidMount() {
    this.loadTopItems()
    this.loadTopCategory()
    this.loadTransactionType()
    this.loadTopSalesman()
    this.loadLocationSales()
  }




  render() {
    const columns = [
      {
        title: 'Top Selling Items',
        dataIndex: 'productName',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Units',
        dataIndex: 'productUnits',
        key: 'address',
      },
    ]

    const columnstopselling = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag[0] == "-" ? 'volcano' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },

    ]


    const datatopselling = [
      {
        key: '1',
        name: 'Today',


        tags: ['+₹20k'],
      },
      {
        key: '2',
        name: 'Yesterday',


        tags: ['+₹15k'],
      },
      {
        key: '3',
        name: 'Last Week',


        tags: ['-₹10k'],
      },
    ]

    const columnstopcat = [
      {
        title: 'Top Categories',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: 'Units',
        dataIndex: 'productCategoryCount',
        key: 'productCategoryCount',

      },
      // {
      //     title: 'Tags',
      //     key: 'tags',
      //     dataIndex: 'tags',
      //     render: tags => (
      //         <span>
      //         {tags.map(tag => {
      //             let color = tag[0] == "-" ? 'volcano' : 'green';
      //             if (tag === 'loser') {
      //             color = 'volcano';
      //             }
      //             return (
      //             <Tag color={color} key={tag}>
      //                 {tag.toUpperCase()}
      //             </Tag>
      //             );
      //         })}
      //         </span>
      //     ),
      //     },

    ]


    let configpayment = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Payment Methods'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Payment Methods',
        colorByPoint: true,
        data: this.state.paymentTypeData
      }]
    }

    let configTopSalePerson = {
      title: {
        text: 'Top Sales person'
      },

      subtitle: {
        text: 'Sales'
      },

      xAxis: {
        categories: this.state.topSalesmanData.salesmanName
      },

      series: [{
        type: 'column',
        colorByPoint: true,
        data: this.state.topSalesmanData.salesValue,
        showInLegend: false
      }]
    }

    let configStoreDivison = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Store Wise Divison'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: 'black'
            }
          }
        }
      },
      series: [{
        name: 'Store Wise Division',
        colorByPoint: true,
        data: this.state.loacationSalesData
      }]
    }
    return (
      <div style={{ padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            {/* <Card title="GROSS SALES" bordered={true}> */}
            <Table pagination={{ position: "none" }} columns={columnstopselling} dataSource={datatopselling} size="small" showHeader={false} title={() => <strong>GROSS SALES</strong>} />
            {/* </Card> */}
          </Col>
          <Col span={8}>


            <Table pagination={{ position: "none" }} columns={columnstopcat} dataSource={this.state.topCategoryData} size="small" />
          </Col>
          <Col span={8}>
            <Table pagination={{ position: "none" }} columns={columns} dataSource={this.state.topProductsData} size="small"  />
          </Col>

        </Row>
        <br></br>
        <Row gutter={16}>
          <Col span={12}>

            <Card bordered={true}>
              <ReactHighcharts config={configpayment} ref="chart"></ReactHighcharts>
            </Card>

          </Col>
          <Col span={12}>

            <Card bordered={true}>
              <ReactHighcharts config={configTopSalePerson} ref="chart"></ReactHighcharts>
            </Card>

          </Col>

        </Row>
        <br></br>
        <Row gutter={16}>
          <Col span={22}>
            <Card bordered={true}>
              <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
            </Card>

          </Col>

        </Row>

      </div>
    )
  }

  loadTopItems = () => {
    this.props.getTopProducts('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06')
      .then(data => {
        this.setState({ topProductsData: data.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadTopCategory = () => {
    this.props.topCategories('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06')
      .then(data => {
        this.setState({ topCategoryData: data.splice(0, 3) })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadTransactionType = () => {
    this.props.paymentTypes('6e4a829b-b32d-487c-800f-d80a6d185a92', '2018-07-04', '2021-07-06')
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
    this.props.getTopSalesman('e96c8b21-4773-407c-a440-4d4c9d67aa79')
      .then(data => {
        let salesValue = []
        let salesmanName = []
        for (let index = 0; index < data.length; index++) {
          salesValue.push(data[index].totalSalesAmount)
          salesmanName.push(data[index].name)
        }
        this.setState({ topSalesmanData: {salesValue: salesValue, salesmanName: salesmanName} })
      })
      .catch(err => {
        console.log(err)
      })
  }

  loadLocationSales = () => {
    this.props.getLocationSales('bdf26304-0a68-48d9-a20f-8fb60ca6e4c0')
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
}
// this.props.locations.response.data[2]
const mapStateToProps = state => ({
  locations: state.locations
})

const mapDispatchToProps = dispatch => ({
  getTopProducts: (location, from, to) => dispatch(topItems.action(location, from, to)),
  topCategories: (location, from, to) => dispatch(topCategories.action(location, from, to)),
  paymentTypes: (location, from, to) => dispatch(paymentTypes.action(location, from, to)),
  getTopSalesman: (business) => dispatch(topSalesman.action(business)),
  getLocationSales: (business) => dispatch(locationSales.action(business))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)