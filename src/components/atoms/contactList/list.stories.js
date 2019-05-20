import React from 'react';
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller';
import { List, message, Avatar, Spin } from 'antd';

const ContactList = (props) => {
    <List
        dataSource={props.data}
        renderItem={item => (
            <List.Item key={item.id}>
                <List.Item.Meta
                    title={<a href='#'>{item.name.last}</a>}
                    description={item.email}
                />
                <div>Content</div>
            </List.Item>
        )}
    >
        {/* {props.loading && this.state.hasMore && (
            <div className="demo-loading-container">
                <Spin />
            </div>
        )} */}
    </List>
}

export default ContactList;