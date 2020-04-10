import React from "react"
import Media from "react-media"
import { Row, Col, Button } from "antd"

const homeBanner = (props) => {
  const style = {
    container: { padding: "20px 50px" },
    img: { height: "auto", width: "100%" },
    bannerh1: {
      color: "#1E4ED6",
      fontSize: "3em",
      marginBottom: 0,
      lineHeight: "50px",
    },
    content: {
      paddingTop: "50px",
      paddingRight: "100px",
    },
    contentPhone: {
      paddingTop: "50px",
    },
    textBlue: {
      color: "#1E4ED6",
      fontSize: "1.2em",
      marginBottom: 0,
    },
    placeBtn: {
      background: "#1E4ED6",
      color: "#fff",
    },
    bold: {
      fontWeight: "700",
    },
  }

  return (
    <div style={style.container}>
      <Row gutter={[16, 16]}>
        <Col sm={16}>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 600px)",
            }}
          >
            {(matches) => (
              <div style={matches.small ? style.contentPhone : style.content}>
                <h1 style={style.bannerh1}>
                  Love your <br /> favourite{" "}
                  <span style={style.bold}>Go-to</span> places?
                </h1>
                <br />
                <p style={style.textBlue}>
                  Buy MyGoto vouchers now and be a{" "}
                  <span style={style.bold}>#SuperCustomer</span> for them.
                </p>
                <br />
                <p style={style.textBlue}>
                  Even though we can't leave home, we can still support our
                  favourite go-to places by buying MyGoto vouchers at{" "}
                  <span style={style.bold}>BIG</span> discounts and redeem once
                  they reopen! Times are tough, but we can{" "}
                  <span style={style.bold}>#WinTogether</span>
                </p>
                <br />
                <Button
                  style={style.placeBtn}
                  shape="round"
                  size="large"
                  href="/create"
                >
                  Add a Place
                </Button>
              </div>
            )}
          </Media>
        </Col>
        <Col sm={8}>
          <img src="/static/images/Illustration.png" style={style.img} />
        </Col>
      </Row>
    </div>
  )
}

export default homeBanner
