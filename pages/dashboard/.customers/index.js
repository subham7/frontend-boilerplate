import React, { Component } from "react"
import { connect } from "react-redux"

import CustomerDirectory from "./customerdirectory"

import uuidv4 from "uuid/v4"
import { Tabs } from "antd"
const TabPane = Tabs.TabPane

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log("mount")
  }

  render() {
    if (true) {
      return (
        <div>
          <Tabs defaultActiveKey={"1"} onChange={this.callback}>
            <TabPane tab="Directory" key="1">
              <CustomerDirectory />
            </TabPane>
            <TabPane tab="Feedback" key="2">
              Feedback
            </TabPane>
            <TabPane tab="Insights" key="3">
              Insights
            </TabPane>
            <TabPane tab="Settings" key="4">
              Settings
            </TabPane>
          </Tabs>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({})
// Example Syntax for writing dispatch
const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
