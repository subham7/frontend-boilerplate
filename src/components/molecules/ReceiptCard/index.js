import React from 'react';
import { Card, Icon, Row, Col } from 'antd';

const ReceiptCard = props => {
    return(
    <Card style = {props.style} >
        <Row>
            <Col span={2}>
                <Icon type={props.iconType} style={props.iconStyle} />
            </Col>
            <Col span={16} >
                <h2 style={{ color: '#2699FB' }} >Receipt No. {props.receiptNo}</h2>
            </Col>
            <Col offset={22}>
                <h2>₹{props.price}</h2>
            </Col>
        </Row>
    </Card>
    )
}

ReceiptCard.defaultProps = {
    style: { width: '100%' },
    loading: false,
    iconStyle: {fontSize: "30px", color: '#2699FB'},
    size: 'small'
}

export default ReceiptCard;