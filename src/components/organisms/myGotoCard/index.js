import React from "react"
import { Row, Col, Card, Button } from "antd"
const { Meta } = Card

const myGotoCard = props => {
  const style = {
    social: { height: "20px", width: "auto" },
    btn: { padding: "0" }
  }

  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <div
          style={{
            backgroundImage: `url(${props.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "200px",
            width: "100%"
          }}
        ></div>
      }
    >
      <Meta title={props.title} description={props.city} />
      <br />
      <Row>
        <Col xs={6}>
          <Button
            type="link"
            style={style.btn}
            onClick={() => props.socialSharing(props.bId, "facebook")}
          >
            <img src="/static/images/icons/facebook.png" style={style.social} />
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            type="link"
            style={style.btn}
            onClick={() => props.socialSharing(props.bId, "linkedin")}
          >
            <img src="/static/images/icons/linkedin.png" style={style.social} />
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            type="link"
            style={style.btn}
            onClick={() => props.socialSharing(props.bId, "twitter")}
          >
            <img src="/static/images/icons/twitter.png" style={style.social} />
          </Button>
        </Col>
        <Col xs={6}>
          <Button
            type="link"
            style={style.btn}
            onClick={() => props.socialSharing(props.bId, "whatsapp")}
          >
            <img src="/static/images/icons/whatsapp.png" style={style.social} />
          </Button>
        </Col>
      </Row>
      <br />
      <Button href={`/mygoto/${props.bId}`}>BUY THE GIFT CARD</Button>
    </Card>
  )
}

export default myGotoCard
