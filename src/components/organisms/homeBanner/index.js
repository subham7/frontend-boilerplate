import React from "react"
import Media from "react-media"
import { Row, Col } from "antd"

const homeBanner = props => {
  const style = {
    container: { padding: "20px 50px" },
    img: { height: "auto", width: "100%" },
    bannerh1: {
      color: "#1E4ED6",
      fontSize: "3em",
      marginBottom: 0,
      lineHeight: "40px"
    },
    content: {
      paddingTop: "50px",
      paddingRight: "100px"
    },
    contentPhone: {
      paddingTop: "50px"
    },
    textBlue: {
      color: "#1E4ED6",
      fontSize: "1.2em"
    }
  }

  return (
    <div style={style.container}>
      <Row gutter={[16, 16]}>
        <Col sm={16}>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 600px)"
            }}
          >
            {matches => (
              <div style={matches.small ? style.contentPhone : style.content}>
                <h1 style={style.bannerh1}>
                  Support your <br /> favourite Go-to places!
                </h1>
                <br />
                <p style={style.textBlue}>
                  Buy gift cards now and "flatten the curve" for them.
                </p>
                <br />
                <p style={style.textBlue}>
                  Even though we can't leave home, we can still support local
                  business by buying gift cards. Times are definitely tough
                  during the lockdown, but together we win!
                </p>
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
