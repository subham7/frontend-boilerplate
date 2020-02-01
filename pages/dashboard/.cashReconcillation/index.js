import React from "react"
import { connect } from "react-redux"

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
} from "../../../src/reduxHelper"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employeeCascaderData: [],
      locationCascaderData: [],
      cashReconData: [],
      fullList : []
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
    this.loadEmployeeData()
    this.createLocationCascaderData()
    this.setDataToState()
    this.loadData()
  }


  
  render() {
    if (this.props.employees.isLoaded) {
      return (
        <CashReconcillation
          columns={cashReconData.columns}
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
      )
    } else return <Loader />
  }

  loadData(){
    this.props.cashReconciliationStatus(this.props.business.response.data[0].businessID).then(data => {
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
    let locationData = this.props.locations.response.data
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
    // for (let i = 0; i < this.createCascaderDataArray().length; i++)
    this.handleSearch(value)
  }

  handleSearch(value) {
    const filteredEvents = this.state.fullList.filter(function(data) {
      console.log("###################")
      console.log(data)
      console.log(value)
      console.log("###################")
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
  cashReconciliationStatus: businessID => dispatch(cashReconciliationStatus.action(businessID)),
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
