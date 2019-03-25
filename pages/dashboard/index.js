import React from 'react';
import Template from "../../src/components/templates/dashboard";
import {itemData} from './item.data.js';
import {taxesData} from './taxes.data'
import {employeeColumns, employeeColumnData} from './employee.data'
import {locationColumns, locationColumnData} from './location.data'

import {categoryData} from './categories.data'

import Items from "../../src/components/organisms/items"
import Taxes from "../../src/components/organisms/taxes"
import Modifiers from "../../src/components/organisms/modifiers"
import Categories from "../../src/components/organisms/categories"
import { Tabs } from 'antd';

import Employees from "../../src/components/templates/emplolyee"
import Locations from "../../src/components/templates/locations"

import {withRouter} from 'next/router'


const TabPane = Tabs.TabPane;


// refactor code
const ItemsContent = (props) => {
  function callback(key) {
    // console.log(key);
   }
  return (
    <div>
      <Tabs defaultActiveKey={props.selectedTab} onChange={callback}>
        <TabPane tab="Items" key="1"><Items cardData={props.itemData.cardData} cascaderData={props.itemData.cascaderData} columns={props.itemData.productColumns} columnData={props.itemData.productColumnData}/></TabPane>
        <TabPane tab="Modifiers" key="2"><Modifiers cascaderData={props.itemData.cascaderData} columns={props.itemData.productColumns} columnData={props.itemData.productColumnData}/>/></TabPane>
        <TabPane tab="Categories" key="3"><Categories cardData={props.categoryData.cardData} cascaderData={props.categoryData.cascaderData} columns={props.categoryData.categoryColumns} columnData={props.categoryData.categoryColumnData}/></TabPane>
        <TabPane tab="Sub-Categories" key="4">Content of Tab Pane 4</TabPane>
        <TabPane tab="Discount" key="5">Content of Tab Pane 5</TabPane>
        <TabPane tab="Taxes" key="6"><Taxes cascaderData={props.itemData.cascaderData} columns={props.taxesData.taxesColumns} columnData={props.taxesData.taxesColumnData}/></TabPane>
      </Tabs>
    </div>
  )
    
}

const SwitchHandler = ({switchItem, tab})=> {

return (
  <div>
     {(() => {
    
      switch(switchItem) {  
        case 'home':
          return <h1>Home page</h1>
        case 'items':{
          console.log("item selected")
          return <ItemsContent selectedTab={tab} itemData={itemData} taxesData={taxesData} categoryData={categoryData}></ItemsContent>
        }
        case 'employees':
          return <Employees rowSelection={{}} columns={employeeColumns} columnData={employeeColumnData}/>
        case 'locations':
          return <Locations rowSelection={{}} columns={locationColumns} columnData={locationColumnData} />
        default:
          return <h1>Error: 404</h1>
      }
    })()}
  </div>
)
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
export default withRouter(App);