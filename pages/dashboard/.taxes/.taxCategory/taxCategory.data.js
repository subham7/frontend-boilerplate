import React from 'react';
import stockTag from "../../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../../src/components/atoms/tableButton';
import Model from "../../../../src/components/molecules/modelButton"
import createTaxCategory from "../../../../src/components/organisms/forms/createTaxCategory"

const taxCategoryColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Tax Code",
    dataIndex: "taxCode",
    key: "taxCode"
  },
  {
    title: 'Rename',
    dataIndex: '',
    render: (object) => {
        return (
            <Model visible form={createTaxCategory}
                title="Create Item" 
                isTableModal
                prefilledValues={object}
                onSubmit={(data, cb) => object.handleFeatures.handleUpdate(data, object.taxCode, cb)}
            />
        )
    }
},
{
    title: '',
    dataIndex: '',
    render: (object) => {
        return (
            <ButtonIcon onSubmit={() => object.handleFeatures.handleDelete(object.taxCode)} modalTitle="Sure you want to delete ?" icon="delete" shape="round" size="small" style={{ backgroundColor: '#F84D65', color: 'white' }} />
        )
    }
}
]

const taxCategoryColumnData = [
  {
    name: "Test Name",
    taxCode: "GST1234"
  },
  {
    name: "Test Name",
    taxCode: "GST1234"
  },
  {
    name: "Test Name",
    taxCode: "GST1234"
  }
]

export { taxCategoryColumns, taxCategoryColumnData }
