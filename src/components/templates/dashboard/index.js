import React from "react"
import ElementHeader from "../../molecules/elementHeader"
import Sidebar from "../../organisms/sidePanel"

import styles from "./styles.js"
 
const Dashboard = props => {
  return (
    <div className="dashboard">
      <div className="header">
        <ElementHeader logo="enabled" title="Business Details" />
      </div>
      <div className="content-wrapper">
        <div className="sidebar">
          <Sidebar user={props.user} />
        </div>
        <div className="content">{props.children}</div>
      </div>

      <style jsx>{styles}</style>
    </div>
  )
}

export default Dashboard
