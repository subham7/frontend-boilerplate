import React, { Component } from "react"
import NumericInput from "react-numeric-input"
import { Input, InputNumber, Row, Col, Button, Radio } from "antd"

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
        background: "#fff",
        color: "#1E4ED6"
      },
      label: {
        color: "#fff"
      },
      bold: {
        fontWeight: "700"
      }
    }

    return (
      <div style={style.container}>
        <h2 style={style.label}>
          Get your <span style={style.bold}>gift card!</span>
        </h2>
        <label style={style.label}>Full Name *</label>
        <Input
          style={style.field}
          name="name"
          onChange={this.props.handleValue}
        />
        <label style={style.label}>Phone *</label>
        <Input
          style={style.field}
          name="phone"
          onChange={this.props.handleValue}
        />
        <label style={style.label}>Email *</label>
        <Input
          style={style.field}
          name="email"
          onChange={this.props.handleValue}
        />
        <label style={style.label}>Choose Gift Card*</label>
        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          style={style.field}
          onChange={this.props.handleAmount}
        >
          <Radio.Button value="100">₹100</Radio.Button>
          <Radio.Button value="500">₹500</Radio.Button>
          <Radio.Button value="1000">₹1000</Radio.Button>
          <Radio.Button value="1500">₹1500</Radio.Button>
          <Radio.Button value="2500">₹2500</Radio.Button>
          <Radio.Button value="5000">₹5000</Radio.Button>
        </Radio.Group>
        {/* <label>Bronze Card</label>
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
        </Row> */}
        <Button
          style={style.btn}
          onClick={this.props.handlePayment}
          shape="round"
        >
          Pay
        </Button>
      </div>
    )
  }
}

export default myGotoPayment
