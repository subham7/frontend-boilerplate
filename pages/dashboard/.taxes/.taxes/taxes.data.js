import React from 'react';
import {Tag} from 'antd';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Cascader from "../../../../src/components/molecules/cascader"
import Model from "../../../../src/components/molecules/modelButton"
import createTax from "../../../../src/components/organisms/forms/createTax"

var taxesColumns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Tax Category',
        dataIndex: '',
        render: object => {
            var categoryIndex = object.selectData.findIndex(id => id.value == object.taxCategory)
            return (<span>{stockTag(object.selectData[categoryIndex].name)}</span>)
        }
    },
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
            <Model 
                visible form={createTax}
                prefilledValues = {object.prefilledValues}
                formData={object.selectData}
                title="Edit Tax" isTableModal
                onSubmit={(data, cb) => object.handleFeatures.handleEdit(data, object.taxID, cb)}
            />
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