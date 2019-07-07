import React from "react"
import PropTypes from "prop-types"
import ButtonIcon from "../../atoms/tableButton/"
import ReceiptCard from "../../molecules/ReceiptCard"
import Cascader from "../../molecules/cascader"
import Modal from "../../molecules/modalDetail"
import { Row, Col, Divider, Card } from "antd"

const ContactDeatil = props => {
  // console.log(props.customerData[0])
  return (
    <Card
      style={{ backgroundColor: "#F1F1F3", height: "74.6vh", overflow: "auto" }}
    >
      <Row>
        <Col span={14}>
          <h2>
            {props.customerData[0].firstName + " " + props.customerData[0].LastName}
          </h2>
          <h3 style={{ color: "#2699FB" }}>{props.customerData[0].email}</h3>
          <h3 style={{ color: "#2699FB" }}>{props.customerData[0].phone}</h3>
        </Col>
        <Col span={2} offset={4}>
          <ButtonIcon icon="form" shape="square" type="primary" />
        </Col>
        <Col span={4}>
          <Cascader optionArray={props.actionData} placeholder="Action" />
        </Col>
      </Row>
      <h3>ACTIVITY</h3>
      <hr />
      <Row>
        <Col>
          <h4 style={{ color: "#2699FB" }}>{props.date}</h4>
        </Col>
      </Row>
      <Row>
        {Object.keys(props.receiptCardData).length !== 0 ? (
          props.receiptCardData.map(data => {
            return (
              <div>
                <h4>{data.time}</h4>
                {/* <div onClick={() => props.handleModalClick(data.receiptID)}> */}
                <Modal
                  receiptCard={
                    <ReceiptCard iconType="stock" price={data.amount} receiptNo={data.receiptID.slice(0, 8)} />
                  }
                  receiptNo={data.receiptID}
                  receiptDetails={props.receiptDetails}
                  handleModalClick={props.handleModalClick}
                />
                {/* </div> */}
              </div>
            )
          })
        ) : (
            <h1>No Receipt Data</h1>
          )}
      </Row>
    </Card>
  )
}

export default ContactDeatil
