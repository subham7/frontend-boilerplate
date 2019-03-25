//Imports
import React from 'react';
import CascaderAndSearch from "../cascaderAndSearch";
import StockCard from "../stockCadRow";
import ProductTable from "../productTable";
import Model from "../../molecules/modelButton"
import CreateItem from "../../organisms/forms/createItem"
import { Row,Col } from 'antd';
//Code
let ItemCategory = (props) => {
  return(
    <div style={{"overflow":"hidden"}}>
    <StockCard cardData={props.cardData}/>
    <br />
    <CascaderAndSearch dataArray={props.cascaderData} buttonValue='Quick Upload' />
    <br />
    <ProductTable columns={props.columns} data={props.columnData} />
    <Row >
      <Col span={3} push={20}>
      <Model form={<CreateItem/>} title="Create Item" buttonValue="Create"/>
      </Col>
    </Row>
    </div>
  )

}
export default ItemCategory;
