import React from "react"
import Model from "./../../../src/components/molecules/modelButton"
import cashReconSubmit from "./../../../src/components/organisms/forms/cashReconSubmit"

let dummyData = [
  {
    key: 1,
    staffId: "asdf34545er34",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf"
  },
  {
    key: 2,
    staffId: "asdf345erer34",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf"
  },
  {
    key: 3,
    staffId: "asdf345fger34",
    name: "test",
    location: "loca",
    phone: "1234567890",
    cashCollected: "1243",
    cashSubmitted: "234",
    difference: "23",
    reason: "asdfasdf"
  }
]

let columns = [
  { title: "Staff ID", dataIndex: "staffId", key: "staffId" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Location", dataIndex: "location", key: "location" },
  { title: "Phone", dataIndex: "phone", key: "phone" },
  { title: "Cash Collected", dataIndex: "cashCollected", key: "cashCollected" },
  { title: "Cash Submitted", dataIndex: "cashSubmitted", key: "cashSubmitted" },
  { title: "Difference", dataIndex: "difference", key: "difference" },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  {
    title: "Cash Submitted",
    dataIndex: "",
    key: "enterCashSubmitted",
    render: object => {
      return (
        <Model
          form={cashReconSubmit}
          buttonValue="Enter Cash"
          onSubit={() => {}}
        />
      )
    }
  },
  {
    title: "Reason",
    dataIndex: "",
    key: "reason",
    render: object => {
      return (
        <Model form={cashReconSubmit} buttonValue="Submit" onSubit={() => {}} />
      )
    }
  }
]

export const cashReconData = {
  columns,
  dummyData
}