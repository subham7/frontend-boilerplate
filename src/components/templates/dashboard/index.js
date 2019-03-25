import React from "react"
import ElementHeader from "../../molecules/elementHeader"
import Sidebar from "../../organisms/sidePanel"

import styles from './styles.js';



const Dashboard = (props) => {

    return (
        <div>
            <div className="header">
                <ElementHeader logo="enabled" title="Business Details" />
            </div>
            <div className="sidebar">
                <Sidebar selected={props.sidebarTab}/>    
            </div>
            <div className="content">
                {props.children}
            </div>
    
        <style jsx>{styles}</style>
        </div>
       
    )
}



export default Dashboard