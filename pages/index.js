import React from "react"
import { connect } from "react-redux"
// import { startClock, serverRenderClock } from '../src/store'
import Template from "../src/components/templates/login"
import { login } from "../src/reduxHelper"
import Router from "next/router"
import token from "../src/utils/token"
import cookie from 'react-cookies'
import {message} from 'antd'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {localLoader: false}
  }
  static getInitialProps({ reduxStore, req }) {
    // console.log(req)
    const isServer = !!req
    // reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount() {
    // console.log(localStorage.getItem("admin-api-key"), "consllllll")
    // cookie.remove("admin-api-key")
    if (localStorage.getItem("admin-api-key") != null)
      Router.push('/dashboard')
    if (cookie.load("admin-api-key"))
      Router.push('/dashboard')
  }

  handleFormData(data) {
    // TODO: check later , wher id is coming from in formstate
    let formData = data.values
    console.log(formData, "loginnnn")
    this.props
      .loginDispatch(formData)
      .then(res => {
        console.log("response", res)
        if (formData.rememberme) {
          token.set(res.token)
        } else {
          token.setTokenCookie(res.token)
        }
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
            message.success("Logged in successfully")
          }
        }
      })
      .catch(err => {
        console.log(err.response)
        if (err.reponse && (err.response.status = 401)) {
          message.error("Login Failed")
        } else {
          message.error("Something bad happend at our end")
        }
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
