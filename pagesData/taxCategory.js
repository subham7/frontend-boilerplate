import React from 'react';
import {Tag} from 'antd';
import stockTag from "../src/components/atoms/stockTag"
import ButtonIcon from '../src/components/atoms/tableButton';
import Cascader from "../src/components/molecules/cascader"

const taxCategoryColumns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Tax Code',
        dataIndex: 'taxCode'
    }
]

const taxCategoryColumnData = [
    {
        name: 'Test Name',
        taxCode: GST1234
    },
    {
        name: 'Test Name',
        taxCode: GST1234
    },
    {
        name: 'Test Name',
        taxCode: GST1234
    }
]

export const taxCategoryData ={
    taxCategoryColumns,
    taxCategoryColumnData
}