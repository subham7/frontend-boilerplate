import React from 'react';
import Logo  from '../logoWithMsg';

const ElemHeader = ({ logo, title }) => {
  let ElemHeaderStyle = {
    height: "40px",
    backgroundColor: "#030D34",
    paddingTop:"4px",
    paddingLeft:"30px",
    overflow:"hidden",
    fontSize:"12px"
  }

  if(logo==="enabled") {
    return(
      <div style={ElemHeaderStyle}>
        <div style={{"float":"left"}}>
          <Logo color="#CCCCCC" />
        </div>
        <div style={{"textAlign":"center"}}>
          <h1 style={{"color":"#FFFFFF", margin:0}}>{title}</h1>
        </div>
      </div>
    )
  }
  return(
    <div style={ElemHeaderStyle}>
      <div style={{"textAlign":"left", "fontSize":"12px"}}>
        <h1 style={{"color":"#FFFFFF"}}>{title}</h1>
      </div>
    </div>
  )
}
ElemHeader.defaultProps = {
  title:" Test Title"
}

export default ElemHeader;