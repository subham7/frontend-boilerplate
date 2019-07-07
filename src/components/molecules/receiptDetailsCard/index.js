import React from "react"
import { Card, Icon, Row, Col, Divider } from "antd"

const ReceiptDetailsCard = props => {
  console.log(props.data, "main overlay card")
  const receipts = props.data[0]
  const transaction = props.data[1]
  // console.log(JSON.parse(transaction.transactiontypeunfold).name)
  return (
    <Card style={props.style}>
      <Row>
        <h5>Receipt No. {receipts.receiptID}</h5>
        {transaction ? (<h5>Transaction Id. {transaction.transactionID}</h5>) : <h5/>}
      </Row>
      <Divider dashed />
      {transaction ? (
        <Row>
          <Col span={8}>
            <h3>Transaction Amount: ₹{transaction.amount} </h3>
          </Col>
          <Col span={8}>
            <h3 style={{ textAlign: "center" }}>Payment mode: {JSON.parse(transaction.transactiontypeunfold).name} </h3>
          </Col>
          <Col span={8}>
            <h3 style={{ textAlign: "right" }}>Date: {transaction.date.split('T')[0] + " / " + transaction.date.split('T').pop().substr(0, 8)}</h3>
          </Col>
        </Row>
      ) : (
          <center><h3>No Transactions</h3></center>
        )}
      <Row>
        <Col span={8}>
          <h3>Final amount: ₹{receipts.billData.finalamount}</h3>
        </Col>
        <Col span={8}>
          <h3 style={{ textAlign: "center" }}>Net amount: ₹{receipts.billData.netamount}</h3>
        </Col>
        <Col span={8}>
          <h3 style={{ textAlign: "right" }}>Tax amount: ₹{receipts.billData.taxamount}</h3>
        </Col>
      </Row>
      {receipts.billData.bill.map(item => {
        return (
          <Card style={{marginTop: "4px"}}>
            <Row>
              <Col span={8}>
                <h4>{item.productname}</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "center" }}>Units: {item.units}</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "right" }}>Price: ₹{item.price}</h4>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <h4>Tax Name: {item.taxname}</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "center" }}>Percentage: {item.percentage}%</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "right" }}>Tax Amount: ₹{item.taxAmnt}</h4>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <h4>Pretax: {item.preTax}</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "center" }}>Total Pretax: {item.totalPreTax}%</h4>
              </Col>
              <Col span={8}>
                <h4 style={{ textAlign: "right" }}>Toal Tax: ₹{item.totalTax}</h4>
              </Col>
            </Row>
          </Card>)
      })}

    </Card>
  )
}

export default ReceiptDetailsCard
