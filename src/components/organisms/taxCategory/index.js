import React from 'react';
import CascaderAndSearch from '../../organisms/cascaderAndSearch';
import ProductTable from '../../organisms/productTable';
import Model from "../../molecules/modelButton"
import createTaxCategory from "../../organisms/forms/createTaxCategory"
import { Row,Col } from 'antd';



const TaxesCategory = (props) => {
    return(
        <div>
            <ProductTable pagination={{...props.pagination}} rowSelection={props.rowSelection} columns={props.columns} data={props.columnData} />
            <Row>
            <Col span={3} push={12}>
                <Model form={createTaxCategory} title="Create Tax" buttonValue="Create"  onSubmit={props.onCreate} handleSubmitOk={props.handleSubmitOk}/>
            </Col>
            </Row>
        </div>
    )
}

export default TaxesCategory;