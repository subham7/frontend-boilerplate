import React from "react"
import { Card, Row, Col } from "antd"

const ReviewItems = props => {
  console.log(props)
  return (
    <Card
      style={{ width: "100%", marginBottom: "10px" }}
      title="Purchased Items"
    >
      {props.itemsData.isLoaded ? (
        <div>
          {props.itemsData.response.data.length != 0 ? (
            <div>
              {props.itemsData.response.data.map(item => (
                <div>
                  <Row type="flex" gutter={4}>
                    <Col span={24}>
                      <strong>{JSON.parse(item.productunfold).name}</strong>
                    </Col>
                    <Col span={12}>
                      Cost Price <br /> <strong>{item.cp}</strong>
                    </Col>
                    <Col span={12}>
                      MRP
                      <br /> <strong>{item.mrp}</strong>
                    </Col>
                  </Row>
                  <hr />
                </div>
              ))}
            </div>
          ) : (
            <h3>No Data</h3>
          )}
        </div>
      ) : (
        <h3>Select an Item</h3>
      )}
    </Card>
  )
}

export default ReviewItems
