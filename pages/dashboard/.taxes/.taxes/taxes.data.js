import React from 'react';
import {Tag} from 'antd';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Cascader from "../../../../src/components/molecules/cascader"

var taxesColumns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    // {
    //     title: 'Tax Category',
    //     dataIndex: 'percentage',
    //     render: percentage => {
    //         console.log("kahiiiiiiito ", percentage)
    //         return (<span>{stockTag(percentage)}</span>)
    //     }
    // },
    {
        title: 'Percentage',
        dataIndex: 'percentage',
        render: percentage => (<b>{percentage}%</b>)
    },
    {
        title:'Edit',
        key: 'edit',
        dataIndex: '',
        render: (object) => {
            return (
            <span>
            <ButtonIcon icon="form" style={{"marginRight":"30px"}} shape="circle" type="primary" size="small" ghost />
            <Cascader placeholder='Actions' style={{width: 120, "marginRight":"30px"}} optionArray={object.cascaderData} />
            <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
            </span>
            )
        }
    }
]

 const taxesColumnData =[
     {
         product: 'Test Name',
         location: ['BBSR'],
         percentage: 5,
         taxCode: 'GST1234',
         cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
     },
     {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: 'GST1234',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
       product: 'Test Name',
       location: ['BBSR'],
       percentage: 5,
       taxCode: 'GST1234',
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
   {
       product: 'Test Name',
       location: ['BBSR'],
       percentage: 5,
       taxCode: 'GST1234',
       cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']

   }
 ]


export {
    taxesColumns,
    taxesColumnData
}