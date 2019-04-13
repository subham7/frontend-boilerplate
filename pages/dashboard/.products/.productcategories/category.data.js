import React from "react"
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from "../../../../src/components/atoms/tableButton"
import Model from "../../../../src/components/molecules/modelButton"
import AssignItem from "../../../../src/components/organisms/forms/assignItem"

var cardData = [
  {
    iconType: "bank",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#F88998" },
    title: "25",
    description: "Items Out of Stock"
  },
  {
    iconType: "shopping-cart",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#FFB353" },
    title: "25",
    description: "Items Out of Stock"
  },
  {
    iconType: "rise",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#69E4A6" },
    title: "25",
    description: "Items Out of Stock"
  }
]
var cascaderData = [
  {
    placeholder: "All Categories",
    optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"]
    // style: { width: 162 }
  },
  {
    placeholder: "All Inventory",
    optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"]
    // style: { width: 162 }
  },
  {
    placeholder: "All Stores",
    optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"]
    // style: { width: 162 }
  },
  {
    placeholder: "All Actions",
    optionArray: ["Biscuits", "Chips", "Drinks", "Fries", "Breads"]
    // style: { width: 162 }
  }
]

var categoryColumns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Inventory",
    dataIndex: "inventory",
    render: inventory => <span>{stockTag(inventory)}</span>
  },
  {
    title: "Assign",
    dataIndex: "assign",
    render: () => (
      <Model form={<AssignItem />} title="Assign Items" buttonValue="Assign" />
    )
  },
  {
    title: "Rename",
    dataIndex: "rename",
    render: () => (
      <ButtonIcon
        icon="form"
        style={{ marginRight: "30px" }}
        shape="circle"
        type="primary"
        size="small"
        ghost
      />
    )
  },
  {
    title: "",
    dataIndex: "",
    render: () => (
      <ButtonIcon
        icon="delete"
        shape="round"
        size="small"
        style={{ backgroundColor: "#F84D65", color: "white" }}
      />
    )
  }
]

const categoryColumnData = [
  {
    name: "Test Name",
    inventory: [30]
  },
  {
    name: "Test Name",
    inventory: [250]
  },
  {
    name: "Test Name",
    inventory: [5]
  },
  {
    name: "Test Name",
    inventory: [30]
  },
  {
    name: "Test Name",
    inventory: [250]
  },
  {
    name: "Test Name",
    inventory: [5]
  }
]

export const categoryData = {
  categoryColumns,
  categoryColumnData,
  cardData,
  cascaderData
}
