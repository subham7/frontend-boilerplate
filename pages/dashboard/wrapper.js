import React from "react"
import token from "./../../src/utils/token"
import Router from "next/router"
import cookie from 'react-cookies'
import Loading from "./../../src/components/atoms/loading"

export default function init(WrappedComponent) {
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = { setToken: false }
    }

    componentDidMount() {
      if (!localStorage.getItem("admin-api-key") && !cookie.load('admin-api-key') ) {
        Router.push("/")
      }
      token.setFromStorage()
      this.setState({ setToken: true })
    }

    render() {
      if (this.state.setToken && token.getToken())
        return <WrappedComponent {...this.props} />
      else return <Loading />
    }
  }

  return App
}
