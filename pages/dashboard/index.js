import React from "react"

import Template from "../../src/components/templates/dashboard"
import Modifiers from "./.modifiers"
import Categories from "../../src/components/organisms/categories"
import Employees from "./.employees"
import Locations from "./.locations"
import Taxes from "./.taxes"
import Products from "./.products"
import Customers from "./.customers"
import Purchase from "./.purchase"
import Permissions from "./.permissions"
import { Tabs } from "antd"
import { withRouter } from "next/router"

import init from "../../src/utils/wrappers"
import Auth from "./../../src/utils/auth"
import NotAuthorized from "./../../src/components/templates/notAuthorized"

const TabPane = Tabs.TabPane

// refactor code
const ItemsContent = props => {
  function callback(key) {
    // console.log(key);
  }
  return (
    <div>
      <Tabs defaultActiveKey={props.selectedTab} onChange={callback}>
        <TabPane tab="Items" key="1" />
        <TabPane tab="Modifiers" key="2" />
        <TabPane tab="Categories" key="3">
          <Categories
            cardData={props.categoryData.cardData}
            cascaderData={props.categoryData.cascaderData}
            columns={props.categoryData.categoryColumns}
            columnData={props.categoryData.categoryColumnData}
          />
        </TabPane>
        <TabPane tab="Sub-Categories" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="Discount" key="5">
          Content of Tab Pane 5
        </TabPane>
        <TabPane tab="Taxes" key="6" />
      </Tabs>
    </div>
  )
}

class SwitchHandler extends React.Component {
  render() {
    return (
      <div>
        {(() => {
          switch (this.props.switchItem) {
            case "home":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<h1>Home page</h1>}
                  no={<NotAuthorized />}
                />
              )

            case "employees":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Employees />}
                  no={<NotAuthorized />}
                />
              )

            case "locations":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Locations />}
                  no={<NotAuthorized />}
                />
              )

            case "purchase":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Purchase />}
                  no={<NotAuthorized />}
                />
              )

            case "taxes":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Taxes />}
                  no={<NotAuthorized />}
                />
              )

            case "products":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Products />}
                  no={<NotAuthorized />}
                />
              )

            case "discounts":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<h1>Empty</h1>}
                  no={<NotAuthorized />}
                />
              )

            case "customers":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Customers />}
                  no={<NotAuthorized />}
                />
              )

            case "modifiers":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Modifiers />}
                  no={<NotAuthorized />}
                />
              )

            case "permission":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Permissions />}
                  no={<NotAuthorized />}
                />
              )

            default:
              return <h1>Error: 404</h1>
          }
        })()}
      </div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Template sidebarTab={this.props.router.query.page}>
          <SwitchHandler
            switchItem={this.props.router.query.page}
            tab={this.props.router.query.tab}
          />
        </Template>
      </div>
    )
  }
}
export default withRouter(init(App))
