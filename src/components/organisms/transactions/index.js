import React from 'react';
import SearchBar from '../../molecules/searchBar';
import Cascader from '../../molecules/cascader';
import ProductTable from '../../organisms/productTable';
import ButtonOne from '../../atoms/button';
import Model from "../../molecules/modelButton"
import createModifier from "../../organisms/forms/createModifier"
import { Row, Col } from 'antd';

let Transactions = (props) => {
    return (
        <div style={{ "overflow": "hidden" }}>
            <Row > 
                <Col span={3}>
                    <Cascader />
                </Col>
                <Col span={6}>
                    <SearchBar handleSearch={props.onSearch} value="TransactionID" />
                </Col>
            </Row>
            <br />
            <ProductTable columns={props.columns} data={props.columnData} pagination={{ ...props.pagination }} />
        </div>
    )
}
export default Transactions;