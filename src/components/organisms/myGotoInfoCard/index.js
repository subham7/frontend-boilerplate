import React from "react"
import Media from "react-media"
import { Row, Col, Card } from "antd"

const myGotoInfoCard = props => {
  const style = {
    infoHeading: {
      fontSize: "3em",
      color: "#1E4ED6"
    },
    textBlue: {
      color: "#1E4ED6",
      fontSize: "1.2em"
    },
    imageLg: {
      height: "300px",
      width: "auto"
    },
    imageSm: {
      height: "auto",
      width: "100%"
    }
  }

  return (
    <Card hoverable style={{ width: "100%", marginTop: "80px" }}>
      <Row gutter={[16, 16]}>
        <Col xl={12}>
          <Media
            queries={{
              small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 600px)"
            }}
          >
            {matches => (
              <div>
                {matches.small && (
                  <img src="/static/images/Graph.png" style={style.imageSm} />
                )}
                {matches.large && (
                  <img src="/static/images/Graph.png" style={style.imageLg} />
                )}
              </div>
            )}
          </Media>
        </Col>
        <Col xl={12}>
          <h1 style={style.infoHeading}>Our mission</h1>
          <p style={style.textBlue}>
            Gift cards help businesses of today "flatten the curve" of lost
            income from COVID-19.
          </p>

          <p style={style.textBlue}>
            Extended lockdown can kill a business, also resulting in loss of
            many jobs.
          </p>

          <p>
            Businesses have tons of fixed costs: rent, labour, loan repayments,
            insurance, supplies, repairs - the list goes on. Even many
            successful ones have razor-thin margins of 3-5%, and a third have
            struggled to pay their employees at least once. We're aiming at
            improving cash-flow for these businesses so they don't die and at
            the same time protect their employees.
          </p>
        </Col>
      </Row>
    </Card>
  )
}

export default myGotoInfoCard
