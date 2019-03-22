import React from "react"
import BackGroundCover from "../../organisms/BackgroundCover"
import ElementHeader from "../../molecules/elementHeader"
import MasterData from "../../organisms/masterData"
import styles from './styles.js';

const Login = (props) => {
    return (
        <div>
            <div className="heading">
            <ElementHeader logo="enabled" title="Business Details" />
            </div>
            <div className="background">      
                <BackGroundCover width="100%" top="50px"/>
                <div className="content">
                    <MasterData/>
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Login