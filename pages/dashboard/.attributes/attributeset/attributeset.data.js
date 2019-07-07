import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createAttributeSet from "../../../../src/components/organisms/forms/createAttributeSet"
import AssignAttribute from "../../../../src/components/organisms/forms/assignAttribute"

const attributesetsColumns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Alias",
        dataIndex: "alias",
        key: "alias"
    },
    {
        title: "Assign",
        dataIndex: "",
        key: "assign",
        render: object => {
          // console.log(object.assign.taxCategoryData)
          return (
            <Model
              form={AssignAttribute}
              title="Assign attributes"
              buttonValue="Assign"
              formData={object.assign}
              assignedData={{}}
              onSubmit={(data, cb) =>
                object.assign.handleAssign(data, object.attributesetID, cb)
              }
            />
          )
        }
      },
    {
        title: 'Rename',
        dataIndex: '',
        render: (object) => {
            return (
                <Model 
                    visible 
                    form={createAttributeSet}
                    title="Create Attribute Set"
                    isTableModal
                    prefilledValues={object}
                    onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.attributesetID, cb)}
                />
            )
        }
    },
    {
        title: 'Delete',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.attributesetID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]

export { attributesetsColumns }
