import React from 'react';
import Search from '../../molecules/searchBar'
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button'
import Model from "../../molecules/modelButton"

import CreateLocation from "../../organisms/forms/createLocation"
import { Row, Col } from 'antd';



const LocationTemplate = (props) => {


    return (
        <div>
            <Row type="flex">
                <Col>
                    <h2><b>Payment Modes</b></h2>
                </Col>
                <Col span={6} push={16}>
                    <Search value="Search Name" handleSearch={props.onSearch} />
                </Col>
            </Row>
            {/* <br/> */}
            <ProductTable pagination={{ ...props.pagination }} rowSelection={props.rowSelection} columns={props.columns} data={props.columnData} />
        </div>
    )
}

export default LocationTemplate;