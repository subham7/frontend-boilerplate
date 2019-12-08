import React from "react"
import { Tag, Checkbox } from "antd"

const options = [
  { label: 'Card', value: 'card' },
  { label: 'Razorpay', value: 'razorpay' },
  { label: 'Cash', value: 'cash' },
];

var locationColumns = [
  {
    title: "Business Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Payment Modes Accepted",
    key: "payment-mode",
    render: object => {
      return (
        <Checkbox.Group
          defaultValue={object.paymentmodes}
          options={options} 
          onChange={(checkedValues) => object.handleFeatures.handleCheckbox(object.businessID, checkedValues)} 
        />
      )
    }
  }
]

export { locationColumns }
