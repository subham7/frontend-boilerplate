import React from "react"
import BackGroundCover from "../../organisms/BackgroundCover"
import ElementHeader from "../../molecules/elementHeader"
import BusinessDetails from "../../organisms/forms/busniessDetails"
import styles from './styles.js';

const Login = (props) => {
    return (
        <div>
            <div className="heading">
            <ElementHeader logo="enabled" title="Business Details" />
            </div>
            <div className="background">      
                <BackGroundCover width="100%" top="40px"/>
                <div className="content">
                    <BusinessDetails/>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Login