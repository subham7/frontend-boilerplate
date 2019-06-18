import React from "react"
import { Menu, Icon, Divider } from "antd"
import Link from "next/link"
import styles from "./styles"
import Auth from "./../../../utils/auth"

let SubMenu = Menu.SubMenu

let style = {
  height: "calc(100vh - 50px)",
  width: "210px",
  padding: "20px 0 0 0"
}

let SidePanel = props => {
  return (
    <div>
      <Menu
        theme="light"
        style={style}
        mode="inline"
        defaultSelectedKeys={[props.selected]}
      >
        <div style={{ margin: "25px 0 50px 24px" }}>
          <h1>Hi Ankit!</h1>
        </div>

        <Menu.Item key="home">
          <Link as={`/dashboard/home`} href={`/dashboard?page=home`}>
            <a>
              <p className="sidebar-option">HOME</p>
            </a>
          </Link>
        </Menu.Item>

        <SubMenu
          key="masterData"
          title={
            <span>
              <span>
                <p className="sidebar-option">MASTER DATA</p>
              </span>
            </span>
          }
        >
          <Menu.Item key="prodcuts">
            <Link as={`/dashboard/products`} href={`/dashboard?page=products`}>
              <p className="sidebar-option">PRODUCTS</p>
            </Link>
          </Menu.Item>

          <Menu.Item key="taxes">
            <Link as={`/dashboard/taxes`} href={`/dashboard?page=taxes`}>
              <p className="sidebar-option">TAXES</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="modifiers">
            <Link
              as={`/dashboard/modifiers`}
              href={`/dashboard?page=modifiers`}
            >
              <p className="sidebar-option">MODIFIERS</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="discounts">
            <Link
              as={`/dashboard/discounts`}
              href={`/dashboard?page=discounts`}
            >
              <p className="sidebar-option">DISCOUNTS</p>
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="employees">
          <Link as={`/dashboard/employees`} href={`/dashboard?page=employees`}>
            <a>
              <p className="sidebar-option">EMPLOYEES</p>
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="cutomers">
          <Link as={`/dashboard/customers`} href={`/dashboard?page=customers`}>
            <a>
              <p className="sidebar-option">CUSTOMERS</p>
            </a>
          </Link>
        </Menu.Item>
        <Divider />
        <SubMenu
          key="setting"
          title={
            <span>
              <span>
                <p className="sidebar-option">SETTING</p>
              </span>
            </span>
          }
        >
          <Menu.Item key="account">
            <p className="sidebar-option">ACCOUNT</p>
          </Menu.Item>
          <Menu.Item key="personal_info">
            <p className="sidebar-option">PERSONAL INFO</p>
          </Menu.Item>
          <Menu.Item key="email_notif">
            <p className="sidebar-option">EMAIL NOTIFICATION</p>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="business"
          title={
            <span>
              <span>
                <p className="sidebar-option">BUSINESS</p>
              </span>
            </span>
          }
        >
          <Menu.Item key="locations">
            <Link
              as={`/dashboard/locations`}
              href={`/dashboard?page=locations`}
            >
              <p className="sidebar-option">LOCATIONS</p>
            </Link>
          </Menu.Item>
          <Menu.Item key="permission">
            <Link
              as={`/dashboard/permission`}
              href={`/dashboard?page=permission`}
            >
              <p className="sidebar-option">PERMISSIONS</p>
            </Link>
          </Menu.Item>

          <Menu.Item key="purchase">
            <Link as={`/dashboard/purchase`} href={`/dashboard?page=purchase`}>
              <p className="sidebar-option">PURCHASE</p>
            </Link>
          </Menu.Item>

          <Menu.Item key="receipts">
            <p className="sidebar-option">RECEIPTS</p>
          </Menu.Item>
          <Menu.Item key="devices">
            <p className="sidebar-option">DEVICES</p>
          </Menu.Item>
        </SubMenu>
        <Divider />
        <Menu.Item key="settings">
          <p className="sidebar-option">SUPPORT</p>
        </Menu.Item>
      </Menu>
      <style jsx>{styles}</style>
    </div>
  )
}
export default SidePanel
