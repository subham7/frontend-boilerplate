import React, { Component } from "react"
import NumericInput from "react-numeric-input"
import { Input, InputNumber, Row, Col, Button } from "antd"

class myGotoPayment extends Component {
  render() {
    const style = {
      container: { width: "100%" },
      field: {
        marginBottom: "15px",
        width: "100%"
      },
      numberField: {
        height: "25px",
        width: "100%"
      },
      amount: {
        color: "#1E4ED6",
        marginLeft: "8px"
      },
      btn: {
        color: "#fff",
        background: "#1E4ED6"
      }
    }

    return (
      <div style={style.container}>
        <label>Full Name</label>
        <Input
          style={style.field}
          name="name"
          onChange={this.props.handleValue}
        />
        <label>Phone</label>
        <Input
          style={style.field}
          name="phone"
          onChange={this.props.handleValue}
        />
        <label>Email</label>
        <Input
          style={style.field}
          name="email"
          onChange={this.props.handleValue}
        />
        <label>Bronze Card</label>
        <Row>
          <Col xs={18}>
            <Input
              type="number"
              style={style.field}
              name="50"
              onChange={this.props.handleAmount}
            />
          </Col>
          <Col xs={6}>
            <h3 style={style.amount}>x ₹50</h3>
          </Col>
        </Row>
        <label>Silver Card</label>
        <Row>
          <Col xs={18}>
            <Input
              type="number"
              style={style.field}
              name="100"
              onChange={this.props.handleAmount}
            />
          </Col>
          <Col xs={6}>
            <h3 style={style.amount}>x ₹100</h3>
          </Col>
        </Row>
        <label>Gold Card</label>
        <Row>
          <Col xs={18}>
            <Input
              type="number"
              style={style.field}
              name="500"
              onChange={this.props.handleAmount}
            />
          </Col>
          <Col xs={6}>
            <h3 style={style.amount}> x ₹500</h3>
          </Col>
        </Row>
        <label>Platinum Card</label>
        <Row>
          <Col xs={18}>
            <Input
              type="number"
              style={style.field}
              name="1000"
              onChange={this.props.handleAmount}
            />
          </Col>
          <Col xs={6}>
            <h3 style={style.amount}>x ₹1000</h3>
          </Col>
          {/* <Col xs={5}>
            <h3 style={style.amount}>₹500</h3>
          </Col> */}
        </Row>
        <Button style={style.btn} onClick={this.props.handlePayment}>
          Pay ₹{this.props.amount}
        </Button>
      </div>
    )
  }
}

export default myGotoPayment
