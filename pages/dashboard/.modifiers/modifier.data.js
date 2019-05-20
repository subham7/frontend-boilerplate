import React from 'react';
import stockTag from "../../../src/components/atoms/stockTag";
import ButtonIcon from "../../../src/components/atoms/tableButton"
import ButtonOne from "../../../src/components/atoms/button"
import Model from "../../../src/components/molecules/modelButton"

var cardData = [
    {
        iconType:'bank',
        iconStyle: {fontSize: "30px", marginTop: '30%', color: '#F88998'},
        title: '25',
        description: 'Items Out of Stock'
    },
    {
        iconType:'shopping-cart',
        iconStyle: {fontSize: "30px", marginTop: '30%', color: '#FFB353'},
        title: '25',
        description: 'Items Out of Stock'
    },
    {
        iconType:'rise',
        iconStyle: {fontSize: "30px", marginTop: '30%', color: '#69E4A6'},
        title: '25',
        description: 'Items Out of Stock'
    }
]
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

var productColumns =[
    {
        title: 'SET NAME',
        dataIndex: 'name',
        key: 'product'
    },
    {
        title: 'LOCATION',
        dataIndex: 'location',
        key: 'location',
        render: location => (<span>{stockTag(location)}</span>)
    },
    {
        title: 'OPTIONS',
        dataIndex: 'options',
        key: 'options'
    },
    {
        title: 'Apply',
        dataIndex: 'apply',
        render: object =><ButtonOne value={"Apply to Items"} color="#2699FB" />
    },
    {
        title: '',
        dataIndex: '',
        render: object => <ButtonIcon onClick={{}} icon="form" style={{ "marginRight": "30px" }} shape="circle" type="primary" size="small" ghost />
    },
    {
        title: '',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={{}} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]

 const productColumnData =[
     {
         name: 'Parle G',
         code: '1X2X3X4X5',
         options: 'No cheese, Extra',
         location: ['BBSR'],
         price: 10
     },
     {
        name: 'Hide & Seek',
        code: '1X2X3X4X5',
        options: 'No cheese, Extra',
        location: ['BBSR'],
        price: 30
    },
    {
        name: 'Parle G',
        code: '1X2X3X4X5',
        options: 'No cheese, Extra',
        location: ['BBSR'],
        price: 10
    },
    {
        name: 'Parle G',
        code: '1X2X3X4X5',
        options: 'No cheese, Extra',
        location: ['BBSR'],
        price: 10
    },
    {
       name: 'Hide & Seek',
       code: '1X2X3X4X5',
       options: 'No cheese, Extra',
       location: ['BBSR'],
    
       price: 30
   },
   {
       name: 'Parle G',
       code: '1X2X3X4X5',
       options: 'No cheese, Extra',
       location: ['BBSR'],
       price: 10
   }
 ]

export const itemData = {
    cardData, cascaderData, productColumns, productColumnData
}