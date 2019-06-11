//Imports
import React from "react"
import ProductTable from "../../organisms/productTable"
import ButtonOne from "../../atoms/button"
import SearchBar from "../../molecules/searchBar"
import Cascader from "../../molecules/cascader"
import Model from "../../molecules/modelButton"
import { Row, Col } from "antd"

import CreatePurchase from "./../forms/createPurchase"

const ItemPurchase = props => {
  return (
    <div>
      <Row type="flex">
        <Col>
          <h2>
            <b>Item Purchase</b>
          </h2>
        </Col>
      </Row>
      <Row type="flex" gutter={4}>
        <Col span={1}>
          <Cascader
            optionArray={props.cascaderData[0].optionArray}
            placeholder="All"
          />
        </Col>
        <Col span={4}>
          <Cascader
            optionArray={props.cascaderData[0].optionArray}
            placeholder="Vendor"
          />
        </Col>
        <Col span={5}>
          <Cascader
            optionArray={props.cascaderData[0].optionArray}
            placeholder="Master Inventory"
          />
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span={6}>
          <SearchBar
            handleSearch={props.onSearch}
            value="Search Product Name"
          />
        </Col>
        <Col span={6}>
          <SearchBar type="enter" />
        </Col>
      </Row>
      {/* <br/> */}
      <ProductTable
        rowSelection={{}}
        columns={props.columns}
        data={props.columnData}
        pagination={{ ...props.pagination }}
      />
      <Row>
        <Col span={6} push={19}>
          <ButtonOne value="Review Purchase" />
          <Model
            form={CreatePurchase}
            formData={props.formData}
            title="Create Purchase"
            buttonValue="Create"
            onSubmit={props.onCreate}
            handleSubmitOk={props.handleSubmitOk}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ItemPurchase
