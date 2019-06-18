import React from "react"
import { Switch, Row, Col } from "antd"

const style = {
  container: {
    paddingBottom: "6px"
  },
  switchContainer: {
    textAlign: "right"
  }
}

const app = props => (
  <div style={style.container}>
    <Row gutter={4} type="flex">
      <Col span={14}>
        <h3>{props.role.charAt(0).toUpperCase() + props.role.slice(1)}</h3>
      </Col>
      <Col span={10}>
        <div style={style.switchContainer}>
          <Switch
            defaultChecked={props.defaultChecked}
            onChange={props.onChange}
          />
        </div>
      </Col>
    </Row>
  </div>
)

export default app
