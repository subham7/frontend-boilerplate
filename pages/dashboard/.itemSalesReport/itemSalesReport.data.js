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
    title: "Unit", 
    dataIndex: "unit", 
    key: "unit" 
  },
  {
    title: "Item Sold", 
    dataIndex: "itemSold", 
    key: "itemSold" 
  },
  {
    title: "Gross sales", 
    dataIndex: "grossSales", 
    key: "grossSales" 
  }
]

export const itemSalesReportData = {
  columns
}
