import React from "react"
import CascaderAndSearch from "../../organisms/cascaderAndSearch"
import ProductTable from "../../organisms/productTable"
import Model from "../../molecules/modelButton"
import CreateHSN from "../../organisms/forms/createTaxCategory"
import { Row, Col } from "antd"

const HSNTemplate = props => {
  return (
    <div>
      <CascaderAndSearch onSearch={props.onSearch} placeholder="Search Name" dataArray={props.cascaderData} />
      <ProductTable
        rowSelection={props.rowSelection}
        columns={props.columns}
        data={props.columnData}
        pagination={{...props.pagination}}
      />
      <Row>
        <Col span={3} push={12}>
          <Model
            form={CreateHSN}
            formData={props.formData}
            title="Create HSN"
            buttonValue="Create"
            onSubmit={props.onCreate}
            handleSubmitOk={props.handleSubmitOk}
          />
        </Col>
      </Row>
    </div>
  )
}

export default HSNTemplate
