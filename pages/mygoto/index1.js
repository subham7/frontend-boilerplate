import React, { Component } from "react"
import { withRouter } from "next/router"
import Router from "next/router"

import Home from "./.home"
import BusinessRegistration from "./.businessRegistration"

class SwitchHandler extends Component {
  render() {
    return (
      <div>
        {(() => {
          switch (this.props.switchItem) {
            case "home":
              return <Home />

            case "business":
              return <BusinessRegistration />

            default:
              return <h1>Error: 404</h1>
          }
        })()}
      </div>
    )
  }
}

class App extends Component {
  render() {
    if (!this.props.router.query.page) {
      Router.push("/csr?page=home")
    }
    return <SwitchHandler switchItem={this.props.router.query.page} />
  }
}

export default withRouter(App)
