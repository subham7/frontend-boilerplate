import React from 'react';
import {Tag} from 'antd';
import stockTag from "../../src/components/atoms/stockTag"
import ButtonIcon from '../../src/components/atoms/tableButton';
import Cascader from "../../src/components/molecules/cascader"

var taxesColumns =[
    {
        title: 'Name',
        dataIndex: 'product'
    },
    {
        title: 'Locations',
        dataIndex: 'locations',
        render: location => (<span>{stockTag(location)}</span>)
    },
    {
        title: 'Percentage',
        dataIndex: 'percentage',
        render: percentage => (<b>{percentage}%</b>)
    },
    {
        title: 'Tax Code',
        dataIndex: 'taxCode'
    },
    {
        title:'Edit',
        key: 'edit',
        dataIndex: 'cascaderData',
        render: (cascaderData) => {
            return (
            <span>
            <ButtonIcon icon="form" style={{"marginRight":"30px"}} shape="circle" type="primary" size="small" ghost />
            <Cascader placeholder='Actions' style={{width: 120, "marginRight":"30px"}} optionArray={cascaderData} />
            <ButtonIcon icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
            </span>
            )
        }
    }
]

 const taxesColumnData =[
     {
         product: 'Test Name',
         locations: ['BBSR'],
         percentage: 5,
         taxCode: 'GST1234',
         cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
     },
     {
        product: 'Test Name',
        locations: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        locations: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        locations: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
       product: 'Test Name',
       locations: ['BBSR'],
       percentage: 5,
       taxCode: 'GST1234',
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
   {
       product: 'Test Name',
       locations: ['BBSR'],
       percentage: 5,
       taxCode: 'GST1234',
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']

   }
 ]


export const taxesData = {
    taxesColumns,
    taxesColumnData
}