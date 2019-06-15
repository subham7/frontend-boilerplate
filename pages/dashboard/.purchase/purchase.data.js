import React from "react"
import { Tag } from "antd"
import stockTag from "../../../src/components/atoms/stockTag"
import ButtonIcon from "../../../src/components/atoms/tableButton"
import Cascader from "../../../src/components/molecules/cascader"
import Modal from "./../../../src/components/molecules/modelButton"
import editPurchase from "./../../../src/components/organisms/forms/editPurchase"

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

var itemPurchaseColumns = [
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor"
    // render: object => <p>{object.productsData.vendor}</p>
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
    // align: "center",
    // render: object => <p>{object.productsData.amount}</p>
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
    // render: object => {
    //   return <p>{object.productsData.date}</p>
    // }
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
    // render: object => {
    //   return <p />
    // }
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location"
    // render: locations => <span>{stockTag(locations)}</span>
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "cascaderData",
    render: cascaderData => {
      return (
        <span>
          <Cascader
            placeholder="Actions"
            style={{ width: 120, marginRight: "30px" }}
            optionArray={cascaderData}
          />
          {/* <ButtonIcon
            icon="form"
            shape="circle"
            type="primary"
            size="small"
            ghost
         />*/}
        </span>
      )
    }
  },
  {
    title: "Edit",
    dataIndex: "",
    render: object => {
      console.log(object)
      return (
        <Modal
          visible
          form={editPurchase}
          formData={object.formData}
          title="Edit Purchase"
          isTableModal={true}
          buttonValue="Edit"
          prefilledValues={object.prefilledValues}
          onSubmit={(data, cb) =>
            object.handleFeatures.handleUpdate(data, object.purchaseItemID, cb)
          }
        />
      )
    }
  },
  {
    title: "",
    dataIndex: "",
    render: object => (
      <ButtonIcon
        onSubmit={() =>
          object.handleFeatures.handleDelete(object.purchaseItemID)
        }
        modalTitle="Sure you want to delete ?"
        icon="delete"
        shape="round"
        size="small"
        style={{ backgroundColor: "#F84D65", color: "white" }}
      />
    )
  }
]

const itemPurchaseColumnData = [
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    name: "Test Name",
    quantity: 15,
    mrp: 20,
    price: 16,
    locations: ["BBSR"],
    cascaderData: ["Permission", "Permission", "Permission", "Permission"]
  }
]

export const itemPurchaseData = {
  cascaderData,
  itemPurchaseColumns,
  itemPurchaseColumnData
}
