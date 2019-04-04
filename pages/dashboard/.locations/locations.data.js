import React from 'react';
import {Tag} from 'antd';

import stockTag from '../../../src/components/atoms/stockTag'
import ButtonIcon from '../../../src/components/atoms/tableButton';
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
        title:'Edit',
        key: 'edit',
        dataIndex: 'edit',
        render: (code) => {
            return (
            <span>
            <ButtonIcon icon="form" style={{"marginRight":"30px"}} shape="circle" type="primary" size="small" ghost />
            <ButtonIcon icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
            </span>
            )
        }
    }
]

 const locationColumnData =[
     {
         product: 'Big Bazaar',
         code: 'Somewhere',
         category: 'abcd@gmail.com',
         location: ['BBSR']
     },
     {
        product: 'Bawa ka Jhopdi',
        code: 'Somewhere',
        category: 'abcd@gmail.com',
        location: ['BBSR']
    },
    {
        product: 'Big Bazaar',
        code: 'Somewhere',
        category: 'abcd@gmail.com',
        location: ['BBSR']
    },
    {
        product: 'Big Bazaar',
        code: 'Somewhere',
        category: 'abcd@gmail.com',
        location: ['BBSR']
    },
    {
       product: 'Bawa ka Jhopdi',
       code: 'Somewhere',
       category: 'abcd@gmail.com',
       location: ['BBSR']
    },
   {
       product: 'Big Bazaar',
       code: 'Somewhere',
       category: 'abcd@gmail.com',
       location: ['BBSR']

   }
 ]


export {locationColumns, locationColumnData}