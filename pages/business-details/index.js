import React from 'react';
import Template from '../../src/components/templates/businessDetails';
const uuidv4 = require('uuid/v4')
import { businessSignup, user } from '../../src/reduxHelper'
import { connect } from 'react-redux';

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
        windows.location.replace("/dashboard")
      }else{
        alert("Cannot add business, check console for error")
      }
    }).catch(err => {
      console.log(err)
    })
  }

componentDidMount() {
  this.props.getUserDispatch("082afffa-f3ca-4ca0-8668-611d7840ec0f").then(data=> {

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
  businessSignupDispatch: (businessSignupData) => dispatch(businessSignup.action(businessSignupData)),
  getUserDispatch: (userID) => dispatch(user.action(userID))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);