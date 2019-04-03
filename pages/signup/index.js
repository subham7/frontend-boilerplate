import React from 'react';
import { connect } from 'react-redux'
import Template from '../../src/components/templates/signup';
import { signup } from '../../src/reduxHelper'

class App extends React.Component {

  handleFormData(data) {
    this.props.signupDispatch(data).then(res => {
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