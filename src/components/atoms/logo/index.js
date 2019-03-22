import React from 'react';
import Proptypes from 'prop-types';
import { Typography } from 'antd';


const { Title } = Typography;

const styles = {
    inverted: {
        background: "black",
        color: "#ddd",
        display: "inline-block",
    },
    normal: {
        background: "white",
        color: "black",
        display: "inline-block",
    }
}


const Logo = (props) => (
    <Title style={styles[props.type]} level={2}>
        SKIP
    </Title>
)
Logo.propTypes = {
    type: Proptypes.oneOf(["inverted", "normal"]),
}

Logo.defaultProps = {
    type: "normal"
}

export default Logo