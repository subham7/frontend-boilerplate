import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag";
import ButtonIcon from "../../../../src/components/atoms/tableButton"
import ButtonOne from "../../../../src/components/atoms/button"
import Model from "../../../../src/components/molecules/modelButton"
import AssignProduct from "../../../../src/components/organisms/forms/assignMproduct"
import AssignMitem from "../../../../src/components/organisms/forms/assignMitem"
import createModifier from "../../../../src/components/organisms/forms/createModifier"

var cascaderData = {
    placeholder: 'All Categories',
    optionArray: ['Biscuits', 'Chips', 'Drinks', 'Fries', 'Breads']
}

var productColumns = [
    {
        title: 'SET NAME',
        dataIndex: 'name',
        key: 'product'
    },
    {
        title: "Assign Products",
        dataIndex: "",
        key: "assignProduct",
        render: object => {
            // console.log(object.assign.taxCategoryData)
            return (
                <Model
                    form={AssignProduct}
                    title="Assign Products"
                    buttonValue="Assign Products"
                    formData={object.assignProduct}
                    assignedData={{}}
                    onSubmit={(data, cb) =>
                        object.assignProduct.handleAssignProduct(data, object.modifierID, cb)
                    }
                />
            )
        }
    },
    {
        title: "Assign Modifier Item",
        dataIndex: "",
        key: "assignmitems",
        render: object => {
            // console.log(object.assign.taxCategoryData)
            return (
                <Model
                    form={AssignMitem}
                    title="Assign Modifier Items"
                    buttonValue="Assign MItems"
                    formData={object.assignMitem}
                    assignedData={{}}
                    onSubmit={(data, cb) =>
                        object.assignMitem.handleAssignMitem(data, object.modifierID, cb)
                    }
                />
            )
        }
    },
    {
        title: 'allowMultiple',
        dataIndex: 'allowMultiple',
        key: "allowMultiple",
    },
    {
        title:'Edit',
        key: 'edit',
        dataIndex: '',
        render: (object) => {
            return (
            <span>
            <Model 
                visible form={createModifier}
                prefilledValues = {object}
                formData={object.selectData}
                title="Edit Modifier" 
                isTableModal
                onSubmit={(data, cb) => object.handleFeatures.handleEdit(data, object.modifierID, cb)}
            />
            </span>
            )
        }
    },
    {
        title:'',
        dataIndex: '',
        render: (object) => {
            return (
            <span>
            <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.modifierID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{backgroundColor: '#F84D65', color: 'white'}} />
            </span>
            )
        }
    }
]

export const itemData = {
    cascaderData, productColumns,
}