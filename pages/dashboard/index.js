import React from 'react';
import Template from "../../src/components/templates/dashboard";
import {itemData} from '../../pagesData/item.data.js';
import {taxesData} from '../../pagesData/taxes.data'
import {employeeColumns, employeeColumnData} from '../../pagesData/employee.data'
import {locationColumns, locationColumnData} from '../../pagesData/location.data'
import {itemPurchaseData} from '../../pagesData/purchase.data'
import {categoryData} from '../../pagesData/categories.data'

import Items from "../../src/components/organisms/items"

import Modifiers from "../../src/components/organisms/modifiers"
import Categories from "../../src/components/organisms/categories"
import Purchase from '../../src/components/organisms/ItemPurchase'
import { Tabs } from 'antd';

import Employees from "../../src/components/templates/emplolyee"
import Locations from "./.locations"
import Taxes from "./.taxes"
import Products from "./.products"
import {withRouter} from 'next/router'


import init from "../../src/utils/wrappers"


const TabPane = Tabs.TabPane;


// refactor code
const ItemsContent = (props) => {
  function callback(key) {
    // console.log(key);
   }
  return (
    <div>
      <Tabs defaultActiveKey={props.selectedTab} onChange={callback}>
        <TabPane tab="Items" key="1"></TabPane>
        <TabPane tab="Modifiers" key="2">/></TabPane>
        <TabPane tab="Categories" key="3"><Categories cardData={props.categoryData.cardData} cascaderData={props.categoryData.cascaderData} columns={props.categoryData.categoryColumns} columnData={props.categoryData.categoryColumnData}/></TabPane>
        <TabPane tab="Sub-Categories" key="4">Content of Tab Pane 4</TabPane>
        <TabPane tab="Discount" key="5">Content of Tab Pane 5</TabPane>
        <TabPane tab="Taxes" key="6"></TabPane>
      </Tabs>
    </div>
  )
    
}

class SwitchHandler extends React.Component {


  render(){
    
    return (
      <div>
         {(() => {
        
          switch(this.props.switchItem) {  
            case 'home':
              return <h1>Home page</h1>
            case 'employees':
              return <Employees rowSelection={{}} columns={employeeColumns} columnData={employeeColumnData}/>
            case 'locations':
              return <Locations/>
            case 'purchase':
              return <Purchase rowSelection={{}} columns={itemPurchaseData.itemPurchaseColumns} columnData={itemPurchaseData.itemPurchaseColumnData} cascaderData={itemPurchaseData.cascaderData} />
            case 'taxes':
              return <Taxes cascaderData={itemData.cascaderData} columns={taxesData.taxesColumns} columnData={taxesData.taxesColumnData}/>
            case 'products':
              return <Products/>
            case 'discounts':
              return <h1>Empty</h1>
            case 'modifiers':
              return  <Modifiers cascaderData={itemData.cascaderData} columns={itemData.productColumns} columnData={itemData.productColumnData}/>
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
        <SwitchHandler switchItem={this.props.router.query.page} tab={this.props.router.query.tab}/>
        </Template>


      </div>
    );
  }
}
export default withRouter(init(App));