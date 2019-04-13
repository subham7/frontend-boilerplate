import React from "react"
import { Tag } from "antd"
// import stockTag from "../src/components/atoms/stockTag"
import ButtonIcon from "../../../src/components/atoms/tableButton"
import Cascader from "../../../src/components/molecules/cascader"
import AssignItem from "../../../src/components/organisms/forms/assignItem"
import Model from "../../../src/components/molecules/modelButton"


var employeeColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "EmployeeID",
    dataIndex: "userName",
    key: "userName"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone"
  },
  {
      title: 'Assign',
      dataIndex: 'assign',
      key: 'assign',
      render: (assign) => <Model form={AssignItem} title="Assign Items" buttonValue="Assign" onSubmit={assign.onCreate} />
  },
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
    title: "Edit",
    key: "edit",
    dataIndex: "edit",
    render: code => {
      return (
        <span>
          <ButtonIcon
            style={{ marginRight: "30px" }}
            icon="form"
            shape="circle"
            type="primary"
            size="small"
            ghost
          />
          <ButtonIcon
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

const employeeColumnData = [
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  },
  {
    product: "Test Name",
    employee: "1*2*3*4*5",
    role: "Admin",
    permissions: ["Permission", "Permission", "Permission", "Permission"]
  }
]

export { employeeColumns, employeeColumnData }
