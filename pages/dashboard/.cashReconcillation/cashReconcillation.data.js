import React from "react"
import Model from "./../../../src/components/molecules/modelButton"
import cashReconSubmit from "./../../../src/components/organisms/forms/cashReconSubmit"
import { Button } from "antd"

let dummyData = [
  {
    key: 1,
    staffId: "48c3ea31-2af5-4327-b286-96d313e40855",
    locationId: "658bbcd2-be59-44c1-b867-0176290000ae",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf",
    action: {name:"Start Day"}
  },
  {
    key: 2,
    staffId: "asdf345erer34",
    locationId: "658bbcd2-be59-44c1-b867-0176290000ae",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf",
    action: {name:"Start Day"}
  },
  {
    key: 3,
    staffId: "asdf345fger34",
    locationId: "658bbcd2-be59-44c1-b867-0176290000df",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf",
    action: {name:"Start Day"}
  }
]

let columns = [
  { title: "Staff ID", dataIndex: "user", key: "staffId" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Location", dataIndex: "location", key: "location" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Cash Collected", dataIndex: "cashCollected", key: "cashCollected" },
  { title: "Cash Submitted", dataIndex: "cashSubmitted", key: "cashSubmitted" },
  { title: "Start Date", dataIndex: "date", key: "date" },
  { title: "Difference", dataIndex: "difference", key: "difference" },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  {
    title: "Collected Cash",
    dataIndex: "refresh",
    key: "refresh",
    render: object => {
      return (
        <Button type="primary" onClick={() => object.onRefresh()}>Refresh</Button>
      )
    }
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: object => {
      let x = {status:true}
      return (
        <Model
          form={cashReconSubmit}
          buttonValue={object.name}
          onSubmit={(data, x) => object.onSubmit(data)}
        />
      )
    }
  },
  // {
  //   title: "Reason",
  //   dataIndex: "",
  //   key: "reason",
  //   render: object => {
  //     return (
  //       <Model form={cashReconSubmit} buttonValue="Submit" onSubit={() => {}} />
  //     )
  //   }
  // }
]

export const cashReconData = {
  columns,
  dummyData
}
