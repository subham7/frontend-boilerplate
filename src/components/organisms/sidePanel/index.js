import React from 'react';
import { Menu, Icon, Divider } from 'antd';
let SubMenu = Menu.SubMenu;
let SidePanel = () => {
  return(
    <div style={{"margin-top":"38px", "position":"fixed"}}>
      <h1>Hi Ankit!</h1>
      <Menu
        theme="light"
        style={{"width":"210px", "height":"100vh"}}
        mode="inline"
        defaultSelectedKeys={['home']}
      >
        <Menu.Item key="home">
          HOME
        </Menu.Item>
        <Menu.Item key="items">
          ITEMS
        </Menu.Item>
        <Menu.Item key="employees">
          EMPLOYEES
        </Menu.Item>
        <Menu.Item key="cutomers">
          CUSTOMERS
        </Menu.Item>
        <Divider />
        <SubMenu key="setting" title={<span><span>SETTING</span></span>}>
          <Menu.Item key="account">ACCOUNT</Menu.Item>
          <Menu.Item key="personal_info">PERSONAL INFO</Menu.Item>
          <Menu.Item key="email_notif">EMAIL NOTIFICATION</Menu.Item>
        </SubMenu>
        <SubMenu key="business" title={<span><span>BUSINESS</span></span>}>
          <Menu.Item key="locations">LOCATIONS</Menu.Item>
          <Menu.Item key="permissions">PERMISSIONS</Menu.Item>
          <Menu.Item key="receipts">RECEIPTS</Menu.Item>
          <Menu.Item key="devices">DEVICES</Menu.Item>
        </SubMenu>
        <Divider />
        <Menu.Item key="settings">
          SUPPORT
        </Menu.Item>
      </Menu>
    </div>
  )
}
export default SidePanel;