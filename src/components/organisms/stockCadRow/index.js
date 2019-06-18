import React from 'react';
import Card from "../../molecules/card"
import { Row, Col } from 'antd';

const StockCard =(props) => {
    return (
        <Row type="flex" justify="start" >
                <Col  span={6} >
                    <Card
                        iconType="bank"
                        iconStyle={{ fontSize: "30px", marginTop: "30%", color: "#F88998" }}
                        title={props.cardData.outofstock ? props.cardData.outofstock : "Loading..."}
                        description="Items out of stock"
                    />
                </Col>
                <Col  span={6} >
                    <Card
                        iconType="shopping-cart"
                        iconStyle={{ fontSize: "30px", marginTop: "30%", color: "#FFB353" }}
                        title={props.cardData.alertstock ? props.cardData.alertstock : "Loading..."}
                        description="Items on Low Stock Alert"
                    />
                </Col>
                <Col  span={6} >
                    <Card
                        iconType="rise"
                        iconStyle={{ fontSize: "30px", marginTop: "30%", color: "#69E4A6" }}
                        title={props.cardData.instock ? props.cardData.instock : "Loading..."}
                        description="Items in stock"
                    />
                </Col>
        </Row>
    )
}

export default StockCard;