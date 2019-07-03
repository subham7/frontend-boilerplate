import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createAttributeValue from "../../../../src/components/organisms/forms/createAttributeValue"
import attributes from '../attributes';

const attributeValueColumns = [
    {
        title: "Attribute",
        dataIndex: "",
        key: "attribute",
        render: (object) => {
            var attribute = object.selectData.findIndex(id => id.value == object.attribute)
            return <p>{object.selectData[attribute].name}</p>
        }
    },
    {
        title: "Value",
        dataIndex: "value",
        key: "value"
    },
    {
        title: 'Rename',
        dataIndex: '',
        render: (object) => {
            return (
                <Model 
                    visible 
                    form={createAttributeValue}
                    formData={object.selectData}
                    title="Create Attributes Value"
                    isTableModal
                    prefilledValues={object}
                    onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.attributevalueID, cb)}
                />
            )
        }
    },
    {
        title: 'Delete',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.attributevalueID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]

export { attributeValueColumns }
