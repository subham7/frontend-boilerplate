import React from 'react';
import {Tag} from 'antd';

import stockTag from '../../../src/components/atoms/stockTag'
import ButtonIcon from '../../../src/components/atoms/tableButton';
import Model from "../../../src/components/molecules/modelButton"
import createLocation from "../../../src/components/organisms/forms/createLocation"
// import Cascader from '../src/components/molecules/cascader'

var locationColumns =[
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Manager',
        dataIndex: 'pocname',
        key: 'pocname'
    },
    {
        title: 'LOCATION',
        dataIndex: 'address',
        key: 'address',
     
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (category)=> <a href="#" >{category}</a>
    },
    {
        title: 'Rename',
        dataIndex: '',
        render: (object) => {
            return (
                <Model visible form={createLocation}
                    title="Create Item" isTableModal={true}
                    buttonValue="Create"
                    prefilledValues={object.prefilledValues}
                    onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.blocationID, cb)}
                />
            )
        }
    },
    {
        title: '',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.blocationID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]


export {locationColumns}