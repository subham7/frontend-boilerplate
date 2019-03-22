import React from "react"
import BackGroundCover from "../../organisms/BackgroundCover"
import LoginForm from "../../organisms/forms/login"
import LogoHeading from "../../molecules/logoHeading"
import styles from './styles.js';

const Login = (props) => {
    return (
        <div>
            <div className="leftSide">
                <BackGroundCover/>
            </div>
            <div className= "rightSide">
                <div className= "header">
                <LogoHeading text="Welcome back! Please login to your account." />
                </div>
                <div className= "content">
                    <LoginForm/>
                </div>
                <div className= "footer">
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Login