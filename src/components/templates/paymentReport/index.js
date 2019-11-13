import React from "react"
import PaymentReportTable from "./../../organisms/paymentReportTable"
import CascaderAndSearch from "./../../organisms/cascaderAndSearch"
import { DatePicker } from "antd"

const { RangePicker } = DatePicker
const dateFormat = "YYYY/MM/DD"

const PaymentReport = props => {
  return (
    <div>
      <CascaderAndSearch
        dataArray={props.cascaderData}
        buttonValue="Quick Upload"
        onSearch={props.onSearch}
        placeholder="Search Name"
        applyFilter={props.applyFilter}
      />
      <br />
      <RangePicker format={dateFormat} onChange={props.handleDateChange} />
      <br />
      <br />
      <PaymentReportTable
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={{ ...props.pagination }}
      />
    </div>
  )
}

export default PaymentReport
