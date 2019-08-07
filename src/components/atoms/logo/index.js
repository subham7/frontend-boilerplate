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
    },
    logo: {
        width: "40%"
    }
}


const Logo = (props) => (
    // <Title style={styles[props.type]} level={2}>
    //     FINITO
    // </Title>
    <React.Fragment>
        <img style={styles.logo} src="/static/images/icons/LogoMainNormal.png" />
    </React.Fragment>
)
Logo.propTypes = {
    type: Proptypes.oneOf(["inverted", "normal"]),
}

Logo.defaultProps = {
    type: "normal"
}

export default Logo