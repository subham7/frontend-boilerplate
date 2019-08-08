import * as React from 'react'
import Proptypes from 'prop-types'

import { Typography } from 'antd'
import Logo from "../../atoms/logo"


const { Text } = Typography

const styles = {
    centerText: {
        textAlign: "center",
        // marginBottom: "10px"
    },
    displayBlock: {
        display:"block",
        marginTop: "-10px"
    }

}

const LogoHeading = (props) => (
    <div style={{...styles.centerText, ...props.style}}>
        <Logo type={props.logoType}/>
        <br/><br/>
        <Text style={styles.displayBlock} type={props.textType}>{props.text}</Text>
    </div>
)

LogoHeading.propTypes = {
    textType: Proptypes.string,
    text: Proptypes.string.isRequired,
    logoType: Proptypes.oneOf(['inverted', "normal"]),
    style: Proptypes.object
}

LogoHeading.defaultProps = {
    textType: 'secondary',
    logoType: 'normal',
    style: {}
}

export default LogoHeading