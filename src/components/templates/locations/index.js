import React from 'react';
import Search from '../../molecules/searchBar'
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button'
import Model from "../../molecules/modelButton"

import CreateLocation from "../../organisms/forms/createLocation"
import { Row,Col } from 'antd';



const LocationTemplate = (props) => {

 
    return(
        <div>
            <Row type="flex">
                <Col>
                    <h2><b>Locations</b></h2>
                </Col>
                <Col span={6} push={16}>
                    <Search value="Search Name" />
                </Col>
            </Row>
            {/* <br/> */}
            <ProductTable rowSelection={props.rowSelection} columns={props.columns} data={props.columnData} />
            <Model form={CreateLocation} title="Create Location" buttonValue="Create" onSubmit={props.onCreate} handleSubmitOk={props.handleSubmitOk}/>
        </div>
    )
}

export default LocationTemplate;