import React from 'react';
import Template from '../../src/components/templates/businessDetails';
const uuidv4 = require('uuid/v4')
import { addBusiness, user, businessType } from '../../src/reduxHelper'
import { connect } from 'react-redux';
import token from "../../src/utils/token"
import Router from "next/router"
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleFormData = (data) => {
    data.values.businessID = uuidv4()
    data.values.owner = token.getTokenData().data.user[0].userID
    let dispatchData = data.values
    this.props.businessSignupDispatch(dispatchData).then(res => {
      console.log(res)
      if(res.affectedRows){
        Router.push("/dashboard")
      }else{
        alert("Cannot add business, check console for error")
      }
    }).catch(err => {
      console.log(err)
    })
  }

componentDidMount() {

  // load businesstype if not loaded
  if (!this.props.businesstype.response) { 
    this.props
      .getBusinessType()
      .then(data => {})
      .catch(err => {})
  }
}

  render() {
    if (this.props.businesstype.isLoaded) {
      return (
        <div>
          <Template getFormData={(data) => this.handleFormData(data)} formData={this.createSelectData(
                this.props.businesstype.response.data
              )}/>
        </div>
      );
    }else{
      return <h1>Loading</h1>
    }
    
  }




  createSelectData(data) {
    let selectData = data.map(item => ({
      name: item.name,
      value: item.businesstypeID
    }))
    return selectData
  }
}



const mapStateToProps = state => {
  return {
    businessSignup: state.businessSignup,
    businesstype: state.businessType,
    user:state.user
  }
}

const mapDispatchToProps = dispatch => ({
  businessSignupDispatch: (businessSignupData) => dispatch(addBusiness.action(businessSignupData)),
  getUserDispatch: (userID) => dispatch(user.action(userID)),
  getBusinessType: () => dispatch(businessType.action())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);