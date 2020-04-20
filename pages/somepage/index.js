import React, { Component } from "react"
import { connect } from "react-redux"
import wrapper from "../wrapper"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>Some Page</div>
  }
}

export default wrapper(App)
