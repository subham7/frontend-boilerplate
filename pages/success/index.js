import React, { Component } from "react"
import Media from "react-media"
import { Row, Col, Button } from "antd"
import wrapper from "../wrapper"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      container: { padding: "50px 20px", textAlign: "center" },
      img: { height: "60vh", width: "auto", marginBottom: "20px" },
      successImg: {
        height: "20px",
        width: "auto",
        marginRight: "6px",
        position: "relative",
        top: "2px",
      },
      imgPhone: { height: "auto", width: "100%", marginBottom: "20px" },
      paymenttext: {
        textAlign: "center",
        fontSize: "1.2em",
        fontWeight: "700",
        color: "#54C50B",
        margin: "0",
      },
      text: {
        textAlign: "center",
        color: "#1E4ED6",
        fontSize: "1.2em",
        marginBottom: "1px",
      },
      bold: {
        fontWeight: "700",
      },
      paymentTextCont: {
        textAlign: "center",
        marginBottom: "30px",
      },
      placeBtn: {
        background: "#1E4ED6",
        color: "#fff",
        marginTop: "15px",
      },
    }

    return (
      <div style={style.container}>
        <div style={style.paymentTextCont}>
          <p style={style.paymenttext}>
            <img src="/static/icons/success.png" style={style.successImg} />
            Payment Successful
          </p>
        </div>

        <Media
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 600px)",
          }}
        >
          {(matches) => (
            <img
              src="/static/images/GiftCard.png"
              style={matches.small ? style.imgPhone : style.img}
            />
          )}
        </Media>

        <p style={style.text}>
          Thank you for supporting your Go-to places during tough times.
        </p>
        <p style={style.text}>
          You stepped up so we can all{" "}
          <span style={style.bold}>#WinTogether!</span>
        </p>
        <Button style={style.placeBtn} shape="round" size="large" href="/">
          Go to Home
        </Button>
      </div>
    )
  }
}

export default wrapper(App)
