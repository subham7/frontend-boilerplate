import React from "react"
import { Table } from "antd"

const PaymentReportTable = props => {
  return (
    <Table
      columns={props.columns}
      dataSource={props.dataSource}
      rowSelection={props.rowSelection}
      pagination={{ ...props.pagination }}
    />
  )
}

export default PaymentReportTable
