import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createAttributeSet from "../../../../src/components/organisms/forms/createAttributeSet"

const attributesColumns = [
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
        title: 'Rename',
        dataIndex: '',
        render: (object) => {
            return (
                <Model 
                    visible 
                    form={createAttributeSet}
                    title="Create Attributes"
                    isTableModal
                    prefilledValues={object}
                    onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.attributeID, cb)}
                />
            )
        }
    },
    {
        title: 'Delete',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.attributeID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]

export { attributesColumns }
