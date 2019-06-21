import React from "react"
import { Tag } from "antd"
import stockTag from "../src/components/atoms/stockTag"
import ButtonIcon from "../src/components/atoms/tableButton"
import Cascader from "../src/components/molecules/cascader"

const taxCategoryColumns = [
  {
    title: "Name",
    dataIndex: "name"
  },
  {
    title: "Tax Code",
    dataIndex: "taxCode"
  }
]

const taxCategoryColumnData = [
  {
    name: "Test Name",
    taxCode: "GST1234"
  },
  {
    name: "Test Name",
    taxCode: "GST1234"
  },
  {
    name: "Test Name",
    taxCode: "GST1234"
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

export const taxCategoryData = {
  taxCategoryColumns,
  taxCategoryColumnData,
  cascaderData
}
