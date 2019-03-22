import React from 'react';
import Card from "../../molecules/card"
import { Row, Col } from 'antd';

const StockCard =(props) => {
    return (
        <Row type="flex" justify="start" >
            {props.cardData.map((data, index) => (
                <Col  span={6} key={index} >
                    <Card
                        iconType={data.iconType}
                        iconStyle={data.iconStyle}
                        title={data.title}
                        description={data.description}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default StockCard;