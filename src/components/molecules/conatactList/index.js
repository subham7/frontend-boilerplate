import React from 'react';
import PropTypes from "prop-types";
// import InfiniteScroll from 'react-infinite-scroller';
import { List, message, Avatar, Spin, Button } from 'antd';




const ContactList = (props) => {
    let ContainerStyle = {
        border: '2px solid #e8e8e8',
        borderRadius: "4px",
        overflow: "auto",
        height: "600px",
    }

    const myFunction = (userID) => {
        props.onClick(userID)
    }
    return (
        <div style={ContainerStyle} >
            <List 
                bordered 
                header={props.heading}
                dataSource={props.data}
                renderItem={(item, k) => (
                    //{/* <div onClick={() => myFunction()}> */}
                    <List.Item key={k}>
                        <List.Item.Meta
                            title={<a onClick={() => myFunction(item.userID)}>{item.firstName+ " " + item.LastName}</a>}
                        //{/* description={<a href='#'>{item.description}</a>} */}
                        />
                        <div style={{ color: '#3B86FF' }} >{item.userID.slice(0, 8)}</div>
                    </List.Item>
                    //{/* </div> */}
                )}
            >
            </List>
        </div>

    )
}

export default ContactList;