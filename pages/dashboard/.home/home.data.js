import {Tag} from 'antd'

const topProductColumns = [
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
        title: 'Date',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Sales',
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
                            ₹ {tag}
                        </Tag>
                    );
                })}
            </span>
        ),
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

const getConfigPaymentObject = (paymentTypeData) => {
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
        data: paymentTypeData
      }]
    }

    return configpayment
}

const getConfigTopSalePersonObject = (salesmanName, salesValue) => {
    let configTopSalePerson = {
      title: {
        text: 'Top Sales person'
      },

      subtitle: {
        text: 'Sales'
      },

      xAxis: {
        categories: salesmanName
      },

      series: [{
        type: 'column',
        colorByPoint: true,
        data: salesValue,
        showInLegend: false
      }]
    }
    return configTopSalePerson
}

const getConfigStoreDivisonObject = (loacationSalesData) => {
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
        data: loacationSalesData
      }]
    }
    return configStoreDivison
}

export const columns = {
    topProductColumns,
    columnstopselling,
    columnstopcat,
    getConfigPaymentObject,
    getConfigTopSalePersonObject,
    getConfigStoreDivisonObject
}