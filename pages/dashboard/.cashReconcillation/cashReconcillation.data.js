import React from "react"
import Model from "./../../../src/components/molecules/modelButton"
import cashReconSubmit from "./../../../src/components/organisms/forms/cashReconSubmit"
import cashReconSubmit2 from "./../../../src/components/organisms/forms/cashReconSubmit2"
import { Button } from "antd"
import moment, { localeData } from 'moment';

const dateFormat = "YYYY/MM/DD"

// date : moment().format(dateFormat),

let columns = (date) => {
  // console.log("date :" , date)
  // console.log("today :" , moment().format(dateFormat))
  let isToday = date == moment().format(dateFormat) ? true : false;
  return [
    // { title: "Staff ID", dataIndex: "user", key: "staffId" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Location", dataIndex: "locationName", key: "location" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Start cash", dataIndex: "startCash", key: "startCash" },
    { title: "Cash Collected", dataIndex: "cashCollected", key: "cashCollected" },
    { title: "Cash Submitted", dataIndex: "cashSubmitted", key: "cashSubmitted" },
    { title: "Difference", dataIndex: "difference", key: "difference" },
    { title: "Remarks", dataIndex: "reason", key: "reason" }, 
    {
      title: "Allocate",
      dataIndex: "action2",
      key: "action2",
      render: object => {
        let x = {status:false}
        if (isToday) { 
        return (
          <Model
            form={cashReconSubmit2}
            buttonValue={object.name}
            onSubmit={(data, x) => object.onSubmit(data)}
          />
        )
        } else { 
          return  <Button type="primary" disabled> Float </Button>
        } 
      }
    },
    {
      title: "Collect",
      dataIndex: "action",
      key: "action",
      render: object => {
        let x = {status:false}
        if (isToday) { 
          return (
            <Model
            form={cashReconSubmit}
            buttonValue={object.name}
            onSubmit={(data, x) => object.onSubmit(data)}
            />
          )
          } else { 
            return  <Button type="primary" disabled> Submit </Button>
          }
      }
    },
    {
      title: "Refresh",
      dataIndex: "refresh",
      key: "refresh",
      render: object => {
        return (
          <Button type="primary" onClick={() => object.onRefresh()}>Refresh</Button>
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
}
 
export const cashReconData = {
  columns
}
