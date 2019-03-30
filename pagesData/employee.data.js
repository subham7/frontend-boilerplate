import React from 'react';
import {Tag} from 'antd';
import stockTag from '../src/components/atoms/stockTag'
import ButtonIcon from '../src/components/atoms/tableButton';
import Cascader from '../src/components/molecules/cascader'

var employeeColumns =[
    {
        title: 'Name',
        dataIndex: 'product'
    },
    {
        title: 'EmployeeID',
        dataIndex: 'employee'
    },
    {
        title: 'Permissions',
        dataIndex: 'permissions',
        render: permissions => (<Cascader style={{width: 120}} optionArray={permissions} />)
    },
    {
        title: 'Store Role',
        dataIndex: 'role',
        render: role => <Tag color='green' >{role}</Tag>
    },
    {
        title:'Edit',
        key: 'edit',
        dataIndex: 'edit',
        render: (code) => {
            return (
            <span>
            <ButtonIcon style={{"marginRight":"30px"}} icon="form" shape="circle" type="primary" size="small" ghost />
            <ButtonIcon icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
            </span>
            )
        }
    }
]

 const employeeColumnData =[
     {
         product: 'Test Name',
         employee: '1*2*3*4*5',
         role: 'Admin',
         permissions: ['Permission', 'Permission', 'Permission', 'Permission']
     },
     {
        product: 'Test Name',
        employee: '1*2*3*4*5',
        role: 'Admin',
        permissions: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        employee: '1*2*3*4*5',
        role: 'Admin',
        permissions: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
        product: 'Test Name',
        employee: '1*2*3*4*5',
        role: 'Admin',
        permissions: ['Permission', 'Permission', 'Permission', 'Permission']
    },
    {
       product: 'Test Name',
       employee: '1*2*3*4*5',
       role: 'Admin',
       permissions: ['Permission', 'Permission', 'Permission', 'Permission']
    },
   {
       product: 'Test Name',
       employee: '1*2*3*4*5',
       role: 'Admin',
       permissions: ['Permission', 'Permission', 'Permission', 'Permission']

   }
 ]


export {employeeColumns, employeeColumnData}