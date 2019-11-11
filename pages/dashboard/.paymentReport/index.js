import React from "react"
import { connect } from "react-redux"
import { Divider } from "antd"

import wrapper from "./wrapper"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>report</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToState = dispatch => ({})

export default wrapper(
  connect(
    mapStateToProps,
    mapDispatchToState
  )(App)
)
