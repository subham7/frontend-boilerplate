import React from 'react';
import PropTypes from "prop-types";
import {Spin} from 'antd'

const Loading=(props)=>{
    return(
        <Spin size={props.size} spinning={props.spinning} />
    )
}

Loading.defaultProps = {
    spinning: false
}

export default Loading;