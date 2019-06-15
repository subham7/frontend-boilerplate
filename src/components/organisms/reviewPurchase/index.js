import React, { Component } from "react"
import ReviewList from "./../../molecules/reviewList"
import ReviewItems from "./../../molecules/reviewItems"
import { Col, Row } from "antd"

class reviewPurchase extends Component {
  render() {
    console.log(this.props.itemsData)
    return (
      <Row type="flex" gutter={4}>
        <Col span={10}>
          <ReviewList
            heading={this.props.heading}
            data={this.props.data}
            actions={this.props.actions}
          />
        </Col>
        <Col span={14}>
          <ReviewItems itemsData={this.props.itemsData} />
        </Col>
      </Row>
    )
  }
}

export default reviewPurchase
