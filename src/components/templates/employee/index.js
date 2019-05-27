import React from 'react';
import Search from '../../molecules/searchBar'
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button'
import { Row,Col } from 'antd';

import Model from "../../molecules/modelButton"

import CreateEmployee from "../../organisms/forms/addEmploy"



const Employee = (props) => {
    return(
        <div>
            <Row type="flex">
                <Col>
                    <h2><b>EMPLOYEES</b></h2>
                </Col>
            </Row>
            {/* <br/> */}
            <ProductTable pagination={{...props.pagination}} rowSelection={props.rowSelection} columns={props.columns} data={props.columnData} />
            <Model form={CreateEmployee} title="Create Employee" buttonValue="Create"  onSubmit={props.onCreate} handleSubmitOk={props.handleSubmitOk}/>
        </div>
    )
}

export default Employee;