import React from 'react';
import Template from '../../../src/components/templates/businessDetails';

import { businessSignup } from '../../../src/reduxHelper'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleFormData = (data) => {
    // console.log(data)
    this.props.businessSignupDispatch(data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

componentDidMount() {
  // this.props.businessSignupDispatch({fifth: "Odisha",first: "CashPositive"}).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
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
  // console.log(state)
  return {
    businessSignup: state.businessSignup
  }
}

const mapDispatchToProps = dispatch => ({
  businessSignupDispatch: (businessSignupData) => dispatch(businessSignup.action(businessSignupData))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);