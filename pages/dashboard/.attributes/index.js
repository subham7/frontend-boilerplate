import React, { Component } from "react"
import { connect } from "react-redux"

import AttributeSet from "./attributeset"
import Attributes from "./attributes"
import AttributeValue from './attributevalues'

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
            <TabPane tab="Attribute Set" key="1">
              <AttributeSet />
            </TabPane>
            <TabPane tab="Attributes" key="2">
              <Attributes />
            </TabPane>
            <TabPane tab="Attribute Value" key="3">
              <AttributeValue />
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
