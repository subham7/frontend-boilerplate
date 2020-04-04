import React from "react"
import Link from "next/link"
import { Row, Col, Card, Button, List } from "antd"
const { Meta } = Card

const myGotoCard = props => {
  const style = {
    social: { height: "20px", width: "auto" },
    btn: { padding: "0" },
    link: { width: "100%", background: "#1E4ED6", color: "#fff" }
  }

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4
      }}
      pagination={{
        onChange: page => {
          console.log(page)
        },
        pageSize: 8
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "80px",
                  width: "100%"
                }}
              ></div>
            }
          >
            <Meta title={item.name} description={item.city} />
            <br />

            <Row>
              <Col xs={6}>
                <Button
                  type="link"
                  style={style.btn}
                  onClick={() =>
                    props.socialSharing(item.pk_business_id, "facebook")
                  }
                >
                  <img
                    src="/static/images/icons/facebook.png"
                    style={style.social}
                  />
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  type="link"
                  style={style.btn}
                  onClick={() =>
                    props.socialSharing(item.pk_business_id, "linkedin")
                  }
                >
                  <img
                    src="/static/images/icons/linkedin.png"
                    style={style.social}
                  />
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  type="link"
                  style={style.btn}
                  onClick={() =>
                    props.socialSharing(item.pk_business_id, "twitter")
                  }
                >
                  <img
                    src="/static/images/icons/twitter.png"
                    style={style.social}
                  />
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  type="link"
                  style={style.btn}
                  onClick={() =>
                    props.socialSharing(item.pk_business_id, "whatsapp")
                  }
                >
                  <img
                    src="/static/images/icons/whatsapp.png"
                    style={style.social}
                  />
                </Button>
              </Col>
            </Row>
            <br />
            <Link
              href={{
                pathname: "business",
                query: { bid: item.pk_business_id }
              }}
            >
              <Button
                style={style.link}
                shape="round"
                // href={`/${item.pk_business_id}`}
              >
                Buy the gift card
              </Button>
            </Link>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default myGotoCard
