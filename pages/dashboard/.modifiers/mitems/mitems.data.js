import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createMitem from "../../../../src/components/organisms/forms/addMitem"

const mitemsColumns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price"
    },
    {
        title: 'Rename',
        dataIndex: '',
        render: (object) => {
            return (
                <Model 
                    visible 
                    form={createMitem}
                    title="Create Item"
                    isTableModal
                    prefilledValues={object}
                    onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.mitemID, cb)}
                />
            )
        }
    },
    {
        title: 'Delete',
        dataIndex: '',
        render: (object) => {
            return (
                <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.mitemID)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
            )
        }
    }
]

export { mitemsColumns }
