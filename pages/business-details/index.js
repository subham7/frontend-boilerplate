import React from 'react';
import Template from '../../src/components/templates/businessDetails';
const uuidv4 = require('uuid/v4')
import { addBusiness, user } from '../../src/reduxHelper'
import { connect } from 'react-redux';
import Router from "next/router"
class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleFormData = (data) => {
    data.values.businessID = uuidv4()
    data.values.owner = this.props.user.response.data.userID
    let dispatchData = data.values
    this.props.businessSignupDispatch(dispatchData).then(res => {
      console.log(res)
      if(res.status){
        Router.push("/dashboard")
      }else{
        alert("Cannot add business, check console for error")
      }
    }).catch(err => {
      console.log(err)
    })
  }

componentDidMount() {
  this.props.getUserDispatch("6bb05804-ac94-4f82-ba2a-d1792812ffca").then(data=> {

  })
}

  render() {
    return (
      <div>
        <Template getFormData={(data) => this.handleFormData(data)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    businessSignup: state.businessSignup,
    user:state.user
  }
}

const mapDispatchToProps = dispatch => ({
  businessSignupDispatch: (businessSignupData) => dispatch(addBusiness.action(businessSignupData)),
  getUserDispatch: (userID) => dispatch(user.action(userID))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);