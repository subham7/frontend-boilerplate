import React from "react"
import { Tag } from "antd"
// import stockTag from "../src/components/atoms/stockTag"
import ButtonIcon from "../../../src/components/atoms/tableButton"
import Cascader from "../../../src/components/molecules/cascader"
import AssignItem from "../../../src/components/organisms/forms/assignItem"
import Model from "../../../src/components/molecules/modelButton"
import createCategory from "../../../src/components/organisms/forms/addEmploy"

var discountColumns = [
  {
    title: "Discount Code",
    dataIndex: "code",
    key: "code"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Min Purchase Amount",
    dataIndex: "minAmnt",
    key: "minAmnt"
  },
//   {
//     title: "Assign",
//     dataIndex: "assign",
//     key: "assign",
//     render: assign => (
//       <Model
//         form={AssignItem}
//         title="Assign Items"
//         buttonValue="Assign"
//         onSubmit={assign.onCreate}
//         formData={assign}
//       />
//     )
//   },
  // {
  //   title: "Permissions",
  //   dataIndex: "permissions",
  //   key: "permissions",
  //   render: permissions => (
  //     <Cascader style={{ width: 120 }} optionArray={permissions} />
  //   )
  // },
  // {
  //   title: "Store Role",
  //   dataIndex: "role",
  //   key: "role",
  //   render: role => <Tag color="green">{role}</Tag>
  // },
  {
    title: "Rename",
    dataIndex: "",
    render: object => {
      return (
        <Model
          visible
          form={createCategory}
          title="Create Item"
          isTableModal={true}
          buttonValue="Create"
          prefilledValues={object.prefilledValues}
          onSubmit={(data, cb) =>
            object.handleFeatures.handleUpdate(data, object.userID, cb)
          }
        />
      )
    }
  },
  {
    title: "",
    dataIndex: "",
    render: object => {
      return (
        <ButtonIcon
          onSubmit={() => object.handleFeatures.handleDelete(object.userID)}
          modalTitle="Sure you want to delete ?"
          icon="delete"
          shape="round"
          size="small"
          style={{ backgroundColor: "#F84D65", color: "white" }}
        />
      )
    }
  }
]

const discountColumnData = [
  {
    code: "TAKE100",
    type: "cash",
    amount: "100 INR",
    minAmnt: "2000 INR"
  },
  {
    code: "20%OFF",
    type: "%",
    amount: "20%",
    minAmnt: "99 INR"
  },
]

export { discountColumns, discountColumnData }
