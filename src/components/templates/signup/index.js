import React from "react"
import BackGroundCover from "../../organisms/BackgroundCover"
import SignupForm from "../../organisms/forms/signUp"
import LogoHeading from "../../molecules/logoHeading"
import styles from './styles.js';

const Login = (props) => {
    return (
        <div>
            <div className="leftSide">
            <BackGroundCover BackGroundColor="#44f" width="50%"/>
            </div>
            <div className= "rightSide">
                <div className= "header">
                <LogoHeading text="Create your account!" />
                </div>
                <div className= "content">
                    <SignupForm getFormData={props.getFormData}/>
                </div>
                <div className= "footer">
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}

export default Login