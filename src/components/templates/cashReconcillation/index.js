import React from "react"
import CashReconTable from "./../../organisms/cashReconTable"
import CascaderAndSearch from "./../../organisms/cascaderAndSearch"

let CashReconcillation = props => (
  <div>
    <CascaderAndSearch
      dataArray={props.cascaderData}
      buttonValue="Quick Upload"
      onSearch={props.onSearch}
      placeholder="Search Name"
    />
    <CashReconTable
      columns={props.columns}
      data={props.columnData}
      pagination={{ ...props.pagination }}
    />
  </div>
)

export default CashReconcillation
