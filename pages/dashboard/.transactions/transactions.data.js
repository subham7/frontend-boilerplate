import React from 'react';
import stockTag from "../../../src/components/atoms/stockTag"
import ButtonIcon from '../../../src/components/atoms/tableButton';
import Modal from '../../../src/components/molecules/modalDetail'

const transactionColumns = [
    {
        title: "Transaction ID",
        dataIndex: "transactionID",
        key: "transactionID"
    },
    {
        title: "Customer Name",
        dataIndex: "customername",
        key: "customername"
    },
    {
        title: "Method",
        dataIndex: "method",
        key: "method",
        render: (method) => <p>{stockTag(method)}</p>
    },
    {
        title: "Transaction Type",
        dataIndex: "type",
        key: "type",
        render: (type) => <p>{stockTag(type)}</p>
    },
    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount",
        render: (amount) => <p>₹{amount}</p>
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
    },
    {
        title: "Time",
        dataIndex: "time",
        key: "time",
    },
    {
        title: "Created By",
        dataIndex: "createdby",
        key: "createdby",
    },
    {
        title: '',
        dataIndex: '',
        key: 'details',
        render: (object) => {
            return (
                <Modal 
                    isTableModal
                    receiptNo={object.receiptID}
                    handleModalClick={object.handleModalClick}
                />
            )
        }
    }
]

export { transactionColumns }
