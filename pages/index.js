import React from 'react';
import { connect } from 'react-redux'
// import { startClock, serverRenderClock } from '../src/store'
import Template from '../src/components/templates/login';

import { login } from "../src/reduxHelper"

class App extends React.Component {
  

  componentDidMount () {

    this.props.loginDispatch({uid:"b216008", pwd:"Ankit16@19"}).then(res=>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }



 render() {
    return (
      <div> 
        <Template />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  login: state.login
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  loginDispatch: (username, password) => dispatch(login.action(username, password)),
})
export default connect(mapStateToProps,mapDispatchToProps)(App);