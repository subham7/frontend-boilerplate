import React from "react"
import { Tag } from "antd"
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from "../../../../src/components/atoms/tableButton"
import Cascader from "../../../../src/components/molecules/cascader"
import Model from "../../../../src/components/molecules/modelButton"
import createHsn from "../../../../src/components/organisms/forms/createTaxCategory"
import AssignItem from "../../../../src/components/organisms/forms/assignHsn"

var hsnColumns = [
  {
    title: "HSN Code",
    dataIndex: "name"
  },
  // {
  //     title: 'HSN Code',
  //     dataIndex: 'hsnCode',
  // },
  // {
  //   title: "Assign",
  //   dataIndex: "",
  //   key: "assign",
  //   render: object => {
  //     // console.log(object.assign.taxCategoryData)
  //     return (
  //       <Model
  //         form={AssignItem}
  //         title="Assign Items"
  //         buttonValue="Assign"
  //         formData={object.assign}
  //         assignedData={{}}
  //         onSubmit={(data, cb) =>
  //           object.assign.handleAssign(data, object.hsnCode, cb)
  //         }
  //       />
  //     )
  //   }
  // },
  {
    title: "Edit",
    key: "edit",
    dataIndex: "",
    render: object => {
      return (
        <span>
          <Model
            visible
            form={createHsn}
            prefilledValues={object}
            title="Edit HSN"
            isTableModal
            onSubmit={(data, cb) =>
              object.handleFeatures.handleEdit(data, object.hsnCode, cb)
            }
          />
        </span>
      )
    }
  },
  {
    title: "",
    dataIndex: "",
    render: object => {
      return (
        <span>
          <Cascader
            placeholder="Actions"
            style={{ width: 120, marginRight: "30px" }}
            optionArray={object.cascaderData}
          />
          <ButtonIcon
            onSubmit={() => object.handleFeatures.handleDelete(object.hsnCode)}
            modalTitle="Sure you want to delete ?"
            icon="delete"
            shape="round"
            size="small"
            style={{ backgroundColor: "#F84D65", color: "white" }}
          />
        </span>
      )
    }
  }
]

export { hsnColumns }