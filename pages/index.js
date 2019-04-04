import React from 'react';
import { connect } from 'react-redux'
// import { startClock, serverRenderClock } from '../src/store'
import Template from '../src/components/templates/login';

import { login } from "../src/reduxHelper"

class App extends React.Component {
  constructor(props){
    super(props)
  }
  static getInitialProps ({ reduxStore, req }) {
    // console.log(req)
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
   
   // Add redux api here
    // this.props.loginDispatch({uid:"b216008", pwd:"Ankit16@19"}).then(res=>{
    //   console.log(res)
    // }).catch(err =>{
    //   console.log(err)
    // })
  }

  handleFormData(data) {
    // TODO: check later , wher id is coming from in formstate
    let formData = data.values
    this.props.loginDispatch(formData).then(res=>{
      console.log("response", res)
    // login was successful
    if(res.status){
      if(!res.data.data1){
        window.location.replace("/business-details")
      }else if (!res.data.data2){
        window.location.replace("/master-data")
      }else{
        window.location.replace("/dashboard")
      }
    }else{
      alert("Login Failed")
    }
      
    }).catch(err =>{
      console.log(err)
    })
  }

 render() {
    return (
      <div> 
        <Template getFormData={(data) => this.handleFormData(data)}/>
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