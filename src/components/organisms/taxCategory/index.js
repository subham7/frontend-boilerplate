import React from 'react';
import CascaderAndSearch from '../../organisms/cascaderAndSearch';
import ProductTable from '../../organisms/productTable';
import Model from "../../molecules/modelButton"
import CreateTaxes from "../../organisms/forms/createTax"
import { Row,Col } from 'antd';



const TaxesCategory = (props) => {
    return(
        <div>
            <ProductTable rowSelection={props.rowSelection} columns={props.columns} data={props.columnData} />
            <Row>
            <Col span={3} push={12}>
                <Model form={<CreateTaxes/>} title="Create Tax" buttonValue="Create"/>
            </Col>
            </Row>
        </div>
    )
}

export default TaxesCategory;