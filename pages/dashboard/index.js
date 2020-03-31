import React from "react";
import { connect } from "react-redux";

import Template from "../../src/components/templates/dashboard";
import Modifiers from "./.modifiers";
import Categories from "../../src/components/organisms/categories";
import Employees from "./.employees";
import Locations from "./.locations";
import Taxes from "./.taxes";
import Products from "./.products";
import Customers from "./.customers";
import Purchase from "./.purchase";
import WebPermissions from "./.webPermissions";
import AppPermissions from "./.appPermisions";
import Attributes from "./.attributes";
import Transactions from "./.transactions";
import Discount from "./.discount";
import CashReconcillation from "./.cashReconcillation";
import PaymentModes from "./.paymentModes";
import PaymentReport from "./.paymentReport";
import ItemSalesReport from "./.itemSalesReport";
import InventoryReport from "./.inventoryReport";
import Home from "./.home";
import { Tabs } from "antd";
import { withRouter } from "next/router";
import wrapper from "./wrapper";
import Router from "next/router";
import init from "../../src/utils/wrappers";
import Auth from "./../../src/utils/auth";
import NotAuthorized from "./../../src/components/templates/notAuthorized";

const TabPane = Tabs.TabPane;

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
  );
};

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
                  yes={<Home />}
                  no={<NotAuthorized />}
                />
              );

            case "employees":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Employees />}
                  no={<NotAuthorized />}
                />
              );

            case "locations":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Locations />}
                  no={<NotAuthorized />}
                />
              );

            case "purchase":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Purchase />}
                  no={<NotAuthorized />}
                />
              );

            case "taxes":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Taxes />}
                  no={<NotAuthorized />}
                />
              );

            case "products":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Products />}
                  no={<NotAuthorized />}
                />
              );

            case "discounts":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Discount />}
                  no={<NotAuthorized />}
                />
              );

            case "customers":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Customers />}
                  no={<NotAuthorized />}
                />
              );

            case "modifiers":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Modifiers />}
                  no={<NotAuthorized />}
                />
              );

            case "attributes":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Attributes />}
                  no={<NotAuthorized />}
                />
              );

            case "transactions":
              return (
                <Auth
                  param={this.props.switchItem}
                  yes={<Transactions />}
                  no={<NotAuthorized />}
                />
              );

            case "permissions-web":
              return (
                <Auth
                  param="permissions"
                  yes={<WebPermissions />}
                  no={<NotAuthorized />}
                />
              );

            case "permissions-app":
              return (
                <Auth
                  param="permissions"
                  yes={<AppPermissions />}
                  no={<NotAuthorized />}
                />
              );

            case "cash-reconcillation":
              return (
                <Auth
                  param="permissions"
                  yes={<CashReconcillation />}
                  no={<NotAuthorized />}
                />
              );

            case "payment-report":
              return (
                <Auth
                  param="permissions"
                  yes={<PaymentReport />}
                  no={<NotAuthorized />}
                />
              );

            case "itemsales-report":
              return (
                <Auth
                  param="permissions"
                  yes={<ItemSalesReport />}
                  no={<NotAuthorized />}
                />
              );

            case "inventory-report":
              return (
                <Auth
                  param="permissions"
                  yes={<InventoryReport />}
                  no={<NotAuthorized />}
                />
              );

            case "payment-modes":
              return (
                <Auth
                  param="permissions"
                  yes={<PaymentModes />}
                  no={<NotAuthorized />}
                />
              );

            default:
              return <h1>Error: 404</h1>;
          }
        })()}
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    if (!this.props.router.query.page) {
      Router.push("/dashboard?page=home");
    }
    let userName = this.props.user.response.data[0].firstName;
    return (
      <div>
        <Template sidebarTab={this.props.router.query.page} user={userName}>
          <SwitchHandler
            switchItem={this.props.router.query.page}
            tab={this.props.router.query.tab}
          />
        </Template>
      </div>
    );
  }
}
export default wrapper(withRouter(init(App)));
