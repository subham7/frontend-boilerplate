import React, { Component } from "react"
import { withRouter } from "next/router"
import { connect } from "react-redux"
import {
  getMyGotoBusinessById,
  createPaymentMyGoto
} from "../../src/reduxHelper"
import { validatePayment } from "./validate"
import wrapper from "../wrapper"
import { Row, Col, Card, notification, message, Button } from "antd"
import { tw, whatsapp, linkedin, fbButton } from "vanilla-sharing"
import Loader from "../../src/components/atoms/loading"
import CsrTemplate from "../../src/components/templates/csrTemplate"
import MyGotoPayment from "../../src/components/organisms/forms/myGotoPayment"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {},
      cart: [],
      totalAmount: 0,
      discountedPrice: 0,
      disc: 0
    }
  }

  componentDidMount() {
    this.props.getMyGotoBusinessById(this.props.router.query.bid)

    let aScript = document.createElement("script")
    aScript.type = "text/javascript"
    aScript.src = "https://checkout.razorpay.com/v1/checkout.js"

    document.head.appendChild(aScript)
  }

  handlePayment = () => {
    let formData = this.state.formData
    let amount = this.state.discountedPrice
    let businessId = this.props.router.query.bid
    let cart = this.state.cart
    let paymentFunc = this.props.createPaymentMyGoto
    let data = {
      ...formData,
      amount: amount,
      fk_business_id: businessId,
      //pk_payment_id: response.razorpay_payment_id,
      cart: cart
    }

    validatePayment(data)
      .then(validate => {
        if (validate === "validate") {
          let options = {
            key: "rzp_live_MlgUcfBEMLoLme",
            // key: "rzp_test_IWXggiN4CqBvCo",
            amount: amount * 100,
            currency: "INR",
            name: "MyGoto",
            description: "Pay for your gift card.",
            payment_capture: "1",
            image:
              "https://file-upload-123.s3.ap-south-1.amazonaws.com/brandImages/1585596282121-mygoto.jpeg",
            prefill: {
              name: formData.name,
              email: formData.email,
              contact: formData.phone
            },
            notes: {
              address: "Hello World"
            },
            theme: {
              color: "#1E4ED6"
            },
            handler: function(response) {
              data["pk_payment_id"] = response.razorpay_payment_id
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
      })
      .catch(err => {
        message.error("" + err)
        //this.setState({ apiRequestLoading: false })
      })
  }

  handleValue = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ formData: { ...this.state.formData, ...obj } })
  }

  handleGiftCard = amount => {
    let cart = this.state.cart
    cart.push({
      amount: amount.target.value,
      quantity: 1
    })
    this.setState({ cart: cart })
    this.setState({ totalAmount: amount.target.value })
    let discount = this.props.myGotoBusinessById.response.data.data.discount

    let discountAmount = amount.target.value * (discount / 100)

    this.setState({ discountedPrice: amount.target.value - discountAmount })
    this.setState({
      disc: this.props.myGotoBusinessById.response.data.data.discount
    })
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

  socialSharing = (bId, name, type) => {
    const msg = `We know that you love ${name}? Be their #SuperCustomer! Buy MyGoto vouchers of your favorite brands today at BIG discounts and redeem once they reopen. Let's #WinTogether`

    switch (type) {
      case "twitter":
        tw({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: msg,
          hashtags: ["mygoto"]
        })
        break

      case "whatsapp":
        whatsapp({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: msg
        })
        break
      case "linkedin":
        linkedin({
          url: `https://mygoto.in/business?bid=${bId}`,
          title: "MyGoto",
          description: msg
        })
      case "facebook":
        fbButton({
          url: `https://mygoto.in/business?bid=${bId}`
        })
    }
  }

  render() {
    const style = {
      social: { height: "28px", width: "auto" },
      btn: { paddingLeft: "0", paddingRight: "20px" },
      container: { padding: "20px" },
      shareText: { color: "#1E4ED6" },
      discount: {
        display: "inline",
        background: "#1E4ED6",
        padding: "10px 20px",
        color: "#fff",
        fontWeight: "700",
        fontSize: "1.2em"
      },
      discountImg: { width: "20px", height: "auto", marginRight: "5px" }
    }

    if (this.props.myGotoBusinessById.isLoaded)
      return (
        <CsrTemplate
          diplaySearch={false}
          diplayBusinessDetails={true}
          // background={`url(${this.props.myGotoBusinessById.response.data.data.image})`}
          background={`url(${this.props.myGotoBusinessById.response.data.data.image})`}
          displayFilter={false}
          businessName={this.props.myGotoBusinessById.response.data.data.name}
          isBusinessPage={true}
          location={`${this.props.myGotoBusinessById.response.data.data.city}, ${this.props.myGotoBusinessById.response.data.data.state}`}
        >
          <Row>
            <Col sm={16}>
              <div style={style.container}>
                {this.props.myGotoBusinessById.response.data.data.discount >
                0 ? (
                  <div>
                    <div style={style.discount}>
                      <img
                        src="/static/icons/ico.png"
                        style={style.discountImg}
                      />
                      {"   "}
                      {
                        this.props.myGotoBusinessById.response.data.data
                          .discount
                      }
                      % discount on all the gift cards.
                    </div>
                    <br /> <br />
                  </div>
                ) : null}

                <div>
                  <h3 style={style.shareText}>Let your friends know</h3>
                  <Button
                    type="link"
                    style={style.btn}
                    onClick={() =>
                      this.socialSharing(
                        this.props.myGotoBusinessById.response.data.data
                          .pk_business_id,
                        this.props.myGotoBusinessById.response.data.data.name,
                        "facebook"
                      )
                    }
                  >
                    <img
                      src="/static/images/icons/facebook.png"
                      style={style.social}
                    />
                  </Button>

                  <Button
                    type="link"
                    style={style.btn}
                    onClick={() =>
                      this.socialSharing(
                        this.props.myGotoBusinessById.response.data.data
                          .pk_business_id,
                        this.props.myGotoBusinessById.response.data.data.name,
                        "linkedin"
                      )
                    }
                  >
                    <img
                      src="/static/images/icons/linkedin.png"
                      style={style.social}
                    />
                  </Button>

                  <Button
                    type="link"
                    style={style.btn}
                    onClick={() =>
                      this.socialSharing(
                        this.props.myGotoBusinessById.response.data.data
                          .pk_business_id,
                        this.props.myGotoBusinessById.response.data.data.name,
                        "twitter"
                      )
                    }
                  >
                    <img
                      src="/static/images/icons/twitter.png"
                      style={style.social}
                    />
                  </Button>

                  <Button
                    type="link"
                    style={style.btn}
                    onClick={() =>
                      this.socialSharing(
                        this.props.myGotoBusinessById.response.data.data
                          .pk_business_id,
                        this.props.myGotoBusinessById.response.data.data.name,
                        "whatsapp"
                      )
                    }
                  >
                    <img
                      src="/static/images/icons/whatsapp.png"
                      style={style.social}
                    />
                  </Button>
                </div>
                <br />
                <p>
                  {this.props.myGotoBusinessById.response.data.data.description}
                </p>
                <p>
                  {this.props.myGotoBusinessById.response.data.data.address}
                </p>
              </div>
            </Col>
            <Col sm={8}>
              <div
                style={{
                  width: "100%",
                  background: "#1E4ED6",
                  minHeight: "calc(100vh - 305px)",
                  padding: "20px"
                }}
              >
                <MyGotoPayment
                  amount={this.state.discountedPrice}
                  disc={this.state.disc}
                  handleAmount={this.handleGiftCard}
                  handlePayment={this.handlePayment}
                  handleValue={this.handleValue}
                />
              </div>
            </Col>
          </Row>
          {/* Business {this.props.router.query.id} */}

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

export default wrapper(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
)
