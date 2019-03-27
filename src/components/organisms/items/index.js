import React from 'react';
import CascaderAndSearch from "../cascaderAndSearch";
import StockCard from "../stockCadRow";
import ProductTable from "../productTable";
import ButtonOne from "../../atoms/button"
import Model from "../../molecules/modelButton"
import CreateItem from "../../organisms/forms/createItem"
import { Row,Col } from 'antd';
import Link from 'next/link'


//Code
let ItemTemplate = (props) => {
  return(
    <div>
    <StockCard cardData={props.cardData}/>
    <br />
    <CascaderAndSearch dataArray={props.cascaderData} buttonValue='Quick Upload' />
    <br />
    <ProductTable columns={props.columns} data={props.columnData} />
    <Row >
      <Col span={3}>
      <Link as={`/dashboard/purchase`} href={`/dashboard/purchase`} >
        <ButtonOne value="Purchase"/>
      </Link>
      </Col>
      <Col span={3} >
        <ButtonOne value="Modify/Shift"/>
      </Col>
      <Col span={3} push={12}>
        <Model form={<CreateItem/>} title="Create Item" buttonValue="Create"/>
      </Col>
    </Row>
    </div>
  )

}
export default ItemTemplate;