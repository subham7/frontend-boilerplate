import React, { Component } from "react"
import { withRouter } from "next/router"
import { connect } from "react-redux"
import {
  getMyGotoBusinessById,
  createPaymentMyGoto
} from "../../src/reduxHelper"

import { Row, Col, Card, notification } from "antd"
import Loader from "../../src/components/atoms/loading"
import CsrTemplate from "../../src/components/templates/csrTemplate"
import MyGotoPayment from "../../src/components/organisms/forms/myGotoPayment"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {},
      cart: [],
      totalAmount: 0
    }
  }

  componentDidMount() {
    this.props.getMyGotoBusinessById(this.props.router.query.id)

    let aScript = document.createElement("script")
    aScript.type = "text/javascript"
    aScript.src = "https://checkout.razorpay.com/v1/checkout.js"

    document.head.appendChild(aScript)
  }

  handlePayment = () => {
    let formData = this.state.formData
    let amount = this.state.totalAmount
    let businessId = this.props.router.query.id
    let cart = this.state.cart
    let paymentFunc = this.props.createPaymentMyGoto
    let options = {
      key: "rzp_live_MlgUcfBEMLoLme",
      amount: amount * 100,
      currency: "INR",
      name: "MyGoto",
      description: "Pay for your gift card.",
      payment_capture: "1",
      image:
        "https://file-upload-123.s3.ap-south-1.amazonaws.com/brandImages/1585596282121-mygoto.jpeg",
      prefill: {
        name: formData.name,
        email: formData.email
      },
      notes: {
        address: "Hello World"
      },
      theme: {
        color: "#1E4ED6"
      },
      handler: function(response) {
        let data = {
          ...formData,
          amount: amount,
          fk_business_id: businessId,
          pk_payment_id: response.razorpay_payment_id,
          cart: cart
        }
        paymentFunc(data)
          .then(res => {
            notification["success"]({
              message: "Success",
              description:
                "The gift cards has been sent to your email and mobile number, please check in spam if not received"
            })
          })
          .catch(err => {
            notification["error"]({
              message: "Error",
              description: "Some problem occured. Please try again."
            })
          })
      }
    }

    let rzp = new window.Razorpay(options)
    rzp.open()
  }

  handleValue = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ formData: { ...this.state.formData, ...obj } })
  }

  handleAmount = e => {
    let totalAmount = 0
    let cart = this.state.cart

    // Check if amount already exist
    cart.map((item, index) => {
      if (item.amount === e.target.name) cart.splice(index, 1)
    })

    // Check if value is null
    if (e.target.value != "") {
      cart.push({
        amount: e.target.name,
        quantity: e.target.value
      })
      this.setState({
        cart: cart
      })
    }

    this.state.cart.map(item => {
      totalAmount = totalAmount + item.amount * item.quantity
    })
    this.setState({ totalAmount: totalAmount })
  }

  render() {
    if (this.props.myGotoBusinessById.isLoaded)
      return (
        <CsrTemplate
          diplaySearch={false}
          diplayBusinessDetails={true}
          // background={`url(${this.props.myGotoBusinessById.response.data.data.image})`}
          background={`url(${this.props.myGotoBusinessById.response.data.data.image})`}
          displayFilter={false}
          businessName={this.props.myGotoBusinessById.response.data.data.name}
        >
          <Row>
            <Col sm={16}>
              <Row gutter={[16, 16]}>
                <Col xs={8}>
                  <h3>Locality</h3>
                  <p>
                    {this.props.myGotoBusinessById.response.data.data.locality}
                  </p>
                </Col>
                <Col xs={8}>
                  <h3>City</h3>
                  <p>{this.props.myGotoBusinessById.response.data.data.city}</p>
                </Col>
                <Col xs={8}>
                  <h3>State</h3>
                  <p>
                    {this.props.myGotoBusinessById.response.data.data.state}
                  </p>
                </Col>
              </Row>
              <br />
              <h3>About</h3>
              <p>
                {this.props.myGotoBusinessById.response.data.data.description}
              </p>
              <br />
              <h3>Address</h3>
              <p>{this.props.myGotoBusinessById.response.data.data.address}</p>
            </Col>
            <Col sm={8}>
              <Card hoverable style={{ width: "100%" }}>
                <MyGotoPayment
                  amount={this.state.totalAmount}
                  handleAmount={this.handleAmount}
                  handlePayment={this.handlePayment}
                  handleValue={this.handleValue}
                />
              </Card>
            </Col>
          </Row>
          {/* Business {this.props.router.query.id} */}

          <br />
          <br />
          {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
        </CsrTemplate>
      )
    else return <Loader />
  }
}

const mapStateToProps = state => ({
  myGotoBusinessById: state.getMyGotoBusinessById
})

const mapDispatchToProps = dispatch => ({
  getMyGotoBusinessById: bId => dispatch(getMyGotoBusinessById.action(bId)),
  createPaymentMyGoto: data => dispatch(createPaymentMyGoto.action(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
