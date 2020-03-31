import React from "react"
import { connect } from "react-redux"
import moment, { localeData } from 'moment';
import {
  paymentMethods,
  paymentMethodDetails
} from "../../../src/reduxHelper"
const dateFormat = 'YYYY/MM/DD';
import wrapper from "./wrapper"
import PaymentReport from "./../../../src/components/templates/paymentReport"
import { paymentReportData } from "./paymentReport.data"
import Loader from "./../../../src/components/atoms/loading"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locationCascaderData: [],
      dateRange: [],
      locations: [],
      paymentMethods:[],
      paymentMethodDetails:[],
      fromDate:moment().subtract(1, 'months').format(dateFormat),
      toDate:moment().format(dateFormat),
      paymentMethodDetails:[]
    }
  }

  componentDidMount() {
    this.createLocationCascaderData()
  }

  render() {
    return (
      <PaymentReport
        columns={paymentReportData.columns}
        columns2 = {paymentReportData.columns2}
        dataSource =  {this.state.paymentMethods}
        dataSource2 = {this.state.paymentMethodDetails}
        pagination={{
          pageSize: 10,
          showLessItems: true,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "15", "20"]
        }}
        cascaderData={this.state.locationCascaderData}
        handeLocationChange={value => this.handleSearchByLocationId(value)}
        handleDateChange={range => this.handleDateChange(range)}
        applyFilter={() => this.loadData()}
        loadTable2 ={(type)=> this.loadDataTable2(type)}
      />
    )
  }

  // createCascaderDataArray = () => {
  //   return [
  //     {
  //       placeholder: "Location",
  //       optionArray: this.state.locationCascaderData,
  //       mode: "multiple",
  //       onChange: value => this.handleSearchByLocationId(value)
  //     }
  //   ]
  // }

  createLocationCascaderData = () => {
    let locationData = this.props.locations.response.data
    this.setState({
      locationCascaderData: locationData.map(item => ({
        value: item.blocationID,
        name: item.name
      }))
    })
  }
  
  handleDateChange = dateRange => {
    let fromDate = moment(dateRange[0]).format(dateFormat)
    let toDate = moment(dateRange[1]).format(dateFormat)
    this.setState({ fromDate: fromDate, toDate: toDate })

  }

  handleSearchByLocationId= (value) =>{
    this.setState({locations: value})
  }

  loadData = () => {
    // use locations and dateRange to search
    console.log('loading data for locations' +  this.state.locations + 'and date' + this.state.dateRange)
    this.props.paymentMethods(this.state.locations, this.state.fromDate, this.state.toDate)
    .then((data) => {
      
      data.map(x => {
        x.action = {
          payMethod: x.transactiontype,
          loadDataTable2: this.loadDataTable2
        }
      })
      this.setState({paymentMethods: data})
    }).catch(err => {

    })
  }

  loadDataTable2 = (type) => {
    // use locations and dateRange to search
    this.props.paymentMethodDetails(type, this.state.locations, this.state.fromDate, this.state.toDate)
    .then((data) => {
      this.setState({paymentMethodDetails: data})
    }).catch(err => {

    })
  }
  
}

const mapStateToProps = state => ({
  locations: state.locations
})

const mapDispatchToState = dispatch => ({
  paymentMethods: (blocations, from, to) => dispatch(paymentMethods.action(blocations,from,to)),
  paymentMethodDetails: (type, blocations, from, to) => dispatch(paymentMethodDetails.action(type,blocations,from,to)),
  
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(App)
)
