import React from "react"
import { connect } from "react-redux"
import Button from "../../../src/components/atoms/button"
import { employees } from "./../../../src/reduxHelper"
import wrapper from "./wrapper"
import CashReconcillation from "./../../../src/components/templates/cashReconcillation"
import Loader from "./../../../src/components/atoms/loading"
import { cashReconData } from "./cashReconcillation.data"
import cashReconSubmit from "./../../../src/components/organisms/forms/cashReconSubmit"
import{
  cashReconciliationStatus,
  cashAllocation,
  cashSubmission,
  cashReconciliationUpdateCashCollected,
  locations,
} from "../../../src/reduxHelper";
import moment, { localeData } from 'moment';
import { Row, Col, Card, Table, Divider, Tag, Select, DatePicker } from 'antd';
import Cascader from '../../../src/components/molecules/cascader'

const dateFormat = "YYYY/MM/DD"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeCascaderData: [],
      locationCascaderData: [],
      cashReconData: [],
      fullList : [],
      initialBlocation: null,
      locations: [],
      date :moment().format(dateFormat),
    }
  }

  onSubmit(formData, id, isAllocation){
    console.log(formData)
    if(isAllocation){
      let data = {
        id: id,
        cashAllocated: formData.startCash
      }
      this.props.cashAllocation(data).then(x => {
        this.loadData();
      }).catch(err=>{
        
      })
    }else{
      // Cash submitted
      let data = {
        id: id,
        cashSubmitted:formData.cashSubmitted,
        reason:formData.reason
      }
      this.props.cashSubmission(data).then(x => {
        this.loadData();
      }).catch(err=>{

      })
    }
  }

  onRefresh(employee,location){
    this.props.cashReconciliationUpdateCashCollected(employee,location).then(x=>{
      this.loadData();
    }).catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.loadLocation()
    this.loadEmployeeData()
    this.createLocationCascaderData()
    this.setDataToState()
    this.loadData()
  }

  render() {
    if (this.props.employees.isLoaded) {
      return (
      <div>
         <Row gutter={16}>
        <Col span={8}>
        <Col span={4}>
            <Cascader
            mode="multiple"
            style={{ width: 180 }} 
            // label="Location"
             placeholder="Select Location"
             optionArray={this.createSelectData(this.state.locations)}
             handleChange={this.handleChangeLocations}
            />
          </Col>
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ "width": "100%" }}
            format={dateFormat}
            onChange={(date) => this.handleDateChange(date)}
          />
        </Col>
        <Col span={4}>
          <Button style={{ "width": "100%" }} 
          onClick={() => this.loadData()} 
          value="Get Reports" ></Button>
        </Col>
      </Row>

        <CashReconcillation
          columns={cashReconData.columns(this.state.date)}
          columnData={this.state.cashReconData}
          pagination={{
            pageSize: 10,
            showLessItems: true,
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "15", "20"]
          }}
          cascaderData={this.createCascaderDataArray()}
          reset={() => this.setDataToState()}
          applyFilter={(value) => this.applyFilter(value)}
          onSearch={(value)=>this.handleSearch(value)}
        /> 
        </div>
      )
    } else return <Loader />
  }

  loadData(){
    this.props.cashReconciliationStatus(this.props.business.response.data[0].businessID, this.state.date).then(data => {
      data.map(x => {
        x.date =  new Date(Date.parse(x.date))
        x.date = x.date.toLocaleDateString()
        x.cashCollected = x.cashCollected == null? 0: x.cashCollected
        x.refresh = {
          onRefresh: () => this.onRefresh(x.user,x.locationID)
        }
        x.action = {
          cashReconSubmit: cashReconSubmit,
          onSubmit: (data) => this.onSubmit(data.values, x.id, false),
          name: "Submit"
        }
        x.action2 = {
          cashReconSubmit: cashReconSubmit,
          onSubmit: (data) => this.onSubmit(data.values, x.id, true),
          name: "Float"
        }
      })
      console.log(data)
      this.setState({cashReconData: data})
      this.setState({fullList: data})
    }).catch(err => {
      console.log(err)
    })
  }

  handleDateChange = date => {
    // let date = moment(dateRange[0]).format(dateFormat)
    this.setState({ date: moment(date).format(dateFormat) })
  }

  loadLocation(){
    this.props.getBlocations(this.props.business.response.data[0].businessID)
      .then(data => {
        this.setState({ locations: data })
      })
  }

  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.blocationID
    }))
    return selectData
  }

  handleChangeLocations = (value) => {
    this.setState({ initialBlocation: value })
    // console.log(value)
    this.handleSearchByLocationId(value)
  }

  // Loads employee data from api call
  loadEmployeeData() {
    let urlParams = {}
    urlParams.businessID = this.props.business.response.data[0].businessID
    this.props
      .getEmployees(urlParams)
      .then(_ => {
        this.createEmployeeCascaderData()
      })
      .catch(err => console.log(err))
  }

  // Converts employee data from api to cascader format
  createEmployeeCascaderData() {
    let employeeData = this.props.employees.response.data
    this.setState({
      employeeCascaderData: employeeData.map(item => ({
        value: item.userID,
        name: `${item.firstName} ${item.LastName}`
      }))
    })
  }

  // Converts location data from api to cascader format
  createLocationCascaderData() {
    let locationData = this.state.locations
    this.setState({
      locationCascaderData: locationData.map(item => ({
        value: item.blocationID,
        name: item.name
      }))
    })
  }

  // Returns array prop for cascader data with all the required fields
  createCascaderDataArray() {
    return [
      {
        placeholder: "Employee",
        optionArray: this.state.employeeCascaderData,
        onChange: value => this.handleSearchByStaffId(value)
      },
      {
        placeholder: "Location",
        optionArray: this.state.locationCascaderData,
        onChange: value => this.handleSearchByLocationId(value)
      }
    ]
  }

  handleCascaderValue(name, value) {
    this.setState({ [name]: value })
  }

  applyFilter(value) {
    this.handleSearch(value)
  }

  handleSearch(value) {
    const filteredEvents = this.state.fullList.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here staffId is compared to value
      // console.log(data)
      return data.name.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Compares value from employee cascader to employeeId and change state wrt to the employeeId
  handleSearchByStaffId(value) {
    const filteredEvents = this.state.fullList.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here staffId is compared to value
      return data.user.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Compares value from location cascader to locationId and change state wrt to the locationId
  handleSearchByLocationId(value) {
    const filteredEvents = this.state.fullList.filter(function(data) {
      var pattern = new RegExp(value, "i")
      // Here locationId is compared to value
      return data.locationID.match(pattern)
    })
    this.setState({ cashReconData: filteredEvents })
  }

  // Sets api data to local state or reset all the filters
  setDataToState() {
    this.setState({ cashReconData: this.state.fullList })
  }
}

const mapStateToProps = state => ({
  business: state.businesses,
  employees: state.employees,
  locations: state.locations,
  cr: state.cashReconciliationStatus
})

const mapDispatchToProps = dispatch => ({
  getEmployees: object => dispatch(employees.action(object)),
  getBlocations: (businessID) => dispatch(locations.action(businessID)),
  cashReconciliationStatus: (businessID, date) => dispatch(cashReconciliationStatus.action(businessID, date)),
  cashAllocation : object => dispatch(cashAllocation.action(object)),
  cashSubmission : object => dispatch(cashSubmission.action(object)),
  cashReconciliationUpdateCashCollected: (employee,location) => dispatch(cashReconciliationUpdateCashCollected.action(employee,location))
})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
