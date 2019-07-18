import React, { Component } from "react"
import { connect } from "react-redux"
const ReactHighcharts = require('react-highcharts');
import { Row, Col , Card , Table, Divider, Tag,Descriptions } from 'antd';

class App extends Component {
    constructor(props) {
      super(props)
      
    }
  
    componentDidMount() {
    
      
    }
  
 
  
 
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a href="javascript:;">{text}</a>,
            },
            // {
            //     title: 'Tags',
            //     key: 'tags',
            //     dataIndex: 'tags',
            //     render: tags => (
            //       <span>
            //         {tags.map(tag => {
            //           let color = tag.length > 5 ? 'geekblue' : 'green';
            //           if (tag === 'loser') {
            //             color = 'volcano';
            //           }
            //           return (
            //             <Tag color={color} key={tag}>
            //               {tag.toUpperCase()}
            //             </Tag>
            //           );
            //         })}
            //       </span>
            //     ),
            //   },
              {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
              },
            ]

        const data = [
                {
                    key: '1',
                    name: 'Today',
                    
                    address: '$5,000',
                    // tags: ['nice', 'developer'],
                  },
                  {
                    key: '2',
                    name: 'Yesterday',
                    
                    address: '$7,000',
                    // tags: ['loser'],
                  },
                  {
                    key: '3',
                    name: 'Last Week',
                    
                    address: '$50,000',
                    // tags: ['loser'],
                  },
                  {
                    key: '2',
                    name: 'Last 30 Days',
                    
                    address: '$10   0,000',
                    // tags: ['loser'],
                  },
            ]

        const columnstopselling= [
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
                    name: 'K F Premium',
                    
                    
                    tags: ['+$20k'],
                  },
                  {
                    key: '2',
                    name: 'Blenders Pride',
                    
                    
                    tags: ['+$15k'],
                  },
                  {
                    key: '3',
                    name: 'Smirnoff',
                    
                    
                    tags: ['-$10k'],
                  },
            ]

        const columnstopcat= [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <a href="javascript:;">{text}</a>,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                
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

        const datatopcat = [
                {
                    key: '1',
                    name: 'Beer',
                    
                    
                    address: '2 lakh',
                    },
                    {
                    key: '2',
                    name: 'Whiskey',
                    
                    
                    address: ' 1.5 lakh',
                    },
                    {
                    key: '3',
                    name: 'vodka',
                    
                    
                    address: '1 lakh',
                    },
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
                            color:  'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Payment Methods',
                colorByPoint: true,
                data: [{
                    name: 'Cash',
                    y: 25,
                   
                }, {
                    name: 'Paytm',
                    y: 20
                }, {
                    name: 'Card',
                    y: 35,
                    sliced: true,
                    selected: true
                },  {
                    name: 'Other',
                    y: 20
                }]
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
                categories: ['Ron', 'Joe', 'Bajo', 'Apr', 'Jean', 'Modi']
            },
        
            series: [{
                type: 'column',
                colorByPoint: true,
                data: [500,325,800,400,550,750],
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
                            color:  'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Store Wise Division',
                colorByPoint: true,
                data: [{
                    name: 'Hydrabad',
                    y: 44.9,
                   
                }, {
                    name: 'Bangalore',
                    y: 55.1,
                    sliced: true,
                    selected: true
                }]
            }]
        }
      return (  
        <div style={{  padding: '30px' }}>
        <Row gutter={16}>
          <Col span={8}>
            {/* <Card title="GROSS SALES" bordered={true}> */}
            <Table pagination={{position:"none"}}    columns={columns} dataSource={data} size="small" showHeader={false}  title={() => <strong>GROSS SALES</strong>}/>
            {/* </Card> */}
          </Col>
          <Col span={8}>
           

            <Table  pagination={{position:"none"}}  columns={columnstopcat} dataSource={datatopcat} size="small" showHeader={false}  title={() => <strong>Top Categories</strong>}/>
          </Col>
          <Col span={8}>
            
            <Table  pagination={{position:"none"}}  columns={columnstopselling} dataSource={datatopselling} size="small" showHeader={false}  title={() => <strong>Top Selling Items</strong>}/>
            
          </Col>
         
        </Row>
<br></br>
        <Row gutter={16}>
        <Col span={12}>
            
        <Card  bordered={true}>
            <ReactHighcharts config={configpayment} ref="chart"></ReactHighcharts>
            </Card>
            
          </Col>
          <Col span={12}>
            
        <Card  bordered={true}>
            <ReactHighcharts config={configTopSalePerson} ref="chart"></ReactHighcharts>
            </Card>
            
          </Col>
          
        </Row>
        <br></br>
        <Row gutter={16}>
            <Col span={22}>
            <Card  bordered={true}>
            <ReactHighcharts config={configStoreDivison} ref="chart"></ReactHighcharts>
            </Card>
            
          </Col>
          
        </Row>
        
      </div>
      )
    }
  

  }
  
  const mapStateToProps = state => ({

  })
  
  const mapDispatchToProps = dispatch => ({
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)