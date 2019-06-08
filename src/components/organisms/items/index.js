import React from "react"
import CascaderAndSearch from "../cascaderAndSearch"
import StockCard from "../stockCadRow"
import ProductTable from "../productTable"
import ButtonOne from "../../atoms/button"
import Model from "../../molecules/modelButton"
import CreateItem from "../../organisms/forms/createItem"
import { Row, Col } from "antd"
import Link from "next/link"

import styles from "./styles.js"

//Code
let ItemTemplate = props => {
  return (
    <div>
      <div className="row-container">
        <StockCard cardData={props.cardData} />
      </div>
      <div className="row-container">
        <CascaderAndSearch
          dataArray={props.cascaderData}
          buttonValue="Quick Upload"
          onSearch={props.onSearch}
          placeholder="Search Name"
        />
      </div>

      <div className="row-container">
        <ProductTable columns={props.columns} data={props.columnData} pagination={{...props.pagination}} />
      </div>

      <div className="row-container">
        <Row>
          <Col span={3}>
            <Link as={`/dashboard/purchase`} href={`/dashboard/purchase`}>
              <ButtonOne value="Purchase" />
            </Link>
          </Col>
          <Col span={3}>
            <ButtonOne value="Modify/Shift" />
          </Col>
          <Col span={3} push={12}>
            <Model
              form={CreateItem}
              formData={props.formData}
              title="Create Item"
              buttonValue="Create"
              onSubmit={props.onCreate}
            />
          </Col>
        </Row>
      </div>

      <style jsx>{styles}</style>
    </div>
  )
}
export default ItemTemplate
