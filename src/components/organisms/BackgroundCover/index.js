import React from "react";
import Proptypes from "prop-types";

const styles = {
    BackGround: {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width:"50%",
        backgroundColor: "#44f",
    },

    footer: {
        bottom: 0,  
        textAlign: "center",
    }
};

const BackGroundCover = (props) => {
    const { BackGroundColor, opacity , width, top} = props;
    const { BackGround } = styles
    
    styles.BackGround = {
        ...BackGround,
        backgroundColor: BackGroundColor,
        top,
        opacity,
        width
    }
    return ( 
        <div style={props.style}>
            <div style={styles.BackGround}>
                {
                    props.footer? 
                    (
                        <footer style={styles.footer}>
                            {props.footer}
                        </footer>
                    )
                    : null
                }
            </div>

        </div>
    );
};

BackGroundCover.propTypes = {
    leftBackGroundColor: Proptypes.string,
    top: Proptypes.string,
    opacity: Proptypes.number,
    style: Proptypes.object,
    footer: Proptypes.oneOf([Proptypes.node, Proptypes.string])
}

BackGroundCover.defaultProps = {
    top:"0",
    BackGroundColor: "#44f",
    opacity: 1,
    width:"50%",
    style: {},
    footer: ''
}

export default BackGroundCover;