import React from "react"
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from "../../../../src/components/atoms/tableButton"
import Model from "../../../../src/components/molecules/modelButton"
import createProduct from "../../../../src/components/organisms/forms/createItem"
import AssignItem from "../../../../src/components/organisms/forms/assignHsn"

var cardData = [
  {
    iconType: "bank",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#F88998" },
    title: "25",
    description: "Items Out of Stock"
  },
  {
    iconType: "shopping-cart",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#FFB353" },
    title: "25",
    description: "Items Out of Stock"
  },
  {
    iconType: "rise",
    iconStyle: { fontSize: "30px", marginTop: "30%", color: "#69E4A6" },
    title: "25",
    description: "Items Out of Stock"
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

var productColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "CODE",
    dataIndex: "code",
    key: "code"
  },
  {
    title: "BARCODE",
    dataIndex: "barcode",
    key: "barcode"
  },
  // {
  //     title: 'CATEGORY',
  //     dataIndex: '',
  //     render: object => {
  //         var categoryIndex = object.selectData.findIndex(id => id.value == object.category)
  //         return <p>{stockTag(object.selectData[categoryIndex].name)}</p>
  //     }
  // },
  // {
  //     title: 'LOCATION',
  //     dataIndex: 'location',
  //     key: 'location'
  // },
  // {
  //     title: 'INVENTORY',
  //     dataIndex: 'inventory',
  //     key: 'inventory',
  //     render: inventory => (<span>{stockTag(inventory)}</span>)
  // },
  {
    title: "PRICE",
    key: "price",
    dataIndex: "price",
    render: price => (
      <span>
        <b>INR {price}</b>
      </span>
    )
  },
  {
    title: "Assign Tax",
    dataIndex: "",
    key: "assign",
    render: object => {
      // console.log(object.assign.taxCategoryData)
      return (
        <Model
          form={AssignItem}
          title="Assign Tax"
          buttonValue="Assign"
          formData={object.assign}
          assignedData={{}}
          onSubmit={(data, cb) =>
            object.assign.handleAssign(data, object.productID, cb)
          }
        />
      )
    }
  },
  {
    title: "Rename",
    dataIndex: "",
    render: object => {
      return (
        <Model
          visible
          form={createProduct}
          prefilledValues={object.prefilledValues}
          formData={object.selectData}
          title="Edit Product"
          isTableModal={true}
          buttonValue="Create"
          onSubmit={(data, cb) =>
            object.handleFeatures.editProduct(data, object.productID, cb)
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
          onSubmit={() => object.handleFeatures.handleDelete(object)}
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

const productColumnData = [
  {
    product: "Parle G",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [20],
    price: 10
  },
  {
    product: "Hide & Seek",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [200],
    price: 30
  },
  {
    product: "Parle G",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [2],
    price: 10
  },
  {
    product: "Parle G",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [20],
    price: 10
  },
  {
    product: "Hide & Seek",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [200],
    price: 30
  },
  {
    product: "Parle G",
    code: "1X2X3X4X5",
    category: "Biscuits",
    location: "BBSR",
    inventory: [2],
    price: 10
  }
]

export const itemData = {
  cardData,
  cascaderData,
  productColumns,
  productColumnData
}
