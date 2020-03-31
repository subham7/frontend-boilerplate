import React, { Component } from "react"
import { Row, Col, Card, Button } from "antd"
const { Meta } = Card

import CsrTemplate from "../../src/components/templates/csrTemplate"

class App extends Component {
  render() {
    const style = {
      social: { height: "20px", width: "auto" },
      btn: { padding: "0" }
    }

    return (
      <CsrTemplate>
        <Row>
          <Col xl={6} sm={12}>
            <div style={{ padding: "10px" }}>
              <Card
                hoverable
                style={{ width: "100%" }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta title="Europe Street beat" description="Delhi" />
                <br />
                <div></div>
                {/* <Row>
                  <Col xs={6}>
                    <Button type="link" style={style.btn}>
                      <img
                        src="/static/images/icons/facebook.png"
                        style={style.social}
                      />
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="link" style={style.btn}>
                      <img
                        src="/static/images/icons/linkedin.png"
                        style={style.social}
                      />
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="link" style={style.btn}>
                      <img
                        src="/static/images/icons/twitter.png"
                        style={style.social}
                      />
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="link" style={style.btn}>
                      <img
                        src="/static/images/icons/whatsapp.png"
                        style={style.social}
                      />
                    </Button>
                  </Col>
                </Row> */}
                {/* <a href="https://wa.me/?text=urlencodedtext">Share this</a> */}
                {/* <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  class="twitter-share-button"
                  data-show-count="false"
                >
                  Tweet
                </a> */}
              </Card>
            </div>
          </Col>
        </Row>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </CsrTemplate>
    )
  }
}

export default App
