import React, { Component } from "react"
import { connect } from "react-redux"
import wrapper from "./wrapper"

// API import
import { getAPI } from "./../src/reduxHelper"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getAPI()
  }

  render() {
    return (
      <div>
        Index page
        <br />
        <br />
        <a href="/somepage">Some Page</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getAPIData: state.getAPI,
})

const mapDistatchToProps = (dispatch) => ({
  getAPI: () => dispatch(getAPI.action()),
})

export default wrapper(connect(mapStateToProps, mapDistatchToProps)(App))
