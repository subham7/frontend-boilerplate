import React from 'react';
import { connect } from 'react-redux'
import Template from '../../src/components/templates/signup';
import { signup } from '../../src/reduxHelper'
const uuidv4 = require('uuid/v4')

class App extends React.Component {

  handleFormData(data) {
    // delete comfirm passwrod property, before dispatching
    delete data.values.c_password
    // Add necesarry data
    data.values.userID = uuidv4()
    data.values.usertype = "1faf6ff7-5503-11e9-b3b8-f8cab8258ec4"
    let dispatchData = data.values
    
    this.props.signupDispatch(dispatchData).then(res => {
      console.log(res)
    })
      .catch(err => {
        console.log(err)
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

const mapStateToProps = state => ({
  signup: state.signup
})

const mapDispatchToProps = dispatch => ({
  signupDispatch: (signupData) => dispatch(signup.action(signupData))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);