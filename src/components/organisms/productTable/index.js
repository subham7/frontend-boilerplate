import React from "react"
import { Table } from "antd"

const ProductTable = props => {
  return (
    <Table
      columns={props.columns}
      dataSource={props.data}
      rowSelection={props.rowSelection}
    />
  )
}

export default ProductTable
