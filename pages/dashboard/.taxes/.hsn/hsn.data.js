import React from 'react';
import { Tag } from 'antd';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Cascader from "../../../../src/components/molecules/cascader"
import Model from "../../../../src/components/molecules/modelButton"
import createHsn from "../../../../src/components/organisms/forms/createTaxCategory"
import AssignItem from "../../../../src/components/organisms/forms/assignItem"

var hsnColumns = [
    {
        title: 'HSN Code',
        dataIndex: 'hsnCode'
    },
    // {
    //     title: 'HSN Code',
    //     dataIndex: 'hsnCode',
    // },
    {
        title: 'Assign',
        dataIndex: 'assign',
        key: 'assign',
        render: (assign) => <Model form={AssignItem} title="Assign Items" buttonValue="Assign"  />
    },
    {
        title: 'Edit',
        key: 'edit',
        dataIndex: '',
        render: (object) => {
            console.log(object.name, "idiejjnkjnk")
            return (
                
                <span>
                    <Model
                        visible form={createHsn}
                        prefilledValues={object.name}
                        formData={object.selectData}
                        title="Edit HSN" isTableModal
                        onSubmit={(data, cb) => object.handleFeatures.handleEdit(data, object.taxID, cb)}
                    />
                </span>
            )
        }
    },
    {
        title: '',
        dataIndex: '',
        render: (object) => {
            return (
                <span>
                    <Cascader placeholder='Actions' style={{ width: 120, "marginRight": "30px" }} optionArray={object.cascaderData} />
                    <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.hsnCode)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
                </span>
            )
        }
    }
]

const hsnColumnData = [
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        location: ['BBSR'],
        percentage: 5,
        taxCode: '2246ef07-2cbe-496b-af7e-ac88b5d3235e',
        cascaderData: ['Permission', 'Permission', 'Permission', 'Permission']

    }
]


export {
    hsnColumns,
    hsnColumnData
}