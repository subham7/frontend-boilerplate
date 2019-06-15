import React from "react"
import { Button, Row, Col, Card } from "antd"

const ContainerStyle = {
  // overflow: "auto",
  padding: "0px 10px"
  // height: "82vh"
}

const ReviewList = props => {
  return (
    <div style={ContainerStyle}>
      {props.data.map(item => (
        <Card style={{ width: "100%", marginBottom: "10px" }}>
          <Row type="flex" gutter={4}>
            <Col span={24}>
              <h4>{item.vendor}</h4>
            </Col>
            <Col span={8}>
              <p>
                Amount
                <br />
                <strong>{item.amount}</strong>
              </p>
            </Col>
            <Col span={8}>
              <p>
                Location <br />
                <strong>{JSON.parse(item.locationunfold).name}</strong>
              </p>
            </Col>
            <Col span={8}>
              <p>
                Date <br />
                <strong>{item.date}</strong>
              </p>
            </Col>
            <Col span={24}>
              <p>{item.description}</p>
            </Col>
            <Col span={24}>
              <Button onClick={_ => props.actions(item.purchaseID)}>
                View Items
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  )
}

export default ReviewList
