//Imports
import React from "react"
import CascaderAndSearch from "../cascaderAndSearch"
import StockCard from "../stockCadRow"
import ProductTable from "../productTable"
import Model from "../../molecules/modelButton"
import createCategory from "../../organisms/forms/createCategory"
import { Row, Col } from "antd"
//Code
let ItemCategory = props => {
  return (
    <div style={{ overflow: "hidden" }}>
      <StockCard cardData={props.cardData} />
      <br />
      <CascaderAndSearch
        dataArray={props.cascaderData}
        buttonValue="Quick Upload"
      />
      <br />
      <ProductTable columns={props.columns} data={props.columnData} pagination={{...props.pagination}} />
      <Row>
        <Col span={3} push={20}>
          <Model
            form={createCategory}
            title="Create Item"
            buttonValue="Create"
            onSubmit={props.onCreate}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ItemCategory
