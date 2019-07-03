import React, { Component } from "react"
import Router from "next/router"
import token from "./../../src/utils/token"

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    token.remove()
    Router.push("/")
  }

  render() {
    return null
  }
}

export default App
