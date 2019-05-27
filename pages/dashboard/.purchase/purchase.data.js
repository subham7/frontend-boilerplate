import React from 'react';
import {Tag} from 'antd';
import stockTag from "../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../src/components/atoms/tableButton';
import Cascader from "../../../src/components/molecules/cascader"

var cascaderData =[
    {
        placeholder: 'All Categories',
        optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
        // style: { width: 162 }
    },
    {
        placeholder: 'All Inventory',
        optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
        // style: { width: 162 }
    },
    {
        placeholder: 'All Stores',
        optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
        // style: { width: 162 }
    },
    {
        placeholder: 'All Actions',
        optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
        // style: { width: 162 }
    }
]

var itemPurchaseColumns =[
    {
        title: 'Name',
        dataIndex: '',
        render: object => <p>{object.productsData.name}</p>
    },
    {
        title: 'QTY',
        dataIndex: 'quantity',
        align: 'center',
        render: (quantity) =>  (<span>{stockTag(quantity)}</span>)
    },
    {
        title: 'MRP',
        dataIndex: '',
        render: object => {
            return <p>{object.productsData.price}</p>
        }
    },
    {
        title: 'Cost Price',
        dataIndex: '',
        render: object => {
            return <p></p>
        }
    },
    {
        title: 'Location',
        dataIndex: 'location',
        render: locations => (<span>{stockTag(locations)}</span>)
    },
    {
        title:'Action',
        key: 'action',
        dataIndex: 'cascaderData',
        render: (cascaderData) => {
            return (
            <span>
            <Cascader placeholder='Actions' style={{width: 120, "marginRight":"30px"}} optionArray={cascaderData} />
            <ButtonIcon icon="form"  shape="circle" type="primary" size="small" ghost />
            
            </span>
            )
        }
    },
    {
        title: '',
        dataIndex: '',
        render: () => <ButtonIcon icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
    }
]

 const itemPurchaseColumnData =[
     {
         name: 'Test Name',
         quantity: 15,
         mrp: 20,
         price: 16,
         locations: ['BBSR'],
         cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
     },
     {
        name: 'Test Name',
        quantity: 15,
        mrp: 20,
        price: 16,
        locations: ['BBSR'],
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        name: 'Test Name',
        quantity: 15,
        mrp: 20,
        price: 16,
        locations: ['BBSR'],
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        name: 'Test Name',
        quantity: 15,
        mrp: 20,
        price: 16,
        locations: ['BBSR'],
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
       name: 'Test Name',
       quantity: 15,
       mrp: 20,
       price: 16,
       locations: ['BBSR'],
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
   {
       name: 'Test Name',
       quantity: 15,
       mrp: 20,
       price: 16,
       locations: ['BBSR'],
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']

   }
 ]


export const itemPurchaseData = {
    cascaderData,
    itemPurchaseColumns,
    itemPurchaseColumnData
}
