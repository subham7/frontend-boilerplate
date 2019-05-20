import React from 'react';
import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroller';
import { List, message, Avatar, Spin } from 'antd';

const ContactList = (props) => {
    let ContainerStyle = {
        border: '2px solid #e8e8e8',
        borderRadius: "4px",
        overflow: "auto",
        padding: "8px 24px",
        height: "600px",
    }
    return (
        <div style={ContainerStyle} >
            <List
                header={props.heading}
                dataSource={props.data}
                renderItem={(item, k) => (
                    <List.Item key={k}>
                        <List.Item.Meta
                            title={<a href='#'>{item.title}</a>}
                            description={<a href='#'>{item.description}</a>}
                        />
                        <div style={{ color: '#3B86FF' }} >{props.customerId}</div>
                    </List.Item>
                )}
            >
            </List>
        </div>

    )
}

export default ContactList;