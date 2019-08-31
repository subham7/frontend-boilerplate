import React, { Component } from "react"
import Router from "next/router"
import token from "./../../src/utils/token"
import Loading from "../../src/components/atoms/loading";
import {message} from 'antd'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setTimeout(() => {
      token.remove()
      Router.push("/")
      message.success("Logged out successfully")
    }, 500)
  }

  render() {
    return <Loading />
  }
}

export default App
