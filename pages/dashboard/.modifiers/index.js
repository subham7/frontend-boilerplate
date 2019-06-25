import React from "react"
import { connect } from "react-redux"
import uuidv4 from "uuid/v4"

import Modifiers from "./modifiers"
import ModifiersItems from "./mitems"

import { Tabs } from "antd"
const TabPane = Tabs.TabPane

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  render() {
    return (
      <div>
        <Tabs defaultActiveKey={"1"} onChange={this.callback}>
          <TabPane tab="Modifiers" key="1">
            <Modifiers />
          </TabPane>
          <TabPane tab="Modifer Items" key="2">
            <ModifiersItems />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
