import React from "react"
import { connect } from "react-redux"
// import { startClock, serverRenderClock } from '../src/store'
import Template from "../src/components/templates/login"
import { login } from "../src/reduxHelper"
import Router from "next/router"
import token from "./../src/utils/token"

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  static getInitialProps({ reduxStore, req }) {
    // console.log(req)
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
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
    this.props
      .loginDispatch(formData)
      .then(res => {
        console.log("response", res)
        token.set(res.token)
        // login was successful
        // check if account is blocked

        if (res.user[0].isblocked) {
          alert("You account is not active")
        } else {
          if (!res.user[0].data1) {
            Router.push("/business-details")
          } else if (!res.user[0].data2) {
            Router.push("/master-data")
          } else {
            Router.push("/dashboard")
          }
        }
      })
      .catch(err => {
        console.log(err)
        if (err.reponse && (err.response.status = 401)) {
          alert("Login Failed")
        } else {
          alert("Something bad happend at our end")
        }
        console.log("error", err)
      })
  }

  render() {
    return (
      <div>
        <Template getFormData={data => this.handleFormData(data)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({
  loginDispatch: (username, password) =>
    dispatch(login.action(username, password))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
