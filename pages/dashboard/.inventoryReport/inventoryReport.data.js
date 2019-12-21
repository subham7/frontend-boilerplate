import React from "react"

let columns = [
  { 
    title: "Item Name", 
    dataIndex: "itemName", 
    key: "itemName" 
  },
  { 
    title: "Barcode", 
    dataIndex: "barcode", 
    key: "barcode" 
  },
  {
    title: "Category", 
    dataIndex: "category", 
    key: "category" 
  },
  {
    title: "Current Stock", 
    dataIndex: "currentStock", 
    key: "currentStock" 
  },
  {
    title: "Status", 
    dataIndex: "status", 
    key: "status" 
  },
  {
    title: "Last 7 day sales", 
    dataIndex: "lastSales", 
    key: "lastSales" 
  }
]

export const inventoryReportData = {
  columns
}
