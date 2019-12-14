import React from "react"
import Button from '../../../src/components/atoms/button'
let columns = [
  { title: "Pay Method", dataIndex: "payMethod", key: "payMethod" },
  { title: "Payments", dataIndex: "payments", key: "payments" },
  { title: "Refunds", dataIndex: "refunds", key: "refunds" },
  { title: "Pay Amount", dataIndex: "payAmount", key: "payAmount" },
  { title: "Net Total", dataIndex: "netTotal", key: "key" },
  { title: "Action", dataIndex: "action", key: "action", render: object => <Button style={{ "width": "100%" }} onClick={() => object.loadDataTable2(object.payMethod)} value="Detail" ></Button> }
]

let columns2 = [
  { title: "Date", dataIndex: "datetime", key: "date" },
  { title: "Payment ID", dataIndex: "paymentId", key: "paymentId" },
  { title: "Order ID", dataIndex: "orderId", key: "orderId" },
  { title: "Customer ID", dataIndex: "customerId", key: "customerId" },
  { title: "Amount", dataIndex: "amount", key: "amount" },
  { title: "Pay Method", dataIndex: "payMethod", key: "payMethod" },
  { title: "Status", dataIndex: "status", key: "status" },
  // { title: "Points Used", dataIndex: "pointsUsed", key: "pointsUsed" },
  { title: "Paid to Shop", dataIndex: "paidToShop", key: "paidToShop" },
  // { title: "Payment Fees", dataIndex: "paymentFees", key: "paymentFees" },
  // { title: "Fee Percentage", dataIndex: "feePercentage", key: "feePercentage" }
]
export const paymentReportData = {
  columns,
  columns2
}
