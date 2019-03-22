import React from 'react';
import { Table } from 'antd';

const ProductTable = (props) => {
    return(
        <Table columns={props.columns} dataSource={props.data} ></Table>    
    )
    
}

export default ProductTable;