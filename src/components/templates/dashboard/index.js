import React from "react"
import ElementHeader from "../../molecules/elementHeader"
import Sidebar from "../../organisms/sidePanel"
import Items from "../../organisms/items"
import Taxes from "../../organisms/taxes"
import Modifiers from "../../organisms/modifiers"
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
import styles from './styles.js';

const Dashboard = (props) => {
    function callback(key) {
       // console.log(key);
      }
    return (
        <div>
            <div className="heading">
                <ElementHeader logo="enabled" title="Business Details" />
            </div>
            <div className="sidebar">
                <Sidebar/>      
            </div>
            <div className="content">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Items" key="1"><Items cardData={props.itemData.cardData} cascaderData={props.itemData.cascaderData} columns={props.itemData.productColumns} columnData={props.itemData.productColumnData}/></TabPane>
                <TabPane tab="Modifiers" key="2"><Modifiers cascaderData={props.itemData.cascaderData} columns={props.itemData.productColumns} columnData={props.itemData.productColumnData}/>/></TabPane>
                <TabPane tab="Categories" key="3">Content of Tab Pane 3</TabPane>
                <TabPane tab="Sub-Categories" key="4">Content of Tab Pane 4</TabPane>
                <TabPane tab="Discount" key="5">Content of Tab Pane 5</TabPane>
                <TabPane tab="Taxes" key="6"><Taxes cascaderData={props.itemData.cascaderData} columns={props.taxesData.taxesColumns} columnData={props.taxesData.taxesColumnData}/></TabPane>
            </Tabs>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Dashboard