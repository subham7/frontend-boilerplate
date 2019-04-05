import React from 'react';
import { Menu, Icon, Divider } from 'antd';
import Link from 'next/link'
let SubMenu = Menu.SubMenu;
let SidePanel = (props) => {
  return(
    <div >  
      <Menu
        theme="light"
        style={{"width":"210px", "height":"100vh", position:"fixed", top:"55px", overflowY:"scroll"}}
        mode="inline"
        defaultSelectedKeys={[props.selected]}
      >
      <div style={{padding:"5px"}}>
      <h1>Hi Ankit!</h1>
      </div>
        <Menu.Item key="home">
          <Link as={`/dashboard/home`} href={`/dashboard?page=home`}>
          <a>HOME</a>
          </Link>
        </Menu.Item>
        <SubMenu key="masterData" title={<span><span>MASTER DATA</span></span>}>
          
          <Menu.Item key="prodcuts">
          <Link as={`/dashboard/products`} href={`/dashboard?page=products`}>
              PRODUCTS
            </Link>
            </Menu.Item>
        
          <Menu.Item key="taxes">
          <Link as={`/dashboard/taxes`} href={`/dashboard?page=taxes`}>
              TAXES
            </Link>
            </Menu.Item>
          <Menu.Item key="modifiers">
          <Link as={`/dashboard/modifiers`} href={`/dashboard?page=modifiers`}>
              MODIFIERS
            </Link>
            </Menu.Item>
            <Menu.Item key="discounts">
          <Link as={`/dashboard/discounts`} href={`/dashboard?page=discounts`}>
              DISCOUNTS
            </Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="employees">
        <Link as={`/dashboard/employees`} href={`/dashboard?page=employees`}>
          <a> EMPLOYEES</a>
          </Link>
         
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
          <Menu.Item key="locations">
            <Link as={`/dashboard/locations`} href={`/dashboard?page=locations`}>
              LOCATIONS
            </Link>
          </Menu.Item>
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