import React from "react"
import { Tag, Checkbox } from "antd"

import stockTag from "../../../src/components/atoms/stockTag"
import ButtonIcon from "../../../src/components/atoms/tableButton"
import Model from "../../../src/components/molecules/modelButton"
import createLocation from "../../../src/components/organisms/forms/createLocation"
import { object } from "prop-types"
// import Cascader from '../src/components/molecules/cascader'
const options = [
  { label: 'Card', value: 'card' },
  { label: 'Razorpay', value: 'razorpay' },
  { label: 'Cash', value: 'cash' },
];
function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}
var locationColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Payment Modes Accepted",
    key: "payment-mode",
    render: object => {
      console.log(object)
      return (
        <Checkbox.Group options={options} onChange={object.handleFeatures.handleCheckbox} />
      )
    }
  }
]

export { locationColumns }
